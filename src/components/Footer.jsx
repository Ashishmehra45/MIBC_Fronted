import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Twitter, ChevronRight, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <-- 1. Hook import kiya
import Logo from '../assets/images/logo/logo-dark.png';

const Footer = () => {
  const { t } = useTranslation(); // <-- 2. Hook ko initialize kiya

  return (
    <footer className="w-full bg-[#F8FAFC] dark:bg-slate-950 pt-10 border-t border-gray-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- TOP HEADER PART --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8">
          <div className="space-y-4">
            <img 
              src={Logo} 
              alt="MIBC Logo" 
              className="h-10 md:h-12 w-auto object-contain dark:brightness-200 dark:invert transition-all duration-500" 
            />
            {/* 3. Text ko t() function ke andar daala */}
            <p className="text-slate-600 dark:text-gray-400 italic text-sm">
              {t('footer_tagline')}
            </p>
          </div>
          
          <Link 
            to="/membership" 
            className="bg-[#b38e44] hover:bg-black dark:hover:bg-white dark:hover:text-black text-white px-8 py-3 rounded-md font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-[#b38e44]/20 active:scale-95"
          >
            {t('join_mibc')} <ChevronRight size={18} />
          </Link>
        </div>

        <hr className="border-gray-200 dark:border-slate-800 mb-16" />

        {/* --- MIDDLE CONTENT PART --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Council */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">{t('council')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-[#b38e44] transition-colors">{t('about_us')}</Link></li>
              <li><Link to="/about" className="hover:text-[#b38e44] transition-colors">{t('leadership')}</Link></li>
              <li><Link to="/sectors" className="hover:text-[#b38e44] transition-colors">{t('sectors')}</Link></li>
              <li><Link to="/membership" className="hover:text-[#b38e44] transition-colors">{t('membership')}</Link></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">{t('services')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
              <li><Link to="/services/investment-facilitation" className="hover:text-[#b38e44] transition-colors">{t('investment_facilitation')}</Link></li>
              <li><Link to="/services/trade-promotion" className="hover:text-[#b38e44] transition-colors">{t('trade_promotion')}</Link></li>
              <li><Link to="/services/delegation-facilitation" className="hover:text-[#b38e44] transition-colors">{t('delegation_facilitation')}</Link></li>
              <li><Link to="/services/intelligence-advocacy" className="hover:text-[#b38e44] transition-colors">{t('intelligence_advocacy')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Initiatives */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">{t('initiatives')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
              <li><Link to="/initiatives/tequila" className="hover:text-[#b38e44] transition-colors">{t('tequila_accelerator')}</Link></li>
              <li><Link to="/initiatives/launchpad" className="hover:text-[#b38e44] transition-colors">{t('launchpad')}</Link></li>
              <li><Link to="/initiatives/events" className="hover:text-[#b38e44] transition-colors">{t('events_summits')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">{t('connect')}</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
              <li><Link to="/contact" className="hover:text-[#b38e44] transition-colors">{t('contact')}</Link></li>
              <li><Link to="/newsletter" className="hover:text-[#b38e44] transition-colors">{t('newsletter')}</Link></li>
            </ul>
          </div>

          {/* Column 5: Stay Updated */}
          <div className="lg:col-span-1 col-span-2 space-y-6">
            <h4 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">{t('stay_updated')}</h4>
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
              {t('subscribe_desc')}
            </p>
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder={t('email_placeholder')}
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 px-4 py-3 text-sm outline-none w-full rounded-l-md focus:border-[#b38e44] dark:text-white"
              />
              <button className="bg-[#b38e44] text-white px-4 py-3 text-sm font-bold rounded-r-md hover:bg-black transition-all">
                <Mail size={18} />
              </button>
            </div>
            
            {/* SOCIAL ICONS */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/company/mibcorg/", label: "LinkedIn" },
                { icon: <Facebook size={18} />, link: "https://www.facebook.com/profile.php?id=61585155789482", label: "Facebook" },
                { icon: <Twitter size={18} />, link: "https://x.com/InfoMexicoindia", label: "X" },
                { icon: <Instagram size={18} />, link: "https://www.instagram.com/official_mibc", label: "Instagram" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center hover:bg-[#b38e44] hover:text-white transition-all text-slate-600 dark:text-gray-400 border border-gray-100 dark:border-slate-800 hover:border-[#b38e44]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="py-4 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-[13px] text-slate-800 dark:text-gray-500 font-semibold uppercase tracking-wider">
            <Link to="/privacy" className="hover:text-[#b38e44]">{t('privacy_policy')}</Link>
            <Link to="/terms-and-conditions" className="hover:text-[#b38e44]">{t('terms_conditions')}</Link>
            <Link to="/contact" className="hover:text-[#b38e44]">{t('contact_us')}</Link>
          </div>
          <p className="text-[13px] text-slate-800 dark:text-gray-500 font-medium text-center">
            © {new Date().getFullYear()} {t('rights_reserved')}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;