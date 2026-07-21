const translations = {
    en: {
        // Nav
        "nav-about": "ABOUT",
        "hero-who-am-i": "WHO AM I ?",
        "nav-dojo": "THE DOJO",
        "nav-portfolio": "PORTFOLIO",
        "nav-blog": "BLOG",
        "nav-manifesto": "MANIFESTO",
        "nav-booking": "ENTER DOJO",

        // Hero
        "hero-telemetry": "TELEMETRY ESTABLISHED // POWER SCALE: SYSTEMS LEVEL",
        "hero-title-1": "HEAVEN OR HELL:",
        "hero-title-2": "FORGE YOUR SYSTEMS.",
        "hero-desc": "University taught you how to calculate. I teach you how to survive. Accelerate your career from basic CAD modeler to Systems Architect with high-intensity aerospace guidance. Fusing ESA standard design pipelines with raw 90s shonen grit.",
        "hero-cta": "ENTER THE DOJO. BEGIN YOUR SYSTEMS TRAINING.",
        "hero-operator": "OPERATOR: ZYAD_EL_AOUAD",

        // Hero Stats
        "stat-gnc": "GNC & ADCS CONTROL",
        "stat-workflow": "WORKFLOW DRIFTING (MATLAB/PY)",
        "stat-structural": "RIGOROUS STRUCTURAL RESILIENCE",

        // About
        "about-title": "THE OPERATOR",
        "about-num": "SECT_00 // GENERAL BIOGRAPHY",
        "about-stamp": "RECORD VALIDATED",
        "about-name": "ZYAD EL AOUAD",
        "about-para-1": "I am a Guidance, Navigation, and Control (GNC) and Attitude Determination and Control Systems (ADCS) engineer, aiming to specialize in active space debris mitigation and high-dynamic flight control loops and dynamic systems. My technical foundation and experience span contributing to rocket launches both in Spain and Japan, presenting space debris stabilization laws at the European Space Agency (ESA/ESTEC), and being at the heat of a competitive student UAV universitary project at Universidad Europea de Madrid.",
        "about-para-2": "Having operated within both European aerospace standard environments and the intense academic engineering culture as an exchange student at Kyushu University (and Planet Q Rocketry Club), I help students and future engineers fulfilling their goals and go past their comfort zone to grow.",
        "about-para-3": "Operating fluently across five languages (English, French, Arabic, Spanish, and Japanese), I coach engineers on technical optimization, structural resilience, and building bulletproof portfolios.",
        "about-langs": "LANGUAGES: EN, FR, AR, ES, JP",

        // Dojo
        "dojo-title": "THE DOJO",
        "dojo-num": "SECT_01 // SERVICES",
        
        "dojo-p1-tag": "SIMULATION & CONTROL",
        "dojo-p1-title": "GNC AUTOPILOT TUNER",
        "dojo-p1-desc": "Automated tuning and validation for high-dynamic flight control loops. Upload plant models and controller architectures to automatically synthesize robust gains, run Monte Carlo stability analyses, and export optimized C++/Python autopilot code.",
        "dojo-p1-rate": "DEVELOPER: $49/MO",
        "dojo-p1-btn": "LAUNCH TUNER &rarr;",

        "dojo-p2-tag": "ORBITAL MECHANICS",
        "dojo-p2-title": "DEBRIS STABILIZATION SOLVER",
        "dojo-p2-desc": "Compute magnetic detumbling and active debris stabilization control laws. Upload target inertia tensors and spin rates to generate optimal magnetorquer commands and attitude transition profiles compliant with European Space Agency (ESA) standards.",
        "dojo-p2-rate": "PROFESSIONAL: $99/MO",
        "dojo-p2-btn": "COMPUTE LAW &rarr;",

        "dojo-p3-tag": "PROPULSION SYSTEM",
        "dojo-p3-title": "HYBRID ROCKET SIMULATOR",
        "dojo-p3-desc": "Cloud-based regression rate and transient combustion simulation for hybrid rocket propulsion systems. Instantly model grain geometry regression, chamber pressure oscillations, and nozzle gas dynamics using our serverless CFD cluster.",
        "dojo-p3-rate": "ENTERPRISE: $149/MO",
        "dojo-p3-btn": "RUN SIMULATION &rarr;",

        "dojo-p4-tag": "STRUCTURAL ANALYSIS",
        "dojo-p4-title": "CLOUD FEA VALIDATOR",
        "dojo-p4-desc": "High-fidelity structural analysis validation and safety margin verification pipelines. Upload mechanical assemblies to verify stress concentrations, load paths, and structural resilience factors under launch vibration constraints using cloud-based ANSYS wrappers.",
        "dojo-p4-rate": "BASE TIER: $29/MO",
        "dojo-p4-btn": "VALIDATE DESIGN &rarr;",

        // Portfolio
        "portfolio-title": "THE PORTFOLIO",
        "portfolio-num": "SECT_02 // SYSTEM ARSENAL",
        "portfolio-intro": "Here is my operational record—proof of GNC and propulsion capability validated by aerospace agencies and academic clubs.",
        
        "proj1-overlay": "PLANET Q // KYUSHU U",
        "proj1-title": "TADORI-TADORI HYBRID ROCKETS",
        "proj1-desc": "Reconstructed flight control logs and structural layout simulation for Kyushu University's Planet Q Rocketry club. Analyzed dynamic atmospheric stabilization, nozzle expansion ratios, and hybrid combustion telemetry under extreme conditions.",
        "proj1-btn": "EXAMINE BLUEPRINT &rarr;",
        "proj1-stamp": "TOP SECRET",
        "proj1-header": "FLIGHT PROPULSION SPEC",
        "proj1-big-title": "TADORI COMBUSTION",
        "proj1-meta": "// ENGINE CLASS: HYBRID PROPULSION<br>// FUEL CORE: HTPB + SOLID GRAIN<br>// OXIDIZER: LIQUID N2O (NITROUS OXIDE)<br>// TELEMETRY RECOVERY RATE: 99.4%",
        "proj1-lbl1": "Chamber Pressure",
        "proj1-val1": "4.5 MPa",
        "proj1-lbl2": "Max Thrust",
        "proj1-val2": "2.8 kN",

        "proj2-overlay": "ADCS SIMULATOR",
        "proj2-title": "SART CUBESAT ATTITUDE SIMULATOR",
        "proj2-desc": "Hardware-in-the-loop and software simulation of a 3-axis Cubesat ADCS (Attitude Determination and Control System). Modeled orbital magnetic fields, gravity gradient torques, and reaction wheel detumbling.",
        "proj2-btn": "EXAMINE BLUEPRINT &rarr;",
        "proj2-stamp": "VERIFIED",
        "proj2-header": "ADCS SIMULATION VECTOR",
        "proj2-big-title": "SART CUBESAT LAB",
        "proj2-meta": "// PLATFORM: 3U NANO-SAT BUS<br>// ATTITUDE ERROR RATE: < 0.05 DEG<br>// ACTUATOR COMP: 3 AXIS MAGNETORQUER + RW<br>// INTEGRATOR SUITE: RUNGE-KUTTA ODE45",
        "proj2-lbl1": "Actuator Loop",
        "proj2-val1": "50 Hz Real-Time",
        "proj2-lbl2": "Sensor Fusion",
        "proj2-val2": "EKF Algorithm",

        "proj3-overlay": "ESA CLEAN SPACE DAYS 2026",
        "proj3-title": "UNDERACTUATED DEBRIS STABILIZATION",
        "proj3-desc": "Selected speaker presentation at ESTEC (European Space Research and Technology Centre) for ESA Clean Space Days. Developed a highly customized adaptive control law to stabilize a multi-body spacecraft stack post-capture when half the actuator thrusters are disabled or degraded.",
        "proj3-btn": "EXAMINE ABSTRACT &rarr;",

        // Blog Workspace
        "blog-title": "MISSION LOGS",
        "blog-num": "SECT_03 // TACTICAL BRIEFINGS",
        "blog-intro": "Operational logs detailing code performance, rocketry Club stress-testing, and career blueprint algorithms. Compiled for active study.",
        "blog-tab-read": "> READ MISSION LOGS",
        "blog-tab-forge": "> FORGE NEW LOG",
        
        "editor-fields-title": "BLUEPRINT_INPUT_FIELDS",
        "editor-lbl-title": "> LOG ENTRY TITLE:",
        "editor-lbl-tag": "> METADATA LOG CLASS (TAG):",
        "editor-lbl-date": "> COMPILATION STAMP (DATE):",
        "editor-lbl-cover": "> CHOOSE COVER CARD INTERFACE:",
        "editor-lbl-excerpt": "> LOG SUMMARY EXCERPT:",
        "editor-lbl-content": "> CORE LOG TRANSMISSION (CONTENT):",
        "editor-btn-submit": "> TRANSMIT LOG TO DATABASE",
        "editor-btn-cancel": "> CANCEL EDIT MODE",

        "editor-preview-title": "LIVE_CARD_PREVIEW (REAL-TIME)",
        "editor-db-title": "DATABASE_MONITOR.LOG",
        "editor-btn-wipe": "WIPE LOCAL DATABASE",
        "editor-snippet-title": "HTML_SNIPPET_GENERATOR.EXE",
        "editor-btn-copy": "COPY SNIPPET TO CLIPBOARD",

        // Manifesto
        "manifesto-stamp": "STUDENT FOREVER",
        "manifesto-title": "LIFE-LONG LEARNING<br>AS IF NOTHING<br>WAS KNOWN.",
        "manifesto-para-1": "In the high-stress arenas of aerospace engineering, the moment you think you are the absolute master is the moment you crash. The systems architecture doesn't care about your ego; it only cares about physical laws.",
        "manifesto-para-2": "To survive the 'hell' of Kyushu's labs or command the attention of ESA Executives at ESTEC, you must maintain the spirit of a learner. Every failure in simulations, every drift error, and every structural stress is a lesson.",
        "manifesto-para-3": "I don't offer generic templates or academic hand-holding. I mentor engineers who want to test their steel under fire, rebuild their methodologies, and unlock their technical Bankai.",
        "manifesto-quote": "\"THE ULTIMATE SHIELD IS NOT YOUR DEGREE. IT IS AN UNBREAKABLE DISCIPLINE TO REMAIN A STUDENT AT THE HEIGHT OF THREAT.\"",
        "manifesto-author": "&mdash; ZYAD EL AOUAD, THE IRON ENGINEER",

        // Booking Intake
        "intake-header": "SAAS_LICENSE_INITIALIZATION.EXE",
        "intake-lbl-pillar": "> SELECT SAAS PRODUCT LICENSE:",
        "intake-pillar-default": "-- SELECT SAAS PRODUCT LICENSE --",
        "intake-pillar-1": "GNC AUTOPILOT TUNER ($49/MO)",
        "intake-pillar-2": "DEBRIS STABILIZATION SOLVER ($99/MO)",
        "intake-pillar-3": "HYBRID ROCKET SIMULATOR ($149/MO)",
        "intake-pillar-4": "CLOUD FEA VALIDATOR ($29/MO)",
        "intake-lbl-objs": "> COMPILE CURRENT CAPABILITIES & OBJECTIVES:",
        "intake-btn-submit": "> INITIALIZE SYSTEMS COMPILATION",

        // Footer & Copyright
        "footer-subtext": "// PRESENTING GNC ARCHITECTURES AT ESA // SIMULATING HYBRIDS IN JAPAN // FLUENT IN 5 LANGUAGES",
        "footer-top": "TOP",
        "footer-copy": "&copy; 2026 ZYAD EL AOUAD. ALL OPERATIONS RECORDED. POWER SCALE: SYSTEMS LEVEL.",
        
        // Teaser Keys
        "teaser-logo": "Zyad El Aouad",
        "teaser-nav-portfolio": "VIEW PORTFOLIO",
        "teaser-nav-cta": "JOIN",
        "teaser-telemetry": "INITIALIZING LAUNCH VECTOR // POWER LEVEL: UNBOUNDED",
        "teaser-title-1": "Zyad El Aouad:",
        "teaser-title-2": "BeWinnerEngineer",
        "teaser-desc": "This website is dedicated to the various aspects that shaped and still do shape my life and path to becoming a reliable and professional aerospace engineer. University studies require a high level of guidance and discipline in order to achieve high engineer goals. Therefore, I intend to share what I have learned and still learn to survive and thrive in the current world.",
        "teaser-clock-header": "> TIME_TILL_LAUNCH.EXE",
        "teaser-days": "DAYS",
        "teaser-hours": "HOURS",
        "teaser-mins": "MINUTES",
        "teaser-secs": "SECONDS",
        "teaser-pillars-title": "SYSTEM <span>CAPABILITIES</span>",
        "teaser-pillars-num": "TACTICAL VALUE MATRIX",
        "teaser-tag-skills": "ENGINEERING EXCELLENCE",
        "teaser-p1-title": "BECOME BETTER ENGINEERS",
        "teaser-p1-desc": "Standard curriculums teach equations. We teach practical systems architecture. Master GNC modeling, ANSYS structural validation, and robust workflow automation so your engineering output meets professional space standards.",
        "teaser-tag-career": "CAREER HARDENING",
        "teaser-p2-title": "FIND OPPORTUNITIES",
        "teaser-p2-desc": "We transform soft resumes into unbreakable exoskeleton portfolios. Learn how to draft technical proposals and application packets that command immediate attention from giants like Boeing, Airbus, and ESA research centers.",
        "teaser-tag-resilience": "MENTAL SHIELDING",
        "teaser-p3-title": "EMOTIONAL SUPPORT",
        "teaser-p3-desc": "The academic grind is brutal. We provide direct coaching on managing heavy engineering workloads, overcoming failure in simulation labs, and building the mental armor needed to stay calm under intense board reviews.",
        "teaser-dojo-header": "TRAINING PATHS",
        "teaser-dojo-title": "EXPLORE THE DOJO",
        "teaser-dojo-desc": "Inspect our detailed training paths, GNC control loops syllabus, and mechanical engineering modules.",
        "teaser-dojo-btn": "SEE THE DOJO &rarr;",
        "teaser-waitlist-header": "COHORT ENROLLMENT",
        "teaser-waitlist-title": "JOIN ELITE WAITLIST",
        "teaser-waitlist-desc": "Mentorship cohort seats are capped strictly at 5 students for Fall 2026. Submitting enters you into the priority selection queue.",
        "teaser-intake-lbl-name": "> INTAKE OPERATOR NAME:",
        "teaser-intake-lbl-email": "> SECURE EMAIL CHANNELS:",
        "teaser-intake-lbl-stress": "> CHOOSE PRIMARY BOTTLENECK:",
        "teaser-intake-opt-default": "-- SELECT PRIMARY CHALLENGE --",
        "teaser-intake-opt-1": "Finding Top Internships & Opportunities",
        "teaser-intake-opt-2": "Managing Workload Stress & Emotional Support",
        "teaser-intake-opt-3": "GNC & Control Theory Code Hardening",
        "teaser-intake-opt-4": "Building Systems-Level Portfolio Armor",
        "teaser-intake-btn": "> SECURE PRIORITY APPLICATION TICKET",
        "teaser-audit-badge": "SaaS AUDIT",
        "teaser-audit-price": "$49 / AUDIT",
        "teaser-audit-title": "PORTFOLIO AUDIT & OPTIMIZATION",
        "teaser-audit-desc": "Harden your engineering projects. Upload your portfolio and resumes to run an automated check against strict aerospace recruitment requirements, verifying GNC core terms, structural FEA project entries, and formatting alignment.",
        "teaser-audit-btn": "RUN AUDIT &rarr;",
        "teaser-news-badge": "WEEKLY TRANSMISSIONS",
        "teaser-news-title": "THE IRON TELEMETRY",
        "teaser-news-desc": "Receive GNC simulation blueprints, upcoming internship telemetry alerts, and emotional resilience manuals to keep your engineering discipline unbreakable under stress.",
        "teaser-news-btn": "SUBSCRIBE",
        "teaser-feed-header": "> DYNAMIC SYSTEM TELEMETRY TICKER",
        "teaser-footer-sub": "// MENTORSHIP STAGES // 5 LANGUAGES SUPPORTED",
        "teaser-footer-copy": "&copy; 2026 ZYAD EL AOUAD. ALL CODES SECURED. POWER LEVEL: SYSTEMS."
    },
    jp: {
        // Nav
        "nav-about": "自己紹介",
        "hero-who-am-i": "プロフィール",
        "nav-dojo": "道場 (サービス)",
        "nav-portfolio": "ポートフォリオ",
        "nav-blog": "ブログ",
        "nav-manifesto": "マニフェスト",
        "nav-booking": "道場に入門",

        // Hero
        "hero-telemetry": "テレメトリ接続確立 // パワースケール：システムレベル",
        "hero-title-1": "ヘブン・オア・ヘル：",
        "hero-title-2": "自らのシステムを鍛え上げよ。",
        "hero-desc": "大学は計算方法を教えてくれたが、私は生き残る術を教える。高強度の宇宙工学指導により、基本的なCADモデラーからシステムアーキテクトへとキャリアを加速させよ。ESA標準の設計パイプラインと、90年代少年漫画の闘志を融合。",
        "hero-cta": "道場に入門。システムの修行を開始する。",
        "hero-operator": "オペレーター: ZYAD_EL_AOUAD",

        // Hero Stats
        "stat-gnc": "GNC＆ADCS制御",
        "stat-workflow": "ワークフロー・ドリフト (MATLAB/PY)",
        "stat-structural": "高度構造レジリエンス",

        // About
        "about-title": "オペレーター",
        "about-num": "SECT_00 // 自己紹介",
        "about-stamp": "レコード検証済",
        "about-name": "ZYAD EL AOUAD",
        "about-para-1": "私は、能動的な宇宙デブリ除去、高運動飛行制御ループ、および動的システムを専門とすることを目指す、制御・ナビゲーション・操縦 (GNC) および姿勢決定制御システム (ADCS) のエンジニアです。私の技術的基礎と経験は、スペインと日本でのロケット打ち上げへの貢献、欧州宇宙機関 (ESA/ESTEC) での宇宙デブリ安定化則の発表、マドリード・ヨーロッパ大学での競争力のある学生UAVプロジェクトの中核での活動に及びます。",
        "about-para-2": "欧州の宇宙航空標準環境と、九州大学（およびPlanet Q Rocketry Club）の交換留学生としての激しい学術エンジニアリング文化の双方で活動した経験を活かし、私は学生や将来のエンジニアが目標を達成し、自らのコンフォートゾーンを超えて成長できるよう支援します。",
        "about-para-3": "英語、フランス語、アラビア語、スペイン語、日本語の5カ国語を流暢に操り、エンジニアの技術的最適化、構造レジリエンス、完璧なポートフォリオの構築をコーチしています。",
        "about-langs": "対応言語: EN, FR, AR, ES, JP",

        // Dojo
        "dojo-title": "道場",
        "dojo-num": "SECT_01 // サービス",
        
        "dojo-p1-tag": "シミュレーション＆制御",
        "dojo-p1-title": "GNC AUTOPILOT TUNER",
        "dojo-p1-desc": "高運動飛行制御ループの自動チューニングと検証。プラントモデルとコントローラ構成をアップロードして、ロバストゲインを自動合成し、モンテカルロ安定性解析を実行し、最適化されたC++/Python自動操縦コードをエクスポートします。",
        "dojo-p1-rate": "開発者プラン: $49/月",
        "dojo-p1-btn": "チューナーを起動 &rarr;",

        "dojo-p2-tag": "軌道力学",
        "dojo-p2-title": "DEBRIS STABILIZATION SOLVER",
        "dojo-p2-desc": "能動的デブリ除去のための磁気デタンブリングおよび安定化制御則を計算。ターゲットの慣性テンソルとスピン速度をアップロードして、欧州宇宙機関（ESA）基準に準拠した最適なマグネトーカーコマンドと姿勢遷移プロファイルを生成します。",
        "dojo-p2-rate": "プロフェッショナルプラン: $99/月",
        "dojo-p2-btn": "制御則を計算 &rarr;",

        "dojo-p3-tag": "推進システム",
        "dojo-p3-title": "HYBRID ROCKET SIMULATOR",
        "dojo-p3-desc": "ハイブリッドロケット推進システム向けのクラウドベース後退速度および過渡燃焼シミュレーション。サーバーレスCFDクラスターを用いて、燃料グレイン形状の後退、燃焼室圧力振動、およびノズルガス力学を即座にモデル化します。",
        "dojo-p3-rate": "エンタープライズプラン: $149/月",
        "dojo-p3-btn": "シミュレーションを実行 &rarr;",

        "dojo-p4-tag": "構造解析",
        "dojo-p4-title": "CLOUD FEA VALIDATOR",
        "dojo-p4-desc": "打上げ時の振動制約下における高精度構造解析検証および安全余裕確認パイプライン。メカニカルアセンブリをアップロードし、クラウドベースのANSYSラッパーを使用して応力集中、荷重伝達経路、および構造レジリエンス係数を自動検証します。",
        "dojo-p4-rate": "ベースプラン: $29/月",
        "dojo-p4-btn": "設計を検証 &rarr;",

        // Portfolio
        "portfolio-title": "ポートフォリオ",
        "portfolio-num": "SECT_02 // 実績",
        "portfolio-intro": "宇宙機関や大学の部活動で検証された、GNCと推進システムの実績ログを公開します。",
        
        "proj1-overlay": "PLANET Q // 九州大学",
        "proj1-title": "TADORI-TADORI ハイブリッドロケット",
        "proj1-desc": "九州大学Planet Qロケットクラブにおける飛行制御ログと構造設計シミュレーションの再構築。極限状態での動的大気安定化、ノズル膨張比、ハイブリッド燃焼テレメトリを解析。",
        "proj1-btn": "設計図を解析 &rarr;",
        "proj1-stamp": "極秘資料",
        "proj1-header": "飛行推進システム仕様",
        "proj1-big-title": "TADORI 燃焼制御",
        "proj1-meta": "// エンジンクラス: ハイブリッド推進<br>// 燃料コア: HTPB + 固体燃料<br>// 酸化剤: 液体 N2O (亜酸化窒素)<br>// テレメトリ回収率: 99.4%",
        "proj1-lbl1": "燃焼室圧力",
        "proj1-val1": "4.5 MPa",
        "proj1-lbl2": "最大推力",
        "proj1-val2": "2.8 kN",

        "proj2-overlay": "ADCSシミュレータ",
        "proj2-title": "SART CUBESAT 姿勢制御シミュレータ",
        "proj2-desc": "3軸Cubesat ADCS (姿勢決定制御システム) のハードウェア・イン・ザ・ループ (HIL) およびソフトウェア・シミュレーション。地球磁場、重力傾斜トルク、リアクションホイールによるデタンプリングのモデリング。",
        "proj2-btn": "設計図を解析 &rarr;",
        "proj2-stamp": "認証済",
        "proj2-header": "ADCSシミュレーションベクトル",
        "proj2-big-title": "SART CUBESAT 実験室",
        "proj2-meta": "// プラットフォーム: 3U超小型衛星バス<br>// 姿勢誤差率: < 0.05 度<br>// アクチュエータ: 3軸磁気トルカ + RW<br>// 積分スキーム: ルンゲ・クッタ ODE45",
        "proj2-lbl1": "制御ループ",
        "proj2-val1": "50 Hz リアルタイム",
        "proj2-lbl2": "センサフュージョン",
        "proj2-val2": "EKFアルゴリズム",

        "proj3-overlay": "ESA CLEAN SPACE DAYS 2026",
        "proj3-title": "劣駆動スペースデブリ安定化",
        "proj3-desc": "ESA Clean Space Daysにて、ESTECでのスピーカープレゼンテーションに選出。ロボットキャプチャ後にアクチュエータの半分が破損または劣化した場合でも、複数衛星結合体の姿勢を安定化させる適応制御則を開発。",
        "proj3-btn": "要旨を解析 &rarr;",

        // Blog Workspace
        "blog-title": "作戦日誌",
        "blog-num": "SECT_03 // 戦術ブリーフィング",
        "blog-intro": "コードの挙動、ロケット工学部の過酷試験、キャリア設計アルゴリズムを記述した作戦日誌。分析用にコンパイル済。",
        "blog-tab-read": "> 日誌を読む",
        "blog-tab-forge": "> 日誌を鍛造",
        
        "editor-fields-title": "BLUEPRINT_入力フィールド",
        "editor-lbl-title": "> ログタイトル:",
        "editor-lbl-tag": "> メタデータタグ (TAG):",
        "editor-lbl-date": "> コンパイル日付:",
        "editor-lbl-cover": "> カバー画像を選択:",
        "editor-lbl-excerpt": "> ログ要約:",
        "editor-lbl-content": "> ログ本文 (HTML/Markdown対応):",
        "editor-btn-submit": "> ログをデータベースに送信",
        "editor-btn-cancel": "> 編集モードをキャンセル",

        "editor-preview-title": "ライブカードプレビュー (リアルタイム)",
        "editor-db-title": "DATABASE_MONITOR.LOG",
        "editor-btn-wipe": "ローカルデータベースを消去",
        "editor-snippet-title": "HTML_SNIPPET_GENERATOR.EXE",
        "editor-btn-copy": "クリップボードにコピー",

        // Manifesto
        "manifesto-stamp": "終身学習者",
        "manifesto-title": "何も知らぬが如く<br>生涯にわたり<br>学び続ける。",
        "manifesto-para-1": "宇宙工学の過酷な戦場において、「自分はすべてを習得した」と思った瞬間が破滅の始まりです。システム・アーキテクチャはエンジニアのプライドなど気にしません。物理法則だけがすべてです。",
        "manifesto-para-2": "九大の実験室という「地獄」を生き残り、ESTECでESA幹部の注目を集めるためには、常に学ぶ姿勢を維持しなければなりません。シミュレーションの失敗、軌道ドリフト、構造的応力、そのすべてが修行です。",
        "manifesto-para-3": "ありきたりのテンプレートや甘い指導は提供しません。戦火の中で己の鋼を鍛え、手法を再構築し、技術的卍解を解放したいエンジニアを指導します。",
        "manifesto-quote": "「最強の盾は学位ではない。脅威の最中であっても学び続ける、揺るぎなき規律だ。」",
        "manifesto-author": "&mdash; ZYAD EL AOUAD、アイアンエンジニア",

        // Booking Intake
        "intake-header": "SAAS_LICENSE_INITIALIZATION.EXE",
        "intake-lbl-pillar": "> SAAS製品ライセンスを選択:",
        "intake-pillar-default": "-- SAAS製品ライセンスを選択してください --",
        "intake-pillar-1": "GNC AUTOPILOT TUNER ($49/月)",
        "intake-pillar-2": "DEBRIS STABILIZATION SOLVER ($99/月)",
        "intake-pillar-3": "HYBRID ROCKET SIMULATOR ($149/月)",
        "intake-pillar-4": "CLOUD FEA VALIDATOR ($29/月)",
        "intake-lbl-objs": "> 現在のスキルと解決したい課題を入力:",
        "intake-btn-submit": "> システムコンパイルの開始",

        "footer-subtext": "// ESAでのGNC設計発表 // 日本でのロケット開発シミュレーション // 5カ国語に対応",
        "footer-top": "一番上へ",
        "footer-copy": "&copy; 2026 ZYAD EL AOUAD. 全てのデータ記録完了。パワー：システムクラス。",
        
        // Teaser Keys
        "teaser-logo": "Zyad El Aouad",
        "teaser-nav-portfolio": "ポートフォリオを見る",
        "teaser-nav-cta": "参加する",
        "teaser-telemetry": "起動ベクトル初期化中 // パワーレベル：無制限",
        "teaser-title-1": "Zyad El Aouad:",
        "teaser-title-2": "BeWinnerEngineer",
        "teaser-desc": "このウェブサイトは、信頼できるプロフェッショナルな宇宙航空エンジニアになるための私の人生と道のりを形作り、今なお形作り続けているさまざまな側に捧げられています。大学での研究は、高いエンジニアの目標を達成するために、高いレベルの指導と規律を必要とします。したがって、私は現在の世界で生き残り、繁栄するために学んだこと、そして今も学び続けていることを共有するつもりです。",
        "teaser-clock-header": "> TIME_TILL_LAUNCH.EXE",
        "teaser-days": "日",
        "teaser-hours": "時間",
        "teaser-mins": "分",
        "teaser-secs": "秒",
        "teaser-pillars-title": "システム <span>機能要件</span>",
        "teaser-pillars-num": "戦術価値マトリクス",
        "teaser-tag-skills": "エンジニアリング卓越性",
        "teaser-p1-title": "より優秀なエンジニアへ",
        "teaser-p1-desc": "通常のカリキュラムは方程式を教えますが、当道場では実践的なシステムアーキテクチャを教えます。GNCモデリング、ANSYS構造検証、ワークフローの自動化を習得し、プロレベルの成果物を生み出します。",
        "teaser-tag-career": "キャリア装甲強化",
        "teaser-p2-title": "機会を見つけ出す",
        "teaser-p2-desc": "脆弱なレジュメを、無敵のポートフォリオへと新生させます。ボーイングやエアバス、欧州宇宙機関（ESA）の研究部門から即座にオファーを勝ち取るための、実戦的な技術提案やアピール方法を学びます。",
        "teaser-tag-resilience": "精神的防護盾",
        "teaser-p3-title": "感情・精神サポート",
        "teaser-p3-desc": "学問の道は過酷です。私たちは、莫大なエンジニアリングの負荷調整、実験室での失敗の乗り越え方、過酷な口頭試問や面接で冷静を保つための強固な精神（鎧）の構築を直接指導します。",
        "teaser-dojo-header": "修行コース",
        "teaser-dojo-title": "道場を探索する",
        "teaser-dojo-desc": "GNC制御ループのシラバスや構造力学など、詳細なカリキュラムやトレーニングパスをご覧ください。",
        "teaser-dojo-btn": "道場を見る &rarr;",
        "teaser-waitlist-header": "コホート登録",
        "teaser-waitlist-title": "精鋭待機リストに加わる",
        "teaser-waitlist-desc": "2026年秋期の個別指導枠は先着5名限定です。送信すると、優先選考キューに登録されます。",
        "teaser-intake-lbl-name": "> 志望者名を入力してください:",
        "teaser-intake-lbl-email": "> 連絡用安全メールアドレス:",
        "teaser-intake-lbl-stress": "> 主要な課題を選択してください:",
        "teaser-intake-opt-default": "-- 克服したい課題を選択 --",
        "teaser-intake-opt-1": "一流インターンシップや機会の開拓",
        "teaser-intake-opt-2": "莫大なタスク負荷と精神・感情サポート",
        "teaser-intake-opt-3": "GNC＆制御理論コードの強化",
        "teaser-intake-opt-4": "システムレベルのポートフォリオ装甲構築",
        "teaser-intake-btn": "> 優先選考チケットを確保する",
        "teaser-audit-badge": "SaaS監査",
        "teaser-audit-price": "$49 / 監査",
        "teaser-audit-title": "ポートフォリオ監査＆最適化",
        "teaser-audit-desc": "エンジニアリングプロジェクトを強化。ポートフォリオとレジュメをアップロードして、厳格な航空宇宙採用要件に対する自動チェックを実行し、GNCコア用語、構造FEAプロジェクトのエントリ、およびフォーマットの整合性を検証します。",
        "teaser-audit-btn": "監査を実行する &rarr;",
        "teaser-news-badge": "週刊配信情報",
        "teaser-news-title": "THE IRON TELEMETRY",
        "teaser-news-desc": "GNCシミュレーション設計図、最新インターンシップ情報、困難に立ち向かうための精神的レジリエンス手順書を毎週お届けします。",
        "teaser-news-btn": "購読する",
        "teaser-feed-header": "> ダイナミック・システムテレメトリ・ティッカー",
        "teaser-footer-sub": "// 指導ステップ // 5ヶ国語対応",
        "teaser-footer-copy": "&copy; 2026 ZYAD EL AOUAD. 全コードセキュリティ確保完了。パワーレベル：システム。"
    },
    fr: {
        // Nav
        "nav-about": "À PROPOS",
        "hero-who-am-i": "QUI SUIS-JE ?",
        "nav-dojo": "LE DOJO",
        "nav-portfolio": "PORTFOLIO",
        "nav-blog": "BLOG",
        "nav-manifesto": "MANIFESTE",
        "nav-booking": "ACCÉDER AU DOJO",

        // Hero
        "hero-telemetry": "TÉLÉMÉTRIE ÉTABLIE // ÉCHELLE DE PUISSANCE : NIVEAU SYSTÈMES",
        "hero-title-1": "LE CIEL OU L'ENFER :",
        "hero-title-2": "FORGEZ VOS SYSTÈMES.",
        "hero-desc": "L'université vous a appris à calculer. Je vous apprends à survivre. Accélérez votre carrière de simple modélisateur CAO à architecte système grâce à un accompagnement aérospatial intensif. Fusionnant les processus de conception standard de l'ESA avec le style brut des shonen des années 90.",
        "hero-cta": "ENTRER DANS LE DOJO. COMMENCER VOTRE APPRENTISSAGE DES SYSTÈMES.",
        "hero-operator": "OPÉRATEUR : ZYAD_EL_AOUAD",

        // Hero Stats
        "stat-gnc": "CONTRÔLE GNC & ADCS",
        "stat-workflow": "DÉRIVE DE FLUX DE TRAVAIL (MATLAB/PY)",
        "stat-structural": "RÉSILIENCE STRUCTURELLE RIGOUREUSE",

        // About
        "about-title": "L'OPÉRATEUR",
        "about-num": "SECT_00 // BIOGRAPHIE GÉNÉRALE",
        "about-stamp": "DOSSIER VALIDÉ",
        "about-name": "ZYAD EL AOUAD",
        "about-para-1": "Je suis ingénieur en Guidage, Navigation et Contrôle (GNC) et Systèmes de Détermination et de Contrôle d'Attitude (ADCS), visant à me spécialiser dans l'atténuation active des débris spatiaux, les boucles de contrôle de vol à haute dynamique et les systèmes dynamiques. Mes bases techniques et mon expérience s'étendent de la contribution aux lancements de fusées en Espagne et au Japon, à la présentation de lois de stabilisation des débris spatiaux à l'Agence spatiale européenne (ESA/ESTEC), en passant par une participation active à un projet universitaire de drone étudiant compétitif à l'Universidad Europea de Madrid.",
        "about-para-2": "Ayant évolué à la fois dans des environnements aérospatiaux standards européens et dans la culture d'ingénierie académique intense en tant qu'étudiant d'échange à l'Université de Kyushu (et au Planet Q Rocketry Club), j'aide les étudiants et futurs ingénieurs à atteindre leurs objectifs et à sortir de leur zone de confort pour grandir.",
        "about-para-3": "Opérant couramment dans cinq langues (anglais, français, arabe, espagnol et japonais), je conseille les ingénieurs sur l'optimisation technique, la résilience structurelle et la création de portfolios solides.",
        "about-langs": "LANGUES : EN, FR, AR, ES, JP",

        // Dojo
        "dojo-title": "LE DOJO",
        "dojo-num": "SECT_01 // SERVICES",
        
        "dojo-p1-tag": "SIMULATION & CONTRÔLE",
        "dojo-p1-title": "GNC AUTOPILOT TUNER",
        "dojo-p1-desc": "Optimisation et validation automatisées pour les boucles de contrôle de vol hautement dynamiques. Téléchargez vos modèles de système et vos architectures de contrôleur pour synthétiser automatiquement des gains robustes, exécuter des analyses de stabilité de Monte Carlo et exporter du code de pilote automatique C++/Python optimisé.",
        "dojo-p1-rate": "DÉVELOPPEUR : $49/MOIS",
        "dojo-p1-btn": "LANCER LE TUNER &rarr;",

        "dojo-p2-tag": "MÉCANIQUE ORBITALE",
        "dojo-p2-title": "DEBRIS STABILIZATION SOLVER",
        "dojo-p2-desc": "Calcul des lois de contrôle de stabilisation active et de désorbitation magnétique pour les débris spatiaux non coopératifs. Téléchargez les tenseurs d'inertie cibles et les vitesses de rotation pour générer des commandes de magnéto-coupleur et des profils de transition d'attitude conformes aux normes de l'ESA.",
        "dojo-p2-rate": "PROFESSIONNEL : $99/MOIS",
        "dojo-p2-btn": "CALCULER LA LOI &rarr;",

        "dojo-p3-tag": "PROPULSION",
        "dojo-p3-title": "HYBRID ROCKET SIMULATOR",
        "dojo-p3-desc": "Simulation en nuage du taux de régression et de la combustion transitoire pour les systèmes de propulsion hybrides. Modélisez instantanément la régression de la géométrie du grain, les oscillations de pression de la chambre et la dynamique des gaz de tuyère à l'aide de notre cluster CFD sans serveur.",
        "dojo-p3-rate": "ENTREPRISE : $149/MOIS",
        "dojo-p3-btn": "LANCER LA SIMULATION &rarr;",

        "dojo-p4-tag": "ANALYSE STRUCTURELLE",
        "dojo-p4-title": "CLOUD FEA VALIDATOR",
        "dojo-p4-desc": "Validation d'analyse structurelle haute fidélité et vérification des marges de sécurité sous contraintes de vibration de lancement. Téléchargez vos assemblages mécaniques pour vérifier les concentrations de contraintes, les chemins de charge et les coefficients de résilience à l'aide de scripts ANSYS automatisés.",
        "dojo-p4-rate": "OFFRE DE BASE : $29/MOIS",
        "dojo-p4-btn": "VALIDER LE DESIGN &rarr;",

        // Portfolio
        "portfolio-title": "LE PORTFOLIO",
        "portfolio-num": "SECT_02 // PORTFOLIO",
        "portfolio-intro": "Voici mon historique opérationnel — preuve de mes compétences en propulsion et GNC validées par des agences aérospatiales et des clubs académiques.",
        
        "proj1-overlay": "PLANET Q // U KYUSHU",
        "proj1-title": "FUSÉES HYBRIDES TADORI-TADORI",
        "proj1-desc": "Reconstruction des journaux de contrôle de vol et simulation structurelle pour le club de fusées Planet Q de l'Université de Kyushu. Analyse de la stabilisation atmosphérique dynamique, des rapports d'expansion de tuyère, et télémétrie de combustion hybride.",
        "proj1-btn": "EXAMINER LE SCHÉMA &rarr;",
        "proj1-stamp": "TOP SECRET",
        "proj1-header": "SPEC DE PROPULSION DE VOL",
        "proj1-big-title": "COMBUSTION TADORI",
        "proj1-meta": "// FUSEE : PROPULSION HYBRIDE<br>// COEUR DE CARBURANT : HTPB + BLOC SOLIDE<br>// COMBURANT : N2O LIQUIDE (PROTOXYDE D'AZOTE)<br>// TAUX DE RECUPERATION TELEMETRIE : 99.4%",
        "proj1-lbl1": "Pression de chambre",
        "proj1-val1": "4.5 MPa",
        "proj1-lbl2": "Poussée Max",
        "proj1-val2": "2.8 kN",

        "proj2-overlay": "SIMULATEUR ADCS",
        "proj2-title": "SIMULATEUR D'ATTITUDE CUBESAT SART",
        "proj2-desc": "Simulation matérielle (HIL) et logicielle du système ADCS (détermination et contrôle d'attitude) d'un CubeSat 3U. Modélisation du champ magnétique orbital, des couples de gradient de gravité et de la stabilisation par roues de réaction.",
        "proj2-btn": "EXAMINER LE SCHÉMA &rarr;",
        "proj2-stamp": "VERIFIÉ",
        "proj2-header": "VECTEUR DE SIMULATION ADCS",
        "proj2-big-title": "LAB CUBESAT SART",
        "proj2-meta": "// PLATEFORME : NANO-SATELLITE 3U<br>// TAUX D'ERREUR D'ATTITUDE : < 0.05 DEG<br>// ACTIONNEURS : 3 MAGNETO-COUPLEURS + RW<br>// SUITE D'INTEGRATION : RUNGE-KUTTA ODE45",
        "proj2-lbl1": "Boucle active",
        "proj2-val1": "50 Hz Temps-Réel",
        "proj2-lbl2": "Fusion Capteurs",
        "proj2-val2": "Algorithme EKF",

        "proj3-overlay": "ESA CLEAN SPACE DAYS 2026",
        "proj3-title": "STABILISATION DE DEBRIS SOUS-ACTIONNÉS",
        "proj3-desc": "Présentation sélectionnée à l'ESTEC (Centre européen de recherche et de technologie spatiales) pour les ESA Clean Space Days. Développement d'une loi de contrôle adaptative pour stabiliser un satellite après capture lorsque la moitié des actionneurs sont dégradés.",
        "proj3-btn": "EXAMINER L'ABSTRACT &rarr;",

        // Blog Workspace
        "blog-title": "JOURNAUX DE MISSION",
        "blog-num": "SECT_03 // BRIEFINGS TACTIQUES",
        "blog-intro": "Journaux opérationnels détaillant les performances du code, les tests sous contrainte en club de fusée, et les algorithmes de carrière. Compilés pour étude active.",
        "blog-tab-read": "> LIRE LES LOGS",
        "blog-tab-forge": "> FORGER UN NOUVEAU LOG",
        
        "editor-fields-title": "CHAMPS_DE_SAISIE_SCHÉMA",
        "editor-lbl-title": "> TITRE DU LOG :",
        "editor-lbl-tag": "> CLASSE DU LOG (TAG) :",
        "editor-lbl-date": "> COMPILATION CHRONO (DATE) :",
        "editor-lbl-cover": "> CHOISIR L'IMAGE DE COUVERTURE :",
        "editor-lbl-excerpt": "> RÉSUMÉ DU LOG :",
        "editor-lbl-content": "> CONTENU DU LOG (HTML/Markdown supporté) :",
        "editor-btn-submit": "> TRANSMETTRE LE LOG A LA BDD",
        "editor-btn-cancel": "> ANNULER LE MODE ÉDITION",

        "editor-preview-title": "PREVIEW_CARTE_DYNAMIQUE (TEMPS RÉEL)",
        "editor-db-title": "MONITEUR_BASE_DE_DONNÉES.LOG",
        "editor-btn-wipe": "RÉINITIALISER LA BASE DE DONNÉES",
        "editor-snippet-title": "GENERATEUR_SNIPPET_HTML.EXE",
        "editor-btn-copy": "COPIER LE CODE HTML",

        // Manifesto
        "manifesto-stamp": "APPRENTI TOUJOURS",
        "manifesto-title": "APPRENDRE TOUTE SA VIE<br>COMME SI RIEN<br>N'ÉTAIT ACQUIS.",
        "manifesto-para-1": "Dans le monde ultra-compétitif de l'ingénierie aérospatiale, le moment où vous pensez avoir tout maîtrisé est celui où vous échouez. Les lois physiques se moquent de votre ego ; elles ne répondent qu'aux lois de la nature.",
        "manifesto-para-2": "Pour survivre aux laboratoires de Kyushu ou capter l'attention des comités de l'ESA à l'ESTEC, vous devez garder l'esprit d'un élève. Chaque échec de simulation, chaque erreur de dérive et chaque contrainte de structure est une leçon.",
        "manifesto-para-3": "Je n'offre pas de modèles faciles ou d'accompagnement académique passif. J'accompagne les ingénieurs qui veulent forger leur acier sous le feu, reconstruire leurs méthodes et débloquer leur Bankai technique.",
        "manifesto-quote": "\"LE BLINDAGE ULTIME N'EST PAS VOTRE DIPLÔME. C'EST LA DISCIPLINE INCASSABLE DE RESTER UN ÉTUDIANT AU CŒUR DE LA MENACE.\"",
        "manifesto-author": "&mdash; ZYAD EL AOUAD, THE IRON ENGINEER",

        // Booking Intake
        "intake-header": "SAAS_LICENSE_INITIALIZATION.EXE",
        "intake-lbl-pillar": "> SÉLECTIONNER LA LICENCE PRODUIT SAAS :",
        "intake-pillar-default": "-- SÉLECTIONNER LA LICENCE PRODUIT SAAS --",
        "intake-pillar-1": "GNC AUTOPILOT TUNER ($49/MOIS)",
        "intake-pillar-2": "DEBRIS STABILIZATION SOLVER ($99/MOIS)",
        "intake-pillar-3": "HYBRID ROCKET SIMULATOR ($149/MOIS)",
        "intake-pillar-4": "CLOUD FEA VALIDATOR ($29/MOIS)",
        "intake-lbl-objs": "> COMPILER VOS CAPACITÉS ET OBJECTIFS :",
        "intake-btn-submit": "> INITIALISER LA COMPILATION DES SYSTÈMES",

        "footer-subtext": "// CONCEPTION GNC POUR L'ESA // SIMULATIONS ROCKETRY AU JAPON // TRILINGUE EN 5 LANGUES",
        "footer-top": "HAUT",
        "footer-copy": "&copy; 2026 ZYAD EL AOUAD. TOUTES OPÉRATIONS ENREGISTRÉES. PUISSANCE : CLASSE SYSTEME.",
        
        // Teaser Keys
        "teaser-logo": "Zyad El Aouad",
        "teaser-nav-portfolio": "VOIR LE PORTFOLIO",
        "teaser-nav-cta": "REJOINDRE",
        "teaser-telemetry": "VECTEUR DE DÉPLOIEMENT INITIALISÉ // PUISSANCE : ILLIMITÉE",
        "teaser-title-1": "Zyad El Aouad:",
        "teaser-title-2": "BeWinnerEngineer",
        "teaser-desc": "Ce site web est dédié aux différents aspects qui ont façonné et continuent de façonner ma vie et mon parcours pour devenir un ingénieur aérospatial fiable et professionnel. Les études universitaires exigent un niveau élevé d'encadrement et de discipline pour atteindre des objectifs d'ingénierie élevés. C'est pourquoi j'ai l'intention de partager ce que j'ai appris et ce que j'apprends encore pour survivre et prospérer dans le monde actuel.",
        "teaser-clock-header": "> TIME_TILL_LAUNCH.EXE",
        "teaser-days": "JOURS",
        "teaser-hours": "HEURES",
        "teaser-mins": "MINUTES",
        "teaser-secs": "SECONDES",
        "teaser-pillars-title": "COMPÉTENCES <span>DU SYSTÈME</span>",
        "teaser-pillars-num": "MATRICE DE VALEUR DÉPLOYÉE",
        "teaser-tag-skills": "EXCELLENCE INGENIERIE",
        "teaser-p1-title": "DEVENIR DE MEILLEURS INGÉNIEURS",
        "teaser-p1-desc": "Les cursus classiques enseignent des formules théoriques. Nous enseignons l'architecture pratique des systèmes. Maîtrisez la modélisation GNC, la validation structurelle ANSYS, et l'automatisation avancée.",
        "teaser-tag-career": "RENFORCEMENT DE CARRIÈRE",
        "teaser-p2-title": "TROUVER DES OPPORTUNITÉS",
        "teaser-p2-desc": "Transformez des CV ordinaires en portefeuilles techniques percutants de niveau aérospatial. Apprenez à rédiger des propositions techniques qui captent l'attention de Boeing, Airbus, et de l'ESA.",
        "teaser-tag-resilience": "BLINDAGE MENTAL",
        "teaser-p3-title": "SOUTIEN ÉMOTIONNEL",
        "teaser-p3-desc": "Les études d'ingénieur sont rudes. Nous offrons un accompagnement direct pour gérer la charge de travail, surmonter les échecs et bâtir le blindage mental nécessaire pour surmonter le stress.",
        "teaser-dojo-header": "PARCOURS D'ENTRAÎNEMENT",
        "teaser-dojo-title": "EXPLORER LE DOJO",
        "teaser-dojo-desc": "Consultez nos parcours détaillés, le syllabus des boucles de contrôle GNC et les modules de résilience mécanique.",
        "teaser-dojo-btn": "VOIR LE DOJO &rarr;",
        "teaser-waitlist-header": "INSCRIPTION COHORTE",
        "teaser-waitlist-title": "REJOINDRE LA SÉLECTION D'ÉLITE",
        "teaser-waitlist-desc": "La cohorte d'accompagnement est limitée strictement à 5 étudiants pour l'automne 2026. L'inscription vous place en file d'attente prioritaire.",
        "teaser-intake-lbl-name": "> NOM DU CANDIDAT DE SÉLECTION :",
        "teaser-intake-lbl-email": "> CANAL DE MESSAGERIE SÉCURISÉ :",
        "teaser-intake-lbl-stress": "> CHOISIR VOTRE PROBLÉMATIQUE PRINCIPALE :",
        "teaser-intake-opt-default": "-- CHOISIR UN DÉFI --",
        "teaser-intake-opt-1": "Recherche d'opportunités et de stages prestigieux",
        "teaser-intake-opt-2": "Gestion de la charge de travail et soutien émotionnel",
        "teaser-intake-opt-3": "Renforcement du code GNC et de la théorie de contrôle",
        "teaser-intake-opt-4": "Développement de blindage de portfolio technique",
        "teaser-intake-btn": "> SÉCURISER VOTRE PLACE PRIORITAIRE",
        "teaser-audit-badge": "AUDIT SaaS",
        "teaser-audit-price": "$49 / AUDIT",
        "teaser-audit-title": "AUDIT ET OPTIMISATION DU PORTFOLIO",
        "teaser-audit-desc": "Endurcissez vos projets d'ingénierie. Téléchargez votre portfolio et vos CV pour exécuter une vérification automatisée par rapport aux exigences de recrutement aérospatiales strictes, validant les termes clés de GNC, les entrées de projet de FEA structurelle et la mise en page.",
        "teaser-audit-btn": "LANCER L'AUDIT &rarr;",
        "teaser-news-badge": "TRANSMISSIONS HEBDOMADAIRES",
        "teaser-news-title": "THE IRON TELEMETRY",
        "teaser-news-desc": "Recevez chaque semaine des schémas de simulation GNC, des alertes de stages aérospatiaux et des guides de résilience mentale pour résister au stress sans faiblir.",
        "teaser-news-btn": "S'ABONNER",
        "teaser-feed-header": "> MONITEUR DE TÉLÉMÉTRIE DYNAMIQUE",
        "teaser-footer-sub": "// MENTORAT // MULTILINGUE EN 5 LANGUES",
        "teaser-footer-copy": "&copy; 2026 ZYAD EL AOUAD. TOUS DROITS SÉCURISÉS. PUISSANCE : CLASSE SYSTEME."
    },
    es: {
        // Nav
        "nav-about": "ACERCA DE",
        "hero-who-am-i": "¿QUIÉN SOY?",
        "nav-dojo": "EL DOJO",
        "nav-portfolio": "PORTFOLIO",
        "nav-blog": "BLOG",
        "nav-manifesto": "MANIFIESTO",
        "nav-booking": "ENTRAR AL DOJO",

        // Hero
        "hero-telemetry": "TELEMETRÍA ESTABLECIDA // ESCALA DE PODER: NIVEL DE SISTEMAS",
        "hero-title-1": "EL CIELO O EL INFIERNO:",
        "hero-title-2": "FORJA TUS SISTEMAS.",
        "hero-desc": "La universidad te enseñó a calcular. Yo te enseño a sobrevivir. Acelera tu carrera de modelador CAD básico a arquitecto de sistemas con orientación aeroespacial de alta intensidad. Fusionando procesos de diseño estándar de la ESA con la fuerza bruta del shonen de los 90.",
        "hero-cta": "ENTRAR AL DOJO. INICIAR TU ENTRENAMIENTO DE SISTEMAS.",
        "hero-operator": "OPERADOR: ZYAD_EL_AOUAD",

        // Hero Stats
        "stat-gnc": "CONTROL GNC Y ADCS",
        "stat-workflow": "DERIVA DE FLUJO DE TRABAJO (MATLAB/PY)",
        "stat-structural": "RESILIENCIA ESTRUCTURAL RIGUROSA",

        // About
        "about-title": "EL OPERADOR",
        "about-num": "SECT_00 // BIOGRAFÍA GENERAL",
        "about-stamp": "REGISTRO VALIDADO",
        "about-name": "ZYAD EL AOUAD",
        "about-para-1": "Soy ingeniero de Guiado, Navegación y Control (GNC) y Sistemas de Determinación y Control de Actitud (ADCS), con el objetivo de especializarme en la mitigación activa de basura espacial, bucles de control de vuelo altamente dinámicos y sistemas dinámicos. Mi base técnica y experiencia abarcan la contribución a lanzamientos de cohetes tanto en España como en Japón, la presentación de leyes de estabilización de basura espacial en la Agencia Espacial Europea (ESA/ESTEC), y el liderazgo en un proyecto universitario de UAV estudiantil competitivo en la Universidad Europea de Madrid.",
        "about-para-2": "Habiendo operado tanto en entornos estándar aeroespaciales europeos como en la intensa cultura de ingeniería académica como estudiante de intercambio en la Universidad de Kyushu (y Planet Q Rocketry Club), ayudo a estudiantes y futuros ingenieros a cumplir sus objetivos y salir de su zona de confort para crecer.",
        "about-para-3": "Operando con fluidez en cinco idiomas (inglés, francés, árabe, español y japonés), asesoro a ingenieros en optimización técnica, resiliencia estructural y en la construcción de portafolios blindados.",
        "about-langs": "IDIOMAS: EN, FR, AR, ES, JP",

        // Dojo
        "dojo-title": "EL DOJO",
        "dojo-num": "SECT_01 // SERVICIOS",
        
        "dojo-p1-tag": "SIMULACIÓN Y CONTROL",
        "dojo-p1-title": "GNC AUTOPILOT TUNER",
        "dojo-p1-desc": "Sintonización y validación automatizadas para bucles de control de vuelo altamente dinámicos. Sube tus modelos de planta y arquitecturas de controlador para sintetizar ganancias robustas, ejecutar análisis de estabilidad de Montecarlo y exportar código de piloto automático optimizado en C++/Python.",
        "dojo-p1-rate": "DESARROLLADOR: $49/MES",
        "dojo-p1-btn": "INICIAR AFINACIÓN &rarr;",

        "dojo-p2-tag": "MECÁNICA ORBITAL",
        "dojo-p2-title": "DEBRIS STABILIZATION SOLVER",
        "dojo-p2-desc": "Cálculo de leyes de control de estabilización activa y desorbitación magnética para basura espacial no cooperativa. Sube tensores de inercia y velocidades de rotación para generar comandos óptimos de magnetopares y perfiles de transición de actitud conformes a los estándares de la ESA.",
        "dojo-p2-rate": "PROFESIONAL: $99/MES",
        "dojo-p2-btn": "CALCULAR LEY &rarr;",

        "dojo-p3-tag": "PROPULSIÓN",
        "dojo-p3-title": "HYBRID ROCKET SIMULATOR",
        "dojo-p3-desc": "Simulación en la nube de la tasa de regresión y combustión transitoria para sistemas de propulsión de cohetes híbridos. Modela la regresión geométrica del grano, las oscilaciones de presión de la cámara y la dinámica de gases en toberas usando nuestro clúster CFD sin servidor.",
        "dojo-p3-rate": "ENTERPRISE: $149/MES",
        "dojo-p3-btn": "EJECUTAR SIMULACIÓN &rarr;",

        "dojo-p4-tag": "ANÁLISIS ESTRUCTURAL",
        "dojo-p4-title": "CLOUD FEA VALIDATOR",
        "dojo-p4-desc": "Validación de análisis estructural de alta fidelidad y verificación de márgenes de seguridad bajo cargas de vibración de lanzamiento. Sube ensamblajes mecánicos para verificar concentraciones de tensión, trayectorias de carga y resiliencia estructural mediante scripts automatizados en la nube.",
        "dojo-p4-rate": "PLAN BASE: $29/MES",
        "dojo-p4-btn": "VALIDAR DISEÑO &rarr;",

        // Portfolio
        "portfolio-title": "EL PORTFOLIO",
        "portfolio-num": "SECT_02 // PORTAFOLIO",
        "portfolio-intro": "Aquí está mi registro operativo: pruebas de capacidad GNC y propulsión validadas por agencias aeroespaciales y clubes académicos.",
        
        "proj1-overlay": "PLANET Q // U KYUSHU",
        "proj1-title": "COHETES HÍBRIDOS TADORI-TADORI",
        "proj1-desc": "Reconstrucción de diarios de control de vuelo y simulación de distribución estructural para el club de cohetes Planet Q de la Universidad de Kyushu. Análisis de estabilización atmosférica dinámica, coeficientes de expansión en toberas y telemetría de combustión.",
        "proj1-btn": "EXAMINAR PLANO &rarr;",
        "proj1-stamp": "ALTO SECRETO",
        "proj1-header": "ESPEC DE PROPULSIÓN DE VUELO",
        "proj1-big-title": "COMBUSTIÓN TADORI",
        "proj1-meta": "// MOTOR : PROPULSIÓN HÍBRIDA<br>// NÚCLEO DE COMBUSTIBLE : HTPB + GRANO SÓLIDO<br>// COMBURENTE : N2O LÍQUIDO (ÓXIDO NITROSO)<br>// TELEMETRÍA RECUPERADA : 99.4%",
        "proj1-lbl1": "Presión de Cámara",
        "proj1-val1": "4.5 MPa",
        "proj1-lbl2": "Empuje Máximo",
        "proj1-val2": "2.8 kN",

        "proj2-overlay": "SIMULADOR ADCS",
        "proj2-title": "SIMULADOR DE ACTITUD CUBESAT SART",
        "proj2-desc": "Simulación de hardware (HIL) y software de un sistema ADCS (determinación y control de actitud) de un CubeSat de 3U. Modelado de campos magnéticos orbitales, pares de gradiente de gravedad y estabilización mediante ruedas de reacción.",
        "proj2-btn": "EXAMINAR PLANO &rarr;",
        "proj2-stamp": "VERIFICADO",
        "proj2-header": "VECTOR DE SIMULACIÓN ADCS",
        "proj2-big-title": "LAB CUBESAT SART",
        "proj2-meta": "// PLATAFORMA : NANO-SATÉLITE 3U<br>// TASA DE ERROR DE APUNTADO : < 0.05 GRADOS<br>// ACTUADORES : 3 MAGNETOPARS + RW<br>// SUITE DE INTEGRACIÓN : RUNGE-KUTTA ODE45",
        "proj2-lbl1": "Bucle de control",
        "proj2-val1": "50 Hz Tiempo Real",
        "proj2-lbl2": "Fusión Sensores",
        "proj2-val2": "Algoritmo EKF",

        "proj3-overlay": "ESA CLEAN SPACE DAYS 2026",
        "proj3-title": "ESTABILIZACIÓN DE BASURA SUBACCIONADA",
        "proj3-desc": "Presentación seleccionada en el ESTEC (Centro Europeo de Investigación y Tecnología Espacial) para los ESA Clean Space Days. Desarrollo de una ley de control adaptativa para estabilizar un satélite tras la captura cuando la mitad de los actuadores están degradados.",
        "proj3-btn": "EXAMINAR RESUMEN &rarr;",

        // Blog Workspace
        "blog-title": "DIARIOS DE MISIÓN",
        "blog-num": "SECT_03 // INFORMES TÁCTICOS",
        "blog-intro": "Diarios operativos que detallan el rendimiento del código, pruebas de esfuerzo en cohetes y algoritmos de carrera profesional. Compilados para el estudio activo.",
        "blog-tab-read": "> LEER DIARIOS",
        "blog-tab-forge": "> FORJAR NUEVO DIARIO",
        
        "editor-fields-title": "CAMPOS_DE_ENTRADA_PLANO",
        "editor-lbl-title": "> TÍTULO DEL DIARIO:",
        "editor-lbl-tag": "> CLASE DEL DIARIO (TAG):",
        "editor-lbl-date": "> COMPILACIÓN CRONO (FECHA):",
        "editor-lbl-cover": "> SELECCIONAR IMAGEN DE TARJETA:",
        "editor-lbl-excerpt": "> RESUMEN DEL DIARIO:",
        "editor-lbl-content": "> CONTENIDO DEL DIARIO (HTML/Markdown soportado):",
        "editor-btn-submit": "> TRANSMITIR DIARIO A LA BDD",
        "editor-btn-cancel": "> CANCELAR MODO EDICIÓN",

        "editor-preview-title": "VISTA_PREVIA_DINA (TIEMPO REAL)",
        "editor-db-title": "MONITOR_BASE_DE_DATOS.LOG",
        "editor-btn-wipe": "RECOMPILAR BDD ORIGINAL",
        "editor-snippet-title": "GENERADOR_SNIPPET_HTML.EXE",
        "editor-btn-copy": "COPIAR CÓDIGO HTML",

        // Manifesto
        "manifesto-stamp": "ESTUDIANTE SIEMPRE",
        "manifesto-title": "APRENDER TODA LA VIDA<br>COMO SI NADA<br>ESTUVIESE ESCRITO.",
        "manifesto-para-1": "En las áreas de alta tensión de la ingeniería aeroespacial, el momento en el que crees que eres el maestro absoluto es el momento en el que te estrellas. A las leyes de la física no les importa tu ego; solo responden a las leyes naturales.",
        "manifesto-para-2": "Para sobrevivir al 'infierno' de los laboratorios de Kyushu o llamar la atención de los comités de la ESA en el ESTEC, debes mantener el espíritu del estudiante. Cada fallo en la simulación, cada error de deriva y cada esfuerzo estructural es una lección.",
        "manifesto-para-3": "No ofrezco plantillas genéricas ni tutorías pasivas. Acompaño a ingenieros que quieren templar su acero bajo el fuego, reconstruir sus metodologías y desbloquear su Bankai técnico.",
        "manifesto-quote": "\"EL BLINDAJE DEFINITIVO NO ES TU TÍTULO. ES LA DISCIPLINA INQUEBRANTABLE DE SEGUIR SIENDO UN ESTUDIANTE EN MEDIO DE LA AMENAZA.\"",
        "manifesto-author": "&mdash; ZYAD EL AOUAD, THE IRON ENGINEER",

        // Booking Intake
        "intake-header": "SAAS_LICENSE_INITIALIZATION.EXE",
        "intake-lbl-pillar": "> SELECCIONAR LICENCIA DE PRODUCTO SAAS:",
        "intake-pillar-default": "-- SELECCIONAR LICENCIA DE PRODUCTO SAAS --",
        "intake-pillar-1": "GNC AUTOPILOT TUNER ($49/MES)",
        "intake-pillar-2": "DEBRIS STABILIZATION SOLVER ($99/MES)",
        "intake-pillar-3": "HYBRID ROCKET SIMULATOR ($149/MES)",
        "intake-pillar-4": "CLOUD FEA VALIDATOR ($29/MES)",
        "intake-lbl-objs": "> COMPILAR CAPACIDADES Y OBJETIVOS:",
        "intake-btn-submit": "> INICIALIZAR COMPILACIÓN DE SISTEMAS",

        // Footer
        "footer-subtext": "// PRESENTANDO DISEÑOS GNC EN LA ESA // SIMULACIONES EN JAPÓN // FLUIDO EN 5 IDIOMAS",
        "footer-top": "ARRIBA",
        "footer-copy": "&copy; 2026 ZYAD EL AOUAD. TODAS LAS OPERACIONES REGISTRADAS. PODER: CLASE SISTEMA.",

        // Teaser Keys
        "teaser-logo": "Zyad El Aouad",
        "teaser-nav-portfolio": "VER PORTAFOLIO",
        "teaser-nav-cta": "UNIRSE",
        "teaser-telemetry": "INICIALIZANDO VECTOR DE LANZAMIENTO // NIVEL DE PODER: ILIMITADO",
        "teaser-title-1": "Zyad El Aouad:",
        "teaser-title-2": "BeWinnerEngineer",
        "teaser-desc": "Este sitio web está dedicado a los diversos aspectos que dieron forma y aún dan forma a mi vida y mi camino para convertirme en un ingeniero aeroespacial confiable y profesional. Los estudios universitarios requieren un alto nivel de orientación y disciplina para lograr altos objetivos de ingeniería. Por lo tanto, tengo la intención de compartir lo que he aprendido y sigo aprendiendo para sobrevivir y prosperar en el mundo actual.",
        "teaser-clock-header": "> TIEMPO_PARA_EL_LANZAMIENTO.EXE",
        "teaser-days": "DÍAS",
        "teaser-hours": "HORAS",
        "teaser-mins": "MINUTOS",
        "teaser-secs": "SEGUNDOS",
        "teaser-pillars-title": "<span>CAPACIDADES</span> DEL SISTEMA",
        "teaser-pillars-num": "MATRIZ DE VALOR TÁCTICO",
        "teaser-tag-skills": "EXCELENCIA EN INGENIERÍA",
        "teaser-p1-title": "CONVIÉRTETE EN MEJOR INGENIERO",
        "teaser-p1-desc": "Los planes de estudio estándar enseñan ecuaciones. Nosotros enseñamos arquitectura de sistemas práctica. Domina el modelado GNC, la validación estructural en ANSYS y la automatización robusta del flujo de trabajo para que tu producción de ingeniería cumpla con los estándares profesionales del espacio.",
        "teaser-tag-career": "REFORZAMIENTO PROFESIONAL",
        "teaser-p2-title": "ENCUENTRA OPORTUNIDADES",
        "teaser-p2-desc": "Transformamos currículums débiles en portafolios blindados con exoesqueletos profesionales. Aprende a redactar propuestas técnicas y solicitudes que exijan atención inmediata de gigantes como Boeing, Airbus y centros de investigación de la ESA.",
        "teaser-tag-resilience": "ESCUDO MENTAL",
        "teaser-p3-title": "SOPORTE EMOCIONAL",
        "teaser-p3-desc": "La rutina académica es brutal. Brindamos asesoramiento directo sobre cómo manejar pesadas cargas de trabajo de ingeniería, superar fallos en los laboratorios de simulación y construir la armadura mental necesaria para mantener la calma bajo intensas revisiones del jurado.",
        "teaser-dojo-header": "RUTAS DE ENTRENAMIENTO",
        "teaser-dojo-title": "EXPLORAR EL DOJO",
        "teaser-dojo-desc": "Inspecciona nuestras rutas de entrenamiento detalladas, el plan de control GNC y los módulos de ingeniería estructural.",
        "teaser-dojo-btn": "VER EL DOJO &rarr;",
        "teaser-waitlist-header": "INSCRIPCIÓN DE COHORTE",
        "teaser-waitlist-title": "ÚNETE A LA LISTA DE ESPERA ÉLITE",
        "teaser-waitlist-desc": "Los cupos para el programa de mentoría están estrictamente limitados a 5 estudiantes para el otoño de 2026. Al registrarte entras en la cola de selección prioritaria.",
        "teaser-intake-lbl-name": "> NOMBRE DEL OPERADOR:",
        "teaser-intake-lbl-email": "> CANALES DE CORREO SEGUROS:",
        "teaser-intake-lbl-stress": "> SELECCIONAR CUELLO DE BOTELLA:",
        "teaser-intake-opt-default": "-- SELECCIONAR DESAFÍO PRINCIPAL --",
        "teaser-intake-opt-1": "Encontrar Prácticas y Oportunidades Top",
        "teaser-intake-opt-2": "Gestionar el Estrés Laboral y Apoyo Emocional",
        "teaser-intake-opt-3": "Endurecimiento de Código de GNC y Teoría de Control",
        "teaser-intake-opt-4": "Construcción de Armadura de Portafolio Nivel Sistemas",
        "teaser-intake-btn": "> ASEGURAR TICKET DE APLICACIÓN PRIORITARIA",
        "teaser-audit-badge": "AUDITORÍA SaaS",
        "teaser-audit-price": "$49 / AUDITORÍA",
        "teaser-audit-title": "AUDITORÍA Y OPTIMIZACIÓN DE PORTAFOLIO",
        "teaser-audit-desc": "Endurece tus proyectos de ingeniería. Sube tu portafolio y currículums para ejecutar una verificación automatizada contra los estrictos requisitos de contratación aeroespacial, validando términos clave de GNC, entradas de proyectos FEA estructurales y la alineación del diseño.",
        "teaser-audit-btn": "EJECUTAR AUDITORÍA &rarr;",
        "teaser-news-badge": "TRANSMISIONES SEMANALES",
        "teaser-news-title": "THE IRON TELEMETRY",
        "teaser-news-desc": "Recibe planos de simulación de GNC, alertas de telemetría de próximas prácticas profesionales y manuales de resiliencia emocional para mantener tu disciplina de ingeniería inquebrantable bajo el estrés.",
        "teaser-news-btn": "SUSCRIBIRSE",
        "teaser-feed-header": "> MONITOR DE TELEMETRÍA DINÁMICA DEL SISTEMA",
        "teaser-footer-sub": "// ETAPAS DE MENTORÍA // 5 IDIOMAS DISPONIBLES",
        "teaser-footer-copy": "&copy; 2026 ZYAD EL AOUAD. TODOS LOS CÓDIGOS PROTEGIDOS. NIVEL DE PODER: SISTEMA."
    },
    ar: {
        // Moroccan Arabic (Darija in Arabic Script)
        // Nav
        "nav-about": "شكون أنا",
        "hero-who-am-i": "شكون أنا",
        "nav-dojo": "الدوجو",
        "nav-portfolio": "ملف الأعمال",
        "nav-blog": "البلوغ",
        "nav-manifesto": "البيان ديالي",
        "nav-booking": "دخل للدوجو",

        // Hero
        "hero-telemetry": "تيليميتري واجدة // الجهد: نيفو سيستم",
        "hero-title-1": "الجنة ولا جهنم:",
        "hero-title-2": "طوّر الأنظمة ديالك.",
        "hero-desc": "الجامعة قراتك كيفاش تحسب، وأنا غنعلمك كيفاش تسلك راسك وتنجح. زرب الكاريير ديالك من رسام CAD عادي لـ مهندس أنظمة بفضل توجيه قاصح فالطيران والفضاء. كنخلطو طرق الخدمة ديال وكالة الفضاء الأوروبية (ESA) مع الحماس والروح ديال أنمي التسعينات.",
        "hero-cta": "دخل للدوجو. بدا تدريب الأنظمة ديالك دابا.",
        "hero-operator": "المشغل: ZYAD_EL_AOUAD",

        // Hero Stats
        "stat-gnc": "التحكّم GNC & ADCS",
        "stat-workflow": "تسيير الخدمة (MATLAB/PY)",
        "stat-structural": "الصلابة الهيكلية الدقيقة",

        // About
        "about-title": "المُشغّل",
        "about-num": "SECT_00 // السيرة العامة",
        "about-stamp": "الملف مقبول",
        "about-name": "زياد العواد",
        "about-para-1": "أنا مهندس توجيه وملاحة وتحكّم (GNC) وأنظمة تحكّم وتحديد الوضعية (ADCS)، باغي نتخصص فتنقية الحطام الفضائي وأنظمة التحكّم فـ ديناميكيات الطيران العالية والأنظمة الديناميكية. الخبرة ديالي واصلة للمساهمة فإطلاق الصواريخ فإسبانيا واليابان، وتقديم قوانين استقرار الحطام الفضائي فوكالة الفضاء الأوروبية (ESA/ESTEC)، وتواجد ديالي فقلب مشروع درون طلابي تنافسي فجامعة مدريد الأوروبية.",
        "about-para-2": "من بعد ما خدمت فبيئات معيارية ديال الطيران والفضاء ف أوروبا وفالثقافة الهندسية الأكاديمية القاصحة كطالب تبادل فجامعة كيوشو (وفي نادي الصواريخ Planet Q)، كنساعد الطلبة ومهندسي المستقبل باش يوصلو لأهدافهم ويخرجو من منطقة الراحة ديالهم باش يطورو راسهم.",
        "about-para-3": "كنهضر بخمسة د اللغات بطلاقة (الإنجليزية، الفرنسية، العربية، الإسبانية، واليابانية)، وكنعاون المهندسين على تطوير الخدمة ديالهم، الصلابة الهيكلية، وبناء بورتفوليو حديدي كيقنع الشركات.",
        "about-langs": "اللغات: EN, FR, AR, ES, JP",

        // Dojo
        "dojo-title": "الدوجو",
        "dojo-num": "SECT_01 // الخدمات",
        
        "dojo-p1-tag": "المحاكاة والتحكّم",
        "dojo-p1-title": "GNC AUTOPILOT TUNER",
        "dojo-p1-desc": "الضبط والتحقق الأوتوماتيكي ديال أنظمة التحكم فـ ديناميكيات الطيران العالية. صصيفط الموديلات ديالك وديزاين الكنترولر باش تصايب روبوست غينز (gains)، دير تحليلات الاستقرار ديال مونتي كارلو، وتخرج كود طيران آلي مقاد بـ C++/Python.",
        "dojo-p1-rate": "المطور: 49$/الشهر",
        "dojo-p1-btn": "خدم المنظم &rarr;",

        "dojo-p2-tag": "الميكانيك المداري",
        "dojo-p2-title": "DEBRIS STABILIZATION SOLVER",
        "dojo-p2-desc": "حساب قوانين التحكم فالتنقية المغناطيسية واستقرار الحطام الفضائي غير المتعاون. صيفط الماتريس ديال القصور الذاتي وسرعة الدوران باش تخرج أوامر الماغنيطوركرز (magnetorquers) وتغيير الوضعية بمواصفات وكالة الفضاء الأوروبية (ESA).",
        "dojo-p2-rate": "المحترف: 99$/الشهر",
        "dojo-p2-btn": "حسب قوانين التحكم &rarr;",

        "dojo-p3-tag": "الدفع الفضائي",
        "dojo-p3-title": "HYBRID ROCKET SIMULATOR",
        "dojo-p3-desc": "محاكاة سحابية ديال سرعة الاحتراق وديناميكيات الغازات فأنظمة الدفع ديال الصواريخ الهجينة. موديلي دغيا تآكل الحشوة الفضائية، تغيرات الضغط فالغرفة، وحركة الغاز فالفوهة باستعمال الكلوستر CFD السحابي ديالنا.",
        "dojo-p3-rate": "المؤسسات: 149$/الشهر",
        "dojo-p3-btn": "دير المحاكاة &rarr;",

        "dojo-p4-tag": "التحليل الهيكلي",
        "dojo-p4-title": "CLOUD FEA VALIDATOR",
        "dojo-p4-desc": "تحقق عالي الدقة من الهندسة الهيكلية وحساب هوامش الأمان تحت ضغط اهتزازات الإطلاق. صيفط أجزاء الميكانيك باش تفحص نقط تركز الضغط وتوزيع الثقل باستعمال سكربتات ANSYS أوتوماتيكية فالسحاب.",
        "dojo-p4-rate": "الأساسي: 29$/الشهر",
        "dojo-p4-btn": "تحقق من الديزاين &rarr;",

        // Portfolio
        "portfolio-title": "ملف الأعمال",
        "portfolio-num": "SECT_02 // ملف الأعمال",
        "portfolio-intro": "ها هو سجل الخدمة ديالي — دليل على القدرة فـ GNC والدفع الفضائي مقبول من وكالات الفضاء والنوادي الأكاديمية.",
        
        "proj1-overlay": "PLANET Q // جامعة كيوشو",
        "proj1-title": "صواريخ هجينة TADORI-TADORI",
        "proj1-desc": "إعادة بناء سجلات التحكم فـ الطيران ومحاكاة الهيكل الهندسي لنادي الصواريخ Planet Q بجامعة كيوشو. تحليل الاستقرار الديناميكي فـ الجو، ونسب توسع الفوهات، وتيليميتري الاحتراق الهجين.",
        "proj1-btn": "شوف الديزاين &rarr;",
        "proj1-stamp": "سري للغاية",
        "proj1-header": "مواصفات الدفع الجوي",
        "proj1-big-title": "احتراق تادوري",
        "proj1-meta": "// نوع المحرك: دفع هجين<br>// مادة الوقود: HTPB + وقود صلب<br>// المؤكسد: N2O سائل (أكسيد النيتروز)<br>// نسبة استرجاع التيليميتري: 99.4%",
        "proj1-lbl1": "ضغط الغرفة",
        "proj1-val1": "4.5 ميغاباسكال",
        "proj1-lbl2": "أقصى دفع",
        "proj1-val2": "2.8 كيلو نيوتن",

        "proj2-overlay": "محاكي ADCS",
        "proj2-title": "محاكي وضعية الأقمار الاصطناعية CUBESAT SART",
        "proj2-desc": "محاكاة هجينة (HIL) وبرمجية لنظام ADCS (تحديد وتحكم وضعية الأقمار الاصطناعية) لـ CubeSat 3U. نمذجة الحقول المغناطيسية المدارية، وعزوم الجاذبية، واستقرار التدوير باستعمال عجلات رد الفعل.",
        "proj2-btn": "شوف الديزاين &rarr;",
        "proj2-stamp": "مأكد ومقبول",
        "proj2-header": "متجه محاكاة ADCS",
        "proj2-big-title": "مختبر SART CUBESAT",
        "proj2-meta": "// المنصة: قمر اصطناعي CubeSat 3U<br>// نسبة خطأ الوضعية: أقل من 0.05 درجة<br>// المشغلات: 3 ملفات مغناطيسية + RW<br>// برنامج التكامل: رونج-كوتا ODE45",
        "proj2-lbl1": "حلقة التحكم",
        "proj2-val1": "50 هرتز حقيقي",
        "proj2-lbl2": "دمج الحساسات",
        "proj2-val2": "خوارزمية EKF",

        "proj3-overlay": "أيام الفضاء النظيف لـ ESA 2026",
        "proj3-title": "استقرار الحطام الفضائي عند نقص المشغلات",
        "proj3-desc": "تم اختيار العرض التقديمي ديالي فـ ESTEC (المركز الأوروبي لأبحاث وتكنولوجيا الفضاء) فـ أيام الفضاء النظيف لـ ESA. تطوير خوارزمية تحكم تكيفية لتثبيت المركبة الفضائية بعد الالتقاط ملي كيكونو نص المشغلات خاسرين ولا عيانين.",
        "proj3-btn": "شوف الملخص &rarr;",

        // Blog Workspace
        "blog-title": "سجلات المهام",
        "blog-num": "SECT_03 // تقارير تكتيكية",
        "blog-intro": "سجلات عملية كتفصل أداء الكود، وتجارب الضغط لنادي الصواريخ، وخوارزميات الكاريير المهني. مصوبة ومجموعة للدراسة التكتيكية.",
        "blog-tab-read": "> قرا السجلات",
        "blog-tab-forge": "> قاد سجل جديد",
        
        "editor-fields-title": "حقول_إدخال_الديزاين",
        "editor-lbl-title": "> عنوان السجل:",
        "editor-lbl-tag": "> نوع السجل (التاغ):",
        "editor-lbl-date": "> تاريخ التدوين:",
        "editor-lbl-cover": "> اختر صورة الغلاف:",
        "editor-lbl-excerpt": "> ملخص السجل:",
        "editor-lbl-content": "> محتوى السجل الأساسي (HTML/Markdown مقبول):",
        "editor-btn-submit": "> رسل السجل لقاعدة البيانات",
        "editor-btn-cancel": "> إلغاء التعديل",

        "editor-preview-title": "معاينة_الكارت_حينية (وقت حقيقي)",
        "editor-db-title": "مراقب_قاعدة_البيانات.LOG",
        "editor-btn-wipe": "مسح قاعدة البيانات كاملة",
        "editor-snippet-title": "مولد_أكواد_HTML.EXE",
        "editor-btn-copy": "نسخ كود HTML",

        // Manifesto
        "manifesto-stamp": "طالب ديما",
        "manifesto-title": "التعلم مدى الحياة<br>بحال يلا ما عمرك<br>عرفتي شي حاجة.",
        "manifesto-para-1": "فالميادين الصعيبة ديال هندسة الطيران والفضاء، اللحظة اللي كتظن فيها أنك وليتي معلم هي اللحظة اللي كطيح وتخسر فيها. ديزاين الأنظمة ماوقفهومش Ego ديالك، كيهمهم غير القوانين الفيزيائية نيشان.",
        "manifesto-para-2": "باش تسلك راسك فـ 'جحيم' مختبرات كيوشو فاليابان ولا تثير انتباه المدراء الكبار ديال وكالة الفضاء الأوروبية فـ ESTEC، خاصك تخلي ديما الروح ديال طالب باغي يتعلم. كاع المشاكل د المحاكاة والصلابة هما دروس قاصحة.",
        "manifesto-para-3": "أنا ماكنعطيش موديلات واجدة وساهلة ولا كوتشينغ ناعس. أنا كنورّي المهندسين اللي باغيين يقصحو كتافهم تحت الضغط ويفجروا البانكاي الهندسي ديالهم.",
        "manifesto-quote": "\"الدرع الحقيقي ماشي هو الشهادة ديالك. هو الديسيبلين والصرامة باش تبقى طالب كيتعلم واخا تكون وسط الخطر.\"",
        "manifesto-author": "&mdash; زياد العواد، مهندس من حديد",

        // Booking Intake
        "intake-header": "SAAS_LICENSE_INITIALIZATION.EXE",
        "intake-lbl-pillar": "> اختر ترخيص منتج SAAS:",
        "intake-pillar-default": "-- اختر ترخيص منتج SAAS --",
        "intake-pillar-1": "GNC AUTOPILOT TUNER ($49/الشهر)",
        "intake-pillar-2": "DEBRIS STABILIZATION SOLVER ($99/الشهر)",
        "intake-pillar-3": "HYBRID ROCKET SIMULATOR ($149/الشهر)",
        "intake-pillar-4": "CLOUD FEA VALIDATOR ($29/الشهر)",
        "intake-lbl-objs": "> جمّع القدرات والأهداف الحالية ديابك:",
        "intake-btn-submit": "> بدا عملية تركيب الأنظمة",

        // Footer
        "footer-subtext": "// تقديم ديزاين GNC فـ ESA // محاكاة الصواريخ فاليابان // كنهضر بـ 5 د اللغات",
        "footer-top": "للفوق",
        "footer-copy": "&copy; 2026 زياد العواد. كاع العمليات مسجلة. مستوى الطاقة: أنظمة مهنية.",

        // Teaser Keys
        "teaser-logo": "Zyad El Aouad",
        "teaser-nav-portfolio": "شاهد البورتفوليو",
        "teaser-nav-cta": "انضم",
        "teaser-telemetry": "البدء فـ توجيه الإطلاق // مستوى الطاقة: غير محدود",
        "teaser-title-1": "Zyad El Aouad:",
        "teaser-title-2": "BeWinnerEngineer",
        "teaser-desc": "هاد الموقع مخصص لمختلف الجوانب اللي بْنات وكتْبني حياتي ومساري باش نولي مهندس فضاء وطيران موثوق ومحترف. الدراسات الجامعية كتحتاج لدرجة عالية من التوجيه والانضباط باش الواحد يوصل لأهداف هندسية عالية. داكشي علاش، باغي نشارك داكشي اللي تعلمت ومازال كنتعلم باش نسلك راسي وننجح فهاد العالم دابا.",
        "teaser-clock-header": "> الوقت_المتبقي_للإطلاق.EXE",
        "teaser-days": "أيام",
        "teaser-hours": "ساعات",
        "teaser-mins": "دقائق",
        "teaser-secs": "ثواني",
        "teaser-pillars-title": "قدرات <span>الأنظمة</span>",
        "teaser-pillars-num": "مصفوفة القيمة التكتيكية",
        "teaser-tag-skills": "التميز الهندسي",
        "teaser-p1-title": "تولي مهندس حسن",
        "teaser-p1-desc": "المناهج العادية كتقريك غير المعادلات. حنا كنعلموك التطبيق العملي ديال ديزاين الأنظمة. تعلم التحكّم فـ GNC، التحقق الهيكلي بـ ANSYS، وأوتوماتيزي الخدمة باش تكون خدمتك بمواصفات وكالات الفضاء العالمية.",
        "teaser-tag-career": "تقوية الكاريير",
        "teaser-p2-title": "تلقى فرص واعرين",
        "teaser-p2-desc": "كنرجعو الـ CVs الضعاف للبورتفوليو المقوى بحال الهيكل الخارجي الحديدي. تعلم كيفاش تصاوب مقترحات تقنية وطلبات دفع مقبولة ومثيرة للاهتمام عند شركات بحال Boeing وAirbus ووكالة ESA.",
        "teaser-tag-resilience": "درع العقل والروح",
        "teaser-p3-title": "الدعم النفسي والعاطفي",
        "teaser-p3-desc": "التمارة والضغط د القراية قاصحين بـزاف. كنعطيوك مرافقة وتوجيه مباشر باش تسير الضغط ديال الخدمة، وتغلب على الفشل فالمحاكاة والمختبرات، وتصاوب درع نفسي باش تبقى هادئ تحت ضغط لجان التحكيم.",
        "teaser-dojo-header": "مسارات التدريب",
        "teaser-dojo-title": "استكشف الدوجو",
        "teaser-dojo-desc": "اطلع على تفاصيل مسارات التدريب، مقرر حلقات التحكم GNC، وموديلات الصلابة الهيكلية.",
        "teaser-dojo-btn": "شوف الدوجو &rarr;",
        "teaser-waitlist-header": "تسجيل الفوج",
        "teaser-waitlist-title": "انضم للائحة الانتظار للنخبة",
        "teaser-waitlist-desc": "مقاعد المرافقة محدودة بزاف فـ 5 ديال الطلبة فقط لخريف 2026. ملي كتسجل كتدخل فـ صف الاختيار ذو الأولوية.",
        "teaser-intake-lbl-name": "> اسم المشغّل الطالب:",
        "teaser-intake-lbl-email": "> إيميل التواصل الآمن:",
        "teaser-intake-lbl-stress": "> اختر المشكل الأساسي ديالك:",
        "teaser-intake-opt-default": "-- اختر المشكل الرئيسي --",
        "teaser-intake-opt-1": "كيفاش نلقى تدريب وفرص واعرين",
        "teaser-intake-opt-2": "كيفاش نسير ضغط الخدمة والدعم النفسي",
        "teaser-intake-opt-3": "تقوية كود التحكّم GNC والرياضيات ديالو",
        "teaser-intake-opt-4": "بناء درع البورتفوليو نيفو سيستم",
        "teaser-intake-btn": "> احصل على تذكرة التقديم ذات الأولوية",
        "teaser-audit-badge": "تدقيق SaaS",
        "teaser-audit-price": "49$ / للتدقيق",
        "teaser-audit-title": "تدقيق وتحسين ملف الأعمال",
        "teaser-audit-desc": "قصّح مشاريع الهندسة ديالك. صيفط ملف الأعمال والـ CV باش تدير فحص أوتوماتيكي ضد شروط القبول الصعبة فمجال الطيران والفضاء، والتأكد من مصطلحات GNC، ومشاريع FEA الهيكلية، ومقاييس الديزاين.",
        "teaser-audit-btn": "دير التدقيق دابا &rarr;",
        "teaser-news-badge": "نشرات أسبوعية",
        "teaser-news-title": "THE IRON TELEMETRY",
        "teaser-news-desc": "توصل كل سيمانة بتصاميم ومحاكاة GNC، تنبيهات لفرص التدريب فالفضاء، ودليل الصلابة النفسية باش تحافظ على الصرامة الهندسية ديالك تحت الضغط.",
        "teaser-news-btn": "اشترك دابا",
        "teaser-feed-header": "> شريط التيليميتري الديناميكي للأنظمة",
        "teaser-footer-sub": "// مراحل المرافقة // 5 لغات مدعومة",
        "teaser-footer-copy": "&copy; 2026 ZYAD EL AOUAD. كاع الأكواد محمية. مستوى الطاقة: أنظمة مهنية."
    }
};

