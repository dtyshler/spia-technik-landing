"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useTranslation } from "@/i18n/LanguageContext";

const tools = [
  { name: "CATIA", category: "3D CAD", logo: "/logos/catia.png" },
  { name: "Siemens NX", category: "CAD/CAM", logo: "/logos/siemens-nx.png" },
  { name: "SolidWorks", category: "3D CAD", logo: "/logos/solidworks.png" },
  { name: "AutoCAD", category: "2D/3D CAD", logo: "/logos/autocad.png" },
  { name: "FEMAP", category: "FEA", logo: null },
];

function LogoCarousel() {
  const doubled = [...tools, ...tools];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
      <motion.div className="flex items-center gap-14" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        {doubled.map((tool, i) => (
          <div key={`${tool.name}-${i}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            {tool.logo ? (
              <img src={tool.logo} alt={tool.name} className="h-8 md:h-10 w-auto object-contain" />
            ) : (
              <span className="text-xl font-light text-text-primary tracking-wide">{tool.name}</span>
            )}
            <span className="text-[9px] tracking-[0.25em] uppercase text-text-muted">{tool.category}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Technology() {
  const { t } = useTranslation();

  return (
    <section id="technology" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold-500 font-bold">{t("tech.label")}</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-text-primary leading-[1.15]">
              {t("tech.title1")} <span className="text-text-muted">{t("tech.title2")}</span>
            </h2>
            <p className="mt-4 text-[15px] text-text-secondary font-light leading-relaxed max-w-lg mx-auto">{t("tech.desc")}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <LogoCarousel />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-px bg-light-300 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-white p-4 text-center group hover:bg-light-100 transition-all duration-300">
                <div className="text-sm font-normal text-text-primary">{tool.name}</div>
                <div className="mt-0.5 text-[9px] tracking-[0.2em] uppercase text-gold-500/60">{tool.category}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
