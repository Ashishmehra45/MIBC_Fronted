import React from "react";
import { Package, Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next"; // <-- 1. i18n Hook import kiya
import TradeHeroImg from "../assets/images/blog/trade.png";
import { Helmet } from "react-helmet-async";

const TradePromotion = () => {
  const { t } = useTranslation(); // <-- 2. Hook initialize kiya

  const tradeContent = {
    title: t("trade_pro_title", "Trade Promotion"),
    subtitle: t(
      "trade_pro_subtitle",
      "Connecting exporters with buyers, navigating regulations, and coordinating missions that deliver results.",
    ),
    sections: [
      {
        type: t("trade_pro_s1_type", "Mexican Exports to India"),
        badge: t("trade_pro_s1_badge", "EXPORTS TO INDIA"),
        icon: "Package",
        desc: t(
          "trade_pro_s1_desc",
          "MIBC supports Mexican exporters with tailored intelligence, matchmaking, and on-ground execution to unlock opportunities in India's high-growth markets.",
        ),
        points: [
          t("trade_pro_s1_p1", "Buyer identification and market intelligence"),
          t(
            "trade_pro_s1_p2",
            "Trade mission coordination and B2B matchmaking",
          ),
          t("trade_pro_s1_p3", "Participation support for Indian exhibitions"),
          t("trade_pro_s1_p4", "Regulatory and certification guidance"),
          t("trade_pro_s1_p5", "Distributor and channel partner mapping"),
        ],
      },
      {
        type: t("trade_pro_s2_type", "Indian Exports to México"),
        badge: t("trade_pro_s2_badge", "EXPORTS TO MÉXICO"),
        icon: "Globe",
        desc: t(
          "trade_pro_s2_desc",
          "MIBC enables Indian exporters to navigate Mexican market requirements and build trusted importer relationships.",
        ),
        points: [
          t("trade_pro_s2_p1", "Market access advisory and tariff analysis"),
          t("trade_pro_s2_p2", "Importer identification and introductions"),
          t("trade_pro_s2_p3", "Compliance and documentation support"),
          t("trade_pro_s2_p4", "Logistics and customs navigation"),
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 font-sans transition-colors duration-500">
      <Helmet>
        <title>Bilateral Trade Promotion | Import & Export - MIBC</title>
        <meta
          name="description"
          content="Unlock massive consumer markets. MIBC drives trade promotion for Mexican exporters entering India and Indian businesses expanding to North America."
        />
        <meta
          name="keywords"
          content="Mexico export to India, India export to Mexico, bilateral trade promotion, B2B matchmaking"
        />
      </Helmet>

      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-[#A98842] mb-4 uppercase tracking-tight transition-colors">
            {tradeContent.title}
          </h1>
          <p className="max-w-3xl mx-auto text-gray-900 dark:text-gray-300 font-bold text-[11px] md:text-xs leading-relaxed uppercase tracking-widest opacity-80 transition-colors">
            {tradeContent.subtitle}
          </p>
        </div>
      </section>

      {/* --- HERO IMAGE SECTION --- */}
      <section className="container mx-auto px-4 mb-20">
        <div className="rounded-[30px] overflow-hidden shadow-2xl dark:shadow-black/50 border-4 border-white dark:border-slate-800 transition-colors">
          <img
            src={TradeHeroImg}
            alt={t("trade_pro_img_alt", "Trade Promotion Bilateral")}
            className="w-full h-auto md:max-h-[600px] object-cover"
          />
        </div>
      </section>

      {/* --- BILATERAL TRADE CARDS --- */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {tradeContent.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-[#A98842]/10 dark:border-slate-800"
              >
                {/* Header Badge & Icon */}
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 bg-[#A98842] text-white rounded-2xl flex items-center justify-center shadow-lg dark:shadow-none transition-transform group-hover:rotate-6">
                    {section.icon === "Package" ? (
                      <Package size={28} />
                    ) : (
                      <Globe size={28} />
                    )}
                  </div>
                  <span
                    className={`px-5 py-2 rounded-full text-[9px] font-black tracking-[0.2em] transition-colors ${
                      idx === 0
                        ? "bg-[#FFF9E6] dark:bg-[#A98842]/20 text-[#A98842] dark:text-[#A98842]"
                        : "bg-[#1a1a1a] dark:bg-slate-800 text-white dark:text-gray-200"
                    }`}
                  >
                    {section.badge}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 transition-colors">
                  {t("trade_pro_for", "For")} {section.type}
                </h2>

                {/* Fixed Description Alignment */}
                <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-10 font-medium md:min-h-[70px] transition-colors">
                  {section.desc}
                </p>

                {/* Checklist Points - Fixed spacing and alignment */}
                <div className="space-y-4 flex-1 flex flex-col justify-start">
                  {section.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-[#faf9f6]/60 dark:bg-slate-800/50 p-5 rounded-2xl border border-gray-50 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm dark:hover:shadow-md transition-all"
                    >
                      <div className="shrink-0 text-[#A98842]">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-bold tracking-tight transition-colors">
                        {point}
                      </span>
                    </div>
                  ))}
                  {/* Empty Spacer to push content up if one card has fewer points */}
                  <div className="flex-grow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradePromotion;
