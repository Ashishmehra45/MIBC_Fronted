import React, { useState } from 'react';
import logo from '../assets/images/logo/logo-dark.png';

const IntentQuestionnaire = () => {
  const totalSteps = 7;
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Toast State
  const [toastMessage, setToastMessage] = useState(null);

  // Form State Management
  const [formData, setFormData] = useState({
    email: '',
    leadSKU: '',
    shelfPositionAmbition: '',
    indiaThesis: '',
    priorityLaunchMarket: [],
    firstChannelFocus: '',
    targetFirstShipment: '',
    year1VolumeAmbition: '',
    distributionPreference: '',
    existingConversations: '',
    reachedIndiaBefore: '',
    reachedIndiaDetails: '',
    indiaTrademarkStatus: '',
    abvLeadSKU: '',
    brandOwnership: '',
    exportingEntity: '',
    satPadron: '',
    canRun750ml: '',
    labelArtworkSource: '',
    overLabelConstraints: '',
    indiaOwner: '',
    additionalInfo: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData((prev) => {
        const currentList = prev[name] || [];
        if (checked) return { ...prev, [name]: [...currentList, value] };
        return { ...prev, [name]: currentList.filter((item) => item !== value) };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Toast Function
  const showPopup = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // 🚀 Next Button Logic (Validation Hata Di Hai - Direct Next Jayega)
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isLocal = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
    const API_BASE_URL = isLocal ? 'http://localhost:5001' : 'https://mibc-backend-4.onrender.com';

    try {
      const response = await fetch(`${API_BASE_URL}/api/Phase-1-register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      if (result.success) {
        showPopup('Success! Form submitted successfully. 🎉');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        showPopup('Error submitting form: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error(error);
      showPopup('Failed to connect to backend.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Body Wrapper
    <div className="min-h-screen bg-[#f8f6f0] text-[#2b2b2b] font-['Inter',sans-serif] p-5 md:p-10 flex justify-center">
      
      <div className="max-w-3xl w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <img 
            className="w-[300px] h-[80px] object-contain mx-auto mb-4" 
            src={logo} 
            alt="Logo" 
          />
          <h4 className="text-xs tracking-[2px] text-[#9e896a] uppercase mb-2 font-semibold">
            TEQUILA ACCELERATOR • COHORT 1
          </h4>
          <h1 className="font-['Playfair_Display',serif] text-3xl md:text-4xl m-0 mb-3 font-bold">
            The India Intent Questionnaire
          </h1>
          <p className="text-[#666] text-sm mb-2">About 10 minutes • Confidential, between your house and MIBC</p>
          <p className="text-xs text-[#666] leading-relaxed mt-4 max-w-2xl mx-auto">
            You have already told us about your company, products, certifications, capacity and pricing. We will not ask any of that again. These questions cover one thing only: <strong>your intent for India.</strong> Your answers shape your India Opportunity Briefing and your private consultation.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-1 mb-8">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div 
              key={index} 
              className={`h-1 flex-1 transition-colors duration-300 ${index <= currentStep ? 'bg-[#9e896a]' : 'bg-[#d8d0c5]'}`}
            ></div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white border border-[#d8d0c5] rounded-lg p-6 md:p-10 shadow-sm animate-[fadeIn_0.4s_ease-in-out]">
          <form onSubmit={handleSubmit} id="intentForm">
            
            {/* STEP 0 */}
            <div className={currentStep === 0 ? 'block' : 'hidden'}>
              <span className="text-[11px] uppercase text-[#9e896a] tracking-[1.5px] font-bold mb-2 block">BEFORE WE BEGIN</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl mb-4 mt-0 font-semibold">One field, so we know it is you</h2>
              <span className="text-xs text-[#666] mb-6 block leading-relaxed">We match your answers to everything already on file. Nothing else about your identity will be asked.</span>
              
              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Your email <span className="text-[#9e896a]">*</span></label>
                <span className="text-xs text-[#666] mb-2 block leading-relaxed">The address you used for the Exporter Questionnaire.</span>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="ashishmehra6266@gmail.com" 
                  value={formData.email} 
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d8d0c5] rounded-md text-sm bg-white focus:outline-none focus:border-[#9e896a] transition-colors"
                />
              </div>
            </div>

            {/* STEP 1 */}
            <div className={currentStep === 1 ? 'block' : 'hidden'}>
              <span className="text-[11px] uppercase text-[#9e896a] tracking-[1.5px] font-bold mb-2 block">PART 1 OF 6 • YOUR INDIA PLAY</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl mb-6 mt-0 font-semibold">Three decisions that shape everything we build for you</h2>
              
              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Your lead SKU for India <span className="text-[#9e896a]">*</span></label>
                <span className="text-xs text-[#666] mb-2 block leading-relaxed">Which ONE expression leads your entry? e.g. "Blanco 750ml".</span>
                <input 
                  type="text" 
                  name="leadSKU" 
                  value={formData.leadSKU} 
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d8d0c5] rounded-md text-sm bg-white focus:outline-none focus:border-[#9e896a] transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Your shelf position ambition <span className="text-[#9e896a]">*</span></label>
                <span className="text-xs text-[#666] mb-2 block leading-relaxed">Where should your lead SKU sit on the Indian shelf?</span>
                
                {[
                  { val: 'Accessible', label: 'Accessible: ₹3,000–5,000 (about USD 35–60)' },
                  { val: 'Premium', label: 'Premium: ₹6,000–10,000 (about USD 70–115)' },
                  { val: 'Super-premium', label: 'Super-premium: ₹15,000+ (about USD 170+)' },
                  { val: 'Not sure', label: 'Not sure - position me based on my numbers' }
                ].map(opt => (
                  <label key={opt.val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.shelfPositionAmbition === opt.val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="shelfPositionAmbition" value={opt.val} onChange={handleChange} checked={formData.shelfPositionAmbition === opt.val} className="mr-3 accent-[#9e896a]" /> 
                    {opt.label}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Your India thesis, one line <span className="text-[#9e896a]">*</span></label>
                <span className="text-xs text-[#666] mb-2 block leading-relaxed">Complete the sentence: "In India, [your brand] will be the ___ for ___."</span>
                <input 
                  type="text" 
                  name="indiaThesis" 
                  value={formData.indiaThesis} 
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d8d0c5] rounded-md text-sm bg-white focus:outline-none focus:border-[#9e896a] transition-colors"
                />
              </div>
            </div>

            {/* STEP 2 */}
            <div className={currentStep === 2 ? 'block' : 'hidden'}>
              <span className="text-[11px] uppercase text-[#9e896a] tracking-[1.5px] font-bold mb-2 block">PART 2 OF 6 • PRIORITY AND AMBITION</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl mb-6 mt-0 font-semibold">India is 28 markets. Your budget says start narrow.</h2>
              
              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Priority launch market <span className="text-[#9e896a]">*</span></label>
                <span className="text-xs text-[#666] mb-2 block leading-relaxed">Choose up to TWO.</span>
                
                {['Maharashtra (Mumbai)', 'Delhi NCR', 'Karnataka (Bengaluru)', 'Goa', 'Haryana (Gurugram)', 'Telangana (Hyderabad)', 'Guide me'].map(city => (
                  <label key={city} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.priorityLaunchMarket.includes(city) ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="checkbox" name="priorityLaunchMarket" value={city} onChange={handleChange} checked={formData.priorityLaunchMarket.includes(city)} className="mr-3 accent-[#9e896a]" /> 
                    {city}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">First channel focus <span className="text-[#9e896a]">*</span></label>
                {['Luxury on-trade', 'Premium retail', 'Duty-free', 'Guide me'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.firstChannelFocus === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="firstChannelFocus" value={val} onChange={handleChange} checked={formData.firstChannelFocus === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Target for first commercial shipment <span className="text-[#9e896a]">*</span></label>
                {['Q4 2026', 'H1 2027', 'H2 2027', 'Whenever ready'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.targetFirstShipment === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="targetFirstShipment" value={val} onChange={handleChange} checked={formData.targetFirstShipment === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Year 1 India volume ambition <span className="text-[#9e896a]">*</span></label>
                {['Up to 500 cases', '500-1,000 cases', '1,000-3,000 cases', 'Above 3,000 cases', 'Guide me'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.year1VolumeAmbition === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="year1VolumeAmbition" value={val} onChange={handleChange} checked={formData.year1VolumeAmbition === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Distribution structure preference <span className="text-[#9e896a]">*</span></label>
                {['National importer', 'State-wise partners', 'No preference'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.distributionPreference === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="distributionPreference" value={val} onChange={handleChange} checked={formData.distributionPreference === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>
            </div>

            {/* STEP 3 */}
            <div className={currentStep === 3 ? 'block' : 'hidden'}>
              <span className="text-[11px] uppercase text-[#9e896a] tracking-[1.5px] font-bold mb-2 block">PART 3 OF 6 • YOUR INDIA FOOTPRINT TODAY</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl mb-6 mt-0 font-semibold">What already exists, so we never duplicate or collide</h2>
              
              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Existing India conversations <span className="text-[#9e896a]">*</span></label>
                <span className="text-xs text-[#666] mb-2 block leading-relaxed">Any current or past contact with Indian importers, distributors, hotel groups or retailers? Name and stage, or write "None yet."</span>
                <textarea 
                  name="existingConversations" 
                  value={formData.existingConversations} 
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d8d0c5] rounded-md text-sm bg-white focus:outline-none focus:border-[#9e896a] transition-colors min-h-[80px]"
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Has your product ever reached India in any form? <span className="text-[#9e896a]">*</span></label>
                {['Commercial shipment', 'Samples only', 'Duty-free', 'No, never'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.reachedIndiaBefore === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="reachedIndiaBefore" value={val} onChange={handleChange} checked={formData.reachedIndiaBefore === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">If yes: briefly, what and when?</label>
                <input 
                  type="text" 
                  name="reachedIndiaDetails" 
                  value={formData.reachedIndiaDetails} 
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d8d0c5] rounded-md text-sm bg-white focus:outline-none focus:border-[#9e896a] transition-colors" 
                />
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">India trademark status for your brand name <span className="text-[#9e896a]">*</span></label>
                {['Registered', 'Filed', 'Not filed', 'Need guidance'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.indiaTrademarkStatus === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="indiaTrademarkStatus" value={val} onChange={handleChange} checked={formData.indiaTrademarkStatus === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>
            </div>

            {/* STEP 4 */}
            <div className={currentStep === 4 ? 'block' : 'hidden'}>
              <span className="text-[11px] uppercase text-[#9e896a] tracking-[1.5px] font-bold mb-2 block">PART 4 OF 6 • REGULATORY FACT CHECK</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl mb-2 mt-0 font-semibold">Four facts your Exporter Questionnaire never asked</h2>
              <span className="text-xs text-[#666] mb-6 block leading-relaxed">Short, factual and decisive for contracts and duty math.</span>
              
              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Alcohol strength (ABV) of your lead SKU <span className="text-[#9e896a]">*</span></label>
                <span className="text-xs text-[#666] mb-2 block leading-relaxed">e.g. "40%" or "38%". It drives your India label and, in some states, your duty.</span>
                <input 
                  type="text" 
                  name="abvLeadSKU" 
                  value={formData.abvLeadSKU} 
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d8d0c5] rounded-md text-sm bg-white focus:outline-none focus:border-[#9e896a] transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Brand ownership <span className="text-[#9e896a]">*</span></label>
                {['We own the brand', 'Represent under agreement', 'Shared ownership', 'Other'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.brandOwnership === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="brandOwnership" value={val} onChange={handleChange} checked={formData.brandOwnership === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Exporting entity <span className="text-[#9e896a]">*</span></label>
                {['Our own company', 'Third-party comercializadora', 'Distribution partner', 'Not yet defined'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.exportingEntity === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="exportingEntity" value={val} onChange={handleChange} checked={formData.exportingEntity === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">SAT Padrón de Exportadores Sectorial <span className="text-[#9e896a]">*</span></label>
                {['Yes, enrolled', 'No', 'Customs broker handles it', 'Not sure'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.satPadron === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="satPadron" value={val} onChange={handleChange} checked={formData.satPadron === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>
            </div>

            {/* STEP 5 */}
            <div className={currentStep === 5 ? 'block' : 'hidden'}>
              <span className="text-[11px] uppercase text-[#9e896a] tracking-[1.5px] font-bold mb-2 block">PART 5 OF 6 • LABEL AND PACK</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl mb-6 mt-0 font-semibold">Phase 2 files these. Your answers here save weeks.</h2>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Can you run a 750ml line for India? <span className="text-[#9e896a]">*</span></label>
                {['Yes, already bottle', 'Yes, can add', 'No, 700ml only', 'Other'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.canRun750ml === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="canRun750ml" value={val} onChange={handleChange} checked={formData.canRun750ml === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Who holds your label artwork source files? <span className="text-[#9e896a]">*</span></label>
                {['We do', 'Our designer', 'Our printer', 'Unsure'].map(val => (
                  <label key={val} className={`block border rounded-md p-4 mb-2 cursor-pointer transition-all text-sm hover:border-[#9e896a] ${formData.labelArtworkSource === val ? 'bg-[#f0ebe1] border-[#9e896a]' : 'border-[#d8d0c5]'}`}>
                    <input type="radio" name="labelArtworkSource" value={val} onChange={handleChange} checked={formData.labelArtworkSource === val} className="mr-3 accent-[#9e896a]" /> 
                    {val}
                  </label>
                ))}
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Over-label constraints (optional)</label>
                <textarea 
                  name="overLabelConstraints" 
                  value={formData.overLabelConstraints} 
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d8d0c5] rounded-md text-sm bg-white focus:outline-none focus:border-[#9e896a] transition-colors min-h-[80px]"
                ></textarea>
              </div>
            </div>

            {/* STEP 6 */}
            <div className={currentStep === 6 ? 'block' : 'hidden'}>
              <span className="text-[11px] uppercase text-[#9e896a] tracking-[1.5px] font-bold mb-2 block">PART 6 OF 6 • THE ROOM</span>
              <h2 className="font-['Playfair_Display',serif] text-2xl mb-6 mt-0 font-semibold">Who we build with</h2>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Who owns India in your company? <span className="text-[#9e896a]">*</span></label>
                <span className="text-xs text-[#666] mb-2 block leading-relaxed">Name and role of the person who can say yes to pricing and partnership decisions.</span>
                <input 
                  type="text" 
                  name="indiaOwner" 
                  value={formData.indiaOwner} 
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d8d0c5] rounded-md text-sm bg-white focus:outline-none focus:border-[#9e896a] transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block font-medium text-sm mb-2">Anything we should know before your consultation? (optional)</label>
                <textarea 
                  name="additionalInfo" 
                  value={formData.additionalInfo} 
                  onChange={handleChange}
                  className="w-full p-3 border border-[#d8d0c5] rounded-md text-sm bg-white focus:outline-none focus:border-[#9e896a] transition-colors min-h-[80px]"
                ></textarea>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <button 
                  type="button" 
                  onClick={handleBack}
                  className="bg-white text-[#2b2b2b] border border-[#d8d0c5] hover:bg-gray-50 px-6 py-3 rounded-md text-sm font-medium transition-colors"
                >
                  Back
                </button>
              )}
              
              {currentStep < totalSteps - 1 ? (
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="ml-auto bg-[#8c734b] hover:bg-[#735e3c] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors"
                >
                  Next
                </button>
              ) : (
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="ml-auto bg-[#8c734b] hover:bg-[#735e3c] text-white px-6 py-3 rounded-md text-sm font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Tailwind Custom Toast Message */}
      <div 
        className={`fixed bottom-8 right-8 bg-[#2b2b2b] text-white px-6 py-4 rounded-lg font-['Inter',sans-serif] text-sm shadow-xl z-50 transition-all duration-300 transform ${
          toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        {toastMessage}
      </div>
      
    </div>
  );
};

export default IntentQuestionnaire;