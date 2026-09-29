import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import logo from "../assets/images/logo/logo-dark.png";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); // Dropdown toggle state
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
    }
  }, [isMobileMenuOpen]);

  const getLinkStyle = (path) => {
    const isActive = path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
    return `text-[16px] font-medium tracking-tight transition-colors duration-300 ${
      isActive 
      ? "text-[#b38e44]" 
      : "text-slate-900 dark:text-gray-200 hover:text-[#b38e44] dark:hover:text-[#b38e44]"
    }`;
  };

  // --- LANGUAGE SWITCHER LOGIC ---
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false); // Close dropdown after selection
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
                  className={`h-10 md:h-12 w-auto transition-all duration-500 ${theme === 'dark' ? 'brightness-200 invert' : ''}`} 
                  src={logo} 
                  alt="MIBC Logo" 
                />
              </Link>
            </div>

            {/* 2. DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center space-x-10">
              <Link to="/" className={getLinkStyle("/")}>{t('home', 'Home')}</Link>
              <Link to="/about" className={getLinkStyle("/about")}>{t('about', 'About')}</Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link 
                  to="/services" 
                  className={`${getLinkStyle("/services")} flex items-center gap-1`}
                >
                  {t('services', 'Services')}
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-900 shadow-2xl rounded-sm border border-gray-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {[
                    { to: "/services/investment-facilitation", label: t('investment_facilitation', 'Investment Facilitation') },
                    { to: "/services/trade-promotion", label: t('trade_promotion', 'Trade Promotion') },
                    { to: "/services/delegation-facilitation", label: t('delegation_facilitation', 'Delegation Facilitation') },
                    { to: "/services/intelligence-advocacy", label: t('intelligence_advocacy', 'Intelligence & Advocacy') }
                  ].map((item) => (
                    <Link key={item.to} to={item.to} className="block px-6 py-3 text-[13px] font-bold text-slate-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-[#b38e44] dark:hover:text-[#b38e44] transition-colors">
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
                  {t('initiatives', 'Initiatives')}
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-900 shadow-2xl rounded-sm border border-gray-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {[
                    { to: "/tequila-accelerator", label: t('tequila_accelerator', 'Tequila Accelerator') },
                    { to: "/initiatives/launchpad", label: t('launchpad', 'India–México Launchpad') },
                    { to: "/initiatives/events", label: t('events', 'Events') }
                  ].map((item) => (
                    <Link key={item.to} to={item.to} className="block px-6 py-3 text-[13px] font-bold text-slate-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-[#b38e44] dark:hover:text-[#b38e44] transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/sectors" className={getLinkStyle("/sectors")}>{t('sectors', 'Sectors')}</Link>
              <Link to="/membership" className={getLinkStyle("/membership")}>{t('membership', 'Membership')}</Link>
              <Link to="/contact" className={getLinkStyle("/contact")}>{t('contact', 'Contact')}</Link>
            </nav>

            {/* 3. RIGHT ACTIONS */}
            <div className="flex items-center gap-4 md:gap-6">
              
              {/* --- DROPDOWN LANGUAGE SWITCHER --- */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-gray-200 hover:text-[#b38e44] dark:hover:text-[#b38e44] hover:border-[#b38e44] dark:hover:border-[#b38e44] bg-gray-50 dark:bg-slate-900 hover:bg-[#b38e44]/10 transition-all shadow-sm"
                  title="Select Language"
                >
                  <Globe size={16} />
                  <span className="text-[12px] font-bold uppercase tracking-wider mt-[1px]">
                    {i18n.language?.startsWith('en') ? 'EN' : 'ES'}
                  </span>
                  <svg className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-lg shadow-xl py-2 z-[100] animate-in fade-in slide-in-from-top-2">
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${
                        i18n.language?.startsWith('en') 
                          ? 'text-[#b38e44] bg-gray-50 dark:bg-slate-800' 
                          : 'text-slate-700 dark:text-gray-300 hover:text-[#b38e44] hover:bg-gray-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage('es')}
                      className={`w-full text-left px-4 py-2 text-sm font-semibold transition-colors ${
                        i18n.language?.startsWith('es') 
                          ? 'text-[#b38e44] bg-gray-50 dark:bg-slate-800' 
                          : 'text-slate-700 dark:text-gray-300 hover:text-[#b38e44] hover:bg-gray-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      Spanish
                    </button>
                  </div>
                )}
              </div>

              <Link to="/membership" className="hidden md:block bg-[#b38e44] hover:bg-[#967635] text-white px-8 py-2.5 rounded-full text-[12px] font-bold tracking-wide transition-all shadow-md active:scale-95 uppercase">
                {t('join_mibc', 'JOIN MIBC')}
              </Link>

              {/* Burger Menu Button (Open) */}
              <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 text-slate-900 dark:text-white transition-colors">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR MENU --- */}
      
      {/* 1. Dark Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* 2. Drawer / Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[320px] bg-white dark:bg-slate-950 z-[70] shadow-2xl flex flex-col lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-slate-800">
          <img 
            className={`h-8 w-auto transition-all duration-500 ${theme === 'dark' ? 'brightness-200 invert' : ''}`} 
            src={logo} 
            alt="MIBC Logo" 
          />
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-[#A98842] hover:text-white dark:hover:bg-[#A98842] dark:hover:text-white transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex flex-col flex-grow overflow-y-auto px-6 py-8 space-y-2">
          {[
            { name: "Home", key: "home", path: "/" },
            { name: "About", key: "about", path: "/about" },
            { name: "Services", key: "services", path: "/services" },
            { name: "Initiatives", key: "initiatives", path: "/initiatives" },
            { name: "Sectors", key: "sectors", path: "/sectors" },
            { name: "Membership", key: "membership", path: "/membership" },
            { name: "Contact", key: "contact", path: "/contact" }
          ].map((item) => (
            <Link 
              key={item.key} 
              onClick={() => setIsMobileMenuOpen(false)} 
              to={item.path} 
              className="text-lg font-bold text-slate-900 dark:text-gray-200 hover:text-[#A98842] dark:hover:text-[#A98842] py-3 border-b border-gray-50 dark:border-slate-800/50 transition-colors"
            >
              {t(item.key, item.name)}
            </Link>
          ))}
        </div>

        {/* Drawer Bottom CTA */}
        <div className="p-6 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
          <Link 
            onClick={() => setIsMobileMenuOpen(false)} 
            to="/membership" 
            className="flex items-center justify-center w-full bg-[#A98842] text-white py-4 rounded-xl font-bold tracking-widest uppercase text-xs shadow-lg active:scale-95 transition-transform"
          >
            {t('join_mibc', 'JOIN MIBC')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;