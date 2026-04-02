import React from "react";
import {
  Briefcase,
  Globe,
  Truck,
  Scale,
  Users,
  LineChart,
  Award,
  Flag,
  Link as LinkIcon,
} from "lucide-react";

// Assets Import
// NOTE: Make sure MembershipHero is a video file path now
import MembershipHero from "../assets/videos/membership_video.mp4";
import IndianCo from "../assets/images/membership/import-export.jpeg";
import MexicanCo from "../assets/images/membership/Mexican-compony.jpeg";
import Exporters from "../assets/images/membership/import-export.jpeg";
import ProfFirms from "../assets/images/membership/proffetional_firms.jpeg";
import EcoPlayers from "../assets/images/membership/players.jpeg";
import IntelImg from "../assets/images/membership/intelligance.jpeg";
import AccessImg from "../assets/images/membership/rountable.jpg";
import InfluenceImg from "../assets/images/membership/Policy.jpeg";
import SupportImg from "../assets/images/membership/support.jpeg";
import { Link } from "react-router-dom";

const Membership = () => {
  const content = {
    hero: {
      title: "Join The Network",
      desc: "MIBC membership connects you with institutional infrastructure, commercial intelligence, and government relationships that define success in the México–India corridor.",
    },
    targetAudience: [
      {
        title: "Indian Companies",
        desc: "With México operations or expansion interest",
        img: IndianCo,
        icon: <Briefcase size={32} />,
      },
      {
        title: "Mexican Companies",
        desc: "With India operations or expansion plans",
        img: MexicanCo,
        icon: <Globe size={32} />,
      },
      {
        title: "Exporters & Importers",
        desc: "Actively engaged in bilateral trade",
        img: Exporters,
        icon: <Truck size={32} />,
      },
      {
        title: "Professional Firms",
        desc: "Legal, accounting, logistics, banking & compliance",
        img: ProfFirms,
        icon: <Scale size={32} />,
      },
      {
        title: "Trade Ecosystem Players",
        desc: "Organizations supporting corridor commerce",
        img: EcoPlayers,
        icon: <Users size={32} />,
      },
    ],
    benefits: [
      {
        title: "Intelligence",
        desc: "Market research, trade analysis, quarterly briefings, regulatory updates",
        img: IntelImg,
        icon: <LineChart size={36} />,
      },
      {
        title: "Access",
        desc: "CEO roundtables, ministerial meetings & trade delegations",
        img: AccessImg,
        icon: <Award size={36} />,
      },
      {
        title: "Influence",
        desc: "Policy advocacy & government representation",
        img: InfluenceImg,
        icon: <Flag size={36} />,
      },
      {
        title: "Support",
        desc: "Matchmaking, introductions, trade documentation & discounts",
        img: SupportImg,
        icon: <LinkIcon size={36} />,
      },
    ],
    journey: [
      {
        step: "1",
        title: "Submit Inquiry",
        desc: "Complete the membership inquiry form",
        color: "bg-blue-50 dark:bg-blue-900/30",
      },
      {
        step: "2",
        title: "Intro Call",
        desc: "Introductory call with MIBC team",
        color: "bg-red-50 dark:bg-red-900/30",
      },
      {
        step: "3",
        title: "Committee Review",
        desc: "Membership committee evaluation",
        color: "bg-purple-50 dark:bg-purple-900/30",
      },
      {
        step: "4",
        title: "Welcome",
        desc: "Onboarding & activation",
        color: "bg-pink-50 dark:bg-pink-900/30",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 font-sans transition-colors duration-500">
      {/* --- SECTION 1: VIDEO HERO --- */}
      <section className="relative h-[600px] md:h-[750px] flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={MembershipHero} type="video/mp4" />
          </video>
          {/* Backdrop Blur + Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <span className="bg-white dark:bg-slate-900 text-[#A98842] px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.3em] mb-8 inline-block shadow-2xl animate-fade-in transition-colors">
            Membership
          </span>
          <h1 className="text-white text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight drop-shadow-2xl transition-colors">
            {content.hero.title}
          </h1>
          <p className="max-w-3xl mx-auto text-gray-200 text-lg md:text-2xl font-medium leading-relaxed mb-12 opacity-90 drop-shadow-lg transition-colors">
            {content.hero.desc}
          </p>
          <button className="bg-[#A98842] hover:bg-[#b38e44] text-white px-12 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(179,142,68,0.4)] active:scale-95">
            <Link to="/membership-plans" className="text-white no-underline">
              Apply for Membership →
            </Link>
          </button>
        </div>
      </section>

      {/* --- SECTION 2: WHO SHOULD JOIN --- */}
      <section className="py-24 px-4 transition-colors duration-500">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-[#A98842] text-[11px] font-black tracking-widest uppercase bg-[#FFF9E6] dark:bg-[#A98842]/20 px-4 py-1 rounded-md transition-colors">
              Who Should Join
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mt-4 tracking-tight transition-colors">
              This Membership Is Built For
            </h2>
          </div>

          {/* Pehli Row: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {content.targetAudience.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="relative rounded-[40px] overflow-hidden h-72 group shadow-lg"
              >
                <img
                  src={item.img}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500 group-hover:bg-black/40">
                  <div className="text-[#A98842] mb-4 transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-3xl font-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-[15px] font-medium leading-relaxed max-w-[250px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dusri Row: 2 Columns (Center Aligned) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[90%] mx-auto">
            {content.targetAudience.slice(3, 5).map((item, i) => (
              <div
                key={i}
                className="relative rounded-[40px] overflow-hidden h-72 group shadow-lg"
              >
                <img
                  src={item.img}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500 group-hover:bg-black/40">
                  <div className="text-[#A98842] mb-4 transform group-hover:scale-110 transition-transform duration-1000">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-3xl font-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-[15px] font-medium leading-relaxed max-w-[250px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: WHAT YOU GAIN --- */}
      <section className="py-24 bg-white dark:bg-slate-900 px-4 border-y border-gray-100 dark:border-slate-800 transition-colors duration-500">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[#A98842] text-[11px] font-black tracking-widest uppercase bg-[#FFF9E6] dark:bg-[#A98842]/20 px-4 py-1 rounded-md transition-colors">
              Member Benefits
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mt-4 tracking-tight transition-colors">
              What You Gain
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.benefits.map((benefit, i) => (
              <div
                key={i}
                className="relative rounded-[40px] overflow-hidden h-[400px] group shadow-2xl border border-gray-50 dark:border-slate-800 transition-colors"
              >
                <img
                  src={benefit.img}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={benefit.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-end p-10 text-center pb-16 transition-all duration-500 group-hover:from-black group-hover:via-black/70">
                  <div className="text-[#A98842] mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                    {benefit.icon}
                  </div>
                  <h3 className="text-white text-3xl font-black mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200 text-[14px] font-medium leading-loose opacity-90">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: JOURNEY --- */}
      <section className="py-32 px-4 relative overflow-hidden transition-colors duration-500">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A98842]/5 rounded-full blur-[100px] -z-10 transition-colors"></div>

        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24">
            <span className="bg-[#FFF9E6] dark:bg-[#A98842]/20 text-[#A98842] px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] shadow-sm transition-colors">
              How To Apply
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mt-8 tracking-tighter transition-colors">
              Your Membership Journey
            </h2>
          </div>

          {/* Journey Container */}
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-16 md:gap-4 px-6 md:px-12">
            {/* Horizontal Connector Line (Visible only on Desktop) */}
            <div className="hidden md:block absolute top-[88px] left-[10%] right-[10%] h-[2px] bg-gray-200 dark:bg-slate-700 -z-0 transition-colors"></div>

            {content.journey.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center max-w-[220px] group relative z-10"
              >
                {/* Circle Step */}
                <div
                  className={`w-40 h-40 md:w-44 md:h-44 rounded-full ${item.color} flex items-center justify-center mb-10 border-8 border-[#faf9f6] dark:border-slate-950 shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[#A98842]/20`}
                >
                  <span className="text-6xl md:text-7xl font-black text-[#A98842]/30 group-hover:text-[#A98842] transition-colors duration-500">
                    {item.step}
                  </span>
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-black text-gray-950 dark:text-white mb-4 transition-colors group-hover:text-[#A98842]">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-[15px] font-medium leading-relaxed opacity-80 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-24">
            <Link to="/membership-plans">
              <button className="bg-[#A98842] hover:bg-[#b38e44] text-white px-16 py-5 rounded-[20px] font-black text-base uppercase tracking-widest shadow-[0_30px_60px_rgba(179,142,68,0.3)] transition-all hover:-translate-y-2 active:scale-95">
                Apply for Membership →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll to Top placeholder style */}
      <div 
        className="fixed bottom-10 right-10 w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur shadow-xl rounded-full flex items-center justify-center cursor-pointer border border-gray-100 dark:border-slate-700 text-[#A98842] hover:bg-[#A98842] hover:text-white transition-all z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-xl font-bold">↑</span>
      </div>
    </div>
  );
};

export default Membership;