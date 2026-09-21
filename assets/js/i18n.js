/* ============================================================
   HONDVO i18n（P1 拆分）— 8 语言字典 + switchLang + 页脚/法务 + 后台桥接
   来源 index.html: script_giant I18N 段 + i18n-bridge 段
   挂载全局：I18N / switchLang / injectFooters / renderLegal
   ============================================================ */
/* ═══════════ I18N SYSTEM (direct replacement) ═══════════ */

const I18N = {

  "nav_首页":{"zh":"首页","en":"Home","de":"Startseite","ru":"Главная","fr":"Accueil","ja":"ホーム","ko":"홈","es":"Inicio"},

  "nav_关于我们":{"zh":"关于我们","en":"About Us","de":"Über uns","ru":"О нас","fr":"À propos","ja":"会社概要","ko":"회사소개","es":"Sobre nosotros"},

  "nav_产品与服务":{"zh":"产品与服务","en":"Products & Services","de":"Produkte & Dienstleistungen","ru":"Продукты и услуги","fr":"Produits & services","ja":"製品・サービス","ko":"제품 및 서비스","es":"Productos y servicios"},

  "nav_模具中心":{"zh":"模具中心","en":"Mold Center","de":"Werkzeugbau","ru":"Центр пресс-форм","fr":"Centre de moules","ja":"金型センター","ko":"금형 센터","es":"Centro de moldes"},

  "nav_资质实力":{"zh":"资质实力","en":"Qualifications","de":"Qualifikationen","ru":"Квалификации","fr":"Qualifications","ja":"認定資格","ko":"인증 및 역량","es":"Certificaciones"},

  "nav_新闻动态":{"zh":"新闻动态","en":"News","de":"Nachrichten","ru":"Новости","fr":"Actualités","ja":"ニュース","ko":"뉴스","es":"Noticias"},

  "nav_联系我们":{"zh":"联系我们","en":"Contact Us","de":"Kontakt","ru":"Контакты","fr":"Contact","ja":"お問い合わせ","ko":"문의하기","es":"Contacto"},

  "nav_常见问题":{"zh":"常见问题","en":"FAQ","de":"FAQ","ru":"Часто задаваемые вопросы","fr":"FAQ","ja":"よくある質問","ko":"자주 묻는 질문","es":"Preguntas frecuentes"},

  "nav_人才招聘":{"zh":"人才招聘","en":"Careers","de":"Karriere","ru":"Карьера","fr":"Carrières","ja":"採用情報","ko":"채용","es":"Carreras"},

  "faq_dd_qa":{"zh":"常见问题","en":"FAQ","de":"FAQ","ru":"Вопросы и ответы","fr":"FAQ","ja":"よくある質問","ko":"자주 묻는 질문","es":"Preguntas frecuentes"},

  "faq_dd_downloads":{"zh":"资料下载","en":"Downloads","de":"Downloads","ru":"Загрузки","fr":"Téléchargements","ja":"ダウンロード","ko":"다운로드","es":"Descargas"},

  "faq_dd_subscribe":{"zh":"邮件订阅","en":"Newsletter","de":"Newsletter","ru":"Подписка на новости","fr":"Newsletter","ja":"メールマガジン","ko":"메일 구독","es":"Boletín"},

  "faq_dd_links":{"zh":"友情链接","en":"Links","de":"Links","ru":"Ссылки","fr":"Liens","ja":"リンク","ko":"링크","es":"Enlaces"},

  "contact_dd_info":{"zh":"联系方式","en":"Contact Info","de":"Kontaktinformationen","ru":"Контактная информация","fr":"Informations de contact","ja":"お問い合わせ先","ko":"연락처","es":"Información de contacto"},

  "faq_hero":{"zh":"帮助中心","en":"Help Center","de":"Hilfe-Center","ru":"Центр помощи","fr":"Centre d'aide","ja":"ヘルプセンター","ko":"도움말 센터","es":"Centro de ayuda"},

  "faq_hero_sub":{"zh":"常见问题解答 · 资料下载 · 邮件订阅 · 友情链接","en":"FAQs · Downloads · Newsletter · Links","de":"FAQ · Downloads · Newsletter · Links","ru":"Вопросы · Загрузки · Подписка · Ссылки","fr":"FAQ · Téléchargements · Newsletter · Liens","ja":"よくある質問・ダウンロード・メルマガ・リンク","ko":"FAQ · 다운로드 · 뉴스레터 · 링크","es":"Preguntas · Descargas · Boletín · Enlaces"},

  "careers_hero":{"zh":"人才招聘","en":"Careers","de":"Karriere","ru":"Карьера","fr":"Carrières","ja":"採用情報","ko":"채용","es":"Carreras"},

  "careers_hero_sub":{"zh":"加入弘欧，共同成长","en":"Join HONDVO, Grow Together","de":"Kommen Sie zu HONDVO und wachsen Sie gemeinsam","ru":"Присоединяйтесь к HONDVO","fr":"Rejoignez HONDVO","ja":"弘欧で一緒に成長しましょう","ko":"HONDVO와 함께 성장하세요","es":"Únete a HONDVO"},

  "nav_btn_询价":{"zh":"立即询价","en":"Get a Quote","de":"Angebot anfordern","ru":"Запросить цену","fr":"Demander un devis","ja":"見積り依頼","ko":"견적 요청","es":"Solicitar cotización"},



  "hero_title": {"zh":"以微米，守护生命","en":"Microns That Guard Life","de":"Mikrometer, die Leben schützen","ru":"Микроны, защищающие жизнь","fr":"Des microns au service de la vie","ja":"命を守るミクロン","ko":"생명을 지키는 미크론","es":"Micras que protegen la vida"},

  "page_title":{"zh":"弘欧科技 - 精密医疗器械部件 & 精密模具制造","en":"HONDVO Technology - Precision Medical Device Components & Precision Mold Manufacturing","de":"HONDVO Technology - Präzisions-Medizinteile & Präzisionswerkzeugbau","ru":"HONDVO Technology - Компоненты для медицинских изделий и прецизионные пресс-формы","fr":"HONDVO Technology - Composants médicaux de précision & fabrication de moules","ja":"HONDVO Technology - 精密医療部品 & 精密金型製造","ko":"HONDVO Technology - 정밀 의료기기 부품 & 정밀 금형 제조","es":"HONDVO Technology - Componentes médicos de precisión y moldes de precisión"},

  "hero_sub": {"zh":"每一次救治，都值得被精确以待","en":"Every Life Deserves Precision","de":"Jedes Leben verdient Präzision","ru":"Каждая жизнь заслуживает точности","fr":"Chaque vie mérite la précision","ja":"すべての命に、確かな精密を","ko":"모든 생명에 정밀함을","es":"Cada vida merece precisión"},

  "hero_desc":{"zh":"无源二类医疗器械注塑部件 · 高精密注塑模具<br>ISO 13485 / ISO 9001 / IATF 16949 三体系认证","en":"Class II passive medical device injection components · High-precision injection molds<br>ISO 13485 / ISO 9001 / IATF 16949 triple-system certified","de":"Spritzgussteile für passive Medizinprodukte Klasse II · Hochpräzise Spritzgießwerkzeuge<br>Dreifach zertifiziert nach ISO 13485 / ISO 9001 / IATF 16949","ru":"Литьевые компоненты для пассивных медицинских изделий класса II · Прецизионные пресс-формы<br>Тройная сертификация ISO 13485 / ISO 9001 / IATF 16949","fr":"Pièces injectées pour dispositifs médicaux passifs de classe II · Moules d'injection de haute précision<br>Triple certification ISO 13485 / ISO 9001 / IATF 16949","ja":"クラスIIパッシブ医療機器用射出部品 · 高精密射出成形金型<br>ISO 13485 / ISO 9001 / IATF 16949 トリプル認証取得","ko":"클래스II 수동형 의료기기 사출 부품 · 고정밀 사출 금형<br>ISO 13485 / ISO 9001 / IATF 16949 3중 인증","es":"Componentes de inyección para dispositivos médicos pasivos clase II · Moldes de inyección de alta precisión<br>Triple certificación ISO 13485 / ISO 9001 / IATF 16949"},

  "hero_btn_quote":{"zh":"立即询价","en":"Get a Quote","de":"Angebot anfordern","ru":"Запросить цену","fr":"Demander un devis","ja":"見積り依頼","ko":"견적 요청","es":"Solicitar cotización"},

  "hero_btn_explore":{"zh":"探索产品","en":"Explore Products","de":"Produkte entdecken","ru":"Смотреть продукцию","fr":"Découvrir les produits","ja":"製品を見る","ko":"제품 살펴보기","es":"Explorar productos"},

  "hero_scroll_hint":{"zh":"向下滚动了解详情","en":"Scroll to explore","de":"Scrollen zum Entdecken","ru":"Прокрутите вниз","fr":"Faites défiler","ja":"スクロールして見る","ko":"스크롤하여 살펴보기","es":"Desplázate para explorar"},



  "stat_machines":{"zh":"台加工设备","en":"Machining Equipment","de":"Bearbeitungsmaschinen","ru":"Единиц оборудования","fr":"Machines d'usinage","ja":"台の加工設備","ko":"대의 가공 장비","es":"Máquinas de mecanizado"},

  "stat_injection":{"zh":"台注塑机","en":"Injection Machines","de":"Spritzgießmaschinen","ru":"Термопластавтоматов","fr":"Machines d'injection","ja":"台の射出成形機","ko":"대의 사출 성형기","es":"Máquinas de inyección"},

  "stat_team":{"zh":"人专业团队","en":"Professional Team","de":"Fachkräfte im Team","ru":"Специалистов в команде","fr":"Professionnels dans l'équipe","ja":"名の専門チーム","ko":"명의 전문 팀","es":"Profesionales en el equipo"},

  "stat_certs":{"zh":"项国际认证","en":"Intl. Certifications","de":"Internationale Zertifizierungen","ru":"Международных сертификатов","fr":"Certifications internationales","ja":"件の国際認証","ko":"건의 국제 인증","es":"Certificaciones internacionales"},

  "stat_cleanrooms":{"zh":"个净化车间","en":"Cleanrooms","de":"Reinräume","ru":"Чистых помещений","fr":"Salles blanches","ja":"室のクリーンルーム","ko":"개의 클린룸","es":"Salas limpias"},

  "stat_design":{"zh":"人设计团队","en":"Design Team","de":"Konstrukteure","ru":"Конструкторов","fr":"Concepteurs","ja":"名の設計チーム","ko":"명의 설계 팀","es":"Diseñadores en el equipo"},



  "home_core_title":{"zh":"核心业务","en":"Core Business","de":"Kerngeschäft","ru":"Основные направления","fr":"Activités principales","ja":"コア事業","ko":"핵심 사업","es":"Negocio principal"},

  "home_core_sub":{"zh":"从模具设计到注塑量产，全链路精密制造能力","en":"Full-chain precision manufacturing capability from mold design to injection mass production","de":"Präzisionsfertigung über die gesamte Kette – vom Werkzeugdesign bis zur Serienproduktion","ru":"Сквозные возможности прецизионного производства – от проектирования пресс-форм до серийного литья","fr":"Capacité de fabrication de précision sur toute la chaîne, de la conception de moules à la production en série","ja":"金型設計から射出成形量産まで、一貫した精密製造力","ko":"금형 설계부터 사출 양산까지, 전 공정 정밀 제조 역량","es":"Capacidad de fabricación de precisión de cadena completa, desde el diseño de moldes hasta la producción en serie"},



  "home_prod1_desc":{"zh":"硅胶营养液瓶体、注塑瓶盖、分流接头、管路连接件，满足二类医疗器械法规要求","en":"Silicone nutrition bottle bodies, injection-molded caps, diverter connectors, tubing fittings — meeting Class II medical device regulations","de":"Flaschenkörper für Silikon-Nährlösungen, Spritzguss-Verschlusskappen, Verteileranschlüsse, Schlauchverbinder – konform mit Medizinprodukteverordnung Klasse II","ru":"Корпуса флаконов для силиконовых питательных растворов, литьевые крышки, разветвители, трубные соединители – соответствие требованиям для медизделий класса II","fr":"Corps de flacons en silicone pour solutions nutritives, bouchons injectés, raccords de dérivation, connecteurs de tubulure – conformes aux exigences des DM de classe II","ja":"シリコーン栄養液ボトル本体、射出成形キャップ、分岐コネクタ、チューブ接続部品 – クラスII医療機器規制に対応","ko":"실리콘 영양액 병 본체, 사출 캡, 분기 커넥터, 튜브 연결 부품 – 클래스II 의료기기 규정 충족","es":"Cuerpos de frascos de silicona para soluciones nutritivas, tapas inyectadas, conectores de derivación, conexiones de tubería – cumplen con la normativa de dispositivos médicos clase II"},

  "home_prod2_desc":{"zh":"高精度针筒、推杆组件，严格的尺寸公差与表面质量控制","en":"High-precision syringe barrels and plunger assemblies with strict dimensional tolerance and surface quality control","de":"Hochpräzise Spritzenzylinder und Kolbenbaugruppen mit strenger Maßtoleranz und Oberflächenkontrolle","ru":"Высокоточные цилиндры шприцев и поршневые узлы с жестким контролем допусков и качества поверхности","fr":"Corps de seringues et ensembles piston de haute précision avec contrôle strict des tolérances dimensionnelles et de l'état de surface","ja":"高精度シリンジバレルおよびプランジャー組立品、厳格な寸法公差と表面品質管理","ko":"고정밀 주사기 배럴 및 플런저 어셈블리, 엄격한 치수 공차 및 표면 품질 관리","es":"Cilindros de jeringa y conjuntos de émbolo de alta precisión con estricto control de tolerancias dimensionales y calidad superficial"},

  "home_prod3_desc":{"zh":"23台CNC · 8台EDM · 7台线切割 · Hauser / RODERS / YASDA 顶级设备矩阵","en":"23 CNC · 8 EDM · 7 Wire-cut · Hauser / RODERS / YASDA top-tier equipment matrix","de":"23 CNC · 8 EDM · 7 Drahterodiermaschinen · Top-Ausrüstung von Hauser / RODERS / YASDA","ru":"23 станка с ЧПУ · 8 электроэрозионных · 7 проволочно-вырезных · Оборудование высшего класса Hauser / RODERS / YASDA","fr":"23 CNC · 8 électroérosion · 7 découpe au fil · Équipement haut de gamme Hauser / RODERS / YASDA","ja":"CNC 23台 · EDM 8台 · ワイヤーカット 7台 · Hauser / RODERS / YASDA 最高級設備マトリクス","ko":"CNC 23대 · EDM 8대 · 와이어컷 7대 · Hauser / RODERS / YASDA 최상급 장비 매트릭스","es":"23 CNC · 8 electroerosión · 7 corte por hilo · Matriz de equipos de primer nivel Hauser / RODERS / YASDA"},



  "home_more":{"zh":"了解详情","en":"Learn More","de":"Mehr erfahren","ru":"Подробнее","fr":"En savoir plus","ja":"詳細を見る","ko":"자세히 보기","es":"Más información"},
"hero_tag": {"zh":"精密制造 · 守护生命","en":"Precision for Life","de":"Präzision für das Leben","ru":"Точность ради жизни","fr":"La précision au service de la vie","ja":"命を守る精密","ko":"생명을 지키는 정밀","es":"Precisión por la vida"},
"home_sectors_title":{"zh":"应用行业","en":"Industries We Serve","de":"Anwendungsbranchen","ru":"Отрасли применения","fr":"Secteurs d'application","ja":"対応業界","ko":"적용 산업","es":"Sectores de aplicación"},
"home_sectors_sub":{"zh":"聚焦 II 类无源医疗器械注塑组件，覆盖临床主流应用场景","en":"Precision injection-molded components for Class II passive medical devices across mainstream clinical scenarios","de":"Präzisions-Spritzgussteile für passive Medizinprodukte der Klasse II in klinischen Hauptszenarien","ru":"Прецизионные литые компоненты для пассивных медизделий класса II","fr":"Composants moulés de précision pour dispositifs médicaux passifs de classe II","ja":"クラスII受動医療機器向け精密射出成形部品","ko":"클래스 II 수동 의료기기용 정밀 사출 부품","es":"Componentes moldeados de precisión para dispositivos médicos pasivos Clase II"},
"home_sec_1_t":{"zh":"体外诊断 IVD","en":"In Vitro Diagnostics (IVD)","de":"In-vitro-Diagnostik (IVD)","ru":"Инвитро-диагностика (IVD)","fr":"Diagnostic in vitro (IVD)","ja":"体外診断 (IVD)","ko":"체외 진단 (IVD)","es":"Diagnóstico in vitro (IVD)"},
"home_sec_1_s":{"zh":"反应杯、试剂条、微流控芯片等精密微注塑部件","en":"Reaction cups, reagent strips, microfluidic chips","de":"Reaktionsgefäße, Teststreifen, Mikrofluidik-Chips","ru":"Реакционные кюветы, тест-полоски, микрофлюидные чипы","fr":"Godets réactionnels, bandelettes, puces microfluidiques","ja":"反応カップ、試薬ストリップ、マイクロ流体チップ","ko":"반응 컵, 시약 스트립, 미세유체 칩","es":"Copas de reacción, tiras reactivas, chips de microfluídica"},
"home_sec_2_t":{"zh":"医学影像","en":"Medical Imaging","de":"Medizinische Bildgebung","ru":"Медицинская визуализация","fr":"Imagerie médicale","ja":"医用画像","ko":"의료 영상","es":"Imagen médica"},
"home_sec_2_s":{"zh":"影像设备外壳与精密结构件","en":"Housings & precision structural parts for imaging devices","de":"Gehäuse und Präzisionsstrukturteile für Bildgebungssysteme","ru":"Корпуса и прецизионные узлы для систем визуализации","fr":"Boîtiers et pièces structurelles de précision pour l'imagerie","ja":"画像診断装置の筐体と精密構造部品","ko":"영상 장비 하우징 및 정밀 구조 부품","es":"Carcasas y piezas estructurales de precisión para imagen"},
"home_sec_3_t":{"zh":"给药装置","en":"Drug Delivery","de":"Arzneimittelverabreichung","ru":"Доставка лекарств","fr":"Administration de médicaments","ja":"薬液投与","ko":"약물 전달","es":"Administración de fármacos"},
"home_sec_3_s":{"zh":"输液泵、预灌封推杆与阀门组件","en":"Infusion pumps, pre-filled plungers, valve assemblies","de":"Infusionspumpen, vorbefüllte Kolben, Ventilbaugruppen","ru":"Инфузионные насосы, плунжеры, клапанные узлы","fr":"Pompes à perfusion, pistons pré-remplis, ensembles de vannes","ja":"輸液ポンプ、プレフィルドプランジャー、弁アセンブリ","ko":"주입 펌프, 프리필드 플런저, 밸브 어셈블리","es":"Bombas de infusión, émbolos pre-llenados, conjuntos de válvulas"},
"home_sector_more":{"zh":"查看产品","en":"View Products","de":"Produkte ansehen","ru":"Смотреть продукцию","fr":"Voir les produits","ja":"製品を見る","ko":"제품 보기","es":"Ver productos"},
"home_flow_title":{"zh":"全链路制造能力","en":"End-to-End Manufacturing","de":"Durchgängige Fertigung","ru":"Сквозное производство","fr":"Fabrication de bout en bout","ja":"一貫製造体制","ko":"일관 제조 역량","es":"Fabricación integral"},
"home_flow_sub":{"zh":"从图纸到量产的一站式闭环，四大环节全程受控","en":"From drawing to mass production in one closed loop — controlled at every stage","de":"Vom Zeichnen bis zur Serienfertigung in einem geschlossenen Kreislauf","ru":"Замкнутый цикл от чертежа до серийного производства","fr":"De la conception à la production en série, un cycle maîtrisé","ja":"図面から量産まで一貫管理的なクローズドループ","ko":"도면부터 양산까지 하나의 통제된 클로즈드 루프","es":"Del plano a la producción en serie, un ciclo controlado"},
"home_flow_1_t":{"zh":"模具设计","en":"Mold Design","de":"Werkzeugkonstruktion","ru":"Проектирование пресс-форм","fr":"Conception de moules","ja":"金型設計","ko":"금형 설계","es":"Diseño de moldes"},
"home_flow_1_s":{"zh":"DFM 评审与模流分析，量产前锁定工艺窗口","en":"DFM review & mold-flow analysis lock the process window before mass production","de":"DFM-Review und Fließanalyse sichern das Prozessfenster","ru":"DFM-анализ и анализ потока до серии","fr":"Revue DFM et analyse d'écoulement avant production","ja":"DFMレビューと流動解析で量産前の工程窓を確定","ko":"양산 전 DFM 검토와 성형해석으로 공정 윈도우 확정","es":"Revisión DFM y análisis de flujo antes de producir"},
"home_flow_2_t":{"zh":"精密制造","en":"Precision Manufacturing","de":"Präzisionsfertigung","ru":"Прецизионное производство","fr":"Fabrication de précision","ja":"精密加工","ko":"정밀 제조","es":"Fabricación de precisión"},
"home_flow_2_s":{"zh":"23 台 CNC、8 台 EDM 与线切割，微米级模具精度","en":"23 CNC, 8 EDM & wire-cut machines deliver micron-level mold accuracy","de":"23 CNC, 8 EDM und Drahterodieren in Mikrometerpräzision","ru":"23 ЧПУ, 8 электроэрозионных станков — точность до микрона","fr":"23 CNC, 8 EDM et électroérosion fil — précision au micron","ja":"CNC 23台・EDM 8台・ワイヤー放電でミクロン精度","ko":"CNC 23대, EDM 8대, 와이어컷 — 미크론 정밀도","es":"23 CNC, 8 EDM y electroerosión por hilo — precisión micrónica"},
"home_flow_3_t":{"zh":"注塑量产","en":"Injection Molding","de":"Spritzgieß-Serienfertigung","ru":"Литьевое производство","fr":"Moulage par injection","ja":"射出成形量産","ko":"사출 양산","es":"Moldeo por inyección"},
"home_flow_3_s":{"zh":"21 台注塑机，覆盖常规 / 全电动 / 液态硅胶 LSR","en":"21 machines covering conventional, all-electric & LSR molding","de":"21 Spritzgießmaschinen: konventionell, vollelektrisch, LSR","ru":"21 термопластавтоматов: обычные, электрические, LSR","fr":"21 presses : conventionnelles, tout-électriques, LSR","ja":"射出成形機21台：常法・全電動・LSR","ko":"성형기 21대: 일반, 올일렉트릭, LSR","es":"21 inyectoras: convencionales, todo-eléctricas, LSR"},
"home_flow_4_t":{"zh":"验证交付","en":"Validation & Delivery","de":"Validierung & Auslieferung","ru":"Валидация и отгрузка","fr":"Validation & livraison","ja":"検証・納品","ko":"검증 및 출하","es":"Validación y entrega"},
"home_flow_4_s":{"zh":"十万级洁净车间装配，抽样检验后出货","en":"Cleanroom assembly & sampling inspection before shipment","de":"Montage im Reinraum mit Stichprobenprüfung vor Versand","ru":"Сборка в чистых помещениях, выборочный контроль","fr":"Assemblage en salle blanche et contrôle par échantillonnage","ja":"クラス100000クリーンルーム組立・抜き取り検査","ko":"클린룸 조립 및 출하 전 샘플링 검사","es":"Ensamblaje en sala limpia e inspección por muestreo"},
"home_news_title":{"zh":"新闻动态","en":"News","de":"Nachrichten","ru":"Новости","fr":"Actualités","ja":"ニュース","ko":"뉴스","es":"Noticias"},
"home_news_sub":{"zh":"公司动态与行业资讯","en":"Company updates & industry insights","de":"Unternehmens-News & Brancheneinblicke","ru":"Новости компании и отрасли","fr":"Actualités de l'entreprise et du secteur","ja":"会社情報と業界ニュース","ko":"기업 소식과 업계 인사이트","es":"Novedades de la empresa y del sector"},
"home_news_more":{"zh":"查看全部新闻 →","en":"View All News →","de":"Alle Nachrichten →","ru":"Все новости →","fr":"Toutes les actualités →","ja":"すべてのニュース →","ko":"모든 뉴스 보기 →","es":"Ver todas las noticias →"},











  "home_cta":{"zh":"有医疗器械部件需求？","en":"Need Medical Device Components?","de":"Bedarf an Medizinteile-Komponenten?","ru":"Нужны компоненты для медицинских изделий?","fr":"Besoin de composants pour dispositifs médicaux ?","ja":"医療機器部品のご要望は？","ko":"의료기기 부품이 필요하신가요?","es":"¿Necesita componentes para dispositivos médicos?"},

  "home_cta_btn":{"zh":"立即咨询","en":"Contact Us Now","de":"Jetzt anfragen","ru":"Связаться сейчас","fr":"Contactez-nous","ja":"今すぐ相談","ko":"지금 문의하기","es":"Consulte ahora"},



  "about_mold_title":{"zh":"弘欧精密模具（东莞）有限公司","en":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","de":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","ru":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","fr":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","ja":"弘欧精密模具（東莞）有限公司","ko":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","es":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd."},

  "about_mold_desc":{"zh":"专业从事超精密注塑模具的设计、制造与交付。深耕模具领域多年，具备从产品结构评审、模具设计、精密加工到试模交付的全链路能力。拥有从瑞士 Hauser 坐标磨、德国 RODERS 五轴 CNC 到日本 YASDA 高速加工中心的全品牌设备矩阵，覆盖 CNC 加工、EDM 电火花、线切割、精密磨削等完整模具制造工序，模具精度可达微米级，广泛应用于医疗器械、智能机器人、汽车零部件等高端制造领域。", "en":"We specialize in the design, manufacturing, and delivery of ultra-precision injection molds. With years of deep expertise in the mold industry, we provide end-to-end capabilities — from product structure review and mold design to precision machining and trial molding. Our full-brand equipment matrix ranges from Swiss Hauser jig grinders and German RODERS 5-axis CNC to Japanese YASDA high-speed machining centers, covering complete mold manufacturing processes including CNC machining, EDM, wire-cutting, and precision grinding. Mold accuracy reaches micron level, serving high-end manufacturing fields such as medical devices, intelligent robotics, and automotive components.", "de":"Wir sind auf die Konstruktion, Fertigung und Lieferung von ultrapräzisen Spritzgussformen spezialisiert. Mit jahrelanger Erfahrung in der Formenbaubranche bieten wir durchgängige Kompetenzen – von der Produktstrukturbewertung und Formenkonstruktion bis zur Präzisionsbearbeitung und Probeformung. Unsere vollmarkenübergreifende Gerätematrix reicht von Schweizer Hauser-Koordinatenschleifmaschinen und deutschen RODERS-5-Achsen-CNC bis zu japanischen YASDA-Hochgeschwindigkeits-Bearbeitungszentren und deckt vollständige Formenbauprozesse wie CNC-Bearbeitung, EDM, Drahterosion und Präzisionsschleifen ab. Die Formgenauigkeit erreicht Mikrometerebene und dient Hochtechnologiebereichen wie Medizintechnik, intelligenter Robotik und Automobilkomponenten.", "ru":"Мы специализируемся на проектировании, изготовлении и поставке сверхпрецизионных литьевых форм. Имея многолетний опыт в области формообразования, мы обладаем сквозными компетенциями — от экспертизы конструкции изделия и проектирования формы до прецизионной обработки и пробного формования. Наш парк оборудования охватывает весь спектр брендов — от координатно-шлифовальных станков Hauser (Швейцария) и 5-осевых ЧПУ RODERS (Германия) до высокоскоростных обрабатывающих центров YASDA (Япония) — и включает полный цикл формообразования: CNC-обработку, электроэрозию (EDM), проволочную резку и прецизионное шлифование. Точность форм достигает микронного уровня и применяется в высокотехнологичных отраслях, таких как медицинские изделия, интеллектуальная робототехника и автомобильные компоненты.", "fr":"Nous sommes spécialisés dans la conception, la fabrication et la livraison de moules d'injection ultra-précis. Fort de nombreuses années d'expertise dans le secteur de la moulerie, nous offrons des compétences de bout en bout — de l'examen de la structure du produit et de la conception du moule jusqu'à l'usinage de précision et au moulage d'essai. Notre matrice d'équipements toutes marques couvre des meules de coordinatage Hauser (Suisse), des CNC 5 axes RODERS (Allemagne) et des centres d'usinage à grande vitesse YASDA (Japon), englobant l'ensemble des procédés de fabrication de moules : usinage CNC, électroérosion (EDM), découpe au fil et meulage de précision. La précision des moules atteint le niveau micrométrique et s'applique à des domaines de fabrication haut de gamme tels que les dispositifs médicaux, la robotique intelligente et les composants automobiles.", "ja":"当社は超精密射出成形金型の設計・製造・納入を専門としています。金型分野で長年培った経験により、製品構造のレビュー、金型設計、精密加工から試作成形までの一貫した能力を備えています。スイスの Hauser 座標研削盤、ドイツの RODERS 5 軸 CNC、日本の YASDA 高速加工センターに至る全ブランドの設備ラインアップにより、CNC 加工、放電加工（EDM）、ワイヤーカット、精密研削などの完全な金型製造工程を網羅しています。金型精度はマイクロメートル級に達し、医療機器、知能ロボット、自動車部品などのハイエンド製造分野に広く活用されています。", "ko":"당사는 초정밀 사출 금형의 설계, 제조 및 납품을 전문으로 합니다. 금형 분야에서 다년간 축적한 노하우를 바탕으로 제품 구조 검토, 금형 설계, 정밀 가공에서 시사출 납품까지 전 과정 역량을 갖추고 있습니다. 스위스 Hauser 좌표 연삭기, 독일 RODERS 5축 CNC, 일본 YASDA 고속 가공 센터에 이르는 전 브랜드 장비 라인업을 통해 CNC 가공, 방전 가공(EDM), 와이어 컷, 정밀 연삭 등 완전한 금형 제조 공정을 포괄합니다. 금형 정밀도는 마이크로미터 수준에 달하며 의료기기, 지능형 로봇, 자동차 부품 등 고급 제조 분야에 폭넓게 적용됩니다.", "es":"Nos especializamos en el diseño, fabricación y entrega de moldes de inyección ultraprecisos. Con años de experiencia en el sector de la mollería, contamos con capacidades de extremo a extremo —desde la revisión de la estructura del producto y el diseño del molde hasta el mecanizado de precisión y el moldeo de prueba—. Nuestra matriz de equipos de todas las marcas abarca desde rectificadoras de coordenadas Hauser (Suiza) y CNC de 5 ejes RODERS (Alemania) hasta centros de mecanizado de alta velocidad YASDA (Japón), cubriendo procesos completos de fabricación de moldes como mecanizado CNC, EDM, corte por hilo y rectificado de precisión. La precisión del molde alcanza el nivel micrométrico y se aplica a campos de fabricación de alta gama como dispositivos médicos, robótica inteligente y componentes de automoción."},

  "about_tech_title":{"zh":"弘欧科技（东莞）有限公司","en":"HONDVO Technology (Dongguan) Co., Ltd.","de":"HONDVO Technology (Dongguan) Co., Ltd.","ru":"HONDVO Technology (Dongguan) Co., Ltd.","fr":"HONDVO Technology (Dongguan) Co., Ltd.","ja":"弘欧科技（東莞）有限公司","ko":"HONDVO Technology (Dongguan) Co., Ltd.","es":"HONDVO Technology (Dongguan) Co., Ltd."},

  "about_tech_desc":{"zh":"依托弘欧精密模具的强大制造能力，承接各类高精度注塑产品的研发与量产。公司配备 21 台注塑机，涵盖 SUMITOMO 全电动、TOYO 液压机及液态硅胶 LSR 专用机型，从精密结构件、透明光学件、包胶件到液态硅胶件均可一站式交付。", "en":"Leveraging the strong manufacturing capabilities of HONDVO TOOLING, we undertake R&D and mass production of a wide range of high-precision injection-molded products. Equipped with 21 injection molding machines — including SUMITOMO all-electric, TOYO hydraulic, and dedicated LSR (liquid silicone rubber) models — we deliver everything from precision structural parts, transparent optical components, and overmolded parts to liquid silicone parts in a one-stop process.", "de":"Basierend auf den starken Fertigungskapazitäten von HONDVO TOOLING übernehmen wir Forschung, Entwicklung und Serienfertigung einer breiten Palette hochpräziser Spritzgussprodukte. Mit 21 Spritzgießmaschinen – darunter SUMITOMO-Gesamtelektro-, TOYO-Hydraulik- und dedizierte LSR-Modelle (flüssiges Silikon) – liefern wir alles von Präzisionsbauteilen, transparenten Optikkomponenten und Umspritzteilen bis hin zu Flüssigsilikonteilen aus einer Hand.", "ru":"Опираясь на мощные производственные возможности HONDVO TOOLING, мы осуществляем НИОКР и серийное производство широкого спектра высокоточных литьевых изделий. На предприятии установлено 21 термопластавтоматов — включая полностью электрические SUMITOMO, гидравлические TOYO и специализированные модели для LSR (жидкого силикона), — что позволяет в едином цикле выпускать прецизионные конструкционные детали, прозрачные оптические элементы, детали с отливкой и изделия из жидкого силикона.", "fr":"En s'appuyant sur les puissantes capacités de fabrication de HONDVO TOOLING, nous assurons la R&D et la production en série d'une large gamme de produits de moulage par injection de haute précision. Dotée de 21 machines d'injection — incluant les modèles tout-électriques SUMITOMO, hydrauliques TOYO et dédiés LSR (silicone liquide) —, notre société livre en un processus intégré des pièces structurelles de précision, composants optiques transparents, pièces surmoulées et pièces en silicone liquide.", "ja":"HONDVO TOOLING の強力な製造力を活かし、さまざまな高精度射出成形製品の研究開発・量産を手がけています。当社は SUMITOMO 全電動、TOYO 油圧式、および液体シリコン（LSR）専用機を含む 21 台の射出成形機を備え、精密構造部品、透明光学部品、オーバーモールド品から液体シリコン部品まで一貫して製造します。", "ko":"HONDVO TOOLING의 강력한 제조 역량을 바탕으로 다양한 고정밀 사출 성형 제품의 연구개발 및 양산을 수행합니다. 당사는 SUMITOMO 전동식, TOYO 유압식 및 액상 실리콘(LSR) 전용 기기를 포함한 21대의 사출 성형기를 갖추고 있어 정밀 구조 부품, 투명 광학 부품, 오버몰딩 부품에서 액상 실리콘 부품까지 일관된 공정으로 납품합니다.", "es":"Aprovechando las sólidas capacidades de fabricación de HONDVO TOOLING, asumimos la I+D y producción en serie de una amplia gama de productos de moldeo por inyección de alta precisión. Con 21 máquinas de moldeo por inyección —incluidas modelos totalmente eléctricos SUMITOMO, hidráulicos TOYO y dedicados a LSR (silicona líquida)—, entregamos de forma integral desde piezas estructurales de precisión, componentes ópticos transparentes y piezas sobremoldeadas hasta piezas de silicona líquida."},

  "about_tech_focus":{"zh":"当前重点深耕医疗器械领域，主要产品包括：", "en":"We are currently focused on the medical device sector, with our main products including:", "de":"Der aktuelle Schwerpunkt liegt auf dem Medizintechnikbereich, wobei unsere Hauptprodukte umfassen:", "ru":"В настоящее время наш основной фокус — медицинская отрасль, и ключевая продукция включает:", "fr":"Nous nous concentrons actuellement sur le secteur des dispositifs médicaux, nos principaux produits comprenant :", "ja":"現在は医療機器分野に注力しており、主な製品は以下の通りです：", "ko":"현재는 의료기기 분야에 주력하고 있으며, 주요 제품은 다음과 같습니다:", "es":"Actualmente nos centramos en el sector de dispositivos médicos, y nuestros principales productos incluyen:"},

  "about_tech_c1_t":{"zh":"体外诊断耗材", "en":"IVD Consumables", "de":"IVD-Verbrauchsmaterialien", "ru":"Расходные материалы для IVD", "fr":"Consommables de diagnostic in vitro (DIV)", "ja":"体外診断（IVD）消耗品", "ko":"체외진단(IVD) 소모품", "es":"Consumibles de diagnóstico in vitro (DIV)"},

  "about_tech_c1_i":{"zh":"反应杯、试剂条、微流控芯片、比色皿等精密微注塑部件", "en":"Reaction cups, reagent strips, microfluidic chips, cuvettes, and other precision micro-molded components", "de":"Reaktionsgefäße, Reagenzstreifen, Mikrofluidik-Chips, Küvetten und andere präzise Mikro-Spritzgussteile", "ru":"Кюветы реакционные, реагентные полоски, микрофлюидные чипы, кюветы и прочие прецизионные микролитые детали", "fr":"Cups de réaction, bandelettes réactives, puces microfluidiques, cuvettes et autres micro-composants moulés de précision", "ja":"反応容器、試薬ストリップ、マイクロ流体チップ、キュベットなどの精密マイクロ射出部品", "ko":"반응 컵, 시약 스트립, 마이크로유체 칩, 큐벳 등 정밀 마이크로 사출 부품", "es":"Cubetas de reacción, tiras reactivas, chips microfluídicos, cubetas y otros microcomponentes moldeados de precisión"},

  "about_tech_c2_t":{"zh":"给药装置", "en":"Drug Delivery Devices", "de":"Arzneimittelabgabesysteme", "ru":"Устройства дозирования лекарств", "fr":"Dispositifs d'administration de médicaments", "ja":"投薬デバイス", "ko":"약물 전달 장치", "es":"Dispositivos de administración de medicamentos"},

  "about_tech_c2_i":{"zh":"胰岛素笔组件、预灌封推杆、喷雾泵与阀门组件", "en":"Insulin pen components, pre-filled syringe plungers, spray pumps, and valve assemblies", "de":"Insulinpens-Komponenten, Kolben für Fertigspritzen, Sprühpumpen und Ventilbaugruppen", "ru":"Компоненты инсулиновых ручек, толкатели шприцев предварительного заполнения, распылительные насосы и клапанные узлы", "fr":"Composants de stylos à insuline, poussoirs de seringues préremplies, pompes à pulvérisation et ensembles de vannes", "ja":"インスリンペン部品、プレフィルドシリンジ用プランジャー、スプレーポンプ、バルブアセンブリ", "ko":"인슐린 펜 부품, 프리필드 시린지 플런저, 분무 펌프 및 밸브 어셈블리", "es":"Componentes de plumas de insulina, émbolos de jeringas precargadas, bombas de pulverización y conjuntos de válvulas"},

  "about_tech_c3_t":{"zh":"手术器械配件", "en":"Surgical Instrument Parts", "de":"Chirurgische Instrumententeile", "ru":"Детали хирургических инструментов", "fr":"Pièces d'instruments chirurgicaux", "ja":"手術器具部品", "ko":"수술 기구 부품", "es":"Piezas de instrumentos quirúrgicos"},

  "about_tech_c3_i":{"zh":"一次性手术手柄、穿刺器组件、吻合器结构件", "en":"Disposable surgical handles, trocar assemblies, and stapler structural components", "de":"Einweg-Chirurgiegriffe, Trokar-Baugruppen und Stapler-Strukturbauteile", "ru":"Одноразовые хирургические рукоятки, узлы троакаров и конструкционные детали сшивающих аппаратов", "fr":"Poignées chirurgicales à usage unique, ensembles de trocarts et pièces structurelles d'agrafeuses", "ja":"使い捨て手術用ハンドル、トロカールアセンブリ、ステープラー構造部品", "ko":"일회용 수술용 핸들, 트로카 어셈블리, 스테이플러 구조 부품", "es":"Mangos quirúrgicos desechables, conjuntos de trócar y piezas estructurales de grapadoras"},

  "about_tech_c4_t":{"zh":"医疗电子外壳", "en":"Medical Electronics Housings", "de":"Gehäuse für medizinische Elektronik", "ru":"Корпуса медицинской электроники", "fr":"Boîtiers d'électronique médicale", "ja":"医療電子機器筐体", "ko":"의료 전자 기기 하우징", "es":"Carcasas de electrónica médica"},

  "about_tech_c4_i":{"zh":"监护仪、输液泵、便携诊断设备等医疗器械的外壳与面板", "en":"Housings and panels for medical devices such as monitors, infusion pumps, and portable diagnostic equipment", "de":"Gehäuse und Bedienfelder für Medizintechnik wie Monitore, Infusionspumpen und tragbare Diagnosegeräte", "ru":"Корпуса и панели медицинских изделий, таких как мониторы, инфузионные насосы и портативные диагностические приборы", "fr":"Boîtiers et panneaux de dispositifs médicaux tels que moniteurs, pompes à perfusion et équipements de diagnostic portables", "ja":"モニター、輸液ポンプ、携帯型診断機器などの医療機器の筐体とパネル", "ko":"모니터, 주입 펌프, 휴대용 진단 기기 등 의료기기의 하우징과 패널", "es":"Carcasas y paneles de dispositivos médicos como monitores, bombas de infusión y equipos de diagnóstico portátiles"},

  "about_tech_c5_t":{"zh":"高值耗材包胶件", "en":"High-Value Overmolded Components", "de":"Hochwertige Umspritzteile", "ru":"Высокостоимостные детали с отливкой", "fr":"Pièces surmoulées de haute valeur", "ja":"高付加価値オーバーモールド部品", "ko":"고부가가치 오버몰딩 부품", "es":"Piezas sobremoldeadas de alto valor"},

  "about_tech_c5_i":{"zh":"金属嵌件注塑、液态硅胶密封件、医用导管接头及鲁尔接口", "en":"Metal-insert molding, LSR seals, medical catheter connectors, and Luer fittings", "de":"Metalleinleger-Spritzgießen, LSR-Dichtungen, medizinische Katheteranschlüsse und Luer-Verbindungen", "ru":"Литьё с металлической арматурой, уплотнения LSR, медицинские катетерные соединители и Luer-муфты", "fr":"Moulage avec inserts métalliques, joints LSR, connecteurs de cathéters médicaux et raccords Luer", "ja":"金属インサート成形、LSR シール、医療用カテーテルコネクタ、ルアー継手", "ko":"금속 인서트 사출, LSR 실링, 의료용 카테터 커넥터 및 루어 피팅", "es":"Moldeo con insertos metálicos, sellos LSR, conectores de catéteres médicos y acoplamientos Luer"},

  "about_tech_cert":{"zh":"生产环境拥有两个十万级净化车间，全面支持 IQ/OQ/PQ 验证服务，严格遵循 ISO 13485 质量管理体系。", "en":"Our production environment features two Class 100,000 cleanrooms, with full support for IQ/OQ/PQ validation services, and strictly follows the ISO 13485 quality management system.", "de":"Unsere Produktionsumgebung verfügt über zwei Reinräume der Klasse 100.000, bietet volle Unterstützung für IQ/OQ/PQ-Validierungsdienste und folgt strikt dem Qualitätsmanagementsystem ISO 13485.", "ru":"Производственная среда включает два чистых помещения класса 100 000, обеспечивает полную поддержку услуг валидации IQ/OQ/PQ и строго соответствует системе менеджмента качества ISO 13485.", "fr":"Notre environnement de production comprend deux salles blanches de classe 100 000, prend en charge l'ensemble des services de validation IQ/OQ/PQ et respecte strictement le système de gestion de la qualité ISO 13485.", "ja":"生産環境にはクラス 100,000 のクリーンルームが 2 室あり、IQ/OQ/PQ バリデーションサービスを全面的にサポートし、ISO 13485 品質マネジメントシステムを厳格に遵守しています。", "ko":"생산 환경에는 클래스 100,000 클린룸 2개를 갖추고 있으며 IQ/OQ/PQ 밸리데이션 서비스를 전폭적으로 지원하고 ISO 13485 품질경영시스템을 엄격히 준수합니다.", "es":"Nuestro entorno de producción cuenta con dos salas blancas de clase 100 000, ofrece pleno soporte para servicios de validación IQ/OQ/PQ y cumple estrictamente con el sistema de gestión de calidad ISO 13485."},

  "about_tech_more":{"zh":"与此同时，公司也承接智能机器人结构件、汽车功能件等工业级注塑订单，具备多领域并行交付能力。", "en":"In parallel, we also accept industrial-grade injection orders for intelligent robot structural parts and automotive functional parts, enabling concurrent multi-sector delivery.", "de":"Parallel dazu übernehmen wir auch industriegerechte Spritzgussaufträge für Strukturbauteile intelligenter Roboter und Automobilfunktionsteile und bieten so eine gleichzeitige Lieferfähigkeit in mehreren Bereichen.", "ru":"Кроме того, мы принимаем промышленные заказы на литьё конструкционных деталей интеллектуальных роботов и функциональных автомобильных деталей, обеспечивая параллельную поставку в нескольких областях.", "fr":"Parallèlement, nous acceptons également des commandes de moulage par injection de niveau industriel pour pièces structurelles de robots intelligents et pièces fonctionnelles automobiles, ce qui nous permet une livraison parallèle multi-secteurs.", "ja":"また、当社は知能ロボットの構造部品や自動車機能部品などの産業グレード射出成形の受注も行っており、複数分野の並行納入が可能です。", "ko":"아울러 지능형 로봇 구조 부품 및 자동차 기능 부품 등 산업용 사출 주문도 수주하여 다분야 병행 납품이 가능합니다.", "es":"Asimismo, también aceptamos pedidos de moldeo por inyección de grado industrial para piezas estructurales de robots inteligentes y piezas funcionales de automoción, con capacidad de entrega paralela en múltiples sectores."},



  "prod_hero":{"zh":"产品与服务","en":"Products & Services","de":"Produkte & Dienstleistungen","ru":"Продукты и услуги","fr":"Produits & services","ja":"製品・サービス","ko":"제품 및 서비스","es":"Productos y servicios"},

  "prod_hero_sub":{"zh":"无源二类医疗器械注塑部件","en":"Class II passive medical device injection components","de":"Spritzgussteile für passive Medizinprodukte Klasse II","ru":"Литьевые компоненты для пассивных медицинских изделий класса II","fr":"Composants injectés pour dispositifs médicaux passifs de classe II","ja":"クラスIIパッシブ医療機器用射出部品","ko":"클래스II 수동형 의료기기 사출 부품","es":"Componentes de inyección para dispositivos médicos pasivos clase II"},

  "prod_hero_eyebrow":{"zh":"II 类无源医疗器械注塑 · 高精密注塑模具","en":"Class II Passive Medical Device Injection · Precision Molds","de":"Spritzgussteile für passive Medizinprodukte Klasse II · Präzisionswerkzeuge","ru":"Литьевые компоненты для пассивных медицинских изделий класса II · Прецизионные пресс-формы","fr":"Pièces injectées pour DM passifs de classe II · Moules de précision","ja":"クラスIIパッシブ医療機器用射出部品 · 高精密射出成形金型","ko":"클래스II 수동형 의료기기 사출 부품 · 고정밀 사출 금형","es":"Componentes de inyección para DM pasivos clase II · Moldes de precisión"},

  "ph_b_turnkey":{"zh":"一站式交付","en":"One-stop Turnkey","de":"Komplettservice","ru":"Под ключ","fr":"Clé en main","ja":"ワンストップ","ko":"원스톱","es":"Llave en mano"},
  "ph_b_turnkey_s":{"zh":"模具 → 制品","en":"Mold → Finished Parts","de":"Form → Fertigteil","ru":"Форма → изделия","fr":"Moule → Pièces","ja":"金型 → 製品","ko":"금형 → 제품","es":"Molde → Piezas"},
  "ph_b_iqoqpq":{"zh":"IQ/OQ/PQ 验证","en":"IQ/OQ/PQ Validation","de":"IQ/OQ/PQ-Validierung","ru":"IQ/OQ/PQ валидация","fr":"Validation IQ/OQ/PQ","ja":"IQ/OQ/PQ バリデーション","ko":"IQ/OQ/PQ 검증","es":"Validación IQ/OQ/PQ"},
  "ph_b_iqoqpq_s":{"zh":"全流程验证支持","en":"End-to-end Validation Support","de":"Durchgängige Validierungsunterstützung","ru":"Сквозная поддержка валидации","fr":"Support de validation de bout en bout","ja":"全工程バリデーション対応","ko":"전 공정 검증 지원","es":"Soporte de validación integral"},
  "ph_b_13485_s":{"zh":"医疗器械质量体系","en":"Medical Device QMS","de":"Medizinprodukte-QMS","ru":"СМК медизделий","fr":"SMQ des DM","ja":"医療機器QMS","ko":"의료기기 QMS","es":"SMQ de DM"},
  "ph_b_16949":{"zh":"IATF 16949","en":"IATF 16949","de":"IATF 16949","ru":"IATF 16949","fr":"IATF 16949","ja":"IATF 16949","ko":"IATF 16949","es":"IATF 16949"},
  "ph_b_16949_s":{"zh":"汽车行业质量体系","en":"Automotive QMS","de":"Automobil-QMS","ru":"Автомобильная СМК","fr":"SMQ automobile","ja":"自動車QMS","ko":"자동차 QMS","es":"SMQ del automóvil"},
  "ph_b_clean":{"zh":"十万级净化车间","en":"Class 100,000 Cleanroom","de":"Reinraum Klasse 100.000","ru":"Чистое помещение класса 100 000","fr":"Salle blanche classe 100 000","ja":"クラス100,000クリーンルーム","ko":"클래스 100,000 클린룸","es":"Sala blanca clase 100.000"},
  "ph_b_clean_s":{"zh":"洁净生产环境","en":"Clean Production Environment","de":"Saubere Produktionsumgebung","ru":"Чистая производственная среда","fr":"Environnement de production propre","ja":"クリーンな生産環境","ko":"청정 생산 환경","es":"Entorno de producción limpio"},

  "prod_hero_quick":{"zh":"快速浏览","en":"Quick Explore","de":"Schnellansicht","ru":"Быстрый обзор","fr":"Accès rapide","ja":"クイック閲覧","ko":"빠른 둘러보기","es":"Acceso rápido"},



  "core_products_title":{"zh":"核心产品线","en":"Core Product Lines","de":"Kernproduktlinien","ru":"Основные продуктовые линейки","fr":"Gammes de produits principales","ja":"主要製品ライン","ko":"주요 제품 라인","es":"Líneas de productos principales"},

  "core_products_sub":{"zh":"核心产品线","en":"Core Product Lines","de":"Kernproduktlinien","ru":"Основные продуктовые линейки","fr":"Gammes de produits principales","ja":"主要製品ライン","ko":"주요 제품 라인","es":"Líneas de productos principales"},

  "prod1_title":{"zh":"肠内营养输注系统","en":"Enteral Nutrition Infusion System","de":"Enterales Ernährungssystem","ru":"Система энтерального питания","fr":"Système de nutrition entérale","ja":"経腸栄養注入システム","ko":"경장 영양 주입 시스템","es":"Sistema de nutrición enteral"},

  "prod2_title":{"zh":"注射给药系统","en":"Injection Drug Delivery System","de":"Injektionssystem zur Medikamentenverabreichung","ru":"Система инъекционной доставки лекарств","fr":"Système d'administration de médicaments par injection","ja":"注射薬物送達システム","ko":"주사 약물 전달 시스템","es":"Sistema de administración de fármacos por inyección"},

  "prod3_title":{"zh":"精密注塑模具","en":"Precision Injection Molds","de":"Präzisionsspritzgießwerkzeuge","ru":"Прецизионные литьевые пресс-формы","fr":"Moules d'injection de précision","ja":"精密射出成形金型","ko":"정밀 사출 금형","es":"Moldes de inyección de precisión"},

  "prod_prod1_desc":{"zh":"硅胶营养液瓶体、注塑瓶盖、分流接头、管路连接件，满足二类医疗器械法规要求","en":"Silicone nutrition bottle bodies, injection-molded caps, diverter connectors, tubing fittings — meeting Class II medical device regulations","de":"Flaschenkörper für Silikon-Nährlösungen, Spritzguss-Verschlusskappen, Verteileranschlüsse, Schlauchverbinder – konform mit Medizinprodukteverordnung Klasse II","ru":"Корпуса флаконов для силиконовых питательных растворов, литьевые крышки, разветвители, трубные соединители – соответствие требованиям для медизделий класса II","fr":"Corps de flacons en silicone pour solutions nutritives, bouchons injectés, raccords de dérivation, connecteurs de tubulure – conformes aux exigences DM classe II","ja":"シリコーン栄養液ボトル本体、射出成形キャップ、分岐コネクタ、チューブ接続部品 – クラスII医療機器規制に対応","ko":"실리콘 영양액 병 본체, 사출 캡, 분기 커넥터, 튜브 연결 부품 – 클래스II 의료기기 규정 충족","es":"Cuerpos de frascos de silicona para soluciones nutritivas, tapas inyectadas, conectores de derivación, conexiones de tubería – cumplen con normativa DM clase II"},

  "prod_prod2_desc":{"zh":"高精度针筒、推杆组件，严格尺寸公差控制与表面光洁度保障","en":"High-precision syringe barrels and plunger assemblies with strict dimensional tolerance and surface finish control","de":"Hochpräzise Spritzenzylinder und Kolbenbaugruppen mit strenger Maßtoleranz und Oberflächengüte","ru":"Высокоточные цилиндры шприцев и поршневые узлы с жестким контролем допусков и качества поверхности","fr":"Corps de seringues et ensembles piston de haute précision avec contrôle strict des tolérances et de l'état de surface","ja":"高精度シリンジバレルおよびプランジャー組立品、厳格な寸法公差と表面仕上げ管理","ko":"고정밀 주사기 배럴 및 플런저 어셈블리, 엄격한 치수 공차 및 표면 조도 관리","es":"Cilindros de jeringa y conjuntos de émbolo de alta precisión con estricto control de tolerancias y acabado superficial"},



  "prod_iq":{"zh":"IQ/OQ/PQ 验证","en":"IQ/OQ/PQ Validation","de":"IQ/OQ/PQ-Validierung","ru":"Валидация IQ/OQ/PQ","fr":"Validation IQ/OQ/PQ","ja":"IQ/OQ/PQ バリデーション","ko":"IQ/OQ/PQ 밸리데이션","es":"Validación IQ/OQ/PQ"},

  "prod_other_title":{"zh":"其他二类器械部件","en":"Other Class II Device Components","de":"Weitere Medizinprodukte-Komponenten Klasse II","ru":"Прочие компоненты для медизделий класса II","fr":"Autres composants pour DM de classe II","ja":"その他クラスII医療機器部品","ko":"기타 클래스II 의료기기 부품","es":"Otros componentes para DM clase II"},

  "prod_other_desc":{"zh":"根据客户需求定制的各类二类医疗器械注塑部件，涵盖外壳、连接器、管路接头等","en":"Customized Class II medical device injection components per customer requirements, covering housings, connectors, tubing fittings, etc.","de":"Kundenspezifische Spritzgussteile für Medizinprodukte Klasse II – Gehäuse, Steckverbinder, Schlauchanschlüsse u.v.m.","ru":"Литьевые компоненты для медицинских изделий класса II по требованиям заказчика: корпуса, соединители, трубные фитинги и др.","fr":"Composants injectés sur mesure pour DM de classe II selon les besoins du client : boîtiers, connecteurs, raccords de tubulure, etc.","ja":"お客様のご要望に応じたクラスII医療機器用カスタム射出部品 – 筐体、コネクタ、チューブ継手など","ko":"고객 요구에 맞춘 클래스II 의료기기용 맞춤형 사출 부품 – 하우징, 커넥터, 튜브 피팅 등","es":"Componentes de inyección personalizados para DM clase II según requisitos del cliente: carcasas, conectores, conexiones de tubería, etc."},

  "prod_custom":{"zh":"支持定制开发","en":"Custom Development Available","de":"Kundenindividuelle Entwicklung möglich","ru":"Возможна индивидуальная разработка","fr":"Développement sur mesure disponible","ja":"カスタム開発対応","ko":"맞춤 개발 가능","es":"Desarrollo personalizado disponible"},



  "iq_iq2":{"zh":"安装确认","en":"Installation Qualification","de":"Installationsqualifizierung (IQ)","ru":"Квалификация установки (IQ)","fr":"Qualification d'installation (IQ)","ja":"据付時適格性評価（IQ）","ko":"설치 적격성 평가 (IQ)","es":"Calificación de instalación (IQ)"},

  "iq_iq2_desc":{"zh":"设备/模具的安装环境、规格、校准状态验证，确保符合设计要求","en":"Verification of equipment/mold installation environment, specifications, and calibration status to ensure compliance with design requirements","de":"Überprüfung von Installationsumgebung, Spezifikationen und Kalibrierstatus der Ausrüstung/Werkzeuge zur Sicherstellung der Konformität mit den Designanforderungen","ru":"Проверка среды установки, спецификаций и состояния калибровки оборудования/пресс-форм для обеспечения соответствия проектным требованиям","fr":"Vérification de l'environnement d'installation, des spécifications et de l'état d'étalonnage des équipements/moules pour garantir la conformité aux exigences de conception","ja":"設備・金型の設置環境、仕様、校正状態を検証し、設計要件への適合を確認","ko":"장비/금형의 설치 환경, 사양, 교정 상태를 검증하여 설계 요구사항 충족 확인","es":"Verificación del entorno de instalación, especificaciones y estado de calibración de equipos/moldes para garantizar el cumplimiento de los requisitos de diseño"},

  "iq_oq2":{"zh":"运行确认","en":"Operational Qualification","de":"Betriebsqualifizierung (OQ)","ru":"Квалификация эксплуатации (OQ)","fr":"Qualification opérationnelle (OQ)","ja":"運転時適格性評価（OQ）","ko":"운전 적격성 평가 (OQ)","es":"Calificación operativa (OQ)"},

  "iq_oq2_desc":{"zh":"在设定工艺参数范围内验证稳定运行，输出一致性合格的中间品","en":"Validation of stable operation within defined process parameter ranges, producing consistently qualified intermediate output","de":"Validierung des stabilen Betriebs innerhalb definierter Prozessparameter – Ausgabe gleichbleibend qualifizierter Zwischenprodukte","ru":"Валидация стабильной работы в заданных диапазонах технологических параметров с выпуском стабильно качественной промежуточной продукции","fr":"Validation du fonctionnement stable dans les plages de paramètres définies, produisant des sorties intermédiaires constamment conformes","ja":"設定されたプロセスパラメータ範囲内での安定稼働を検証し、一貫して適合する中間品を出力","ko":"설정된 공정 매개변수 범위 내에서 안정적인 작동을 검증하고, 일관되게 적합한 중간 출력물을 생산","es":"Validación del funcionamiento estable dentro de los rangos de parámetros de proceso definidos, produciendo resultados intermedios consistentemente calificados"},

  "iq_pq2":{"zh":"性能确认","en":"Performance Qualification","de":"Leistungsqualifizierung (PQ)","ru":"Квалификация производительности (PQ)","fr":"Qualification de performance (PQ)","ja":"性能適格性評価（PQ）","ko":"성능 적격성 평가 (PQ)","es":"Calificación de rendimiento (PQ)"},

  "iq_pq2_desc":{"zh":"连续多批次生产验证，统计证明过程能力满足产品质量标准","en":"Multi-batch continuous production validation, statistically demonstrating process capability meets product quality standards","de":"Mehrchargen-Dauervalidierung mit statistischem Nachweis, dass die Prozessfähigkeit die Produktqualitätsstandards erfüllt","ru":"Валидация непрерывного многосерийного производства со статистическим подтверждением соответствия возможностей процесса стандартам качества продукции","fr":"Validation de production continue sur plusieurs lots, démontrant statistiquement que la capabilité du processus satisfait aux normes de qualité","ja":"複数ロット連続生産バリデーションにより、プロセス能力が製品品質基準を満たすことを統計的に実証","ko":"다중 배치 연속 생산 검증을 통해 공정 능력이 제품 품질 기준을 충족함을 통계적으로 입증","es":"Validación de producción continua de múltiples lotes, demostrando estadísticamente que la capacidad del proceso cumple con los estándares de calidad del producto"},



  "mold_hero":{"zh":"模具中心","en":"Mold Center","de":"Werkzeugbau","ru":"Центр пресс-форм","fr":"Centre de moules","ja":"金型センター","ko":"금형 센터","es":"Centro de moldes"},

  "mold_hero_sub":{"zh":"专注医疗器械精密注塑模具 · 设计 / 制模 / 试模 / 量产 全链路","en":"Focus on precision injection molds for medical devices · Full chain from design / mold-making / molding trials / mass production","de":"Fokus auf Präzisionsspritzgießwerkzeuge für Medizinprodukte · Komplette Kette von Konstruktion / Werkzeugbau / Abmusterung / Serienproduktion","ru":"Специализация на прецизионных литьевых пресс-формах для медицинских изделий · Полный цикл: проектирование / изготовление / испытания / серийное производство","fr":"Spécialisés dans les moules d'injection de précision pour dispositifs médicaux · Chaîne complète: conception / fabrication du moule / essais / production en série","ja":"医療機器向け精密射出成形金型に特化 · 設計／型製作／試作／量産の全工程","ko":"의료기기용 정밀 사출 금형 전문 · 설계·금형 제작·시사출·양산 전 과정","es":"Especialistas en moldes de inyección de precisión para dispositivos médicos · Cadena completa: diseño / fabricación de molde / pruebas / producción en serie"},

  "mold_ability_1_tag":{"zh":"LSR","en":"LSR","de":"LSR","ru":"LSR","fr":"LSR","ja":"LSR","ko":"LSR","es":"LSR"},

  "mold_ability_1_t":{"zh":"液态硅胶模具","en":"Liquid Silicone Rubber Mold","de":"Flüssigsilikon-Werkzeug","ru":"Пресс-форма для жидкого силикона","fr":"Moule en silicone liquide","ja":"液状シリコーン金型","ko":"액상 실리콘 금형","es":"Molde de silicona líquida"},

  "mold_ability_1_s":{"zh":"液态硅胶专用模塑 · 冷流道精密成型","en":"Dedicated LSR molding · Precision cold-runner molding","de":"Flüssigsilikon-Spezialformung · Präzisionsformung mit Kaltkanal","ru":"Специализированное формование жидкого силикона · Прецизионное формование с холодноканальной системой","fr":"Moulage dédié du silicone liquide · Moulage de précision à canaux froids","ja":"液状シリコーン専用成形・コールドランナー精密成形","ko":"액상 실리콘 전용 성형·콜드 러너 정밀 성형","es":"Moldeo dedicado a silicona líquida · Moldeo de precisión con canal frío"},

  "mold_ability_2_tag":{"zh":"2K","en":"2K","de":"2K","ru":"2K","fr":"2K","ja":"2K","ko":"2K","es":"2K"},

  "mold_ability_2_t":{"zh":"双色 · 多色模具","en":"2K · Multi-color Mold","de":"Zwei-/Mehrkomponenten-Werkzeug","ru":"Двух- и многокомпонентная пресс-форма","fr":"Moule bi- et multicolore (2K)","ja":"2色・多色金型","ko":"2색·다색 금형","es":"Molde bicolor y multicolor"},

  "mold_ability_2_s":{"zh":"多物料一次合模 · 简化分步工序","en":"Multi-material in one cycle · Simplified stepwise processes","de":"Mehrkomponenten in einem Zyklus · Reduzierte Einzelschritte","ru":"Многокомпонентное литьё за один цикл · Упрощение пошаговых операций","fr":"Multi-matières en un seul cycle · Simplification des étapes","ja":"多材質を1サイクルで成形・工程の簡略化","ko":"다중 재료 1회 사출·공정 단순화","es":"Multi-material en un solo ciclo · Procesos simplificados"},

  "mold_ability_3_tag":{"zh":"介入 · 植入","en":"Interventional · Implantable","de":"Interventionell · Implantierbar","ru":"Интервенционный · Имплантируемый","fr":"Interventionnel · Implantable","ja":"介入・植込み","ko":"중재·이식용","es":"Intervencional · Implantable"},

  "mold_ability_3_t":{"zh":"精密模具","en":"Precision Mold","de":"Präzisionswerkzeug","ru":"Прецизионная пресс-форма","fr":"Moule de précision","ja":"精密金型","ko":"정밀 금형","es":"Molde de precisión"},

  "mold_ability_3_s":{"zh":"微细镶件型腔 · 医用级洁净制造","en":"Micro insert cavities · Medical-grade clean manufacturing","de":"Mikro-Einsatzhohlräume · Saubere Fertigung in Medizinqualität","ru":"Микро-вставки в полости формы · Чистое производство медицинского класса","fr":"Empreintes à inserts micro · Fabrication propre de qualité médicale","ja":"微細入れ子キャビティ・医療グレードのクリーン製造","ko":"미세 인서트 캐비티·의료용 클린 제조","es":"Cavidades con insertos micro · Fabricación limpia de grado médico"},

  "mold_hero_cta_caps":{"zh":"查看模具能力","en":"View Mold Capabilities","de":"Werkzeugbau-Fähigkeiten ansehen","ru":"Смотреть возможности пресс-форм","fr":"Voir les capacités de moulage","ja":"金型能力を見る","ko":"금형 역량 보기","es":"Ver capacidades de moldes"},

  "mold_hero_cta_contact":{"zh":"获取模具方案","en":"Get Mold Solutions","de":"Mold-Lösungen anfordern","ru":"Получить решение по пресс-формам","fr":"Obtenir une solution de moule","ja":"金型ソリューションを依頼","ko":"금형 솔루션 문의","es":"Solicitar soluciones de molde"},

  "mold_img1_desc":{"zh":"多腔精密注塑模具 — 镜面抛光工艺，HOGU温控系统","en":"Multi-cavity Precision Injection Mold — Mirror-polished with HOGU temperature control system","de":"Mehrkavitäten-Präzisionsspritzgießwerkzeug – Spiegelpolitur mit HOGU-Temperiersystem","ru":"Многогнездная прецизионная литьевая пресс-форма – зеркальная полировка, система термостатирования HOGU","fr":"Moule d'injection de précision multi-empreintes – poli miroir avec système de thermorégulation HOGU","ja":"多数個取り精密射出成形金型 – 鏡面研磨仕上げ、HOGU温調システム","ko":"다중 캐비티 정밀 사출 금형 – 경면 연마, HOGU 온도 제어 시스템","es":"Molde de inyección de precisión multicavidad – pulido espejo con sistema de control de temperatura HOGU"},

  "mold_img2_desc":{"zh":"热流道精密模具 — 多腔设计，独立温控加热模组","en":"Hot Runner Precision Mold — Multi-cavity design with independent thermal control module","de":"Heißkanal-Präzisionswerkzeug – Mehrkavitäten-Design mit unabhängigem Temperiermodul","ru":"Прецизионная пресс-форма с горячеканальной системой – многогнездная конструкция с независимым модулем терморегулирования","fr":"Moule de précision à canaux chauds – conception multi-empreintes avec module de chauffage indépendant","ja":"ホットランナー精密金型 – 多数個取り設計、独立温調ヒーターモジュール","ko":"핫 러너 정밀 금형 – 다중 캐비티 설계, 독립 온도 제어 가열 모듈","es":"Molde de precisión con canal caliente – diseño multicavidad con módulo de calefacción independiente"},

  "mold_img3_desc":{"zh":"液态硅胶 LSR 注塑模具 — 精密型腔，定位框架一体成型","en":"Liquid Silicone Rubber (LSR) Injection Mold — Precision cavity with integrated alignment frame","de":"LSR-Flüssigsilikon-Spritzgießwerkzeug – Präzisionskavität mit integriertem Positionierrahmen","ru":"Пресс-форма для литья жидкого силикона LSR – прецизионная полость с интегрированной установочной рамой","fr":"Moule d'injection de silicone liquide LSR – cavité de précision avec cadre de positionnement intégré","ja":"液状シリコーンLSR射出成形金型 – 精密キャビティ、位置決めフレーム一体成形","ko":"액상 실리콘 LSR 사출 금형 – 정밀 캐비티, 위치 결정 프레임 일체형","es":"Molde de inyección de silicona líquida LSR – cavidad de precisión con marco de alineación integrado"},

  "mold_img4_desc":{"zh":"多腔滑块脱模模具 — Mastip 热流道系统，高光镜面工艺","en":"Multi-cavity Slider Mold — Mastip hot runner system, high-gloss mirror finish","de":"Mehrkavitäten-Schieberwerkzeug – Mastip Heißkanalsystem, Hochglanz-Spiegeloberfläche","ru":"Многогнездная пресс-форма с ползунами – горячеканальная система Mastip, высокоглянцевая зеркальная отделка","fr":"Moule à tiroirs multi-empreintes – système à canaux chauds Mastip, finition miroir haute brillance","ja":"多数個取りスライダー金型 – Mastipホットランナーシステム、高光沢鏡面仕上げ","ko":"다중 캐비티 슬라이더 금형 – Mastip 핫 러너 시스템, 고광택 경면","es":"Molde de corredera multicavidad – sistema de canal caliente Mastip, acabado espejo de alto brillo"},

  "mold_cnc":{"zh":"CNC 数控加工中心（23台）","en":"CNC Machining Centers (23 units)","de":"CNC-Bearbeitungszentren (23 Stk.)","ru":"Обрабатывающие центры с ЧПУ (23 шт.)","fr":"Centres d'usinage CNC (23 unités)","ja":"CNCマシニングセンタ（23台）","ko":"CNC 머시닝 센터 (23대)","es":"Centros de mecanizado CNC (23 unidades)"},

  "mold_edm":{"zh":"EDM 电火花加工（8台）","en":"EDM Machines (8 units)","de":"EDM-Maschinen (8 Stk.)","ru":"Электроэрозионные станки (8 шт.)","fr":"Machines d'électroérosion (8 unités)","ja":"EDM放電加工機（8台）","ko":"EDM 방전 가공기 (8대)","es":"Máquinas de electroerosión (8 unidades)"},

  "mold_wire":{"zh":"线切割（7台）","en":"Wire-Cut EDM (7 units)","de":"Drahterodiermaschinen (7 Stk.)","ru":"Проволочно-вырезные станки (7 шт.)","fr":"Machines de découpe au fil (7 unités)","ja":"ワイヤーカット放電加工機（7台）","ko":"와이어 컷 방전 가공기 (7대)","es":"Máquinas de corte por hilo (7 unidades)"},

  "mold_grinder":{"zh":"精密磨床（9台）","en":"Precision Grinders (9 units)","de":"Präzisionsschleifmaschinen (9 Stk.)","ru":"Прецизионные шлифовальные станки (9 шт.)","fr":"Rectifieuses de précision (9 unités)","ja":"精密研削盤（9台）","ko":"정밀 연삭기 (9대)","es":"Rectificadoras de precisión (9 unidades)"},

  "mold_injection":{"zh":"注塑机（21台）","en":"Injection Molding Machines (21 units)","de":"Spritzgießmaschinen (21 Stk.)","ru":"Термопластавтоматы (21 шт.)","fr":"Machines d'injection (21 unités)","ja":"射出成形機（21台）","ko":"사출 성형기 (21대)","es":"Máquinas de moldeo por inyección (21 unidades)"},

  "mold_qc":{"zh":"品质检测设备（8台）","en":"Quality Inspection Equipment (8 units)","de":"Qualitätsprüfgeräte (8 Stk.)","ru":"Оборудование контроля качества (8 шт.)","fr":"Équipement de contrôle qualité (8 unités)","ja":"品質検査設備（8台）","ko":"품질 검사 장비 (8대)","es":"Equipos de inspección de calidad (8 unidades)"},





  "qual_hero":{"zh":"资质实力","en":"Qualifications","de":"Qualifikationen","ru":"Квалификации","fr":"Qualifications","ja":"認定資格","ko":"인증 및 역량","es":"Certificaciones"},

  "qual_hero_sub":{"zh":"国际标准体系认证 · 净化车间 · 验证能力","en":"International standard certifications · Cleanrooms · Validation capabilities","de":"Internationale Normzertifizierungen · Reinräume · Validierungskompetenz","ru":"Международные сертификаты · Чистые помещения · Возможности валидации","fr":"Certifications internationales · Salles blanches · Capacités de validation","ja":"国際標準認証 · クリーンルーム · バリデーション能力","ko":"국제 표준 인증 · 클린룸 · 밸리데이션 역량","es":"Certificaciones internacionales · Salas limpias · Capacidades de validación"},

  "qual_env_title":{"zh":"生产环境","en":"Production Environment","de":"Produktionsumgebung","ru":"Производственная среда","fr":"Environnement de production","ja":"生産環境","ko":"생산 환경","es":"Entorno de producción"},

  "qual_env_sub":{"zh":"十万级净化车间，满足医疗器械生产要求","en":"Class 100,000 cleanrooms meeting medical device production requirements","de":"Reinräume Klasse 100.000, die die Anforderungen der Medizinproduktefertigung erfüllen","ru":"Чистые помещения класса 100 000, соответствующие требованиям производства медицинских изделий","fr":"Salles blanches classe 100 000 conformes aux exigences de production de dispositifs médicaux","ja":"クラス100,000クリーンルーム、医療機器生産要件に対応","ko":"클래스 100,000 클린룸, 의료기기 생산 요건 충족","es":"Salas limpias clase 100.000 que cumplen con los requisitos de producción de dispositivos médicos"},

  "qual_iq_title":{"zh":"IQ/OQ/PQ 验证体系","en":"IQ/OQ/PQ Validation System","de":"IQ/OQ/PQ-Validierungssystem","ru":"Система валидации IQ/OQ/PQ","fr":"Système de validation IQ/OQ/PQ","ja":"IQ/OQ/PQ バリデーション体系","ko":"IQ/OQ/PQ 밸리데이션 체계","es":"Sistema de validación IQ/OQ/PQ"},



  "qual_eq_kicker":{"zh":"生产设备","en":"Production Equipment","de":"Produktionsanlagen","ru":"Производственное оборудование","fr":"Équipement de production","ja":"生産設備","ko":"생산 설비","es":"Equipo de producción"},
    "qual_eq_title":{"zh":"完备的生产设备","en":"Comprehensive Production Equipment","de":"Umfassende Produktionsanlagen","ru":"Полный парк производственного оборудования","fr":"Équipement de production complet","ja":"充実した生産設備","ko":"완비된 생산 설비","es":"Equipo de producción completo"},
    "qual_eq_sub":{"zh":"覆盖精密加工、注塑成型与检测的全流程设备，点击分类展开明细","en":"Full-process equipment covering precision machining, injection molding and inspection; click a category to expand details","de":"Anlagen für den gesamten Prozess von Präzisionsbearbeitung, Spritzguss bis Prüfung; Klicken Sie auf eine Kategorie für Details","ru":"Оборудование полного цикла: прецизионная обработка, литьё под давлением и контроль; нажмите на категорию для подробностей","fr":"Équipements couvrant tout le processus : usinage de précision, moulage par injection et contrôle ; cliquez sur une catégorie pour les détails","ja":"精密加工・射出成形・検査をカバーする全工程設備。カテゴリをクリックして詳細を表示","ko":"정밀 가공, 사출 성형, 검사를 아우르는 전 공정 설비. 카테고리를 클릭해 상세 보기","es":"Equipamiento de proceso completo que cubre mecanizado de precisión, moldeo por inyección e inspección; haga clic en una categoría para ver los detalles"},
    "news_hero":{"zh":"新闻动态","en":"News","de":"Nachrichten","ru":"Новости","fr":"Actualités","ja":"ニュース","ko":"뉴스","es":"Noticias"},

  "news_hero_sub":{"zh":"公司新闻 · 行业资讯","en":"Company News · Industry Updates","de":"Unternehmensnachrichten · Brancheninformationen","ru":"Новости компании · Отраслевая информация","fr":"Actualités de l'entreprise · Informations sectorielles","ja":"企業ニュース · 業界情報","ko":"회사 뉴스 · 업계 정보","es":"Noticias de la empresa · Información del sector"},



  "ct_hero":{"zh":"联系我们","en":"Contact Us","de":"Kontakt","ru":"Контакты","fr":"Contact","ja":"お問い合わせ","ko":"문의하기","es":"Contacto"},

  "ct_hero_sub":{"zh":"双公司地址 · 欢迎来访洽谈","en":"Dual-company addresses · Welcome to visit and discuss","de":"Zwei Standorte · Wir freuen uns auf Ihren Besuch","ru":"Адреса двух компаний · Приглашаем посетить и обсудить","fr":"Adresses des deux sociétés · Bienvenue pour visiter et discuter","ja":"2社の住所 · ご来訪・ご相談を歓迎します","ko":"양사 주소 · 방문 상담 환영","es":"Direcciones de dos empresas · Bienvenidos a visitar y conversar"},



  "ct_mold_label":{"zh":"模具公司","en":"Mold Company","de":"Werkzeugbau","ru":"Инструментальное производство","fr":"Société d'outillage","ja":"金型会社","ko":"금형 회사","es":"Empresa de moldes"},

  "ct_tech_label":{"zh":"科技公司","en":"Technology Company","de":"Technologieunternehmen","ru":"Технологическая компания","fr":"Société technologique","ja":"テクノロジー企業","ko":"기술 회사","es":"Empresa tecnológica"},

  "ct_phone_label":{"zh":"电话","en":"Phone","de":"Telefon","ru":"Телефон","fr":"Téléphone","ja":"電話","ko":"전화","es":"Teléfono"},

  "ct_email_label":{"zh":"邮箱","en":"Email","de":"E-Mail","ru":"Эл. почта","fr":"E-mail","ja":"メール","ko":"이메일","es":"Correo electrónico"},

  "ct_hours_label":{"zh":"工作时间","en":"Working Hours","de":"Geschäftszeiten","ru":"Часы работы","fr":"Heures d'ouverture","ja":"営業時間","ko":"영업 시간","es":"Horario comercial"},

  "ct_name":{"zh":"姓名","en":"Name","de":"Name","ru":"Имя","fr":"Nom","ja":"氏名","ko":"이름","es":"Nombre"},

  "ct_company_label":{"zh":"公司名称","en":"Company","de":"Unternehmen","ru":"Компания","fr":"Entreprise","ja":"会社名","ko":"회사명","es":"Empresa"},

  "ct_tel_label":{"zh":"联系电话","en":"Phone","de":"Telefon","ru":"Телефон","fr":"Téléphone","ja":"電話番号","ko":"전화번호","es":"Teléfono"},

  "ct_email2_label":{"zh":"电子邮箱","en":"Email","de":"E-Mail","ru":"Эл. почта","fr":"E-mail","ja":"メールアドレス","ko":"이메일","es":"Correo electrónico"},

  "ct_type_label":{"zh":"需求类型","en":"Inquiry Type","de":"Anfragetyp","ru":"Тип запроса","fr":"Type de demande","ja":"お問い合わせ種別","ko":"문의 유형","es":"Tipo de consulta"},

  "ct_type_0":{"zh":"请选择","en":"Please Select","de":"Bitte wählen","ru":"Выберите","fr":"Sélectionnez","ja":"選択してください","ko":"선택하세요","es":"Seleccione"},

  "ct_type_1":{"zh":"医疗器械注塑件","en":"Medical Device Injection Parts","de":"Medizintechnik-Spritzgussteile","ru":"Литьевые детали для медизделий","fr":"Pièces injectées pour dispositifs médicaux","ja":"医療機器用射出部品","ko":"의료기기 사출 부품","es":"Piezas de inyección para dispositivos médicos"},

  "ct_type_2":{"zh":"精密模具制造","en":"Precision Mold Manufacturing","de":"Präzisionswerkzeugbau","ru":"Изготовление прецизионных пресс-форм","fr":"Fabrication de moules de précision","ja":"精密金型製造","ko":"정밀 금형 제조","es":"Fabricación de moldes de precisión"},

  "ct_type_3":{"zh":"模具+注塑一站式","en":"Mold + Injection One-Stop","de":"Werkzeugbau + Spritzguss aus einer Hand","ru":"Пресс-формы + литье под ключ","fr":"Moule + injection clé en main","ja":"金型＋射出成形ワンストップ","ko":"금형+사출 원스톱","es":"Molde + inyección integral"},

  "ct_type_4":{"zh":"其他咨询","en":"Other Inquiries","de":"Sonstige Anfragen","ru":"Прочие запросы","fr":"Autres demandes","ja":"その他お問い合わせ","ko":"기타 문의","es":"Otras consultas"},

  "ct_desc_label":{"zh":"需求描述","en":"Requirements","de":"Anforderungsbeschreibung","ru":"Описание требований","fr":"Description des besoins","ja":"要件説明","ko":"요구 사항 설명","es":"Descripción de requisitos"},

  "ct_submit":{"zh":"提交留言","en":"Submit","de":"Absenden","ru":"Отправить","fr":"Envoyer","ja":"送信","ko":"제출","es":"Enviar"},

  "ct_visit":{"zh":"欢迎来厂参观考察","en":"Welcome to visit our factory","de":"Willkommen zur Werksbesichtigung","ru":"Приглашаем посетить наш завод","fr":"Bienvenue pour visiter notre usine","ja":"工場見学を歓迎します","ko":"공장 방문을 환영합니다","es":"Bienvenidos a visitar nuestra fábrica"},

  "ct_sub_text":{"zh":"如有业务合作需求，请通过电话或邮件与我们联系<br>我们将安排专业团队与您对接","en":"For business cooperation inquiries, please contact us via phone or email<br>We will arrange a professional team to follow up with you","de":"Bei geschäftlichen Kooperationsanfragen kontaktieren Sie uns bitte telefonisch oder per E-Mail<br>Wir stellen ein professionelles Team für Sie bereit","ru":"По вопросам делового сотрудничества свяжитесь с нами по телефону или эл. почте<br>Мы выделим профессиональную команду для работы с вами","fr":"Pour toute demande de coopération, contactez-nous par téléphone ou e-mail<br>Nous mettrons une équipe professionnelle à votre disposition","ja":"業務提携のお問い合わせは、お電話またはメールにてご連絡ください<br>専門チームが対応いたします","ko":"비즈니스 협력 문의는 전화 또는 이메일로 연락 주시기 바랍니다<br>전문 팀이 대응하겠습니다","es":"Para consultas de cooperación comercial, contáctenos por teléfono o correo electrónico<br>Asignaremos un equipo profesional para atenderle"},

  "ct_qr_label":{"zh":"扫码添加企业微信","en":"Scan to add WeCom","de":"QR-Code scannen für WeCom","ru":"Сканируйте QR-код для добавления в WeCom","fr":"Scannez le QR code pour ajouter WeCom","ja":"QRコードをスキャンしてWeComを追加","ko":"QR 코드 스캔하여 위챗 컴 추가","es":"Escanee el código QR para añadir WeCom"},



  "cert_iatf":{"zh":"IATF 16949 汽车行业质量管理体系","en":"IATF 16949 Automotive Quality Management System","de":"IATF 16949 Qualitätsmanagement für die Automobilindustrie","ru":"IATF 16949 Система менеджмента качества для автомобильной промышленности","fr":"IATF 16949 Système de management de la qualité automobile","ja":"IATF 16949 自動車産業品質マネジメントシステム","ko":"IATF 16949 자동차 산업 품질경영시스템","es":"IATF 16949 Sistema de gestión de calidad automotriz"},

  "cert_13485":{"zh":"ISO 13485 医疗器械质量管理体系","en":"ISO 13485 Medical Device Quality Management System","de":"ISO 13485 Qualitätsmanagement für Medizinprodukte","ru":"ISO 13485 Система менеджмента качества медицинских изделий","fr":"ISO 13485 Système de management de la qualité des dispositifs médicaux","ja":"ISO 13485 医療機器品質マネジメントシステム","ko":"ISO 13485 의료기기 품질경영시스템","es":"ISO 13485 Sistema de gestión de calidad de dispositivos médicos"},

  "cert_9001":{"zh":"ISO 9001 质量管理体系","en":"ISO 9001 Quality Management System","de":"ISO 9001 Qualitätsmanagementsystem","ru":"ISO 9001 Система менеджмента качества","fr":"ISO 9001 Système de management de la qualité","ja":"ISO 9001 品質マネジメントシステム","ko":"ISO 9001 품질경영시스템","es":"ISO 9001 Sistema de gestión de calidad"},



  "ct_mold_name":{"zh":"弘欧精密模具（东莞）有限公司","en":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","de":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","ru":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","fr":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","ja":"弘欧精密模具（東莞）有限公司","ko":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","es":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd."},

  "ct_tech_name":{"zh":"弘欧科技（东莞）有限公司","en":"HONDVO Technology (Dongguan) Co., Ltd.","de":"HONDVO Technology (Dongguan) Co., Ltd.","ru":"HONDVO Technology (Dongguan) Co., Ltd.","fr":"HONDVO Technology (Dongguan) Co., Ltd.","ja":"弘欧科技（東莞）有限公司","ko":"HONDVO Technology (Dongguan) Co., Ltd.","es":"HONDVO Technology (Dongguan) Co., Ltd."},

  "ct_mold_addr":{"zh":"中国广东省东莞市长安镇上沙社区中南中路博业工业园84号","en":"Boyes Industrial Park, 84# Zhong Nan Zhong Road, Shang Sha Community, Chang'an Town, Dongguan City, Guangdong Province, China","de":"Boyes Industriepark, Nr. 84 Zhong Nan Zhong Road, Shang Sha Gemeinde, Stadt Chang'an, Stadt Dongguan, Provinz Guangdong, China","ru":"Промышленный парк Бойес, №84 Чжун Нань Чжун Роуд, район Шанша, поселок Чанъань, город Дунгуань, провинция Гуандун, Китай","fr":"Parc industriel Boyes, 84 Zhong Nan Zhong Road, Communauté Shang Sha, Bourg de Chang'an, Ville de Dongguan, Province du Guangdong, Chine","ja":"中国広東省東莞市長安鎮上沙社区中南中路博業工業団地84号","ko":"중국 광둥성 둥관시 창안진 상사 커뮤니티 중난중로 보예 공업단지 84호","es":"Parque Industrial Boyes, 84# Zhong Nan Zhong Road, Comunidad Shang Sha, Pueblo de Chang'an, Ciudad de Dongguan, Provincia de Guangdong, China"},

  "ct_tech_addr":{"zh":"中国广东省东莞市长安镇长安建安路790号2栋2单元301室","en":"Room 301, Unit 2, Building 2, 790 Chang'an Jian'an Road, Chang'an Town, Dongguan, Guangdong Province, China","de":"Raum 301, Einheit 2, Gebäude 2, Nr. 790 Chang'an Jian'an Road, Stadt Chang'an, Stadt Dongguan, Provinz Guangdong, China","ru":"Комната 301, корпус 2, строение 2, №790 Чанъань Цзяньань Роуд, поселок Чанъань, город Дунгуань, провинция Гуандун, Китай","fr":"Salle 301, Unité 2, Bâtiment 2, 790 Chang'an Jian'an Road, Bourg de Chang'an, Ville de Dongguan, Province du Guangdong, Chine","ja":"中国広東省東莞市長安鎮長安建安路790号2棟2単元301室","ko":"중국 광둥성 둥관시 창안진 창안젠안루 790호 2동 2유닛 301호","es":"Sala 301, Unidad 2, Edificio 2, 790 Chang'an Jian'an Road, Pueblo de Chang'an, Ciudad de Dongguan, Provincia de Guangdong, China"},

  "ct_hours_val":{"zh":"周一至周五 8:00 - 17:30","en":"Mon - Fri 8:00 - 17:30","de":"Mo - Fr 8:00 - 17:30","ru":"Пн - Пт 8:00 - 17:30","fr":"Lun - Ven 8:00 - 17:30","ja":"月〜金 8:00 - 17:30","ko":"월~금 8:00 - 17:30","es":"Lun - Vie 8:00 - 17:30"},

  "ct_placeholder_name":{"zh":"您的姓名","en":"Your Name","de":"Ihr Name","ru":"Ваше имя","fr":"Votre nom","ja":"お名前","ko":"이름","es":"Su nombre"},

  "ct_placeholder_company":{"zh":"您的公司名称","en":"Your Company Name","de":"Ihr Unternehmen","ru":"Ваша компания","fr":"Votre entreprise","ja":"会社名","ko":"회사명","es":"Su empresa"},

  "ct_placeholder_phone":{"zh":"您的联系电话","en":"Your Phone Number","de":"Ihre Telefonnummer","ru":"Ваш телефон","fr":"Votre téléphone","ja":"電話番号","ko":"전화번호","es":"Su teléfono"},

  "ct_placeholder_email":{"zh":"您的电子邮箱","en":"Your Email","de":"Ihre E-Mail","ru":"Ваш email","fr":"Votre e-mail","ja":"メールアドレス","ko":"이메일","es":"Su correo electrónico"},

  "ct_placeholder_desc":{"zh":"请描述您的产品需求、技术要求、预期数量等信息","en":"Please describe your product requirements, technical specifications, expected quantities, etc.","de":"Bitte beschreiben Sie Ihre Produktanforderungen, technischen Spezifikationen, erwarteten Mengen usw.","ru":"Опишите ваши требования к продукции, технические спецификации, ожидаемые объемы и т.д.","fr":"Veuillez décrire vos exigences produits, spécifications techniques, quantités prévues, etc.","ja":"製品要件、技術仕様、予定数量などをご記入ください","ko":"제품 요구사항, 기술 사양, 예상 수량 등을 설명해 주세요","es":"Describa los requisitos del producto, especificaciones técnicas, cantidades previstas, etc."},



  "search_placeholder":{"zh":"搜索产品、服务、资质…","en":"Search products, services, qualifications…","de":"Produkte, Dienstleistungen, Zertifizierungen suchen…","ru":"Поиск продукции, услуг, квалификаций…","fr":"Rechercher produits, services, qualifications…","ja":"製品、サービス、資格を検索…","ko":"제품, 서비스, 자격 검색…","es":"Buscar productos, servicios, calificaciones…"},

  "search_aria_label":{"zh":"搜索关键词","en":"Search keywords","de":"Suchbegriffe","ru":"Ключевые слова поиска","fr":"Mots-clés de recherche","ja":"検索キーワード","ko":"검색 키워드","es":"Palabras clave de búsqueda"},

  "search_close_aria":{"zh":"关闭搜索","en":"Close search","de":"Suche schließen","ru":"Закрыть поиск","fr":"Fermer la recherche","ja":"検索を閉じる","ko":"검색 닫기","es":"Cerrar búsqueda"},

  "search_no_results":{"zh":"未找到与“{{q}}”相关的内容","en":"No results found for “{{q}}”","de":"Keine Ergebnisse für „{{q}}“","ru":"Ничего не найдено по запросу «{{q}}»","fr":"Aucun résultat pour « {{q}} »","ja":"「{{q}}」の検索結果は見つかりませんでした","ko":"“{{q}}”에 대한 검색 결과가 없습니다","es":"No se encontraron resultados para “{{q}}”"},



  "news_tag_company":{"zh":"公司新闻","en":"Company News","de":"Unternehmensnachrichten","ru":"Новости компании","fr":"Actualités de l'entreprise","ja":"企業ニュース","ko":"회사 뉴스","es":"Noticias de la empresa"},

  "news_tag_industry":{"zh":"行业资讯","en":"Industry News","de":"Brancheninformationen","ru":"Отраслевые новости","fr":"Informations sectorielles","ja":"業界情報","ko":"업계 정보","es":"Información del sector"},

  "news_title_1":{"zh":"弘欧科技通过 ISO 13485 年度监督审核","en":"HONDVO Technology Passed ISO 13485 Annual Surveillance Audit","de":"HONDVO Technology hat das jährliche ISO 13485-Überwachungsaudit bestanden","ru":"HONDVO Technology успешно прошла ежегодный надзорный аудит ISO 13485","fr":"HONDVO Technology a réussi l'audit annuel de surveillance ISO 13485","ja":"弘欧科技、ISO 13485年次サーベイランス審査に合格","ko":"HONDVO Technology, ISO 13485 연간 감시 심사 통과","es":"HONDVO Technology superó la auditoría anual de vigilancia ISO 13485"},

  "news_title_2":{"zh":"新增两台 TOYO CS-230 全电动注塑机投入生产","en":"Two New TOYO CS-230 All-Electric Injection Machines Put into Production","de":"Zwei neue vollelektrische TOYO CS-230 Spritzgießmaschinen in Produktion genommen","ru":"Два новых полностью электрических термопластавтомата TOYO CS-230 запущены в производство","fr":"Deux nouvelles machines d'injection tout électrique TOYO CS-230 mises en production","ja":"新型TOYO CS-230全電動射出成形機2台が生産稼働開始","ko":"TOYO CS-230 전동식 사출 성형기 2대 신규 생산 투입","es":"Dos nuevas máquinas de inyección totalmente eléctricas TOYO CS-230 puestas en producción"},

  "news_title_3":{"zh":"公司参加 2026 中国国际医疗器械博览会（CMEF）","en":"HONDVO Showcases at CMEF 2026 China International Medical Equipment Fair","de":"HONDVO stellt auf der CMEF 2026 – China International Medical Equipment Fair aus","ru":"HONDVO представляет продукцию на CMEF 2026 – Китайской международной выставке медицинского оборудования","fr":"HONDVO expose à la CMEF 2026 – Foire internationale chinoise de l'équipement médical","ja":"CMEF 2026 中国国際医療機器博覧会に出展","ko":"CMEF 2026 중국 국제 의료기기 박람회 참가","es":"HONDVO se presenta en CMEF 2026 – Feria Internacional China de Equipamiento Médico"},

  "news_title_4":{"zh":"瑞士 Hauser S35 坐标磨完成安装调试","en":"Swiss Hauser S35 Jig Grinder Installation & Commissioning Completed","de":"Installation und Inbetriebnahme der Schweizer Hauser S35 Koordinatenschleifmaschine abgeschlossen","ru":"Завершены установка и пусконаладка швейцарского координатно-шлифовального станка Hauser S35","fr":"Installation et mise en service de la rectifieuse à coordonnées suisse Hauser S35 terminées","ja":"スイスHauser S35ジグ研削盤の設置・調整が完了","ko":"스위스 Hauser S35 지그 연삭기 설치 및 시운전 완료","es":"Instalación y puesta en marcha de la rectificadora de coordenadas suiza Hauser S35 completada"},

  "news_summary_1":{"zh":"近日，弘欧科技顺利通过 ISO 13485 医疗器械质量管理体系年度监督审核，审核范围覆盖注塑件生产全过程。","en":"HONDVO Technology has successfully passed the ISO 13485 medical device quality management system annual surveillance audit, covering the entire injection molding production process.","de":"HONDVO Technology hat das jährliche ISO 13485-Überwachungsaudit für Qualitätsmanagement bei Medizinprodukten erfolgreich bestanden – der Auditumfang deckte den gesamten Spritzgießprozess ab.","ru":"HONDVO Technology успешно прошла ежегодный надзорный аудит системы менеджмента качества медицинских изделий ISO 13485, охвативший весь процесс литьевого производства.","fr":"HONDVO Technology a réussi l'audit annuel de surveillance ISO 13485 du système de management de la qualité des dispositifs médicaux, couvrant l'ensemble du processus de production par injection.","ja":"このたび弘欧科技は、ISO 13485医療機器品質マネジメントシステムの年次サーベイランス審査に合格しました。審査範囲は射出成形品の生産全工程をカバーしています。","ko":"최근 HONDVO Technology는 ISO 13485 의료기기 품질경영시스템 연간 감시 심사를 성공적으로 통과했습니다. 심사 범위는 사출 성형품 생산 전 공정을 포함합니다.","es":"HONDVO Technology ha superado con éxito la auditoría anual de vigilancia del sistema de gestión de calidad de dispositivos médicos ISO 13485, cubriendo todo el proceso de producción de inyección."},

  "news_summary_2":{"zh":"为满足医疗器械客户日益增长的订单需求，公司新引进两台日本 TOYO CS-230 全电动注塑机，已正式投入十万级净化车间运行。","en":"To meet the growing order demands from medical device clients, the company has introduced two new Japanese TOYO CS-230 all-electric injection machines, now officially operating in the Class 100,000 cleanroom.","de":"Um die wachsende Nachfrage von Medizintechnikkunden zu bedienen, hat das Unternehmen zwei neue vollelektrische TOYO CS-230 Spritzgießmaschinen aus Japan installiert, die jetzt im Reinraum Klasse 100.000 in Betrieb sind.","ru":"Для удовлетворения растущего спроса клиентов в сфере медицинских изделий компания установила два новых полностью электрических термопластавтомата TOYO CS-230 (Япония), которые уже введены в эксплуатацию в чистом помещении класса 100 000.","fr":"Pour répondre à la demande croissante des clients DM, l'entreprise a installé deux nouvelles machines d'injection tout électrique TOYO CS-230 (Japon), désormais opérationnelles en salle blanche classe 100 000.","ja":"医療機器顧客の増加する受注需要に応えるため、日本製TOYO CS-230全電動射出成形機2台を新たに導入し、クラス100,000クリーンルームでの稼働を開始しました。","ko":"의료기기 고객의 증가하는 주문 수요에 대응하기 위해 일본 TOYO CS-230 전동식 사출 성형기 2대를 신규 도입하여 클래스 100,000 클린룸에서 정식 가동 중입니다.","es":"Para satisfacer la creciente demanda de pedidos de clientes de dispositivos médicos, la empresa ha incorporado dos nuevas máquinas de inyección totalmente eléctricas TOYO CS-230 japonesas, ya operativas en la sala limpia clase 100.000."},

  "news_summary_3":{"zh":"弘欧科技携肠内营养输注系统、注射给药系统等核心产品亮相 CMEF 2026，与多家国内外医疗器械企业达成合作意向。","en":"HONDVO Technology showcased its core products including enteral nutrition infusion systems and injection drug delivery systems at CMEF 2026, reaching cooperation intentions with multiple domestic and international medical device companies.","de":"HONDVO Technology präsentierte auf der CMEF 2026 Kernprodukte wie enterale Ernährungssysteme und Injektionssysteme und erzielte Kooperationsabsichten mit mehreren in- und ausländischen Medizintechnikunternehmen.","ru":"HONDVO Technology представила на CMEF 2026 основные продукты, включая системы энтерального питания и инъекционные системы, достигнув договоренностей о сотрудничестве с рядом отечественных и зарубежных компаний.","fr":"HONDVO Technology a présenté à la CMEF 2026 ses produits phares – systèmes de nutrition entérale et systèmes d'injection – et a établi des intentions de coopération avec plusieurs entreprises nationales et internationales.","ja":"弘欧科技はCMEF 2026にて経腸栄養注入システム、注射薬物送達システムなどの主力製品を出展し、国内外の多くの医療機器企業と協業意向を達成しました。","ko":"HONDVO Technology는 CMEF 2026에서 경장 영양 주입 시스템, 주사 약물 전달 시스템 등 주요 제품을 선보이며 다수의 국내외 의료기기 기업과 협력 의향을 체결했습니다.","es":"HONDVO Technology presentó en CMEF 2026 sus productos principales, incluyendo sistemas de nutrición enteral y sistemas de administración de fármacos por inyección, alcanzando intenciones de cooperación con múltiples empresas nacionales e internacionales."},

  "news_summary_4":{"zh":"精度达到 0.001mm 的 Hauser S35 坐标磨在模具车间完成安装调试，进一步提升了精密模具的加工能力。","en":"The Hauser S35 jig grinder with 0.001mm precision has completed installation and commissioning in the mold workshop, further enhancing precision mold manufacturing capabilities.","de":"Die Hauser S35 Koordinatenschleifmaschine mit 0,001 mm Genauigkeit wurde im Werkzeugbau installiert und in Betrieb genommen, wodurch die Präzisionswerkzeug-Fertigungskapazität weiter gesteigert wurde.","ru":"Координатно-шлифовальный станок Hauser S35 с точностью 0,001 мм завершил установку и наладку в инструментальном цехе, дополнительно повысив возможности изготовления прецизионных пресс-форм.","fr":"La rectifieuse à coordonnées Hauser S35 d'une précision de 0,001 mm a terminé son installation et sa mise en service dans l'atelier de moules, améliorant encore les capacités de fabrication de moules de précision.","ja":"精度0.001mmのHauser S35ジグ研削盤が金型工場での設置・調整を完了し、精密金型の加工能力をさらに向上させました。","ko":"정밀도 0.001mm의 Hauser S35 지그 연삭기가 금형 작업장에 설치 및 시운전을 완료하여 정밀 금형 가공 역량을 한층 강화했습니다.","es":"La rectificadora de coordenadas Hauser S35 con precisión de 0,001 mm ha completado su instalación y puesta en marcha en el taller de moldes, mejorando aún más la capacidad de fabricación de moldes de precisión."},



  "news_title_5":{"zh":"弘欧精密模具通过 IATF 16949 换证审核","en":"HONDVO TOOLING Passed IATF 16949 Recertification Audit","de":"HONDVO TOOLING hat das IATF 16949-Rezertifizierungsaudit bestanden","ru":"HONDVO TOOLING успешно прошла ресертификационный аудит IATF 16949","fr":"HONDVO TOOLING a réussi l'audit de recertification IATF 16949","ja":"弘欧精密模具、IATF 16949更新審査に合格","ko":"HONDVO TOOLING, IATF 16949 갱신 심사 통과","es":"HONDVO TOOLING superó la auditoría de recertificación IATF 16949"},

  "news_summary_5":{"zh":"弘欧精密模具顺利通过 IATF 16949 汽车行业质量管理体系换证审核，体系运行有效性获审核组高度评价，持续满足汽车供应链严苛要求。","en":"HONDVO TOOLING successfully passed the IATF 16949 automotive quality management system recertification audit. System effectiveness was highly praised by auditors, continuing to meet stringent automotive supply chain requirements.","de":"HONDVO TOOLING hat das IATF 16949-Rezertifizierungsaudit für Qualitätsmanagement in der Automobilindustrie erfolgreich bestanden. Die Wirksamkeit des Systems wurde vom Auditteam hoch bewertet; die strengen Anforderungen der automobilen Lieferkette werden weiterhin erfüllt.","ru":"HONDVO TOOLING успешно прошла ресертификационный аудит системы менеджмента качества IATF 16949 для автомобильной промышленности. Эффективность системы получила высокую оценку аудиторов; строгие требования автомобильной цепочки поставок продолжают выполняться.","fr":"HONDVO TOOLING a réussi l'audit de recertification IATF 16949 pour le SMQ automobile. L'efficacité du système a été hautement appréciée par les auditeurs, continuant à satisfaire aux exigences strictes de la chaîne d'approvisionnement automobile.","ja":"弘欧精密模具はIATF 16949自動車産業品質マネジメントシステムの更新審査に合格しました。システムの有効性について審査チームから高い評価を受け、自動車サプライチェーンの厳格な要求事項を継続的に満たしています。","ko":"HONDVO TOOLING은 IATF 16949 자동차 산업 품질경영시스템 갱신 심사를 성공적으로 통과했습니다. 시스템 운영의 유효성은 심사팀으로부터 높은 평가를 받았으며, 자동차 공급망의 엄격한 요구사항을 지속적으로 충족하고 있습니다.","es":"HONDVO TOOLING superó con éxito la auditoría de recertificación del sistema de gestión de calidad automotriz IATF 16949. La eficacia del sistema fue altamente valorada por los auditores, cumpliendo continuamente con los estrictos requisitos de la cadena de suministro automotriz."},

  "news_title_6":{"zh":"十万级净化车间通过国际客户年度现场审计","en":"Class 100K Cleanroom Passed International Client Annual On-Site Audit","de":"Reinraum Klasse 100.000 hat jährliches Vor-Ort-Audit eines internationalen Kunden bestanden","ru":"Чистое помещение класса 100 000 прошло ежегодный выездной аудит международного клиента","fr":"La salle blanche classe 100 000 a réussi l'audit annuel sur site d'un client international","ja":"クラス100,000クリーンルームが国際顧客の年次現地監査に合格","ko":"클래스 100,000 클린룸, 국제 고객 연간 현장 심사 통과","es":"La sala limpia clase 100.000 superó la auditoría anual in situ de un cliente internacional"},

  "news_summary_6":{"zh":"公司十万级净化车间顺利通过欧洲医疗器械客户年度现场审计，涵盖洁净度控制、人员操作规范、批次追溯全流程，获得客户免整改通过的优异评价。","en":"The Class 100,000 cleanroom successfully passed the annual on-site audit by a European medical device client, covering cleanliness control, SOP compliance, and batch traceability. Achieved excellent assessment with zero corrective actions required.","de":"Der Reinraum Klasse 100.000 hat das jährliche Vor-Ort-Audit eines europäischen Medizintechnikkunden erfolgreich bestanden – einschließlich Reinheitskontrolle, Personalverfahren und Chargenrückverfolgbarkeit – mit ausgezeichneter Bewertung ohne Korrekturmaßnahmen.","ru":"Чистое помещение класса 100 000 успешно прошло ежегодный выездной аудит европейского клиента в сфере медицинских изделий, включая контроль чистоты, соблюдение процедур и прослеживаемость партий, получив отличную оценку без необходимости корректирующих действий.","fr":"La salle blanche classe 100 000 a réussi l'audit annuel sur site d'un client européen du DM, couvrant le contrôle de la propreté, les procédures opérationnelles et la traçabilité des lots, avec une excellente évaluation sans actions correctives requises.","ja":"クラス100,000クリーンルームが欧州医療機器顧客の年次現地監査に合格しました。清浄度管理、作業手順遵守、ロットトレーサビリティの全工程が審査され、是正措置不要の優秀評価を獲得しました。","ko":"클래스 100,000 클린룸이 유럽 의료기기 고객의 연간 현장 심사를 성공적으로 통과했습니다. 청정도 관리, 작업자 운영 규정, 배치 추적성 전 과정을 포함하여 시정 조치 없는 우수 평가를 받았습니다.","es":"La sala limpia clase 100.000 superó con éxito la auditoría anual in situ de un cliente europeo de dispositivos médicos, cubriendo control de limpieza, procedimientos operativos y trazabilidad de lotes, obteniendo una calificación excelente sin acciones correctivas requeridas."},

  "news_title_7":{"zh":"模具中心新增德国 RODERS 高速加工中心完成交付","en":"New German RODERS High-Speed Machining Center Delivered to Mold Center","de":"Neues deutsches RODERS Hochgeschwindigkeits-Bearbeitungszentrum an den Werkzeugbau geliefert","ru":"Новый немецкий высокоскоростной обрабатывающий центр RODERS поставлен в инструментальный центр","fr":"Nouveau centre d'usinage grande vitesse allemand RODERS livré au centre de moules","ja":"ドイツRODERS高速マシニングセンタを金型センターに新規導入","ko":"독일 RODERS 고속 머시닝 센터, 금형 센터에 신규 도입 완료","es":"Nuevo centro de mecanizado de alta velocidad alemán RODERS entregado al centro de moldes"},

  "news_summary_7":{"zh":"继 Hauser S35 坐标磨后，模具中心再添重量级设备——德国 RODERS RXP 500 DCS 高速加工中心完成安装验收，模具加工精度与效率实现双提升。","en":"Following the Hauser S35 jig grinder, the mold center adds another major equipment — a German RODERS RXP 500 DCS high-speed machining center has completed installation and acceptance, achieving dual improvements in mold machining precision and efficiency.","de":"Nach der Hauser S35 Koordinatenschleifmaschine erhält der Werkzeugbau eine weitere bedeutende Anlage – ein deutsches RODERS RXP 500 DCS Hochgeschwindigkeits-Bearbeitungszentrum wurde installiert und abgenommen, was sowohl Präzision als auch Effizienz im Werkzeugbau steigert.","ru":"Вслед за координатно-шлифовальным станком Hauser S35 инструментальный центр пополнился еще одной важной единицей – немецкий высокоскоростной обрабатывающий центр RODERS RXP 500 DCS завершил установку и приемку, обеспечив двойное повышение точности и эффективности обработки пресс-форм.","fr":"Après la rectifieuse Hauser S35, le centre de moules s'enrichit d'un équipement majeur – un centre d'usinage grande vitesse allemand RODERS RXP 500 DCS installé et réceptionné, offrant une double amélioration de la précision et de l'efficacité d'usinage des moules.","ja":"Hauser S35ジグ研削盤に続き、金型センターに独RODERS RXP 500 DCS高速マシニングセンタが新たに導入され、設置検収を完了しました。金型加工の精度と効率がともに向上しています。","ko":"Hauser S35 지그 연삭기에 이어 금형 센터에 독일 RODERS RXP 500 DCS 고속 머시닝 센터가 추가 도입되어 설치 및 검수를 완료했습니다. 금형 가공 정밀도와 효율성을 동시에 향상시켰습니다.","es":"Tras la rectificadora Hauser S35, el centro de moldes suma otro equipo de primer nivel: un centro de mecanizado de alta velocidad alemán RODERS RXP 500 DCS ha completado su instalación y aceptación, logrando una doble mejora en precisión y eficiencia de mecanizado de moldes."},



  "prod_lsr_title":{"zh":"LSR 液体硅胶产品","en":"LSR Liquid Silicone Products","de":"LSR Flüssigsilikonprodukte","ru":"Изделия из жидкого силикона LSR","fr":"Produits en silicone liquide LSR","ja":"LSR液状シリコーン製品","ko":"LSR 액상 실리콘 제품","es":"Productos de silicona líquida LSR"},

  "prod_lsr_desc":{"zh":"涵盖医疗级液体硅胶注塑产品，满足生物相容性要求","en":"Medical-grade liquid silicone injection products meeting biocompatibility requirements","de":"Medizinische Flüssigsilikon-Spritzgießprodukte, die Biokompatibilitätsanforderungen erfüllen","ru":"Медицинские изделия из жидкого силикона, соответствующие требованиям биосовместимости","fr":"Produits d'injection de silicone liquide de qualité médicale, conformes aux exigences de biocompatibilité","ja":"生体適合性要件を満たす医療グレード液状シリコーン射出製品","ko":"생체 적합성 요건을 충족하는 의료 등급 액상 실리콘 사출 제품","es":"Productos de inyección de silicona líquida de grado médico que cumplen con los requisitos de biocompatibilidad"},

  "prod_lsr_item1":{"zh":"硅胶面罩","en":"Silicone Mask","de":"Silikonmaske","ru":"Силиконовая маска","fr":"Masque en silicone","ja":"シリコーンマスク","ko":"실리콘 마스크","es":"Mascarilla de silicona"},

  "prod_lsr_item2":{"zh":"硅胶密封件","en":"Silicone Seals","de":"Silikondichtungen","ru":"Силиконовые уплотнения","fr":"Joints en silicone","ja":"シリコーンシール","ko":"실리콘 씰","es":"Juntas de silicona"},

  "prod_lsr_item3":{"zh":"硅胶管路","en":"Silicone Tubing","de":"Silikonschläuche","ru":"Силиконовые трубки","fr":"Tubulures en silicone","ja":"シリコーンチューブ","ko":"실리콘 튜브","es":"Tuberías de silicona"},

  "prod_lsr_item4":{"zh":"硅胶护套","en":"Silicone Sheath","de":"Silikonummantelung","ru":"Силиконовая оболочка","fr":"Gaine en silicone","ja":"シリコーンシース","ko":"실리콘 시스","es":"Funda de silicona"},

    "prod_tag_grade":{"zh":"医疗级","en":"Medical Grade","de":"Medizinische Qualität","ru":"Медицинский класс","fr":"Qualité médicale","ja":"医療グレード","ko":"의료 등급","es":"Grado médico"},

  "prod_tag_heat":{"zh":"耐高温","en":"Heat Resistant","de":"Hitzebeständig","ru":"Термостойкий","fr":"Résistant à la chaleur","ja":"耐高温","ko":"내열","es":"Resistente al calor"},

  "prod_tag_clear":{"zh":"透明","en":"Transparent","de":"Transparent","ru":"Прозрачный","fr":"Transparent","ja":"透明","ko":"투명","es":"Transparente"},

  "prod_tag_bio":{"zh":"生物相容","en":"Biocompatible","de":"Biokompatibel","ru":"Биосовместимый","fr":"Biocompatible","ja":"生体適合性","ko":"생체적합성","es":"Biocompatible"},

  "prod_tag_precision":{"zh":"精密","en":"Precision","de":"Präzision","ru":"Прецизионный","fr":"Précision","ja":"精密","ko":"정밀","es":"Precisión"},

  "prod_tag_custom":{"zh":"定制","en":"Custom","de":"Maßgeschneidert","ru":"Индивидуальный","fr":"Personnalisé","ja":"カスタム","ko":"맞춤","es":"Personalizado"},

  "prod_tag_dual":{"zh":"双色","en":"Dual-color","de":"Zweifarbig","ru":"Двухцветный","fr":"Bicolore","ja":"2色","ko":"투컬러","es":"Bicolor"},

  "prod_tag_overmold":{"zh":"包胶","en":"Overmold","de":"Umspritzen","ru":"Литье с оболочкой","fr":"Surmoulage","ja":"オーバーモールド","ko":"오버몰드","es":"Sobremoldeo"},

  "prod_tag_multicolor":{"zh":"多色","en":"Multi-color","de":"Mehrfarbig","ru":"Многоцветный","fr":"Multicolore","ja":"多色","ko":"다색","es":"Multicolor"},

  "prod_tag_soft_hard":{"zh":"软硬胶","en":"Soft/Hard","de":"Weich/Hart","ru":"Мягкий/жёсткий","fr":"Souple/Rigide","ja":"軟質/硬質","ko":"연질/경질","es":"Blando/Duro"},

  "prod_tag_integral":{"zh":"一体","en":"Integral","de":"Integral","ru":"Цельный","fr":"Intégral","ja":"一体","ko":"일체형","es":"Integral"},

  "prod_tag_insert":{"zh":"嵌件","en":"Insert","de":"Einsatz","ru":"Вставка","fr":"Insert","ja":"インサート","ko":"인서트","es":"Inserto"},

  "about_cases_title":{zh:"客户案例",en:"Customer Case Studies",de:"Kundenreferenzen",ru:"Кейсы клиентов",fr:"Études de cas",ja:"導入事例",ko:"고객 사례",es:"Casos de clientes"},

  "about_cases_sub":{zh:"医疗器械各领域真实交付案例，详情待补充",en:"Real delivery stories across medical segments — details to be supplemented",de:"Real delivery stories across medical segments — details to be supplemented",ru:"Real delivery stories across medical segments — details to be supplemented",fr:"Real delivery stories across medical segments — details to be supplemented",ja:"Real delivery stories across medical segments — details to be supplemented",ko:"Real delivery stories across medical segments — details to be supplemented",es:"Real delivery stories across medical segments — details to be supplemented"},

  "about_team_title":{zh:"我们的团队",en:"Our Team",de:"Unser Team",ru:"Наша команда",fr:"Notre équipe",ja:"私たちのチーム",ko:"우리의 팀",es:"Nuestro equipo"},

  "about_team_sub":{zh:"经验丰富的工程师与制造专家，详情待补充",en:"Experienced engineers and manufacturing specialists — details to be supplemented",de:"Experienced engineers and manufacturing specialists — details to be supplemented",ru:"Experienced engineers and manufacturing specialists — details to be supplemented",fr:"Experienced engineers and manufacturing specialists — details to be supplemented",ja:"Experienced engineers and manufacturing specialists — details to be supplemented",ko:"Experienced engineers and manufacturing specialists — details to be supplemented",es:"Experienced engineers and manufacturing specialists — details to be supplemented"},

  "about_dd_cases":{zh:"客户案例",en:"Case Studies",de:"Referenzen",ru:"Кейсы",fr:"Études de cas",ja:"事例",ko:"사례",es:"Casos"},

  "about_dd_team":{zh:"团队",en:"Our Team",de:"Team",ru:"Команда",fr:"Équipe",ja:"チーム",ko:"팀",es:"Equipo"},

  "ft_about_cases":{zh:"客户案例",en:"Case Studies",de:"Referenzen",ru:"Кейсы",fr:"Études de cas",ja:"事例",ko:"사례",es:"Casos"},

  "ft_about_team":{zh:"团队",en:"Our Team",de:"Team",ru:"Команда",fr:"Équipe",ja:"チーム",ko:"팀",es:"Equipo"},

  "case_ch_label":{zh:"挑战",en:"Challenge",de:"Herausforderung",ru:"Задача",fr:"Défi",ja:"課題",ko:"과제",es:"Reto"},

  "case_sol_label":{zh:"方案",en:"Solution",de:"Lösung",ru:"Решение",fr:"Solution",ja:"解決策",ko:"솔루션",es:"Solución"},

  "case_res_label":{zh:"成果",en:"Result",de:"Ergebnis",ru:"Результат",fr:"Résultat",ja:"成果",ko:"성과",es:"Resultado"},

  "case_c1_industry":{zh:"体外诊断",en:"IVD",de:"IVD",ru:"IVD",fr:"IVD",ja:"IVD",ko:"IVD",es:"IVD"},

  "case_c1_title":{zh:"微流控芯片量产",en:"Microfluidic Chip Mass Production",de:"Microfluidic Chip Mass Production",ru:"Microfluidic Chip Mass Production",fr:"Microfluidic Chip Mass Production",ja:"Microfluidic Chip Mass Production",ko:"Microfluidic Chip Mass Production",es:"Microfluidic Chip Mass Production"},

  "case_c1_challenge":{zh:"（案例详情整理中，敬请期待）",en:"Case details to be added",de:"Fallstudie folgt",ru:"Детали кейса готовятся",fr:"Étude de cas à venir",ja:"事例詳細準備中",ko:"사례 상세 준비 중",es:"Caso en preparación"},

  "case_c1_solution":{zh:"（交付方案整理中，敬请期待）",en:"Delivery approach to be added",de:"Lösungsansatz folgt",ru:"Подход готовится",fr:"Approche à venir",ja:"提供手法準備中",ko:"제공 방식 준비 중",es:"Enfoque en preparación"},

  "case_c1_result":{zh:"（关键成效整理中，敬请期待）",en:"Key outcomes to be added",de:"Ergebnisse folgen",ru:"Результаты готовятся",fr:"Résultats à venir",ja:"成果準備中",ko:"성과 준비 중",es:"Resultados en preparación"},

  "case_c2_industry":{zh:"给药装置",en:"Drug Delivery",de:"Drug Delivery",ru:"Drug Delivery",fr:"Drug Delivery",ja:"Drug Delivery",ko:"Drug Delivery",es:"Drug Delivery"},

  "case_c2_title":{zh:"预灌封注射器组件精密注塑",en:"Precision Molding of Prefilled Syringe Components",de:"Precision Molding of Prefilled Syringe Components",ru:"Precision Molding of Prefilled Syringe Components",fr:"Precision Molding of Prefilled Syringe Components",ja:"Precision Molding of Prefilled Syringe Components",ko:"Precision Molding of Prefilled Syringe Components",es:"Precision Molding of Prefilled Syringe Components"},

  "case_c2_challenge":{zh:"（案例详情整理中，敬请期待）",en:"Case details to be added",de:"Fallstudie folgt",ru:"Детали кейса готовятся",fr:"Étude de cas à venir",ja:"事例詳細準備中",ko:"사례 상세 준비 중",es:"Caso en preparación"},

  "case_c2_solution":{zh:"（交付方案整理中，敬请期待）",en:"Delivery approach to be added",de:"Lösungsansatz folgt",ru:"Подход готовится",fr:"Approche à venir",ja:"提供手法準備中",ko:"제공 방식 준비 중",es:"Enfoque en preparación"},

  "case_c2_result":{zh:"（关键成效整理中，敬请期待）",en:"Key outcomes to be added",de:"Ergebnisse folgen",ru:"Результаты готовятся",fr:"Résultats à venir",ja:"成果準備中",ko:"성과 준비 중",es:"Resultados en preparación"},

  "case_c3_industry":{zh:"手术器械",en:"Surgical Instruments",de:"Surgical Instruments",ru:"Surgical Instruments",fr:"Surgical Instruments",ja:"Surgical Instruments",ko:"Surgical Instruments",es:"Surgical Instruments"},

  "case_c3_title":{zh:"一次性穿刺器结构件交付",en:"Disposable Trocar Structural Components",de:"Disposable Trocar Structural Components",ru:"Disposable Trocar Structural Components",fr:"Disposable Trocar Structural Components",ja:"Disposable Trocar Structural Components",ko:"Disposable Trocar Structural Components",es:"Disposable Trocar Structural Components"},

  "case_c3_challenge":{zh:"（案例详情整理中，敬请期待）",en:"Case details to be added",de:"Fallstudie folgt",ru:"Детали кейса готовятся",fr:"Étude de cas à venir",ja:"事例詳細準備中",ko:"사례 상세 준비 중",es:"Caso en preparación"},

  "case_c3_solution":{zh:"（交付方案整理中，敬请期待）",en:"Delivery approach to be added",de:"Lösungsansatz folgt",ru:"Подход готовится",fr:"Approche à venir",ja:"提供手法準備中",ko:"제공 방식 준비 중",es:"Enfoque en preparación"},

  "case_c3_result":{zh:"（关键成效整理中，敬请期待）",en:"Key outcomes to be added",de:"Ergebnisse folgen",ru:"Результаты готовятся",fr:"Résultats à venir",ja:"成果準備中",ko:"성과 준비 중",es:"Resultados en preparación"},

  "team1_name":{zh:"待补充",en:"TBA",de:"TBA",ru:"TBA",fr:"TBA",ja:"準備中",ko:"추후 공개",es:"Pendiente"},

  "team1_role":{zh:"总经理",en:"General Manager",de:"Geschäftsführer",ru:"Генеральный директор",fr:"Directeur général",ja:"総経理",ko:"총괄 관리자",es:"Gerente general"},

  "team2_name":{zh:"待补充",en:"TBA",de:"TBA",ru:"TBA",fr:"TBA",ja:"準備中",ko:"추후 공개",es:"Pendiente"},

  "team2_role":{zh:"技术总监",en:"CTO",de:"Technischer Direktor",ru:"Технический директор",fr:"Directeur technique",ja:"技術ディレクター",ko:"기술 이사",es:"Director técnico"},

  "team3_name":{zh:"待补充",en:"TBA",de:"TBA",ru:"TBA",fr:"TBA",ja:"準備中",ko:"추후 공개",es:"Pendiente"},

  "team3_role":{zh:"质量总监",en:"Quality Director",de:"Qualitätsdirektor",ru:"Директор по качеству",fr:"Directeur qualité",ja:"品質ディレクター",ko:"품질 이사",es:"Director de calidad"},

  "team4_name":{zh:"待补充",en:"TBA",de:"TBA",ru:"TBA",fr:"TBA",ja:"準備中",ko:"추후 공개",es:"Pendiente"},

  "team4_role":{zh:"生产总监",en:"Production Director",de:"Produktionsdirektor",ru:"Директор по производству",fr:"Directeur de production",ja:"生産ディレクター",ko:"생산 이사",es:"Director de producción"},

"prod_pp_title":{"zh":"注塑产品","en":"Injection Molded Products","de":"Spritzgussprodukte","ru":"Литьевые изделия","fr":"Produits injectés","ja":"射出成形製品","ko":"사출 성형 제품","es":"Productos de inyección"},

  "prod_pp_desc":{"zh":"高精度注塑成型，涵盖医疗耗材、工业部件等","en":"High-precision injection molding for medical consumables and industrial parts","de":"Hochpräziser Spritzguss für medizinische Verbrauchsmaterialien und Industrieteile","ru":"Высокоточное литье под давлением для медицинских расходных материалов и промышленных деталей","fr":"Moulage par injection de haute précision pour consommables médicaux et pièces industrielles","ja":"医療用消耗品や工業部品向けの高精度射出成形","ko":"의료 소모품 및 산업용 부품을 위한 고정밀 사출 성형","es":"Moldeo por inyección de alta precisión para consumibles médicos y piezas industriales"},

  "prod_pp_item1":{"zh":"输液接头","en":"Infusion Connector","de":"Infusionsanschluss","ru":"Инфузионный коннектор","fr":"Connecteur de perfusion","ja":"輸液コネクタ","ko":"수액 커넥터","es":"Conector de infusión"},

  "prod_pp_item2":{"zh":"瓶盖组件","en":"Cap Assembly","de":"Verschlusskappen-Baugruppe","ru":"Узел крышки","fr":"Ensemble bouchon","ja":"キャップアセンブリ","ko":"캡 어셈블리","es":"Conjunto de tapa"},

  "prod_pp_item3":{"zh":"连接器","en":"Connector","de":"Steckverbinder","ru":"Соединитель","fr":"Connecteur","ja":"コネクタ","ko":"커넥터","es":"Conector"},

  "prod_pp_item4":{"zh":"外壳部件","en":"Housing Parts","de":"Gehäuseteile","ru":"Корпусные детали","fr":"Pièces de boîtier","ja":"筐体部品","ko":"하우징 부품","es":"Piezas de carcasa"},

  "prod_2k_title":{"zh":"双色/多色产品","en":"Two-shot / Multi-color Products","de":"Zweifarben-/Mehrfarbenprodukte","ru":"Двух-/многоцветные изделия","fr":"Produits bi-matière / multi-couleurs","ja":"2色/多色製品","ko":"2색/다색 제품","es":"Productos de dos colores / multicolor"},

  "prod_2k_desc":{"zh":"双色/多色注塑一体化成型，减少二次加工","en":"Integrated two-shot / multi-color molding, reducing secondary processing","de":"Integrierte Zweifarben-/Mehrfarbenspritzgießfertigung, weniger Nachbearbeitung","ru":"Интегрированное двух-/многоцветное литье, сокращающее вторичную обработку","fr":"Moulage bi-matière / multi-couleurs intégré, réduisant les opérations secondaires","ja":"2色/多色一体成形により二次加工を削減","ko":"2색/다색 일체형 사출 성형으로 2차 가공 감소","es":"Moldeo integrado de dos colores / multicolor, reduciendo el procesamiento secundario"},

  "prod_2k_item1":{"zh":"双色手柄","en":"Two-shot Handle","de":"Zweifarbengriff","ru":"Двухцветная рукоятка","fr":"Poignée bi-matière","ja":"2色ハンドル","ko":"2색 핸들","es":"Mango de dos colores"},

  "prod_2k_item2":{"zh":"多色按钮","en":"Multi-color Button","de":"Mehrfarbentaste","ru":"Многоцветная кнопка","fr":"Bouton multi-couleurs","ja":"多色ボタン","ko":"다색 버튼","es":"Botón multicolor"},

  "prod_2k_item3":{"zh":"软硬胶组件","en":"Soft/Hard Overmold","de":"Hart-Weich-Kombination","ru":"Комбинация мягкого и твердого материала","fr":"Combinaison souple/dur","ja":"軟質/硬質オーバーモールド","ko":"경질/연질 오버몰드","es":"Sobreinyección blanda/dura"},

  "prod_2k_item4":{"zh":"Logo 嵌件","en":"Logo Insert","de":"Logo-Einleger","ru":"Вставка логотипа","fr":"Insert de logo","ja":"ロゴインサート","ko":"로고 인서트","es":"Inserto de logo"},



  "mold_short_cnc":{"zh":"CNC 数控加工","en":"CNC Machining","de":"CNC-Bearbeitung","ru":"ЧПУ обработка","fr":"Usinage CNC","ja":"CNC加工","ko":"CNC 가공","es":"Mecanizado CNC"},

  "mold_short_edm":{"zh":"EDM 电火花","en":"EDM Spark Erosion","de":"EDM Funkenerosion","ru":"EDM электроэрозия","fr":"Électroérosion EDM","ja":"EDM放電加工","ko":"EDM 방전","es":"Electroerosión EDM"},

  "mold_short_wire":{"zh":"线切割","en":"Wire EDM","de":"Drahterosion","ru":"Проволочная резка","fr":"Découpe au fil","ja":"ワイヤーカット","ko":"와이어 컷","es":"Corte por hilo"},

  "mold_short_grinder":{"zh":"精密磨床","en":"Precision Grinding","de":"Präzisionsschleifen","ru":"Прециз. шлифование","fr":"Rectification de précision","ja":"精密研削","ko":"정밀 연삭","es":"Rectificado de precisión"},

  "mold_short_injection":{"zh":"注塑机","en":"Injection Molding","de":"Spritzgießen","ru":"Литье под давлением","fr":"Injection","ja":"射出成形","ko":"사출 성형","es":"Moldeo por inyección"},

  "mold_short_qc":{"zh":"品质检测","en":"Quality Inspection","de":"Qualitätsprüfung","ru":"Контроль качества","fr":"Contrôle qualité","ja":"品質検査","ko":"품질 검사","es":"Inspección de calidad"},

  "qual_short_overview":{"zh":"资质实力","en":"Qualifications","de":"Qualifikationen","ru":"Квалификации","fr":"Qualifications","ja":"認定資格","ko":"인증 및 역량","es":"Certificaciones"},

  "qual_short_env":{"zh":"生产环境","en":"Production Environment","de":"Produktionsumgebung","ru":"Производственная среда","fr":"Environnement de production","ja":"生産環境","ko":"생산 환경","es":"Entorno de producción"},

  "qual_short_iqoq":{"zh":"IQ/OQ/PQ 验证体系","en":"IQ/OQ/PQ Validation","de":"IQ/OQ/PQ-Validierung","ru":"Валидация IQ/OQ/PQ","fr":"Validation IQ/OQ/PQ","ja":"IQ/OQ/PQ バリデーション","ko":"IQ/OQ/PQ 밸리데이션","es":"Validación IQ/OQ/PQ"},



  "about_dd_who":{"zh":"我们是谁","en":"Who We Are","de":"Wer wir sind","ru":"Кто мы","fr":"Qui sommes-nous","ja":"私たちについて","ko":"우리는 누구인가","es":"Quiénes somos"},

  "about_dd_values":{"zh":"核心价值","en":"Core Values","de":"Kernwerte","ru":"Наши ценности","fr":"Nos valeurs","ja":"コアバリュー","ko":"핵심 가치","es":"Valores fundamentales"},

  "about_dd_spirit":{"zh":"弘欧精神","en":"Our Spirit","de":"Unser Geist","ru":"Наш дух","fr":"Notre esprit","ja":"弘欧の精神","ko":"홍오 정신","es":"Nuestro espíritu"},

  "about_dd_partners":{"zh":"全球合作伙伴","en":"Global Partners","de":"Globale Partner","ru":"Глобальные партнеры","fr":"Partenaires mondiaux","ja":"グローバルパートナー","ko":"글로벌 파트너","es":"Socios globales"},

  "about_who_title":{"zh":"HONDVO","en":"HONDVO","de":"HONDVO","ru":"HONDVO","fr":"HONDVO","ja":"HONDVO","ko":"HONDVO","es":"HONDVO"},
  "about_hero":{"zh":"关于我们","en":"About Us","de":"Über uns","ru":"О нас","fr":"À propos","ja":"会社概要","ko":"회사 소개","es":"Sobre nosotros"},
  "about_hero_sub":{"zh":"弘欧科技 · 精密医疗器械组件与精密模具","en":"HONDVO Technology · Precision Medical Device Components & Precision Molds","de":"HONDVO Technology · Präzise Medizinkomponenten & Präzisionsformen","ru":"HONDVO Technology · Точные медицинские компоненты и пресс-формы","fr":"HONDVO Technology · Composants médicaux de précision & moules de précision","ja":"HONDVO Technology · 精密医療機器部品と精密金型","ko":"HONDVO Technology · 정밀 의료 기기 부품 및 정밀 금형","es":"HONDVO Technology · Componentes médicos de precisión y moldes de precisión"},

  "about_values_title":{"zh":"核心价值","en":"Core Values","de":"Kernwerte","ru":"Наши ценности","fr":"Nos valeurs","ja":"コアバリュー","ko":"핵심 가치","es":"Valores fundamentales"},

  "about_spirit_title":{"zh":"弘欧精神","en":"Hondvo Spirit","de":"Hondvo-Geist","ru":"Дух Hondvo","fr":"Esprit Hondvo","ja":"弘欧精神","ko":"홍오 정신","es":"Espíritu Hondvo"},

  "about_partners_title":{"zh":"全球合作伙伴","en":"Global Partners","de":"Globale Partner","ru":"Глобальные партнеры","fr":"Partenaires mondiaux","ja":"グローバルパートナー","ko":"글로벌 파트너","es":"Socios globales"},

  "partner_stat_countries":{"zh":"覆盖国家","en":"Countries","de":"Länder","ru":"Страны","fr":"Pays","ja":"国","ko":"국가","es":"Países"},

  "partner_lg_hub":{"zh":"合作枢纽","en":"Partner Hub","de":"Partner-Hub","ru":"Центр партнёров","fr":"Pôle partenaire","ja":"拠点","ko":"파트너 허브","es":"Centro"},

  "partner_lg_route":{"zh":"活跃航线","en":"Active Route","de":"Aktive Route","ru":"Активный маршрут","fr":"Itinéraire actif","ja":"アクティブルート","ko":"활성 경로","es":"Ruta activa"},

  "partner_lg_hq":{"zh":"HONDVO 总部","en":"HONDVO HQ","de":"HONDVO HQ","ru":"HONDVO HQ","fr":"HONDVO HQ","ja":"HONDVO HQ","ko":"HONDVO HQ","es":"HONDVO HQ"},

  "partner_de":{"zh":"德国","en":"Germany","de":"Deutschland","ru":"Германия","fr":"Allemagne","ja":"ドイツ","ko":"독일","es":"Alemania"},

  "partner_pl":{"zh":"波兰","en":"Poland","de":"Polen","ru":"Польша","fr":"Pologne","ja":"ポーランド","ko":"폴란드","es":"Polonia"},

  "partner_fr":{"zh":"法国","en":"France","de":"Frankreich","ru":"Франция","fr":"France","ja":"フランス","ko":"프랑스","es":"Francia"},

  "partner_cz":{"zh":"捷克共和国","en":"Czech Republic","de":"Tschechien","ru":"Чехия","fr":"Tchéquie","ja":"チェコ","ko":"체코","es":"República Checa"},

  "partner_at":{"zh":"奥地利","en":"Austria","de":"Österreich","ru":"Австрия","fr":"Autriche","ja":"オーストリア","ko":"오스트리아","es":"Austria"},

  "partner_es":{"zh":"西班牙","en":"Spain","de":"Spanien","ru":"Испания","fr":"Espagne","ja":"スペイン","ko":"스페인","es":"España"},

  "partner_br":{"zh":"巴西","en":"Brazil","de":"Brasilien","ru":"Бразилия","fr":"Brésil","ja":"ブラジル","ko":"브라질","es":"Brasil"},

  "partner_us":{"zh":"美国","en":"United States","de":"USA","ru":"США","fr":"États-Unis","ja":"アメリカ","ko":"미국","es":"Estados Unidos"},

  "partner_mx":{"zh":"墨西哥","en":"Mexico","de":"Mexiko","ru":"Мексика","fr":"Mexique","ja":"メキシコ","ko":"멕시코","es":"México"},

  "partner_hq":{"zh":"HONDVO 总部","en":"HONDVO HQ","de":"HONDVO HQ","ru":"HONDVO (штаб)","fr":"HONDVO (siège)","ja":"HONDVO 本部","ko":"HONDVO 본사","es":"HONDVO (Sede)"},

  "about_val1_title":{"zh":"精密制造","en":"Precision Manufacturing","de":"Präzisionsfertigung","ru":"Прецизионное производство","fr":"Fabrication de précision","ja":"精密製造","ko":"정밀 제조","es":"Fabricación de precisión"},

  "about_val1_desc":{"zh":"以微米级精度为标准，零缺陷质量文化贯穿每一道工序","en":"Micron-level precision as standard, zero-defect quality culture throughout every process","de":"Mikrometergenauigkeit als Standard – Null-Fehler-Qualitätskultur in jedem Prozessschritt","ru":"Микронная точность как стандарт, культура нулевых дефектов на каждом этапе","fr":"Précision au micron comme standard, culture qualité zéro défaut à chaque étape","ja":"ミクロン単位の精度を基準に、全工程に浸透したゼロディフェクトの品質文化","ko":"마이크론 단위 정밀도를 기준으로, 모든 공정에 제로 결함 품질 문화가 스며들어 있습니다","es":"Precisión a nivel de micras como estándar, cultura de calidad de cero defectos en cada proceso"},

  "about_val2_title":{"zh":"医疗合规","en":"Medical Compliance","de":"Medizinische Compliance","ru":"Медицинское соответствие","fr":"Conformité médicale","ja":"医療コンプライアンス","ko":"의료 규정 준수","es":"Cumplimiento médico"},

  "about_val2_desc":{"zh":"ISO 13485 / IATF 16949 双体系运行，全流程 IQ/OQ/PQ 验证","en":"Dual ISO 13485 / IATF 16949 system, full IQ/OQ/PQ validation","de":"ISO 13485 / IATF 16949 Doppelsystem mit durchgängiger IQ/OQ/PQ-Validierung","ru":"Двойная система ISO 13485 / IATF 16949, полная валидация IQ/OQ/PQ","fr":"Double système ISO 13485 / IATF 16949, validation IQ/OQ/PQ complète","ja":"ISO 13485 / IATF 16949 デュアルシステム運用、全工程IQ/OQ/PQバリデーション","ko":"ISO 13485 / IATF 16949 이중 시스템 운영, 전 공정 IQ/OQ/PQ 밸리데이션","es":"Sistema dual ISO 13485 / IATF 16949, validación IQ/OQ/PQ completa"},

  "about_val3_title":{"zh":"快速响应","en":"Rapid Response","de":"Schnelle Reaktion","ru":"Быстрое реагирование","fr":"Réactivité rapide","ja":"迅速対応","ko":"신속 대응","es":"Respuesta rápida"},

  "about_val3_desc":{"zh":"从模具设计到量产交付，敏捷供应链确保最短交期","en":"From mold design to mass production delivery, agile supply chain ensures shortest lead time","de":"Vom Werkzeugdesign bis zur Serienauslieferung – agile Lieferkette für kürzeste Durchlaufzeiten","ru":"От проектирования пресс-форм до серийной поставки – гибкая цепочка поставок обеспечивает минимальные сроки","fr":"De la conception des moules à la livraison en série, une chaîne d'approvisionnement agile garantit les délais les plus courts","ja":"金型設計から量産納品まで、俊敏なサプライチェーンが最短納期を実現","ko":"금형 설계부터 양산 납품까지, 민첩한 공급망으로 최단 납기 보장","es":"Desde el diseño de moldes hasta la entrega en serie, una cadena de suministro ágil garantiza los plazos más cortos"},

  "about_val4_title":{"zh":"持续创新","en":"Continuous Innovation","de":"Kontinuierliche Innovation","ru":"Постоянные инновации","fr":"Innovation continue","ja":"継続的革新","ko":"지속적 혁신","es":"Innovación continua"},

  "about_val4_desc":{"zh":"持续引入国际顶尖设备与工艺，保持技术领先优势","en":"Continuously introducing world-class equipment and processes, maintaining technological leadership","de":"Kontinuierliche Einführung internationaler Spitzentechnologie für technologische Führung","ru":"Постоянное внедрение передового международного оборудования и технологий для сохранения лидерства","fr":"Introduction continue d'équipements et de procédés de pointe pour maintenir l'avance technologique","ja":"国際的な最先端設備とプロセスの継続的導入により、技術的優位性を維持","ko":"국제 최고 수준의 장비와 공정을 지속적으로 도입하여 기술 리더십 유지","es":"Introducción continua de equipos y procesos de primer nivel internacional para mantener el liderazgo tecnológico"},



  "about_sp1_icon":{"zh":"匠心","en":"Craft","de":"Handwerkskunst","ru":"Мастерство","fr":"Savoir-faire","ja":"匠心","ko":"장인정신","es":"Artesanía"},

  "about_sp1_title":{"zh":"工匠精神","en":"Craftsmanship","de":"Handwerkskunst","ru":"Мастерство","fr":"Savoir-faire","ja":"匠の精神","ko":"장인 정신","es":"Artesanía"},

  "about_sp1_desc":{"zh":"每一套模具都是精雕细琢的作品，对微米级精度永怀敬畏","en":"Every mold is a finely crafted masterpiece, with eternal reverence for micron-level precision","de":"Jedes Werkzeug ist ein meisterhaft gefertigtes Kunstwerk – mit tiefem Respekt vor Mikrometer-Präzision","ru":"Каждая пресс-форма – тщательно изготовленное произведение, с неизменным почтением к микронной точности","fr":"Chaque moule est une œuvre finement ciselée, avec un respect éternel pour la précision au micron","ja":"一つひとつの金型は丹念に作り込まれた作品であり、ミクロン精度への畏敬の念を忘れません","ko":"모든 금형은 정교하게 제작된 작품이며, 마이크론 단위 정밀도에 대한 경외심을 영원히 간직합니다","es":"Cada molde es una obra maestra finamente elaborada, con eterna reverencia por la precisión micrométrica"},

  "about_sp2_icon":{"zh":"客户","en":"Client","de":"Kunde","ru":"Клиент","fr":"Client","ja":"お客様","ko":"고객","es":"Cliente"},

  "about_sp2_title":{"zh":"客户至上","en":"Client First","de":"Kundenorientierung","ru":"Клиент превыше всего","fr":"Le client d'abord","ja":"お客様第一","ko":"고객 우선","es":"El cliente primero"},

  "about_sp2_desc":{"zh":"深入理解医疗器械客户需求，以工程能力驱动解决方案","en":"Deep understanding of medical device client needs, engineering-driven solutions","de":"Tiefes Verständnis für die Anforderungen von Medizintechnikkunden – lösungsorientiert durch Ingenieurkompetenz","ru":"Глубокое понимание потребностей клиентов в сфере медизделий, инженерные решения","fr":"Compréhension approfondie des besoins des clients DM, solutions pilotées par l'ingénierie","ja":"医療機器顧客のニーズを深く理解し、エンジニアリング力でソリューションを提供","ko":"의료기기 고객의 요구를 깊이 이해하고, 엔지니어링 역량으로 솔루션을 제공합니다","es":"Comprensión profunda de las necesidades de los clientes de dispositivos médicos, soluciones impulsadas por la ingeniería"},

  "about_sp3_icon":{"zh":"协作","en":"Team","de":"Teamwork","ru":"Команда","fr":"Équipe","ja":"協働","ko":"협업","es":"Equipo"},

  "about_sp3_title":{"zh":"团队协作","en":"Team Collaboration","de":"Teamarbeit","ru":"Командная работа","fr":"Travail d'équipe","ja":"チームワーク","ko":"팀워크","es":"Trabajo en equipo"},

  "about_sp3_desc":{"zh":"模具设计与注塑生产无缝衔接，跨部门高效协同","en":"Seamless integration of mold design and injection production, efficient cross-department collaboration","de":"Nahtlose Integration von Werkzeugdesign und Spritzgießproduktion – effiziente abteilungsübergreifende Zusammenarbeit","ru":"Бесшовная интеграция проектирования пресс-форм и литьевого производства, эффективное межведомственное взаимодействие","fr":"Intégration transparente de la conception de moules et de la production par injection, collaboration interdépartementale efficace","ja":"金型設計と射出成形生産のシームレスな連携、部門を超えた効率的な協力体制","ko":"금형 설계와 사출 생산의 원활한 연계, 부서 간 효율적인 협업","es":"Integración perfecta del diseño de moldes y la producción por inyección, colaboración interdepartamental eficiente"},



  "footer_desc":{"zh":"弘欧科技（东莞）有限公司 · 弘欧精密模具（东莞）有限公司<br>专注无源二类医疗器械注塑部件与精密模具制造","en":"HONDVO Technology (Dongguan) Co., Ltd. · HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.<br>Specialized in Class II passive medical device injection components & precision mold manufacturing","de":"HONDVO Technology (Dongguan) Co., Ltd. · HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.<br>Spezialisiert auf Spritzgussteile für passive Medizinprodukte Klasse II & Präzisionswerkzeugbau","ru":"HONDVO Technology (Dongguan) Co., Ltd. · HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.<br>Специализация: литьевые компоненты для пассивных медизделий класса II и прецизионные пресс-формы","fr":"HONDVO Technology (Dongguan) Co., Ltd. · HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.<br>Spécialisée dans les composants injectés pour DM passifs de classe II et la fabrication de moules de précision","ja":"弘欧科技（東莞）有限公司 · 弘欧精密模具（東莞）有限公司<br>クラスIIパッシブ医療機器用射出部品と精密金型製造に特化","ko":"HONDVO Technology (Dongguan) Co., Ltd. · HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.<br>클래스II 수동형 의료기기 사출 부품 및 정밀 금형 제조 전문","es":"HONDVO Technology (Dongguan) Co., Ltd. · HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.<br>Especializada en componentes de inyección para DM pasivos clase II y fabricación de moldes de precisión"},

  "ft_about":{"zh":"关于我们","en":"About Us","de":"Über uns","ru":"О нас","fr":"À propos","ja":"会社概要","ko":"회사 소개","es":"Sobre nosotros"},

  "ft_about_who":{"zh":"我们是谁","en":"Who We Are","de":"Wer wir sind","ru":"Кто мы","fr":"Qui sommes-nous","ja":"私たちについて","ko":"우리는 누구인가","es":"Quiénes somos"},

  "ft_about_values":{"zh":"核心价值","en":"Core Values","de":"Kernwerte","ru":"Наши ценности","fr":"Nos valeurs","ja":"コアバリュー","ko":"핵심 가치","es":"Valores fundamentales"},

  "ft_about_spirit":{"zh":"弘欧精神","en":"Hondvo Spirit","de":"Hondvo-Geist","ru":"Дух Hondvo","fr":"Esprit Hondvo","ja":"弘欧精神","ko":"홍오 정신","es":"Espíritu Hondvo"},

  "ft_about_partners":{"zh":"全球合作伙伴","en":"Global Partners","de":"Globale Partner","ru":"Глобальные партнеры","fr":"Partenaires mondiaux","ja":"グローバルパートナー","ko":"글로벌 파트너","es":"Socios globales"},

  "ft_products":{"zh":"产品与服务","en":"Products & Services","de":"Produkte & Dienstleistungen","ru":"Продукты и услуги","fr":"Produits & services","ja":"製品・サービス","ko":"제품 및 서비스","es":"Productos y servicios"},

  "ft_prod_enteral":{"zh":"肠内营养输注系统","en":"Enteral Nutrition System","de":"Enterales Ernährungssystem","ru":"Система энтерального питания","fr":"Système de nutrition entérale","ja":"経腸栄養システム","ko":"경장 영양 시스템","es":"Sistema de nutrición enteral"},

  "ft_prod_injection":{"zh":"注射给药系统","en":"Injection Drug System","de":"Injektionssystem","ru":"Инъекционная система","fr":"Système d'injection","ja":"注射薬物システム","ko":"주사 약물 시스템","es":"Sistema de inyección"},

  "ft_prod_other":{"zh":"其他二类器械部件","en":"Other Class II Components","de":"Weitere Klasse-II-Komponenten","ru":"Прочие компоненты класса II","fr":"Autres composants classe II","ja":"その他クラスII部品","ko":"기타 클래스II 부품","es":"Otros componentes clase II"},

  "ft_prod_mold":{"zh":"精密模具制造","en":"Precision Mold","de":"Präzisionswerkzeugbau","ru":"Прецизионные пресс-формы","fr":"Moules de précision","ja":"精密金型","ko":"정밀 금형","es":"Moldes de precisión"},

  "ft_prod_browse":{"zh":"浏览产品","en":"Browse Products","de":"Produkte durchstöbern","ru":"Просмотр продукции","fr":"Parcourir les produits","ja":"製品を見る","ko":"제품 보기","es":"Explorar productos"},
  "ft_prod_discover":{"zh":"发现方案","en":"Discover Solutions","de":"Lösungen entdecken","ru":"Решения","fr":"Découvrir les solutions","ja":"ソリューションを見る","ko":"솔루션 찾기","es":"Descubrir soluciones"},
  "ft_prod_industries":{"zh":"应用行业","en":"Industries","de":"Branchen","ru":"Отрасли","fr":"Industries","ja":"応用業界","ko":"적용 산업","es":"Industrias"},

  "ft_mold":{"zh":"模具中心","en":"Mold Center","de":"Werkzeugbau","ru":"Центр пресс-форм","fr":"Centre de moules","ja":"金型センター","ko":"금형 센터","es":"Centro de moldes"},

  "ft_mold_design":{"zh":"模具设计","en":"Mold Design","de":"Werkzeugdesign","ru":"Проектирование пресс-форм","fr":"Conception de moules","ja":"金型設計","ko":"금형 설계","es":"Diseño de moldes"},

  "ft_mold_machining":{"zh":"精密加工","en":"Precision Machining","de":"Präzisionsbearbeitung","ru":"Прецизионная обработка","fr":"Usinage de précision","ja":"精密加工","ko":"정밀 가공","es":"Mecanizado de precisión"},

  "ft_mold_injection":{"zh":"注塑量产","en":"Injection Production","de":"Spritzgießproduktion","ru":"Серийное литье","fr":"Production par injection","ja":"射出成形量産","ko":"사출 양산","es":"Producción por inyección"},

  "ft_mold_quality":{"zh":"品质管控","en":"Quality Control","de":"Qualitätskontrolle","ru":"Контроль качества","fr":"Contrôle qualité","ja":"品質管理","ko":"품질 관리","es":"Control de calidad"},

  "ft_qual":{"zh":"资质实力","en":"Qualifications","de":"Qualifikationen","ru":"Квалификации","fr":"Qualifications","ja":"認定資格","ko":"인증 및 역량","es":"Certificaciones"},

  "ft_qual_13485":{"zh":"ISO 13485","en":"ISO 13485","de":"ISO 13485","ru":"ISO 13485","fr":"ISO 13485","ja":"ISO 13485","ko":"ISO 13485","es":"ISO 13485"},

  "ft_qual_16949":{"zh":"IATF 16949","en":"IATF 16949","de":"IATF 16949","ru":"IATF 16949","fr":"IATF 16949","ja":"IATF 16949","ko":"IATF 16949","es":"IATF 16949"},

  "ft_qual_9001":{"zh":"ISO 9001","en":"ISO 9001","de":"ISO 9001","ru":"ISO 9001","fr":"ISO 9001","ja":"ISO 9001","ko":"ISO 9001","es":"ISO 9001"},

  "ft_qual_env":{"zh":"生产环境","en":"Production Environment","de":"Produktionsumgebung","ru":"Производственная среда","fr":"Environnement de production","ja":"生産環境","ko":"생산 환경","es":"Entorno de producción"},

  "ft_qual_iqoq":{"zh":"IQ/OQ/PQ 验证","en":"IQ/OQ/PQ Validation","de":"IQ/OQ/PQ-Validierung","ru":"Валидация IQ/OQ/PQ","fr":"Validation IQ/OQ/PQ","ja":"IQ/OQ/PQ バリデーション","ko":"IQ/OQ/PQ 밸리데이션","es":"Validación IQ/OQ/PQ"},

  "ft_news":{"zh":"新闻动态","en":"News","de":"Nachrichten","ru":"Новости","fr":"Actualités","ja":"ニュース","ko":"뉴스","es":"Noticias"},

  "ft_news_company":{"zh":"公司新闻","en":"Company News","de":"Unternehmensnachrichten","ru":"Новости компании","fr":"Actualités entreprise","ja":"企業ニュース","ko":"회사 뉴스","es":"Noticias de empresa"},

  "ft_news_industry":{"zh":"行业资讯","en":"Industry News","de":"Brancheninformationen","ru":"Отраслевые новости","fr":"Actualités secteur","ja":"業界情報","ko":"업계 정보","es":"Noticias del sector"},

  "ft_contact":{"zh":"联系我们","en":"Contact Us","de":"Kontakt","ru":"Контакты","fr":"Contact","ja":"お問い合わせ","ko":"문의하기","es":"Contacto"},

  "ft_contact_job":{"zh":"人才招聘","en":"Careers","de":"Karriere","ru":"Карьера","fr":"Carrières","ja":"採用情報","ko":"채용","es":"Carreras"},

  "ft_faq":{"zh":"常见问题","en":"FAQ","de":"FAQ","ru":"Часто задаваемые вопросы","fr":"FAQ","ja":"よくある質問","ko":"자주 묻는 질문","es":"Preguntas frecuentes"},

  "ft_faq_qa":{"zh":"常见问题","en":"FAQ","de":"FAQ","ru":"Вопросы и ответы","fr":"FAQ","ja":"よくある質問","ko":"자주 묻는 질문","es":"Preguntas frecuentes"},

  "ft_faq_dl":{"zh":"资料下载","en":"Downloads","de":"Downloads","ru":"Загрузки","fr":"Téléchargements","ja":"ダウンロード","ko":"다운로드","es":"Descargas"},

  "ft_faq_sub":{"zh":"邮件订阅","en":"Newsletter","de":"Newsletter","ru":"Подписка на новости","fr":"Newsletter","ja":"メールマガジン","ko":"메일 구독","es":"Boletín"},

  "ft_faq_links":{"zh":"友情链接","en":"Links","de":"Links","ru":"Ссылки","fr":"Liens","ja":"リンク","ko":"링크","es":"Enlaces"},

  "ft_contact_reach":{"zh":"联系方式","en":"Contact Info","de":"Kontakt","ru":"Контакты","fr":"Contact","ja":"連絡先","ko":"연락처","es":"Contacto"},

  "ft_copyright":{"zh":"© 2026 弘欧科技（东莞）有限公司 & 弘欧精密模具（东莞）有限公司","en":"© 2026 HONDVO Technology (Dongguan) Co., Ltd. & HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","de":"© 2026 HONDVO Technology (Dongguan) Co., Ltd. & HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","ru":"© 2026 HONDVO Technology (Dongguan) Co., Ltd. & HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","fr":"© 2026 HONDVO Technology (Dongguan) Co., Ltd. & HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","ja":"© 2026 弘欧科技（東莞）有限公司 & 弘欧精密模具（東莞）有限公司","ko":"© 2026 HONDVO Technology (Dongguan) Co., Ltd. & HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.","es":"© 2026 HONDVO Technology (Dongguan) Co., Ltd. & HONDVO TOOLING LIMITED (Dongguan) Co., Ltd."},

  "ft_privacy":{"zh":"隐私政策","en":"Privacy Policy","de":"Datenschutz","ru":"Конфиденциальность","fr":"Confidentialité","ja":"プライバシーポリシー","ko":"개인정보처리방침","es":"Política de privacidad"},

  "ft_terms":{"zh":"服务条款","en":"Terms of Service","de":"AGB","ru":"Условия","fr":"Conditions","ja":"利用規約","ko":"이용약관","es":"Términos"},



  "ct_submitting":{"zh":"提交中...","en":"Submitting...","de":"Wird gesendet...","ru":"Отправка...","fr":"Envoi en cours...","ja":"送信中...","ko":"제출 중...","es":"Enviando..."},

  "ct_success":{"zh":"提交成功！我们将在24小时内联系您","en":"Submitted! We will contact you within 24 hours","de":"Gesendet! Wir melden uns innerhalb von 24 Stunden","ru":"Отправлено! Мы свяжемся с вами в течение 24 часов","fr":"Envoyé ! Nous vous contacterons dans les 24 heures","ja":"送信完了！24時間以内にご連絡いたします","ko":"제출 완료! 24시간 이내에 연락드리겠습니다","es":"¡Enviado! Le contactaremos en 24 horas"},

  "ct_failure":{"zh":"提交失败，请重试或直接致电","en":"Submission failed. Please retry or call us directly","de":"Übermittlung fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie uns an","ru":"Ошибка отправки. Повторите попытку или позвоните нам","fr":"Échec de l'envoi. Veuillez réessayer ou nous appeler","ja":"送信に失敗しました。再試行いただくか、お電話ください","ko":"제출 실패. 다시 시도하시거나 전화 주세요","es":"Error al enviar. Reintente o llámenos"},

  "ct_val_required":{"zh":"请填写必填字段：姓名、联系电话、邮箱、需求描述","en":"Please fill in required fields: Name, Phone, Email, Requirements","de":"Bitte füllen Sie die Pflichtfelder aus: Name, Telefon, E-Mail, Anforderungsbeschreibung","ru":"Заполните обязательные поля: Имя, Телефон, Эл. почта, Описание требований","fr":"Veuillez remplir les champs obligatoires : Nom, Téléphone, E-mail, Description des besoins","ja":"必須項目を入力してください：氏名、電話番号、メールアドレス、要件説明","ko":"필수 항목을 입력하세요: 이름, 전화번호, 이메일, 요구 사항 설명","es":"Complete los campos obligatorios: Nombre, Teléfono, Correo electrónico, Descripción de requisitos"},

  "ct_val_phone":{"zh":"请输入有效的电话号码","en":"Please enter a valid phone number","de":"Bitte geben Sie eine gültige Telefonnummer ein","ru":"Введите действительный номер телефона","fr":"Veuillez entrer un numéro de téléphone valide","ja":"有効な電話番号を入力してください","ko":"유효한 전화번호를 입력하세요","es":"Ingrese un número de teléfono válido"},



  "pc_mold_title":{"zh":"模具售卖","en":"Mold Sales","de":"Formenverkauf","ru":"Продажа пресс-форм","fr":"Vente de moules","ja":"金型販売","ko":"금형 판매","es":"Venta de moldes"},

  "pc_mold_desc":{"zh":"精密注塑模具 · 液态硅胶模 · 多色模具","en":"Precision injection molds · LSR molds · Multi-color molds","de":"Präzisionsspritzgussformen · LSR-Formen · Mehrfarbenformen","ru":"Прецизионные литьевые формы · LSR-формы · Многоцветные формы","fr":"Moules d'injection de précision · Moules LSR · Moules multi-couleurs","ja":"精密射出成形金型 · LSR金型 · 多色金型","ko":"정밀 사출 금형 · LSR 금형 · 다색 금형","es":"Moldes de inyección de precisión · Moldes LSR · Moldes multicolor"},

  "pc_product_title":{"zh":"产品成品售卖","en":"Finished Products","de":"Fertigprodukte","ru":"Готовая продукция","fr":"Produits finis","ja":"製品販売","ko":"완제품 판매","es":"Productos terminados"},

  "pc_product_desc":{"zh":"医疗级注塑件 · II类医疗器械部件","en":"Medical-grade injection parts · Class II medical device components","de":"Medizinische Spritzgussteile · Medizinprodukte Klasse II","ru":"Медицинские литьевые детали · Компоненты мед. изделий класса II","fr":"Pièces d'injection de qualité médicale · Composants DM de classe II","ja":"医療グレード射出成形品 · クラスII医療機器部品","ko":"의료급 사출 부품 · Class II 의료기기 부품","es":"Piezas de inyección de grado médico · Componentes DM clase II"},

  "pc_oem_title":{"zh":"代工服务","en":"OEM Manufacturing","de":"Lohnfertigung","ru":"Контрактное производство","fr":"Fabrication OEM","ja":"OEM製造","ko":"OEM 제조","es":"Fabricación OEM"},

  "pc_oem_desc":{"zh":"注塑代工 · 组装代工 · 全流程代工","en":"Injection OEM · Assembly OEM · Full-process contract manufacturing","de":"Spritzguss-Lohnfertigung · Montage · Komplettfertigung","ru":"Литьё под давлением · Сборка · Полный цикл","fr":"OEM injection · OEM assemblage · Sous-traitance complète","ja":"射出成形OEM · 組立OEM · 一貫製造受託","ko":"사출 OEM · 조립 OEM · 전공정 위탁 제조","es":"OEM inyección · OEM ensamblaje · Fabricación integral"},



  "pc_mold_type":{"zh":"模具类型","en":"Mold Type","de":"Formentyp","ru":"Тип формы","fr":"Type de moule","ja":"金型タイプ","ko":"금형 유형","es":"Tipo de molde"},

  "pc_steel":{"zh":"钢料要求","en":"Steel Grade","de":"Stahlsorte","ru":"Марка стали","fr":"Nuance d'acier","ja":"鋼材グレード","ko":"강재 등급","es":"Grado de acero"},

  "pc_cavity":{"zh":"穴数","en":"Number of Cavities","de":"Anzahl Kavitäten","ru":"Кол-во гнёзд","fr":"Nombre d'empreintes","ja":"キャビティ数","ko":"캐비티 수","es":"Número de cavidades"},

  "pc_product_name":{"zh":"产品名称","en":"Product Name","de":"Produktname","ru":"Название продукта","fr":"Nom du produit","ja":"製品名","ko":"제품명","es":"Nombre del producto"},

  "pc_quantity":{"zh":"年用量 / 批次数","en":"Annual Demand / Batch Quantity","de":"Jahresbedarf / Losgröße","ru":"Годовая потребность / Размер партии","fr":"Demande annuelle / Taille de lot","ja":"年間需要量 / バッチ数量","ko":"연간 수요 / 배치 수량","es":"Demanda anual / Tamaño de lote"},

  "pc_packaging":{"zh":"包装要求","en":"Packaging Requirements","de":"Verpackungsanforderungen","ru":"Требования к упаковке","fr":"Exigences d'emballage","ja":"包装要件","ko":"포장 요구 사항","es":"Requisitos de embalaje"},

  "pc_oem_type":{"zh":"代工类型","en":"OEM Type","de":"Lohnfertigungstyp","ru":"Тип контрактного производства","fr":"Type d'OEM","ja":"OEMタイプ","ko":"OEM 유형","es":"Tipo de OEM"},

  "pc_drawing":{"zh":"来图/来样","en":"Drawing / Sample Availability","de":"Zeichnung / Muster verfügbar","ru":"Наличие чертежей / образцов","fr":"Plan / Échantillon disponible","ja":"図面・サンプルの有無","ko":"도면 / 샘플 유무","es":"Disponibilidad de planos / muestras"},

  "pc_est_quantity":{"zh":"预估批量","en":"Estimated Batch Size","de":"Geschätzte Losgröße","ru":"Ожидаемый размер партии","fr":"Taille de lot estimée","ja":"推定バッチサイズ","ko":"예상 배치 규모","es":"Tamaño de lote estimado"},



  // 注：logo_wall_title / logo_wall_sub（"Trusted Partners"标题块）已下线（2026-08-26），DOM 与 i18n 一同删除

  "pc_ph_mold_type":{"zh":"例如：普通注塑模、液态注塑模、双色多色模","en":"e.g. Standard injection mold, LSR mold, two-shot mold","de":"例如：普通注塑模、液态注塑模、双色多色模","ru":"例如：普通注塑模、液态注塑模、双色多色模","fr":"例如：普通注塑模、液态注塑模、双色多色模","ja":"例如：普通注塑模、液态注塑模、双色多色模","ko":"例如：普通注塑模、液态注塑模、双色多色模","es":"例如：普通注塑模、液态注塑模、双色多色模"},

  "pc_ph_steel":{"zh":"例如：S136、NAK80、H13","en":"e.g. S136, NAK80, H13","de":"例如：S136、NAK80、H13","ru":"例如：S136、NAK80、H13","fr":"例如：S136、NAK80、H13","ja":"例如：S136、NAK80、H13","ko":"例如：S136、NAK80、H13","es":"例如：S136、NAK80、H13"},

  "pc_ph_pkg":{"zh":"例如：普通包装、洁净室包装","en":"e.g. Standard packaging, cleanroom packaging","de":"例如：普通包装、洁净室包装","ru":"例如：普通包装、洁净室包装","fr":"例如：普通包装、洁净室包装","ja":"例如：普通包装、洁净室包装","ko":"例如：普通包装、洁净室包装","es":"例如：普通包装、洁净室包装"},

  "pc_ph_oem_type":{"zh":"例如：注塑代工、组装代工、全流程代工","en":"e.g. Injection OEM, assembly OEM, full-process OEM","de":"例如：注塑代工、组装代工、全流程代工","ru":"例如：注塑代工、组装代工、全流程代工","fr":"例如：注塑代工、组装代工、全流程代工","ja":"例如：注塑代工、组装代工、全流程代工","ko":"例如：注塑代工、组装代工、全流程代工","es":"例如：注塑代工、组装代工、全流程代工"},

  "pc_mold_opt1":{"zh":"普通注塑模","en":"Standard Injection Mold","de":"普通注塑模","ru":"普通注塑模","fr":"普通注塑模","ja":"普通注塑模","ko":"普通注塑模","es":"普通注塑模"},

  "pc_mold_opt2":{"zh":"液态注塑模","en":"Liquid Silicone Mold (LSR)","de":"液态注塑模","ru":"液态注塑模","fr":"液态注塑模","ja":"液态注塑模","ko":"液态注塑模","es":"液态注塑模"},

  "pc_mold_opt3":{"zh":"双色/多色模","en":"Two-shot / Multi-color Mold","de":"双色/多色模","ru":"双色/多色模","fr":"双色/多色模","ja":"双色/多色模","ko":"双色/多色模","es":"双色/多色模"},

  "pc_steel_other":{"zh":"其他","en":"Other","de":"其他","ru":"其他","fr":"其他","ja":"其他","ko":"其他","es":"其他"},

  "pc_pkg_opt1":{"zh":"普通包装","en":"Standard Packaging","de":"普通包装","ru":"普通包装","fr":"普通包装","ja":"普通包装","ko":"普通包装","es":"普通包装"},

  "pc_pkg_opt2":{"zh":"洁净室包装","en":"Cleanroom Packaging","de":"洁净室包装","ru":"洁净室包装","fr":"洁净室包装","ja":"洁净室包装","ko":"洁净室包装","es":"洁净室包装"},

  "pc_pkg_opt3":{"zh":"其他","en":"Other","de":"其他","ru":"其他","fr":"其他","ja":"其他","ko":"其他","es":"其他"},

  "pc_oem_opt1":{"zh":"注塑代工","en":"Injection OEM","de":"注塑代工","ru":"注塑代工","fr":"注塑代工","ja":"注塑代工","ko":"注塑代工","es":"注塑代工"},

  "pc_oem_opt2":{"zh":"组装代工","en":"Assembly OEM","de":"组装代工","ru":"组装代工","fr":"组装代工","ja":"组装代工","ko":"组装代工","es":"组装代工"},

  "pc_oem_opt3":{"zh":"印刷代工","en":"Printing OEM","de":"印刷代工","ru":"印刷代工","fr":"印刷代工","ja":"印刷代工","ko":"印刷代工","es":"印刷代工"},

  "pc_oem_opt4":{"zh":"全流程代工","en":"Full-Process OEM","de":"全流程代工","ru":"全流程代工","fr":"全流程代工","ja":"全流程代工","ko":"全流程代工","es":"全流程代工"},

  "pc_draw_opt1":{"zh":"有图纸","en":"With Drawing","de":"Mit Zeichnung","ru":"С чертежом","fr":"Avec plan","ja":"図面あり","ko":"도면 있음","es":"Con plano"},

  "pc_draw_opt2":{"zh":"有样品","en":"With Sample","de":"Mit Muster","ru":"С образцом","fr":"Avec échantillon","ja":"サンプルあり","ko":"샘플 있음","es":"Con muestra"},

  "pc_draw_opt3":{"zh":"仅有概念","en":"Concept Only","de":"Nur Konzept","ru":"Только концепция","fr":"Concept seulement","ja":"コンセプトのみ","ko":"컨셉만 있음","es":"Solo concepto"},

  "pc_ph_name":{"zh":"请输入您的姓名","en":"Your Name","de":"请输入您的姓名","ru":"请输入您的姓名","fr":"请输入您的姓名","ja":"请输入您的姓名","ko":"请输入您的姓名","es":"请输入您的姓名"},

  "pc_ph_company":{"zh":"请输入公司名称","en":"Your Company","de":"请输入公司名称","ru":"请输入公司名称","fr":"请输入公司名称","ja":"请输入公司名称","ko":"请输入公司名称","es":"请输入公司名称"},

  "pc_ph_phone":{"zh":"请输入电话号码","en":"Phone Number","de":"请输入电话号码","ru":"请输入电话号码","fr":"请输入电话号码","ja":"请输入电话号码","ko":"请输入电话号码","es":"请输入电话号码"},

  "pc_ph_email":{"zh":"请输入邮箱地址","en":"Email Address","de":"请输入邮箱地址","ru":"请输入邮箱地址","fr":"请输入邮箱地址","ja":"请输入邮箱地址","ko":"请输入邮箱地址","es":"请输入邮箱地址"},

  "pc_ph_cavity":{"zh":"例如：1出4 / 1+1","en":"e.g. 1+1 / 4 cavities","de":"例如：1出4 / 1+1","ru":"例如：1出4 / 1+1","fr":"例如：1出4 / 1+1","ja":"例如：1出4 / 1+1","ko":"例如：1出4 / 1+1","es":"例如：1出4 / 1+1"},

  "pc_ph_mold_req":{"zh":"请描述产品图纸、技术规格等","en":"Describe product drawings, technical specs, etc.","de":"请描述产品图纸、技术规格等","ru":"请描述产品图纸、技术规格等","fr":"请描述产品图纸、技术规格等","ja":"请描述产品图纸、技术规格等","ko":"请描述产品图纸、技术规格等","es":"请描述产品图纸、技术规格等"},

  "pc_ph_prod_name":{"zh":"例如：肠内营养连接器、鲁尔接头","en":"e.g. Enteral nutrition connector, Luer lock","de":"例如：肠内营养连接器、鲁尔接头","ru":"例如：肠内营养连接器、鲁尔接头","fr":"例如：肠内营养连接器、鲁尔接头","ja":"例如：肠内营养连接器、鲁尔接头","ko":"例如：肠内营养连接器、鲁尔接头","es":"例如：肠内营养连接器、鲁尔接头"},

  "pc_ph_quantity":{"zh":"例如：10万件/年","en":"e.g. 100,000 pcs/year","de":"例如：10万件/年","ru":"例如：10万件/年","fr":"例如：10万件/年","ja":"例如：10万件/年","ko":"例如：10万件/年","es":"例如：10万件/年"},

  "pc_ph_prod_req":{"zh":"请描述规格、交期要求等","en":"Specifications, delivery requirements, etc.","de":"请描述规格、交期要求等","ru":"请描述规格、交期要求等","fr":"请描述规格、交期要求等","ja":"请描述规格、交期要求等","ko":"请描述规格、交期要求等","es":"请描述规格、交期要求等"},

  "pc_ph_batch":{"zh":"例如：5万件/批","en":"e.g. 50,000 pcs/batch","de":"例如：5万件/批","ru":"例如：5万件/批","fr":"例如：5万件/批","ja":"例如：5万件/批","ko":"例如：5万件/批","es":"例如：5万件/批"},

  "pc_ph_oem_req":{"zh":"请描述工艺要求、交期、特殊需求等","en":"Process requirements, delivery timeline, special needs, etc.","de":"请描述工艺要求、交期、特殊需求等","ru":"请描述工艺要求、交期、特殊需求等","fr":"请描述工艺要求、交期、特殊需求等","ja":"请描述工艺要求、交期、特殊需求等","ko":"请描述工艺要求、交期、特殊需求等","es":"请描述工艺要求、交期、特殊需求等"},

  "pc_submitting":{"zh":"提交中...","en":"Submitting...","de":"Wird gesendet...","ru":"Отправка...","fr":"Envoi en cours...","ja":"送信中...","ko":"제출 중...","es":"Enviando..."},

  "pc_success_msg":{"zh":"已提交！我们将在24小时内联系您","en":"Submitted! We will contact you within 24h","de":"Gesendet! Wir werden Sie innerhalb von 24 Stunden kontaktieren","ru":"Отправлено! Мы свяжемся с вами в течение 24 часов","fr":"Envoyé ! Nous vous contacterons dans les 24 heures","ja":"送信完了！24時間以内にご連絡いたします","ko":"제출 완료! 24시간 이내에 연락드리겠습니다","es":"¡Enviado! Le contactaremos en 24 horas"},

  "pc_failure_msg":{"zh":"提交失败，请重试","en":"Failed, please try again","de":"Fehlgeschlagen, bitte versuchen Sie es erneut","ru":"Не удалось, попробуйте еще раз","fr":"Échec, veuillez réessayer","ja":"失敗しました。もう一度お試しください","ko":"실패했습니다. 다시 시도해주세요","es":"Falló, inténtelo de nuevo"},

  "pc_val_required":{"zh":"请填写所有必填字段","en":"Please fill in all required fields.","de":"Bitte füllen Sie alle Pflichtfelder aus.","ru":"Пожалуйста, заполните все обязательные поля.","fr":"Veuillez remplir tous les champs obligatoires.","ja":"すべての必須項目を入力してください","ko":"모든 필수 항목을 입력해주세요","es":"Por favor, complete todos los campos obligatorios."},



  "cookie_title":{"zh":"Cookie 与数据收集同意","en":"Cookie & Data Collection Consent","de":"Cookie- & Datenerhebungseinwilligung","ru":"Согласие на использование cookie и сбор данных","fr":"Consentement aux cookies et à la collecte de données","ja":"Cookie とデータ収集の同意","ko":"Cookie 및 데이터 수집 동의","es":"Consentimiento de cookies y recopilación de datos"},

  "cookie_body":{"zh":"我们使用 Cookie 与匿名统计技术，了解您浏览的页面、停留时长与搜索偏好，以改进网站与服务质量。您可点击「仅必要」拒绝行为追踪，拒绝后不会收集任何浏览行为数据（您主动提交的询盘除外）。","en":"We use cookies and anonymous analytics to understand which pages you view, how long you stay, and your search preferences, so we can improve our website and services. Click \"Necessary only\" to decline behavioral tracking; no browsing data will be collected afterwards (except inquiries you actively submit).","de":"Wir verwenden Cookies und anonyme Analysetechniken, um zu verstehen, welche Seiten Sie besuchen, wie lange Sie bleiben und welche Suchpräferenzen Sie haben, um Website und Service zu verbessern. Klicken Sie „Nur notwendig“, um dem Verhaltens-Tracking zu widersprechen; danach werden keine Nutzungsdaten erhoben (ausgenommen Anfragen, die Sie aktiv senden).","ru":"Мы используем cookie и анонимную аналитику, чтобы понимать, какие страницы вы просматриваете, как долго остаетесь на сайте и какие предпочтения в поиске у вас есть, чтобы улучшать сайт и качество обслуживания. Нажмите «Только необходимые», чтобы отказаться от поведенческого отслеживания; после этого никакие данные о просмотрах не будут собираться (кроме запросов, которые вы активно отправляете).","fr":"Nous utilisons des cookies et des statistiques anonymes pour comprendre quelles pages vous consultez, combien de temps vous restez et quelles sont vos préférences de recherche, afin d'améliorer le site et la qualité du service. Cliquez sur « Uniquement nécessaire » pour refuser le suivi comportemental ; aucune donnée de navigation ne sera ensuite collectée (sauf les demandes que vous soumettez activement).","ja":"当サイトでは、閲覧いただいたページ、滞在時間、検索の好みを把握するために Cookie と匿名の統計技術を使用しており、ウェブサイトおよびサービス品質の向上に役立てています。「必要なもののみ」をクリックすると行動トラッキングを拒否できます。拒否後、閲覧行動に関するデータは収集されません（お客様から能動的に送信されたお問い合わせを除く）。","ko":"당사는 고객이 열람하는 페이지, 체류 시간, 검색 선호도를 파악하여 웹사이트와 서비스 품질을 개선하기 위해 Cookie 및 익명 통계 기술을 사용합니다. '필수 항목만'을 클릭하면 행동 추적을 거부할 수 있으며, 거부 후에는 고객이 능동적으로 제출한 문의를 제외하고 어떠한 탐색 데이터도 수집되지 않습니다.","es":"Utilizamos cookies y estadísticas anónimas para entender qué páginas visita, cuánto tiempo permanece y cuáles son sus preferencias de búsqueda, con el fin de mejorar el sitio web y la calidad del servicio. Haga clic en «Solo necesarias» para rechazar el seguimiento de comportamiento; después no se recopilarán datos de navegación (excepto las consultas que envíe activamente)."},

  "cookie_accept":{"zh":"接受并继续","en":"Accept & Continue","de":"Akzeptieren & fortfahren","ru":"Принять и продолжить","fr":"Accepter et continuer","ja":"同意して続ける","ko":"동의하고 계속","es":"Aceptar y continuar"},

  "cookie_reject":{"zh":"仅必要","en":"Necessary only","de":"Nur notwendig","ru":"Только необходимые","fr":"Uniquement nécessaire","ja":"必要なもののみ","ko":"필수 항목만","es":"Solo necesarias"},

  "cookie_manage":{"zh":"Cookie 设置","en":"Cookie Settings","de":"Cookie-Einstellungen","ru":"Настройки cookie","fr":"Paramètres des cookies","ja":"Cookie 設定","ko":"Cookie 설정","es":"Configuración de cookies"},

  "m7_faq_title":{"zh":"常见问题","en":"FAQ","de":"FAQ","ru":"Часто задаваемые вопросы","fr":"FAQ","ja":"よくある質問","ko":"자주 묻는 질문","es":"Preguntas frecuentes"},
  "m7_faq_sub":{"zh":"关于产品、资质与合作的常见问题解答","en":"Answers to common questions about products, qualifications and cooperation","de":"Antworten auf häufige Fragen zu Produkten, Qualifikationen und Zusammenarbeit","ru":"Ответы на частые вопросы о продукции, квалификациях и сотрудничестве","fr":"Réponses aux questions fréquentes sur les produits, les qualifications et la coopération","ja":"製品・資格・協業に関するよくある質問への回答","ko":"제품, 인증 및 협력에 관한 자주 묻는 질문에 대한 답변","es":"Respuestas a preguntas frecuentes sobre productos, certificaciones y cooperación"},
  "m7_jobs_title":{"zh":"人才招聘","en":"Careers","de":"Karriere","ru":"Карьера","fr":"Carrières","ja":"採用情報","ko":"채용","es":"Empleo"},
  "m7_jobs_sub":{"zh":"加入我们，共同成长","en":"Join us and grow together","de":"Werden Sie Teil unseres Teams","ru":"Присоединяйтесь к нам","fr":"Rejoignez-nous","ja":"私たちと一緒に成長しましょう","ko":"함께 성장해요","es":"Únete a nosotros"},
  "m7_jobs_dept":{"zh":"部门","en":"Department","de":"Abteilung","ru":"Отдел","fr":"Département","ja":"部署","ko":"부서","es":"Departamento"},
  "m7_jobs_location":{"zh":"工作地点","en":"Location","de":"Standort","ru":"Местоположение","fr":"Lieu","ja":"勤務地","ko":"근무지","es":"Ubicación"},
  "m7_jobs_apply":{"zh":"申请职位","en":"Apply Now","de":"Jetzt bewerben","ru":"Подать заявку","fr":"Postuler","ja":"応募する","ko":"지원하기","es":"Postularse"},
  "m7_links_title":{"zh":"友情链接","en":"Friendly Links","de":"Partnerlinks","ru":"Дружественные ссылки","fr":"Liens partenaires","ja":"リンク集","ko":"링크","es":"Enlaces"},
  "m7_links_sub":{"zh":"合作伙伴与行业资源","en":"Partners and industry resources","de":"Partner und Branchenressourcen","ru":"Партнеры и отраслевые ресурсы","fr":"Partenaires et ressources du secteur","ja":"パートナーと業界リソース","ko":"파트너 및 업계 리소스","es":"Socios y recursos del sector"},
  "m7_sub_title":{"zh":"邮件订阅","en":"Newsletter","de":"Newsletter","ru":"Рассылка","fr":"Newsletter","ja":"メールマガジン","ko":"뉴스레터","es":"Boletín"},
  "m7_sub_sub":{"zh":"订阅我们的最新资讯与产品动态","en":"Subscribe to our latest news and product updates","de":"Abonnieren Sie unsere Neuigkeiten und Produktupdates","ru":"Подпишитесь на наши новости и обновления продуктов","fr":"Abonnez-vous à nos actualités et nouveautés produits","ja":"最新情報と製品ニュースを購読","ko":"최신 뉴스와 제품 소식을 구독하세요","es":"Suscríbase a nuestras noticias y novedades"},
  "m7_sub_ph":{"zh":"请输入您的邮箱","en":"Enter your email","de":"E-Mail eingeben","ru":"Введите ваш email","fr":"Saisissez votre e-mail","ja":"メールアドレスを入力","ko":"이메일을 입력하세요","es":"Introduzca su correo"},
  "m7_sub_btn":{"zh":"订阅","en":"Subscribe","de":"Abonnieren","ru":"Подписаться","fr":"S'abonner","ja":"購読","ko":"구독","es":"Suscribirse"},
  "m7_sub_success":{"zh":"订阅成功，感谢您的关注","en":"Subscribed! Thank you","de":"Abonniert! Vielen Dank","ru":"Подписка оформлена! Спасибо","fr":"Abonné ! Merci","ja":"購読完了！ありがとうございます","ko":"구독 완료! 감사합니다","es":"¡Suscrito! Gracias"},
  "m7_sub_dup":{"zh":"该邮箱已订阅","en":"This email is already subscribed","de":"Diese E-Mail ist bereits abonniert","ru":"Этот email уже подписан","fr":"Cet e-mail est déjà abonné","ja":"このメールは既に購読されています","ko":"이미 구독된 이메일입니다","es":"Este correo ya está suscrito"},
  "m7_sub_invalid":{"zh":"邮箱格式不正确","en":"Invalid email format","de":"Ungültiges E-Mail-Format","ru":"Неверный формат email","fr":"Format d'e-mail invalide","ja":"メール形式が正しくありません","ko":"잘못된 이메일 형식","es":"Formato de correo no válido"},
  "m7_sub_fail":{"zh":"订阅失败，请稍后重试","en":"Subscription failed, please try again later","de":"Abonnieren fehlgeschlagen, bitte später erneut versuchen","ru":"Не удалось подписаться, попробуйте позже","fr":"Échec de l'abonnement, réessayez plus tard","ja":"購読に失敗しました。後でもう一度お試しください","ko":"구독에 실패했습니다. 나중에 다시 시도해주세요","es":"Error al suscribirse, inténtelo más tarde"},
  "m7_dl_title":{"zh":"资料下载","en":"Downloads","de":"Downloads","ru":"Загрузки","fr":"Téléchargements","ja":"資料ダウンロード","ko":"자료 다운로드","es":"Descargas"},
  "m7_dl_sub":{"zh":"产品手册、认证证书与技术资料","en":"Product brochures, certificates and technical documents","de":"Produktbroschüren, Zertifikate und technische Unterlagen","ru":"Брошюры, сертификаты и техническая документация","fr":"Brochures produits, certificats et documents techniques","ja":"製品カタログ、認証書、技術資料","ko":"제품 브로셔, 인증서 및 기술 자료","es":"Folletos, certificados y documentación técnica"},
  "m7_dl_btn":{"zh":"下载","en":"Download","de":"Herunterladen","ru":"Скачать","fr":"Télécharger","ja":"ダウンロード","ko":"다운로드","es":"Descargar"},
  "m7_dl_count":{"zh":"次下载","en":"downloads","de":"Downloads","ru":"загрузок","fr":"téléchargements","ja":"ダウンロード","ko":"다운로드","es":"descargas"}

};



