export const locales = ["pt-BR", "en"] as const;
export type Locale = (typeof locales)[number];

export const languageOptions: Array<{ locale: Locale; short: string; label: string }> = [
  { locale: "pt-BR", short: "PT", label: "Português" },
  { locale: "en", short: "EN", label: "English" },
];

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
};

export type PortfolioContent = {
  nav: { experience: string; expertise: string; autonomus: string; credentials: string; contact: string };
  aria: { mainNav: string; language: string; heroActions: string; profile: string };
  hero: {
    status: string; role: string; lead: string; support: string; resume: string; contact: string;
    proof: Array<{ value: string; label: string }>;
  };
  snapshot: { label: string; title: string; subtitle: string; signals: string[]; stackLabel: string; stack: string[] };
  experience: { kicker: string; title: string; description: string; current: string; items: Experience[] };
  expertise: {
    kicker: string; title: string; description: string;
    groups: Array<{ title: string; description: string; items: string[] }>;
    secondary: string; secondaryText: string;
  };
  autonomus: {
    kicker: string; title: string; description: string; highlights: string[]; recognition: string; media: string;
    architecture: string[];
  };
  credentials: {
    kicker: string; title: string; description: string;
    items: Array<{ title: string; issuer: string; href?: string }>;
  };
  education: { kicker: string; title: string; degree: string; period: string; note: string };
  contact: { kicker: string; title: string; description: string; email: string; resume: string };
  emailModal: { kicker: string; title: string; description: string; addressLabel: string; open: string; copy: string; copied: string; close: string; closeWindow: string };
};

const globo = "https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml";
const oracle = "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BDFB9AB79C56F27589ACAF192371337C6018A7054703F016272EF03BB4A76141";
const ibmPrivacy = "https://courses.skillsbuild.skillsnetwork.site/certificates/bb448a693e31473baa6fb78158bcc8f7";
const ibmMl = "https://courses.skillsbuild.skillsnetwork.site/certificates/3fb5ed10feed4d168371f409380546a7";
const googleCybersecurity = "https://www.coursera.org/account/accomplishments/specialization/9YKAIC5LL3K3";
const googleDataAnalytics = "https://www.coursera.org/account/accomplishments/specialization/P4JTCGE443Z7";

