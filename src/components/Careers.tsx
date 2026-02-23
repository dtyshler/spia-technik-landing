"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useTranslation } from "@/i18n/LanguageContext";

const jobs = [
  {
    title: "Mechanical Engineer",
    location: "Tbilisi, Georgia / Remote",
    typeKey: "careers.fullTime",
    summary:
      "Design and document aircraft interior components including galleys, monuments, stowage, and cabin panels using industry-standard CAD tools. You will work directly on Tier-1 supplier programs for major OEMs.",
    responsibilities: [
      "Develop detailed 3D models and 2D production drawings for aircraft interior components (galleys, monuments, lavatories, stowage bins, cabin panels)",
      "Generate engineering documentation including MEIs, BOMs, and installation drawings per customer specifications",
      "Coordinate with stress, certification, and manufacturing teams to ensure design feasibility",
      "Perform tolerance stack-up analysis and GD&T application on production drawings",
      "Support design reviews and interface with Tier-1 supplier program managers",
      "Ensure compliance with OEM design standards (Boeing D6-54551, Airbus AIMS, etc.)",
    ],
    requirements: [
      "Bachelor's degree in Mechanical Engineering or Aerospace Engineering",
      "3+ years of experience in aircraft interior design or modification programs",
      "Proficiency in CATIA V5/V6 or Siemens NX",
      "Knowledge of aerospace materials (aluminum, composites, honeycomb panels)",
      "Familiarity with FAR/CS 25 structural and flammability requirements",
      "Strong attention to detail and ability to manage multiple deliverables",
    ],
    preferred: [
      "Direct experience with Boeing 737/787 or Airbus A320/A350 interior programs",
      "Experience working with Tier-1 suppliers (Safran, Collins, FACC, etc.)",
      "SolidWorks or AutoCAD proficiency as a secondary tool",
      "Exposure to ENOVIA or Teamcenter PLM systems",
    ],
  },
  {
    title: "Aerospace / Aero-Astro Engineer",
    location: "Tbilisi, Georgia / Remote",
    typeKey: "careers.fullTime",
    summary:
      "Perform structural analysis, FEA, and load reports for aircraft interior systems. You will support multiple concurrent modification programs and work alongside mechanical designers and project engineers.",
    responsibilities: [
      "Conduct finite element analysis (FEA) for aircraft interior structures under static, dynamic, and crash load cases",
      "Develop interface load reports for galley, monument, and partition installations",
      "Perform hand calculations for metallic and composite structural elements per FAR/CS 25",
      "Generate structural substantiation reports for STC and modification packages",
      "Review and validate 3D models from a structural integrity perspective",
      "Support airworthiness documentation and interface with DER/CVE teams",
    ],
    requirements: [
      "Bachelor's or Master's degree in Aerospace Engineering, Mechanical Engineering, or related field",
      "3+ years of experience in aerospace structural analysis",
      "Proficiency in FEMAP, Nastran, ABAQUS, or equivalent FEA software",
      "Strong understanding of metallic and composite stress analysis methods",
      "Experience generating load reports per FAR 25.561 / 25.562 requirements",
      "Knowledge of fatigue, damage tolerance, and durability analysis principles",
    ],
    preferred: [
      "Experience with aircraft interior modification programs (STCs, EOs)",
      "Background in dynamic crash analysis (16g / 9g load cases)",
      "Familiarity with Boeing and Airbus structural repair manuals and design standards",
      "PE or EIT certification",
    ],
  },
  {
    title: "Stress Engineer",
    location: "Tbilisi, Georgia / Remote",
    typeKey: "careers.fullTime",
    summary:
      "Prepare interface load reports, structural substantiation, and tolerance analysis for interior modifications. You will be responsible for ensuring all structural deliverables meet OEM and regulatory requirements.",
    responsibilities: [
      "Develop stress analysis reports for aircraft interior modifications and installations",
      "Calculate interface loads, fitting analyses, and fastener margins of safety",
      "Perform classical hand analysis for beams, plates, lugs, and joints",
      "Generate structural substantiation documents for certification packages",
      "Conduct tolerance analysis and stack-up studies for installation interfaces",
      "Collaborate with design engineers to optimize structural configurations for weight and cost",
    ],
    requirements: [
      "Bachelor's degree in Aerospace, Mechanical, or Structural Engineering",
      "2+ years of experience in aerospace stress analysis",
      "Strong knowledge of Bruhn, Niu, and Peery classical methods",
      "Experience with Microsoft Excel-based analysis tools and structured report writing",
      "Familiarity with FAR 25 structural requirements for interiors",
      "Ability to work under tight deadlines across multiple programs simultaneously",
    ],
    preferred: [
      "Experience with metallic and composite (honeycomb sandwich, laminate) structures",
      "FEA experience with FEMAP/Nastran or HyperMesh",
      "Background in certification support for STCs or major modifications",
      "Knowledge of fatigue and damage tolerance methods",
    ],
  },
  {
    title: "CAD Designer",
    location: "Tbilisi, Georgia / Remote",
    typeKey: "careers.fullTime",
    summary:
      "Create production-ready 3D models and 2D drawing packages for aircraft interior programs. You will translate engineering concepts into precise, manufacturing-ready documentation.",
    responsibilities: [
      "Develop detailed 3D parametric models of aircraft interior components in CATIA V5/V6 or Siemens NX",
      "Create fully dimensioned 2D production drawings with GD&T per ASME Y14.5",
      "Prepare assembly models, exploded views, and installation drawings",
      "Maintain CAD data integrity within PLM systems (ENOVIA, Teamcenter)",
      "Support design iterations based on stress analysis and manufacturing feedback",
      "Generate BOMs and parts lists per customer formatting requirements",
    ],
    requirements: [
      "Associate's or Bachelor's degree in Mechanical Design, Engineering Technology, or equivalent",
      "3+ years of CAD experience in aerospace or aviation industry",
      "Expert-level proficiency in CATIA V5 (Part Design, Assembly, Drafting modules)",
      "Strong understanding of GD&T (ASME Y14.5) and engineering drawing standards",
      "Experience with sheet metal, machined parts, and composite panel modeling",
      "Detail-oriented with strong organizational skills",
    ],
    preferred: [
      "Siemens NX, SolidWorks, or AutoCAD as secondary tools",
      "Experience with aircraft interior galleys, lavatories, and monuments",
      "Knowledge of standard aerospace fasteners and hardware",
      "Experience with surfacing and complex loft geometry",
    ],
  },
  {
    title: "Project Engineer",
    location: "Seattle, WA / Remote",
    typeKey: "careers.fullTime",
    summary:
      "Coordinate engineering deliverables across multiple interior modification programs. You will serve as the primary technical interface between SPIA Technik and Tier-1 supplier program teams.",
    responsibilities: [
      "Manage engineering deliverable schedules for concurrent aircraft interior programs",
      "Coordinate between design, stress, and CAD teams to ensure on-time delivery of drawing packages",
      "Serve as the primary engineering point of contact with Tier-1 supplier clients",
      "Track and report program status, risks, and resource allocation",
      "Conduct and lead design reviews (PDR, CDR) with internal and external stakeholders",
      "Ensure all deliverables meet customer specification and quality requirements",
      "Support proposal development and effort estimation for new program pursuits",
    ],
    requirements: [
      "Bachelor's degree in Engineering (Mechanical, Aerospace, or Industrial preferred)",
      "4+ years of experience in aerospace program or project engineering",
      "Strong understanding of aircraft interior engineering workflows and deliverables",
      "Excellent communication and stakeholder management skills",
      "Experience with project management tools (MS Project, Jira, or equivalent)",
      "Ability to manage multiple programs and priorities simultaneously",
    ],
    preferred: [
      "Experience working with Tier-1 interior suppliers (Safran, Collins, FACC, Jamco)",
      "Background in Boeing or Airbus interior modification programs",
      "PMP certification or equivalent project management training",
      "Knowledge of AS9100 quality management systems",
    ],
  },
];

