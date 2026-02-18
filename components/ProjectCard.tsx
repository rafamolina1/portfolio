"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import LaptopFrame from "./LaptopFrame";

const TECH_LOGOS: Record<string, string> = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  Tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  Prisma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  ".NET":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  Clerk: "https://cdn.simpleicons.org/clerk/6C47FF",
  Chatwoot: "https://cdn.simpleicons.org/chatwoot/45A8FA",
  Groq: "https://cdn.simpleicons.org/groq/F55036",
  Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  githubUrl?: string;
  deployUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  techs,
  githubUrl,
  deployUrl,
}: ProjectCardProps) {
  const isVideo = image.endsWith(".mp4");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all flex flex-col h-full pt-6"
    >
      <div className="relative w-full px-4 flex justify-center items-center">
        <div className="relative mx-auto w-[90%] md:w-[85%] perspective-1000 my-4 group-hover:-translate-y-2 transition-transform duration-500">
          <div className="relative bg-[#0d0d0d] rounded-t-[1rem] p-[2.5%] pb-[1.5%] shadow-[0_0_0_1px_#333,0_20px_40px_-20px_rgba(0,0,0,0.6)] z-20">
            <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2a2a2a] z-30"></div>
            <div className="relative aspect-[16/10] overflow-hidden rounded bg-black border border-[#1a1a1a]">
              {isVideo ? (
                <video
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105 bg-zinc-950"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="relative h-3 bg-[#171717] rounded-b-[1rem] mx-[3%] shadow-[0_-2px_4px_rgba(0,0,0,0.3)_inset,0_10px_20px_-5px_rgba(0,0,0,0.8)] z-10 border-t border-[#262626]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[3px] bg-[#2a2a2a] rounded-b-md shadow-inner"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none group-hover:pointer-events-auto">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="p-3 bg-zinc-900/90 rounded-full text-white hover:bg-purple-600 transition-colors border border-zinc-700 shadow-lg backdrop-blur-sm scale-90 hover:scale-105 transition-transform"
            >
              <Github size={22} />
            </Link>
          )}
          {deployUrl && (
            <Link
              href={deployUrl}
              target="_blank"
              className="p-3 bg-zinc-900/90 rounded-full text-white hover:bg-blue-600 transition-colors border border-zinc-700 shadow-lg backdrop-blur-sm scale-90 hover:scale-105 transition-transform"
            >
              <ExternalLink size={22} />
            </Link>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-20 bg-zinc-900/50 mt-4 border-t border-zinc-800">
        <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex items-center flex-wrap gap-3 mt-auto pt-4 border-t border-zinc-800/50">
          {techs.map((tech) => (
            <div
              key={tech}
              className="relative group/icon flex justify-center items-center"
            >
              <div className="w-6 h-6 hover:scale-110 transition-transform grayscale-[0.4] hover:grayscale-0 cursor-help">
                {TECH_LOGOS[tech] ? (
                  <img
                    src={TECH_LOGOS[tech]}
                    alt={tech}
                    className="w-full h-full object-contain drop-shadow-sm"
                  />
                ) : (
                  <span className="text-[10px] bg-zinc-800 px-1 py-0.5 rounded text-zinc-400 font-mono border border-zinc-700">
                    {tech.substring(0, 2)}
                  </span>
                )}
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs font-medium rounded-md opacity-0 group-hover/icon:opacity-100 transition-all duration-200 translate-y-1 group-hover/icon:translate-y-0 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                {tech}
                <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-zinc-950 border-r border-b border-zinc-800 rotate-45"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
