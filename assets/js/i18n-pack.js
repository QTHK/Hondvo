/* HONDVO i18n 语言包合并（2026-11-05）
   ──────────────────────────────────────────────────────────────
   背景：i18n.js 原是 8 语言全量（435KB），首屏永远只用一种。
   现拆为：i18n.js（只含源语言 en）+ assets/i18n/<lang>.js（单语言包）。

   顺序契约（不能改）：
     1. <head> 的普通 script 用 document.write 同步加载当前语言包
        → 内容为 window.__I18N_PACK = { lang, dict }
     2. i18n.js（defer）执行，定义 const I18N（含 en）
     3. 本文件（defer，排在 i18n.js 之后）把 pack 合并进 I18N

   ⚠️ 合并必须落在「语言维度」上：I18N[key] = { en:'…', zh:'…' }，
      pack 只提供 zh 这一格，不能替换整个键。
   ⚠️ 兜底：i18n.js 仍为全量时（拆分未生效），合并是等值覆盖，无副作用。
   ⚠️ 切语言：i18n.js 变薄后，切到未加载的语言必须先拉 pack 再切 ——
      否则 switchLang 会把所有文案渲染成 undefined。故此处包装 switchLang。 */
(function () {
  'use strict';

  function merge(pack) {

    if (!pack || !pack.dict || !pack.lang) return false;

    if (typeof I18N === 'undefined' || !I18N) return false;

    var lang = String(pack.lang);

    var dict = pack.dict;

    for (var k in dict) {

      if (!Object.prototype.hasOwnProperty.call(dict, k)) continue;

      if (!I18N[k]) I18N[k] = {};

      I18N[k][lang] = dict[k];

    }

    return true;

  }

  /* 只抽查前 20 个键：任一非空即认为该语言已在内存里 */
  function hasLang(lang) {

    if (typeof I18N === 'undefined' || !I18N) return false;

    var n = 0;

    for (var k in I18N) {

      if (!Object.prototype.hasOwnProperty.call(I18N, k)) continue;

      var c = I18N[k];

      if (c && c[lang]) return true;

      if (++n >= 20) break;

    }

    return false;

  }

  var pending = {};

  function loadPack(lang, cb) {

    if (pending[lang]) { pending[lang].push(cb); return; }

    pending[lang] = [cb];

    function flush() {

      var q = pending[lang];

      pending[lang] = null;

      (q || []).forEach(function (f) { try { f(); } catch (e) {} });

    }

    var s = document.createElement('script');

    s.src = 'assets/i18n/' + lang + '.js';

    s.onload = function () { merge(window.__I18N_PACK); window.__I18N_PACK = null; flush(); };

    s.onerror = flush;   // 加载失败也放行：switchLang 会用 en 兜底，不至于卡死

    document.head.appendChild(s);

  }

  /* 1) 首屏语言包（<head> 同步加载的那份） */
  merge(window.__I18N_PACK);

  try { delete window.__I18N_PACK; } catch (e) { window.__I18N_PACK = null; }

  /* 2) 包装 switchLang：目标语言未加载时先拉包 */
  var orig = window.switchLang;

  if (typeof orig === 'function' && !window.__hondvoSwitchWrapped) {

    window.__hondvoSwitchWrapped = true;

    window.switchLang = function (lang) {

      var args = arguments;

      if (!lang || hasLang(lang)) return orig.apply(window, args);

      loadPack(lang, function () { orig.apply(window, args); });

    };

    /* 3) 合并后重渲染：i18n.js 是 defer，执行时 readyState 已是 interactive，
          它的 init 会**立即** switchLang(saved) —— 那一刻只有 en。
          所以这里必须按当前语言再跑一遍，否则首屏停在英文。 */
    var cur = (document.documentElement.getAttribute('lang') || '').trim();

    if (cur && cur !== 'en' && hasLang(cur)) {

      try { window.switchLang(cur); } catch (e) {}

    }

  }
})();
