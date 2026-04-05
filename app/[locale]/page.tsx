import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import StartupSection from "@/components/StartupSection";
import InfiniteScrollSkills from "@/components/InfiniteScrollSkills";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

const CORE_STACK = ["React", "Next.js", "Node.js", "TypeScript", "Docker", "IA"];
const CONTACT_EMAIL = "rafaeloliveiramolina@gmail.com";
const PROFILE_IMAGE_SRC = "/profilepic.jpeg";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale });
    const contactHref = `mailto:${CONTACT_EMAIL}`;

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-purple-500/30 overflow-hidden relative">
            <Header contactHref={contactHref} />

            <div className="fixed inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_25%),linear-gradient(180deg,#09090b_0%,#0a0a0a_45%,#09090b_100%)]" />
            </div>

            <div className="fixed top-8 left-[8%] h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px] pointer-events-none z-0 motion-safe:animate-float-slow-1" />
            <div className="fixed bottom-10 right-[10%] h-72 w-72 rounded-full bg-orange-500/10 blur-[120px] pointer-events-none z-0 motion-safe:animate-float-slow-2" />

            <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
                <section
                    id="home"
                    className="flex flex-col-reverse md:flex-row items-center gap-12 mb-32 pt-20"
                >
                    <div className="flex-1 space-y-7 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/70 border border-zinc-800 text-sm text-zinc-300">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {t("hero.available")}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance">
                            <span className="inline-block">Rafael</span>{" "}
                            <br />
                            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-orange-300">
                                Molina.
                            </span>
                        </h1>

                        <p className="text-xl text-zinc-300 max-w-2xl mx-auto md:mx-0">
                            {t("hero.tagline")}
                        </p>

                        <p className="max-w-2xl mx-auto md:mx-0 text-sm md:text-base text-zinc-400 leading-7">
                            {t("hero.focus")}
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                            {CORE_STACK.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
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

                            <Link
                                href={contactHref}
                                className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-purple-500/50 transition-all group"
                            >
                                <span className="text-zinc-400 group-hover:text-purple-400 transition-colors">
                                    <Mail size={20} />
                                </span>
                                <span className="font-medium text-sm text-zinc-400 group-hover:text-white">
                                    {t("hero.email")}
                                </span>
                            </Link>

                            {locale === "pt-BR" ? (
                                <a
                                    href="/curriculo-ptbr-rafael-molina.pdf"
                                    download="Curriculo-PTBR-Rafael-Molina.pdf"
                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-cyan-500/50 transition-all group"
                                >
                                    <span className="text-zinc-400 group-hover:text-cyan-400 transition-colors">
                                        <Download size={20} />
                                    </span>
                                    <span className="font-medium text-sm text-zinc-400 group-hover:text-white">
                                        Curriculo PT-BR
                                    </span>
                                </a>
                            ) : (
                                <a
                                    href="/curriculo-ingles-rafael-molina.pdf"
                                    download="Resume-EN-Rafael-Molina.pdf"
                                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-blue-500/50 transition-all group"
                                >
                                    <span className="text-zinc-400 group-hover:text-blue-400 transition-colors">
                                        <Download size={20} />
                                    </span>
                                    <span className="font-medium text-sm text-zinc-400 group-hover:text-white">
                                        Resume EN
                                    </span>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="relative animate-float">
                        <div className="relative w-[260px] md:w-[320px]">
                            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/12 via-transparent to-orange-500/10 blur-2xl" />
                            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800/80 bg-zinc-950/80 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                                <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                                    <span>Rafael Molina</span>
                                    <span>Fullstack</span>
                                </div>
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] border border-zinc-800 bg-zinc-900">
                                <Image
                                    src={PROFILE_IMAGE_SRC}
                                    alt="Rafael Molina"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                </div>
                                <div className="mt-3 flex items-center justify-between rounded-[1rem] border border-zinc-800/80 bg-zinc-900/70 px-4 py-3 text-xs text-zinc-400">
                                    <span>{t("hero.available")}</span>
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </div>
                            </div>
                        </div>
                    </div>
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
                            title="Watch Dog"
                            description={t("projects.watchDog.description")}
                            image="/dashboard-filled.png"
                            techs={[
                                "React",
                                "TypeScript",
                                "Vite",
                                "Tailwind",
                                "Node.js",
                                "Docker",
                            ]}
                            githubUrl="https://github.com/rafamolina1/Watch-Dog"
                            className="md:col-span-2"
                        />

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
                            image="/habit-breaker-20260405.png"
                            techs={["JavaScript", "React", "Vite"]}
                            githubUrl="https://github.com/rafamolina1/Habit-Breaker"
                            deployUrl="https://habitbreaker.vercel.app"
                            previewClassName="aspect-[205/100] bg-[#efe8dc]"
                        />

                        <ProjectCard
                            title="Market Pulse"
                            description={t("projects.market.description")}
                            image="/marketpulse-20260405.png"
                            techs={["JavaScript", "React", "Vite", "CSS"]}
                            githubUrl="https://github.com/rafamolina1/Market-Pulse"
                            deployUrl="https://market-pulse-rho-beryl.vercel.app"
                        />

                        <ProjectCard
                            title="Km De Lucro"
                            description={t("projects.km.description")}
                            image="/dashkm-20260405.png"
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
                        <Link
                            href={contactHref}
                            className="hover:text-zinc-300 transition-colors"
                        >
                            {t("footer.contact")}
                        </Link>
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
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:border-[#00C6FF]/50 transition-all group"
        >
            <span className="text-zinc-400 group-hover:text-[#00C6FF] transition-colors">
                {icon}
            </span>
            <span className="font-medium text-sm">{label}</span>
        </Link>
    );
}
