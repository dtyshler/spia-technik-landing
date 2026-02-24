"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import LogoIcon from "./LogoIcon";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Navigation() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const light = scrolled || !isHome;

  const navLinks = [
    { label: t("nav.about"), href: "/#about", sectionId: "about" },
    { label: t("nav.services"), href: "/#services", sectionId: "services" },
    { label: t("nav.excellence"), href: "/#excellence", sectionId: "excellence" },
    { label: t("nav.technology"), href: "/#technology", sectionId: "technology" },
    { label: t("nav.global"), href: "/#global", sectionId: "global" },
    { label: t("nav.careers"), href: "/careers", sectionId: "careers" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sectionIds = ["about", "services", "excellence", "technology", "global", "careers", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(top.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          light
            ? "bg-white/90 backdrop-blur-xl border-b border-black/[0.06] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            <a href="/" className={`flex items-center shrink-0 group ${light ? "mt-1 -ml-1 sm:-ml-8 lg:-ml-12" : "mt-6 sm:mt-12 -ml-2 sm:-ml-24 lg:-ml-32"}`}>
              <LogoIcon variant="full" light={light} className={`w-auto ${light ? "h-9 sm:h-10" : "h-12 sm:h-20 md:h-24 lg:h-[6.5rem]"}`} />
            </a>

            <div className="hidden md:flex items-center min-w-0 shrink">
              <div className="flex items-center gap-1 mr-auto">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`relative px-3 py-2 text-[10px] sm:text-[11px] lg:text-[12px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                        isActive
                          ? light ? "text-gold-600" : "text-gold-400"
                          : light ? "text-text-secondary hover:text-text-primary" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold-500 rounded-full" />
                      )}
                    </a>
                  );
                })}
                <div className={`ml-3 shrink-0 ${light ? "text-text-secondary" : "text-white/70"}`}>
                  <LanguageSwitcher />
                </div>
              </div>
              <a
                href="/#contact"
                className={`ml-8 shrink-0 px-6 py-2.5 text-[12px] tracking-[0.18em] uppercase transition-all duration-300 whitespace-nowrap ${light ? "border border-dark-950 text-dark-950 hover:bg-dark-950 hover:text-white" : "border border-gold-500/40 text-gold-500 hover:bg-gold-500 hover:text-dark-950"}`}
              >
                {t("nav.getInTouch")}
              </a>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <div className={light ? "text-text-secondary" : "text-white/70"}>
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-8 h-8 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <span className={`absolute w-5 h-[1.5px] transition-all duration-300 ${light ? "bg-dark-950" : "bg-white"} ${mobileOpen ? "rotate-45" : "-translate-y-1.5"}`} />
                <span className={`absolute w-5 h-[1.5px] transition-all duration-300 ${light ? "bg-dark-950" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`absolute w-5 h-[1.5px] transition-all duration-300 ${light ? "bg-dark-950" : "bg-white"} ${mobileOpen ? "-rotate-45" : "translate-y-1.5"}`} />
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
            className="fixed inset-0 z-40 bg-white backdrop-blur-2xl flex flex-col items-center justify-center"
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
                  className={`text-2xl tracking-[0.2em] uppercase transition-colors ${activeSection === link.sectionId ? "text-gold-500" : "text-text-primary hover:text-gold-500"}`}
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
