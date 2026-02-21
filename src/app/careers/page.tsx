"use client";

import Navigation from "@/components/Navigation";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main>
      <Navigation />
      {/* Spacer for fixed nav */}
      <div className="h-20" />
      <Careers />
      <Footer />
    </main>
  );
}
