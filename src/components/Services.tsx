"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    { number: "01", titleKey: "services.s1.title", descKey: "services.s1.desc", tagKey: "services.s1.tag" },
    { number: "02", titleKey: "services.s2.title", descKey: "services.s2.desc", tagKey: "services.s2.tag" },
    { number: "03", titleKey: "services.s3.title", descKey: "services.s3.desc", tagKey: "services.s3.tag" },
    { number: "04", titleKey: "services.s4.title", descKey: "services.s4.desc", tagKey: "services.s4.tag" },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold-500 font-bold">{t("services.label")}</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-text-primary leading-[1.15]">
              {t("services.title1")}<br /><span className="text-text-muted">{t("services.title2")}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-light-300">
          {services.map((s, i) => (
            <AnimatedSection key={s.number} delay={i * 0.08}>
              <div className="group bg-white p-8 lg:p-10 hover:bg-light-100 transition-all duration-500 relative">
                <span className="text-[11px] tracking-[0.3em] text-gold-500/60 font-mono">{s.number}</span>
                <h3 className="mt-4 text-xl font-normal tracking-wide text-text-primary">{t(s.titleKey)}</h3>
                <p className="mt-3 text-[15px] text-text-secondary font-light leading-relaxed">{t(s.descKey)}</p>
                <div className="mt-5">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold-600 border border-gold-500/20 px-3 py-1.5 bg-gold-500/[0.04]">{t(s.tagKey)}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-700" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
