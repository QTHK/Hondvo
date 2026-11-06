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
  }

  function load(force) {
    if (cache && !force) { render(cache); return; }
    /* no-cache：产物是每次上线重写的，不能让浏览器拿旧版 */
    fetch(DATA_URL, { cache: 'no-cache' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (d) { cache = d; render(d); })
      .catch(function () { /* 保留静态卡片 */ });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { load(true); });
  } else {
    load(true);
  }
  /* 切语言只重渲染，不重新请求 */
  document.addEventListener('hondvo:lang', function () { load(false); });
})();
