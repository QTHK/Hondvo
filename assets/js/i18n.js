/* ============================================================
   HONDVO i18n（P1 拆分）— 8 语言字典 + switchLang + 页脚/法务 + 后台桥接
   来源 index.html: script_giant I18N 段 + i18n-bridge 段
   挂载全局：I18N / switchLang / injectFooters / renderLegal
   ============================================================ */
/* ═══════════ I18N SYSTEM (direct replacement) ═══════════ */

/* ⚠️ 本字典由 HONDVO 后台「发布台」生成（2026-11-07T05:37:49.361Z）。
   如需修改文案请回到后台改 —— 直接编辑本文件会在下次发布时被覆盖。 */
const I18N = {

  "faq_dd_qa": {"en":"FAQ"},

  "faq_dd_downloads": {"en":"Downloads"},

  "faq_dd_subscribe": {"en":"Newsletter"},

  "faq_dd_links": {"en":"Links"},

  "contact_dd_info": {"en":"Contact Info"},

  "nav_btn_quote": {"en":"Get a Quote"},

  "hero_title": {"en":"Precision Manufacturing"},

  "page_title": {"en":"HONDVO Technology - Precision Medical Device Components & Precision Mold Manufacturing"},

  "hero_sub": {"en":"Reverence for Life"},

  "hero_desc": {"en":"ISO 13485 / ISO 9001 / IATF 16949 certified"},

  "hero_btn_quote": {"en":"Get a Quote"},

  "hero_btn_explore": {"en":"Explore Products"},

  "hero_scroll_hint": {"en":"Scroll to explore"},

  "stat_machines": {"en":"Machining Equipment"},

  "stat_injection": {"en":"Injection Machines"},

  "stat_team": {"en":"Professional Team"},

  "stat_certs": {"en":"Intl. Certifications"},

  "stat_cleanrooms": {"en":"Cleanrooms"},

  "stat_design": {"en":"Design Team"},

  "home_core_title": {"en":"Core Business"},

  "home_core_sub": {"en":"Full-chain precision manufacturing capability from mold design to injection mass production"},

  "home_prod1_desc": {"en":"Precision components with excellent sealing, flow and biocompatibility for infusion pumps, syringes, insulin pens, heparin caps, enteral feeding and more"},

  "home_prod2_desc": {"en":"High-precision, high-cleanliness thermoplastic and liquid silicone products for IVD (test tubes, specimen cups, centrifuge tubes, sample collection tubes, microplates, etc.) and imaging devices (blood glucose analyzers, coagulation analyzers, etc.)"},

  "home_prod3_desc": {"en":"Your Reliable Tooling Manufacturer for Mission-Critical Medical Applications"},

  "home_prod4_title": {"en":"Respiratory Systems"},

  "home_prod4_desc": {"en":"High-reliability, high-safety core components for ventilators (turbine housings, ventilator housings, breathing masks, expiratory valves, humidifiers, filters, nebulizer mouthpieces, etc.)"},

  "home_prod5_title": {"en":"Food / Medical Packaging & Baby & Maternal Products"},

  "home_prod5_desc": {"en":"Non-toxic and odorless, food-grade/medical-grade FDA certified, with excellent skin-friendly touch and high reusability durability"},

  "home_more": {"en":"Learn More"},

  "home_prod3_more": {"en":"Manufacturing Capabilities"},

  "hero_tag": {"en":"Precision Medical Mold Manufacturing"},

  "home_sectors_title": {"en":"Application Areas"},

  "home_sectors_sub": {"en":"Precision injection-molded components for Class II medical devices across mainstream clinical scenarios"},

  "home_sec_1_t": {"en":"IV Therapy & Nutrition Support"},

  "home_sec_1_l1": {"en":"Micron-level precision (±0.005 mm)"},

  "home_sec_1_l2": {"en":"Medical-grade PP / PS (biocompatible)"},

  "home_sec_1_l3": {"en":"Dead-zone-free design (no residue)"},

  "home_sec_1_l4": {"en":"High-cleanliness production (particle-free)"},

  "home_sec_2_t": {"en":"Clinical Diagnostics & Sample Handling"},

  "home_sec_2_l1": {"en":"Micron-level precision (±0.005 mm)"},

  "home_sec_2_l2": {"en":"Medical-grade PP / PS (biocompatible)"},

  "home_sec_2_l3": {"en":"Multi-cavity molds"},

  "home_sec_2_l4": {"en":"Cycle time optimization"},

  "home_sec_2_l5": {"en":"Long-term stable production"},

  "home_sec_3_t": {"en":"Respiratory Therapy & Ventilation"},

  "home_sec_3_l1": {"en":"Micron-level precision (±0.005 mm)"},

  "home_sec_3_l2": {"en":"Medical-grade PP / PS (biocompatible)"},

  "home_sec_3_l3": {"en":"Flame-retardant molding (UL94 V-0)"},

  "home_sec_3_l4": {"en":"Antimicrobial materials (ISO 22196)"},

  "home_sec_3_l5": {"en":"Multi-cavity molds"},

  "home_sec_3_l6": {"en":"Cleanroom production"},

  "home_sec_4_t": {"en":"Maternal Care & Food Contact"},

  "home_sec_4_l1": {"en":"Maternal & gynecological care"},

  "home_sec_4_l2": {"en":"Wearable medical & monitoring devices"},

  "home_sec_4_l3": {"en":"Safety medicine bottles"},

  "home_sec_4_l4": {"en":"Pill organizers"},

  "prod1_tag1": {"en":"Infusion pumps"},

  "prod1_tag2": {"en":"Syringes"},

  "prod1_tag3": {"en":"Insulin pens"},

  "prod1_tag4": {"en":"Enteral feeding"},

  "prod2_tag1": {"en":"Test tubes"},

  "prod2_tag2": {"en":"Specimen cups"},

  "prod2_tag3": {"en":"Microplates"},

  "prod2_tag4": {"en":"Collection tubes"},

  "prod3_tag1": {"en":"23 CNC"},

  "prod3_tag2": {"en":"8 EDM"},

  "prod3_tag3": {"en":"7 Wire-cut"},

  "prod3_tag4": {"en":"Top-tier equipment"},

  "prod4_tag1": {"en":"Ventilator housings"},

  "prod4_tag2": {"en":"Breathing masks"},

  "prod4_tag3": {"en":"Expiratory valves"},

  "prod4_tag4": {"en":"Nebulizer mouthpieces"},

  "prod5_tag1": {"en":"Non-toxic, odorless"},

  "prod5_tag2": {"en":"Food-grade FDA"},

  "prod5_tag3": {"en":"Skin-friendly touch"},

  "prod5_tag4": {"en":"Highly reusable"},

  "home_sec_1_scene": {"en":"Clinical settings such as IV infusion, enteral nutrition and self-administration, where sealing, flow consistency and biocompatibility are critical"},

  "home_sec_2_scene": {"en":"The full chain of sample collection, storage and analysis, requiring high cleanliness, low adsorption and dimensional consistency"},

  "home_sec_3_scene": {"en":"Respiratory support such as mechanical ventilation, oxygen therapy and nebulization, with stringent airtightness and long-term reliability"},

  "home_sec_4_scene": {"en":"Daily use in maternal care, feeding and food-contact applications, requiring non-toxicity, food-grade compliance and skin-friendly durability"},

  "home_sector_more": {"en":"View Products"},

  "home_flow_title": {"en":"End-to-End Manufacturing"},

  "home_flow_sub": {"en":"From drawing to mass production in one closed loop — controlled at every stage"},

  "home_flow_1_t": {"en":"Mold Design"},

  "home_flow_1_s": {"en":"DFM review & mold-flow analysis lock the process window before mass production"},

  "home_flow_2_t": {"en":"Precision Manufacturing"},

  "home_flow_2_s": {"en":"23 CNC, 8 EDM & wire-cut machines deliver micron-level mold accuracy"},

  "home_flow_3_t": {"en":"Injection Molding"},

  "home_flow_3_s": {"en":"21 machines covering conventional, all-electric & LSR molding"},

  "home_flow_4_t": {"en":"Validation & Delivery"},

  "home_flow_4_s": {"en":"Cleanroom assembly & sampling inspection before shipment"},

  "home_news_title": {"en":"News"},

  "home_news_sub": {"en":"Company updates & industry insights"},

  "home_news_more": {"en":"View All News →"},

  "home_cta": {"en":"Need Medical Device Components?"},

  "home_cta_btn": {"en":"Contact Us Now"},

  "about_mold_title": {"en":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd."},

  "about_mold_desc": {"en":"We specialize in the design, manufacturing, and delivery of ultra-precision injection molds. With years of deep expertise in the mold industry, we provide end-to-end capabilities — from product structure review and mold design to precision machining and trial molding. Our full-brand equipment matrix ranges from Swiss Hauser jig grinders and German RODERS 5-axis CNC to Japanese YASDA high-speed machining centers, covering complete mold manufacturing processes including CNC machining, EDM, wire-cutting, and precision grinding. Mold accuracy reaches micron level, serving high-end manufacturing fields such as medical devices, intelligent robotics, and automotive components."},

  "about_tech_title": {"en":"HONDVO Technology (Dongguan) Co., Ltd."},

  "about_tech_desc": {"en":"Leveraging the strong manufacturing capabilities of HONDVO TOOLING, we undertake R&D and mass production of a wide range of high-precision injection-molded products. Equipped with 21 injection molding machines — including SUMITOMO all-electric, TOYO hydraulic, and dedicated LSR (liquid silicone rubber) models — we deliver everything from precision structural parts, transparent optical components, and overmolded parts to liquid silicone parts in a one-stop process."},

  "about_tech_focus": {"en":"We are currently focused on the medical device sector, with our main products including:"},

  "about_tech_c1_t": {"en":"IVD Consumables"},

  "about_tech_c1_i": {"en":"Reaction cups, reagent strips, microfluidic chips, cuvettes, and other precision micro-molded components"},

  "about_tech_c2_t": {"en":"Drug Delivery Devices"},

  "about_tech_c2_i": {"en":"Insulin pen components, pre-filled syringe plungers, spray pumps, and valve assemblies"},

  "about_tech_c3_t": {"en":"Surgical Instrument Parts"},

  "about_tech_c3_i": {"en":"Disposable surgical handles, trocar assemblies, and stapler structural components"},

  "about_tech_c4_t": {"en":"Medical Electronics Housings"},

  "about_tech_c4_i": {"en":"Housings and panels for medical devices such as monitors, infusion pumps, and portable diagnostic equipment"},

  "about_tech_c5_t": {"en":"High-Value Overmolded Components"},

  "about_tech_c5_i": {"en":"Metal-insert molding, LSR seals, medical catheter connectors, and Luer fittings"},

  "about_tech_cert": {"en":"Our production environment features two Class 100,000 cleanrooms, with full support for IQ/OQ/PQ validation services, and strictly follows the ISO 13485 quality management system."},

  "about_tech_more": {"en":"In parallel, we also accept industrial-grade injection orders for intelligent robot structural parts and automotive functional parts, enabling concurrent multi-sector delivery."},

  "prod_hero": {"en":"Products & Services"},

  "prod_hero_sub": {"en":"Trusted by EU & US OEMs · ISO 13485 / FDA / Class 8"},

  "ph_b_turnkey": {"en":"One-stop Turnkey"},

  "ph_b_turnkey_s": {"en":"Mold → Finished Parts"},

  "ph_b_iqoqpq": {"en":"IQ/OQ/PQ Validation"},

  "ph_b_iqoqpq_s": {"en":"End-to-end Validation Support"},

  "ph_b_iso13485": {"en":"ISO 13485"},

  "ph_b_iso13485_s": {"en":"Medical Quality Management Certification"},

  "ph_b_fda": {"en":"FDA Compliant"},

  "ph_b_fda_s": {"en":"100% Medical / Food-grade Materials"},

  "ph_b_precision": {"en":"0.5 μm Precision"},

  "ph_b_precision_s": {"en":"Ultra-precision Mold Machining"},

  "ph_b_clean": {"en":"Class 8 Cleanroom"},

  "ph_b_clean_s": {"en":"Class 100,000 Cleanroom Production"},

  "prod_hero_quick": {"en":"Quick Explore"},

  "core_products_title": {"en":"Core Product Lines"},

  "core_products_sub": {"en":"Core Product Lines"},

  "prod1_title": {"en":"Infusion and Drug Delivery Systems"},

  "prod2_title": {"en":"In Vitro Diagnostics & Sampling (IVD)"},

  "prod3_title": {"en":"Ultra-Precision Medical-Grade Injection & LSR Molds"},

  "prod_prod1_desc": {"en":"Silicone nutrition bottle bodies, injection-molded caps, diverter connectors, tubing fittings — meeting Class II medical device regulations"},

  "prod_prod2_desc": {"en":"High-precision syringe barrels and plunger assemblies with strict dimensional tolerance and surface finish control"},

  "prod_iq": {"en":"IQ/OQ/PQ Validation"},

  "prod_other_title": {"en":"Other Class II Device Components"},

  "prod_other_desc": {"en":"Customized Class II medical device injection components per customer requirements, covering housings, connectors, tubing fittings, etc."},

  "prod_custom": {"en":"Custom Development Available"},

  "iq_iq2": {"en":"Installation Qualification"},

  "iq_iq2_l1": {"en":"Verify equipment model, configuration and installation accuracy"},

  "iq_iq2_l2": {"en":"Validate energy supply, cleanroom systems and mold fitment"},

  "iq_iq2_l3": {"en":"Archive complete installation documentation for medical admission compliance"},

  "iq_oq2": {"en":"Operational Qualification"},

  "iq_oq2_l1": {"en":"Limit-parameter, multi-batch material and working-condition adaptation tests"},

  "iq_oq2_l2": {"en":"Lock in the optimal stable process window"},

  "iq_oq2_l3": {"en":"Cleanroom dynamic-environment validation with standardized SOP and deviation handling"},

  "iq_pq2": {"en":"Performance Qualification"},

  "iq_pq2_l1": {"en":"≥3-batch continuous production validation"},

  "iq_pq2_l2": {"en":"Cpk/Ppk process capability data analysis"},

  "iq_pq2_l3": {"en":"Full data retention with auditability and traceability; re-validation after any change"},

  "mold_hero": {"en":"Premium Medical Injection Molds | Precision & Compliance Guaranteed"},

  "mold_hero_sub": {"en":"We specialize in high-precision medical injection mold manufacturing for life science and medical device industries. Adhering to strict medical-grade standards, we deliver contamination-free, high-tolerance, and fully compliant mold solutions to support reliable mass production of medical plastic components."},

  "mold_hero_eyebrow": {"en":"Precision Medical Manufacturing"},

  "mold_cap_kicker": {"en":"Mold Capabilities"},

  "mold_cap_title": {"en":"Molds Focused on Medical Devices"},

  "mold_cap_sub": {"en":"Click to browse the mold photo gallery"},

  "mold_flow_kicker": {"en":"Manufacturing Process"},

  "mold_flow_title": {"en":"How Medical Molds Are Made"},

  "mold_flow_sub": {"en":"The full chain from design to validated mass production"},

  "mold_qa_kicker": {"en":"Quality System"},

  "mold_qa_title": {"en":"How Medical Mold Quality Is Controlled"},

  "mold_qa_sub": {"en":"Compliant and fully traceable"},

  "cert_13485_t": {"en":"ISO 13485"},

  "cert_13485_e": {"en":"Medical Device QMS"},

  "cert_iatf_t": {"en":"IATF 16949"},

  "cert_iatf_e": {"en":"Automotive QMS"},

  "cert_9001_t": {"en":"ISO 9001"},

  "cert_9001_e": {"en":"Quality Management"},

  "mold_ability_1_tag": {"en":"LSR"},

  "mold_ability_1_t": {"en":"Liquid Silicone Rubber Mold"},

  "mold_ability_1_s": {"en":"Dedicated LSR molding · Precision cold-runner molding"},

  "mold_ability_3_tag": {"en":"Interventional · Implantable"},

  "mold_ability_3_t": {"en":"Precision Mold"},

  "mold_ability_3_s": {"en":"Micro insert cavities · Medical-grade clean manufacturing"},

  "mold_hero_cta_caps": {"en":"View Mold Capabilities"},

  "mold_hero_cta_contact": {"en":"Get Mold Solutions"},

  "mold_img1_desc": {"en":"Multi-cavity Precision Injection Mold — Mirror-polished with HOGU temperature control system"},

  "mold_img2_desc": {"en":"Hot Runner Precision Mold — Multi-cavity design with independent thermal control module"},

  "mold_img3_desc": {"en":"Liquid Silicone Rubber (LSR) Injection Mold — Precision cavity with integrated alignment frame"},

  "mold_img4_desc": {"en":"Multi-cavity Slider Mold — Mastip hot runner system, high-gloss mirror finish"},

  "mold_cnc": {"en":"CNC Machining Centers (23 units)"},

  "mold_edm": {"en":"EDM Machines (8 units)"},

  "mold_wire": {"en":"Wire-Cut EDM (7 units)"},

  "mold_grinder": {"en":"Precision Grinders (9 units)"},

  "mold_injection": {"en":"Injection Molding Machines (21 units)"},

  "mold_qc": {"en":"Quality Inspection Equipment (8 units)"},

  "qual_hero": {"en":"Qualifications"},

  "qual_hero_sub": {"en":"International standard certifications · Cleanrooms · Validation capabilities"},

  "qual_env_title": {"en":"Production Environment"},

  "qual_env_sub": {"en":"Class 100,000 cleanrooms meeting medical device production requirements"},

  "qual_iq_title": {"en":"IQ/OQ/PQ Validation System"},

  "qual_iq_sub": {"en":"Strictly following ISO 13485 and FDA 21 CFR Part 820, we maintain a standardized IQ/OQ/PQ qualification system. Through installation, operational and performance qualification, we ensure compliant equipment, a stable process window and consistent mass-production quality."},

  "qual_eq_kicker": {"en":"Production Equipment"},

  "qual_eq_title": {"en":"Comprehensive Production Equipment"},

  "qual_eq_sub": {"en":"Full-process equipment covering precision machining, injection molding and inspection; click a category to expand details"},

  "news_hero": {"en":"News"},

  "news_hero_sub": {"en":"Company News · Industry Updates"},

  "ct_hero": {"en":"Contact Us"},

  "ct_hero_sub": {"en":"Dual-company addresses · Welcome to visit and discuss"},

  "ct_mold_label": {"en":"Mold Company"},

  "ct_tech_label": {"en":"Technology Company"},

  "ct_phone_label": {"en":"Phone"},

  "ct_email_label": {"en":"Email"},

  "ct_hours_label": {"en":"Working Hours"},

  "ct_name": {"en":"Name"},

  "ct_company_label": {"en":"Company"},

  "ct_tel_label": {"en":"Phone"},

  "ct_email2_label": {"en":"Email"},

  "ct_type_label": {"en":"Inquiry Type"},

  "ct_type_0": {"en":"Please Select"},

  "ct_type_1": {"en":"Medical Device Injection Parts"},

  "ct_type_2": {"en":"Precision Mold Manufacturing"},

  "ct_type_3": {"en":"Mold + Injection One-Stop"},

  "ct_type_4": {"en":"Other Inquiries"},

  "ct_desc_label": {"en":"Requirements"},

  "ct_submit": {"en":"Submit"},

  "ct_visit": {"en":"Welcome to visit our factory"},

  "ct_sub_text": {"en":"For business cooperation inquiries, please contact us via phone or email<br>We will arrange a professional team to follow up with you"},

  "ct_qr_label": {"en":"Scan to add WeCom"},

  "cert_iatf": {"en":"IATF 16949 Automotive Quality Management System"},

  "cert_13485": {"en":"ISO 13485 Medical Device Quality Management System"},

  "cert_9001": {"en":"ISO 9001 Quality Management System"},

  "ct_mold_name": {"en":"HONDVO TOOLING LIMITED (Dongguan) Co., Ltd."},

  "ct_tech_name": {"en":"HONDVO Technology (Dongguan) Co., Ltd."},

  "ct_mold_addr": {"en":"Boyes Industrial Park, 84# Zhong Nan Zhong Road, Shang Sha Community, Chang'an Town, Dongguan City, Guangdong Province, China"},

  "ct_tech_addr": {"en":"Room 301, Unit 2, Building 2, 790 Chang'an Jian'an Road, Chang'an Town, Dongguan, Guangdong Province, China"},

  "ct_hours_val": {"en":"Mon - Fri 8:00 - 17:30"},

  "ct_placeholder_name": {"en":"Your Name"},

  "ct_placeholder_company": {"en":"Your Company Name"},

  "ct_placeholder_phone": {"en":"Your Phone Number"},

  "ct_placeholder_email": {"en":"Your Email"},

  "ct_placeholder_desc": {"en":"Please describe your product requirements, technical specifications, expected quantities, etc."},

  "search_placeholder": {"en":"Search products, services, qualifications…"},

  "search_aria_label": {"en":"Search keywords"},

  "search_close_aria": {"en":"Close search"},

  "a11y_mainnav": {"en":"Main navigation"},

  "a11y_quote": {"en":"Get a quote"},

  "a11y_menu": {"en":"Menu"},

  "a11y_prod_tablist": {"en":"Product view modes"},

  "a11y_careers_concept": {"en":"Talent philosophy"},

  "a11y_lightbox": {"en":"Image viewer"},

  "a11y_lightbox_close": {"en":"Close image"},

  "a11y_back_to_top": {"en":"Back to top"},

  "a11y_modal_close": {"en":"Close dialog"},

  "alt_core_medical_1": {"en":"Infusion and drug delivery systems"},

  "alt_core_medical_2": {"en":"In-vitro diagnostics and sampling (IVD)"},

  "alt_core_mold_3": {"en":"Ultra-precision medical-grade injection and LSR moulds"},

  "alt_prod_custom": {"en":"Respiratory systems"},

  "alt_workshop_1": {"en":"Food and medical packaging, and mother-and-baby products"},

  "alt_workshop_env": {"en":"Workshop environment"},

  "alt_wecom_qr": {"en":"WeCom QR code"},

  "search_no_results": {"en":"No results found for “{{q}}”"},

  "news_tag_company": {"en":"Company News"},

  "news_tag_industry": {"en":"Industry News"},

  "news_title_1": {"en":"HONDVO Technology Passed ISO 13485 Annual Surveillance Audit"},

  "news_title_2": {"en":"Two New TOYO CS-230 All-Electric Injection Machines Put into Production"},

  "news_title_3": {"en":"HONDVO Showcases at CMEF 2026 China International Medical Equipment Fair"},

  "news_title_4": {"en":"Swiss Hauser S35 Jig Grinder Installation & Commissioning Completed"},

  "news_summary_1": {"en":"HONDVO Technology has successfully passed the ISO 13485 medical device quality management system annual surveillance audit, covering the entire injection molding production process."},

  "news_summary_2": {"en":"To meet the growing order demands from medical device clients, the company has introduced two new Japanese TOYO CS-230 all-electric injection machines, now officially operating in the Class 100,000 cleanroom."},

  "news_summary_3": {"en":"HONDVO Technology showcased its core products including enteral nutrition infusion systems and injection drug delivery systems at CMEF 2026, reaching cooperation intentions with multiple domestic and international medical device companies."},

  "news_summary_4": {"en":"The Hauser S35 jig grinder with 0.001mm precision has completed installation and commissioning in the mold workshop, further enhancing precision mold manufacturing capabilities."},

  "news_title_5": {"en":"HONDVO TOOLING Passed IATF 16949 Recertification Audit"},

  "news_summary_5": {"en":"HONDVO TOOLING successfully passed the IATF 16949 automotive quality management system recertification audit. System effectiveness was highly praised by auditors, continuing to meet stringent automotive supply chain requirements."},

  "news_title_6": {"en":"Class 100K Cleanroom Passed International Client Annual On-Site Audit"},

  "news_summary_6": {"en":"The Class 100,000 cleanroom successfully passed the annual on-site audit by a European medical device client, covering cleanliness control, SOP compliance, and batch traceability. Achieved excellent assessment with zero corrective actions required."},

  "news_title_7": {"en":"New German RODERS High-Speed Machining Center Delivered to Mold Center"},

  "news_summary_7": {"en":"Following the Hauser S35 jig grinder, the mold center adds another major equipment — a German RODERS RXP 500 DCS high-speed machining center has completed installation and acceptance, achieving dual improvements in mold machining precision and efficiency."},

  "prod_lsr_title": {"en":"LSR Liquid Silicone Products"},

  "prod_lsr_desc": {"en":"Medical-grade liquid silicone injection products meeting biocompatibility requirements"},

  "prod_lsr_item1": {"en":"Silicone Mask"},

  "prod_lsr_item2": {"en":"Silicone Seals"},

  "prod_lsr_item3": {"en":"Silicone Tubing"},

  "prod_lsr_item4": {"en":"Silicone Sheath"},

  "prod_tag_grade": {"en":"Medical Grade"},

  "prod_tag_heat": {"en":"Heat Resistant"},

  "prod_tag_clear": {"en":"Transparent"},

  "prod_tag_bio": {"en":"Biocompatible"},

  "prod_tag_precision": {"en":"Precision"},

  "prod_tag_custom": {"en":"Custom"},

  "prod_tag_dual": {"en":"Dual-color"},

  "prod_tag_overmold": {"en":"Overmold"},

  "prod_tag_multicolor": {"en":"Multi-color"},

  "prod_tag_soft_hard": {"en":"Soft/Hard"},

  "prod_tag_integral": {"en":"Integral"},

  "prod_tag_insert": {"en":"Insert"},

  "about_cases_title": {"en":"Customer Case Studies"},

  "about_cases_sub": {"en":"Real delivery stories across medical segments — details to be supplemented"},

  "about_team_title": {"en":"Our Team"},

  "about_team_sub": {"en":"Experienced engineers and manufacturing specialists — details to be supplemented"},

  "about_dd_cases": {"en":"Case Studies"},

  "about_dd_team": {"en":"Our Team"},

  "ft_about_cases": {"en":"Case Studies"},

  "ft_about_team": {"en":"Our Team"},

  "case_ch_label": {"en":"Challenge"},

  "case_sol_label": {"en":"Solution"},

  "case_res_label": {"en":"Result"},

  "case_c1_industry": {"en":"IVD"},

  "case_c1_title": {"en":"Microfluidic Chip Mass Production"},

  "case_c1_challenge": {"en":"Case details to be added"},

  "case_c1_solution": {"en":"Delivery approach to be added"},

  "case_c1_result": {"en":"Key outcomes to be added"},

  "case_c2_industry": {"en":"Drug Delivery"},

  "case_c2_title": {"en":"Precision Molding of Prefilled Syringe Components"},

  "case_c2_challenge": {"en":"Case details to be added"},

  "case_c2_solution": {"en":"Delivery approach to be added"},

  "case_c2_result": {"en":"Key outcomes to be added"},

  "case_c3_industry": {"en":"Surgical Instruments"},

  "case_c3_title": {"en":"Disposable Trocar Structural Components"},

  "case_c3_challenge": {"en":"Case details to be added"},

  "case_c3_solution": {"en":"Delivery approach to be added"},

  "case_c3_result": {"en":"Key outcomes to be added"},

  "team1_name": {"en":"Xiao Jianjun"},

  "team1_role": {"en":"Senior Project Manager"},

  "team1_bio": {"en":"20 years of hands-on industry experience. Expert in mold operations for the medical and automotive electronics sectors; skilled at resource integration and cross-department collaboration, having led multiple complex projects worth tens of millions with consistently efficient delivery."},

  "team2_name": {"en":"Li Qi"},

  "team2_role": {"en":"Chief Mold Designer"},

  "team2_bio": {"en":"23 years of design experience; Master of Mechanical Engineering. Focused on high-precision, complex structural design, with deep expertise in two-shot molds and hot-runner system optimization, improving mold life and production efficiency through innovative design."},

  "team3_name": {"en":"TBA"},

  "team3_role": {"en":"Production Supervisor"},

  "team3_bio": {"en":"20 years in process planning and production control. Master of precision machining processes, delivering efficient, high-accuracy solutions for complex molds, resolving numerous process challenges and substantially raising production yield."},

  "team4_name": {"en":"Hu Senwen"},

  "team4_role": {"en":"Quality Manager"},

  "team4_bio": {"en":"10 years in quality control; ISO 13485 internal auditor. Driven by a “zero-defect” philosophy, he has built a full-process quality control system, rigorously controlling every stage from raw material to finished product to ensure consistent quality."},

  "prod_pp_title": {"en":"Injection Molded Products"},

  "prod_pp_desc": {"en":"High-precision injection molding for medical consumables and industrial parts"},

  "prod_pp_item1": {"en":"Infusion Connector"},

  "prod_pp_item2": {"en":"Cap Assembly"},

  "prod_pp_item3": {"en":"Connector"},

  "prod_pp_item4": {"en":"Housing Parts"},

  "prod_2k_title": {"en":"Two-shot / Multi-color Products"},

  "prod_2k_desc": {"en":"Integrated two-shot / multi-color molding, reducing secondary processing"},

  "prod_2k_item1": {"en":"Two-shot Handle"},

  "prod_2k_item2": {"en":"Multi-color Button"},

  "prod_2k_item3": {"en":"Soft/Hard Overmold"},

  "prod_2k_item4": {"en":"Logo Insert"},

  "mold_short_cnc": {"en":"CNC Machining"},

  "mold_short_edm": {"en":"EDM Spark Erosion"},

  "mold_short_wire": {"en":"Wire EDM"},

  "mold_short_grinder": {"en":"Precision Grinding"},

  "mold_short_injection": {"en":"Injection Molding"},

  "mold_short_qc": {"en":"Quality Inspection"},

  "qual_short_overview": {"en":"Qualifications"},

  "qual_short_env": {"en":"Production Environment"},

  "qual_short_iqoq": {"en":"IQ/OQ/PQ Validation"},

  "about_dd_who": {"en":"Who We Are"},

  "about_dd_values": {"en":"Core Values"},

  "about_dd_spirit": {"en":"Our Spirit"},

  "about_dd_partners": {"en":"Global Partners"},

  "about_who_title": {"en":"HONDVO"},

  "about_hero": {"en":"About Us"},

  "about_hero_sub": {"en":"HONDVO Technology · Precision Medical Device Components & Precision Molds"},

  "about_values_title": {"en":"Core Values"},

  "about_spirit_title": {"en":"Hondvo Spirit"},

  "about_partners_title": {"en":"Global Partners"},

  "partner_stat_countries": {"en":"Countries"},

  "partner_lg_hub": {"en":"Partner Hub"},

  "partner_lg_route": {"en":"Active Route"},

  "partner_lg_hq": {"en":"HONDVO HQ"},

  "partner_de": {"en":"Germany"},

  "partner_pl": {"en":"Poland"},

  "partner_fr": {"en":"France"},

  "partner_cz": {"en":"Czech Republic"},

  "partner_at": {"en":"Austria"},

  "partner_es": {"en":"Spain"},

  "partner_br": {"en":"Brazil"},

  "partner_us": {"en":"United States"},

  "partner_mx": {"en":"Mexico"},

  "partner_hq": {"en":"HONDVO HQ"},

  "about_val1_title": {"en":"Precision Manufacturing"},

  "about_val1_desc": {"en":"Micron-level precision as standard, zero-defect quality culture throughout every process"},

  "about_val2_title": {"en":"Medical Compliance"},

  "about_val2_desc": {"en":"Dual ISO 13485 / IATF 16949 system, full IQ/OQ/PQ validation"},

  "about_val3_title": {"en":"Rapid Response"},

  "about_val3_desc": {"en":"From mold design to mass production delivery, agile supply chain ensures shortest lead time"},

  "about_val4_title": {"en":"Continuous Innovation"},

  "about_val4_desc": {"en":"Continuously introducing world-class equipment and processes, maintaining technological leadership"},

  "about_sp1_icon": {"en":"Craft"},

  "about_sp1_title": {"en":"Craftsmanship"},

  "about_sp1_desc": {"en":"Every mold is a finely crafted masterpiece, with eternal reverence for micron-level precision"},

  "about_sp2_icon": {"en":"Client"},

  "about_sp2_title": {"en":"Client First"},

  "about_sp2_desc": {"en":"Deep understanding of medical device client needs, engineering-driven solutions"},

  "about_sp3_icon": {"en":"Team"},

  "about_sp3_title": {"en":"Team Collaboration"},

  "about_sp3_desc": {"en":"Seamless integration of mold design and injection production, efficient cross-department collaboration"},

  "footer_desc": {"en":"HONDVO Technology (Dongguan) Co., Ltd.<br>HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.<br>Specialized in medical device injection components & precision mold manufacturing"},

  "ft_about": {"en":"About Us"},

  "ft_about_who": {"en":"Who We Are"},

  "ft_about_values": {"en":"Core Values"},

  "ft_about_spirit": {"en":"Hondvo Spirit"},

  "ft_about_partners": {"en":"Global Partners"},

  "ft_products": {"en":"Products & Services"},

  "ft_prod_enteral": {"en":"Enteral Nutrition System"},

  "ft_prod_injection": {"en":"Injection Drug System"},

  "ft_prod_other": {"en":"Other Class II Components"},

  "ft_prod_mold": {"en":"Precision Mold"},

  "ft_prod_browse": {"en":"Browse Products"},

  "ft_prod_discover": {"en":"Discover Solutions"},

  "ft_prod_discover_sub": {"en":"Turnkey solution sets for typical scenarios — from mould design to volume injection delivery"},

  "ft_prod_industries": {"en":"Application Areas"},

  "ft_mold": {"en":"Mold Center"},

  "ft_mold_design": {"en":"Mold Design"},

  "ft_mold_machining": {"en":"Precision Machining"},

  "ft_mold_injection": {"en":"Injection Production"},

  "ft_mold_quality": {"en":"Quality Control"},

  "ft_qual": {"en":"Qualifications"},

  "ft_qual_13485": {"en":"ISO 13485"},

  "ft_qual_16949": {"en":"IATF 16949"},

  "ft_qual_9001": {"en":"ISO 9001"},

  "ft_qual_env": {"en":"Production Environment"},

  "ft_qual_iqoq": {"en":"IQ/OQ/PQ Validation"},

  "ft_news": {"en":"News"},

  "ft_news_company": {"en":"Company News"},

  "ft_news_industry": {"en":"Industry News"},

  "ft_contact": {"en":"Contact Us"},

  "ft_contact_job": {"en":"Careers"},

  "ft_faq": {"en":"FAQ"},

  "ft_faq_qa": {"en":"FAQ"},

  "ft_faq_dl": {"en":"Downloads"},

  "ft_faq_sub": {"en":"Newsletter"},

  "ft_faq_links": {"en":"Links"},

  "ft_contact_reach": {"en":"Contact Info"},

  "ft_copyright": {"en":"© 2026 HONDVO Technology (Dongguan) Co., Ltd. & HONDVO TOOLING LIMITED (Dongguan) Co., Ltd."},

  "ft_privacy": {"en":"Privacy Policy"},

  "ft_terms": {"en":"Terms of Service"},

  "ct_submitting": {"en":"Submitting..."},

  "ct_success": {"en":"Submitted! We will contact you within 24 hours"},

  "ct_failure": {"en":"Submission failed. Please retry or call us directly"},

  "mailto_hint": {"en":"Your email client has been opened — please send the message to complete your request (or write to info@hondvotechnology.com)."},

  "ct_val_required": {"en":"Please fill in required fields: Name, Phone, Email, Requirements"},

  "ct_val_phone": {"en":"Please enter a valid phone number"},

  "ct_val_email": {"en":"Please enter a valid email address"},

  "pc_mold_title": {"en":"Mold Sales"},

  "pc_mold_desc": {"en":"Precision injection molds · LSR molds · Multi-color molds"},

  "pc_product_title": {"en":"Finished Products"},

  "pc_product_desc": {"en":"Medical-grade injection parts · Class II medical device components"},

  "pc_oem_title": {"en":"OEM Manufacturing"},

  "pc_oem_desc": {"en":"Injection OEM · Assembly OEM · Full-process contract manufacturing"},

  "pc_mold_type": {"en":"Mold Type"},

  "pc_steel": {"en":"Steel Grade"},

  "pc_cavity": {"en":"Number of Cavities"},

  "pc_product_name": {"en":"Product Name"},

  "pc_quantity": {"en":"Annual Demand / Batch Quantity"},

  "pc_packaging": {"en":"Packaging Requirements"},

  "pc_oem_type": {"en":"OEM Type"},

  "pc_drawing": {"en":"Drawing / Sample Availability"},

  "pc_est_quantity": {"en":"Estimated Batch Size"},

  "pc_ph_mold_type": {"en":"e.g. Standard injection mold, LSR mold, two-shot mold"},

  "pc_ph_steel": {"en":"e.g. S136, NAK80, H13"},

  "pc_ph_pkg": {"en":"e.g. Standard packaging, cleanroom packaging"},

  "pc_ph_oem_type": {"en":"e.g. Injection OEM, assembly OEM, full-process OEM"},

  "pc_mold_opt1": {"en":"Standard Injection Mold"},

  "pc_mold_opt2": {"en":"Liquid Silicone Mold (LSR)"},

  "pc_mold_opt3": {"en":"Two-shot / Multi-color Mold"},

  "pc_steel_other": {"en":"Other"},

  "pc_pkg_opt1": {"en":"Standard Packaging"},

  "pc_pkg_opt2": {"en":"Cleanroom Packaging"},

  "pc_pkg_opt3": {"en":"Other"},

  "pc_oem_opt1": {"en":"Injection OEM"},

  "pc_oem_opt2": {"en":"Assembly OEM"},

  "pc_oem_opt3": {"en":"Printing OEM"},

  "pc_oem_opt4": {"en":"Full-Process OEM"},

  "pc_draw_opt1": {"en":"With Drawing"},

  "pc_draw_opt2": {"en":"With Sample"},

  "pc_draw_opt3": {"en":"Concept Only"},

  "pc_ph_name": {"en":"Your Name"},

  "pc_ph_company": {"en":"Your Company"},

  "pc_ph_phone": {"en":"Phone Number"},

  "pc_ph_email": {"en":"Email Address"},

  "pc_ph_cavity": {"en":"e.g. 1+1 / 4 cavities"},

  "pc_ph_mold_req": {"en":"Describe product drawings, technical specs, etc."},

  "pc_ph_prod_name": {"en":"e.g. Enteral nutrition connector, Luer lock"},

  "pc_ph_quantity": {"en":"e.g. 100,000 pcs/year"},

  "pc_ph_prod_req": {"en":"Specifications, delivery requirements, etc."},

  "pc_ph_batch": {"en":"e.g. 50,000 pcs/batch"},

  "pc_ph_oem_req": {"en":"Process requirements, delivery timeline, special needs, etc."},

  "pc_submitting": {"en":"Submitting..."},

  "pc_failed": {"en":"Failed"},

  "pc_success_msg": {"en":"Submitted! We will contact you within 24h"},

  "pc_failure_msg": {"en":"Failed, please try again"},

  "pc_val_required": {"en":"Please fill in all required fields."},

  "cookie_title": {"en":"Cookie & Data Collection Consent"},

  "cookie_body": {"en":"We use cookies and anonymous analytics to understand which pages you view, how long you stay, and your search preferences, so we can improve our website and services. Click \"Necessary only\" to decline behavioral tracking; no browsing data will be collected afterwards (except inquiries you actively submit)."},

  "cookie_accept": {"en":"Accept & Continue"},

  "cookie_reject": {"en":"Necessary only"},

  "cookie_manage": {"en":"Cookie Settings"},

  "m7_faq_title": {"en":"FAQ"},

  "m7_faq_sub": {"en":"Answers to common questions about products, qualifications and cooperation"},

  "faq_collapse_all": {"en":"Collapse All"},

  "m7_jobs_title": {"en":"Careers"},

  "m7_jobs_sub": {"en":"Join us and grow together"},

  "m7_jobs_dept": {"en":"Department"},

  "m7_jobs_location": {"en":"Location"},

  "m7_jobs_apply": {"en":"Apply Now"},

  "m7_links_title": {"en":"Friendly Links"},

  "m7_links_sub": {"en":"Partners and industry resources"},

  "m7_sub_title": {"en":"Newsletter"},

  "m7_sub_sub": {"en":"Subscribe to our latest news and product updates"},

  "m7_sub_ph": {"en":"Enter your email"},

  "m7_sub_btn": {"en":"Subscribe"},

  "m7_sub_success": {"en":"Subscribed! Thank you"},

  "m7_sub_dup": {"en":"This email is already subscribed"},

  "m7_sub_invalid": {"en":"Invalid email format"},

  "m7_sub_fail": {"en":"Subscription failed, please try again later"},

  "m7_dl_title": {"en":"Downloads"},

  "m7_dl_sub": {"en":"Product brochures, certificates and technical documents"},

  "m7_dl_btn": {"en":"Download"},

  "m7_dl_count": {"en":"downloads"},

  "faq_cat_1": {"en":"Core Capabilities"},

  "faq_cat_2": {"en":"Quality & Regulatory (Medical)"},

  "faq_cat_3": {"en":"Sourcing & Compliance"},

  "faq_cat_4": {"en":"Tooling & Engineering"},

  "faq_cat_5": {"en":"Production & QC"},

  "faq_cat_6": {"en":"Business & Relationship"},

  "faq_q1": {"en":"What is your minimum order quantity?"},

  "faq_a1": {"en":"We have no fixed minimum order quantity. Projects of any volume are welcome — unit pricing is simply adjusted according to order quantity."},

  "faq_q2": {"en":"What is your core competency?"},

  "faq_a2": {"en":"We specialize in high-precision LSR (liquid silicone rubber) and 2K/multi-shot injection molds, flashless cold-runner tooling design, micro-molding inserts, and high-cavitation tooling for medical and high-precision technical applications."},

  "faq_q3": {"en":"What do you do differently than your competition?"},

  "faq_a3": {"en":"We combine 0.5μm micro-precision machining with ISO 13485 medical standards. This delivers 30–40% cost efficiency and tooling lead times 4–6 weeks faster than Western suppliers, backed by strong DFM and engineering co-development support."},

  "faq_q4": {"en":"What are your key capabilities (materials, processes, tonnage range)?"},

  "faq_a4": {"en":"We offer an ESI (Early Supplier Involvement) team active in the new-product development stage, extensive medical-industry experience, and a full understanding of ISO 13485. Our quality management system complies with both QMSR 820 and ISO 13485, and every medical project is supported by a dedicated core team to guarantee each procedure."},

  "faq_q5": {"en":"Is your equipment at capacity? Do you have room for our business?"},

  "faq_a5": {"en":"Yes. We maintain dedicated production capacity and can accommodate new customer programs."},

  "faq_q6": {"en":"What CAD/Moldflow software do you use — can you exchange files with our formats?"},

  "faq_a6": {"en":"We use UG NX, Pro/E (Creo), SolidWorks and Moldflow, and fully support all standard file exchanges including STEP, IGES, X_T and DWG."},

  "faq_q7": {"en":"Do you have ISO 13485 certification?"},

  "faq_a7": {"en":"Yes. Our ISO 13485 certification is approved by Bureau Veritas (BV), an internationally accredited body."},

  "faq_q8": {"en":"Do you have experience building tooling/parts for FDA-regulated devices?"},

  "faq_a8": {"en":"Yes. We have proven experience manufacturing tooling and molded parts for FDA-regulated medical devices, and can provide project references on request."},

  "faq_q9": {"en":"How do you manage material traceability and lot control for medical-grade resins?"},

  "faq_a9": {"en":"We operate a complete traceability and batch control system fully aligned with ISO 13485:2016. Every incoming lot arrives with the supplier's Certificate of Analysis (one lot, one certificate) and receives its own batch number under our Batch Number Management System (WI-QA-007). All incoming material passes IQC inspection and release per our Product Identification and Traceability Procedure (HO-2-011), with non-conforming material quarantined under our Nonconforming Control Procedure (HO-2-016). We apply First-In, First-Out (FIFO) storage and release, and each production batch is logged together with raw-material batch, machine, mold, operator and process parameters — one production batch always uses one raw-material batch. This gives 100% traceability in both directions: forward from raw material to finished product to customer, and backward from a finished product or complaint to the raw-material supplier. We run a traceability drill at least once a year, confirming we can retrieve all records of a randomly selected batch within 4 hours. Batch records are kept for one year after product shelf-life expiry, or at least 10 years, whichever is longer."},

  "faq_q10": {"en":"Do you support IQ/OQ/PQ mold qualification and process validation documentation?"},

  "faq_a10": {"en":"Yes. We fully support IQ/OQ/PQ mold qualification and provide complete process validation documentation for medical projects."},

  "faq_q11": {"en":"What is your change-control process if a tool or process needs modification after approval?"},

  "faq_a11": {"en":"We follow a structured six-step ECN process: (1) ECN application and approval, defining change reasons and before/after specifications with customer and Management Representative sign-off; (2) change evaluation and classification (e.g., Minor Change) covering mold feasibility, product-performance impact and affected controlled documents; (3) change verification via a small sample run and Verification Report; (4) document control and version updates; (5) training and pilot production; and (6) ECN closure and archiving of all records for full quality traceability."},

  "faq_q12": {"en":"Do you have cleanroom molding/assembly capability? What class?"},

  "faq_a12": {"en":"Yes. A Class 8 (100,000) cleanroom environment is available for medical molding, assembly and packaging."},

  "faq_q13": {"en":"How do you protect IP and handle NDAs for proprietary tooling designs?"},

  "faq_a13": {"en":"We use strict Non-Disclosure Agreements (NDAs), encrypted server storage, role-based document access control, and physically restricted toolroom areas for proprietary customer projects."},

  "faq_q14": {"en":"Do you have export experience to the US for regulated products — how do you handle customs/duties?"},

  "faq_a14": {"en":"Yes, we have extensive export experience to the US and EU. We support flexible Incoterms including EXW, FOB, DAP and DDP (door-to-door, fully cleared with duties paid via our logistics partners)."},

  "faq_q15": {"en":"What steel types/mold classifications do you build for medical-grade tools?"},

  "faq_a15": {"en":"We build to SPI Class 101 and 102 standards using premium hardened steels such as Assab S136 (HRC 48–52), 1.2083, NAK80 and H13, ensuring high corrosion resistance and long tool life of 1,000,000+ shots."},

  "faq_q16": {"en":"Do you provide DFM feedback before cutting steel? What is the turnaround time?"},

  "faq_a16": {"en":"Yes. We complete the DFM report within 2–3 business days (timelines may vary slightly by product structure). Approval depends on the client — urgent feedback is often received within 2 days, also it might take up to a week depending on the client's schedule."},

  "faq_q17": {"en":"What is your first-article/sampling process — do you provide dimensional inspection reports (CMM, etc.)?"},

  "faq_a17": {"en":"Yes. T1 samples are shipped together with full CMM dimensional inspection reports, material certificates and parameter sheets for formal customer approval."},

  "faq_q18": {"en":"What in-process quality controls do you use?"},

  "faq_a18": {"en":"We use real-time monitoring with CMM, optical comparators, automated vision inspection, and SPC tracking for critical-to-quality (CTQ) dimensions during mass production."},

  "faq_q19": {"en":"Are you open to a third-party or customer facility audit?"},

  "faq_a19": {"en":"Yes. We welcome both virtual tours and physical facility or quality-system audits by customers or accredited third-party auditing firms."},

  "faq_q20": {"en":"What is your ownership/financial structure?"},

  "faq_a20": {"en":"We are a privately held company with stable financial status, continuous reinvestment in high-end machinery (CNC, EDM, CMM), and zero long-term liability risk."},

  "faq_q21": {"en":"What after-sales support do you provide — tooling maintenance, spare cavities, repairs?"},

  "faq_a21": {"en":"Yes. We provide full after-sales support including tooling maintenance, spare cavities/wear parts, and mold repair services."},

  "m7_dl_ph": {"en":"Product manuals and technical documents are being compiled; please contact us for the materials you need."},

  "m7_links_ph": {"en":"Partners and industry resources are being compiled — please check back soon."},

  "m7_jobs_ph": {"en":"No open positions at the moment. Send your CV to info@hondvotechnology.com and we will contact you when a suitable role opens."},

  "cr_concept_eyebrow": {"en":"Talent Philosophy"},

  "cr_concept_title": {"en":"In a world measured in 0.001mm, we look for people who take it seriously"},

  "cr_concept_body": {"en":"We believe precision in medical molds is not bought with equipment — it is ground out by people who obsess over 0.001mm."},

  "cr_fit_eyebrow": {"en":"What We Hope You Agree With"},

  "cr_fit_title": {"en":"Three things that matter more than experience"},

  "cr_fit_1": {"en":"Zero tolerance for deviation — not “as close as we can get”"},

  "cr_fit_2": {"en":"Willing to spend time recording and reviewing — not just doing without thinking"},

  "cr_fit_3": {"en":"Understanding that a quality system in medical manufacturing is not paperwork for its own sake"},

  "cr_sum_eyebrow": {"en":"What We Stand For"},

  "cr_sum_title": {"en":"Quality · Innovation · Integrity · Long-termism · People First"},

  "cr_sum_body": {"en":"Downstream of a medical mold is an operating table. Quality is not a slogan; it is the floor we stand on. Innovation is not a gift — it is the right of every role to propose an idea and have it taken seriously. Integrity means we would rather hear an uncomfortable truth than a pleasant empty phrase. We believe in the long term: we are willing to spend three years developing one person, and we hope you know what you want from those three years. There is no shortcut here, but every step counts. Ultimately, people first means this — your growth is HONDVO's growth."},

  "cr_growth_title": {"en":"Career Development"},

  "cr_growth_sub": {"en":"Why HONDVO"},

  "cr_g1_title": {"en":"Growing with HONDVO"},

  "cr_g1_body": {"en":"HONDVO's roadmap is not a blueprint on a wall but a road being paved right now — new plants, new lines, new markets. Every milestone means new roles, new responsibilities, new room to rise. Each step the company takes creates a batch of things that need someone to carry them. We do not promise a free ride, but we do promise this: every step HONDVO climbs, it climbs together with the people willing to walk it."},

  "cr_g2_title": {"en":"Developing at HONDVO"},

  "cr_g2_body": {"en":"At HONDVO, growth does not come from waiting out your years — it comes from getting things done. Training is split into four stages, and from your first day you take on real molds and real orders: first you learn the rules, then a mentor brings you up to speed, then you go out to customers and to the industry, and finally you turn experience into the ability to lead others. No shortcuts — nothing here happens overnight, but every step has someone guiding you, something to learn, and a result to deliver. What you deliver, we recognise — and we reward."},

  "cr_tr1_t": {"en":"Onboarding Training"},

  "cr_tr1_d": {"en":"Medical mold industry standards and the company quality system"},

  "cr_tr2_t": {"en":"On-the-job Training"},

  "cr_tr2_d": {"en":"Mentor–apprentice model guided by senior engineers"},

  "cr_tr3_t": {"en":"External Training"},

  "cr_tr3_d": {"en":"Overseas exhibitions, customer visits, industry trade shows"},

  "cr_tr4_t": {"en":"Leadership Training"},

  "cr_tr4_d": {"en":"Leadership development for management roles"},

  "cr_jobs_title": {"en":"Open Positions"},

  "cr_jobs_sub": {"en":"Roles currently open"},

  "hnav_brand": {"en":"HONDVO"},

  "hnav_cta": {"en":"Get a Quote"},

  "hnav_cta_short": {"en":"Quote"},

  "hnav_lang": {"en":"English"},

  "hnav_nav_home": {"en":"Home"},

  "hnav_nav_products": {"en":"Products & Services"},

  "hnav_nav_mold": {"en":"Mold Center"},

  "hnav_nav_qual": {"en":"Qualifications"},

  "hnav_nav_faq": {"en":"FAQ"},

  "hnav_nav_about": {"en":"About Us"},

  "hnav_nav_contact": {"en":"Contact"},

  "hnav_nav_news": {"en":"News"},

  "hnav_nav_careers": {"en":"Careers"},

  "hnav_prod_browse": {"en":"Browse Products"},

  "hnav_prod_browse_items": {"en":"Infusion and Drug Delivery Systems,In Vitro Diagnostics & Sampling (IVD),Respiratory Systems,Food / Medical Packaging & Baby & Maternal Products"},

  "hnav_prod_discover": {"en":"Discover Solutions"},

  "hnav_prod_discover_items": {"en":"Disposable Consumables,Diagnostic Cartridges,Minimally Invasive Parts"},

  "hnav_prod_industries": {"en":"Application Areas"},

  "hnav_prod_industries_items": {"en":"IV Therapy & Nutrition Support,Clinical Diagnostics & Sample Handling,Respiratory Therapy & Ventilation,Maternal Care & Food Contact"},

  "hnav_prod_cta_t": {"en":"Need a custom solution?"},

  "hnav_prod_cta_s": {"en":"Senior engineer responds within 24h"},

  "hnav_prod_cta_go": {"en":"Get a Quote →"},

  "hnav_mold_browse": {"en":"Browse Capabilities"},

  "hnav_mold_browse_items": {"en":"Diagnostic & IVD Consumable Molds,Interventional & Implantable Molds,Drug Delivery & Packaging Molds,LSR Liquid Silicone Molds"},

  "hnav_mold_discover": {"en":"Manufacturing Process"},

  "hnav_mold_discover_items": {"en":"DFM Review,Mold Design,Precision Machining,Assembly & Polishing,Mold Trial & Tuning,Validation & Mass Production"},

  "hnav_mold_learn": {"en":"Quality System"},

  "hnav_mold_learn_items": {"en":"Incoming Inspection (IQC),In-Process Inspection (IPQC),Final Mold Inspection (OQC),CMM & 3D Scanning"},

  "hnav_mold_cta_t": {"en":"See the process up close?"},

  "hnav_mold_cta_go": {"en":"Book a Visit →"},

  "hnav_mold_cta_s": {"en":"Book a shop-floor tour · Request technical white papers"},

  "hnav_qual_browse": {"en":"Certifications"},

  "hnav_qual_browse_items": {"en":"IATF 16949,ISO 13485,ISO 9001"},

  "hnav_qual_discover": {"en":"Environment & Validation"},

  "hnav_qual_discover_items": {"en":"Class 100,000 Cleanroom,IQ/OQ/PQ Validation System"},

  "hnav_qual_manage": {"en":"Machining & Inspection Equipment"},

  "hnav_qual_manage_items": {"en":"CNC Machining,EDM Spark Erosion,Wire EDM,Precision Grinding,Injection Molding Machines,Quality Inspection Equipment"},

  "hnav_qual_cta_t": {"en":"Need compliance support?"},

  "hnav_qual_cta_s": {"en":"Regulatory docs & certificates"},

  "hnav_qual_cta_go": {"en":"Request Compliance Docs →"},

  "hnav_faq_browse": {"en":"FAQ"},

  "hnav_faq_browse_items": {"en":"Core Capabilities,Quality & Regulatory (Medical),Sourcing & Compliance,Tooling & Engineering,Production & QC,Business & Relationship"},

  "hnav_faq_discover": {"en":"Downloads & Newsletter"},

  "hnav_faq_discover_items": {"en":"Downloads,Newsletter"},

  "hnav_faq_after": {"en":"Friendly Links"},

  "hnav_faq_after_items": {"en":"Friendly Links"},

  "hnav_faq_cta_t": {"en":"More questions?"},

  "hnav_faq_cta_s": {"en":"Talk to a sales engineer"},

  "hnav_faq_cta_go": {"en":"Ask an Engineer →"},

  "hnav_about_browse": {"en":"About"},

  "hnav_about_browse_items": {"en":"Company Profile,Core Values,Hondvo Spirit"},

  "hnav_about_discover": {"en":"Team & Cases"},

  "hnav_about_discover_items": {"en":"Our Team,Customer Case Studies,Global Partners"},

  "hnav_about_contact": {"en":"Contact"},

  "hnav_about_contact_items": {"en":"Sales Contact,Headquarters,Careers"},

  "hnav_about_cta_t": {"en":"Visit us?"},

  "hnav_about_cta_s": {"en":"Book a factory tour"},

  "hnav_about_cta_go": {"en":"Plan a Company Visit →"},

  "hnav_contact_browse": {"en":"Sales Contacts"},

  "hnav_contact_browse_items": {"en":"Online Inquiry,Both Company Addresses,Phone & Email"},

  "hnav_contact_discover": {"en":"Support"},

  "hnav_contact_discover_items": {"en":"Technical Support,Download Center,FAQ"},

  "hnav_contact_loc": {"en":"Locations"},

  "hnav_contact_loc_items": {"en":"Dongguan HQ,Global Service Map,Factory Tour Booking"},

  "hnav_contact_join": {"en":"Join Us"},

  "hnav_contact_join_items": {"en":"Careers"},

  "hnav_contact_cta_t": {"en":"Let's talk"},

  "hnav_contact_cta_s": {"en":"Submit RFQ — 24h response"},

  "hnav_contact_cta_go": {"en":"Contact Us →"}
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

          <img src="images/logo.webp" alt="HONDVO" loading="lazy">

          <div class="brand-name">HONDVO Technology<small data-lang-key="mold_hero_eyebrow">Precision Medical Manufacturing</small></div>

        </div>

        <p data-lang-key="footer_desc">HONDVO Technology (Dongguan) Co., Ltd.<br>HONDVO TOOLING LIMITED (Dongguan) Co., Ltd.<br>Specialized in medical device injection components & precision mold manufacturing</p>

      </div>

      <div class="col"><h4 data-lang-key="ft_about">About Us</h4><a href="#page-about" data-scroll-to="about-who" data-lang-key="ft_about_who">Who We Are</a><a href="#page-about" data-scroll-to="about-values" data-lang-key="ft_about_values">Core Values</a><a href="#page-about" data-scroll-to="about-spirit" data-lang-key="ft_about_spirit">Hondvo Spirit</a><a href="#page-about" data-scroll-to="about-partners" data-lang-key="ft_about_partners">Global Partners</a><a href="#page-about" data-scroll-to="about-cases" data-lang-key="ft_about_cases">Case Studies</a><a href="#page-about" data-scroll-to="about-team" data-lang-key="ft_about_team">Our Team</a></div>

      <div class="col"><h4 data-lang-key="ft_products">Products & Services</h4><a href="#page-products" data-goto-tab="browse" data-lang-key="ft_prod_browse">Browse Products</a><a href="#page-products" data-goto-tab="discover" data-lang-key="ft_prod_discover">Discover Solutions</a><a href="#page-products" data-goto-tab="industries" data-lang-key="ft_prod_industries">Application Areas</a><a href="#page-mold" data-lang-key="ft_prod_mold">Precision Mold</a></div>

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

        <a class="si-link" href="#social-wechat" data-qr="images/wecom-qrcode.webp" data-tip="WeChat / WeCom" aria-label="WeChat"><img class="si-img" src="images/logo-wechat.png" alt="WeChat"></a>

        <a class="si-link" href="#social-facebook" data-tip="Facebook" aria-label="Facebook"><!-- TODO: 接入真实 Facebook 主页后替换 href 为真实链接 --><img class="si-img" src="images/logo-square-facebook.png" alt="Facebook"></a>

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

}

/* 页脚社交图标现为纯静态：图标 markup 内联在下方 FOOTER_HTML 中。
 * 2026-09-29 移除后台 /media/public/name-map 通道后，不再做媒体库 URL 替换，
 * 原 resolveFooterSocialIcons / resolveQrUrl 一并删除。
 * 下方 a[href^="#social-"] 的点击拦截保留：防止未绑定账号的图标触发未知 hash 导致空白页。 */

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

    s4_t: { zh:"Cookie、本地存储与统计分析", en:"Cookies, Local Storage & Analytics", de:"Cookies, lokaler Speicher & Analyse", ru:"Файлы cookie, локальное хранилище и аналитика", fr:"Cookies, stockage local et analyse", ja:"Cookie・ローカルストレージ・アクセス解析", ko:"쿠키·로컬 저장소·통계 분석", es:"Cookies, almacenamiento local y análisis" },

    s4_b: { zh:"本站使用 Cookie 与本地存储以改进服务。具体说明：① 在您的浏览器中生成并保存匿名访客标识 hondvo_vid（随机字符串，不含姓名、电话等个人身份信息）；② 采集页面浏览数据（页面路径、停留时长、来源页、设备类型）与站内搜索关键词；③ 上述数据用于统计访问情况、改进网站内容与服务质量，保存期限不超过 12 个月；④ 同时使用必要的本地存储（如 sessionStorage）记住您的语言偏好。您可随时通过「Cookie 设置」拒绝行为追踪，拒绝后仅保留实现基本功能所必需的本地存储，您主动提交的询盘信息不受影响。我们可能按站点配置启用第三方统计分析服务（如 Google Analytics 4、百度统计），其数据处理遵循相应服务商的隐私政策。", en:"This site uses cookies and local storage to improve our service. Specifically: (1) an anonymous visitor identifier 'hondvo_vid' (a random string containing no personal identifiers such as name or phone number) is generated and stored in your browser; (2) we collect page-view data (page path, dwell time, referrer, device type) and on-site search keywords; (3) this data is used to measure traffic and improve our website and service quality, and is retained for no longer than 12 months; (4) necessary local storage (such as sessionStorage) is also used to remember your language preference. You may decline behavioural tracking at any time via 'Cookie Settings'; if declined, only the local storage strictly required for basic functionality is kept, and inquiries you submit yourself are unaffected. Depending on site configuration, third-party analytics services (e.g. Google Analytics 4, Baidu Analytics) may be enabled, and their data processing follows the respective providers' privacy policies.", de:"Diese Website verwendet Cookies und lokalen Speicher, um unseren Service zu verbessern. Im Einzelnen: (1) In Ihrem Browser wird eine anonyme Besucherkennung 'hondvo_vid' erzeugt und gespeichert (eine Zufallszeichenfolge ohne personenbezogene Angaben wie Name oder Telefonnummer); (2) wir erfassen Seitenaufrufe (Pfad, Verweildauer, Verweisquelle, Gerätetyp) und Suchbegriffe innerhalb der Website; (3) diese Daten dienen der Zugriffsmessung sowie der Verbesserung unserer Website und Servicequalität und werden höchstens 12 Monate gespeichert; (4) zusätzlich wird notwendiger lokaler Speicher (z. B. sessionStorage) genutzt, um Ihre Sprachpräferenz zu speichern. Sie können das Verhaltens-Tracking jederzeit über 'Cookie-Einstellungen' ablehnen; bei Ablehnung wird nur der für Grundfunktionen erforderliche lokale Speicher beibehalten, selbst übermittelte Anfragen bleiben unberührt. Je nach Konfiguration können Analyse-Dienste Dritter (z. B. Google Analytics 4, Baidu Analytics) aktiviert sein; deren Datenverarbeitung richtet sich nach den Datenschutzbestimmungen der jeweiligen Anbieter.", ru:"Этот сайт использует файлы cookie и локальное хранилище для улучшения сервиса. Подробнее: (1) в вашем браузере создаётся и сохраняется анонимный идентификатор посетителя 'hondvo_vid' (случайная строка, не содержащая персональных данных, таких как имя или телефон); (2) мы собираем данные о просмотрах страниц (путь, время на странице, источник перехода, тип устройства) и поисковые запросы на сайте; (3) эти данные используются для оценки посещаемости и улучшения сайта и качества услуг и хранятся не более 12 месяцев; (4) также используется необходимое локальное хранилище (например, sessionStorage) для запоминания языковых предпочтений. Вы можете в любой момент отказаться от поведенческого отслеживания через «Настройки cookie»; при отказе сохраняется только локальное хранилище, необходимое для базовых функций, а отправленные вами запросы остаются без изменений. В зависимости от конфигурации могут быть включены сторонние сервисы аналитики (например, Google Analytics 4, Baidu Analytics); обработка данных регулируется политикой конфиденциальности соответствующих поставщиков.", fr:"Ce site utilise des cookies et le stockage local pour améliorer notre service. En détail : (1) un identifiant de visiteur anonyme « hondvo_vid » (chaîne aléatoire ne contenant aucune donnée personnelle telle que nom ou téléphone) est généré et conservé dans votre navigateur ; (2) nous collectons des données de consultation (chemin de page, durée, source de provenance, type d'appareil) et les mots-clés de recherche sur le site ; (3) ces données servent à mesurer l'audience et à améliorer notre site et la qualité de service, et sont conservées au maximum 12 mois ; (4) un stockage local nécessaire (comme sessionStorage) est également utilisé pour mémoriser votre préférence de langue. Vous pouvez refuser le suivi comportemental à tout moment via « Paramètres des cookies » ; en cas de refus, seul le stockage local strictement nécessaire au fonctionnement de base est conservé, et les demandes que vous soumettez vous-même ne sont pas affectées. Selon la configuration du site, des services d'analyse tiers (par ex. Google Analytics 4, Baidu Analytics) peuvent être activés ; leur traitement des données suit la politique de confidentialité de ces fournisseurs.", ja:"本サイトはサービス向上のため Cookie およびローカルストレージを使用しています。具体的には、① お客様のブラウザ内に匿名の訪問者識別子「hondvo_vid」（氏名・電話番号などの個人情報を含まないランダムな文字列）を生成・保存します。② ページ閲覧データ（ページパス、滞在時間、参照元、デバイス種別）およびサイト内検索キーワードを収集します。③ これらのデータはアクセス状況の把握とサイト・サービス品質の改善に利用し、保存期間は最長 12 か月です。④ 併せて、言語設定を記憶するために必要なローカルストレージ（sessionStorage など）を使用します。お客様は「Cookie 設定」からいつでも行動追跡を拒否できます。拒否した場合は基本機能に必要なローカルストレージのみが保持され、お客様が自ら送信したお問い合わせには影響しません。サイト設定により、第三者の解析サービス（Google Analytics 4、百度統計など）を有効にする場合があり、そのデータ処理は各提供者のプライバシーポリシーに従います。", ko:"본 웹사이트는 서비스 개선을 위해 쿠키와 로컬 저장소를 사용합니다. 구체적으로: ① 브라우저에 익명 방문자 식별자 'hondvo_vid'(이름·전화번호 등 개인 식별 정보를 포함하지 않는 임의 문자열)를 생성·저장합니다. ② 페이지 조회 데이터(페이지 경로, 체류 시간, 유입 경로, 기기 유형)와 사이트 내 검색 키워드를 수집합니다. ③ 이 데이터는 접속 현황 파악과 웹사이트·서비스 품질 개선에 사용되며 보관 기간은 최대 12개월입니다. ④ 또한 언어 설정을 기억하기 위해 필요한 로컬 저장소(sessionStorage 등)를 사용합니다. 이용자는 '쿠키 설정'에서 언제든지 행동 추적을 거부할 수 있으며, 거부 시 기본 기능에 필요한 로컬 저장소만 유지되고 이용자가 직접 제출한 문의에는 영향이 없습니다. 사이트 설정에 따라 제3자 분석 서비스(예: Google Analytics 4, Baidu Analytics)가 활성화될 수 있으며, 해당 데이터 처리는 각 제공자의 개인정보 처리방침을 따릅니다.", es:"Este sitio web utiliza cookies y almacenamiento local para mejorar nuestro servicio. En concreto: (1) se genera y guarda en su navegador un identificador anónimo de visitante «hondvo_vid» (una cadena aleatoria que no contiene datos personales como nombre o teléfono); (2) recopilamos datos de navegación (ruta de la página, tiempo de permanencia, procedencia, tipo de dispositivo) y palabras clave de búsqueda en el sitio; (3) estos datos se utilizan para medir el tráfico y mejorar nuestro sitio web y la calidad del servicio, y se conservan como máximo 12 meses; (4) también se utiliza almacenamiento local necesario (como sessionStorage) para recordar su preferencia de idioma. Puede rechazar el seguimiento de comportamiento en cualquier momento mediante «Configuración de cookies»; si lo rechaza, solo se conserva el almacenamiento local estrictamente necesario para funciones básicas, y las consultas que usted envíe no se ven afectadas. Según la configuración del sitio, pueden habilitarse servicios de análisis de terceros (p. ej. Google Analytics 4, Baidu Analytics), cuyo tratamiento de datos se rige por las políticas de privacidad de dichos proveedores." },

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

    // 安全赋值：I18N 可能被后台 bridge 覆盖，原样 innerHTML 即存储型 XSS 入口。
    // 含标签 → 白名单过滤；纯文本 → textContent（不解析 HTML）。
    const raw = String(entry[lang]);

    if (/<\/?[a-z][\s\S]*>/i.test(raw)) {

      if (window.HONDVO_sanitizeHTML) el.innerHTML = window.HONDVO_sanitizeHTML(raw);
      else el.textContent = raw; // sanitize.js 未就绪时退化为纯文本，绝不原样注入

    } else {

      el.textContent = raw;

    }

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



  // 图片替代文本（2026-09-29 新增）：与 data-aria-key 同构，写入 alt。
  // 无此机制时 alt 是硬编码中文，切到 de/ru/ja… 仍显示中文 —— SEO 与屏幕阅读器都读错语言。
  document.querySelectorAll('[data-alt-key]').forEach(el => {

    const key = el.getAttribute('data-alt-key');

    const entry = I18N[key];

    if (!entry || !entry[lang]) return;

    el.setAttribute('alt', entry[lang]);

  });

  if (typeof renderLegal === 'function') renderLegal(lang);

  // 语言变更事件总线：供 render.js（CMS / M7 各模块）与 main.js（导航下拉列表 / 抽屉 /
  // 语言浮窗）订阅，替代各处对 switchLang 的多层包装（见 P1-20）。
  try {

    document.dispatchEvent(new CustomEvent('hondvo:lang', { detail: { lang: lang } }));

  } catch (e) {}

}



