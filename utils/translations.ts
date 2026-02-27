export const translations = {
  jp: {
    nav: {
      login: "ログイン"
    },
    common: {
      patent: "特許出願中",
      chapters: ["01 Visualization", "02 Solutions", "03 Rules"]
    },
    hero: {
      tag: "Planetary Intelligence",
      title_prefix: "AIで、",
      title_fact: "事実",
      title_reg: "規制",
      title_sol: "解決",
      title_suffix: "そのすべてに、",
      title_main: "最短距離を。",
      desc: "分断された「地図・環境・ルール」をAIが統合。意思決定までの時間を、圧倒的に短縮します。",
      cta: "今すぐ体験する"
    },
    problem: {
      tag: "DEVELOPMENT ORIGIN",
      title: "「情報の分断」が、\n私たちの目を曇らせていた。",
      desc: "なぜ、このシステムが必要なのか。それは、私たちが「本当のこと」を知るための術を持っていなかったからです。",
      cards: {
        platform: { title: "プラットフォームの欠如", desc: "これまで、地球環境のことだけを信頼して見続けられる場所はありませんでした。" },
        reality: { title: "実感の欠如", desc: "遠い国のニュースを見ても、場所がわからず「自分事」にできない不便さがありました。" },
        noise: { title: "ノイズと重複", desc: "キーワード検索では、宣伝や無関係な情報が混ざり、全体像を掴むのは至難の業でした。" },
        risk: { title: "見えないリスク", desc: "企業が守るべきルールや、サプライチェーンの監視。個人が現状を把握するのは困難でした。" }
      },
      transition: "SOLUTION"
    },
    visuals: {
      tag: "Core Feature 01 / 環境問題の可視化",
      subtag: "Environmental View",
      title: "文字を読む前に、\n状況を直感する。",
      desc: "もう、地名を検索する必要はありません。8つの言語で集めた世界中の事実を、AIが地図上に直接描き出します。",
      elements_title: "7つの環境問題カテゴリ",
      elements: {
        water: { name: "水", desc: "洪水・干ばつ" },
        heat: { name: "熱", desc: "地球温暖化" },
        plants: { name: "植物", desc: "森林破壊" },
        life: { name: "生き物", desc: "生物多様性" },
        soil: { name: "土", desc: "砂漠化" },
        ice: { name: "氷", desc: "氷河融解" },
        poison: { name: "毒", desc: "汚染・廃棄物" }
      },
      ui: {
        dashboard: "Omegaion News Deck",
        active_filters: "表示中のトピック",
        total_signals: "解析ニュース総数",
        search_placeholder: "地域・事象を検索...",
        heatwave: "観測史上最高気温: テキサス",
        flood: "大規模洪水発生: インド"
      }
    },
    features: {
      tag: "Core Feature 02 / SDGs AIソリューション",
      subtag: "Solution Proposal",
      title: "課題を特定し、\n解決策までたどり着く。",
      desc: "異変を見つけるだけで終わらせない。その問題を解決できる「世界中の技術や企業」をAIが自動で探し出し、あなたに提案します。",
      advantage: "Omegaion Advantage",
      points: [
        "専門家不要で「問題特定」から「解決」まで完了",
        "世界中のクリーンテック企業DBと連携"
      ],
      ui: {
        issue_label: "課題を検知",
        issue_val: "工業用水汚染",
        severity: "深刻度: 重大",
        solution_label: "適合ソリューション",
        solution_val: "高度バイオろ過装置",
        provider: "提供: EcoTech Global",
        matching: "AIマッチング"
      }
    },
    regulations: {
      tag: "Core Feature 03 / 地球温暖化・規制予測",
      subtag: "Regulatory View",
      title: "ルールを把握し、\nリスクを予兆で捉える。",
      card1: { title: "国・機関ごとのルールを構造化", desc: "世界中で日々生まれる新しい環境ルール。AIが国や機関ごとに整理し、あなたの事業や生活にどう関わるかを導き出します。" },
      card2: { title: "災害リスク × 規制変化", desc: "現地の災害リスクと規制の変化を同時につかむことで、手遅れになる前に次の一手が打てるようになります。" },
      ui: {
        stream: "世界規制ストリーム",
        usa: "米国 - SEC気候開示規則",
        eu: "EU - CBAM規制",
        high_impact: "高インパクト",
        japan: "日本 - GXリーグ"
      }
    },
    future: {
      tag: "Coming Soon",
      title: "断片的な情報が、AIによって\n『戦略的な物語』へと繋がる。",
      desc: "膨大なノイズから解放され、AIが多言語・多角的な因果関係を解明します。\n事後対応ではなく、未来を予測し先手を打つ「攻めの意思決定」へ。\n世界中の事象が、あなたの事業にどう影響するかを瞬時に理解できます。",
      alert: {
        title: "Precision Alerting",
        subtitle: "見逃しゼロ。対応工数を90%削減する、確信の通知。",
        desc: "1日2回、直近12時間の全世界のニュースをAIがスキャン。独自アルゴリズムで影響度（High/Middle/Low）を判定し、あなたが設定した「監視タグ」に関連する重要情報だけを抽出します。",
        features: ["リサーチ時間ゼロ", "ノイズ排除", "早期発見"]
      },
      report: {
        title: "Contextual Intelligence",
        subtitle: "AIが因果を解明。次のアクションを指し示す週次戦略レポート。",
        desc: "「国×組織×テーマ」の複雑な絡み合いを、LLMと動的ナレッジグラフが分析。多言語ソースを解析し、経営層へそのまま提出可能なクオリティのレポートを生成します。",
        ui_input: "Knowledge Graph Analysis",
        ui_output: "Strategic Brief (PDF)"
      }
    },
    pricing: {
      title: "Plan",
      subtitle: "未来のパートナーへ。",
      founder: {
        name: "Founder Plan",
        desc: "ローンチ記念・創設メンバー限定",
        price: "$0",
        period: "/ 永久無料",
        note: "2026年3月31日までに登録した方は、この先ずっと完全無料でご利用いただけます。",
        features: [
          "環境ニュース・ソリューションの地図表示",
          "組織別の環境規制ニュース閲覧",
          "カスタムアラート機能",
          "戦略レポート自動生成",
          "すべての基本機能アクセス"
        ],
        cta: "無料で登録する"
      },
      standard: {
        name: "Standard Plan",
        price: "$5",
        period: "/ 月額",
        note: "2026年4月受付開始",
        features: [
          "環境ニュース・ソリューションの地図表示",
          "組織別の環境規制ニュース閲覧",
          "カスタムアラート機能",
          "戦略レポート自動生成",
          "すべての基本機能アクセス"
        ],
        cta: "4月1日より受付開始" // ← ここを変更しました
      },
      business: {
        name: "Business Plan",
        desc: "法人向け",
        project: "Project (5名)",
        team: "Team (10名)",
        dept: "Dept (20名)",
        note: "請求書払い対応、2ヶ月分無料",
        cta: "お問い合わせ"
      }
    }
  },
  en: {
    nav: { login: "Login" },
    common: {
      patent: "Patent Pending",
      chapters: ["01 Visualization", "02 Solutions", "03 Rules"]
    },
    hero: {
      tag: "Planetary Intelligence",
      title_prefix: "With AI,",
      title_fact: "Facts",
      title_reg: "Rules",
      title_sol: "Solutions",
      title_suffix: "Shortest distance to",
      title_main: "Everything.",
      desc: "Integrating Maps, Environment, and Regulations. Drastically reducing decision-making time.",
      cta: "Experience Now"
    },
    problem: {
      tag: "DEVELOPMENT ORIGIN",
      title: "Information fragmentation\nclouded our vision.",
      desc: "Why do we need this? Because we lacked the means to know the 'truth'.",
      cards: {
        platform: { title: "Lack of Platform", desc: "There was no single trusted place to monitor global environmental status." },
        reality: { title: "Lack of Reality", desc: "News from distant lands felt disconnected without location context." },
        noise: { title: "Noise & Duplication", desc: "Keywords brought up ads and irrelevant info, making the big picture blurry." },
        risk: { title: "Invisible Risks", desc: "Corporate rules and supply chains were too hard for individuals to track." }
      },
      transition: "SOLUTION"
    },
    visuals: {
      tag: "Core Feature 01 / Visualization",
      subtag: "Environmental View",
      title: "Intuit the situation\nbefore reading.",
      desc: "No need to search for place names. AI visualizes global facts in 8 languages directly on the map.",
      elements_title: "7 Environmental Problem Categories",
      elements: {
        water: { name: "Water", desc: "Floods & Droughts" },
        heat: { name: "Heat", desc: "Global Warming" },
        plants: { name: "Plants", desc: "Deforestation" },
        life: { name: "Living", desc: "Bio-diversity" },
        soil: { name: "Earth", desc: "Desertification" },
        ice: { name: "Ice", desc: "Melting Glaciers" },
        poison: { name: "Poison", desc: "Pollution & Waste" }
      },
      ui: {
        dashboard: "Omegaion News Deck",
        active_filters: "Active Topics",
        total_signals: "Analyzed Reports",
        search_placeholder: "Search global events...",
        heatwave: "Record High Temp: Texas",
        flood: "Major Flooding: India"
      }
    },
    features: {
      tag: "Core Feature 02 / SDGs AI Solutions",
      subtag: "Solution Proposal",
      title: "Identify issues,\nreach solutions.",
      desc: "Don't just find problems. AI automatically finds global tech and companies to solve them for you.",
      advantage: "Omegaion Advantage",
      points: [
        "From ID to Solution without experts",
        "Linked with global clean-tech DB"
      ],
      ui: {
        issue_label: "ISSUE DETECTED",
        issue_val: "Water Contamination",
        severity: "Severity: Critical",
        solution_label: "MATCHED SOLUTION",
        solution_val: "Bio-Filtration Unit",
        provider: "Provider: EcoTech Global",
        matching: "AI MATCHING"
      }
    },
    regulations: {
      tag: "Core Feature 03 / Regulation Prediction",
      subtag: "Regulatory View",
      title: "Grasp rules,\npredict risks.",
      card1: { title: "Structured Global Rules", desc: "AI organizes new environmental rules by country/org to show impact on your business." },
      card2: { title: "Disaster Risk x Regs", desc: "Grasp local risks and regulatory changes simultaneously to act before it's too late." },
      ui: {
        stream: "Global Reg Stream",
        usa: "USA - SEC Climate",
        eu: "EU - CBAM Reg",
        high_impact: "High Impact",
        japan: "JAPAN - GX League"
      }
    },
    future: {
      tag: "Coming Soon",
      title: "Fragmented information connects into a\n'strategic story' via AI.",
      desc: "Free yourself from noise. AI elucidates multi-language and multi-faceted causal relationships.\nShift to proactive decision-making that predicts the future.\nInstantly understand how global events impact your business.",
      alert: {
        title: "Precision Alerting",
        subtitle: "Zero Misses. 90% Reduction in Response Effort.",
        desc: "AI scans global news twice a day (last 12 hours). Our proprietary algorithm determines impact (High/Middle/Low) and extracts only critical information related to your 'Watch Tags'.",
        features: ["Zero Research Time", "Noise Elimination", "Early Detection"]
      },
      report: {
        title: "Contextual Intelligence",
        subtitle: "AI Elucidates Causality. Weekly Strategy Reports.",
        desc: "LLMs and Dynamic Knowledge Graphs analyze the complex interplay of 'Country x Org x Theme'. We analyze multi-language sources to generate executive-ready reports.",
        ui_input: "Knowledge Graph Analysis",
        ui_output: "Strategic Brief (PDF)"
      }
    },
    pricing: {
      title: "Plan",
      subtitle: "To our future partners.",
      founder: {
        name: "Founder Plan",
        desc: "Launch Special / Founders Only",
        price: "$0",
        period: "/ Lifetime Free",
        note: "Register by Mar 31, 2026 for completely free lifetime access.",
        features: [
          "Map view of environmental news & solutions",
          "Org-specific regulation news",
          "Custom alert function",
          "Automated strategy reports",
          "Access to all basic features"
        ],
        cta: "Register Free"
      },
      standard: {
        name: "Standard Plan",
        price: "$5",
        period: "/ Month",
        note: "Registrations open April 2026",
        features: [
          "Map view of environmental news & solutions",
          "Org-specific regulation news",
          "Custom alert function",
          "Automated strategy reports",
          "Access to all basic features"
        ],
        cta: "Available April 1st" // ← ここを変更しました
      },
      business: {
        name: "Business Plan",
        desc: "For Enterprise",
        project: "Project (5 users)",
        team: "Team (10 users)",
        dept: "Dept (20 users)",
        note: "Invoice payment available, 2 months free",
        cta: "Contact Us"
      }
    }
  },
  es: {
    nav: { login: "Iniciar sesión" },
    common: {
      patent: "Patente Pendiente",
      chapters: ["01 Visuals", "02 Solutions", "03 Rules"]
    },
    hero: {
      tag: "Inteligencia Planetaria",
      title_prefix: "Con IA,",
      title_fact: "Hechos",
      title_reg: "Reglas",
      title_sol: "Solución",
      title_suffix: "La distancia más corta",
      title_main: "a todo.",
      desc: "Integrando mapas, medio ambiente y normativas. Reduciendo drásticamente el tiempo de decisión.",
      cta: "Experimentar ahora"
    },
    problem: {
      tag: "ORIGEN DEL DESARROLLO",
      title: "La fragmentación de la información\nnubló nuestra visión.",
      desc: "¿Por qué necesitamos esto? Porque carecíamos de los medios para conocer la 'verdad'.",
      cards: {
        platform: { title: "Falta de Plataforma", desc: "No había un lugar confiable para monitorear el estado ambiental global." },
        reality: { title: "Falta de Realidad", desc: "Las noticias lejanas se sentían desconectadas sin contexto de ubicación." },
        noise: { title: "Ruido y Duplicación", desc: "Las palabras clave traían anuncios e información irrelevante." },
        risk: { title: "Riesgos Invisibles", desc: "Las reglas corporativas y cadenas de suministro eran difíciles de rastrear." }
      },
      transition: "SOLUCIÓN"
    },
    visuals: {
      tag: "Core Feature 01 / Visualización",
      subtag: "Vista Ambiental",
      title: "Intuye la situación\nantes de leer.",
      desc: "No necesitas buscar nombres de lugares. La IA visualiza hechos globales en 8 idiomas directamente en el mapa.",
      elements_title: "7 Categorías de Problemas Ambientales",
      elements: {
        water: { name: "Agua", desc: "Inundaciones" },
        heat: { name: "Calor", desc: "Calentamiento" },
        plants: { name: "Plantas", desc: "Deforestación" },
        life: { name: "Seres Vivos", desc: "Biodiversidad" },
        soil: { name: "Tierra", desc: "Desertificación" },
        ice: { name: "Hielo", desc: "Glaciares" },
        poison: { name: "Veneno", desc: "Contaminación" }
      },
      ui: {
        dashboard: "Omegaion Noticias",
        active_filters: "Temas Activos",
        total_signals: "Informes Analizados",
        search_placeholder: "Buscar eventos globales...",
        heatwave: "Temp. Récord: Texas",
        flood: "Inundación Mayor: India"
      }
    },
    features: {
      tag: "Core Feature 02 / Soluciones IA",
      subtag: "Propuesta de Solución",
      title: "Identifica problemas,\nencuentra soluciones.",
      desc: "La IA encuentra automáticamente tecnología y empresas globales para resolver problemas.",
      advantage: "Ventaja Omegaion",
      points: [
        "De ID a Solución sin expertos",
        "Vinculado con DB global de tecnología limpia"
      ],
      ui: {
        issue_label: "PROBLEMA DETECTADO",
        issue_val: "Contaminación del Agua",
        severity: "Gravedad: Crítica",
        solution_label: "SOLUCIÓN ENCONTRADA",
        solution_val: "Unidad de Bio-Filtración",
        provider: "Proveedor: EcoTech Global",
        matching: "Emparejamiento IA"
      }
    },
    regulations: {
      tag: "Core Feature 03 / Predicción",
      subtag: "Vista Regulatoria",
      title: "Comprende reglas,\npredice riesgos.",
      card1: { title: "Reglas Globales Estructuradas", desc: "La IA organiza nuevas reglas ambientales por país/org para mostrar el impacto." },
      card2: { title: "Riesgo Desastre x Reglas", desc: "Comprende riesgos locales y cambios regulatorios simultáneamente." },
      ui: {
        stream: "Flujo Reg Global",
        usa: "EE.UU. - Regla Clima",
        eu: "UE - Regulación CBAM",
        high_impact: "Alto Impacto",
        japan: "JAPÓN - Liga GX"
      }
    },
    future: {
      tag: "Próximamente",
      title: "La información fragmentada se conecta en una\n'historia estratégica' a través de la IA.",
      desc: "Libérese del ruido. La IA dilucida las relaciones causales en múltiples idiomas y facetas.\nCambie a una toma de decisiones proactiva que predice el futuro.\nComprenda instantáneamente cómo los eventos globales impactan su negocio.",
      alert: {
        title: "Alerta de Precisión",
        subtitle: "Cero Fallos. 90% de Reducción en Esfuerzo.",
        desc: "La IA escanea noticias globales dos veces al día (últimas 12 horas). Nuestro algoritmo determina el impacto y extrae solo información crítica relacionada con sus 'Etiquetas de Seguimiento'.",
        features: ["Cero Tiempo de Investigación", "Eliminación de Ruido", "Detección Temprana"]
      },
      report: {
        title: "Inteligencia Contextual",
        subtitle: "La IA Dilucida la Causalidad. Informes de Estrategia Semanales.",
        desc: "Los LLM y Gráficos de Conocimiento Dinámicos analizan la compleja interacción de 'País x Org x Tema'. Analizamos fuentes multilingües para generar informes listos para ejecutivos.",
        ui_input: "Análisis de Gráfico de Conocimiento",
        ui_output: "Resumen Estratégico (PDF)"
      }
    },
    pricing: {
      title: "Plan",
      subtitle: "Para nuestros futuros socios.",
      founder: {
        name: "Plan Fundador",
        desc: "Especial de Lanzamiento / Solo Fundadores",
        price: "$0",
        period: "/ Gratis de por vida",
        note: "Regístrese antes del 31 de marzo de 2026 para obtener acceso gratuito de por vida.",
        features: [
          "Vista en mapa de noticias y soluciones",
          "Noticias de regulación por organización",
          "Función de alerta personalizada",
          "Informes de estrategia automatizados",
          "Acceso a todas las funciones básicas"
        ],
        cta: "Registro Gratis"
      },
      standard: {
        name: "Plan Estándar",
        price: "$5",
        period: "/ Mes",
        note: "Inscripciones abiertas en abril de 2026",
        features: [
          "Vista en mapa de noticias y soluciones",
          "Noticias de regulación por organización",
          "Función de alerta personalizada",
          "Informes de estrategia automatizados",
          "Acceso a todas las funciones básicas"
        ],
        cta: "Disponible el 1 de abril" // ← ここを変更しました
      },
      business: {
        name: "Plan Negocios",
        desc: "Para Empresas",
        project: "Proyecto (5 usuarios)",
        team: "Equipo (10 usuarios)",
        dept: "Depto (20 usuarios)",
        note: "Pago con factura disponible, 2 meses gratis",
        cta: "Contáctenos"
      }
    }
  },
  fr: {
    nav: { login: "Connexion" },
    common: {
      patent: "Brevet En Instance",
      chapters: ["01 Visuals", "02 Solutions", "03 Rules"]
    },
    hero: {
      tag: "Intelligence Planétaire",
      title_prefix: "Avec l'IA,",
      title_fact: "Faits",
      title_reg: "Règles",
      title_sol: "Solutions",
      title_suffix: "La distance la plus courte",
      title_main: "vers tout.",
      desc: "Intégration des cartes, de l'environnement et des réglementations. Réduction drastique du temps de décision.",
      cta: "Expérimenter"
    },
    problem: {
      tag: "ORIGINE DU DÉVELOPPEMENT",
      title: "La fragmentation de l'info\na obscurci notre vision.",
      desc: "Pourquoi ce système ? Parce que nous manquions de moyens pour connaître la 'vérité'.",
      cards: {
        platform: { title: "Manque de Plateforme", desc: "Pas d'endroit fiable pour surveiller l'état environnemental mondial." },
        reality: { title: "Manque de Réalité", desc: "Les nouvelles lointaines semblaient déconnectées sans contexte géographique." },
        noise: { title: "Bruit et Duplication", desc: "Les mots-clés apportaient publicités et informations non pertinentes." },
        risk: { title: "Risques Invisibles", desc: "Les règles d'entreprise et chaînes d'approvisionnement étaient dures à suivre." }
      },
      transition: "SOLUTION"
    },
    visuals: {
      tag: "Core Feature 01 / Visualisation",
      subtag: "Vue Environnementale",
      title: "Intuiter la situation\navant de lire.",
      desc: "Plus besoin de chercher des noms de lieux. L'IA visualise les faits mondiaux en 8 langues sur la carte.",
      elements_title: "7 Catégories de Problèmes Environnementaux",
      elements: {
        water: { name: "Eau", desc: "Inondations" },
        heat: { name: "Chaleur", desc: "Réchauffement" },
        plants: { name: "Plantes", desc: "Déforestation" },
        life: { name: "Vivant", desc: "Biodiversité" },
        soil: { name: "Terre", desc: "Désertification" },
        ice: { name: "Glace", desc: "Glaciers" },
        poison: { name: "Poison", desc: "Pollution" }
      },
      ui: {
        dashboard: "Omegaion Actus",
        active_filters: "Sujets Actifs",
        total_signals: "Rapports Analysés",
        search_placeholder: "Chercher événements...",
        heatwave: "Temp. Record : Texas",
        flood: "Inondation Majeure : Inde"
      }
    },
    features: {
      tag: "Core Feature 02 / Solutions IA",
      subtag: "Proposition de Solution",
      title: "Identifier les problèmes,\ntrouver des solutions.",
      desc: "L'IA trouve automatiquement des technologies et entreprises mondiales pour résoudre les problèmes.",
      advantage: "Avantage Omegaion",
      points: [
        "De l'ID à la Solution sans experts",
        "Lié à la DB mondiale des technologies propres"
      ],
      ui: {
        issue_label: "PROBLÈME DÉTECTÉ",
        issue_val: "Contamination de l'Eau",
        severity: "Gravité : Critique",
        solution_label: "SOLUTION TROUVÉE",
        solution_val: "Unité de Bio-Filtración",
        provider: "Fournisseur : EcoTech Global",
        matching: "Correspondance IA"
      }
    },
    regulations: {
      tag: "Core Feature 03 / Prédiction",
      subtag: "Vue Réglementaire",
      title: "Saisir les règles,\nprédire les risques.",
      card1: { title: "Règles Mondiales Structurées", desc: "L'IA organise les nouvelles règles par pays/org pour montrer l'impact." },
      card2: { title: "Risque Géo x Règles", desc: "Saisissez simultanément les risques locaux et les changements réglementaires." },
      ui: {
        stream: "Flux Rég Global",
        usa: "USA - Règle Climat",
        eu: "UE - Règlement CBAM",
        high_impact: "Impact Élevé",
        japan: "JAPON - Ligue GX"
      }
    },
    future: {
      tag: "Bientôt",
      title: "L'information fragmentée se connecte en une\n'histoire stratégique' via l'IA.",
      desc: "Libérez-vous du bruit. L'IA élucide les relations causales multilingues et multifacettes.\nPassez à une prise de décision proactive qui prédit l'avenir.\nComprenez instantanément comment les événements mondiaux impactent votre entreprise.",
      alert: {
        title: "Alerte de Précision",
        subtitle: "Zéro Manquement. 90% de Réduction de l'Effort.",
        desc: "L'IA scanne les nouvelles mondiales deux fois par jour (dernières 12h). Notre algorithme détermine l'impact et extrait uniquement les infos critiques liées à vos 'Tags de Surveillance'.",
        features: ["Zéro Temps de Recherche", "Élimination du Bruit", "Détection Précoce"]
      },
      report: {
        title: "Intelligence Contextuelle",
        subtitle: "L'IA Élucide la Causalité. Rapports Stratégiques Hebdomadaires.",
        desc: "Les LLM et Graphiques de Connaissances Dynamiques analysent l'interaction complexe de 'Pays x Org x Thème'. Nous analysons des sources multilingües pour générer des rapports prêts pour la direction.",
        ui_input: "Analyse Graphique",
        ui_output: "Brief Stratégique (PDF)"
      }
    },
    pricing: {
      title: "Plan",
      subtitle: "À nos futurs partenaires.",
      founder: {
        name: "Plan Fondateur",
        desc: "Spécial Lancement / Fondateurs Uniquement",
        price: "0 €",
        period: "/ Gratuit à vie",
        note: "Inscrivez-vous avant le 31 mars 2026 pour un accès gratuit à vie.",
        features: [
          "Vue cartographique des actualités et solutions",
          "Actualités réglementaires par organisation",
          "Fonction d'alerte personnalisée",
          "Rapports stratégiques automatisés",
          "Accès à toutes les fonctions de base"
        ],
        cta: "Inscription Gratuite"
      },
      standard: {
        name: "Plan Standard",
        price: "5 €",
        period: "/ Mois",
        note: "Inscriptions ouvertes en avril 2026",
        features: [
          "Vue cartographique des actualités et solutions",
          "Actualités réglementaires par organisation",
          "Fonction d'alerte personnalisée",
          "Rapports stratégiques automatisés",
          "Accès à toutes les fonctions de base"
        ],
        cta: "Disponible le 1er avril" // ← ここを変更しました
      },
      business: {
        name: "Plan Affaires",
        desc: "Pour Entreprises",
        project: "Projet (5 util.)",
        team: "Équipe (10 util.)",
        dept: "Dép. (20 util.)",
        note: "Paiement sur facture, 2 mois gratuits",
        cta: "Contactez-nous"
      }
    }
  },
  pt: {
    nav: { login: "Entrar" },
    common: {
      patent: "Patente Pendente",
      chapters: ["01 Visuals", "02 Solutions", "03 Rules"]
    },
    hero: {
      tag: "Inteligência Planetária",
      title_prefix: "Com IA,",
      title_fact: "Fatos",
      title_reg: "Regras",
      title_sol: "Soluções",
      title_suffix: "A menor distância",
      title_main: "para tudo.",
      desc: "Integrando mapas, meio ambiente e regulamentações. Reduzindo drasticamente o tempo de decisão.",
      cta: "Experimente Agora"
    },
    problem: {
      tag: "ORIGEM DO DESENVOLVIMENTO",
      title: "A fragmentação da informação\nnebulou nossa visão.",
      desc: "Por que precisamos disso? Porque nos faltavam meios para saber a 'verdade'.",
      cards: {
        platform: { title: "Falta de Plataforma", desc: "Não havia um lugar confiable para monitorar o status ambiental global." },
        reality: { title: "Falta de Realidad", desc: "Notícias distantes pareciam desconectadas sem contexto de localização." },
        noise: { title: "Ruído e Duplicação", desc: "Palavras-chave traziam anúncios e informações irrelevantes." },
        risk: { title: "Riscos Invisíveis", desc: "Regras corporativas e cadeias de suprimentos eram difíceis de rastrear." }
      },
      transition: "SOLUÇÃO"
    },
    visuals: {
      tag: "Recurso 01 / Visualização",
      subtag: "Visão Ambiental",
      title: "Intuir a situação\nantes de ler.",
      desc: "Não há necessidade de pesquisar nomes de lugares. A IA visualiza fatos globais em 8 idiomas diretamente no mapa.",
      elements_title: "7 Categorías de Problemas Ambientais",
      elements: {
        water: { name: "Água", desc: "Enchentes" },
        heat: { name: "Calor", desc: "Aquecimento" },
        plants: { name: "Plantas", desc: "Desmatamento" },
        life: { name: "Seres Vivos", desc: "Biodiversidade" },
        soil: { name: "Terra", desc: "Desertificação" },
        ice: { name: "Gelo", desc: "Geleiras" },
        poison: { name: "Veneno", desc: "Poluição" }
      },
      ui: {
        dashboard: "Painel Omegaion",
        active_filters: "Tópicos Ativos",
        total_signals: "Relatórios Analisados",
        search_placeholder: "Buscar eventos globais...",
        heatwave: "Temp. Recorde: Texas",
        flood: "Enchente Maior: Índia"
      }
    },
    features: {
      tag: "Recurso 02 / Soluções IA",
      subtag: "Proposta de Solução",
      title: "Identificar problemas,\nencontrar soluções.",
      desc: "A IA encontra automaticamente tecnologia e empresas globais para resolver problemas.",
      advantage: "Vantagem Omegaion",
      points: [
        "Da ID à Solução sem especialistas",
        "Vinculado ao DB global de tecnologia limpa"
      ],
      ui: {
        issue_label: "PROBLEMA DETECTADO",
        issue_val: "Contaminação da Água",
        severity: "Gravidade: Crítica",
        solution_label: "SOLUCIÓN ENCONTRADA",
        solution_val: "Unidade de Bio-Filtração",
        provider: "Provedor: EcoTech Global",
        matching: "Correspondência IA"
      }
    },
    regulations: {
      tag: "Recurso 03 / Previsão",
      subtag: "Visão Regulatória",
      title: "Entender regras,\nprever riscos.",
      card1: { title: "Regras Globais Estruturadas", desc: "A IA organiza novas regras por país/org para mostrar o impacto." },
      card2: { title: "Risco Desastre x Regras", desc: "Entenda riscos locais e mudanças regulatórias simultaneamente." },
      ui: {
        stream: "Fluxo Reg Global",
        usa: "EUA - Regra Clima",
        eu: "UE - Regulação CBAM",
        high_impact: "Alto Impacto",
        japan: "JAPÃO - Liga GX"
      }
    },
    future: {
      tag: "Em Breve",
      title: "A informação fragmentada se conecta em uma\n'história estratégica' via IA.",
      desc: "Liberte-se do ruído. A IA elucida relações causales multilíngues e multifacetadas.\nMude para uma tomada de decisão proativa que prevê o futuro.\nEntenda instantaneamente como eventos globais impactam seu negócio.",
      alert: {
        title: "Alerta de Precisão",
        subtitle: "Zero Falhas. 90% de Redução no Esforço.",
        desc: "A IA escaneia notícias globais duas vezes ao dia (últimas 12h). Nosso algoritmo determina o impacto e extrai apenas informações críticas relacionadas às suas 'Tags de Monitoramento'.",
        features: ["Zero Tempo de Pesquisa", "Eliminação de Ruído", "Detecção Precoce"]
      },
      report: {
        title: "Inteligência Contextual",
        subtitle: "A IA Elucida a Causalidade. Relatórios de Estratégia Semanais.",
        desc: "LLMs e Gráficos de Conhecimento Dinâmicos analisam a complexa interação de 'País x Org x Tema'. Analisamos fontes multilíngues para gerar relatórios prontos para a diretoria.",
        ui_input: "Análise de Gráfico",
        ui_output: "Resumo Estratégico (PDF)"
      }
    },
    pricing: {
      title: "Plano",
      subtitle: "Para nossos futuros parceiros.",
      founder: {
        name: "Plano Fundador",
        desc: "Especial de Lançamento / Apenas Fundadores",
        price: "$0",
        period: "/ Grátis Vitalício",
        note: "Cadastre-se até 31 de março de 2026 para acesso gratuito vitalício.",
        features: [
          "Visualização em mapa de notícias e soluções",
          "Notícias de regulamentação por organização",
          "Função de alerta personalizado",
          "Relatórios de estratégia automatizados",
          "Acesso a todos os recursos básicos"
        ],
        cta: "Cadastro Grátis"
      },
      standard: {
        name: "Plano Padrão",
        price: "$5",
        period: "/ Mês",
        note: "Inscrições abertas em abril de 2026",
        features: [
          "Visualização em mapa de notícias e soluções",
          "Notícias de regulamentação por organização",
          "Função de alerta personalizado",
          "Relatórios de estratégia automatizados",
          "Acesso a todos os recursos básicos"
        ],
        cta: "Disponível em 1º de abril" // ← ここを変更しました
      },
      business: {
        name: "Plano Empresarial",
        desc: "Para Empresas",
        project: "Projeto (5 usuários)",
        team: "Equipe (10 usuários)",
        dept: "Dept (20 usuários)",
        note: "Pagamento por fatura disponível, 2 meses grátis",
        cta: "Contate-nos"
      }
    }
  }
};