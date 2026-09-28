import React, { useState } from 'react';
import api from '../api/api'; // <-- Aapka axios instance yahan import kiya hai

const CohortRegister = () => {
    // Form States
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        brandName: '',
        email: '',
        mobile: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    // Handle Input Changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
            showPremiumAlert("Access Denied! Redirecting to login...", "/tequila-login");
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        // Password Match Validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setIsLoading(true);

        try {
            const payload = {
                fullName: formData.fullName.trim(),
                companyName: formData.companyName.trim(),
                brandName: formData.brandName.trim(),
                email: formData.email.trim(),
                mobile: formData.mobile.trim(),
                address: formData.address.trim(),
                password: formData.password
            };

            // Seedha API Instance Use Kiya Hai Yahan 👇
            const response = await api.post('/api/cohort-register', payload);
            
            // Axios response.data ke andar body deta hai
            const result = response.data;

            if (result.success) {
                alert("🎉 " + result.message);
                window.location.href = "/tequila-login"; // Redirect to login page
            } else {
                setError(result.message || "Registration failed.");
            }
        } catch (err) {
            // Axios errors block me err.response.data access kar sakte ho agar backend se custom error aa raha ho
            const errorMsg = err.response?.data?.message || "Network Error. Please check your connection.";
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
                
                {/* Logo */}
                <a href="/tequila-accelerator" className="flex flex-col items-center justify-center cursor-pointer no-underline">
                    <h1 className="text-xl md:text-2xl font-serif text-gray-900 tracking-wide font-semibold m-0">
                        MÉXICO-INDIA
                    </h1>
                    <div className="w-full flex items-center justify-center mt-0.5">
                        <div className="h-[1px] w-4 bg-gray-300"></div>
                        <span className="text-[7px] md:text-[8px] tracking-[0.35em] text-gray-500 uppercase mx-2 whitespace-nowrap">
                            Business Council
                        </span>
                        <div className="h-[1px] w-4 bg-gray-300"></div>
                    </div>
                </a>

                {/* Desktop Center Links */}
                <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
                    <li><a href="/tequila-accelerator" className="text-[#121321] text-[15px] font-medium transition-colors hover:text-[#A98842]">Home</a></li>
                    <li><a href="/" onClick={(e) => checkAccess(e, '/cohort-dashboard')} className="text-[#121321] text-[15px] font-medium transition-colors hover:text-[#A98842]">Cohort</a></li>
                    <li><a href="/membership" className="text-[#121321] text-[15px] font-medium transition-colors hover:text-[#A98842]">Membership</a></li>
                    <li><a href="/contact" className="text-[#121321] text-[15px] font-medium transition-colors hover:text-[#A98842]">Contact</a></li>
                </ul>

                {/* Right Buttons */}
                <div className="hidden lg:flex items-center gap-5">
                    <a href="/membership" className="bg-[#A98842] hover:bg-[#8E7134] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all hover:-translate-y-0.5">
                        JOIN MIBC
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <button className="block lg:hidden text-2xl text-[#121321] focus:outline-none" onClick={toggleMobileMenu}>
                    ☰
                </button>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b border-[#e0e0e0] flex flex-col p-5 gap-4 shadow-lg lg:hidden">
                        <a href="/tequila-accelerator" className="text-[#121321] text-[15px] font-medium">Home</a>
                        <a href="/" onClick={(e) => checkAccess(e, '/cohort-dashboard')} className="text-[#121321] text-[15px] font-medium">Cohort</a>
                        <a href="/membership" className="text-[#121321] text-[15px] font-medium">Membership</a>
                        <a href="/contact" className="text-[#121321] text-[15px] font-medium">Contact</a>
                        <a href="/membership" className="bg-[#A98842] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold text-center mt-2">
                            JOIN MIBC
                        </a>
                    </div>
                )}
            </nav>

            {/* REGISTRATION FORM */}
            <div className="flex-1 flex items-center justify-center p-5 py-10">
                <div className="bg-white w-full max-w-[650px] rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] px-8 py-10 md:p-12 border-t-4 border-t-[#C5A059]">
                    
                    <div className="text-center mb-8">
                        <h1 className="text-[26px] font-bold text-[#121321] m-0">Create Your Account</h1>
                        <p className="text-[14px] text-gray-500 mt-2 m-0">Register to access the Tequila Accelerator learning portal.</p>
                    </div>

                    {error && (
                        <div className="text-red-600 text-[13px] text-center mb-4 block font-medium">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="space-y-5">
                        
                        {/* Full Name */}
                        <div className="flex flex-col relative">
                            <label className="text-[13px] font-medium text-gray-700 mb-2">Full Name <span className="text-red-600">*</span></label>
                            <input 
                                type="text" 
                                name="fullName"
                                placeholder="e.g. Alejandro Garcia" 
                                value={formData.fullName}
                                onChange={handleChange}
                                required 
                                className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all text-[14px]"
                            />
                        </div>

                        {/* Company & Brand Row */}
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex flex-col flex-1 relative">
                                <label className="text-[13px] font-medium text-gray-700 mb-2">Company Name <span className="text-red-600">*</span></label>
                                <input 
                                    type="text" 
                                    name="companyName"
                                    placeholder="Legal Entity Name" 
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all text-[14px]"
                                />
                            </div>
                            <div className="flex flex-col flex-1 relative">
                                <label className="text-[13px] font-medium text-gray-700 mb-2">Brand Name <span className="text-red-600">*</span></label>
                                <input 
                                    type="text" 
                                    name="brandName"
                                    placeholder="Tequila/Mezcal Brand" 
                                    value={formData.brandName}
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all text-[14px]"
                                />
                            </div>
                        </div>

                        {/* Email & Mobile Row */}
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex flex-col flex-1 relative">
                                <label className="text-[13px] font-medium text-gray-700 mb-2">Email Address <span className="text-red-600">*</span></label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="name@company.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all text-[14px]"
                                />
                            </div>
                            <div className="flex flex-col flex-1 relative">
                                <label className="text-[13px] font-medium text-gray-700 mb-2">Mobile Number <span className="text-red-600">*</span></label>
                                <input 
                                    type="tel" 
                                    name="mobile"
                                    placeholder="+52..." 
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all text-[14px]"
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col relative">
                            <label className="text-[13px] font-medium text-gray-700 mb-2">HQ Address <span className="text-red-600">*</span></label>
                            <textarea 
                                name="address"
                                placeholder="Full company address" 
                                value={formData.address}
                                onChange={handleChange}
                                required 
                                className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all text-[14px] h-24 resize-y"
                            ></textarea>
                        </div>

                        {/* Password Row */}
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex flex-col flex-1 relative">
                                <label className="text-[13px] font-medium text-gray-700 mb-2">Create Password <span className="text-red-600">*</span></label>
                                <input 
                                    type="password" 
                                    name="password"
                                    placeholder="Min 8 characters" 
                                    value={formData.password}
                                    onChange={handleChange}
                                    required 
                                    minLength="8"
                                    className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all text-[14px]"
                                />
                            </div>
                            <div className="flex flex-col flex-1 relative">
                                <label className="text-[13px] font-medium text-gray-700 mb-2">Confirm Password <span className="text-red-600">*</span></label>
                                <input 
                                    type="password" 
                                    name="confirmPassword"
                                    placeholder="Repeat password" 
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required 
                                    className="w-full p-3.5 border border-[#e0e0e0] rounded-lg bg-[#fafafa] focus:bg-white focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all text-[14px]"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="w-full bg-[#121321] hover:bg-[#C5A059] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-[15px] p-4 rounded-lg transition-all hover:-translate-y-0.5 mt-2 shadow-md"
                        >
                            {isLoading ? "Creating Account... ⏳" : "Register Account"}
                        </button>

                        <div className="text-center text-[14px] text-gray-500 mt-6">
                            Already have an account? <a href="/tequila-login" className="text-[#C5A059] font-semibold hover:underline">Login here</a>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default CohortRegister;