(function(){

  const VALID = ['zh','en','de','ru','fr','ja','ko','es'];

  const urlLang = new URLSearchParams(location.search).get('lang');

  // 默认语言唯一声明处为 <head> 的首屏脚本（写入 <html lang>），此处仅兜底 'en'。
  // 这样 <html lang> 与 JS 语言状态自首屏起即一致（P1-16）。
  const htmlLang = (document.documentElement.getAttribute('lang') || '').trim();

  const saved = (urlLang && VALID.includes(urlLang))

    ? urlLang

    : (sessionStorage.getItem('hondvo_lang') || (VALID.includes(htmlLang) ? htmlLang : 'en'));

  const apply = () => switchLang(saved);

  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', apply);

  } else {

    apply();

  }

})();
/* ═══════════ 页面级 SEO 元数据（2026-11-05）═══════════
   背景：SPA 切页面不刷新文档头，`<title>` 与 `meta[description]` 永远停在首页英文版 ——
   用户切到德语产品页，标签栏与搜索结果仍是英文首页描述。
   做法：按「当前语言 × 当前页面」重写 title / description / og:*，文案**全部复用现有键**，
        不新增翻译；任何键缺失就回退 en，再缺就保持原样（绝不写空）。

   ⚠️ 为什么写在这里（epilogue）而不是首页内联脚本：
      i18n.js 是发布台产物，epilogue 存在数据库模板里，随每次一键上线原样拼回；
      写在 HTML 里会被下次发布覆盖，等于白改。
   ⚠️ 与壳页（/en/products/ 等静态页）不冲突：那些页面本身不带 JS，各写各的 meta。 */

