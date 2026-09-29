import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // <-- 1. i18n Hook import kiya
import videoSrc from "../assets/images/services/BUSINESS cOUNCIL.mp4";
import img1 from "../assets/images/services/End-To-End.jpeg";
import img2 from "../assets/images/services/site.jpeg";
import img3 from "../assets/images/services/Entity setup & launch.jpeg";
import img4 from "../assets/images/services/Bilateral Trade.jpeg";
import img5 from "../assets/images/services/4st.jpg";
import img6 from "../assets/images/services/3st.jpg";
import img7 from "../assets/images/services/5st (1).jpg";
import img8 from "../assets/images/services/6st.jpg";
import img9 from "../assets/images/services/8st.jpg";
import img10 from "../assets/images/blog-grid/IT.jpg";
import img11 from "../assets/images/blog-grid/pharma-Picsart-AiImageEnhancer.jpg";
import img12 from "../assets/images/blog-grid/automotive.jpg";
import img13 from "../assets/images/blog-grid/E&M.png";
import img14 from "../assets/images/blog-grid/food.jpg";
import img15 from "../assets/images/split/split-01.jpg";
import img16 from "../assets/images/split/split-03.jpg";

import memberImg1 from "../assets/images/services/Corporate.jpeg";
import memberImg2 from "../assets/images/services/Founding.jpeg";
import memberImg3 from "../assets/images/services/Associate.jpeg";

import MIBCpdf from "../assets/pdf/MIBC_Membership_plans.pdf";