export default function Careers() {
  const { t } = useTranslation();
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    university: "",
    degree: "",
    fieldOfStudy: "",
    yearsExperience: "",
    currentTitle: "",
    currentCompany: "",
    position: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleApply = (jobTitle: string) => {
    setSelectedPosition(jobTitle);
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    setShowForm(true);
    setTimeout(() => {
      document
        .getElementById("careers-form")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Career Application: ${formData.position}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        formData.linkedin ? `LinkedIn/Portfolio: ${formData.linkedin}` : "",
        ``,
        `--- Education ---`,
        `University: ${formData.university}`,
        `Degree: ${formData.degree}`,
        `Field of Study: ${formData.fieldOfStudy}`,
        ``,
        `--- Experience ---`,
        `Years of Experience: ${formData.yearsExperience}`,
        formData.currentTitle ? `Current Title: ${formData.currentTitle}` : "",
        formData.currentCompany
          ? `Current Company: ${formData.currentCompany}`
          : "",
        ``,
        `Position: ${formData.position}`,
        ``,
        `--- Cover Letter ---`,
        formData.message,
        ``,
        `[Please attach your resume/CV to this email]`,
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.location.href = `mailto:careers@spiatechnik.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="careers" className="relative py-20 lg:py-28 bg-light-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold-500 font-bold">
              {t("careers.label")}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-text-primary leading-[1.15]">
              {t("careers.title1")}
              <br />
              <span className="text-text-muted">{t("careers.title2")}</span>
            </h2>
            <p className="mt-4 text-[15px] text-text-secondary font-light leading-relaxed">
              {t("careers.desc")}
            </p>
          </div>
        </AnimatedSection>

        {/* Job listings */}
        <div className="space-y-px bg-light-300">
          {jobs.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.06}>
              <div className="bg-white">
                <button
                  onClick={() =>
                    setExpandedJob(
                      expandedJob === job.title ? null : job.title
                    )
                  }
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-light-100 transition-colors duration-300 group"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-normal text-text-primary group-hover:text-gold-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-4">
                      <span className="text-[12px] text-text-muted">
                        {job.location}
                      </span>
                      <span className="text-[10px] tracking-[0.15em] uppercase text-gold-600 bg-gold-500/[0.06] px-2 py-0.5 border border-gold-500/15">
                        {t(job.typeKey)}
                      </span>
                    </div>
                  </div>
                  <svg
                    viewBox="0 0 20 20"
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 ${expandedJob === job.title ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 8 L10 13 L15 8" />
                  </svg>
                </button>

                <AnimatePresence>
                  {expandedJob === job.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-8 lg:pb-10 border-t border-light-200">
                        {/* Summary */}
                        <p className="mt-6 text-[15px] text-text-secondary font-light leading-relaxed max-w-3xl">
                          {job.summary}
                        </p>

                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Responsibilities */}
                          <div>
                            <h4 className="text-[10px] tracking-[0.25em] uppercase text-gold-600 font-bold mb-4">
                              {t("careers.responsibilities")}
                            </h4>
                            <ul className="space-y-2.5">
                              {job.responsibilities.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2.5 text-[13px] text-text-secondary font-light leading-relaxed"
                                >
                                  <span className="w-1 h-1 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div>
                            <h4 className="text-[10px] tracking-[0.25em] uppercase text-gold-600 font-bold mb-4">
                              {t("careers.requirements")}
                            </h4>
                            <ul className="space-y-2.5">
                              {job.requirements.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2.5 text-[13px] text-text-secondary font-light leading-relaxed"
                                >
                                  <span className="w-1 h-1 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Preferred */}
                          <div>
                            <h4 className="text-[10px] tracking-[0.25em] uppercase text-gold-600 font-bold mb-4">
                              {t("careers.preferred")}
                            </h4>
                            <ul className="space-y-2.5">
                              {job.preferred.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2.5 text-[13px] text-text-secondary font-light leading-relaxed"
                                >
                                  <span className="w-1 h-1 rounded-full bg-text-muted mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-light-200 flex flex-wrap items-center gap-4">
                          <button
                            onClick={() => handleApply(job.title)}
                            className="px-8 py-3 bg-dark-950 text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-dark-800 transition-colors duration-300"
                          >
                            {t("careers.apply")}
                          </button>
                          <span className="text-[12px] text-text-muted">
                            {t("careers.orEmail")}{" "}
                            <a
                              href={`mailto:careers@spiatechnik.com?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                              className="text-gold-600 hover:text-gold-500 underline underline-offset-4 transition-colors"
                            >
                              careers@spiatechnik.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Application form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              id="careers-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-12 bg-white p-8 lg:p-12 border border-light-300"
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="text-[11px] tracking-[0.4em] uppercase text-gold-500 font-bold">
                    {t("careers.applyLabel")}
                  </span>
                  <h3 className="mt-2 text-2xl font-extralight text-text-primary">
                    {t("careers.applicationFor")}{" "}
                    <span className="text-gold-600">{selectedPosition}</span>
                  </h3>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 5 L15 15 M15 5 L5 15" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h4 className="text-[10px] tracking-[0.25em] uppercase text-text-muted font-bold mb-5">
                    {t("careers.personalInfo")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="career-name"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.fullName")} *
                      </label>
                      <input
                        type="text"
                        id="career-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder={t("careers.placeholderName")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="career-email"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.emailLabel")} *
                      </label>
                      <input
                        type="email"
                        id="career-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder={t("careers.placeholderEmail")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="career-phone"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.phoneLabel")}
                      </label>
                      <input
                        type="tel"
                        id="career-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder={t("careers.placeholderPhone")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="career-linkedin"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.linkedin")}
                      </label>
                      <input
                        type="url"
                        id="career-linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder={t("careers.placeholderLinkedin")}
                      />
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-[10px] tracking-[0.25em] uppercase text-text-muted font-bold mb-5">
                    {t("careers.educationSection")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label
                        htmlFor="career-university"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.university")} *
                      </label>
                      <input
                        type="text"
                        id="career-university"
                        name="university"
                        required
                        value={formData.university}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder={t("careers.placeholderUniversity")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="career-degree"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.degreeLabel")} *
                      </label>
                      <select
                        id="career-degree"
                        name="degree"
                        required
                        value={formData.degree}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light focus:border-gold-500 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">{t("careers.selectDegree")}</option>
                        <option value="Associate's">{t("careers.degreeAssociate")}</option>
                        <option value="Bachelor's">{t("careers.degreeBachelor")}</option>
                        <option value="Master's">{t("careers.degreeMaster")}</option>
                        <option value="PhD">{t("careers.degreePhd")}</option>
                        <option value="Other">{t("careers.degreeOther")}</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="career-field"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.fieldOfStudy")} *
                      </label>
                      <input
                        type="text"
                        id="career-field"
                        name="fieldOfStudy"
                        required
                        value={formData.fieldOfStudy}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder={t("careers.placeholderField")}
                      />
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-[10px] tracking-[0.25em] uppercase text-text-muted font-bold mb-5">
                    {t("careers.experienceSection")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label
                        htmlFor="career-years"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.yearsExp")} *
                      </label>
                      <select
                        id="career-years"
                        name="yearsExperience"
                        required
                        value={formData.yearsExperience}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light focus:border-gold-500 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">{t("careers.selectRange")}</option>
                        <option value="0-1">{t("careers.years01")}</option>
                        <option value="2-3">{t("careers.years23")}</option>
                        <option value="4-6">{t("careers.years46")}</option>
                        <option value="7-10">{t("careers.years710")}</option>
                        <option value="10+">{t("careers.years10")}</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="career-title"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.currentTitle")}
                      </label>
                      <input
                        type="text"
                        id="career-title"
                        name="currentTitle"
                        value={formData.currentTitle}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder={t("careers.placeholderTitle")}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="career-company"
                        className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                      >
                        {t("careers.currentCompany")}
                      </label>
                      <input
                        type="text"
                        id="career-company"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder={t("careers.placeholderCompany")}
                      />
                    </div>
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label
                    htmlFor="career-position"
                    className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                  >
                    {t("careers.positionLabel")}
                  </label>
                  <input
                    type="text"
                    id="career-position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder={t("careers.placeholderPosition")}
                  />
                </div>

                {/* Cover Letter */}
                <div>
                  <label
                    htmlFor="career-message"
                    className="block text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2"
                  >
                    {t("careers.coverLetter")}
                  </label>
                  <textarea
                    id="career-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-light-300 pb-2.5 text-[15px] text-text-primary font-light placeholder-text-muted/40 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                    placeholder={t("careers.placeholderCover")}
                  />
                </div>

                {/* Resume note */}
                <div className="bg-light-100 px-5 py-4 border-l-2 border-gold-500">
                  <p className="text-[13px] text-text-secondary font-light leading-relaxed">
                    <strong className="text-text-primary font-medium">
                      {t("careers.resumeLabel")}
                    </strong>{" "}
                    {t("careers.resumeDesc")}
                  </p>
                </div>

                <button
                  type="submit"
                  className="px-10 py-3.5 bg-dark-950 text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-dark-800 transition-colors duration-300"
                >
                  {t("careers.submit")}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* General interest */}
        {!showForm && (
          <AnimatedSection delay={0.2}>
            <div className="mt-10 text-center">
              <p className="text-[15px] text-text-muted font-light">
                {t("careers.noRole")}{" "}
                <button
                  onClick={() => {
                    setSelectedPosition(t("careers.generalApplication"));
                    setFormData((prev) => ({
                      ...prev,
                      position: t("careers.generalApplication"),
                    }));
                    setShowForm(true);
                  }}
                  className="text-gold-600 hover:text-gold-500 underline underline-offset-4 transition-colors"
                >
                  {t("careers.sendResume")}
                </button>
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
