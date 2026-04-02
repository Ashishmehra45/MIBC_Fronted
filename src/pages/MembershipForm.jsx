import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Edit3, FileText, CheckCircle } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2"; // SweetAlert2 import kiya

// Form ke right side wali image ka path
import FormImage from "../assets/images/split/join-now.jpg";

const MembershipForm = () => {
  const [searchParams] = useSearchParams();
  const selectedTier = searchParams.get("tier");

  const [formData, setFormData] = useState({
    tier: selectedTier || "",
    name: "",
    phone: "",
    email: "",
    company: "",
    objectives: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedTier) {
      setFormData((prev) => ({ ...prev, tier: selectedTier }));
    }
  }, [selectedTier]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Environment Check: Agar app localhost par chal rahi hai toh local URL, warna Render ka URL
    const API_BASE_URL =
      window.location.hostname === "localhost"
        ? "http://localhost:5001"
        : "https://mibc-backend-4.onrender.com";

    const payload = {
      selectedPlan: formData.tier,
      contactName: formData.name,
      contactPhone: formData.phone,
      contactEmail: formData.email,
      companyName: formData.company,
      contactMessage: formData.objectives,
    };

    try {
      // Yahan humne dynamic URL use kiya hai
      const response = await axios.post(
        `${API_BASE_URL}/api/membership`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.data.success) {
        Swal.fire({
          title: "Application Sent!",
          text: "Your membership application has been submitted. Please check your email for a confirmation message.",
          icon: "success",
          confirmButtonColor: "#A98842",
          background: document.documentElement.classList.contains('dark') ? '#111111' : '#ffffff',
          color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
        });

        // Form Reset
        setFormData({
          tier: selectedTier || "",
          name: "",
          phone: "",
          email: "",
          company: "",
          objectives: "",
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      const errorMsg =
        error.response?.data?.error || "Network error. Please try again later.";

      Swal.fire({
        title: "Submission Failed",
        text: errorMsg,
        icon: "error",
        confirmButtonColor: "#d33",
        background: document.documentElement.classList.contains('dark') ? '#111111' : '#ffffff',
        color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans pb-24 transition-colors duration-500">
      {/* --- HEADER --- */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <span className="bg-[#FFF9E6] dark:bg-[#A98842]/20 text-[#A98842] px-4 py-1.5 rounded-md text-[11px] font-bold tracking-widest uppercase mb-4 inline-block transition-colors">
            Membership Application
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mt-2 transition-colors">
            Apply for MIBC Membership
          </h1>
        </div>
      </section>

      {/* --- 3 INFO CARDS --- */}
      <section className="container mx-auto px-4 max-w-7xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f8fbff] dark:bg-slate-900 p-8 rounded-2xl border border-gray-50 dark:border-slate-800 shadow-sm transition-colors duration-500">
            <Edit3 className="text-[#A98842] mb-4" size={28} />
            <h3 className="text-lg font-black text-gray-900 dark:text-white mb-3 transition-colors">
              Choose Your Membership Tier
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed transition-colors">
              Select your plan on the previous page — it will auto-fill here.
            </p>
          </div>

          <div className="bg-[#f8fbff] dark:bg-slate-900 p-8 rounded-2xl border border-gray-50 dark:border-slate-800 shadow-sm transition-colors duration-500">
            <FileText className="text-[#A98842] mb-4" size={28} />
            <h3 className="text-lg font-black text-gray-900 dark:text-white mb-3 transition-colors">
              Application Requirements
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed transition-colors">
              Provide basic company info, contact details & intended engagement.
            </p>
          </div>

          <div className="bg-[#f8fbff] dark:bg-slate-900 p-8 rounded-2xl border border-gray-50 dark:border-slate-800 shadow-sm transition-colors duration-500">
            <CheckCircle className="text-[#A98842] mb-4" size={28} />
            <h3 className="text-lg font-black text-gray-900 dark:text-white mb-3 transition-colors">
              Post-Submission
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed transition-colors">
              Your application is reviewed within 3-5 working days.
            </p>
          </div>
        </div>
      </section>

      {/* --- FORM & IMAGE SECTION --- */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* LEFT SIDE: FORM */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="tier"
                  value={formData.tier}
                  readOnly
                  placeholder="Select Membership Tier"
                  className="w-full p-4 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-gray-700 dark:text-gray-400 font-bold text-sm focus:outline-none cursor-not-allowed transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg focus:outline-none focus:border-[#A98842] dark:focus:border-[#A98842] font-medium text-sm transition-colors dark:text-white"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (e.g. +91...)"
                  className="w-full p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg focus:outline-none focus:border-[#A98842] dark:focus:border-[#A98842] font-medium text-sm transition-colors dark:text-white"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg focus:outline-none focus:border-[#A98842] dark:focus:border-[#A98842] font-medium text-sm transition-colors dark:text-white"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg focus:outline-none focus:border-[#A98842] dark:focus:border-[#A98842] font-medium text-sm transition-colors dark:text-white"
                  required
                />
              </div>

              <div>
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your business objectives"
                  className="w-full p-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg focus:outline-none focus:border-[#A98842] dark:focus:border-[#A98842] font-medium text-sm transition-colors resize-none dark:text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full lg:w-auto bg-[#A98842] text-white px-12 py-4 rounded-lg font-bold text-sm transition-all shadow-md active:scale-95 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#967635]"}`}
              >
                {isLoading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="lg:w-1/2 rounded-[24px] overflow-hidden shadow-xl dark:shadow-black/50 border border-gray-100 dark:border-slate-800 min-h-[500px] relative transition-colors duration-500">
            <img
              src={FormImage}
              alt="MIBC Meeting"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipForm;