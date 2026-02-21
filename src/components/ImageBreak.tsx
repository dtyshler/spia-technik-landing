"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ImageBreakProps {
  imageUrl: string;
  alt: string;
  overlayText?: string;
  overlaySubtext?: string;
  height?: string;
  hideAnnotation?: boolean;
}

export default function ImageBreak({
  imageUrl,
  alt,
  overlayText,
  overlaySubtext,
  height = "h-[80vh]",
  hideAnnotation = false,
}: ImageBreakProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.0, 1.1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.8], [40, -40]);

  return (
    <section ref={ref} className={`relative ${height} overflow-hidden flex items-center`}>
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale: imgScale }} className="absolute inset-[-10%] z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </motion.div>

      {/* Grid Overlay for texture */}
      <div
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {overlayText && (
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-1 bg-gold-500 mb-8"
            />

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[0.95]">
              {overlayText.split("\n").length > 1 ? (
                overlayText.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    <span className="bg-gold-500/80 text-white px-3 py-1 inline-block leading-[1.4] shadow-lg">
                      {line}
                    </span>
                  </span>
                ))
              ) : (
                <span className="bg-gold-500/80 text-white px-3 py-1 inline leading-[1.6] shadow-lg box-decoration-clone">
                  {overlayText}
                </span>
              )}
            </h3>

            {overlaySubtext && (
              <p className="mt-6 text-lg md:text-xl tracking-[0.15em] uppercase text-slate-200 font-light drop-shadow-lg">
                {overlaySubtext}
              </p>
            )}
          </motion.div>
        )}
      </div>

      {!hideAnnotation && (
        <div className="absolute bottom-8 right-8 z-20">
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-mono border-l border-white/20 pl-3">
            {alt}
          </div>
        </div>
      )}
    </section>
  );
}
