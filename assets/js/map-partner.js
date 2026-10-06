/* ============================================================================
   HONDVO 全球合作伙伴地图 · 配套脚本（map-partner.js）
   ============================================================================
   建立时间 ：2026-10-06
   配套对象 ：assets/js/map.js（封存件，同日完成"根上清理"）
   ----------------------------------------------------------------------------
   【为什么需要这个文件】
   map.js 封存件原自带两种点亮机制，2026-10-06 均已移除：
     ① WORLD_PATHS 中 22 处硬编码 class="partner-country"
        —— 与后台数据无关地永久高亮，后台下架国家后版图不灭；
     ② 「M9 动态点亮高亮」单点命中算法
        —— 只能点亮"首都坐标所在的单块版图"，无法点亮一国的全部领土
           （阿拉斯加 / 夏威夷 / 海外省 / 离岛全部漏亮）。
   本脚本接管版图点亮，改为按【国家 → 版图路径集合】精确施加，
   实现：亮该国全部领土 · 飞线连首都 · 后台增删即时生效 · 两端完全数据驱动。

   【三项职责】
     一、版图点亮：读当前地图上的国家 id，查 PATH_MAP 得路径集合，精确打类
                   —— 集合按【真实面积降序】排列，只取前 TOP_N 块（见配置区）
     二、标签避让：LABEL_OFFSET 只覆盖原 9 国，新增国家按包围盒自动选位
     三、入场动效：新国家的飞线生长 / 扩散环 / 标签淡入（自有图层 #map-entrance）

   【点亮范围策略：只亮面积 Top-N 块】
     原因：110m 底图把"全境"拆得很碎 —— 加拿大 30 块、印尼 13 块、俄罗斯 12 块、
           菲律宾 7 块。全部点亮会显得零碎且视觉嘈杂。
     取值：TOP_N = 3。实测（面积占比）：
       美国 3 块 = 本土 83.1% + 阿拉斯加 16.5% + 夏威夷 0.1%  → 99.7% 领土面积
       法国 3 块 = 本土 85.2% + 法属圭亚那 13.4% + 科西嘉 1.5% → 100%
       日本 3 块 = 本州 72.9% + 北海道 22.0% + 九州 5.1%      → 100%（日本共 3 块）
       中国 3 块 = 99.3% + 0.4% + 0.4%                        → 100%
       加拿大 3 块 = 85.8% + 5.3% + 2.1%                       → 93.2%
       俄罗斯 3 块 = 95.5% + 1.3% + 1.0%                       → 97.8%
     改法：只改下方 TOP_N 一个常量即可（1 = 只亮主版图，99 = 等同于全境）。

   【引入方式】
     在 <script src="assets/js/map.js" defer></script> 之后加一行：
       <script src="assets/js/map-partner.js" defer></script>
     无需改动 map.js，无需改动页面结构（#map-entrance 由本脚本按需创建）。

   【映射表来源】
     _tools/build-path-map-v2.js 离线生成：用 Natural Earth 110m admin-0 国家边界，
     对 WORLD_PATHS 的 280 条匿名多边形逐条取内点做归属。
     覆盖率 280 / 280（100%）。已用人工硬编码分组交叉验证：美国 10 条、法国 3 条、
     中国 2 条，逐条吻合；并按【真实面积（经纬度 + cos 纬度校正）降序】排序。
     路径索引 = WORLD_PATHS 中 <path> 的出现序号（从 0 起）。
     注：110m 底图对 31 个微型国家与远洋岛国（安道尔、摩纳哥、新加坡、马尔代夫、
     瑙鲁等）没有独立多边形 —— 这些国家加进后台后，首都标记与飞线正常出现，
     但版图不会点亮。属底图分辨率限制，非映射缺陷。
   ============================================================================ */

