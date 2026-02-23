"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/i18n/LanguageContext";

const CYCLE = 14;
const MAX_OP = 0.78;

const drawLoop = (d: number) => ({
  pathLength: [0, 1, 1, 0] as number[],
  opacity: [0, MAX_OP, MAX_OP, 0] as number[],
  transition: {
    duration: CYCLE,
    delay: d,
    repeat: Infinity,
    times: [0, 0.35, 0.7, 1],
    ease: "easeInOut" as const,
  },
});

const fadeLoop = (d: number) => ({
  opacity: [0, MAX_OP * 0.6, MAX_OP * 0.6, 0] as number[],
  transition: {
    duration: CYCLE,
    delay: d,
    repeat: Infinity,
    times: [0, 0.3, 0.7, 1],
    ease: "easeInOut" as const,
  },
});

const S = "#D4AF7A";

export default function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-950">
      <div className="absolute inset-0">
        {/* Lighter edges via radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0B1120_30%,#182740_65%,#223450_100%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Blueprint Animation - looping draw in/out */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.svg
          viewBox="0 0 1440 900"
          className="absolute inset-0 w-full h-full"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* === CORNER BRACKETS === */}
          <motion.path animate={drawLoop(0)} d="M 80 120 L 80 80 L 200 80" stroke={S} strokeWidth="0.7" />
          <motion.circle animate={drawLoop(0.5)} cx="80" cy="80" r="3" stroke={S} strokeWidth="0.7" />
          <motion.path animate={drawLoop(0.3)} d="M 1360 80 L 1240 80 L 1240 120" stroke={S} strokeWidth="0.7" />
          <motion.circle animate={drawLoop(0.7)} cx="1360" cy="80" r="3" stroke={S} strokeWidth="0.7" />
          <motion.path animate={drawLoop(0.5)} d="M 80 780 L 80 820 L 200 820" stroke={S} strokeWidth="0.7" />
          <motion.circle animate={drawLoop(0.8)} cx="80" cy="820" r="3" stroke={S} strokeWidth="0.7" />
          <motion.path animate={drawLoop(0.6)} d="M 1240 820 L 1360 820 L 1360 780" stroke={S} strokeWidth="0.7" />

          {/* === LEFT: FUSELAGE CROSS-SECTION === */}
          <motion.circle animate={drawLoop(1)} cx="140" cy="450" r="80" stroke={S} strokeWidth="0.75" />
          <motion.circle animate={drawLoop(1.5)} cx="140" cy="450" r="76" stroke={S} strokeWidth="0.3" strokeDasharray="3 5" />
          <motion.line animate={drawLoop(2)} x1="64" y1="470" x2="216" y2="470" stroke={S} strokeWidth="0.4" />
          <motion.line animate={drawLoop(2.2)} x1="80" y1="510" x2="200" y2="510" stroke={S} strokeWidth="0.3" strokeDasharray="2 4" />
          {[95, 115, 135, 155, 175].map((x, i) => (
            <motion.rect key={`seat-${i}`} animate={drawLoop(2.5 + i * 0.12)} x={x - 5} y={455} width={10} height={14} rx={1} stroke={S} strokeWidth="0.4" />
          ))}
          <motion.path animate={drawLoop(3)} d="M 90 395 L 110 395 L 110 405 L 90 405 Z" stroke={S} strokeWidth="0.4" />
          <motion.path animate={drawLoop(3.1)} d="M 170 395 L 190 395 L 190 405 L 170 405 Z" stroke={S} strokeWidth="0.4" />
          <motion.line animate={drawLoop(3.3)} x1="75" y1="470" x2="75" y2="490" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(3.4)} x1="205" y1="470" x2="205" y2="490" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(3.5)} x1="140" y1="470" x2="140" y2="495" stroke={S} strokeWidth="0.3" strokeDasharray="2 3" />
          <motion.line animate={drawLoop(3.8)} x1="230" y1="450" x2="280" y2="450" stroke={S} strokeWidth="0.3" />

          {/* === RIGHT: STRUCTURAL BRACKET DETAIL (technical drawing) === */}
          <motion.rect animate={drawLoop(1)} x="1160" y="340" width="180" height="220" stroke={S} strokeWidth="0.6" />
          <motion.line animate={drawLoop(1.3)} x1="1160" y1="400" x2="1340" y2="400" stroke={S} strokeWidth="0.4" strokeDasharray="4 6" />
          <motion.line animate={drawLoop(1.5)} x1="1160" y1="460" x2="1340" y2="460" stroke={S} strokeWidth="0.4" strokeDasharray="4 6" />
          <motion.line animate={drawLoop(1.7)} x1="1160" y1="520" x2="1340" y2="520" stroke={S} strokeWidth="0.4" strokeDasharray="4 6" />
          {[1200, 1250, 1300].map((cx, i) => (
            <motion.circle key={`hole-${i}`} animate={drawLoop(2 + i * 0.2)} cx={cx} cy="430" r="6" stroke={S} strokeWidth="0.45" />
          ))}
          {[1200, 1250, 1300].map((cx, i) => (
            <motion.circle key={`hole-inner-${i}`} animate={drawLoop(2.3 + i * 0.2)} cx={cx} cy="430" r="2" stroke={S} strokeWidth="0.3" strokeDasharray="1 2" />
          ))}
          <motion.line animate={drawLoop(2.8)} x1="1195" y1="340" x2="1195" y2="400" stroke={S} strokeWidth="0.3" />
          <motion.path animate={drawLoop(2.9)} d="M 1192 340 L 1198 340 M 1192 400 L 1198 400" stroke={S} strokeWidth="0.35" />
          <motion.line animate={drawLoop(3)} x1="1160" y1="370" x2="1195" y2="370" stroke={S} strokeWidth="0.25" strokeDasharray="2 4" />
          <motion.path animate={drawLoop(3.1)} d="M 1160 367 L 1160 373 M 1195 367 L 1195 373" stroke={S} strokeWidth="0.3" />
          <motion.rect animate={drawLoop(3.3)} x="1175" y="480" width="50" height="40" rx="2" stroke={S} strokeWidth="0.4" />
          <motion.line animate={drawLoop(3.5)} x1="1175" y1="495" x2="1225" y2="495" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(3.7)} x1="1188" y1="480" x2="1188" y2="460" stroke={S} strokeWidth="0.25" />
          <motion.path animate={drawLoop(3.8)} d="M 1185 460 L 1191 460 M 1185 480 L 1191 480" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(4)} x1="1250" y1="340" x2="1340" y2="340" stroke={S} strokeWidth="0.25" strokeDasharray="3 5" />
          <motion.path animate={drawLoop(4.2)} d="M 1250 337 L 1250 343 M 1340 337 L 1340 343" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(4.5)} x1="1320" y1="340" x2="1320" y2="400" stroke={S} strokeWidth="0.25" strokeDasharray="2 4" />
          <motion.path animate={drawLoop(4.7)} d="M 1317 340 L 1323 340 M 1317 400 L 1323 400" stroke={S} strokeWidth="0.3" />

          {/* === TOP: DIMENSION LINES === */}
          <motion.line animate={drawLoop(0.8)} x1="300" y1="140" x2="1140" y2="140" stroke={S} strokeWidth="0.3" strokeDasharray="4 6" />
          <motion.path animate={drawLoop(1)} d="M 300 135 L 300 145 M 1140 135 L 1140 145" stroke={S} strokeWidth="0.4" />
          <motion.line animate={drawLoop(4.5)} x1="300" y1="160" x2="720" y2="160" stroke={S} strokeWidth="0.25" strokeDasharray="2 4" />
          <motion.path animate={drawLoop(4.8)} d="M 300 155 L 300 165 M 720 155 L 720 165" stroke={S} strokeWidth="0.3" />

          {/* === BOTTOM: STATION LABELS === */}
          <motion.line animate={drawLoop(1.2)} x1="300" y1="760" x2="1140" y2="760" stroke={S} strokeWidth="0.3" strokeDasharray="4 6" />
          {[300, 440, 580, 720, 860, 1000, 1140].map((x, i) => (
            <motion.line key={`sta-${i}`} animate={drawLoop(1.5 + i * 0.15)} x1={x} y1={755} x2={x} y2={765} stroke={S} strokeWidth="0.4" />
          ))}
          <motion.line animate={drawLoop(5)} x1="300" y1="780" x2="1140" y2="780" stroke={S} strokeWidth="0.2" strokeDasharray="2 6" />

          {/* === TOP-LEFT: DETAIL CALLOUT === */}
          <motion.circle animate={drawLoop(3)} cx="250" cy="220" r="25" stroke={S} strokeWidth="0.4" />
          <motion.line animate={drawLoop(3.3)} x1="275" y1="220" x2="330" y2="195" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(3.5)} x1="330" y1="195" x2="400" y2="195" stroke={S} strokeWidth="0.3" />
          <motion.rect animate={drawLoop(5.5)} x="238" y="210" width="24" height="18" rx="2" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(5.8)} x1="242" y1="216" x2="258" y2="216" stroke={S} strokeWidth="0.2" />
          <motion.line animate={drawLoop(6)} x1="242" y1="222" x2="254" y2="222" stroke={S} strokeWidth="0.2" />

          {/* === BOTTOM-RIGHT: DETAIL CALLOUT === */}
          <motion.circle animate={drawLoop(3.5)} cx="1180" cy="680" r="20" stroke={S} strokeWidth="0.4" />
          <motion.line animate={drawLoop(3.8)} x1="1160" y1="680" x2="1100" y2="710" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(4)} x1="1020" y1="710" x2="1100" y2="710" stroke={S} strokeWidth="0.3" />

          {/* === TOP-RIGHT: GALLEY MODULE === */}
          <motion.rect animate={drawLoop(4)} x="1050" y="180" width="80" height="120" stroke={S} strokeWidth="0.5" />
          <motion.line animate={drawLoop(4.3)} x1="1050" y1="210" x2="1130" y2="210" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(4.5)} x1="1050" y1="250" x2="1130" y2="250" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(4.7)} x1="1050" y1="270" x2="1130" y2="270" stroke={S} strokeWidth="0.3" strokeDasharray="2 3" />
          {[195, 225, 260].map((yy, i) => (
            <motion.line key={`shelf-${i}`} animate={drawLoop(5 + i * 0.15)} x1="1055" y1={yy} x2="1125" y2={yy} stroke={S} strokeWidth="0.2" strokeDasharray="1 2" />
          ))}
          <motion.line animate={drawLoop(5.5)} x1="1140" y1="180" x2="1140" y2="300" stroke={S} strokeWidth="0.25" />
          <motion.path animate={drawLoop(5.8)} d="M 1137 180 L 1143 180 M 1137 300 L 1143 300" stroke={S} strokeWidth="0.3" />

          {/* === BOTTOM-LEFT: SEAT PROFILE === */}
          <motion.path animate={drawLoop(5.5)} d="M 300 620 L 300 680 L 340 680 L 340 650 L 330 640 L 330 620 Z" stroke={S} strokeWidth="0.4" />
          <motion.path animate={drawLoop(5.8)} d="M 330 640 L 360 630 L 360 620 L 330 620" stroke={S} strokeWidth="0.3" />
          <motion.path animate={drawLoop(6)} d="M 332 618 Q 340 610 348 618" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(6.3)} x1="295" y1="620" x2="295" y2="680" stroke={S} strokeWidth="0.2" />
          <motion.path animate={drawLoop(6.5)} d="M 292 620 L 298 620 M 292 680 L 298 680" stroke={S} strokeWidth="0.25" />
          <motion.line animate={drawLoop(6.7)} x1="290" y1="682" x2="370" y2="682" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(6.8)} x1="290" y1="685" x2="370" y2="685" stroke={S} strokeWidth="0.3" />

          {/* === MID-LEFT: SIDE VIEW CABIN === */}
          <motion.rect animate={drawLoop(5)} x="80" y="240" width="180" height="50" stroke={S} strokeWidth="0.3" />
          {[100, 120, 140, 160, 180, 200, 220, 240].map((x, i) => (
            <motion.line key={`frame-${i}`} animate={drawLoop(5.5 + i * 0.1)} x1={x} y1="240" x2={x} y2="290" stroke={S} strokeWidth="0.2" strokeDasharray="1 3" />
          ))}
          {[108, 132, 156, 180, 204, 228].map((x, i) => (
            <motion.rect key={`window-${i}`} animate={drawLoop(6 + i * 0.08)} x={x} y="252" width="8" height="12" rx="2" stroke={S} strokeWidth="0.25" />
          ))}

          {/* === CENTER-RIGHT: FASTENER DETAIL === */}
          <motion.circle animate={drawLoop(6.5)} cx="1200" cy="280" r="8" stroke={S} strokeWidth="0.3" />
          <motion.circle animate={drawLoop(6.7)} cx="1200" cy="280" r="4" stroke={S} strokeWidth="0.25" />
          <motion.line animate={drawLoop(7)} x1="1200" y1="268" x2="1200" y2="250" stroke={S} strokeWidth="0.2" strokeDasharray="1 2" />
          <motion.line animate={drawLoop(7.2)} x1="1212" y1="280" x2="1230" y2="280" stroke={S} strokeWidth="0.2" strokeDasharray="1 2" />

          {/* === SECTION CUT INDICATOR === */}
          <motion.line animate={drawLoop(7)} x1="1050" y1="600" x2="1050" y2="680" stroke={S} strokeWidth="0.4" />
          <motion.path animate={drawLoop(7.2)} d="M 1040 610 L 1050 600 L 1060 610" stroke={S} strokeWidth="0.3" />
          <motion.path animate={drawLoop(7.3)} d="M 1040 670 L 1050 680 L 1060 670" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(7.5)} x1="1050" y1="600" x2="1000" y2="580" stroke={S} strokeWidth="0.2" strokeDasharray="3 4" />
          <motion.line animate={drawLoop(7.5)} x1="1050" y1="680" x2="1000" y2="700" stroke={S} strokeWidth="0.2" strokeDasharray="3 4" />

          {/* === DIAMOND MARKERS === */}
          <motion.path animate={drawLoop(4)} d="M 1100 150 L 1105 145 L 1110 150 L 1105 155 Z" stroke={S} strokeWidth="0.4" />
          <motion.path animate={drawLoop(4.5)} d="M 320 680 L 325 675 L 330 680 L 325 685 Z" stroke={S} strokeWidth="0.4" />
          <motion.path animate={drawLoop(6)} d="M 500 810 L 505 805 L 510 810 L 505 815 Z" stroke={S} strokeWidth="0.3" />
          <motion.path animate={drawLoop(7)} d="M 950 90 L 955 85 L 960 90 L 955 95 Z" stroke={S} strokeWidth="0.3" />

          {/* === EDGE DIMENSIONS === */}
          <motion.line animate={drawLoop(5.5)} x1="55" y1="200" x2="55" y2="700" stroke={S} strokeWidth="0.2" strokeDasharray="3 6" />
          <motion.path animate={drawLoop(5.8)} d="M 50 200 L 60 200 M 50 700 L 60 700" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(7.5)} x1="1385" y1="200" x2="1385" y2="700" stroke={S} strokeWidth="0.2" strokeDasharray="3 6" />
          <motion.path animate={drawLoop(7.8)} d="M 1380 200 L 1390 200 M 1380 700 L 1390 700" stroke={S} strokeWidth="0.3" />

          {/* === RIVET PATTERN === */}
          {[340, 360, 380, 400, 420, 440, 460].map((x, i) => (
            <motion.circle key={`rivet-${i}`} animate={drawLoop(7.5 + i * 0.1)} cx={x} cy="810" r="1.5" stroke={S} strokeWidth="0.3" />
          ))}

          {/* === ANNOTATION LINES === */}
          {[
            { x: 400, y: 193, w: 50, d: 3.8 },
            { x: 1020, y: 708, w: 40, d: 4.3 },
            { x: 90, y: 540, w: 30, d: 4 },
            { x: 1270, y: 570, w: 25, d: 3.5 },
            { x: 1145, y: 193, w: 35, d: 6.2 },
            { x: 370, y: 685, w: 40, d: 7 },
            { x: 85, y: 310, w: 45, d: 5.5 },
            { x: 1210, y: 290, w: 30, d: 7.5 },
          ].map((a, i) => (
            <motion.line key={`anno-${i}`} animate={fadeLoop(a.d)} x1={a.x} y1={a.y} x2={a.x + a.w} y2={a.y} stroke={S} strokeWidth="1" />
          ))}

          {/* === LATE DETAIL CALLOUTS === */}
          <motion.circle animate={drawLoop(8)} cx="430" cy="250" r="15" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(8.3)} x1="445" y1="250" x2="490" y2="235" stroke={S} strokeWidth="0.2" />
          <motion.line animate={drawLoop(8.5)} x1="490" y1="235" x2="540" y2="235" stroke={S} strokeWidth="0.2" />

          <motion.circle animate={drawLoop(8.5)} cx="900" cy="700" r="18" stroke={S} strokeWidth="0.3" />
          <motion.line animate={drawLoop(8.8)} x1="918" y1="700" x2="960" y2="720" stroke={S} strokeWidth="0.2" />
          <motion.line animate={drawLoop(9)} x1="960" y1="720" x2="1010" y2="720" stroke={S} strokeWidth="0.2" />

          {/* === CROSS-HATCH === */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <motion.line key={`hatch-${i}`} animate={drawLoop(9 + i * 0.1)} x1={380 + i * 8} y1="740" x2={372 + i * 8} y2="755" stroke={S} strokeWidth="0.25" />
          ))}
        </motion.svg>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="mb-6">
          <span className="inline-flex items-center gap-4 text-base sm:text-lg tracking-[0.35em] uppercase text-gold-400 font-extrabold drop-shadow-lg">
            <span className="w-12 h-[1px] bg-gold-400/80" />
            <span className="text-gold-400/95">{t("hero.tagline")}</span>
            <span className="w-12 h-[1px] bg-gold-400/80" />
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
          {t("hero.title1")} {t("hero.title2")}
          <br />
          <span className="text-gold-500 font-medium italic">{t("hero.title3")}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed">
          {t("hero.subtitle")}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="px-8 py-3.5 border border-white/20 text-white text-sm tracking-[0.2em] uppercase font-light hover:border-white/50 transition-colors duration-300">
            {t("hero.cta2")}
          </a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5">
        <span className="text-base tracking-[0.35em] uppercase text-gold-400 font-semibold">{t("hero.scroll")}</span>
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-[3px] h-20 bg-gradient-to-b from-gold-500 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
