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
  // P1-23 生产环境屏蔽调试日志：默认关闭；?debug 或 localStorage.hondvo_debug=1 开启
  window.HONDVO_DEBUG = /[?&]debug\b/.test(location.search) || (function () { try { return localStorage.getItem('hondvo_debug') === '1'; } catch (e) { return false; } })();
  window.HONDVO_dbg = function () { if (window.HONDVO_DEBUG) { try { console.log.apply(console, arguments); } catch (e) {} } };

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

  // ---- 媒体库名称映射（单例） ----
  // 原实现：media.js 与 render.js 各自 fetch 一次 /media/public/name-map，
  // 二者写同一个全局，存在竞态与重复请求。现收敛到此处：全站只发一次。
  // 语义：resolve(对象) = 成功（可能为空对象）；resolve(null) = 后端不可达。
  //       消费端据此区分「已加载且为空」与「加载失败」，从而保留离线静态兜底。
  var _mediaMapPromise = null;
  function fetchMediaMapOnce() {
    if (_mediaMapPromise) return _mediaMapPromise;
    _mediaMapPromise = fetch(ENDPOINTS.mediaNameMap, { cache: 'no-store' })
      .then(function (r) {
        // ★ 必须先判 HTTP 状态：404/500 的响应体不一定是非法 JSON
        //   （例如反向代理或静态服务器对 404 返回纯文本 "404"，而 JSON.parse('404') 是合法的
        //     数字 404），否则会被误判为「成功但为空」，进而让消费端把图片全部隐藏。
        if (!r.ok) return null;
        return r.json();
      })
      .then(function (res) {
        // 仅在契约成立时视为成功；其余（含 code!==0 的错误信封）一律按不可达处理
        if (!res || res.code !== 0 || !res.data || typeof res.data !== 'object') return null;
        window.HONDVO_MEDIA_MAP = res.data;
        return res.data;
      })
      .catch(function () { return null; });
    return _mediaMapPromise;
  }
  window.HONDVO_getMediaMap = fetchMediaMapOnce;

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
