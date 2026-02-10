"use client";

import { motion } from "framer-motion";

export default function TechBadge({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 text-sm font-medium hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all cursor-default"
    >
      {name}
    </motion.span>
  );
}
