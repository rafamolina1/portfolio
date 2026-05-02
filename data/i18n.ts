export const locales = ["pt-BR", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const languageOptions: Array<{ locale: Locale; short: string; label: string }> = [
  { locale: "pt-BR", short: "PT", label: "Português BR" },
  { locale: "en", short: "EN", label: "English" },
  { locale: "es", short: "ES", label: "Español" },
];

export type LocalizedProject = {
  title: string;
  category: string;
  summary: string;
  problem: string;
  contribution: string;
  highlights: string[];
  stack: string[];
  image: string;
  github: string;
  deploy?: string;
  status: string;
  accent: "cyan" | "amber" | "green";
};

export type PortfolioContent = {
  aria: {
    mainNav: string;
    sectionsNav: string;
    heroActions: string;
    heroSummary: string;
    commandPanel: string;
    projectImage: string;
    openProject: string;
    openGithub: string;
    openDeploy: string;
    autonomusMap: string;
    languageSwitcher: string;
  };
  navItems: Array<{ href: string; label: string }>;
  hero: {
    availability: string;
    role: string;
    lead: string;
    support: string;
    resume: string;
    email: string;
    contact: string;
    stats: Array<{ value: string; label: string }>;
  };
  command: {
    operatorLabel: string;
    operatorDescription: string;
    productionTitle: string;
    productionSignals: string[];
    coreStackTitle: string;
    coreStack: string[];
    focusTitle: string;
    focusItems: string[];
  };
  trust: {
    kicker: string;
    title: string;
    description: string;
    signals: Array<{ label: string; value: string; detail: string; href?: string }>;
  };
  systems: {
    kicker: string;
    title: string;
    description: string;
    problem: string;
    contribution: string;
    github: string;
    deploy: string;
    projects: LocalizedProject[];
  };
  autonomus: {
    kicker: string;
    title: string;
    description: string;
    lead: string;
    steps: Array<[string, string]>;
    mediaButton: string;
    mapTitle: string;
    nodes: string[];
    footerTags: string[];
  };
  capabilities: {
    kicker: string;
    title: string;
    description: string;
    groups: Array<{ title: string; description: string; items: string[] }>;
  };
  about: {
    kicker: string;
    title: string;
    description: string;
    paragraphs: string[];
    principles: string[];
  };
  credentials: {
    kicker: string;
    title: string;
    description: string;
    verify: string;
    note: string;
    items: Array<{ title: string; description: string; href?: string }>;
  };
  education: {
    kicker: string;
    title: string;
    description: string;
    educationTitle: string;
    leadershipTitle: string;
    items: Array<{ period: string; title: string; description: string }>;
    leadership: Array<{ period: string; title: string; description: string }>;
  };
  finalCta: {
    status: string;
    title: string;
    description: string;
    email: string;
    resume: string;
  };
  footer: {
    resumeEn: string;
  };
  emailModal: {
    kicker: string;
    title: string;
    description: string;
    addressLabel: string;
    open: string;
    copy: string;
    copied: string;
    close: string;
    closeWindow: string;
  };
};

const mediaHref =
  "https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml";

const oracleHref =
  "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BDFB9AB79C56F27589ACAF192371337C6018A7054703F016272EF03BB4A76141";

const ibmPrivacyHref = "https://courses.skillsbuild.skillsnetwork.site/certificates/bb448a693e31473baa6fb78158bcc8f7";
const ibmMlHref = "https://courses.skillsbuild.skillsnetwork.site/certificates/3fb5ed10feed4d168371f409380546a7";

export const dictionary: Record<Locale, PortfolioContent> = {
  "pt-BR": {
    aria: {
      mainNav: "Navegação principal",
      sectionsNav: "Seções do portfólio",
      heroActions: "Ações principais",
      heroSummary: "Resumo profissional",
      commandPanel: "Painel visual Command Center",
      projectImage: "Screenshot do projeto",
      openProject: "Abrir",
      openGithub: "Abrir repositório GitHub do projeto",
      openDeploy: "Abrir deploy do projeto",
      autonomusMap: "Mapa de sistema Autonomus",
      languageSwitcher: "Selecionar idioma",
    },
    navItems: [
      { href: "#signals", label: "Signals" },
      { href: "#systems", label: "Systems" },
      { href: "#autonomus", label: "Autonomus" },
      { href: "#capabilities", label: "Capabilities" },
      { href: "#about", label: "Narrative" },
    ],
    hero: {
      availability: "Disponível para oportunidades estratégicas",
      role: "Desenvolvedor Full Stack",
      lead:
        "Desenvolvedor Full Stack focado em construir produtos web e mobile completos, APIs e integrações que resolvem problemas reais de negócio.",
      support:
        "Trabalho como full stack da interface web e mobile ao backend, usando React, Next.js, Flutter, Node.js, Laravel e bancos de dados para conectar experiência de uso, regra de negócio, automações e deploy em aplicações prontas para produção.",
      resume: "Baixar currículo",
      email: "E-mail",
      contact: "Contato",
      stats: [
        { value: "5", label: "sistemas selecionados" },
        { value: "2", label: "apps mobile em produção" },
        { value: "C2", label: "inglês Cambridge" },
      ],
    },
    command: {
      operatorLabel: "Operator",
      operatorDescription: "Full stack product engineering",
      productionTitle: "Production Signals",
      productionSignals: [
        "Autonomus em produção",
        "Dois apps Flutter publicados",
        "Semifinalista no Rocket da Globo",
        "Matéria exclusiva publicada na Globo",
        "Palestrante em eventos de tecnologia",
        "Certificações Oracle e IBM",
      ],
      coreStackTitle: "Core Stack",
      coreStack: ["React", "Next.js", "Flutter", "Node.js", "PostgreSQL", "Laravel"],
      focusTitle: "Current Focus",
      focusItems: ["Produtos web", "Mobile", "APIs", "Integrações"],
    },
    trust: {
      kicker: "Trust Signals",
      title: "Credibilidade que aparece antes do pitch.",
      description: "Sinais verificáveis de produto em produção, mídia, certificações e operação internacional.",
      signals: [
        {
          label: "Rocket da Globo",
          value: "Semifinalista",
          detail:
            "Autonomus foi semifinalista no Rocket da Globo, o maior reality show de startups do Brasil, e teve matéria exclusiva publicada na Globo.",
          href: mediaHref,
        },
        {
          label: "Cambridge C2",
          value: "Inglês proficiente",
          detail: "Certificação internacional de fluência emitida pela University of Cambridge.",
        },
        {
          label: "Oracle Cloud Infrastructure",
          value: "Cloud",
          detail: "Certificação concluída em fundamentos de infraestrutura Oracle.",
          href: oracleHref,
        },
        {
          label: "IBM Data Privacy",
          value: "Governança",
          detail: "Fundamentos de privacidade de dados e responsabilidade operacional.",
          href: ibmPrivacyHref,
        },
        {
          label: "IBM ML with Python",
          value: "IA e dados",
          detail: "Machine Learning aplicado com Python pela IBM SkillsBuild.",
          href: ibmMlHref,
        },
        {
          label: "Remote International",
          value: "Node.js + English",
          detail: "Experiência remota internacional usando Node.js e inglês no dia a dia.",
        },
      ],
    },
    systems: {
      kicker: "Selected Systems",
      title: "Cinco cases tratados como sistemas reais.",
      description:
        "Todos os projetos recebem a mesma profundidade: problema, contribuição, arquitetura, highlights técnicos, stack, GitHub e deploy quando existe.",
      problem: "Problema",
      contribution: "Contribuição",
      github: "GitHub",
      deploy: "Deploy",
      projects: [
        {
          title: "Watch Dog",
          category: "Observabilidade / Full Stack",
          summary:
            "Aplicação full stack de monitoramento de uptime para acompanhar serviços web, persistir estado em Redis e disparar alertas automatizados.",
          problem:
            "Monitorar serviços de forma recorrente, manter leitura rápida do último estado e evitar alertas duplicados durante o mesmo incidente.",
          contribution:
            "Projetei e implementei a solução ponta a ponta com frontend em React, API em Fastify, persistência em Redis, worker agendado com node-cron e automações via n8n.",
          highlights: [
            "Checagens HTTP com timeout configurável e leitura por GET /status",
            "Alerta disparado apenas na transição real online para offline",
            "Lock distribuído em Redis para evitar monitoramento duplicado",
            "Deploy validado com Docker, Railway, n8n e envio de e-mail via Brevo",
          ],
          stack: ["React", "TypeScript", "Node.js", "Redis", "Docker", "Railway", "n8n"],
          image: "/dashboard-filled.png",
          github: "https://github.com/rafamolina1/Watch-Dog",
          status: "Production-ready monitor",
          accent: "cyan",
        },
        {
          title: "Barber Manager",
          category: "SaaS multi-tenant",
          summary:
            "Plataforma multi-tenant para gestão de interações via WhatsApp, isolamento por cliente, métricas de operação e integração com workflows externos.",
          problem:
            "Permitir que cada operação tenha métricas, integrações e dados próprios sem misturar informações entre organizações diferentes.",
          contribution:
            "Desenvolvi a aplicação com Next.js App Router, TypeScript, Clerk, Prisma e Postgres, estruturando autenticação por organização e integração com n8n.",
          highlights: [
            "Métricas, gráficos e analytics separados por organização",
            "Fluxo multi-tenant baseado em organizationId do Clerk",
            "Webhook para persistir organizações e garantir isolamento entre clientes",
            "Integração com n8n para workflows e dados do WhatsApp",
          ],
          stack: ["Next.js", "TypeScript", "Clerk", "PostgreSQL", "Prisma", "n8n"],
          image: "/barber-dashboard.png",
          github: "https://github.com/rafamolina1/app-apontamento",
          status: "Tenant-isolated SaaS",
          accent: "amber",
        },
        {
          title: "Habit Breaker",
          category: "Saúde digital com IA",
          summary:
            "Aplicação web para apoiar pessoas que estão parando de fumar, com progresso em tempo real, marcos fisiológicos e coach conversacional.",
          problem:
            "Transformar a decisão de parar de fumar em algo visual, mensurável e acionável no dia a dia, sem exigir cadastro ou backend tradicional.",
          contribution:
            "Desenvolvi a SPA em React com persistência local, painel de progresso, lembretes no navegador e integração com Groq para apoio em momentos de fissura.",
          highlights: [
            "Contador em tempo real desde a data e hora em que a pessoa parou",
            "Economia acumulada, cigarros evitados e estimativa de tempo recuperado",
            "Histórico do usuário e do chat persistidos em localStorage",
            "Integração com Groq via proxy local e rewrite no deploy",
          ],
          stack: ["JavaScript", "React", "Vite", "Groq"],
          image: "/habit-breaker-20260405.png",
          github: "https://github.com/rafamolina1/Habit-Breaker",
          deploy: "https://habitbreaker.vercel.app",
          status: "Live SPA",
          accent: "green",
        },
        {
          title: "Market Pulse",
          category: "Produto financeiro em tempo real",
          summary:
            "Aplicação financeira para acompanhar moedas, criptomoedas e commodities em uma única experiência com atualização em tempo real.",
          problem:
            "Concentrar dados de mercado, histórico e carteira sem cair em uma interface poluída ou em fluxos pesados para o usuário.",
          contribution:
            "Desenvolvi a aplicação em React e Vite com atualização ao vivo, gráficos históricos, gestão de portfólio e camada de estado por contexto.",
          highlights: [
            "Tracking em tempo real de moedas, criptoativos e commodities",
            "Gráficos históricos com múltiplos intervalos",
            "Exportação em CSV e PDF e preferências salvas em localStorage",
            "Lazy loading de modais pesados e suporte a PWA instalável",
          ],
          stack: ["JavaScript", "React", "Vite", "PWA"],
          image: "/marketpulse-20260405.png",
          github: "https://github.com/rafamolina1/Market-Pulse",
          deploy: "https://market-pulse-rho-beryl.vercel.app",
          status: "Realtime market UI",
          accent: "cyan",
        },
        {
          title: "Km De Lucro",
          category: "SaaS financeiro para motoristas",
          summary:
            "Aplicação web para motoristas autônomos controlarem faturamento, custos, lucro e margem por frete sem depender de planilhas.",
          problem:
            "Transformar dados básicos de cada viagem em leitura financeira prática, reduzindo conta manual e baixa visibilidade sobre lucro real.",
          contribution:
            "Desenvolvi a aplicação com Next.js, TypeScript e Supabase, estruturando autenticação por magic link, persistência dos fretes e cálculos automáticos.",
          highlights: [
            "Cadastro de fretes com origem, destino, KM, valor e custos",
            "Cálculo automático de lucro líquido, margem e lucro por KM",
            "Resumo mensal com faturamento, custos e evolução do período",
            "Exportação em CSV e PDF e suporte a plano gratuito e Pro",
          ],
          stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
          image: "/dashkm-20260405.png",
          github: "https://github.com/rafamolina1/KM-De-Lucro",
          deploy: "https://kmdelucro.vercel.app",
          status: "Financial SaaS",
          accent: "amber",
        },
      ],
    },
    autonomus: {
      kicker: "Startup Case",
      title: "Autonomus: empresa júnior que cofundei e levei da ideia à produção.",
      description:
        "A Autonomus nasceu na faculdade como uma empresa júnior para conectar clientes e prestadores de serviço; está em produção, foi semifinalista no Rocket da Globo e teve matéria exclusiva publicada na Globo.",
      lead:
        "Como cofundador, participei da idealização e do desenvolvimento ponta a ponta do ecossistema: dois aplicativos Flutter, API em Laravel com arquitetura monolítica modular, separação por domínios, service layers e action classes, banco MySQL, Redis para mensageria e gerenciamento de filas, painel administrativo e publicação nas lojas App Store e Google Play.",
      steps: [
        ["Origem", "Empresa júnior fundada na faculdade, criada para transformar uma dor local em um produto digital real."],
        ["Minha função", "Cofundador e desenvolvedor full stack, atuando da concepção do produto à implementação técnica."],
        [
          "Arquitetura",
          "Monólito modular em Laravel orientado a domínios, com service layers, action classes, MySQL e Redis para mensageria e filas.",
        ],
        [
          "Validação",
          "Semifinalista no Rocket da Globo, o maior reality show de startups do Brasil, com matéria exclusiva publicada na Globo.",
        ],
      ],
      mediaButton: "Ver matéria exclusiva na Globo",
      mapTitle: "Autonomus system map",
      nodes: ["Cliente App", "API Laravel", "Redis Queue", "MySQL", "Admin Panel", "Prestador App"],
      footerTags: ["Flutter", "Laravel", "MySQL", "Redis", "Stores"],
    },
    capabilities: {
      kicker: "Capability Map",
      title: "Stack apresentada como capacidade de construção.",
      description:
        "A leitura não é uma lista de logos: é o que Rafael consegue projetar, implementar, integrar, colocar em produção e manter legível.",
      groups: [
        {
          title: "Web, Mobile e Produto",
          description: "Interfaces responsivas, apps Flutter e experiências de uso conectadas à regra de negócio.",
          items: ["React", "Next.js", "Flutter", "TypeScript", "JavaScript", "Tailwind"],
        },
        {
          title: "Backend e APIs",
          description: "APIs, autenticação, regra de negócio e integração entre sistemas.",
          items: ["Node.js", "Laravel", "Java", "APIs REST", "JWT"],
        },
        {
          title: "Dados e Infra",
          description: "Persistência, cache, deploy e bases para operação contínua.",
          items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Railway", "Oracle Cloud"],
        },
        {
          title: "Automação e Integrações",
          description: "Workflows, mensageria, webhooks e comunicação entre ferramentas.",
          items: ["n8n", "Chatwoot", "Brevo", "Webhooks"],
        },
        {
          title: "IA e Dados",
          description: "Prototipação e aplicação prática de IA em experiências web.",
          items: ["Python", "Machine Learning", "Groq", "LangChain", "TensorFlow"],
        },
        {
          title: "Operação e Qualidade",
          description: "Validação de API, entrega em produção, leitura de saúde e manutenção de sistemas.",
          items: ["Postman", "Deploy", "Monitoramento", "Qualidade"],
        },
      ],
    },
    about: {
      kicker: "Engineering Narrative",
      title: "Produto, backend e regra de negócio como um sistema único.",
      description:
        "A trajetória combina construção full stack, experiência prática com produto em produção, contexto internacional e fundamentos de entrega.",
      paragraphs: [
        "Desenvolvedor Full Stack com experiência prática em React, Next.js, Flutter, Node.js e Laravel, construindo aplicações web e mobile com foco em produto, integrações e base técnica consistente.",
        "Também sou cofundador da Autonomus, empresa júnior fundada na faculdade, em que participei do desenvolvimento ponta a ponta: dois apps Flutter, API em Laravel com monólito modular, DDD, service layers e action classes, MySQL, Redis para mensageria e gerenciamento de filas, painel administrativo e publicação nas lojas App Store e Google Play. A empresa está em produção, foi semifinalista no Rocket da Globo, o maior reality show de startups do Brasil, e teve matéria exclusiva publicada na Globo.",
        "Além da Autonomus, desenvolvi projetos próprios e acadêmicos voltados a operação, automação e tomada de decisão, incluindo monitoramento, gestão financeira e fluxos com IA. Também atuei em contexto remoto internacional usando Node.js e inglês no dia a dia.",
      ],
      principles: [
        "Trato frontend como produto, não só como interface.",
        "Construo experiências mobile quando o produto precisa ir além da web.",
        "Organizo backend e integrações com responsabilidade clara.",
        "Priorizo legibilidade, manutenção e entrega em produção.",
      ],
    },
    credentials: {
      kicker: "Credentials",
      title: "Validação externa com links verificáveis.",
      description: "Certificações e exposição pública posicionadas como sinais de confiança, não como badges soltos.",
      verify: "Verificar",
      note: "Certificação registrada",
      items: [
        {
          title: "Rocket da Globo",
          description:
            "Autonomus foi semifinalista no Rocket da Globo, o maior reality show de startups do Brasil, com matéria exclusiva publicada na Globo.",
          href: mediaHref,
        },
        {
          title: "Inglês Fluente C2 - University of Cambridge",
          description: "Certificação internacional emitida pela Universidade de Cambridge.",
        },
        {
          title: "Oracle Cloud Infrastructure",
          description: "Certificação concluída em Oracle Cloud Infrastructure.",
          href: oracleHref,
        },
        {
          title: "IBM Data Privacy Fundamentals",
          description: "Certificação da IBM em fundamentos de privacidade de dados.",
          href: ibmPrivacyHref,
        },
        {
          title: "IBM Machine Learning with Python",
          description: "Certificação da IBM em Machine Learning aplicado com Python.",
          href: ibmMlHref,
        },
      ],
    },
    education: {
      kicker: "Education & Leadership",
      title: "Base acadêmica e impacto prático em comunidade.",
      description: "Formação em tecnologia, ensino de programação e participação em iniciativas acadêmicas.",
      educationTitle: "Educação",
      leadershipTitle: "Liderança e impacto",
      items: [
        {
          period: "2025 - 2027",
          title: "Análise e Desenvolvimento de Sistemas",
          description: "Fundação Getúlio Vargas (FGV).",
        },
        {
          period: "2022 - 2026",
          title: "Bacharelado em Ciência da Computação",
          description: "Universidade Tecnológica Federal do Paraná (UTFPR), em andamento.",
        },
      ],
      leadership: [
        {
          period: "Robótica UTFPR",
          title: "Professor de robótica",
          description:
            "Ensino de lógica de programação e pensamento computacional para crianças de escolas públicas com LEGO e Scratch.",
        },
        {
          period: "CACOMP UTFPR",
          title: "Centro Acadêmico de Computação",
          description:
            "Organização de eventos, palestras e iniciativas para fortalecer o engajamento estudantil em Ciência da Computação.",
        },
      ],
    },
    finalCta: {
      status: "Online para novas conversas",
      title: "Vamos construir algo que funcione de ponta a ponta.",
      description:
        "Se você procura alguém para construir produtos web, APIs, integrações, automações ou sistemas full stack com foco em clareza técnica e entrega, vamos conversar.",
      email: "Enviar e-mail",
      resume: "Currículo",
    },
    footer: {
      resumeEn: "Baixar currículo EN",
    },
    emailModal: {
      kicker: "Contato direto",
      title: "Como prefere continuar?",
      description: "Escolha abrir seu app de e-mail ou copiar o endereço para usar no canal que preferir.",
      addressLabel: "E-mail de contato",
      open: "Abrir e-mail",
      copy: "Copiar e-mail",
      copied: "Copiado",
      close: "Fechar",
      closeWindow: "Fechar janela",
    },
  },
  en: {
    aria: {
      mainNav: "Main navigation",
      sectionsNav: "Portfolio sections",
      heroActions: "Primary actions",
      heroSummary: "Professional summary",
      commandPanel: "Command Center visual panel",
      projectImage: "Project screenshot",
      openProject: "Open",
      openGithub: "Open GitHub repository for project",
      openDeploy: "Open project deployment",
      autonomusMap: "Autonomus system map",
      languageSwitcher: "Select language",
    },
    navItems: [
      { href: "#signals", label: "Signals" },
      { href: "#systems", label: "Systems" },
      { href: "#autonomus", label: "Autonomus" },
      { href: "#capabilities", label: "Capabilities" },
      { href: "#about", label: "Narrative" },
    ],
    hero: {
      availability: "Available for strategic opportunities",
      role: "Full Stack Developer",
      lead:
        "Full Stack Developer focused on building complete web and mobile products, APIs, and integrations that solve real business problems.",
      support:
        "I work full stack from web and mobile interfaces to backend, using React, Next.js, Flutter, Node.js, Laravel, and databases to connect user experience, business rules, automation, and deployment in production-ready applications.",
      resume: "Download resume",
      email: "Email",
      contact: "Contact",
      stats: [
        { value: "5", label: "selected systems" },
        { value: "2", label: "mobile apps in production" },
        { value: "C2", label: "Cambridge English" },
      ],
    },
    command: {
      operatorLabel: "Operator",
      operatorDescription: "Full stack product engineering",
      productionTitle: "Production Signals",
      productionSignals: [
        "Autonomus in production",
        "Two published Flutter apps",
        "Semifinalist on Rocket by Globo",
        "Exclusive article published by Globo",
        "Speaker at technology events",
        "Oracle and IBM certifications",
      ],
      coreStackTitle: "Core Stack",
      coreStack: ["React", "Next.js", "Flutter", "Node.js", "PostgreSQL", "Laravel"],
      focusTitle: "Current Focus",
      focusItems: ["Web products", "Mobile", "APIs", "Integrations"],
    },
    trust: {
      kicker: "Trust Signals",
      title: "Credibility before the pitch.",
      description: "Verifiable signals across production products, media, certifications, and international work.",
      signals: [
        {
          label: "Rocket by Globo",
          value: "Semifinalist",
          detail:
            "Autonomus was a semifinalist on Rocket by Globo, Brazil's biggest startup reality show, and was featured in an exclusive Globo article.",
          href: mediaHref,
        },
        {
          label: "Cambridge C2",
          value: "Proficient English",
          detail: "International fluency certification issued by the University of Cambridge.",
        },
        {
          label: "Oracle Cloud Infrastructure",
          value: "Cloud",
          detail: "Completed certification in Oracle infrastructure fundamentals.",
          href: oracleHref,
        },
        {
          label: "IBM Data Privacy",
          value: "Governance",
          detail: "Data privacy fundamentals and operational responsibility.",
          href: ibmPrivacyHref,
        },
        {
          label: "IBM ML with Python",
          value: "AI and data",
          detail: "Applied Machine Learning with Python through IBM SkillsBuild.",
          href: ibmMlHref,
        },
        {
          label: "Remote International",
          value: "Node.js + English",
          detail: "International remote experience using Node.js and English day to day.",
        },
      ],
    },
    systems: {
      kicker: "Selected Systems",
      title: "Five cases treated as real systems.",
      description:
        "Each project receives the same depth: problem, contribution, architecture, technical highlights, stack, GitHub, and deployment when available.",
      problem: "Problem",
      contribution: "Contribution",
      github: "GitHub",
      deploy: "Deploy",
      projects: [
        {
          title: "Watch Dog",
          category: "Observability / Full Stack",
          summary:
            "Full stack uptime monitoring application for tracking web services, persisting state in Redis, and triggering automated alerts.",
          problem:
            "Monitor services on a recurring schedule, keep a fast read of the latest state, and avoid duplicate alerts during the same incident.",
          contribution:
            "I designed and implemented the solution end to end with a React frontend, Fastify API, Redis persistence, a node-cron scheduled worker, and n8n automations.",
          highlights: [
            "HTTP checks with configurable timeout and GET /status reads",
            "Alerts triggered only on a real online-to-offline transition",
            "Distributed Redis lock to avoid duplicated monitoring",
            "Deployment validated with Docker, Railway, n8n, and Brevo email delivery",
          ],
          stack: ["React", "TypeScript", "Node.js", "Redis", "Docker", "Railway", "n8n"],
          image: "/dashboard-filled.png",
          github: "https://github.com/rafamolina1/Watch-Dog",
          status: "Production-ready monitor",
          accent: "cyan",
        },
        {
          title: "Barber Manager",
          category: "Multi-tenant SaaS",
          summary:
            "Multi-tenant platform for managing WhatsApp interactions, client isolation, operational metrics, and external workflow integration.",
          problem:
            "Allow each operation to have its own metrics, integrations, and data without mixing information between different organizations.",
          contribution:
            "I built the application with Next.js App Router, TypeScript, Clerk, Prisma, and Postgres, structuring organization-based authentication and n8n integration.",
          highlights: [
            "Metrics, charts, and analytics separated by organization",
            "Multi-tenant flow based on Clerk organizationId",
            "Webhook to persist organizations and guarantee tenant isolation",
            "n8n integration for workflows and WhatsApp data",
          ],
          stack: ["Next.js", "TypeScript", "Clerk", "PostgreSQL", "Prisma", "n8n"],
          image: "/barber-dashboard.png",
          github: "https://github.com/rafamolina1/app-apontamento",
          status: "Tenant-isolated SaaS",
          accent: "amber",
        },
        {
          title: "Habit Breaker",
          category: "Digital health with AI",
          summary:
            "Web application that supports people quitting smoking with real-time progress, physiological milestones, and a conversational coach.",
          problem:
            "Turn the decision to quit smoking into something visual, measurable, and actionable every day without requiring an account or traditional backend.",
          contribution:
            "I developed the React SPA with local persistence, progress panel, browser reminders, and Groq integration for support during cravings.",
          highlights: [
            "Real-time counter since the date and time the user quit",
            "Accumulated savings, cigarettes avoided, and estimated time recovered",
            "User and chat history persisted in localStorage",
            "Groq integration through local proxy and deployment rewrite",
          ],
          stack: ["JavaScript", "React", "Vite", "Groq"],
          image: "/habit-breaker-20260405.png",
          github: "https://github.com/rafamolina1/Habit-Breaker",
          deploy: "https://habitbreaker.vercel.app",
          status: "Live SPA",
          accent: "green",
        },
        {
          title: "Market Pulse",
          category: "Real-time financial product",
          summary:
            "Financial application for tracking currencies, cryptocurrencies, and commodities in one real-time experience.",
          problem:
            "Centralize market data, history, and portfolio tracking without creating a polluted interface or heavy user flows.",
          contribution:
            "I developed the React and Vite application with live updates, historical charts, portfolio management, and context-based state organization.",
          highlights: [
            "Real-time tracking of currencies, cryptoassets, and commodities",
            "Historical charts with multiple intervals",
            "CSV and PDF export plus preferences saved in localStorage",
            "Lazy loading for heavy modals and installable PWA support",
          ],
          stack: ["JavaScript", "React", "Vite", "PWA"],
          image: "/marketpulse-20260405.png",
          github: "https://github.com/rafamolina1/Market-Pulse",
          deploy: "https://market-pulse-rho-beryl.vercel.app",
          status: "Realtime market UI",
          accent: "cyan",
        },
        {
          title: "Km De Lucro",
          category: "Financial SaaS for drivers",
          summary:
            "Web application for independent drivers to control revenue, costs, profit, and margin per freight without relying on spreadsheets.",
          problem:
            "Transform basic trip data into practical financial insight, reducing manual calculations and low visibility into real profit.",
          contribution:
            "I built the application with Next.js, TypeScript, and Supabase, structuring magic-link authentication, freight persistence, and automatic calculations.",
          highlights: [
            "Freight registration with origin, destination, mileage, value, and costs",
            "Automatic calculation of net profit, margin, and profit per kilometer",
            "Monthly summary with revenue, costs, and period evolution",
            "CSV and PDF export with free and Pro plan support",
          ],
          stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
          image: "/dashkm-20260405.png",
          github: "https://github.com/rafamolina1/KM-De-Lucro",
          deploy: "https://kmdelucro.vercel.app",
          status: "Financial SaaS",
          accent: "amber",
        },
      ],
    },
    autonomus: {
      kicker: "Startup Case",
      title: "Autonomus: the junior company I co-founded and took from idea to production.",
      description:
        "Autonomus started in college as a junior company connecting clients and service providers; it is in production, was a semifinalist on Rocket by Globo, and was featured in an exclusive Globo article.",
      lead:
        "As co-founder, I participated in the end-to-end ideation and development of the ecosystem: two Flutter apps, a Laravel API with modular monolith architecture, domain separation, service layers and action classes, MySQL, Redis for messaging and queue management, an admin panel, and publication on the App Store and Google Play.",
      steps: [
        ["Origin", "Junior company founded in college to turn a local pain point into a real digital product."],
        ["My role", "Co-founder and full stack developer, working from product conception to technical implementation."],
        [
          "Architecture",
          "Laravel modular monolith oriented by domains, with service layers, action classes, MySQL, and Redis for messaging and queues.",
        ],
        [
          "Validation",
          "Semifinalist on Rocket by Globo, Brazil's biggest startup reality show, with an exclusive article published by Globo.",
        ],
      ],
      mediaButton: "View exclusive Globo article",
      mapTitle: "Autonomus system map",
      nodes: ["Client App", "Laravel API", "Redis Queue", "MySQL", "Admin Panel", "Provider App"],
      footerTags: ["Flutter", "Laravel", "MySQL", "Redis", "Stores"],
    },
    capabilities: {
      kicker: "Capability Map",
      title: "Stack framed as build capacity.",
      description:
        "This is not a logo list: it is what Rafael can design, implement, integrate, ship to production, and keep maintainable.",
      groups: [
        {
          title: "Web, Mobile and Product",
          description: "Responsive interfaces, Flutter apps, and product experiences connected to business rules.",
          items: ["React", "Next.js", "Flutter", "TypeScript", "JavaScript", "Tailwind"],
        },
        {
          title: "Backend and APIs",
          description: "APIs, authentication, business rules, and integration between systems.",
          items: ["Node.js", "Laravel", "Java", "REST APIs", "JWT"],
        },
        {
          title: "Data and Infrastructure",
          description: "Persistence, cache, deployment, and foundations for continuous operation.",
          items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Railway", "Oracle Cloud"],
        },
        {
          title: "Automation and Integrations",
          description: "Workflows, messaging, webhooks, and communication between tools.",
          items: ["n8n", "Chatwoot", "Brevo", "Webhooks"],
        },
        {
          title: "AI and Data",
          description: "Practical AI prototyping and application in web experiences.",
          items: ["Python", "Machine Learning", "Groq", "LangChain", "TensorFlow"],
        },
        {
          title: "Operation and Quality",
          description: "API validation, production delivery, health checks, and system maintenance.",
          items: ["Postman", "Deploy", "Monitoring", "Quality"],
        },
      ],
    },
    about: {
      kicker: "Engineering Narrative",
      title: "Product, backend, and business rules as one system.",
      description:
        "The path combines full stack development, hands-on product experience in production, international context, and delivery fundamentals.",
      paragraphs: [
        "Full Stack Developer with practical experience in React, Next.js, Flutter, Node.js, and Laravel, building web and mobile applications focused on product, integrations, and a consistent technical foundation.",
        "I am also co-founder of Autonomus, a junior company founded in college, where I participated in end-to-end development: two Flutter apps, a Laravel API with modular monolith, DDD, service layers and action classes, MySQL, Redis for messaging and queue management, admin panel, and publication on the App Store and Google Play. The company is in production, was a semifinalist on Rocket by Globo, Brazil's biggest startup reality show, and was featured in an exclusive Globo article.",
        "Beyond Autonomus, I built personal and academic projects focused on operation, automation, and decision-making, including monitoring, financial management, and AI flows. I also worked in an international remote context using Node.js and English day to day.",
      ],
      principles: [
        "I treat frontend as product, not just interface.",
        "I build mobile experiences when the product needs to go beyond the web.",
        "I organize backend and integrations with clear responsibility.",
        "I prioritize readability, maintainability, and production delivery.",
      ],
    },
    credentials: {
      kicker: "Credentials",
      title: "External validation with verifiable links.",
      description: "Certifications and public exposure positioned as trust signals, not loose badges.",
      verify: "Verify",
      note: "Registered certification",
      items: [
        {
          title: "Rocket by Globo",
          description:
            "Autonomus was a semifinalist on Rocket by Globo, Brazil's biggest startup reality show, with an exclusive article published by Globo.",
          href: mediaHref,
        },
        {
          title: "Fluent English C2 - University of Cambridge",
          description: "International certification issued by the University of Cambridge.",
        },
        {
          title: "Oracle Cloud Infrastructure",
          description: "Completed Oracle Cloud Infrastructure certification.",
          href: oracleHref,
        },
        {
          title: "IBM Data Privacy Fundamentals",
          description: "IBM certification in data privacy fundamentals.",
          href: ibmPrivacyHref,
        },
        {
          title: "IBM Machine Learning with Python",
          description: "IBM certification in applied Machine Learning with Python.",
          href: ibmMlHref,
        },
      ],
    },
    education: {
      kicker: "Education & Leadership",
      title: "Academic foundation and practical community impact.",
      description: "Technology education, programming teaching, and participation in academic initiatives.",
      educationTitle: "Education",
      leadershipTitle: "Leadership and impact",
      items: [
        {
          period: "2025 - 2027",
          title: "Systems Analysis and Development",
          description: "Fundação Getulio Vargas (FGV).",
        },
        {
          period: "2022 - 2026",
          title: "Bachelor's Degree in Computer Science",
          description: "Federal University of Technology - Paraná (UTFPR), in progress.",
        },
      ],
      leadership: [
        {
          period: "UTFPR Robotics",
          title: "Robotics teacher",
          description: "Teaching programming logic and computational thinking to public school children with LEGO and Scratch.",
        },
        {
          period: "CACOMP UTFPR",
          title: "Computer Science Academic Center",
          description:
            "Organization of events, talks, and initiatives to strengthen student engagement in Computer Science.",
        },
      ],
    },
    finalCta: {
      status: "Online for new conversations",
      title: "Let's build something that works end to end.",
      description:
        "If you are looking for someone to build web products, APIs, integrations, automations, or full stack systems with technical clarity and delivery focus, let's talk.",
      email: "Send email",
      resume: "Resume",
    },
    footer: {
      resumeEn: "Download resume EN",
    },
    emailModal: {
      kicker: "Direct contact",
      title: "How would you like to continue?",
      description: "Choose whether to open your email app or copy the address to use wherever you prefer.",
      addressLabel: "Contact email",
      open: "Open email",
      copy: "Copy email",
      copied: "Copied",
      close: "Close",
      closeWindow: "Close window",
    },
  },
  es: {
    aria: {
      mainNav: "Navegación principal",
      sectionsNav: "Secciones del portafolio",
      heroActions: "Acciones principales",
      heroSummary: "Resumen profesional",
      commandPanel: "Panel visual Command Center",
      projectImage: "Captura del proyecto",
      openProject: "Abrir",
      openGithub: "Abrir repositorio GitHub del proyecto",
      openDeploy: "Abrir deploy del proyecto",
      autonomusMap: "Mapa de sistema Autonomus",
      languageSwitcher: "Seleccionar idioma",
    },
    navItems: [
      { href: "#signals", label: "Señales" },
      { href: "#systems", label: "Sistemas" },
      { href: "#autonomus", label: "Autonomus" },
      { href: "#capabilities", label: "Capacidades" },
      { href: "#about", label: "Narrativa" },
    ],
    hero: {
      availability: "Disponible para oportunidades estratégicas",
      role: "Desarrollador Full Stack",
      lead:
        "Desarrollador Full Stack enfocado en construir productos web y mobile completos, APIs e integraciones que resuelven problemas reales de negocio.",
      support:
        "Trabajo como full stack desde interfaces web y mobile hasta backend, usando React, Next.js, Flutter, Node.js, Laravel y bases de datos para conectar experiencia de uso, reglas de negocio, automatizaciones y deploy en aplicaciones listas para producción.",
      resume: "Descargar CV",
      email: "E-mail",
      contact: "Contacto",
      stats: [
        { value: "5", label: "sistemas seleccionados" },
        { value: "2", label: "apps mobile en producción" },
        { value: "C2", label: "inglés Cambridge" },
      ],
    },
    command: {
      operatorLabel: "Operator",
      operatorDescription: "Full stack product engineering",
      productionTitle: "Production Signals",
      productionSignals: [
        "Autonomus en producción",
        "Dos apps Flutter publicadas",
        "Semifinalista en Rocket de Globo",
        "Nota exclusiva publicada en Globo",
        "Ponente en eventos de tecnología",
        "Certificaciones Oracle e IBM",
      ],
      coreStackTitle: "Core Stack",
      coreStack: ["React", "Next.js", "Flutter", "Node.js", "PostgreSQL", "Laravel"],
      focusTitle: "Current Focus",
      focusItems: ["Productos web", "Mobile", "APIs", "Integraciones"],
    },
    trust: {
      kicker: "Trust Signals",
      title: "Credibilidad antes del pitch.",
      description: "Señales verificables de producto en producción, medios, certificaciones y operación internacional.",
      signals: [
        {
          label: "Rocket de Globo",
          value: "Semifinalista",
          detail:
            "Autonomus fue semifinalista en Rocket de Globo, el mayor reality show de startups de Brasil, y tuvo una nota exclusiva publicada en Globo.",
          href: mediaHref,
        },
        {
          label: "Cambridge C2",
          value: "Inglés avanzado",
          detail: "Certificación internacional de fluidez emitida por la University of Cambridge.",
        },
        {
          label: "Oracle Cloud Infrastructure",
          value: "Cloud",
          detail: "Certificación completada en fundamentos de infraestructura Oracle.",
          href: oracleHref,
        },
        {
          label: "IBM Data Privacy",
          value: "Gobernanza",
          detail: "Fundamentos de privacidad de datos y responsabilidad operacional.",
          href: ibmPrivacyHref,
        },
        {
          label: "IBM ML with Python",
          value: "IA y datos",
          detail: "Machine Learning aplicado con Python por IBM SkillsBuild.",
          href: ibmMlHref,
        },
        {
          label: "Remote International",
          value: "Node.js + English",
          detail: "Experiencia remota internacional usando Node.js e inglés en el día a día.",
        },
      ],
    },
    systems: {
      kicker: "Selected Systems",
      title: "Cinco casos tratados como sistemas reales.",
      description:
        "Cada proyecto recibe la misma profundidad: problema, contribución, arquitectura, puntos técnicos, stack, GitHub y deploy cuando existe.",
      problem: "Problema",
      contribution: "Contribución",
      github: "GitHub",
      deploy: "Deploy",
      projects: [
        {
          title: "Watch Dog",
          category: "Observabilidad / Full Stack",
          summary:
            "Aplicación full stack de monitoreo de uptime para acompañar servicios web, persistir estado en Redis y disparar alertas automatizadas.",
          problem:
            "Monitorear servicios de forma recurrente, mantener lectura rápida del último estado y evitar alertas duplicadas durante el mismo incidente.",
          contribution:
            "Diseñé e implementé la solución de punta a punta con frontend en React, API en Fastify, persistencia en Redis, worker programado con node-cron y automatizaciones con n8n.",
          highlights: [
            "Chequeos HTTP con timeout configurable y lectura por GET /status",
            "Alerta disparada solo en transición real de online a offline",
            "Lock distribuido en Redis para evitar monitoreo duplicado",
            "Deploy validado con Docker, Railway, n8n y envío de e-mail vía Brevo",
          ],
          stack: ["React", "TypeScript", "Node.js", "Redis", "Docker", "Railway", "n8n"],
          image: "/dashboard-filled.png",
          github: "https://github.com/rafamolina1/Watch-Dog",
          status: "Production-ready monitor",
          accent: "cyan",
        },
        {
          title: "Barber Manager",
          category: "SaaS multi-tenant",
          summary:
            "Plataforma multi-tenant para gestión de interacciones vía WhatsApp, aislamiento por cliente, métricas operacionales e integración con workflows externos.",
          problem:
            "Permitir que cada operación tenga métricas, integraciones y datos propios sin mezclar información entre organizaciones distintas.",
          contribution:
            "Desarrollé la aplicación con Next.js App Router, TypeScript, Clerk, Prisma y Postgres, estructurando autenticación por organización e integración con n8n.",
          highlights: [
            "Métricas, gráficos y analytics separados por organización",
            "Flujo multi-tenant basado en organizationId de Clerk",
            "Webhook para persistir organizaciones y garantizar aislamiento entre clientes",
            "Integración con n8n para workflows y datos de WhatsApp",
          ],
          stack: ["Next.js", "TypeScript", "Clerk", "PostgreSQL", "Prisma", "n8n"],
          image: "/barber-dashboard.png",
          github: "https://github.com/rafamolina1/app-apontamento",
          status: "Tenant-isolated SaaS",
          accent: "amber",
        },
        {
          title: "Habit Breaker",
          category: "Salud digital con IA",
          summary:
            "Aplicación web para apoyar a personas que están dejando de fumar, con progreso en tiempo real, hitos fisiológicos y coach conversacional.",
          problem:
            "Convertir la decisión de dejar de fumar en algo visual, medible y accionable en el día a día, sin exigir cuenta ni backend tradicional.",
          contribution:
            "Desarrollé la SPA en React con persistencia local, panel de progreso, recordatorios del navegador e integración con Groq para apoyo en momentos de ansiedad.",
          highlights: [
            "Contador en tiempo real desde la fecha y hora en que la persona dejó de fumar",
            "Ahorro acumulado, cigarrillos evitados y estimación de tiempo recuperado",
            "Historial del usuario y del chat persistidos en localStorage",
            "Integración con Groq vía proxy local y rewrite en el deploy",
          ],
          stack: ["JavaScript", "React", "Vite", "Groq"],
          image: "/habit-breaker-20260405.png",
          github: "https://github.com/rafamolina1/Habit-Breaker",
          deploy: "https://habitbreaker.vercel.app",
          status: "Live SPA",
          accent: "green",
        },
        {
          title: "Market Pulse",
          category: "Producto financiero en tiempo real",
          summary:
            "Aplicación financiera para acompañar monedas, criptomonedas y commodities en una única experiencia con actualización en tiempo real.",
          problem:
            "Centralizar datos de mercado, histórico y cartera sin caer en una interfaz saturada o flujos pesados para el usuario.",
          contribution:
            "Desarrollé la aplicación en React y Vite con actualización en vivo, gráficos históricos, gestión de portafolio y capa de estado por contexto.",
          highlights: [
            "Tracking en tiempo real de monedas, criptoactivos y commodities",
            "Gráficos históricos con múltiples intervalos",
            "Exportación en CSV y PDF y preferencias guardadas en localStorage",
            "Lazy loading de modales pesados y soporte a PWA instalable",
          ],
          stack: ["JavaScript", "React", "Vite", "PWA"],
          image: "/marketpulse-20260405.png",
          github: "https://github.com/rafamolina1/Market-Pulse",
          deploy: "https://market-pulse-rho-beryl.vercel.app",
          status: "Realtime market UI",
          accent: "cyan",
        },
        {
          title: "Km De Lucro",
          category: "SaaS financiero para conductores",
          summary:
            "Aplicación web para que conductores independientes controlen facturación, costos, ganancia y margen por flete sin depender de planillas.",
          problem:
            "Transformar datos básicos de cada viaje en lectura financiera práctica, reduciendo cálculos manuales y baja visibilidad sobre la ganancia real.",
          contribution:
            "Desarrollé la aplicación con Next.js, TypeScript y Supabase, estructurando autenticación por magic link, persistencia de fletes y cálculos automáticos.",
          highlights: [
            "Registro de fletes con origen, destino, KM, valor y costos",
            "Cálculo automático de ganancia neta, margen y ganancia por KM",
            "Resumen mensual con facturación, costos y evolución del período",
            "Exportación en CSV y PDF y soporte para plan gratuito y Pro",
          ],
          stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
          image: "/dashkm-20260405.png",
          github: "https://github.com/rafamolina1/KM-De-Lucro",
          deploy: "https://kmdelucro.vercel.app",
          status: "Financial SaaS",
          accent: "amber",
        },
      ],
    },
    autonomus: {
      kicker: "Startup Case",
      title: "Autonomus: la empresa junior que cofundé y llevé de la idea a producción.",
      description:
        "Autonomus nació en la universidad como una empresa junior para conectar clientes y prestadores de servicio; está en producción, fue semifinalista en Rocket de Globo y tuvo una nota exclusiva publicada en Globo.",
      lead:
        "Como cofundador, participé en la ideación y desarrollo de punta a punta del ecosistema: dos apps Flutter, API en Laravel con arquitectura monolítica modular, separación por dominios, service layers y action classes, MySQL, Redis para mensajería y gestión de colas, panel administrativo y publicación en App Store y Google Play.",
      steps: [
        ["Origen", "Empresa junior fundada en la universidad para transformar un dolor local en un producto digital real."],
        ["Mi rol", "Cofundador y desarrollador full stack, actuando desde la concepción del producto hasta la implementación técnica."],
        [
          "Arquitectura",
          "Monolito modular en Laravel orientado a dominios, con service layers, action classes, MySQL y Redis para mensajería y colas.",
        ],
        [
          "Validación",
          "Semifinalista en Rocket de Globo, el mayor reality show de startups de Brasil, con nota exclusiva publicada en Globo.",
        ],
      ],
      mediaButton: "Ver nota exclusiva en Globo",
      mapTitle: "Autonomus system map",
      nodes: ["Cliente App", "API Laravel", "Redis Queue", "MySQL", "Admin Panel", "Prestador App"],
      footerTags: ["Flutter", "Laravel", "MySQL", "Redis", "Stores"],
    },
    capabilities: {
      kicker: "Capability Map",
      title: "Stack presentada como capacidad de construcción.",
      description:
        "La lectura no es una lista de logos: es lo que Rafael puede diseñar, implementar, integrar, poner en producción y mantener legible.",
      groups: [
        {
          title: "Web, Mobile y Producto",
          description: "Interfaces responsivas, apps Flutter y experiencias de uso conectadas a reglas de negocio.",
          items: ["React", "Next.js", "Flutter", "TypeScript", "JavaScript", "Tailwind"],
        },
        {
          title: "Backend y APIs",
          description: "APIs, autenticación, reglas de negocio e integración entre sistemas.",
          items: ["Node.js", "Laravel", "Java", "APIs REST", "JWT"],
        },
        {
          title: "Datos e Infra",
          description: "Persistencia, cache, deploy y bases para operación continua.",
          items: ["PostgreSQL", "MySQL", "Redis", "Docker", "Railway", "Oracle Cloud"],
        },
        {
          title: "Automatización e Integraciones",
          description: "Workflows, mensajería, webhooks y comunicación entre herramientas.",
          items: ["n8n", "Chatwoot", "Brevo", "Webhooks"],
        },
        {
          title: "IA y Datos",
          description: "Prototipado y aplicación práctica de IA en experiencias web.",
          items: ["Python", "Machine Learning", "Groq", "LangChain", "TensorFlow"],
        },
        {
          title: "Operación y Calidad",
          description: "Validación de API, entrega en producción, lectura de salud y mantenimiento de sistemas.",
          items: ["Postman", "Deploy", "Monitoreo", "Calidad"],
        },
      ],
    },
    about: {
      kicker: "Engineering Narrative",
      title: "Producto, backend y reglas de negocio como un sistema único.",
      description:
        "La trayectoria combina construcción full stack, experiencia práctica con producto en producción, contexto internacional y fundamentos de entrega.",
      paragraphs: [
        "Desarrollador Full Stack con experiencia práctica en React, Next.js, Flutter, Node.js y Laravel, construyendo aplicaciones web y mobile con foco en producto, integraciones y base técnica consistente.",
        "También soy cofundador de Autonomus, empresa junior fundada en la universidad, donde participé del desarrollo de punta a punta: dos apps Flutter, API en Laravel con monolito modular, DDD, service layers y action classes, MySQL, Redis para mensajería y gestión de colas, panel administrativo y publicación en App Store y Google Play. La empresa está en producción, fue semifinalista en Rocket de Globo, el mayor reality show de startups de Brasil, y tuvo una nota exclusiva publicada en Globo.",
        "Además de Autonomus, desarrollé proyectos propios y académicos orientados a operación, automatización y toma de decisiones, incluyendo monitoreo, gestión financiera y flujos con IA. También trabajé en contexto remoto internacional usando Node.js e inglés en el día a día.",
      ],
      principles: [
        "Trato el frontend como producto, no solo como interfaz.",
        "Construyo experiencias mobile cuando el producto necesita ir más allá de la web.",
        "Organizo backend e integraciones con responsabilidad clara.",
        "Priorizo legibilidad, mantenimiento y entrega en producción.",
      ],
    },
    credentials: {
      kicker: "Credentials",
      title: "Validación externa con links verificables.",
      description: "Certificaciones y exposición pública posicionadas como señales de confianza, no como badges sueltos.",
      verify: "Verificar",
      note: "Certificación registrada",
      items: [
        {
          title: "Rocket de Globo",
          description:
            "Autonomus fue semifinalista en Rocket de Globo, el mayor reality show de startups de Brasil, con nota exclusiva publicada en Globo.",
          href: mediaHref,
        },
        {
          title: "Inglés Fluido C2 - University of Cambridge",
          description: "Certificación internacional emitida por la University of Cambridge.",
        },
        {
          title: "Oracle Cloud Infrastructure",
          description: "Certificación concluida en Oracle Cloud Infrastructure.",
          href: oracleHref,
        },
        {
          title: "IBM Data Privacy Fundamentals",
          description: "Certificación de IBM en fundamentos de privacidad de datos.",
          href: ibmPrivacyHref,
        },
        {
          title: "IBM Machine Learning with Python",
          description: "Certificación de IBM en Machine Learning aplicado con Python.",
          href: ibmMlHref,
        },
      ],
    },
    education: {
      kicker: "Education & Leadership",
      title: "Base académica e impacto práctico en comunidad.",
      description: "Formación en tecnología, enseñanza de programación y participación en iniciativas académicas.",
      educationTitle: "Educación",
      leadershipTitle: "Liderazgo e impacto",
      items: [
        {
          period: "2025 - 2027",
          title: "Análisis y Desarrollo de Sistemas",
          description: "Fundação Getúlio Vargas (FGV).",
        },
        {
          period: "2022 - 2026",
          title: "Licenciatura en Ciencia de la Computación",
          description: "Universidade Tecnológica Federal do Paraná (UTFPR), en curso.",
        },
      ],
      leadership: [
        {
          period: "Robótica UTFPR",
          title: "Profesor de robótica",
          description:
            "Enseñanza de lógica de programación y pensamiento computacional a niños de escuelas públicas con LEGO y Scratch.",
        },
        {
          period: "CACOMP UTFPR",
          title: "Centro Académico de Computación",
          description:
            "Organización de eventos, charlas e iniciativas para fortalecer el compromiso estudiantil en Ciencia de la Computación.",
        },
      ],
    },
    finalCta: {
      status: "Online para nuevas conversaciones",
      title: "Construyamos algo que funcione de punta a punta.",
      description:
        "Si buscas a alguien para construir productos web, APIs, integraciones, automatizaciones o sistemas full stack con claridad técnica y foco en entrega, conversemos.",
      email: "Enviar e-mail",
      resume: "CV",
    },
    footer: {
      resumeEn: "Descargar CV EN",
    },
    emailModal: {
      kicker: "Contacto directo",
      title: "¿Cómo prefieres continuar?",
      description: "Elige abrir tu app de e-mail o copiar la dirección para usarla en el canal que prefieras.",
      addressLabel: "E-mail de contacto",
      open: "Abrir e-mail",
      copy: "Copiar e-mail",
      copied: "Copiado",
      close: "Cerrar",
      closeWindow: "Cerrar ventana",
    },
  },
};
