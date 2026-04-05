"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Blocks,
  Building2,
  ExternalLink,
  GraduationCap,
  Newspaper,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";

export default function StartupSection() {
  const t = useTranslations("startup");
  const [activeTab, setActiveTab] = useState<"startup" | "media">("startup");
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaUrl =
    "https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml";

  const switchTab = (tab: "startup" | "media") => {
    setActiveTab(tab);

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const architectureItems = [
    t("architecture1"),
    t("architecture2"),
    t("architecture3"),
    t("architecture4"),
  ];

  const technologyItems = [
    t("tech1"),
    t("tech2"),
    t("tech3"),
    t("tech4"),
    t("tech5"),
  ];

  const differentials = [
    t("diff1"),
    t("diff2"),
    t("diff3"),
    t("diff4"),
    t("diff5"),
  ];

  const impactItems = [
    t("impact1"),
    t("impact2"),
    t("impact3"),
    t("impact4"),
  ];

  const educationItems = [
    t("educationImpact1"),
    t("educationImpact2"),
    t("educationImpact3"),
    t("educationImpact4"),
  ];

  const cacompItems = [t("cacomp1"), t("cacomp2"), t("cacomp3"), t("cacomp4")];

  return (
    <section ref={sectionRef} id="startup" className="mb-32 pt-10">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-zinc-100">
          {t("title")} <span className="text-cyan-400">{t("titleHighlight")}</span>
        </h2>
        <div className="h-[1px] bg-zinc-800 flex-1"></div>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <button
          type="button"
          onClick={() => switchTab("startup")}
          aria-pressed={activeTab === "startup"}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
            activeTab === "startup"
              ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-200"
              : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200"
          }`}
        >
          {t("tabStartup")}
        </button>
        <button
          type="button"
          onClick={() => switchTab("media")}
          aria-pressed={activeTab === "media"}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
            activeTab === "media"
              ? "bg-purple-500/20 border-purple-500/50 text-purple-200"
              : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-zinc-200"
          }`}
        >
          {t("tabMedia")}
        </button>
      </div>

      {activeTab === "startup" ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden shadow-lg"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-100">
                {t("startupHeader")}
              </h3>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/35 text-sm text-amber-200">
                <Rocket size={14} />
                {t("startupStatus")}
              </span>
            </div>

            <p className="text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              {t("startupSubtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                <h4 className="text-zinc-100 font-semibold mb-3">{t("problemTitle")}</h4>
                <p className="text-sm text-zinc-400 leading-7">{t("problemDesc")}</p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                <h4 className="text-zinc-100 font-semibold mb-3">{t("solutionTitle")}</h4>
                <ul className="space-y-2 text-sm text-zinc-400 leading-7">
                  <li>• {t("solution1")}</li>
                  <li>• {t("solution2")}</li>
                  <li>• {t("solution3")}</li>
                  <li>• {t("solution4")}</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="md:col-span-5 bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-violet-500/20 p-3 rounded-lg border border-violet-500/30">
                <Building2 className="text-violet-300" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">{t("architectureTitle")}</h3>
            </div>

            <div className="space-y-3 mb-6">
              {architectureItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-800 bg-zinc-950/30 px-4 py-3 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <h4 className="text-zinc-100 font-semibold mb-3">{t("techTitle")}</h4>
            <div className="flex flex-wrap gap-2">
              {technologyItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1.5 text-xs font-medium text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="md:col-span-4 rounded-2xl border border-zinc-800 bg-zinc-900/45 p-6"
          >
            <h4 className="text-zinc-100 font-semibold mb-3">{t("diffTitle")}</h4>
            <ul className="space-y-2 text-sm text-zinc-400 leading-7">
              {differentials.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="md:col-span-4 rounded-2xl border border-zinc-800 bg-zinc-900/45 p-6"
          >
            <h4 className="text-zinc-100 font-semibold mb-3">{t("impactTitle")}</h4>
            <ul className="space-y-2 text-sm text-zinc-400 leading-7">
              {impactItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 rounded-2xl border border-zinc-800 bg-gradient-to-br from-cyan-500/10 to-transparent p-6"
          >
            <h4 className="text-zinc-100 font-semibold mb-3">{t("recognitionTitle")}</h4>
            <p className="text-sm text-zinc-400 leading-7 mb-4">{t("recognitionDesc")}</p>
            <button
              type="button"
              onClick={() => switchTab("media")}
              className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              <Newspaper size={14} />
              {t("recognitionCta")}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
            className="md:col-span-6 rounded-2xl border border-zinc-800 bg-zinc-900/45 p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-emerald-500/15 border border-emerald-500/35 p-2.5 rounded-lg">
                <GraduationCap className="text-emerald-300" size={20} />
              </div>
              <div>
                <h4 className="text-zinc-100 font-semibold">{t("educationImpactTitle")}</h4>
                <p className="text-sm text-zinc-400 mt-1">{t("educationImpactSubtitle")}</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-zinc-300 leading-7 mb-4">
              {t("educationImpactDesc")}
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-400 leading-7">
              {educationItems.map((item) => (
                <li key={item} className="inline-flex items-start gap-2">
                  <Blocks size={14} className="text-emerald-300 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="md:col-span-6 rounded-2xl border border-zinc-800 bg-zinc-900/45 p-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-amber-500/15 border border-amber-500/35 p-2.5 rounded-lg">
                <Users className="text-amber-300" size={20} />
              </div>
              <div>
                <h4 className="text-zinc-100 font-semibold">{t("cacompTitle")}</h4>
                <p className="text-sm text-zinc-400 mt-1">{t("cacompSubtitle")}</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-zinc-300 leading-7 mb-4">
              {t("cacompDesc")}
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-400 leading-7">
              {cacompItems.map((item) => (
                <li key={item} className="inline-flex items-start gap-2">
                  <Blocks size={14} className="text-amber-300 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden shadow-lg"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-3">{t("mediaTitle")}</h3>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium">
                <Newspaper size={14} />
                {t("mediaBadge1")}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-sm text-purple-200">
                <Rocket size={14} />
                {t("mediaBadge2")}
              </span>
            </div>

            <h4 className="text-xl text-zinc-200 font-semibold mb-4">{t("mediaHeadline")}</h4>

            <div className="space-y-5 text-zinc-300">
              <div>
                <h5 className="text-zinc-100 font-semibold mb-2">{t("mediaAboutTitle")}</h5>
                <p className="leading-7">{t("mediaAboutDesc")}</p>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
                <li>• {t("media1")}</li>
                <li>• {t("media2")}</li>
                <li>• {t("media3")}</li>
                <li>• {t("media4")}</li>
              </ul>
            </div>

            <Link
              href={mediaUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white transition-all"
            >
              {t("mediaButton")}
              <ExternalLink size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="md:col-span-4 bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl shadow-lg"
          >
            <h4 className="text-zinc-100 font-semibold mb-4">{t("mediaCardTitle")}</h4>
            <p className="text-zinc-400 text-sm leading-7 mb-5">{t("mediaCardDesc")}</p>
            <button
              type="button"
              onClick={() => switchTab("startup")}
              className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              <Sparkles size={14} />
              {t("mediaCardBack")}
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
