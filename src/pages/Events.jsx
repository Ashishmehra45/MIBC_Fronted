import React from "react";
import { useTranslation } from "react-i18next"; // <-- 1. i18n Hook import kiya
import { Link } from "react-router-dom";

// Images import
import Event1 from "../assets/images/banner/it-events.jpg";
import Event2 from "../assets/images/banner/pharma-events.jpg";
import Event3 from "../assets/images/banner/automotive-events.jpg";
import CalendarImg from "../assets/images/banner/annualeventcalendar.jpg";

const Events = () => {
  const { t } = useTranslation(); // <-- 2. Hook initialize kiya

  const eventsContent = {
    title: t("evt_title", "Events"),
    subtitle: t("evt_subtitle", "Explore our events designed to foster collaboration, share insights, and drive bilateral trade and investment between México and India."),
    eventsList: [
      {
        id: 1,
        title: t("evt_1_title", "IT & Digital Services CEO Roundtable"),
        date: t("evt_1_date", "December 15, 2025"),
        location: t("evt_1_loc", "Consulate of México, Mumbai, India"),
        image: Event1,
        desc: t("evt_1_desc", "Organised with the Consulate General of México in Mumbai, this closed-door CEO Roundtable convenes senior technology leaders, digital services firms, and policy stakeholders to explore India-México collaboration in IT services, nearshoring, and digital transformation. The session features opening remarks from the Consul General, a moderated executive discussion, and curated peer exchange focused on market entry."),
      },
      {
        id: 2,
        title: t("evt_2_title", "Pharmaceuticals & LATAM Market Access CEO Roundtable"),
        date: t("evt_2_date", "December 15, 2025"),
        location: t("evt_2_loc", "Consulate of México, Mumbai, India"),
        image: Event2,
        desc: t("evt_2_desc", "In partnership with the Consulate General of México in Mumbai, this closed-door discussion brings together senior pharmaceutical leaders to examine regulatory pathways, manufacturing collaboration, and market access opportunities in the India-México healthcare corridor."),
      },
      {
        id: 3,
        title: t("evt_3_title", "Automotive & Manufacturing CEO Roundtable"),
        date: t("evt_3_date", "December 15, 2025"),
        location: t("evt_3_loc", "Consulate of México, Mumbai, India"),
        image: Event3,
        desc: t("evt_3_desc", "This invitation-only roundtable convenes automotive and manufacturing executives to discuss supply-chain integration, EV components, nearshoring, and bilateral investment opportunities across the India-México manufacturing ecosystem."),
      },
      {
        id: 4,
        title: t("evt_4_title", "Food & Beverages CEO Roundtable"),
        date: t("evt_4_date", "December 16, 2026"),
        location: t("evt_4_loc", "Consulate of México, Mumbai, India"),
        image: Event1,
        desc: t("evt_4_desc", "A focused executive dialogue bringing Mexico’s finest to India’s premium market, convening leaders from the food, beverages, and processing sectors to explore trade expansion, premium product access, and growth opportunities across India and Mexico’s consumer markets."),
      },
      {
        id: 5,
        title: t("evt_5_title", "Annual Event Calendar"),
        date: t("evt_5_date", "Updated Annually"),
        image: CalendarImg,
        desc: t("evt_5_desc", "A structured annual cycle of high-level bilateral engagements curated by MIBC."),
        isCalendar: true,
        calendarItems: [
          { label: t("evt_5_c1_label", "Economic Partnership Forum"), value: t("evt_5_c1_val", "Annual flagship summit") },
          { label: t("evt_5_c2_label", "Sector Roundtables"), value: t("evt_5_c2_val", "Quarterly deep dives") },
          { label: t("evt_5_c3_label", "Trade Delegations"), value: t("evt_5_c3_val", "Curated missions in both directions") },
          { label: t("evt_5_c4_label", "CEO Dialogues"), value: t("evt_5_c4_val", "Exclusive senior leadership forums") }
        ]
      }
    ],
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 font-sans pb-24 transition-colors duration-500">
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black text-[#A98842] mb-6 tracking-tight uppercase transition-colors">
          {eventsContent.title}
        </h1>
        <p className="max-w-3xl mx-auto text-gray-900 dark:text-gray-300 font-bold text-[10px] md:text-xs leading-relaxed uppercase tracking-widest opacity-80 transition-colors">
          {eventsContent.subtitle}
        </p>
      </section>

      {/* --- EVENTS LIST SECTION --- */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col gap-10">
          {eventsContent.eventsList.map((event) => (
            <div
              key={event.id}
              className="bg-[#F2F6F9]/60 dark:bg-slate-900/80 rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-500 border border-white dark:border-slate-800 hover:border-[#A98842]/30 group"
            >
              {/* Left Side: Event Image */}
              <div className="md:w-5/12 overflow-hidden h-full min-h-[320px] relative">
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Right Side: Event Details */}
              <div className="md:w-7/12 p-8 md:p-14 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.2] transition-colors group-hover:text-[#A98842] dark:group-hover:text-[#A98842]">
                  {event.title}
                </h2>

                {/* Normal Event Detail Layout */}
                {!event.isCalendar ? (
                  <>
                    <div className="space-y-1 mb-8">
                      <p className="text-[13px] font-black text-gray-950 dark:text-gray-200 tracking-tight uppercase transition-colors">
                        {t('evt_ui_date', 'Date:')} <span className="font-medium text-gray-600 dark:text-gray-400 ml-1">{event.date}</span>
                      </p>
                      <p className="text-[13px] font-black text-gray-950 dark:text-gray-200 tracking-tight uppercase transition-colors">
                        {t('evt_ui_location', 'Location:')} <span className="font-medium text-gray-600 dark:text-gray-400 ml-1">{event.location}</span>
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-[15px] md:text-[16px] leading-loose font-medium mb-10 opacity-90 transition-colors">
                      {event.desc}
                    </p>

                    <button className="bg-[#A98842]/90 hover:bg-[#A98842] text-white px-8 py-3 rounded-xl text-[11px] font-black tracking-widest uppercase transition-all w-fit shadow-lg active:scale-95">
                      <Link to="/events-gallery">{t('evt_ui_view_images', 'View Events Images')}</Link>
                    </button>
                  </>
                ) : (
                  /* Calendar Special Layout */
                  <>
                    <p className="text-[13px] font-black text-gray-950 dark:text-gray-400 tracking-tight uppercase mb-6 opacity-60 transition-colors">
                      {event.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-[15px] md:text-[16px] leading-relaxed font-medium mb-8 opacity-90 transition-colors">
                      {event.desc}
                    </p>
                    <div className="space-y-4 mt-2">
                      {event.calendarItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-[#A98842] rounded-sm shrink-0 transition-colors"></div>
                          <p className="text-gray-900 dark:text-gray-300 font-medium text-[15px] md:text-[17px] transition-colors">
                            <span className="font-extrabold text-gray-900 dark:text-white transition-colors">{item.label}:</span> {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;