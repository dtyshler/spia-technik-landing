"use client";

import { useTranslation } from "@/i18n/LanguageContext";

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
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                <path d="M4 18 C4 18, 12 12, 20 14 C24 15, 28 13, 32 10" stroke="#B8956A" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 22 C6 22, 14 18, 22 19 C26 19.5, 30 17, 34 14" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              </svg>
              <div className="flex flex-col">
                <span className="text-white text-sm font-light tracking-[0.25em] leading-none">SPIA</span>
                <span className="text-gold-500 text-[9px] tracking-[0.35em] uppercase leading-none mt-0.5">Technik</span>
              </div>
            </div>
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
