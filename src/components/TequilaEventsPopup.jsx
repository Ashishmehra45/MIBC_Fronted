import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Swiper CSS imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const TequilaEventsPopup = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // 🔴 INSTANT OPEN LOGIC: Bina kisi delay ke turant open hoga
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("mibc_tequila_popup_seen");
    
    if (!hasSeenPopup) {
      setIsOpen(true); // Instant open
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("mibc_tequila_popup_seen", "true"); // Ek baar close karne pe session me wapas nahi aayega
  };

  // Tequila Specific Event Data based on Official Brochure Context
  const tequilaEvents = [
    {
      id: 1,
      image: "/Tequila_img/rubi-martin-1.PNG",
      title: t("teq_pop_e1_title", "Premium Tequila Tasting & B2B Matchmaking"),
      date: t("teq_pop_e1_date", "Nov 28, 2025"),
      location: t("teq_pop_e1_loc", "Mumbai, India"),
      desc: t("teq_pop_e1_desc", "An exclusive evening introducing authentic 100% Blue Agave Mexican Tequila to India's top hospitality leaders, mixologists, and curated importers."),
      highlight: t("teq_pop_e1_hl", "Connecting brands with top HoReCa partners"),
    },
    {
      id: 2,
      image: "/Tequila_img/new-pic-1.PNG",
      title: t("teq_pop_e2_title", "Regulatory & Licensing Masterclass"),
      date: t("teq_pop_e2_date", "Dec 10, 2025"),
      location: t("teq_pop_e2_loc", "New Delhi, India"),
      desc: t("teq_pop_e2_desc", "A deep-dive session navigating India's complex FL-I licensing, state-by-state excise regimes, and import customs procedures."),
      highlight: t("teq_pop_e2_hl", "Simplifying India's 28-state excise variability"),
    },
    {
      id: 3,
      image: "/Tequila_img/dianaa.PNG",
      title: t("teq_pop_e3_title", "India-México Spirits Trade Mission"),
      date: t("teq_pop_e3_date", "Jan 15, 2026"),
      location: t("teq_pop_e3_loc", "Bangalore, India"),
      desc: t("teq_pop_e3_desc", "Direct engagement with local banking networks, VC networks, and leading spirits distributors to establish long-term market presence."),
      highlight: t("teq_pop_e3_hl", "Reducing entry time from 24 to 3 months"),
    },
    {
      id: 4,
      image: "/Tequila_img/c5f6c971-7df3-418f-af50-79af8e979393.jpg",
      title: t("teq_pop_e4_title", "Tequila Accelerator Launch Gala"),
      date: t("teq_pop_e4_date", "Feb 05, 2026"),
      location: t("teq_pop_e4_loc", "Mumbai, India"),
      desc: t("teq_pop_e4_desc", "The official launch of the MIBC Tequila Accelerator, celebrating bilateral trade expansion and the growing USD 68.75B Indian alcohol market potential."),
      highlight: t("teq_pop_e4_hl", "Targeting India's premium beverage sector"),
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Background overlay: Ispe click karne se band hoga
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={handleClose} 
        >
          <motion.div
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()} // Popup ke content pe click karne se band nahi hoga
            // 🔴 SIZE BADA KIYA HAI: max-w-lg se max-w-2xl kar diya
            className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative border border-gray-100 dark:border-slate-800"
          >
            {/* 🔴 BIG CROSS (X) BUTTON */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-50 bg-black/40 hover:bg-[#A98842] text-white p-2.5 rounded-full backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-lg border border-white/20"
              title="Close"
            >
              <X size={22} strokeWidth={3} />
            </button>

            {/* Swiper Carousel with Fade Effect */}
            <Swiper
              modules={[Pagination, Autoplay, EffectFade]}
              effect="fade"
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full popup-swiper"
            >
              {tequilaEvents.map((event) => (
                <SwiperSlide key={event.id}>
                  <div className="flex flex-col h-full">
                    {/* Image Section (Thoda aur lamba kiya hai h-72) */}
                    <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      
                      {/* Top Badge */}
                      <div className="absolute top-5 left-5 bg-[#A98842] text-white text-[10px] font-black px-4 py-2 rounded-md uppercase tracking-[0.2em] shadow-lg border border-[#c2a35b]/30">
                        {t("teq_pop_badge", "Tequila Accelerator")}
                      </div>
                      
                      {/* Date & Location Over Image */}
                      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white text-[13px] font-semibold tracking-wide">
                        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                          <Calendar size={16} className="text-[#A98842]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                          <MapPin size={16} className="text-[#A98842]" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 sm:p-10 text-center bg-white dark:bg-slate-900 flex flex-col items-center">
                      <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
                        {event.title}
                      </h3>
                      
                      {/* Highlight Tag */}
                      <div className="bg-[#FAF4EB] dark:bg-[#A98842]/10 text-[#A98842] px-4 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-widest mb-4">
                        {event.highlight}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-[15px] sm:text-base leading-relaxed mb-8 font-medium max-w-xl">
                        {event.desc}
                      </p>
                      
                      <Link 
                        to="/events-gallery" 
                        onClick={handleClose}
                        className="group inline-flex items-center gap-2 bg-[#1a1a1a] dark:bg-white text-white dark:text-black hover:bg-[#A98842] dark:hover:bg-[#A98842] hover:text-white px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-[#A98842]/40 hover:-translate-y-1"
                      >
                        {t("teq_pop_btn", "Explore Program")}
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Styles for Pagination */}
            <style dangerouslySetInnerHTML={{
              __html: `
                .popup-swiper .swiper-pagination-bullet { background: #ffffff; opacity: 0.5; transition: all 0.3s ease; }
                .popup-swiper .swiper-pagination-bullet-active { background: #A98842; opacity: 1; width: 24px; border-radius: 12px; }
                .popup-swiper .swiper-pagination { bottom: 42% !important; z-index: 20; }
                @media (max-width: 640px) {
                   .popup-swiper .swiper-pagination { bottom: 45% !important; }
                }
              `
            }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TequilaEventsPopup;