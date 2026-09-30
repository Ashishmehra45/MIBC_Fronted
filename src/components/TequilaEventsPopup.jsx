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

  // 🔴 YAHAN CHANGE KIYA HAI: Bina kisi delay ke turant open hoga
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("mibc_tequila_popup_seen");
    
    if (!hasSeenPopup) {
      setIsOpen(true); // Instant open, koi timer nahi
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("mibc_tequila_popup_seen", "true"); // Ek baar close karne pe wapas nahi aayega
  };

  // Tequila Specific Event Data
  const tequilaEvents = [
    {
      id: 1,
      image: "/Tequila_img/rubi-martin-1.PNG",
      title: t("teq_pop_e1_title", "Premium Tequila Tasting & Networking"),
      date: t("teq_pop_e1_date", "Nov 28, 2025"),
      location: t("teq_pop_e1_loc", "Mumbai, India"),
      desc: t("teq_pop_e1_desc", "An exclusive evening introducing authentic Mexican Tequila to India's top hospitality leaders, mixologists, and F&B directors."),
    },
    {
      id: 2,
      image: "/Tequila_img/new-pic-1.PNG",
      title: t("teq_pop_e2_title", "B2B Matchmaking with Importers"),
      date: t("teq_pop_e2_date", "Dec 10, 2025"),
      location: t("teq_pop_e2_loc", "New Delhi, India"),
      desc: t("teq_pop_e2_desc", "Dedicated B2B sessions connecting premium Mexican Tequila brands with India's leading spirits distributors and importers."),
    },
    {
      id: 3,
      image: "/Tequila_img/dianaa.PNG",
      title: t("teq_pop_e3_title", "Agave Masterclass & Education"),
      date: t("teq_pop_e3_date", "Jan 15, 2026"),
      location: t("teq_pop_e3_loc", "Bangalore, India"),
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
          // Background overlay: Ispe click karne se bhi band ho jayega
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={handleClose} 
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()} // Popup ke content pe click karne se band nahi hoga
            className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[24px] overflow-hidden shadow-2xl relative border border-gray-100 dark:border-slate-800"
          >
            {/* 🔴 CROSS (X) BUTTON YAHAN HAI */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-[#A98842] text-white p-2 rounded-full backdrop-blur-md transition-colors shadow-lg"
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
                    {/* Image Section */}
                    <div className="relative h-64 w-full">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Top Badge */}
                      <div className="absolute top-4 left-4 bg-[#A98842] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                        {t("teq_pop_badge", "Tequila Accelerator")}
                      </div>
                      
                      {/* Date & Location Over Image */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs font-medium">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-[#A98842]" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-[#A98842]" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 text-center bg-white dark:bg-slate-900">
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 tracking-tight">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-medium h-[60px] flex items-center justify-center">
                        {event.desc}
                      </p>
                      <Link 
                        to="/events-gallery" 
                        onClick={handleClose}
                        className="inline-block bg-[#1a1a1a] dark:bg-white text-white dark:text-black hover:bg-[#A98842] dark:hover:bg-[#A98842] hover:text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
                      >
                        {t("teq_pop_btn", "View All Events")}
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
                .popup-swiper .swiper-pagination { bottom: 38% !important; }
              `
            }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TequilaEventsPopup;