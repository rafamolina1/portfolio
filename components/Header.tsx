"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
];

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
    >
      <nav
        className={`
          flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300
          ${
            scrolled
              ? "bg-zinc-900/80 border-zinc-800 backdrop-blur-md shadow-lg shadow-purple-500/5"
              : "bg-transparent border-transparent"
          }
        `}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector(item.href)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800/50"
          >
            {item.name}
          </Link>
        ))}

        <button
          onClick={onOpenContact}
          className="ml-2 px-5 py-2 text-sm font-medium bg-zinc-100 text-zinc-900 rounded-full hover:bg-white hover:scale-105 transition-all cursor-pointer"
        >
          Contato
        </button>
      </nav>
    </motion.header>
  );
}
