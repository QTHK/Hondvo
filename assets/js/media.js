/* ============================================================
   HONDVO media（P1 拆分）— 媒体库 URL 映射同步
   来源：media-sync.js；原文件保留 .bak
   ============================================================ */
/* media-sync.js — 官网静态图片与媒体库同步
 *
 * 作用：拉取后端媒体库公开名称映射（GET /api/media/public/name-map，无鉴权），
 *       将 index.html 中硬编码的 images/xxx.webp（src / data-src / data-bg /
 *       openLightbox onclick）统一替换为媒体库可访问 URL。
 *       媒体库已删除的图片，前端直接不显示（img 隐藏 / 背景清空 / 点击失效），
 *       实现「媒体库删图 → 前端页面同步不显示」。
 *
 * 依赖：后端需存在 /api/media/public/name-map 接口；
 *       后端不可达时保留静态兜底，不影响页面降级展示。
 */
(function () {
  'use strict';
  // 基址统一由 api-client.js 写入 window.HONDVO_API（唯一出口），此处只读
  var API = (window.HONDVO_API || '/api');

  function stripPrefix(name) {
    return String(name || '').replace(/^images\//, '');
  }

  // 品牌标识等非内容图白名单：媒体库未收录也不隐藏（站头 logo、二维码、favicon 等）
  var BYPASS = { 'logo.webp': 1, 'logo.png': 1, 'qrcode.webp': 1, 'favicon.ico': 1 };
  function isBypass(name) { return BYPASS[name] ? true : false; }

  function applyMap(map) {
    var i, node, name, url;

    // 1) img src="images/xxx"（含普通与 data-cms 模板占位）
    var imgs = document.querySelectorAll('img[src^="images/"]');
    for (i = 0; i < imgs.length; i++) {
      node = imgs[i];
      name = stripPrefix(node.getAttribute('src'));
      url = map[name] || map[node.getAttribute('src')];
      if (url) node.setAttribute('src', url);
      else if (!isBypass(name)) node.style.display = 'none'; // 媒体库已删 → 不显示
    }

    // 2) img data-src="images/xxx"（懒加载）
    var dsImgs = document.querySelectorAll('img[data-src^="images/"]');
    for (i = 0; i < dsImgs.length; i++) {
      node = dsImgs[i];
      name = stripPrefix(node.getAttribute('data-src'));
      url = map[name] || map[node.getAttribute('data-src')];
      if (url) node.setAttribute('data-src', url);
      else if (!isBypass(name)) node.style.display = 'none';
    }

    // 3) [data-bg="images/xxx"]（hero 轮播背景）
    var bgs = document.querySelectorAll('[data-bg^="images/"]');
    for (i = 0; i < bgs.length; i++) {
      node = bgs[i];
      name = stripPrefix(node.getAttribute('data-bg'));
      url = map[name] || map[node.getAttribute('data-bg')];
      if (url) {
        node.setAttribute('data-bg', url);
        node.style.backgroundImage = 'url(' + url + ')'; // 覆盖已渲染旧背景
      } else {
        node.removeAttribute('data-bg');
        node.style.backgroundImage = 'none'; // 覆盖 CSS 默认背景，删图即不显示
      }
    }

    // 4) onclick="openLightbox('images/xxx')"（证书/车间/模具大图）
    var cards = document.querySelectorAll('[onclick*="images/"]');
    for (i = 0; i < cards.length; i++) {
      node = cards[i];
      var oc = node.getAttribute('onclick') || '';
      var m = oc.match(/openLightbox\('images\/([^']+)'\)/);
      if (!m) continue;
      url = map[m[1]];
      if (url) node.setAttribute('onclick', oc.replace(m[0], "openLightbox('" + url + "')"));
      else node.removeAttribute('onclick'); // 媒体库删图 → 点击不再打开已删图
    }

    window.HONDVO_MEDIA_MAP = map;
  }

  function sync() {
    fetch(API + '/media/public/name-map', { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res && res.code === 0 && res.data && typeof res.data === 'object') {
          applyMap(res.data);
        }
      })
      .catch(function () { /* 后端不可达：保留静态兜底 */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sync);
  } else {
    sync();
  }
})();
