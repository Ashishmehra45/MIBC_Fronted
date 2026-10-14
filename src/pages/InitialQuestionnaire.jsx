import React, { useState, useRef } from 'react';

const TequilaQuestionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const formRef = useRef(null);
  const totalSteps = 9;

  // Custom Toast Handler
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3500);
  };

  // File size validation handler (Max 5MB)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File size exceeds 5 MB! Please upload a smaller file.');
      e.target.value = ''; // Reset input
    }
  };

  const handleNext = () => {
    // Yahan maine validation hata di hai jaisa tumne kaha tha.
    // User seedha next step pe ja sakta hai bina bhare.
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      submitForm();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    const formData = new FormData(formRef.current);
    
    const API_BASE_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
        ? "http://localhost:5001" 
        : "https://mibc-backend-4.onrender.com";
    const API_URL = `${API_BASE_URL}/api/submit-questionnaire`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        showToast("🎉 Questionnaire Submitted Successfully!", "success");
        setTimeout(() => { window.location.reload(); }, 2000);
      } else {
        showToast(result.message || "❌ Submission failed", "error");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error(error);
      showToast("❌ Server Error. Please check backend connection.", "error");
      setIsSubmitting(false);
    }
  };

  // Steps Tracker Data
  const trackers = [
    { label: 'A', title: 'Company' }, { label: 'B', title: 'Product' },
    { label: 'C', title: 'Certification' }, { label: 'D', title: 'Production' },
    { label: 'E', title: 'Export' }, { label: 'F', title: 'Pricing' },
    { label: 'G', title: 'Financial' }, { label: 'H', title: 'Branding' },
    { label: 'I', title: 'Declaration' }
  ];

  // Common Tailwind Classes
  const inputClass = "w-full p-3 border border-gray-300 rounded-md text-sm font-sans focus:outline-none focus:ring-4 focus:ring-[#C5A059]/20 focus:border-[#C5A059] bg-white transition-all";
  const labelClass = "block text-[13px] font-sans mb-2 text-gray-700 font-medium";
  const reqClass = "text-red-500 ml-1";
  const radioItemClass = "inline-flex items-center gap-2 cursor-pointer font-sans text-sm text-gray-700";
  const radioClass = "w-5 h-5 accent-[#121321] cursor-pointer shrink-0";
  const fileClass = "block w-full text-sm text-gray-600 font-sans border border-gray-300 rounded-md bg-gray-50 cursor-pointer file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-bold file:bg-[#121321] file:text-white hover:file:bg-[#2a2c42] transition-all p-2";

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333] font-serif pb-12 antialiased">
      
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-6 right-6 px-6 py-4 text-white rounded-lg shadow-xl font-sans font-semibold text-[15px] z-50 transition-all duration-300 ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}>
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="bg-[#C5A059] py-8 px-5 text-center border-b-4 border-[#ab8a4a]">
        <p className="text-gray-100 font-sans text-[13px] font-bold tracking-widest uppercase mb-2">
          México - India Business Council
        </p>
        <h1 className="text-white text-2xl md:text-3xl font-normal tracking-wide m-0">
          Tequila Accelerator — Exporter Questionnaire
        </h1>
      </div>

      {/* Progress Tracker */}
      <div className="flex justify-between bg-white px-5 md:px-16 py-5 shadow-sm mb-10 overflow-x-auto no-scrollbar gap-6 md:gap-0">
        {trackers.map((track, index) => (
          <div key={index} className={`text-center shrink-0 min-w-[60px] transition-opacity duration-300 ${index === currentStep ? 'opacity-100' : 'opacity-40'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-xs ${index === currentStep ? 'bg-[#121321] text-white' : 'bg-gray-200 text-[#333]'}`}>
              {track.label}
            </div>
            <div className="text-[11px] uppercase font-sans tracking-wide">{track.title}</div>
          </div>
        ))}
      </div>

      {/* Form Container */}
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 border-t-2 border-[#C5A059] shadow-lg rounded-md mx-4 md:mx-auto">
        <form ref={formRef} id="questionnaireForm" onSubmit={(e) => e.preventDefault()}>
          
          {/* STEP A: Company */}
          <div className={`${currentStep === 0 ? 'block animate-[fadeIn_0.4s_ease-in-out]' : 'hidden'}`}>
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="flex items-center gap-4 m-0 mb-2 text-[#121321] text-xl">
                <span className="bg-[#121321] text-white rounded-full w-9 h-9 flex items-center justify-center text-base">A</span> Company & Contact
              </h2>
              <p className="m-0 text-gray-500 text-sm font-sans">Basic details about your company and primary point of contact.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Company / Legal Entity Name <span className={reqClass}>*</span></label>
                <input type="text" name="companyName" className={inputClass} required />
              </div>
              <div className="flex-1">
                <label className={labelClass}>Brand Name(s), if different</label>
                <input type="text" name="brandName" className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Year of Establishment <span className={reqClass}>*</span></label>
                <input type="text" name="yearEstablished" placeholder="e.g. 2015" className={inputClass} required />
              </div>
              <div className="flex-1">
                <label className={labelClass}>Company Website / Social Links <span className={reqClass}>*</span></label>
                <input type="text" name="website" placeholder="www.yourbrand.com" className={inputClass} required />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Headquarters Location (City, State, México) <span className={reqClass}>*</span></label>
                <input type="text" name="hqLocation" placeholder="Guadalajara, Jalisco" className={inputClass} required />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Primary Contact — Full Name <span className={reqClass}>*</span></label>
                <input type="text" name="contactName" className={inputClass} required />
              </div>
              <div className="flex-1">
                <label className={labelClass}>Primary Contact — Designation / Title <span className={reqClass}>*</span></label>
                <input type="text" name="contactTitle" className={inputClass} required />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Phone / WhatsApp Number <span className={reqClass}>*</span></label>
                <input type="text" name="phone" placeholder="+52 33 1234 5678" className={inputClass} required />
              </div>
              <div className="flex-1">
                <label className={labelClass}>Email Address <span className={reqClass}>*</span></label>
                <input type="email" name="email" className={inputClass} required />
              </div>
            </div>
          </div>

          {/* STEP B: Product */}
          <div className={`${currentStep === 1 ? 'block animate-[fadeIn_0.4s_ease-in-out]' : 'hidden'}`}>
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="flex items-center gap-4 m-0 mb-2 text-[#121321] text-xl">
                <span className="bg-[#121321] text-white rounded-full w-9 h-9 flex items-center justify-center text-base">B</span> Product
              </h2>
              <p className="m-0 text-gray-500 text-sm font-sans">Tell us about the products you intend to export to India.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Product Category <span className={reqClass}>*</span></label>
                <select name="productCategory" className={inputClass} required defaultValue="">
                  <option value="" disabled>Select Category</option>
                  <option value="100% Agave Tequila">100% Agave Tequila</option>
                  <option value="Mixto Tequila">Mixto Tequila</option>
                  <option value="Mezcal">Mezcal</option>
                  <option value="Other Agave Spirit">Other Agave Spirit</option>
                  <option value="Ready-to-Drink">Ready-to-Drink Cocktail</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>List the SKUs / expressions you wish to export (e.g. Blanco, Reposado), with bottle sizes <span className={reqClass}>*</span></label>
                <textarea name="skusList" placeholder="Type your answer here" className={`${inputClass} h-24 resize-y`} required></textarea>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Upload a Product Image (Bottle & Label) (Max 5 MB) <span className={reqClass}>*</span></label>
                <input type="file" name="productImage" accept="image/*" className={fileClass} required onChange={handleFileChange} />
                <small className="text-gray-500 block mt-1 font-sans">Accepted formats: Images. Max size: 5 MB.</small>
              </div>
              <div className="flex-1">
                <label className={labelClass}>Upload Brand Deck or Profile (PDF/PPT) (Max 5 MB) <span className={reqClass}>*</span></label>
                <input type="file" name="brandDeck" accept=".pdf,.ppt,.pptx" className={fileClass} required onChange={handleFileChange} />
                <small className="text-gray-500 block mt-1 font-sans">Accepted formats: PDF or PPT. Max size: 5 MB.</small>
              </div>
            </div>
          </div>

          {/* STEP C: Certification */}
          <div className={`${currentStep === 2 ? 'block animate-[fadeIn_0.4s_ease-in-out]' : 'hidden'}`}>
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="flex items-center gap-4 m-0 mb-2 text-[#121321] text-xl">
                <span className="bg-[#121321] text-white rounded-full w-9 h-9 flex items-center justify-center text-base">C</span> Certification & Compliance
              </h2>
              <p className="m-0 text-gray-500 text-sm font-sans">Mandatory — required for India market entry eligibility.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Is your tequila CRT certified with a valid NOM number? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="crtStatus" value="Yes" className={radioClass} required /> Yes</label>
                  <label className={radioItemClass}><input type="radio" name="crtStatus" value="No" className={radioClass} required /> No</label>
                  <label className={radioItemClass}><input type="radio" name="crtStatus" value="Not Applicable" className={radioClass} required /> Not Applicable (Mezcal only)</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Can you provide standard export documentation for each batch? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="exportDocsStatus" value="Yes" className={radioClass} required /> Yes</label>
                  <label className={radioItemClass}><input type="radio" name="exportDocsStatus" value="No" className={radioClass} required /> No</label>
                  <label className={radioItemClass}><input type="radio" name="exportDocsStatus" value="Need Guidance" className={radioClass} required /> Need Guidance</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Upload your current CRT or COMERCAM Certificate (Max 5 MB) <span className={reqClass}>*</span></label>
                <input type="file" name="crtCertificate" accept="image/*,.pdf" className={fileClass} required onChange={handleFileChange} />
                <small className="text-gray-500 block mt-1 font-sans">Accepted formats: PDF or Images. Max size: 5 MB.</small>
              </div>
            </div>
          </div>

          {/* STEP D: Production */}
          <div className={`${currentStep === 3 ? 'block animate-[fadeIn_0.4s_ease-in-out]' : 'hidden'}`}>
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="flex items-center gap-4 m-0 mb-2 text-[#121321] text-xl">
                <span className="bg-[#121321] text-white rounded-full w-9 h-9 flex items-center justify-center text-base">D</span> Production & Supply
              </h2>
              <p className="m-0 text-gray-500 text-sm font-sans">Your ability to fulfill consistent demand from the Indian market.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Total Annual Production Capacity (litres) <span className={reqClass}>*</span></label>
                <select name="productionCapacity" className={inputClass} required defaultValue="">
                  <option value="" disabled>Select Capacity</option>
                  <option value="Below 10,000 L">Below 10,000 L</option>
                  <option value="10,000-30,000 L">10,000-30,000 L</option>
                  <option value="30,000-50,000 L">30,000-50,000 L</option>
                  <option value="50,000-100,000 L">50,000-100,000 L</option>
                  <option value="Above 100,000 L">Above 100,000 L</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Share of Capacity Available for New Export <span className={reqClass}>*</span></label>
                <select name="exportCapacityShare" className={inputClass} required defaultValue="">
                  <option value="" disabled>Select Share</option>
                  <option value="Below 10%">Below 10%</option>
                  <option value="10-25%">10-25%</option>
                  <option value="25-50%">25-50%</option>
                  <option value="Above 50%">Above 50%</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Can you commit to a minimum first order of 1 FCL (approx. 10,000 litres)? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="commitFirstOrder" value="Yes" className={radioClass} required /> Yes</label>
                  <label className={radioItemClass}><input type="radio" name="commitFirstOrder" value="Yes, but lead time" className={radioClass} required /> Yes, but need lead time to scale up</label>
                  <label className={radioItemClass}><input type="radio" name="commitFirstOrder" value="No" className={radioClass} required /> No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Standard Production / Bottling Lead Time for a Confirmed Reorder (weeks) <span className={reqClass}>*</span></label>
                <input type="text" name="leadTime" placeholder="e.g. 6" className={inputClass} required />
              </div>
            </div>
          </div>

          {/* STEP E: Export */}
          <div className={`${currentStep === 4 ? 'block animate-[fadeIn_0.4s_ease-in-out]' : 'hidden'}`}>
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="flex items-center gap-4 m-0 mb-2 text-[#121321] text-xl">
                <span className="bg-[#121321] text-white rounded-full w-9 h-9 flex items-center justify-center text-base">E</span> Export Experience
              </h2>
              <p className="m-0 text-gray-500 text-sm font-sans">Track record and operational readiness for international trade.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>How many countries do you currently export to? <span className={reqClass}>*</span></label>
                <select name="exportCountriesCount" className={inputClass} required defaultValue="">
                  <option value="" disabled>Select count</option>
                  <option value="0">0 (Domestic only)</option>
                  <option value="1">1</option>
                  <option value="2-3">2-3</option>
                  <option value="4-6">4-6</option>
                  <option value="More than 6">More than 6</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Please list your current export markets</label>
                <textarea name="currentExportMarkets" className={`${inputClass} h-24 resize-y`}></textarea>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Do you have a relationship with a Mexican customs broker? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="customsBrokerRel" value="Yes" className={radioClass} required /> Yes</label>
                  <label className={radioItemClass}><input type="radio" name="customsBrokerRel" value="No" className={radioClass} required /> No</label>
                  <label className={radioItemClass}><input type="radio" name="customsBrokerRel" value="Need Guidance" className={radioClass} required /> Need Guidance</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Can you quote on a CIF basis in addition to FOB? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="cifQuoteAbility" value="Yes CIF" className={radioClass} required /> Yes, comfortable with CIF</label>
                  <label className={radioItemClass}><input type="radio" name="cifQuoteAbility" value="FOB Only" className={radioClass} required /> FOB only — need guidance</label>
                  <label className={radioItemClass}><input type="radio" name="cifQuoteAbility" value="Unsure" className={radioClass} required /> Unsure of the difference</label>
                </div>
              </div>
            </div>
          </div>

          {/* STEP F: Pricing */}
          <div className={`${currentStep === 5 ? 'block animate-[fadeIn_0.4s_ease-in-out]' : 'hidden'}`}>
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="flex items-center gap-4 m-0 mb-2 text-[#121321] text-xl">
                <span className="bg-[#121321] text-white rounded-full w-9 h-9 flex items-center justify-center text-base">F</span> Pricing & Packaging
              </h2>
              <p className="m-0 text-gray-500 text-sm font-sans">Helps us assess whether your pricing and packaging support a viable India launch.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Your FOB México price per 750ml bottle, for each SKU <span className={reqClass}>*</span></label>
                <textarea name="fobPrice" className={`${inputClass} h-24 resize-y`} required></textarea>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Are you open to adjusting packaging to suit Indian market requirements? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="packagingAdjustment" value="Yes fully" className={radioClass} required /> Yes, fully open</label>
                  <label className={radioItemClass}><input type="radio" name="packagingAdjustment" value="Open with limitations" className={radioClass} required /> Open with some limitations</label>
                  <label className={radioItemClass}><input type="radio" name="packagingAdjustment" value="Not open" className={radioClass} required /> Not open to packaging changes</label>
                </div>
              </div>
            </div>
          </div>

          {/* STEP G: Financial */}
          <div className={`${currentStep === 6 ? 'block animate-[fadeIn_0.4s_ease-in-out]' : 'hidden'}`}>
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="flex items-center gap-4 m-0 mb-2 text-[#121321] text-xl">
                <span className="bg-[#121321] text-white rounded-full w-9 h-9 flex items-center justify-center text-base">G</span> Financial Capacity & Commitment
              </h2>
              <p className="m-0 text-gray-500 text-sm font-sans">Mandatory — required for India market entry eligibility.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Estimated Investment Capacity for Year 1 <span className={reqClass}>*</span></label>
                <select name="investmentCapacity" className={inputClass} required defaultValue="">
                  <option value="" disabled>Select Capacity</option>
                  <option value="Below USD 25,000">Below USD 25,000</option>
                  <option value="USD 25,000-75,000">USD 25,000-75,000</option>
                  <option value="USD 75,000-150,000">USD 75,000-150,000</option>
                  <option value="Above USD 150,000">Above USD 150,000</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Comfortable with distributor payment terms of 45-90 days? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="paymentTermsComfort" value="Yes" className={radioClass} required /> Yes</label>
                  <label className={radioItemClass}><input type="radio" name="paymentTermsComfort" value="Yes with conditions" className={radioClass} required /> Yes, with conditions</label>
                  <label className={radioItemClass}><input type="radio" name="paymentTermsComfort" value="No" className={radioClass} required /> No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Can you supply 50-100 bottles as pre-commercial samples? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="sampleSupply" value="Yes, no cost" className={radioClass} required /> Yes, at no cost</label>
                  <label className={radioItemClass}><input type="radio" name="sampleSupply" value="Yes, discounted" className={radioClass} required /> Yes, at a discounted cost</label>
                  <label className={radioItemClass}><input type="radio" name="sampleSupply" value="No" className={radioClass} required /> No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Committed to an 18-24 month market development timeline? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="marketTimelineCommitment" value="Yes" className={radioClass} required /> Yes</label>
                  <label className={radioItemClass}><input type="radio" name="marketTimelineCommitment" value="Yes, periodic review" className={radioClass} required /> Yes, with periodic review</label>
                  <label className={radioItemClass}><input type="radio" name="marketTimelineCommitment" value="No" className={radioClass} required /> No, expect faster returns</label>
                </div>
              </div>
            </div>
          </div>

          {/* STEP H: Branding */}
          <div className={`${currentStep === 7 ? 'block animate-[fadeIn_0.4s_ease-in-out]' : 'hidden'}`}>
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="flex items-center gap-4 m-0 mb-2 text-[#121321] text-xl">
                <span className="bg-[#121321] text-white rounded-full w-9 h-9 flex items-center justify-center text-base">H</span> Brand & Marketing
              </h2>
              <p className="m-0 text-gray-500 text-sm font-sans">Marketing assets, digital presence, and leadership engagement.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Describe your brand's story and what makes it unique <span className={reqClass}>*</span></label>
                <textarea name="brandStory" className={`${inputClass} h-24 resize-y`} required></textarea>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Do you have marketing materials available in English? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="marketingMaterialsEnglish" value="Yes fully" className={radioClass} required /> Yes, fully available</label>
                  <label className={radioItemClass}><input type="radio" name="marketingMaterialsEnglish" value="Partially" className={radioClass} required /> Partially available</label>
                  <label className={radioItemClass}><input type="radio" name="marketingMaterialsEnglish" value="Only Spanish" className={radioClass} required /> Only in Spanish — willing to translate</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Active Instagram and/or YouTube presence? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="socialMediaActive" value="Yes" className={radioClass} required /> Yes</label>
                  <label className={radioItemClass}><input type="radio" name="socialMediaActive" value="No but planning" className={radioClass} required /> No, but planning to start</label>
                  <label className={radioItemClass}><input type="radio" name="socialMediaActive" value="No" className={radioClass} required /> No</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Will founder/decision-maker engage directly in India strategy? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="founderEngagement" value="Yes can travel" className={radioClass} required /> Yes, can travel to India</label>
                  <label className={radioItemClass}><input type="radio" name="founderEngagement" value="Yes virtual" className={radioClass} required /> Yes, virtual participation only</label>
                  <label className={radioItemClass}><input type="radio" name="founderEngagement" value="Limited" className={radioClass} required /> Limited availability</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>Are you open to participating in India-based trade events? <span className={reqClass}>*</span></label>
                <div className="flex flex-wrap gap-6 mt-2">
                  <label className={radioItemClass}><input type="radio" name="tradeEvents" value="Yes in person" className={radioClass} required /> Yes, in person</label>
                  <label className={radioItemClass}><input type="radio" name="tradeEvents" value="Yes virtually" className={radioClass} required /> Yes, virtually only</label>
                  <label className={radioItemClass}><input type="radio" name="tradeEvents" value="Open to discussion" className={radioClass} required /> Open to discussion</label>
                  <label className={radioItemClass}><input type="radio" name="tradeEvents" value="Not at this time" className={radioClass} required /> Not at this time</label>
                </div>
              </div>
            </div>
          </div>

          {/* STEP I: Declaration */}
          <div className={`${currentStep === 8 ? 'block animate-[fadeIn_0.4s_ease-in-out]' : 'hidden'}`}>
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="flex items-center gap-4 m-0 mb-2 text-[#121321] text-xl">
                <span className="bg-[#121321] text-white rounded-full w-9 h-9 flex items-center justify-center text-base">I</span> Declaration
              </h2>
              <p className="m-0 text-gray-500 text-sm font-sans">Final confirmation before submission.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1">
                <label className={labelClass}>I confirm the information provided is accurate and complete to the best of my knowledge, and I authorise MIBC to use it to evaluate my company's participation in the Tequila Accelerator Program. <span className={reqClass}>*</span></label>
                <div className="flex mt-3">
                  <label className={radioItemClass}>
                    <input type="checkbox" name="agreedToTerms" className={`${radioClass} rounded-sm`} required />
                    <span>I agree</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-8">
              <div className="flex-1">
                <label className={labelClass}>Full Name of Person Submitting (Authorised Representative) <span className={reqClass}>*</span></label>
                <input type="text" name="declarationName" className={inputClass} required />
              </div>
              <div className="flex-1">
                <label className={labelClass}>Date of Submission <span className={reqClass}>*</span></label>
                <input type="date" name="declarationDate" className={inputClass} required />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-200 gap-4 md:gap-0">
            <button 
              type="button" 
              className={`w-full md:w-auto px-8 py-3.5 text-sm font-sans font-bold rounded-md transition-colors ${currentStep === 0 ? 'invisible' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}`}
              onClick={handlePrev}
            >
              Previous
            </button>
            <div className="text-sm font-sans font-medium text-slate-500 mb-2 md:mb-0">
              Section {currentStep + 1} of {totalSteps}
            </div>
            <button 
              type="button" 
              className={`w-full md:w-auto px-8 py-3.5 text-sm font-sans font-bold rounded-md shadow-md text-white transition-all ${isSubmitting ? 'bg-slate-500 opacity-70 cursor-not-allowed' : 'bg-[#121321] hover:bg-[#2a2c42] hover:-translate-y-px'}`}
              onClick={handleNext}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting... ⏳" : (currentStep === totalSteps - 1 ? "Submit questionnaire" : "Next section")}
            </button>
          </div>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Hiding scrollbar for the steps tracker */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default TequilaQuestionnaire;