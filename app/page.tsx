"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  MonitorCheck,
  RadioTower,
  Server,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { EmailContact } from "@/components/EmailContact";
import { dictionary, languageOptions, type Locale, type LocalizedProject, type PortfolioContent } from "@/data/i18n";
import { profile } from "@/data/portfolio";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pt-BR");
  const t = dictionary[locale];
  const resumeHref = locale === "pt-BR" ? profile.resumePt : profile.resumeEn;

  function selectLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
  }

  return (
    <main>
      <Header t={t} locale={locale} onSelectLocale={selectLocale} />
      <Hero t={t} resumeHref={resumeHref} />
      <TrustSignals t={t} />
      <SelectedSystems t={t} />
      <AutonomusCase t={t} />
      <CapabilityMap t={t} />
      <AboutSection t={t} />
      <CredentialsSection t={t} />
      <EducationLeadership t={t} />
      <FinalCta t={t} resumeHref={resumeHref} />
      <Footer t={t} />
    </main>
  );
}

function Header({
  t,
  locale,
  onSelectLocale,
}: {
  t: PortfolioContent;
  locale: Locale;
  onSelectLocale: (locale: Locale) => void;
}) {
  return (
    <header className="site-header" aria-label={t.aria.mainNav}>
      <a className="brand-mark" href="#top" aria-label="Rafael Molina Command Center">
        <span>RM</span>
      </a>

      <nav className="desktop-nav" aria-label={t.aria.sectionsNav}>
        {t.navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-tools">
        <LanguageSwitcher t={t} locale={locale} onSelectLocale={onSelectLocale} />
        <EmailContact email={profile.email} label={t.hero.contact} className="header-action" iconSize={16} messages={t.emailModal} />
      </div>
    </header>
  );
}

function LanguageSwitcher({
  t,
  locale,
  onSelectLocale,
}: {
  t: PortfolioContent;
  locale: Locale;
  onSelectLocale: (locale: Locale) => void;
}) {
  return (
    <div className="language-switcher" aria-label={t.aria.languageSwitcher}>
      {languageOptions.map((option) => (
        <button
          key={option.locale}
          type="button"
          className={option.locale === locale ? "active" : undefined}
          onClick={() => onSelectLocale(option.locale)}
          aria-pressed={option.locale === locale}
          title={option.label}
        >
          {option.short}
        </button>
      ))}
    </div>
  );
}

function Hero({ t, resumeHref }: { t: PortfolioContent; resumeHref: string }) {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {t.hero.availability}
          </div>

          <h1>{profile.name}</h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-lead">{t.hero.lead}</p>
          <p className="hero-support">{t.hero.support}</p>

          <div className="hero-actions" aria-label={t.aria.heroActions}>
            <a className="button primary" href={resumeHref} download>
              <Download size={18} aria-hidden="true" />
              {t.hero.resume}
            </a>
            <EmailContact email={profile.email} label={t.hero.email} messages={t.emailModal} />
            <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} aria-hidden="true" />
            </a>
            <a
              className="icon-button"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-stats" aria-label={t.aria.heroSummary}>
            {t.hero.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <CommandPanel t={t} />
      </div>
    </section>
  );
}

