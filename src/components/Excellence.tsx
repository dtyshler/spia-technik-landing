"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection from "./AnimatedSection";

function Counter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => { const u = rounded.on("change", (v) => setDisplay(v)); return u; }, [rounded]);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !hasAnimated) { setHasAnimated(true); animate(count, target, { duration, ease: "easeOut" }); } }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [count, target, duration, hasAnimated]);
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Excellence() {
  const { t } = useTranslation();
  const stats = [
    { value: 20, suffix: "+", labelKey: "excellence.stat1.label", detailKey: "excellence.stat1.detail" },
    { value: 100, suffix: "%", labelKey: "excellence.stat2.label", detailKey: "excellence.stat2.detail" },
    { value: 8, suffix: "+", labelKey: "excellence.stat3.label", detailKey: "excellence.stat3.detail" },
    { value: 3, suffix: "", labelKey: "excellence.stat4.label", detailKey: "excellence.stat4.detail" },
  ];

  return (
    <section id="excellence" className="relative py-20 lg:py-28 bg-light-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold-500 font-bold">{t("excellence.label")}</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-text-primary leading-[1.15]">
              {t("excellence.title1")}<br /><span className="text-text-muted">{t("excellence.title2")}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-light-300">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.labelKey} delay={i * 0.08}>
              <div className="bg-white p-6 lg:p-8 text-center hover:bg-light-100 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-extralight text-text-primary tracking-tight font-mono">
                  <Counter target={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="mt-2 text-[13px] text-text-secondary font-light">{t(stat.labelKey)}</div>
                <div className="mt-1 text-[10px] tracking-[0.15em] uppercase text-gold-500/70">{t(stat.detailKey)}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-14 max-w-2xl mx-auto text-center">
            <p className="text-lg font-extralight text-text-secondary leading-relaxed italic">
              &ldquo;{t("excellence.quote")}&rdquo;
            </p>
            <div className="mt-6 w-10 h-[1px] bg-gold-500/40 mx-auto" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
