import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F8FAFC] pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Header Part */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="space-y-4">
            {/* Logo Placeholder */}
            <div className="flex flex-col">
              <h2 className="text-2xl font-serif tracking-widest text-slate-800 uppercase">
                México-India
              </h2>
              <p className="text-[10px] tracking-[0.4em] uppercase text-slate-500 font-bold -mt-1">
                Business Council
              </p>
            </div>
            <p className="text-slate-600 italic text-sm">Bridging Two Emerging Giants</p>
          </div>
          
          <Link 
            to="/membership" 
            className="bg-[#b38e44] hover:bg-black text-white px-8 py-3 rounded-md font-bold text-sm transition-all flex items-center gap-2 shadow-lg"
          >
            Join MIBC <span className="text-lg">›</span>
          </Link>
        </div>

        <hr className="border-gray-200 mb-16" />

        {/* Middle Content Part */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Column 1: Council */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 text-lg">Council</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/about" className="hover:text-[#b38e44] transition-colors">About</Link></li>
              <li><Link to="/leadership" className="hover:text-[#b38e44] transition-colors">Leadership</Link></li>
              <li><Link to="/sectors" className="hover:text-[#b38e44] transition-colors">Sectors</Link></li>
              <li><Link to="/membership" className="hover:text-[#b38e44] transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 text-lg">Services</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/services" className="hover:text-[#b38e44] transition-colors">Investment Facilitation</Link></li>
              <li><Link to="/services" className="hover:text-[#b38e44] transition-colors">Trade Promotion</Link></li>
              <li><Link to="/services" className="hover:text-[#b38e44] transition-colors">Delegation Facilitation</Link></li>
              <li><Link to="/services" className="hover:text-[#b38e44] transition-colors">Intelligence & Advocacy</Link></li>
            </ul>
          </div>

          {/* Column 3: Initiatives */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 text-lg">Initiatives</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="#" className="hover:text-[#b38e44] transition-colors">Tequila Accelerator</Link></li>
              <li><Link to="#" className="hover:text-[#b38e44] transition-colors">India–México Launchpad</Link></li>
              <li><Link to="#" className="hover:text-[#b38e44] transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 text-lg">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link to="/contact" className="hover:text-[#b38e44] transition-colors">Contact</Link></li>
              <li><Link to="/newsletter" className="hover:text-[#b38e44] transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Column 5: Stay Updated */}
          <div className="lg:col-span-1 col-span-2 space-y-6">
            <h4 className="font-bold text-slate-900 text-lg">Stay Updated</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Subscribe to bilateral opportunities and corridor intelligence.
            </p>
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Your email address"
                className="bg-white border border-gray-200 px-4 py-3 text-sm outline-none w-full rounded-l-md focus:border-[#b38e44]"
              />
              <button className="bg-[#b38e44] text-white px-6 py-3 text-sm font-bold rounded-r-md hover:bg-black transition-all">
                Subscribe
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {['f', 'in', 'x', 'ig'].map((social, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-[#b38e44] hover:text-white transition-all text-slate-600 border border-gray-100">
                   <span className="font-serif italic font-bold uppercase text-xs">{social}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <Link to="/privacy" className="hover:text-black">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms" className="hover:text-black">Terms & Conditions</Link>
            <span className="text-gray-300">|</span>
            <Link to="/contact" className="hover:text-black">Contact Us</Link>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} México–India Business Council. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;