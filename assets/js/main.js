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
      {icon:'⊟', key:'ivd', zh:'诊断与 IVD 耗材模具', en:'Diagnostic & IVD Molds',
       desc:'Precision injection molds for IVD in-vitro diagnostic consumables, for rapid-test cassettes, reagent cartridges and microfluidic medical components.',
       tags:['快速检测卡','试剂盒','微流控医疗部件'], photos:['images/ivd_mold_1.png','images/ivd_mold_2.png','images/ivd_mold_3.png','images/ivd_mold_4.png']},
      {icon:'✚', key:'interv', zh:'介入与植入精密模具', en:'Interventional & Implantable Molds',
       desc:'Ultra-precision injection molds for interventional & implantable medical parts. Micron-level cavity tolerance, compatible with implant-grade PEEK, ISO 13485 compliant for orthopedic implants and micro interventional instrument components.',
       tags:['微米级公差','骨科植入物','微创介入部件'], photos:['images/interv_mold_1.png','images/interv_mold_2.png','images/interv_mold_3.png','images/interv_mold_4.png','images/interv_mold_5.png']},
      {icon:'⊞', key:'drug', zh:'给药与药包模具', en:'Drug Delivery & Packaging Molds',
       desc:'Multi-cavity valve-gate hot-runner, low-contamination clean-room design for auto-injector pens, nasal spray and pharmaceutical packaging parts, GMP & ISO 13485 compliant for high-volume production.',
       tags:['多腔热流道','自动注射笔','药品包装部件'], photos:['images/drug_mold_1.png','images/drug_mold_2.png','images/drug_mold_3.png','images/drug_mold_4.png']},
      {icon:'◑', key:'lsr', zh:'LSR 液态硅胶模具', en:'LSR Liquid Silicone Rubber Molds',
       desc:'Injection molds for medical silicone parts, seals, baby nipples, goggles, electronic keypads and automotive silicone components. Suitable for multi-cavity tooling, cold runner systems and high-precision cavity manufacturing, supporting clean production and medical device compliance.',
       tags:['冷流道多腔','医疗硅胶件','密封件'], photos:['images/lsr_mold_1.png','images/lsr_mold_2.png','images/lsr_mold_3.png','images/lsr_mold_4.png']}
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

  // 区块一：模具能力卡（互动折叠 + 照片轮播）
  var capAcc = document.getElementById('moldCapAcc');
  function moldLang(){ return (window.sessionStorage && sessionStorage.getItem('hondvo_lang')) || 'en'; }
  // 模具能力卡 8 语言文案表（按卡片 key 聚合；不在 i18n.js 内，随卡片数据就近维护）
  var moldCopy = {
    ivd: {
      zh:{title:'诊断与 IVD 耗材模具',desc:'用于体外诊断耗材的精密注塑模具，适用于快速检测卡、试剂盒和微流控医疗部件。',tags:['快速检测卡','试剂盒','微流控医疗部件']},
      en:{title:'Diagnostic & IVD Molds',desc:'Precision injection molds for IVD in-vitro diagnostic consumables, for rapid-test cassettes, reagent cartridges and microfluidic medical components.',tags:['Rapid-test cassettes','Reagent cartridges','Microfluidic medical components']},
      de:{title:'Formen für diagnostische IVD-Verbrauchsmaterialien',desc:'Präzisionsspritzgussformen für In-vitro-Diagnostik-Verbrauchsmaterialien, Schnelltestkassetten, Reagenzkartuschen und mikrofluidische Medizinprodukte.',tags:['Schnelltestkassetten','Reagenzkartuschen','Mikrofluidische Komponenten']},
      ru:{title:'Пресс-формы для диагностических IVD-расходных материалов',desc:'Прецизионные литьевые формы для расходных материалов для диагностики in vitro, кассет экспресс-тестов, картриджей с реагентами и микрофлюидных медицинских компонентов.',tags:['Кассеты экспресс-тестов','Картриджи с реагентами','Микрофлюидные компоненты']},
      fr:{title:'Moules pour consommables de diagnostic in vitro',desc:'Moules d’injection de précision pour consommables de diagnostic in vitro, cassettes de tests rapides, cartouches de réactifs et composants médicaux microfluidiques.',tags:['Cassettes de tests rapides','Cartouches de réactifs','Composants microfluidiques']},
      ja:{title:'IVD体外診断消耗品用金型',desc:'迅速検査カセット、試薬カートリッジ、マイクロ流体医療部品など、IVD体外診断消耗品向けの精密射出成形金型です。',tags:['迅速検査カセット','試薬カートリッジ','マイクロ流体部品']},
      ko:{title:'IVD 체외진단 소모품 금형',desc:'신속검사 카세트, 시약 카트리지 및 미세유체 의료 부품용 IVD 체외진단 소모품 정밀 사출 금형입니다.',tags:['신속검사 카세트','시약 카트리지','미세유체 부품']},
      es:{title:'Moldes para consumibles de diagnóstico in vitro',desc:'Moldes de inyección de precisión para consumibles de diagnóstico in vitro, casetes de pruebas rápidas, cartuchos de reactivos y componentes médicos microfluídicos.',tags:['Casetes de pruebas rápidas','Cartuchos de reactivos','Componentes microfluídicos']}
    },
    interv: {
      zh:{title:'介入与植入精密模具',desc:'面向介入与植入医疗器械部件的超精密注塑模具。型腔公差达微米级，适配植入级 PEEK 材料，适用于骨科植入物与微创介入器械部件，符合 ISO 13485 要求。',tags:['微米级公差','骨科植入物','微创介入部件']},
      en:{title:'Interventional & Implantable Molds',desc:'Ultra-precision injection molds for interventional & implantable medical parts. Micron-level cavity tolerance, compatible with implant-grade PEEK, ISO 13485 compliant for orthopedic implants and micro interventional instrument components.',tags:['Micron-level tolerance','Orthopedic implants','Micro interventional parts']},
      de:{title:'Formen für interventionelle und implantierbare Medizinprodukte',desc:'Hochpräzise Spritzgussformen für interventionelle und implantierbare Medizinprodukte. Kavitätentoleranz im Mikrometerbereich, kompatibel mit implantatgeeignetem PEEK, ISO 13485-konform für orthopädische Implantate und Komponenten mikrointerventioneller Instrumente.',tags:['Toleranz im µm-Bereich','Orthopädische Implantate','Mikrointerventionelle Teile']},
      ru:{title:'Пресс-формы для интервенционных и имплантируемых медицинских изделий',desc:'Сверхточные литьевые формы для интервенционных и имплантируемых медицинских изделий. Точность оформляющих полостей на уровне микрометров, совместимость с имплантационным PEEK, соответствие ISO 13485 для ортопедических имплантатов и деталей микроинтервенционных инструментов.',tags:['Точность в микронах','Ортопедические имплантаты','Микроинтервенционные детали']},
      fr:{title:'Moules pour dispositifs médicaux interventionnels et implantables',desc:'Moules d’injection ultra-précis pour dispositifs médicaux interventionnels et implantables. Tolérance d’empreinte micrométrique, compatible avec le PEEK de qualité implantable, conforme ISO 13485 pour les implants orthopédiques et les composants d’instruments micro-interventionnels.',tags:['Tolérance micrométrique','Implants orthopédiques','Composants micro-interventionnels']},
      ja:{title:'介入・インプラント医療部品用金型',desc:'介入・インプラント医療部品向けの超精密射出成形金型です。マイクロメートル級のキャビティ公差、インプラントグレード PEEK に対応、整形外科インプラントおよびマイクロ介入器具部品において ISO 13485 に適合します。',tags:['µm 級公差','整形外科インプラント','マイクロ介入部品']},
      ko:{title:'중재·이식형 의료 부품용 금형',desc:'중재·이식형 의료 부품용 초정밀 사출 금형입니다. 마이크로미터급 캐비티 공차, 임플란트 등급 PEEK 호환, 정형외과 임플란트 및 미세 중재 시술 기기 부품에 대한 ISO 13485 준수.',tags:['µm급 공차','정형외과 임플란트','미세 중재 부품']},
      es:{title:'Moldes para dispositivos médicos intervencionistas e implantables',desc:'Moldes de inyección de ultra precisión para dispositivos médicos intervencionistas e implantables. Tolerancia de cavidad micrométrica, compatible con PEEK de grado implantable, conforme a ISO 13485 para implantes ortopédicos y componentes de instrumentos microintervencionistas.',tags:['Tolerancia micrométrica','Implantes ortopédicos','Componentes microintervencionistas']}
    },
    drug: {
      zh:{title:'给药与药包模具',desc:'多腔阀浇口热流道结构，低污染洁净车间设计，适用于自动注射笔、鼻腔喷雾与药品包装部件；符合 GMP 与 ISO 13485 要求，支持大批量生产。',tags:['多腔热流道','自动注射笔','药品包装部件']},
      en:{title:'Drug Delivery & Packaging Molds',desc:'Multi-cavity valve-gate hot-runner, low-contamination clean-room design for auto-injector pens, nasal spray and pharmaceutical packaging parts, GMP & ISO 13485 compliant for high-volume production.',tags:['Multi-cavity hot runner','Auto-injector pens','Pharma packaging parts']},
      de:{title:'Formen für Arzneimittelabgabe und Pharmaverpackung',desc:'Mehrkavitäten-Heißkanal mit Nadelverschluss, kontaminationsarmes Reinraum-Design für Auto-Injektoren, Nasensprays und Pharmaverpackungsteile; GMP- und ISO 13485-konform für die Großserienfertigung.',tags:['Mehrkavitäten-Heißkanal','Auto-Injektoren','Pharmaverpackungsteile']},
      ru:{title:'Пресс-формы для доставки лекарств и фармацевтической упаковки',desc:'Многогнёздный горячеканальный блок с игольчатым запиранием, малоконтаминационное исполнение для чистых помещений: автоинъекторы, назальные спреи и детали фармацевтической упаковки; соответствие GMP и ISO 13485 для крупносерийного производства.',tags:['Многогнёздный горячий канал','Автоинъекторы','Детали фармупаковки']},
      fr:{title:'Moules pour administration de médicaments et emballage pharmaceutique',desc:'Canaux chauds multicavernes à obturation par aiguille, conception à faible contamination en salle blanche pour stylos auto-injecteurs, sprays nasaux et pièces d’emballage pharmaceutique ; conformes GMP et ISO 13485 pour la production à grande série.',tags:['Canaux chauds multicavernes','Auto-injecteurs','Pièces d’emballage pharma']},
      ja:{title:'薬剤投与・医薬包装用金型',desc:'多キャビティ・バルブゲートホットランナー、低汚染クリーンルーム設計。オートインジェクターペン、点鼻スプレー、医薬包装部品に対応し、量産向けに GMP・ISO 13485 に適合します。',tags:['多キャビティホットランナー','オートインジェクター','医薬包装部品']},
      ko:{title:'약물 전달·의약품 포장용 금형',desc:'다중 캐비티 밸브 게이트 핫러너, 저오염 클린룸 설계. 자동주입펜, 비강 스프레이 및 의약품 포장 부품에 적합하며 대량 생산을 위한 GMP 및 ISO 13485를 준수합니다.',tags:['다중 캐비티 핫러너','자동주입펜','의약품 포장 부품']},
      es:{title:'Moldes para administración de fármacos y envase farmacéutico',desc:'Canales calientes multicavidad con cierre por aguja, diseño de baja contaminación en sala limpia para bolígrafos autoinyectores, sprays nasales y piezas de envase farmacéutico; conformes con GMP e ISO 13485 para producción de gran volumen.',tags:['Canales calientes multicavidad','Autoinyectores','Piezas de envase farmacéutico']}
    },
    lsr: {
      zh:{title:'LSR 液态硅胶模具',desc:'适用于医疗硅胶件、密封件、婴儿奶嘴、护目镜、电子按键与汽车硅胶部件的注塑模具。支持多腔模具、冷流道系统与高精度型腔制造，满足洁净生产与医疗器械合规要求。',tags:['冷流道多腔','医疗硅胶件','密封件']},
      en:{title:'LSR Liquid Silicone Rubber Molds',desc:'Injection molds for medical silicone parts, seals, baby nipples, goggles, electronic keypads and automotive silicone components. Suitable for multi-cavity tooling, cold runner systems and high-precision cavity manufacturing, supporting clean production and medical device compliance.',tags:['Cold-runner multi-cavity','Medical silicone parts','Seals']},
      de:{title:'LSR-Flüssigsilikon-Formen',desc:'Spritzgussformen für medizinische Silikonteile, Dichtungen, Baby-Sauger, Brillen, elektronische Tastenfelder und Automotive-Silikonkomponenten. Geeignet für Mehrkavitäten-Werkzeuge, Kaltkanalsysteme und hochpräzise Kavitätenfertigung – für saubere Produktion und Konformität mit Medizinprodukten.',tags:['Kaltkanal-Mehrkavität','Medizinische Silikonteile','Dichtungen']},
      ru:{title:'Пресс-формы для жидкого силикона (LSR)',desc:'Литьевые формы для медицинских силиконовых деталей, уплотнений, детских сосок, очков, электронных клавиатур и автомобильных силиконовых компонентов. Подходят для многогнёздной оснастки, холодноканальных систем и высокоточной обработки полостей, обеспечивая чистое производство и соответствие требованиям к медицинским изделиям.',tags:['Холодноканальная многогнёздная','Медицинские силиконовые детали','Уплотнения']},
      fr:{title:'Moules en silicone liquide (LSR)',desc:'Moules d’injection pour pièces médicales en silicone, joints, tétines, lunettes, claviers électroniques et composants automobiles en silicone. Adaptés aux outillages multicavernes, aux systèmes à canal froid et à la fabrication de cavités de haute précision, pour une production propre et la conformité aux dispositifs médicaux.',tags:['Multicaverne canal froid','Pièces médicales en silicone','Joints']},
      ja:{title:'LSR 液状シリコーン金型',desc:'医療用シリコーン部品、シール、乳首、ゴーグル、電子キーパッド、自動車用シリコーン部品向けの射出成形金型です。多キャビティ金型、コールドランナーシステム、高精度キャビティ加工に対応し、クリーン生産と医療機器コンプライアンスを支援します。',tags:['コールドランナー多キャビティ','医療用シリコーン部品','シール']},
      ko:{title:'LSR 액상 실리콘 금형',desc:'의료용 실리콘 부품, 씰, 젖병 젖꼭지, 고글, 전자 키패드 및 자동차용 실리콘 부품용 사출 금형입니다. 다중 캐비티 금형, 콜드 러너 시스템, 고정밀 캐비티 가공에 적합하며 청정 생산과 의료기기 규정 준수를 지원합니다.',tags:['콜드 러너 다중 캐비티','의료용 실리콘 부품','씰']},
      es:{title:'Moldes de silicona líquida (LSR)',desc:'Moldes de inyección para piezas médicas de silicona, juntas, tetinas, gafas, teclados electrónicos y componentes de silicona para automoción. Adecuados para utillajes multicavidad, sistemas de canal frío y fabricación de cavidades de alta precisión, con soporte para producción limpia y cumplimiento de dispositivos médicos.',tags:['Multicavidad canal frío','Piezas médicas de silicona','Juntas']}
    }
  };
  // 徽标单位随语言本地化
  var MOLD_BADGE = {zh:'图', en:'photos', de:'Fotos', ru:'фото', fr:'photos', ja:'点', ko:'장', es:'fotos'};
  function moldCopyFor(key, lang){ var m = key ? moldCopy[key] : null; return m ? (m[lang] || m.en || null) : null; }
  function renderMoldCaps(){
    if(!capAcc) return;
    var lang=moldLang();
    var IMG_RE=/\.(png|jpe?g|webp|gif|svg)(\?|#|$)/i; // 照片路径才输出 <img>；文案占位（如「介入模具实拍 1」）保持纯文本槽，避免 404
    // 语言切换会整块重建：记录并还原展开态，避免切换语言后所有卡片被收起
    var openEl=capAcc.querySelector('.cap-item.open');
    var openIdx=openEl?Array.prototype.indexOf.call(capAcc.children, openEl):-1;
    capAcc.innerHTML='';
    MOLD.caps.forEach(function(c){
      var item=document.createElement('div'); item.className='cap-item'; item.setAttribute('data-acc-item','1');
      var copy=moldCopyFor(c.key, lang);
      var title=copy?copy.title:c.zh, desc=copy?copy.desc:c.desc, tagsData=copy?copy.tags:c.tags;
      var photos=c.photos.map(function(p,i){
        var img=IMG_RE.test(p)?'<img src="'+esc(p)+'" alt="'+esc(title)+' '+(i+1)+'" loading="lazy">':'';
        return '<div class="photo-slot" data-idx="'+i+'">'+img+'<span class="lbl">'+(img?'':esc(p))+'</span></div>';
      }).join('');
      var tags=tagsData.map(function(t){return '<span>'+esc(t)+'</span>';}).join('');
      item.innerHTML='<div class="cap-head" data-acc-head="1"><div class="cap-ico">'+esc(c.icon||'')+'</div><div class="cap-t"><div class="t-zh">'+esc(title)+'</div><div class="t-en">'+esc(c.en||'')+'</div></div><span class="cap-badge">'+c.photos.length+' '+(MOLD_BADGE[lang]||MOLD_BADGE.en)+'</span><span class="cap-chev">&#9656;</span></div>'+'<div class="cap-body"><p>'+esc(desc)+'</p><div class="cap-tags">'+tags+'</div><div class="cap-photos">'+photos+'</div></div>';
      capAcc.appendChild(item);
    });
    if(openIdx>-1 && capAcc.children[openIdx]) capAcc.children[openIdx].classList.add('open');
  }
  renderMoldCaps();
  document.addEventListener('hondvo:lang', renderMoldCaps);
  capAcc.addEventListener('click', function(e){
    var slot=e.target.closest('.photo-slot');
    if(slot){
      var item=slot.closest('.cap-item'), idx=+slot.dataset.idx, ci=Array.prototype.indexOf.call(capAcc.children,item);
      var cp=moldCopyFor(MOLD.caps[ci].key, moldLang());
      openMoldCarousel(MOLD.caps[ci].photos, idx, cp?cp.title:MOLD.caps[ci].zh);
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
    item.setAttribute('data-acc-item', '1');
    item.innerHTML = '<div class="eq-head" data-acc-head="1"><span class="eq-dot"></span><span class="t-zh">'+esc(c.zh)+'</span><span class="t-en">'+esc(c.en||'')+'</span><span class="eq-badge">'+total+' 台</span><span class="eq-chev">&#9656;</span></div><div class="eq-body"><div class="eq-scroll"><table class="eq-table"><thead><tr><th>设备 / Model</th><th>产地</th><th>精度 / 吨位</th><th>数量</th><th>图片</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
    eqAcc.appendChild(item);
  });
  // 设备区块的互斥折叠已交由统一的 [data-acc-head] 委托处理（P1-13）
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
  // 照片条目（images/xxx.png）→ 渲染 <img>；文案条目（如「介入模具实拍 1」）→ 保持文本（占位语义）
  function mlbIsImg(p){ return /\.(png|jpe?g|webp|gif|svg)(\?|#|$)/i.test(String(p||'')); }
  function renderMLB(){
    mlbImg.innerHTML = mlbPhotos.map(function(p,i){
      var inner = mlbIsImg(p) ? '<img src="'+esc(p)+'" alt="'+esc(mlbTitle)+'">' : esc(p);
      return '<div class="mlb-slide'+(i===mlbIdx?' active':'')+'">'+inner+'</div>';
    }).join('');
    mlbDots.innerHTML = mlbPhotos.map(function(_,i){ return '<span class="mlb-dot'+(i===mlbIdx?' active':'')+'" data-idx="'+i+'"></span>'; }).join('');
    mlbCap.textContent = mlbTitle + (mlbIsImg(mlbPhotos[mlbIdx]) ? ' · ' + (mlbIdx+1) + ' / ' + mlbPhotos.length : ' · ' + mlbPhotos[mlbIdx]);
  }
  function nextMLB(){ mlbIdx = (mlbIdx+1)%mlbPhotos.length; renderMLB(); }
  function startMLB(){ if (mlbTimer) clearInterval(mlbTimer); if (mlbPhotos.length>1 && !prefersReduceMotion()) mlbTimer = setInterval(nextMLB, 5000); }
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

  // 滚动揭示（P1-12 统一实现；原来本段自建 IO + 独立的 .reveal-up IIFE）
  // 站点靠 CSS :target 切页：#page-mold 默认 display:none，IO 在隐藏期初始化，
  // 个别浏览器导航回该页时不补火，导致 .m-reveal 停在 opacity:0。故保留导航兜底强制揭示。
  var revs = document.querySelectorAll('#page-mold .m-reveal');
  function revealMold(){
    revs.forEach(function(el, i){ setTimeout(function(){ el.classList.add('in'); }, Math.min(i, 8) * 60); });
  }
  observeReveal('#page-mold .m-reveal', { ioOptions: { threshold: .12, rootMargin: '0px 0px -40px 0px' } });
  var moldHash0 = (location.hash || '').replace(/^#/, '') || '';
  if (revs.length) {
    // 兜底：本页成为 :target 时强制揭示（IO 未触发也不影响可见性）
    window.addEventListener('hashchange', function(){
      if ((location.hash || '').replace(/^#/,'') === 'page-mold') revealMold();
    });
    if (moldHash0 === 'page-mold') revealMold();
  }
})();

(function(){

  var nav = document.getElementById('nav');

  var links = nav.querySelectorAll('.links > li > a');

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

      /* 2026-09-22 删除：原「向上滑动隐藏导航栏」滚动感知逻辑（nav.classList
         add/remove 'hidden'）。全站 CSS 中不存在任何 .hidden 规则消费，该逻辑
         不产生视觉变化，属历史遗留死代码；且用户要求首页导航栏常驻，故一并移除。
         原 lastScrollY 变量仅服务该逻辑，同步删除。 */



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



/* ═══════════ 统一折叠逻辑（P1-13）═══════════
   原来四套并行实现：
     · .cap-head  → capAcc 局部委托
     · .eq-head   → eqAcc 局部委托
     · .prod-head → 每个 Tab 的 root 局部委托
     · .acc-header + 内联 onclick="toggleAccordion(this)"（且互斥范围是全文档）
   现统一为一次 document 级委托，互斥范围收敛为「所在折叠组」：
     组 = head.closest('[data-acc-group]') || item.parentElement
     条目 = head.closest('[data-acc-item]') || head.parentElement
   这样即使某个容器暂未标注 data-acc-group，行为也与原来一致（向后兼容）。 */
document.addEventListener('click', function (e) {
  var head = e.target && e.target.closest && e.target.closest('[data-acc-head]');
  if (!head) return;
  var item = head.closest('[data-acc-item]') || head.parentElement;
  if (!item) return;
  var group = head.closest('[data-acc-group]') || item.parentElement;
  if (!group) return;
  var wasOpen = item.classList.contains('open');
  // 关掉同组内其它已展开条目。
  // 优先按显式标记 [data-acc-item]；若容器内条目尚未标注，则退化为「本组直接子元素中带 .open 的」，
  // 保证新旧模板都具备互斥行为（避免未标注时不断累加展开）。
  var opens = group.querySelectorAll('[data-acc-item].open');
  if (!opens.length) { try { opens = group.querySelectorAll(':scope > .open'); } catch (err) { opens = []; } }
  Array.prototype.forEach.call(opens, function (el) { el.classList.remove('open'); });
  if (!wasOpen) item.classList.add('open');
});

/* ═══════════ 减少动效判定（P1-22）═══════════
   供轮播、指针跟随等「自动/持续动效」统一使用。
   注意：只影响自动播放类动效，用户主动触发的交互（点击切换）不受影响。 */
function prefersReduceMotion() {
  try {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  } catch (e) {
    return false;
  }
}

/* ═══════════ 统一滚动揭示（P1-12）═══════════
   原有三套并行实现，各自新建 IntersectionObserver、各自加不同类名：
     · .reveal     → 加 .revealed，rootMargin -120px（render.js 依赖 window.revealObs）
     · .m-reveal   → 加 .in，另带 :target 导航兜底
     · .reveal-up  → 加 .in，另带 page-mold 兜底
   现统一为本函数；观察参数由 opts 表达。同时加 revealed 与 in 两个类，
   以同时满足 `.reveal.revealed`、`.m-reveal.in`、`.reveal-up.in` 三套 CSS 规则
   （实测 CSS 中不存在裸 `.in` 规则，互不污染）。 */
function observeReveal(selector, opts) {
  opts = opts || {};
  var classes = opts.classes || ['revealed', 'in'];
  var els = Array.prototype.slice.call(document.querySelectorAll(selector))
    .filter(function (el) { return !el.classList.contains(classes[0]); });
  if (!els.length) return null;
  function show(el) { classes.forEach(function (c) { el.classList.add(c); }); }
  if (!('IntersectionObserver' in window)) { els.forEach(show); return null; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      show(e.target);
      io.unobserve(e.target);
    });
  }, opts.ioOptions || { rootMargin: '-120px' });
  els.forEach(function (el) { io.observe(el); });
  return io;
}

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



/* P1-21：灯箱关闭按钮改为原生 <button>，用委托绑定（原为内联 onclick + span[role=button]） */
document.addEventListener('click', function (e) {
  var c = e.target && e.target.closest && e.target.closest('#lightbox-close');
  if (c && typeof closeLightbox === 'function') closeLightbox();
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

  // 减少动效：不自动轮播（用户仍可点击指示点手动切换）
  if (!prefersReduceMotion()) setInterval(function(){ go(cur + 1); }, 8000);

})();



/* ═══════════ HAMBURGER MENU ═══════════ */

/* #hamburger 绑定段已于 P1-15 删除：HTML 中只有 #hnav-burger，本段恒早退 */





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



/* P1-30：SKELETON SCREEN 逻辑已移除（#skeleton 不再存在，见 HONDVO.html 注释） */



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



  // toggleAccordion 已于 P1-13 删除，改由统一的 [data-acc-head] 委托处理

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



  /* ═══════════ NAV HOME STATE ═══════════
     2026-09-22 删除：原「首页导航栏透明」状态切换 IIFE（为 #nav 添加/移除
     .on-home 类）。因 main.css 中消费该类的透明规则已按用户要求移除，
     此类不再有任何 CSS 消费者，整段逻辑成为死代码，故一并删除。 */



  /* 语言切换 C 段已于 P1-15 删除：HTML 中不存在 #lang-switch / #lang-c-btn / #lang-grid，实际使用的是 .hnav-lang（见 bindLangPop）*/

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

          if (acc && !acc.classList.contains('open')) {
        var grp = acc.closest('[data-acc-group]') || acc.parentElement;
        if (grp) grp.querySelectorAll('[data-acc-item].open').forEach(function(el){ el.classList.remove('open'); });
        acc.classList.add('open');
      }

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

  // Scroll reveal（P1-12：改用统一的 observeReveal）
  var revealObs, resetReveal;

  (function(){

    revealObs = observeReveal('.reveal', { ioOptions: { rootMargin: '-120px' } });

    // render.js 的 revealItems() 通过 window.revealObs.observe() 接入。
    // 原实现只声明了局部 var（未挂到 window），该契约实际是断的；现显式导出。
    // 无 IntersectionObserver 时给空实现，避免调用方报错。
    if (!revealObs) revealObs = { observe: function(){}, unobserve: function(){} };
    window.revealObs = revealObs;

    resetReveal = function(){

      document.querySelectorAll('.reveal.revealed').forEach(function(el){ el.classList.remove('revealed'); el.classList.remove('in'); });

      document.querySelectorAll('.reveal').forEach(function(el){ revealObs.observe(el); });

    };
    window.resetReveal = resetReveal;

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

          // 留言采集：表单提交即明示同意，独立于行为追踪 Cookie，始终可用。
          // 此处只上报非个人身份信息 + visitorId（姓名/电话/邮箱不写入埋点端点）。
          if (window.__hondvoTrack && typeof window.__hondvoTrack.recordMessage === 'function') {
            window.__hondvoTrack.recordMessage({
              product: type, source: source,
              lang: currentLang(),
              hasCompany: !!company, hasPhone: !!phone, hasEmail: !!email
            });
          }

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

  // 注意：不能整段删除。home-dyn.js 的 tilt 只覆盖 `#page-home .prod-card / .sector-card`
  // 并走 CSS 变量（--rx/--ry/--mx/--my，由 home-dyn.css 消费）；
  // 而本段的覆盖范围更大（.purchase-card、.img-cert-card、以及非首页的 .prod-card），
  // 这些元素若一并删除将失去倾斜效果。
  // 冲突点仅在于「首页卡片被两套实现同时处理」：本段写 el.style.transform（行内，优先级最高），
  // 会永久覆盖 home-dyn.css 的 transform，且两个 mousemove 同时触发。
  // 故此处仅排除首页卡片，冲突消除且其余效果保留。

  if (!('ontouchstart' in window) && window.matchMedia && !window.matchMedia('(pointer: coarse)').matches && !prefersReduceMotion()) {

    document.querySelectorAll('.purchase-card, .prod-card, .img-cert-card').forEach(function(el){

      if (el.closest('#page-home')) return; // 首页卡片交由 home-dyn.js + home-dyn.css 实现

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

      + '#hondvo-manage{position:fixed;right:14px;bottom:14px;z-index:100000;border:none;cursor:pointer;background:var(--accent);color:var(--white);font-size:12px;padding:7px 13px;border-radius:20px;box-shadow:0 4px 14px var(--black-25);}'
      // P1-25：移动端 #mobile-cta 占满底部（约 68px 高），原 bottom:14px 会与其重叠。
      // 移到左侧并抬高到 84px：既避开底部 CTA，也避开右侧的 #back-to-top（bottom:80px; right:20px）。
      + '@media (max-width:768px){#hondvo-manage{left:14px;right:auto;bottom:84px;}}';

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
  // .reveal-up 滚动揭示（P1-12：改用统一的 observeReveal，不再自建 IO）
  var els = document.querySelectorAll('.reveal-up');
  if(!els.length) return;
  function show(el,i){ setTimeout(function(){ el.classList.add('in','revealed'); }, Math.min(i,10)*50); }
  observeReveal('.reveal-up', { ioOptions: { threshold:.12, rootMargin:'0px 0px -40px 0px' } });
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
    // P1-21：键盘可达 —— 焦点进入菜单项即展开，焦点离开整项后收起
    li.addEventListener("focusin", ()=>{
      if(closeTimer){clearTimeout(closeTimer); closeTimer=null;}
      items.forEach(o=>{if(o!==li) o.classList.remove("open");});
      li.classList.add("open");
    });
    li.addEventListener("focusout", (e)=>{
      if(li.contains(e.relatedTarget)) return;
      li.classList.remove("open");
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

/* ===== 导航高度同步（P1-18）=====
   921–1280px 时 .hnav-inner 会折成两行，导航实际高度大于写死的 68px，
   导致 .search-panel 的 top 偏小、面板被导航遮住。此处把真实高度写入 --nav-h，
   由 CSS 消费（.search-panel 的 top / max-height）。 */
(function () {
  var nav = document.querySelector('.hnav');
  if (!nav) return;
  function syncNavHeight() {
    try {
      document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
    } catch (e) {}
  }
  window.addEventListener('resize', syncNavHeight, { passive: true });
  window.addEventListener('load', syncNavHeight);
  // 导航高度变化未必由窗口 resize 引起（如语言切换后文字变长换行）
  if (typeof window.ResizeObserver === 'function') {
    try { new ResizeObserver(syncNavHeight).observe(nav); } catch (e) {}
  }
  syncNavHeight();
})();

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
    /* 2026-09-22 重构：browse / industries 与首页「核心业务 / 应用行业」共用同一份 i18n 数据源。
       t = 标题 key，d = 描述 key，tags = 标签 key 数组；三者均按当前语言实时解析，
       语言切换时整块重建，确保产品与服务页与首页永不脱节。
       discover 暂保留旧结构（待单独决定），渲染函数对两种结构均兼容。 */
    browse: [
      /* 按需求：浏览产品只呈现产品本身，不显示描述（行业描述统一收在「应用行业」Tab） */
      { img:"images/core_medical_1.webp", icon:"输",
        t:"prod1_title",
        tags:["prod1_tag1","prod1_tag2","prod1_tag3","prod1_tag4"] },
      { img:"images/core_medical_2.webp", icon:"IVD",
        t:"prod2_title",
        tags:["prod2_tag1","prod2_tag2","prod2_tag3","prod2_tag4"] },
      { img:"images/prod_custom.webp", icon:"呼",
        t:"home_prod4_title",
        tags:["prod4_tag1","prod4_tag2","prod4_tag3","prod4_tag4"] },
      { img:"images/workshop_1.webp", icon:"包",
        t:"home_prod5_title",
        tags:["prod5_tag1","prod5_tag2","prod5_tag3","prod5_tag4"] }
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
      /* 描述采用「场景口径」（home_sec_N_scene）：讲清该领域的典型使用场景与关键要求，
         与「浏览产品」（讲我们做什么产品）形成维度分工，避免两个 Tab 内容雷同。
         注：**不要**改回 home_prodN_desc —— 那是首页核心业务的产品口径描述，改它会连带首页一起变。 */
      { img:"images/core_medical_1.webp", icon:"输",
        t:"home_sec_1_t", d:"home_sec_1_scene",
        tags:["home_sec_1_l1","home_sec_1_l2","home_sec_1_l3","home_sec_1_l4"] },
      { img:"images/core_medical_2.webp", icon:"IVD",
        t:"home_sec_2_t", d:"home_sec_2_scene",
        tags:["home_sec_2_l1","home_sec_2_l2","home_sec_2_l3","home_sec_2_l4","home_sec_2_l5"] },
      { img:"images/prod_custom.webp", icon:"呼",
        t:"home_sec_3_t", d:"home_sec_3_scene",
        tags:["home_sec_3_l1","home_sec_3_l2","home_sec_3_l3","home_sec_3_l4","home_sec_3_l5","home_sec_3_l6"] },
      { img:"images/workshop_1.webp", icon:"包",
        t:"home_sec_4_t", d:"home_sec_4_scene",
        tags:["home_sec_4_l1","home_sec_4_l2","home_sec_4_l3","home_sec_4_l4"] }
    ]
  };

  var ACC_MAP = { browse: "prodAccBrowse", discover: "prodAccDiscover", industries: "prodAccIndustries" };

  function escProd(t){
    return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* —— 同「模具中心」互斥折叠：点开一个自动收起其他 —— */
  /* ══ i18n 取数（2026-09-22）════════════════════════════════════════════
     产品与服务页的「浏览产品 / 应用行业」与首页共用同一份 i18n 数据源，
     语言切换时整块重建，确保两处内容永远一致、且随语言实时切换。 */
  function accLang(){
    try {
      return (document.documentElement && document.documentElement.getAttribute("lang"))
          || sessionStorage.getItem("hondvo_lang") || "en";
    } catch (e) { return "en"; }
  }
  function accI18n(k){
    if (!k || typeof I18N === "undefined") return "";
    var e = I18N[k];
    if (!e) return "";
    return e[accLang()] || e.zh || e.en || "";
  }
  // 标题：新结构 t = i18n key；旧结构直接读 zh
  function accTitle(g){ return g.t ? accI18n(g.t) : (g.zh || ""); }
  // 描述：新结构 d = i18n key；旧结构直接读 pos
  function accDesc(g){ return g.d ? accI18n(g.d) : (g.pos || ""); }
  // 标签：新结构 tags = [i18n key]（全量）；旧结构由 fields 按 · 拆分（上限 4）
  function accTags(g){
    if (g.tags && g.tags.length) return g.tags.map(accI18n).filter(Boolean);
    var out = [], seen = {};
    (g.fields || []).forEach(function(f){
      String(f.v || "").split("·").forEach(function(s){
        s = s.replace(/^\s+|\s+$/g, "");
        if (s && !seen[s] && out.length < 4) { seen[s] = 1; out.push(s); }
      });
    });
    return out;
  }

  // force=true 时忽略「已构建」标记强制重建（语言切换用）
  function renderProdAcc(force){
    Object.keys(PROD_ACC).forEach(function(tab){
      var root = document.getElementById(ACC_MAP[tab]);
      if (!root) return;
      if (root.dataset.accBuilt && !force) return;
      root.dataset.accBuilt = "1";
      var groups = PROD_ACC[tab] || [];
      root.innerHTML = groups.map(function(g){
        var title = accTitle(g);
        var desc = accDesc(g);
        var pos = desc ? '<div class="t-sub">' + escProd(desc) + '</div>' : "";
        var tags = accTags(g).map(function(t){ return "<span>" + escProd(t) + "</span>"; }).join("");
        var photos = [1, 2].map(function(i){
          return '<div class="photo-slot" data-cap="' + escProd(title) + ' 实拍 ' + i + '"><span class="lbl">' + escProd(title) + ' 实拍 ' + i + '</span></div>';
        }).join("");
        return '<div class="prod-item" data-acc-item="1">'
          + '<div class="prod-head" data-acc-head="1"><div class="prod-ico">' + escProd(g.icon || "") + '</div>'
          + '<div class="prod-t"><div class="t-zh">' + escProd(title) + '</div>'
          + pos + '</div>'
          + '<span class="prod-chev">&#9656;</span></div>'
          + '<div class="cap-body">' + (tags ? '<div class="cap-tags">' + tags + '</div>' : "")
          + '<div class="cap-photos">' + photos + '</div></div>'
          + '</div>';
      }).join("");
      // 折叠已交由统一的 [data-acc-head] 委托处理（P1-13）
    });
  }

  /* 语言切换 → 按新语言重建产品页折叠块（i18n.js 的 switchLang 末尾派发 hondvo:lang） */
  document.addEventListener("hondvo:lang", function(){
    try { renderProdAcc(true); } catch (e) { console.warn("[prodAcc lang]", e); }
  });

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

  // P1-21：role=tablist 的方向键导航（←/→/Home/End），并同步 aria-selected
  (function bindTabKeyboard(){
    var tabNav = document.querySelector(".prod-tab-nav");
    if (!tabNav || tabNav._kbBound) return;
    tabNav._kbBound = true;
    tabNav.addEventListener("keydown", function (e) {
      if (["ArrowRight","ArrowLeft","Home","End"].indexOf(e.key) < 0) return;
      var btns = Array.prototype.slice.call(tabNav.querySelectorAll(".prod-tab-btn"));
      if (!btns.length) return;
      var i = btns.indexOf(document.activeElement);
      if (i < 0) { for (var k = 0; k < btns.length; k++) { if (btns[k].classList.contains("is-active")) { i = k; break; } } }
      if (i < 0) i = 0;
      if (e.key === "ArrowRight") i = (i + 1) % btns.length;
      else if (e.key === "ArrowLeft") i = (i - 1 + btns.length) % btns.length;
      else if (e.key === "Home") i = 0;
      else i = btns.length - 1;
      e.preventDefault();
      btns[i].focus();
      btns[i].click();
    });
  })();

  // 点击：固定选定 Tab（永久选中）
  document.querySelectorAll(".prod-tab-btn").forEach(function(b){
    b.addEventListener("click", function(){
      pickedTab = b.getAttribute("data-tab");
      prodTab(pickedTab);
    });
  });

  // C5：悬停只做下划线预览（.is-hovered），不再切换面板内容。
  // 原实现在 previewTab() 内同时调用 prodTab()，鼠标扫过三个 Tab 会连续
  // 重建面板 DOM（面板内含大量卡片）。现改为：内容切换仅由「点击 /
  // 键盘方向键 / 导航下拉 openTab()」触发，悬停仅移动下划线。
  function initTabHover(){
    var nav = document.querySelector(".prod-tab-nav");
    if (!nav) return;
    var btns = nav.querySelectorAll(".prod-tab-btn");
    var previewBorder = function(name){
      document.querySelectorAll(".prod-tab-btn").forEach(function(b){
        b.classList.toggle("is-hovered", b.getAttribute("data-tab") === name && !b.classList.contains("is-active"));
        b.classList.remove("is-hovered2");
      });
    };
    btns.forEach(function(b){
      b.addEventListener("mouseenter", function(){ previewBorder(b.getAttribute("data-tab")); });
    });
    nav.addEventListener("mouseleave", function(){
      document.querySelectorAll(".prod-tab-btn").forEach(function(b){ b.classList.remove("is-hovered"); });
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
