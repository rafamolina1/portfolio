"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import InfiniteScrollSkills from "@/components/InfiniteScrollSkills";
import ContactModal from "@/components/ContactModal";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Home() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const t = useTranslations();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-purple-500/30 overflow-hidden">
            <Header onOpenContact={() => setIsContactOpen(true)} />
            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />

            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
                <section
                    id="home"
                    className="flex flex-col-reverse md:flex-row items-center gap-12 mb-32 pt-20"
                >
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-400"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {t("hero.available")}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-extrabold tracking-tight"
                        >
                            Rafael <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] to-[#8B5CF6]">
                                Molina.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-zinc-400 max-w-lg mx-auto md:mx-0"
                        >
                            {t("hero.tagline")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center justify-center md:justify-start gap-4 pt-4"
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

                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-purple-500/50 transition-all group"
                            >
                                <span className="text-zinc-400 group-hover:text-purple-400 transition-colors">
                                    <Mail size={20} />
                                </span>
                                <span className="font-medium text-sm text-zinc-400 group-hover:text-white">
                                    {t("hero.email")}
                                </span>
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
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

                <section id="projects" className="pt-10">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold">{t("projects.title")}</h2>
                        <Link
                            href="https://github.com/rafamolina1"
                            className="text-sm text-purple-400 hover:underline"
                        >
                            {t("projects.viewAll")}
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ProjectCard
                            title="BarberManager SaaS"
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
    );
}
