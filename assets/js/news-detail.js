/* HONDVO 新闻详情（2026-11-20）
   ──────────────────────────────────────────────────────────
   URL：/news/<slug>/（history 路由，SEO 可见）
   数据：assets/data/content.json（后台 M3 → 一键上线生成）
   ⚠️ 页面容器 #page-news-detail 在 index.html，本脚本只负责填充与路由。
   ⚠️ 与整站 hash 路由共存：详情页是 pathname，其它页仍是 hash。
       从详情回列表时用 location.href = '/#page-news' 彻底切回。
   ⚠️ 正文过白名单清洗，绝不 innerHTML 原始内容。 */
(function () {
  'use strict';

  var DATA_URL = 'assets/data/content.json';
  var cache = null;
  var DETAIL_ID = 'page-news-detail';

  function lang() {
    return (document.documentElement.getAttribute('lang') || 'en').split('-')[0].toLowerCase();
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  /* 正文白名单：p / br / strong / em / ul / ol / li / h3 / a(href) */
  function safeHTML(html) {
    var doc = new DOMParser().parseFromString('<div>' + String(html || '') + '</div>', 'text/html');
    var root = doc.body.firstChild;
    var allow = { P: 1, BR: 1, STRONG: 1, EM: 1, B: 1, I: 1, UL: 1, OL: 1, LI: 1, H3: 1, A: 1 };
    function clean(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) return;
        if (n.nodeType !== 1) { node.removeChild(n); return; }
        if (!allow[n.tagName]) { clean(n); while (n.firstChild) node.insertBefore(n.firstChild, n); node.removeChild(n); return; }
        if (n.tagName === 'A') {
          var href = n.getAttribute('href') || '';
          if (!/^https?:\/\//i.test(href) && href.charAt(0) !== '/') n.removeAttribute('href');
          else { n.setAttribute('target', '_blank'); n.setAttribute('rel', 'noopener noreferrer'); }
        }
        Array.prototype.slice.call(n.attributes).forEach(function (at) {
          if (at.name !== 'href' && at.name !== 'target' && at.name !== 'rel') n.removeAttribute(at.name);
        });
        clean(n);
      });
    }
    clean(root);
    return root.innerHTML;
  }
  function field(it, key) {
    var t = (it && it.texts) || {};
    return t[lang()] && t[lang()][key] || t.en && t.en[key] || '';
  }
  function slugFromPath() {
    var m = location.pathname.match(/^\/news\/([^/]+)\/?$/);
    return m ? decodeURIComponent(m[1]) : '';
  }
  function renderedNews() {
    if (!cache || !Array.isArray(cache.items)) return [];
    return cache.items.filter(function (i) { return i.type === 'news' && i.status !== 'archived'; })
      .sort(function (a, b) { return (Number(b.sort) || 0) - (Number(a.sort) || 0); });
  }
  function splitParagraphs(body) {
    return String(body || '').split(/\n\s*\n/).map(function (p) { return p.trim(); }).filter(Boolean);
  }

  function renderDetail() {
    var slug = slugFromPath();
    var page = document.getElementById(DETAIL_ID);
    if (!page) return;
    if (!slug) { page.classList.remove('is-active'); return; }

    var list = renderedNews();
    var idx = -1;
    for (var i = 0; i < list.length; i++) if (list[i].slug === slug) { idx = i; break; }
    var it = list[idx];

    /* 数据还没到：等 fetch 完成后 load() 会再调一次 */
    if (!cache) return;

    var titleEl = document.getElementById('ndTitle');
    var metaEl = document.getElementById('ndMeta');
    var crumbEl = document.getElementById('ndCrumbTitle');
    var bodyEl = document.getElementById('ndBody');
    var navEl = document.getElementById('ndNav');

    if (!it) {
      titleEl.textContent = 'News';
      metaEl.textContent = '';
      crumbEl.textContent = 'Not found';
      bodyEl.innerHTML = '<p>Article not found.</p>';
      navEl.innerHTML = '';
    } else {
      var title = field(it, 'title') || slug;
      var body = field(it, 'body');
      document.title = title + ' | HONDVO';
      titleEl.textContent = title;
      var date = (it.meta && it.meta.date) || String(it.publishedAt || '').slice(0, 10);
      metaEl.textContent = date;
      crumbEl.textContent = title;
      bodyEl.innerHTML = splitParagraphs(body).map(function (p) {
        return '<p>' + safeHTML(p) + '</p>';
      }).join('');

      /* 上一篇 / 下一篇：列表已按日期倒序 */
      var prev = list[idx - 1], next = list[idx + 1];
      navEl.innerHTML =
        (prev ? '<a class="prev" href="/news/' + encodeURIComponent(prev.slug) + '/"><small>← Newer</small>' + esc(field(prev, 'title')) + '</a>' : '<span></span>')
        + (next ? '<a class="next" href="/news/' + encodeURIComponent(next.slug) + '/"><small>Older →</small>' + esc(field(next, 'title')) + '</a>' : '<span></span>');
    }
    page.classList.add('is-active');

    /* 隐藏其它 page，避免整站 hash 路由把详情页也显示出来 */
    Array.prototype.forEach.call(document.querySelectorAll('.page'), function (p) {
      if (p.id !== DETAIL_ID) p.classList.remove('is-active');
    });
    window.scrollTo(0, 0);
  }

  function load() {
    if (cache) { renderDetail(); return; }
    fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { cache = d; renderDetail(); })
      .catch(function () { cache = { items: [] }; renderDetail(); });
  }

  /* 站内链接：详情页 → 其它页，先回根路径再走 hash */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="/#page-"], a[href^="/news/"]');
    if (!a) return;
    /* 详情页之间用 history 无刷新跳转 */
    var href = a.getAttribute('href');
    if (/^\/news\//.test(href) && slugFromPath()) {
      e.preventDefault();
      history.pushState({}, '', href);
      renderDetail();
    }
  });

  window.addEventListener('popstate', function () {
    if (!slugFromPath()) {
      var p = document.getElementById(DETAIL_ID);
      if (p) p.classList.remove('is-active');
      if (location.hash) window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else load();
  });

  document.addEventListener('hondvo:lang', function () { if (cache) renderDetail(); });
  load();
})();