function CommandPanel({ t }: { t: PortfolioContent }) {
  return (
    <aside className="command-shell reveal reveal-delay-1" aria-label={t.aria.commandPanel}>
      <div className="shell-topbar">
        <span className="window-dot cyan" />
        <span className="window-dot amber" />
        <span className="window-dot green" />
        <span className="shell-title">command-center/live</span>
      </div>

      <div className="identity-strip">
        <div className="avatar-frame">
          <Image
            src="/profilepic.jpeg"
            alt="Foto de Rafael Molina"
            fill
            sizes="112px"
            priority
          />
        </div>
        <div>
          <span className="mini-label">{t.command.operatorLabel}</span>
          <strong>Rafael Molina</strong>
          <p>{t.command.operatorDescription}</p>
        </div>
      </div>

      <div className="telemetry-stack">
        <div className="telemetry-module production">
          <div className="module-header">
            <RadioTower size={17} aria-hidden="true" />
            <span>{t.command.productionTitle}</span>
          </div>
          <ul className="signal-list">
            {t.command.productionSignals.map((signal) => (
              <li key={signal}>
                <CheckCircle2 size={15} aria-hidden="true" />
                {signal}
              </li>
            ))}
          </ul>
        </div>

        <div className="telemetry-module">
          <div className="module-header">
            <Code2 size={17} aria-hidden="true" />
            <span>{t.command.coreStackTitle}</span>
          </div>
          <div className="stack-grid">
            {t.command.coreStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="telemetry-module">
          <div className="module-header">
            <Activity size={17} aria-hidden="true" />
            <span>{t.command.focusTitle}</span>
          </div>
          <div className="focus-radar">
            {t.command.focusItems.map((item, index) => (
              <span key={item} style={{ "--delay": `${index * 130}ms` } as CSSProperties}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function TrustSignals({ t }: { t: PortfolioContent }) {
  return (
    <section className="section-shell" id="signals">
      <SectionHeading
        kicker={t.trust.kicker}
        title={t.trust.title}
        description={t.trust.description}
      />

      <div className="trust-grid">
        {t.trust.signals.map((signal, index) => (
          <a
            className="trust-card"
            key={signal.label}
            href={signal.href ?? "#credentials"}
            target={signal.href ? "_blank" : undefined}
            rel={signal.href ? "noreferrer" : undefined}
            style={{ "--delay": `${index * 60}ms` } as CSSProperties}
          >
            <span className="trust-index">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{signal.label}</strong>
              <span>{signal.value}</span>
              <p>{signal.detail}</p>
            </div>
            {signal.href ? <ArrowUpRight size={18} aria-hidden="true" /> : <BadgeCheck size={18} aria-hidden="true" />}
          </a>
        ))}
      </div>
    </section>
  );
}

function SelectedSystems({ t }: { t: PortfolioContent }) {
  return (
    <section className="section-shell" id="systems">
      <SectionHeading
        kicker={t.systems.kicker}
        title={t.systems.title}
        description={t.systems.description}
      />

      <div className="featured-systems">
        {t.systems.projects.map((project, index) => (
          <ProjectFeature key={project.title} project={project} index={index} t={t} />
        ))}
      </div>
    </section>
  );
}

function ProjectFeature({ project, index, t }: { project: LocalizedProject; index: number; t: PortfolioContent }) {
  return (
    <article className={`system-feature accent-${project.accent}`}>
      <div className="system-visual">
        <a
          className="visual-link"
          href={getPrimaryProjectHref(project)}
          target="_blank"
          rel="noreferrer"
          aria-label={`${t.aria.openProject} ${project.title}`}
        >
          <Image
            src={project.image}
            alt={`${t.aria.projectImage} ${project.title}`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </a>
        <span className="system-status">
          <span aria-hidden="true" />
          {project.status}
        </span>
      </div>

      <div className="system-content">
        <div className="case-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="system-summary">{project.summary}</p>

        <div className="case-columns">
          <div>
            <span className="mini-label">{t.systems.problem}</span>
            <p>{project.problem}</p>
          </div>
          <div>
            <span className="mini-label">{t.systems.contribution}</span>
            <p>{project.contribution}</p>
          </div>
        </div>

        <ul className="highlight-list">
          {project.highlights.map((highlight) => (
            <li key={highlight}>
              <CheckCircle2 size={15} aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>

        <TechRail items={project.stack} />
        <ProjectLinks project={project} t={t} />
      </div>
    </article>
  );
}

function AutonomusCase({ t }: { t: PortfolioContent }) {
  return (
    <section className="autonomus-section" id="autonomus">
      <div className="section-shell autonomus-grid">
        <div>
          <SectionHeading
            kicker={t.autonomus.kicker}
            title={t.autonomus.title}
            description={t.autonomus.description}
          />

          <p className="autonomus-lead">{t.autonomus.lead}</p>

          <div className="narrative-steps">
            {t.autonomus.steps.map(([title, text]) => (
              <article key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <a
            className="button primary autonomus-link"
            href="https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={18} aria-hidden="true" />
            {t.autonomus.mediaButton}
          </a>
        </div>

        <div className="system-map" aria-label={t.aria.autonomusMap}>
          <div className="map-header">
            <Workflow size={18} aria-hidden="true" />
            <span>{t.autonomus.mapTitle}</span>
          </div>
          <div className="map-flow">
            {t.autonomus.nodes.map((node, index) => (
              <div className="map-node" key={node}>
                <span className="node-index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{node}</strong>
                {index < t.autonomus.nodes.length - 1 ? <span className="flow-line" aria-hidden="true" /> : null}
              </div>
            ))}
          </div>
          <div className="map-footer">
            {t.autonomus.footerTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityMap({ t }: { t: PortfolioContent }) {
  const icons = [Layers3, Server, Database, Workflow, Sparkles, MonitorCheck];

  return (
    <section className="section-shell" id="capabilities">
      <SectionHeading
        kicker={t.capabilities.kicker}
        title={t.capabilities.title}
        description={t.capabilities.description}
      />

      <div className="capability-grid">
        {t.capabilities.groups.map((group, index) => {
          const Icon = icons[index] ?? Boxes;
          return (
            <article className="capability-card" key={group.title}>
              <div className="capability-heading">
                <Icon size={19} aria-hidden="true" />
                <h3>{group.title}</h3>
              </div>
              <p>{group.description}</p>
              <TechRail items={group.items} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AboutSection({ t }: { t: PortfolioContent }) {
  return (
    <section className="about-section" id="about">
      <div className="section-shell about-grid">
        <div>
          <SectionHeading
            kicker={t.about.kicker}
            title={t.about.title}
            description={t.about.description}
          />
        </div>

        <div className="about-copy">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="work-principles">
            {t.about.principles.map((principle) => (
              <div key={principle}>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialsSection({ t }: { t: PortfolioContent }) {
  return (
    <section className="section-shell" id="credentials">
      <SectionHeading
        kicker={t.credentials.kicker}
        title={t.credentials.title}
        description={t.credentials.description}
      />

      <div className="credentials-grid">
        {t.credentials.items.map((credential, index) => (
          <article className="credential-card" key={credential.title}>
            <span className="credential-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{credential.title}</h3>
              <p>{credential.description}</p>
              {credential.href ? (
                <a href={credential.href} target="_blank" rel="noreferrer">
                  {t.credentials.verify}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : (
                <span className="credential-note">{t.credentials.note}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationLeadership({ t }: { t: PortfolioContent }) {
  return (
    <section className="section-shell education-section" id="education">
      <SectionHeading
        kicker={t.education.kicker}
        title={t.education.title}
        description={t.education.description}
      />

      <div className="education-grid">
        <article className="timeline-card">
          <div className="timeline-heading">
            <GraduationCap size={20} aria-hidden="true" />
            <h3>{t.education.educationTitle}</h3>
          </div>
          <div className="timeline-list">
            {t.education.items.map((item) => (
              <div key={item.title}>
                <span>{item.period}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="timeline-card">
          <div className="timeline-heading">
            <Users size={20} aria-hidden="true" />
            <h3>{t.education.leadershipTitle}</h3>
          </div>
          <div className="timeline-list">
            {t.education.leadership.map((item) => (
              <div key={item.title}>
                <span>{item.period}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function FinalCta({ t, resumeHref }: { t: PortfolioContent; resumeHref: string }) {
  return (
    <section className="final-cta" id="contact">
      <div className="cta-panel">
        <span className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {t.finalCta.status}
        </span>
        <h2>{t.finalCta.title}</h2>
        <p>{t.finalCta.description}</p>

        <div className="hero-actions">
          <EmailContact email={profile.email} label={t.finalCta.email} className="button primary" messages={t.emailModal} />
          <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a className="button" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a className="button" href={resumeHref} download>
            <Download size={18} aria-hidden="true" />
            {t.finalCta.resume}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: PortfolioContent }) {
  return (
    <footer className="footer">
      <span>Rafael Molina Command Center</span>
      <a href={profile.resumeEn} download>
        {t.footer.resumeEn}
      </a>
    </footer>
  );
}

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function TechRail({ items }: { items: string[] }) {
  return (
    <div className="tech-rail">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ProjectLinks({ project, t }: { project: LocalizedProject; t: PortfolioContent }) {
  return (
    <div className="project-links">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`${t.aria.openGithub} ${project.title}`}
      >
        <Github size={16} aria-hidden="true" />
        {t.systems.github}
      </a>
      {project.deploy ? (
        <a
          href={project.deploy}
          target="_blank"
          rel="noreferrer"
          aria-label={`${t.aria.openDeploy} ${project.title}`}
        >
          <ArrowUpRight size={16} aria-hidden="true" />
          {t.systems.deploy}
        </a>
      ) : null}
    </div>
  );
}

function getPrimaryProjectHref(project: LocalizedProject) {
  return project.deploy ?? project.github;
}