/* ═══════════ SHARED FOOTER (injected into every .site-footer-mount) ═══════════ */

/* 维护说明：全站页脚集中在此模板，改一处全局生效。

   隐私政策 / 服务条款 已接入站内页面（#page-privacy / #page-terms），

   走 hash 路由，无需单独 HTML 文件；如改为独立 privacy.html 等外链，改这两条 <a> 的 href 即可。 */

const FOOTER_HTML = `

  <div class="footer">

    <div class="wrap">

      <div class="footer-brand">

        <div class="logo-area">

          <img src="images/logo.webp" alt="弘欧" loading="lazy">

          <div class="brand-name">弘欧科技<small>HONDVO Technology</small></div>

        </div>

        <p data-lang-key="footer_desc">HONDVO Technology (Dongguan) Co., Ltd. · HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.<br>Specialized in Class II passive medical device injection components & precision mold manufacturing</p>

      </div>

      <div class="col"><h4 data-lang-key="ft_about">About Us</h4><a href="#page-about" data-scroll-to="about-who" data-lang-key="ft_about_who">Who We Are</a><a href="#page-about" data-scroll-to="about-values" data-lang-key="ft_about_values">Core Values</a><a href="#page-about" data-scroll-to="about-spirit" data-lang-key="ft_about_spirit">Hondvo Spirit</a><a href="#page-about" data-scroll-to="about-partners" data-lang-key="ft_about_partners">Global Partners</a><a href="#page-about" data-scroll-to="about-cases" data-lang-key="ft_about_cases">Case Studies</a><a href="#page-about" data-scroll-to="about-team" data-lang-key="ft_about_team">Our Team</a></div>

      <div class="col"><h4 data-lang-key="ft_products">Products & Services</h4><a href="#page-products" data-goto-tab="browse" data-lang-key="ft_prod_browse">Browse Products</a><a href="#page-products" data-goto-tab="discover" data-lang-key="ft_prod_discover">Discover Solutions</a><a href="#page-products" data-goto-tab="industries" data-lang-key="ft_prod_industries">Industries</a><a href="#page-mold" data-lang-key="ft_prod_mold">Precision Mold</a></div>

      <div class="col"><h4 data-lang-key="ft_mold">Mold Center</h4><a href="#page-mold" data-lang-key="ft_mold_design">Mold Design</a><a href="#page-mold" data-lang-key="ft_mold_machining">Precision Machining</a><a href="#page-mold" data-lang-key="ft_mold_injection">Injection Production</a><a href="#page-mold" data-lang-key="ft_mold_quality">Quality Control</a></div>

      <div class="col"><h4 data-lang-key="ft_qual">Qualifications</h4><a href="#page-qualifications" data-lang-key="ft_qual_13485">ISO 13485</a><a href="#page-qualifications" data-lang-key="ft_qual_16949">IATF 16949</a><a href="#page-qualifications" data-lang-key="ft_qual_9001">ISO 9001</a><a href="#page-qualifications" data-lang-key="ft_qual_env">Production Environment</a><a href="#page-qualifications" data-lang-key="ft_qual_iqoq">IQ/OQ/PQ Validation</a></div>

      <div class="col"><h4 data-lang-key="ft_news">News</h4><a href="#page-news" data-lang-key="ft_news_company">Company News</a><a href="#page-news" data-lang-key="ft_news_industry">Industry News</a></div>

      <div class="col"><h4 data-lang-key="ft_faq">FAQ</h4><a href="#page-faq" data-lang-key="ft_faq_qa">FAQ</a><a href="#page-faq" data-scroll-to="faq-downloads" data-lang-key="ft_faq_dl">Downloads</a><a href="#page-faq" data-scroll-to="faq-subscribe" data-lang-key="ft_faq_sub">Newsletter</a><a href="#page-faq" data-scroll-to="faq-links" data-lang-key="ft_faq_links">Links</a></div>

      <div class="col"><h4 data-lang-key="ft_contact">Contact Us</h4><a href="#page-careers" data-lang-key="ft_contact_job">Careers</a><a href="#page-contact" data-lang-key="ft_contact_reach">Contact Info</a></div>

    </div>

    <div class="wrap bottom">

      <div class="legal-links">

        <span data-lang-key="ft_copyright">© 2026 HONDVO Technology (Dongguan) Co., Ltd. & HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.</span>

        <span>|</span>

        <span>ISO 13485 / ISO 9001 / IATF 16949</span>

        <span>|</span>

        <a href="#page-privacy" data-lang-key="ft_privacy">Privacy Policy</a>

        <span>|</span>

        <a href="#page-terms" data-lang-key="ft_terms">Terms of Service</a>

      </div>

      <!-- TODO(PENDING): 社交图标为占位，无真实链接；接入真实社媒账号（如领英/微信公众号/YouTube 等）后将 svg 包进 <a href> -->

      <div class="social-icons" id="footer-social-icons">

        <a class="si-link" href="mailto:info@hondvotechnology.com" data-tip="info@hondvotechnology.com" aria-label="Email"><img class="si-img" src="images/email-circle.png" alt="Email"></a>

        <a class="si-link" href="#social-wechat" data-tip="WeChat: 待绑定" aria-label="WeChat"><!-- TODO: 接入真实微信号后替换 href 为真实链接 --><img class="si-img" src="images/logo-wechat.png" alt="WeChat"></a>

        <a class="si-link" href="#social-facebook" data-tip="Facebook: 待绑定" aria-label="Facebook"><!-- TODO: 接入真实 Facebook 主页后替换 href 为真实链接 --><img class="si-img" src="images/logo-square-facebook.png" alt="Facebook"></a>

      </div>

    </div>

  </div>

`;



