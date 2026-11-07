/* HONDVO 官网 · 资质证书动态渲染（M5，2026-11-06）
   ──────────────────────────────────────────────────────────────
   数据来自 assets/data/certifications.json，由后台「一键上线」生成。
   后台新增/删除证书 ⇒ 下次上线后官网自动跟着变，不再需要改 HTML。

   ⚠️ **读不到文件就保留静态卡片**（index.html 里原有那 3 张），绝不白屏。
      和 content.js 同一个原则：产物是增强，不是前提。
   ⚠️ 动态生成的图片**不使用 .lazy 类**：main.js 的懒加载是启动时一次性
      querySelectorAll('.lazy')，后插入的图不会被观察到 ⇒ 永远不加载。
      改用原生 loading="lazy" + 直接给 src。
   ⚠️ 灯箱靠 data-lightbox 属性 + 事件委托（main.js 里），所以动态卡片
      只要带上这个属性就能点开看大图，不需要额外绑定。 */
(function () {
  'use strict';

  var GRID_ID = 'qual-overview';
  var DATA_URL = 'assets/data/certifications.json';
  var cache = null;

  function currentLang() {
    var l = document.documentElement.getAttribute('lang') || 'en';
    return (String(l).split('-')[0] || 'en').toLowerCase();
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function render(data) {
    var grid = document.getElementById(GRID_ID);
    if (!grid) return;
    var items = (data && data.items) || [];
    if (!items.length) return;   /* 空产物 = 后台把证书全下架了？保留静态，不见得是想要的结果 */

    var lang = currentLang();
    grid.innerHTML = items.map(function (it) {
      var names = it.names || {};
      var name = names[lang] || names.en || it.slug || '';
      var src = 'images/' + String(it.file || '').replace(/^images\//, '');
      var id = 'qual-cert-' + String(it.slug || '').replace(/[^a-z0-9-]/gi, '');
      return '<div class="img-cert-card" id="' + esc(id) + '" data-lightbox="' + esc(src) + '">'
        + '<img src="' + esc(src) + '" alt="' + esc(name) + '" loading="lazy" decoding="async">'
        + '<div class="card-label">' + esc(name) + '</div>'
        + '</div>';
    }).join('');
    /* 卡片数量变了 ⇒ 循环副本、是否显示箭头都要重算 */
    delete grid.dataset.loop;
    delete grid.dataset.loopCount;
    window.setTimeout(function () { ensureLoop(); syncNav(); }, 60);
  }

  /* ══════════ 横向滚动 + 自动轮播（2026-11-07）══════════
     用户实测：证书加到第 3 张就被视口切掉，没法看全。
     这里做三件事：包一层定位容器（给箭头）、加左右箭头、缓慢自动轮播。
     ⚠️ 自动轮播**不接管滚轮**：劫持纵向滚轮会让整页滚不动，是很常见的烂体验。
        桌面用箭头 / 拖动滚动条，触屏直接滑。
     ⚠️ 尊重 prefers-reduced-motion：用户在系统里关了动效就只留手动滚动。 */
  var wrapEl = null, prevBtn = null, nextBtn = null;
  var autoTimer = null, paused = false, pauseUntil = 0, autoAcc = 0;

  function isReduceMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* ══════════ 无缝循环（2026-11-07 第二轮）══════════
     第一版是"滚到头 → 停 0.9 秒 → 瞬移回 0 → 再停 1.8 秒"，用户实测：
     "为什么不是循环滚动而是到头之后卡顿从头开始来？"

     真正的无缝循环做法：把卡片**克隆一份接在后面**，滚过一份的宽度后
     把 scrollLeft 减掉这一个周期的宽度。因为两段内容完全相同，
     减掉的瞬间画面一模一样 ⇒ 看不出接缝，也不会停。
     判据：一份内容放得下（不溢出）就不复制 —— 没得滚还复制只会出现重复卡片。 */
  function ensureLoop() {
    var grid = document.getElementById(GRID_ID);
    if (!grid || grid.dataset.loop === '1') return;
    var one = grid.scrollWidth;
    if (one <= grid.clientWidth + 4) return;   /* 一份就能放下，不需要循环 */

    var cards = [].slice.call(grid.children);
    if (!cards.length) return;
    for (var i = 0; i < cards.length; i++) {
      var n = cards[i].cloneNode(true);
      n.setAttribute('aria-hidden', 'true');   /* 读屏软件不要重复念一遍 */
      n.removeAttribute('id');                 /* 避免 id 重复 */
      grid.appendChild(n);
    }
    grid.dataset.loop = '1';
    grid.dataset.loopCount = String(cards.length);
  }

  function cycleW() {
    var grid = document.getElementById(GRID_ID);
    if (!grid || grid.dataset.loop !== '1') return 0;
    var n = Number(grid.dataset.loopCount) || 0;
    if (n < 1 || grid.children.length < n + 1) return 0;
    /* 用 offsetLeft 差值算"一份"的宽度：包含卡片宽 + 卡片间的 gap，
       但不含最后一张之后的 gap —— 用 scrollWidth/2 会差半个 gap，接缝会抖一下。 */
    var w = grid.children[n].offsetLeft - grid.children[0].offsetLeft;
    return w > 0 ? w : 0;
  }

  /* 把位置折回 [0, cycle)，视觉上等价于无限延伸 */
  function wrapScroll() {
    var grid = document.getElementById(GRID_ID);
    if (!grid) return;
    var c = cycleW();
    if (!c) return;
    if (grid.scrollLeft >= c) grid.scrollLeft -= c;
    else if (grid.scrollLeft < 0) grid.scrollLeft += c;
  }

  function maxScroll(grid) {
    var c = cycleW();
    /* 循环时不存在"到头" —— 永远还有下一份 */
    if (c) return Infinity;
    return Math.max(0, grid.scrollWidth - grid.clientWidth);
  }

  function syncNav() {
    var grid = document.getElementById(GRID_ID);
    if (!grid || !wrapEl) return;
    var max = maxScroll(grid);
    var can = max > 4;
    if (wrapEl.classList) wrapEl.classList.toggle('can-scroll', can);
    if (!can) return;
    if (prevBtn) prevBtn.disabled = false;   /* 循环时两个方向都通 */
    if (nextBtn) nextBtn.disabled = false;
  }

  function scrollByCard(dir) {
    var grid = document.getElementById(GRID_ID);
    if (!grid) return;
    var card = grid.querySelector('.img-cert-card');
    var step = card ? (card.getBoundingClientRect().width + 20) : (grid.clientWidth * 0.8);
    try {
      grid.scrollBy({ left: dir * step, behavior: 'smooth' });
    } catch (e) {
      grid.scrollLeft += dir * step;
    }
    /* 手动操作后停 4 秒，别跟用户抢 */
    paused = true;
    pauseUntil = Date.now() + 4000;
  }

  function startAuto() {
    if (autoTimer || isReduceMotion()) return;
    autoTimer = setInterval(function () {
      var grid = document.getElementById(GRID_ID);
      if (!grid || paused || Date.now() < pauseUntil) return;
      if (document.hidden) return;                    /* 标签页在后台就别转 */
      var r = grid.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;   /* 不在视口内也别转 */

      var c = cycleW();
      if (!c) {
        /* 没有循环副本（一份都放不下才没有）：退回"到头停一下"的保守行为 */
        var mx = grid.scrollWidth - grid.clientWidth;
        if (mx <= 4) return;
        if (grid.scrollLeft >= mx - 1) {
          paused = true;
          window.setTimeout(function () {
            grid.scrollTo({ left: 0, behavior: 'auto' });
            paused = false;
            pauseUntil = Date.now() + 1800;
            syncNav();
          }, 900);
          return;
        }
        autoAcc += 2;
        var m0 = Math.floor(autoAcc);
        if (m0 > 0) { autoAcc -= m0; grid.scrollLeft += m0; }
        return;
      }

      /* 正常循环：一直往前推，越过一个周期就折回，画面完全一致、无停顿 */
      autoAcc += 2;
      var move = Math.floor(autoAcc);
      if (move > 0) {
        autoAcc -= move;
        grid.scrollLeft += move;
        if (grid.scrollLeft >= c) grid.scrollLeft -= c;
      }
    }, 32);
  }

  function initScroll() {
    var grid = document.getElementById(GRID_ID);
    if (!grid || grid.dataset.hzInit === '1') return;
    grid.dataset.hzInit = '1';

    wrapEl = document.createElement('div');
    wrapEl.className = 'cert-scroll';
    if (grid.parentNode) {
      grid.parentNode.insertBefore(wrapEl, grid);
      wrapEl.appendChild(grid);
    }

    prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'cert-nav prev';
    prevBtn.setAttribute('aria-label', '上一张证书');
    /* 用 SVG 而不是 ‹ 字符：中文字体里那个字形又细又小，40px 圆里几乎看不见 */
    prevBtn.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>';
    nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'cert-nav next';
    nextBtn.setAttribute('aria-label', '下一张证书');
    nextBtn.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>';
    wrapEl.appendChild(prevBtn);
    wrapEl.appendChild(nextBtn);

    prevBtn.addEventListener('click', function () { scrollByCard(-1); });
    nextBtn.addEventListener('click', function () { scrollByCard(1); });

    grid.addEventListener('scroll', function () {
      /* 手动滚 / 箭头滚 / 触摸滚都会经过这里：越过一个周期就折回，
         所以"用户自己滑"也是无缝循环，不会撞到底再弹回。 */
      wrapScroll();
      window.requestAnimationFrame(syncNav);
    }, { passive: true });
    grid.addEventListener('mouseenter', function () { paused = true; });
    grid.addEventListener('mouseleave', function () { paused = false; pauseUntil = 0; });
    grid.addEventListener('touchstart', function () { paused = true; }, { passive: true });
    grid.addEventListener('touchend', function () {
      paused = false;
      pauseUntil = Date.now() + 3000;
    }, { passive: true });

    if (window.ResizeObserver) { new window.ResizeObserver(syncNav).observe(grid); }
    window.addEventListener('resize', syncNav);
    window.addEventListener('load', syncNav);

    ensureLoop();   /* 静态卡片（拿不到产物时）也可能需要循环副本 */
    syncNav();
    startAuto();
  }


  function load(force) {
    if (cache && !force) { render(cache); return; }
    /* no-cache：产物是每次上线重写的，不能让浏览器拿旧版 */
    fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) { cache = d; render(d); })
      .catch(function () { /* 保留静态卡片 */ });
  }

  /* 先挂交互、再拉数据：产物拿不到时静态卡片照样能横向滚 */
  function boot() { initScroll(); load(true); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
  /* 切语言只重渲染，不重新请求 */
  document.addEventListener('hondvo:lang', function () { load(false); });
})();
