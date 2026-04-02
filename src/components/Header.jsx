import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo-dark.png";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    return `text-[16px] font-bold tracking-tight transition-colors duration-300 ${
      isActive 
      ? "text-[#b38e44]" 
      : "text-slate-900 dark:text-gray-200 hover:text-[#b38e44] dark:hover:text-[#b38e44]"
    }`;
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
              <Link to="/" className={getLinkStyle("/")}>Home</Link>
              <Link to="/about" className={getLinkStyle("/about")}>About</Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link 
                  to="/services" 
                  className={`${getLinkStyle("/services")} flex items-center gap-1`}
                >
                  Services
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-900 shadow-2xl rounded-sm border border-gray-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {[
                    { to: "/services/investment-facilitation", label: "Investment Facilitation" },
                    { to: "/services/trade-promotion", label: "Trade Promotion" },
                    { to: "/services/delegation-facilitation", label: "Delegation Facilitation" },
                    { to: "/services/intelligence-advocacy", label: "Intelligence & Advocacy" }
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
                  Initiatives
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-900 shadow-2xl rounded-sm border border-gray-100 dark:border-slate-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                  {[
                    { to: "/initiatives/tequila-accelerator", label: "Tequila Accelerator" },
                    { to: "/initiatives/launchpad", label: "India–México Launchpad" },
                    { to: "/initiatives/events", label: "Events" }
                  ].map((item) => (
                    <Link key={item.to} to={item.to} className="block px-6 py-3 text-[13px] font-bold text-slate-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-[#b38e44] dark:hover:text-[#b38e44] transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/sectors" className={getLinkStyle("/sectors")}>Sectors</Link>
              <Link to="/membership" className={getLinkStyle("/membership")}>Membership</Link>
              <Link to="/contact" className={getLinkStyle("/contact")}>Contact</Link>
            </nav>

            {/* 3. RIGHT ACTIONS */}
            <div className="flex items-center gap-6">
              <Link to="/membership" className="hidden md:block bg-[#b38e44] hover:bg-[#967635] text-white px-8 py-2.5 rounded-full text-[12px] font-bold tracking-wide transition-all shadow-md active:scale-95">
                JOIN MIBC
              </Link>

              {/* THEME TOGGLE BUTTON */}
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b38e44]/10 dark:bg-slate-800 text-[#b38e44] hover:bg-[#b38e44] hover:text-white transition-all duration-500"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {theme === "light" ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

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
      
      {/* 1. Dark Overlay (Click outside to close) */}
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
        {/* Drawer Header (Logo & Close Button) */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-slate-800">
          <img 
            className={`h-8 w-auto transition-all duration-500 ${theme === 'dark' ? 'brightness-200 invert' : ''}`} 
            src={logo} 
            alt="MIBC Logo" 
          />
          {/* Beautiful Cross Symbol */}
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
          {["Home", "About", "Services", "Initiatives", "Sectors", "Membership", "Contact"].map((item) => (
            <Link 
              key={item} 
              onClick={() => setIsMobileMenuOpen(false)} 
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
              className="text-lg font-bold text-slate-900 dark:text-gray-200 hover:text-[#A98842] dark:hover:text-[#A98842] py-3 border-b border-gray-50 dark:border-slate-800/50 transition-colors"
            >
              {item}
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
            JOIN MIBC
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;