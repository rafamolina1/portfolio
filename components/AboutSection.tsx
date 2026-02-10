"use client";

import { motion } from "framer-motion";
import { Rocket, GraduationCap, Globe, Server } from "lucide-react";

const TECH_STACK = [
  {
    name: "React & Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
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
];

export default function AboutSection() {
  return (
    <section className="mb-32">
      <h2 className="text-3xl font-bold mb-8 text-zinc-100">
        Sobre <span className="text-purple-400">mim</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-all"></div>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-500/10 p-2 rounded-lg">
              <Rocket className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-100">
              4 Anos de Experiência
            </h3>
          </div>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Olá, sou <strong>Rafael Molina</strong>. Desenvolvedor focado em
            entregas de alto valor e soluções técnicas robustas.
            <br />
            <br />
            Minha trajetória inclui a criação do <strong>Autonomus</strong>, que
            se destacou nacionalmente como{" "}
            <strong>semifinalista no Rocket</strong>, reality show de startups
            da <strong>Globo</strong>.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
            <Globe size={12} />
            <span>Rocket Startup Reality (Globo)</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-500/10 p-2 rounded-lg">
              <GraduationCap className="text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-100">Educação</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
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
                <p className="text-zinc-200 font-medium text-sm">
                  Análise e Des. Sistemas
                </p>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                  Fundação Getúlio Vargas (FGV)
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-zinc-800/50 ml-9"></div>

            <div className="flex items-start gap-3">
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
                <p className="text-zinc-200 font-medium text-sm">
                  Inglês Fluente (C2)
                </p>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                  Mundialmente certificado pela Universidade de Cambridge.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-3 bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition-colors"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Server className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-zinc-100">
                  Fullstack Developer
                </h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Construindo arquiteturas escaláveis e seguras, integrando bancos
                de dados modernos com interfaces fluidas e alta performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end max-w-2xl">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-purple-500/30 hover:bg-zinc-900 transition-all group/tag"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-5 h-5 object-contain grayscale group-hover/tag:grayscale-0 transition-all"
                  />
                  <span className="text-xs font-medium text-zinc-400 group-hover/tag:text-zinc-200 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
