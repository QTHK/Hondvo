/* ============================================================
   HONDVO render（P1 拆分 · 2026-09-29 静态化精简）
   ------------------------------------------------------------
   原文件包含三块后台 / CMS 逻辑，随「纯静态站点」改造整体移除：
     1) data-cms 渲染引擎（GET /api/i18n/content?all=1 + 媒体库 name-map）
     2) M3 内容桥（GET /api/content/public/list → home/about/products/mold/
        qual/news/contact/social 等 12 个模块）
     3) M7 内容（GET /api/faqs /jobs /links /downloads + POST /subscribers）
   对应地，index.html 内的 data-cms / data-cms-var 声明、<meta name="hondvo-api">
   与 api-client.js、media.js 均已移除。

   本文件仅保留与后台无关、静态 HTML 同样必需的公共行为：
     A. 图片加载兜底：加载完成停止 .card-img 的 shimmer；加载失败替换为中性占位图
     B. 产品卡点击 / 键盘委托：.prod-card[data-goto] → 跳转对应 hash 页

   ★ 加载顺序不可调整：index.html 中仍为 render.js → main.js。
   ============================================================ */
(function () {
  'use strict';

  /* ---------- A. 图片加载兜底 ---------- */

  // 缺失图占位：断链 / 404 / 竞态 → 统一显示中性占位图，而非破图或空白
  var PH_SVG = "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='#eef0f3'/><g fill='none' stroke='#c2c8d0' stroke-width='10' stroke-linejoin='round' stroke-linecap='round'><rect x='150' y='110' width='300' height='180' rx='14'/><circle cx='225' cy='175' r='22' fill='#c2c8d0' stroke='none'/><path d='M170 280 L255 200 L320 255 L380 195 L430 280 Z' fill='#c2c8d0' stroke='none'/></g><text x='300' y='345' font-family='Arial,Helvetica,sans-serif' font-size='26' fill='#9aa3ad' text-anchor='middle'>HONDVO · 图片</text></svg>";
  var PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(PH_SVG);

  function inCardImg(node) {
    return !!(node && node.parentNode && node.parentNode.classList &&
      node.parentNode.classList.contains('card-img'));
  }

  // 加载完成 → 停掉 .card-img 的 shimmer（CSS: .card-img.img-loaded { animation: none }）
  document.addEventListener('load', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && inCardImg(t)) t.parentNode.classList.add('img-loaded');
  }, true); // 捕获阶段：load 事件不冒泡

  // 加载失败 → 一律替换为中性占位图
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && t.getAttribute('data-ph') !== '1') {
      t.setAttribute('data-ph', '1');
      t.src = PLACEHOLDER;
    }
  }, true); // 捕获阶段：error 事件不冒泡

  // 兜底补扫：脚本执行时可能已有图片进入完成态（缓存命中），其 load 事件早于本监听注册
  function sweepLoadedCards() {
    var imgs = document.querySelectorAll('.card-img img');
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (img.complete && img.naturalWidth > 0 && inCardImg(img)) {
        img.parentNode.classList.add('img-loaded');
      }
    }
  }

  /* ---------- B. 产品卡点击 / 键盘委托 ---------- */
  // 静态 HTML 的 .prod-card 使用 data-goto="#page-xxx" + role="link" tabindex="0"，
  // 无内联 onclick，故跳转行为统一由这里的事件委托提供。
  // P1-21：键盘 Enter / Space 与点击等价，保证可达性。
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
    var card = e.target && e.target.closest && e.target.closest('.prod-card[data-goto]');
    if (!card) return;
    e.preventDefault();
    var h = card.getAttribute('data-goto');
    if (h) location.hash = h;
  });

  document.addEventListener('click', function (e) {
    var card = e.target && e.target.closest && e.target.closest('.prod-card[data-goto]');
    if (!card) return;
    var hash = card.getAttribute('data-goto');
    if (!hash) return;
    if (e.target.closest('a[href]')) return; // 卡内已有链接时不重复跳转
    location.hash = hash;
  });

  /* ---------- C. 邮件订阅（静态站：mailto 兜底） ---------- */
  // 原实现 POST /api/subscribers（位于本文件已删除的 M7 段）。后台移除后改为：
  // 校验邮箱 → 唤起本地邮件客户端发送订阅邮件 → 在 #m7-sub-msg 提示结果。
  // 表单控件（#m7-sub-form / #m7-sub-email / #m7-sub-msg）与视觉均保持不变。
  (function () {
    var form = document.getElementById('m7-sub-form');
    if (!form) return;
    var msg = document.getElementById('m7-sub-msg');
    var input = document.getElementById('m7-sub-email');

    function show(text, ok) {
      if (!msg) return;
      msg.textContent = text;
      msg.className = 'm7-sub-msg ' + (ok ? 'ok' : 'err');
    }
    function curLang() {
      try { var s = sessionStorage.getItem('hondvo_lang'); if (s) return s; } catch (e) {}
      return document.documentElement.getAttribute('lang') || 'en';
    }
    function t(key, fallback) {
      var entry = (typeof I18N !== 'undefined' && I18N[key]) || null;
      return (entry && (entry[curLang()] || entry.en)) || fallback;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = ((input && input.value) || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        show(t('m7_sub_invalid', 'Invalid email format'), false);
        return;
      }
      try {
        location.href = 'mailto:info@hondvotechnology.com'
          + '?subject=' + encodeURIComponent('Newsletter subscription')
          + '&body=' + encodeURIComponent('Please subscribe this address to the HONDVO newsletter:\n' + email + '\n');
        show(t('mailto_hint', 'Email client opened — please send the message to confirm.'), true);
        if (input) input.value = '';
      } catch (err) {
        show(t('m7_sub_fail', 'Subscription failed, please try again later'), false);
      }
    });
  })();

  /* ---------- 启动 ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sweepLoadedCards);
  } else {
    sweepLoadedCards();
  }
  window.addEventListener('load', sweepLoadedCards);
})();
