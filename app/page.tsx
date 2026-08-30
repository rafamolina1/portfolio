"use client";

import { ArrowDownRight, ArrowUpRight, Check, Copy, Download, Mail, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Locale = "pt" | "en";
type Reality = 1 | 2;

const profile = {
  email: "rafaeloliveiramolina@gmail.com",
  github: "https://github.com/rafamolina1",
  linkedin: "https://www.linkedin.com/in/rafaelmolinadev/",
  resume: "/Rafael_Oliveira_Molina.pdf",
};

const content = {
  pt: {
    nav: [["Trabalho", "#trabalho"], ["Experiência", "#experiencia"], ["Sistemas", "#sistemas"], ["Contato", "#contato"]],
    switchLabel: "Mudar para inglês",
    language: "EN",
    overline: "BACKEND ENGINEER / SÃO PAULO, BRASIL",
    title: <>Software que<br />aguenta o <em>mundo real.</em></>,
    intro: "Rafael Molina é um desenvolvedor Backend Pleno com experiência internacional. Ele transforma regras de negócio complexas em sistemas claros, testáveis e preparados para operar.",
    status: "DISPONÍVEL PARA NOVAS OPORTUNIDADES",
    contact: "Conversar com Rafael",
    contactDialog: {
      eyebrow: "CANAL DIRETO / CONTATO",
      title: "Como você prefere conversar?",
      description: "Copie o endereço para usar onde quiser ou abra seu aplicativo de e-mail.",
      emailLabel: "E-mail profissional",
      copy: "Copiar e-mail",
      copied: "E-mail copiado",
      openMail: "Abrir no e-mail",
      close: "Fechar",
    },
    resume: "Currículo atualizado",
    portraitAlt: "Rafael Molina",
    portraitNote: "RAFAEL MOLINA / 2026",
    rails: [["01", "Backend em produção"], ["02", "Inglês Cambridge C2"], ["03", "Brasil ↔ Estados Unidos"]],
    manifestoKicker: "O TRABALHO",
    manifesto: <>Rafael projeta software para o ponto em que <span>produto, domínio e operação</span> deixam de ser problemas separados.</>,
    manifestoBody: "Sua experiência atravessa SaaS multi-tenant, inteligência logística, aplicativos publicados e plataformas com domínios sensíveis. O objetivo é sempre o mesmo: reduzir ambiguidade, tornar decisões explícitas e deixar o sistema melhor do que foi encontrado.",
    principles: [
      ["Domínio antes do framework", "A arquitetura começa nas regras que o produto precisa proteger — não na ferramenta da vez."],
      ["Qualidade como estratégia", "Testes orientados a risco, contratos consistentes e ambientes repetíveis reduzem o custo de mudar."],
      ["Operação faz parte do código", "Filas, observabilidade, segurança e falhas são tratados como parte do produto, não como acabamento."],
    ],
    experienceKicker: "EXPERIÊNCIA / 2023—AGORA",
    experienceTitle: "Sistemas reais. Contextos diferentes. A mesma obsessão por clareza.",
    experiences: [
      {
        period: "ATUAL",
        company: "Domus Control",
        role: "Desenvolvedor Backend Pleno",
        location: "Remoto",
        copy: "Rafael conduz a evolução do backend de uma plataforma SaaS multi-tenant para gestão eclesiástica, definindo padrões de API, camadas de domínio e convenções usadas pelo time.",
        impact: ["Isolamento multi-tenant em banco único", "Autenticação, autorização e domínios financeiros", "Estratégia de testes E2E orientada a risco"],
        stack: "PHP 8.4 · Laravel 12 · PostgreSQL · Redis · Docker · Pest",
      },
      {
        period: "2025—2026",
        company: "Zinger Transportation, LLC",
        role: "Desenvolvedor Backend Pleno",
        location: "Texas, EUA / Remoto",
        copy: "Em um ambiente internacional e 100% em inglês, Rafael desenvolveu microsserviços para inteligência logística e motores de cálculo de consumo e viabilidade financeira de fretes.",
        impact: ["Arquitetura orientada a domínio", "Integrações governamentais e privadas", "Testes de precificação e simulação de rotas"],
        stack: "Node.js · TypeScript · REST · Jest · Docker · DDD",
      },
      {
        period: "2023—AGORA",
        company: "Autonomus",
        role: "Cofundador & Desenvolvedor Backend",
        location: "Brasil",
        copy: "Rafael levou um produto da ideia às lojas: dois aplicativos Flutter conectados a um backend Laravel, com participação em arquitetura, produto, desenvolvimento e publicação.",
        impact: ["Apps para cliente e prestador", "App Store e Google Play", "Semifinalista do Rocket, do Grupo Globo"],
        stack: "Flutter · Dart · Laravel · Redis · DDD · Mobile",
      },
    ],
    capabilitiesKicker: "SISTEMAS / NÃO BUZZWORDS",
    capabilitiesTitle: <>Profundidade no backend.<br /><em>Visão do produto inteiro.</em></>,
    capabilityGroups: [
      ["Backend & arquitetura", "PHP 8.4 · Laravel 12 · Node.js · TypeScript · Java · APIs REST · Microsserviços · DDD · Design Patterns"],
      ["Dados & processamento", "PostgreSQL · SQL · Redis · Kafka · RabbitMQ · Queues / Jobs · Value Objects · Multi-tenancy"],
      ["Produto & interfaces", "Flutter · Dart · React · JavaScript · Publicação na App Store e Google Play · C# / .NET · Angular"],
      ["Cloud, qualidade & IA", "AWS · Azure · Oracle Cloud · Docker · Linux · CI/CD · Pest · Jest · E2E · Observabilidade · LLMs · Python"],
    ],
    featureKicker: "CASO / AUTONOMUS",
    featureTitle: <>Da ideia<br />às <em>lojas.</em></>,
    featureCopy: "Como cofundador, Rafael participou de todo o ciclo de um marketplace de serviços: concepção, arquitetura, backend, aplicativos, operação e publicação. O produto chegou à App Store e ao Google Play e foi semifinalista do Rocket, reality show de startups do Grupo Globo.",
    featureStats: [["02", "aplicativos Flutter"], ["100%", "do ciclo de produto"], ["03", "instituições validadoras"]],
    featureLink: "Ver cobertura da Globo",
    credentialsKicker: "FORMAÇÃO / IDIOMAS / CREDENCIAIS",
    credentialsTitle: "Base técnica, repertório de produto e comunicação internacional.",
    credentials: [
      ["Formação", "Análise e Desenvolvimento de Sistemas", "Fundação Getulio Vargas (FGV) · 2025—2027"],
      ["Idiomas", "Inglês C2 Cambridge", "Português nativo · Inglês proficiente · Espanhol avançado"],
      ["Certificações", "Cloud, dados, privacidade e Java", "Google Data Analytics · Oracle Cloud Infrastructure · IBM Machine Learning · IBM Data Privacy · Santander"],
      ["Comunidade", "Palestrante de tecnologia", "Summit Iguassu Valley e eventos nas regiões de Foz do Iguaçu e Cascavel"],
    ],
    system: {
      nav: [["Runtime", "#sys-runtime"], ["Topologia", "#sys-topology"], ["Dossiê", "#sys-dossier"], ["Contato", "#sys-contact"]],
      switchReality: "Reality 02 / Sair",
      kicker: "RM / SYSTEM PROFILE / 2026",
      role: "BACKEND DEVELOPER",
      intro: "Rafael constrói sistemas para domínios que não toleram ambiguidade. Arquitetura, dados, processamento assíncrono e qualidade operam como uma única disciplina.",
      status: "SYSTEM ONLINE",
      location: "SÃO PAULO / BRASIL",
      identity: "SECONDARY IDENTITY / RM-02",
      signalTitle: "ACTIVE SIGNALS",
      signals: ["SAAS MULTI-TENANT", "LOGISTICS INTELLIGENCE", "DOMAIN ARCHITECTURE", "ASYNC PROCESSING", "INTERNATIONAL DELIVERY"],
      runtimeKicker: "RUNTIME LOG / 03 NODES",
      runtimeTitle: "Experiência carregada como histórico de execução.",
      topologyKicker: "SYSTEM TOPOLOGY / CAPABILITIES",
      topologyTitle: "Tecnologia organizada pela responsabilidade que assume.",
      dossierKicker: "VALIDATION PACKET / AUTONOMUS",
      dossierTitle: "Um produto levado da hipótese às lojas.",
      credentials: "CREDENTIAL REGISTRY",
      contactKicker: "OPEN CHANNEL / AVAILABLE",
      contactTitle: "Inicializar uma conversa.",
      contactBody: "Rafael está aberto a problemas difíceis, produtos sérios e times que tratam engenharia como vantagem competitiva.",
      email: "EXECUTE: SEND_EMAIL",
      resume: "DOWNLOAD_CV.PDF",
      footer: "RM SYSTEM VIEW / BACKEND ENGINEERING",
    },
    contactKicker: "PRÓXIMO SISTEMA",
    contactTitle: <>Tem um problema<br />difícil de explicar?</>,
    contactBody: "É exatamente aí que Rafael gosta de começar.",
    email: "Enviar um e-mail",
    footer: "Backend Developer",
  },
  en: {
    nav: [["Work", "#trabalho"], ["Experience", "#experiencia"], ["Systems", "#sistemas"], ["Contact", "#contato"]],
    switchLabel: "Switch to Portuguese",
    language: "PT",
    overline: "BACKEND ENGINEER / SÃO PAULO, BRAZIL",
    title: <>Software built<br />for the <em>real world.</em></>,
    intro: "Rafael Molina is a Mid-level Backend Developer with international experience. He turns complex business rules into clear, testable systems built to operate.",
    status: "OPEN TO NEW OPPORTUNITIES",
    contact: "Talk to Rafael",
    contactDialog: {
      eyebrow: "DIRECT CHANNEL / CONTACT",
      title: "How would you like to connect?",
      description: "Copy the address to use anywhere or open your email application.",
      emailLabel: "Professional email",
      copy: "Copy email",
      copied: "Email copied",
      openMail: "Open email app",
      close: "Close",
    },
    resume: "Updated résumé",
    portraitAlt: "Rafael Molina",
    portraitNote: "RAFAEL MOLINA / 2026",
    rails: [["01", "Production backend"], ["02", "Cambridge C2 English"], ["03", "Brazil ↔ United States"]],
    manifestoKicker: "THE WORK",
    manifesto: <>Rafael designs software where <span>product, domain and operations</span> stop being separate problems.</>,
    manifestoBody: "His experience spans multi-tenant SaaS, logistics intelligence, published apps and platforms with sensitive domains. The goal remains the same: reduce ambiguity, make decisions explicit and leave the system better than he found it.",
    principles: [
      ["Domain before framework", "Architecture starts with the rules the product must protect — not with the tool of the moment."],
      ["Quality as strategy", "Risk-based tests, consistent contracts and repeatable environments make change less expensive."],
      ["Operations are part of code", "Queues, observability, security and failure modes belong to the product, not to the finishing pass."],
    ],
    experienceKicker: "EXPERIENCE / 2023—NOW",
    experienceTitle: "Real systems. Different contexts. The same obsession with clarity.",
    experiences: [
      {
        period: "CURRENT",
        company: "Domus Control",
        role: "Mid-level Backend Developer",
        location: "Remote",
        copy: "Rafael leads the backend evolution of a multi-tenant SaaS platform for church management, defining API standards, domain layers and conventions used by the team.",
        impact: ["Single-database tenant isolation", "Authentication, authorization and financial domains", "Risk-based API E2E testing strategy"],
        stack: "PHP 8.4 · Laravel 12 · PostgreSQL · Redis · Docker · Pest",
      },
      {
        period: "2025—2026",
        company: "Zinger Transportation, LLC",
        role: "Mid-level Backend Developer",
        location: "Texas, USA / Remote",
        copy: "In a fully English-speaking international environment, Rafael built logistics intelligence microservices and calculation engines for fuel usage and freight viability.",
        impact: ["Domain-oriented architecture", "Government and private integrations", "Pricing and route simulation tests"],
        stack: "Node.js · TypeScript · REST · Jest · Docker · DDD",
      },
      {
        period: "2023—NOW",
        company: "Autonomus",
        role: "Co-founder & Backend Developer",
        location: "Brazil",
        copy: "Rafael took a product from idea to app stores: two Flutter apps connected to a Laravel backend, spanning architecture, product, engineering and release.",
        impact: ["Client and provider apps", "App Store and Google Play", "Rocket by Grupo Globo semifinalist"],
        stack: "Flutter · Dart · Laravel · Redis · DDD · Mobile",
      },
    ],
    capabilitiesKicker: "SYSTEMS / NOT BUZZWORDS",
    capabilitiesTitle: <>Backend depth.<br /><em>Whole-product perspective.</em></>,
    capabilityGroups: [
      ["Backend & architecture", "PHP 8.4 · Laravel 12 · Node.js · TypeScript · Java · REST APIs · Microservices · DDD · Design Patterns"],
      ["Data & processing", "PostgreSQL · SQL · Redis · Kafka · RabbitMQ · Queues / Jobs · Value Objects · Multi-tenancy"],
      ["Product & interfaces", "Flutter · Dart · React · JavaScript · App Store and Google Play releases · C# / .NET · Angular"],
      ["Cloud, quality & AI", "AWS · Azure · Oracle Cloud · Docker · Linux · CI/CD · Pest · Jest · E2E · Observability · LLMs · Python"],
    ],
    featureKicker: "CASE / AUTONOMUS",
    featureTitle: <>From idea<br />to the <em>stores.</em></>,
    featureCopy: "As co-founder, Rafael worked across the entire lifecycle of a services marketplace: concept, architecture, backend, apps, operations and release. The product reached the App Store and Google Play and became a semifinalist on Rocket, Grupo Globo's startup reality show.",
    featureStats: [["02", "Flutter applications"], ["100%", "of the product lifecycle"], ["03", "validating institutions"]],
    featureLink: "View Globo coverage",
    credentialsKicker: "EDUCATION / LANGUAGES / CREDENTIALS",
    credentialsTitle: "Technical foundation, product repertoire and international communication.",
    credentials: [
      ["Education", "Systems Analysis and Development", "Fundação Getulio Vargas (FGV) · 2025—2027"],
      ["Languages", "Cambridge C2 English", "Native Portuguese · Proficient English · Advanced Spanish"],
      ["Certifications", "Cloud, data, privacy and Java", "Google Data Analytics · Oracle Cloud Infrastructure · IBM Machine Learning · IBM Data Privacy · Santander"],
      ["Community", "Technology speaker", "Summit Iguassu Valley and regional technology events in Paraná, Brazil"],
    ],
    system: {
      nav: [["Runtime", "#sys-runtime"], ["Topology", "#sys-topology"], ["Dossier", "#sys-dossier"], ["Contact", "#sys-contact"]],
      switchReality: "Reality 02 / Exit",
      kicker: "RM / SYSTEM PROFILE / 2026",
      role: "BACKEND DEVELOPER",
      intro: "Rafael builds systems for domains that do not tolerate ambiguity. Architecture, data, asynchronous processing and quality operate as one discipline.",
      status: "SYSTEM ONLINE",
      location: "SÃO PAULO / BRAZIL",
      identity: "SECONDARY IDENTITY / RM-02",
      signalTitle: "ACTIVE SIGNALS",
      signals: ["MULTI-TENANT SAAS", "LOGISTICS INTELLIGENCE", "DOMAIN ARCHITECTURE", "ASYNC PROCESSING", "INTERNATIONAL DELIVERY"],
      runtimeKicker: "RUNTIME LOG / 03 NODES",
      runtimeTitle: "Experience loaded as an execution history.",
      topologyKicker: "SYSTEM TOPOLOGY / CAPABILITIES",
      topologyTitle: "Technology organized by the responsibility it carries.",
      dossierKicker: "VALIDATION PACKET / AUTONOMUS",
      dossierTitle: "A product taken from hypothesis to app stores.",
      credentials: "CREDENTIAL REGISTRY",
      contactKicker: "OPEN CHANNEL / AVAILABLE",
      contactTitle: "Initialize a conversation.",
      contactBody: "Rafael is open to difficult problems, serious products and teams that treat engineering as a competitive advantage.",
      email: "EXECUTE: SEND_EMAIL",
      resume: "DOWNLOAD_CV.PDF",
      footer: "RM SYSTEM VIEW / BACKEND ENGINEERING",
    },
    contactKicker: "THE NEXT SYSTEM",
    contactTitle: <>Have a problem<br />that is hard to explain?</>,
    contactBody: "That is exactly where Rafael likes to begin.",
    email: "Send an email",
    footer: "Backend Developer",
  },
};

type PortfolioContent = (typeof content)[Locale];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [reality, setReality] = useState<Reality>(1);
  const [targetReality, setTargetReality] = useState<Reality>(2);
  const [isShifting, setIsShifting] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const timers = useRef<number[]>([]);
  const t = content[locale];

  function toggleLocale() {
    const next = locale === "pt" ? "en" : "pt";
    setLocale(next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  }

  function switchReality() {
    if (isShifting) return;
    const next = reality === 1 ? 2 : 1;
    setTargetReality(next);
    setIsShifting(true);
    document.body.style.overflow = "hidden";

    timers.current.push(window.setTimeout(() => {
      setReality(next);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      try {
        window.sessionStorage.setItem("rm-reality", String(next));
      } catch {
        // Session storage is optional; the experience still works without it.
      }
    }, 560));

    timers.current.push(window.setTimeout(() => {
      setIsShifting(false);
      document.body.style.overflow = "";
    }, 1240));
  }

  useEffect(() => {
    const activeTimers = timers.current;
    try {
      const saved = window.sessionStorage.getItem("rm-reality");
      if (saved === "2") activeTimers.push(window.setTimeout(() => setReality(2), 0));
    } catch {
      // Keep the editorial reality when storage is unavailable.
    }

    return () => {
      activeTimers.forEach(window.clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "r" && !event.metaKey && !event.ctrlKey && !event.altKey) {
        switchReality();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className={"reality-root reality-active-" + reality}>
      <RealitySplash active={isShifting} target={targetReality} />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} t={t} reality={reality} />
      {reality === 1
        ? <EditorialReality t={t} toggleLocale={toggleLocale} switchReality={switchReality} openContact={() => setContactOpen(true)} />
        : <SystemReality t={t} toggleLocale={toggleLocale} switchReality={switchReality} openContact={() => setContactOpen(true)} />}
    </div>
  );
}

function RealitySplash({ active, target }: { active: boolean; target: Reality }) {
  return (
    <div className={"reality-splash reality-splash-" + target + (active ? " is-active" : "")} aria-hidden={!active}>
      <div className="splash-coordinates">RM / REALITY ENGINE / 2026</div>
      <div className="splash-center">
        <span>REALITY SHIFT</span>
        <strong>RM—0{target}</strong>
        <p>{target === 2 ? "RECONSTRUCTING SYSTEM VIEW" : "RESTORING EDITORIAL VIEW"}</p>
      </div>
      <div className="splash-progress">{Array.from({ length: 8 }).map((_, index) => <i key={index} />)}</div>
    </div>
  );
}

function ContactDialog({
  open,
  onOpenChange,
  t,
  reality,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  t: PortfolioContent;
  reality: Reality;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  function handleOpenChange(next: boolean) {
    if (!next) setCopied(false);
    onOpenChange(next);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      const field = document.createElement("textarea");
      field.value = profile.email;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
      setCopied(true);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={"contact-dialog contact-dialog-native contact-dialog-" + reality}
      onCancel={(event) => { event.preventDefault(); handleOpenChange(false); }}
      onClick={(event) => { if (event.target === event.currentTarget) handleOpenChange(false); }}
    >
      <button className="contact-dialog-close" type="button" onClick={() => handleOpenChange(false)} aria-label={t.contactDialog.close}><X /></button>
      <header className="contact-dialog-header">
        <span>{t.contactDialog.eyebrow}</span>
        <h2 className="contact-dialog-title">{t.contactDialog.title}</h2>
        <p className="contact-dialog-description">{t.contactDialog.description}</p>
      </header>
      <div className="contact-email-card">
        <span>{t.contactDialog.emailLabel}</span>
        <strong>{profile.email}</strong>
      </div>
      <div className="contact-dialog-actions">
        <button className="contact-copy-button" type="button" onClick={copyEmail}>
          {copied ? <Check /> : <Copy />}{copied ? t.contactDialog.copied : t.contactDialog.copy}
        </button>
        <a className="contact-mail-button" href={'mailto:' + profile.email}><Mail />{t.contactDialog.openMail}</a>
      </div>
    </dialog>
  );
}

function EditorialReality({
  t,
  toggleLocale,
  switchReality,
  openContact,
}: {
  t: PortfolioContent;
  toggleLocale: () => void;
  switchReality: () => void;
  openContact: () => void;
}) {
  return (
    <main id="top" className="editorial-reality">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rafael Molina — início">RM<span>26</span></a>
        <nav aria-label="Navegação principal">
          {t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-controls">
          <button className="reality-switch editorial-switch" type="button" onClick={switchReality}>
            <span>REALITY 01</span> SWITCH [R]
          </button>
          <button className="language-button" type="button" onClick={toggleLocale} aria-label={t.switchLabel}>{t.language}</button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="overline"><span />{t.overline}</p>
          <h1 id="hero-title">{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <button className="action action-primary" type="button" onClick={openContact}><Mail />{t.contact}</button>
            <a className="action action-outline" href={profile.resume} download><Download />{t.resume}</a>
          </div>
        </div>

        <div className="portrait-wrap">
          <Image
            src="/profilepic.jpeg"
            alt={t.portraitAlt}
            fill
            priority
            sizes="(max-width: 720px) calc(100vw - 40px), 34vw"
          />
          <div className="portrait-wash" />
        </div>

        <div className="availability"><i />{t.status}</div>
        <a className="scroll-cue" href="#trabalho" aria-label="Rolar para o trabalho"><span>SCROLL</span><ArrowDownRight /></a>
      </section>

      <div className="proof-rail">
        {t.rails.map(([number, label]) => <div key={number}><span>{number}</span><strong>{label}</strong></div>)}
      </div>

      <section className="manifesto" id="trabalho">
        <div className="section-index"><span>01</span><p>{t.manifestoKicker}</p></div>
        <div className="manifesto-content">
          <h2>{t.manifesto}</h2>
          <p className="manifesto-body">{t.manifestoBody}</p>
          <div className="principles">
            {t.principles.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="experience-heading">
          <p>{t.experienceKicker}</p>
          <h2>{t.experienceTitle}</h2>
        </div>
        <div className="experience-list">
          {t.experiences.map((item, index) => (
            <article className="experience-row" key={item.company}>
              <div className="experience-number">0{index + 1}</div>
              <div className="experience-company">
                <span>{item.period}</span>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <div className="experience-detail">
                <span>{item.location}</span>
                <p>{item.copy}</p>
                <ul>{item.impact.map(point => <li key={point}>{point}</li>)}</ul>
                <small>{item.stack}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section" id="sistemas">
        <div className="capabilities-heading">
          <p>{t.capabilitiesKicker}</p>
          <h2>{t.capabilitiesTitle}</h2>
        </div>
        <div className="capability-list">
          {t.capabilityGroups.map(([title, tools], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{tools}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-topline"><span>{t.featureKicker}</span><span>2023—NOW</span></div>
        <div className="feature-grid">
          <h2>{t.featureTitle}</h2>
          <div className="feature-copy">
            <p>{t.featureCopy}</p>
            <a href="https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml" target="_blank" rel="noreferrer">
              {t.featureLink}<ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="feature-stats">
          {t.featureStats.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="credentials-section">
        <div className="credentials-heading">
          <p>{t.credentialsKicker}</p>
          <h2>{t.credentialsTitle}</h2>
        </div>
        <div className="credentials-list">
          {t.credentials.map(([type, title, detail], index) => (
            <article key={type}>
              <span>0{index + 1}</span>
              <p>{type}</p>
              <h3>{title}</h3>
              <small>{detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <p>{t.contactKicker}</p>
        <h2>{t.contactTitle}</h2>
        <div className="contact-bottom">
          <span>{t.contactBody}</span>
          <button className="contact-email-trigger" type="button" onClick={openContact}>{t.email}<ArrowUpRight /></button>
        </div>
      </section>

      <footer>
        <button className="footer-email-trigger" type="button" onClick={openContact}>{profile.email}</button>
        <p>© {new Date().getFullYear()} RAFAEL MOLINA<br />{t.footer}</p>
        <div>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><span>in</span></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubMark /></a>
        </div>
      </footer>
    </main>
  );
}

function SystemReality({
  t,
  toggleLocale,
  switchReality,
  openContact,
}: {
  t: PortfolioContent;
  toggleLocale: () => void;
  switchReality: () => void;
  openContact: () => void;
}) {
  const s = t.system;

  return (
    <main className="system-reality" id="sys-top">
      <header className="system-header">
        <a className="system-brand" href="#sys-top"><span>RM</span><b>{"//02"}</b></a>
        <div className="system-online"><i />{s.status}</div>
        <nav aria-label="System navigation">
          {s.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="system-header-actions">
          <button className="system-reality-switch" type="button" onClick={switchReality}>{s.switchReality}<kbd>R</kbd></button>
          <button className="system-language" type="button" onClick={toggleLocale} aria-label={t.switchLabel}>{t.language}</button>
        </div>
      </header>

      <section className="system-hero">
        <div className="system-ruler" aria-hidden="true">
          {["00", "20", "40", "60", "80", "100"].map(value => <span key={value}>{value}</span>)}
        </div>
        <div className="system-serial">
          <span>PROFILE_ID</span><strong>RM-BE-2608</strong>
          <span>LOCATION</span><strong>{s.location}</strong>
          <span>LANGUAGE</span><strong>PT / EN-C2 / ES</strong>
        </div>
        <div className="system-hero-copy">
          <p>{s.kicker}</p>
          <h1><span>Rafael</span><strong>Molina</strong></h1>
          <div className="system-role-line"><b>{s.role}</b><span>{"///"}</span><i>{s.status}</i></div>
          <p className="system-intro">{s.intro}</p>
          <div className="system-actions">
            <button className="system-primary" type="button" onClick={openContact}><Mail />{t.contact}</button>
            <a className="system-secondary" href={profile.resume} download><Download />{s.resume}</a>
          </div>
        </div>
        <aside className="system-identity">
          <div className="system-image-frame">
            <Image
              src="/rafael-system.jpeg"
              alt={t.portraitAlt}
              fill
              priority
              sizes="(max-width: 780px) calc(100vw - 40px), 32vw"
            />
            <span>{s.identity}</span>
          </div>
          <div className="identity-readout">
            <span>CLASS</span><b>BACKEND_ENGINEER</b>
            <span>STATUS</span><b className="readout-online">AVAILABLE</b>
          </div>
        </aside>
      </section>

      <section className="system-signal-strip" aria-label={s.signalTitle}>
        <div><span>01</span><b>{s.signalTitle}</b></div>
        {s.signals.map((signal, index) => <div key={signal}><span>0{index + 2}</span><strong>{signal}</strong></div>)}
      </section>

      <section className="system-runtime" id="sys-runtime">
        <div className="system-section-heading">
          <div><span>01</span><p>{s.runtimeKicker}</p></div>
          <h2>{s.runtimeTitle}</h2>
        </div>
        <div className="runtime-nodes">
          {t.experiences.map((item, index) => (
            <article className="runtime-node" key={item.company}>
              <div className="runtime-node-index">NODE_0{index + 1}</div>
              <div className="runtime-node-meta"><span>{item.period}</span><span>{item.location}</span></div>
              <div className="runtime-node-title"><h3>{item.company}</h3><p>{item.role}</p></div>
              <p className="runtime-node-copy">{item.copy}</p>
              <div className="runtime-output">
                <span>OUTPUT</span>
                <ul>{item.impact.map(point => <li key={point}>{point}</li>)}</ul>
              </div>
              <div className="runtime-stack"><span>DEPENDENCIES</span><p>{item.stack}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="system-topology" id="sys-topology">
        <div className="system-section-heading">
          <div><span>02</span><p>{s.topologyKicker}</p></div>
          <h2>{s.topologyTitle}</h2>
        </div>
        <div className="topology-grid">
          {t.capabilityGroups.map(([title, tools], index) => (
            <article key={title}>
              <header><span>MODULE_0{index + 1}</span><i>ACTIVE</i></header>
              <h3>{title}</h3>
              <p>{tools}</p>
              <div className="module-meter">{Array.from({ length: 12 }).map((_, meter) => <i key={meter} className={meter <= 7 + index ? "is-on" : ""} />)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="system-dossier" id="sys-dossier">
        <div className="dossier-feature">
          <p>{s.dossierKicker}</p>
          <h2>{s.dossierTitle}</h2>
          <div className="dossier-body">
            <p>{t.featureCopy}</p>
            <a href="https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml" target="_blank" rel="noreferrer">
              {t.featureLink}<ArrowUpRight />
            </a>
          </div>
          <div className="dossier-stats">
            {t.featureStats.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
        <div className="credential-registry">
          <header><span>{s.credentials}</span><b>04 RECORDS</b></header>
          {t.credentials.map(([type, title, detail], index) => (
            <article key={type}>
              <span>CRD-0{index + 1}</span>
              <p>{type}</p>
              <h3>{title}</h3>
              <small>{detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="system-contact" id="sys-contact">
        <div className="contact-command"><span>&gt;</span><p>{s.contactKicker}</p><i /></div>
        <h2>{s.contactTitle}</h2>
        <p>{s.contactBody}</p>
        <div>
          <button className="system-contact-primary" type="button" onClick={openContact}>{s.email}<ArrowUpRight /></button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GITHUB ↗</a>
        </div>
      </section>

      <footer className="system-footer">
        <span>{s.footer}</span>
        <span>© {new Date().getFullYear()} RAFAEL MOLINA</span>
        <a href="#sys-top">RETURN_TO_TOP ↑</a>
      </footer>
    </main>
  );
}

function GithubMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.64 5.47 7.71.4.08.55-.17.55-.39 0-.19-.01-.83-.01-1.51-2.01.38-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.15-.68-.53-.01-.54.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.21-3.64-.91-3.64-4.01 0-.89.31-1.62.82-2.19-.08-.21-.36-1.04.08-2.16 0 0 .67-.22 2.2.84A7.46 7.46 0 0 1 8 3.92c.68 0 1.36.09 2 .27 1.53-1.06 2.2-.84 2.2-.84.44 1.12.16 1.95.08 2.16.51.57.82 1.3.82 2.19 0 3.11-1.87 3.8-3.65 4.01.29.25.54.74.54 1.51 0 1.09-.01 1.97-.01 2.24 0 .22.15.47.55.39A8.16 8.16 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z"
      />
    </svg>
  );
}
