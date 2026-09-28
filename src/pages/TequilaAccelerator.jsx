import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api"; // <-- Aapka axios instance yahan import kiya hai
import logo from "../assets/images/logo/logo-dark.png";

const Navbar = () => {
  return (
    <nav className="bg-white w-full px-6 md:px-12 py-4 flex justify-between items-center z-50 relative shadow-sm">
      <div className="flex-shrink-0">
        <Link to="/" className="flex items-center">
          <img
            className={`h-10 md:h-12 w-auto transition-all duration-500`}
            src={logo}
            alt="MIBC Logo"
          />
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-10">
        <Link
          to="/"
          className="text-[#a8813f] font-semibold text-sm hover:opacity-80 transition-opacity"
        >
          Home
        </Link>

        <Link
          to="/cohort-dashboard"
          className="text-gray-800 font-semibold text-sm hover:text-[#a8813f] transition-colors"
        >
          Cohort
        </Link>

        <Link
          to="/membership"
          className="text-gray-800 font-semibold text-sm hover:text-[#a8813f] transition-colors"
        >
          Membership
        </Link>

        <Link
          to="/contact"
          className="text-gray-800 font-semibold text-sm hover:text-[#a8813f] transition-colors"
        >
          Contact
        </Link>
      </div>
      <div className="hidden md:block">
        <button className="bg-[#a8813f] hover:bg-[#8f6d35] text-white px-8 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-md">
          JOIN MIBC
        </button>
      </div>
      <button className="lg:hidden text-gray-900 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
};

const Hero = () => {
  return (
    <main className="relative w-full h-[calc(100vh-84px)] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/TEQUILA (1).mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}
      </div>
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl mx-auto">
        <div className="border border-[#a8813f] text-[#a8813f] text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8 bg-[#a8813f]/10 backdrop-blur-sm">
          Flagship Program
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#a8813f] mb-6 tracking-tight">
          Tequila Accelerator
        </h2>
        <p className="text-gray-100 max-w-4xl text-base md:text-lg lg:text-xl leading-relaxed mb-12 font-medium drop-shadow-md">
          Accelerate Your Entry into India's Premium Spirits Market.
          Institutional-grade market access for authentic Mexican Tequila brands
          through government relationships, regulatory expertise, and qualified
          distribution partnerships.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <button className="bg-[#a8813f] hover:bg-[#8f6d35] text-white px-10 py-3.5 rounded-md text-base font-semibold transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
            Contact US
          </button>
          <button className="border-2 border-[#a8813f] text-[#a8813f] hover:bg-[#a8813f]/10 px-10 py-3.5 rounded-md text-base font-semibold transition-all backdrop-blur-sm w-full sm:w-auto">
            Download Brochure
          </button>
        </div>
      </div>
    </main>
  );
};

const WhatWeDeliver = () => {
  const deliverData = [
    {
      title: "Market Intelligence",
      tag: "INSIGHTS",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
      items: [
        "Indian spirits market landscape and consumer segmentation",
        "Competitive positioning analysis",
        "Pricing strategy for Indian market",
        "Target channel identification (HoReCa, retail, e-commerce)",
      ],
    },
    {
      title: "Regulatory Navigation",
      tag: "COMPLIANCE",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      items: [
        "State-by-state licensing (28 states with unique excise laws)",
        "Import documentation and customs procedures",
        "Labelling and packaging compliance",
        "Excise registration and ongoing compliance",
      ],
    },
    {
      title: "Distribution & Partners",
      tag: "PARTNERS",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      items: [
        "Curated introductions to leading importers and distributors",
        "Hospitality partner connections (premium hotels, bars)",
        "First-client facilitation and handholding",
        "Contract negotiation support",
      ],
    },
    {
      title: "Brand Launch Support",
      tag: "LAUNCH",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
      items: [
        "Launch event coordination in key metros",
        "Trade and consumer outreach",
        "Media and influencer connections",
        "Ongoing market development support",
      ],
    },
  ];

  return (
    <section className="bg-[#FAF9F6] py-20 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            What We Deliver
          </h2>
          <p className="text-gray-600 text-[17px] leading-relaxed">
            The Tequila Accelerator collapses typical{" "}
            <span className="text-[#a8813f] font-bold">18-24 month</span> market
            entry timelines into a focused{" "}
            <span className="text-[#a8813f] font-bold">2-3 month</span>{" "}
            accelerated execution program. By leveraging MIBC's government
            relationships, distributor networks, and operational expertise,
            participating brands gain rapid market access with reduced risk and
            investment.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {deliverData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#a8813f] flex items-center justify-center shadow-lg shadow-[#a8813f]/20">
                  {card.icon}
                </div>
                <span className="bg-[#FAF4EB] text-[#a8813f] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                  {card.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#333333] mb-6">
                {card.title}
              </h3>
              <div className="space-y-3">
                {card.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start border border-gray-100/80 rounded-xl p-4 bg-white hover:border-[#a8813f]/40 hover:bg-[#FAF4EB]/30 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-[#a8813f] mt-0.5 mr-3 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 text-[15px] font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timelineData = [
    {
      phase: "Weeks 1–3: Market Assessment & Strategy",
      align: "left",
      items: [
        {
          title: "Comprehensive Market Report:",
          desc: "India spirits market overview, tequila category analysis, competitive landscape, and consumer insights",
        },
        {
          title: "State-Level Opportunity Matrix:",
          desc: "Priority state identification based on market size, regulatory complexity, and entry barriers",
        },
        {
          title: "Pricing & Positioning Strategy:",
          desc: "Recommended retail pricing, channel strategy, and competitive positioning framework",
        },
        {
          title: "Regulatory Compliance Roadmap:",
          desc: "State-by-state licensing requirements, documentation checklists, and compliance timelines",
        },
      ],
    },
    {
      phase: "Weeks 4–6: Partner Identification & Engagement",
      align: "right",
      items: [
        {
          title: "Distributor Shortlist:",
          desc: "Curated list of 8-10 qualified importers/distributors with track records in premium spirits",
        },
        {
          title: "Facilitated Introductions:",
          desc: "Organized meetings with shortlisted partners, including MIBC-led presentations and due diligence support",
        },
        {
          title: "Partnership Negotiation:",
          desc: "Contract review, commercial terms negotiation, and partnership structuring advisory",
        },
        {
          title: "Hospitality Partnerships:",
          desc: "Introductions to premium hotels, restaurants, and bars for initial placement",
        },
      ],
    },
    {
      phase: "Weeks 7–10: Regulatory Execution & Launch Preparation",
      align: "left",
      items: [
        {
          title: "License Applications:",
          desc: "FL-I license applications filed in priority states with MIBC liaison support",
        },
        {
          title: "Import Documentation:",
          desc: "Complete import paperwork, customs clearance coordination, and first shipment facilitation",
        },
        {
          title: "Label Approvals:",
          desc: "State-specific label designs submitted and approved across target markets",
        },
        {
          title: "Launch Event Planning:",
          desc: "Brand launch event design, venue selection, guest list development, and media coordination",
        },
      ],
    },
    {
      phase: "Weeks 11–12: Market Launch",
      align: "right",
      items: [
        {
          title: "Brand Launch Events:",
          desc: "Execution of launch events in Mumbai, Delhi, and Bangalore with trade and media presence",
        },
        {
          title: "Channel Activation:",
          desc: "Point-of-sale materials deployment, staff training coordination, and promotional campaign launch",
        },
        {
          title: "Media & Influencer Engagement:",
          desc: "Press releases, social media campaigns, and influencer partnerships",
        },
        {
          title: "Post-Launch Advisory:",
          desc: "3-month advisory support for performance optimization and market expansion planning",
        },
      ],
    },
  ];

  return (
    <section className="bg-[#FAF9F6] py-24 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Timeline & Deliverables
          </h2>
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Accelerated 2–3 Month Program Structure
          </h3>
          <p className="text-gray-500 text-base leading-relaxed max-w-3xl mx-auto">
            Unlike traditional market entry consultancies that require 18–24
            months, the Tequila Accelerator delivers focused, outcome-driven
            execution in 2–3 months through MIBC's institutional networks and
            pre-established relationships.
          </p>
        </motion.div>

        <div className="relative w-full">
          {/* Center Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#d5c3a1] transform md:-translate-x-1/2 rounded-full"></div>

          {/* Timeline Nodes & Cards */}
          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                  item.align === "left" ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Empty space for desktop layout balancing */}
                <div className="hidden md:block md:w-[45%]"></div>

                {/* Timeline Circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF9F6] border-[3px] border-[#e4d4b6] z-10 shadow-sm"
                >
                  <div className="w-2.5 h-2.5 bg-[#a8813f] rounded-full"></div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: item.align === "left" ? -50 : 50,
                    y: 20,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full md:w-[45%] pl-20 md:pl-0"
                >
                  <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 relative hover:shadow-md transition-shadow">
                    {/* Directional Arrow (Triangle) */}
                    <div
                      className={`absolute top-8 w-5 h-5 bg-white transform rotate-45 border-gray-100 
                        -left-2.5 border-b border-l 
                        md:top-1/2 md:-translate-y-1/2
                        ${
                          item.align === "left"
                            ? "md:left-auto md:-right-2.5 md:border-t md:border-r md:border-b-0 md:border-l-0"
                            : "md:-left-2.5"
                        }
                      `}
                    ></div>

                    <h4 className="text-xl font-extrabold text-gray-900 mb-6">
                      {item.phase}
                    </h4>
                    <ul className="space-y-5">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a8813f] mt-2 mr-3 shrink-0"></span>
                          <p className="text-gray-500 text-[15px] leading-relaxed">
                            <strong className="text-gray-900 font-semibold mr-1">
                              {listItem.title}
                            </strong>
                            {listItem.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const QuestionnairesSection = () => {
  const cards = [
    {
      title: "Initial Questionnaire",
      desc: "Basic company details, product categories, and export readiness check.",
      linkText: "Start Assessment",
      highlighted: false,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Phase 1 Questionnaire",
      desc: "Detailed product SKUs, pricing, production capacity, and compliance.",
      linkText: "Start Phase 1",
      highlighted: true,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Phase 2 Questionnaire",
      desc: "Execution, distribution partnerships, and brand launch preparation.",
      linkText: "Start Phase 2",
      highlighted: false,
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#FAF9F6] py-24 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="bg-[#FAF4EB] text-[#a8813f] text-[10px] md:text-xs font-bold px-4 py-2 rounded-full uppercase tracking-[0.15em] mb-6 inline-block">
            Program Enrollment
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight mt-2">
            Application Questionnaires
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Select the appropriate phase below. You will be redirected to the
            dedicated portal to complete your application securely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={`bg-white rounded-2xl p-10 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                card.highlighted
                  ? "shadow-xl border-t-4 border-t-[#a8813f] scale-[1.02] z-10"
                  : "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg"
              }`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 shadow-sm ${
                  card.highlighted
                    ? "bg-[#a8813f] text-white"
                    : "bg-[#FAF4EB] text-[#a8813f]"
                }`}
              >
                {card.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow">
                {card.desc}
              </p>

              <button
                className={`text-sm font-bold flex items-center gap-2 group ${
                  card.highlighted ? "text-gray-900" : "text-[#a8813f]"
                }`}
              >
                {card.linkText}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StrategicConnectSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Aap yahan apni 3-4 images ke URLs daal sakte hain
  const images = [
    "https://images.unsplash.com/photo-1609832785678-831e67e3740e?q=80&w=1000&auto=format&fit=crop", // Placeholder 1
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop", // Placeholder 2
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop", // Placeholder 3
  ];

  // Auto-slide logic for 2 seconds (2000 ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  const listItems = [
    "Market Entry Strategy",
    "Regulatory & Compliance Guidance",
    "Distribution Partner Identification",
    "Long-Term Growth & Expansion Plan",
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#FAF4EB] text-[#a8813f] text-[10px] md:text-xs font-bold px-4 py-2 rounded-full uppercase tracking-[0.15em] mb-4 inline-block">
            Engagements & Networking
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight mt-2">
            Strategic Connect Programs
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Facilitating high-level bilateral trade through tailored
            engagements.
          </p>
        </div>

        {/* Content Section - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="w-12 h-12 bg-[#1C1F26] rounded-xl flex items-center justify-center mb-6 shadow-md">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
              Exclusive One-on-One <br /> Engagements
            </h3>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              Our one-on-one consultation focused on understanding the company's
              vision and identifying the best pathway for entering the Indian
              market. Together, we discussed market opportunities, regulatory
              requirements, distribution strategies, and long-term business
              growth to build a customised roadmap for success.
            </p>

            <ul className="space-y-4">
              {listItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 text-[14px] font-medium"
                >
                  <svg
                    className="w-5 h-5 text-[#a8813f] mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100 border-4 border-white"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Engagement meeting ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Simple Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "bg-[#a8813f] w-4"
                      : "bg-white/70"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InteractiveSessionsSection = () => {
  const listItems = [
    "High-visibility brand presentations",
    "Panel discussions with industry experts",
    "Open networking and tasting events",
  ];

  return (
    <section className="bg-[#FAF9F6] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Image with Hover Zoom */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer border-4 border-white"
        >
          {/* Black overlay jo hover par hat jayegi, isse effect aur acha lagta hai */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>

          {/* Main image - group-hover:scale-110 se image badi hogi */}
          <img
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop"
            alt="Interactive Group Sessions"
            className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        </motion.div>

        {/* Right Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Dark Mic Icon Box */}
          <div className="w-12 h-12 bg-[#1C1F26] rounded-xl flex items-center justify-center mb-6 shadow-md">
            <svg
              className="w-6 h-6 text-[#a8813f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11v1a7 7 0 01-14 0v-1m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10M12 19v3m0 0h3m-3 0H9"
              />
            </svg>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 leading-snug">
            Interactive Group Sessions
          </h3>

          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            Large-scale seminars, brand showcases, and networking mixers
            designed to connect you with a broader audience of distributors,
            hospitality partners, and industry leaders. These high-energy
            sessions are perfect for amplifying brand visibility and launching
            new initiatives in the Indian market.
          </p>

          <ul className="space-y-4">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-gray-600 text-[14px] font-medium leading-relaxed"
              >
                <svg
                  className="w-5 h-5 text-[#a8813f] mr-3 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const ContactFormSection = () => {
  // Form ke inputs ka state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  // Loading, Success, aur Error ka state
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset status & set loading
    setStatus({ loading: true, success: "", error: "" });

    try {
      // Axios instance ka use karke POST request
      const response = await api.post('/api/Membership_Query', formData);
      const result = response.data;

      if (result.success) {
        // Success state aur form clear karna
        setStatus({
          loading: false,
          success: "✅ " + result.message,
          error: "",
        });
        setFormData({ name: "", phone: "", email: "", company: "", message: "" });
        
        // 5 second baad success message hata dena
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: "" }));
        }, 5000);
      } else {
        setStatus({
          loading: false,
          success: "",
          error: "❌ " + (result.error || "Something went wrong."),
        });
      }
    } catch (err) {
      console.error("Submission Error:", err);
      const errorMsg = err.response?.data?.error || "Network error. Please try again later.";
      setStatus({
        loading: false,
        success: "",
        error: "❌ " + errorMsg,
      });
    }
  };

  return (
    <section className="bg-white py-24 px-4 md:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="bg-[#FAF4EB] text-[#a8813f] text-[10px] md:text-xs font-bold px-4 py-2 rounded-full uppercase tracking-[0.15em] mb-6 inline-block">
            CONTACT FORM
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight mt-2">
            Application Request for the Accelerator.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Fill out the form below to request program terms, investment
            requirements, and start your enrollment process.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Status Messages Show Karne Ke Liye */}
          {status.success && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 text-sm font-semibold rounded-xl text-center border border-green-200">
              {status.success}
            </div>
          )}
          {status.error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm font-semibold rounded-xl text-center border border-red-200">
              {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#a8813f] focus:ring-1 focus:ring-[#a8813f] outline-none transition-all text-gray-700 placeholder-gray-400 bg-white"
              />
            </div>
            <div className="w-full">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#a8813f] focus:ring-1 focus:ring-[#a8813f] outline-none transition-all text-gray-700 placeholder-gray-400 bg-white"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#a8813f] focus:ring-1 focus:ring-[#a8813f] outline-none transition-all text-gray-700 placeholder-gray-400 bg-white"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Brand / Company Name"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#a8813f] focus:ring-1 focus:ring-[#a8813f] outline-none transition-all text-gray-700 placeholder-gray-400 bg-white"
              />
            </div>
            <div className="w-full">
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#a8813f] focus:ring-1 focus:ring-[#a8813f] outline-none transition-all text-gray-700 placeholder-gray-400 bg-white resize-none"
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={status.loading}
                className="bg-[#A48655] hover:bg-[#8f6d35] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.loading ? "Submitting... ⏳" : "Submit Now"}
              </button>
            </div>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Hero />
      <WhatWeDeliver />
      <TimelineSection />
      <QuestionnairesSection />
      <StrategicConnectSection />
      <InteractiveSessionsSection />
      <ContactFormSection />
    </div>
  );
};

export default App;
