"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ExternalLink, Newspaper, Rocket, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function StartupSection() {
  const t = useTranslations("startup");
  const [activeTab, setActiveTab] = useState<"startup" | "media">("startup");
  const mediaUrl = "https://redeglobo.globo.com/rpc/realities/rocket-startup/vida/noticia/autonomus-a-startup-que-conecta-trabalhadores-autonomos-e-clientes-na-busca-de-servicos.ghtml";

  return (
    <section id="startup" className="mb-32 pt-10">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-zinc-100">
          {t("title")} <span className="text-cyan-400">{t("titleHighlight")}</span>
        </h2>
        <div className="h-[1px] bg-zinc-800 flex-1"></div>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("startup")}
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
          onClick={() => setActiveTab("media")}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all relative overflow-hidden group shadow-lg hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/35 transition-all" />

            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent mb-2">
              {t("startupHeader")}
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-4">{t("startupSubtitle")}</p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/35 text-sm text-amber-200 mb-6">
              <Rocket size={14} />
              {t("startupStatus")}
            </div>

            <div className="space-y-6 text-zinc-300">
              <div>
                <h4 className="text-zinc-100 font-semibold mb-2">{t("problemTitle")}</h4>
                <p className="leading-relaxed">{t("problemDesc")}</p>
              </div>

              <div>
                <h4 className="text-zinc-100 font-semibold mb-2">{t("solutionTitle")}</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>• {t("solution1")}</li>
                  <li>• {t("solution2")}</li>
                  <li>• {t("solution3")}</li>
                  <li>• {t("solution4")}</li>
                </ul>
              </div>

              <div className="bg-zinc-950/45 border border-zinc-800 rounded-xl p-4">
                <h4 className="text-zinc-100 font-semibold mb-3">{t("recognitionTitle")}</h4>
                <p className="text-sm text-zinc-400 mb-3">{t("recognitionDesc")}</p>
                <button
                  type="button"
                  onClick={() => setActiveTab("media")}
                  className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <Newspaper size={14} />
                  {t("recognitionCta")}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-violet-500/50 transition-all shadow-lg hover:shadow-[0_20px_60px_rgba(139,92,246,0.18)]"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-violet-500/20 p-3 rounded-lg border border-violet-500/30">
                <Building2 className="text-violet-300" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100">{t("architectureTitle")}</h3>
            </div>

            <ul className="space-y-3 text-sm text-zinc-300 leading-relaxed mb-7">
              <li>• {t("architecture1")}</li>
              <li>• {t("architecture2")}</li>
              <li>• {t("architecture3")}</li>
              <li>• {t("architecture4")}</li>
            </ul>

            <h4 className="text-zinc-100 font-semibold mb-3">{t("techTitle")}</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>• {t("tech1")}</li>
              <li>• {t("tech2")}</li>
              <li>• {t("tech3")}</li>
              <li>• {t("tech4")}</li>
              <li>• {t("tech5")}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-zinc-900/45 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all"
            >
              <h4 className="text-zinc-100 font-semibold mb-3">{t("diffTitle")}</h4>
              <ul className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                <li>• {t("diff1")}</li>
                <li>• {t("diff2")}</li>
                <li>• {t("diff3")}</li>
                <li>• {t("diff4")}</li>
                <li>• {t("diff5")}</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-zinc-900/45 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all"
            >
              <h4 className="text-zinc-100 font-semibold mb-3">{t("impactTitle")}</h4>
              <ul className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                <li>• {t("impact1")}</li>
                <li>• {t("impact2")}</li>
                <li>• {t("impact3")}</li>
                <li>• {t("impact4")}</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all relative overflow-hidden group shadow-lg hover:shadow-[0_20px_60px_rgba(139,92,246,0.18)]"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/35 transition-all" />

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
                <p className="leading-relaxed">{t("mediaAboutDesc")}</p>
              </div>

              <ul className="space-y-2 text-sm md:text-base">
                <li>• {t("media1")}</li>
                <li>• {t("media2")}</li>
                <li>• {t("media3")}</li>
                <li>• {t("media4")}</li>
              </ul>
            </div>

            <Link
              href={mediaUrl}
              target="_blank"
              className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white transition-all"
            >
              {t("mediaButton")}
              <ExternalLink size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]"
          >
            <h4 className="text-zinc-100 font-semibold mb-4">{t("mediaCardTitle")}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed mb-5">{t("mediaCardDesc")}</p>
            <button
              type="button"
              onClick={() => setActiveTab("startup")}
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