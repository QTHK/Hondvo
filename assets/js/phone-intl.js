/* ============================================================
   国际电话输入（2026-10-05 · 面向海外客户）
   ------------------------------------------------------------
   背景修正（重要）：站点是**面向海外的 B2B 官网**（客户分布美国 / 德国 /
   法国 / 日本等），此前按「中国大陆 11 位手机号」设计的校验规则是错的：
   德固话 3–12 位可变长、英 10 位、日 9–10 位，用大陆规则会大量误杀真号。

   本模块方案：Google libphonenumber（E.164 全球号段元数据，206 个国家/地区）
     · 纯前端离线运行 —— 号码不出浏览器，无 API Key、无服务费、无号码出境合规问题
     · 匹配各国真实号段规则：区号是否存在、长度、是否保留号段（如 UK 076 传呼机）
     · 附带国家/地区下拉，让客户能明确选出 +86 / +1 / +49 这类国际前缀

   降级原则：库未加载或解析异常时**一律放行**。官网是转化入口，
   绝不能因校验器故障而拦住真实询盘。

   依赖：assets/js/vendor/libphonenumber.min.js（UMD，gzip 约 42 KB）
   授权：Apache-2.0，许可证副本见同目录 LICENSE-libphonenumber.txt
   ============================================================ */
