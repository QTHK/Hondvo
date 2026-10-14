/* ============================================================
   HONDVO 官网 · M3 内容渲染（2026-10-14）
   ------------------------------------------------------------
   数据来源：assets/data/content.json
     —— 由后台「发布与版本 → 一键上线」生成并随版本产物一起提交，
        与 assets/js/i18n.js 是**同一条交付链路**（方案 B1）。
     —— 也就是说：改完内容要点一次「一键上线」才会到官网，这是刻意的
        （官网保持纯静态、不依赖后台存活；后台挂了官网照样能开）。

   ⚠️ 三条设计约束，都是刻意的，改前请先读懂：

     ① **渐进增强**：拿不到文件 / 文件为空 / 没有某类内容时，
        **原样保留 HTML 里的静态卡片**。绝不能因为"后台还没发过内容"
        就把官网已有的新闻列表清空 —— 那是把"没配"变成"坏了"。

     ② **动态插入的元素不带 .reveal**：静态卡片的出场动画由 main.js 的
        IntersectionObserver 驱动，而本脚本是 fetch 回来之后才写 DOM 的，
        那时观察器早已初始化 ⇒ 带 .reveal 只会得到一个 opacity:0 的
        "看不见的卡片"。动态内容直接可见。

     ③ **正文一律过 HONDVO_sanitizeHTML**：content.json 虽是自家后台产出，
        但它是**仓库里的文件**、可被人直接改 —— 与 i18n.js 同等信任级别，
        因此走同一套白名单过滤，不做例外。

   语言：当前语言取 <html lang>（i18n.js 的 switchLang 会写它），
        i18n.js 切语言时派发 `hondvo:lang`，本脚本据此重渲染。
   ============================================================ */