export const dictionary: Record<Locale, PortfolioContent> = {
  "pt-BR": {
    nav: { experience: "Experiência", expertise: "Especialidades", autonomus: "Autonomus", credentials: "Credenciais", contact: "Contato" },
    aria: { mainNav: "Navegação principal", language: "Selecionar idioma", heroActions: "Ações principais", profile: "Resumo técnico de Rafael Molina" },
    hero: {
      status: "Backend Pleno | Aberto a novas oportunidades",
      role: "Desenvolvedor Backend / Full Stack Pleno",
      lead: "Backend robusto para produtos que precisam operar, crescer e continuar compreensíveis.",
      support: "Atuo com PHP/Laravel e Node.js/TypeScript na construção de APIs REST, microsserviços e plataformas SaaS multi-tenant. Conecto arquitetura, dados, filas, testes e observabilidade a necessidades reais de produto.",
      resume: "Baixar currículo", contact: "Entrar em contato",
      proof: [
        { value: "Pleno", label: "backend em produção" },
        { value: "C2", label: "inglês Cambridge" },
        { value: "2 apps", label: "Flutter publicados" },
      ],
    },
    snapshot: {
      label: "Perfil técnico", title: "Rafael Oliveira Molina", subtitle: "São Paulo, Brasil | atuação remota",
      signals: ["SaaS multi-tenant", "APIs e microsserviços", "Testes orientados a risco", "Experiência internacional"],
      stackLabel: "Stack principal", stack: ["PHP 8.4", "Laravel 12", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    },
    experience: {
      kicker: "Experiência profissional", title: "Engenharia aplicada a operações reais.",
      description: "Uma trajetória concentrada em backend, arquitetura e entrega de produtos, do SaaS multi-tenant a sistemas de inteligência logística e aplicativos publicados.", current: "Atual",
      items: [
        {
          company: "Domus Control", role: "Desenvolvedor Backend Pleno", period: "Atual", location: "Remoto", featured: true,
          summary: "Evolução do backend de uma plataforma SaaS multi-tenant para gestão eclesiástica, com responsabilidade sobre padrões de API, camadas de domínio e convenções do time.",
          highlights: [
            "Decisões técnicas sobre multi-tenancy em banco único, isolamento por igreja, autenticação e autorização.",
            "Modelagem de domínios sensíveis como membresia, dízimos, ministérios, comunicação e financeiro.",
            "Liderança da estratégia de testes com Pest, cobertura por risco, factories e testes E2E de APIs em Docker e PostgreSQL.",
          ],
          stack: ["PHP 8.4", "Laravel 12", "PostgreSQL", "Pest", "Redis", "Docker", "Telescope", "Nightwatch"],
        },
        {
          company: "Zinger Transportation, LLC", role: "Desenvolvedor Backend Pleno", period: "Mar. 2025 - Mar. 2026", location: "Texas, EUA | Remoto",
          summary: "Microsserviços em Node.js para inteligência logística, desenvolvidos em uma equipe internacional com comunicação diária em inglês.",
          highlights: [
            "Arquitetura orientada a domínio com Controller, Service, Repository, DTOs e Value Objects.",
            "Motores de cálculo para consumo de combustível e viabilidade de fretes com peso, cubagem, distância, tarifas e margem líquida.",
            "Integrações com APIs governamentais e privadas e testes Jest para precificação, rotas e integrações em Docker.",
          ],
          stack: ["Node.js", "TypeScript", "Microsserviços", "APIs REST", "Jest", "Docker", "DDD"],
        },
        {
          company: "Autonomus", role: "Cofundador e Desenvolvedor Full Stack", period: "Abr. 2023 - Atual", location: "Brasil",
          summary: "Criação e evolução do produto de ponta a ponta, da concepção à publicação de dois aplicativos nas lojas.",
          highlights: [
            "Aplicativos Flutter para clientes e prestadores, publicados na App Store e Google Play.",
            "Backend Laravel em monólito modular, com DDD, Service Layer, Action Classes e Redis para filas.",
            "Semifinalista do Rocket, do Grupo Globo, com episódio no Globoplay e cobertura jornalística.",
          ],
          stack: ["Flutter", "Dart", "Laravel", "Redis", "Filas", "DDD", "Mobile"],
        },
      ],
    },
    expertise: {
      kicker: "Especialidades", title: "Profundidade no backend, visão do produto inteiro.",
      description: "Competências agrupadas pelo papel que exercem na arquitetura, sem diluir o foco principal em uma lista de ferramentas.",
      groups: [
        { title: "Backend e arquitetura", description: "Regras de negócio, contratos consistentes e limites claros entre domínios.", items: ["PHP", "Laravel", "Node.js", "TypeScript", "APIs REST", "Microsserviços", "DDD"] },
        { title: "Dados e processamento", description: "Persistência, cache e trabalho assíncrono para sistemas operacionais.", items: ["PostgreSQL", "SQL", "Redis", "Kafka", "RabbitMQ", "Queues / Jobs"] },
        { title: "Qualidade e operação", description: "Feedback rápido, ambientes repetíveis e visibilidade de produção.", items: ["Pest", "Jest", "E2E", "Docker", "CI/CD", "Observabilidade"] },
      ],
      secondary: "Amplitude Full Stack", secondaryText: "Experiência de produto com React e Flutter; repertório adicional em .NET/C#, Java, Go e Angular para colaborar além dos limites do backend.",
    },
    autonomus: {
      kicker: "Produto em destaque", title: "Autonomus: da ideia às lojas.",
      description: "Como cofundador, Rafael participou de todo o ciclo de um marketplace de serviços: produto, arquitetura, backend, mobile e publicação.",
      highlights: ["Dois aplicativos Flutter: cliente e prestador", "Publicação na App Store e Google Play", "Backend Laravel e processamento assíncrono com Redis"],
      recognition: "Semifinalista do Rocket, reality show de startups do Grupo Globo; projeto validado pela Globo, Parque Tecnológico Itaipu e UTFPR.",
      media: "Ver cobertura da Globo", architecture: ["Flutter apps", "Laravel API", "Domínios", "Redis queues", "Persistência"],
    },
    credentials: {
      kicker: "Credenciais", title: "Formação contínua e comunicação internacional.",
      description: "Certificações em segurança cibernética, cloud, dados, privacidade e desenvolvimento, somadas ao inglês C2 com uso profissional.",
      items: [
        { title: "Google Cybersecurity", issuer: "Google", href: googleCybersecurity },
        { title: "Google Data Analytics", issuer: "Google", href: googleDataAnalytics },
        { title: "Cambridge English C2 Proficiency", issuer: "University of Cambridge" },
        { title: "Oracle Cloud Infrastructure Associate", issuer: "Oracle", href: oracle },
        { title: "Machine Learning with Python", issuer: "IBM", href: ibmMl },
        { title: "Data Privacy", issuer: "IBM", href: ibmPrivacy },
        { title: "Bootcamp Java Santander", issuer: "Santander", href: "https://www.dio.me/certificate/KM1AIKT5/share" },
      ],
    },
    education: { kicker: "Formação", title: "Análise e Desenvolvimento de Sistemas", degree: "Fundação Getulio Vargas (FGV)", period: "Abr. 2025 - Dez. 2027", note: "Tecnólogo | Remoto" },
    contact: { kicker: "Contato", title: "Vamos conversar sobre backend e produto.", description: "Disponível para oportunidades como Desenvolvedor Backend ou Full Stack Pleno, no Brasil ou em times internacionais.", email: "Enviar e-mail", resume: "Baixar currículo" },
    emailModal: { kicker: "Contato direto", title: "Como prefere continuar?", description: "Abra seu aplicativo de e-mail ou copie o endereço.", addressLabel: "E-mail de contato", open: "Abrir e-mail", copy: "Copiar e-mail", copied: "Copiado", close: "Fechar", closeWindow: "Fechar janela" },
  },
  en: {
    nav: { experience: "Experience", expertise: "Expertise", autonomus: "Autonomus", credentials: "Credentials", contact: "Contact" },
    aria: { mainNav: "Main navigation", language: "Select language", heroActions: "Primary actions", profile: "Rafael Molina technical summary" },
    hero: {
      status: "Mid-level Backend | Open to opportunities", role: "Mid-level Backend / Full Stack Developer",
      lead: "Robust backend engineering for products that need to run, scale, and remain understandable.",
      support: "I build REST APIs, microservices, and multi-tenant SaaS platforms with PHP/Laravel and Node.js/TypeScript, connecting architecture, data, queues, testing, and observability to real product needs.",
      resume: "Download resume", contact: "Get in touch",
      proof: [{ value: "Mid-level", label: "production backend" }, { value: "C2", label: "Cambridge English" }, { value: "2 apps", label: "published with Flutter" }],
    },
    snapshot: { label: "Technical profile", title: "Rafael Oliveira Molina", subtitle: "São Paulo, Brazil | remote", signals: ["Multi-tenant SaaS", "APIs and microservices", "Risk-based testing", "International experience"], stackLabel: "Core stack", stack: ["PHP 8.4", "Laravel 12", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"] },
    experience: {
      kicker: "Professional experience", title: "Engineering applied to real operations.", description: "A career focused on backend, architecture, and product delivery, from multi-tenant SaaS to logistics intelligence and published mobile apps.", current: "Current",
      items: [
        { company: "Domus Control", role: "Mid-level Backend Developer", period: "Current", location: "Remote", featured: true, summary: "Backend evolution for a multi-tenant church management SaaS, owning API standards, domain layers, and team conventions.", highlights: ["Technical decisions for single-database multi-tenancy, church isolation, authentication, and authorization.", "Sensitive domain modeling across membership, tithes, ministries, communication, and finance.", "Pest testing strategy with risk-based coverage, factories, and API E2E tests using Docker and PostgreSQL."], stack: ["PHP 8.4", "Laravel 12", "PostgreSQL", "Pest", "Redis", "Docker", "Telescope", "Nightwatch"] },
        { company: "Zinger Transportation, LLC", role: "Mid-level Backend Developer", period: "Mar. 2025 - Mar. 2026", location: "Texas, USA | Remote", summary: "Node.js microservices for logistics intelligence in an international team with daily communication in English.", highlights: ["Domain-oriented architecture using Controller, Service, Repository, DTOs, and Value Objects.", "Calculation engines for fuel consumption and freight viability, considering weight, volume, distance, rates, and net margin.", "Government and private API integrations, plus Jest tests for pricing, routes, and Dockerized integrations."], stack: ["Node.js", "TypeScript", "Microservices", "REST APIs", "Jest", "Docker", "DDD"] },
        { company: "Autonomus", role: "Co-founder and Full Stack Developer", period: "Apr. 2023 - Present", location: "Brazil", summary: "End-to-end product creation and evolution, from concept to publishing two mobile applications.", highlights: ["Flutter apps for clients and providers, published on the App Store and Google Play.", "Modular Laravel monolith with DDD, Service Layer, Action Classes, and Redis queues.", "Semifinalist on Rocket by Grupo Globo, with a Globoplay episode and press coverage."], stack: ["Flutter", "Dart", "Laravel", "Redis", "Queues", "DDD", "Mobile"] },
      ],
    },
    expertise: {
      kicker: "Expertise", title: "Backend depth with whole-product perspective.", description: "Capabilities grouped by their architectural purpose, keeping the primary backend focus clear.",
      groups: [
        { title: "Backend and architecture", description: "Business rules, consistent contracts, and clear domain boundaries.", items: ["PHP", "Laravel", "Node.js", "TypeScript", "REST APIs", "Microservices", "DDD"] },
        { title: "Data and processing", description: "Persistence, caching, and asynchronous work for operational systems.", items: ["PostgreSQL", "SQL", "Redis", "Kafka", "RabbitMQ", "Queues / Jobs"] },
        { title: "Quality and operations", description: "Fast feedback, repeatable environments, and production visibility.", items: ["Pest", "Jest", "E2E", "Docker", "CI/CD", "Observability"] },
      ],
      secondary: "Full Stack breadth", secondaryText: "Product experience with React and Flutter; additional familiarity with .NET/C#, Java, Go, and Angular to collaborate beyond backend boundaries.",
    },
    autonomus: { kicker: "Featured product", title: "Autonomus: from idea to app stores.", description: "As co-founder, Rafael worked across the entire lifecycle of a service marketplace: product, architecture, backend, mobile, and release.", highlights: ["Two Flutter apps: client and provider", "Published on the App Store and Google Play", "Laravel backend with asynchronous Redis processing"], recognition: "Semifinalist on Rocket, Grupo Globo's startup reality show; validated by Globo, Itaipu Technology Park, and UTFPR.", media: "View Globo coverage", architecture: ["Flutter apps", "Laravel API", "Domains", "Redis queues", "Persistence"] },
    credentials: { kicker: "Credentials", title: "Continuous learning and international communication.", description: "Credentials spanning cybersecurity, cloud, data, privacy, and development, plus C2 English used professionally.", items: [{ title: "Google Cybersecurity", issuer: "Google", href: googleCybersecurity }, { title: "Google Data Analytics", issuer: "Google", href: googleDataAnalytics }, { title: "Cambridge English C2 Proficiency", issuer: "University of Cambridge" }, { title: "Oracle Cloud Infrastructure Associate", issuer: "Oracle", href: oracle }, { title: "Machine Learning with Python", issuer: "IBM", href: ibmMl }, { title: "Data Privacy", issuer: "IBM", href: ibmPrivacy }, { title: "Java Santander Bootcamp", issuer: "Santander", href: "https://www.dio.me/certificate/KM1AIKT5/share" }] },
    education: { kicker: "Education", title: "Systems Analysis and Development", degree: "Fundação Getulio Vargas (FGV)", period: "Apr. 2025 - Dec. 2027", note: "Associate degree | Remote" },
    contact: { kicker: "Contact", title: "Let's talk about backend and product.", description: "Open to mid-level Backend or Full Stack opportunities in Brazil or international teams.", email: "Send email", resume: "Download resume" },
    emailModal: { kicker: "Direct contact", title: "How would you like to continue?", description: "Open your email app or copy the address.", addressLabel: "Contact email", open: "Open email", copy: "Copy email", copied: "Copied", close: "Close", closeWindow: "Close window" },
  },
};

export const globoHref = globo;