var HONDVO_META = {

  home:           { t: 'page_title',       d: ['hero_desc', 'home_core_sub'] },
  products:       { t: 'prod_hero',        d: ['prod_hero_sub', 'home_core_sub'] },
  mold:           { t: 'mold_hero',        d: ['mold_hero_sub', 'mold_cap_sub'] },
  qualifications: { t: 'qual_hero',        d: ['qual_hero_sub', 'qual_iq_sub'] },
  about:          { t: 'about_hero',       d: ['about_hero_sub', 'about_tech_cert'] },
  news:           { t: 'news_hero',        d: ['news_hero_sub'] },
  faq:            { t: 'm7_faq_title',     d: ['m7_faq_sub'] },
  careers:        { t: 'cr_concept_title', d: ['cr_concept_body'] },
  contact:        { t: 'ct_hero',          d: ['ct_hero_sub', 'ct_tech_addr'] },
  privacy:        { t: 'ft_privacy',       d: ['footer_desc'] },
  terms:          { t: 'ft_terms',         d: ['footer_desc'] }

};

function hondvoDictText(key, lang) {

  var cell = (typeof I18N !== 'undefined') ? I18N[key] : null;

  if (!cell) return '';

  var v = cell[lang] || cell.en || '';

  return String(v == null ? '' : v);

}

