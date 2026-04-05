"use client";

import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  contactHref: string;
}

export default function Header({ contactHref }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  const navItems = [
    { name: t("home"), href: "#home" },
    { name: t("techStack"), href: "#tech" },
    { name: t("about"), href: "#about" },
    { name: t("startup"), href: "#startup" },
    { name: t("projects"), href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
          flex flex-nowrap items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300
          w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] sm:w-auto sm:max-w-none
          overflow-x-auto overflow-y-hidden touch-pan-x whitespace-nowrap
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
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
            aria-label={item.name}
            className="relative shrink-0 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800/50 whitespace-nowrap"
          >
            {item.name}
          </Link>
        ))}

        <Link
          href={contactHref}
          onClick={() => track("email_click", { location: "header" })}
          className="ml-2 shrink-0 px-5 py-2 text-sm font-medium bg-zinc-100 text-zinc-900 rounded-full hover:bg-white hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
        >
          {t("contact")}
        </Link>

        <LanguageSwitcher />
      </nav>
    </motion.header>
  );
}
