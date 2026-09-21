/* ============================================================
   HONDVO main（P1 拆分）— 导航 / 滚动 / 表单 / 语言切换 UI / 弹窗 / 埋点 / reveal
   来源 index.html: script_head_stats / form_interact / navscroll / giant_interact / tracker / dsv2_reveal / hnav
   ============================================================ */

    (function(){

      var c = window.HONDVO_CFG || {};

      if (c.ga4) {

        var s = document.createElement('script');

        s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(c.ga4);

        document.head.appendChild(s);

        window.dataLayer = window.dataLayer || [];

        function gtag(){dataLayer.push(arguments);}

        gtag('js', new Date());

        gtag('config', c.ga4);

      }

      if (c.baidu) {

        var hm = document.createElement('script');

        hm.src = 'https://hm.baidu.com/hm.js?' + encodeURIComponent(c.baidu);

        document.head.appendChild(hm);

      }

    })();

(function(){
  'use strict';
  function esc(s){ return (s==null?'':String(s)).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

  var MOLD = {
    caps: [
      {icon:'⊟', zh:'诊断与 IVD 耗材模具', en:'Diagnostic & IVD Molds',
       desc:'覆盖微流控芯片、反应杯、移液吸头等 IVD 高精密耗材模具。洁净配套成型，型腔一致性高，满足批量检测与体外诊断的严苛尺寸要求。',
       tags:['微流控','反应杯','洁净成型'], photos:['IVD 模具实拍 1','IVD 模具实拍 2']},
      {icon:'✚', zh:'介入与植入精密模具', en:'Interventional & Implant',
       desc:'导管接头、穿刺件、微小植入结构模具，依赖 μm 级加工与高光镜面，满足微创器械与植入物的微小、高精度结构要求。',
       tags:['μm 级','高光镜面','微小结构'], photos:['介入模具实拍 1','介入模具实拍 2']},
      {icon:'⊞', zh:'给药与药包模具', en:'Drug Delivery & Packaging',
       desc:'笔式注射器、雾化器、瓶盖与定量阀门模具，采用多腔热流道高效量产，兼顾外观光泽与尺寸稳定性。',
       tags:['多腔热流道','笔式注射器','药包'], photos:['给药模具实拍 1','给药模具实拍 2']},
      {icon:'◑', zh:'LSR 液态硅胶模具', en:'LSR Medical Molds',
       desc:'密封件、阀膜、导管软胶模具，支持软硬结合与生物相容材料成型，脱模与排气设计成熟。',
       tags:['LSR','软硬结合','密封件'], photos:['LSR 模具实拍 1','LSR 模具实拍 2']},
      {icon:'2K', zh:'双色 / 多色模具 2K', en:'Two-shot / Multi-shot Molds',
       desc:'单机多物料一体化成型模具，软硬胶结合、免二次组装，覆盖医疗按键、软硬胶手柄与多色标识件，配合面精密稳定。',
       tags:['双色注塑','软硬胶结合','免二次组装'], photos:['2K 模具实拍 1','2K 模具实拍 2']}
    ],
    flow: [
      {n:'1', zh:'DFM 分析', en:'DFM Review', desc:'结合医疗法规做可制造性与风险分析，含生物相容材料选型。'},
      {n:'2', zh:'模具设计', en:'Design & Sim', desc:'3D 设计与模流仿真，优化浇口、冷却与洁净排气。'},
      {n:'3', zh:'精密加工', en:'CNC / EDM', desc:'型腔、电极 μm 级加工，洁净车间内成型。'},
      {n:'4', zh:'组装抛光', en:'Assembly & Polish', desc:'电极装配、镜面抛光与间隙调配。'},
      {n:'5', zh:'试模调参', en:'Trial & Tune', desc:'试模打样，优化工艺与外观，留样封样。'},
      {n:'6', zh:'验证量产', en:'IQ/OQ/PQ', desc:'模具安装/运行/性能确认，合规放行量产。'}
    ],
    equip: {
      order:['cnc','edm','wire','grinder','injection','qc'],
      data: {
        cnc:{zh:'CNC 数控加工设备', en:'CNC Machining Centers', items:[
          {n:'Hauser S35',m:'坐标磨',o:'瑞士',p:'0.001mm',q:1},{n:'Hauser S50L',m:'坐标磨',o:'瑞士',p:'0.001mm',q:1},
          {n:'Mazak QTE 200L',m:'CNC车床',o:'日本',p:'±0.002mm',q:1},{n:'Kellenberger K10',m:'数控磨床',o:'瑞士',p:'±0.0005mm',q:1},
          {n:'MAKINO V90S',m:'五轴龙门',o:'日本',p:'0.005mm',q:1},{n:'YASDA YMC430',m:'高速CNC',o:'日本',p:'0.001mm',q:2},
          {n:'YASDA YMC650',m:'高速CNC',o:'日本',p:'0.001mm',q:1},{n:'RODERS RXP501',m:'CNC',o:'德国',p:'0.002mm',q:1},
          {n:'RODERS RXP601DSH',m:'五轴CNC',o:'德国',p:'0.002mm',q:1},{n:'FANUC A-T14iF',m:'CNC',o:'日本',p:'0.005mm',q:1},
          {n:'FANUC a-D21MiB',m:'CNC',o:'日本',p:'0.005mm',q:2},{n:'HURCO VMX42HSi',m:'CNC',o:'美国',p:'0.005mm',q:2},
          {n:'AWEA SP-2016',m:'龙门',o:'台湾',p:'0.01mm',q:1},{n:'WELE RB-212',m:'龙门',o:'台湾',p:'0.01mm',q:1},
          {n:'YCM NCV-102AM',m:'CNC铣',o:'台湾',p:'—',q:2},{n:'YCM NXV-1020AM',m:'CNC铣',o:'台湾',p:'—',q:1},
          {n:'KERUISI K-540A',m:'CNC',o:'中国',p:'0.005mm',q:2},{n:'KERUISI K540iH',m:'CNC',o:'中国',p:'0.005mm',q:2}]},
        edm:{zh:'EDM 电火花加工设备', en:'EDM Machines', items:[
          {n:'AgieCharmilles Form P350',m:'成型机',o:'瑞士',p:'0.002mm',q:3},{n:'Sodick AD32Ls',m:'成型机',o:'日本',p:'0.005mm',q:2},
          {n:'MAKINO EDGE3i',m:'成型机',o:'日本',p:'0.005mm',q:1},{n:'MAKINO EDGE2i',m:'成型机',o:'日本',p:'0.003mm',q:1}]},
        wire:{zh:'线切割设备', en:'Wire-Cut EDM', items:[
          {n:'Seibu M50HP',m:'慢走丝',o:'日本',p:'—',q:2},{n:'SODICK AQ550LS',m:'慢走丝',o:'日本',p:'0.003mm',q:1},
          {n:'SODICK AQ360LS',m:'慢走丝',o:'日本',p:'0.005mm',q:1},{n:'SANNIU',m:'慢走丝',o:'台湾',p:'—',q:3}]},
        grinder:{zh:'精密磨床设备', en:'Precision Grinders', items:[
          {n:'Okamoto 126DX',m:'精密磨床',o:'日本',p:'0.002mm',q:1},{n:'Okamoto 95DX',m:'精密磨床',o:'日本',p:'0.005mm',q:1},
          {n:'Okamoto ACC-450ST',m:'精密磨床',o:'日本',p:'0.002mm',q:2},{n:'PERMANET 618S',m:'精密磨床',o:'台湾',p:'0.005mm',q:1},
          {n:'PERMANET HF618S',m:'精密磨床',o:'台湾',p:'0.01mm',q:1}]},
        injection:{zh:'注塑机', en:'Injection Molding Machines', items:[
          {n:'SUMITOMO SE50EV',m:'电动',o:'日本',p:'500KN',q:2},{n:'SUMITOMO SE100EV',m:'电动',o:'日本',p:'1000KN',q:4},
          {n:'SUMITOMO SE180EV',m:'电动',o:'日本',p:'1800KN',q:4},{n:'TOYO CS-230',m:'电动',o:'日本',p:'2300KN',q:2},
          {n:'TOYO CS-280',m:'电动',o:'日本',p:'2800KN',q:1},{n:'HAITIAN 90~800',m:'通用',o:'中国',p:'900~8000KN',q:4},
          {n:'BALZEA V200SD',m:'立式',o:'—',p:'2000KN',q:1},{n:'ZSV160/120-LSR',m:'液态硅胶专用',o:'—',p:'—',q:3}]},
        qc:{zh:'品质检测设备', en:'Quality Inspection Equipment', items:[
          {n:'HEXAGON VIEWMAX D4',m:'CMM+3D扫描',o:'—',p:'0.005mm',q:1},{n:'HEXAGON Global S 5.07.05',m:'CMM',o:'—',p:'0.0012mm',q:1},
          {n:'HEXAGON Classic 686',m:'CMM',o:'—',p:'0.0017mm',q:1},{n:'NIKON VMA-4540',m:'2.5D CMM',o:'—',p:'0.0012mm',q:1},
          {n:'HEXAGON RigelScan Ultra',m:'手持3D扫描',o:'—',p:'0.02mm',q:1}]}
      }
    },
    qc: [
      {k:'IQC', h:'来料检验', p:'医疗级模具钢与标准件入厂全检，建材质与批次台账。'},
      {k:'IPQC', h:'过程检验', p:'洁净车间内各序首检+巡检，型腔尺寸在线监控。'},
      {k:'OQC', h:'模具终检', p:'试模样品与模具终检，附全尺寸检测报告与留样。'},
      {k:'CMM', h:'三坐标 / 3D 扫描', p:'HEXAGON / NIKON 对型腔全尺寸测量，精度 0.0012mm。'}
    ]
  };

  // 区块一：模具能力卡（互斥折叠 + 照片轮播）
  var capAcc = document.getElementById('moldCapAcc');
  MOLD.caps.forEach(function(c){
    var item = document.createElement('div');
    item.className = 'cap-item';
    var photos = c.photos.map(function(p,i){ return '<div class="photo-slot" data-idx="'+i+'"><span class="lbl">'+esc(p)+'</span></div>'; }).join('');
    var tags = c.tags.map(function(t){ return '<span>'+esc(t)+'</span>'; }).join('');
    item.innerHTML = '<div class="cap-head"><div class="cap-ico">'+esc(c.icon||'')+'</div><div class="cap-t"><div class="t-zh">'+esc(c.zh)+'</div><div class="t-en">'+esc(c.en||'')+'</div></div><span class="cap-badge">'+c.photos.length+' 图</span><span class="cap-chev">&#9656;</span></div>'
      + '<div class="cap-body"><p>'+esc(c.desc)+'</p><div class="cap-tags">'+tags+'</div><div class="cap-photos">'+photos+'</div></div>';
    capAcc.appendChild(item);
  });
  capAcc.addEventListener('click', function(e){
    var head = e.target.closest('.cap-head');
    var slot = e.target.closest('.photo-slot');
    if (head){
      var item = head.parentElement;
      var wasOpen = item.classList.contains('open');
      capAcc.querySelectorAll('.cap-item').forEach(function(el){ el.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    }
    if (slot){
      var item = slot.closest('.cap-item');
      var idx = +slot.dataset.idx;
      var ci = Array.prototype.indexOf.call(capAcc.children, item);
      openMoldCarousel(MOLD.caps[ci].photos, idx, MOLD.caps[ci].zh);
    }
  });

  // 区块三：加工设备（互斥折叠 + 表格），徽标 = 数量求和（2026-09-04 迁移：模具中心 → 资质实力页）
  var eqAcc = document.getElementById('qualEqAcc');
  MOLD.equip.order.forEach(function(key){
    var c = MOLD.equip.data[key];
    var total = c.items.reduce(function(s,d){ return s + (parseInt(d.q,10)||1); }, 0);
    var rows = c.items.map(function(d){
      return '<tr class="eq-row"><td><span class="eq-dev">'+esc(d.n)+'</span><div class="eq-model">'+esc(d.m||'')+'</div></td><td>'+esc(d.o||'')+'</td><td>'+esc(d.p||'')+'</td><td class="eq-qty">×'+(parseInt(d.q,10)||1)+'</td><td><div class="eq-img" data-cap="'+esc(d.n)+' 设备实拍图">设备<br>实拍图</div></td></tr>';
    }).join('');
    var item = document.createElement('div');
    item.className = 'eq-item';
    item.innerHTML = '<div class="eq-head"><span class="eq-dot"></span><span class="t-zh">'+esc(c.zh)+'</span><span class="t-en">'+esc(c.en||'')+'</span><span class="eq-badge">'+total+' 台</span><span class="eq-chev">&#9656;</span></div><div class="eq-body"><div class="eq-scroll"><table class="eq-table"><thead><tr><th>设备 / Model</th><th>产地</th><th>精度 / 吨位</th><th>数量</th><th>图片</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
    eqAcc.appendChild(item);
  });
  eqAcc.addEventListener('click', function(e){
    var head = e.target.closest('.eq-head');
    if (head){
      var item = head.parentElement;
      var wasOpen = item.classList.contains('open');
      eqAcc.querySelectorAll('.eq-item').forEach(function(el){ el.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    }
  });
  // 设备实拍图：点击走轮播 Lightbox（单图占位）
  document.addEventListener('click', function(e){
    var t = e.target.closest('.eq-img');
    if (t){ e.stopPropagation(); openMoldCarousel([t.dataset.cap || '设备实拍图'], 0, t.dataset.cap || '设备实拍图'); }
  });

  // 区块二：开发流程
  var flow = document.getElementById('moldFlow');
  if (flow) flow.innerHTML = MOLD.flow.map(function(s){
    return '<div class="mflow-step m-reveal"><div class="mflow-num">'+esc(s.n)+'</div><h4>'+esc(s.zh)+'</h4><div class="en">'+esc(s.en||'')+'</div><p>'+esc(s.desc||'')+'</p></div>';
  }).join('');

  // 区块四：品质管控 QC
  var qc = document.getElementById('moldQc');
  if (qc) qc.innerHTML = MOLD.qc.map(function(q){
    return '<div class="mqc m-reveal"><div class="mqc-k">'+esc(q.k)+'</div><h4>'+esc(q.h)+'</h4><p>'+esc(q.p||'')+'</p></div>';
  }).join('');

  // 轮播 Lightbox
  var mlb = document.getElementById('moldLb');
  var mlbImg = document.getElementById('moldLbImg');
  var mlbDots = document.getElementById('moldLbDots');
  var mlbCap = document.getElementById('moldLbCap');
  var mlbTimer = null, mlbPhotos = [], mlbIdx = 0, mlbTitle = '';
  function renderMLB(){
    mlbImg.innerHTML = mlbPhotos.map(function(p,i){ return '<div class="mlb-slide'+(i===mlbIdx?' active':'')+'">'+esc(p)+'</div>'; }).join('');
    mlbDots.innerHTML = mlbPhotos.map(function(_,i){ return '<span class="mlb-dot'+(i===mlbIdx?' active':'')+'" data-idx="'+i+'"></span>'; }).join('');
    mlbCap.textContent = mlbTitle + ' · ' + mlbPhotos[mlbIdx];
  }
  function nextMLB(){ mlbIdx = (mlbIdx+1)%mlbPhotos.length; renderMLB(); }
  function startMLB(){ if (mlbTimer) clearInterval(mlbTimer); if (mlbPhotos.length>1) mlbTimer = setInterval(nextMLB, 5000); }
  function stopMLB(){ if (mlbTimer){ clearInterval(mlbTimer); mlbTimer = null; } }
  function openMoldCarousel(photos, startIdx, title){
    mlbPhotos = photos || []; mlbTitle = title || ''; mlbIdx = startIdx || 0; renderMLB();
    mlb.classList.add('show'); startMLB();
  }
  mlb.addEventListener('mouseenter', stopMLB);
  mlb.addEventListener('mouseleave', function(){ if (mlb.classList.contains('show')) startMLB(); });
  mlb.addEventListener('click', function(e){
    if (e.target === mlb || e.target.classList.contains('mlb-close')){ mlb.classList.remove('show'); stopMLB(); }
    var dot = e.target.closest('.mlb-dot');
    if (dot){ mlbIdx = +dot.dataset.idx; renderMLB(); startMLB(); }
  });

  // 滚动揭示（IntersectionObserver 增强 + :target 导航兜底）
  // 站点靠 CSS :target 切页：#page-mold 默认 display:none，IO 在隐藏期初始化，
  // 个别浏览器导航回该页时不补火，导致 .m-reveal 停在 opacity:0。加导航兜底强制揭示。
  var revs = document.querySelectorAll('#page-mold .m-reveal');
  function revealMold(){
    revs.forEach(function(el, i){ setTimeout(function(){ el.classList.add('in'); }, Math.min(i, 8) * 60); });
  }
  var moldHash0 = (location.hash || '').replace(/^#/, '') || '';
  if ('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    revs.forEach(function(el){ io.observe(el); });
    // 兜底：本页成为 :target 时强制揭示（IO 未触发也不影响可见性）
    window.addEventListener('hashchange', function(){
      if ((location.hash || '').replace(/^#/,'') === 'page-mold') revealMold();
    });
    if (moldHash0 === 'page-mold') revealMold();
  } else {
    revs.forEach(function(el){ el.classList.add('in'); });
  }
})();

(function(){

  var nav = document.getElementById('nav');

  var links = nav.querySelectorAll('.links > li > a');

  var lastScrollY = 0;

  var ticking = false;



  function getActivePage(){

    var h = window.location.hash || '#page-home';

    return document.querySelector(h);

  }



  function isHomePage(){

    var h = window.location.hash;

    return !h || h === '#page-home';

  }

  function onScroll(){

    if (ticking) return;

    ticking = true;

    requestAnimationFrame(function(){

      var page = getActivePage();

      var y = page ? page.scrollTop : 0;



      if (isHomePage()) {

        nav.classList.toggle('scrolled', y > 60);

      } else {

        nav.classList.add('scrolled');

      }



      if (y <= 0) { nav.classList.remove('hidden'); }

      else if (y > lastScrollY && y > 80) { nav.classList.add('hidden'); }

      else if (y < lastScrollY) { nav.classList.remove('hidden'); }



      lastScrollY = y;

      ticking = false;

    });

  }

  function onHash(){

    var h = window.location.hash || '#page-home';

    nav.classList.remove('open');

    links.forEach(function(l){

      var on = l.getAttribute('href') === h;

      l.classList.toggle('active', on);

      if (on) { l.setAttribute('aria-current', 'page'); } else { l.removeAttribute('aria-current'); }

    });

    // Re-bind scroll listener to new active page

    var oldPage = document.querySelector('.page[data-scroll-bound]');

    if (oldPage) { oldPage.removeEventListener('scroll', onScroll); oldPage.removeAttribute('data-scroll-bound'); }

    var newPage = getActivePage();

    if (newPage) { newPage.addEventListener('scroll', onScroll, {passive:true}); newPage.setAttribute('data-scroll-bound','1'); newPage.scrollTop = 0; }

    lastScrollY = newPage ? newPage.scrollTop : 0;

    onScroll();

    // Reset reveal animations for the new page

    if (typeof resetReveal === 'function') resetReveal();

  }



  // Init: bind to current page

  (function(){

    var p = getActivePage();

    if (p) { p.addEventListener('scroll', onScroll, {passive:true}); p.setAttribute('data-scroll-bound','1'); }

    onScroll();

  })();

  window.addEventListener('hashchange', onHash);

  if (!window.location.hash) window.location.hash = '#page-home';

  onHash();

})();



/* ═══════════ LIGHTBOX (single image) ═══════════ */

function openLightbox(src) {

  var img = document.querySelector('#lightbox img');

  var box = document.getElementById('lightbox');

  if (!img || !box) return;

  // 仅拦截脚本类协议：不破坏相对路径（images/xxx）与 data:image 占位图
  var probe = String(src == null ? '' : src).replace(/[\u0000-\u001F\u007F\s]/g, '').toLowerCase();

  if (/^(javascript|vbscript):/.test(probe) || /^data:text\/html/.test(probe)) return;

  img.src = src;

  box.classList.add('active');

  document.body.style.overflow = 'hidden';

}



/* data-lightbox 事件委托：取代内联 onclick="openLightbox('...')"。
   内联事件属性在后台可控内容下等同注入点，且 CSP 不友好；
   改属性后 CMS 重建的节点同样有效。 */

document.addEventListener('click', function (e) {

  var el = e.target && e.target.closest && e.target.closest('[data-lightbox]');

  if (!el) return;

  var src = el.getAttribute('data-lightbox');

  if (!src) return;

  e.preventDefault();

  openLightbox(src);

});



function closeLightbox() {

  document.getElementById('lightbox').classList.remove('active');

  document.body.style.overflow = '';

}

document.addEventListener('keydown', function(e){

  var lb = document.getElementById('lightbox');

  if (!lb.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();

});



/* ═══════════ UPGRADE 1: COUNTER ANIMATION ═══════════ */

(function(){

  var counterObserver = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

      if (!entry.isIntersecting) return;

      var numEl = entry.target.querySelector('.num');

      if (!numEl || entry.target.dataset.counted) return;

      entry.target.dataset.counted = '1';

      var target = parseInt(numEl.textContent.replace(/[^0-9]/g, '')) || 0;

      var duration = 1800;

      var start = performance.now();

      entry.target.classList.add('counting');

      function step(ts){

        var elapsed = ts - start;

        var progress = Math.min(elapsed / duration, 1);

        var eased = 1 - Math.pow(1 - progress, 3);

        numEl.textContent = Math.floor(eased * target);

        if (progress < 1) requestAnimationFrame(step);

        else { numEl.textContent = target; entry.target.classList.remove('counting'); }

      }

      requestAnimationFrame(step);

    });

  }, { threshold: 0.4 });

  document.querySelectorAll('.stat-item').forEach(function(el){ counterObserver.observe(el); });

  document.querySelectorAll('.as-item').forEach(function(el){ counterObserver.observe(el); });

})();



/* ═══════════ UPGRADE 4: MICRO-INTERACTIONS ═══════════ */



/* 4b: Card hover float — add class to prod cards & cert cards */

(function(){

  document.querySelectorAll('.prod-card, .img-cert-card, .iq-item').forEach(function(card){

    card.classList.add('hover-float');

  });

})();



/* 4c: Link underline slide-in — add to CTA link, nav links, footer links */

(function(){

  document.querySelectorAll('.link, .cta-link').forEach(function(el){ el.classList.add('link-slide'); });

})();



/* 4f: Hero title char-by-char fade-in */

(function(){

  var heroH1 = document.querySelector('.hero h1');

  if (!heroH1) return;

  var html = heroH1.innerHTML;

  var result = '';

  var inTag = false, inStrong = false;

  for (var i = 0, delay = 0; i < html.length; i++) {

    var c = html[i];

    if (c === '<') { inTag = true; result += c; continue; }

    if (c === '>') { inTag = false; result += c; continue; }

    if (inTag) { result += c; continue; }

    if (c === ' ') { result += ' '; continue; }

    result += '<span class="char" style="animation-delay:' + (delay * 0.025) + 's">' + c + '</span>';

    delay++;

  }

  heroH1.innerHTML = result;

})();



/* Hero Carousel */

(function(){

  var cur = 0;

  function getSlides() { return document.querySelectorAll('.hero-slide'); }

  function getDots() { return document.querySelectorAll('.hero-dot'); }

  function go(idx) {

    var slides = getSlides(), dots = getDots();

    if (!slides.length) return;

    var total = slides.length;

    if (slides[cur]) slides[cur].classList.remove('active');

    if (dots[cur]) dots[cur].classList.remove('active');

    cur = (idx + total) % total;

    if (slides[cur]) slides[cur].classList.add('active');

    if (dots[cur]) dots[cur].classList.add('active');

  }

  document.addEventListener('click', function(e) {

    var dot = e.target && e.target.closest ? e.target.closest('.hero-dot') : null;

    if (dot) go(parseInt(dot.dataset.slide));

  });

  setInterval(function(){ go(cur + 1); }, 8000);

})();



/* ═══════════ HAMBURGER MENU ═══════════ */

(function(){

  var hamburger = document.getElementById('hamburger');

  var nav = document.getElementById('nav');

  if (!hamburger) return;

  hamburger.addEventListener('click', function(e){

    e.stopPropagation();

    var isOpen = nav.classList.toggle('open');

    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  });

  nav.querySelectorAll('.links a').forEach(function(link){

    link.addEventListener('click', function(){

      // Keep nav open for dropdown toggles (handled separately)

      if (link.parentElement.classList.contains('has-dropdown')) return;

      nav.classList.remove('open');

      hamburger.setAttribute('aria-expanded', 'false');

    });

  });

  document.addEventListener('click', function(e){

    if (!nav.contains(e.target)) nav.classList.remove('open');

  });

  window.addEventListener('resize', function(){

    if (window.innerWidth > 768) nav.classList.remove('open');

  });

})();





/* ═══════════ LAZY LOADING (IntersectionObserver) ═══════════ */

(function(){

  var lazyImgs = document.querySelectorAll('img.lazy');

  var lazyHeroSlides = document.querySelectorAll('[data-bg]');

  

  if ('IntersectionObserver' in window) {

    var imgObserver = new IntersectionObserver(function(entries) {

      entries.forEach(function(entry) {

        if (!entry.isIntersecting) return;

        var img = entry.target;

        if (img.dataset.src) {

          img.src = img.dataset.src;

          img.addEventListener('load', function() { img.classList.add('loaded'); });

          if (img.complete) img.classList.add('loaded');

          img.removeAttribute('data-src');

        }

        imgObserver.unobserve(img);

      });

    }, { rootMargin: '200px 0px' });



    lazyImgs.forEach(function(img) { imgObserver.observe(img); });



    // Hero slides background lazy loading

    lazyHeroSlides.forEach(function(slide) {

      var heroObserver = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

          if (!entry.isIntersecting) return;

          var bgUrl = entry.target.getAttribute('data-bg'); // 动态读取，支持 media-sync 替换

          if (!bgUrl) return;

          entry.target.style.backgroundImage = 'url(' + bgUrl + ')';

          entry.target.removeAttribute('data-bg');

          heroObserver.unobserve(entry.target);

        });

      }, { rootMargin: '400px 0px' });

      heroObserver.observe(slide);

    });

  } else {

    // Fallback: load all immediately

    lazyImgs.forEach(function(img) {

      if (img.dataset.src) { img.src = img.dataset.src; img.classList.add('loaded'); }

    });

    lazyHeroSlides.forEach(function(slide) {

      var bg = slide.getAttribute('data-bg');

      if (bg) { slide.style.backgroundImage = 'url(' + bg + ')'; slide.removeAttribute('data-bg'); }

    });

  }

})();



/* ═══════════ SKELETON SCREEN ═══════════ */

(function(){

  window.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {

      var sk = document.getElementById('skeleton');

      if (sk) sk.classList.add('hide');

    }, 300);

  });

})();



