"use client";

import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Layers,
  Terminal,
  Box,
  Cpu,
} from "lucide-react";

const skills = [
  { name: "React", icon: <Code2 size={18} /> },
  { name: "Next.js", icon: <Globe size={18} /> },
  { name: "TypeScript", icon: <Cpu size={18} /> },
  { name: "JavaScript", icon: <Code2 size={18} /> },
  { name: "Dart", icon: <Smartphone size={18} /> },
  { name: ".NET", icon: <Terminal size={18} /> },
  { name: "Laravel", icon: <Database size={18} /> },
  { name: "Docker", icon: <Box size={18} /> },
  { name: "Git", icon: <Layers size={18} /> },
];

export default function InfiniteScrollSkills() {
  return (
    <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div className="flex w-max">
        {" "}
        {/* Container Flex que segura as duas listas */}
        {/* Lista 1 */}
        <ul className="flex items-center [&_li]:mx-4 animate-infinite-scroll">
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-300 text-sm font-medium whitespace-nowrap hover:border-purple-500/50 hover:text-purple-400 transition-colors cursor-default">
                <span className="text-purple-500/80">{skill.icon}</span>
                {skill.name}
              </div>
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center [&_li]:mx-4 animate-infinite-scroll"
          aria-hidden="true"
        >
          {skills.map((skill, index) => (
            <li key={`duplicate-${index}`}>
              <div className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-300 text-sm font-medium whitespace-nowrap hover:border-purple-500/50 hover:text-purple-400 transition-colors cursor-default">
                <span className="text-purple-500/80">{skill.icon}</span>
                {skill.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
