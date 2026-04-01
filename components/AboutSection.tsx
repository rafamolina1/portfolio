"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Rocket, GraduationCap, Globe, Server } from "lucide-react";
import { useTranslations } from "next-intl";

const TECH_STACK = [
  {
    name: "React & Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "C# / .NET",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "Dart / Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Machine Learning",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
];

const VISIBLE_TECHS = 4;
const TECH_ROTATION_MS = 2800;

export default function AboutSection() {
  const t = useTranslations("about");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((current) => (current + 1) % TECH_STACK.length);
    }, TECH_ROTATION_MS);

    return () => clearInterval(timer);
  }, []);

  const visibleTechs = useMemo(
    () =>
      Array.from({ length: VISIBLE_TECHS }, (_, index) => {
        const itemIndex = (offset + index) % TECH_STACK.length;
        return TECH_STACK[itemIndex];
      }),
    [offset]
  );

  return (
    <section className="mb-32" id="about">
      <h2 className="text-3xl font-bold mb-8 text-zinc-100">
        {t("title")}{" "}
        <span className="text-purple-400">{t("titleHighlight")}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all relative overflow-hidden group shadow-lg hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)]"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/40 transition-all"></div>

          <div className="flex items-center gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 10 }}
              className="bg-purple-500/20 p-3 rounded-lg border border-purple-500/30"
            >
              <Rocket className="text-purple-300" size={28} />
            </motion.div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
              {t("experience")}
            </h3>
          </div>

          <div className="text-zinc-300 leading-relaxed mb-6 space-y-4">
            <p>
              {t("bio1")} <strong className="text-zinc-100">{t("bio2")}</strong>
              {t("bio3")}
            </p>

            <p>
              {t("bio4")} <strong className="text-zinc-100">{t("bio5")}</strong>
              {t("bio6")} {" "}
              <strong className="text-zinc-100">{t("bio7")}</strong>
              {t("bio8")}
            </p>

            <p>
              <strong className="text-zinc-100">{t("bio9")}</strong>
              {t("bio10")}
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-sm text-purple-200 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
          >
            <Globe size={14} />
            <span>{t("rocketLabel")}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-green-500/50 transition-all flex flex-col justify-start h-full self-start shadow-lg hover:shadow-[0_20px_60px_rgba(34,197,94,0.2)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.15, rotate: -10 }}
              className="bg-green-500/20 p-3 rounded-lg border border-green-500/30"
            >
              <GraduationCap className="text-green-300" size={28} />
            </motion.div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">{t("education")}</h3>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ x: 6 }}
              className="flex items-start gap-3 group/item"
            >
              <div className="shrink-0 mt-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18L12 6L20 18H4Z"
                    fill="#2563EB"
                    fillOpacity="0.8"
                  />
                  <path d="M12 6V18" stroke="#0a0a0a" strokeWidth="1.5" />
                  <path d="M8 12H16" stroke="#0a0a0a" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <p className="text-zinc-100 font-semibold text-sm group-hover/item:text-blue-300 transition-colors">
                  {t("degree")}
                </p>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  {t("school")}
                </p>
              </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gradient-to-r from-zinc-800/50 to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ x: 6 }}
              className="flex items-start gap-3 group/item"
            >
              <div className="shrink-0 mt-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4h12v7c0 4-3 7-6 9-3-2-6-5-6-9V4z"
                    fill="#9B1C1C"
                  />
                  <path
                    d="M11 4v16M6 10h12"
                    stroke="#F9FAFB"
                    strokeWidth="1.5"
                  />
                  <circle cx="8.5" cy="7.5" r="0.7" fill="#F9FAFB" />
                  <circle cx="15.5" cy="7.5" r="0.7" fill="#F9FAFB" />
                  <circle cx="8.5" cy="13.5" r="0.7" fill="#F9FAFB" />
                  <circle cx="15.5" cy="13.5" r="0.7" fill="#F9FAFB" />
                </svg>
              </div>
              <div>
                <p className="text-zinc-100 font-semibold text-sm group-hover/item:text-red-300 transition-colors">
                  {t("english")}
                </p>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  {t("englishCert")}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-3 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all shadow-lg hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30"
                >
                  <Server className="text-blue-300" size={32} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  {t("fullstack")}
                </h3>
              </div>
              <p className="text-zinc-300 text-base leading-relaxed">
                {t("fullstackDesc")}
              </p>
            </div>

            <div className="w-full max-w-[340px] lg:max-w-[360px]">
              <div className="grid grid-cols-2 gap-3">
                <AnimatePresence initial={false} mode="popLayout">
                  {visibleTechs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.94 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.06,
                        ease: "easeOut",
                      }}
                      className="aspect-square flex flex-col items-center justify-center gap-3 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-purple-500/30 hover:bg-zinc-900 transition-all"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-7 h-7 object-contain"
                      />
                      <span className="text-[11px] sm:text-xs font-medium text-zinc-200 text-center px-2 leading-tight">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
