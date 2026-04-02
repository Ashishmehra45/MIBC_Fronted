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

  const getLinkStyle = (path) => {
    const isActive = path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
    return `text-[16px] font-bold tracking-tight transition-colors duration-300 ${
      isActive 
      ? "text-[#b38e44]" 
      : "text-slate-900 dark:text-gray-200 hover:text-[#b38e44] dark:hover:text-[#b38e44]"
    }`;
  };

  return (
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

            {/* THEME TOGGLE BUTTON (UPDATED) */}
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b38e44]/10 dark:bg-slate-800 text-[#b38e44] hover:bg-[#b38e44] hover:text-white transition-all duration-500"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "light" ? (
                // ☀️ Light Mode mein SUN dikhega (Click karne par dark hoga)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                // 🌙 Dark Mode mein MOON dikhega (Click karne par light hoga)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Burger Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-slate-900 dark:text-white">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? "max-h-screen pb-10" : "max-h-0"}`}>
          <nav className="flex flex-col space-y-5 pt-6 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-950 px-2">
            {["Home", "About", "Services", "Initiatives", "Sectors", "Membership", "Contact"].map((item) => (
              <Link 
                key={item} 
                onClick={() => setIsMobileMenuOpen(false)} 
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                className="text-base font-bold text-slate-900 dark:text-gray-200 hover:text-[#b38e44] dark:hover:text-[#b38e44]"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;