// Seed dynamic blogs in different languages
const localizedDefaultBlogs = {
    en: [
        {
            id: "blog-post-1",
            title: "SURVIVING THE HELL OF PLANET Q (KYUSHU ROCKETRY)",
            tag: "PROPULSION",
            date: "2026-05-12",
            image: "assets/manga_ichigo.jpg",
            excerpt: "A tactical breakdown of Planet Q's hybrid combustion loops, grain regression coefficients, and working under academic stress.",
            content: `
                <p>Entering the rocketry club (Planet Q) at Kyushu University was a trial by fire. In Japan, academic clubs operate with professional-level intensity. We weren't just building toys; we simulated and launched multi-kilonewton hybrid rockets.</p>
                <p><strong>The Core Challenge:</strong> Star-port regression topology stability. Under thermal combustion pressure, the solid HTPB grain burns unevenly, shifting the center of mass. This introduces high-frequency oscillations that test the structural limits of the fuselage.</p>
                <p><strong>Survival Strategies:</strong> You must treat code design like career armor. We automated thrust profile integrations in Python, validating our chamber pressure readings (4.5 MPa limits) against structural models in ANSYS. To survive, remain a student at the height of challenge.</p>
            `,
            comments: [
                { name: "CAD_WARRIOR_45", date: "2026-05-15", msg: "This grain regression simulation template saved my thesis! Margins of safety are perfectly calculated." },
                { name: "AOCS_DEV", date: "2026-05-18", msg: "Planet Q launches are legendary. Solid Mechanics ANSYS thermal checks are must-reads." }
            ]
        },
        {
            id: "blog-post-2",
            title: "LYAPUNOV ATTITUDE CONTROLLERS: DRIFTING IN ORBIT",
            tag: "ADCS & GNC",
            date: "2026-05-24",
            image: "assets/manga_kakugo_1.jpg",
            excerpt: "How to tune non-linear attitude tracking loops to execute agile synchronization maneuvers with tumbling targets.",
            content: `
                <p>Just as Takumi in <em>Initial D</em> drifts along the absolute boundary of friction, a satellite servicer must drift along the control boundary of tumbling debris to safely capture it. Traditional linear controllers (PID) fail because the inertia tensor of the servicer-debris stack shifts violently post-capture.</p>
                <p><strong>The GNC Control Law:</strong> We formulate a Lyapunov candidate function representing attitude errors in quaternion state space. We define the derivative to guarantee global asymptotic stability even under thruster underactuation.</p>
                <p><strong>Simulink Optimization:</strong> Implement an adaptive boundary layer in your sliding mode control blocks. This dampens actuator chattering, preventing reaction wheels from saturating. This is the 'Initial D' approach to GNC—smooth, optimal flow.</p>
            `,
            comments: [
                { name: "SATELLITE_ENTHUSIAST", date: "2026-05-26", msg: "Lyapunov stability criterion for spacecraft stack relative motion was a bit abstract for me, but the Initial D drift comparison makes absolute sense!" }
            ]
        },
        {
            id: "blog-post-3",
            title: "COMPOSE RESUME ARMOR THAT RECEIVES ESA COMPLIANCE",
            tag: "CAREER ARMOR",
            date: "2026-06-01",
            image: "assets/manga_ken.jfif",
            excerpt: "Ditch generic templates. Learn how to structure aerospace resumes that display S-Class engineering power levels.",
            content: `
                <p>When presenting GNC architectures to the European Space Agency (ESA) or interviewing for competitive spots like the Boeing externship, generic, text-heavy resumes get filtered out instantly. Insufficient technical framing represents weak career armor.</p>
                <p><strong>The Exoskeleton Framework:</strong> Your resume must read like a systems architecture manual. Do not say 'Assisted with CAD models.' Instead, write: 'Designed 3-axis Cubesat ADCS simulator in MATLAB/Simulink; calibrated EKF sensor fusion loop to achieve pointing accuracy &lt; 0.05 deg.'</p>
                <p><strong>Define your Power Level:</strong> Show your margins of safety, compile times, and code validation ratios. Highlight your ability to manage UAV teams under crisis. Give recruiters quantitative proofs of your structural resilience.</p>
            `,
            comments: []
        }
    ],
    jp: [
        {
            id: "blog-post-1",
            title: "プラネットQの地獄を生き残る（九州大学ロケット部）",
            tag: "宇宙推進システム",
            date: "2026-05-12",
            image: "assets/manga_ichigo.jpg",
            excerpt: "Planet Qのハイブリッド燃焼ループ、燃料グレイン後退係数、および過酷な研究環境下での生き残り戦略の解説。",
            content: `
                <p>九州大学のロケット部（Planet Q）に入部することは、まさに火の洗礼でした。日本の学術的なサークル活動は、プロフェッショナルなレベルの厳しさで行われます。おもちゃを作っているのではなく、数キロニュートンの推力を有するハイブリッドロケットのシミュレーションと打ち上げを行っていました。</p>
                <p><strong>核心課題：</strong>燃料グレインの燃焼時安定性。燃焼室の熱圧により、固体のHTPBグレインが不均一に燃焼し、重心がずれます。これにより高周波振動が発生し、機体の構造限界を脅かします。</p>
                <p><strong>生存戦略：</strong>コード設計を「キャリアの鎧」のように扱わなければなりません。Pythonを用いて推力プロファイルを自動計算し、ANSYSで構造モデルに対する燃焼室圧力（4.5 MPa制限）の負荷耐性を検証しました。極限状態で学び続けることこそが、生存のための鍵となります。</p>
            `,
            comments: [
                { name: "CAD_WARRIOR_45", date: "2026-05-15", msg: "燃料後退シミュレーションのテンプレートが非常に役立ちました！安全マージンが正確に計算されています。" },
                { name: "AOCS_DEV", date: "2026-05-18", msg: "Planet Qのロケット打ち上げは伝説的です。固体力学のANSYS検証は必読です。" }
            ]
        },
        {
            id: "blog-post-2",
            title: "リアプノフ姿勢制御：軌道上のドリフト制御法",
            tag: "ADCS＆GNC",
            date: "2026-05-24",
            image: "assets/manga_kakugo_1.jpg",
            excerpt: "回転しながら浮遊するデブリを安全に回収するための、非線形姿勢追従ループの調整方法。",
            content: `
                <p>『頭文字D』の藤原拓海が摩擦の極限で車体を滑らせる（ドリフト）ように、スペースデブリの回収を行うサービス衛星も、不規則に回転するデブリの挙動に寄り添いながら制御境界線に沿ってアプローチする必要があります。結合後の慣性テンソルが急激に変化するため、従来の線形制御（PID）では対応できません。</p>
                <p><strong>GNC制御則：</strong>クォータニオンの状態空間における姿勢誤差を表すリアプノフ候補関数を構築します。推進器の制約下でも大域的漸近安定性を保証する制御則の導関数を定義します。</p>
                <p><strong>Simulinkの最適化：</strong>スライディングモード制御ブロックに適応的な境界レイヤーを実装します。これによりアクチュエータのチャタリングを抑制し、リアクションホイールの飽和を防ぎます。これが滑らかで最適な制御を実現する「頭文字D」式アプローチです。</p>
            `,
            comments: [
                { name: "SATELLITE_ENTHUSIAST", date: "2026-05-26", msg: "衛星結合後の慣性モーメントのリアプノフ安定性判定は難しかったですが、ドリフトに例えられると非常にわかりやすいです！" }
            ]
        },
        {
            id: "blog-post-3",
            title: "欧州宇宙機関（ESA）標準に準拠した強力なレジュメの書き方",
            tag: "キャリアの装甲",
            date: "2026-06-01",
            image: "assets/manga_ken.jfif",
            excerpt: "テンプレート頼みを卒業。Sクラスの工学力をアピールできる、航空宇宙レジュメの記述方法。",
            content: `
                <p>欧州宇宙機関（ESA）へGNCアーキテクチャを提案する際や、ボーイングのインターンシップなどの厳しい選考では、文字ばかりのありきたりなレジュメは一瞬でふるい落とされます。不十分な技術表現は、エンジニアとしてのキャリア装甲が薄いことを意味します。</p>
                <p><strong>骨格フレームワーク：</strong>あなたのレジュメは、システム設計仕様書のように読めるものでなければなりません。「CADモデルの作成を支援した」と書くのは止めましょう。代わりに「3軸Cubesat姿勢制御（ADCS）シミュレータをMATLAB/Simulinkで設計し、拡張カルマンフィルタ（EKF）の補正ループを調整して指向精度0.05度未満を達成した」と記述してください。</p>
                <p><strong>戦闘力を数値化せよ：</strong>安全マージン、プログラムの実行時間、コード検証率などを明記します。危機的状況下でUAVプロジェクトを率いた能力を強調し、構造的耐性を定量的な実績で証明するのです。</p>
            `,
            comments: []
        }
    ],
    fr: [
        {
            id: "blog-post-1",
            title: "SURVIVRE À L'ENFER DE PLANET Q (FUSÉES HYBRIDES DE KYUSHU)",
            tag: "PROPULSION",
            date: "2026-05-12",
            image: "assets/manga_ichigo.jpg",
            excerpt: "Une analyse tactique des boucles de combustion de Planet Q, des coefficients de régression et de la gestion du stress universitaire.",
            content: `
                <p>Entrer dans le club de fusées (Planet Q) de l'Université de Kyushu a été un baptême du feu. Au Japon, les clubs universitaires travaillent avec l'intensité du monde professionnel. Nous ne collections pas des maquettes : nous simulions et lancions des fusées hybrides de plusieurs kilonewtons.</p>
                <p><strong>Le défi central :</strong> Stabilité de la régression du grain de carburant solide HTPB. Sous la pression thermique de la combustion, le carburant brûle de manière inégale, décalant le centre de masse de la fusée. Cela génère des oscillations haute fréquence qui testent les limites structurelles du fuselage.</p>
                <p><strong>Stratégies de survie :</strong> Vous devez traiter la rigueur du code comme une armure professionnelle. Nous avons automatisé l'intégration des profils de poussée sous Python, validant nos limites de pression de chambre (4,5 MPa) avec des analyses thermiques ANSYS. Pour survivre, restez un élève curieux face aux défis.</p>
            `,
            comments: [
                { name: "CAD_WARRIOR_45", date: "2026-05-15", msg: "Ce script de simulation de régression m'a sauvé pour mon mémoire de fin d'études ! Les marges de sécurité sont très précises." },
                { name: "AOCS_DEV", date: "2026-05-18", msg: "Les lancements de Planet Q sont légendaires. Les vérifications de résistance structurelle ANSYS sont incontournables." }
            ]
        },
        {
            id: "blog-post-2",
            title: "CONTRÔLEURS D'ATTITUDE LYAPUNOV : DÉRIVER EN ORBIT",
            tag: "ADCS & GNC",
            date: "2026-05-24",
            image: "assets/manga_kakugo_1.jpg",
            excerpt: "Comment régler des boucles de suivi d'attitude non linéaires pour exécuter des manœuvres de capture avec des débris en rotation.",
            content: `
                <p>Tout comme Takumi dans <em>Initial D</em> dérape à la limite absolue de l'adhérence, un satellite de maintenance doit déraper le long de la frontière de contrôle des débris spatiaux pour les capturer en toute sécurité. Les régulateurs linéaires traditionnels (PID) échouent car la matrice d'inertie de l'ensemble change violemment post-capture.</p>
                <p><strong>La loi de commande GNC :</strong> Nous formulons une fonction de Lyapunov représentant les erreurs d'attitude dans l'espace d'état des quaternions. Nous définissons la dérivée pour garantir la stabilité asymptotique globale même sous contraintes d'actionneurs.</p>
                <p><strong>Optimisation Simulink :</strong> Implémentez une couche limite adaptative dans vos blocs de contrôle par mode glissant. Cela amortit le sautillement des vannes et évite la saturation des roues de réaction. C'est l'approche 'Initial D' appliquée au GNC — un flux fluide et optimal.</p>
            `,
            comments: [
                { name: "SATELLITE_ENTHUSIAST", date: "2026-05-26", msg: "Le critère de stabilité de Lyapunov appliqué aux mouvements relatifs de satellites combinés était un peu flou, mais la comparaison avec le drift d'Initial D est limpide !" }
            ]
        },
        {
            id: "blog-post-3",
            title: "FORGER UN CV COMME UNE ARMURE CONFORME AUX STANDARDS DE L'ESA",
            tag: "ARMURE DE CARRIÈRE",
            date: "2026-06-01",
            image: "assets/manga_ken.jfif",
            excerpt: "Oubliez les modèles génériques. Apprenez à structurer des CV aérospatiaux affichant une puissance technique de Classe S.",
            content: `
                <p>Lors de la présentation d'architectures GNC à l'Agence spatiale européenne (ESA) ou lors d'entretiens pour des places sélectives comme Boeing, les CV textuels classiques sont filtrés instantanément. Un manque de détails quantitatifs représente une armure professionnelle vulnérable.</p>
                <p><strong>La structure Exosquelette :</strong> Votre CV doit se lire comme un manuel d'architecture de systèmes. Ne dites pas : 'A aidé sur des modèles CAO.' Écrivez : 'Conçu un simulateur ADCS CubeSat à 3 axes sous MATLAB/Simulink ; ajusté le filtre de Kalman EKF pour obtenir une précision de pointage inférieure à 0,05 degré.'</p>
                <p><strong>Affichez votre puissance :</strong> Mentionnez vos marges de sécurité, vos temps de calcul, et vos ratios de validation de code. Mettez en avant votre capacité à diriger une équipe de drones sous pression. Fournissez des preuves quantitatives.</p>
            `,
            comments: []
        }
    ],
    es: [
        {
            id: "blog-post-1",
            title: "SOBREVIVIR AL INFIERNO DE PLANET Q (COHETES HÍBRIDOS DE KYUSHU)",
            tag: "PROPULSIÓN",
            date: "2026-05-12",
            image: "assets/manga_ichigo.jpg",
            excerpt: "Un desglose táctico de los bucles de combustión híbrida de Planet Q, coeficientes de regresión del grano y el estrés universitario.",
            content: `
                <p>Entrar en el club de cohetes (Planet Q) en la Universidad de Kyushu fue un bautismo de fuego. En Japón, los clubes universitarios operan con la intensidad del mundo profesional. No construíamos maquetas: simulábamos y lanzábamos cohetes híbridos de varios kilonewtons.</p>
                <p><strong>El desafío central :</strong> Estabilidad de la regresión de grano HTPB sólido. Bajo la presión térmica de la combustión, el grano se quema de forma desigual, alterando el centro de masa. Esto introduce oscilaciones de alta frecuencia que ponen a prueba los límites estructurales del fuselaje.</p>
                <p><strong>Estrategias de supervivencia :</strong> Debes tratar el rigor en el código como una armadura profesional. Automatizamos la integración de perfiles de empuje en Python, validando los límites de presión en cámara (4,5 MPa) contra modelos estructurales en ANSYS. Para sobrevivir, mantén tu espíritu de estudiante.</p>
            `,
            comments: [
                { name: "CAD_WARRIOR_45", date: "2026-05-15", msg: "¡Esta plantilla de simulación me salvó la tesis! Los márgenes de seguridad están perfectamente calculados." },
                { name: "AOCS_DEV", date: "2026-05-18", msg: "Los lanzamientos de Planet Q son legendarios. Los análisis estructurales en ANSYS son de lectura obligatoria." }
            ]
        },
        {
            id: "blog-post-2",
            title: "CONTROLADORES DE ACTITUD DE LYAPUNOV: DERRAPANDO EN ÓRBITA",
            tag: "ADCS Y GNC",
            date: "2026-05-24",
            image: "assets/manga_kakugo_1.jpg",
            excerpt: "Cómo sintonizar bucles de actitud no lineales para ejecutar maniobras de captura de basura espacial en rotación.",
            content: `
                <p>Al igual que Takumi en <em>Initial D</em> derrapa en el límite absoluto de la fricción, un satélite de mantenimiento debe derrapar por la frontera de control de la basura espacial para capturarla de forma segura. Los controladores lineales tradicionales (PID) fallan porque la matriz de inercia cambia violentamente tras la captura.</p>
                <p><strong>La ley de control GNC :</strong> Formulamos una función candidata de Lyapunov que representa los errores de orientación en el espacio de estado de cuaterniones. Definimos la derivada para garantizar estabilidad asintótica global incluso bajo degradación de actuadores.</p>
                <p><strong>Optimización en Simulink :</strong> Implementa una capa límite adaptable en tus bloques de control de modo deslizante. Esto amortigua el chattering de los actuadores y evita que las ruedas de reacción se saturen. Es el enfoque 'Initial D' para GNC: flujo suave y óptimo.</p>
            `,
            comments: [
                { name: "SATELLITE_ENTHUSIAST", date: "2026-05-26", msg: "El criterio de estabilidad de Lyapunov para el movimiento relativo de satélites acoplados era un poco abstracto, ¡pero compararlo con el drift de Initial D lo aclara todo!" }
            ]
        },
        {
            id: "blog-post-3",
            title: "FORJA UN CV COMO UNA ARMADURA COMPATIBLE CON LA ESA",
            tag: "ARMADURA PROFESIONAL",
            date: "2026-06-01",
            image: "assets/manga_ken.jfif",
            excerpt: "Olvídate de las plantillas genéricas. Aprende a estructurar currículums aeroespaciales con poder de Clase S.",
            content: `
                <p>Al presentar arquitecturas GNC a la Agencia Espacial Europea (ESA) o competir por puestos selectos en Boeing, los currículums de texto estándar son descartados al instante. La falta de detalles técnicos representa una armadura débil en tu carrera.</p>
                <p><strong>La estructura del Exoesqueleto :</strong> Tu currículum debe leerse como un manual de arquitectura de sistemas. No digas: 'Asistí en el diseño CAD.' Escribe: 'Diseñé un simulador ADCS CubeSat de 3 ejes en MATLAB/Simulink; calibré el bucle de filtrado EKF para lograr una precisión inferior a 0,05 grados.'</p>
                <p><strong>Define tu nivel de poder :</strong> Muestra tus márgenes de seguridad, tiempos de cómputo y ratios de validación. Resalta tu capacidad para liderar equipos de UAV bajo presión. Aporta pruebas cuantitativas de tu resiliencia.</p>
            `,
            comments: []
        }
    ],
    ar: [
        {
            id: "blog-post-1",
            title: "كيفاش تسلك راسك فـ 'جحيم' نادي Planet Q (صواريخ جامعة كيوشو)",
            tag: "أنظمة الدفع الفضائي",
            date: "2026-05-12",
            image: "assets/manga_ichigo.jpg",
            excerpt: "تفصيل تكتيكي لمجالات الاحتراق الهجين لنادي Planet Q، ومعادلات تآكل الوقود الصلب، والخدمة تحت الضغط الدراسي.",
            content: `
                <p>الدخول لنادي الصواريخ (Planet Q) فجامعة كيوشو باليابان كان بحال اختبار بالنار. نوادي الطلبة تما كتخدم بنيفو ديال الاحترافية ديال الشركات. ماكناش كنلعبو بالعلب، كنا كانديرو محاكاة ونطلقو صواريخ حقيقية ديال بزاف د الكيلونيوتن.</p>
                <p><strong>المشكل الأساسي:</strong> استقرار تآكل وقود HTPB الصلب. تحت ضغط وحرارة الاحتراق، الوقود كيتحرق بطريقة غير متساوية، هادشي كيزعزع مركز ثقل الصاروخ ويدير اهتزازات خطيرة كتهدد الطائرة.</p>
                <p><strong>طرق النجاة:</strong> خاصك تعامل مع كتابة الكود بحال يلا كتصاوب درع الخدمة ديالك. كنا كنحسبو قوة الدفع أوتوماتيكيا بـ Python، وكنقارنو ضغط الغرفة (4.5 ميغاباسكال) مع ديزاين الهيكل فـ ANSYS. باش تنجح، ديما خليك طالب باغي يتعلم فـ أصعب الظروف.</p>
            `,
            comments: [
                { name: "CAD_WARRIOR_45", date: "2026-05-15", msg: "هاد السكربت ديال محاكاة الاحتراق عاوني بزاف فالبحث ديالي! كاع الحسابات مضبوطة." },
                { name: "AOCS_DEV", date: "2026-05-18", msg: "أيام إطلاق صواريخ Planet Q ديما كتبقى تاريخية. ضروري تقراو حسابات ANSYS." }
            ]
        },
        {
            id: "blog-post-2",
            title: "عزوم التحكم ليابونوف: الدريفت فالمسارات المدارية",
            tag: "أنظمة التحكم GNC",
            date: "2026-05-24",
            image: "assets/manga_kakugo_1.jpg",
            excerpt: "كيفاش تضبط حلقات التحكم اللاخطية باش دير عملية التقاط حذرة لحطام فضائي كيدور بلا تحكم.",
            content: `
                <p>بحال طاكومي فـ أنمي <em>Initial D</em> ملي كيدير الدريفت فالحد الأخير ديال الاحتكاك، قمر اصطناعي ديال الصيانة خاصو يدير الدريفت فجنب الحطام الفضائي باش يشدّو بلا خطر. طُرق التحكم العادية (PID) كتفشل حيت الكتل والقصور الذاتي كيتغير بزاف مورا الالتقاط.</p>
                <p><strong>خوارزمية GNC:</strong> كنقادو دالة ليابونوف كتمثل أخطاء الوضعية فـ الفضاء الرباعي (quaternions). كنحددو الاشتقاق باش نضمنو الاستقرار الكامل وخا يكونو نص الصواريخ الصغار خاسرين.</p>
                <p><strong>تطوير Simulink:</strong> كنستعملو طبقة تكيفية فـ بلوكات تحكم sliding mode. هادشي كينقص من الارتعاش د المشغلات ويمنع عجلات رد الفعل من التوقف. هادي هي طريقة 'Initial D' فـ GNC — تمشي بسلاسة وقوة.</p>
            `,
            comments: [
                { name: "SATELLITE_ENTHUSIAST", date: "2026-05-26", msg: "حسابات ليابونوف كانت معقدة شوية، ولكن ملي قارنتيها بالدريفت د Initial D كولشي ولى واضح!" }
            ]
        },
        {
            id: "blog-post-3",
            title: "صاوب CV حديدي مقبول من وكالات الفضاء الكبار بحال ESA",
            tag: "درع الخدمة",
            date: "2026-06-01",
            image: "assets/manga_ken.jfif",
            excerpt: "بعد من النماذج العادية والضعيفة. تعلم كيفاش تقاد CV ديال هندسة الطيران كيبين القوة ديالك بنيفو S-Class.",
            content: `
                <p>ملي كتبغي تقدم مشاريع GNC لوكالة الفضاء الأوروبية (ESA) ولا كدوز entretien لشي بلاصة بحال Boeing، الـ CVs العاديين اللي عامرين غير كتبة كيتلاحو نيشان. قلة التفاصيل التقنية الدقيقة هي درع مهني مصدي وضعيف.</p>
                <p><strong>طريقة الهيكل الخارجي:</strong> الـ CV ديالك خاصو يتقرا بحال كتيب تصميم الأنظمة. ماتكتبش 'عاونت فـ ديزاين CAD'. كتب: 'صممت محاكي ADCS ثلاثي المحاور لـ CubeSat بـ MATLAB/Simulink؛ ضبطت خوارزمية EKF للحصول على دقة توجيه أقل من 0.05 درجة'.</p>
                <p><strong>بين نيفو الجهد ديالك:</strong> وري نسب الأمان، أوقات الحساب، ونسب التحقق د الكود. بين للشركات القدرة ديالك على تسيير فرقة د درون تحت الضغط. اعطي أدلة حقيقية وبالأرقام على الصلابة ديالك.</p>
            `,
            comments: []
        }
    ]
};

