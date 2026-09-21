/* ============================================================
   HONDVO render（P1 拆分）— CMS 内容渲染 / M3 内容列表 / M7 FAQ·Jobs·Links·Downloads
   来源：cms-render.js + index.html content_m3/m7 段；cms-render.js 原文件保留 .bak
   ============================================================ */
/* ============================================================
   HONDVO CMS 渲染引擎（A2 方案 · 阶段 1 首页试点）
   ------------------------------------------------------------
   数据源：GET /api/content/public/list
     - content   = 中文 JSON（模块数据）
     - meta.translations[7语言] = 同结构翻译 JSON
   协议：HTML 元素声明  data-cms="module.path"  与  data-cms-type
     - 缺省 / text : 单值文本填充
     - html        : 富文本 innerHTML
     - list        : 以元素内第一个直接子元素为模板克隆，子元素用 data-cms-var 绑定字段
     - slider      : hero 轮播（.hero-slides / .hero-indicators）
     - images      : 图片墙（数据为数组或 {images:[...]}）
     - heroText    : hero 文案块（subTitle/title1/title2/desc/按钮/滚动提示）
   语言切换：包装 window.switchLang，切换后用缓存 translations 重渲染
   兜底：后端不可用 / 字段缺失 → 保留静态 HTML + I18N 字典，控制台静默
   ============================================================ */
