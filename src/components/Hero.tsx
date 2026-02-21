"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (d: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: d, duration: 2.5, ease: "easeInOut" } as any,
      opacity: { delay: d, duration: 0.3 },
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (d: number) => ({
    opacity: 1,
    transition: { delay: d, duration: 1.5 },
  }),
};

export default function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060C16] via-dark-950 to-[#060C16]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(184,149,106,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(184,149,106,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Elaborate Blueprint Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.svg
          viewBox="0 0 1440 900"
          className="absolute inset-0 w-full h-full"
          fill="none"
          initial="hidden"
          animate="visible"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Top-left corner bracket */}
          <motion.path variants={draw} custom={0.5} d="M 80 120 L 80 80 L 200 80" stroke="#B8956A" strokeWidth="0.5" />
          <motion.circle variants={draw} custom={1} cx="80" cy="80" r="3" stroke="#B8956A" strokeWidth="0.5" />
          {/* Top-right corner bracket */}
          <motion.path variants={draw} custom={0.8} d="M 1360 80 L 1240 80 L 1240 120" stroke="#B8956A" strokeWidth="0.5" />
          <motion.circle variants={draw} custom={1.2} cx="1360" cy="80" r="3" stroke="#B8956A" strokeWidth="0.5" />
          {/* Bottom-left corner bracket */}
          <motion.path variants={draw} custom={1.0} d="M 80 780 L 80 820 L 200 820" stroke="#B8956A" strokeWidth="0.5" />
          <motion.circle variants={draw} custom={1.5} cx="80" cy="820" r="3" stroke="#B8956A" strokeWidth="0.5" />
          {/* Bottom-right corner bracket */}
          <motion.path variants={draw} custom={1.2} d="M 1240 820 L 1360 820 L 1360 780" stroke="#B8956A" strokeWidth="0.5" />

          {/* Left side: fuselage cross-section */}
          <motion.circle variants={draw} custom={2} cx="140" cy="450" r="80" stroke="#B8956A" strokeWidth="0.6" />
          <motion.circle variants={draw} custom={2.5} cx="140" cy="450" r="76" stroke="#B8956A" strokeWidth="0.3" strokeDasharray="3 5" />
          <motion.line variants={draw} custom={3} x1="64" y1="470" x2="216" y2="470" stroke="#B8956A" strokeWidth="0.4" />
          <motion.line variants={draw} custom={3.2} x1="80" y1="510" x2="200" y2="510" stroke="#B8956A" strokeWidth="0.3" strokeDasharray="2 4" />
          {/* Seats in cross-section */}
          {[95, 115, 135, 155, 175].map((x, i) => (
            <motion.rect key={`seat-${i}`} variants={draw} custom={3.5 + i * 0.15} x={x - 5} y={455} width={10} height={14} rx={1} stroke="#B8956A" strokeWidth="0.4" />
          ))}
          {/* Overhead bins */}
          <motion.path variants={draw} custom={4} d="M 90 395 L 110 395 L 110 405 L 90 405 Z" stroke="#B8956A" strokeWidth="0.4" />
          <motion.path variants={draw} custom={4.1} d="M 170 395 L 190 395 L 190 405 L 170 405 Z" stroke="#B8956A" strokeWidth="0.4" />

          {/* Right side: plan view of aircraft */}
          <motion.ellipse variants={draw} custom={2} cx="1300" cy="450" rx="15" ry="110" stroke="#B8956A" strokeWidth="0.6" />
          {/* Wings */}
          <motion.path variants={draw} custom={2.8} d="M 1298 400 L 1240 370 L 1240 380 L 1290 405" stroke="#B8956A" strokeWidth="0.4" />
          <motion.path variants={draw} custom={2.9} d="M 1298 500 L 1240 530 L 1240 520 L 1290 495" stroke="#B8956A" strokeWidth="0.4" />
          {/* Tail */}
          <motion.path variants={draw} custom={3.2} d="M 1300 345 L 1280 330 L 1280 340 L 1298 348" stroke="#B8956A" strokeWidth="0.4" />
          <motion.path variants={draw} custom={3.2} d="M 1300 345 L 1320 330 L 1320 340 L 1302 348" stroke="#B8956A" strokeWidth="0.4" />
          {/* Engines */}
          <motion.ellipse variants={draw} custom={3.5} cx="1260" cy="388" rx="4" ry="10" stroke="#B8956A" strokeWidth="0.4" />
          <motion.ellipse variants={draw} custom={3.6} cx="1260" cy="512" rx="4" ry="10" stroke="#B8956A" strokeWidth="0.4" />

          {/* Top: Dimension lines */}
          <motion.line variants={draw} custom={1.5} x1="300" y1="140" x2="1140" y2="140" stroke="#B8956A" strokeWidth="0.3" strokeDasharray="4 6" />
          <motion.path variants={draw} custom={1.8} d="M 300 135 L 300 145 M 1140 135 L 1140 145" stroke="#B8956A" strokeWidth="0.4" />

          {/* Bottom: Station labels and line */}
          <motion.line variants={draw} custom={2} x1="300" y1="760" x2="1140" y2="760" stroke="#B8956A" strokeWidth="0.3" strokeDasharray="4 6" />
          {[300, 440, 580, 720, 860, 1000, 1140].map((x, i) => (
            <motion.line key={`sta-${i}`} variants={draw} custom={2.5 + i * 0.2} x1={x} y1={755} x2={x} y2={765} stroke="#B8956A" strokeWidth="0.4" />
          ))}

          {/* Top-left: detail callout circle */}
          <motion.circle variants={draw} custom={4.5} cx="250" cy="220" r="25" stroke="#B8956A" strokeWidth="0.4" />
          <motion.line variants={draw} custom={4.8} x1="275" y1="220" x2="330" y2="195" stroke="#B8956A" strokeWidth="0.3" />
          <motion.line variants={draw} custom={5} x1="330" y1="195" x2="400" y2="195" stroke="#B8956A" strokeWidth="0.3" />

          {/* Bottom-right: detail callout */}
          <motion.circle variants={draw} custom={5} cx="1180" cy="680" r="20" stroke="#B8956A" strokeWidth="0.4" />
          <motion.line variants={draw} custom={5.3} x1="1160" y1="680" x2="1100" y2="710" stroke="#B8956A" strokeWidth="0.3" />
          <motion.line variants={draw} custom={5.5} x1="1020" y1="710" x2="1100" y2="710" stroke="#B8956A" strokeWidth="0.3" />

          {/* Scattered technical annotation marks */}
          <motion.path variants={draw} custom={5.5} d="M 1100 150 L 1105 145 L 1110 150 L 1105 155 Z" stroke="#B8956A" strokeWidth="0.4" />
          <motion.path variants={draw} custom={6} d="M 320 680 L 325 675 L 330 680 L 325 685 Z" stroke="#B8956A" strokeWidth="0.4" />

          {/* Faded annotation lines */}
          {[
            { x: 400, y: 193, w: 50 },
            { x: 1020, y: 708, w: 40 },
            { x: 90, y: 540, w: 30 },
            { x: 1270, y: 570, w: 25 },
          ].map((a, i) => (
            <motion.line key={`anno-${i}`} variants={fadeIn} custom={5 + i * 0.3} x1={a.x} y1={a.y} x2={a.x + a.w} y2={a.y} stroke="#B8956A" strokeWidth="0.8" opacity="0.3" />
          ))}
        </motion.svg>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Prominent Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10"
        >
          <img
            src="/spia-logo.png"
            alt="SPIA Technik"
            className="h-16 sm:h-20 md:h-24 w-auto mx-auto brightness-0 invert"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="mb-6">
          <span className="inline-flex items-center gap-4 text-[13px] tracking-[0.3em] uppercase text-gold-400 font-bold drop-shadow-lg">
            <span className="w-10 h-[1px] bg-gold-400/60" />
            {t("hero.tagline")}
            <span className="w-10 h-[1px] bg-gold-400/60" />
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white leading-[1.08]">
          {t("hero.title1")} {t("hero.title2")}
          <br />
          <span className="text-gold-500 font-light italic">{t("hero.title3")}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="px-8 py-3.5 bg-gold-500 text-dark-950 text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-gold-400 transition-colors duration-300">
            {t("hero.cta1")}
          </a>
          <a href="#contact" className="px-8 py-3.5 border border-white/20 text-white text-[12px] tracking-[0.2em] uppercase font-light hover:border-white/50 transition-colors duration-300">
            {t("hero.cta2")}
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-slate-400/50">{t("hero.platforms")} including</span>
          {["A320", "A330", "A350", "A380", "737", "747", "787"].map((m) => (
            <span key={m} className="text-[11px] tracking-[0.1em] text-slate-400/40 font-mono hover:text-gold-500 transition-colors duration-300 cursor-default">{m}</span>
          ))}
          <span className="text-[10px] tracking-[0.15em] text-slate-400/30">& more</span>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.3em] uppercase text-slate-400/40">{t("hero.scroll")}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-[1px] h-10 bg-gradient-to-b from-gold-500/40 to-transparent" />
      </motion.div>
    </section>
  );
}
