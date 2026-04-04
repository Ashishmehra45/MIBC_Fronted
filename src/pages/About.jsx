import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Activity, Tv, Map, Landmark, Users, BarChart3 } from "lucide-react";

import Bgimg from "../assets/images/bg/about.jpg";
import CEOImg from "../assets/images/team/raviSir.png";
import ndLeaderImg from "../assets/images/team/max.jpg";

import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const leadershipData = [
    {
      name: "Ravi K. Tiwari",
      title: "CHIEF EXECUTIVE OFFICER",
      quote:
        "“The Indo-Mexican economic partnership continues to evolve as businesses from both countries explore new opportunities in trade, investment, and innovation.”",
      image: CEOImg,
    },
    {
      name: "Rodrigo Pérez",
      title: "Director",
      quote:
        "“Our mission is to provide world-class business solutions and foster international collaboration to drive sustainable growth across diverse industries.”",
      image: ndLeaderImg,
    },
  ];

  const features = [
    {
      title: "VISION",
      icon: <Activity className="w-12 h-12 stroke-[1.5px]" />,
      desc: "To establish the México–India corridor as a strategic platform for bilateral trade and investment, enabling sustained commercial growth and institutional collaboration between two of the world's most dynamic emerging economies.",
      delay: "0",
    },
    {
      title: "MISSION",
      icon: <Tv className="w-12 h-12 stroke-[1.5px]" />,
      desc: "To serve as the institutional platform for México–India commercial engagement by providing intelligence-driven deal facilitation, government coordination, and market entry support to enterprises of both nations.",
      isGold: true,
      delay: "100",
    },
    {
      title: "OUR EDGE",
      icon: <Map className="w-12 h-12 stroke-[1.5px]" />,
      desc: "MIBC is the only dedicated business council headquartered in India. Led by a CEO with 15 years of bilateral trade and investment leadership across three governments, we provide institutional credibility and operational networks that traditional consultants cannot replicate.",
      delay: "200",
    },
  ];

  const foundationData = {
    badge: "What Sets Us Apart",
    title: "Our Institutional Foundation",
    desc: "MIBC operates through direct coordination with government stakeholders and institutional partners in both nations—delivering credibility, access, and execution that traditional consultants cannot replicate.",
    cards: [
      {
        title: "Government Coordination",
        icon: "Landmark",
        points: [
          "Established with support of the Consulate General of México in Mumbai",
          "Recognized platform by Government of India ministries and state agencies",
          "Direct liaison with Embassy of México in New Delhi",
        ],
      },
      {
        title: "Strategic Partnerships",
        icon: "Users",
        points: [
          "Consejo Regulador del Tequila (CRT) — Tequila Accelerator Program",
          "IndiaMexico Business Chamber (IMBC) — Joint program delivery",
          "Industry associations: CANIFARMA, CANIETI, CII, FICCI",
        ],
      },
      {
        title: "Proven Track Record",
        icon: "BarChart3",
        points: [
          "Over USD 500M in facilitated investment leads (2011–2025)",
          "1st India–México Economic Partnership Forum (Mumbai, Dec 2025)",
          "Active programs across IT, Pharma, and Automotive",
        ],
      },
    ],
  };

  const corridorData = {
    title: "WHY THIS CORRIDOR MATTERS",
    highlight: "NOW?",
    subtext:
      "Global supply chains are restructuring. India is pursuing China+1 diversification, while México captures nearshoring investments. The timing for México–India collaboration has never been stronger.",
    cards: [
      {
        title: "Nearshoring Boom",
        icon: "🏗️",
        desc: "Global manufacturers relocating to México for seamless USMCA market access.",
      },
      {
        title: "India's Ambition",
        icon: "🚀",
        desc: "Targeting the USD 30T North American market via México's strategic location.",
      },
      {
        title: "Policy Alignment",
        icon: "⚖️",
        desc: "Both governments actively promoting and securing bilateral engagement",
        isHighlighted: true,
      },
      {
        title: "Untapped Potential",
        icon: "📈",
        desc: "Growing from USD 12B trade today to USD 50B+ potential by 2030.",
      },
    ],
    footer: {
      brand: "MIBC",
      text: "exists to transform this moment into",
      outcome: "SUSTAINED COMMERCIAL OUTCOMES.",
    },
  };

  return (
    <div
      className="page-wrapper bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-500"
      style={{ overflow: "hidden" }}
    >
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
            About The Council
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold mt-4">
            The México–India <br />
            <span className="text-[#A98842]">Business Council</span>
          </h1>
        </div>
      </section>

      {/* INTRO TEXT SECTION */}
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div
            className="text-center max-w-5xl mx-auto "
            data-sal="slide-up"
          >
            <p className="text-gray-800 dark:text-gray-200 text-xl md:text-2xl leading-relaxed font-medium transition-colors">
              Established with the support of the Government of México and
              recognised by the Government of India, MIBC serves as the
              institutional platform for México–India commercial engagement.
              Operating at the intersection of policy and enterprise, the
              Council provides investment facilitation, market entry navigation,
              trade promotion, and government-coordinated delegation
              support—delivering the institutional infrastructure, commercial
              intelligence, and stakeholder access that define success in the
              bilateral corridor.
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
              Our Leadership
            </h2>
          </div>

          <div className="bg-[#f2f2f2] dark:bg-slate-900 rounded-[40px] p-10 md:p-10 relative shadow-sm leadership-slider-parent overflow-hidden transition-colors">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="leadership-swiper"
            >
              {leadershipData.map((leader, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                    {/* Image */}
                    <div className="relative shrink-0">
                      <div className="absolute -inset-2 bg-[#A98842]/20 rounded-3xl blur-xl"></div>
                      <div className="relative w-[280px] h-[360px] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl transition-colors">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="flex-1 text-left pl-0 md:pl-10 border-l-0 md:border-l-[4px] md:border-l-[#A98842]">
                      <p
                        className="text-gray-900 dark:text-gray-300 text-2xl font-light italic leading-relaxed mb-10 transition-colors"
                        style={{ fontFamily: "serif" }}
                      >
                        {leader.quote}
                      </p>
                      <div className="space-y-1">
                        <h4 className="text-gray-950 dark:text-white text-2xl font-bold transition-colors">
                          {leader.name}
                        </h4>
                        <p className="text-[#A98842] text-sm font-bold tracking-[0.2em] uppercase">
                          {leader.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white tracking-tight transition-colors">
              Our Vision, Mission & Edge
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