(function () {
  'use strict';

  // Phase 1：切到统一翻译读接口（后端已合并多语言 + 全语言一次拉取）
  var API = (window.HONDVO_API || '/api') + '/i18n/content?all=1';
  // 后端媒体源（origin）：用于把 CMS 中硬编码的绝对图片地址归一化为当前可配置的 API 来源
  // 兼容相对基址（'/api'）：此时无法推导 origin，留空由 normMedia 自行处理
  var _BASE = window.HONDVO_API || '/api';
  var API_ORIGIN = /^https?:\/\//i.test(_BASE)
    ? _BASE.replace(/\/+$/, '').replace(/\/api$/i, '')
    : '';
  // 媒体库公开名称映射（无鉴权）：original_name / filename → 可访问 URL
  var MEDIA_MAP_API = (window.HONDVO_API || '/api') + '/media/public/name-map';
  var _mediaNameMap = null; // null=未加载；{} = 已加载
  // 缺失图占位兜底：媒体库已删 / 文件缺失 / 竞态 404 / 任何断链 <img> → 统一显示中性占位图（而非破图或空白）
  var PH_SVG = "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='#eef0f3'/><g fill='none' stroke='#c2c8d0' stroke-width='10' stroke-linejoin='round' stroke-linecap='round'><rect x='150' y='110' width='300' height='180' rx='14'/><circle cx='225' cy='175' r='22' fill='#c2c8d0' stroke='none'/><path d='M170 280 L255 200 L320 255 L380 195 L430 280 Z' fill='#c2c8d0' stroke='none'/></g><text x='300' y='345' font-family='Arial,Helvetica,sans-serif' font-size='26' fill='#9aa3ad' text-anchor='middle'>HONDVO · 图片</text></svg>";
  var PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(PH_SVG);
  var BLANK_IMG = PLACEHOLDER;
  // 拉取媒体库名称映射（失败不阻塞，映射保持 null 走兜底）
  function fetchMediaMap() {
    return fetch(MEDIA_MAP_API, { cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        _mediaNameMap = (res && res.code === 0 && res.data && typeof res.data === 'object') ? res.data : {};
      })
      .catch(function () { _mediaNameMap = {}; });
  }
  // 解析媒体库名称 → 媒体库 URL；未命中（媒体库已删）返回 null
  function resolveMediaName(name) {
    if (!name || _mediaNameMap === null) return null;
    var key = String(name).replace(/^images\//, '');
    return _mediaNameMap[key] || null;
  }
  // 图片地址归一化：
  //  - 绝对 http(s) 地址：优先按媒体库名称映射解析（友好名/文件名双key）；
  //    映射未命中时降级为替换 origin 后直接使用（浏览器加载失败则走 error 兜底占位符）
  //  - /media/ 相对路径：补全 origin
  //  - images/ 相对路径或纯文件名 → 按媒体库名称映射解析；映射已加载但未命中（媒体库已删）→ 返回透明占位，前端不显示
  function normMedia(u) {
    if (typeof u !== 'string' || !u) return u;
    // 绝对地址 / /media/ 根路径：提取文件名按媒体库解析
    if (/^https?:\/\//i.test(u) || /^\/media\//i.test(u)) {
      var slash = u.lastIndexOf('/');
      var fnAbs = slash >= 0 ? u.slice(slash + 1) : u;
      var resolvedAbs = resolveMediaName(fnAbs);
      if (resolvedAbs) return resolvedAbs;
      // 映射未命中：降级为替换 origin 使用（而非直接占位符），让浏览器尝试加载；
      // 文件若真不存在，error 事件会被 bindImgFallback 捕获并替换为占位图
      var relPath = u.replace(/^https?:\/\/[^/]+/i, '');
      if (!API_ORIGIN) return relPath || u; // 相对基址：直接返回相对形式，避免拼出 "undefined/..."
      return API_ORIGIN + relPath;
    }
    var resolved = resolveMediaName(u);
    if (resolved) return resolved;
    if (_mediaNameMap !== null) return BLANK_IMG; // 媒体库已删该图 → 不显示（相对路径场景，无原URL可回退）
    return u; // 映射未加载 → 兜底原样
  }
  var TIMEOUT = 2000;
  var VALID_LANGS = ['zh', 'en', 'de', 'ru', 'fr', 'ja', 'ko', 'es'];
  var cache = {};      // module -> { zh: contentJSON, en: trJSON, ... }
  var loaded = false;

  function curLang() {
    try {
      var s = sessionStorage.getItem('hondvo_lang');
      if (s && VALID_LANGS.indexOf(s) !== -1) return s;
      var q = new URLSearchParams(location.search).get('lang');
      if (q && VALID_LANGS.indexOf(q) !== -1) return q;
    } catch (e) {}
    return document.documentElement.lang || 'en';
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function q(sel) { return document.querySelector(sel); }
  function qa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function pick(obj, path) {
    if (!obj) return null;
    if (!path) return obj; // 无路径 = 整块数据（数组 / 对象）
    return path.split('.').reduce(function (o, k) {
      return (o && o[k] != null) ? o[k] : null;
    }, obj);
  }

  // 渲染完成标记：移除 data-lang-key，防止 switchLang 用 I18N 字典覆盖动态内容
  function seal(el) {
    if (!el) return;
    el.setAttribute('data-cms-rendered', '1');
    if (el.getAttribute('data-lang-key')) el.removeAttribute('data-lang-key');
  }

  // 列表项滚动动画：有 revealObs 则接入，否则直接显示
  function revealItems(scope) {
    var items = scope.querySelectorAll('.reveal:not(.revealed)');
    if (window.revealObs && items.length) {
      items.forEach(function (it) { window.revealObs.observe(it); });
    } else {
      items.forEach(function (it) { it.classList.add('revealed'); });
    }
  }

  // ---------- 渲染器 ----------
  var renderers = {};

  // 单值文本
  renderers.text = function (el, val) {
    el.innerHTML = esc(val);
    seal(el);
  };

  // 富文本（后台可写 → 必须走白名单过滤，防存储型 XSS）
  renderers.html = function (el, val) {
    el.innerHTML = window.HONDVO_sanitizeHTML ? window.HONDVO_sanitizeHTML(val) : esc(val);
    seal(el);
  };

  // 列表：模板 = 第一个直接子元素
  renderers.list = function (el, arr) {
    if (!Array.isArray(arr) || !arr.length) return;
    var template = el.firstElementChild;
    // ★ 容器若已被跑马灯改造（子节点只剩一条 .marquee-track），绝不能拿轨道当模板：
    //   否则每次渲染都把「整条轨道」当作单个条目克隆 N 份，而每份又内含 N 个条目，
    //   与 CMS 的每次重建叠加 → DOM 按 N 的幂次膨胀（实测曾达 2^20 节点，主线程被拖死）。
    //   此时改用 __marqueeBase（未被 DOM 变异污染的原条目）作模板，并先清空容器。
    if (template && template.classList && template.classList.contains('marquee-track')) {
      template = (Array.isArray(el.__marqueeBase) && el.__marqueeBase[0]) || template.firstElementChild;
      el.innerHTML = '';
    }
    if (!template) return;
    var frag = document.createDocumentFragment();
    arr.forEach(function (item, idx) {
      var node = template.cloneNode(true);
      node.querySelectorAll('[data-cms-var]').forEach(function (sub) {
        var field = sub.getAttribute('data-cms-var');
        var v = pick(item, field);
        if (v == null) return;
        if (sub.tagName === 'IMG') {
          sub.src = normMedia(v);
          if (item.alt) sub.setAttribute('alt', item.alt);
          sub.classList.add('img-loaded');
        } else if (sub.tagName === 'A') {
          sub.href = v;
        } else {
          sub.innerHTML = esc(v);
        }
      });
      frag.appendChild(node);
    });
    el.innerHTML = '';
    el.appendChild(frag);
    seal(el);
    revealItems(el);
    // ★ 客户 Logo 墙重建后须重挂跑马灯轨道
    //   （静态 HTML 使用 data-cms="logo-wall" data-cms-type="list"，
    //    真正的重建发生在本渲染器，而非 renderLogoWall）。
    if (el.classList && el.classList.contains('logo-wall-grid')) {
      // 先登记本次渲染结果作为「原始条目」：跑马灯据此重建，且下次渲染的模板
      // 只会取自这里，不会被 DOM 变异（只剩 track）污染。
      el.__marqueeBase = Array.prototype.slice.call(el.children);
      if (typeof window.__reinitMarquee === 'function') window.__reinitMarquee();
    }
  };

  // 图片墙：数组元素可为 字符串 / {image,label}；数据也可为 {images:[...]}
  renderers.images = function (el, data) {
    var arr = Array.isArray(data) ? data : (data && Array.isArray(data.images) ? data.images : null);
    if (!arr || !arr.length) return;
    el.innerHTML = arr.map(function (it) {
      var img = (typeof it === 'string') ? it : ((it && (it.image || it.src)) || '');
      img = normMedia(img);
      var label = (typeof it === 'string') ? '' : ((it && it.label) || '');
      return '<div class="img-cert-card" onclick="openLightbox(\'' + esc(img) + '\')">' +
        '<img src="' + esc(img) + '" alt="' + esc(label) + '" loading="eager">' +
        (label ? '<div class="card-label">' + esc(label) + '</div>' : '') +
        '</div>';
    }).join('');
    seal(el);
  };

  // hero 轮播：按元素自身类别渲染 slides / dots
  renderers.slider = function (el, arr) {
    if (!Array.isArray(arr) || !arr.length) return;
    var isDots = el.classList && el.classList.contains('hero-indicators');
    var html = arr.map(function (s, i) {
      var active = i === 0 ? ' active' : '';
      if (isDots) {
        return '<div class="hero-dot' + active + '" data-slide="' + i + '"></div>';
      }
      var bg = (typeof s === 'string') ? s : ((s && s.bgImage) || '');
      bg = normMedia(bg);
      return '<div class="hero-slide' + active + '" style="background-image:url(\'' + esc(bg) + '\')"></div>';
    }).join('');
    el.innerHTML = html;
    seal(el);
  };

  // hero 文案块：绑定在 .hero-content 容器上
  renderers.heroText = function (el, ht) {
    if (!ht || typeof ht !== 'object') return;
    var one = function (sel, val, isHtml) {
      var n = el.querySelector(sel);
      if (n && val != null && val !== '') {
        n.innerHTML = isHtml ? String(val) : esc(val);
        seal(n);
      }
    };
    one('.hero-tag', ht.subTitle);
    one('h1 span', ht.title1);
    one('h1 strong', ht.title2);
    var d1 = ht.desc1 || '', d2 = ht.desc2 || '';
    // 先转义再拼 <br>：d1/d2 为后台可写字段，原样注入等于开了一个 XSS 入口
    if (d1 || d2) one('.hero-sub', esc(d1) + (d2 ? '<br>' + esc(d2) : ''), true);
    var b1 = el.querySelector('.btn-primary');
    if (b1) {
      if (ht.leftBtnText != null) { b1.innerHTML = esc(ht.leftBtnText); seal(b1); }
      if (ht.leftBtnLink) b1.setAttribute('href', ht.leftBtnLink);
    }
    var b2 = el.querySelector('.btn-ghost');
    if (b2) {
      if (ht.rightBtnText != null) { b2.innerHTML = esc(ht.rightBtnText); seal(b2); }
      if (ht.rightBtnLink) b2.setAttribute('href', ht.rightBtnLink);
    }
    var hint = q('.hero-scroll-hint span');
    if (hint && ht.bottomGuide != null) { hint.innerHTML = esc(ht.bottomGuide); seal(hint); }
  };

  // ---------- 阶段2：模块级渲染器（翻译感知，接管 M3 桥接） ----------
  function nl2br(s) { return String(s == null ? '' : s).replace(/\n/g, '<br>'); }
  function setText(el, val) {
    if (!el || val == null || val === '') return;
    el.textContent = val;
    el.removeAttribute('data-lang-key');
  }
  function setHTML(el, val) {
    if (!el || val == null || val === '') return;
    el.innerHTML = window.HONDVO_sanitizeHTML ? window.HONDVO_sanitizeHTML(val) : esc(val);
    el.removeAttribute('data-lang-key');
  }
  function markInjected(el) {
    if (!el) return;
    el.setAttribute('data-bridge-injected', '1');
    if (window.revealObs) {
      var rs = el.querySelectorAll('.reveal');
      for (var i = 0; i < rs.length; i++) window.revealObs.observe(rs[i]);
    }
  }

  var moduleRenderers = {};

  // about：who / values / spirit / cases / team / partners（多区块，DOM 定位）
  moduleRenderers.about = function (d) {
    if (!d || typeof d !== 'object') return;
    if (d.who && typeof d.who === 'object') {
      setText(q('#about-who h2'), d.who.title);
      setText(q('.about-2col .about-text h3'), d.who.subtitle);
      setHTML(q('.about-2col .about-text p'), nl2br(esc(d.who.description)));
    }
    if (d.values && Array.isArray(d.values.items) && d.values.items.length) {
      var vg = q('.values-grid');
      if (vg) {
        vg.innerHTML = d.values.items.map(function (v, i) {
          return '<div class="iq-item reveal"><div class="letter">' + String(i + 1).padStart(2, '0') + '</div><h4>' + esc(v.title) + '</h4><p>' + esc(v.desc) + '</p></div>';
        }).join('');
        markInjected(vg);
      }
    }
    if (d.spirit && Array.isArray(d.spirit.items) && d.spirit.items.length) {
      var sr = q('#about-spirit .iqoq-row');
      if (sr) {
        sr.innerHTML = d.spirit.items.map(function (v) {
          return '<div class="iq-item reveal"><div class="letter" style="font-size:30px;">' + esc(v.icon || '') + '</div><h4>' + esc(v.title) + '</h4><p>' + esc(v.desc) + '</p></div>';
        }).join('');
        markInjected(sr);
      }
    }
    if (d.cases && Array.isArray(d.cases.items) && d.cases.items.length) {
      var cg = q('.cases-grid');
      if (cg) {
        cg.innerHTML = d.cases.items.map(function (c) {
          return '<div class="case-card reveal"><span class="case-industry">' + esc(c.name || '') + '</span><h4>' + esc(c.name || '') + '</h4><span class="case-v">' + esc(c.desc || '') + '</span></div>';
        }).join('');
        markInjected(cg);
      }
    }
    if (d.team && Array.isArray(d.team.items) && d.team.items.length) {
      var tg = q('.team-grid');
      if (tg) {
        tg.innerHTML = d.team.items.map(function (t) {
          var avatar = t.avatar
            ? '<img src="' + esc(normMedia(t.avatar)) + '" alt="' + esc(t.name || '') + '">'
            : '<span>' + esc((t.name || '?').charAt(0)) + '</span>';
          return '<div class="team-card reveal"><div class="team-avatar">' + avatar + '</div><h4>' + esc(t.name) + '</h4><div class="role">' + esc(t.title) + '</div><p>' + esc(t.bio) + '</p></div>';
        }).join('');
        markInjected(tg);
      }
    }
    // partners 渲染已移除：原逻辑在 partners 数据为空时仍会遗留空占位 div，已从渲染逻辑中删除
  };

  // products：所有 .prod-grid（首页核心业务 + 产品页核心产品线）
  moduleRenderers.products = function (d) {
    if (!Array.isArray(d) || !d.length) return;
    var core = d.filter(function (p) { return p.cat === 'core' || !p.cat; });
    if (!core.length) return;
    qa('.prod-grid').forEach(function (grid) {
      // 首页卡片由 CMS 重建后仍需可点击跳转（原模板丢失了内联 onclick）：
      // 统一改用 data-goto + 事件委托，避免 CMS 重建时再次丢失。
      var inHome = !!(grid.closest && grid.closest('#page-home'));
      grid.innerHTML = core.map(function (p) {
        return '<div class="prod-card"' + (inHome ? ' data-goto="#page-products"' : '') + '><div class="card-img"><img src="' + esc(normMedia(p.image || '')) + '" alt="' + esc(p.name || '') + '"></div><div class="card-body"><h3>' + esc(p.name || '') + '</h3><p>' + esc(p.desc || '') + '</p><span class="link">' + esc(p.specs || '') + '</span></div></div>';
      }).join('');
      markInjected(grid);
    });
  };

  // mold：按 type 分组填充 6 个 .eq-block
  moduleRenderers.mold = function (d) {
    if (!Array.isArray(d) || !d.length) return;
    var groups = {};
    d.forEach(function (e) { (groups[e.type] = groups[e.type] || []).push(e); });
    var typeOrder = ['cnc', 'edm', 'wire', 'grinder', 'injection', 'qc'];
    // Phase 1：标题优先走前端 I18N 字典（随语言切换），无字典时回退英文（避免硬编码）
    var typeTitlesKey = { cnc: 'mold_cnc', edm: 'mold_edm', wire: 'mold_wire', grinder: 'mold_grinder', injection: 'mold_injection', qc: 'mold_qc' };
    var typeTitlesFallback = { cnc: 'CNC Machining Centers', edm: 'EDM Machines', wire: 'Wire-Cut EDM', grinder: 'Precision Grinders', injection: 'Injection Molding Machines', qc: 'Quality Inspection Equipment' };
    var lang = curLang();
    var L = function (key, fallback) {
      try {
        if (typeof I18N !== 'undefined' && I18N[key]) {
          if (I18N[key][lang]) return I18N[key][lang];
          if (I18N[key].en) return I18N[key].en;
        }
      } catch (e) {}
      return fallback;
    };
    qa('#page-mold .eq-block').forEach(function (block, idx) {
      var type = typeOrder[idx];
      var items = groups[type];
      if (!items || !items.length) return;
      var h3 = block.querySelector('h3');
      if (h3) h3.textContent = L(typeTitlesKey[type], typeTitlesFallback[type]) + ' (' + items.length + ' units)';
      var tags = block.querySelector('.eq-tags');
      if (tags) {
        tags.innerHTML = items.map(function (e) {
          return '<span class="eq-tag reveal"><strong>' + esc(e.name) + '</strong> ' + esc(e.model || '') + ' ' + esc(e.specs || '') + '</span>';
        }).join('');
        markInjected(tags);
      }
    });
  };

  // qual：资质页（env 环境图 + iqoqpq）
  moduleRenderers.qual = function (d) {
    if (!d || typeof d !== 'object') return;
    if (d.env && typeof d.env === 'object') {
      setText(q('#qual-env h2'), d.env.title);
      var envGallery = q('#qual-env + .workshop-gallery');
      if (envGallery && Array.isArray(d.env.images) && d.env.images.length) {
        envGallery.innerHTML = d.env.images.map(function (img) {
          return '<div class="img-cert-card" onclick="openLightbox(\'' + esc(normMedia(img)) + '\')"><img src="' + esc(normMedia(img)) + '" alt=""></div>';
        }).join('');
        markInjected(envGallery);
      }
    }
    if (d.iqoqpq && typeof d.iqoqpq === 'object') {
      setText(q('#qual-iqoq h2'), d.iqoqpq.title);
      var iqRow = q('#qual-iqoq + .iqoq-row');
      if (iqRow) {
        var items = [d.iqoqpq.iq, d.iqoqpq.oq, d.iqoqpq.pq].filter(Boolean);
        iqRow.innerHTML = items.map(function (it) {
          var letter = (it.title || '').split(' ')[0] || '';
          return '<div class="iq-item reveal"><div class="letter">' + esc(letter) + '</div><h4>' + esc(it.title) + '</h4><p>' + esc(it.desc) + '</p></div>';
        }).join('');
        markInjected(iqRow);
      }
    }
  };

  // prod-categories：产品分类折叠栏
  moduleRenderers['prod-categories'] = function (d) {
    if (!Array.isArray(d) || !d.length) return;
    var acc = q('.prod-accordion');
    if (!acc) return;
    acc.innerHTML = d.map(function (c) {
      var items = (c.items || []).map(function (it) {
        var tags = (it.tags || []).map(function (tg) { return '<span>' + esc(tg) + '</span>'; }).join('');
        return '<div class="acc-card"><img src="' + esc(normMedia(it.image || '')) + '" alt="' + esc(it.name || '') + '"><div class="acc-card-name">' + esc(it.name || '') + '</div><div class="acc-card-tags">' + tags + '</div></div>';
      }).join('');
      return '<div class="acc-item">' +
        '<button class="acc-header" onclick="toggleAccordion(this)"><span class="acc-icon">' + esc(c.icon || '') + '</span><span class="acc-label">' + esc(c.title || '') + '</span><span class="acc-arrow">&#9660;</span></button>' +
        '<div class="acc-body"><div class="acc-content"><p class="acc-desc">' + esc(c.desc || '') + '</p><div class="acc-grid">' + items + '</div></div></div>' +
        '</div>';
    }).join('');
    markInjected(acc);
  };

  // mold-images：模具图片墙（带 label）
  moduleRenderers['mold-images'] = function (d) {
    if (!Array.isArray(d) || !d.length) return;
    var g = q('#page-mold .workshop-gallery');
    if (!g) return;
    g.innerHTML = d.map(function (it) {
      return '<div class="img-cert-card" onclick="openLightbox(\'' + esc(normMedia(it.image || '')) + '\')"><img src="' + esc(normMedia(it.image || '')) + '" alt="' + esc(it.label || '') + '"><div class="card-label">' + esc(it.label || '') + '</div></div>';
    }).join('');
    markInjected(g);
  };

  // news：新闻列表
  moduleRenderers.news = function (d) {
    if (!Array.isArray(d) || !d.length) return;
    var list = q('.news-list');
    if (!list) return;
    list.innerHTML = d.map(function (n) {
      return '<div class="news-item reveal" tabindex="0">' +
        '<div class="meta"><span class="date">' + esc(n.date || '') + '</span><span>' + esc(n.tag || '') + '</span></div>' +
        '<div><h4>' + esc(n.title || '') + '</h4><p>' + esc(n.summary || '') + '</p></div>' +
        '</div>';
    }).join('');
    markInjected(list);
  };

  // contact：双公司信息（label 随语言切换）
  moduleRenderers.contact = function (d) {
    if (!d || typeof d !== 'object') return;
    var block = q('.ci-block');
    if (!block) return;
    var lang = curLang();
    var L = function (k) {
      try {
        if (typeof I18N !== 'undefined' && I18N[k] && I18N[k][lang]) return I18N[k][lang];
        if (typeof I18N !== 'undefined' && I18N[k] && I18N[k].en) return I18N[k].en;
      } catch (e) {}
      return '';
    };
    var rows = '';
    if (d.mold_name || d.mold_addr) {
      rows += '<div class="ci-row"><span class="ci-label">' + L('ct_mold_label') + '</span><span class="ci-val"><strong>' + esc(d.mold_name || '') + '</strong><span>' + esc(d.mold_addr || '') + '</span></span></div>';
    }
    if (d.tech_name || d.tech_addr) {
      rows += '<div class="ci-row"><span class="ci-label">' + L('ct_tech_label') + '</span><span class="ci-val"><strong>' + esc(d.tech_name || '') + '</strong><span>' + esc(d.tech_addr || '') + '</span></span></div>';
    }
    if (d.phone) rows += '<div class="ci-row"><span class="ci-label">' + L('ct_phone_label') + '</span><span class="ci-val">' + esc(d.phone) + '</span></div>';
    if (d.email) rows += '<div class="ci-row"><span class="ci-label">' + L('ct_email_label') + '</span><span class="ci-val">' + esc(d.email) + '</span></div>';
    if (d.hours) rows += '<div class="ci-row"><span class="ci-label">' + L('ct_hours_label') + '</span><span class="ci-val">' + esc(d.hours) + '</span></div>';
    if (!rows) return;
    block.innerHTML = rows;
    markInjected(block);
  };

  // 渲染全部已接管模块（当前语言翻译数据）
  function applyModules(lang) {
    Object.keys(moduleRenderers).forEach(function (module) {
      var mod = cache[module];
      if (!mod) return;
      var data = mod[lang] || mod.zh;
      if (data == null) return;
      try {
        moduleRenderers[module](data);
      } catch (e) {
        console.warn('[CMS-Render] 模块渲染失败 ' + module + ': ' + e.message);
      }
    });
  }

  // ---------- 渲染入口 ----------
  function applyCms(lang) {
    qa('[data-cms]').forEach(function (el) {
      try {
        var spec = el.getAttribute('data-cms'); // "module.path"
        var sp = spec.split('.');
        var module = sp[0];
        var path = sp.slice(1).join('.');
        var mod = cache[module];
        if (!mod) return;
        var data = mod[lang] || mod.zh;
        var type = el.getAttribute('data-cms-type') || 'text';
        var val = path ? pick(data, path) : data;
        var renderer = renderers[type];
        if (!renderer) return;
        if (type === 'list' || type === 'images' || type === 'slider' || type === 'heroText') {
          renderer(el, val);
        } else if (val != null && val !== '') {
          renderer(el, val);
        }
      } catch (e) {
        console.warn('[CMS-Render] 渲染失败 ' + el.getAttribute('data-cms') + ': ' + e.message);
      }
    });
    applyModules(lang);
  }

  function load() {
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, TIMEOUT);
    // 并行拉取内容与媒体库名称映射，确保首次渲染时 normMedia 能按媒体库解析（删图即失效）
    Promise.all([
      fetch(API, { signal: ctrl.signal }).then(function (r) { return r.json(); }),
      fetchMediaMap()
    ])
      .then(function (results) {
        clearTimeout(timer);
        var res = results[0];
        if (!res || res.code !== 0 || !Array.isArray(res.data)) return;
        res.data.forEach(function (item) {
          if (!item || !item.module || item.zh == null) return; // 必须有中文源
          var mod = {};
          // 新接口直接返回 {module, zh, en, de, ...} 全语言合并对象
          VALID_LANGS.forEach(function (l) {
            if (item[l] != null) {
              try { mod[l] = (typeof item[l] === 'string') ? JSON.parse(item[l]) : item[l]; }
              catch (e) { mod[l] = item[l]; }
            }
          });
          cache[item.module] = mod;
        });
        loaded = true;
        applyCms(curLang());
        console.log('[CMS-Render] 已加载 ' + res.data.length + ' 个模块，渲染语言：' + curLang());
      })
      .catch(function (e) {
        clearTimeout(timer);
        console.log('[CMS-Render] 后端未连接，使用内置静态内容 (' + e.message + ')');
      });
  }

  // 语言切换挂钩：包装 switchLang，切换后用缓存翻译重渲染
  function hookSwitchLang() {
    if (typeof window.switchLang !== 'function') {
      window.addEventListener('load', hookSwitchLang);
      return;
    }
    var orig = window.switchLang;
    window.switchLang = function (lang) {
      var r = orig(lang);
      if (loaded) applyCms(lang);
      return r;
    };
  }

  // 全局图片兜底：任何 <img> 加载失败（404 / 断链 / 竞态）一律替换为中性占位图，避免破图
  function bindImgFallback() {
    document.addEventListener('error', function (e) {
      var t = e.target;
      if (t && t.tagName === 'IMG' && t.getAttribute('data-ph') !== '1') {
        t.setAttribute('data-ph', '1');
        t.src = PLACEHOLDER;
      }
    }, true); // 捕获阶段：error 事件不冒泡
  }
  function boot() {
    bindImgFallback();
    hookSwitchLang();
    load();
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, 400);
  } else {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 400); });
  }
  window.addEventListener('load', function () {
    if (!loaded) load();
    if (typeof window.switchLang !== 'function') hookSwitchLang();
  });

  // ---------- 产品卡点击委托（覆盖静态卡 + CMS 动态卡） ----------
  // 静态 HTML 原用内联 onclick="location.href='#page-products'"，CMS 重建时会丢失；
  // 统一改为委托，静态与动态卡片行为一致，且断网（CMS 不接管）时同样有效。
  document.addEventListener('click', function (e) {
    var card = e.target && e.target.closest && e.target.closest('.prod-card[data-goto]');
    if (!card) return;
    var hash = card.getAttribute('data-goto');
    if (!hash) return;
    if (e.target.closest('a[href]')) return; // 卡内已有链接时不重复跳转
    location.hash = hash;
  });

  // 供调试 / 外部调用
  window.CMS_RENDER = {
    isLoaded: function () { return loaded; },
    langs: function (module) { return cache[module] ? Object.keys(cache[module]) : []; },
    reRender: function (lang) { if (loaded) applyCms(lang || curLang()); }
  };
})();

