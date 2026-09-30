import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Swiper CSS imports
import "swiper/css";
import "swiper/css/pagination";

const TequilaEventsPopup = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // 🔴 PRODUCTION MODE: Session storage check karega.
  // Agar user ne cut (X) kar diya hai, toh wapas nahi khulega current session me.
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("mibc_tequila_popup_seen");
    
    if (!hasSeenPopup) {
      setIsOpen(true); // Instant open on first visit
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("mibc_tequila_popup_seen", "true"); // Cut karte hi session memory me save ho jayega
  };

  // Tequila Specific Event Data
  const tequilaEvents = [
    {
      id: 1,
      image: "/Tequila_img/rubi-martin-1.PNG",
      title: t("teq_pop_e1_title", "Premium Tequila Tasting & Networking"),
      location: t("teq_pop_e1_loc", "Mumbai, India"),
      date: t("teq_pop_e1_date", "Nov 28, 2025"),
      desc: t("teq_pop_e1_desc", "An exclusive evening introducing authentic Mexican Tequila to India's top hospitality leaders, mixologists, and F&B directors."),
    },
    {
      id: 2,
      image: "/Tequila_img/new-pic-1.PNG",
      title: t("teq_pop_e2_title", "B2B Matchmaking with Importers"),
      location: t("teq_pop_e2_loc", "Mumbai, India"),
      date: t("teq_pop_e2_date", "Dec 10, 2025"),
      desc: t("teq_pop_e2_desc", "Dedicated B2B sessions connecting premium Mexican Tequila brands with India's leading spirits distributors and importers."),
    },
    {
      id: 3,
      image: "/Tequila_img/dianaa.PNG",
      title: t("teq_pop_e3_title", "Agave Masterclass & Education"),
      location: t("teq_pop_e3_loc", "Bhopal, India"),
      date: t("teq_pop_e3_date", "Jan 15, 2026"),
      desc: t("teq_pop_e3_desc", "A deep-dive educational session on the heritage, production processes, and tasting profiles of 100% Blue Agave Tequila."),
    },
    {
      id: 4,
      image: "/Tequila_img/c5f6c971-7df3-418f-af50-79af8e979393.jpg",
      title: t("teq_pop_e4_title", "Tequila Accelerator Launch Gala"),
      date: t("teq_pop_e4_date", "Feb 05, 2026"),
      location: t("teq_pop_e4_loc", "Mumbai, India"),
      desc: t("teq_pop_e4_desc", "The official launch of the MIBC Tequila Accelerator, celebrating bilateral trade expansion in the premium beverage sector."),
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={handleClose} 
        >
          <motion.div
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()} 
            className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[24px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative border border-gray-100 dark:border-slate-800"
          >
            {/* RECENT EVENTS HEADING BAR */}
            <div className="bg-[#eae9e3] text-[#A98842] text-center py-3 font-black text-sm uppercase tracking-[0.3em] border-b border-[#A98842]/20">
              {t("teq_pop_recent_heading", "Recently Hosted Events")}
            </div>

            {/* CROSS (X) BUTTON */}
            <button
              onClick={handleClose}
              className="absolute top-14 right-4 z-50 bg-black/50 hover:bg-[#A98842] text-white p-2 rounded-full backdrop-blur-md transition-colors shadow-lg"
              title="Close"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full popup-swiper"
            >
              {tequilaEvents.map((event) => (
                <SwiperSlide key={event.id}>
                  <div className="flex flex-col h-full">
                    {/* Image Section - Height kept at h-72 */}
                    <div className="relative h-72 w-full">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Date & Location Over Image */}
                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center text-white text-sm font-medium">
                        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-md backdrop-blur-sm">
                          <Calendar size={16} className="text-[#A98842]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-md backdrop-blur-sm">
                          <MapPin size={16} className="text-[#A98842]" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-10 text-center bg-white dark:bg-slate-900">
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-[15px] md:text-base leading-relaxed mb-8 font-medium h-[60px] flex items-center justify-center">
                        {event.desc}
                      </p>
                      <Link 
                        to="/events-gallery" 
                        onClick={handleClose}
                        className="inline-block bg-[#1a1a1a] dark:bg-white text-white dark:text-black hover:bg-[#A98842] dark:hover:bg-[#A98842] hover:text-white px-10 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
                      >
                        {t("teq_pop_btn", "View Gallery")}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Styles for Pagination */}
            <style dangerouslySetInnerHTML={{
              __html: `
                .popup-swiper .swiper-pagination-bullet { background: #ffffff; opacity: 0.5; }
                .popup-swiper .swiper-pagination-bullet-active { background: #A98842; opacity: 1; width: 20px; border-radius: 10px; }
                .popup-swiper .swiper-pagination { bottom: 42% !important; }
              `
            }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TequilaEventsPopup;