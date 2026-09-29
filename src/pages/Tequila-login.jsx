import React, { useState } from 'react';
import api from '../api/api'; 
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo-dark.png";
import { useTranslation } from 'react-i18next'; // <-- 1. i18n Hook import kiya

const CohortLogin = () => {
    const { t } = useTranslation(); // <-- 2. Hook initialize kiya

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const showPremiumAlert = (message, redirectUrl) => {
        setAlertMessage(message);
        setTimeout(() => {
            setAlertMessage('');
            if(redirectUrl) window.location.href = redirectUrl;
        }, 2000);
    };

    const checkAccess = (event, targetPage) => {
        event.preventDefault();
        const token = localStorage.getItem("mibc_token");
        if (token) {
            window.location.href = targetPage;
        } else {
            showPremiumAlert(t("login_access_denied", "Access Denied! Redirecting to login..."), "/tequila-login");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await api.post('/api/cohort-login', { email, password });
            
            const result = response.data;

            if (result.success) {
                localStorage.setItem("mibc_token", result.token);
                localStorage.setItem("mibc_user", result.user.fullName);
                window.location.href = "/cohort-dashboard";
            } else {
                setError(result.message || t("login_err_invalid", "Invalid credentials."));
            }
        } catch (err) {
            const errorMsg = err.response?.data?.message || t("login_err_network", "Network Error. Please try again.");
            setError(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-[#faf9f6] text-[#333]">
            
            {/* Custom Premium Alert Overlay */}
            {alertMessage && (
                <div className="fixed top-6 right-6 bg-[#121321] text-white border-l-4 border-red-600 px-6 py-4 rounded-lg shadow-2xl z-[9999] flex items-center gap-3 transition-all duration-300 transform translate-y-0 opacity-100">
                    <span className="text-[22px]">🔒</span>
                    <span className="text-[14.5px] font-medium">{alertMessage}</span>
                </div>
            )}

            {/* SECURE BULLETPROOF NAVBAR */}
            <nav className="sticky top-0 z-50 flex justify-between items-center px-5 lg:px-[5%] py-4 bg-white border-b border-[#e0e0e0] shadow-[0_4px_15px_rgba(0,0,0,0.02)] relative">
                
               <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img 
                  className={`h-10 md:h-12 w-auto transition-all duration-500 `} 
                  src={logo} 
                  alt="MIBC Logo" 
                />
              </Link>
            </div>

                {/* Desktop Center Links */}
                <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
                    <li><a href="/tequila-accelerator" className="text-[#121321] text-[15px] font-medium transition-colors hover:text-[#A98842]">{t("login_nav_home", "Home")}</a></li>
                    <li><a href="/" onClick={(e) => checkAccess(e, '/cohort-dashboard')} className="text-[#121321] text-[15px] font-medium transition-colors hover:text-[#A98842]">{t("login_nav_cohort", "Cohort")}</a></li>
                    <li><a href="/membership" className="text-[#121321] text-[15px] font-medium transition-colors hover:text-[#A98842]">{t("login_nav_membership", "Membership")}</a></li>
                    <li><a href="/contact" className="text-[#121321] text-[15px] font-medium transition-colors hover:text-[#A98842]">{t("login_nav_contact", "Contact")}</a></li>
                </ul>

                {/* Right Buttons */}
                <div className="hidden lg:flex items-center gap-5">
                    <a href="/membership" className="bg-[#A98842] hover:bg-[#8E7134] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all hover:-translate-y-0.5">
                        {t("login_nav_join", "JOIN MIBC")}
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <button className="block lg:hidden text-2xl text-[#121321] focus:outline-none" onClick={toggleMobileMenu}>
                    ☰
                </button>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-[#e0e0e0] flex flex-col p-5 gap-4 shadow-lg lg:hidden">
                        <a href="/tequila-accelerator" className="text-[#121321] text-[15px] font-medium">{t("login_nav_home", "Home")}</a>
                        <a href="/" onClick={(e) => checkAccess(e, '/cohort-dashboard')} className="text-[#121321] text-[15px] font-medium">{t("login_nav_cohort", "Cohort")}</a>
                        <a href="/membership" className="text-[#121321] text-[15px] font-medium">{t("login_nav_membership", "Membership")}</a>
                        <a href="/contact" className="text-[#121321] text-[15px] font-medium">{t("login_nav_contact", "Contact")}</a>
                        <a href="/membership" className="bg-[#A98842] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold text-center mt-2">
                            {t("login_nav_join", "JOIN MIBC")}
                        </a>
                    </div>
                )}
            </nav>

            {/* LOGIN FORM */}
            <div className="flex-1 flex items-center justify-center p-5 py-10">
                <div className="bg-white w-full max-w-[450px] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] px-8 py-10 md:p-12 border-t-4 border-t-[#A98842]">
                    
                    <div className="text-center mb-8">
                        <h1 className="text-[26px] font-bold text-[#121321] m-0">{t("login_title", "Welcome Back")}</h1>
                        <p className="text-[14px] text-gray-500 mt-2 m-0">{t("login_subtitle", "Login to access the Tequila Accelerator learning portal.")}</p>
                    </div>

                    {error && (
                        <div className="text-red-600 text-[13px] text-center mb-4 block font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col mb-5 relative">
                            <label className="text-[13px] font-medium text-gray-700 mb-2">{t("login_label_email", "Email Address")}</label>
                            <input 
                                type="email" 
                                placeholder={t("login_ph_email", "name@company.com")} 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#A98842] focus:ring-2 focus:ring-[#A98842]/20 transition-all text-[14px]"
                            />
                        </div>

                        <div className="flex flex-col mb-5 relative">
                            <label className="text-[13px] font-medium text-gray-700 mb-2">{t("login_label_password", "Password")}</label>
                            <a href="/forgot-password" className="absolute top-0 right-0 text-[12px] text-[#A98842] font-medium hover:underline">{t("login_forgot", "Forgot?")}</a>
                            <input 
                                type="password" 
                                placeholder={t("login_ph_password", "Enter your password")} 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                                className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#A98842] focus:ring-2 focus:ring-[#A98842]/20 transition-all text-[14px]"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full bg-[#121321] hover:bg-[#A98842] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-[15px] p-4 rounded-lg transition-all hover:-translate-y-0.5 mt-2 shadow-md"
                        >
                            {isLoading ? t("login_btn_loading", "Authenticating... ⏳") : t("login_btn_submit", "Login to Vault")}
                        </button>

                        <div className="text-center text-[14px] text-gray-500 mt-6">
                            {t("login_footer_text", "Don't have an account?")} <a href="/cohort-register" className="text-[#A98842] font-semibold hover:underline">{t("login_footer_link", "Register here")}</a>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default CohortLogin;