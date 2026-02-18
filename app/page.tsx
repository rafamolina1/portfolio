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

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

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
              Disponível para novos desafios
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
              Desenvolvedor Fullstack focado em construir SaaS modernos,
              interfaces fluidas e código limpo.
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
                  Email
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
            <h2 className="text-3xl font-bold">Projetos</h2>
            <Link
              href="https://github.com/rafamolina1"
              className="text-sm text-purple-400 hover:underline"
            >
              Ver todos no GitHub →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard
              title="BarberManager SaaS"
              description="Dashboard completo para gestão de barbearias com métricas em tempo real, integração com WhatsApp e sistema de membros."
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
              description="Aplicação para ajudar pessoas a largar o cigarro com rastreamento em tempo real, economia financeira estimada e IA Coach integrada."
              image="/habit-breaker.png"
              techs={["JavaScript", "React", "Vite"]}
              githubUrl="https://github.com/rafamolina1/Habit-Breaker"
              deployUrl="https://habitbreaker.vercel.app"
            />

            <ProjectCard
              title="Market Pulse"
              description="O MarketPulse é um dashboard financeiro de alta performance projetado para investidores modernos. Ele oferece uma aula técnica e visual em gerenciamento de dados em tempo real, apresentando uma estética inspirada em TRON com glassmorphism avançado."
              image="/marketpulse.png"
              techs={["JavaScript", "React", "Vite", "CSS"]}
              githubUrl="https://github.com/rafamolina1/Market-Pulse"
              deployUrl="https://market-pulse-rho-beryl.vercel.app"
            />

            <ProjectCard
              title="Km De Lucro"
              description="O KM de Lucro é uma plataforma web de gestão financeira simplificada, desenvolvida especificamente para motoristas de carga autônomos. O projeto nasceu com o objetivo de substituir planilhas complexas e anotações manuais por uma interface intuitiva e focada em performance, permitindo que o motorista entenda a saúde financeira de sua operação em tempo real."
              image="/dashkm.png"
              techs={["Next.js", "TypeScript", "Supabase"]}
              githubUrl="https://github.com/rafamolina1/KM-De-Lucro"
              deployUrl="https://kmdelucro.vercel.app"
            />

            <ProjectCard
              title="Em Desenvolvimento"
              description="Novas soluções e laboratórios técnicos sendo codificados. Fique atento ao GitHub para atualizações."
              image="/videoloading.mp4"
              techs={["Node.js", "Docker", ".NET", "C#"]}
              githubUrl="https://github.com/rafamolina1"
            />
          </div>
        </section>

        <footer className="mt-40 pb-10 border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>© 2026 Rafael Molina. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link
              href="#projects"
              className="hover:text-zinc-300 transition-colors"
            >
              Projetos
            </Link>
            <button
              onClick={() => setIsContactOpen(true)}
              className="hover:text-zinc-300 transition-colors"
            >
              Contato
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
