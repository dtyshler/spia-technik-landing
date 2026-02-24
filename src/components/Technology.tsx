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
      {/* Faint left/right gradients, invisible in the middle */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-white/60 via-white/10 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-white/60 via-white/10 to-transparent z-10 pointer-events-none" />
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

  const gridStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px",
  };

  return (
    <section id="technology" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Grid paper: left side, fades toward center */}
      <div
        className="absolute inset-y-0 left-0 w-[35%] max-w-md pointer-events-none z-0"
        style={{
          ...gridStyle,
          WebkitMaskImage: "linear-gradient(to right, black, transparent)",
          maskImage: "linear-gradient(to right, black, transparent)",
        }}
      />
      {/* Grid paper: right side, fades toward center */}
      <div
        className="absolute inset-y-0 right-0 w-[35%] max-w-md pointer-events-none z-0"
        style={{
          ...gridStyle,
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          maskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
      </div>
    </section>
  );
}
