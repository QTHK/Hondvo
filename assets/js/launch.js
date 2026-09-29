/* ═══════════════════════════════════════════════════════════════
   LAUNCH SCREEN — 启动加载屏收幕逻辑（配套 launch.css）
   规则：window load 后稍候，或 3.4s 兜底计时，二者先到先收 → 0.8s 淡出后移除。
   播放时机（2026-09-29 调整）：**每个会话只在首次进入时播放一次**。
     · 本次会话已看过 → <head> 的早期脚本给 <html> 加 .launch-skip，
       launch.css 首帧即隐藏幕布；本脚本直接返回，不加 launch-lock，
       也不加 launch-armed（导航因此按常规动画正常入场）。
     · SPA 切页（hashchange）本就不触发本文件，只有整页加载才会执行。
   独立文件，可整体回滚。
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var html = document.documentElement;
  var launch = document.getElementById('launch');

  // 本次会话已看过（或页面上本就没有幕布）→ 直接跳过，不做任何锁屏/遮罩
  if (!launch || html.classList.contains('launch-skip')) {
    if (launch) launch.style.display = 'none';  // 双保险：即便 launch.css 未生效也不占交互层
    return;
  }

  var DONE = false;

  // 决策为"要播放"就立刻记账，而不是等收幕才记 ——
  // 这样即使用户在幕布播放期间刷新，本次会话也不会重播。
  try { sessionStorage.setItem('hondvo_launch_seen', '1'); } catch (e) {}

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
