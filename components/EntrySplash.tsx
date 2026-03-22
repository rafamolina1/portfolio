"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type EntrySplashProps = {
  durationMs?: number;
};

const SESSION_KEY = "entry-splash-shown";
const EXIT_DURATION_S = 0.8;

export default function EntrySplash({ durationMs = 2200 }: EntrySplashProps) {
  const [visible, setVisible] = useState(false);
  const progressDurationS = durationMs / 1000 + EXIT_DURATION_S;

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY) === "true";

    if (alreadyShown) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "true");
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION_S, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[130] flex items-center justify-center bg-[#0a0a0a]"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#08080a] via-[#0f172a] to-[#08080a]" />
            <motion.div
              animate={{ opacity: [0.16, 0.3, 0.16], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full bg-purple-600/20 blur-[140px]"
            />
            <motion.div
              animate={{ opacity: [0.12, 0.26, 0.12], x: [0, 6, 0], y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[42%] left-[54%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[125px]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full px-6 text-center"
          >
            <motion.h1
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Rafael{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C6FF] via-[#8B5CF6] to-[#00C6FF] animate-shimmer">
                Molina.
              </span>
            </motion.h1>

            <p className="mt-3 text-zinc-400 text-xs md:text-sm tracking-[0.24em] uppercase">
              Fullstack Developer
            </p>

            <div className="mx-auto mt-7 h-px w-40 md:w-56 overflow-hidden rounded-full bg-zinc-700/80">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: progressDurationS, ease: "linear" }}
                className="h-full w-full origin-left bg-gradient-to-r from-cyan-400/80 via-purple-500/80 to-cyan-400/80"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
