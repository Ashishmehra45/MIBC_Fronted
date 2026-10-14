import React, { useState } from 'react';
import logo from '../assets/images/logo/logo-dark.png';

const Phase3Questionnaire = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    company: '',
    person: '',
    email: '',
    q1: '',
    q1cap: '',
    q2a: '',
    q2b: '',
    q2c: '',
    q3: [],
    q3adv: '',
    q4: '',
    q4name: '',
    q5: '',
    q6a: '',
    q6b: '',
    q7a: '',
    q7b: '',
    q7c: ''
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation (Checking required fields just like original script)
    const { company, person, email, q1, q2a, q2b, q2c, q4, q5 } = formData;
    if (!company || !person || !email || !q1 || !q2a || !q2b || !q2c || !q4 || !q5) {
      setErrorMsg('Please complete your email and every question marked *');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      company: formData.company,
      person: formData.person,
      email: formData.email,
      priceCommitment: formData.q1,
      priceCap: formData.q1cap,
      fob100: formData.q2a,
      fob300: formData.q2b,
      fob1000: formData.q2c,
      paymentInstruments: formData.q3,
      advancePercent: formData.q3adv,
      creditInsurance: formData.q4,
      insuranceName: formData.q4name,
      budgetShare: formData.q5,
      freightArranger: formData.q6a,
      forwarderName: formData.q6b,
      allocationBottles: formData.q7a,
      allocationSKUs: formData.q7b,
      allocationDate: formData.q7c
    };

    const isLocal = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
    const API_BASE_URL = isLocal ? 'http://localhost:5001' : 'https://mibc-backend-4.onrender.com';

    try {
      const response = await fetch(`${API_BASE_URL}/api/submit-phase3`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg('Submission failed: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMsg('Network Error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FBF8F1] text-[#4A4338] font-['Segoe_UI',Calibri,Helvetica,Arial,sans-serif] p-5 md:p-10 flex flex-col items-center justify-center">
        <div className="max-w-[760px] text-center px-5 py-15">
          <div className="text-center border-y-[1.5px] border-[#8B6E3D] py-2.5 mx-auto mb-6 max-w-[280px]">
            <b className="font-['Bookman_Old_Style',Georgia,serif] tracking-[3px] text-[#26221C] text-base">MÉXICO–INDIA</b>
            <span className="block text-[9px] tracking-[5px] text-[#4A4338] mt-[3px]">BUSINESS COUNCIL</span>
          </div>
          <h2 className="font-['Bookman_Old_Style',Georgia,serif] text-[#26221C] text-2xl mb-4 font-bold">Received. Gracias.</h2>
          <p className="text-[15px] leading-relaxed">
            Your seven answers are with the Council. They feed your state cost model and your Phase 4 negotiation card, and nothing more will be asked of what you have already answered.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#4A4338] font-['Segoe_UI',Calibri,Helvetica,Arial,sans-serif] p-5 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-[760px] pb-15">
        
        {/* Logo / Header */}
        <div className="text-center border-y-[1.5px] border-[#8B6E3D] py-2.5 mx-auto mb-6 max-w-[280px]">
          <b className="font-['Bookman_Old_Style',Georgia,serif] tracking-[3px] text-[#26221C] text-base">MÉXICO–INDIA</b>
          <span className="block text-[9px] tracking-[5px] text-[#4A4338] mt-[3px]">BUSINESS COUNCIL</span>
        </div>
        
        <div className="text-[#8B6E3D] font-bold tracking-[2.5px] text-xs uppercase">
          TEQUILA ACCELERATOR · COHORT 1 · PHASE 3 QUESTIONNAIRE
        </div>
        
        <h1 className="font-['Bookman_Old_Style',Georgia,serif] text-[#26221C] text-[27px] my-2 font-bold leading-tight">
          Seven questions before your numbers meet an importer
        </h1>
        
        <p className="italic text-[#4A4338] text-[13.5px] border-b border-[#8B6E3D] pb-4 mb-2">
          Ten minutes, and nothing you have answered before is asked again. These seven answers feed two documents only: your state-by-state cost model, and your Phase 4 negotiation card.
        </p>

        <form onSubmit={handleSubmit} className="mt-4">
          
          {/* USER INFO CARD */}
          <div className="bg-white border border-[#D8CDB6] rounded-lg py-4 px-[18px] my-3.5">
            <div className="font-bold text-[#26221C] mb-1">Company / house name <span className="text-[#8B6E3D]">*</span></div>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. Tequila Casa Ejemplo SA de CV" required className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
            <hr className="border-0 border-t border-[#D8CDB6] my-3" />
            
            <div className="font-bold text-[#26221C] mb-1">Your name and role <span className="text-[#8B6E3D]">*</span></div>
            <input type="text" name="person" value={formData.person} onChange={handleChange} placeholder="e.g. Maria Lopez, Export Director" required className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
            <hr className="border-0 border-t border-[#D8CDB6] my-3" />
            
            <div className="font-bold text-[#26221C] mb-1">Your email <span className="text-[#8B6E3D]">*</span></div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@yourhouse.com" required className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
          </div>

          {/* SECTION 1 */}
          <div className="mt-7 border-b border-[#D8CDB6] pb-1">
            <span className="font-['Bookman_Old_Style',Georgia,serif] text-[#A07E45] text-xl font-bold mr-2.5">01</span>
            <h2 className="inline text-[13px] tracking-[1.5px] text-[#26221C] font-bold m-0 uppercase">PRICE COMMITMENTS</h2>
          </div>
          
          <div className="bg-white border border-[#D8CDB6] rounded-lg py-4 px-[18px] my-3.5">
            <div className="font-bold text-[#26221C] mb-1">1 · Can you commit your India FOB unchanged for a full excise year? <span className="text-[#8B6E3D]">*</span></div>
            <div className="text-[12.5px] text-[#8B6E3D] italic my-1.5 mb-3">States lock your MRP annually; a mid-year reprice breaks your own registration mathematics.</div>
            
            {[
              'Yes, unchanged for the excise year', 
              'Yes, with a stated maximum revision', 
              'No, we revise more often'
            ].map(opt => (
              <label key={opt} className={`block px-2.5 py-2 border rounded-md my-1.5 cursor-pointer transition-colors ${formData.q1 === opt ? 'bg-[#F3EDE0] border-[#8B6E3D]' : 'bg-[#FBF8F1] border-[#D8CDB6] hover:border-[#8B6E3D]'}`}>
                <input type="radio" name="q1" value={opt} onChange={handleChange} checked={formData.q1 === opt} className="accent-[#8B6E3D] mr-2" />
                {opt} {opt === 'Yes, with a stated maximum revision' && '(state the cap below)'}
              </label>
            ))}
            <input type="text" name="q1cap" value={formData.q1cap} onChange={handleChange} placeholder="If a cap: state it, e.g. up to 5% at year-end" className="w-full mt-2 px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
          </div>

          <div className="bg-white border border-[#D8CDB6] rounded-lg py-4 px-[18px] my-3.5">
            <div className="font-bold text-[#26221C] mb-1">2 · Your FOB per case at three volumes (USD) <span className="text-[#8B6E3D]">*</span></div>
            <div className="text-[12.5px] text-[#8B6E3D] italic my-1.5 mb-3">For your lead SKU, per case as configured in your pricing template. Every importer's second question; also add these three rows to the template itself.</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <span className="text-[12.5px] text-[#4A4338] block mb-1">At 100 cases</span>
                <input type="number" step="0.01" name="q2a" value={formData.q2a} onChange={handleChange} placeholder="USD" className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
              </div>
              <div>
                <span className="text-[12.5px] text-[#4A4338] block mb-1">At 300 cases</span>
                <input type="number" step="0.01" name="q2b" value={formData.q2b} onChange={handleChange} placeholder="USD" className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
              </div>
              <div>
                <span className="text-[12.5px] text-[#4A4338] block mb-1">At 1,000 cases</span>
                <input type="number" step="0.01" name="q2c" value={formData.q2c} onChange={handleChange} placeholder="USD" className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
              </div>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="mt-7 border-b border-[#D8CDB6] pb-1">
            <span className="font-['Bookman_Old_Style',Georgia,serif] text-[#A07E45] text-xl font-bold mr-2.5">02</span>
            <h2 className="inline text-[13px] tracking-[1.5px] text-[#26221C] font-bold m-0 uppercase">MONEY MECHANICS</h2>
          </div>
          
          <div className="bg-white border border-[#D8CDB6] rounded-lg py-4 px-[18px] my-3.5">
            <div className="font-bold text-[#26221C] mb-1">3 · Which payment instruments do you accept? <span className="text-[#8B6E3D]">*</span></div>
            <div className="text-[12.5px] text-[#8B6E3D] italic my-1.5 mb-3">Phase 1 asked whether you can carry credit; this asks how you structure it.</div>
            
            {[
              'Advance payment', 
              'Letter of credit', 
              'Documents against payment', 
              'Open credit after first orders'
            ].map(opt => (
              <label key={opt} className={`block px-2.5 py-2 border rounded-md my-1.5 cursor-pointer transition-colors ${formData.q3.includes(opt) ? 'bg-[#F3EDE0] border-[#8B6E3D]' : 'bg-[#FBF8F1] border-[#D8CDB6] hover:border-[#8B6E3D]'}`}>
                <input type="checkbox" name="q3" value={opt} onChange={handleChange} checked={formData.q3.includes(opt)} className="accent-[#8B6E3D] mr-2" />
                {opt}
              </label>
            ))}
            <div className="mt-3">
              <span className="text-[12.5px] text-[#4A4338] block mb-1">Advance required on a first order (%):</span>
              <input type="number" name="q3adv" min="0" max="100" value={formData.q3adv} onChange={handleChange} placeholder="e.g. 30" className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
            </div>
          </div>

          <div className="bg-white border border-[#D8CDB6] rounded-lg py-4 px-[18px] my-3.5">
            <div className="font-bold text-[#26221C] mb-1">4 · Do you hold export credit insurance that could cover an Indian buyer? <span className="text-[#8B6E3D]">*</span></div>
            <div className="text-[12.5px] text-[#8B6E3D] italic my-1.5 mb-3">An insured seller negotiates terms from a different chair.</div>
            
            {[
              'Yes, Bancomext', 
              'Yes, private insurer', 
              'No', 
              'Not sure'
            ].map(opt => (
              <label key={opt} className={`block px-2.5 py-2 border rounded-md my-1.5 cursor-pointer transition-colors ${formData.q4 === opt ? 'bg-[#F3EDE0] border-[#8B6E3D]' : 'bg-[#FBF8F1] border-[#D8CDB6] hover:border-[#8B6E3D]'}`}>
                <input type="radio" name="q4" value={opt} onChange={handleChange} checked={formData.q4 === opt} className="accent-[#8B6E3D] mr-2" />
                {opt} {opt === 'Yes, private insurer' && '(name below)'}
              </label>
            ))}
            <input type="text" name="q4name" value={formData.q4name} onChange={handleChange} placeholder="Insurer name, if private" className="w-full mt-2 px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
          </div>

          {/* SECTION 3 */}
          <div className="mt-7 border-b border-[#D8CDB6] pb-1">
            <span className="font-['Bookman_Old_Style',Georgia,serif] text-[#A07E45] text-xl font-bold mr-2.5">03</span>
            <h2 className="inline text-[13px] tracking-[1.5px] text-[#26221C] font-bold m-0 uppercase">BUILDING THE MARKET</h2>
          </div>
          
          <div className="bg-white border border-[#D8CDB6] rounded-lg py-4 px-[18px] my-3.5">
            <div className="font-bold text-[#26221C] mb-1">5 · Of your Year 1 India budget, what share can go to market-building? <span className="text-[#8B6E3D]">*</span></div>
            <div className="text-[12.5px] text-[#8B6E3D] italic my-1.5 mb-3">Bar programmes, visibility, menu placements, rather than stock. Your budget band is known; its split decides your launch shape.</div>
            
            {[
              'Under 10%', 
              '10 to 25%', 
              '25 to 40%', 
              'Above 40%'
            ].map(opt => (
              <label key={opt} className={`block px-2.5 py-2 border rounded-md my-1.5 cursor-pointer transition-colors ${formData.q5 === opt ? 'bg-[#F3EDE0] border-[#8B6E3D]' : 'bg-[#FBF8F1] border-[#D8CDB6] hover:border-[#8B6E3D]'}`}>
                <input type="radio" name="q5" value={opt} onChange={handleChange} checked={formData.q5 === opt} className="accent-[#8B6E3D] mr-2" />
                {opt}
              </label>
            ))}
          </div>

          <div className="bg-white border border-[#D8CDB6] rounded-lg py-4 px-[18px] my-3.5">
            <div className="font-bold text-[#26221C] mb-1">6 · Freight arrangement <span className="text-[#8B6E3D]">*</span></div>
            <div className="text-[12.5px] text-[#8B6E3D] italic my-1.5 mb-3">First orders travel consolidated, and the houses with a forwarder move first.</div>
            
            <span className="text-[12.5px] text-[#4A4338] block mb-1">Who arranges your export freight today?</span>
            <input type="text" name="q6a" value={formData.q6a} onChange={handleChange} placeholder="e.g. our broker / the buyer / in-house" className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px] mb-3" />
            
            <span className="text-[12.5px] text-[#4A4338] block mb-1">A forwarder who can consolidate ex-Guadalajara (or "none yet"):</span>
            <input type="text" name="q6b" value={formData.q6b} onChange={handleChange} placeholder="Forwarder name, or none yet" className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
          </div>

          {/* SECTION 4 */}
          <div className="mt-7 border-b border-[#D8CDB6] pb-1">
            <span className="font-['Bookman_Old_Style',Georgia,serif] text-[#A07E45] text-xl font-bold mr-2.5">04</span>
            <h2 className="inline text-[13px] tracking-[1.5px] text-[#26221C] font-bold m-0 uppercase">THE TASTING EVENING</h2>
          </div>
          
          <div className="bg-white border border-[#D8CDB6] rounded-lg py-4 px-[18px] my-3.5">
            <div className="font-bold text-[#26221C] mb-1">7 · Your allocation, made concrete <span className="text-[#8B6E3D]">*</span></div>
            <div className="text-[12.5px] text-[#8B6E3D] italic my-1.5 mb-3">The Council books the exhibition lane against these three answers.</div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <span className="text-[12.5px] text-[#4A4338] block mb-1">Bottles</span>
                <input type="number" name="q7a" value={formData.q7a} onChange={handleChange} placeholder="e.g. 12" className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
              </div>
              <div>
                <span className="text-[12.5px] text-[#4A4338] block mb-1">SKUs</span>
                <input type="text" name="q7b" value={formData.q7b} onChange={handleChange} placeholder="e.g. Blanco, Reposado" className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px]" />
              </div>
              <div>
                <span className="text-[12.5px] text-[#4A4338] block mb-1">Ready by</span>
                <input type="date" name="q7c" value={formData.q7c} onChange={handleChange} className="w-full px-2.5 py-[9px] border border-[#D8CDB6] rounded-md bg-white focus:outline-none focus:border-[#8B6E3D] text-[15px] font-['Segoe_UI',Calibri,Helvetica,Arial,sans-serif]" />
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="text-[#8b2f2f] text-[12.5px] font-bold mt-2 text-center">
              {errorMsg}
            </div>
          )}

          <button type="submit" disabled={isSubmitting} className="w-full bg-[#8B6E3D] text-white border-none rounded-lg px-6 py-[13px] text-[15px] font-bold tracking-[1px] mt-4 hover:bg-[#7a5f33] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer">
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT TO THE COUNCIL'}
          </button>
          
          <div className="text-[12.5px] text-[#4A4338] text-center mt-3">
            Submit before your Phase 3 consultation. Complete answers move first.
          </div>
        </form>

        {/* FOOTER */}
        <div className="mt-8 pt-2.5 border-t-[1.5px] border-[#8B6E3D] text-[11.5px] leading-relaxed">
          Prepared by the México–India Business Council for Tequila Accelerator Cohort 1. Your answers travel only into your own model and negotiation card.<br/>
          <b className="text-[#26221C]">Ravi K. Tiwari, CEO</b> &nbsp; <span className="text-[#8B6E3D]">ceo@mexicoindia.org · www.mexicoindia.org · linkedin.com/company/mibcorg</span>
        </div>

      </div>
    </div>
  );
};

export default Phase3Questionnaire;