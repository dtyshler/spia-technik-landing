"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.excellence"), href: "#excellence" },
    { label: t("nav.global"), href: "#global" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-dark-950 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <LogoIcon variant="full" className="h-8 w-auto" />
            <p className="mt-4 text-[13px] text-slate-400 font-light leading-relaxed max-w-xs">{t("footer.tagline")}</p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500/50 mb-4">{t("footer.nav")}</div>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-[13px] text-slate-400 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500/50 mb-4">{t("footer.touch")}</div>
            <div className="space-y-3">
              <a href="mailto:info@spiatechnik.com" className="block text-[13px] text-slate-400 hover:text-white transition-colors">info@spiatechnik.com</a>
              <a href="tel:+12067995955" className="block text-[13px] text-slate-400 hover:text-white transition-colors font-mono">+1-206-799-5955</a>
              <p className="text-[13px] text-slate-400/60 font-light">Seattle, WA, USA</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400/40 tracking-[0.1em]">&copy; {new Date().getFullYear()} SPIA Technik. {t("footer.rights")}</p>
          <p className="text-[11px] text-slate-400/25 tracking-[0.1em]">{t("footer.quality")}</p>
        </div>
      </div>
    </footer>
  );
}
