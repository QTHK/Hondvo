/* ============================================================
   HONDVO API 客户端（P1 拆分 · 接口契约层）
   ------------------------------------------------------------
   契约依据：docs/api-contract.md v1.0（7 主接口 + /faqs /jobs /links
             /downloads /downloads/{id}/download）
   基址策略（唯一出口）：window.HONDVO_API > <meta name="hondvo-api"> > 同源 /api
             本文件是全站唯一的基址解析点；其它模块一律只读 window.HONDVO_API。
   职责：
     - 统一维护 API 基址与全部端点
     - 提供轻量请求封装（GET / POST / sendBeacon 埋点）
     - 不改变各模块既有业务逻辑，仅收敛端点拼装
   ============================================================ */
(function () {
  'use strict';

  // ---- 唯一基址解析入口 ----
  // 优先级：window.HONDVO_API（外部注入） > meta[name="hondvo-api"] > 同源 /api
  // 严禁在本文件出现任何环境相关硬编码（localhost / admin 域名等）。
  function detectBase() {
    if (window.HONDVO_API && typeof window.HONDVO_API === 'string') {
      return window.HONDVO_API.replace(/\/+$/, '');
    }
    var meta = document.querySelector('meta[name="hondvo-api"]');
    if (meta) {
      var c = (meta.getAttribute('content') || '').trim();
      if (c) return c.replace(/\/+$/, '');
    }
    // 兜底：同源 /api（生产推荐配合反向代理）
    return '/api';
  }
  var BASE = detectBase();

  // ---- 端点清单（契约冻结） ----
  var ENDPOINTS = {
    i18nContent: BASE + '/i18n/content',            // GET 全语言内容
    contentList: BASE + '/content/public/list',     // GET 公开内容列表（M3）
    i18nBridge: BASE + '/publish/i18n-bridge',      // GET 后台 i18n 桥接
    mediaNameMap: BASE + '/media/public/name-map',  // GET 媒体库名称映射
    faqs: BASE + '/faqs',                           // GET 常见问题
    jobs: BASE + '/jobs',                           // GET 招聘
    links: BASE + '/links',                         // GET 友情链接
    downloads: BASE + '/downloads',                 // GET 资料下载列表
    downloadFile: BASE + '/downloads/',             // GET {id}/download 下载
    inquiries: BASE + '/inquiries',                 // POST 询盘（保留 400/409）
    subscribers: BASE + '/subscribers',             // POST 订阅（保留 400/409）
    collect: BASE + '/collect/'                     // POST 行为埋点
  };

  // ---- 请求工具 ----
  // 原实现用 Promise.race + 0ms setTimeout 作为超时分支，该分支永远是先完成者，
  // 于是任何调用都会立即以 Error('timeout') 拒绝（潜伏炸弹）。
  // 现改为：只由 AbortController 控制超时，正常路径即 fn(signal) 本身。
  function withTimeout(fn, ms) {
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, ms || 2000);
    return fn(ctrl.signal).finally(function () { clearTimeout(timer); });
  }
  function getJSON(url, timeout) {
    return withTimeout(function (signal) {
      return fetch(url, { signal: signal }).then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      });
    }, timeout);
  }
  function postJSON(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) { return r.json(); });
  }
  function sendBeacon(url, payload) {
    try {
      var blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      if (navigator.sendBeacon) return navigator.sendBeacon(url, blob);
    } catch (e) { /* 忽略埋点失败 */ }
    return false;
  }

  // ---- 对外契约对象 ----
  window.HONDVO_API = BASE; // 确保按钮：任何模块读取基址一致
  window.HONDVO_CLIENT = {
    base: BASE,
    endpoints: ENDPOINTS,
    url: function (key, tail) {
      var u = ENDPOINTS[key] || (BASE + '/' + String(key).replace(/^\/+/, ''));
      if (tail != null) u += String(tail);
      return u;
    },
    get: getJSON,
    post: postJSON,
    beacon: sendBeacon,
    /** 询盘：保留后端 400 / 409 状态 */
    submitInquiry: function (payload) { return postJSON(ENDPOINTS.inquiries, payload); },
    /** 订阅：保留后端 400 / 409 状态 */
    subscribe: function (payload) { return postJSON(ENDPOINTS.subscribers, payload); },
    /** 行为埋点：/collect/{path} */
    collect: function (path, payload) { return sendBeacon(ENDPOINTS.collect + path, payload); }
  };
})();
