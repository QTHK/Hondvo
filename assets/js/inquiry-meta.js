/* ═══════════════════════════════════════════════════════════════════════════
   询盘分类元数据（inquiry-meta.js）· 2026-10-05
   ───────────────────────────────────────────────────────────────────────────
   作用：为三处询盘提交（联系表单 / 产品询盘弹窗 / 邮件订阅）提供**语言无关**
   的分类字段与来源追踪字段，使 Web3Forms 通知邮件与落地表格可以直接按列
   筛选、统计、导入 CRM。字段定义见《HONDVO询盘表格字段设计》。

   两条不可违背的设计约束：
   1. 分类值一律取自 HTML 中已存在的 data-lang-key（页面元素的语言无关标识），
      绝不上报本地化后的可见文本 —— 否则同一业务类型在 8 种语言下会落成
      8 个互不相同的字符串，聚合统计直接失效。
   2. 字段名 = 表格列名，一一对应（提交什么，表格就存什么）。

   本文件不产生任何可见 UI，不涉及 i18n 文案。
   导出：window.HONDVO_meta
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* 询盘业务类型：#ct-type 选中项的 data-lang-key → 稳定值 */
  var INQUIRY_MAP = {
    ct_type_1: 'medical_parts',   /* 医疗器械注塑件 */
    ct_type_2: 'mold_making',     /* 精密模具制造 */
    ct_type_3: 'one_stop',        /* 模具 + 注塑一站式 */
    ct_type_4: 'other'            /* 其他咨询 */
  };

  /* 产品线：弹窗标题 .modal-title 的 data-lang-key → 稳定值 */
  var PRODUCT_LINE_MAP = {
    pc_mold_title: 'mold',
    pc_product_title: 'finished_parts',
    pc_oem_title: 'oem'
  };

  /* 产品弹窗 radio 组的 name → 表格列名 */
  var RADIO_MAP = {
    'oem-drawing': 'drawing_status'
  };

  var SCHEMA_VERSION = 1;

  /* 正文拼接时排除的保留字段（这些不是业务内容） */
  var SKIP_IN_BODY = { access_key: 1, botcheck: 1, replyto: 1, subject: 1 };

  function safeGet(fn, fallback) {
    try {
      var v = fn();
      return (v === undefined || v === null) ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }

  function currentLang() {
    return safeGet(function () {
      return sessionStorage.getItem('hondvo_lang') || 'en';
    }, 'en') || 'en';
  }

  function uuid() {
    return safeGet(function () {
      if (window.crypto && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
      throw new Error('randomUUID unavailable');
    }, null) || (String(Date.now()) + '-' + Math.random().toString(36).slice(2, 10));
  }

  /* 来源页：去掉目录与 .html 扩展名，得到稳定短名（index / products / mold …） */
  function sourcePage() {
    var p = (location.pathname || '/').split('/').pop() || '';
    p = p.replace(/\.html?$/i, '');
    return p || 'index';
  }

  function referrerHost() {
    return safeGet(function () {
      return document.referrer ? (new URL(document.referrer).host || '') : '';
    }, '');
  }

  function utm(name) {
    return safeGet(function () {
      return new URLSearchParams(location.search).get(name) || '';
    }, '');
  }

  /* 环境与来源追踪字段（每次提交现取，不缓存） */
  function envMeta() {
    return {
      schema_version: SCHEMA_VERSION,
      submission_id: uuid(),
      site_lang: currentLang(),
      client_locale: safeGet(function () { return navigator.language || ''; }, ''),
      client_tz: safeGet(function () {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      }, ''),
      source_page: sourcePage(),
      source_anchor: (location.hash || '').replace(/^#/, ''),
      referrer_host: referrerHost(),
      utm_source: utm('utm_source'),
      utm_medium: utm('utm_medium'),
      utm_campaign: utm('utm_campaign'),
      submitted_at: new Date().toISOString()
    };
  }

  /* 联系表单：由 #ct-type 选中项解析出语言无关的 inquiry_type */
  function inquiryType(selectEl) {
    return safeGet(function () {
      var opt = selectEl.options[selectEl.selectedIndex];
      var key = opt && opt.getAttribute('data-lang-key');
      return INQUIRY_MAP[key] || 'unspecified';
    }, 'unspecified') || 'unspecified';
  }

  /* 产品弹窗：由 .modal-title 的 data-lang-key 解析出语言无关的 product_line */
  function productLine(modalEl) {
    return safeGet(function () {
      var t = modalEl.querySelector('.modal-title');
      var key = t && t.getAttribute('data-lang-key');
      return PRODUCT_LINE_MAP[key] || 'unknown';
    }, 'unknown') || 'unknown';
  }

  /* 邮件主题：人类可读，且可被邮件客户端过滤规则正则解析
     格式：[HONDVO/{form_type}/{分类}] {公司或姓名}
     正则：^\[HONDVO/(contact|product_modal|newsletter)/([a-z_\-]+)\] (.*)$ */
  function subject(formType, segment, who) {
    return '[HONDVO/' + formType + '/' + (segment || '-') + '] ' + (who || 'Unknown');
  }

  /* 把提交载荷拼成纯文本正文（供 mailto 降级复用），保留字段除外 */
  function bodyText(payload) {
    var lines = [];
    for (var k in payload) {
      if (!Object.prototype.hasOwnProperty.call(payload, k)) continue;
      if (SKIP_IN_BODY[k]) continue;
      var v = payload[k];
      if (v === undefined || v === null || v === '') continue;
      lines.push(k + ': ' + v);
    }
    return lines.join('\n');
  }

  /* 中转端点（未配置则返回空串，表格链路自动停用） */
  function intakeEndpoint() {
    return safeGet(function () {
      return (window.HONDVO_INTAKE_ENDPOINT || '').trim();
    }, '');
  }

  /* ── 表格链路：把同一条载荷送进自建中转，与 Web3Forms 邮件链路**并行** ──
     · 剔除 access_key / botcheck / replyto 等保留字段，中转侧只收业务数据。
     · Content-Type 用 text/plain 规避 CORS 预检（GAS Web App 不支持 OPTIONS）。
     · 返回 Promise<boolean>，但**调用方不得据此判断提交成败**：
       GAS 场景下浏览器读不到响应会 reject，而数据其实已写入表格。
       因此表格链路失败绝不阻塞用户，也不影响邮件链路的成功提示。 */
  function pushToSheet(payload) {
    var url = intakeEndpoint();
    if (!url) return Promise.resolve(false);
    var row = {};
    for (var k in payload) {
      if (!Object.prototype.hasOwnProperty.call(payload, k)) continue;
      if (k === 'access_key' || k === 'botcheck' || k === 'replyto') continue;
      row[k] = payload[k];
    }
    try {
      return fetch(url, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(row)
      }).then(function (r) { return !!r.ok; }).catch(function () { return false; });
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  window.HONDVO_meta = {
    SCHEMA_VERSION: SCHEMA_VERSION,
    INQUIRY_MAP: INQUIRY_MAP,
    PRODUCT_LINE_MAP: PRODUCT_LINE_MAP,
    RADIO_MAP: RADIO_MAP,
    currentLang: currentLang,
    envMeta: envMeta,
    inquiryType: inquiryType,
    productLine: productLine,
    subject: subject,
    bodyText: bodyText,
    intakeEndpoint: intakeEndpoint,
    pushToSheet: pushToSheet
  };
})();
