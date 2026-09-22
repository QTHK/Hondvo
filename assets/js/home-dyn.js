/* ═══════════════════════════════════════════════════════════════
   HOME DYNAMIC V1 — 首页动效 JS（跑马灯 / 3D tilt / hero 重放）
   依赖：assets/css/home-dyn.css
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── 1. Client Logo Wall：无缝跑马灯（内容克隆一份进轨道） ──
     可重入：CMS（render.js）重建 .logo-wall-grid 后需重新构造轨道，
     否则 grid.innerHTML 会把已构造的 .marquee-track 整块冲掉，
     结果只剩 flex/nowrap/overflow:hidden，logo 被裁切且无动画。

     ★ 关键：原始条目一律取自 grid.__marqueeBase（由 renderers.list 渲染后登记，
       首次则由 DOM 抓取），绝不从当前 DOM 反推。
       否则「grid 子节点只剩一条 track」会被误判为 1 个条目，
       再 concat 一次就变成 2 条 track，配合 CMS 每次重建 → DOM 指数膨胀。 */
  function initMarquee(force) {
    var grid = document.querySelector('#page-home .logo-wall-grid');
    if (!grid) return;
    if (!force && grid.querySelector('.marquee-track')) return; // 幂等

    var base = grid.__marqueeBase;
    if (!Array.isArray(base) || !base.length) {
      base = Array.prototype.slice.call(grid.children).filter(function (n) {
        return !(n.classList && n.classList.contains('marquee-track'));
      });
      if (!base.length) return;
      grid.__marqueeBase = base;
    }

    // 构造单轨（一轨内两份内容实现无缝）
    var track = document.createElement('div');
    track.className = 'marquee-track';
    base.concat(base).forEach(function (it) {
      track.appendChild(it.cloneNode(true));
    });
    grid.innerHTML = '';
    grid.appendChild(track);
  }

  /* 供 render.js 在 CMS 重建 logo 墙后调用 */
  window.__reinitMarquee = function () { initMarquee(true); };

  /* ── 2. Card 3D Tilt + 光晕跟随（抵消中心偏移） ── */
  var TILT_MAX = 7; // 最大倾角(deg)

  function attachTilt(el) {
    el.addEventListener('pointermove', function (ev) {
      var r = el.getBoundingClientRect();
      var px = (ev.clientX - r.left) / r.width;
      var py = (ev.clientY - r.top) / r.height;
      var rx = (0.5 - py) * TILT_MAX;
      var ry = (px - 0.5) * TILT_MAX;
      el.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      el.style.setProperty('--ry', ry.toFixed(2) + 'deg');
      el.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
      el.style.setProperty('--my', (py * 100).toFixed(1) + '%');
    });
    el.addEventListener('pointerleave', function () {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  }

  function initTilt() {
    var sel = '#page-home .prod-card, #page-home .sector-card';
    document.querySelectorAll(sel).forEach(attachTilt);
  }

  /* ── 3. Hero 入场动画重放：切回首页时重新播放 ── */
  var HERO_ELS = '.hero-tag, .hero-sub, .hero-actions, .hero-scroll-hint';

  function replayHero() {
    document.querySelectorAll('#page-home ' + HERO_ELS).forEach(function (el) {
      el.style.animation = 'none';
      // 强制 reflow 后复位，触发 CSS animation 重新播放
      void el.offsetWidth;
      el.style.animation = '';
    });
  }

  /* ── 初始化 ── */
  function boot() {
    initMarquee();
    initTilt();
    // 若当前即为首页，播放一次入场
    if (!location.hash || location.hash === '#page-home') {
      setTimeout(replayHero, 60);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  /* ── 4. 统计数字重播：切页后重置一次性标记，每次回来重新滚动 ── */
  // main.js 的 COUNTER 用 data-counted 保证只滚一次；SPA 切页(CSS :target)
  // 切走再切回时该标记仍存在，导致数字不再滚动。这里在每次 hashchange 时
  // 清掉标记，等元素重新进入视口(切回可见)时 IntersectionObserver 会再次触发。
  function resetStatCounters() {
    document.querySelectorAll('.stat-item[data-counted], .as-item[data-counted]')
      .forEach(function (el) { el.removeAttribute('data-counted'); });
  }

  window.addEventListener('hashchange', function () {
    // 关键：hashchange 是同步的，而 main.js 的 IntersectionObserver 回调在
    // 后续渲染帧异步触发。这里必须同步清掉 data-counted，IO 再触发时才能重滚。
    resetStatCounters();
    var h = location.hash || '#page-home';
    if (h === '#page-home') {
      setTimeout(replayHero, 80);
      // 可能新增了动态卡，重新绑定 tilt
      initTilt();
    }
  });
})();
