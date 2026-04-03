"use client";

import {
  SiCss,
  SiDart,
  SiDocker,
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { FaLink } from "react-icons/fa6";

const ICON_SIZE = 22;

const SKILLS = [
  { name: "Dart", icon: <SiDart className="text-blue-400" size={ICON_SIZE} /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" size={ICON_SIZE} /> },
  { name: "CSS3", icon: <SiCss className="text-blue-500" size={ICON_SIZE} /> },
  { name: ".NET", icon: <SiDotnet className="text-purple-500" size={ICON_SIZE} /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" size={ICON_SIZE} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" size={ICON_SIZE} />,
  },
  { name: "NodeJS", icon: <SiNodedotjs className="text-green-500" size={ICON_SIZE} /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" size={ICON_SIZE} /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600" size={ICON_SIZE} /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-300" size={ICON_SIZE} />,
  },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" size={ICON_SIZE} /> },
  { name: "React", icon: <SiReact className="text-blue-400" size={ICON_SIZE} /> },
  { name: "Machine Learning", icon: <SiTensorflow className="text-pink-400" size={ICON_SIZE} /> },
  { name: "LangChain", icon: <FaLink className="text-emerald-400" size={ICON_SIZE} /> },
  {
    name: "Oracle Cloud",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
        alt="Oracle"
        className="w-[22px] h-[22px] object-contain"
      />
    ),
  },
  { name: "JWT", icon: <SiJsonwebtokens className="text-zinc-100" size={ICON_SIZE} /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" size={ICON_SIZE} /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" size={ICON_SIZE} /> },
];

export default function InfiniteScrollSkills() {
  const duplicatedSkills = [...SKILLS, ...SKILLS];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

      <div className="animate-infinite-scroll flex w-max gap-5">
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-4 px-7 py-4 bg-zinc-900/50 border border-zinc-800 rounded-full whitespace-nowrap group hover:border-purple-500/50 transition-colors"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800/70 border border-zinc-700 group-hover:scale-110 group-hover:border-purple-400/60 transition-transform">
              {skill.icon}
            </span>
            <span className="text-base font-semibold text-zinc-200 group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
