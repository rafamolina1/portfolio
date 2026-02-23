"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin, Github, Check, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const email = "rafaeloliveiramolina@gmail.com";
  const t = useTranslations("contact");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-2xl z-[70]"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-zinc-100">
                {t("title")}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/10 p-2 rounded-lg text-purple-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">Email</p>
                    <p className="text-xs text-zinc-500">{email}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-purple-400 transition-colors relative"
                >
                  {copied ? (
                    <Check size={18} className="text-green-500" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>

              <Link
                href="https://www.linkedin.com/in/rafael-molina-049a43247/"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
              >
                <div className="bg-blue-500/10 p-2 rounded-lg text-blue-400 group-hover:text-blue-300">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-200 group-hover:text-blue-300">
                    LinkedIn
                  </p>
                  <p className="text-xs text-zinc-500">{t("linkedinSub")}</p>
                </div>
              </Link>

              <Link
                href="https://github.com/rafamolina1"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all group"
              >
                <div className="bg-zinc-800 p-2 rounded-lg text-zinc-100">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-200">GitHub</p>
                  <p className="text-xs text-zinc-500">{t("githubSub")}</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
