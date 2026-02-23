"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import { Locale, localeNames } from "@/i18n/translations";

const localeOrder: Locale[] = ["en", "ja", "de", "fr", "uk", "ka", "es"];

const localeFlagUrls: Record<Locale, string> = {
  en: "https://flagcdn.com/w80/us.png",
  ja: "https://flagcdn.com/w80/jp.png",
  de: "https://flagcdn.com/w80/de.png",
  fr: "https://flagcdn.com/w80/fr.png",
  ka: "https://flagcdn.com/w80/ge.png",
  uk: "https://flagcdn.com/w80/ua.png",
  es: "https://flagcdn.com/w80/es.png",
};

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 px-4 py-2.5 text-current opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        <svg viewBox="0 0 16 16" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
          <circle cx="8" cy="8" r="6.5" />
          <ellipse cx="8" cy="8" rx="3" ry="6.5" />
          <line x1="1.5" y1="8" x2="14.5" y2="8" />
        </svg>
        <img src={localeFlagUrls[locale]} alt="" className="w-8 h-4 object-contain rounded-[2px] shrink-0" />
        <svg viewBox="0 0 10 6" className={`w-3.5 h-2 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 1 L5 5 L9 1" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-white border border-black/[0.08] shadow-xl rounded-sm min-w-[200px] z-50"
          >
            {localeOrder.map((loc) => (
              <button
                key={loc}
                onClick={() => { setLocale(loc); setOpen(false); }}
                className={`w-full flex items-center gap-3.5 px-5 py-3 text-[14px] tracking-wide transition-all duration-200 ${
                  loc === locale
                    ? "text-gold-500 bg-gold-500/[0.04]"
                    : "text-text-secondary hover:text-text-primary hover:bg-light-100"
                }`}
              >
                <img src={localeFlagUrls[loc]} alt="" className="w-7 h-[14px] object-contain rounded-[2px] shrink-0" />
                <span>{localeNames[loc]}</span>
                {loc === locale && (
                  <svg viewBox="0 0 12 12" className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 6 L5 9 L10 3" /></svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