/* ═══════════ BACK TO TOP ═══════════ */

document.addEventListener('DOMContentLoaded', function(){

  var btn = document.getElementById('back-to-top');

  if (!btn) return;

  var ticking = false;

  window.addEventListener('scroll', function() {

    if (!ticking) {

      requestAnimationFrame(function() {

        if (window.scrollY > 500) { btn.classList.add('show'); }

        else { btn.classList.remove('show'); }

        ticking = false;

      });

      ticking = true;

    }

  }, { passive: true });

  btn.addEventListener('click', function() {

    window.scrollTo({ top: 0, behavior: 'smooth' });

  });

});



/* ═══════════ MOBILE CTA ═══════════ */

document.addEventListener('DOMContentLoaded', function(){

  var ctaBtn = document.getElementById('mobile-cta-btn');

  if (!ctaBtn) return;

  ctaBtn.addEventListener('click', function() {

    location.hash = '#page-contact';

  });

});



  function toggleAccordion(btn) {

    const item = btn.closest('.acc-item');

    if (!item) return;

    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.acc-item.open').forEach(acc => acc.classList.remove('open'));

    if (!isOpen) item.classList.add('open');

  }

  // Dropdown link click: navigate to target page then expand/scroll

  (function(){

    // Accordion: expand target after page switch

    document.querySelectorAll('.dropdown-menu a[data-acc]').forEach(function(link){

      link.addEventListener('click', function(e){

        e.preventDefault();

        var accId = this.getAttribute('data-acc');

        var pageHash = this.getAttribute('href');

        location.hash = pageHash;

        setTimeout(function(){

          var btn = document.getElementById(accId);

          if (btn) {

            document.querySelectorAll('.acc-item.open').forEach(function(acc){ acc.classList.remove('open'); });

            var item = btn.closest('.acc-item');

            if (item) item.classList.add('open');

            btn.scrollIntoView({behavior:'smooth', block:'center'});

          }

        }, 150);

      });

    });

    // General scroll-to: navigate then scroll (事件委托，兼容顶部下拉菜单与动态注入的 footer 链接)

    document.addEventListener('click', function(e){

      var link = e.target.closest('a[data-scroll-to]');

      if (!link) return;

      e.preventDefault();

      var targetId = link.getAttribute('data-scroll-to');

      var pageHash = link.getAttribute('href');

      location.hash = pageHash;

      setTimeout(function(){

        var el = document.getElementById(targetId);

        var page = el && el.closest('.page');

        if (el && page) {

          page.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });

        }

      }, 180);

    });

    // Mobile: tap top-level nav link to toggle dropdown (only one open at a time)

    document.querySelectorAll('.has-dropdown > a').forEach(function(trigger){

      trigger.addEventListener('click', function(e){

        if (window.innerWidth <= 860) {

          var dd = this.nextElementSibling;

          if (dd && dd.classList.contains('dropdown-menu')) {

            e.preventDefault();

            var isOpen = dd.classList.contains('open');

            // Close all other dropdowns first

            document.querySelectorAll('.dropdown-menu.open').forEach(function(d){ d.classList.remove('open'); });

            if (!isOpen) dd.classList.add('open');

          }

        }

      });

    });

    // Desktop: remove .open class when mouse leaves nav (clean up mobile leftovers)

    document.querySelector('.hnav').addEventListener('mouseleave', function(){

      if (window.innerWidth > 860) {

        document.querySelectorAll('.dropdown-menu.open').forEach(function(d){ d.classList.remove('open'); });

      }

    });

  })();



  /* ═══════════ NAV HOME STATE (首页导航栏透明) ═══════════ */

  (function(){

    var nav = document.getElementById('nav');

    function syncNavHome(){

      var hash = location.hash || '#page-home';

      if (hash === '#page-home' || hash === '') nav.classList.add('on-home');

      else nav.classList.remove('on-home');

    }

    syncNavHome();

    window.addEventListener('hashchange', syncNavHome);

  })();



  /* ═══════════ 语言切换 C（地球胶囊 + 网格） ═══════════ */
  (function(){
    var sw = document.getElementById('lang-switch');
    var btn = document.getElementById('lang-c-btn');
    var grid = document.getElementById('lang-grid');
    if (!sw || !btn || !grid) return;
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var open = sw.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    grid.querySelectorAll('button').forEach(function(b){
      b.addEventListener('click', function(e){
        e.stopPropagation();
        switchLang(b.getAttribute('data-lang'));
        sw.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function(e){
      if (!sw.contains(e.target)) { sw.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  })();

  /* ═══════════ NAV SEARCH (全文搜索) ═══════════ */

  (function(){

    var box = document.getElementById('search-panel');

    var navSearch = document.getElementById('nav-search');

    var toggle = document.getElementById('search-toggle');

    var closeBtn = document.getElementById('search-close');

    var input = document.getElementById('search-input');

    var results = document.getElementById('search-results');

    var results = document.getElementById('search-results');

    if (!box || !toggle || !input || !results) return;




    var INDEX = [];

    var current = [];

    var activeIdx = -1;

    function clean(s){ return (s||'').replace(/\s+/g,' ').trim(); }

    function pageNameOf(id){

      var a = document.querySelector('.nav .links a[href="#'+id+'"]');

      return a ? a.textContent.trim() : id;

    }

    function buildIndex(){

      INDEX = [];

      var seen = new Set();

      document.querySelectorAll('.page').forEach(function(page){

        var pid = page.id;

        var pname = pageNameOf(pid);

        INDEX.push({ pageId: pid, pageName: pname, el: page, title: pname, text: clean(page.textContent).slice(0,260) });

        var blocks = page.querySelectorAll('[id], .acc-item, .prod-card, .cert-item, .value-card, .news-item, .ci-highlight, .sec-header');

        blocks.forEach(function(b){

          if (b === page || seen.has(b)) return;

          seen.add(b);

          if (b.closest('.footer') || b.closest('.site-footer')) return;

          var heading = b.querySelector('h1,h2,h3,h4');

          var title = heading ? clean(heading.textContent) : '';

          var txt = clean(b.textContent);

          if (!title) title = txt.slice(0,28) || pname;

          if (txt.length < 4) return;

          INDEX.push({ pageId: pid, pageName: pname, el: b, title: title, text: txt });

        });

      });

    }

    function escapeHtml(s){ return (s||'').replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

    function highlight(text, q){

      var esc = escapeHtml(text);

      if (!q) return esc;

      var re = new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');

      return esc.replace(re, '<mark>$1</mark>');

    }

    function render(q, target){
      target = target || results;

      q = (q||'').trim();

      if (!q){ target.className='search-results'; target.innerHTML=''; current=[]; activeIdx=-1; return; }

      var lower = q.toLowerCase();

      var hits = [];

      INDEX.forEach(function(it){

        if ((it.title+' '+it.text).toLowerCase().indexOf(lower) !== -1) hits.push(it);

      });

      current = hits.slice(0, 12);

      activeIdx = -1;

      if (!current.length){

        target.className='search-results has-empty';

        var lang = document.documentElement.getAttribute('lang') || 'en';

        var tmpl = (I18N.search_no_results && I18N.search_no_results[lang]) || 'No results found for "{{q}}"';

        target.innerHTML='<div class="search-empty">'+escapeHtml(tmpl.replace('{{q}}', q))+'</div>';

        return;

      }

      target.className='search-results has-results';

      target.innerHTML = current.map(function(it, i){

        var pos = it.text.toLowerCase().indexOf(lower);

        var start = Math.max(0, pos - 18);

        var snippet = (start>0?'…':'') + it.text.slice(start, start+90) + '…';

        return '<a class="search-result-item" data-i="'+i+'" href="#'+it.pageId+'">'

          + '<span class="sr-page">'+escapeHtml(it.pageName)+'</span>'

          + '<span class="sr-title">'+highlight(it.title, q)+'</span>'

          + '<span class="sr-snippet">'+highlight(snippet, q)+'</span></a>';

      }).join('');

    }

    function go(it){

      navSearch.classList.remove('open');
      closeSearch();

      location.hash = '#' + it.pageId;

      setTimeout(function(){

        var page = document.getElementById(it.pageId);

        if (!page) return;

        if (it.el && it.el !== page){

          page.scrollTo({ top: it.el.offsetTop - 80, behavior: 'smooth' });

          var acc = it.el.closest && it.el.closest('.acc-item');

          if (acc){ var btn = acc.querySelector('.acc-header'); if (btn && !acc.classList.contains('open')) toggleAccordion(btn); }

        } else {

          page.scrollTo({ top: 0 });

        }

      }, 260);

    }

    function openSearch(){ box.classList.add('open'); setTimeout(function(){ input.focus(); }, 60); }

    function closeSearch(){

      box.classList.remove('open');

      results.className='search-results'; results.innerHTML='';

      input.value=''; current=[]; activeIdx=-1;

      if (document.activeElement === input) input.blur();

    }

    window.HNDVO_closeSearch = closeSearch;

    function updateActive(t){

      t = t || results;

      var items = t.querySelectorAll('.search-result-item');

      items.forEach(function(el, i){ el.classList.toggle('active', i === activeIdx); });

      if (items[activeIdx]) items[activeIdx].scrollIntoView({ block:'nearest' });

    }

    toggle.addEventListener('click', function(e){
      e.stopPropagation();
      var _hl = document.querySelector('.hnav-lang'); if (_hl) _hl.classList.remove('open');
      if (box.classList.contains('open')) closeSearch(); else openSearch();
      toggle.setAttribute('aria-expanded', box.classList.contains('open') ? 'true' : 'false');
    });

    if (closeBtn) closeBtn.addEventListener('click', function(e){ e.stopPropagation(); closeSearch(); });

    input.addEventListener('focus', buildIndex);

    input.addEventListener('input', function(){ render(this.value); });

    input.addEventListener('keydown', function(e){

      if (e.key === 'ArrowDown'){ e.preventDefault(); activeIdx = Math.min(activeIdx+1, current.length-1); updateActive(); }

      else if (e.key === 'ArrowUp'){ e.preventDefault(); activeIdx = Math.max(activeIdx-1, 0); updateActive(); }

      else if (e.key === 'Enter'){ if (activeIdx>=0 && current[activeIdx]) go(current[activeIdx]); else if (current[0]) go(current[0]); }

      else if (e.key === 'Escape'){ closeSearch(); }

    });

    results.addEventListener('click', function(e){

      var item = e.target.closest('.search-result-item');

      if (!item) return;

      e.preventDefault();

      var i = parseInt(item.getAttribute('data-i'), 10);

      if (current[i]) go(current[i]);

    });

    document.addEventListener('click', function(e){

      if (box.classList.contains('open') && !box.contains(e.target) && !(navSearch && navSearch.contains(e.target))) closeSearch();

    });

  })();

  // Scroll reveal

  var revealObs, resetReveal;

  (function(){

    revealObs = new IntersectionObserver(function(entries){

      entries.forEach(function(e){

        if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target); }

      });

    }, {rootMargin:'-120px'});

    document.querySelectorAll('.reveal').forEach(function(el){ revealObs.observe(el); });

    resetReveal = function(){

      document.querySelectorAll('.reveal.revealed').forEach(function(el){ el.classList.remove('revealed'); });

      document.querySelectorAll('.reveal').forEach(function(el){ revealObs.observe(el); });

    };

  })();





  /* ═══════════ FORM SUBMISSION ═══════════ */

  (function(){

    var form = document.getElementById('contact-form');

    if (!form) return;

    var btn = form.querySelector('.submit-btn');

    if (!btn) return;



    function currentLang(){ return sessionStorage.getItem('hondvo_lang') || 'en'; }



    var getInputs = function(){

      // 改为按 name 取值：表单已语义化为 <form id="contact-form">，各字段带唯一 name/id，
      // 不再依赖「第 N 个 input[type=text]」这种脆弱的下标定位（原 placeholder 错位即由此而来）。
      var el = form.elements;

      return {

        name: el['name'],

        company: el['company'],

        phone: el['phone'],

        email: el['email'],

        type: el['type'],

        desc: el['desc'],

        honeypot: el['honeypot']

      };

    };



    function validatePhone(p){ return /^(\+\d{1,3}\s?)?\d{7,15}$/.test(p.replace(/[\s\-\(\)]/g,'')); }



    function btnState(state){

      var t = function(k){ return (I18N[k]||{})[currentLang()]||''; };

      btn.style.transition = 'all 0.3s';

      btn.disabled = true;

      btn.style.opacity = '0.85';

      if (state==='loading'){ btn.style.background='var(--neutral-400)'; btn.style.color='var(--white)'; btn.textContent = t('ct_submitting'); }

      else if (state==='success'){

        btn.style.background='var(--success)'; btn.style.color='var(--white)'; btn.textContent = t('ct_success');

        setTimeout(function(){

          btn.disabled = false; btn.style.opacity='1'; btn.style.background=''; btn.style.color=''; btn.textContent = t('ct_submit');

        }, 3500);

      } else if (state==='error'){

        btn.disabled = false; btn.style.background='var(--error)'; btn.style.color='var(--white)'; btn.textContent = t('ct_failure');

        setTimeout(function(){

          btn.style.opacity='1'; btn.style.background=''; btn.style.color=''; btn.textContent = t('ct_submit');

        }, 4000);

      }

    }



    async function submit(){

      var f = getInputs();

      if (f.honeypot && f.honeypot.value) return;



      var name = (f.name||{}).value||''; var company = (f.company||{}).value||'';

      var phone = (f.phone||{}).value||''; var email = (f.email||{}).value||'';

      var type = (f.type||{}).options ? (f.type.options[f.type.selectedIndex]||{}).text || '' : '';

      var desc = (f.desc||{}).value||'';



      company = company.trim(); phone = phone.trim(); desc = desc.trim(); name = name.trim();



      var t = function(k){ return (I18N[k]||{})[currentLang()]||''; };

      function fgLabel(input){ var fg = input && input.closest ? input.closest('.fg') : null; var lb = fg && fg.querySelector('label'); return lb ? lb.textContent.trim() : ''; }



      if (!name || !phone || !email){

        var missingLabels = [];

        if (!name) { window.markFg(f.name); missingLabels.push(fgLabel(f.name)); }

        if (!phone) { window.markFg(f.phone); missingLabels.push(fgLabel(f.phone)); }

        if (!email) { window.markFg(f.email); missingLabels.push(fgLabel(f.email)); }

        window.showToast(t('ct_val_required'), 'error', missingLabels); return;

      }

      if (!validatePhone(phone)){

        window.markFg(f.phone);

        window.showToast(t('ct_val_phone'), 'error', [fgLabel(f.phone)]); return;

      }



      btnState('loading');



      // 提交到后端询盘接口（POST /api/inquiries）

      var source = (location.hash || '').replace(/^#/, '') || 'page-contact';

      var inquiryBody = JSON.stringify({

        name: name, email: email, phone: phone, company: company,

        product: type, message: desc, source: source

      });



      fetch((window.HONDVO_API || '/api') + '/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: inquiryBody })

        .then(function (res) {

          if (!res.ok) throw new Error('inquiry submit failed');

          return res.json();

        })

        .then(function () {

          btnState('success');

          window.showToast(t('ct_success'), 'success');

          f.name.value = ''; f.company.value = ''; f.phone.value = '';

          f.email.value = ''; f.type.selectedIndex = 0; f.desc.value = '';

        })

        .catch(function () {

          btnState('error');

          window.showToast(t('ct_failure'), 'error');

        });

    }



    // 改为监听 submit（原生表单）：回车提交、无障碍 form landmark、原生校验均生效。
    // 按钮为 type="submit"，其 click 会自然触发表单 submit，无需再单独绑定 click。
    form.addEventListener('submit', function(e){ e.preventDefault(); submit(); });

  })();



  /* ═══════════ PURCHASE MODALS ═══════════ */

  (function(){

    // Open modal on card click

    document.querySelectorAll('.purchase-card').forEach(function(card){

      card.addEventListener('click', function(){

        var modalId = this.getAttribute('data-modal');

        var modal = document.getElementById(modalId);

        if (modal) { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }

      });

    });



    // Close modal on overlay click

    document.querySelectorAll('.purchase-modal').forEach(function(modal){

      modal.addEventListener('click', function(e){

        if (e.target === this) closeModal(this.id);

      });

    });



    // Submit buttons - event delegation (modals rendered after script)

    var currentLang = function(){ return sessionStorage.getItem('hondvo_lang') || 'en'; };

    var t = function(k){ return (I18N[k]||{})[currentLang()]||''; };

    document.addEventListener('click', function(e){

      var btn = e.target.closest('.purchase-modal .modal-submit');

      if (!btn) return;

      e.preventDefault();



      var modal = btn.closest('.purchase-modal');

      var inputs = modal.querySelectorAll('input, select, textarea');

      var fields = {};

      var radioGroups = {};



      inputs.forEach(function(el){

        if (el.type === 'radio') {

          if (!radioGroups[el.name]) radioGroups[el.name] = '';

          if (el.checked) radioGroups[el.name] = el.value;

        } else if (el.tagName === 'SELECT') {

          fields[el.parentElement.querySelector('label').textContent] = el.options[el.selectedIndex].text;

        } else if (el.tagName === 'TEXTAREA') {

          fields[el.parentElement.querySelector('label').textContent] = el.value.trim();

        } else if (el.type !== 'radio' && el.type !== 'submit' && el.type !== 'button') {

          fields[el.parentElement.querySelector('label').textContent] = el.value.trim();

        }

      });



      // Merge radio groups

      for (var key in radioGroups) { if (radioGroups[key]) fields[key] = radioGroups[key]; }



      // Validate all form fields required (textarea/需求描述 is optional)

      var hasEmpty = false;

      var missingLabels = [];

      inputs.forEach(function(el){

        if (el.type === 'radio' || el.type === 'submit' || el.type === 'button') return;

        if (el.tagName === 'SELECT') return;

        if (el.tagName === 'TEXTAREA') return;

        if (el.value.trim() === '') {

          hasEmpty = true;

          var fg = el.closest('.fg');

          if (fg) {

            fg.classList.add('invalid');

            var lb = fg.querySelector('label');

            if (lb) missingLabels.push(lb.textContent.trim());

          }

        }

      });

      // Check radio groups

      for (var rk in radioGroups) {

        if (!radioGroups[rk]) hasEmpty = true;

      }

      if (hasEmpty) {

        window.showToast(t('pc_val_required') || 'Please fill in all required fields.', 'error', missingLabels);

        return;

      }



      var emailInput = modal.querySelector('input[type="email"]');

      var email = (emailInput && emailInput.value.trim()) || '';

      var nameInput = modal.querySelector('input[type="text"]');

      var name = (nameInput && nameInput.value.trim()) || '';



      // Build message

      var title = modal.querySelector('.modal-title').textContent;

      var msgParts = [];

      for (var k in fields) { if (fields[k]) msgParts.push(k + ': ' + fields[k]); }



      var textInputs = modal.querySelectorAll('input[type="text"]');

      var company = (textInputs[1] && textInputs[1].value.trim()) || '';

      var phoneInput = modal.querySelector('input[type="tel"]');

      var phone = (phoneInput && phoneInput.value.trim()) || '';



      btn.textContent = t('pc_submitting') || 'Submitting...'; btn.disabled = true;



      // 提交到后端询盘接口（POST /api/inquiries）

      var source = (location.hash || '').replace(/^#/, '') || 'page-products';

      var inquiryBody = JSON.stringify({

        name: name, email: email, phone: phone, company: company,

        product: title, message: msgParts.join('\n'), source: source

      });



      fetch((window.HONDVO_API || '/api') + '/inquiries', {

        method: 'POST', headers: {'Content-Type': 'application/json'}, body: inquiryBody

      })

      .then(function (res) {

        if (!res.ok) throw new Error('inquiry submit failed');

        return res.json();

      })

      .then(function () {

        btn.textContent = t('pc_success_msg') || 'Submitted! We will contact you within 24h';

        btn.style.background = 'var(--success)';

        window.showToast(t('pc_success_msg') || 'Submitted! We will contact you within 24h', 'success');

        setTimeout(function(){ closeModal(modal.id); resetModalBtn(btn); }, 2500);

      })

      .catch(function () {

        btn.textContent = t('pc_failure_msg') || 'Failed, please try again';

        btn.style.background = 'var(--error)';

        window.showToast(t('pc_failure_msg') || 'Failed, please try again', 'error');

        setTimeout(function(){ resetModalBtn(btn); }, 3000);

      });

    });



    function resetModalBtn(btn){

      btn.textContent = (I18N['ct_submit']||{})[currentLang()]||(I18N['ct_submit']||{})['en']||'Submit';

      btn.disabled = false;

      btn.style.background = ''; btn.style.color = '';

    }

  })();



  // Global close function

  function closeModal(id){

    var modal = document.getElementById(id);

    if (!modal) return;

    modal.classList.remove('active');

    document.body.style.overflow = '';

    // Clear all form fields

    modal.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], textarea').forEach(function(el){ el.value = ''; });

    // Reset radio groups to first option checked

    modal.querySelectorAll('.radio-group').forEach(function(group){

      var radios = group.querySelectorAll('input[type="radio"]');

      if (radios.length > 0) {

        radios.forEach(function(r, i){ r.checked = (i === 0); });

      }

    });

  }



  // ESC to close

  document.addEventListener('keydown', function(e){

    if (e.key === 'Escape') {

      document.querySelectorAll('.purchase-modal.active').forEach(function(m){ closeModal(m.id); });

    }

  });



  /* ═══════════ UPGRADE+ 交互增强 ═══════════ */

  // 全局 Toast 通知（支持详情展开 / 点击 / 下滑展开）

  function escapeHtml(s){

    return String(s).replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; });

  }

  function hideToast(){ var el = document.getElementById('toast'); if (el) { el.classList.remove('show'); el.classList.remove('expanded'); } }

  window.showToast = function(msg, type, details){

    var el = document.getElementById('toast');

    if (!el || !msg) return;

    details = Array.isArray(details) ? details.filter(Boolean) : [];

    var hasDetails = details.length > 0;

    var chevron = hasDetails ? '<span class="toast-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>' : '';

    var detailsHtml = hasDetails ? '<div class="toast-details">' + details.map(function(d){ return '<div class="toast-detail-item">' + escapeHtml(d) + '</div>'; }).join('') + '</div>' : '';

    el.innerHTML = '<div class="toast-main"><span class="toast-msg">' + escapeHtml(msg) + '</span>' + chevron + '</div>' + detailsHtml;

    el.className = 'show' + (type ? ' toast-' + type : '');

    if (window.__toastTimer) clearTimeout(window.__toastTimer);

    window.__toastTimer = setTimeout(hideToast, hasDetails ? 5000 : 2800);

  };



  // Toast 展开交互：点击 / 下滑

  (function(){

    var el = document.getElementById('toast');

    if (!el) return;

    var startY = 0, startX = 0;

    el.addEventListener('click', function(e){

      if (!el.querySelector('.toast-details')) return;

      var expanded = el.classList.toggle('expanded');

      if (window.__toastTimer) clearTimeout(window.__toastTimer);

      window.__toastTimer = setTimeout(hideToast, expanded ? 7000 : 2800);

    });

    el.addEventListener('touchstart', function(e){ startY = e.touches[0].clientY; startX = e.touches[0].clientX; }, {passive:true});

    el.addEventListener('touchmove', function(e){

      var dy = e.touches[0].clientY - startY;

      var dx = Math.abs(e.touches[0].clientX - startX);

      if (dy > 28 && dx < 40 && !el.classList.contains('expanded') && el.querySelector('.toast-details')) {

        el.classList.add('expanded');

        if (window.__toastTimer) clearTimeout(window.__toastTimer);

        window.__toastTimer = setTimeout(hideToast, 7000);

      }

    }, {passive:true});

  })();



  // 表单字段错误态标记

  window.markFg = function(input){

    var fg = input && input.closest ? input.closest('.fg') : null;

    if (fg) fg.classList.add('invalid');

  };

  document.addEventListener('input', function(e){

    var fg = e.target.closest && e.target.closest('.fg');

    if (fg) fg.classList.remove('invalid');

  }, { passive: true });



  // 顶部滚动进度条（绑定活动页面内部滚动）

  (function(){

    var bar = document.getElementById('scroll-progress');

    function activePage(){

      var h = window.location.hash || '#page-home';

      return document.querySelector(h) || document.querySelector('#page-home');

    }

    function update(page){

      if (!bar || !page) return;

      var max = page.scrollHeight - page.clientHeight;

      var pct = max > 0 ? (page.scrollTop / max) * 100 : 0;

      bar.style.width = Math.max(0, Math.min(100, pct)) + '%';

    }

    function onScroll(){ update(activePage()); }

    function bind(){

      document.querySelectorAll('.page[data-progress-bound]').forEach(function(p){

        p.removeEventListener('scroll', onScroll); p.removeAttribute('data-progress-bound');

      });

      var p = activePage();

      if (p){ p.addEventListener('scroll', onScroll, {passive:true}); p.setAttribute('data-progress-bound','1'); }

      update(p);

    }

    window.addEventListener('hashchange', bind);

    window.addEventListener('resize', onScroll, { passive: true });

    bind();

  })();



  // 全局 Ripple 波纹

  document.addEventListener('click', function(e){

    var el = e.target.closest && e.target.closest('.btn, .nav-cta, .submit-btn, .pc-btn, .modal-submit');

    if (!el) return;

    var rect = el.getBoundingClientRect();

    var size = Math.max(rect.width, rect.height);

    var r = document.createElement('span');

    r.className = 'ripple-wave';

    r.style.width = r.style.height = size + 'px';

    r.style.left = (e.clientX - rect.left - size/2) + 'px';

    r.style.top = (e.clientY - rect.top - size/2) + 'px';

    el.appendChild(r);

    setTimeout(function(){ if (r.parentNode) r.parentNode.removeChild(r); }, 650);

  }, { passive: true });



  // 3D Tilt（仅桌面端指针设备）

  if (!('ontouchstart' in window) && window.matchMedia && !window.matchMedia('(pointer: coarse)').matches) {

    document.querySelectorAll('.purchase-card, .prod-card, .img-cert-card').forEach(function(el){

      if (el.classList.contains('tilt')) return;

      el.classList.add('tilt');

      el.addEventListener('mousemove', function(e){

        var r = el.getBoundingClientRect();

        var px = (e.clientX - r.left) / r.width - 0.5;

        var py = (e.clientY - r.top) / r.height - 0.5;

        el.style.transform = 'perspective(900px) rotateY(' + (px*6).toFixed(2) + 'deg) rotateX(' + (-py*6).toFixed(2) + 'deg) translateY(-4px)';

      });

      el.addEventListener('mouseleave', function(){ el.style.transform = ''; });

    });

  }



  // Hero 向下滑动提示：点击平滑滚动到 stats-bar（适配固定页面内部滚动）

  document.addEventListener('click', function(e){

    var hint = e.target.closest && e.target.closest('.hero-scroll-hint');

    if (!hint) return;

    var page = document.querySelector('.page:target') || document.getElementById('page-home') || document.querySelector('.page');

    var target = document.querySelector('.stats-bar');

    if (!page || !target) return;

    e.preventDefault();

    var offset = Math.max(0, target.offsetTop - 20);

    page.scrollTo({ top: offset, behavior: 'smooth' });

  });


(function () {

  // 基址唯一出口为 api-client.js 解析后写入的 window.HONDVO_API，此处只读、不再自行解析。
  // 兜底 '/api' 为同源路径，非环境硬编码。
  var API = window.HONDVO_API || '/api';



  var CONSENT_KEY = 'hondvo_cookie_consent';

  var VID_KEY = 'hondvo_vid';



  function getConsent() {

    try {

      var v = localStorage.getItem(CONSENT_KEY);

      // 兼容旧版本遗留的脏值：曾把 null 序列化为字符串写入，需清除后重弹
      if (v === 'null' || v === 'undefined') { localStorage.removeItem(CONSENT_KEY); return null; }

      return v;

    } catch (e) { return null; }

  }

  // setConsent(null) 原实现是 localStorage.setItem(key, null)，
  // 实际写入字符串 "null"，与 'accepted'/'rejected' 均不匹配 → 每次刷新都重新弹窗。
  // 传 null/undefined 时应移除该键（回到「未表态」状态）。
  function setConsent(v) {

    try {

      if (v == null) localStorage.removeItem(CONSENT_KEY);

      else localStorage.setItem(CONSENT_KEY, v);

    } catch (e) {}

  }

  function getVid() {

    try {

      var v = localStorage.getItem(VID_KEY);

      if (!v) { v = 'v_' + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem(VID_KEY, v); }

      return v;

    } catch (e) { return 'anon_' + Date.now(); }

  }

  function curLang() {

    return document.documentElement.getAttribute('lang')

      || (function () { try { return sessionStorage.getItem('hondvo_lang'); } catch (e) { return null; } })()

      || 'en';

  }

  function curPage() { var h = location.hash || ''; return h.replace(/^#/, '') || 'page-home'; }

  function send(path, payload) {

    try {

      var url = API + '/collect/' + path;

      var body = JSON.stringify(payload);

      if (navigator.sendBeacon) {

        navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }));

      } else {

        fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: body, keepalive: true });

      }

    } catch (e) {}

  }



  // ---- 样式（居中模态弹窗 + 浮标） ----

  if (!document.getElementById('hondvo-consent-style')) {

    var st = document.createElement('style'); st.id = 'hondvo-consent-style';

    st.textContent = '#hondvo-consent-mask{position:fixed;inset:0;z-index:100000;background:rgba(15,23,42,.55);display:flex;align-items:center;justify-content:center;padding:20px;font-family:inherit;pointer-events:none;}'

      + '#hondvo-consent{position:relative;max-width:460px;width:100%;background:var(--white);color:var(--neutral-900);border-radius:14px;box-shadow:0 24px 60px rgba(15,23,42,.35);overflow:hidden;pointer-events:auto;}'

      + '#hondvo-consent .hc-card{padding:26px 26px 22px;}'

      + '#hondvo-consent .hc-title{font-size:17px;font-weight:700;margin:0 0 10px;color:var(--neutral-900);}'

      + '#hondvo-consent .hc-text{font-size:13.5px;line-height:1.7;opacity:.86;margin:0 0 20px;}'

      + '#hondvo-consent .hc-actions{display:flex;gap:12px;flex-wrap:wrap;}'

      + '#hondvo-consent .hc-btn{border:none;cursor:pointer;padding:11px 20px;border-radius:8px;font-size:13.5px;font-weight:600;flex:1;min-width:130px;}'

      + '#hondvo-consent .hc-accept{background:var(--brand);color:var(--white);}'

      + '#hondvo-consent .hc-reject{background:var(--white);color:var(--neutral-900);border:1px solid rgba(15,23,42,.15);}'

      + '#hondvo-manage{position:fixed;right:14px;bottom:14px;z-index:100000;border:none;cursor:pointer;background:var(--accent);color:var(--white);font-size:12px;padding:7px 13px;border-radius:20px;box-shadow:0 4px 14px var(--black-25);}';

    document.head.appendChild(st);

  }



  function applyBannerLang() {

    var lang = curLang();

    document.querySelectorAll('#hondvo-consent [data-lang-key], #hondvo-manage [data-lang-key]').forEach(function(el) {

      var key = el.getAttribute('data-lang-key');

      var entry = (typeof I18N !== 'undefined') && I18N[key];

      if (entry && entry[lang]) {
        // 同 switchLang：I18N 可能被后台 bridge 覆盖，禁止原样 innerHTML
        var raw = String(entry[lang]);
        if (/<\/?[a-z][\s\S]*>/i.test(raw)) {
          if (window.HONDVO_sanitizeHTML) el.innerHTML = window.HONDVO_sanitizeHTML(raw);
          else el.textContent = raw;
        } else {
          el.textContent = raw;
        }
      }

    });

  }

  function showBanner() {

    if (document.getElementById('hondvo-consent-mask')) { document.getElementById('hondvo-consent-mask').style.display = 'flex'; applyBannerLang(); return; }

    var mask = document.createElement('div'); mask.id = 'hondvo-consent-mask';

    mask.innerHTML = '<div id="hondvo-consent"><div class="hc-card">'

      + '<p class="hc-title" data-lang-key="cookie_title">Cookie 与数据收集同意</p>'

      + '<p class="hc-text" data-lang-key="cookie_body">我们使用 Cookie 与匿名统计技术，了解您浏览的页面、停留时长与搜索偏好，以改进网站与服务质量。您可点击「仅必要」拒绝行为追踪，拒绝后不会收集任何浏览行为数据（您主动提交的询盘除外）。</p>'

      + '<div class="hc-actions"><button class="hc-btn hc-accept" id="hc-accept" data-lang-key="cookie_accept">接受并继续</button>'

      + '<button class="hc-btn hc-reject" id="hc-reject" data-lang-key="cookie_reject">仅必要</button></div>'

      + '</div></div>';

    document.body.appendChild(mask);

    applyBannerLang();

  }

  function hideBanner() { var m = document.getElementById('hondvo-consent-mask'); if (m) m.style.display = 'none'; }

  function buildManage() {

    if (document.getElementById('hondvo-manage')) return;

    var m = document.createElement('button'); m.id = 'hondvo-manage';

    m.innerHTML = '🍪 <span data-lang-key="cookie_manage">Cookie 设置</span>';

    m.onclick = function () { setConsent(null); showBanner(); bindBanner(); };

    document.body.appendChild(m);

    applyBannerLang();

  }

  function bindBanner() {

    var accept = document.getElementById('hc-accept');

    var reject = document.getElementById('hc-reject');

    if (accept) accept.onclick = function () { setConsent('accepted'); hideBanner(); initTracker(); };

    if (reject) reject.onclick = function () { setConsent('rejected'); hideBanner(); };

  }



  // ---- 行为追踪（仅同意后才启用页面浏览 / 搜索采集） ----

  function initTracker() {

    if (window.__hondvoTrackerReady) return;

    window.__hondvoTrackerReady = true;

    var vid = getVid();

    var pageEnter = Date.now();

    var lastPage = curPage();

    function detectDevice() {

      var ua = navigator.userAgent || '';

      return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(ua) ? 'mobile' : 'desktop';

    }

    function pv(page, dur) { send('pageview', { page: page, referrer: document.referrer, country: '', device: detectDevice(), duration: Math.round(dur / 1000) }); }

    pv(lastPage, 0);

    window.addEventListener('hashchange', function () {

      var now = Date.now(); pv(lastPage, now - pageEnter); lastPage = curPage(); pageEnter = now;

    });

    window.addEventListener('beforeunload', function () { pv(lastPage, Date.now() - pageEnter); });

    var input = document.getElementById('search-input');

    if (input) {

      var h;

      input.addEventListener('input', function () {

        clearTimeout(h);

        h = setTimeout(function () {

          var term = input.value.trim(); if (term.length < 1) return;

          var results = document.querySelectorAll('#search-results .search-result-item').length;

          send('search', { visitorId: vid, term: term, lang: curLang(), resultsCount: results });

        }, 700);

      });

    }

  }



  // 留言采集：表单提交即明示同意，独立于行为追踪 Cookie，始终可用

  window.__hondvoTrack = {

    recordMessage: function (data) {

      data = data || {};

      data.visitorId = getVid();

      data.lang = data.lang || curLang();

      data.page = data.page || curPage();

      send('message', data);

    }

  };



  function boot() {

    try {

      buildManage();

      var c = getConsent();

      if (c === 'accepted') { initTracker(); return; }

      if (c === 'rejected') { return; }

      showBanner(); bindBanner();

    } catch (e) {

      try { showBanner(); bindBanner(); } catch (e2) {}

    }

  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);

  else boot();

  window.addEventListener('load', function () {

    if (!document.getElementById('hondvo-consent-mask') && !document.getElementById('hondvo-manage')) boot();

  });

})();
(function(){
  var els = document.querySelectorAll('.reveal-up');
  if(!els.length) return;
  function show(el,i){ setTimeout(function(){ el.classList.add('in'); }, Math.min(i,10)*50); }
  if(!('IntersectionObserver' in window)){ els.forEach(function(el,i){ show(el,i); }); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){ io.observe(el); });
  window.addEventListener('hashchange', function(){
    if((location.hash||'').replace(/^#/,'') === 'page-mold'){ els.forEach(function(el,i){ show(el,i); }); }
  });
  if((location.hash||'').replace(/^#/,'') === 'page-mold'){ els.forEach(function(el,i){ show(el,i); }); }
})();

/* ============ 8 语言字典（不混排，整树切换） ============ */
/* HNAV_I18N 已于 P1-11 合并进 i18n.js 的 I18N（键名前缀 hnav_） */

const HNAV_LANGS = [["zh","中文"],["en","English"],["ja","日本語"],["ko","한국어"],["de","Deutsch"],["fr","Français"],["es","Español"],["ru","Русский"]];
/* HNAV_CUR 已删除：语言状态的唯一事实来源为 i18n.js 的 switchLang */
/* ===== 防御性渲染（不抛错） ===== */
function hnavCurLang(){
  try { var s = sessionStorage.getItem("hondvo_lang"); if (s) return s; } catch(e){}
  return (document.documentElement && document.documentElement.getAttribute("lang")) || "en";
}
function dict(){
  // P1-11：数据源统一为 i18n.js 的 I18N（hnav_ 前缀），按当前语言展开为无前缀字典，
  // 使 bindLists / bindDrawer 的调用方式保持不变。
  var l = hnavCurLang(), d = {};
  if (typeof I18N === "undefined") return d;
  for (var k in I18N) {
    if (k.indexOf("hnav_") !== 0) continue;
    var e = I18N[k];
    d[k.slice(5)] = (e && (e[l] || e.zh || e.en)) || "";
  }
  return d;
}


/* list → ul */
/* 产品三 Tab 下拉子项跳转（绑定到新 Tab 逻辑） */
function bindNavTabGo(){
  document.querySelectorAll("svg path.drop-nav-ghost, .nav-tab-ghost").forEach(function(){});
}
function bindLists(){
  const d = dict();
  document.querySelectorAll("ul[data-list]").forEach(ul=>{
    const k = ul.getAttribute("data-list");
    const items = d[k];
    ul.innerHTML = "";
    if(Array.isArray(items)){
      items.forEach((text, idx)=>{
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = text;
        // 产品三 Tab 下拉：子项点击跳转对应 Tab（依赖全局 prodTabsOpen，见文件末尾 Tab 逻辑）
        var TAB_KEYS = { prod_browse_items:"browse", prod_discover_items:"discover", prod_industries_items:"industries" };
        // 非产品下拉项 → 目标页面（按 data-list 前缀映射）
        var PAGE_FALLBACK = {
          mold_browse_items:"page-mold", mold_discover_items:"page-mold", mold_learn_items:"page-mold",
          qual_browse_items:"page-qualifications", qual_discover_items:"page-qualifications", qual_manage_items:"page-qualifications",
          faq_browse_items:"page-faq", faq_discover_items:"page-faq", faq_after_items:"page-faq",
          about_browse_items:"page-about", about_discover_items:"page-about", about_contact_items:"page-about",
          contact_browse_items:"page-contact", contact_discover_items:"page-contact", contact_loc_items:"page-contact"
        };
        var tabKey = TAB_KEYS[k];
        var pageKey = PAGE_FALLBACK[k];
        if (tabKey) {
          a.setAttribute("data-nav-tab", tabKey);
          // 点击时才判断 prodTabsOpen（避免 init 时序：Tab IIFE 在文件末尾才暴露）
          a.addEventListener("click", function(e){
            e.preventDefault();
            if (typeof window.prodTabsOpen === "function") {
              window.prodTabsOpen(tabKey);
            } else {
              location.hash = "#page-products";
            }
          });
        } else {
          if (pageKey) a.href = "#" + pageKey;
          // 其它项保持默认锚点跳转（不拦截）
        }
        li.appendChild(a);
        ul.appendChild(li);
      });
    }
  });
}

/* 语言浮窗（纯文字单列）*/
function bindLangPop(){
  const pop = document.getElementById("lang-pop");
  pop.innerHTML = "";
  HNAV_LANGS.forEach(([code,label])=>{
    const b = document.createElement("button");
    b.setAttribute("data-code",code);
    if(code===hnavCurLang()) b.className = "on";
    b.textContent = label;
    b.addEventListener("click", e=>{
      e.stopPropagation();
      if(code===hnavCurLang()){document.querySelector(".hnav-lang").classList.remove("open");return}

      if (typeof window.switchLang === "function") { try { window.switchLang(code); } catch(e){ console.warn("[hnav switchLang]", e); } }
      const wrap = document.querySelector(".hnav-lang-btn");
      wrap.classList.add("is-switching");              // 顶栏文字淡出
      // 下拉列表 / 抽屉 / 浮窗 active 态的重建已由 hondvo:lang 事件统一处理（见下方监听）
      setTimeout(()=>{
        wrap.classList.remove("is-switching");         // 顶栏新文字淡入
      },180);
      document.querySelector(".hnav-lang").classList.remove("open");
    });
    pop.appendChild(b);
  });
}

/* 抽屉 */
function bindDrawer(){
  const sheet = document.getElementById("hnav-drawer-sheet");
  const d = dict();
  sheet.innerHTML = ["products","mold","qual","faq","about","contact"].map(k=>{
    return `<div class="group"><a href="#page-${k}">${d["nav_"+k]||""}</a></div>`;
  }).join("") + `<a href="#page-contact" class="cta">${d.cta||""}</a>`;
}

/* ===== 交互：菜单悬停/点击切换 panel ===== */
function setupMenuInteractions(){
  let closeTimer = null;
  const items = document.querySelectorAll(".hnav-item");
  items.forEach(li=>{
    const link = li.querySelector(".hnav-link");
    li.addEventListener("mouseenter", ()=>{
      if(closeTimer){clearTimeout(closeTimer); closeTimer=null;}
      items.forEach(o=>{if(o!==li) o.classList.remove("open");});
      li.classList.add("open");
    });
    li.addEventListener("mouseleave", ()=>{
      if(closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(()=>{ li.classList.remove("open"); }, 180);
    });
    if(link){
      link.addEventListener("click", e=>{
        const wasOpen = li.classList.contains("open");
        items.forEach(o=>o.classList.remove("open"));
        if(!wasOpen) li.classList.add("open");
      });
    }
  });
}

/* ===== 交互：语言 + 抽屉 ===== */
function setupGlobalInteractions(){
  document.addEventListener("keydown", e=>{
    if(e.key==="Escape"){
      document.querySelectorAll(".hnav-item.open,.hnav-lang.open,.hnav-drawer.open").forEach(o=>o.classList.remove("open"));
    }
  });
  document.addEventListener("click", e=>{
    if(!e.target.closest(".hnav-menu,.hnav-lang,.hnav-lang-pop,.hnav-drawer,.hnav-burger")){
      document.querySelectorAll(".hnav-item.open,.hnav-lang.open").forEach(o=>o.classList.remove("open"));
    }
  });
  document.getElementById("lang-btn").addEventListener("click", e=>{
    e.stopPropagation();
    window.HNDVO_closeSearch && window.HNDVO_closeSearch();
    document.querySelector(".hnav-lang").classList.toggle("open");
  });
  const burger = document.getElementById("hnav-burger");
  const drawer = document.getElementById("hnav-drawer");
  burger.addEventListener("click", ()=>{
    drawer.classList.toggle("open");
    burger.classList.toggle("open");
  });
  drawer.addEventListener("click", e=>{ if(e.target.id==="hnav-drawer"){ drawer.classList.remove("open"); burger.classList.remove("open"); } });
}

/* ===== 语言变更 → 重建 JS 生成内容 =====
   导航下拉列表（ul[data-list]）、抽屉、语言浮窗的 active 态由 JS 生成，
   不是 [data-lang-key] 静态节点，switchLang 的遍历覆盖不到，须在此统一重建。
   由 i18n.js 的 switchLang 末尾派发 hondvo:lang（P1-20 事件总线）。 */
document.addEventListener("hondvo:lang", function () {
  try {
    bindLists();
    bindLangPop();
    bindDrawer();
    const ll = document.getElementById("lang-label");
    const d = dict();
    if (ll && d.lang) ll.textContent = d.lang;
  } catch (err) {
    console.warn("[hnav lang]", err);
  }
});

/* ===== 启动 ===== */
(function init(){
  try{
    bindLists();
    bindLangPop();
    bindDrawer();
    setupMenuInteractions();
    setupGlobalInteractions();
  }catch(err){
    console.warn("[hnav init error]", err);
  }
})();


/* ═══════════ 产品页三 Tab 切换逻辑（2026-09-03 重构）═══════════ */
(function(){
  var TS_KEY = "hondvo_prod_tab";
  var TABS = { browse: "ptab-browse", discover: "ptab-discover", industries: "ptab-industries" };
  var LS = (typeof window.sessionStorage !== "undefined") ? window.sessionStorage : null;
  var pickedTab = "browse";   // 用户最后明确选定的 Tab（点击/URL 定位），hover 临切后回退到这里

  /* ══ 产品页折叠数据（2026-09-04 重构：同「模具中心」accordion，弃用概念卡/右侧抽屉）══
     图标：产品线简写；item 展开后展示特点字段 + 产品清单 chip */
  var PROD_ACC = {
    browse: [
      { img:"images/prod_custom.webp", icon:"械", zh:"手术器械组件", en:"Surgical Instrument Components", pos:"II 类手术器械精密注塑组件，尺寸稳定、装配可靠，批量一致性好",
        fields:[
          { k:"核心特点", v:"生物相容材料 · 洁净车间生产 · 尺寸一致性好" },
          { k:"典型应用", v:"手术刀柄 · 穿刺器结构件 · 内镜配件" },
          { k:"工艺说明", v:"精密注塑 · 自动化装配 · 可配套 IQ/OQ/PQ 验证" }
        ],
        items:["手术刀柄","穿刺器结构件","内镜配件","手术手柄"] },
      { img:"images/prod_enteral.webp", icon:"药", zh:"给药装置结构件", en:"Drug Delivery Device Parts", pos:"笔式注射器、雾化器、给药笔等给药装置结构件精密成型",
        fields:[
          { k:"核心特点", v:"高精度结构件 · 密封配合面 · 批量稳定" },
          { k:"典型应用", v:"笔式注射器 · 雾化器 · 给药笔" },
          { k:"工艺说明", v:"多腔精密注塑 · LSR 密封件配套 · II 类合规" }
        ],
        items:["笔式注射器","雾化器","给药笔","剂量标识件"] },
      { img:"images/prod_injection.webp", icon:"壳", zh:"医用外壳与连接件", en:"Medical Housings & Connectors", pos:"医用外壳、连接器组件高精度成型，外观与尺寸兼得",
        fields:[
          { k:"核心特点", v:"外观件 · 连接器精密间隙 · 高光表面" },
          { k:"典型应用", v:"设备外壳 · 连接器组件 · 卡壳件" },
          { k:"工艺说明", v:"薄壁精密注塑 · 光学级表面 · 洁净车间" }
        ],
        items:["设备外壳","连接器组件","卡壳件","外罩"] },
      { img:"images/mold_4.webp", icon:"套", zh:"导管护套组件", en:"Catheter Sheath Components", pos:"导管护套及软硬胶组合组件，生物相容材料成型",
        fields:[
          { k:"核心特点", v:"软硬胶结合 · 无飞边 · 生物相容材料" },
          { k:"典型应用", v:"导管护套 · 阀片组件 · 密封件" },
          { k:"工艺说明", v:"LSR 注塑 · 冷流道系统 · 免二次组装" }
        ],
        items:["导管护套","阀片组件","密封圈","软硬胶手柄"] }
    ],
    discover: [
      { img:"images/prod_enteral.webp", icon:"耗", zh:"一次性耗材方案", en:"Single-use Consumables", pos:"覆盖一次性耗材全链路——从模具设计到批量注塑交付，洁净可控、成本可预期",
        fields:[
          { k:"典型应用", v:"采血管类 · 输液组件 · 采样耗材" },
          { k:"工艺说明", v:"高速多腔模具 · 全自动产线" }
        ],
        items:["采血管类","输液组件","采样耗材"] },
      { img:"images/prod_custom.webp", icon:"IVD", zh:"诊断试剂盒方案 IVD", en:"IVD Kit Solutions", pos:"微流控结构、试剂腔、卡壳件的高精度成型，精密尺寸与外观兼得",
        fields:[
          { k:"典型应用", v:"微流控芯片 · 试剂盒外壳 · 加样结构件" },
          { k:"工艺说明", v:"微结构 · 薄壁精密注塑 · 光学级表面" }
        ],
        items:["微流控芯片","试剂盒外壳","加样结构件"] },
      { img:"images/prod_injection.webp", icon:"微", zh:"微创手术器械件", en:"Minimally Invasive Instrument Parts", pos:"微小精密器械件成型，满足 II 类器械结构与装配要求，批量一致性好",
        fields:[
          { k:"典型应用", v:"穿刺器结构件 · 内镜配件 · 手术手柄" },
          { k:"工艺说明", v:"微小精密件 · II 类合规体系配套" }
        ],
        items:["穿刺器结构件","内镜配件","手术手柄"] }
    ],
    industries: [
      { img:"images/prod_custom.webp", icon:"IVD", zh:"体外诊断 IVD", en:"In Vitro Diagnostics", pos:"",
        fields:[
          { k:"应用场景", v:"试剂盒 · 微流控 · 采血耗材" },
          { k:"典型产品", v:"卡壳 · 腔体 · 加样嘴" },
          { k:"工艺", v:"精密注塑 · 洁净车间" }
        ],
        items:["试剂盒","微流控耗材","采血耗材","加样嘴"] },
      { img:"images/mold_3.webp", icon:"影", zh:"医用影像", en:"Medical Imaging", pos:"",
        fields:[
          { k:"应用场景", v:"超声探头外壳 · 器械把手" },
          { k:"典型产品", v:"探头组件 · 外罩 · 结构件" },
          { k:"工艺", v:"精密注塑 · 外观件喷涂" }
        ],
        items:["超声探头外壳","器械把手","结构件"] },
      { img:"images/prod_enteral.webp", icon:"监", zh:"监护与给药", en:"Monitoring & Drug Delivery", pos:"",
        fields:[
          { k:"应用场景", v:"输液器组件 · 给药笔结构件" },
          { k:"典型产品", v:"输液件 · 给药装置外壳" },
          { k:"工艺", v:"多腔 · LSR 密封 · II 类合规" }
        ],
        items:["输液器组件","给药笔结构件","密封件"] }
    ]
  };

  var ACC_MAP = { browse: "prodAccBrowse", discover: "prodAccDiscover", industries: "prodAccIndustries" };

  function escProd(t){
    return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* —— 同「模具中心」互斥折叠：点开一个自动收起其他 —— */
  function renderProdAcc(){
    Object.keys(PROD_ACC).forEach(function(tab){
      var root = document.getElementById(ACC_MAP[tab]);
      if (!root || root.dataset.accBuilt) return;
      root.dataset.accBuilt = "1";
      var groups = PROD_ACC[tab] || [];
      root.innerHTML = groups.map(function(g){
        var pos = g.pos ? '<div class="t-sub">' + escProd(g.pos) + '</div>' : "";
        // 展开区改为「模具中心」同款格局：标签 pill + 图片占位槽（弃用单张大图 prod-media 与字段表格）
        var tagList = [], seen = {};
        (g.fields || []).forEach(function(f){
          String(f.v || "").split("·").forEach(function(s){
            s = s.replace(/^\s+|\s+$/g, "");
            if (s && !seen[s] && tagList.length < 4) { seen[s] = 1; tagList.push(s); }
          });
        });
        var tags = tagList.map(function(t){ return "<span>" + escProd(t) + "</span>"; }).join("");
        var photos = [1, 2].map(function(i){
          return '<div class="photo-slot" data-cap="' + escProd(g.zh) + ' 实拍 ' + i + '"><span class="lbl">' + escProd(g.zh) + ' 实拍 ' + i + '</span></div>';
        }).join("");
        return '<div class="prod-item">'
          + '<div class="prod-head"><div class="prod-ico">' + escProd(g.icon || "") + '</div>'
          + '<div class="prod-t"><div class="t-zh">' + escProd(g.zh) + '</div>'
          + pos + '</div>'
          + '<span class="prod-chev">&#9656;</span></div>'
          + '<div class="cap-body">' + (tags ? '<div class="cap-tags">' + tags + '</div>' : "")
          + '<div class="cap-photos">' + photos + '</div></div>'
          + '</div>';
      }).join("");
      root.addEventListener("click", function(e){
        var head = e.target.closest(".prod-head");
        if (!head) return;
        var item = head.parentElement;
        var wasOpen = item.classList.contains("open");
        root.querySelectorAll(".prod-item").forEach(function(el){ el.classList.remove("open"); });
        if (!wasOpen) item.classList.add("open");
      });
    });
  }

  function tabName(v){
    if (v === "browse" || v === "discover" || v === "industries") return v;
    return null;
  }

  function prodTab(name){
    if (!tabName(name)) name = "browse";
    var root = document.querySelector(".prod-tabs");
    if (!root) return;
    document.querySelectorAll(".prod-tab-btn").forEach(function(b){
      var on = b.getAttribute("data-tab") === name;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    document.querySelectorAll(".prod-tab-panel").forEach(function(p){
      var on = p.getAttribute("data-panel") === name;
      p.classList.toggle("is-active", on);
    });
    // 切换栏目后自动收起所有已展开的折叠项
    root.querySelectorAll(".prod-item.open").forEach(function(el){ el.classList.remove("open"); });
    if (LS) LS.setItem(TS_KEY, name);
  }

  // 打开产品页并切到指定 Tab（保持主 hash 干净，避免破坏 CSS :target 切页）
  function openTab(name){
    if (!tabName(name)) name = "browse";
    pickedTab = name;
    if ((location.hash || "").replace(/^#/, "") !== "page-products") {
      location.hash = "#page-products";
    }
    prodTab(name);
    var panel = document.getElementById(TABS[name]);
    if (panel) setTimeout(function(){ panel.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80);
  }

  function bindProdTabLinks(){
    // 事件委托：覆盖动态注入的页脚/抽屉内 [data-goto-tab] 链接（绑定一次永久生效）
    document.addEventListener("click", function(e){
      var a = e.target.closest ? e.target.closest("[data-goto-tab]") : null;
      if (a && a.getAttribute("data-goto-tab")) {
        e.preventDefault();
        openTab(a.getAttribute("data-goto-tab"));
      }
    });
  }

  // 支持 URL 定位：#page-products/tab:browse（打开时自动回退纯净 hash 并切 Tab）
  function applyProductHash(){
    var h = location.hash || "";
    var m = /#page-products\/(?:tab:)?([a-z]+)/i.exec(h);
    if (m && tabName(m[1])) {
      history.replaceState(null, "", "#page-products");
      pickedTab = m[1];
      prodTab(m[1]);
      setTimeout(function(){
        var panel = document.getElementById(TABS[m[1]]);
        if (panel) panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
      return;
    }
    if (h.indexOf("page-products") !== -1) {
      // 无显式 Tab：优先 sessionStorage 记忆，否则默认浏览产品
      var mem = LS ? LS.getItem(TS_KEY) : null;
      pickedTab = tabName(mem) || "browse";
      prodTab(pickedTab);
    }
  }

  function ensureProductsDefault(){
    if ((location.hash || "").indexOf("page-products") !== -1) {
      applyProductHash();
    }
  }

  // 点击：固定选定 Tab（永久选中）
  document.querySelectorAll(".prod-tab-btn").forEach(function(b){
    b.addEventListener("click", function(){
      pickedTab = b.getAttribute("data-tab");
      prodTab(pickedTab);
    });
  });

  // 悬停：临时切到对应 Tab；移出 Tab 导航后回退到 pickedTab
  function initTabHover(){
    var nav = document.querySelector(".prod-tab-nav");
    if (!nav) return;
    var btns = nav.querySelectorAll(".prod-tab-btn");
    var previewTab = function(name){
      document.querySelectorAll(".prod-tab-btn").forEach(function(b){
        b.classList.toggle("is-hovered", b.getAttribute("data-tab") === name && !b.classList.contains("is-active"));
        b.classList.remove("is-hovered2");
      });
      prodTab(name);
    };
    btns.forEach(function(b){
      b.addEventListener("mouseenter", function(){ previewTab(b.getAttribute("data-tab")); });
    });
    nav.addEventListener("mouseleave", function(){
      document.querySelectorAll(".prod-tab-btn").forEach(function(b){ b.classList.remove("is-hovered"); });
      prodTab(pickedTab);
    });
  }

  window.addEventListener("hashchange", function(){ applyProductHash(); });

  function init3(){
    bindProdTabLinks();
    renderProdAcc();
    initTabHover();
    ensureProductsDefault();
  }
  if (document.readyState === "complete" || document.readyState === "interactive") { setTimeout(init3, 0); }
  else { document.addEventListener("DOMContentLoaded", init3); }

  // 暴露给 bindLists 生成的导航下拉子项
  window.prodTabsOpen = openTab;
})();
