"use client";

import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-light-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Team photo - dimmed and blurred with highlighted overlay text */}
        <AnimatedSection>
          <div className="relative w-full aspect-[21/9] overflow-hidden mb-16">
            <img
              src="/team-office.png"
              alt="SPIA Technik engineering team"
              className="w-full h-full object-cover blur-[2px]"
            />
            <div className="absolute inset-0 bg-dark-950/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <span className="bg-gold-500/80 text-white text-[11px] tracking-[0.4em] uppercase font-bold px-3 py-1.5 mb-4 inline-block shadow-lg">
                {t("break.team.sub")}
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight">
                <span className="bg-gold-500/80 text-white px-4 py-1 inline-block leading-[1.5] shadow-lg">
                  Engineering Excellence,
                </span>
                <br />
                <span className="bg-gold-500/80 text-white px-4 py-1 inline-block leading-[1.5] shadow-lg mt-1">
                  Worldwide
                </span>
              </h3>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimatedSection delay={0.1}>
            <div>
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold-500 font-bold">
                {t("about.label")}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-text-primary leading-[1.15]">
                {t("about.title1")}
                <br />
                <span className="text-text-muted">{t("about.title2")}</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="lg:pt-8 space-y-4">
              <p className="text-base md:text-lg text-black font-normal leading-[1.8]">
                {t("about.p1")}
              </p>
              <p className="text-base md:text-lg text-black font-normal leading-[1.8]">
                {t("about.p2")}
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {[
              "Structural Analysis",
              "Interior Design",
              "CAD/CAE Modeling",
              "Stress Reports",
              "MEI Documentation",
              "Turnkey Modifications",
              "VIP Configurations",
              "Load Analysis",
            ].map((cap) => (
              <span
                key={cap}
                className="px-4 py-2 text-[13px] tracking-[0.12em] uppercase font-semibold text-black border-2 border-black/20 hover:border-gold-500 hover:text-gold-600 bg-white shadow-sm transition-all duration-300 cursor-default"
              >
                {cap}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
