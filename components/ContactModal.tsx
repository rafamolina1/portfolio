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
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 border border-zinc-700 p-8 rounded-3xl shadow-2xl z-[70] backdrop-blur-xl"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-violet-400 bg-clip-text text-transparent animate-shimmer">
                  {t("title")}
                </h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-3 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-5 bg-zinc-950/40 border border-purple-500/30 rounded-2xl flex items-center justify-between group hover:border-purple-500/60 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="bg-purple-500/20 p-3 rounded-lg text-purple-300 border border-purple-500/30"
                  >
                    <Mail size={24} />
                  </motion.div>
                  <div>
                    <p className="text-base font-semibold text-zinc-100">Email</p>
                    <p className="text-sm text-zinc-400">{email}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-purple-500/20 rounded-lg text-zinc-400 hover:text-purple-300 transition-colors"
                >
                  {copied ? (
                    <Check size={20} className="text-green-400" />
                  ) : (
                    <Copy size={20} />
                  )}
                </motion.button>
              </motion.div>

              <Link
                href="https://www.linkedin.com/in/rafael-molina-049a43247/"
                target="_blank"
                className="flex"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ y: -4 }}
                  className="w-full flex items-center gap-4 p-5 bg-zinc-950/40 border border-blue-500/30 rounded-2xl hover:border-blue-500/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    className="bg-blue-500/20 p-3 rounded-lg text-blue-300 border border-blue-500/30"
                  >
                    <Linkedin size={24} />
                  </motion.div>
                  <div>
                    <p className="text-base font-semibold text-zinc-100 group-hover:text-blue-300 transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-sm text-zinc-400">{t("linkedinSub")}</p>
                  </div>
                </motion.div>
              </Link>

              <Link
                href="https://github.com/rafamolina1"
                target="_blank"
                className="flex"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="w-full flex items-center gap-4 p-5 bg-zinc-950/40 border border-zinc-600/30 rounded-2xl hover:border-zinc-400/60 hover:shadow-[0_0_20px_rgba(229,231,235,0.1)] transition-all group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="bg-zinc-800/60 p-3 rounded-lg text-zinc-200 border border-zinc-600/30"
                  >
                    <Github size={24} />
                  </motion.div>
                  <div>
                    <p className="text-base font-semibold text-zinc-100 group-hover:text-zinc-300 transition-colors">GitHub</p>
                    <p className="text-sm text-zinc-400">{t("githubSub")}</p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