const localizedBlueprintDetails = {
    en: {
        'hybrid-rocket': {
            title: "TADORI-TADORI HYBRID PROPULSION SYSTEM",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>FILE: KU_PLANET_Q_PROPULSION_RECONSTRUCTION.LOG</h4>
                        <p>// LOCATION: KYUSHU UNIVERSITY // CLUB: PLANET Q</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>System Objective:</strong> Establish high-accuracy computational thrust profile reconstruction and structural simulation templates for the Tadori-Tadori Class hybrid rocket test vehicle.</p>
                        <p><strong>Aerospace GNC Context:</strong> Calculated the center of pressure shifting dynamics during hybrid propellant grain regression to model aerodynamic flight stability coefficients.</p>
                        <p><strong>Mentorship Application:</strong> Demonstrates real-world, high-pressure dynamic structural design and instrumentation constraints. Taught directly under GNC Autopilot Tuner (Simulink control tuning) and Cloud FEA Validator (Ansys finite element hardening).</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>TECHNICAL HARDWARE VERIFICATION</h5>
                        <p>&gt; Fuel grain geometry: Star-port regression topology</p>
                        <p>&gt; Solid Grain Material: HTPB (Hydroxyl-terminated polybutadiene)</p>
                        <p>&gt; Combustion telemetry: SolidWorks structure & ANSYS thermal deformation matching</p>
                    </div>
                </div>
            `
        },
        'cubesat-adcs': {
            title: "SART CUBESAT ATTITUDE CONTROL SUITE",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>FILE: SART_3U_CUBESAT_ADCS_Telemetry.LOG</h4>
                        <p>// LOCATION: SPACE SYSTEMS DEVELOPMENT / CUBESAT LAB</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>System Objective:</strong> Model, simulate, and design calibration loops for a 3U Nano-satellite Attitude Determination and Control System (ADCS).</p>
                        <p><strong>Aerospace GNC Context:</strong> Formulated Euler equations of rigid body rotation in quaternion state-space. Integrated reaction wheel inertia matrices and magnetic torquer coil outputs linked to Extended Kalman Filter (EKF) magnetometer estimations.</p>
                        <p><strong>Mentorship Application:</strong> Learn the exact mathematical modeling pipeline required by ESA research hubs. Skip the textbook fluff: we study numerical integrators, sensor disturbance modeling, and control saturation.</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>SIMULATOR READOUT PARAMETERS</h5>
                        <p>&gt; Control loop: PD Lyapunov-based feedback pointing control</p>
                        <p>&gt; Disturbance profiles: Gravitational gradient, aerodynamic drag torque, solar radiation</p>
                        <p>&gt; Integration scheme: High-fidelity ODE45 MATLAB/Simulink simulation suite</p>
                    </div>
                </div>
            `
        },
        'esa-clean-space': {
            title: "UNDERACTUATED DEBRIS STABILIZATION PROJECT",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>FILE: ESA_CLEAN_SPACE_DAYS_2026_ABSTRACT.LOG</h4>
                        <p>// LOCATION: ESTEC / EUROPEAN SPACE AGENCY</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>System Objective:</strong> Develop attitude matching and post-capture detumbling control laws for non-cooperative active debris removal (ADR) under actuator degradation.</p>
                        <p><strong>Aerospace GNC Context:</strong> Solved complex multi-body momentum transfer models during immediate capture impact. Formulated adaptive Lyapunov control laws to ensure pointing stabilization when thrusters are in underactuated states (failed or throttled).</p>
                        <p><strong>Mentorship Application:</strong> The gold standard of aerospace presentation preparation. Learn how to draft papers, organize rigorous mathematical proofs, and present systems architectures to demanding executive boards (like ESA/ESTEC Panels).</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>SELECTED PRESENTATION METADATA</h5>
                        <p>&gt; Conference: ESA Clean Space Days 2026, ESTEC, Noordwijk</p>
                        <p>&gt; Scope: Active Debris Removal (ADRIOS Directives)</p>
                        <p>&gt; Core controls: Underactuated multi-body dynamics, transition mechanics</p>
                    </div>
                </div>
            `
        }
    },
    jp: {
        'hybrid-rocket': {
            title: "TADORI-TADORI ハイブリッド推進システム仕様",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>ファイル：KU_PLANET_Q_PROPULSION_RECONSTRUCTION.LOG</h4>
                        <p>// 場所：九州大学 // クラブ：PLANET Q</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>システム目的：</strong>Tadori-Tadoriクラスハイブリッドロケット試験機の高精度推力プロファイル再構築および構造シミュレーションテンプレートの確立。</p>
                        <p><strong>航空宇宙GNC文脈：</strong>ハイブリッド推進剤の後退中に変化する圧力中心力学を計算し、空気力学的飛行安定係数をモデリング。</p>
                        <p><strong>道場での応用：</strong>実世界の高圧動的構造設計と計測の制約を習得。「GNC AUTOPILOT TUNER」（Simulink制御調整）と「CLOUD FEA VALIDATOR」（Ansys有限要素法）の直下で指導。</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>技術ハードウェア検証</h5>
                        <p>&gt; 燃料構造: スターポート後退幾何学学</p>
                        <p>&gt; 固体燃料材料: HTPB (末端水酸基ポリブタジエン)</p>
                        <p>&gt; 燃焼テレメトリ: SolidWorksおよびANSYS熱変形マッチング</p>
                    </div>
                </div>
            `
        },
        'cubesat-adcs': {
            title: "SART CUBESAT 姿勢制御スイート仕様",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>ファイル：SART_3U_CUBESAT_ADCS_Telemetry.LOG</h4>
                        <p>// 場所：宇宙システム開発 / 超小型衛星実験室</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>システム目的：</strong>3U超小型人工衛星姿勢決定制御システム（ADCS）のモデリング、シミュレーション、およびキャリブレーションループ設計。</p>
                        <p><strong>航空宇宙GNC文脈：</strong>クォータニオン状態空間における剛体回転のオイラー方程式の定式化。拡張カルマンフィルタ（EKF）地磁気計推定に基づく反動ホイール慣性行列および磁気トルカ出力を統合。</p>
                        <p><strong>道場での応用：</strong>ESAなどの研究ハブで要求される厳格な数学的モデリング手順を学習。教科書の退屈な説明を飛ばし、数値積分器、センサ誤差モデル、制御飽和を学習。</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>シミュレータ読み出しパラメータ</h5>
                        <p>&gt; 制御ループ: リアプノフ関数に基づくPDフィードバック姿勢制御</p>
                        <p>&gt; 外乱プロファイル: 重力傾斜、大気抗力、太陽輻射圧</p>
                        <p>&gt; 積分構成: 高精度 ODE45 MATLAB/Simulinkシミュレーションスイート</p>
                    </div>
                </div>
            `
        },
        'esa-clean-space': {
            title: "劣駆動スペースデブリ安定化プロジェクト仕様",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>ファイル：ESA_CLEAN_SPACE_DAYS_2026_ABSTRACT.LOG</h4>
                        <p>// 場所：ESTEC / 欧州宇宙機関</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>システム目的：</strong>アクチュエータ劣化下における非協力的な能動的デブリ除去（ADR）のための姿勢同期および捕獲後デタンプリング制御則の開発。</p>
                        <p><strong>航空宇宙GNC文脈：</strong>捕獲衝撃時の複雑なマルチボディ運動量伝達モデルを解決。スラスターが劣駆動状態（故障または出力低下）にある場合の指向安定化を保証する適応リアプノフ制御則を設計。</p>
                        <p><strong>道場での応用：</strong>航空宇宙プレゼンテーション準備のゴールドスタンダード。論文起草、厳格な数学的証明の構成、厳格な役員会（ESA/ESTECパネル等）へのシステム提案法を学習。</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>選出されたプレゼンテーションメタデータ</h5>
                        <p>&gt; 会議: ESA Clean Space Days 2026, ESTEC, ノールドウェイク</p>
                        <p>&gt; 適用範囲: 能動デブリ除去（ADRIOS指令）</p>
                        <p>&gt; コア制御: 劣駆動マルチボディ力学、遷移境界制御</p>
                    </div>
                </div>
            `
        }
    },
    fr: {
        'hybrid-rocket': {
            title: "SYSTÈME DE PROPULSION HYBRIDE TADORI-TADORI",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>FICHIER : KU_PLANET_Q_PROPULSION_RECONSTRUCTION.LOG</h4>
                        <p>// LIEU : UNIVERSITÉ DE KYUSHU // CLUB : PLANET Q</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>Objectif système :</strong> Établir des modèles de reconstruction de poussée et des simulations structurelles précises pour le véhicule d'essai hybride classe Tadori-Tadori.</p>
                        <p><strong>Contexte GNC aérospatial :</strong> Calcul de la dérive dynamique du centre de pression lors de la régression du grain de carburant hybride pour modéliser les coefficients aérodynamiques.</p>
                        <p><strong>Application Mentorat :</strong> Démontre les contraintes réelles de conception structurelle et d'instrumentation sous haute pression. Enseigné sous GNC Autopilot Tuner (Simulink) et Cloud FEA Validator (durcissement ANSYS).</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>VERIFICATION TECHNIQUE MATÉRIEL</h5>
                        <p>&gt; Géométrie du grain : Topologie de régression en étoile (Star-port)</p>
                        <p>&gt; Matériau du carburant solide : HTPB (Polybutadiène hydroxytéléchélique)</p>
                        <p>&gt; Télémétrie : Couplage structure SolidWorks & déformations thermiques ANSYS</p>
                    </div>
                </div>
            `
        },
        'cubesat-adcs': {
            title: "SUITE DE CONTRÔLE D'ATTITUDE CUBESAT SART",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>FICHIER : SART_3U_CUBESAT_ADCS_Telemetry.LOG</h4>
                        <p>// LIEU : DEVELOPPEMENT SYSTEMES SPATIAUX / LAB CUBESAT</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>Objectif système :</strong> Modéliser, simuler et concevoir des boucles d'étalonnage pour le système de détermination et de contrôle d'attitude (ADCS) d'un CubeSat 3U.</p>
                        <p><strong>Contexte GNC aérospatial :</strong> Formulation des équations d'Euler des mouvements de rotation dans l'espace d'état des quaternions. Intégration des matrices d'inertie des roues de réaction et des sorties de bobines magnétiques couplées aux estimations de magnétomètre par filtre de Kalman étendu (EKF).</p>
                        <p><strong>Application Mentorat :</strong> Apprenez le flux exact de modélisation mathématique exigé par les centres de recherche de l'ESA. Évitez les formules théoriques inutiles : nous étudions les intégrateurs numériques, les perturbations de capteurs, et la saturation de commande.</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>PARAMÈTRES DE MESURE SIMULATEUR</h5>
                        <p>&gt; Boucle de commande : Pointage par rétroaction PD basée Lyapunov</p>
                        <p>&gt; Profils de perturbations : Gradient de gravité, traînée aérodynamique, pression de radiation solaire</p>
                        <p>&gt; Schéma d'intégration : Suite de simulation MATLAB/Simulink haute fidélité ODE45</p>
                    </div>
                </div>
            `
        },
        'esa-clean-space': {
            title: "STABILISATION DES DÉBRIS SOUS-ACTIONNÉS",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>FICHIER : ESA_CLEAN_SPACE_DAYS_2026_ABSTRACT.LOG</h4>
                        <p>// LIEU : ESTEC / AGENCE SPATIALE EUROPÉENNE</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>Objectif système :</strong> Développer des lois de commande pour la synchronisation d'attitude et le désorbitage après capture de débris spatiaux non coopératifs, sous dégradation d'actionneurs.</p>
                        <p><strong>Contexte GNC aérospatial :</strong> Résolution de modèles complexes de transfert de moment cinétique multi-corps pendant l'impact de capture. Formulation de lois de commande adaptatives de Lyapunov pour assurer la stabilisation du pointage en cas de panne d'actionneurs.</p>
                        <p><strong>Application Mentorat :</strong> La référence absolue en préparation de présentations spatiales. Apprenez à rédiger des articles techniques, à structurer des démonstrations mathématiques rigoureuses, et à présenter devant des comités exigeants (ESA/ESTEC Panels).</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>DONNÉES DE CONFÉRENCE SÉLECTIONNÉES</h5>
                        <p>&gt; Conférence : ESA Clean Space Days 2026, ESTEC, Noordwijk</p>
                        <p>&gt; Domaine : Enlèvement actif de débris (ADRIOS Directives)</p>
                        <p>&gt; Contrôles clés : Dynamique multi-corps sous-actionnée, lois de transition</p>
                    </div>
                </div>
            `
        }
    },
    es: {
        'hybrid-rocket': {
            title: "SISTEMA DE PROPULSIÓN HÍBRIDA TADORI-TADORI",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>ARCHIVO: KU_PLANET_Q_PROPULSION_RECONSTRUCTION.LOG</h4>
                        <p>// UBICACIÓN: UNIVERSIDAD DE KYUSHU // CLUB: PLANET Q</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>Objetivo del Sistema:</strong> Establecer reconstrucciones del perfil de empuje por computación y plantillas de simulación estructural para el vehículo de prueba híbrido clase Tadori-Tadori.</p>
                        <p><strong>Contexto GNC Aeroespacial:</strong> Cálculo del centro de presión dinámico durante la regresión del grano sólido híbrido para modelar coeficientes de estabilidad aerodinámica.</p>
                        <p><strong>Aplicación de Mentoría:</strong> Demuestra las limitaciones del diseño estructural y la instrumentación en el mundo real bajo alta presión. Impartido directamente en GNC Autopilot Tuner (Simulink) y Cloud FEA Validator (ANSYS).</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>VERIFICACIÓN TÉCNICA DEL HARDWARE</h5>
                        <p>&gt; Geometría del grano: Topología de regresión en puerto estrella</p>
                        <p>&gt; Material del combustible sólido: HTPB (Polibutadieno con grupo terminal hidroxilo)</p>
                        <p>&gt; Telemetría: Estructura de SolidWorks y acoplamiento de deformaciones en ANSYS</p>
                    </div>
                </div>
            `
        },
        'cubesat-adcs': {
            title: "SUITE DE CONTROL DE ACTITUD DE CUBESAT SART",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>ARCHIVO: SART_3U_CUBESAT_ADCS_Telemetry.LOG</h4>
                        <p>// UBICACIÓN: DESARROLLO DE SISTEMAS ESPACIALES / LAB CUBESAT</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>Objetivo del Sistema:</strong> Modelar, simular y diseñar bucles de calibración para el sistema de determinación y control de actitud (ADCS) de un CubeSat de 3U.</p>
                        <p><strong>Contexto GNC Aeroespacial:</strong> Formulación de ecuaciones de Euler de rotación de cuerpos rígidos en el espacio de estado de cuaterniones. Integración de matrices de inercia en ruedas de reacción y bobinas magnéticas asociadas a filtros de Kalman (EKF).</p>
                        <p><strong>Aplicación de Mentoría:</strong> Aprende la matemática exacta requerida por los centros de investigación de la ESA. Evita rodeos teóricos: estudiamos integradores numéricos, perturbaciones de sensores y saturación de control.</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>PARÁMETROS DEL SIMULADOR</h5>
                        <p>&gt; Bucle de control: Apuntado por retroalimentación PD basada en Lyapunov</p>
                        <p>&gt; Perturbaciones: Gradiente de gravedad, arrastre aerodinámico, radiación solar</p>
                        <p>&gt; Integración: Suite de simulación de alta fidelidad ODE45 MATLAB/Simulink</p>
                    </div>
                </div>
            `
        },
        'esa-clean-space': {
            title: "PROYECTO DE ESTABILIZACIÓN DE BASURA SUBACCIONADA",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>ARCHIVO: ESA_CLEAN_SPACE_DAYS_2026_ABSTRACT.LOG</h4>
                        <p>// UBICACIÓN: ESTEC / AGENCIA ESPACIAL EUROPEA</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>Objetivo del Sistema:</strong> Desarrollar leyes de orientación y desorbitación post-captura para la remoción activa de basura espacial no colaborativa bajo degradación de actuadores.</p>
                        <p><strong>Contexto GNC Aeroespacial:</strong> Resolución de modelos complejos de transferencia de momento dinámico en impactos de captura. Formulación de leyes Lyapunov adaptativas para asegurar estabilidad en caso de fallos.</p>
                        <p><strong>Aplicación de Mentoría:</strong> El estándar aeroespacial para la preparación de ponencias. Aprende a redactar artículos, organizar demostraciones matemáticas y presentar a juntas ejecutivas exigentes (ESA/ESTEC Panels).</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>METADATOS DE PONENCIA SELECCIONADA</h5>
                        <p>&gt; Conferencia: ESA Clean Space Days 2026, ESTEC, Noordwijk</p>
                        <p>&gt; Alcance: Remoción activa de basura espacial (Directivas ADRIOS)</p>
                        <p>&gt; Controles clave: Dinámica multicuerpo subaccionada, leyes de transición</p>
                    </div>
                </div>
            `
        }
    },
    ar: {
        'hybrid-rocket': {
            title: "نظام الدفع الهجين TADORI-TADORI",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>ملف: KU_PLANET_Q_PROPULSION_RECONSTRUCTION.LOG</h4>
                        <p>// الموقع: جامعة كيوشو // نادي: PLANET Q</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>هدف النظام:</strong> بناء نماذج حسابية دقيقة لإعادة بناء ملف الدفع والمحاكاة الهيكلية لصاروخ الاختبار الهجين من فئة تادوري-تادوري.</p>
                        <p><strong>سياق GNC للطيران:</strong> حساب ديناميكيات تغير مركز الضغط أثناء تآكل الوقود الهجين للحصول على معاملات الاستقرار الهوائية.</p>
                        <p><strong>تطبيق المرافقة:</strong> كيبين القيود الحقيقية لتصميم الهياكل فالعالم الحقيقي تحت الضغط العالي. مقري نيشان تحت مسار GNC Autopilot Tuner (Simulink) و Cloud FEA Validator (ANSYS).</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>التحقق التقني للأجهزة</h5>
                        <p>&gt; شكل هندسة الوقود: تآكل شكل النجم المداري</p>
                        <p>&gt; مادة الوقود الصلب: HTPB (بوليبوتاديين منتهي بالهيدروكسيل)</p>
                        <p>&gt; تيليميتري الاحتراق: مطابقة ديزاين SolidWorks وتشوهات الحرارة فـ ANSYS</p>
                    </div>
                </div>
            `
        },
        'cubesat-adcs': {
            title: "مجموعة التحكم فوضعية الأقمار الاصطناعية SART CUBESAT",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>ملف: SART_3U_CUBESAT_ADCS_Telemetry.LOG</h4>
                        <p>// الموقع: تطوير أنظمة الفضاء / مختبر CUBESAT</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>هدف النظام:</strong> نمذجة ومحاكاة وتصميم حلقات المعايرة لنظام تحديد وتحكم وضعية قمر اصطناعي CubeSat 3U (ADCS).</p>
                        <p><strong>سياق GNC للطيران:</strong> صياغة معادلات أويلر للدوران فـ الفضاء الرباعي. دمج كتل عجلات رد الفعل وملفات التحكم المغناطيسي بناء على حسابات المغناطيسية بمرشح كالمان (EKF).</p>
                        <p><strong>تطبيق المرافقة:</strong> غتعلم الطريقة الرياضية الدقيقة المطلوبة فـ مراكز أبحاث ESA. بلا بلا بلا د الكتوبة غتخطاها: غنقراو المكاملات العددية، اضطرابات الحساسات، والتحكم عند التشبع.</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>مؤشرات قراءة المحاكي</h5>
                        <p>&gt; حلقة التحكم: تحكم توجيه تغذية راجعة مبني على دالة ليابونوف</p>
                        <p>&gt; قوى الاضطراب: تدرج الجاذبية، مقاومة الغلاف الجوي، الإشعاع الشمسي</p>
                        <p>&gt; نظام التكامل: محاكاة عالية الدقة ODE45 بـ MATLAB/Simulink</p>
                    </div>
                </div>
            `
        },
        'esa-clean-space': {
            title: "مشروع استقرار الحطام الفضائي عند نقص المشغلات",
            content: `
                <div class="drawer-content-box">
                    <div class="drawer-header">
                        <h4>ملف: ESA_CLEAN_SPACE_DAYS_2026_ABSTRACT.LOG</h4>
                        <p>// الموقع: ESTEC / وكالة الفضاء الأوروبية</p>
                    </div>
                    <div class="drawer-body">
                        <p><strong>هدف النظام:</strong> تطوير قوانين توجيه واستقرار ما بعد الالتقاط لتنظيف الحطام الفضائي غير المتعاون عند وقوع مشاكل فالمشغلات.</p>
                        <p><strong>سياق GNC للطيران:</strong> حل معادلات معقدة لانتقال الزخم بين كتل متعددة عند الاصطدام بالالتقاط. صياغة قوانين تحكم ليابونوف التكيفية لضمان استقرار التوجيه.</p>
                        <p><strong>تطبيق المرافقة:</strong> النيفو العالي فـ قراءة وتنظيم العروض د الفضاء. تعلم كيفاش تكتب الأوراق التقنية، تنظم البراهين الرياضية الدقيقة، وتقدم قدام لجان التحكيم بحال لجان ESA/ESTEC.</p>
                    </div>
                    <div class="drawer-specs">
                        <h5>معلومات العرض المختارة</h5>
                        <p>&gt; المؤتمر: أيام الفضاء النظيف لـ ESA 2026، ESTEC، نوردفايك</p>
                        <p>&gt; مجال المشروع: تنظيف الحطام الفضائي (قوانين ADRIOS)</p>
                        <p>&gt; أدوات التحكم: ديناميكيات الكتل المتعددة عند نقص المشغلات، قوانين الانتقال</p>
                    </div>
                </div>
            `
        }
    }
};

