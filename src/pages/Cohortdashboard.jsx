import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // <-- 1. i18n Hook import
import logo from "../assets/images/logo/logo-dark.png";

// Helper to extract YouTube ID
const extractVideoID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : url;
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const Dashboard = () => {
  const { t } = useTranslation(); // <-- 2. Hook initialize kiya

  const [activeTab, setActiveTab] = useState("phase1");
  const [activeDocPhase, setActiveDocPhase] = useState("phase1");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [userName, setUserName] = useState("Partner");
  const [userFirstName, setUserFirstName] = useState("Partner");
  const [userInitial, setUserInitial] = useState("P");

  useEffect(() => {
    // Auth Check
    const isLoggedIn = localStorage.getItem("mibc_token");
    if (!isLoggedIn) {
      window.location.href = "/tequila-login";
      return;
    }

    const storedName = localStorage.getItem("mibc_user");
    if (storedName) {
      setUserName(storedName);
      setUserFirstName(storedName.split(" ")[0]);
      setUserInitial(storedName.charAt(0).toUpperCase());
    }
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("mibc_token");
    if (!isLoggedIn) {
      navigate("/tequila-login");
    }
  }, [navigate]);

  const docCount = "10+";
  const videoCount = "6+";

  const handleLogout = () => {
    localStorage.removeItem("mibc_token");
    localStorage.removeItem("mibc_user");
    window.location.href = "/tequila-login";
  };

  // --- DATA ARRAYS MOVED INSIDE TO USE t() HOOK ---
  const navItems = [
    {
      id: "phase1",
      label: t("dash_phase1", "Phase 1: Market Entry"),
      icon: <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
    },
    {
      id: "phase2",
      label: t("dash_phase2", "Phase 2: Compliance"),
      icon: (
        <>
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </>
      ),
    },
    {
      id: "phase3",
      label: t("dash_phase3", "Phase 3: Execution"),
      icon: (
        <>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </>
      ),
    },
    {
      id: "phase4",
      label: t("dash_phase4", "Phase 4: Market Launch"),
      icon: (
        <>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </>
      ),
    },
  ];

  const videosData = [
    {
      phase: "phase1",
      youtubeId: "M7egtlMkypI",
      tag: t("dash_v1_tag", "Foundation"),
      tagColor: "#121321",
      title: t("dash_v1_title", "Indian Market Overview 2026"),
      duration: t("dash_v1_dur", "1 hr 10 mins"),
    },
    {
      phase: "phase1",
      youtubeId: "jFXGd3k4tDg",
      tag: t("dash_v2_tag", "Advanced"),
      tagColor: "#A98842",
      title: t("dash_v2_title", "Pricing & Margin Structures"),
      duration: t("dash_v2_dur", "56 mins"),
    },
    {
      phase: "phase2",
      youtubeId: "jFXGd3k4tDg",
      tag: t("dash_v3_tag", "Legal"),
      tagColor: "#121321",
      title: t("dash_v3_title", "Compliance & Licensing"),
      duration: t("dash_v3_dur", "56 min"),
    },
    {
      phase: "phase2",
      youtubeId: "41PDgIefcGY",
      tag: t("dash_v4_tag", "Critical"),
      tagColor: "#A98842",
      title: t("dash_v4_title", "Labelling, Import Custom"),
      duration: t("dash_v4_dur", "1 hr 3 min"),
    },
    {
      phase: "phase3",
      youtubeId: "pwO2dSZjdtk",
      tag: t("dash_v5_tag", "Networking"),
      tagColor: "#121321",
      title: t("dash_v5_title", "Meeting the Importers"),
      duration: t("dash_v5_dur", "53 min"),
    },
    {
      phase: "phase4",
      youtubeId: "5j6UaVYwGqQ",
      tag: t("dash_v6_tag", "Launch"),
      tagColor: "#A98842",
      title: t("dash_v6_title", "Session 1"),
      duration: t("dash_v6_dur", "40 min"),
    },
  ];

  const documentsData = [
    {
      phase: "phase1",
      icon: "file-text",
      title: t("dash_d1_title", "Tequila_Phasewise_pdf"),
      type: t("dash_type_ppt", "PPT Document"),
      url: "#",
      fileName: "Tequila_Accelerator_Phasewise.pdf",
    },
    {
      phase: "phase1",
      icon: "file-text",
      title: t("dash_d2_title", "Phase 1 Session 1"),
      type: t("dash_type_ppt", "PPT Document"),
      url: "#",
      fileName: "Phase-1 Session_1.pptx",
    },
    {
      phase: "phase1",
      icon: "file-text",
      title: t("dash_d3_title", "Phase 1 Session 2"),
      type: t("dash_type_ppt", "PPT Document"),
      url: "#",
      fileName: "Phase-1 Session_2.pptx",
    },
    {
      phase: "phase1",
      icon: "file",
      title: t("dash_d4_title", "India opportunity OnePager"),
      type: t("dash_type_pdf", "PDF Document"),
      url: "#",
      fileName: "India_opportunity_One_Pager.pdf",
    },
    {
      phase: "phase1",
      icon: "file-text",
      title: t("dash_d5_title", "Prelim Questionnaire"),
      type: t("dash_type_word", "Word Doc"),
      url: "#",
      fileName: "Prelim Questionnaire-Teq Acc.docx",
    },
    {
      phase: "phase1",
      icon: "list",
      title: t("dash_d6_title", "Phase 1 Questionnaire"),
      type: t("dash_type_word", "Word Doc"),
      url: "#",
      fileName: "Phase 1 Questionnaire.docx",
    },
    {
      phase: "phase2",
      icon: "file-text",
      title: t("dash_d7_title", "Phase-2 Session_3"),
      type: t("dash_type_ppt", "PPT Document"),
      url: "#",
      fileName: "Phase-2 Session_3.pptx",
    },
    {
      phase: "phase2",
      icon: "file-text",
      title: t("dash_d8_title", "Phase 2 Session_4"),
      type: t("dash_type_ppt", "PPT Document"),
      url: "#",
      fileName: "Phase-2 Session_4.pptx",
    },
    {
      phase: "phase3",
      icon: "file-text",
      title: t("dash_d9_title", "Phase 3 Session_5"),
      type: t("dash_type_ppt", "PPT Document"),
      url: "#",
      fileName: "Phase-3 Session_5.pptx",
    },
    {
      phase: "phase3",
      icon: "pie-chart",
      title: t("dash_d10_title", "Phase 3 Session_6"),
      type: t("dash_type_ppt", "PPT Document"),
      url: "#",
      fileName: "Phase-3 Session_6.pptx",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-[#faf9f6] flex text-[#333] overflow-hidden">
      {/* ================= SIDEBAR ================= */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-white border-r border-[#eaedf1] flex flex-col transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img 
              className={`h-10 md:h-12 w-auto transition-all duration-500 `} 
              src={logo} 
              alt="MIBC Logo" 
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-grow p-4 overflow-y-auto">
          <p className="mx-4 mt-4 mb-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            {t("dash_modules", "Modules")}
          </p>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                    activeTab === item.id
                      ? "bg-[#A98842]/10 text-[#A98842] font-semibold"
                      : "text-gray-500 font-medium hover:bg-gray-100 hover:text-[#121321]"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <p className="mx-4 mt-6 mb-2 text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            {t("dash_library", "Library")}
          </p>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => {
                  setActiveTab("documents");
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                  activeTab === "documents"
                    ? "bg-[#A98842]/10 text-[#A98842] font-semibold"
                    : "text-gray-500 font-medium hover:bg-gray-100 hover:text-[#121321]"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                {t("dash_documents", "Documents")}
              </button>
            </li>
          </ul>
        </div>

        {/* Footer / User Profile */}
        <div className="p-5 border-t border-[#eaedf1] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#A98842]/10 text-[#A98842] font-bold text-base flex items-center justify-center">
              {userInitial}
            </div>
            <div className="text-sm font-semibold text-[#121321]">
              {userName}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-700 p-2 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 lg:ml-[260px] flex flex-col h-screen overflow-y-auto w-full transition-all duration-300">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-[#eaedf1] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-[#121321]"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <div className="hidden md:flex items-center gap-2 bg-emerald-50 text-emerald-500 px-3 py-1.5 rounded-md text-xs font-semibold">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              {t("dash_status", "Status: Active Cohort")}
            </div>
          </div>
          <div>
            <button className="bg-[#A98842] hover:bg-[#8E7134] text-white px-5 py-2 rounded-md text-sm font-semibold transition-transform hover:-translate-y-0.5">
              {t("dash_join_mibc", "JOIN MIBC")}
            </button>
          </div>
        </header>

        {/* Dashboard Content Container */}
        <div className="p-6 md:p-10 max-w-[1200px] w-full mx-auto">
          <AnimatePresence mode="wait">
            {/* HERO SECTION (Only visible on Phase 1) */}
            {activeTab === "phase1" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col lg:flex-row gap-6 mb-12"
              >
                <div className="flex-[1.5] bg-white p-8 md:p-10 rounded-2xl border border-[#eaedf1] shadow-sm">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#121321] mb-3">
                    {t("dash_hi", "Hi,")} {userFirstName}! 👋
                  </h1>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-xl">
                    {t("dash_welcome_desc", "Ready to uplift your export journey with MIBC Tequila Accelerator? Discover modules, complete compliance, and achieve your global goals seamlessly.")}
                  </p>
                  <button className="bg-[#A98842] hover:bg-[#8E7134] text-white px-6 py-3 rounded-md text-sm font-semibold transition-transform hover:-translate-y-0.5 shadow-md">
                    {t("dash_explore_modules", "Explore Modules")}
                  </button>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-5">
                  <div className="bg-white p-6 rounded-2xl border border-[#eaedf1] shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 bg-[#A98842]/10 text-[#A98842] rounded-xl flex items-center justify-center mb-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-[#121321]">
                      {docCount}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                      {t("dash_action_docs", "Action Documents")}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-[#eaedf1] shadow-sm flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 bg-[#A98842]/10 text-[#A98842] rounded-xl flex items-center justify-center mb-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect
                          x="1"
                          y="5"
                          width="15"
                          height="14"
                          rx="2"
                          ry="2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-[#121321]">
                      {videoCount}
                    </h3>
                    <p className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                      {t("dash_video_modules", "Video Modules")}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* DYNAMIC CONTENT (Videos) */}
          {activeTab !== "documents" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeTab}
            >
              <h3 className="text-xl font-bold text-[#121321] mb-6 flex items-center gap-2">
                {navItems.find((item) => item.id === activeTab)?.label} {t("dash_modules_suffix", "Modules")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                {videosData
                  .filter((v) => v.phase === activeTab)
                  .map((v, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl overflow-hidden border border-[#eaedf1] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="relative w-full pt-[56.25%] bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${extractVideoID(v.youtubeId)}?rel=0`}
                          className="absolute inset-0 w-full h-full border-none"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="p-6">
                        <span
                          className="inline-block px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider rounded-full mb-3"
                          style={{ backgroundColor: v.tagColor }}
                        >
                          {v.tag}
                        </span>
                        <h4 className="text-lg font-bold text-[#121321] mb-1 leading-snug group-hover:text-[#A98842] transition-colors">
                          {v.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {t("dash_duration", "Duration:")} {v.duration}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* DYNAMIC CONTENT (Documents) */}
          {activeTab === "documents" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#121321] mb-2 flex items-center gap-3">
                  <svg
                    className="w-6 h-6 text-[#A98842]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  {t("dash_phasewise_docs", "Phase-Wise Documents")}
                </h3>
                <p className="text-gray-500">
                  {t("dash_docs_desc", "Access and download all your phase-wise templates, questionnaires, and guidelines here.")}
                </p>
              </div>

              {/* Sub Tabs for Docs */}
              <div className="flex gap-2 mb-8 bg-white p-2 rounded-lg border border-[#eaedf1] w-max overflow-x-auto max-w-full">
                {["phase1", "phase2", "phase3", "phase4"].map((phase, idx) => (
                  <button
                    key={phase}
                    onClick={() => setActiveDocPhase(phase)}
                    className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                      activeDocPhase === phase
                        ? "bg-[#121321] text-[#A98842]"
                        : "text-gray-500 hover:bg-gray-100 hover:text-[#121321]"
                    }`}
                  >
                    {/* Yahan dynamically index pass kar rahe hain phase number ke liye */}
                    {t("dash_phase_tab", { num: idx + 1, defaultValue: `Phase ${idx + 1} Docs` })}
                  </button>
                ))}
              </div>

              {/* Docs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {documentsData
                  .filter((d) => d.phase === activeDocPhase)
                  .map((d, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-5 border border-[#eaedf1] flex items-center justify-between shadow-sm hover:shadow-md hover:border-[#121321] hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-11 bg-[#A98842]/10 text-[#A98842] rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-[#121321] m-0">
                            {d.title}
                          </h4>
                          <p className="text-[12px] text-gray-500 mt-0.5">
                            {d.type}
                          </p>
                        </div>
                      </div>
                      <a
                        href={d.url}
                        download={d.fileName}
                        className="bg-[#121321] hover:bg-[#A98842] text-white w-9 h-9 rounded-md flex items-center justify-center transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </a>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;