"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Navigation() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.excellence"), href: "/#excellence" },
    { label: t("nav.global"), href: "/#global" },
    { label: t("nav.about"), href: "/#about" },
    { label: "Careers", href: "/careers" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.06] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - always links home */}
            <a href="/" className="flex items-center gap-2.5 group">
              <svg viewBox="0 0 52 24" className={`h-7 w-auto transition-colors duration-500 ${scrolled ? "text-dark-950" : "text-white"}`} fill="currentColor">
                <path d="M2 18 C5 17 8 15 12 13 L20 10 L17 3 L19.5 2.5 L23 9 L38 5 L36.5 1 L39 0.5 L40.5 4 L49 2.5 C51 2 51.5 4.5 49 5 L40.5 6 L39 10 L36.5 10.5 L38 7 L23 11 L19.5 18 L17 17.5 L20 12 L12 14 C8 16 5 17.5 2 18 Z" />
              </svg>
              <div className="flex flex-col">
                <span className={`text-[17px] font-normal tracking-[0.08em] leading-none transition-colors duration-500 ${scrolled ? "text-dark-950" : "text-white"}`}>
                  SPIA Technik
                </span>
                <span className={`text-[8px] tracking-[0.12em] leading-none mt-0.5 font-light italic transition-colors duration-500 ${scrolled ? "text-text-muted" : "text-white/50"}`}>
                  Dedicated to Quality.
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 ${scrolled ? "text-text-secondary hover:text-text-primary" : "text-white/70 hover:text-white"}`}
                >
                  {link.label}
                </a>
              ))}
              <div
                className={`ml-3 ${scrolled ? "text-text-secondary" : "text-white/70"}`}
              >
                <LanguageSwitcher />
              </div>
              <a
                href="/#contact"
                className={`ml-3 px-6 py-2.5 text-[12px] tracking-[0.18em] uppercase transition-all duration-300 whitespace-nowrap ${scrolled ? "border border-dark-950 text-dark-950 hover:bg-dark-950 hover:text-white" : "border border-gold-500/40 text-gold-500 hover:bg-gold-500 hover:text-dark-950"}`}
              >
                {t("nav.getInTouch")}
              </a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <div
                className={
                  scrolled ? "text-text-secondary" : "text-white/70"
                }
              >
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-8 h-8 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <span
                  className={`absolute w-5 h-[1.5px] transition-all duration-300 ${scrolled ? "bg-dark-950" : "bg-white"} ${mobileOpen ? "rotate-45" : "-translate-y-1.5"}`}
                />
                <span
                  className={`absolute w-5 h-[1.5px] transition-all duration-300 ${scrolled ? "bg-dark-950" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute w-5 h-[1.5px] transition-all duration-300 ${scrolled ? "bg-dark-950" : "bg-white"} ${mobileOpen ? "-rotate-45" : "translate-y-1.5"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="text-2xl tracking-[0.2em] uppercase text-text-primary hover:text-gold-500 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
