/* ============================================================
   新闻详情页 · 语言跟随（2026-11-20）
   ------------------------------------------------------------
   为什么需要：
     详情页是**静态生成**的，只输出源语言（en）—— 那是给搜索引擎用的落地页。
     但中文用户从站内点进来，看到整页英文会很怪（实测反馈："进去之后页面很简陋"，
     其中一半原因就是语言对不上）。
   做法：
     进页面先定语言（URL ?lang= → sessionStorage → 浏览器），不是 en 才去取
     content.json 把标题 / 摘要 / 正文替换掉。数据与列表页同一个文件，不额外维护。
   代价：
     非英语访问多一次 content.json 请求（~75KB，与列表页共用缓存）。
     en 访问零额外请求 —— 静态 HTML 本身就是英文。
   ============================================================ */
(function () {
  'use strict';

  var VALID = ['en', 'zh', 'de', 'ru', 'fr', 'ja', 'ko', 'es'];

  function pickLang() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q && VALID.indexOf(q) >= 0) return q;
    } catch (e) { /* 老浏览器无 URLSearchParams */ }
    try {
      var s = sessionStorage.getItem('hondvo_lang');
      if (s && VALID.indexOf(s) >= 0) return s;
    } catch (e) { /* 隐私模式下 sessionStorage 可能抛错 */ }
    var n = String(navigator.language || 'en').slice(0, 2).toLowerCase();
    return VALID.indexOf(n) >= 0 ? n : 'en';
  }

  var lang = pickLang();

  /* ── 顶栏交互（与语言无关，必须在下面的 en 提前返回之前执行）── */
  (function initShell() {
    var bar = document.querySelector('.nd-topbar');
    if (bar) {
      var apply = function () {
        var y = window.scrollY || document.documentElement.scrollTop || 0;
        bar.classList.toggle('is-stuck', y > 8);
      };
      window.addEventListener('scroll', apply, { passive: true });
      apply();
    }

    /* 2026-11-20：详情页**不再提供页内语言切换**（用户要求"跟随主站语言，不需要在里面切换"）。
       原来那段 .nd-lang 下拉的交互代码随之删除；语言只由 pickLang() 决定：
       ?lang= → sessionStorage.hondvo_lang（主站切换时写入，站内跳转必然保留）→ 浏览器语言。
       想换语言请回主站切换，主站是唯一语言入口。 */
  })();

  if (lang === 'en') return;   /* 静态页就是英文，不必多跑一趟 */

  function slugOf() {
    var p = location.pathname.replace(/\/+$/, '');
    var seg = p.split('/');
    return seg[seg.length - 1] || '';
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* 与后端 lib/news-pages.js 的 bodyToHtml 同口径：纯文本按空行分段 */
  function toHtml(body) {
    var s = String(body || '').trim();
    if (!s) return '';
    if (/<(p|div|ul|ol|h[1-6]|blockquote|table|figure)\b/i.test(s)) return s;
    return s.split(/\n{2,}/)
      .map(function (t) { return t.trim(); })
      .filter(Boolean)
      .map(function (t) { return '<p>' + esc(t).replace(/\n/g, '<br>') + '</p>'; })
      .join('');
  }

  fetch('/assets/data/content.json')
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (d) {
      if (!d || !d.items) return;
      var slug = slugOf(), it = null;
      for (var i = 0; i < d.items.length; i++) {
        if (d.items[i].type === 'news' && d.items[i].slug === slug) { it = d.items[i]; break; }
      }
      if (!it || !it.texts) return;

      var t = it.texts[lang] || {};
      var src = it.texts[d.sourceLang || 'en'] || {};
      var title = t.title || src.title || '';
      var sum = t.summary || src.summary || '';
      var body = t.body || src.body || '';

      document.documentElement.setAttribute('lang', lang);

      if (title) {
        document.title = title + ' | HONDVO';
        var h1 = document.querySelector('.nd-title');
        if (h1) h1.textContent = title;
        var ogt = document.querySelector('meta[property="og:title"]');
        if (ogt) ogt.setAttribute('content', title + ' | HONDVO');
      }
      if (sum) {
        var lead = document.querySelector('.nd-lead');
        if (lead) lead.textContent = sum;
        var md = document.querySelector('meta[name="description"]');
        if (md) md.setAttribute('content', sum);
      }
      if (body) {
        var nb = document.querySelector('.nd-body');
        if (nb) nb.innerHTML = toHtml(body);
      }
    })
    .catch(function () { /* 取不到就保留英文静态内容，绝不把页面清空 */ });
})();
