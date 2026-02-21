"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const clients = [
  {
    name: "Airbus",
    svg: (
      <svg viewBox="0 0 200 50" className="h-8 md:h-9 w-auto">
        {/* Airbus arc */}
        <path
          d="M 30 10 Q 60 -5 90 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Airbus text */}
        <text x="10" y="38" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="4">
          AIRBUS
        </text>
      </svg>
    ),
  },
  {
    name: "Boeing",
    svg: (
      <svg viewBox="0 0 180 55" className="h-8 md:h-9 w-auto">
        {/* Boeing wordmark */}
        <text x="5" y="38" fontFamily="'Times New Roman', serif" fontSize="28" fontWeight="700" fontStyle="italic" fill="currentColor" letterSpacing="1">
          BOEING
        </text>
        {/* Characteristic underline swoosh */}
        <path
          d="M 5 44 Q 90 50 175 42"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "British Airways",
    svg: (
      <svg viewBox="0 0 200 55" className="h-9 md:h-10 w-auto">
        {/* BA Speedmarque ribbon shape */}
        <path
          d="M 5 30 C 15 10, 30 5, 45 15 C 55 22, 55 28, 50 35 L 5 35 Z"
          fill="currentColor"
          opacity="0.8"
        />
        <path
          d="M 45 15 C 55 5, 70 3, 80 12 C 85 17, 82 25, 75 30 L 50 35 C 55 28, 55 22, 45 15"
          fill="currentColor"
          opacity="0.6"
        />
        {/* Text */}
        <text x="8" y="52" fontFamily="'Georgia', serif" fontSize="10" fill="currentColor" letterSpacing="4" fontWeight="400">
          BRITISH AIRWAYS
        </text>
      </svg>
    ),
  },
  {
    name: "Japan Airlines",
    svg: (
      <svg viewBox="0 0 140 55" className="h-9 md:h-10 w-auto">
        {/* JAL Tsurumaru crane circle */}
        <circle cx="27" cy="24" r="22" fill="currentColor" opacity="0.15" />
        <circle cx="27" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
        {/* Stylized crane inside */}
        <path
          d="M 18 32 L 27 12 L 36 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 20 28 L 34 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* JAL text */}
        <text x="58" y="32" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="24" fontWeight="700" fill="currentColor" letterSpacing="3">
          JAL
        </text>
      </svg>
    ),
  },
  {
    name: "Singapore Airlines",
    svg: (
      <svg viewBox="0 0 250 55" className="h-8 md:h-9 w-auto">
        {/* Kris bird silhouette */}
        <path
          d="M 10 35 C 12 20, 25 8, 35 12 C 40 14, 38 20, 42 18 C 46 16, 50 10, 48 25 C 46 32, 38 38, 30 38 C 22 38, 12 40, 10 35 Z"
          fill="currentColor"
          opacity="0.7"
        />
        {/* Text */}
        <text x="58" y="30" fontFamily="'Didot', 'Georgia', serif" fontSize="11" fill="currentColor" letterSpacing="4" fontWeight="400">
          SINGAPORE AIRLINES
        </text>
        <line x1="58" y1="36" x2="245" y2="36" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
];

export default function ClientLogos() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Spacer instead of label */}
        <div className="mb-6" />

        {/* Infinite scroll logo row */}
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-x-14 md:gap-x-20 lg:gap-x-24 flex-wrap gap-y-8">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.08 }}
                className="text-slate-400/40 hover:text-slate-200/70 transition-all duration-500 cursor-default"
              >
                {client.svg}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
    </section>
  );
}
