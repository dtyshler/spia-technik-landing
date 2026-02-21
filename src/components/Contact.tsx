"use client";

import { useState } from "react";
import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}${formData.company ? ` — ${formData.company}` : ""}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:info@spiatechnik.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection>
            <div>
              <span className="text-[11px] tracking-[0.4em] uppercase text-gold-500 font-bold">{t("contact.label")}</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-text-primary leading-[1.15]">
                {t("contact.title1")}<br /><span className="text-text-muted">{t("contact.title2")}</span>
              </h2>
              <p className="mt-4 text-[15px] text-text-secondary font-light leading-relaxed max-w-md">{t("contact.desc")}</p>
              <div className="mt-8 space-y-4">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500/70 mb-1">{t("contact.email")}</div>
                  <a href="mailto:info@spiatechnik.com" className="text-[15px] text-text-primary font-light hover:text-gold-500 transition-colors">info@spiatechnik.com</a>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500/70 mb-1">{t("contact.hq")}</div>
                  <p className="text-[15px] text-text-primary font-light">Seattle, WA, United States</p>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500/70 mb-1">{t("contact.phone")}</div>
                  <a href="tel:+12067995955" className="text-[15px] text-text-primary font-light hover:text-gold-500 transition-colors">+1-206-799-5955</a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">{t("contact.name")} *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors" placeholder={t("contact.namePh")} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">{t("contact.email")} *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors" placeholder={t("contact.emailPh")} />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">{t("contact.company")}</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors" placeholder={t("contact.companyPh")} />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">{t("contact.message")} *</label>
                <textarea id="message" name="message" required rows={3} value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors resize-none" placeholder={t("contact.messagePh")} />
              </div>
              <button type="submit" className="mt-2 px-8 py-3.5 bg-dark-950 text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-dark-800 transition-colors duration-300">
                {t("contact.send")}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
