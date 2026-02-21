"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useTranslation } from "@/i18n/LanguageContext";

const AircraftSeat3D = dynamic(() => import("./AircraftSeat3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border border-gold-500/20 rounded-full animate-spin border-t-gold-500/60" />
    </div>
  ),
});

export default function ScrollShowcase() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const showcaseItems = [
    {
      model: "seat" as const,
      label: t("showcase.seat.label"),
      title: t("showcase.seat.title"),
      description: t("showcase.seat.desc"),
      specs: ["FAR 25.562 Compliant", "16g Dynamic Testing", "Ergonomic Design"],
    },
    {
      model: "galley" as const,
      label: t("showcase.galley.label"),
      title: t("showcase.galley.title"),
      description: t("showcase.galley.desc"),
      specs: ["ATLAS/KSSU Standard", "Electrical Integration", "Weight Optimized"],
    },
    {
      model: "lavatory" as const,
      label: t("showcase.lavatory.label"),
      title: t("showcase.lavatory.title"),
      description: t("showcase.lavatory.desc"),
      specs: ["Vacuum System Design", "Water Supply/Drain", "ADA Accessible Options"],
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setScrollProgress(v);
      const idx = Math.min(
        Math.floor(v * showcaseItems.length),
        showcaseItems.length - 1
      );
      setActiveIndex(idx);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const modelProgress = scrollProgress * showcaseItems.length - activeIndex;

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Blueprint grid background - MORE visible */}
        <div className="absolute inset-0 bg-navy-950">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(201,169,110,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,169,110,0.4) 1px, transparent 1px),
                linear-gradient(rgba(201,169,110,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,169,110,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
            }}
          />

          {/* Blueprint dimension lines - MORE visible */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <line x1="200" y1="80" x2="200" y2="820" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="6 6" />
            <line x1="1240" y1="80" x2="1240" y2="820" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="6 6" />
            <line x1="100" y1="450" x2="1340" y2="450" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="6 6" />
            <circle cx="200" cy="450" r="5" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
            <circle cx="1240" cy="450" r="5" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
            {/* Corner markers */}
            <path d="M 180 80 L 200 80 L 200 100" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
            <path d="M 1220 80 L 1240 80 L 1240 100" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
            <path d="M 180 820 L 200 820 L 200 800" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
            <path d="M 1220 820 L 1240 820 L 1240 800" fill="none" stroke="#C9A96E" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center">
            {/* Left: Text */}
            <div className="order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
                >
                  <span className="text-[12px] tracking-[0.4em] uppercase text-gold-500 font-mono">
                    {showcaseItems[activeIndex].label}
                  </span>
                  <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-[1.1]">
                    {showcaseItems[activeIndex].title}
                  </h2>
                  <p className="mt-6 text-[16px] text-slate-400 font-light leading-relaxed max-w-md">
                    {showcaseItems[activeIndex].description}
                  </p>

                  {/* Spec tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {showcaseItems[activeIndex].specs.map((spec, i) => (
                      <motion.span
                        key={spec}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-gold-500/70 border border-gold-500/25 bg-gold-500/[0.04]"
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-10 flex items-center gap-4">
                    <div className="w-16 h-[1px] bg-gold-500/40" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500/50 font-mono">
                      {t("showcase.3dmodel")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress */}
              <div className="mt-12 flex items-center gap-3">
                {showcaseItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={`h-[2px] transition-all duration-500 ${
                        i === activeIndex
                          ? "w-14 bg-gold-500"
                          : i < activeIndex
                            ? "w-8 bg-gold-500/40"
                            : "w-6 bg-white/10"
                      }`}
                    />
                    {i === activeIndex && (
                      <span className="text-[9px] text-gold-500/60 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D Model */}
            <div className="order-1 lg:order-2 h-[50vh] lg:h-[75vh] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gold-500/[0.06] rounded-full blur-[100px]" />
              </div>

              <AircraftSeat3D
                scrollProgress={modelProgress}
                model={showcaseItems[activeIndex].model}
              />

              {/* Technical annotations - MORE visible */}
              <div className="absolute top-[12%] right-[8%] text-right hidden lg:block">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500/40 font-mono">
                  Scale 1:12
                </div>
                <div className="mt-1 text-[9px] text-gold-500/25 font-mono">
                  SPIA Technik CAD
                </div>
              </div>
              <div className="absolute bottom-[18%] left-[3%] hidden lg:block">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500/40 font-mono">
                  REV. 4.2
                </div>
              </div>
              <div className="absolute bottom-[12%] right-[10%] hidden lg:block">
                <div className="text-[9px] text-gold-500/30 font-mono">
                  DWG-{showcaseItems[activeIndex].model.toUpperCase()}-001
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
