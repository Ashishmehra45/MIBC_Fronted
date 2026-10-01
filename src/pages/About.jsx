import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Activity, Tv, Map, Landmark, Users, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next"; // <-- 1. i18n Hook import kiya
import { Helmet } from "react-helmet-async"; // <-- 1. Helmet import kiya

import Bgimg from "../assets/images/bg/about.jpg";
import CEOImg from "../assets/images/team/raviSir.png";
import ndLeaderImg from "../assets/images/team/max.jpg";
import PratikImg from "../assets/images/team/Pratik-navle.jpeg";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const { t } = useTranslation(); // <-- 2. Hook initialize kiya

  const leadershipData = [
    {
      name: "Ravi K. Tiwari",
      title: t("about_ravi_title"),
      quote: t("about_ravi_quote"),
      image: CEOImg,
    },
    {
      name: "Rodrigo Pérez",
      title: t("about_rodrigo_title"),
      quote: t("about_rodrigo_quote"),
      image: ndLeaderImg,
    },
    {
      name: "Pratik Navale",
      title: t("about_pratik_title"),
      quote: t("about_pratik_quote"),
      image: PratikImg,
    },
  ];

  const features = [
    {
      title: t("about_vision_title"),
      icon: <Activity className="w-12 h-12 stroke-[1.5px]" />,
      desc: t("about_vision_desc"),
      delay: "0",
    },
    {
      title: t("about_mission_title"),
      icon: <Tv className="w-12 h-12 stroke-[1.5px]" />,
      desc: t("about_mission_desc"),
      isGold: true,
      delay: "100",
    },
    {
      title: t("about_edge_title"),
      icon: <Map className="w-12 h-12 stroke-[1.5px]" />,
      desc: t("about_edge_desc"),
      delay: "200",
    },
  ];

  const foundationData = {
    badge: t("about_foundation_badge"),
    title: t("about_foundation_title"),
    desc: t("about_foundation_desc"),
    cards: [
      {
        title: t("about_gov_title"),
        icon: "Landmark",
        points: [t("about_gov_p1"), t("about_gov_p2"), t("about_gov_p3")],
      },
      {
        title: t("about_part_title"),
        icon: "Users",
        points: [t("about_part_p1"), t("about_part_p2"), t("about_part_p3")],
      },
      {
        title: t("about_track_title"),
        icon: "BarChart3",
        points: [t("about_track_p1"), t("about_track_p2"), t("about_track_p3")],
      },
    ],
  };

  const corridorData = {
    title: t("about_corridor_title"),
    highlight: t("about_corridor_highlight"),
    subtext: t("about_corridor_subtext"),
    cards: [
      {
        title: t("about_nearshoring_title"),
        icon: "🏗️",
        desc: t("about_nearshoring_desc"),
      },
      {
        title: t("about_india_title"),
        icon: "🚀",
        desc: t("about_india_desc"),
      },
      {
        title: t("about_policy_title"),
        icon: "⚖️",
        desc: t("about_policy_desc"),
        isHighlighted: true,
      },
      {
        title: t("about_potential_title"),
        icon: "📈",
        desc: t("about_potential_desc"),
      },
    ],
    footer: {
      brand: t("about_footer_brand"),
      text: t("about_footer_text"),
      outcome: t("about_footer_outcome"),
    },
  };

  return (
    <div
      className="page-wrapper bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-500"
      style={{ overflow: "hidden" }}
    >
      <Helmet>
        <title>About Us | MIBC - México–India Business Council</title>
        <meta
          name="description"
          content="Discover the México-India Business Council (MIBC), the first dedicated bilateral business council for the México-India corridor headquartered in India, driving trade and investments."
        />
        <meta
          name="keywords"
          content="About MIBC, México-India Business Council, bilateral trade council, Mexico India relations, institutional platform, Ravi K Tiwari, cross-border investments"
        />
      </Helmet>
      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center text-center bg-black">
        <div className="absolute inset-0 opacity-50">
          <img
            src={Bgimg}
            alt="Mexico-India Flag"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <span className="bg-white text-[#A98842] px-4 py-1 rounded text-sm font-bold uppercase tracking-widest">
            {t("about_badge")}
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold mt-4">
            {t("about_hero_line1")} <br />
            <span className="text-[#A98842]">{t("about_hero_line2")}</span>
          </h1>
        </div>
      </section>

      {/* INTRO TEXT SECTION */}
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-5xl mx-auto " data-sal="slide-up">
            <p className="text-gray-800 dark:text-gray-200 text-xl md:text-2xl leading-relaxed font-medium transition-colors">
              {t("about_intro")}
            </p>
          </div>
          <div className="border-t border-gray-200 dark:border-slate-800 w-24 mx-auto transition-colors"></div>
        </div>
      </div>

      {/* LEADERSHIP SECTION */}
      <div className="py-10 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight transition-colors">
              {t("about_leadership_title")}
            </h2>
          </div>

          <div className="bg-[#f2f2f2] dark:bg-slate-900 rounded-[40px] p-6 md:p-10 relative shadow-sm leadership-slider-parent overflow-hidden transition-colors">
            <div className="space-y-16">
              {leadershipData.map((leader, index) => (
                <div
                  key={index}
                  className="
          flex flex-col md:flex-row items-center
          gap-10 md:gap-20
          opacity-0
          animate-[fadeSlideUp_0.8s_ease-out_forwards]
        "
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  {/* Image */}
                  <div className="relative shrink-0 group">
                    <div className="absolute -inset-2 bg-[#A98842]/20 rounded-3xl blur-xl transition-all duration-700 group-hover:bg-[#A98842]/30"></div>

                    <div className="relative w-[280px] h-[360px] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(169,136,66,0.25)]">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="
                w-full h-full object-cover
                transition-transform duration-700
                group-hover:scale-105
              "
                      />
                    </div>
                  </div>

                  {/* Quote */}
                  <div
                    className="
            flex-1 text-left
            pl-0 md:pl-10
            border-l-0 md:border-l-[4px]
            md:border-l-[#A98842]
          "
                  >
                    <p
                      className="
              text-gray-900 dark:text-gray-300
              text-xl md:text-2xl
              font-light italic
              leading-relaxed
              mb-8
              transition-colors duration-300
            "
                      style={{ fontFamily: "serif" }}
                    >
                      {leader.quote}
                    </p>

                    <div className="space-y-1">
                      <h4 className="text-gray-950 dark:text-white text-2xl font-bold transition-colors duration-300">
                        {leader.name}
                      </h4>

                      <p className="text-[#A98842] text-sm font-bold tracking-[0.2em] uppercase">
                        {leader.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Styles (Dark mode support added) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
                .leadership-slider-parent .swiper-pagination {
                    position: relative !important;
                    bottom: 0px !important;
                    margin-top: 40px;
                    display: flex;
                    justify-content: center;
                }
                .leadership-slider-parent .swiper-pagination-bullet {
                    background: #000;
                    opacity: 0.15;
                    width: 10px;
                    height: 10px;
                    margin: 0 6px !important;
                    transition: all 0.3s ease;
                }
                .leadership-slider-parent .swiper-pagination-bullet-active {
                    background: #A98842;
                    opacity: 1;
                    width: 30px;
                    border-radius: 10px;
                }
                .dark .leadership-slider-parent .swiper-pagination-bullet {
                    background: #ffffff;
                    opacity: 0.2;
                }
                .dark .leadership-slider-parent .swiper-pagination-bullet-active {
                    background: #A98842;
                    opacity: 1;
                }
                .leadership-swiper {
                    padding-bottom: 20px !important;
                }
            `,
        }}
      />

      {/* VISION, MISSION & EDGE SECTION */}
      <section className="py-20 bg-transparent font-sans">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="bg-[#f2f2f2] dark:bg-slate-900 text-[#A98842] px-4 py-1 rounded text-[11px] font-bold uppercase tracking-[0.2em] mb-4 inline-block transition-colors">
              {t("about_what_we_do")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white tracking-tight transition-colors">
              {t("about_vision_mission_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900 rounded-[32px] p-6 md:p-8 text-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-transparent hover:border-[#A98842]/20 dark:border-slate-800"
              >
                <div className="flex justify-center mb-6 text-[#A98842] transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3
                  className={`text-xl font-bold uppercase tracking-[0.15em] mb-4 transition-colors ${item.isGold ? "text-[#A98842]" : "text-[#1a1a1a] dark:text-white"}`}
                >
                  {item.title}
                </h3>
                <p className="text-[#444] dark:text-gray-400 leading-[1.8] text-[16px] font-medium opacity-90 transition-colors">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A98842] transition-all duration-500 group-hover:w-1/3 rounded-t-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL FOUNDATION SECTION */}
      <section className="py-14 bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <span className="bg-[#FFF9E6] dark:bg-[#A98842]/10 text-[#A98842] px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-[0.3em] mb-6 inline-block shadow-sm transition-colors">
              {foundationData.badge}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] dark:text-white tracking-tight mb-8 transition-colors">
              {foundationData.title}
            </h2>
            <p className="max-w-4xl mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-medium opacity-90 transition-colors">
              {foundationData.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {foundationData.cards.map((card, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900 rounded-[40px] p-10 pt-16 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-none border border-transparent hover:border-[#A98842]/20 dark:border-slate-800 transition-all duration-500 hover:-translate-y-4 overflow-hidden"
              >
                <div className="absolute top-10 left-10 w-14 h-14 bg-[#FFF9E6] dark:bg-[#A98842]/10 rounded-2xl flex items-center justify-center text-[#A98842] shadow-sm transition-colors">
                  {/* Icons rendered dynamically based on JSON string */}
                  {card.icon === "Landmark" && <Landmark size={28} />}
                  {card.icon === "Users" && <Users size={28} />}
                  {card.icon === "BarChart3" && <BarChart3 size={28} />}
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-8 group-hover:text-[#A98842] transition-colors duration-300">
                    {card.title}
                  </h3>

                  <ul className="space-y-6">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <span className="text-[#A98842] mt-1 transition-transform group-hover/item:translate-x-1 font-bold">
                          →
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-[15px] transition-colors">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-[#A98842] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORRIDOR MATTERS SECTION */}
      <section className="py-14 bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-500">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16" data-sal="slide-up">
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] dark:text-white tracking-tight uppercase transition-colors">
              {corridorData.title}{" "}
              <span className="text-[#A98842]">{corridorData.highlight}</span>
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium opacity-80 transition-colors">
              {corridorData.subtext}
            </p>
          </div>

          {/* 4-Column Grid - All with Border Line */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {corridorData.cards.map((card, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-900 p-8 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-none border-b-4 border-b-[#A98842]/30 dark:border-slate-800 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-b-[#A98842]"
              >
                {/* Icon with subtle float animation on hover */}
                <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110 inline-block">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-4 transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed font-medium transition-colors">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Branding Area */}
          <div className="text-center mt-20" data-sal="zoom-in">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-xl font-medium text-[#1a1a1a] dark:text-gray-300 transition-colors">
              <span className="border-[3px] border-[#A98842] text-[#A98842] px-5 py-1 rounded-xl font-black tracking-tighter">
                {corridorData.footer.brand}
              </span>
              <span className="font-bold">{corridorData.footer.text}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight text-[#1a1a1a] dark:text-white uppercase transition-colors">
              {corridorData.footer.outcome}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
