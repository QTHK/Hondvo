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
  // 基址不再在本文件使用：媒体映射统一经 window.HONDVO_getMediaMap（api-client.js 单例）获取。

  function stripPrefix(name) {
    return String(name || '').replace(/^images\//, '');
  }

  // 品牌标识等非内容图白名单：媒体库未收录也不隐藏（站头 logo、二维码、favicon 等）
  // P1-28 追加：页脚社交图标（.si-img，email-circle.png / logo-wechat.png 等）同属品牌标识，
  // 隐藏会在页脚留下空白洞；与内容图的「媒体库删图即隐藏」策略有意区分。
  var BYPASS = { 'logo.webp': 1, 'logo.png': 1, 'qrcode.webp': 1, 'favicon.ico': 1 };
  function isBypass(name) { return BYPASS[name] ? true : false; }
  function isBrandIcon(node) { return !!(node && node.classList && node.classList.contains('si-img')); }
  // 是否需要保留静态兜底（不隐藏）
  function keepStatic(node, name) { return isBypass(name) || isBrandIcon(node); }

  // 空映射（媒体库可达但尚无条目）不触发任何隐藏/移除，避免「媒体库空 → 全站图片消失」
  function isEmptyMap(m) {
    if (!m || typeof m !== 'object') return true;
    for (var k in m) { if (Object.prototype.hasOwnProperty.call(m, k)) return false; }
    return true;
  }

  function applyMap(map) {
    var i, node, name, url;
    var noHide = isEmptyMap(map); // 空映射：仅保留静态，不做任何隐藏/移除

    // 1) img src="images/xxx"（含普通与 data-cms 模板占位）
    var imgs = document.querySelectorAll('img[src^="images/"]');
    for (i = 0; i < imgs.length; i++) {
      node = imgs[i];
      name = stripPrefix(node.getAttribute('src'));
      url = map[name] || map[node.getAttribute('src')];
      if (url) {
        node.setAttribute('src', url);
        node.style.display = '';
      } else if (noHide || keepStatic(node, name)) {
        node.style.display = ''; // 空映射或品牌标识：保留静态兜底（并清除可能的历史隐藏）
      } else {
        node.style.display = 'none'; // 内容图：媒体库已删 → 不显示
      }
    }

    // 2) img data-src="images/xxx"（懒加载）
    var dsImgs = document.querySelectorAll('img[data-src^="images/"]');
    for (i = 0; i < dsImgs.length; i++) {
      node = dsImgs[i];
      name = stripPrefix(node.getAttribute('data-src'));
      url = map[name] || map[node.getAttribute('data-src')];
      if (url) {
        node.setAttribute('data-src', url);
        node.style.display = '';
      } else if (!noHide && !keepStatic(node, name)) {
        node.style.display = 'none';
      }
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
      } else if (!noHide) {
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
      else if (!noHide) node.removeAttribute('onclick'); // 媒体库删图 → 点击不再打开已删图
    }

    // 5) data-lightbox="images/xxx"（自 P0-05 起 lightbox 由内联 onclick 改为属性 + 事件委托）
    var lbCards = document.querySelectorAll('[data-lightbox^="images/"]');
    for (i = 0; i < lbCards.length; i++) {
      node = lbCards[i];
      name = stripPrefix(node.getAttribute('data-lightbox'));
      url = map[name] || map[node.getAttribute('data-lightbox')];
      if (url) node.setAttribute('data-lightbox', url);
      else if (!noHide) node.removeAttribute('data-lightbox'); // 媒体库删图 → 点击不再打开已删图
    }

    window.HONDVO_MEDIA_MAP = map;
  }

  function sync() {
    // P1-19：统一走 api-client.js 的单例，全站只发一次 /media/public/name-map
    if (typeof window.HONDVO_getMediaMap !== 'function') return; // api-client.js 未就绪 → 保留静态兜底
    window.HONDVO_getMediaMap().then(function (map) {
      // map === null 表示后端不可达 → 不调用 applyMap，保留静态图片（降级契约）
      if (map !== null && map !== undefined) applyMap(map || {});
    }).catch(function () { /* 后端不可达：保留静态兜底 */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sync);
  } else {
    sync();
  }
})();
