import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

import memberImg1 from "../assets/images/services/Corporate.jpeg";
import memberImg2 from "../assets/images/services/Founding.jpeg";
import memberImg3 from "../assets/images/services/Associate.jpeg";

import MIBCpdf from "../assets/pdf/MIBC_Membership_plans.pdf";

const Home = () => {
  const [activeTab, setActiveTab] = useState("investment");
  // 🔄 Mobile Flip Handle karne ke liye State (Yahan add karo)
  const [flippedCard, setFlippedCard] = useState(null);

  const toggleFlip = (id) => {
    // Agar mobile pe touch ho toh toggle flip kare
    setFlippedCard(flippedCard === id ? null : id);
  };

  // --- Return ke Upar ye Counter Component daal do ---
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
        {/* Video Background */}
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

          {/* Buttons Overlay */}
          <div className="absolute inset-0 z-50 flex items-end pb-4 md:pb-0 md:items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-10 px-4 w-full md:mt-[60vh]">
              {/* Explore Services */}
              <Link
                to="/services"
                className="flex-1 max-w-[150px] md:max-w-[240px] h-[38px] md:h-[55px] bg-black/40 backdrop-blur-md border border-white/30 text-white text-[9px] md:text-[11px] font-bold tracking-tight uppercase hover:bg-white hover:text-black transition-all rounded-sm flex items-center justify-center"
              >
                <span className="text-[15px]">Explore Services</span>
                <span className="ml-1 mb-1 text-xl leading-none">&rsaquo;</span>
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className="flex-1 max-w-[150px] md:max-w-[240px] h-[38px] md:h-[55px] bg-black/40 backdrop-blur-md border border-white/30 text-white text-[9px] md:text-[11px] font-bold tracking-tight uppercase hover:bg-white hover:text-black transition-all rounded-sm flex items-center justify-center"
              >
                <span className="text-[15px]">Contact Us</span>
                <span className="ml-1 mb-1 text-xl leading-none">&rsaquo;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="py-20 bg-white dark:bg-slate-950 px-4 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gray-100 dark:bg-slate-900 text-[#b38e44] text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-4 transition-colors">
              Our Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white transition-colors">
              What We Deliver
            </h2>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center border-b border-gray-200 dark:border-slate-800 mb-12 transition-colors">
            {["investment", "trade", "advocacy"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-5 text-sm font-bold transition-all relative ${
                  activeTab === tab
                    ? "text-black dark:text-white bg-white dark:bg-slate-900 border-t border-l border-r border-gray-200 dark:border-slate-800 rounded-t-lg -mb-[1px] z-10 shadow-sm"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 bg-gray-50/50 dark:bg-slate-950"
                }`}
              >
                {tab === "investment" && "Investment Facilitation"}
                {tab === "trade" && "Trade Promotion"}
                {tab === "advocacy" && "Intelligence & Advocacy"}
              </button>
            ))}
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === "investment"
              ? [
                  {
                    title: "End-to-End Investment Support",
                    desc: "We help companies enter Mexico or India through a structured investment pathway. Our team manages everything from incorporation to Launch execution.",
                    img: img1,
                    path: "/services/investment",
                  },
                  {
                    title: "Feasibility & Site Selection",
                    desc: "We provide location analysis, incentive mapping, and cost modelling to help companies identify the most competitive site.",
                    img: img2,
                    path: "/services/investment",
                  },
                  {
                    title: "Entity Setup & Launch",
                    desc: "We support your regulatory compliance, talent acquisition & onboarding, and early operational setup for success.",
                    img: img3,
                    path: "/services/investment",
                  },
                ]
              : activeTab === "trade"
                ? [
                    {
                      title: "Bilateral Trade Acceleration",
                      desc: "We help exporters expand into Mexico and India by connecting them with qualified buyers and navigating regulatory requirements.",
                      img: img4,
                      path: "/services/trade",
                    },
                    {
                      title: "Market Intelligence",
                      desc: "We offer buyer identification, regulatory insights, and tariff analysis to help exporters understand demand.",
                      img: img5,
                      path: "/services/trade",
                    },
                    {
                      title: "Matchmaking & Missions",
                      desc: "We deliver curated B2B introductions, manage trade delegations, and support exhibitions to unlock opportunities.",
                      img: img6,
                      path: "/services/trade",
                    },
                  ]
                : [
                    {
                      title: "Delegation Strategy & Facilitation",
                      desc: "We design and execute government and business delegations with high-level meetings and impactful bilateral engagement.",
                      img: img7,
                      path: "/services/advocacy",
                    },
                    {
                      title: "Policy Engagement & Representation",
                      desc: "We represent member interests through policy submissions, consultations, and engagement with ministries.",
                      img: img8,
                      path: "/services/advocacy",
                    },
                    {
                      title: "Commercial Intelligence & Insights",
                      desc: "We deliver timely intelligence, tender alerts, and regulatory updates to help businesses act confidently.",
                      img: img9,
                      path: "/services/advocacy",
                    },
                  ]
            ).map((card, idx) => (
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
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-extrabold text-black dark:text-white mb-4 leading-tight min-h-[56px] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow transition-colors">
                    {card.desc}
                  </p>
                  <div>
                    <Link
                      to={card.path}
                      className="inline-block bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all"
                    >
                      Learn More
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
            {/* Left: Meeting Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-2xl dark:shadow-black/50 transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000"
                  alt="MIBC Meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight transition-colors">
                What is MIBC?
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-justify transition-colors">
                  The México–India Business Council is the first dedicated
                  bilateral business council for the México–India corridor based
                  in India. Established with the support of the Government of
                  México & recognised by the Government of India, the Council
                  serves as the institutional platform for commercial engagement
                  between the two nations.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-justify transition-colors">
                  MIBC operates at the intersection of government policy and
                  private enterprise, providing intelligence, introductions, and
                  institutional support to navigate cross-border transactions.
                  Our mandate extends beyond trade promotion to encompass
                  investment facilitation and market entry support.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-block bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm transition-all shadow-lg active:scale-95"
              >
                About MIBC
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE CORRIDOR SECTION --- */}
      <section className="w-full py-24 bg-[#f8faff] dark:bg-slate-900 overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Text and Stats */}
            <div className="w-full lg:w-1/2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight transition-colors">
                  The México–India Corridor.
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-justify transition-colors">
                  The México–India economic corridor currently stands at $12
                  billion in bilateral trade, with projected potential to cross
                  $50 billion by 2030. India brings scale, technology
                  leadership, and a 1.4 billion-consumer domestic market. MIBC
                  exists to transform this complementarity into commercial
                  outcomes.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-y-12 gap-x-8 pt-10 border-t border-gray-200 dark:border-slate-800 transition-colors">
                <div className="space-y-2">
                  <h3 className="text-[#b38e44] text-3xl md:text-4xl font-bold">
                    $<Counter value="50" />
                    B+
                  </h3>
                  <p className="text-slate-800 dark:text-gray-300 font-bold text-sm md:text-base uppercase tracking-wider transition-colors">
                    Trade Potential by 2030
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#b38e44] text-3xl md:text-4xl font-bold">
                    <Counter value="30" />
                    T+
                  </h3>
                  <p className="text-slate-800 dark:text-gray-300 font-bold text-sm md:text-base uppercase tracking-wider transition-colors">
                    USMCA Market Access
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#b38e44] text-3xl md:text-4xl font-bold">
                    <Counter value="75" />+
                  </h3>
                  <p className="text-slate-800 dark:text-gray-300 font-bold text-sm md:text-base uppercase tracking-wider transition-colors">
                    Diplomatic Relations
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[#b38e44] text-3xl md:text-4xl font-bold">
                    $<Counter value="12" />
                    B+
                  </h3>
                  <p className="text-slate-800 dark:text-gray-300 font-bold text-sm md:text-base uppercase tracking-wider transition-colors">
                    Bilateral Trade
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Port/Corridor Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl dark:shadow-black/50 h-[400px] md:h-[550px]">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000"
                  alt="Corridor Logistics"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              {/* Background Accent */}
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-amber-100 dark:bg-amber-900/30 rounded-full blur-3xl opacity-60 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR FOCUS SECTORS SECTION --- */}
      <section className="py-24 bg-white dark:bg-slate-950 px-4 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-4 bg-blue-50 dark:bg-[#A98842]/10 text-[#A98842] text-[12px] font-bold uppercase tracking-[0.2em] rounded mb-4 transition-colors">
              Our Focus Sectors
            </span>
          </div>

          {/* Puzzle Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
            {[
              {
                id: "it",
                title: "Information Technology",
                subtitle: "Indian Investment",
                img: img10,
                isLarge: true,
                icon: (
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                ),
              },
              {
                id: "pharma",
                title: "Pharmaceuticals",
                img: img11,
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                    <path d="m8.5 8.5 7 7" />
                  </svg>
                ),
              },
              {
                id: "logistics",
                title: "Logistics",
                img: img12,
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 17h4V2" />
                    <path d="M10 17v-5h4v5" />
                    <path d="M8 22h8" />
                    <path d="M12 17v5" />
                  </svg>
                ),
              },
              {
                id: "manufacturing",
                title: "Manufacturing",
                img: img13,
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
                    <path d="M5 20h14" />
                    <path d="M15 7V4a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v3" />
                  </svg>
                ),
              },
              {
                id: "food",
                title: "Food & Agri",
                img: img14,
                icon: (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                    <line x1="6" y1="17" x2="18" y2="17" />
                  </svg>
                ),
              },
            ].map((sector) => (
              <Link
                key={sector.id}
                to="/sectors" // ✅ Fixed: Sabhi cards ab sirf /sectors par navigate karenge
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
                  {/* Explore Button Indicator */}
                  <span className="mt-6 text-[10px] text-white/70 uppercase font-black tracking-widest border border-white/20 px-4 py-1.5 rounded-full group-hover:bg-[#b38e44] group-hover:text-white group-hover:border-[#b38e44] transition-all duration-300">
                    Explore Sector
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
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* --- JOIN THE NETWORK SECTION --- */}

      <section className="py-24 bg-white dark:bg-slate-950 px-4 overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 bg-[#fdf8ec] dark:bg-[#A98842]/10 text-[#b38e44] text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-3 transition-colors">
              Membership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
              Join The Network
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                id: "corporate",
                title: "Corporate Member",
                img: memberImg1,
                desc: "Ideal for companies looking to expand trade and investment engagement between Mexico and India. Members gain access to sectoral roundtables, market intelligence, and structured introductions.",
                buttonText: "Download Brochure",
                pdfpath: MIBCpdf,
                isDownload: true,
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                ),
              },
              {
                id: "founding",
                title: "Founding Member",
                img: memberImg2,
                isExclusive: true,
                desc: "Designed for industry leaders seeking strategic influence. Founding Members receive white-glove facilitation, including exclusive site selection support, and direct engagement with senior policy stakeholders.",
                buttonText: "Learn More",
                isDownload: false,
                pdfpath: "/contact", // "Learn More" ke liye contact ya about link
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
              },
              {
                id: "associate",
                title: "Associate Member",
                img: memberImg3,
                desc: "Created for SMEs and emerging enterprises exploring bilateral opportunities. Members benefit from market-entry guidance, opportunity alerts, and inclusion in the MIBC network.",
                buttonText: "Download Brochure",
                pdfpath: MIBCpdf,
                isDownload: true,
                icon: (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => toggleFlip(item.id)} // 👈 Mobile Touch Trigger
                className={`group h-[480px] [perspective:1500px] cursor-pointer ${item.isExclusive ? "md:z-20" : "z-10"}`}
              >
                <div
                  className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] transform-gpu 
                  ${flippedCard === item.id ? "[transform:rotateY(180deg)]" : ""} 
                  md:group-hover:[transform:rotateY(180deg)]`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden shadow-xl dark:shadow-black/50 border border-gray-100 dark:border-slate-800 transition-colors [backface-visibility:hidden]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
                      {item.isExclusive && (
                        <span className="mb-4 px-3 py-1 bg-[#b38e44] text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                          Exclusive
                        </span>
                      )}
                      <div className="text-[#b38e44] mb-4">{item.icon}</div>
                      <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <div className="mt-4 w-12 h-1 bg-[#b38e44]"></div>
                      <p className="text-white/60 text-[10px] mt-4 uppercase font-black tracking-widest md:hidden animate-pulse">
                        Tap to reveal
                      </p>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className="absolute inset-0 h-full w-full rounded-2xl bg-[#fdfaf5] dark:bg-slate-900 p-10 border border-[#b38e44]/20 shadow-2xl flex flex-col items-center justify-center text-center transition-colors duration-500 [backface-visibility:hidden]"
                    style={{ transform: "rotateY(180deg)" }}
                  >
                    <div className="text-[#b38e44] mb-4 opacity-50">
                      {item.icon}
                    </div>
                    <h3 className="text-[#b38e44] text-2xl font-bold mb-6">
                      {item.title}
                    </h3>
                    <p className="text-slate-800 dark:text-gray-200 font-bold leading-relaxed mb-8 text-[15px] md:text-[17px] transition-colors">
                      {item.desc}
                    </p>

                    {/* Button Link: stopPropagation prevents double flip */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="w-full"
                    >
                      {item.isDownload ? (
                        <a
                          href={item.pdfpath}
                          download="MIBC-Brochure.pdf"
                          className="w-full bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-8 py-3 rounded-md font-bold uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-lg inline-block"
                        >
                          {item.buttonText}
                        </a>
                      ) : (
                        <Link
                          to={item.pdfpath}
                          className="w-full bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-8 py-3 rounded-md font-bold uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-lg inline-block"
                        >
                          {item.buttonText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LATEST NEWS SECTION --- */}
      <section className="py-24 bg-white dark:bg-slate-950 px-4 md:px-8 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-[#fdf8ec] dark:bg-[#A98842]/10 text-[#b38e44] text-[10px] font-bold uppercase tracking-[0.2em] rounded mb-3 transition-colors">
              Latest News
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors">
              Latest News From The Digital World
            </h2>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                date: "10 Dec 2021",
                title:
                  "The Nearshoring Opportunity: Indian IT in the USMCA Corridor",
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600",
                link: "/news/nearshoring-opportunity",
              },
              {
                id: 2,
                date: "30 Nov 2021",
                title:
                  "From Tequila to Tech: Driving the México–India Partnership",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
                link: "/news/tequila-to-tech",
              },
              {
                id: 3,
                date: "12 Oct 2021",
                title: "Why México is India's Gateway to North America",
                img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=600",
                link: "/news/mexico-gateway",
              },
            ].map((post) => (
              <Link
                key={post.id}
                to={post.link}
                className="group bg-[#f8faff] dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full border border-gray-100 dark:border-slate-800"
              >
                {/* Image Container with Hover Zoom */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-[#0056b3] dark:text-[#A98842] text-xs font-medium mb-4 uppercase tracking-wider transition-colors">
                    {post.date}
                  </p>
                  <h3 className="text-xl font-bold text-[#001f3f] dark:text-white leading-snug mb-6 flex-grow transition-colors group-hover:text-[#b38e44] dark:group-hover:text-[#b38e44]">
                    {post.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-[#b38e44] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
