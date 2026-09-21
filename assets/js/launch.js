/* ═══════════════════════════════════════════════════════════════
   LAUNCH SCREEN — 启动加载屏收幕逻辑（配套 launch.css）
   规则：window load 后稍候，或 3.4s 兜底计时，二者先到先收 → 0.8s 淡出后移除。
   仅在整站首次加载播放；SPA 切页(hashchange)不触发，不会重复打扰。
   独立文件，可整体回滚。
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var launch = document.getElementById('launch');
  if (!launch) return;

  var DONE = false;
  var html = document.documentElement;

  function close() {
    if (DONE) return;
    DONE = true;
    html.classList.remove('launch-lock');  // 解锁页面滚动
    html.classList.add('launch-leave');    // C5：放行 .hnav 入场动画（收幕后才可见）
    launch.classList.add('leave');         // 触发 0.8s 淡出
    setTimeout(function () {
      launch.style.display = 'none';       // 彻底移出交互层，不挡后续
    }, 900);
  }

  // 立即锁定滚动（加载期防止用户滚到幕布下方的首屏内容）
  setTimeout(function () { html.classList.add('launch-lock'); }, 0);

  // 兜底计时：无论资源是否就绪，3.4s 必收
  setTimeout(close, 3400);

  // 资源加载完成后继续停留 1.5s，让呼吸/进度线充分播放
  if (document.readyState === 'complete') {
    setTimeout(close, 1500);
  } else {
    window.addEventListener('load', function () { setTimeout(close, 1500); });
  }
})();
