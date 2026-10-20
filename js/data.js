/* ==========================================================================
   data.js — Single source of truth for Ammar Akhund's portfolio.
   Populated from LinkedIn (ca.linkedin.com/in/ammar-akhund-145b17245),
   resume, and live GitHub projects.

   - Plain strings/arrays only; no HTML required.
   - Any empty URL ('') hides its button/link automatically.
   ========================================================================== */

window.SITE = {
  /* ---------- Profile & Global Links ---------- */
  links: {
    email:       'mailto:ammar.akhund2017@gmail.com',
    phone:       'tel:+14313354259',
    linkedin:    'https://www.linkedin.com/in/ammar-akhund-145b17245/',
    github:      'https://github.com/xakhundx',
    focusArena:  'https://xakhundx.github.io/Ai-Pomodoro-App/',
    instagram:   'https://www.instagram.com/xakhundx/',
    instagram2:  '', // Optional second creator handle URL
    contactForm: 'mailto:ammar.akhund2017@gmail.com?subject=Portfolio%20%26%20Venture%20Inquiry%20%E2%80%94%20Ammar%20Akhund',
  },

  /* ---------- Hero Presentation Deck Slides (shown on the interactive Hero stage) ---------- */
  heroSlides: [
    {
      code: 'SLIDE 01 // PUBLIC SERVICE',
      title: 'Government of Manitoba · NPN \'26 Nominee',
      metric: 'Dept. of Housing, Addictions & Homelessness · Winnipeg, MB',
    },
    {
      code: 'SLIDE 02 // LIVE AI PRODUCT',
      title: 'Focus Arena — 3D AI Pomodoro Workspace',
      metric: 'React 19 · Three.js · Gemini Personas · Free & Pro Tiers',
    },
    {
      code: 'SLIDE 03 // ML & ECONOMETRICS',
      title: '24h Electricity Price Forecaster & R Models',
      metric: 'XGBoost · scikit-learn · Power BI · UofM Econ & Stats \'27',
    },
    {
      code: 'SLIDE 04 // VENTURE & ADVISORY',
      title: 'AI Automation & BI Setups for Businesses',
      metric: 'DM Auto-Replies · Booking Flows · Executive KPI Dashboards',
    },
  ],

  /* ---------- 1. Proof Strip (4 key facts) ---------- */
  proof: [
    {
      value: 'Gov of MB',
      label: 'Public Service · Housing, Addictions & Homelessness · NPN \'26 Nominee',
    },
    {
      value: '4+ yrs',
      label: 'Operations & Client Experience · Loblaw (SAP ERP) & Manitoba Public Service',
    },
    {
      value: '7 Shipped',
      label: 'AI, ML & Data Builds · Focus Arena 3D, StatPulse ROI, MacroPulse, SaiyanVelocity, AESO Forecaster & BI',
    },
    {
      value: '1,050+',
      label: 'LinkedIn Followers · 8 Spoken Languages · UofM Economics & Statistics (\'27)',
    },
  ],

  /* ---------- 2. Projects (LinkedIn + GitHub) ---------- */
  projects: [
    {
      featured: true,
      title: 'Focus Arena — AI Pomodoro & 3D Workspace',
      date: 'Mar 2026 – Present',
      subtitle: 'Live Full-Stack AI Web App · Free & Pro Tiers',
      image: 'assets/projects/focus-arena.png',
      imageAlt: 'Screenshot of Focus Arena showing the 3D AI workspace, Whis mentor chat, and 25:00 focus timer',
      pitch: 'A gamified Pomodoro workspace where signing in with Gmail and typing any interest generates a custom 3D environment and AI mentor in real time.',
      aiFeature: 'Real-time AI theme & character persona generator (Dragon Ball, F1, Cyberpunk, etc.) paired with an interactive Three.js 3D core — zero user API key setup required.',
      bullets: [
        'Built AI mentor personas that organize tasks, coach focus blocks, and adapt to your chosen theme in real time.',
        'Engineered a +1,000 Power-Level gamification loop per completed task, milestone tracking, and a synced Spotify & Apple Music focus hub.',
        'Shipped with Gmail sign-in, user feedback pipeline, and a Focus Arena Pro tier ($2.99/mo).',
      ],
      tags: ['React 19', 'TypeScript', 'Three.js / R3F', 'Google Gemini', 'Vite', 'Apps Script'],
      liveUrl: 'https://xakhundx.github.io/Ai-Pomodoro-App/',
      codeUrl: 'https://github.com/xakhundx/Ai-Pomodoro-App',
    },
    {
      featured: false,
      title: 'AESO Renewable Integration & Price Forecaster',
      date: 'Jan 2026 · Co-built with Marwan Hamed',
      subtitle: 'Machine Learning & Energy Markets',
      image: '',
      imageAlt: '',
      glyph: 'ML · 24H',
      pitch: 'Machine learning pipeline predicting Net Load (Total Demand minus Wind/Solar) and Wholesale Electricity Price 24 hours ahead.',
      aiFeature: 'Gradient-boosted time-series forecasting (XGBoost & scikit-learn) trained on grid demand and renewable generation feeds.',
      bullets: [
        'Constructed an automated Python ingestion pipeline (requests, Pandas) pulling XML/CSV electricity market feeds.',
        'Structured time-series storage (AWS S3 / time-series DB) for rolling 24-hour ahead net-load and price-spike predictions.',
        'Combined engineering project co-developed with Marwan Hamed (@Maro1317).',
      ],
      tags: ['Python', 'XGBoost', 'scikit-learn', 'Pandas', 'Time Series', 'AWS S3'],
      liveUrl: '',
      codeUrl: 'https://github.com/Maro1317/AESO-NetLoad-Risk-Forecaster',
    },
    {
      featured: false,
      title: 'Sales Data & Executive KPI Dashboard',
      date: 'Dec 2025 – Jan 2026',
      subtitle: 'Business Intelligence & Visual Analytics',
      image: '',
      imageAlt: '',
      glyph: 'BI · KPI',
      pitch: 'Interactive analytics dashboard built to surface revenue trends, regional margins, and core KPIs from large retail datasets.',
      aiFeature: 'Automated Python (Pandas) data-cleaning & KPI aggregation pipeline feeding interactive Power BI and Tableau views.',
      bullets: [
        'Wrangled and standardized multi-category transaction records in Python (Pandas) to eliminate reporting bottlenecks.',
        'Designed interactive drill-down dashboards in Tableau and Power BI for seasonal trend and margin analysis.',
      ],
      tags: ['Python', 'Pandas', 'Power BI', 'Tableau', 'KPI Modeling'],
      liveUrl: '',
      codeUrl: '',
    },
    {
      featured: false,
      title: 'Statistical Analysis of Economic Data',
      date: 'Dec 2025 – Jan 2026',
      subtitle: 'Econometrics & Predictive Modeling in R',
      image: '',
      imageAlt: '',
      glyph: 'R · ANOVA',
      pitch: 'In-depth statistical breakdown and predictive modeling on retail and economic datasets using R.',
      aiFeature: 'Hypothesis testing, ANOVA, and multivariable regression modeling to isolate statistically significant drivers.',
      bullets: [
        'Conducted formal hypothesis testing and correlation analysis on a Superstore Sales dataset in R.',
        'Identified statistically significant predictors and built a baseline regression model for forecasting.',
      ],
      tags: ['R', 'Statistics', 'Econometrics', 'ANOVA', 'Regression'],
      liveUrl: '',
      codeUrl: '',
    },
    {
      featured: true,
      title: 'StatPulse ROI — Behavioral Habit & Spending Forecaster',
      date: 'Oct 2026',
      subtitle: 'Econometrics & Time-Series Regression · Zero-API Client Architecture',
      image: '',
      imageAlt: 'StatPulse ROI predictive behavioral analytics interface',
      glyph: 'STATS · ROI',
      pitch: 'Applies empirical econometric time-series models and Pearson regression to personal human behavior, testing whether cognitive focus hours and gym discipline suppress impulse spending.',
      aiFeature: 'Real-time Pearson correlation (r), OLS regression beta, and multi-year S&P 500 compounding future value simulator running 100% in local storage.',
      bullets: [
        'Deterministic mathematical engine computing Pearson r and marginal spending reduction per deep-work hour.',
        '10-Year compounding wealth simulator with dynamic annual yield sliders (3% to 14%).',
        'Built-in LinkedIn metric generator and dual-axis Chart.js habit trend visualization.',
      ],
      tags: ['Econometrics', 'Statistics', 'Chart.js', 'Time-Series', 'Vanilla JS', 'Tailwind'],
      liveUrl: 'https://xakhundx.github.io/statpulse-roi/',
      codeUrl: 'https://github.com/xakhundx/statpulse-roi',
    },
    {
      featured: false,
      title: 'MacroPulse — Macro Cost-Per-Gram & Meal Prep Optimizer',
      date: 'Oct 2026',
      subtitle: 'Microeconomic Nutrition Engine for Fitness & Bodybuilding (@akhund_fit)',
      image: '',
      imageAlt: 'MacroPulse grocery efficiency and meal prep optimization engine',
      glyph: 'MACRO · g/$',
      pitch: 'Microeconomic optimization engine maximizing daily protein yield per dollar (g/$) subject to daily caloric and weekly grocery budget constraints.',
      aiFeature: 'Calculates protein yield per dollar and cost per 25g serving across grocery staples, identifying the Pareto efficiency frontier to cut weekly food costs by over 28%.',
      bullets: [
        'Calculates real-time protein yield ($g/\\$$) and standardized cost per 25g serving across grocery staples.',
        'Interactive daily meal prep slider allocation with live calorie, protein, and cost breakdown charts.',
        'Calculates weekly savings vs. takeout baseline ($5,000+/yr) with 1-click @akhund_fit social post generator.',
      ],
      tags: ['Microeconomics', 'Optimization', 'Fitness Coaching', 'Nutrition', 'Chart.js'],
      liveUrl: 'https://xakhundx.github.io/macropulse/',
      codeUrl: 'https://github.com/xakhundx/macropulse',
    },
    {
      featured: false,
      title: 'SaiyanVelocity — Zero-API Power Level & Focus-Lift Tracker',
      date: 'Oct 2026',
      subtitle: 'Deterministic Dragon Ball Math Engine for Deep Work & Athletic Training',
      image: '',
      imageAlt: 'SaiyanVelocity Dragon Ball power level and focus velocity engine',
      glyph: 'SAIYAN · 9000+',
      pitch: 'Architectural evolution of the Dragon Ball Pomodoro focus app, replacing third-party LLM API keys with a 100% client-side deterministic mathematical progression engine.',
      aiFeature: 'Base 9,000 power equation mapping cognitive hours, gym sets, and Zenkai consistency streaks into Saiyan transformations (Base -> Kaio-Ken -> Super Saiyan 1-3 -> Ultra Instinct).',
      bullets: [
        'Zero-API offline architecture with native Web Audio API synthesized focus chimes.',
        'GPU-accelerated HTML5 Canvas Ki aura particle field that intensifies with focus streaks.',
        'Dual-axis Chart.js exponential power trajectory visualization with 1-click LinkedIn engineering showcase.',
      ],
      tags: ['Client-Side Math', 'Web Audio API', 'HTML5 Canvas', 'Pomodoro', 'Dragon Ball'],
      liveUrl: 'https://xakhundx.github.io/saiyan-velocity/',
      codeUrl: 'https://github.com/xakhundx/saiyan-velocity',
    },
  ],

  /* ---------- Upcoming Lab Builds (Phase Playbook Pipeline) ---------- */
  upcomingProjects: [
    {
      slot: 'PHASE // 02',
      status: 'Curating Prompts',
      title: 'Build Apps with AI — 50 Prompt Pack (Gumroad)',
      desc: 'Curated prompt collection for planning, coding, debugging, and UI architecture based on real Antigravity workflows.',
    },
    {
      slot: 'PHASE // 04',
      status: 'Outreach Demo Ready',
      title: 'Winnipeg Local Business AI Intake & DM Assistant',
      desc: 'Automated 24/7 Instagram DM responder, appointment booking reminder, and Google review triage engine for Winnipeg businesses.',
    },
    {
      slot: 'PHASE // 03',
      status: 'Engine Setup',
      title: 'Micro-Game Prototype (Godot Engine & itch.io)',
      desc: 'Fast-paced single-mechanic 2D indie micro-game monetized on itch.io and Steam.',
    },
  ],

  /* ---------- 3. Experience, Education & Community (from LinkedIn) ---------- */
  experience: [
    {
      category: 'Public Service & Industry',
      role: 'Administrative Assistant / Office Clerk',
      org: 'Government of Manitoba — Dept. of Housing, Addictions & Homelessness',
      period: 'Jul 2026 – Present',
      location: 'Winnipeg, MB',
      badge: 'NPN \'26 Conference Nominee',
      bullets: [
        'Serving Manitobans across diverse communities within the Department of Housing, Addictions & Homelessness.',
        'Nominated to attend the 2026 New Professionals Network (NPN) conference — "A Future-Fit Public Service" — engaging with senior provincial leadership.',
        'Coordinating administrative workflows, records, and frontline public service communication with accuracy and discretion.',
      ],
    },
    {
      category: 'Public Service & Industry',
      role: 'Customer Service Representative',
      org: 'Loblaw Companies Limited (Real Canadian Superstore)',
      period: 'Sep 2022 – Present (nearly 4 yrs)',
      location: 'Winnipeg, MB',
      badge: 'SAP ERP & Cash Operations',
      bullets: [
        'Processed high-volume financial transactions and balanced daily till records with strict accuracy using SAP ERP systems.',
        'Resolved complex client issues and de-escalated conflicts to maintain customer retention and service standards.',
        'Maintained full compliance with cash-handling, lottery (WCLC certified), and inventory management protocols.',
      ],
    },
    {
      category: 'Fellowships & Simulations',
      role: 'Virtual Job Simulations — Finance, Risk & Data Audit',
      org: 'Forage · Bank of America, Goldman Sachs & KPMG',
      period: 'Feb 2026 – Present',
      location: 'Remote',
      badge: 'Bank of America Certified',
      bullets: [
        'Bank of America (The Private Bank): Analyzed client portfolios and recommended tailored asset-allocation strategies to meet long-term wealth goals.',
        'Goldman Sachs: Assessed operational risks and identified system vulnerabilities to protect sensitive financial data.',
        'KPMG: Conducted data-quality reviews and auditing checks on large datasets for compliance and accuracy in financial reporting.',
      ],
    },
    {
      category: 'Fellowships & Simulations',
      role: 'Software Engineering / AI Fellow & Campus Builder',
      org: 'Headstarter · UofM devClub, UMAI, UMPPC & CSSA',
      period: '2023 – Present',
      location: 'Winnipeg, MB & International',
      badge: 'Hackathon \'24 · Game Jam \'24',
      bullets: [
        'Built software and AI projects through the Headstarter fellowship and University of Manitoba computer science & AI communities.',
        'Competed in UofM Hackathon \'24 and Game Jam \'24 while collaborating across UMAI, UMPPC, CSSA, and devClub.',
      ],
    },
    {
      category: 'Coaching & Creator',
      role: 'Personal Trainer & Digital Creator',
      org: 'Freelance · @xakhundx',
      period: 'May 2025 – Present',
      location: 'Winnipeg, MB',
      badge: '1,050+ LinkedIn · 2 IG Accounts',
      bullets: [
        'Built trusting coaching relationships by tailoring fitness and nutrition plans to each client\'s lifestyle and schedule.',
        'Maintained high client retention through structured check-ins, accountability, and digital content creation.',
      ],
    },
  ],

  education: {
    school: 'University of Manitoba',
    degree: 'Bachelor of Arts — Economics Major, Statistics Minor',
    period: '2023 – 2027 (Entering Final Year)',
    location: 'Winnipeg, MB',
    coursework: ['Econometrics', 'Regression Analysis (ANOVA)', 'Time Series Forecasting', 'Probability Theory'],
    societies: ['UMAI (UofM AI)', 'UMPPC (Programming Projects Club)', 'CSSA', 'devClub', 'Hackathon \'24', 'Game Jam \'24'],
    prior: 'Cedar College (Karachi, 2018 – 2020)',
  },

  community: [
    { role: 'Ambassador & Concierge', org: 'Réseau Compassion Network (Assiniboine Park Union)', period: 'Dec 2025 – Present · Winnipeg, MB' },
    { role: 'Security Management Volunteer', org: 'Manitoba Hydro', period: 'Nov 2025 · Winnipeg, MB' },
    { role: 'Research Analyst (COVID-19 Case Study)', org: 'Aga Khan University', period: 'Jul 2019 – Jul 2020 · Karachi, Pakistan' },
    { role: 'Community & Healthcare Volunteer', org: 'The Indus Hospital · The Kidney Centre · Ziauddin · Dar-ul-Sukun · WWF-Pakistan', period: '2018 – 2022 · Karachi, Pakistan' },
  ],

  /* ---------- 4. Periodic Table of Skills (edit this array to add/remove tiles) ---------- */
  skills: [
    // Group: 'lang' — Data & Programming Languages (White tiles)
    { sym: 'Py', name: 'Python',        group: 'lang', groupLabel: 'Data & Lang', detail: 'Pandas, requests, scikit-learn & automated ETL pipelines' },
    { sym: 'R',  name: 'R Stats',       group: 'lang', groupLabel: 'Data & Lang', detail: 'Hypothesis testing, ANOVA & econometric regression' },
    { sym: 'Sq', name: 'SQL',           group: 'lang', groupLabel: 'Data & Lang', detail: 'Relational querying, joins, aggregations & reporting' },
    { sym: 'Ts', name: 'TypeScript',    group: 'lang', groupLabel: 'Data & Lang', detail: 'Typed React 19 & full-stack web apps (Focus Arena)' },
    { sym: 'Js', name: 'JavaScript',    group: 'lang', groupLabel: 'Data & Lang', detail: 'ES2024, WebGL/DOM, async APIs & interactive UI' },
    { sym: 'C',  name: 'C Language',    group: 'lang', groupLabel: 'Data & Lang', detail: 'Certified (Udemy, Nov 2024) — memory & systems foundations' },
    { sym: 'Jv', name: 'Java',          group: 'lang', groupLabel: 'Data & Lang', detail: 'Object-oriented programming & algorithmic structures' },
    { sym: 'Hc', name: 'HTML / CSS',    group: 'lang', groupLabel: 'Data & Lang', detail: 'Semantic markup, 3D transforms & responsive grids' },

    // Group: 'ai' — AI, Machine Learning & BI Tools (Liquid silver tiles)
    { sym: 'Gm', name: 'Gemini API',    group: 'ai',   groupLabel: 'AI, ML & BI', detail: 'Real-time generative AI personas & workspace synthesis' },
    { sym: 'Cl', name: 'Claude / LLMs', group: 'ai',   groupLabel: 'AI, ML & BI', detail: 'Agentic workflows, prompt engineering & AI automation' },
    { sym: 'Xg', name: 'XGBoost',       group: 'ai',   groupLabel: 'AI, ML & BI', detail: 'Gradient-boosted trees for 24h electricity forecasting' },
    { sym: 'Sk', name: 'scikit-learn',  group: 'ai',   groupLabel: 'AI, ML & BI', detail: 'Feature engineering, regression & model validation' },
    { sym: 'Pd', name: 'Pandas',        group: 'ai',   groupLabel: 'AI, ML & BI', detail: 'ETL pipelines, XML/CSV ingestion & time-series wrangling' },
    { sym: 'Pb', name: 'Power BI',      group: 'ai',   groupLabel: 'AI, ML & BI', detail: 'Certified (Oct 2025) — executive KPI & margin dashboards' },
    { sym: 'Tb', name: 'Tableau',       group: 'ai',   groupLabel: 'AI, ML & BI', detail: 'Visual analytics, drill-downs & executive storytelling' },
    { sym: '3D', name: 'Three.js / R3F',group: 'ai',   groupLabel: 'AI, ML & BI', detail: 'Interactive 3D web scenes in React Three Fiber' },

    // Group: 'econ' — Economics, Finance & Enterprise (Graphite glass tiles)
    { sym: 'Ec', name: 'Econometrics',  group: 'econ', groupLabel: 'Econ & Fin',  detail: 'Causal inference, multivariable regression & policy analysis' },
    { sym: 'Tf', name: 'Time Series',   group: 'econ', groupLabel: 'Econ & Fin',  detail: '24h electricity load/price & seasonal demand forecasting' },
    { sym: 'An', name: 'ANOVA / Reg',   group: 'econ', groupLabel: 'Econ & Fin',  detail: 'Variance decomposition, p-values & hypothesis testing' },
    { sym: 'Fm', name: 'Fin Modeling',  group: 'econ', groupLabel: 'Econ & Fin',  detail: 'Private bank portfolio allocation & scenario modeling' },
    { sym: 'Rk', name: 'Risk & KYC',    group: 'econ', groupLabel: 'Econ & Fin',  detail: 'Operational risk, KYC/AML compliance & vulnerability audits' },
    { sym: 'Sp', name: 'SAP ERP',       group: 'econ', groupLabel: 'Econ & Fin',  detail: '4+ yrs enterprise transaction & inventory reconciliation' },
    { sym: 'Ex', name: 'Adv Excel',     group: 'econ', groupLabel: 'Econ & Fin',  detail: 'VLOOKUP/XLOOKUP, Pivot Tables & financial modeling' },
    { sym: 'Au', name: 'Data Auditing', group: 'econ', groupLabel: 'Econ & Fin',  detail: 'Large-dataset quality & compliance verification (KPMG sim)' },

    // Group: 'ops' — Public Service, Strategy & Operations (Obsidian tiles)
    { sym: 'Ps', name: 'Public Service',group: 'ops',  groupLabel: 'Public & Ops', detail: 'Government of Manitoba — Housing, Addictions & Homelessness' },
    { sym: 'Cr', name: 'Client Rel',    group: 'ops',  groupLabel: 'Public & Ops', detail: '4+ years high-volume client retention & frontline service' },
    { sym: 'Sc', name: 'Strategic Comm',group: 'ops',  groupLabel: 'Public & Ops', detail: 'Cross-cultural communication across 8 spoken languages' },
    { sym: 'Cf', name: 'De-escalation', group: 'ops',  groupLabel: 'Public & Ops', detail: 'High-pressure conflict resolution & frontline problem solving' },
    { sym: 'Ld', name: 'Leadership',    group: 'ops',  groupLabel: 'Public & Ops', detail: 'NPN \'26 nominee, campus tech clubs & personal coaching' },
    { sym: 'Gh', name: 'Git / Pages',   group: 'ops',  groupLabel: 'Public & Ops', detail: 'Version control, CI/CD & cloud/static web deployment' },
  ],

  certifications: [
    {
      sysId: 'CERT // 01',
      name: 'Bank of America — The Private Bank Job Simulation',
      org: 'Forage · Bank of America',
      date: 'Feb 2026',
      id: '47GYdFA26grz6tmao',
      scope: 'Client portfolio analysis, private wealth asset allocation & strategic advisory.',
    },
    {
      sysId: 'CERT // 02',
      name: 'Analyzing & Visualizing Data with Microsoft Power BI',
      org: 'Udemy · Business Intelligence',
      date: 'Oct 2025',
      id: 'VERIFIED-PBI-2025',
      scope: 'DAX measures, data modeling, executive KPI dashboards & visual storytelling.',
    },
    {
      sysId: 'CERT // 03',
      name: 'C Programming For Beginners — Master the C Language',
      org: 'Udemy · Systems Programming',
      date: 'Nov 2024',
      id: 'VERIFIED-CLANG-2024',
      scope: 'Pointers, memory management, control structures & low-level compilation.',
    },
    {
      sysId: 'CERT // 04',
      name: 'Lottery Sales Agent Certification',
      org: 'Western Canada Lottery Corporation (WCLC)',
      date: 'Apr 2026',
      id: '202603290004',
      scope: 'Regulatory compliance, terminal operations & financial audit verification.',
    },
    {
      sysId: 'CERT // 05',
      name: 'WHMIS (GHS) Workplace Safety Certification',
      org: 'eSafetyFirst Canada',
      date: 'Apr 2026 – Apr 2029',
      id: '292-168704',
      scope: 'Canadian workplace safety standards, hazard classification & operational compliance.',
    },
  ],

  languages: [
    { name: 'English', level: 'Native / Bilingual', pct: 100 },
    { name: 'Urdu',    level: 'Native / Bilingual', pct: 100 },
    { name: 'Hindi',   level: 'Full Professional',  pct: 92 },
    { name: 'Sindhi',  level: 'Professional Working', pct: 80 },
    { name: 'Punjabi', level: 'Working Proficiency',  pct: 68 },
    { name: 'German',  level: 'A1 Certified',         pct: 42 },
    { name: 'French',  level: 'Elementary (A2)',      pct: 40 },
    { name: 'Arabic',  level: 'Elementary',           pct: 32 },
  ],

  /* ---------- 5. Horizontal Journey Timeline ---------- */
  journey: [
    {
      step: '01',
      date: '2018 – 2022 · Karachi',
      title: 'Research & Community Roots',
      body: 'Completed studies at Cedar College, served as a COVID-19 Case Study Research Analyst at Aga Khan University, and volunteered across The Indus Hospital, The Kidney Centre, Dar-ul-Sukun, and WWF-Pakistan.',
    },
    {
      step: '02',
      date: 'Sep 2022 · Winnipeg, MB',
      title: 'International Student & Loblaw Operations',
      body: 'Moved to Winnipeg and joined Loblaw (Real Canadian Superstore) in Customer Service — spending nearly 4 years mastering SAP ERP reconciliation, cash compliance, and high-pressure client resolution.',
    },
    {
      step: '03',
      date: '2023 – 2025 · UofM',
      title: 'Economics, Statistics & Campus Tech',
      body: 'Started B.A. in Economics & Statistics at the University of Manitoba. Joined UMAI, UMPPC, CSSA & devClub, competed in Hackathon \'24 and Game Jam \'24, and earned certifications in C and Power BI.',
    },
    {
      step: '04',
      date: 'Dec 2025 – Feb 2026',
      title: 'ML Forecaster, BI Dashboards & Finance Sims',
      body: 'Co-built the 24-hour AESO Wholesale Electricity Price Forecaster (XGBoost) with Marwan Hamed, shipped R econometric models & Power BI/Tableau dashboards, and completed Goldman Sachs, Bank of America & KPMG simulations.',
    },
    {
      step: '05',
      date: 'Mar – Apr 2026',
      title: 'Shipped Focus Arena (AI 3D Workspace)',
      body: 'Designed and launched Focus Arena — a live React 19, Three.js & Gemini focus app with Gmail sign-in, real-time 3D theme generation, AI mentors, power-level gamification, and a Pro tier.',
    },
    {
      step: '06',
      date: 'Jul 2026 – Present',
      title: 'Government of Manitoba & Final Year at UofM',
      body: 'Joined the Department of Housing, Addictions & Homelessness as an Administrative Assistant / Office Clerk and was nominated for the 2026 New Professionals Network (NPN) "A Future-Fit Public Service" conference.',
    },
  ],

  /* ---------- 6. Venture Studio, AI Services & Career Opportunities ---------- */
  services: {
    eyebrow: '05 · Venture Studio, AI Automation & Advisory',
    headline: 'Building AI systems for businesses & turning complex data into policy and executive decisions.',
    sub: 'Whether you are a business owner looking to automate client workflows with AI, a founder looking to ship an interactive web product, or a team hiring for Data, Economics, Finance & Public Policy roles.',
    items: [
      {
        tag: 'VENTURE // 01 · AI Automation Agency Setups',
        title: 'Small-Business AI Workflows & Agents',
        desc: 'Done-for-you AI setups that save hours every week: instant Instagram/web DM auto-replies, automated booking & appointment reminders, smart Google review responses, and AI lead intake.',
        deliverables: ['24/7 DM & Lead Auto-Responder', 'Automated Booking & Follow-up Flows', 'Custom AI Knowledge Base Setup'],
      },
      {
        tag: 'VENTURE // 02 · Custom Web, 3D & AI Products',
        title: 'Full-Stack Interactive Apps & MVPs',
        desc: 'From 3D AI workspaces like Focus Arena to custom client portals, calculators, and internal tools — architected in React, TypeScript, Three.js, and Gemini/Claude APIs.',
        deliverables: ['AI-Native Web Apps & SaaS MVPs', 'Interactive 3D / Liquid-Glass UI', 'End-to-End Cloud & GitHub Deployment'],
      },
      {
        tag: 'ADVISORY // 03 · Data, Economics & Public Sector',
        title: 'Analytics, Forecasting & Executive BI',
        desc: 'Econometric and statistical modeling in R & Python, time-series demand/price forecasting (XGBoost), executive Power BI & Tableau dashboards, and structured public-sector reporting.',
        deliverables: ['Power BI & Tableau KPI Dashboards', 'Python / R Econometric & ML Models', 'Public Policy & Financial Data Audits'],
      },
    ],
  },
};
