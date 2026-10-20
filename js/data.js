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
    contactForm: 'mailto:ammar.akhund2017@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Ammar%20Akhund',
  },

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
      value: '4 Shipped',
      label: 'AI, ML & Data Builds · Focus Arena 3D App, AESO Price Forecaster, BI & R Models',
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
      aiFeature: 'Real-time AI theme & character persona generator (Dragon Ball, F1, Cyberpunk, etc.) paired with an interactive Three.js 3D core — no user API key required.',
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
      date: 'Jan 2026 · With Marwan Hamed',
      subtitle: 'Machine Learning & Energy Markets',
      image: '',
      imageAlt: '',
      glyph: 'ML · 24H',
      pitch: 'Machine learning pipeline predicting Net Load (Total Demand minus Wind/Solar) and Wholesale Electricity Price 24 hours ahead.',
      aiFeature: 'Gradient-boosted time-series forecasting (XGBoost & scikit-learn) trained on grid demand and renewable generation feeds.',
      bullets: [
        'Constructed an automated Python ingestion pipeline (requests, Pandas) pulling XML/CSV electricity market feeds.',
        'Structured time-series storage (AWS S3 / time-series DB) for rolling 24-hour ahead net-load and price-spike predictions.',
        'Co-developed with Marwan Hamed (@Maro1317).',
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
    { sym: 'Py', name: 'Python',        group: 'lang', detail: 'Pandas, requests, scikit-learn, data pipelines' },
    { sym: 'R',  name: 'R Stats',       group: 'lang', detail: 'Hypothesis testing, ANOVA, econometric modeling' },
    { sym: 'Sq', name: 'SQL',           group: 'lang', detail: 'Relational querying, aggregations & reporting' },
    { sym: 'Ts', name: 'TypeScript',    group: 'lang', detail: 'Typed React & full-stack web apps (Focus Arena)' },
    { sym: 'Js', name: 'JavaScript',    group: 'lang', detail: 'ES2024, DOM, async APIs & interactive UI' },
    { sym: 'C',  name: 'C Language',    group: 'lang', detail: 'Certified (Udemy, Nov 2024) — systems & memory basics' },
    { sym: 'Jv', name: 'Java',          group: 'lang', detail: 'Object-oriented programming & data structures' },
    { sym: 'Hc', name: 'HTML / CSS',    group: 'lang', detail: 'Semantic markup, responsive grid & accessibility' },

    // Group: 'ai' — AI, Machine Learning & BI Tools (Light grey tiles)
    { sym: 'Gm', name: 'Gemini API',    group: 'ai',   detail: 'Real-time generative AI personas & workspace synthesis' },
    { sym: 'Cl', name: 'Claude / LLMs', group: 'ai',   detail: 'Agentic coding, prompt engineering & LLM workflows' },
    { sym: 'Xg', name: 'XGBoost',       group: 'ai',   detail: 'Gradient-boosted trees for time-series forecasting' },
    { sym: 'Sk', name: 'scikit-learn',  group: 'ai',   detail: 'Regression, classification & model validation' },
    { sym: 'Pd', name: 'Pandas',        group: 'ai',   detail: 'ETL, XML/CSV ingestion & time-series wrangling' },
    { sym: 'Pb', name: 'Power BI',      group: 'ai',   detail: 'Certified (Oct 2025) — executive KPI dashboards' },
    { sym: 'Tb', name: 'Tableau',       group: 'ai',   detail: 'Visual analytics & interactive storytelling' },
    { sym: '3D', name: 'Three.js / R3F',group: 'ai',   detail: 'Interactive 3D web scenes in React Three Fiber' },

    // Group: 'econ' — Economics, Finance & Enterprise (Dark grey tiles)
    { sym: 'Ec', name: 'Econometrics',  group: 'econ', detail: 'Causal inference, regression & economic modeling' },
    { sym: 'Tf', name: 'Time Series',   group: 'econ', detail: '24h electricity load/price & demand forecasting' },
    { sym: 'An', name: 'ANOVA / Reg',   group: 'econ', detail: 'Variance analysis, p-values & hypothesis testing' },
    { sym: 'Fm', name: 'Fin Modeling',  group: 'econ', detail: 'Portfolio allocation & scenario modeling' },
    { sym: 'Rk', name: 'Risk & KYC',    group: 'econ', detail: 'Operational risk, KYC/AML compliance & auditing' },
    { sym: 'Sp', name: 'SAP ERP',       group: 'econ', detail: 'Enterprise transaction & inventory reconciliation' },
    { sym: 'Ex', name: 'Adv Excel',     group: 'econ', detail: 'VLOOKUP/XLOOKUP, Pivot Tables & financial sheets' },
    { sym: 'Au', name: 'Data Auditing', group: 'econ', detail: 'Large-dataset quality & compliance verification' },

    // Group: 'ops' — Public Service, Strategy & Operations (Outline tiles)
    { sym: 'Ps', name: 'Public Service',group: 'ops',  detail: 'Government of Manitoba — Housing, Addictions & Homelessness' },
    { sym: 'Cr', name: 'Client Rel',    group: 'ops',  detail: '4+ years high-volume client retention & service' },
    { sym: 'Sc', name: 'Strategic Comm',group: 'ops',  detail: 'Cross-cultural communication across 8 languages' },
    { sym: 'Cf', name: 'De-escalation', group: 'ops',  detail: 'Frontline conflict resolution & problem solving' },
    { sym: 'Ld', name: 'Leadership',    group: 'ops',  detail: 'NPN \'26 nominee, campus clubs & coaching' },
    { sym: 'Gh', name: 'Git / Pages',   group: 'ops',  detail: 'Version control, CI/CD & static web deployment' },
  ],

  certifications: [
    { name: 'Bank of America — The Private Bank Job Simulation', org: 'Forage', date: 'Feb 2026', id: '47GYdFA26grz6tmao' },
    { name: 'Analyzing and Visualizing Data with Microsoft Power BI', org: 'Udemy', date: 'Oct 2025', id: '' },
    { name: 'C Programming For Beginners — Master the C Language', org: 'Udemy', date: 'Nov 2024', id: '' },
    { name: 'Lottery Sales Agent Certification', org: 'WCLC', date: 'Apr 2026', id: '202603290004' },
    { name: 'WHMIS (GHS) Workplace Safety', org: 'eSafetyFirst Canada', date: 'Apr 2026 – Apr 2029', id: '292-168704' },
  ],

  languages: [
    { name: 'English', level: 'Native / Bilingual' },
    { name: 'Urdu',    level: 'Native / Bilingual' },
    { name: 'Hindi',   level: 'Full Professional' },
    { name: 'Sindhi',  level: 'Professional Working' },
    { name: 'Punjabi', level: 'Working' },
    { name: 'German',  level: 'A1 Certified' },
    { name: 'French',  level: 'Elementary (A2)' },
    { name: 'Arabic',  level: 'Elementary' },
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
      body: 'Co-built the 24-hour AESO Wholesale Electricity Price Forecaster (XGBoost), shipped R econometric models & Power BI/Tableau dashboards, and completed Goldman Sachs, Bank of America & KPMG simulations.',
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

  /* ---------- 6. Services & Opportunities ---------- */
  services: {
    eyebrow: 'Collaborate · Hire · Consult',
    headline: 'Data, economics & public-sector impact — plus custom AI setups for small businesses.',
    sub: 'Entering my final year at the University of Manitoba (2027) while serving at the Government of Manitoba and shipping AI/data tools.',
    items: [
      {
        tag: '01 · Data, Economics & Policy Roles',
        title: 'Analytics, Forecasting & Reporting',
        desc: 'Econometric and statistical modeling in R & Python, executive KPI dashboards in Power BI & Tableau, and structured public/financial reporting.',
      },
      {
        tag: '02 · Small-Business AI Setups',
        title: 'DM Auto-Replies, Reminders & Reviews',
        desc: 'Practical AI automations for local businesses and creators: instant DM auto-replies, booking reminders, review responses, and lead intake.',
      },
      {
        tag: '03 · Custom Web & AI Products',
        title: 'Interactive Tools Built & Shipped',
        desc: 'From 3D AI workspaces like Focus Arena to custom internal calculators and dashboards — designed, deployed, and maintained end-to-end.',
      },
    ],
  },
};