(function () {
  var API = (window.HONDVO_API || '/api') + '/content/public/list';
  var TIMEOUT = 1500;
  var injected = {};

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function nl2br(s) {
    return String(s == null ? '' : s).replace(/\n/g, '<br>');
  }
  function q(sel) { return document.querySelector(sel); }
  function qa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function setText(el, val) {
    if (!el || val == null || val === '') return;
    el.textContent = val;
    el.removeAttribute('data-lang-key');
  }
  function setHTML(el, val) {
    if (!el || val == null || val === '') return;
    el.innerHTML = window.HONDVO_sanitizeHTML ? window.HONDVO_sanitizeHTML(val) : esc(val);
    el.removeAttribute('data-lang-key');
  }
  function mark(el) {
    if (!el) return;
    el.setAttribute('data-bridge-injected', '1');
    if (window.revealObs) {
      var rs = el.querySelectorAll('.reveal');
      for (var i = 0; i < rs.length; i++) window.revealObs.observe(rs[i]);
    }
  }

  // 图片加载兜底：加载中显示 shimmer，加载完成停止动画，失败显示占位（捕获阶段监听，img error 不冒泡）
  document.addEventListener('load', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && t.parentNode && t.parentNode.classList && t.parentNode.classList.contains('card-img')) {
      t.parentNode.classList.add('img-loaded');
    }
  }, true);
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && !t.getAttribute('data-fb')) {
      t.setAttribute('data-fb', '1');
      t.style.display = 'none';
      var c = t.parentNode;
      if (c && c.classList) c.classList.add('img-fallback');
    }
  }, true);

  // ---------- 首页 ----------
  function renderHome(d) {
    if (!d || typeof d !== 'object') return;
    if (Array.isArray(d.heroslides) && d.heroslides.length) {
      var slidesBox = q('.hero-slides');
      var dotsBox = q('.hero-indicators');
      if (slidesBox) {
        slidesBox.innerHTML = d.heroslides.map(function (s, i) {
          var bg = (typeof s === 'string') ? s : (s && s.bgImage) || '';
          return '<div class="hero-slide' + (i === 0 ? ' active' : '') + '" style="background-image:url(\'' + bg + '\')"></div>';
        }).join('');
      }
      if (dotsBox) {
        dotsBox.innerHTML = d.heroslides.map(function (s, i) {
          return '<div class="hero-dot' + (i === 0 ? ' active' : '') + '" data-slide="' + i + '"></div>';
        }).join('');
      }
      var ht = d.heroText || {};
      var s0 = (typeof d.heroslides[0] === 'string') ? {} : (d.heroslides[0] || {});
      setText(q('.hero .hero-tag'), ht.subTitle || s0.subTitle);
      setText(q('.hero h1 span[data-lang-key="hero_title"]'), ht.title1 || s0.title1);
      setText(q('.hero h1 strong[data-lang-key="hero_sub"]'), ht.title2 || s0.title2);
      setHTML(q('.hero .hero-sub'), nl2br((ht.desc1 || s0.desc1 || '') + '<br>' + (ht.desc2 || s0.desc2 || '')));
      var b1 = q('.hero .btn-primary');
      if (b1) { setText(b1, ht.leftBtnText || s0.leftBtnText); if (ht.leftBtnLink || s0.leftBtnLink) b1.setAttribute('href', ht.leftBtnLink || s0.leftBtnLink); }
      var b2 = q('.hero .btn-ghost');
      if (b2) { setText(b2, ht.rightBtnText || s0.rightBtnText); if (ht.rightBtnLink || s0.rightBtnLink) b2.setAttribute('href', ht.rightBtnLink || s0.rightBtnLink); }
      setText(q('.hero .hero-scroll-hint span'), ht.bottomGuide || s0.bottomGuide);
    }
    if (Array.isArray(d.stats) && d.stats.length) {
      var bar = q('.stats-bar');
      if (bar) {
        var html = '';
        d.stats.forEach(function (st) {
          html += '<div class="stat-item reveal"><div class="num">' + esc(st.value) + '</div><div class="label">' + esc(st.label) + '</div></div>';
        });
        bar.innerHTML = html;
        bar.setAttribute('data-bridge-injected', 'true');
        var items = bar.querySelectorAll('.stat-item');
        if (window.revealObs) {
          items.forEach(function (it) { window.revealObs.observe(it); });
        } else {
          items.forEach(function (it) { it.classList.add('revealed'); });
        }
      }
    }
  }

  // ---------- 关于我们 ----------
  function renderAbout(d) {
    if (!d || typeof d !== 'object') return;
    if (d.who && typeof d.who === 'object') {
      setText(q('#about-who h2'), d.who.title);
      setText(q('#about-who .about-text h3'), d.who.subtitle);
      setHTML(q('#about-who .about-text p[data-lang-key="about_tech_desc"]'), nl2br(esc(d.who.description)));
    }
    if (d.values && Array.isArray(d.values.items) && d.values.items.length) {
      var vg = q('.values-grid');
      if (vg) {
        vg.innerHTML = d.values.items.map(function (v, i) {
          return '<div class="iq-item reveal"><div class="letter">' + String(i + 1).padStart(2, '0') + '</div><h4>' + esc(v.title) + '</h4><p>' + esc(v.desc) + '</p></div>';
        }).join('');
      }
    }
    if (d.spirit && Array.isArray(d.spirit.items) && d.spirit.items.length) {
      var sr = q('#about-spirit .iqoq-row');
      if (sr) {
        sr.innerHTML = d.spirit.items.map(function (v) {
          return '<div class="iq-item reveal"><div class="letter" style="font-size:30px;">' + esc(v.icon || '') + '</div><h4>' + esc(v.title) + '</h4><p>' + esc(v.desc) + '</p></div>';
        }).join('');
      }
    }
    if (d.cases && Array.isArray(d.cases.items) && d.cases.items.length) {
      var cg = q('.cases-grid');
      if (cg) {
        cg.innerHTML = d.cases.items.map(function (c) {
          return '<div class="case-card reveal"><span class="case-industry">' + esc(c.name || '') + '</span><h4>' + esc(c.name || '') + '</h4><span class="case-v">' + esc(c.desc || '') + '</span></div>';
        }).join('');
      }
    }
    if (d.team && Array.isArray(d.team.items) && d.team.items.length) {
      var tg = q('.team-grid');
      if (tg) {
        tg.innerHTML = d.team.items.map(function (t) {
          var avatar = t.avatar
            ? '<img src="' + esc(t.avatar) + '" alt="' + esc(t.name || '') + '">'
            : '<span>' + esc((t.name || '?').charAt(0)) + '</span>';
          return '<div class="team-card reveal"><div class="team-avatar">' + avatar + '</div><h4>' + esc(t.name) + '</h4><div class="role">' + esc(t.title) + '</div><p>' + esc(t.bio) + '</p></div>';
        }).join('');
      }
    }
    // M8: 全球合作伙伴 — 品牌列表（地图 SVG 保持内置，品牌数据来自后端 partners）
    // partners 渲染已移除：避免空占位 div
  }

  // ---------- 产品与服务 ----------
  function renderProducts(d) {
    if (!Array.isArray(d) || !d.length) return;
    var core = d.filter(function (p) { return p.cat === 'core' || !p.cat; });
    if (!core.length) return;
    // M8: 遍历所有 .prod-grid（首页核心业务卡 + 产品页核心产品线）
    var grids = qa('.prod-grid');
    grids.forEach(function (grid) {
      // 首页卡片统一改用 data-goto + 全局事件委托，避免 CMS 重建后点击失效
      var inHome = !!(grid.closest && grid.closest('#page-home'));
      grid.innerHTML = core.map(function (p) {
        return '<div class="prod-card"' + (inHome ? ' data-goto="#page-products"' : '') + '><div class="card-img"><img src="' + esc(p.image || '') + '" alt="' + esc(p.name || '') + '"></div><div class="card-body"><h3>' + esc(p.name || '') + '</h3><p>' + esc(p.desc || '') + '</p><span class="link">' + esc(p.specs || '') + '</span></div></div>';
      }).join('');
      mark(grid);
    });
  }

  // ---------- 模具中心 ----------
  function renderMold(d) {
    if (!Array.isArray(d) || !d.length) return;
    if (!(d[0] && d[0].qty != null)) return; // 仅当后台提供新 schema（含 qty/origin）时接管；否则保留内嵌兜底
    var acc = q('#moldEqAcc');
    if (!acc) return;
    var groups = {};
    d.forEach(function (e) { (groups[e.type] = groups[e.type] || []).push(e); });
    var typeOrder = ['cnc', 'edm', 'wire', 'grinder', 'injection', 'qc'];
    var typeTitles = { cnc: 'CNC 数控加工设备', edm: 'EDM 电火花加工设备', wire: '线切割设备', grinder: '精密磨床设备', injection: '注塑机', qc: '品质检测设备' };
    acc.innerHTML = '';
    typeOrder.forEach(function (type) {
      var items = groups[type];
      if (!items || !items.length) return;
      var total = items.reduce(function (s, e) { return s + (parseInt(e.qty, 10) || 1); }, 0);
      var rows = items.map(function (e) {
        return '<tr class="eq-row"><td><span class="eq-dev">' + esc(e.name) + '</span><div class="eq-model">' + esc(e.model || '') + '</div></td><td>' + esc(e.origin || '') + '</td><td>' + esc(e.specs || '') + '</td><td class="eq-qty">×' + (parseInt(e.qty, 10) || 1) + '</td><td><div class="eq-img" data-cap="' + esc(e.name) + ' 设备实拍图">设备<br>实拍图</div></td></tr>';
      }).join('');
      var item = document.createElement('div');
      item.className = 'eq-item';
      item.innerHTML = '<div class="eq-head"><span class="eq-dot"></span><span class="t-zh">' + esc(typeTitles[type]) + '</span><span class="eq-badge">' + total + ' 台</span><span class="eq-chev">&#9656;</span></div><div class="eq-body"><div class="eq-scroll"><table class="eq-table"><thead><tr><th>设备 / Model</th><th>产地</th><th>精度 / 吨位</th><th>数量</th><th>图片</th></tr></thead><tbody>' + rows + '</tbody></table></div></div>';
      acc.appendChild(item);
    });
  }

  // ---------- 资质实力 ----------
  function renderQual(d) {
    if (!d || typeof d !== 'object') return;
    if (d.env && typeof d.env === 'object') {
      setText(q('#qual-env h2'), d.env.title);
      var envGallery = q('#qual-env + .workshop-gallery');
      if (envGallery && Array.isArray(d.env.images) && d.env.images.length) {
        envGallery.innerHTML = d.env.images.map(function (img) {
          return '<div class="img-cert-card" onclick="openLightbox(\'' + esc(img) + '\')"><img src="' + esc(img) + '" alt=""></div>';
        }).join('');
      }
    }
    if (d.iqoqpq && typeof d.iqoqpq === 'object') {
      setText(q('#qual-iqoq h2'), d.iqoqpq.title);
      var iqRow = q('#qual-iqoq + .iqoq-row');
      if (iqRow) {
        var items = [d.iqoqpq.iq, d.iqoqpq.oq, d.iqoqpq.pq].filter(Boolean);
        iqRow.innerHTML = items.map(function (it) {
          var letter = (it.title || '').split(' ')[0] || '';
          return '<div class="iq-item reveal"><div class="letter">' + esc(letter) + '</div><h4>' + esc(it.title) + '</h4><p>' + esc(it.desc) + '</p></div>';
        }).join('');
      }
    }
  }

  // ---------- M8: 客户 Logo 墙 ----------
  function renderLogoWall(d) {
    if (!Array.isArray(d) || !d.length) return;
    var grid = q('.logo-wall-grid');
    if (!grid) return;
    grid.innerHTML = d.map(function (it) {
      return '<div class="logo-wall-item"><div class="logo-wall-img"><img src="' + esc(it.image || 'images/logo.webp') + '" alt="' + esc(it.name || '') + '" loading="lazy"></div><span class="logo-wall-name">' + esc(it.name || '') + '</span></div>';
    }).join('');
    mark(grid);
    // ★ CMS 重建会冲掉 home-dyn.js 已构造的 .marquee-track，须通知其重建跑马灯
    if (typeof window.__reinitMarquee === 'function') window.__reinitMarquee();
  }

  // ---------- M8: 资质证书（首页 + 资质实力页共用 home-certs 数据） ----------
  function renderCerts(d) {
    if (!Array.isArray(d) || !d.length) return;
    var galleries = qa('.cert-gallery');
    galleries.forEach(function (g) {
      g.innerHTML = d.map(function (c) {
        return '<div class="img-cert-card" onclick="openLightbox(\'' + esc(c.image || '') + '\')"><img src="' + esc(c.image || '') + '" alt="' + esc(c.label || '') + '"><div class="card-label">' + esc(c.label || '') + '</div></div>';
      }).join('');
      mark(g);
    });
  }

  // ---------- M8: 首页生产环境图 ----------
  function renderWorkshop(d) {
    if (!d || !Array.isArray(d.images) || !d.images.length) return;
    var g = q('#page-home .workshop-gallery');
    if (!g) return;
    g.innerHTML = d.images.map(function (img) {
      return '<div class="img-cert-card" onclick="openLightbox(\'' + esc(img) + '\')"><img src="' + esc(img) + '" alt=""></div>';
    }).join('');
    mark(g);
  }

  // ---------- M8: 产品分类折叠栏 ----------
  function renderProdCategories(d) {
    if (!Array.isArray(d) || !d.length) return;
    var acc = q('.prod-accordion');
    if (!acc) return;
    acc.innerHTML = d.map(function (c) {
      var items = (c.items || []).map(function (it) {
        var tags = (it.tags || []).map(function (tg) { return '<span>' + esc(tg) + '</span>'; }).join('');
        return '<div class="acc-card"><img src="' + esc(it.image || '') + '" alt="' + esc(it.name || '') + '"><div class="acc-card-name">' + esc(it.name || '') + '</div><div class="acc-card-tags">' + tags + '</div></div>';
      }).join('');
      return '<div class="acc-item">' +
        '<button class="acc-header" onclick="toggleAccordion(this)"><span class="acc-icon">' + esc(c.icon || '') + '</span><span class="acc-label">' + esc(c.title || '') + '</span><span class="acc-arrow">&#9660;</span></button>' +
        '<div class="acc-body"><div class="acc-content"><p class="acc-desc">' + esc(c.desc || '') + '</p><div class="acc-grid">' + items + '</div></div></div>' +
        '</div>';
    }).join('');
    mark(acc);
  }

  // ---------- M8: 模具图片 ----------
  function renderMoldImages(d) {
    if (!Array.isArray(d) || !d.length) return;
    var g = q('#page-mold .workshop-gallery');
    if (!g) return;
    g.innerHTML = d.map(function (it) {
      return '<div class="img-cert-card" onclick="openLightbox(\'' + esc(it.image || '') + '\')"><img src="' + esc(it.image || '') + '" alt="' + esc(it.label || '') + '"><div class="card-label">' + esc(it.label || '') + '</div></div>';
    }).join('');
    mark(g);
  }

  // ---------- M8: 新闻列表 ----------
  function renderNews(d) {
    if (!Array.isArray(d) || !d.length) return;
    var list = q('.news-list');
    if (!list) return;
    list.innerHTML = d.map(function (n) {
      return '<div class="news-item reveal" tabindex="0">' +
        '<div class="meta"><span class="date">' + esc(n.date || '') + '</span><span>' + esc(n.tag || '') + '</span></div>' +
        '<div><h4>' + esc(n.title || '') + '</h4><p>' + esc(n.summary || '') + '</p></div>' +
        '</div>';
    }).join('');
    mark(list);
  }

  // ---------- M8: 双公司信息 ----------
  function renderContact(d) {
    if (!d || typeof d !== 'object') return;
    var block = q('.ci-block');
    if (!block) return;
    var rows = '';
    if (d.mold_name || d.mold_addr) {
      rows += '<div class="ci-row"><span class="ci-label">Mold Company</span><span class="ci-val"><strong>' + esc(d.mold_name || '') + '</strong><span>' + esc(d.mold_addr || '') + '</span></span></div>';
    }
    if (d.tech_name || d.tech_addr) {
      rows += '<div class="ci-row"><span class="ci-label">Technology Company</span><span class="ci-val"><strong>' + esc(d.tech_name || '') + '</strong><span>' + esc(d.tech_addr || '') + '</span></span></div>';
    }
    if (d.phone) rows += '<div class="ci-row"><span class="ci-label">Phone</span><span class="ci-val">' + esc(d.phone) + '</span></div>';
    if (d.email) rows += '<div class="ci-row"><span class="ci-label">Email</span><span class="ci-val">' + esc(d.email) + '</span></div>';
    if (d.hours) rows += '<div class="ci-row"><span class="ci-label">Working Hours</span><span class="ci-val">' + esc(d.hours) + '</span></div>';
    if (!rows) return;
    block.innerHTML = rows;
    mark(block);
  }

  // ---------- 页脚社交图标（后台 social 模块，footer 动态渲染） ----------
  // data 结构：{ icons: [{key,label,image,link,tooltip}] }，image 为媒体库 original_name
  function renderSocial(d) {
    if (!d || !Array.isArray(d.icons) || !d.icons.length) return;
    var boxes = document.querySelectorAll('#footer-social-icons');
    if (!boxes.length) return;
    var html = d.icons.map(function (it) {
      var key = it.key || '';
      var img = String(it.image || '').replace(/^images\//, '');
      var link = it.link || ('#social-' + key);
      var tip = it.tooltip || '';
      var qr = it.qr ? resolveQrUrl(it.qr) : '';
      var attrs = 'class="si-link" href="' + esc(link) + '" data-tip="' + esc(tip) + '" aria-label="' + esc(key) + '"';
      if (qr) attrs += ' data-qr="' + esc(qr) + '"';
      return '<a ' + attrs + '><img class="si-img" src="' + esc(img) + '" alt="' + esc(key) + '"></a>';
    }).join('');
    // 全站所有页脚统一渲染（A2 起每页一个 .site-footer-mount，逐个填充）
    for (var i = 0; i < boxes.length; i++) {
      var box = boxes[i];
      box.innerHTML = html;
      mark(box);
      // 事件委托：配置了二维码的图标点击弹出灯箱大图，不跳转；未配置二维码的图标维持原有链接/锚点行为
      if (!box._qrBound) {
        box._qrBound = true;
        (function (b) {
          b.addEventListener('click', function (e) {
            var a = e.target && e.target.closest ? e.target.closest('a.si-link[data-qr]') : null;
            if (!a || !b.contains(a)) return;
            e.preventDefault();
            var url = a.getAttribute('data-qr') || '';
            if (/^images\//.test(url) && window.HONDVO_MEDIA_MAP && window.HONDVO_MEDIA_MAP[url.replace(/^images\//, '')]) {
              url = window.HONDVO_MEDIA_MAP[url.replace(/^images\//, '')]; // 渲染时映射未就绪，点击时补解析
            }
            if (window.openLightbox) window.openLightbox(url);
          });
        })(box);
      }
    }
    // 按媒体库 name-map 解析图片 URL（media-sync 的 DOMContentLoaded 扫描早于注入，此处需自行解析）
    if (window.resolveFooterSocialIcons) window.resolveFooterSocialIcons();
  }

  // ---------- 主流程 ----------
  // A2 阶段2：全站 12 个数据模块均由 cms-render.js 引擎接管（动态渲染 + 翻译联动），M3 桥接让位，避免重复写入
  var CMS_OWNED = {
    'home': 1, 'logo-wall': 1, 'home-certs': 1, 'workshop': 1,
    'about': 1, 'products': 1, 'mold': 1, 'qual': 1,
    'prod-categories': 1, 'mold-images': 1, 'news': 1, 'contact': 1
  };
  function applyModule(module, data) {
    if (CMS_OWNED[module]) return; // 交由 cms-render.js 渲染
    try {
      switch (module) {
        case 'home': renderHome(data); break;
        case 'about': renderAbout(data); break;
        case 'products': renderProducts(data); break;
        case 'mold': renderMold(data); break;
        case 'qual': renderQual(data); break;
        case 'logo-wall': renderLogoWall(data); break;
        case 'home-certs': renderCerts(data); break;
        case 'workshop': renderWorkshop(data); break;
        case 'prod-categories': renderProdCategories(data); break;
        case 'mold-images': renderMoldImages(data); break;
        case 'news': renderNews(data); break;
        case 'contact': renderContact(data); break;
        case 'social': renderSocial(data); break;
      }
      injected[module] = true;
    } catch (e) {
      console.warn('[HONDVO-Content] 渲染 ' + module + ' 失败: ' + e.message);
    }
  }

  function boot() {
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, TIMEOUT);
    fetch(API, { signal: ctrl.signal })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        clearTimeout(timer);
        if (!res || res.code !== 0 || !Array.isArray(res.data)) return;
        var byModule = {};
        res.data.forEach(function (item) {
          if (!item || !item.module || !item.content) return;
          try {
            var parsed = JSON.parse(item.content);
            if (parsed && typeof parsed === 'object') byModule[item.module] = parsed;
          } catch (e) {}
        });
        // ── 全球合作伙伴·国家可配置化：注入 countries 到世界地图（logo 列表仍由 cms-render 独立渲染，双轨互不影响）──
        if (byModule.about && byModule.about.partners && Array.isArray(byModule.about.partners.countries) && byModule.about.partners.countries.length) {
          var countries = byModule.about.partners.countries;
          if (typeof I18N !== 'undefined') {
            for (var ci = 0; ci < countries.length; ci++) {
              var cc = countries[ci];
              if (!cc || !cc.id) continue;
              if (cc.names && typeof cc.names === 'object') {
                I18N['partner_' + cc.id] = I18N['partner_' + cc.id] || {};
                for (var cl in cc.names) { if (cc.names[cl]) I18N['partner_' + cc.id][cl] = cc.names[cl]; }
              }
            }
          }
          if (window.__setPartnerCountries) window.__setPartnerCountries(countries);
        }
        Object.keys(byModule).forEach(function (m) { applyModule(m, byModule[m]); });
        console.log('[HONDVO-Content] 已注入模块: ' + Object.keys(injected).join(','));
      })
      .catch(function (e) {
        clearTimeout(timer);
        console.log('[HONDVO-Content] 后端未连接，使用内置内容 (' + e.message + ')');
      });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, 300);
  } else {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 300); });
  }
})();
(function () {
  var API = (window.HONDVO_API || '/api');
  var TIMEOUT = 1500;

  function curLang() { try { return sessionStorage.getItem('hondvo_lang') || 'en'; } catch (e) { return 'en'; } }
  function t(key) {
    return (typeof I18N !== 'undefined' && I18N[key] && I18N[key][curLang()]) || '';
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function q(sel) { return document.querySelector(sel); }
  function getJSON(url) {
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, TIMEOUT);
    return fetch(url, { signal: ctrl.signal })
      .then(function (r) { return r.json(); })
      .then(function (res) { clearTimeout(timer); return res; })
      .catch(function () { clearTimeout(timer); return null; });
  }
  function mark(el) { if (el) el.setAttribute('data-bridge-injected', '1'); }

  // ---------- FAQ（GET /api/faqs，sort 升序，可折叠） ----------
  function renderFaqs() {
    var box = q('#m7-faq-list');
    if (!box) return;
    getJSON(API + '/faqs?lang=' + encodeURIComponent(curLang())).then(function (res) {
      if (!res || res.code !== 0 || !Array.isArray(res.data) || !res.data.length) return;
      box.innerHTML = res.data.map(function (f, i) {
        return '<div class="acc-item m7-faq-item">' +
          '<button type="button" class="acc-header" data-m7-acc="1">' +
          '<span class="acc-icon">Q' + (i + 1) + '</span>' +
          '<span class="acc-label">' + esc(f.question) + '</span>' +
          '<span class="acc-arrow">&#9660;</span></button>' +
          '<div class="acc-body"><div class="acc-content"><p class="acc-desc">' + esc(f.answer) + '</p></div></div>' +
          '</div>';
      }).join('');
      mark(box);
    });
  }

  // ---------- 招聘（GET /api/jobs?status=open，职位卡片） ----------
  function renderJobs() {
    var box = q('#m7-jobs-grid');
    if (!box) return;
    getJSON(API + '/jobs?status=open&lang=' + encodeURIComponent(curLang())).then(function (res) {
      if (!res || res.code !== 0 || !Array.isArray(res.data) || !res.data.length) return;
      box.innerHTML = res.data.map(function (j) {
        var meta = '';
        if (j.dept) meta += '<span>' + esc(j.dept) + '</span>';
        if (j.location) meta += '<span>' + esc(j.location) + '</span>';
        return '<div class="m7-job-card">' +
          '<h3>' + esc(j.title) + '</h3>' +
          (meta ? '<div class="m7-job-meta">' + meta + '</div>' : '') +
          (j.desc ? '<p class="m7-job-desc">' + esc(j.desc) + '</p>' : '') +
          '<a class="m7-job-apply" href="#page-contact">' + (t('m7_jobs_apply') || '申请职位') + '</a>' +
          '</div>';
      }).join('');
      mark(box);
    });
  }

  // ---------- 友情链接（GET /api/links，sort 升序） ----------
  function renderLinks() {
    var box = q('#m7-links-list');
    if (!box) return;
    getJSON(API + '/links?lang=' + encodeURIComponent(curLang())).then(function (res) {
      if (!res || res.code !== 0 || !Array.isArray(res.data) || !res.data.length) return;
      box.innerHTML = res.data.map(function (l) {
        return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener nofollow">' + esc(l.name) + '</a>';
      }).join('');
      mark(box);
    });
  }

  // ---------- 资料下载（GET /api/downloads + /:id/download） ----------
  function renderDownloads() {
    var box = q('#m7-dl-list');
    if (!box) return;
    getJSON(API + '/downloads?lang=' + encodeURIComponent(curLang())).then(function (res) {
      if (!res || res.code !== 0 || !Array.isArray(res.data) || !res.data.length) return;
      box.innerHTML = res.data.map(function (d) {
        return '<div class="m7-dl-item">' +
          '<div><div class="m7-dl-name">' + esc(d.filename) + '</div>' +
          '<div class="m7-dl-count">' + (d.count || 0) + ' ' + (t('m7_dl_count') || '次下载') + '</div></div>' +
          '<a class="m7-dl-btn" href="#" data-m7-dl="' + d.id + '">' + (t('m7_dl_btn') || '下载') + '</a>' +
          '</div>';
      }).join('');
      mark(box);
    });
  }

  // 下载点击：调 /:id/download 计数并跳转 url
  function bindDownloads() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-m7-dl]') : null;
      if (!btn) return;
      e.preventDefault();
      var id = btn.getAttribute('data-m7-dl');
      getJSON(API + '/downloads/' + id + '/download?lang=' + encodeURIComponent(curLang())).then(function (res) {
        if (res && res.code === 0 && res.data && res.data.url) {
          var a = document.createElement('a');
          a.href = res.data.url;
          a.target = '_blank';
          a.rel = 'noopener';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      });
    });
  }

  // ---------- 邮件订阅（POST /api/subscribers） ----------
  function bindSubscribe() {
    var form = q('#m7-sub-form');
    if (!form) return;
    var msg = q('#m7-sub-msg');
    var input = q('#m7-sub-email');
    function show(txt, ok) {
      if (!msg) return;
      msg.textContent = txt;
      msg.className = 'm7-sub-msg ' + (ok ? 'ok' : 'err');
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = (input.value || '').trim();
      if (!email) { show(t('m7_sub_invalid'), false); return; }
      var ctrl = new AbortController();
      var timer = setTimeout(function () { ctrl.abort(); }, TIMEOUT);
      fetch(API + '/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
        signal: ctrl.signal
      }).then(function (r) {
        clearTimeout(timer);
        return r.json().then(function (j) { return { status: r.status, body: j }; });
      }).then(function (res) {
        if (res.status === 409) { show(t('m7_sub_dup'), false); return; }
        if (res.status === 400) { show(t('m7_sub_invalid'), false); return; }
        if (res.body && res.body.code === 0) { show(t('m7_sub_success'), true); input.value = ''; return; }
        show(t('m7_sub_fail'), false);
      }).catch(function () {
        clearTimeout(timer);
        show(t('m7_sub_fail'), false);
      });
    });
  }

  // ---------- FAQ 折叠（事件委托，不依赖全局 toggleAccordion） ----------
  function bindFaqToggle() {
    document.addEventListener('click', function (e) {
      var h = e.target.closest ? e.target.closest('[data-m7-acc]') : null;
      if (!h) return;
      var item = h.closest('.m7-faq-item');
      if (!item) return;
      var open = item.classList.contains('open');
      var list = item.parentNode;
      if (list) {
        var all = list.querySelectorAll('.m7-faq-item.open');
        for (var i = 0; i < all.length; i++) all[i].classList.remove('open');
      }
      if (!open) item.classList.add('open');
    });
  }

  // 语言切换挂钩：切换后用当前语言重新拉取并渲染 M7 模块（FAQ/招聘/友链/下载）
  function hookSwitchLang() {
    if (typeof window.switchLang !== 'function') {
      window.addEventListener('load', hookSwitchLang);
      return;
    }
    var orig = window.switchLang;
    window.switchLang = function (lang) {
      var r = orig(lang);
      renderFaqs();
      renderJobs();
      renderLinks();
      renderDownloads();
      return r;
    };
  }

  function boot() {
    hookSwitchLang();
    bindFaqToggle();
    bindSubscribe();
    bindDownloads();
    renderFaqs();
    renderJobs();
    renderLinks();
    renderDownloads();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();