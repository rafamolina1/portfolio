"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects, profile, trustSignals } from "../data/portfolio";

const pulls = [
  {
    org: "Google",
    repo: "gVisor",
    lang: "Go · C++",
    id: 17107,
    base: "gvisor/gvisor",
    pt: "Quem pode ler os dados de um processo?",
    en: "Who can read another process’s file metadata?",
    detail: [
      "Corrigi a verificação de permissões em /proc/[pid]/fdinfo. O gVisor agora exige acesso de leitura via ptrace, como no Linux. Escrevi testes para processos do mesmo usuário e de usuários diferentes.",
      "I fixed permission checks in /proc/[pid]/fdinfo. gVisor now requires ptrace read access as Linux does. I added tests for processes belonging to the same user and to different users.",
    ],
  },
  {
    org: "Cloudflare",
    repo: "Chanfana",
    lang: "TypeScript",
    id: 393,
    base: "cloudflare/chanfana",
    pt: "Migração da documentação para o ReDoc 3",
    en: "Migrating the API docs to ReDoc 3",
    detail: [
      "Atualizei o carregamento da interface para módulos ES, fixei a versão 3.1.0 e deixei a telemetria desativada por padrão.",
      "I switched the docs UI to ES modules, pinned version 3.1.0 and disabled telemetry by default.",
    ],
  },
  {
    org: "Cloudflare",
    repo: "Chanfana",
    lang: "TypeScript",
    id: 388,
    base: "cloudflare/chanfana",
    pt: "Controle sobre as extensões exibidas na API",
    en: "Control over which API extensions appear",
    detail: [
      "Adicionei redoc_options aos adaptadores Hono e itty-router para configurar os atributos do ReDoc. Cobri a mudança com 23 novos cenários de teste.",
      "I added redoc_options to the Hono and itty-router adapters so developers can configure ReDoc attributes. I covered the change with 23 new test cases.",
    ],
  },
];

