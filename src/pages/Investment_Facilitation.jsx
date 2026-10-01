import React from "react";
import { TrendingUp, Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next"; // <-- 1. i18n Hook import kiya
import HeroImg from "../assets/images/blog/investment.png";
import { Helmet } from "react-helmet-async"; // <-- 1. Helmet import kiya

const InvestmentFacilitation = () => {
  const { t } = useTranslation(); // <-- 2. Hook initialize kiya

  const investmentContent = {
    title: t("inv_fac_title", "Investment Facilitation"),
    subtitle: t(
      "inv_fac_subtitle",
      "End-to-end support for companies establishing operations in México or India—from feasibility through operational launch.",
    ),
    heroImage: "investment-hero.jpg",
    sections: [
      {
        type: t("inv_fac_s1_type", "Indian Companies"),
        badge: t("inv_fac_s1_badge", "ENTERING MÉXICO"),
        icon: "TrendingUp",
        desc: t(
          "inv_fac_s1_desc",
          "MIBC provides structured, institutional support to Indian companies evaluating expansion into México. Our investment facilitation services collapse typical 18-24 month market entry cycles into focused, strategic execution.",
        ),
        points: [
          t("inv_fac_s1_p1", "Market assessment and feasibility analysis"),
          t("inv_fac_s1_p2", "Location evaluation across Mexican states"),
          t("inv_fac_s1_p3", "Incentive mapping and landed-cost modelling"),
          t("inv_fac_s1_p4", "Regulatory navigation and entity structuring"),
          t("inv_fac_s1_p5", "Partner identification and due diligence"),
          t("inv_fac_s1_p6", "Government liaison and approval facilitation"),
          t(
            "inv_fac_s1_p7",
            "Soft-launch support and 12-month operational handholding",
          ),
        ],
      },
      {
        type: t("inv_fac_s2_type", "Mexican Companies"),
        badge: t("inv_fac_s2_badge", "ENTERING INDIA"),
        icon: "Globe",
        desc: t(
          "inv_fac_s2_desc",
          "India offers one of the world's fastest-growing consumer and industrial markets. MIBC supports Mexican firms with structured, on-ground execution to enter and scale in India.",
        ),
        points: [
          t(
            "inv_fac_s2_p1",
            "Market assessment and entry strategy development",
          ),
          t("inv_fac_s2_p2", "Partner and distributor identification"),
          t("inv_fac_s2_p3", "Regulatory navigation and entity structuring"),
          t("inv_fac_s2_p4", "State government liaison and incentive mapping"),
          t("inv_fac_s2_p5", "Soft-launch support and operational handholding"),
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 font-sans transition-colors duration-500">
      <Helmet>
        <title>Investment & Nearshoring Facilitation | MIBC</title>
        <meta
          name="description"
          content="Navigate cross-border investments with MIBC. We help Indian companies nearshore into the USMCA market and Mexican firms enter India's $30T economy."
        />
        <meta
          name="keywords"
          content="USMCA nearshoring, India investment in Mexico, set up manufacturing in Mexico, FDI India Mexico"
        />
      </Helmet>
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-[#A98842] mb-4 transition-colors">
            {investmentContent.title}
          </h1>
          <p className="max-w-3xl mx-auto text-gray-900 dark:text-gray-200 font-bold text-sm md:text-base leading-relaxed uppercase tracking-tighter transition-colors">
            {investmentContent.subtitle}
          </p>
        </div>
      </section>

      {/* --- HERO IMAGE SECTION --- */}
      <section className="container mx-auto px-4 mb-20">
        <div className="rounded-[30px] overflow-hidden shadow-2xl dark:shadow-black/50 border-4 border-white dark:border-slate-800 transition-colors">
          <img
            src={HeroImg}
            alt={t("inv_fac_img_alt", "Business Meeting")}
            className="w-full h-auto md:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* --- CARDS SECTION --- */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Loop through the two sections (Indian & Mexican Companies) */}
            {investmentContent.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] dark:shadow-none border border-transparent dark:border-slate-800 flex flex-col transition-colors duration-500"
              >
                {/* Header of Card */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-[#A98842] text-white rounded-xl flex items-center justify-center shadow-lg dark:shadow-none">
                    {section.icon === "TrendingUp" ? (
                      <TrendingUp size={24} />
                    ) : (
                      <Globe size={24} />
                    )}
                  </div>
                  <span
                    className={`px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest transition-colors ${
                      idx === 0
                        ? "bg-[#FFF9E6] dark:bg-[#A98842]/20 text-[#A98842] dark:text-[#A98842]"
                        : "bg-[#1a1a1a] dark:bg-slate-800 text-white dark:text-gray-200"
                    }`}
                  >
                    {section.badge}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 transition-colors">
                  {t("inv_fac_for", "For")} {section.type}
                </h2>

                {/* Fixed Alignment */}
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-[15px] leading-relaxed mb-10 font-medium min-h-[80px] transition-colors">
                  {section.desc}
                </p>

                {/* Checklist Points */}
                <div className="space-y-3 flex-1">
                  {section.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-[#faf9f6]/50 dark:bg-slate-800/50 p-4 rounded-2xl border border-gray-50 dark:border-slate-800 group hover:bg-white dark:hover:bg-slate-800 hover:shadow-md dark:hover:shadow-lg transition-all duration-300"
                    >
                      <div className="shrink-0 text-[#A98842]">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-[13px] md:text-sm font-bold tracking-tight transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestmentFacilitation;