(function () {
  'use strict';

  var DATA_URL = 'assets/data/content.json';
  var data = null;          /* 取到一次就缓存，切语言时不再重复请求 */
  var bound = false;

  function curLang() {
    return document.documentElement.getAttribute('lang') || 'en';
  }

  /** 取当前语言下的某字段；该语言缺这一格时**回落源语言**（与后台产物的口径一致） */
  function field(item, key) {
    if (!item || !item.texts) return '';
    var cur = item.texts[curLang()] || {};
    var src = item.texts[(data && data.sourceLang) || 'en'] || {};
    return cur[key] || src[key] || '';
  }

  function sanitize(html) {
    if (!html) return '';
    return window.HONDVO_sanitizeHTML ? window.HONDVO_sanitizeHTML(html) : '';
  }

  /** 富文本 → 纯文本（用于"没填摘要时拿正文前几句顶上"） */
  function plain(html) {
    if (!html) return '';
    var d = document.createElement('div');
    d.innerHTML = sanitize(html);
    return (d.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function cut(s, n) {
    s = String(s || '');
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  /** 取 i18n.js 里某个键在当前语言下的文本（案例三段的小标题用它）。
      i18n.js 用 `const I18N = {...}` 声明在脚本顶层，同一页面的其它脚本可直接引用。
      取不到就回退英文 —— 宁可显示英文小标题，也不要显示一个空标题。 */
  function i18nText(key, fallback) {
    try {
      if (typeof I18N !== 'undefined' && I18N && I18N[key]) {
        var v = I18N[key][curLang()] || I18N[key].en;
        if (v) return v;
      }
    } catch (e) { /* i18n.js 未就绪时走兜底 */ }
    return fallback;
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  /* ── 新闻：#page-news .news-list ──（结构沿用静态卡片，才能吃到同一套 CSS） */
  function renderNews() {
    var box = document.querySelector('#page-news .news-list');
    if (!box) return false;
    var items = (data.items || []).filter(function (i) { return i.type === 'news'; });
    if (!items.length) return false;              /* 没有动态内容 ⇒ 保留静态卡片 */

    var frag = document.createDocumentFragment();
    items.forEach(function (it) {
      var item = el('div', 'news-item');
      item.tabIndex = 0;

      var meta = el('div', 'meta');
      var date = (it.meta && it.meta.date) || String(it.publishedAt || '').slice(0, 10) || '';
      if (date) meta.appendChild(el('span', 'date', date));

      var wrap = document.createElement('div');
      wrap.appendChild(el('h4', null, field(it, 'title')));
      /* 摘要优先；没填摘要就从正文正文里取一段，别让卡片只剩标题 */
      var sum = field(it, 'summary') || cut(plain(field(it, 'body')), 180);
      if (sum) wrap.appendChild(el('p', null, sum));

      item.appendChild(meta);
      item.appendChild(wrap);
      frag.appendChild(item);
    });
    box.innerHTML = '';
    box.appendChild(frag);
    return true;
  }

  /* ── 首页新闻：.home-news（2026-10-14 补）──
     ⚠️ 为什么必须补：首页的 `.home-news` 是**静态 3 条**（写死 news_title_1/2/3），
        而本脚本此前只接管了 `#page-news .news-list` ⇒
        **后台改了新闻，首页永远显示旧的 3 条**（用户实测发现）。
     结构沿用静态卡片（.news-card / .news-tag / h3），才能吃到同一套 CSS；
     ⚠️ 动态卡片**不能加 .reveal** —— 那样入场动画会把新插入的节点永久留在 opacity:0。 */
  function renderHomeNews() {
    var box = document.querySelector('.home-news');
    if (!box) return false;
    var items = (data.items || []).filter(function (i) { return i.type === 'news'; }).slice(0, 3);
    if (!items.length) return false;              /* 没有动态内容 ⇒ 保留静态卡片 */

    /* 标签取当前语言的 i18n 值（与静态卡同一个键，视觉一致） */
    var tag = '';
    try {
      var e = window.I18N && window.I18N['news_tag_company'];
      var lang = document.documentElement.lang || 'zh';
      tag = (e && (e[lang] || e.en || e.zh)) || '';
    } catch (err) { tag = ''; }

    var frag = document.createDocumentFragment();
    items.forEach(function (it) {
      var a = el('a', 'news-card');
      a.href = '#page-news';
      if (tag) a.appendChild(el('span', 'news-tag', tag));
      a.appendChild(el('h3', null, field(it, 'title')));
      frag.appendChild(a);
    });
    box.innerHTML = '';
    box.appendChild(frag);
    return true;
  }

  /* ── 案例：.cases-grid ──
     ⚠️ 官网静态卡片是「Challenge / Solution / Result」三段式，而 M3 的 case 模型是
        title + summary + body 三段**结构不同**。这里刻意不硬凑三段
        （硬凑就会出现"标题填进 Challenge"这种自欺欺人的渲染），
        而是用 industry + 标题 + 正文的单段式 —— 视觉同族、语义诚实。
        将来若要三段式，应在 content-schema.js 里把 challenge/solution/result
        加成正式字段，而不是在前端拆字符串。 */
  function renderCases() {
    var box = document.querySelector('.cases-grid');
    if (!box) return false;
    var items = (data.items || []).filter(function (i) { return i.type === 'case'; });
    if (!items.length) return false;

    var frag = document.createDocumentFragment();
    items.forEach(function (it) {
      var card = el('div', 'case-card');
      /* 行业标签读的是**可翻译字段** industry（2026-10-14 修订）。
         ⚠️ 它原先读 meta.industry（不翻译的结构化数据）⇒ 中文站点上会一直显示
            英文的 IVD / Drug Delivery，用户实测发现"切到中文文字没变"。 */
      var ind = field(it, 'industry');
      if (ind) card.appendChild(el('span', 'case-industry', ind));
      card.appendChild(el('h4', null, field(it, 'title')));

      /* 三段与官网静态卡片的「Challenge / Solution / Result」一一对应 ——
         后台内容模型是 title/challenge/solution/result，这里按段输出，
         视觉与既有的静态卡片保持同族（.case-k 小标题 + .case-v 值）。

         ⚠️ 段标题**不能写死英文**：静态卡片里的它们是多语言的
            （i18n 的 case_ch_label / case_sol_label / case_res_label）。
            这里复用同一批键，取不到再用英文兜底。 */
      var segs = [
        ['challenge', 'case_ch_label', 'Challenge'],
        ['solution', 'case_sol_label', 'Solution'],
        ['result', 'case_res_label', 'Result']
      ];
      var any = false;
      segs.forEach(function (s) {
        var val = field(it, s[0]);
        if (!val) return;
        any = true;
        card.appendChild(el('span', 'case-k', i18nText(s[1], s[2])));
        var v = el('span', 'case-v');
        v.innerHTML = sanitize(val);              /* ← trusted HTML，已过白名单 */
        card.appendChild(v);
      });
      if (!any) {
        var sum = field(it, 'summary');
        if (sum) card.appendChild(el('span', 'case-v', sum));
      }
      frag.appendChild(card);
    });
    box.innerHTML = '';
    box.appendChild(frag);
    return true;
  }

  function apply() {
    if (!data) return;
    var a = renderNews();
    var b = renderCases();
    var c = renderHomeNews();
    if (a || b) document.dispatchEvent(new CustomEvent('hondvo:content-rendered'));
  }

  function boot() {
    if (typeof fetch !== 'function') return;      /* 极老的浏览器：直接用静态内容 */
    fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (j) {
        if (!j || !Array.isArray(j.items) || !j.items.length) return;   /* 空数据 ⇒ 保留静态 */
        data = j;
        apply();
        if (!bound) {
          bound = true;
          /* i18n.js 的 switchLang 末尾会派发这个事件 —— 用它把动态内容一起切语言。
             动态节点没有 data-lang-key，switchLang 的遍历覆盖不到它们。 */
          document.addEventListener('hondvo:lang', apply);
        }
      })
      .catch(function () {
        /* 文件缺失 / 网络失败：静默保留静态内容。这是**预期路径**（后台还没发布过内容），
           不是错误 —— 所以不打 console.error，免得给正常访客刷一堆红字。 */
      });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
