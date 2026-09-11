/* ═══════════════════════════════════════════════════════════════
   HOME DYNAMIC V1 — 首页动效 JS（跑马灯 / 3D tilt / hero 重放）
   依赖：assets/css/home-dyn.css
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── 1. Client Logo Wall：无缝跑马灯（内容克隆一份进轨道） ── */
  function initMarquee() {
    var grid = document.querySelector('#page-home .logo-wall-grid');
    if (!grid || grid.querySelector('.marquee-track')) return;
    var items = Array.prototype.slice.call(grid.children);
    if (!items.length) return;

    // 移除原有 grid 子元素，构造单轨（一轨内两份内容实现无缝）
    var track = document.createElement('div');
    track.className = 'marquee-track';
    items.concat(items).forEach(function (it) {
      track.appendChild(it.cloneNode(true));
    });
    grid.innerHTML = '';
    grid.appendChild(track);
  }

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

  window.addEventListener('hashchange', function () {
    var h = location.hash || '#page-home';
    if (h === '#page-home') {
      setTimeout(replayHero, 80);
      // 可能新增了动态卡，重新绑定 tilt
      initTilt();
    }
  });
})();