const localizedTelemetryMessages = {
    en: [
        "ADCS State: Quaternion [q0: 0.7071, q1: 0.0000, q2: 0.7071, q3: 0.0000]",
        "Stabilization error: Theta_err = 0.043 deg | NOMINAL",
        "Magnetorquer command: M_cmd = [-0.14, 0.55, 0.88] A·m²",
        "Estimated orbit altitude: H_ellipsoid = 542.12 km",
        "ESA ESTEC clean-space protocols... ACTIVE",
        "Planet Q rocket telemetry streaming: P_chamber = 4.3 MPa",
        "Reaction wheels velocity: W_spd = [1240, -1890, 520] RPM",
        "Adaptive controller stack: Stack converged in 4.2 seconds",
        "UAV velocity vector: V = [12.4, 0.52, -1.89] m/s",
        "Ansys validation suite: Safety margin MS = 1.62 | APPROVED",
        "Language matrix verification: JP, EN, FR, AR, SP... ACTIVE"
    ],
    jp: [
        "ADCS状態：クォータニオン [q0: 0.7071, q1: 0.0000, q2: 0.7071, q3: 0.0000]",
        "姿勢安定化誤差：Theta_err = 0.043度 | 正常数値",
        "磁気トルカコマンド：M_cmd = [-0.14, 0.55, 0.88] A·m²",
        "推定軌道高度：H_ellipsoid = 542.12 km",
        "ESA ESTECクリーン・スペース手順... アクティブ",
        "Planet Q燃焼室圧力データストリーム：P_chamber = 4.3 MPa",
        "リアクションホイール回転速度：W_spd = [1240, -1890, 520] RPM",
        "適応制御システム：スタックが4.2秒で収束完了",
        "UAV速度ベクトル：V = [12.4, 0.52, -1.89] m/s",
        "Ansys構造解析：安全マージン MS = 1.62 | 検証済合格",
        "言語システム検証マトリクス：JP, EN, FR, AR, SP... 検証完了"
    ],
    fr: [
        "État ADCS : Quaternion [q0: 0.7071, q1: 0.0000, q2: 0.7071, q3: 0.0000]",
        "Erreur de stabilisation : Theta_err = 0.043 deg | NOMINAL",
        "Commande magnéto-coupleur : M_cmd = [-0.14, 0.55, 0.88] A·m²",
        "Altitude orbitale estimée : H_ellipsoid = 542.12 km",
        "Protocoles Clean-Space ESA ESTEC... ACTIFS",
        "Télémétrie fusée Planet Q : P_chamber = 4.3 MPa",
        "Vitesse roues de réaction : W_spd = [1240, -1890, 520] RPM",
        "Contrôleur adaptatif : Convergence de boucle en 4.2 s",
        "Vecteur vitesse UAV : V = [12.4, 0.52, -1.89] m/s",
        "Rapport validation Ansys : Marge de sécurité MS = 1.62 | CONFORME",
        "Validation matrice des langues : JP, EN, FR, AR, SP... ACTIF"
    ],
    es: [
        "Estado ADCS: Cuaternión [q0: 0.7071, q1: 0.0000, q2: 0.7071, q3: 0.0000]",
        "Error de estabilización: Theta_err = 0.043 grados | NOMINAL",
        "Comando de magnetopares: M_cmd = [-0.14, 0.55, 0.88] A·m²",
        "Altitud orbital estimada: H_ellipsoid = 542.12 km",
        "Protocolos Clean-Space ESA ESTEC... ACTIVOS",
        "Telemetría cohete Planet Q: P_chamber = 4.3 MPa",
        "Velocidad ruedas de reacción: W_spd = [1240, -1890, 520] RPM",
        "Controlador adaptativo: Convergencia de bucle en 4.2 s",
        "Vector de velocidad UAV: V = [12.4, 0.52, -1.89] m/s",
        "Informe validación Ansys: Margen de seguridad MS = 1.62 | APROBADO",
        "Matriz lingüística verificada: JP, EN, FR, AR, SP... ACTIVO"
    ],
    ar: [
        "حالة ADCS: الفضاء الرباعي [q0: 0.7071, q1: 0.0000, q2: 0.7071, q3: 0.0000]",
        "نسبة خطأ الاستقرار: Theta_err = 0.043 درجة | عادي",
        "إشارة الملف المغناطيسي: M_cmd = [-0.14, 0.55, 0.88] A·m²",
        "ارتفاع المدار المحسوب: H_ellipsoid = 542.12 km",
        "قوانين الفضاء النظيف لـ ESA ESTEC... نشطة",
        "تيليميتري صاروخ Planet Q: ضغط الغرفة P_chamber = 4.3 MPa",
        "سرعة عجلات رد الفعل: W_spd = [1240, -1890, 520] RPM",
        "نظام التحكم التكيفي: تقارب الحلقة فـ 4.2 ثواني",
        "متجه سرعة درون UAV: سرعة V = [12.4, 0.52, -1.89] m/s",
        "تأكيدات صلابة Ansys: معامل الأمان MS = 1.62 | مقبول",
        "التحقق من مصفوفة اللغات: JP, EN, FR, AR, SP... نشط"
    ]
};

