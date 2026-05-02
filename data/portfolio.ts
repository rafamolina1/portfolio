export const profile = {
  name: "Rafael Molina",
  role: "Desenvolvedor Full Stack",
  email: "rafaeloliveiramolina@gmail.com",
  github: "https://github.com/rafamolina1",
  linkedin: "https://www.linkedin.com/in/rafaelmolinadev/",
  resumePt: "/Rafael_Molina.pdf",
  resumeEn: "/Rafael_MolinaUS.pdf",
  currentSite: "https://rafamolinadev.vercel.app",
};

export const trustSignals = [
  {
    label: "Rocket da Globo",
    value: "Semifinalista",
    detail:
      "Autonomus foi semifinalista no Rocket da Globo, o maior reality show de startups do Brasil, e teve matéria exclusiva publicada na Globo.",
    href: "https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml",
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
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BDFB9AB79C56F27589ACAF192371337C6018A7054703F016272EF03BB4A76141",
  },
  {
    label: "IBM Data Privacy",
    value: "Governança",
    detail: "Fundamentos de privacidade de dados e responsabilidade operacional.",
    href: "https://courses.skillsbuild.skillsnetwork.site/certificates/bb448a693e31473baa6fb78158bcc8f7",
  },
  {
    label: "IBM ML with Python",
    value: "IA e dados",
    detail: "Machine Learning aplicado com Python pela IBM SkillsBuild.",
    href: "https://courses.skillsbuild.skillsnetwork.site/certificates/3fb5ed10feed4d168371f409380546a7",
  },
  {
    label: "Remote International",
    value: "Node.js + English",
    detail: "Experiência remota internacional usando Node.js e inglês no dia a dia.",
  },
];

export type Project = {
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

export const projects: Project[] = [
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
];

export const capabilityGroups = [
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
];

export const credentials = [
  {
    title: "Rocket da Globo",
    description:
      "Autonomus foi semifinalista no Rocket da Globo, o maior reality show de startups do Brasil, com matéria exclusiva publicada na Globo.",
    href: "https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml",
  },
  {
    title: "Inglês Fluente C2 - University of Cambridge",
    description: "Certificação internacional emitida pela Universidade de Cambridge.",
  },
  {
    title: "Oracle Cloud Infrastructure",
    description: "Certificação concluída em Oracle Cloud Infrastructure.",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BDFB9AB79C56F27589ACAF192371337C6018A7054703F016272EF03BB4A76141",
  },
  {
    title: "IBM Data Privacy Fundamentals",
    description: "Certificação da IBM em fundamentos de privacidade de dados.",
    href: "https://courses.skillsbuild.skillsnetwork.site/certificates/bb448a693e31473baa6fb78158bcc8f7",
  },
  {
    title: "IBM Machine Learning with Python",
    description: "Certificação da IBM em Machine Learning aplicado com Python.",
    href: "https://courses.skillsbuild.skillsnetwork.site/certificates/3fb5ed10feed4d168371f409380546a7",
  },
];