const Home = () => {
  const { t } = useTranslation(); // <-- 2. Hook initialize kiya
  const [activeTab, setActiveTab] = useState("investment");
  const [flippedCard, setFlippedCard] = useState(null);

  const toggleFlip = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  const Counter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            let start = 0;
            const end = parseInt(value);
            if (start === end) return;

            let totalMilisekondsCount = duration * 1000;
            let incrementTime = totalMilisekondsCount / end;

            let timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start === end) clearInterval(timer);
            }, incrementTime);
          }
        },
        { threshold: 0.5 },
      );

      if (countRef.current) observer.observe(countRef.current);
      return () => observer.disconnect();
    }, [value, hasStarted, duration]);

    return <span ref={countRef}>{count}</span>;
  };

  return (
    <div className="w-full bg-[#f4faff] dark:bg-slate-950 min-h-screen font-sans transition-colors duration-500">
      {/* 1. HERO SECTION */}
      <section className="md:h-[40vw] w-full flex flex-col items-center overflow-hidden">
        <div className="relative w-full h-[25vh] md:h-[100%] z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <div className="absolute inset-0 z-50 flex items-end pb-4 md:pb-0 md:items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-10 px-4 w-full md:mt-[60vh]">
              <Link
                to="/services"
                className="flex-1 max-w-[150px] md:max-w-[240px] h-[38px] md:h-[55px] bg-black/40 backdrop-blur-md border border-white/30 text-white text-[9px] md:text-[11px] font-bold tracking-tight uppercase hover:bg-white hover:text-black transition-all rounded-sm flex items-center justify-center"
              >
                <span className="text-[15px]">{t("home_explore_services")}</span>
                <span className="ml-1 mb-1 text-xl leading-none">&rsaquo;</span>
              </Link>

              <Link
                to="/contact"
                className="flex-1 max-w-[150px] md:max-w-[240px] h-[38px] md:h-[55px] bg-black/40 backdrop-blur-md border border-white/30 text-white text-[9px] md:text-[11px] font-bold tracking-tight uppercase hover:bg-white hover:text-black transition-all rounded-sm flex items-center justify-center"
              >
                <span className="text-[15px]">{t("home_contact_us")}</span>
                <span className="ml-1 mb-1 text-xl leading-none">&rsaquo;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="py-20 bg-white dark:bg-slate-950 px-4 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gray-100 dark:bg-slate-900 text-[#b38e44] text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4 transition-colors">
              {t("home_approach_badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white transition-colors">
              {t("home_approach_title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("home_approach_card1_title"),
                desc: t("home_approach_card1_desc"),
                img: img1, 
                path: "/services",
              },
              {
                title: t("home_approach_card2_title"),
                desc: t("home_approach_card2_desc"),
                img: img4, 
                path: "/services",
              },
              {
                title: t("home_approach_card3_title"),
                desc: t("home_approach_card3_desc"),
                img: img7, 
                path: "/services",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/50 transition-all flex flex-col h-full"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={card.img}
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                    alt={card.title}
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow items-start">
                  <h4 className="text-xl font-extrabold text-black dark:text-white leading-tight mb-4 transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-gray-800 dark:text-gray-400 text-[16px] leading-relaxed mb-8 flex-grow transition-colors line-clamp-2">
                    {card.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <Link
                      to={card.path}
                      className="inline-block bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all"
                    >
                      {t("home_learn_more")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT IS MIBC SECTION --- */}
      <section className="w-full py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-2xl dark:shadow-black/50 transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src={img15}
                  alt="MIBC Meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight transition-colors">
                {t("home_what_is_title")}
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-justify transition-colors">
                  {t("home_what_is_desc")}
                </p>
              </div>
              <Link
                to="/about"
                className="inline-block bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm transition-all shadow-lg active:scale-95"
              >
                {t("home_about_btn")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE CORRIDOR SECTION --- */}
      <section className="w-full py-24 bg-[#f8faff] dark:bg-slate-900 overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight transition-colors">
                  {t("home_corridor_title")}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-justify transition-colors">
                  {t("home_corridor_desc")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-12 gap-x-8 pt-10 border-t border-gray-200 dark:border-slate-800 transition-colors">
                <div className="space-y-2">
                  <h3 className="text-[#b38e44] text-3xl md:text-4xl font-bold">
                    $<Counter value="50" />
                    B+
                  </h3>
                  <p className="text-slate-800 dark:text-gray-300 font-bold text-sm md:text-base uppercase tracking-wider transition-colors">
                    {t("home_stat1_label")}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#b38e44] text-3xl md:text-4xl font-bold">
                    $<Counter value="30" />
                    Trillion
                  </h3>
                  <p className="text-slate-800 dark:text-gray-300 font-bold text-sm md:text-base uppercase tracking-wider transition-colors">
                    {t("home_stat2_label")}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#b38e44] text-3xl md:text-4xl font-bold">
                    <Counter value="75" />+
                  </h3>
                  <p className="text-slate-800 dark:text-gray-300 font-bold text-sm md:text-base uppercase tracking-wider transition-colors">
                    {t("home_stat3_label")}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#b38e44] text-3xl md:text-4xl font-bold">
                    $<Counter value="12" />
                    B+
                  </h3>
                  <p className="text-slate-800 dark:text-gray-300 font-bold text-sm md:text-base uppercase tracking-wider transition-colors">
                    {t("home_stat4_label")}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl dark:shadow-black/50 h-[400px] md:h-[550px]">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000"
                  alt="Corridor Logistics"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-amber-100 dark:bg-amber-900/30 rounded-full blur-3xl opacity-60 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR FOCUS SECTORS SECTION --- */}
      <section className="py-24 bg-white dark:bg-slate-950 px-4 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-4 bg-blue-50 dark:bg-[#A98842]/10 text-[#A98842] text-[12px] font-bold uppercase tracking-[0.2em] rounded mb-4 transition-colors">
              {t("home_sectors_badge")}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
            {[
              {
                id: "it",
                title: t("home_sec1_title"),
                subtitle: t("home_sec1_sub"),
                img: img10,
                isLarge: true,
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                ),
              },
              {
                id: "pharma",
                title: t("home_sec2_title"),
                img: img11,
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                    <path d="m8.5 8.5 7 7" />
                  </svg>
                ),
              },
              {
                id: "logistics",
                title: t("home_sec3_title"),
                img: img12,
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 17h4V2" />
                    <path d="M10 17v-5h4v5" />
                    <path d="M8 22h8" />
                    <path d="M12 17v5" />
                  </svg>
                ),
              },
              {
                id: "manufacturing",
                title: t("home_sec4_title"),
                img: img13,
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
                    <path d="M5 20h14" />
                    <path d="M15 7V4a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v3" />
                  </svg>
                ),
              },
              {
                id: "food",
                title: t("home_sec5_title"),
                img: img14,
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                    <line x1="6" y1="17" x2="18" y2="17" />
                  </svg>
                ),
              },
            ].map((sector) => (
              <Link
                key={sector.id}
                to="/sectors" 
                className={`${
                  sector.isLarge ? "md:col-span-2 md:row-span-2" : ""
                } relative group overflow-hidden rounded-xl shadow-md bg-slate-200 dark:bg-slate-800 transition-colors cursor-pointer`}
              >
                <img
                  src={sector.img}
                  alt={sector.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                  <div
                    className={`mb-4 text-[#b38e44] transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ${sector.isLarge ? "scale-125" : ""}`}
                  >
                    {sector.icon}
                  </div>
                  <h3
                    className={`text-white font-bold uppercase tracking-widest transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75 ${sector.isLarge ? "text-2xl md:text-3xl" : "text-lg"}`}
                  >
                    {sector.title}
                  </h3>
                  {sector.subtitle && (
                    <p className="text-[#b38e44] text-xs font-bold mt-3 uppercase tracking-[0.3em] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                      {sector.subtitle}
                    </p>
                  )}
                  <span className="mt-6 text-[10px] text-white/70 uppercase font-black tracking-widest border border-white/20 px-4 py-1.5 rounded-full group-hover:bg-[#b38e44] group-hover:text-white group-hover:border-[#b38e44] transition-all duration-300">
                    {t("home_explore_sector")}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/sectors"
              className="inline-block bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-12 py-4 rounded-md font-bold uppercase tracking-widest text-sm transition-all shadow-lg active:scale-95"
            >
              {t("home_learn_more")}
            </Link>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP SECTION */}
      <section className="py-24 bg-white dark:bg-slate-950 px-4 overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-[#fdf8ec] dark:bg-[#A98842]/10 text-[#b38e44] text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-3 transition-colors">
              {t("home_mem_badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
              {t("home_mem_title")}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("home_mem_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
            {/* Associate Member */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow relative">
              <div className="text-[#b38e44] mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t("home_mem_assoc_title")}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow">
                {t("home_mem_assoc_desc")}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">₹25,000</span>
                <span className="text-gray-500 dark:text-gray-400"> {t("home_mem_year")}</span>
              </div>
              <Link
                to="/membership-plans"
                className="w-full text-center bg-gray-100 dark:bg-slate-800 hover:bg-[#b38e44] hover:text-white text-slate-900 dark:text-white px-6 py-3 rounded-md font-bold uppercase tracking-widest text-[11px] transition-all"
              >
                {t("home_mem_apply")}
              </Link>
            </div>

            {/* Corporate Member */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow relative">
              <div className="text-[#b38e44] mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect width="20" height="14" x="2" y="7" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t("home_mem_corp_title")}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow">
                {t("home_mem_corp_desc")}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">₹1,00,000</span>
                <span className="text-gray-500 dark:text-gray-400"> {t("home_mem_year")}</span>
              </div>
              <Link
                to="/membership-plans"
                className="w-full text-center bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-6 py-3 rounded-md font-bold uppercase tracking-widest text-[11px] transition-all shadow-lg"
              >
                {t("home_mem_apply")}
              </Link>
            </div>

            {/* Founding Member */}
            <div className="bg-[#fdfaf5] dark:bg-slate-800/50 border-2 border-[#b38e44] rounded-2xl p-8 flex flex-col shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#b38e44] text-white text-[9px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-lg">
                {t("home_mem_excl")}
              </div>
              <div className="text-[#b38e44] mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t("home_mem_found_title")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {t("home_mem_found_desc")}
              </p>
              
              <div className="mb-4 inline-flex items-center gap-2 bg-[#b38e44]/10 text-[#b38e44] px-3 py-2 rounded text-xs font-semibold">
                <svg className="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("home_mem_found_limit")}
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white">₹5,00,000</span>
                <span className="text-gray-500 dark:text-gray-400"> {t("home_mem_year")}</span>
              </div>
              <Link
                to="/membership-plans"
                className="w-full text-center bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-6 py-3 rounded-md font-bold uppercase tracking-widest text-[11px] transition-all shadow-lg"
              >
                {t("home_mem_apply")}
              </Link>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">{t("home_mem_comp_title")}</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-slate-800">
                    <th className="py-4 px-6 text-left text-sm font-bold text-slate-900 dark:text-white w-2/5">{t("home_mem_col1")}</th>
                    <th className="py-4 px-6 text-center text-sm font-bold text-slate-900 dark:text-white w-1/5">{t("home_mem_col2")}</th>
                    <th className="py-4 px-6 text-center text-sm font-bold text-slate-900 dark:text-white w-1/5">{t("home_mem_col3")}</th>
                    <th className="py-4 px-6 text-center text-sm font-bold text-[#b38e44] w-1/5">{t("home_mem_col4")}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { feature: t("home_mem_f1"), a: true, c: true, f: true },
                    { feature: t("home_mem_f2"), a: true, c: true, f: true },
                    { feature: t("home_mem_f3"), a: true, c: true, f: true },
                    { feature: t("home_mem_f4"), a: true, c: true, f: true },
                    { feature: t("home_mem_f5"), a: false, c: true, f: true },
                    { feature: t("home_mem_f6"), a: false, c: true, f: true },
                    { feature: t("home_mem_f7"), a: false, c: true, f: t("home_mem_premium") },
                    { feature: t("home_mem_f8"), a: false, c: true, f: true },
                    { feature: t("home_mem_f9"), a: false, c: true, f: true },
                    { feature: t("home_mem_f10"), a: false, c: false, f: true },
                    { feature: t("home_mem_f11"), a: false, c: false, f: true },
                    { feature: t("home_mem_f12"), a: false, c: false, f: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-slate-800/50 hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-colors">
                      <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.a === true ? <span className="text-green-500 inline-block">✔</span> : <span className="text-gray-300 dark:text-gray-700">-</span>}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.c === true ? <span className="text-green-500 inline-block">✔</span> : <span className="text-gray-300 dark:text-gray-700">-</span>}
                      </td>
                      <td className="py-4 px-6 text-center font-semibold text-[#b38e44]">
                        {row.f === true ? "✔" : row.f}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center bg-gray-50 dark:bg-slate-900 p-10 rounded-2xl border border-gray-100 dark:border-slate-800">
            <div className="text-[#b38e44] mb-4 flex justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl italic font-medium text-slate-800 dark:text-gray-200 leading-relaxed">
              "{t("home_mem_quote")}"
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;