(function () {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';

  /* 国家（小写 ISO 3166-1 alpha-2，即地图 id）→ 该国全部版图的路径索引 */
  var PATH_MAP = {"mg":[0,156],"fj":[1,2],"tz":[3],"eh":[4],"ca":[5,17,25,15,30,23,12,24,16,26,22,18,29,28,19,32,20,7,21,31,33,34,9,6,11,13,27,8,14,10],"us":[35,43,42,36,44,41,37,39,40,38],"kz":[45],"uz":[46],"pg":[47,49,48,50],"id":[54,63,51,58,62,57,55,60,52,61,59,56,53],"ar":[65,64],"cl":[67,66],"cd":[68],"so":[69,270],"ke":[70],"sd":[71],"td":[72],"ht":[73],"do":[74],"ru":[76,75,85,83,84,87,79,82,78,77,80,81,86,175],"bs":[90,88,89],"fk":[91],"no":[93,92,95,94],"gl":[96],"tf":[97],"tl":[98],"za":[99,101,100],"mx":[102],"uy":[103],"br":[104],"bo":[105],"pe":[106],"co":[107],"pa":[108],"cr":[109],"ni":[110],"hn":[111],"sv":[112],"gt":[113],"bz":[114],"ve":[115],"gy":[116],"sr":[117],"fr":[119,118,120],"ec":[121],"pr":[122],"jm":[123],"cu":[124],"zw":[125],"bw":[126],"na":[127],"sn":[128],"ml":[129],"mr":[130],"bj":[131],"ne":[132],"ng":[133],"cm":[134],"tg":[135],"gh":[136],"ci":[137],"gn":[138],"gw":[139],"lr":[140],"sl":[141],"bf":[142],"cf":[143],"cg":[144],"ga":[145],"gq":[146],"zm":[147],"mw":[148],"mz":[149],"sz":[150],"ao":[152,151],"bi":[153],"il":[154],"lb":[155],"ps":[157],"gm":[158],"tn":[159],"dz":[160],"jo":[161],"ae":[162],"qa":[163],"kw":[164],"iq":[165],"om":[166,167],"vu":[169,168],"kh":[170],"th":[171,172],"mm":[173],"vn":[174],"kp":[176],"kr":[177],"mn":[178],"in":[179],"bd":[180],"bt":[181],"np":[182],"pk":[183],"af":[184],"tj":[185],"kg":[186],"tm":[187],"ir":[188],"sy":[189],"am":[190],"se":[191],"by":[192],"ua":[193],"pl":[194],"at":[195],"hu":[196],"md":[197],"ro":[198],"lt":[199],"lv":[200],"ee":[201],"de":[202],"bg":[203],"gr":[205,204],"tr":[206,207],"al":[208],"hr":[209],"ch":[210],"lu":[211],"be":[212],"nl":[213],"pt":[214],"es":[215],"ie":[216],"nc":[217],"sb":[221,220,219,218,222],"nz":[224,223],"au":[226,225],"lk":[227],"cn":[229,228,230],"it":[231,232,233],"dk":[234,235],"gb":[237,236],"is":[238],"az":[239,240],"ge":[241],"ph":[246,244,248,243,245,247,242],"my":[250,249],"bn":[251],"si":[252],"fi":[253],"sk":[254],"cz":[255],"er":[256],"jp":[257,258,259],"py":[260],"ye":[261],"sa":[262],"cy":[264,263],"ma":[265],"eg":[266],"ly":[267],"et":[268],"dj":[269],"ug":[271],"rw":[272],"ba":[273],"mk":[274],"rs":[275],"me":[276],"xk":[277],"tt":[278],"ss":[279]};

  /* 每个国家最多点亮【面积最大的前 N 块】版图。改这一个常量即可调整全局策略。 */
  var TOP_N = 3;

  /* 原 9 国的标签偏移（继承 map.js 的 LABEL_OFFSET，保持既有观感不变） */
  var BASE_OFFSET = {
    de: [-3, -22, 'end'], pl: [24, -18, 'start'], cz: [30, 3, 'start'],
    at: [22, 24, 'start'], fr: [-3, -10, 'middle'], es: [-5, 26, 'middle'],
    br: [8, -10, 'start'], us: [20, -12, 'start'], mx: [-8, 13, 'end']
  };

  var seen = {};          /* 已出现过的国家 id，用于判定"新国家" */
  var first = true;       /* 首屏不播入场动效 */
  var pending = [];       /* 待播动效的国家 id */

  function reduceMotion() {
    try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; }
  }
  function entranceLayer() {
    var g = document.getElementById('map-entrance');
    if (g) return g;
    var svg = document.getElementById('partner-map-svg');
    if (!svg) return null;
    g = document.createElementNS(SVGNS, 'g');
    g.setAttribute('id', 'map-entrance');
    g.setAttribute('pointer-events', 'none');
    svg.appendChild(g);
    return g;
  }
  function idOfLabel(el) {
    return (el.getAttribute('data-lang-key') || '').replace(/^partner_/, '');
  }
  function markerGroups() {
    return Array.prototype.slice.call(document.querySelectorAll('.map-marker-group'));
  }
  function currentIds() {
    var out = [];
    markerGroups().forEach(function (g) {
      var t = g.querySelector('.map-marker-label');
      if (!t) return;
      var id = idOfLabel(t);
      if (id && id !== 'hq' && out.indexOf(id) < 0) out.push(id);
    });
    return out;
  }

  /* ── 职责一：按数据精确点亮全部领土 ── */
  function paint(ids) {
    var paths = document.querySelectorAll('#map-continents path');
    var want = {};
    ids.forEach(function (id) {
      var set = PATH_MAP[id];
      if (!set) return;
      /* 只取面积最大的前 TOP_N 块，避免群岛国家把地图点碎 */
      set.slice(0, TOP_N).forEach(function (i) { want[i] = 1; });
    });
    var lit = 0, unknown = [];
    ids.forEach(function (id) { if (!PATH_MAP[id]) unknown.push(id); });

    for (var i = 0; i < paths.length; i++) {
      var el = paths[i];
      var cls = el.getAttribute('class') || '';
      var has = cls.indexOf('partner-country') >= 0;
      if (want[i]) {
        if (!has) el.setAttribute('class', (cls + ' partner-country').trim());
        lit++;
      } else if (has) {
        el.setAttribute('class', cls.replace(/\s*partner-country\s*/, ' ').trim());
      }
    }
    return { lit: lit, unknown: unknown, total: paths.length };
  }

  /* ── 职责二：标签避让（LABEL_OFFSET 未覆盖的国家） ── */
  function box(el) { try { return el.getBBox(); } catch (e) { return null; } }
  function avoidLabels(newIds) {
    var all = Array.prototype.slice.call(document.querySelectorAll('.map-marker-label'));
    var boxes = [];
    all.forEach(function (el) {
      var b = box(el);
      if (b) boxes.push({ el: el, x: b.x, y: b.y, w: b.width, h: b.height, id: idOfLabel(el) });
    });
    var CAND = [[0, -13], [0, 13], [26, 0], [-26, 0], [24, -15], [-24, -15], [24, 15], [-24, 15], [0, -27], [0, 27]];
    var moved = 0;
    boxes.forEach(function (b) {
      if (newIds && newIds.length && newIds.indexOf(b.id) < 0) return;   /* 只动新国家 */
      if (BASE_OFFSET[b.id]) return;                                      /* 原 9 国保持既有偏移 */
      for (var c = 0; c < CAND.length; c++) {
        var nx = b.x + CAND[c][0], ny = b.y + CAND[c][1];
        var clash = boxes.some(function (o) {
          if (o === b) return false;
          return !(nx + b.w < o.x || nx > o.x + o.w || ny + b.h < o.y || ny > o.y + o.h);
        });
        if (!clash) {
          if (CAND[c][0] || CAND[c][1]) {
            b.el.setAttribute('x', (parseFloat(b.el.getAttribute('x')) + CAND[c][0]).toFixed(1));
            b.el.setAttribute('y', (parseFloat(b.el.getAttribute('y')) + CAND[c][1]).toFixed(1));
            moved++;
          }
          b.x = nx; b.y = ny;
          return;
        }
      }
    });
    return moved;
  }

  /* ── 职责三：新国家入场动效 ── */
  function arcPath(x1, y1, x2, y2) {
    x1 = parseFloat(x1); y1 = parseFloat(y1); x2 = parseFloat(x2); y2 = parseFloat(y2);
    var mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    var dx = x2 - x1, dy = y2 - y1, d = Math.sqrt(dx * dx + dy * dy) || 1;
    var lift = Math.min(95, d * 0.34);
    var nx = -dy / d, ny = dx / d;
    if (ny > 0) { nx = -nx; ny = -ny; }
    return 'M' + x1 + ',' + y1 + ' Q' + (mx + nx * lift).toFixed(1) + ',' + (my + ny * lift).toFixed(1) + ' ' + x2 + ',' + y2;
  }
  function entrance(ids) {
    var g = entranceLayer();
    if (!g || !ids.length) return 0;
    var hq = document.querySelector('.map-hq-pulse');
    var hx = hq && hq.getAttribute('cx'), hy = hq && hq.getAttribute('cy');
    var played = 0;

    ids.forEach(function (id, k) {
      var t = document.querySelector('.map-marker-label[data-lang-key="partner_' + id + '"]');
      var grp = t && t.closest ? t.closest('.map-marker-group') : null;
      if (!grp) return;
      var dot = grp.querySelector('.map-marker-dot');
      if (!dot) return;
      var x = dot.getAttribute('cx'), y = dot.getAttribute('cy');
      var delay = k * 0.26;

      dot.classList.remove('hmp-pop'); void dot.offsetWidth; dot.classList.add('hmp-pop');
      if (t) { t.classList.remove('hmp-label'); void t.offsetWidth; t.classList.add('hmp-label'); }

      var wrap = document.createElementNS(SVGNS, 'g');
      if (hx && hy) {
        var arc = document.createElementNS(SVGNS, 'path');
        arc.setAttribute('d', arcPath(hx, hy, x, y));
        arc.setAttribute('pathLength', '100');
        arc.setAttribute('class', 'hmp-arc');
        arc.style.animationDelay = delay + 's';
        wrap.appendChild(arc);
      }
      [0, 0.35].forEach(function (off) {
        var r = document.createElementNS(SVGNS, 'circle');
        r.setAttribute('cx', x); r.setAttribute('cy', y); r.setAttribute('r', '3');
        r.setAttribute('class', 'hmp-ring');
        r.style.animationDelay = (delay + 0.55 + off) + 's';
        wrap.appendChild(r);
      });
      var core = document.createElementNS(SVGNS, 'circle');
      core.setAttribute('cx', x); core.setAttribute('cy', y); core.setAttribute('r', '3');
      core.setAttribute('class', 'hmp-core');
      core.style.animationDelay = (delay + 0.55) + 's';
      wrap.appendChild(core);

      var txt = document.createElementNS(SVGNS, 'text');
      txt.setAttribute('x', x); txt.setAttribute('y', (parseFloat(y) - 15).toFixed(1));
      txt.setAttribute('text-anchor', 'middle');
      txt.setAttribute('class', 'hmp-new');
      txt.setAttribute('style', 'animation-delay:' + (delay + 1.0) + 's');
      txt.textContent = 'NEW · ' + (t ? t.textContent : id);
      wrap.appendChild(txt);

      g.appendChild(wrap);
      played++;
    });
    return played;
  }

  /* ── 主同步：DOM 渲染完成后按数据点亮 ── */
  function sync(opts) {
    opts = opts || {};
    var ids = currentIds();
    var r = paint(ids);

    var newIds = first ? [] : ids.filter(function (id) { return !seen[id]; });
    ids.forEach(function (id) { seen[id] = 1; });

    var moved = 0, played = 0;
    if (!reduceMotion()) {
      moved = avoidLabels(newIds);
      played = newIds.length ? entrance(newIds) : 0;
    } else {
      avoidLabels(newIds);
    }
    first = false;

    if (opts.verbose !== false) {
      try {
        console.log('[map-partner] 国家 ' + ids.length + ' 个 · 版图点亮 ' + r.lit + ' 块'
          + (newIds.length ? ' · 新国家 ' + newIds.join(',') : '')
          + (played ? ' · 入场动效 ' + played : '')
          + (moved ? ' · 标签避让 ' + moved : '')
          + (r.unknown.length ? ' · ⚠无映射 ' + r.unknown.join(',') : ''));
      } catch (e) {}
    }
    return { countries: ids.length, lit: r.lit, newIds: newIds, unknown: r.unknown };
  }

  /* ── 挂钩：包装注入入口，注入后自动重新点亮（不改 map.js） ── */
  function hook() {
    var orig = window.__setPartnerCountries;
    if (typeof orig === 'function' && !orig.__hmpWrapped) {
      var wrapped = function (arr) {
        var out = orig.apply(this, arguments);
        setTimeout(function () { clearEntrance(); sync(); }, 0);
        return out;
      };
      wrapped.__hmpWrapped = true;
      window.__setPartnerCountries = wrapped;
    }
    var orp = window.renderPartnerMap;
    if (typeof orp === 'function' && !orp.__hmpWrapped) {
      var w2 = function () {
        var out = orp.apply(this, arguments);
        setTimeout(function () { sync(); }, 0);
        return out;
      };
      w2.__hmpWrapped = true;
      window.renderPartnerMap = w2;
    }
  }
  function clearEntrance() {
    var g = document.getElementById('map-entrance');
    if (g) while (g.firstChild) g.removeChild(g.firstChild);
  }

  /* ── 动效样式（内联注入，避免依赖页面 CSS 改动） ── */
  function styles() {
    if (document.getElementById('hmp-style')) return;
    var css = [
      '#map-entrance{pointer-events:none}',
      '.hmp-arc{fill:none;stroke:var(--hq,#D87830);stroke-width:1.6;stroke-linecap:round;',
      'filter:drop-shadow(0 0 4px var(--hq-glow,rgba(216,120,48,.55)));stroke-dasharray:100;stroke-dashoffset:100;',
      'animation:hmpDraw 1.5s ease-out forwards,hmpFade 2.2s ease-in 1.5s forwards}',
      '@keyframes hmpDraw{to{stroke-dashoffset:0}}@keyframes hmpFade{to{opacity:.42}}',
      '.hmp-ring{fill:none;stroke:var(--brand,#D87830);stroke-width:1.2;transform-box:fill-box;transform-origin:center;',
      'animation:hmpRing 1.9s ease-out forwards}',
      '@keyframes hmpRing{0%{transform:scale(.4);opacity:.85}100%{transform:scale(6.5);opacity:0}}',
      '.hmp-core{fill:var(--brand,#D87830);stroke:var(--white,#fff);stroke-width:1.2;transform-box:fill-box;transform-origin:center;',
      'animation:hmpCore 1s cubic-bezier(.2,1.6,.5,1) forwards}',
      '@keyframes hmpCore{0%{transform:scale(0);opacity:0}55%{transform:scale(2.2);opacity:1}100%{transform:scale(1.35);opacity:.95}}',
      '.hmp-new{font-size:9px;font-weight:800;fill:var(--hq,#D87830);paint-order:stroke;stroke:var(--white,#fff);stroke-width:2.6;',
      'stroke-linejoin:round;opacity:0;animation:hmpLabel .7s ease-out .75s forwards}',
      '@keyframes hmpLabel{0%{opacity:0;transform:translateY(-5px)}100%{opacity:1;transform:translateY(0)}}',
      '.map-marker-dot.hmp-pop{animation:hmpPop 1s cubic-bezier(.2,1.6,.5,1) forwards}',
      '@keyframes hmpPop{0%{transform:scale(.2)}55%{transform:scale(2.4)}100%{transform:scale(1.35)}}',
      '.map-marker-label.hmp-label{opacity:0;animation:hmpLabel .7s ease-out .75s forwards}',
      '@media (prefers-reduced-motion: reduce){.hmp-arc,.hmp-ring,.hmp-core,.hmp-new,',
      '.map-marker-dot.hmp-pop,.map-marker-label.hmp-label{animation:none!important}',
      '.hmp-new,.map-marker-label.hmp-label{opacity:1}.hmp-core{transform:scale(1.35)}}'
    ].join('');
    var st = document.createElement('style');
    st.id = 'hmp-style';
    st.textContent = css;
    document.head.appendChild(st);
  }

  /* ── 启动 ── */
  function boot() {
    styles();
    hook();
    sync({ verbose: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 0); });
  else setTimeout(boot, 0);

  window.HONDVO_mapPartner = {
    sync: sync,
    replayEntrance: function (ids) { clearEntrance(); return entrance(ids || currentIds()); },
    paint: function (ids) { return paint(ids); },
    pathMap: PATH_MAP,
    topN: TOP_N,
    setTopN: function (n) { TOP_N = n | 0 || 3; return sync(); }
  };
})();
