"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Check, Download, ExternalLink, Github, Linkedin, Mail, Server, ShieldCheck, Workflow } from "lucide-react";
import { EmailContact } from "@/components/EmailContact";
import { dictionary, globoHref, languageOptions, type Locale, type PortfolioContent } from "@/data/i18n";
import { profile } from "@/data/portfolio";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("pt-BR");
  const t = dictionary[locale];
  const resume = locale === "pt-BR" ? profile.resumePt : profile.resumeEn;

  const changeLocale = (next: Locale) => {
    setLocale(next);
    document.documentElement.lang = next;
  };

  return <main>
    <Header t={t} locale={locale} changeLocale={changeLocale} />
    <Hero t={t} resume={resume} />
    <Experience t={t} />
    <Expertise t={t} />
    <Autonomus t={t} />
    <Credentials t={t} />
    <Contact t={t} resume={resume} />
    <footer><span>© {new Date().getFullYear()} Rafael Oliveira Molina</span><span>Backend / Full Stack Developer</span></footer>
  </main>;
}

function Header({ t, locale, changeLocale }: { t: PortfolioContent; locale: Locale; changeLocale: (locale: Locale) => void }) {
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Rafael Oliveira Molina">RM<span>.</span></a>
    <nav aria-label={t.aria.mainNav}>
      <a href="#experience">{t.nav.experience}</a><a href="#expertise">{t.nav.expertise}</a>
      <a href="#autonomus">{t.nav.autonomus}</a><a href="#credentials">{t.nav.credentials}</a>
    </nav>
    <div className="header-actions">
      <div className="language" aria-label={t.aria.language}>
        {languageOptions.map(option => <button key={option.locale} type="button" onClick={() => changeLocale(option.locale)} aria-pressed={locale === option.locale} title={option.label}>{option.short}</button>)}
      </div>
      <a className="icon-button" href="#contact" aria-label={t.nav.contact}><Mail size={18} /></a>
    </div>
  </header>;
}

function Hero({ t, resume }: { t: PortfolioContent; resume: string }) {
  return <section className="hero" id="top">
    <div className="hero-copy">
      <p className="eyebrow"><span />{t.hero.status}</p>
      <h1>Rafael Oliveira<br /><strong>Molina</strong></h1>
      <p className="role">{t.hero.role}</p>
      <h2>{t.hero.lead}</h2>
      <p className="hero-text">{t.hero.support}</p>
      <div className="button-row" aria-label={t.aria.heroActions}>
        <EmailContact email={profile.email} label={t.hero.contact} className="button primary" messages={t.emailModal} />
        <a className="button" href={resume} download><Download size={18} />{t.hero.resume}</a>
        <a className="icon-button" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
        <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
      </div>
      <div className="proof-row">{t.hero.proof.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
    </div>
    <aside className="profile-panel" aria-label={t.aria.profile}>
      <div className="profile-head"><div className="portrait"><Image src="/profilepic.jpeg" alt="Rafael Oliveira Molina" fill priority sizes="104px" /></div><div><span>{t.snapshot.label}</span><h2>{t.snapshot.title}</h2><p>{t.snapshot.subtitle}</p></div></div>
      <div className="signal-grid">{t.snapshot.signals.map(signal => <div key={signal}><Check size={16} /><span>{signal}</span></div>)}</div>
      <div className="stack"><span>{t.snapshot.stackLabel}</span><div>{t.snapshot.stack.map(item => <b key={item}>{item}</b>)}</div></div>
    </aside>
  </section>;
}

function Heading({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return <div className="section-heading"><span>{kicker}</span><h2>{title}</h2><p>{description}</p></div>;
}

function Experience({ t }: { t: PortfolioContent }) {
  return <section className="section" id="experience"><Heading kicker={t.experience.kicker} title={t.experience.title} description={t.experience.description} />
    <div className="experience-list">{t.experience.items.map((item, index) => <article className={item.featured ? "experience featured" : "experience"} key={item.company}>
      <div className="experience-meta"><span>0{index + 1}</span><p>{item.period === "Atual" || item.period === "Current" ? <b>{t.experience.current}</b> : item.period}</p></div>
      <div className="experience-body"><div className="job-heading"><div><h3>{item.company}</h3><h4>{item.role}</h4></div><span>{item.location}</span></div><p className="summary">{item.summary}</p>
        <ul>{item.highlights.map(text => <li key={text}><Check size={16} />{text}</li>)}</ul><Tags items={item.stack} /></div>
    </article>)}</div>
  </section>;
}

function Expertise({ t }: { t: PortfolioContent }) {
  const icons = [Server, Workflow, ShieldCheck];
  return <section className="expertise-band" id="expertise"><div className="section"><Heading kicker={t.expertise.kicker} title={t.expertise.title} description={t.expertise.description} />
    <div className="expertise-grid">{t.expertise.groups.map((group, index) => { const Icon = icons[index]; return <article key={group.title}><Icon size={22} /><h3>{group.title}</h3><p>{group.description}</p><Tags items={group.items} /></article>; })}</div>
    <div className="secondary"><span>{t.expertise.secondary}</span><div><p>{t.expertise.secondaryText}</p><Tags items={["Java", "C# / .NET"]} /></div></div>
  </div></section>;
}

function Autonomus({ t }: { t: PortfolioContent }) {
  return <section className="section autonomus" id="autonomus"><div><Heading kicker={t.autonomus.kicker} title={t.autonomus.title} description={t.autonomus.description} />
    <ul>{t.autonomus.highlights.map(item => <li key={item}><Check size={17} />{item}</li>)}</ul><blockquote>{t.autonomus.recognition}</blockquote>
    <a className="button primary" href={globoHref} target="_blank" rel="noreferrer"><ExternalLink size={18} />{t.autonomus.media}</a></div>
    <div className="architecture"><div className="architecture-title"><Workflow size={18} /><span>PRODUCT / ARCHITECTURE</span></div>{t.autonomus.architecture.map((item, index) => <div className="architecture-node" key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < t.autonomus.architecture.length - 1 && <ArrowUpRight size={16} />}</div>)}</div>
  </section>;
}

function Credentials({ t }: { t: PortfolioContent }) {
  return <section className="section" id="credentials"><Heading kicker={t.credentials.kicker} title={t.credentials.title} description={t.credentials.description} />
    <div className="credentials">{t.credentials.items.map((item, index) => { const body = <><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.issuer}</p></div>{item.href && <ArrowUpRight size={18} />}</>; return item.href ? <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>{body}</a> : <div key={item.title}>{body}</div>; })}</div>
    <div className="education"><div><span>{t.education.kicker}</span><h3>{t.education.title}</h3><p>{t.education.degree}</p></div><div><strong>{t.education.period}</strong><span>{t.education.note}</span></div></div>
  </section>;
}

function Contact({ t, resume }: { t: PortfolioContent; resume: string }) {
  return <section className="contact" id="contact"><span>{t.contact.kicker}</span><h2>{t.contact.title}</h2><p>{t.contact.description}</p><div className="button-row"><EmailContact email={profile.email} label={t.contact.email} className="button primary" messages={t.emailModal} /><a className="button" href={resume} download><Download size={18} />{t.contact.resume}</a><a className="button" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn</a></div></section>;
}

function Tags({ items }: { items: string[] }) { return <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>; }