function hondvoPlain(s) {

  return String(s == null ? '' : s)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

}

function hondvoClip(s, n) {

  if (s.length <= n) return s;

  var cut = s.slice(0, n);

  var at = cut.lastIndexOf(' ');

  return (at > n * 0.6 ? cut.slice(0, at) : cut).replace(/[,;:·\-\s]+$/, '') + '…';

}

function hondvoCurrentPage() {

  var h = String(location.hash || '').replace(/^#/, '');

  var pid = h.indexOf('page-') === 0 ? h.slice(5) : '';

  if (!pid) {

    var m = location.search.match(/[?&]page=([a-z\-]+)/);

    pid = m ? m[1] : '';

  }

  return HONDVO_META[pid] ? pid : 'home';

}

function hondvoApplyMeta() {

  var lang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2);

  var pid = hondvoCurrentPage();

  var map = HONDVO_META[pid];

  if (!map) return;

  var name = hondvoPlain(hondvoDictText(map.t, lang));

  var title = pid === 'home'

    ? (name || document.title)

    : (name ? name + ' | HONDVO' : document.title);

  if (title && document.title !== title) document.title = title;

  var desc = hondvoClip(hondvoPlain(map.d.map(function (k) { return hondvoDictText(k, lang); })

    .filter(Boolean).join(' · ')), 155);

  if (!desc) return;

  var set = function (sel, val) {

    var el = document.querySelector(sel);

    if (el) el.setAttribute('content', val);

  };

  set('meta[name="description"]', desc);

  set('meta[property="og:title"]', title);

  set('meta[property="og:description"]', desc);

  set('meta[name="twitter:title"]', title);

  set('meta[name="twitter:description"]', desc);

}

try {

  document.addEventListener('hondvo:lang', hondvoApplyMeta);

  window.addEventListener('hashchange', hondvoApplyMeta);

  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', hondvoApplyMeta);

  } else {

    hondvoApplyMeta();

  }

} catch (e) {}


/* 2026-09-29：原 /publish/i18n-bridge 后台桥接块（fetch 后台 i18n 覆盖 + mergeBridge
 * + HONDVO_mergeBridge 自测出口）已随后台通道整体移除。站点 i18n 的唯一事实来源
 * 即本文件内的 I18N 字典。 */