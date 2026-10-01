import React from "react";
import { Users, Check } from "lucide-react";
import { useTranslation } from "react-i18next"; // <-- 1. i18n Hook import kiya
import DelegationHero from "../assets/images/blog/Delegation.png";
import { Helmet } from "react-helmet-async";

const DelegationFacilitation = () => {
  const { t } = useTranslation(); // <-- 2. Hook initialize kiya

  const delegationContent = {
    title: t("del_fac_title", "Delegation Facilitation"),
    subtitle: t(
      "del_fac_subtitle",
      "End-to-end program development for government and business delegations—both directions.",
    ),
    services: {
      badge: t("del_fac_badge", "HIGH-LEVEL MISSIONS"),
      title: t("del_fac_serv_title", "Delegation Facilitation Services"),
      desc: t(
        "del_fac_serv_desc",
        "MIBC provides end-to-end planning and execution for high-level government and business delegations traveling between México and India. From agenda curation to VIP protocol, our team ensures every mission delivers measurable outcomes.",
      ),
      items: [
        t("del_fac_item_1", "Mission program development and agenda design"),
        t(
          "del_fac_item_2",
          "High-level meeting coordination with ministries, agencies, and industry bodies",
        ),
        t(
          "del_fac_item_3",
          "Site visits, factory tours, and investment zone briefings",
        ),
        t("del_fac_item_4", "B2B and B2G matchmaking sessions"),
        t("del_fac_item_5", "Protocol management and VIP logistics"),
        t("del_fac_item_6", "Post-mission follow-up and lead tracking"),
      ],
    },
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 font-sans pb-24 transition-colors duration-500">
      <Helmet>
        <title>Delegation Facilitation | Business Missions - MIBC</title>
        <meta
          name="description"
          content="MIBC organizes structured bilateral delegations, connecting government institutions and corporate leaders across the México-India economic corridor."
        />
        <meta
          name="keywords"
          content="India Mexico business delegation, trade missions, government delegations, institutional representation"
        />
      </Helmet>

      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-[#A98842] mb-4 uppercase tracking-tight transition-colors">
            {delegationContent.title}
          </h1>
          <p className="max-w-3xl mx-auto text-gray-900 dark:text-gray-300 font-bold text-[10px] md:text-xs leading-relaxed uppercase tracking-widest opacity-80 transition-colors">
            {delegationContent.subtitle}
          </p>
        </div>
      </section>

      {/* --- HERO IMAGE --- */}
      <section className="container mx-auto px-4 mb-20">
        <div className="rounded-[30px] overflow-hidden shadow-2xl dark:shadow-black/50 border-4 border-white dark:border-slate-800 max-w-7xl mx-auto transition-colors">
          <img
            src={DelegationHero}
            alt="Business Delegation"
            className="w-full h-auto md:h-[600px] object-cover"
          />
        </div>
      </section>

      {/* --- SERVICES SECTION (WHITE CARD) --- */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.03)] dark:shadow-none border border-gray-50 dark:border-slate-800 relative transition-colors duration-500">
          {/* Top Info Area */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
            <div className="flex flex-col gap-6 max-w-3xl">
              <div className="w-14 h-14 bg-[#A98842] text-white rounded-2xl flex items-center justify-center shadow-lg dark:shadow-none transition-colors">
                <Users size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight transition-colors">
                {delegationContent.services.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-[15px] md:text-lg leading-relaxed font-medium transition-colors">
                {delegationContent.services.desc}
              </p>
            </div>

            {/* Top Right Badge */}
            <span className="bg-[#FFF9E6] dark:bg-[#A98842]/20 text-[#A98842] px-5 py-2 rounded-full text-[9px] font-black tracking-[0.2em] whitespace-nowrap shadow-sm border border-[#A98842]/10 transition-colors">
              {delegationContent.services.badge}
            </span>
          </div>

          {/* Grid for Service Items - 3 Columns like Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {delegationContent.services.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#faf9f6]/70 dark:bg-slate-800/50 p-7 rounded-[24px] border border-gray-100 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl dark:hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group"
              >
                <div className="shrink-0 text-[#A98842] mt-1 group-hover:scale-110 transition-transform">
                  <Check size={18} strokeWidth={3} />
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-sm md:text-[15px] font-bold tracking-tight leading-snug transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DelegationFacilitation;
