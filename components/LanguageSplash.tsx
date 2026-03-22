"use client";

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOCALE_FLAGS = {
  "pt-BR": "br",
  en: "us",
  it: "it",
  es: "es",
  fr: "fr",
};

const LOCALE_NAMES = {
  "pt-BR": "Português",
  en: "English",
  it: "Italiano",
  es: "Español",
  fr: "Français",
};

export default function LanguageSplash() {
  const locale = useLocale();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    setShowSplash(true);
    
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [locale]);

  const flagCode = LOCALE_FLAGS[locale as keyof typeof LOCALE_FLAGS];
  const localeName = LOCALE_NAMES[locale as keyof typeof LOCALE_NAMES];

  return (
    <AnimatePresence>
      {showSplash && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] pointer-events-none"
          />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.6,
            }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] pointer-events-none"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <img
                  src={`https://flagcdn.com/${flagCode}.svg`}
                  alt={localeName}
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl object-cover border-4 border-white/20"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {localeName}
                </h2>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
