"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ImageBreak from "@/components/ImageBreak";
import About from "@/components/About";
import Excellence from "@/components/Excellence";
import Technology from "@/components/Technology";
import GlobalPresence from "@/components/GlobalPresence";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <Navigation />
      <Hero />

      <About />

      <ImageBreak
        imageUrl="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=80"
        alt={t("break.partner.alt")}
        overlayText={t("break.partner")}
        overlaySubtext={t("break.partner.sub")}
        height="h-[65vh]"
      />

      <Services />

      <ImageBreak
        imageUrl="https://images.unsplash.com/photo-1540339832862-474599807836?w=1920&q=80"
        alt={t("break.precision.alt")}
        overlayText={t("break.precision")}
        overlaySubtext={t("break.precision.sub")}
        height="h-[55vh]"
        hideAnnotation
      />

      <Excellence />
      <Technology />
      <GlobalPresence />
      <Contact />
      <Footer />
    </main>
  );
}
