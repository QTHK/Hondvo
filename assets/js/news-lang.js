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

  /* ── 框架文案（2026-11-27）───────────────────────────────────────
     为什么要有这一块：
       静态页只出源语言 en，之前 news-lang.js 只换标题/摘要/正文 ——
       结果是"德语正文 + 英文导航/按钮/上下篇"，中文用户点进详情页也一样。
       框架文案（导航 7 项 / 报价 / 面包屑 / 返回 / 上下篇 / 列表页标题）
       数量固定、不随内容变化，所以内嵌在这里，不额外发请求。

     ⚠️ 键名必须与后端 lib/news-pages.js 里的 data-nl 一致，改一处要同步另一处。
     ⚠️ 只做 textContent 替换：任何 key 缺失时保留页面原有英文，不会出现空白按钮。 */
  var L10N = {
    zh: {
      nav_products: '产品与服务', nav_mold: '模具中心', nav_qual: '资质实力',
      nav_about: '关于我们', nav_news: '新闻动态', nav_contact: '联系我们', nav_faq: '常见问题',
      cta_quote: '获取报价', crumb_news: '新闻动态', back_news: '← 返回新闻列表',
      pager_newer: '← 更新', pager_older: '更早 →',
      list_kicker: '新闻中心', list_h1: '新闻动态',
      list_sub: '来自弘欧科技（东莞）有限公司的审核、产能与设备进展。'
    },
    de: {
      nav_products: 'Produkte & Services', nav_mold: 'Formenbau', nav_qual: 'Zertifizierungen',
      nav_about: 'Über uns', nav_news: 'News', nav_contact: 'Kontakt', nav_faq: 'FAQ',
      cta_quote: 'Angebot anfordern', crumb_news: 'News', back_news: '← Zurück zu News',
      pager_newer: '← Neuer', pager_older: 'Älter →',
      list_kicker: 'Newsroom', list_h1: 'News & Updates',
      list_sub: 'Audits, Kapazität und Ausstattung der HONDVO Technology (Dongguan) Co., Ltd.'
    },
    ru: {
      nav_products: 'Продукция и услуги', nav_mold: 'Производство пресс-форм', nav_qual: 'Сертификация',
      nav_about: 'О компании', nav_news: 'Новости', nav_contact: 'Контакты', nav_faq: 'Вопросы и ответы',
      cta_quote: 'Запросить цену', crumb_news: 'Новости', back_news: '← Назад к новостям',
      pager_newer: '← Новее', pager_older: 'Старее →',
      list_kicker: 'Пресс-центр', list_h1: 'Новости и события',
      list_sub: 'Аудиты, мощности и оборудование компании HONDVO Technology (Dongguan) Co., Ltd.'
    },
    fr: {
      nav_products: 'Produits et services', nav_mold: 'Centre moules', nav_qual: 'Certifications',
      nav_about: 'À propos', nav_news: 'Actualités', nav_contact: 'Contact', nav_faq: 'FAQ',
      cta_quote: 'Demander un devis', crumb_news: 'Actualités', back_news: '← Retour aux actualités',
      pager_newer: '← Plus récent', pager_older: 'Plus ancien →',
      list_kicker: 'Salle de presse', list_h1: 'Actualités',
      list_sub: 'Audits, capacités et équipements de HONDVO Technology (Dongguan) Co., Ltd.'
    },
    ja: {
      nav_products: '製品・サービス', nav_mold: '金型センター', nav_qual: '資格・実績',
      nav_about: '会社概要', nav_news: 'ニュース', nav_contact: 'お問い合わせ', nav_faq: 'よくある質問',
      cta_quote: 'お見積り', crumb_news: 'ニュース', back_news: '← ニュース一覧へ',
      pager_newer: '← 新しい', pager_older: '古い →',
      list_kicker: 'ニュースルーム', list_h1: 'ニュース・更新情報',
      list_sub: '弘欧科技（東莞）有限公司の審査・生産能力・設備に関する最新情報。'
    },
    ko: {
      nav_products: '제품 및 서비스', nav_mold: '금형 센터', nav_qual: '인증 및 역량',
      nav_about: '회사 소개', nav_news: '뉴스', nav_contact: '문의', nav_faq: '자주 묻는 질문',
      cta_quote: '견적 요청', crumb_news: '뉴스', back_news: '← 뉴스 목록으로',
      pager_newer: '← 최신', pager_older: '이전 →',
      list_kicker: '뉴스룸', list_h1: '뉴스 및 업데이트',
      list_sub: 'HONDVO Technology (Dongguan) Co., Ltd.의 심사, 생산 능력 및 설비 소식.'
    },
    es: {
      nav_products: 'Productos y servicios', nav_mold: 'Centro de moldes', nav_qual: 'Certificaciones',
      nav_about: 'Sobre nosotros', nav_news: 'Noticias', nav_contact: 'Contacto', nav_faq: 'Preguntas frecuentes',
      cta_quote: 'Solicitar cotización', crumb_news: 'Noticias', back_news: '← Volver a noticias',
      pager_newer: '← Más reciente', pager_older: 'Más antiguo →',
      list_kicker: 'Sala de prensa', list_h1: 'Noticias y novedades',
      list_sub: 'Auditorías, capacidad y equipos de HONDVO Technology (Dongguan) Co., Ltd.'
    }
  };

  function applyL10n(dict) {
    var nodes = document.querySelectorAll('[data-nl]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-nl');
      if (dict && dict[k]) nodes[i].textContent = dict[k];
    }
    /* 列表页：标题跟着语言走（详情页没有 .ni-h1，标题在正文替换时单独设，
       否则会先闪一下"新闻动态 | HONDVO"再被真实标题覆盖） */
    if (dict && dict.list_h1 && document.querySelector('.ni-h1')) {
      document.title = dict.list_h1 + ' | HONDVO';
    }
  }

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

  /* 非英语：先本地化框架文案（不等 content.json，导航不会闪英文），再替换正文 */
  if (lang !== 'en') {
    document.documentElement.setAttribute('lang', lang);
    applyL10n(L10N[lang] || {});
  }

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

  /* 与后端 lib/news-pages.js 的 bodyToHtml 同口径：纯文本按空行分段。
     ⚠️ 2026-11-27 补净化：这个文件是**唯一**把 content.json 的正文直接塞进 innerHTML 的地方，
        而静态页那条路径（en）有后端白名单清洗，非英语这条没有 —— 等于绕过了防线。
        这里用浏览器自身的解析器做白名单，删标签、剥事件属性、拦 javascript: 协议。 */
  var ALLOW_TAGS = {
    P: 1, BR: 1, STRONG: 1, B: 1, EM: 1, I: 1, U: 1, S: 1, UL: 1, OL: 1, LI: 1,
    H2: 1, H3: 1, H4: 1, BLOCKQUOTE: 1, A: 1, SPAN: 1, HR: 1, TABLE: 1, THEAD: 1,
    TBODY: 1, TR: 1, TD: 1, TH: 1
  };

  function cleanHtml(html) {
    if (!document.createElement) return '';
    var tpl = document.createElement('template');
    tpl.innerHTML = String(html || '');
    (function walk(node) {
      var kids = Array.prototype.slice.call(node.childNodes || []);
      for (var i = 0; i < kids.length; i++) {
        var c = kids[i];
        if (c.nodeType === 8) { node.removeChild(c); continue; }   /* 注释 */
        if (c.nodeType !== 1) continue;                            /* 文本节点原样保留（已是文本，不会二次解析） */
        if (!ALLOW_TAGS[c.tagName]) { node.removeChild(c); continue; }
        var attrs = Array.prototype.slice.call(c.attributes || []);
        for (var j = 0; j < attrs.length; j++) {
          var name = attrs[j].name.toLowerCase();
          if (name.indexOf('on') === 0 || name === 'style') { c.removeAttribute(attrs[j].name); continue; }
          if ((name === 'href' || name === 'src') && /^\s*(javascript|data):/i.test(attrs[j].value)) {
            c.removeAttribute(attrs[j].name);
          }
        }
        walk(c);
      }
    })(tpl.content);
    return tpl.innerHTML;
  }

  function toHtml(body) {
    var s = String(body || '').trim();
    if (!s) return '';
    if (/<(p|div|ul|ol|h[1-6]|blockquote|table|figure)\b/i.test(s)) return cleanHtml(s);
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
