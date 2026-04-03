"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import StartupSection from "@/components/StartupSection";
import InfiniteScrollSkills from "@/components/InfiniteScrollSkills";
import ContactModal from "@/components/ContactModal";
import LanguageSplash from "@/components/LanguageSplash";
import EntrySplash from "@/components/EntrySplash";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const t = useTranslations();
    const locale = useLocale();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-purple-500/30 overflow-hidden relative animate-gradient-shift">
            <EntrySplash />
            <Header onOpenContact={() => setIsContactOpen(true)} />
            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
            <LanguageSplash />

            <div className="fixed inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-purple-950/20 to-[#0a0a0a] animate-gradient-shift" />
            </div>

            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" />

            <div className="fixed top-20 left-10 w-72 h-72 blur-3xl rounded-full pointer-events-none z-0 animate-float-slow-1 animate-color-cycle-1" />
            <div className="fixed top-1/3 right-20 w-96 h-96 blur-3xl rounded-full pointer-events-none z-0 animate-float-slow-2 animate-color-cycle-2" />
            <div className="fixed bottom-0 left-1/3 w-80 h-80 blur-3xl rounded-full pointer-events-none z-0 animate-float-slow-3 animate-color-cycle-3" />
            
            <div className="fixed top-1/2 right-1/4 w-64 h-64 blur-3xl rounded-full pointer-events-none z-0 animate-float-slow-2 animate-color-cycle-1" />
            <div className="fixed bottom-1/3 left-1/4 w-72 h-72 blur-3xl rounded-full pointer-events-none z-0 animate-float-slow-1 animate-color-cycle-3" />

            <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
                <section
                    id="home"
                    className="flex flex-col-reverse md:flex-row items-center gap-12 mb-32 pt-20"
                >
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-400 animate-glow-pulse"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {t("hero.available")}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="text-5xl md:text-7xl font-extrabold tracking-tight"
                        >
                            <motion.span
                                animate={{
                                    y: [0, -5, 0],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-block will-change-transform"
                            >
                                Rafael
                            </motion.span>{" "}
                            <br />
                            <motion.span
                                animate={{
                                    y: [0, -4, 0],
                                    scale: [1, 1.025, 1],
                                }}
                                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-block will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#00C6FF] animate-shimmer"
                            >
                                Molina.
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -2 }}
                            className="text-xl text-zinc-400 max-w-lg mx-auto md:mx-0"
                        >
                            <motion.span
                                animate={{ opacity: [0.75, 1, 0.75] }}
                                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-block"
                            >
                                {t("hero.tagline")}
                            </motion.span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
                        >
                            <SocialButton
                                href="https://github.com/rafamolina1"
                                icon={<Github size={20} />}
                                label="GitHub"
                            />
                            <SocialButton
                                href="https://www.linkedin.com/in/rafael-molina-049a43247/"
                                icon={<Linkedin size={20} />}
                                label="LinkedIn"
                            />

                            <motion.button
                                onClick={() => setIsContactOpen(true)}
                                whileHover={{ y: -6, scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-purple-500/50 transition-all group"
                            >
                                <span className="text-zinc-400 group-hover:text-purple-400 transition-colors">
                                    <Mail size={20} />
                                </span>
                                <span className="font-medium text-sm text-zinc-400 group-hover:text-white">
                                    {t("hero.email")}
                                </span>
                            </motion.button>

                            {locale === "pt-BR" ? (
                                <motion.a
                                    href="/curriculo-ptbr-rafael-molina.pdf"
                                    download="Curriculo-PTBR-Rafael-Molina.pdf"
                                    whileHover={{ y: -6, scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-cyan-500/50 transition-all group"
                                >
                                    <span className="text-zinc-400 group-hover:text-cyan-400 transition-colors">
                                        <Download size={20} />
                                    </span>
                                    <span className="font-medium text-sm text-zinc-400 group-hover:text-white">
                                        Curriculo PT-BR
                                    </span>
                                </motion.a>
                            ) : (
                                <motion.a
                                    href="/curriculo-ingles-rafael-molina.pdf"
                                    download="Resume-EN-Rafael-Molina.pdf"
                                    whileHover={{ y: -6, scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-blue-500/50 transition-all group"
                                >
                                    <span className="text-zinc-400 group-hover:text-blue-400 transition-colors">
                                        <Download size={20} />
                                    </span>
                                    <span className="font-medium text-sm text-zinc-400 group-hover:text-white">
                                        Resume EN
                                    </span>
                                </motion.a>
                            )}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative animate-float"
                    >
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-zinc-800 p-2 bg-zinc-900/50">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image
                                    src="https://github.com/rafamolina1.png"
                                    alt="Rafael Molina"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section id="tech" className="mb-32 pt-10">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-2xl font-bold">Tech Stack</h2>
                        <div className="h-[1px] bg-zinc-800 flex-1"></div>
                    </div>
                    <InfiniteScrollSkills />
                </section>

                <AboutSection />

                <StartupSection />

                <section id="projects" className="pt-10">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold">{t("projects.title")}</h2>
                        <Link
                            href="https://github.com/rafamolina1"
                            className="text-sm text-purple-400 underline-animate"
                        >
                            {t("projects.viewAll")}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ProjectCard
                            title="Barber Manager"
                            description={t("projects.barber.description")}
                            image="/barber-dashboard.png"
                            techs={[
                                "Next.js",
                                "TypeScript",
                                "Tailwind",
                                "Clerk",
                                "PostgreSQL",
                                "Chatwoot",
                            ]}
                            githubUrl="https://github.com/rafamolina1/app-apontamento"
                        />

                        <ProjectCard
                            title="Habit Breaker"
                            description={t("projects.habit.description")}
                            image="/habit-breaker.png"
                            techs={["JavaScript", "React", "Vite"]}
                            githubUrl="https://github.com/rafamolina1/Habit-Breaker"
                            deployUrl="https://habitbreaker.vercel.app"
                        />

                        <ProjectCard
                            title="Market Pulse"
                            description={t("projects.market.description")}
                            image="/marketpulse.png"
                            techs={["JavaScript", "React", "Vite", "CSS"]}
                            githubUrl="https://github.com/rafamolina1/Market-Pulse"
                            deployUrl="https://market-pulse-rho-beryl.vercel.app"
                        />

                        <ProjectCard
                            title="Km De Lucro"
                            description={t("projects.km.description")}
                            image="/dashkm.png"
                            techs={[
                                "Next.js",
                                "React",
                                "TypeScript",
                                "CSS",
                                "PostgreSQL",
                                "Supabase",
                            ]}
                            githubUrl="https://github.com/rafamolina1/KM-De-Lucro"
                            deployUrl="https://kmdelucro.vercel.app"
                        />

                    </div>
                </section>

                <footer className="mt-40 pb-10 border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
                    <p>{t("footer.rights")}</p>
                    <div className="flex gap-6">
                        <Link
                            href="#projects"
                            className="hover:text-zinc-300 transition-colors"
                        >
                            {t("footer.projects")}
                        </Link>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="hover:text-zinc-300 transition-colors"
                        >
                            {t("footer.contact")}
                        </button>
                    </div>
                </footer>
            </div>
        </main>
    );
}

function SocialButton({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <motion.div
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
            <Link
                href={href}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-[#00C6FF]/50 transition-all group"
            >
                <span className="text-zinc-400 group-hover:text-[#00C6FF] transition-colors">
                    {icon}
                </span>
                <span className="font-medium text-sm">{label}</span>
            </Link>
        </motion.div>
    );
}
