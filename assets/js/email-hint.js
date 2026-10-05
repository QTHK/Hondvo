/* ============================================================
   邮箱输入增强（2026-10-05）
   ------------------------------------------------------------
   背景：客户反馈「电子邮箱后面能不能自动出现 @xxx.xxx」。
   现状说明（重要，别误判为 bug）：
     · 输入框已是 type="email" + autocomplete="email"（最优配置），
       浏览器会弹出**历史记录下拉建议**，点选即自动补全；
     · 但「输入 xxx 后自动补 @gmail.com」这类行为**无法实现**——
       浏览器禁止脚本静默改写输入值（会造成「用户以为是自己输入的」安全隐患），
       主流站点（Google / GitHub）同样不做。

   本脚本做的是安全且有价值的增强：
     ① **常见域名纠错提示**：用户漏写 @ 或把 gmail.com 打成 gmial.com /
        163.com 打成 163.con 等，在失焦时给出一行轻提示 + 一键采纳。
     ② **不静默改写**：只在用户明确点击提示时才写入输入框，绝不自动篡改。
     ③ 复用现有 .invalid / toast 体系，不引入任何新依赖。
   ============================================================ */
(function () {
  'use strict';

  /* 常见拼写错误 → 正确域名 */
  var TYPO_MAP = {
    'gmial.com': 'gmail.com', 'gmai.com': 'gmail.com', 'gmail.co': 'gmail.com',
    'gmail.cm': 'gmail.com', 'gmaill.com': 'gmail.com', 'gamil.com': 'gmail.com',
    'hotmial.com': 'hotmail.com', 'hotmai.com': 'hotmail.com', 'hotmail.co': 'hotmail.com',
    'outlok.com': 'outlook.com', 'outloo.com': 'outlook.com', 'outlook.cm': 'outlook.com',
    'yaho.com': 'yahoo.com', 'yahoo.co': 'yahoo.com', 'yaho.co.jp': 'yahoo.co.jp',
    'qq.con': 'qq.com', '163.con': '163.com', '126.con': '126.com',
    'foxmial.com': 'foxmail.com', 'aliyun.con': 'aliyun.com',
    'gmail.con': 'gmail.com', 'gmail.om': 'gmail.com', 'gmail.c0m': 'gmail.com'
  };
  /* 常见顶级域 → 建议补充的完整域名（用户只打了前缀时用） */
  var DOMAIN_HINT = {
    'gmail': 'gmail.com', 'hotmail': 'hotmail.com', 'outlook': 'outlook.com',
    'yahoo': 'yahoo.com', 'qq': 'qq.com', '163': '163.com', '126': '126.com',
    'foxmail': 'foxmail.com', 'aliyun': 'aliyun.com', '139': '139.com',
    'sina': 'sina.com', 'sohu': 'sohu.com', 'icloud': 'icloud.com', 'live': 'live.com',
    'me': 'icloud.com', 'msn': 'msn.com', 'aol': 'aol.com', 'protonmail': 'protonmail.com',
    // 常见「前缀 + 错域名」形态：someone.gmai → 建议 someone.gmai@gmail.com
    'gmai': 'gmail.com', 'hotmai': 'hotmail.com', 'outloo': 'outlook.com', 'gmial': 'gmail.com',
    'yaho': 'yahoo.com', 'foximail': 'foxmail.com'
  };

  var CN = {
    didYouMean: '您是否想输入',
    apply: '使用它',
    dismiss: '忽略',
    addAt: '补全为'
  };

  function curLang() {
    try { var s = sessionStorage.getItem('hondvo_lang'); if (s) return s; } catch (e) {}
    return document.documentElement.getAttribute('lang') || 'en';
  }
  function isZh() { return curLang().slice(0, 2) === 'zh'; }
  function txt(zh, en) { return isZh() ? zh : en; }

  /* 分析当前邮箱值，返回建议的完整邮箱（无则 null） */
  function suggest(email) {
    var v = String(email || '').trim();
    if (!v) return null;
    var at = v.indexOf('@');
    // ① 有 @：只查域名拼写
    if (at >= 0) {
      var local = v.slice(0, at);
      var dom = v.slice(at + 1).toLowerCase();
      if (!dom) return local + '@' + txt('gmail.com', 'gmail.com');  // 缺域名
      var fix = TYPO_MAP[dom];
      if (fix) return local + '@' + fix;
      return null;
    }
    /* ② 无 @：用户只打了「前缀」或「前缀.域名」。这里必须**先剥掉用户名前缀**，
       否则 DOMAIN_HINT[low] 会拿整串去查（如 'someone.gmai'），永远查不到 → 建议不出现。
       取最后一段（点分段后）作为待补域名。
       刻意**不做**「已含 @ 就补 @ 域」的提示（someone@gmail → someone@gmail.com）：
       那种输入更可能是用户正在写、且补上第二个 @ 反而画蛇添足，属过度干预。 */
    var low = v.toLowerCase();
    if (DOT_RE.test(low)) {                 // 含点 → 当作域名处理
      var d = low.split('.').pop();          // 'someone.gmai' → 'gmai'
      var f = TYPO_MAP[d] || DOMAIN_HINT[d];
      return f ? v + '@' + f : null;
    }
    // 纯前缀形态：'someone' / 'gmail' —— 整串就是域名候选
    var h = DOMAIN_HINT[low];
    if (h) return v + '@' + h;               // 'gmail' → 'gmail@gmail.com'
    return null;
  }
  var DOT_RE = /\./;

  /* 轻提示条：插在输入框所在 .fg 之后 */
  function ensureBar(field) {
    var fg = field.closest('.fg') || field.parentElement;
    if (!fg) return null;
    var bar = fg.querySelector('.email-tip');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'email-tip';
      bar.setAttribute('role', 'status');
      bar.hidden = true;
      fg.appendChild(bar);
    }
    return bar;
  }

  function hideBar(field) {
    var fg = field.closest('.fg') || field.parentElement;
    var bar = fg && fg.querySelector('.email-tip');
    if (bar) bar.hidden = true;
  }

  function showTip(field, target) {
    var bar = ensureBar(field);
    if (!bar) return;
    // **不静默改写**：必须用户点击才写入（浏览器安全规范 + 不冒犯用户）
    bar.textContent = '';
    var span = document.createElement('span');
    span.className = 'email-tip-text';
    span.textContent = txt(CN.didYouMean + ' ', 'Did you mean ') + target + '? ';
    var ok = document.createElement('button');
    ok.type = 'button';
    ok.className = 'email-tip-ok';
    ok.textContent = CN.apply;
    ok.addEventListener('click', function () {
      field.value = target;
      hideBar(field);
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.focus();
    });
    var no = document.createElement('button');
    no.type = 'button';
    no.className = 'email-tip-no';
    no.textContent = CN.dismiss;
    no.addEventListener('click', function () { hideBar(field); });
    bar.appendChild(span);
    bar.appendChild(ok);
    bar.appendChild(no);
    bar.hidden = false;
  }

  function bind(input) {
    if (!input || input.__emailEnhance) return;
    input.__emailEnhance = true;
    // 已在输入过程中 dismiss，避免干扰
    input.addEventListener('input', function () {
      var fg = input.closest('.fg') || input.parentElement;
      var bar = fg && fg.querySelector('.email-tip');
      if (bar && !bar.hidden) bar.hidden = true;
    });
    /* 失焦时给建议。逻辑刻意保持极简：直接问 suggest() 要答案，
       有差异就提示、无差异就收起。（前一版把「有无 @ / 域名是否拼错」写成一坨
       嵌套 if + 混用 && ||，既有短路漏洞又难维护，实测导致提示条完全不出现。） */
    input.addEventListener('blur', function () {
      var v = input.value;
      if (!v) { hideBar(input); return; }
      var t = suggest(v);
      if (t && t.toLowerCase() !== String(v).trim().toLowerCase()) {
        showTip(input, t);
      } else {
        hideBar(input);
      }
    });
  }

  function init() {
    // 页面内所有 email 输入框（含动态弹窗里的）
    var list = document.querySelectorAll('input[type="email"]');
    Array.prototype.forEach.call(list, bind);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  // 产品询盘弹窗是动态插入的，委托一次即可覆盖
  document.addEventListener('focusin', function (e) {
    if (e.target && e.target.type === 'email') bind(e.target);
  });

  window.HONDVO_enhanceEmail = { init: init, suggest: suggest };
})();
