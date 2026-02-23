"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  const navItems = [
    { name: t("home"), href: "#home" },
    { name: t("techStack"), href: "#tech" },
    { name: t("about"), href: "#about" },
    { name: t("projects"), href: "#projects" },
  ];

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
          ${scrolled
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
          {t("contact")}
        </button>

        <LanguageSwitcher />
      </nav>
    </motion.header>
  );
}
