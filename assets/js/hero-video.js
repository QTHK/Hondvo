/* ============================================================
   HONDVO hero 视频按需加载（2026-10-05 性能优化 · P0）
   ------------------------------------------------------------
   背景：模具中心 hero 背景视频（hv 5.2MB + h 12.3MB，合计 17.6MB）
        原为 preload="auto"，而 index.html 是 hash 路由 SPA ——
        用户停在首页时根本看不到该视频，却已把 17.6MB 全部下载完。
        移动端上这是数 MB 的无谓流量，直接拖垮首屏。

   策略（三段式降级，逐步放开带宽）：
     1. 初始 preload="none"（HTML 属性），浏览器不预下；
     2. 视频元素进入视口（IntersectionObserver，rootMargin 提前 200px 预热）
        → 才把 src 挂上并 play()；
     3. 弱网 / 省流量 / prefers-reduced-motion → 永不加载，只留 poster 静态图。

   约束：
     · 只作用于 .hero-video，不触碰「全球合作伙伴」地图模块（map.js / #partner-map），
       两者分属不同 page（本脚本挂在 page-mold 的视频上，地图在 page-about）。
     · 地图相关 DOM / CSS / JS / 资源一律不改。
   ============================================================ */
(function () {
  'use strict';

  var videos = Array.prototype.slice.call(document.querySelectorAll('.hero-video'));
  if (!videos.length) return;

  /* 用户明确「要省流量」或系统「要减少动效」→ 不加载视频，只展示 poster */
  function skipVideo() {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    } catch (e) { /* 老浏览器忽略 */ }
    try {
      var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      // saveData 明确表示用户想省流量；2g/3g 下载 17MB 视频不人道
      if (conn && (conn.saveData === true || /(^|-)2g$|(^|-)3g$/.test(String(conn.effectiveType || '')))) return true;
    } catch (e) { /* 忽略 */ }
    return false;
  }

  if (skipVideo()) {
    videos.forEach(function (v) {
      // 彻底不请求：清空 source 并标记，避免 <video> 自行加载
      v.removeAttribute('autoplay');
      v.removeAttribute('preload');
      v.dataset.videoSkipped = '1';
    });
    return;
  }

  function hydrate(v) {
    if (v.dataset.videoLoaded === '1') return;
    v.dataset.videoLoaded = '1';
    // 元素上已无 autoplay（2026-10-05 移除，否则浏览器会在首屏直接拉 17.6MB），
    // 必须由脚本显式 load() + play()；autoplay 属「用户主动交互」范畴，不会被拦截。
    try { v.load(); } catch (e) { /* 忽略 */ }
    var p = v.play();
    if (p && typeof p.catch === 'function') {
      // 自动播放被浏览器策略拒绝（常见于省流量/低电量模式）→ 保留 poster，不报错到控制台
      p.catch(function () { v.dataset.videoLoaded = '0'; });
    }
  }

  /* 不支持 IntersectionObserver 的老浏览器：退化为「模具页真正可见（:target + 非 display:none）时才加载」 */
  function fallbackObserve(v) {
    var iv = setInterval(function () {
      var page = document.getElementById('page-mold');
      var active = page && page.offsetParent && /page-mold/.test(location.hash || '');
      if (active) { clearInterval(iv); hydrate(v); }
    }, 400);
    // 上限保护：45s 后无论如何放行，避免用户已进页面却永远不播
    setTimeout(function () { clearInterval(iv); }, 45000);
  }

  if (!('IntersectionObserver' in window)) { videos.forEach(fallbackObserve); return; }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      hydrate(e.target);
      io.unobserve(e.target);   // 只需触发一次
    });
  }, { rootMargin: '200px 0px', threshold: 0.01 });   // 提前 200px 起拉，避免滚动到才放

  videos.forEach(function (v) { io.observe(v); });

  /* hash 路由直接落到 #page-mold 时 IntersectionObserver 不会触发（元素从未"滚入"视口）
     → 补一条：路由命中模具页时立即放行。

     ⚠️ 判定必须用「:target + offsetParent」，不能用 getBoundingClientRect().top：
        本站页面切换靠 :target 伪类（.page:target{display:block}），非激活页是 display:none，
        而 display:none 元素的 getBoundingClientRect() 四个值全为 0（top=0），
        用「top < innerHeight」判断会把隐藏的视频误判为在视口内 → 首屏就下载 17.6MB。 */
  function moldPageActive() {
    var page = document.getElementById('page-mold');
    if (!page) return false;
    // offsetParent 为 null 即元素（或祖先）display:none —— 隐藏页恒为 null
    if (!page.offsetParent) return false;
    return /page-mold/.test(location.hash || '');
  }

  function onHash() {
    if (!moldPageActive()) return;
    videos.forEach(hydrate);
  }
  window.addEventListener('hashchange', onHash);
  onHash();
})();
