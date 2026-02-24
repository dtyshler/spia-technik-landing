"use client";

import AnimatedSection from "./AnimatedSection";
import { useTranslation } from "@/i18n/LanguageContext";

const locationKeys = [
  { cityKey: "global.loc1.city", countryKey: "global.loc1.country", phone: "",
    roleKey: "global.hq",
    flagSvg: (
      <svg viewBox="0 0 60 40" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 13 }).map((_, i) => (
          <rect key={i} x="0" y={i * 3.08} width="60" height="3.08"
            fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
        ))}
        <rect x="0" y="0" width="24" height="21.5" fill="#3C3B6E" />
        {[2,6,10,14,18,22].flatMap((x) => [3,7,11,15,19].map((yy) => [x, yy]))
          .concat([4,8,12,16,20].flatMap((x) => [5,9,13,17].map((yy) => [x, yy])))
          .map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="0.7" fill="#FFFFFF" />
          ))}
      </svg>
    ),
  },
  { cityKey: "global.loc3.city", countryKey: "global.loc3.country", roleKey: "global.division", phone: "",
    flagSvg: (
      <svg viewBox="0 0 60 40" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect x="0" y="0" width="60" height="20" fill="#005BBB" />
        <rect x="0" y="20" width="60" height="20" fill="#FFD500" />
      </svg>
    ),
  },
  { cityKey: "global.loc2.city", countryKey: "global.loc2.country", roleKey: "global.division", phone: "",
    flagSvg: (
      <svg viewBox="0 0 60 40" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect x="0" y="0" width="60" height="40" fill="#FFFFFF" />
        <rect x="25.5" y="0" width="9" height="40" fill="#FF0000" />
        <rect x="0" y="15.5" width="60" height="9" fill="#FF0000" />
        {[[12,8],[48,8],[12,32],[48,32]].map(([cx,cy], i) => (
          <g key={i}>
            <rect x={cx-3} y={cy-1} width={6} height={2} fill="#FF0000" />
            <rect x={cx-1} y={cy-3} width={2} height={6} fill="#FF0000" />
          </g>
        ))}
      </svg>
    ),
  },
  { cityKey: "global.loc4.city", countryKey: "global.loc4.country", roleKey: "global.division", phone: "",
    flagSvg: (
      <svg viewBox="0 0 60 40" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect x="0" y="0" width="60" height="40" fill="#FFFFFF" />
        <circle cx="30" cy="20" r="10" fill="#BC002D" />
      </svg>
    ),
  },
];

export default function GlobalPresence() {
  const { t } = useTranslation();

  return (
    <section id="global" className="relative py-24 lg:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold-500 font-bold">{t("global.label")}</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white leading-[1.15]">
              {t("global.title1")}<br /><span className="text-slate-400">{t("global.title2")}</span>
            </h2>
            <p className="mt-4 text-[15px] text-slate-400 font-light leading-relaxed max-w-xl mx-auto">{t("global.desc")}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08]">
          {locationKeys.map((loc, i) => (
            <AnimatedSection key={loc.cityKey} delay={i * 0.12}>
              <div className="relative group hover:brightness-110 transition-all duration-700 overflow-hidden min-h-[240px] sm:min-h-[300px] flex flex-col">
                {/* Flag - full vibrant color */}
                <div className="absolute inset-0">{loc.flagSvg}</div>

                {/* Gradient: transparent at top → solid black at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-10% via-black/55 via-45% to-black/90 to-75%" />

                {/* Top spacer - flag shows in full color here */}
                <div className="flex-1 relative z-10 min-h-[60px]" />

                {/* Bottom content area - on solid dark gradient */}
                <div className="relative z-10 px-8 lg:px-10 pb-0 lg:pb-1 pt-0 mt-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="relative w-2 h-2">
                      <div className="absolute inset-0 rounded-full bg-gold-500/40 animate-ping" />
                      <div className="w-2 h-2 rounded-full bg-gold-500" />
                    </div>
                    <span className="text-[11px] tracking-[0.25em] uppercase text-gold-400 font-medium">
                      {t(loc.roleKey)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light text-white tracking-wide leading-none">{t(loc.cityKey)}</h3>
                  <p className="mt-1 text-sm text-slate-200 font-light leading-none">{t(loc.countryKey)}</p>
                  <div className="mt-1 pt-1 border-t border-white/[0.12]">
                    {loc.phone ? (
                      <a href={`tel:${loc.phone.replace(/[^+\d]/g, "")}`} className="text-sm text-slate-200 font-mono tracking-wider hover:text-gold-400 transition-colors">
                        {loc.phone}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-200/40 font-light">&nbsp;</span>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
