/* ============================================================
   HONDVO sanitize — 轻量白名单 XSS 过滤器
   ------------------------------------------------------------
   背景：后台可写入的富文本 / i18n 桥接内容原样进入 innerHTML，
         存在存储型 XSS（renderers.html、heroText、switchLang、bridge）。
   策略：白名单标签 + 白名单协议；不引入任何外部依赖。
   引入：必须紧随 api-client.js、早于 i18n.js。
   对外：window.HONDVO_sanitizeHTML / HONDVO_isSafeURL / HONDVO_safeURL
   ============================================================ */
(function () {
  'use strict';

  // 允许的标签
  var ALLOW = {
    BR: 1, STRONG: 1, EM: 1, B: 1, I: 1, U: 1, A: 1, P: 1, SPAN: 1,
    UL: 1, OL: 1, LI: 1, SUP: 1, SUB: 1, DIV: 1, H1: 1, H2: 1, H3: 1, H4: 1
  };
  // 允许的属性（href 另做协议校验）
  var ALLOW_ATTR = { target: 1, rel: 1, class: 1 };
  // 安全协议：http(s) / mailto / tel / 站内相对路径 / 锚点
  var SAFE_PROTOCOL = /^(https?:|mailto:|tel:|\/|#)/i;

  function sanitizeHTML(html) {
    if (html == null) return '';
    var tpl = document.createElement('template');
    tpl.innerHTML = String(html);

    (function walk(node) {
      var children = Array.prototype.slice.call(node.childNodes);
      children.forEach(function (child) {
        if (child.nodeType === 1) {
          if (!ALLOW[child.tagName]) {
            // 不允许的标签：保留其文本内容，丢弃标签本身
            var frag = document.createDocumentFragment();
            while (child.firstChild) frag.appendChild(child.firstChild);
            child.parentNode.replaceChild(frag, child);
            return;
          }
          // 清理属性
          Array.prototype.slice.call(child.attributes).forEach(function (attr) {
            var name = attr.name.toLowerCase();
            if (name === 'href') {
              if (!SAFE_PROTOCOL.test(String(attr.value).trim())) child.removeAttribute(attr.name);
            } else if (!ALLOW_ATTR[name]) {
              child.removeAttribute(attr.name);
            }
          });
          // 外链补 rel，防反向标签劫持
          if (child.tagName === 'A' && child.getAttribute('target') === '_blank') {
            child.setAttribute('rel', 'noopener noreferrer');
          }
          walk(child);
        } else if (child.nodeType === 8) {
          child.parentNode.removeChild(child); // 删除注释
        }
      });
    })(tpl.content);

    return tpl.innerHTML;
  }

  function isSafeURL(url) {
    if (!url) return false;
    // 剥离控制字符与空白后再判定，堵住 "java\tscript:" 之类绕过
    var u = String(url).trim().replace(/[\u0000-\u001F\u007F\s]/g, '');
    return SAFE_PROTOCOL.test(u);
  }

  function safeURL(url, fallback) {
    return isSafeURL(url) ? String(url).trim() : (fallback || '#');
  }

  window.HONDVO_sanitizeHTML = sanitizeHTML;
  window.HONDVO_isSafeURL = isSafeURL;
  window.HONDVO_safeURL = safeURL;
})();
