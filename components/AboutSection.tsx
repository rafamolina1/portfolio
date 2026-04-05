"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Rocket, GraduationCap, Globe, Server } from "lucide-react";
import { useTranslations } from "next-intl";

const TECH_STACK = [
  "React & Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Docker",
  "C# / .NET",
  "Oracle Cloud",
  "Dart / Flutter",
  "PostgreSQL",
  "MySQL",
  "Machine Learning",
];

export default function AboutSection() {
  const t = useTranslations("about");

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

          <div className="flex flex-wrap items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-sm text-purple-200 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
            >
              <Globe size={14} />
              <span>{t("rocketLabel")}</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/35 text-sm text-red-100 hover:border-red-400/60 hover:shadow-[0_0_15px_rgba(239,68,68,0.18)] transition-all"
            >
              <BrandMark
                src="/oracle-logo.jpg"
                alt="Oracle"
                width={133}
                height={18}
                className="h-5 w-[54px] px-1"
                imageClassName="w-[42px]"
              />
              <span>{t("oci")}</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b1e1e]/10 border border-[#8b1e1e]/35 text-sm text-rose-100 hover:border-[#b63737]/60 hover:shadow-[0_0_15px_rgba(139,30,30,0.2)] transition-all"
            >
              <BrandMark
                src="/cambridge-logo.png"
                alt="University of Cambridge"
                width={2362}
                height={491}
                className="h-5 w-[62px] px-1"
                imageClassName="w-[54px]"
              />
              <span>{t("english")}</span>
            </motion.div>
          </div>
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
              className="flex items-start gap-4 group/item"
            >
              <BrandMark
                src="/fgv-logo.svg"
                alt="Fundação Getulio Vargas"
                width={249}
                height={44}
                className="mt-1 h-8 w-[82px] px-2.5"
                imageClassName="w-[50px]"
              />
              <div className="pt-0.5">
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
              transition={{ delay: 0.35 }}
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 group/item"
            >
              <BrandTextMark className="mt-1 h-8 w-[82px]" textClassName="text-[8px] tracking-[0.16em]">
                UTFPR
              </BrandTextMark>
              <div className="pt-0.5">
                <p className="text-zinc-100 font-semibold text-sm group-hover/item:text-green-300 transition-colors">
                  {t("degree2")}
                </p>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  {t("school2")}
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
              className="flex items-start gap-4 group/item"
            >
              <BrandMark
                src="/cambridge-logo.png"
                alt="University of Cambridge"
                width={2362}
                height={491}
                className="mt-1 h-8 w-[82px] px-2"
                imageClassName="w-[72px]"
              />
              <div className="pt-0.5">
                <p className="text-zinc-100 font-semibold text-sm group-hover/item:text-red-300 transition-colors">
                  {t("english")}
                </p>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  {t("englishCert")}
                </p>
              </div>
            </motion.div>

            <div className="w-full h-[1px] bg-gradient-to-r from-zinc-800/50 to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 group/item"
            >
              <BrandMark
                src="/oracle-logo.jpg"
                alt="Oracle"
                width={133}
                height={18}
                className="mt-1 h-8 w-[82px] px-2"
                imageClassName="w-[60px]"
              />
              <div className="pt-0.5">
                <p className="text-zinc-100 font-semibold text-sm group-hover/item:text-red-300 transition-colors">
                  {t("oci")}
                </p>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                  {t("ociCert")}
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
                {TECH_STACK.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03, duration: 0.25 }}
                    className="min-h-20 flex items-center justify-center bg-zinc-950/50 border border-zinc-800 rounded-xl px-3 py-4 text-center hover:border-purple-500/30 hover:bg-zinc-900 transition-all"
                  >
                    <span className="text-[11px] sm:text-xs font-medium text-zinc-200 leading-tight">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandMark({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={`shrink-0 inline-flex items-center justify-center rounded-[0.55rem] bg-white/95 shadow-sm ring-1 ring-black/10 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized={src.endsWith(".svg")}
        className={`h-auto w-auto max-w-full object-contain ${imageClassName ?? ""}`}
      />
    </div>
  );
}

function BrandTextMark({
  children,
  className,
  textClassName,
}: {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
}) {
  return (
    <div
      className={`shrink-0 inline-flex items-center justify-center rounded-[0.55rem] bg-white/95 shadow-sm ring-1 ring-black/10 ${className ?? ""}`}
    >
      <span className={`font-bold text-zinc-900 ${textClassName ?? ""}`}>{children}</span>
    </div>
  );
}
