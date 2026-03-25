import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo-dark.png";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Theme Sync
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark", "bg-slate-900");
    } else {
      document.body.classList.remove("dark", "bg-slate-900");
    }
  }, [theme]);

  const getLinkStyle = (path) => {
    // path exact match ya sub-path match check karne ke liye startsWith use kiya hai
    const isActive = path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);
    return `text-[16px] font-bold tracking-tight transition-colors duration-300 ${
      isActive 
      ? "!text-[#b38e44]" 
      : "!text-black hover:!text-[#b38e44]"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#F7F4EE] border-b border-gray-100 transition-all">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* 1. LOGO SECTION */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-10 md:h-12 w-auto transition-all" src={logo} alt="MIBC Logo" />
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link to="/" className={getLinkStyle("/")}>Home</Link>
            <Link to="/about" className={getLinkStyle("/about")}>About</Link>

            {/* Services - Ab ye Link hai, click karne par page redirect hoga */}
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
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-2xl rounded-sm border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {[
                  { to: "/services/investment-facilitation", label: "Investment Facilitation" },
                  { to: "/services/trade-promotion", label: "Trade Promotion" },
                  { to: "/services/delegation-facilitation", label: "Delegation Facilitation" },
                  { to: "/services/intelligence-advocacy", label: "Intelligence & Advocacy" }
                ].map((item) => (
                  <Link key={item.to} to={item.to} className="block px-6 py-3 text-[13px] font-bold !text-black hover:bg-gray-50 hover:!text-[#b38e44] transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Initiatives - Click par redirection, hover par dropdown */}
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
              
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-2xl rounded-sm border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                {[
                  { to: "/initiatives/tequila-accelerator", label: "Tequila Accelerator" },
                  { to: "/initiatives/launchpad", label: "India–México Launchpad" },
                  { to: "/initiatives/events", label: "Events" }
                ].map((item) => (
                  <Link key={item.to} to={item.to} className="block px-6 py-3 text-[13px] font-bold !text-black hover:bg-gray-50 hover:!text-[#b38e44] transition-colors">
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

            {/* Theme Toggle */}
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b38e44]/10 text-[#b38e44] hover:bg-[#b38e44] hover:text-white transition-all duration-500">
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
              )}
            </button>

            {/* Burger Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 !text-black">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? "max-h-screen pb-10" : "max-h-0"}`}>
          <nav className="flex flex-col space-y-5 pt-6 border-t border-gray-50 bg-white">
            {["Home", "About", "Services", "Initiatives", "Sectors", "Membership", "Contact"].map((item) => (
              <Link 
                key={item} 
                onClick={() => setIsMobileMenuOpen(false)} 
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                className="text-base font-bold !text-black hover:!text-[#b38e44]"
              >
                {item}
              </Link>
            ))}
            <Link onClick={() => setIsMobileMenuOpen(false)} to="/membership" className="bg-[#b38e44] text-white text-center py-4 rounded-sm font-bold tracking-widest uppercase text-xs">
              JOIN MIBC
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;