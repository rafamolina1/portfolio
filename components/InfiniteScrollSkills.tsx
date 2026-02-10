"use client";

import { motion } from "framer-motion";
import {
  FileCode,
  Globe,
  Server,
  Database,
  Box,
  Terminal,
  Layers,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const SKILLS = [
  { name: "Dart", icon: <Globe className="text-blue-400" size={16} /> },
  { name: "HTML5", icon: <FileCode className="text-orange-500" size={16} /> },
  { name: "CSS3", icon: <Layers className="text-blue-500" size={16} /> },
  { name: ".NET", icon: <Cpu className="text-purple-500" size={16} /> },
  {
    name: "TypeScript",
    icon: <FileCode className="text-blue-600" size={16} />,
  },
  {
    name: "JavaScript",
    icon: <FileCode className="text-yellow-400" size={16} />,
  },
  { name: "NodeJS", icon: <Server className="text-green-500" size={16} /> },
  { name: "Docker", icon: <Box className="text-blue-400" size={16} /> },
  { name: "Postman", icon: <Terminal className="text-orange-600" size={16} /> },
  {
    name: "PostgreSQL",
    icon: <Database className="text-blue-300" size={16} />,
  },
  { name: "Tailwind", icon: <Layers className="text-cyan-400" size={16} /> },
  { name: "React", icon: <Layers className="text-blue-400" size={16} /> },
  { name: "JWT", icon: <ShieldCheck className="text-zinc-100" size={16} /> },
  { name: "MySQL", icon: <Database className="text-blue-500" size={16} /> },
  { name: "Laravel", icon: <Server className="text-red-500" size={16} /> },
];

export default function InfiniteScrollSkills() {
  // Duplicamos a lista para criar o efeito infinito perfeito sem gaps
  const duplicatedSkills = [...SKILLS, ...SKILLS];

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Gradientes laterais para suavizar a entrada/saída */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: [0, -1500] }} // Ajuste esse valor se a lista for muito longa
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full whitespace-nowrap group hover:border-purple-500/50 transition-colors"
          >
            <span className="group-hover:scale-110 transition-transform">
              {skill.icon}
            </span>
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