/* 幂等注入：首次调用时把 FOOTER_HTML 写入所有 .site-footer-mount，之后不再重建 */

let footersInjected = false;

function injectFooters() {

  if (footersInjected) return;

  document.querySelectorAll('.site-footer-mount').forEach(function (m) {

    m.innerHTML = FOOTER_HTML;

  });

  footersInjected = true;

  resolveFooterSocialIcons(); // 页脚注入后解析社交图标媒体库映射（media-sync 的 DOMContentLoaded 扫描可能早于注入）

}

/* 页脚社交图标：按媒体库 name-map 解析
 *  - 命中：img src 替换为媒体库可访问 URL（显示图片）
 *  - 映射已加载但未命中（用户尚未上传对应图片）：img 隐藏 → 空白占位符
 *  - 映射未加载（后端不可达/尚未就绪）：延迟重试，保留静态兜底，不阻塞展示
 */
function resolveFooterSocialIcons() {
  var icons = document.querySelectorAll('.social-icons .si-img');
  if (!icons.length) return;
  var API = (window.HONDVO_API || '/api');

  function apply(map) {
    icons.forEach(function (img) {
      if (!img) return;
      var name = (img.getAttribute('src') || '').replace(/^images\//, '');
      var url = map ? map[name] : null;
      if (url) {
        img.setAttribute('src', url);
        img.style.display = '';
      } else {
        img.style.display = 'none'; // 映射已加载但未命中 → 空白占位
      }
    });
  }

  function retry(attempt) {
    if (attempt >= 4) return; // 重试上限，保留静态兜底
    setTimeout(function () {
      var map = window.HONDVO_MEDIA_MAP;
      if (map) { apply(map); return; }
      retry(attempt + 1);
    }, 250);
  }

  // 优先用 media-sync 已缓存的映射；否则自行拉取，失败则轮询等待
  if (window.HONDVO_MEDIA_MAP) { apply(window.HONDVO_MEDIA_MAP); return; }
  fetch(API + '/media/public/name-map', { cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(function (res) {
      if (res && res.code === 0 && res.data && typeof res.data === 'object') {
        window.HONDVO_MEDIA_MAP = res.data;
        apply(res.data);
      } else {
        retry(1);
      }
    })
    .catch(function () { retry(1); /* 后端不可达：保留静态兜底 */ });
}

/* 解析媒体库图片名 → 可访问 URL（用于社交图标的二维码弹窗）
 * - 命中 name-map：返回媒体库可访问 URL
 * - 未命中/映射未加载：返回 images/<name> 相对路径，由点击时补解析兜底
 */
function resolveQrUrl(name) {
  var n = String(name || '').replace(/^images\//, '');
  var map = window.HONDVO_MEDIA_MAP;
  if (map && map[n]) return map[n];
  return 'images/' + n;
}

/* 防白屏兜底：document 级 click 事件委托（capture 阶段）
 * 拦截所有 href 以 #social- 开头的社交图标链接，preventDefault 阻止单页 hash 路由
 * 处理未知 hash（如 #social-wechat / #social-facebook）导致页面空白的问题。
 * 不干预 renderSocial() 在 #footer-social-icons 上绑定的 data-qr 二维码灯箱逻辑：
 * 配置了二维码的图标由灯箱监听（preventDefault + 打开灯箱）正常生效；
 * 未配置二维码的图标（如 Facebook 未绑定）默认跳转被此处拦截，不再触发空白页。
 */
document.addEventListener('click', function (e) {
  var a = e.target && e.target.closest ? e.target.closest('a.si-link[href^="#social-"]') : null;
  if (a) e.preventDefault();
}, true);





/* ═══════════ LEGAL PAGES CONTENT (8 languages) ═══════════ */

const LEGAL = {

  privacy: {

    title: { zh:"隐私政策", en:"Privacy Policy", de:"Datenschutzerklärung", ru:"Политика конфиденциальности", fr:"Politique de confidentialité", ja:"プライバシーポリシー", ko:"개인정보 처리방침", es:"Política de privacidad" },

    updated: { zh:"最后更新：2026年8月", en:"Last updated: August 2026", de:"Zuletzt aktualisiert: August 2026", ru:"Последнее обновление: август 2026 г.", fr:"Dernière mise à jour : août 2026", ja:"最終更新日：2026年8月", ko:"최종 업데이트: 2026년 8월", es:"Última actualización: agosto de 2026" },

    s1_t: { zh:"引言", en:"Introduction", de:"Einleitung", ru:"Введение", fr:"Introduction", ja:"はじめに", ko:"소개", es:"Introducción" },

    s1_b: { zh:"本隐私政策说明 HONDVO Technology (Dongguan) Co., Ltd. 与 HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.（统称“HONDVO”或“我们”）如何收集、使用、存储和保护您在使用本网站时提供的信息。本网站为弘欧科技与弘欧精密模具双主体企业官网，主要面向医疗器械精密注塑零部件及精密模具的商务合作。", en:"This Privacy Policy explains how HONDVO Technology (Dongguan) Co., Ltd. and HONDVO TOOLING LIMITED (Dongguan) Co., Ltd. (collectively “HONDVO” or “we”) collect, use, store and protect the information you provide when using this website. This site is the official corporate website of HONDVO Technology and HONDVO Precision Tooling, focused primarily on business cooperation for medical-device precision injection-molded parts and precision molds.", de:"Diese Datenschutzerklärung erläutert, wie HONDVO Technology (Dongguan) Co., Ltd. und HONDVO TOOLING LIMITED (Dongguan) Co., Ltd. (zusammen „HONDVO“ oder „wir“) die Informationen erheben, verwenden, speichern und schützen, die Sie bei der Nutzung dieser Website bereitstellen. Diese Seite ist die offizielle Unternehmenswebsite von HONDVO Technology und HONDVO Precision Tooling und konzentriert sich vor allem auf Geschäftskooperationen für präzise medizinische Spritzgussbauteile und Präzisionsformen.", ru:"Настоящая Политика конфиденциальности объясняет, как HONDVO Technology (Dongguan) Co., Ltd. и HONDVO TOOLING LIMITED (Dongguan) Co., Ltd. (совместно «HONDVO» или «мы») собирают, используют, хранят и защищают информацию, которую вы предоставляете при использовании этого сайта. Этот сайт является официальным корпоративным сайтом HONDVO Technology и HONDVO Precision Tooling, ориентированным прежде всего на деловое сотрудничество в области прецизионных литьевых деталей для медицинских изделий и прецизионных форм.", fr:"La présente Politique de confidentialité explique comment HONDVO Technology (Dongguan) Co., Ltd. et HONDVO TOOLING LIMITED (Dongguan) Co., Ltd. (collectivement « HONDVO » ou « nous ») collectent, utilisent, stockent et protègent les informations que vous fournissez lors de l'utilisation de ce site. Ce site est le site officiel de HONDVO Technology et HONDVO Precision Tooling, axé principalement sur la coopération commerciale pour les pièces moulées par injection de précision pour dispositifs médicaux et les moules de précision.", ja:"本プライバシーポリシーは、HONDVO Technology (Dongguan) Co., Ltd. および HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.（総称して「HONDVO」または「当社」）が、本ウェブサイトの利用時にご提供いただいた情報をどのように収集、利用、保管、保護するかを説明するものです。本サイトは HONDVO Technology および HONDVO Precision Tooling の公式企業サイトであり、医療機器用精密射出成形部品および精密金型のビジネス提携を主な目的としています。", ko:"본 개인정보 처리방침은 HONDVO Technology (Dongguan) Co., Ltd.와 HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.(이하 총칭하여 “HONDVO” 또는 “당사”)가 본 웹사이트 이용 시 귀하가 제공하는 정보를 어떻게 수집·이용·저장·보호하는지 설명합니다. 본 사이트는 HONDVO Technology와 HONDVO Precision Tooling의 공식 기업 사이트이며, 의료기기 정밀 사출 성형 부품 및 정밀 금형에 대한 비즈니스 협력을 주로 다룹니다.", es:"Esta Política de privacidad explica cómo HONDVO Technology (Dongguan) Co., Ltd. y HONDVO TOOLING LIMITED (Dongguan) Co., Ltd. (en conjunto, «HONDVO» o «nosotros») recopilan, utilizan, almacenan y protegen la información que usted proporciona al usar este sitio web. Este sitio es el sitio corporativo oficial de HONDVO Technology y HONDVO Precision Tooling, centrado principalmente en la cooperación comercial para piezas moldeadas por inyección de precisión para dispositivos médicos y moldes de precisión." },

    s2_t: { zh:"我们收集的信息", en:"Information We Collect", de:"Erhobene Informationen", ru:"Собираемая информация", fr:"Informations que nous collectons", ja:"収集する情報", ko:"수집하는 정보", es:"Información que recopilamos" },

    s2_b: { zh:"当您通过网站表单（询盘弹窗或联系表单）提交信息时，我们可能收集您的姓名、公司名称、电话、电子邮箱、咨询类型及需求描述。这些信息由您主动提供，用于回应您的商务咨询。我们不会在您未主动提交的情况下收集上述个人数据。", en:"When you submit information through the website forms (inquiry modals or the contact form), we may collect your name, company name, phone number, email address, inquiry type and requirement description. This information is provided voluntarily by you and is used to respond to your business inquiries. We do not collect such personal data unless you submit it voluntarily.", de:"Wenn Sie Informationen über die Website-Formulare (Anfrage-Fenster oder Kontaktformular) übermitteln, erheben wir möglicherweise Ihren Namen, Firmennamen, Telefonnummer, E-Mail-Adresse, Anfragetyp und Anforderungsbeschreibung. Diese Informationen werden freiwillig von Ihnen bereitgestellt und dienen der Beantwortung Ihrer geschäftlichen Anfragen. Wir erheben diese personenbezogenen Daten nicht, sofern Sie sie nicht freiwillig übermitteln.", ru:"Когда вы отправляете информацию через формы сайта (всплывающие окна запроса или форму обратной связи), мы можем собирать ваше имя, название компании, номер телефона, адрес электронной почты, тип запроса и описание требований. Эта информация предоставляется вами добровольно и используется для ответа на ваши деловые запросы. Мы не собираем такие персональные данные, если вы не предоставите их добровольно.", fr:"Lorsque vous envoyez des informations via les formulaires du site (fenêtres de demande ou formulaire de contact), nous pouvons collecter votre nom, le nom de votre société, votre numéro de téléphone, votre adresse e-mail, le type de demande et la description de vos besoins. Ces informations sont fournies volontairement par vous et servent à répondre à vos demandes commerciales. Nous ne collectons pas ces données personnelles à moins que vous ne les fournissiez volontairement.", ja:"お客様がウェブサイトのフォーム（お問い合わせポップアップまたはお問い合わせフォーム）から情報を送信する際、当社はお名前、会社名、電話番号、メールアドレス、お問い合わせの種類、ご要望の詳細を収集する場合があります。これらの情報はお客様が任意に提供されたものであり、ご依頼への対応に使用されます。当社はお客様が自ら提供しない限り、これらの個人データを収集することはありません。", ko:"귀하가 웹사이트 양식(문의 팝업 또는 연락처 양식)을 통해 정보를 제출할 때, 당사는 귀하의 성함, 회사명, 전화번호, 이메일 주소, 문의 유형 및 요구 사항 설명을 수집할 수 있습니다. 이 정보는 귀하가 자발적으로 제공한 것이며 귀하의 비즈니스 문의에 대응하는 데 사용됩니다. 당사는 귀하가 자발적으로 제출하지 않는 한 해당 개인 데이터를 수집하지 않습니다.", es:"Cuando usted envía información a través de los formularios del sitio (ventanas emergentes de consulta o formulario de contacto), podemos recopilar su nombre, el nombre de su empresa, su número de teléfono, su dirección de correo electrónico, el tipo de consulta y la descripción de sus requisitos. Esta información la proporciona usted voluntariamente y se utiliza para responder a sus consultas comerciales. No recopilamos estos datos personales a menos que usted los proporcione voluntariamente." },

    s3_t: { zh:"信息的使用方式", en:"How We Use Information", de:"Verwendung der Informationen", ru:"Использование информации", fr:"Utilisation des informations", ja:"情報の利用目的", ko:"정보의 이용", es:"Cómo utilizamos la información" },

    s3_b: { zh:"我们仅将您提供的信息用于：回应商务咨询、提供产品与模具方案资料、安排技术对接，以及在必要时与您联系。我们不会将您的信息用于与商务合作无关的营销目的，亦不会出售您的个人信息。", en:"We use the information you provide solely to: respond to business inquiries, provide product and mold solution materials, arrange technical follow-up, and contact you when necessary. We do not use your information for marketing unrelated to business cooperation, nor do we sell your personal information.", de:"Wir verwenden die von Ihnen bereitgestellten Informationen ausschließlich, um: geschäftliche Anfragen zu beantworten, Produkt- und Werkzeuglösungsunterlagen bereitzustellen, technische Nachbereitung zu arrangieren und Sie bei Bedarf zu kontaktieren. Wir verwenden Ihre Informationen nicht für marketingbezogene Zwecke außerhalb der Geschäftskooperation und verkaufen Ihre personenbezogenen Daten nicht.", ru:"Мы используем предоставленную вами информацию исключительно для: ответа на деловые запросы, предоставления материалов по продукции и оснастке, организации технического сопровождения и связи с вами при необходимости. Мы не используем вашу информацию для маркетинга, не связанного с деловым сотрудничеством, и не продаем ваши персональные данные.", fr:"Nous utilisons les informations que vous fournissez uniquement pour : répondre aux demandes commerciales, fournir des documents sur les produits et moules, organiser le suivi technique et vous contacter si nécessaire. Nous n'utilisons pas vos informations à des fins de marketing étrangères à la coopération commerciale et ne vendons pas vos données personnelles.", ja:"当社はお客様から提供いただいた情報を、以下の目的にのみ使用します。ビジネスお問い合わせへの対応、製品および金型ソリューション資料の提供、技術的なフォローアップの手配、および必要に応じたご連絡。当社はビジネス協力に関係のないマーケティング目的で情報を利用したり、個人情報を販売したりすることはありません。", ko:"당사는 귀하가 제공한 정보를 오직 다음 목적으로만 사용합니다. 비즈니스 문의 대응, 제품 및 금형 솔루션 자료 제공, 기술 후속 조치 안배, 그리고 필요시 귀하에게 연락. 당사는 비즈니스 협력과 무관한 마케팅 목적으로 정보를 사용하거나 개인 정보를 판매하지 않습니다.", es:"Utilizamos la información que usted proporciona únicamente para: responder a consultas comerciales, proporcionar materiales de productos y moldes, organizar el seguimiento técnico y contactarle cuando sea necesario. No utilizamos su información con fines de marketing ajenos a la cooperación comercial ni vendemos su información personal." },

    s4_t: { zh:"Cookie 与技术", en:"Cookies & Technology", de:"Cookies & Technik", ru:"Файлы cookie и технологии", fr:"Cookies et technologie", ja:"Cookie と技術", ko:"쿠키 및 기술", es:"Cookies y tecnología" },

    s4_b: { zh:"本网站目前未部署第三方统计分析工具，亦未使用用于广告追踪的 Cookie。我们可能使用必要的本地存储（如 sessionStorage）以记住您的语言偏好，该数据仅保存在您的浏览器中，不会上传至服务器。", en:"This website does not currently deploy third-party analytics tools and does not use advertising-tracking cookies. We may use necessary local storage (such as sessionStorage) to remember your language preference; this data stays in your browser only and is not uploaded to any server.", de:"Diese Website setzt derzeit keine Analysesoftware von Drittanbietern ein und verwendet keine Cookies für Werbe-Tracking. Wir können notwendigen lokalen Speicher (z. B. sessionStorage) nutzen, um Ihre Sprachpräferenz zu merken; diese Daten verbleiben ausschließlich in Ihrem Browser und werden nicht auf einen Server hochgeladen.", ru:"В настоящее время этот сайт не использует аналитические инструменты сторонних производителей и не применяет cookie для рекламного отслеживания. Мы можем использовать необходимое локальное хранилище (например, sessionStorage) для запоминания вашего языкового предпочтения; эти данные хранятся только в вашем браузере и не загружаются на сервер.", fr:"Ce site n'utilise actuellement aucun outil d'analyse tiers et n'emploie pas de cookies de suivi publicitaire. Nous pouvons utiliser un stockage local nécessaire (comme sessionStorage) pour mémoriser votre préférence de langue ; ces données restent uniquement dans votre navigateur et ne sont téléversées sur aucun serveur.", ja:"本サイトは現在、第三者の分析ツールを導入しておらず、広告追跡用のCookieも使用していません。言語設定を記憶するために必要なローカルストレージ（sessionStorage など）を使用する場合がありますが、このデータはお客様のブラウザ内のみに保存され、サーバーに送信されることはありません。", ko:"본 웹사이트는 현재 타사 분석 도구를 배포하지 않으며 광고 추적용 쿠키를 사용하지 않습니다. 언어 기본 설정을 기억하기 위해 필요한 로컬 저장소(sessionStorage 등)를 사용할 수 있으나, 이 데이터는 브라우저에만 머물며 서버로 업로드되지 않습니다.", es:"Este sitio web no implementa actualmente herramientas de análisis de terceros ni utiliza cookies de seguimiento publicitario. Podemos usar almacenamiento local necesario (como sessionStorage) para recordar su preferencia de idioma; estos datos permanecen únicamente en su navegador y no se cargan en ningún servidor." },

    s5_t: { zh:"信息共享", en:"Information Sharing", de:"Weitergabe von Informationen", ru:"Передача информации", fr:"Partage des informations", ja:"情報の共有", ko:"정보 공유", es:"Compartición de información" },

    s5_b: { zh:"除法律法规要求、或为代表您安排生产/技术对接而必须向关联公司或受托服务商提供外，我们不会向任何第三方披露您的个人信息。我们不会将您的信息出售或出租给第三方。", en:"Except where required by law or where necessary to arrange production/technical follow-up on your behalf with our affiliates or contracted service providers, we do not disclose your personal information to any third party. We do not sell or rent your information to third parties.", de:"Außer wenn gesetzlich vorgeschrieben oder zur Arrangeierung von Produktion/technischem Folgeprozess mit unseren verbundenen Unternehmen oder beauftragten Dienstleistern erforderlich, geben wir Ihre personenbezogenen Daten nicht an Dritte weiter. Wir verkaufen oder vermieten Ihre Informationen nicht an Dritte.", ru:"За исключением случаев, требуемых законом, или необходимых для организации производства/технического сопровождения от вашего имени через наши аффилированные компании или подрядчиков, мы не раскрываем ваши персональные данные третьим лицам. Мы не продаем и не сдаем в аренду вашу информацию третьим лицам.", fr:"Sauf obligation légale ou nécessité d'organiser pour vous la production ou le suivi technique avec nos sociétés affiliées ou prestataires contractuels, nous ne divulguons pas vos informations personnelles à des tiers. Nous ne vendons ni ne louons vos informations à des tiers.", ja:"法令で要求される場合、または当社の関連会社もしくは委託先と生産・技術フォローアップを手配するために必要な場合を除き、当社はお客様の個人情報を第三者に開示しません。当社はお客様の情報を第三者に販売・貸与することはありません。", ko:"법령상 요구되거나, 귀하를 대신하여 생산/기술 후속 조치를 위해 관련 회사 또는 위탁 서비스 제공업체에 제공해야 하는 경우를 제외하고, 당사는 귀하의 개인 정보를 제3자에게 공개하지 않습니다. 당사는 귀하의 정보를 제3자에게 매각하거나 임대하지 않습니다.", es:"Salvo que lo exija la ley o sea necesario para organizar la producción o el seguimiento técnico en su nombre con nuestras filiales o proveedores contratados, no divulgamos su información personal a terceros. No vendemos ni alquilamos su información a terceros." },

    s6_t: { zh:"数据留存", en:"Data Retention", de:"Datenspeicherung", ru:"Хранение данных", fr:"Conservation des données", ja:"データの保持", ko:"데이터 보관", es:"Retención de datos" },

    s6_b: { zh:"我们仅在实现本政策所述目的所需的期限内保留您的个人信息，并在不再需要时及时删除或匿名化处理。具体留存期限可能因业务性质与法律要求而异。", en:"We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, and delete or anonymize it promptly when no longer needed. The specific retention period may vary depending on the nature of the business and legal requirements.", de:"Wir speichern Ihre personenbezogenen Daten nur so lange, wie es zur Erfüllung der in dieser Richtlinie genannten Zwecke erforderlich ist, und löschen oder anonymisieren sie umgehend, wenn sie nicht mehr benötigt werden. Die genaue Speicherdauer kann je nach Geschäftsart und gesetzlichen Anforderungen variieren.", ru:"Мы храним ваши персональные данные только в течение срока, необходимого для выполнения целей, описанных в настоящей политике, и своевременно удаляем или обезличиваем их, когда они больше не нужны. Конкретный срок хранения может различаться в зависимости от характера бизнеса и законодательных требований.", fr:"Nous conservons vos informations personnelles uniquement pendant la durée nécessaire à la réalisation des finalités décrites dans cette politique, et les supprimons ou anonymisons rapidement lorsqu'elles ne sont plus nécessaires. La durée de conservation précise peut varier selon la nature de l'activité et les exigences légales.", ja:"当社は、本ポリシーに記載された目的を達成するために必要な期間のみお客様の個人情報を保持し、不要になった場合は速やかに削除または匿名化します。具体的な保持期間は、事業の性質および法的要求により異なる場合があります。", ko:"당사는 본 정책에 명시된 목적을 달성하는 데 필요한 기간 동안만 귀하의 개인 정보를 보관하며, 더 이상 필요하지 않게 되면 즉시 삭제하거나 익명화합니다. 구체적인 보관 기간은 사업의 성격과 법적 요구 사항에 따라 다를 수 있습니다.", es:"Conservamos su información personal únicamente durante el tiempo necesario para cumplir los fines descritos en esta política, y la eliminamos o anonimizamos prontamente cuando ya no es necesaria. El período de retención específico puede variar según la naturaleza del negocio y los requisitos legales." },

    s7_t: { zh:"您的权利", en:"Your Rights", de:"Ihre Rechte", ru:"Ваши права", fr:"Vos droits", ja:"お客様の権利", ko:"귀하의 권리", es:"Sus derechos" },

    s7_b: { zh:"根据您所在司法管辖区（包括适用时的欧盟 GDPR）的相关法律，您可能有权访问、更正、删除您的个人数据，或限制其处理、反对处理并携带数据。如需行使上述权利，请通过下方联系方式向我们提出请求。", en:"Depending on your jurisdiction (including the EU GDPR where applicable), you may have the right to access, correct or delete your personal data, or to restrict, object to its processing and port your data. To exercise these rights, please contact us using the details below.", de:"Je nach Zuständigkeit (einschließlich der EU-DSGVO, sofern anwendbar) haben Sie möglicherweise das Recht, auf Ihre personenbezogenen Daten zuzugreifen, sie zu berichtigen oder zu löschen oder deren Verarbeitung einzuschränken, zu widersprechen und Daten zu übertragen. Um diese Rechte auszuüben, kontaktieren Sie uns bitte über die unten stehenden Angaben.", ru:"В зависимости от вашей юрисдикции (включая применимое законодательство ЕС GDPR) вы можете иметь право на доступ к своим персональным данным, их исправление или удаление, а также на ограничение обработки, возражение против неё и перенос данных. Чтобы воспользоваться этими правами, пожалуйста, свяжитесь с нами по указанным ниже контактам.", fr:"Selon votre juridiction (y compris le RGPD de l'UE le cas échéant), vous pouvez avoir le droit d'accéder à vos données personnelles, de les corriger ou de les supprimer, ou d'en limiter le traitement, de vous y opposer et d'en porter les données. Pour exercer ces droits, veuillez nous contacter aux coordonnées ci-dessous.", ja:"お客様のお住まいの法域（該当する場合はEUのGDPRを含む）の関連法規に基づき、お客様はご自身の個人データへのアクセス、訂正、削除、処理の制限、処理への異議申立て、およびデータのポータビリティに関する権利を有する場合があります。これらの権利を行使するには、以下の連絡先までご依頼ください。", ko:"귀하의 관할 구역(해당되는 경우 EU GDPR 포함)의 관련 법률에 따라 귀하는 개인 데이터에 접근·정정·삭제하거나, 처리를 제한·거부하고 데이터를 이동할 권리가 있을 수 있습니다. 이러한 권리를 행사하려면 아래 연락처로 문의해 주시기 바랍니다.", es:"Según su jurisdicción (incluido el RGPD de la UE cuando sea aplicable), puede tener derecho a acceder, rectificar o eliminar sus datos personales, o a limitar su tratamiento, oponerse a este y portar sus datos. Para ejercer estos derechos, contáctenos utilizando los datos que figuran a continuación." },

    s8_t: { zh:"国际数据传输", en:"International Transfers", de:"Internationale Übermittlung", ru:"Международная передача", fr:"Transferts internationaux", ja:"国際的なデータ転送", ko:"국제 데이터 전송", es:"Transferencias internacionales" },

    s8_b: { zh:"HONDVO 的运营位于中国，您提交的信息可能被存储或处理于中国境内。若您位于其他国家和地区，您理解并同意您的信息可能被传输至中国并按照本政策处理。", en:"HONDVO operates in China, and the information you submit may be stored or processed within China. If you are located in other countries or regions, you understand and consent that your information may be transferred to China and processed in accordance with this policy.", de:"HONDVO ist in China tätig, und die von Ihnen übermittelten Informationen können in China gespeichert oder verarbeitet werden. Wenn Sie sich in anderen Ländern oder Regionen befinden, verstehen und stimmen Sie zu, dass Ihre Informationen nach China übertragen und gemäß dieser Richtlinie verarbeitet werden können.", ru:"HONDVO осуществляет деятельность в Китае, и предоставленная вами информация может храниться или обрабатываться в Китае. Если вы находитесь в другой стране или регионе, вы понимаете и соглашаетесь с тем, что ваша информация может передаваться в Китай и обрабатываться в соответствии с настоящей политикой.", fr:"HONDVO opère en Chine, et les informations que vous soumettez peuvent être stockées ou traitées en Chine. Si vous vous trouvez dans un autre pays ou région, vous comprenez et acceptez que vos informations puissent être transférées en Chine et traitées conformément à cette politique.", ja:"HONDVO は中国で事業を運営しており、お客様が送信した情報は中国国内で保管または処理される場合があります。他の国や地域に所在するお客様は、ご自身の情報が中国に転送され、本ポリシーに従って処理されることに理解と同意を表明したものとみなされます。", ko:"HONDVO는 중국에서 운영되며, 귀하가 제출한 정보는 중국 내에 저장되거나 처리될 수 있습니다. 다른 국가나 지역에 거주하는 경우, 귀하는 귀하의 정보가 중국으로 전송되어 본 정책에 따라 처리될 수 있음을 이해하고 동의하는 것으로 간주됩니다.", es:"HONDVO opera en China, y la información que usted envía puede almacenarse o procesarse dentro de China. Si usted se encuentra en otros países o regiones, usted comprende y consiente que su información pueda transferirse a China y tratarse conforme a esta política." },

    s9_t: { zh:"联系我们", en:"Contact Us", de:"Kontakt", ru:"Связаться с нами", fr:"Nous contacter", ja:"お問い合わせ", ko:"문의하기", es:"Contáctenos" },

    s9_b: { zh:"如对本隐私政策有任何疑问，或希望行使您的权利，请通过邮箱 info@hondvotechnology.com 或电话 +86 769 8188 9275 与我们联系。我们将在合理时间内予以回复。", en:"If you have any questions about this Privacy Policy, or wish to exercise your rights, please contact us at info@hondvotechnology.com or by phone at +86 769 8188 9275. We will respond within a reasonable time.", de:"Wenn Sie Fragen zu dieser Datenschutzerklärung haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns bitte unter info@hondvotechnology.com oder telefonisch unter +86 769 8188 9275. Wir werden innerhalb angemessener Zeit antworten.", ru:"Если у вас есть вопросы по настоящей Политике конфиденциальности или вы хотите воспользоваться своими правами, пожалуйста, свяжитесь с нами по электронной почте info@hondvotechnology.com или по телефону +86 769 8188 9275. Мы ответим в разумные сроки.", fr:"Si vous avez des questions sur cette Politique de confidentialité ou souhaitez exercer vos droits, veuillez nous contacter à info@hondvotechnology.com ou par téléphone au +86 769 8188 9275. Nous répondrons dans un délai raisonnable.", ja:"本プライバシーポリシーに関するご質問や、権利の行使をご希望の場合は、info@hondvotechnology.com または電話 +86 769 8188 9275 までお問い合わせください。合理的な期間内に対応いたします。", ko:"본 개인정보 처리방침에 관한 문의나 권리 행사를 원하시면 info@hondvotechnology.com 또는 전화 +86 769 8188 9275로 연락주시기 바랍니다. 합리적인 기간 내에 회신드리겠습니다.", es:"Si tiene alguna pregunta sobre esta Política de privacidad o desea ejercer sus derechos, contáctenos en info@hondvotechnology.com o por teléfono al +86 769 8188 9275. Responderemos en un plazo razonable." },

    s10_t: { zh:"政策更新", en:"Policy Updates", de:"Aktualisierungen", ru:"Обновления политики", fr:"Mises à jour", ja:"ポリシーの更新", ko:"정책 업데이트", es:"Actualizaciones de la política" },

    s10_b: { zh:"我们可能不时更新本隐私政策。重大变更将通过本页面发布更新版本，并在页面顶部标注最后更新日期。建议您定期查阅本页面以了解最新内容。", en:"We may update this Privacy Policy from time to time. Material changes will be published as an updated version on this page, with the last-updated date noted at the top. We recommend reviewing this page periodically to stay informed.", de:"Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wesentliche Änderungen werden als aktualisierte Version auf dieser Seite veröffentlicht, wobei das Datum der letzten Aktualisierung oben angegeben wird. Wir empfehlen, diese Seite regelmäßig einzusehen.", ru:"Мы можем время от времени обновлять настоящую Политику конфиденциальности. Существенные изменения будут опубликованы в виде обновленной версии на этой странице с указанием даты последнего обновления вверху. Рекомендуем периодически просматривать эту страницу.", fr:"Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Les changements importants seront publiés sous forme de version mise à jour sur cette page, avec la date de dernière mise à jour indiquée en haut. Nous vous recommandons de consulter régulièrement cette page.", ja:"当社は本プライバシーポリシーを随時更新する場合があります。重要な変更は、本ページに更新版として掲載され、上部に最終更新日が表示されます。最新情報を確認するため、本ページを定期的にご確認することをお勧めします。", ko:"당사는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 중대한 변경 사항은 이 페이지에 업데이트된 버전으로 게시되며, 상단에 최종 업데이트 날짜가 표시됩니다. 최신 내용을 확인하려면 이 페이지를 정기적으로 검토하시기 바랍니다.", es:"Podemos actualizar esta Política de privacidad de vez en cuando. Los cambios materiales se publicarán como una versión actualizada en esta página, con la fecha de última actualización indicada en la parte superior. Le recomendamos revisar esta página periódicamente." }

  },

  terms: {

    title: { zh:"服务条款", en:"Terms of Service", de:"Nutzungsbedingungen", ru:"Условия использования", fr:"Conditions d'utilisation", ja:"利用規約", ko:"이용 약관", es:"Términos del servicio" },

    updated: { zh:"最后更新：2026年8月", en:"Last updated: August 2026", de:"Zuletzt aktualisiert: August 2026", ru:"Последнее обновление: август 2026 г.", fr:"Dernière mise à jour : août 2026", ja:"最終更新日：2026年8月", ko:"최종 업데이트: 2026년 8월", es:"Última actualización: agosto de 2026" },

    s1_t: { zh:"条款的接受", en:"Acceptance of Terms", de:"Annahme der Bedingungen", ru:"Принятие условий", fr:"Acceptation des conditions", ja:"条件の承諾", ko:"약관의 승낙", es:"Aceptación de los términos" },

    s1_b: { zh:"访问或使用本网站，即表示您同意受本服务条款约束。若您不同意本条款，请勿使用本网站。本条款构成您与 HONDVO 之间关于网站使用的协议。", en:"By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree with these terms, please do not use this website. These terms constitute the agreement between you and HONDVO regarding use of the site.", de:"Durch den Zugriff auf oder die Nutzung dieser Website erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie diese Website bitte nicht. Diese Bedingungen stellen die Vereinbarung zwischen Ihnen und HONDVO hinsichtlich der Nutzung der Website dar.", ru:"Получая доступ к этому сайту или используя его, вы соглашаетесь соблюдать настоящие Условия использования. Если вы не согласны с этими условиями, пожалуйста, не используйте сайт. Настоящие условия составляют соглашение между вами и HONDVO в отношении использования сайта.", fr:"En accédant à ce site ou en l'utilisant, vous acceptez d'être lié par les présentes Conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site. Les présentes conditions constituent l'accord entre vous et HONDVO concernant l'utilisation du site.", ja:"本ウェブサイトにアクセスまたは利用することにより、お客様は本利用規約に拘束されることに同意したものとみなされます。本規約に同意いただけない場合は、本サイトをご利用にならないでください。本規約は、お客様と HONDVO 間の本サイト利用に関する合意を構成します。", ko:"본 웹사이트에 접속하거나 이용함으로써 귀하는 본 이용 약관에 구속되는 것에 동의하는 것으로 간주됩니다. 본 약관에 동의하지 않으시면 본 웹사이트를 이용하지 마십시오. 본 약관은 귀하와 HONDVO 간의 사이트 이용에 관한 계약을 구성합니다.", es:"Al acceder o utilizar este sitio web, usted acepta quedar vinculado por estos Términos del servicio. Si no está de acuerdo con estos términos, no utilice este sitio web. Estos términos constituyen el acuerdo entre usted y HONDVO con respecto al uso del sitio." },

    s2_t: { zh:"公司信息与适用范围", en:"Company Information & Scope", de:"Unternehmensinformationen & Geltungsbereich", ru:"Информация о компании и сфера действия", fr:"Informations sur l'entreprise et portée", ja:"会社情報と適用範囲", ko:"회사 정보 및 적용 범위", es:"Información de la empresa y alcance" },

    s2_b: { zh:"本网站由 HONDVO Technology (Dongguan) Co., Ltd. 与 HONDVO TOOLING LIMITED (Dongguan) Co., Ltd. 运营，内容涉及医疗器械精密注塑零部件、精密模具及相关制造服务。本条款适用于您对本网站全部内容、表单及资料的访问与使用。", en:"This website is operated by HONDVO Technology (Dongguan) Co., Ltd. and HONDVO TOOLING LIMITED (Dongguan) Co., Ltd., and covers medical-device precision injection-molded parts, precision molds and related manufacturing services. These terms apply to your access to and use of all content, forms and materials on this site.", de:"Diese Website wird von HONDVO Technology (Dongguan) Co., Ltd. und HONDVO TOOLING LIMITED (Dongguan) Co., Ltd. betrieben und behandelt präzise medizinische Spritzgussbauteile, Präzisionsformen und damit verbundene Fertigungsdienstleistungen. Diese Bedingungen gelten für Ihren Zugriff auf und die Nutzung aller Inhalte, Formulare und Materialien auf dieser Website.", ru:"Этот сайт управляется HONDVO Technology (Dongguan) Co., Ltd. и HONDVO TOOLING LIMITED (Dongguan) Co., Ltd. и посвящен прецизионным литьевым деталям для медицинских изделий, прецизионным формам и сопутствующим производственным услугам. Настоящие условия применяются к вашему доступу ко всему содержимому, формам и материалам сайта и их использованию.", fr:"Ce site est exploité par HONDVO Technology (Dongguan) Co., Ltd. et HONDVO TOOLING LIMITED (Dongguan) Co., Ltd., et porte sur les pièces moulées par injection de précision pour dispositifs médicaux, les moules de précision et les services de fabrication associés. Ces conditions s'appliquent à votre accès et à votre utilisation de tout le contenu, des formulaires et des documents du site.", ja:"本ウェブサイトは HONDVO Technology (Dongguan) Co., Ltd. および HONDVO TOOLING LIMITED (Dongguan) Co., Ltd. が運営しており、医療機器用精密射出成形部品、精密金型および関連製造サービスに関する内容を扱っています。本規約は、本サイト上のすべてのコンテンツ、フォーム、資料へのアクセスおよび利用に適用されます。", ko:"본 웹사이트는 HONDVO Technology (Dongguan) Co., Ltd.와 HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.가 운영하며, 의료기기 정밀 사출 성형 부품, 정밀 금형 및 관련 제조 서비스를 다룹니다. 본 약관은 본 사이트의 모든 콘텐츠, 양식 및 자료에 대한 귀하의 접속 및 이용에 적용됩니다.", es:"Este sitio web es operado por HONDVO Technology (Dongguan) Co., Ltd. y HONDVO TOOLING LIMITED (Dongguan) Co., Ltd., y abarca piezas moldeadas por inyección de precisión para dispositivos médicos, moldes de precisión y servicios de fabricación relacionados. Estos términos se aplican a su acceso y uso de todo el contenido, los formularios y los materiales del sitio." },

    s3_t: { zh:"网站使用与询盘", en:"Website Use & Inquiries", de:"Nutzung & Anfragen", ru:"Использование сайта и запросы", fr:"Utilisation du site et demandes", ja:"ウェブサイトの利用とお問い合わせ", ko:"웹사이트 이용 및 문의", es:"Uso del sitio y consultas" },

    s3_b: { zh:"您可通过网站表单提交询盘，我们收到后将安排专人跟进。表单提交不构成任何具有约束力的订单或合同，正式合作以双方签署的书面协议为准。请勿通过表单提交涉密或受出口管制限制的敏感技术资料。", en:"You may submit inquiries through the website forms, and we will arrange dedicated follow-up upon receipt. Form submission does not constitute any binding order or contract; formal cooperation is subject to a written agreement signed by both parties. Please do not submit confidential or export-controlled sensitive technical data through the forms.", de:"Sie können Anfragen über die Website-Formulare senden, und wir arrangieren nach Erhalt eine gezielte Nachbereitung. Die Formularübermittlung stellt keine verbindliche Bestellung oder keinen Vertrag dar; die formelle Zusammenarbeit unterliegt einer von beiden Parteien unterzeichneten schriftlichen Vereinbarung. Bitte übermitteln Sie keine vertraulichen oder exportkontrollierten sensiblen technischen Daten über die Formulare.", ru:"Вы можете отправлять запросы через формы сайта, и мы организуем индивидуальное сопровождение после получения. Отправка формы не является обязывающим заказом или договором; официальное сотрудничество основывается на письменном соглашении, подписанном обеими сторонами. Пожалуйста, не отправляйте через формы конфиденциальные или подпадающие под экспортный контроль чувствительные технические данные.", fr:"Vous pouvez soumettre des demandes via les formulaires du site, et nous organiserons un suivi dédié dès réception. L'envoi d'un formulaire ne constitue ni commande ni contrat contraignant ; la coopération formelle est soumise à un accord écrit signé par les deux parties. Veuillez ne pas soumettre de données techniques sensibles confidentielles ou soumises au contrôle des exportations via les formulaires.", ja:"ウェブサイトのフォームからお問い合わせを送信いただけます。受領後、担当者がフォローアップいたします。フォームの送信は、いかなる拘束力のある注文や契約も構成するものではなく、正式な協力は双方が署名した書面による合意に基づきます。機密または輸出規制対象の機微な技術データをフォームから送信しないでください。", ko:"웹사이트 양식을 통해 문의를 제출하실 수 있으며, 당사는 접수 후 전담 후속 조치를 안배합니다. 양식 제출은 구속력 있는 주문이나 계약을 구성하지 않으며, 공식 협력은 양 당사자가 서명한 서면 계약을 따릅니다. 기밀 또는 수출 통제 대상인 민감한 기술 데이터를 양식을 통해 제출하지 마십시오.", es:"Puede enviar consultas a través de los formularios del sitio, y organizaremos un seguimiento dedicado al recibirlas. El envío del formulario no constituye ningún pedido ni contrato vinculante; la cooperación formal está sujeta a un acuerdo escrito firmado por ambas partes. No envíe por los formularios datos técnicos sensibles confidenciales o sujetos a control de exportaciones." },

    s4_t: { zh:"知识产权", en:"Intellectual Property", de:"Geistiges Eigentum", ru:"Интеллектуальная собственность", fr:"Propriété intellectuelle", ja:"知的財産権", ko:"지식재산권", es:"Propiedad intelectual" },

    s4_b: { zh:"本网站及其内容（含文字、图像、设计、标识、产品资料）的知识产权归 HONDVO 或 respective 权利人所有。未经书面许可，不得复制、转载、修改或用于商业用途。产品图片与规格仅供参考，不构成技术承诺。", en:"The intellectual property rights in this website and its content (including text, images, design, logos and product materials) belong to HONDVO or the respective rights holders. Without written permission, you may not copy, reproduce, modify or use them for commercial purposes. Product images and specifications are for reference only and do not constitute a technical commitment.", de:"Die Rechte des geistigen Eigentums an dieser Website und ihren Inhalten (einschließlich Text, Bildern, Design, Logos und Produktmaterialien) gehören HONDVO oder den jeweiligen Rechteinhabern. Ohne schriftliche Genehmigung dürfen Sie diese nicht kopieren, reproduzieren, modifizieren oder gewerblich nutzen. Produktbilder und -spezifikationen dienen nur als Referenz und stellen keine technische Zusicherung dar.", ru:"Права интеллектуальной собственности на этот сайт и его содержимое (включая текст, изображения, дизайн, логотипы и материалы о продукции) принадлежат HONDVO или соответствующим правообладателям. Без письменного разрешения вы не можете копировать, воспроизводить, изменять или использовать их в коммерческих целях. Изображения и спецификации продукции предоставляются только для справки и не являются техническим обязательством.", fr:"Les droits de propriété intellectuelle sur ce site et son contenu (y compris le texte, les images, le design, les logos et les documents produits) appartiennent à HONDVO ou aux titulaires respectifs. Sans autorisation écrite, vous ne pouvez ni copier, ni reproduire, ni modifier, ni utiliser ces éléments à des fins commerciales. Les images et spécifications des produits sont fournies à titre indicatif et ne constituent pas un engagement technique.", ja:"本ウェブサイトおよびそのコンテンツ（テキスト、画像、デザイン、ロゴ、製品資料を含む）の知的財産権は、HONDVO または各権利者に帰属します。書面による許可なく、これらを複製、転載、改変、または商業目的で利用することはできません。製品画像および仕様は参考用であり、技術的な確約を構成するものではありません。", ko:"본 웹사이트 및 그 콘텐츠(텍스트, 이미지, 디자인, 로고, 제품 자료 포함)의 지식재산권은 HONDVO 또는 해당 권리자에게 귀속됩니다. 서면 허가 없이 이를 복제, 전재, 수정하거나 상업적 목적으로 사용할 수 없습니다. 제품 이미지 및 사양은 참고용이며 기술적 확약을 구성하지 않습니다.", es:"Los derechos de propiedad intelectual de este sitio web y su contenido (incluido el texto, las imágenes, el diseño, los logotipos y los materiales de productos) pertenecen a HONDVO o a los respectivos titulares de derechos. Sin permiso por escrito, no puede copiar, reproducir, modificar ni utilizarlos con fines comerciales. Las imágenes y especificaciones de los productos son solo de referencia y no constituyen un compromiso técnico." },

    s5_t: { zh:"产品信息与免责", en:"Product Info & Disclaimer", de:"Produktinformation & Haftungsausschluss", ru:"Информация о продукции и отказ", fr:"Informations produit et avertissement", ja:"製品情報と免責事項", ko:"제품 정보 및 면책", es:"Información del producto y descargo de responsabilidad" },

    s5_b: { zh:"本网站所示产品、工艺及认证信息仅供一般性介绍。医疗器械相关产品须符合目标市场的法规与注册要求，最终方案以双方技术确认文件及适用法规为准。HONDVO 不对因依赖网站信息而产生的任何后果承担责任。", en:"The products, processes and certification information shown on this site are for general introduction only. Medical-device-related products must comply with the regulations and registration requirements of the target market; the final solution is subject to mutually confirmed technical documents and applicable regulations. HONDVO is not responsible for any consequences arising from reliance on website information.", de:"Die auf dieser Website gezeigten Produkte, Prozesse und Zertifizierungsinformationen dienen nur der allgemeinen Vorstellung. Medizinprodukt-bezogene Produkte müssen den Vorschriften und Registrierungsanforderungen des Zielmarktes entsprechen; die endgültige Lösung unterliegt gemeinsam bestätigten technischen Dokumenten und geltenden Vorschriften. HONDVO übernimmt keine Haftung für Folgen, die aus der Verlass auf Website-Informationen entstehen.", ru:"Представленные на сайте сведения о продукции, процессах и сертификации носят исключительно общий ознакомительный характер. Продукция, связанная с медицинскими изделиями, должна соответствовать нормам и требованиям к регистрации целевого рынка; окончательное решение основывается на согласованных сторонами технических документах и применимых нормах. HONDVO не несет ответственности за любые последствия, возникающие в результате опоры на информацию сайта.", fr:"Les produits, procédés et informations de certification présentés sur ce site sont fournis à titre d'introduction générale. Les produits liés aux dispositifs médicaux doivent respecter les réglementations et exigences d'enregistrement du marché cible ; la solution finale est soumise aux documents techniques confirmés par les deux parties et aux réglementations applicables. HONDVO n'assume aucune responsabilité pour toute conséquence découlant de la confiance accordée aux informations du site.", ja:"本サイトに掲載されている製品、工程、認証情報は、あくまで一般的な紹介を目的としたものです。医療機器関連製品は対象市場の法規制および登録要件を満たす必要があり、最終的なソリューションは両者で確認した技術文書および適用法規に準拠します。HONDVO は、ウェブサイトの情報を前提としたことで生じたいかなる結果についても責任を負いません。", ko:"본 사이트에 표시된 제품, 공정 및 인증 정보는 일반적인 소개용입니다. 의료기기 관련 제품은 대상 시장의 규정 및 등록 요건을 충족해야 하며, 최종 솔루션은 양측이 확인한 기술 문서 및 적용 규정에 따릅니다. HONDVO는 웹사이트 정보에 의존함으로써 발생하는 어떠한 결과에 대해서도 책임을 지지 않습니다.", es:"Los productos, procesos e información de certificación mostrados en este sitio son solo para introducción general. Los productos relacionados con dispositivos médicos deben cumplir con las regulaciones y requisitos de registro del mercado objetivo; la solución final está sujeta a documentos técnicos confirmados mutuamente y a las regulaciones aplicables. HONDVO no se hace responsable de ninguna consecuencia derivada de la confianza en la información del sitio." },

    s6_t: { zh:"责任限制", en:"Limitation of Liability", de:"Haftungsbeschränkung", ru:"Ограничение ответственности", fr:"Limitation de responsabilité", ja:"責任の制限", ko:"책임의 제한", es:"Limitación de responsabilidad" },

    s6_b: { zh:"在适用法律允许的最大范围内，HONDVO 不对因使用或无法使用本网站所产生的间接、偶然或后果性损害承担责任。本条款不影响您所在司法管辖区不可排除的法定权利。", en:"To the maximum extent permitted by applicable law, HONDVO is not liable for any indirect, incidental or consequential damages arising from the use of or inability to use this website. This clause does not affect any statutory rights that cannot be excluded in your jurisdiction.", de:"Im größtmöglichen, gesetzlich zulässigen Umfang haftet HONDVO nicht für indirekte, zufällige oder Folgeschäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung dieser Website entstehen. Diese Klausel berührt keine gesetzlichen Rechte, die in Ihrer Zuständigkeit nicht ausgeschlossen werden können.", ru:"В максимальной степени, допускаемой применимым законодательством, HONDVO не несет ответственности за любые косвенные, случайные или последующие убытки, возникающие в результате использования или невозможности использования этого сайта. Настоящее положение не затрагивает любые законные права, которые не могут быть исключены в вашей юрисдикции.", fr:"Dans la mesure maximale permise par la loi applicable, HONDVO n'est pas responsable des dommages indirects, accessoires ou consécutifs découlant de l'utilisation ou de l'impossibilité d'utiliser ce site. Cette clause n'affecte aucun droit statutaire qui ne peut être exclu dans votre juridiction.", ja:"適用される法律で認められる最大限の範囲において、HONDVO は、本ウェブサイトの利用または利用不能により生じた間接的、偶発的、または結果的な損害について一切責任を負いません。本条項は、お客様の法域において排除できない法定の権利には影響を与えません。", ko:"적용 법률이 허용하는 최대 한도 내에서 HONDVO는 본 웹사이트의 이용 또는 이용 불가로 인해 발생하는 간접적, 우발적 또는 결과적 손해에 대해 책임을 지지 않습니다. 본 조항은 귀하의 관할 구역에서 배제할 수 없는 법정 권리에는 영향을 미치지 않습니다.", es:"En la medida máxima permitida por la ley aplicable, HONDVO no se hace responsable de daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de usar este sitio web. Esta cláusula no afecta ningún derecho legal que no pueda ser excluido en su jurisdicción." },

    s7_t: { zh:"适用法律与管辖", en:"Governing Law & Jurisdiction", de:"Anwendbares Recht & Gerichtsstand", ru:"Применимое право и юрисдикция", fr:"Droit applicable et juridiction", ja:"準拠法と管轄", ko:"준거법 및 관할", es:"Ley aplicable y jurisdicción" },

    s7_b: { zh:"本条款受中华人民共和国法律管辖并据其解释，不考虑其冲突法规则。因本条款或网站使用产生的争议，双方应友好协商解决；协商不成的，提交运营方所在地有管辖权的人民法院诉讼解决。", en:"These terms are governed by and construed in accordance with the laws of the People's Republic of China, without regard to its conflict-of-law rules. Disputes arising from these terms or the use of the website shall be resolved through friendly negotiation; if negotiation fails, they shall be submitted to the competent people's court in the place where the operator is located.", de:"Diese Bedingungen unterliegen den Gesetzen der Volksrepublik China und sind nach diesen auszulegen, unabhängig von deren Kollisionsnormen. Streitigkeiten aus diesen Bedingungen oder der Nutzung der Website werden durch freundschaftliche Verhandlungen gelöst; scheitern diese, werden sie dem zuständigen Volksgericht am Sitz des Betreibers vorgelegt.", ru:"Настоящие условия регулируются законами Китайской Народной Республики и толкуются в соответствии с ними, без учета коллизионных норм. Споры, возникающие из настоящих условий или использования сайта, подлежат разрешению путем дружественных переговоров; в случае их безуспешности они передаются в компетентный народный суд по месту нахождения оператора.", fr:"Les présentes conditions sont régies par les lois de la République populaire de Chine et interprétées conformément à celles-ci, sans égard à ses règles de conflit de lois. Les litiges découlant des présentes conditions ou de l'utilisation du site seront résolus par négociation amiable ; à défaut, ils seront soumis au tribunal populaire compétent du lieu où se trouve l'exploitant.", ja:"本規約は中華人民共和国の法律に準拠し、同法に従って解釈されるものとし、法の抵触に関する規則は考慮されません。本規約または本サイトの利用に起因する紛争は、誠実な協議により解決するものとし、協議が整わない場合は、運営者の所在地を管轄する人民法院に提訴して解決するものとします。", ko:"본 약관은 중화인민공화국 법률에 의해 규율되며 이에 따라 해석되며, 법률 충돌 규칙은 고려되지 않습니다. 본 약관 또는 사이트 이용으로 인해 발생하는 분쟁은 우호적인 협의를 통해 해결하며, 협의가 이루어지지 않을 경우 운영자 소재지의 관할 인민법원에 제소하여 해결합니다.", es:"Estos términos se rigen por las leyes de la República Popular China e se interpretan conforme a ellas, sin considerar sus normas de conflicto de leyes. Las controversias derivadas de estos términos o del uso del sitio se resolverán mediante negociación amistosa; si la negociación fracasa, se someterán al tribunal popular competente del lugar donde se encuentra el operador." },

    s8_t: { zh:"条款变更", en:"Changes to Terms", de:"Änderungen der Bedingungen", ru:"Изменения условий", fr:"Modifications des conditions", ja:"規約の変更", ko:"약관의 변경", es:"Cambios en los términos" },

    s8_b: { zh:"我们保留随时修改本服务条款的权利。更新后的条款将在本页面发布并以最后更新日期标注。您继续使用本网站即视为接受修订后的条款。", en:"We reserve the right to modify these Terms of Service at any time. The updated terms will be posted on this page with the last-updated date noted. Your continued use of the website constitutes acceptance of the revised terms.", de:"Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Die aktualisierten Bedingungen werden auf dieser Seite mit dem Datum der letzten Aktualisierung veröffentlicht. Ihre weitere Nutzung der Website gilt als Annahme der überarbeiteten Bedingungen.", ru:"Мы оставляем за собой право в любое время изменять настоящие Условия использования. Обновленные условия будут опубликованы на этой странице с указанием даты последнего обновления. Дальнейшее использование вами сайта означает принятие пересмотренных условий.", fr:"Nous nous réservons le droit de modifier ces Conditions d'utilisation à tout moment. Les conditions mises à jour seront publiées sur cette page avec la date de dernière mise à jour. Votre utilisation continue du site vaut acceptation des conditions révisées.", ja:"当社は本利用規約をいつでも改正する権利を留保します。更新された規約は本ページに最終更新日とともに掲載されます。お客様が本サイトを継続して利用することは、改正後の規約の受諾を意味します。", ko:"당사는 본 이용 약관을 언제든 수정할 권리를 보유합니다. 업데이트된 약관은 최종 업데이트 날짜와 함께 이 페이지에 게시됩니다. 귀하가 본 웹사이트를 계속 이용하는 것은 개정된 약관의 수락으로 간주됩니다.", es:"Nos reservamos el derecho de modificar estos Términos del servicio en cualquier momento. Los términos actualizados se publicarán en esta página con la fecha de última actualización. El uso continuado del sitio web por su parte constituye la aceptación de los términos revisados." },

    s9_t: { zh:"联系我们", en:"Contact Us", de:"Kontakt", ru:"Связаться с нами", fr:"Nous contacter", ja:"お問い合わせ", ko:"문의하기", es:"Contáctenos" },

    s9_b: { zh:"如对本服务条款有任何疑问，请通过邮箱 info@hondvotechnology.com 或电话 +86 769 8188 9275 与我们联系。", en:"If you have any questions about these Terms of Service, please contact us at info@hondvotechnology.com or by phone at +86 769 8188 9275.", de:"Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns bitte unter info@hondvotechnology.com oder telefonisch unter +86 769 8188 9275.", ru:"Если у вас есть вопросы по настоящим Условиям использования, пожалуйста, свяжитесь с нами по электронной почте info@hondvotechnology.com или по телефону +86 769 8188 9275.", fr:"Si vous avez des questions sur ces Conditions d'utilisation, veuillez nous contacter à info@hondvotechnology.com ou par téléphone au +86 769 8188 9275.", ja:"本利用規約に関するご質問は、info@hondvotechnology.com または電話 +86 769 8188 9275 までお問い合わせください。", ko:"본 이용 약관에 관한 문의는 info@hondvotechnology.com 또는 전화 +86 769 8188 9275로 연락주시기 바랍니다.", es:"Si tiene alguna pregunta sobre estos Términos del servicio, contáctenos en info@hondvotechnology.com o por teléfono al +86 769 8188 9275." }

  }

};



function renderLegal(lang) {

  document.querySelectorAll('[data-legal-key]').forEach(function (el) {

    var key = el.getAttribute('data-legal-key');

    var parts = key.split('.');

    var obj = LEGAL;

    for (var i = 0; i < parts.length; i++) { obj = obj && obj[parts[i]]; }

    if (obj && obj[lang]) el.innerHTML = obj[lang];

  });

}



function switchLang(lang) {

  injectFooters(); // 先确保动态页脚已注入，随后统一翻译

  document.documentElement.setAttribute('lang', lang);

  // Update select value

  const sel = document.getElementById('lang-select');

  if (sel) sel.value = lang;

  // 同步新语言切换按钮（C 方案：地球胶囊 + 网格）
  const lc = document.getElementById('lang-current-code');
  if (lc) lc.textContent = (lang || 'en').toUpperCase();
  const grid = document.getElementById('lang-grid');
  if (grid) grid.querySelectorAll('button').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-lang') === lang); });

  sessionStorage.setItem('hondvo_lang', lang);

  // 将语言选择反射到 URL（保留页内锚点 #page-xx），便于分享链接与 hreflang 生效

  try {

    const hash = location.hash || '';

    history.replaceState(null, '', '?lang=' + encodeURIComponent(lang) + hash);

  } catch (e) {}



  document.querySelectorAll('[data-lang-key]').forEach(el => {

    const key = el.getAttribute('data-lang-key');

    const entry = I18N[key];

    if (!entry || !entry[lang]) return;

    el.innerHTML = entry[lang];

  });



  document.querySelectorAll('[data-ph-key]').forEach(el => {

    const key = el.getAttribute('data-ph-key');

    const entry = I18N[key];

    if (!entry || !entry[lang]) return;

    el.setAttribute('placeholder', entry[lang]);

  });



  document.querySelectorAll('[data-aria-key]').forEach(el => {

    const key = el.getAttribute('data-aria-key');

    const entry = I18N[key];

    if (!entry || !entry[lang]) return;

    el.setAttribute('aria-label', entry[lang]);

  });

  if (typeof renderLegal === 'function') renderLegal(lang);

}



(function(){

  const VALID = ['zh','en','de','ru','fr','ja','ko','es'];

  const urlLang = new URLSearchParams(location.search).get('lang');

  const saved = (urlLang && VALID.includes(urlLang))

    ? urlLang

    : (sessionStorage.getItem('hondvo_lang') || 'en');

  const apply = () => switchLang(saved);

  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', apply);

  } else {

    apply();

  }

})();
(function () {
  var API = (window.HONDVO_API || '/api') + '/publish/i18n-bridge';
  var applied = false;
  function curLang() {
    try {
      var s = sessionStorage.getItem('hondvo_lang');
      if (s) return s;
      var q = new URLSearchParams(location.search).get('lang');
      if (q) return q;
    } catch (e) {}
    return document.documentElement.lang || 'en';
  }
  function mergeBridge(bridge) {
    if (!bridge || typeof bridge !== 'object') return;
    for (var key in bridge) {
      var entry = bridge[key];
      if (!entry || typeof entry !== 'object') continue;
      if (typeof I18N === "undefined") { console.warn("[HONDVO-Bridge] I18N 未定义，跳过"); return; }
      if (!I18N[key]) I18N[key] = {};
      for (var lang in entry) {
        if (entry[lang]) I18N[key][lang] = entry[lang];
      }
    }
  }
  function reRender() {
    if (typeof switchLang === 'function') switchLang(curLang());
  }
  function tryFetch() {
    fetch(API)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        mergeBridge(data && data.bridge);
        applied = true;
        reRender();
        console.log('[HONDVO-Bridge] 后台数据已注入: ' + (data && data.count || 0) + ' 条, version=' + (data && data.version || ''));
      })
      .catch(function (e) {
        // 后端未启动时静默失败，官网仍用内置 I18N 字典
        console.log('[HONDVO-Bridge] 后端未连接，使用官网内置内容 (' + e.message + ')');
      });
  }
  function boot() {
    if (applied) return;
    tryFetch();
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(boot, 300);
  } else {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 300); });
  }
  window.addEventListener('load', function () { setTimeout(tryFetch, 500); });
})();