import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe, X } from "lucide-react";
import logo from "../assets/images/logo/logo-dark.png";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Theme Sync
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setOpenAccordion(null);
    }
  }, [isMobileMenuOpen]);

  const getLinkStyle = (path) => {
    const isActive =
      path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(path);
    return `text-[16px] font-medium tracking-tight transition-colors duration-300 ${
      isActive
        ? "text-[#A98842]"
        : "text-slate-900 dark:text-gray-200 hover:text-[#A98842] dark:hover:text-[#A98842]"
    }`;
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 transition-colors duration-500">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* 1. LOGO SECTION */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  className={`h-10 md:h-12 w-auto transition-all duration-500 ${theme === "dark" ? "brightness-200 invert" : ""}`}
                  src={logo}
                  alt="MIBC Logo"
                />
              </Link>
            </div>

            {/* 2. DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center space-x-10">
              <Link to="/" className={getLinkStyle("/")}>
                {t("home", "Home")}
              </Link>
              <Link to="/about" className={getLinkStyle("/about")}>
                {t("about", "About")}
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link
                  to="/services"
                  className={`${getLinkStyle("/services")} flex items-center gap-1`}
                >
                  {t("services", "Services")}
                  <svg
                    className="w-3 h-3 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-900 shadow-2xl rounded-sm border border-gray-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {[
                    {
                      to: "/services/investment-facilitation",
                      label: t(
                        "investment_facilitation",
                        "Investment Facilitation",
                      ),
                    },
                    {
                      to: "/services/trade-promotion",
                      label: t("trade_promotion", "Trade Promotion"),
                    },
                    {
                      to: "/services/delegation-facilitation",
                      label: t(
                        "delegation_facilitation",
                        "Delegation Facilitation",
                      ),
                    },
                    {
                      to: "/services/intelligence-advocacy",
                      label: t(
                        "intelligence_advocacy",
                        "Intelligence & Advocacy",
                      ),
                    },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-[#A98842] dark:hover:text-[#A98842] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Initiatives Dropdown */}
              <div className="relative group">
                <Link
                  to="/initiatives"
                  className={`${getLinkStyle("/initiatives")} flex items-center gap-1`}
                >
                  {t("initiatives", "Initiatives")}
                  <svg
                    className="w-3 h-3 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-900 shadow-2xl rounded-sm border border-gray-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {[
                    {
                      to: "/tequila-accelerator",
                      label: t("tequila_accelerator", "Tequila Accelerator"),
                    },
                    {
                      to: "/initiatives/launchpad",
                      label: t("launchpad", "India–México Launchpad"),
                    },
                    { to: "/initiatives/events", label: t("events", "Events") },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-6 py-3 text-[13px] font-bold text-slate-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-[#A98842] dark:hover:text-[#A98842] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/sectors" className={getLinkStyle("/sectors")}>
                {t("sectors", "Sectors")}
              </Link>
              <Link to="/membership" className={getLinkStyle("/membership")}>
                {t("membership", "Membership")}
              </Link>
              <Link to="/contact" className={getLinkStyle("/contact")}>
                {t("contact", "Contact")}
              </Link>
            </nav>

            {/* 3. RIGHT ACTIONS */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* LANGUAGE SWITCHER */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-gray-200 hover:text-[#A98842] dark:hover:text-[#A98842] hover:border-[#A98842] dark:hover:border-[#A98842] bg-gray-50 dark:bg-slate-900 hover:bg-[#A98842]/10 transition-all shadow-sm"
                  title="Select Language"
                >
                  <Globe size={16} />
                  <span className="text-[12px] font-bold uppercase tracking-wider mt-[1px]">
                    {i18n.language?.startsWith("en") ? "EN" : "ES"}
                  </span>
                  <svg
                    className={`w-3 h-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-lg shadow-xl py-2 z-[100] animate-in fade-in slide-in-from-top-2">
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${
                        i18n.language?.startsWith("en")
                          ? "text-[#A98842] bg-gray-50 dark:bg-slate-800"
                          : "text-slate-700 dark:text-gray-300 hover:text-[#A98842] hover:bg-gray-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage("es")}
                      className={`w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${
                        i18n.language?.startsWith("es")
                          ? "text-[#A98842] bg-gray-50 dark:bg-slate-800"
                          : "text-slate-700 dark:text-gray-300 hover:text-[#A98842] hover:bg-gray-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      Spanish
                    </button>
                  </div>
                )}
              </div>

              <Link
                to="/membership"
                className="hidden md:block bg-[#A98842] hover:bg-[#8c6f32] text-white px-8 py-2.5 rounded-full text-[12px] font-bold tracking-wide transition-all shadow-md active:scale-95 uppercase"
              >
                {t("join_mibc", "JOIN MIBC")}
              </Link>

              {/* Burger Menu Button (Open) */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-slate-900 dark:text-white transition-colors"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- SINGLE MOBILE SIDEBAR MENU --- */}

      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white dark:bg-slate-950 z-[70] lg:hidden transform transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-slate-800">
          <img
            className={`h-8 w-auto ${theme === "dark" ? "brightness-200 invert" : ""}`}
            src={logo}
            alt="MIBC Logo"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-gray-300 rounded-full transition-colors"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-0">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-4 text-[17px] font-extrabold text-[#0B132B] dark:text-white border-b border-gray-100 dark:border-slate-800/50"
          >
            {t("home", "Home")}
          </Link>

          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-4 text-[17px] font-extrabold text-[#0B132B] dark:text-white border-b border-gray-100 dark:border-slate-800/50"
          >
            {t("about", "About")}
          </Link>

          {/* 🔴 SERVICES ACCORDION (Clickable Main Link + Clickable Arrow) */}
          <div className="border-b border-gray-100 dark:border-slate-800/50">
            <div className="flex items-center justify-between py-4">
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[17px] font-extrabold text-[#0B132B] dark:text-white flex-grow"
              >
                {t("services", "Services")}
              </Link>
              <button
                onClick={() =>
                  setOpenAccordion(
                    openAccordion === "services" ? null : "services",
                  )
                }
                className="p-2 -mr-2 text-slate-500"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${openAccordion === "services" ? "rotate-180 text-[#A98842]" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${openAccordion === "services" ? "max-h-96 pb-4" : "max-h-0"}`}
            >
              <div className="flex flex-col pl-4 space-y-4 pt-1">
                {[
                  {
                    to: "/services/investment-facilitation",
                    label: t(
                      "investment_facilitation",
                      "Investment Facilitation",
                    ),
                  },
                  {
                    to: "/services/trade-promotion",
                    label: t("trade_promotion", "Trade Promotion"),
                  },
                  {
                    to: "/services/delegation-facilitation",
                    label: t(
                      "delegation_facilitation",
                      "Delegation Facilitation",
                    ),
                  },
                  {
                    to: "/services/intelligence-advocacy",
                    label: t(
                      "intelligence_advocacy",
                      "Intelligence & Advocacy",
                    ),
                  },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[15px] font-semibold text-slate-600 dark:text-gray-400 hover:text-[#A98842] dark:hover:text-[#A98842]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 🔴 INITIATIVES ACCORDION (Clickable Main Link + Clickable Arrow) */}
          <div className="border-b border-gray-100 dark:border-slate-800/50">
            <div className="flex items-center justify-between py-4">
              <Link
                to="/initiatives"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[17px] font-extrabold text-[#0B132B] dark:text-white flex-grow"
              >
                {t("initiatives", "Initiatives")}
              </Link>
              <button
                onClick={() =>
                  setOpenAccordion(
                    openAccordion === "initiatives" ? null : "initiatives",
                  )
                }
                className="p-2 -mr-2 text-slate-500"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${openAccordion === "initiatives" ? "rotate-180 text-[#A98842]" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${openAccordion === "initiatives" ? "max-h-96 pb-4" : "max-h-0"}`}
            >
              <div className="flex flex-col pl-4 space-y-4 pt-1">
                {[
                  {
                    to: "/tequila-accelerator",
                    label: t("tequila_accelerator", "Tequila Accelerator"),
                  },
                  {
                    to: "/initiatives/launchpad",
                    label: t("launchpad", "India–México Launchpad"),
                  },
                  { to: "/initiatives/events", label: t("events", "Events") },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[15px] font-semibold text-slate-600 dark:text-gray-400 hover:text-[#A98842] dark:hover:text-[#A98842]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/sectors"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-4 text-[17px] font-extrabold text-[#0B132B] dark:text-white border-b border-gray-100 dark:border-slate-800/50"
          >
            {t("sectors", "Sectors")}
          </Link>

          <Link
            to="/membership"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-4 text-[17px] font-extrabold text-[#0B132B] dark:text-white border-b border-gray-100 dark:border-slate-800/50"
          >
            {t("membership", "Membership")}
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-4 text-[17px] font-extrabold text-[#0B132B] dark:text-white border-b border-gray-100 dark:border-slate-800/50"
          >
            {t("contact", "Contact")}
          </Link>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
          <Link
            to="/membership"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full bg-[#A98842] text-white py-4 rounded-xl font-bold tracking-widest uppercase text-[13px] shadow-lg active:scale-95 transition-transform"
          >
            {t("join_mibc", "JOIN MIBC")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