(function () {
  'use strict';

  var LPN = function () { return window.libphonenumber || null; };

  /* 下拉排序：全部按**区号数字升序**（2026-10-05 用户指定，不置顶）。
     默认选中仍是美国（见 buildCountrySelect 末尾），与排序无关。 */

  function curLang() {
    try { var s = sessionStorage.getItem('hondvo_lang'); if (s) return s; } catch (e) {}
    return document.documentElement.getAttribute('lang') || 'en';
  }

  /* 国家/地区显示名：优先用浏览器内置的 Intl.DisplayNames（原生支持 8 语言，
     无需维护映射表）；不支持时退回 ISO 代码，绝不因缺表而空白。 */
  function countryName(cc, lang) {
    try {
      if (typeof Intl !== 'undefined' && Intl.DisplayNames) {
        var dn = new Intl.DisplayNames([lang], { type: 'region' });
        var n = dn.of(cc);
        if (n && n !== cc) return n;
      }
    } catch (e) { /* 忽略 */ }
    return cc;
  }

  function callingCode(cc) {
    if (!cc) return '';
    var g = LPN();
    if (!g) return '';
    try { return String(g.getCountryCallingCode(cc) || ''); } catch (e) { return ''; }
  }

  /* 生成国家/地区下拉。已存在则只刷新语言（切语言时复用，不重复建）。
     ⚠️ API 名踩坑：libphonenumber-js 1.13.x 的 bundle 导出的是
        `getCountries()`（返回 245 个 ISO 代码），**没有** `getSupportedCountries()`。
        写成后者会静默 return，导致下拉空、进而所有组合号码缺前缀而校验失败。 */
  function buildCountrySelect() {
    var sel = document.getElementById('ct-phone-cc');
    var g = LPN();
    if (!sel) return;
    if (!g || typeof g.getCountries !== 'function') return;   // 库未就绪 → 保留空，校验降级

    var lang = curLang();
    var prev = sel.value;                 // 语言切换时保留用户已选国家
    var all = g.getCountries();

    /* 排序规则（2026-10-05 用户指定）：**全部按区号数字升序**，不置顶。
       客户通常知道自己的国际区号（+1 / +49 / +81 …），按区号找最直观。
       二级排序：同区号内按国家名在当前界面语言下排序 ——
         · +1（NANP）下有约 40 个国家/地区，没有二级排序会显得杂乱；
         · 中文界面按拼音音序（Intl.Collator 'zh' 即按拼音，非 Unicode 码位）。
       升序用数值比较而非字符串比较，否则 "1" 会排在 "1xxx" 之外、顺序错乱。 */
    var collator = null;
    try {
      collator = new Intl.Collator([lang]);
    } catch (e) { collator = null; }

    var ordered = all.slice().sort(function (a, b) {
      var ca = Number(callingCode(a)) || 0;
      var cb = Number(callingCode(b)) || 0;
      if (ca !== cb) return ca - cb;                       // 一级：区号升序（数值）
      if (collator) {                                      // 二级：国名本地化排序
        var r = collator.compare(countryName(a, lang), countryName(b, lang));
        if (r !== 0) return r;
      }
      return a < b ? -1 : (a > b ? 1 : 0);                // 三级：ISO 代码兜底（保证稳定）
    });

    sel.textContent = '';
    ordered.forEach(function (cc, i) {
      var opt = document.createElement('option');
      opt.value = cc;
      /* 文案统一「国家 + 区号」，8 语言一致（如 中国 +86 / United States +1）。
         区号必须显示：客户需据此确认自己填的「+86」是否正确。 */
      opt.textContent = countryName(cc, lang) + ' +' + callingCode(cc);
      sel.appendChild(opt);
      if (i === 0 && !prev) opt.selected = true;            // 首次进页面才用首项兜底
    });

    // 恢复用户先前选择；无效则回落默认（美国，与主市场一致）
    if (prev && all.indexOf(prev) >= 0) sel.value = prev;
    else if (all.indexOf('US') >= 0) sel.value = 'US';
  }

  /* 组合最终要校验的号码：区号下拉 + 输入框内容
     · 下拉为空（库未加载）→ 只校验输入框自身
     · 输入框已带 + / 00 国际前缀 → 忽略下拉，避免拼成 +1+1415… 的废号 */
  function composeInput() {
    var cc = document.getElementById('ct-phone-cc');
    var input = document.getElementById('ct-phone');
    var raw = ((input && input.value) || '').trim();
    if (!raw) return { text: '', hasPrefix: false, cc: cc ? cc.value : '' };
    if (/^\s*(\+|00)/.test(raw)) return { text: raw, hasPrefix: true, cc: cc ? cc.value : '' };
    // ⚠️ 必须传 cc.value（字符串），传 DOM 元素会被库判为 'Unknown country' 而静默返回 ''
    var ccCode = cc ? String(cc.value || '') : '';
    var dial = callingCode(ccCode);
    return { text: (dial ? '+' + dial : '') + raw, hasPrefix: false, cc: ccCode };
  }

  /* 极宽松的前置检查：库不可用时的兜底，也用于快速拒绝明显垃圾输入 */
  function looseCheck(input) {
    var s = String(input || '').trim();
    if (!s) return { ok: false, code: 'EMPTY' };
    // 允许数字与常见国际格式符号（空格 + - ( ) . /）
    if (!/^\+?[\d\s\-\(\)\.\/]{5,30}$/.test(s)) return { ok: false, code: 'CHARS' };
    var digits = s.replace(/\D/g, '');
    // E.164 上限 15 位，下限 4 位（最短的国际号码本体）
    if (digits.length < 4 || digits.length > 15) return { ok: false, code: 'LENGTH' };
    // 全同数字（111111111 / 0000000）必是占位符
    if (/^(\d)\1+$/.test(digits)) return { ok: false, code: 'REPEATED' };
    return { ok: true, code: 'LOOSE' };
  }

  /* 号码本体（剥掉国家区号后的部分）的「明显占位符」检测。
     ⚠️ 必须针对**用户原始输入**（不含区号），否则 +86 开头会掩盖特征。
     ⚠️ 只保留「全同数字」这一条 —— 曾试过拦「连续顺/逆序」，但实测**误杀大量真实号码**：
          法国 1 23 45 67 89（本体 123456789）是标准固话格式，
          印度 98765 43210（本体 9876543210）是真实号段。
     顺子在真实号码里太常见，无法作为通用拦截依据，故撤回。
     libphonenumber 只验「号段已分配 + 长度」，这类号判 valid 属正常 ——
     校验目的是拦「一眼假的占位符」，不是核验号码是否真实开通。 */
  function looksLikePlaceholder(rawInput) {
    var digits = String(rawInput || '').replace(/\D/g, '');
    if (digits.length < 7) return false;
    return /^(\d)\1+$/.test(digits);      // 11111111 / 0000000 之类
  }

  /**
   * 校验电话
   * @returns {{ok:boolean, code:string, e164?:string, country?:string, type?:string, degraded?:boolean}}
   *   ok=false 仅在「确定无效」时返回；库缺失/异常一律 ok=true 且 degraded=true
   */
  function validate(raw) {
    var composed = raw !== undefined ? { text: String(raw || '').trim(), hasPrefix: /^\+/.test(String(raw || '')), cc: '' } : composeInput();
    var input = composed.text;

    var loose = looseCheck(input);
    if (!loose.ok) return loose;

    /* 占位符检测针对**用户原始输入**（不含区号），否则 +86 开头会掩盖顺子/全同特征 */
    if (looksLikePlaceholder(composed.hasPrefix ? input : (String(input).replace(/^\s*\+\d{1,3}/, '')))) {
      return { ok: false, code: 'PLACEHOLDER' };
    }

    var g = LPN();
    if (!g || typeof g.parsePhoneNumber !== 'function') {
      return { ok: true, code: 'DEGRADED', degraded: true };   // 降级放行
    }

    var p = null;
    try {
      // 00 前缀统一转成 +（部分国家用 00 代替 +）
      var norm = input.replace(/^\s*00/, '+');
      p = g.parsePhoneNumber(norm);
    } catch (e) {
      // 未知国家码（如 +999）会抛 ParseError
      return { ok: false, code: 'INVALID_COUNTRY' };
    }
    if (!p) return { ok: false, code: 'UNPARSEABLE' };

    try {
      if (!p.isValid()) return { ok: false, code: 'INVALID' };
      return {
        ok: true, code: 'OK',
        e164: p.number,          // 规范化 E.164，入库统一用这个
        country: p.country,      // 'US' / 'DE' / 'FR' / 'JP' …
        type: (typeof p.getType === 'function' ? p.getType() : '') || ''
      };
    } catch (e) {
      return { ok: true, code: 'DEGRADED', degraded: true };
    }
  }

  /* ── 初始化 ── */
  function init() {
    buildCountrySelect();

    /* 切语言时重建下拉文案（保留已选国家）。
       ⚠️ 必须监听 **document** 而非 window：i18n.js 的 switchLang 末尾是
       `document.dispatchEvent(new CustomEvent('hondvo:lang', ...))`，
       自定义事件只向上冒泡到 document，**不会反向冒泡到 window**，
       挂在 window 上永远收不到 → 区号列表要刷新页面才对。 */
    document.addEventListener('hondvo:lang', function () { buildCountrySelect(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  // 对外接口
  window.HONDVO_phone = {
    validate: validate,
    buildCountrySelect: buildCountrySelect,
    callingCode: callingCode,
    countryName: countryName,
    _lib: LPN
  };
})();
