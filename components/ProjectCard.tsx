"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import TrackedLink from "./TrackedLink";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techs: string[];
  githubUrl?: string;
  deployUrl?: string;
  className?: string;
  previewClassName?: string;
  previewImageClassName?: string;
}

function splitDescriptionIntoPages(text: string, maxCharsPerPage = 250) {
  const normalized = text.replace(/\r\n/g, "\n").trim();
  if (!normalized) return [""];

  const paragraphs = normalized
    .split("\n\n")
    .map((item) => item.trim())
    .filter(Boolean);

  const pages: string[] = [];
  let current = "";

  const pushCurrent = () => {
    if (current.trim()) {
      pages.push(current.trim());
      current = "";
    }
  };

  const addChunk = (chunk: string) => {
    if (!chunk) return;

    if (!current) {
      if (chunk.length <= maxCharsPerPage) {
        current = chunk;
      } else {
        let remaining = chunk;
        while (remaining.length > maxCharsPerPage) {
          let splitAt = remaining.lastIndexOf(" ", maxCharsPerPage);
          if (splitAt < Math.floor(maxCharsPerPage * 0.6)) {
            splitAt = maxCharsPerPage;
          }
          pages.push(remaining.slice(0, splitAt).trim());
          remaining = remaining.slice(splitAt).trim();
        }
        if (remaining) {
          current = remaining;
        }
      }
      return;
    }

    const separator = "\n\n";
    const candidate = `${current}${separator}${chunk}`;
    if (candidate.length <= maxCharsPerPage) {
      current = candidate;
      return;
    }

    pushCurrent();
    addChunk(chunk);
  };

  paragraphs.forEach(addChunk);
  pushCurrent();

  return pages.length > 0 ? pages : [normalized];
}

function isHighlightLine(line: string) {
  return (
    line.startsWith("🧠") ||
    line.startsWith("🧩") ||
    line.startsWith("💡") ||
    line.startsWith("⚙") ||
    line.startsWith("🚀") ||
    line.startsWith("📈") ||
    line.startsWith("💈") ||
    line.startsWith("🚚") ||
    line.startsWith("📊") ||
    line.startsWith("✅") ||
    line.startsWith("🧰")
  );
}

export default function ProjectCard({
  title,
  description,
  image,
  techs,
  githubUrl,
  deployUrl,
  className,
  previewClassName,
  previewImageClassName,
}: ProjectCardProps) {
  const descriptionPages = useMemo(() => splitDescriptionIntoPages(description), [description]);
  const [descriptionPage, setDescriptionPage] = useState(0);
  const hasMultiplePages = descriptionPages.length > 1;

  const goPrevPage = () => {
    setDescriptionPage((current) =>
      current === 0 ? descriptionPages.length - 1 : current - 1
    );
  };

  const goNextPage = () => {
    setDescriptionPage((current) =>
      current === descriptionPages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all flex flex-col h-full pt-6 shadow-lg hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)] ${className ?? ""}`}
    >
      <div className="relative w-full px-4 flex justify-center items-center">
        <div className="relative mx-auto w-[90%] md:w-[85%] perspective-1000 my-4 group-hover:-translate-y-2 transition-transform duration-500">
          <div className="relative bg-[#0d0d0d] rounded-t-[1rem] p-[2.5%] pb-[1.5%] shadow-[0_0_0_1px_#333,0_20px_40px_-20px_rgba(0,0,0,0.6)] z-20">
            <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#2a2a2a] z-30"></div>
            <div
              className={`relative aspect-[16/10] overflow-hidden rounded border border-[#1a1a1a] bg-zinc-950 ${previewClassName ?? ""}`}
            >
              <Image
                src={image}
                alt={title}
                fill
                priority={title === "Watch Dog"}
                className={`object-contain transition-transform duration-700 group-hover:scale-105 ${previewImageClassName ?? ""}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="relative h-3 bg-[#171717] rounded-b-[1rem] mx-[3%] shadow-[0_-2px_4px_rgba(0,0,0,0.3)_inset,0_10px_20px_-5px_rgba(0,0,0,0.8)] z-10 border-t border-[#262626]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[3px] bg-[#2a2a2a] rounded-b-md shadow-inner"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none group-hover:pointer-events-auto">
          {githubUrl && (
            <TrackedLink
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              eventName="project_github_click"
              eventProperties={{ location: "projects_grid", project: title }}
              className="p-3 bg-zinc-900/90 rounded-full text-white hover:bg-purple-600 transition-colors border border-zinc-700 shadow-lg backdrop-blur-sm scale-90 hover:scale-105 transition-transform"
            >
              <Github size={22} />
            </TrackedLink>
          )}
          {deployUrl && (
            <TrackedLink
              href={deployUrl}
              target="_blank"
              rel="noreferrer"
              eventName="project_demo_click"
              eventProperties={{ location: "projects_grid", project: title }}
              className="p-3 bg-zinc-900/90 rounded-full text-white hover:bg-blue-600 transition-colors border border-zinc-700 shadow-lg backdrop-blur-sm scale-90 hover:scale-105 transition-transform"
            >
              <ExternalLink size={22} />
            </TrackedLink>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 relative z-20 bg-zinc-900/50 mt-4 border-t border-zinc-800">
        <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>

        <div className="mb-6 flex-1 rounded-xl border border-zinc-800/70 bg-zinc-950/35 p-4 flex flex-col">
          <div className="flex-1 min-h-[220px] space-y-2">
            {descriptionPages[descriptionPage].split("\n").map((line, index) => {
              const trimmed = line.trim();

              if (!trimmed) {
                return <div key={`space-${index}`} className="h-2" />;
              }

              if (trimmed.startsWith("•")) {
                return (
                  <p key={`bullet-${index}`} className="text-zinc-300 text-[13px] md:text-[13.5px] leading-6 pl-3">
                    {trimmed}
                  </p>
                );
              }

              if (isHighlightLine(trimmed)) {
                return (
                  <p key={`highlight-${index}`} className="text-zinc-100 text-sm md:text-[15px] font-medium leading-6">
                    {trimmed}
                  </p>
                );
              }

              return (
                <p key={`line-${index}`} className="text-zinc-300 text-[13px] md:text-[14px] leading-6">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {hasMultiplePages && (
            <div className="mt-3 flex items-center justify-between border-t border-zinc-800/60 pt-3">
              <span className="text-[11px] text-zinc-500">
                {descriptionPage + 1}/{descriptionPages.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrevPage}
                  className="h-8 w-8 rounded-lg border border-zinc-700 bg-zinc-900/70 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors flex items-center justify-center"
                  aria-label="Ver parte anterior"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  type="button"
                  onClick={goNextPage}
                  className="h-8 w-8 rounded-lg border border-zinc-700 bg-zinc-900/70 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors flex items-center justify-center"
                  aria-label="Ver próxima parte"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          )}
        </div>

        {techs.length > 0 && (
          <div className="flex items-center flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800/50">
            {techs.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 bg-zinc-950/60 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