export default function Home() {
  const [en, setEn] = useState(false);
  const t = (pt: string, eng: string) => (en ? eng : pt);
  useEffect(() => {
    document.documentElement.lang = en ? "en" : "pt-BR";
  }, [en]);
  const selected = [projects[1], projects[0]];
  return (
    <>
      <a className="skip" href="#main">
        {t("Pular para o conteúdo", "Skip to content")}
      </a>
      <header>
        <div className="wrap nav">
          <a className="brand" href="#main">
            rm<span>/</span>
          </a>
          <nav>
            <a href="#opensource">Open source</a>
            <a href="#experiencia">{t("Experiência", "Experience")}</a>
            <a href="#projetos">{t("Projetos", "Projects")}</a>
          </nav>
          <button
            onClick={() => setEn(!en)}
            aria-label={t("Switch to English", "Mudar para português")}
          >
            {en ? "PT" : "EN"}
          </button>
        </div>
      </header>
      <main id="main">
        <div className="wrap hero">
          <div className="bio">
            <p className="eyebrow">
              {t("Engenharia de software", "Software engineering")}{" "}
              <span>/</span> {t("Brasil", "Brazil")}
            </p>
            <h1>
              Rafael
              <br />
              <i>Molina.</i>
            </h1>
            <p className="lede">
              {t(
                "Desenvolvo sistemas de logística e SaaS. Fora do trabalho, contribuo com código para o gVisor do Google e o Chanfana da Cloudflare.",
                "I build logistics and SaaS systems. Outside work, I contribute code to Google’s gVisor and Cloudflare’s Chanfana.",
              )}
            </p>
            <div className="actions">
              <a className="primary" href="#opensource">
                {t("Explorar contribuições", "Explore contributions")} ↓
              </a>
              <a href={en ? profile.resumeEn : "/Rafael_Oliveira_Molina.pdf"}>
                {t("Currículo", "Résumé")} ↗
              </a>
            </div>
          </div>
          <figure className="portrait">
            <Image
              priority
              width={460}
              height={520}
              src="/rafael-system.jpeg"
              alt="Rafael Molina"
            />
            <figcaption>
              <span>Rafael Oliveira Molina</span>
              <span>Backend Engineer</span>
            </figcaption>
          </figure>
        </div>
        <section id="opensource" className="ink">
          <div className="wrap">
            <div className="sectionhead">
              <div>
                <p className="eyebrow">
                  GitHub /{" "}
                  {t("Contribuições selecionadas", "Selected contributions")}
                </p>
                <h2>
                  Open source<span>.</span>
                </h2>
              </div>
              <a href="https://github.com/search?q=is%3Apr+is%3Amerged+is%3Apublic+author%3Arafamolina1&type=pullrequests">
                {t("Todos os merges públicos", "All public merges")} ↗
              </a>
            </div>
            {pulls.map((p) => (
              <article className="pull" key={p.id}>
                <div className="repo">
                  <strong>{p.org}</strong>
                  <small>
                    {p.repo} · {p.lang}
                  </small>
                </div>
                <div>
                  <h3>
                    <a href={"https://github.com/" + p.base + "/pull/" + p.id}>
                      {en ? p.en : p.pt}
                    </a>
                  </h3>
                  <p>{p.detail[en ? 1 : 0]}</p>
                </div>
                <a
                  className="pr"
                  aria-label={"Pull request " + p.id}
                  href={"https://github.com/" + p.base + "/pull/" + p.id}
                >
                  #{p.id} ↗
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="experiencia" className="wrap chapter">
          <p className="eyebrow">
            {t("Trajetória profissional", "Career history")}
          </p>
          <h2>
            {t("Experiência", "Experience")}
            <span>.</span>
          </h2>
          <div className="jobs">
            {[
              [
                "Domus Control",
                t("Abr. 2026 — atual", "Apr. 2026 — present"),
                "600 → 6.000",
                t("testes automatizados", "automated tests"),
                t(
                  "Ampliei a suíte de testes do SaaS de gestão eclesiástica. Trabalho no backend multi-tenant com PHP, Laravel e PostgreSQL.",
                  "I grew the automated test suite for a church management SaaS. I work on its multi-tenant backend with PHP, Laravel and PostgreSQL.",
                ),
              ],
              [
                "Zinger Transportation",
                "2025 — 2026",
                "20 → 60",
                t("cargas por segundo", "loads per second"),
                t(
                  "Tripliquei a vazão do processamento de cargas com melhorias nos microsserviços e na mensageria da operação logística no Texas.",
                  "I tripled freight processing throughput by improving microservices and messaging for the logistics operation in Texas.",
                ),
              ],
              [
                "Autonomus",
                t("2023 — atual", "2023 — present"),
                "2",
                t("apps publicados", "apps shipped"),
                t(
                  "Cofundei um marketplace de serviços. Construí o backend Laravel e participei da publicação dos apps Flutter de clientes e prestadores.",
                  "I co-founded a services marketplace, built its Laravel backend and helped ship the Flutter apps for customers and providers.",
                ),
              ],
            ].map(([name, period, metric, unit, body]) => (
              <article key={name}>
                <small>{period}</small>
                <h3>{name}</h3>
                <div className="metric">
                  {en ? metric.replace("6.000", "6,000") : metric}
                </div>
                <b>{unit}</b>
                <p>{body}</p>
                {name === "Autonomus" && (
                  <a href={trustSignals[0].href}>
                    {t("Matéria na Globo", "Featured on Globo")} ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
        <section id="projetos" className="wrap chapter projects">
          <h2>
            {t("Projetos", "Projects")}
            <span>.</span>
          </h2>
          <div className="projectgrid">
            {selected.map((p, i) => (
              <article key={p.title}>
                <Image
                  src={p.image}
                  width={760}
                  height={445}
                  alt={t("Tela do projeto ", "Screenshot of ") + p.title}
                />
                <small>{p.stack.slice(0, 4).join(" / ")}</small>
                <h3>{p.title}</h3>
                <p>
                  {i === 0
                    ? t(
                        "Monitor de disponibilidade com Fastify e Redis. Um lock distribuído evita checagens duplicadas e os alertas saem quando o serviço muda de estado.",
                        "An uptime monitor with Fastify and Redis. A distributed lock prevents duplicate checks, and alerts fire when a service changes state.",
                      )
                    : t(
                        "Uma comunidade de receitas que parte dos ingredientes que você já tem. Usei PostgreSQL com políticas de acesso por linha para os dados dos usuários.",
                        "A recipe community built around ingredients you already have. I used PostgreSQL row-level security for user data.",
                      )}
                </p>
                {p.deploy && (
                  <a href={p.deploy}>{t("Abrir projeto", "Visit project")} ↗</a>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
      <section className="wrap qualifications">
        <h2>
          {t("Formação e idiomas", "Education and languages")}
          <span>.</span>
        </h2>
        <p>
          {t(
            "Estudo Análise e Desenvolvimento de Sistemas na FGV, com conclusão prevista para abril de 2027. Falo português, inglês (Cambridge C2) e espanhol avançado.",
            "I study Systems Analysis and Development at FGV and expect to graduate in April 2027. I speak Portuguese, English (Cambridge C2) and advanced Spanish.",
          )}
        </p>
        <p>
          {trustSignals.slice(2, 5).map((c) => (
            <a key={c.label} href={c.href}>
              {c.label} ↗{" "}
            </a>
          ))}
        </p>
      </section>
      <footer>
        <div className="wrap">
          <h2>
            {t("Contato", "Contact")}
            <span>.</span>
          </h2>
          <a className="email" href={"mailto:" + profile.email}>
            {profile.email} ↗
          </a>
          <div className="footerlinks">
            <a href={profile.linkedin}>LinkedIn ↗</a>
            <a href={profile.github}>GitHub ↗</a>
            <a href={en ? profile.resumeEn : "/Rafael_Oliveira_Molina.pdf"}>
              {t("Currículo", "Résumé")} ↗
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
