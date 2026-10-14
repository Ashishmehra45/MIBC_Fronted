import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo/logo-dark.png';

const Phase2Questionnaire = () => {
  const [userName, setUserName] = useState("Partner");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    impi_number: '',
    impi_status: '',
    convenio: '',
    caet: '',
    coa: '',
    padron: '',
    artwork_sent: '',
    label_has: [],
    rear_space: '',
    proof_link: '',
    home_volume: '',
    gsrp: '',
    india_quoted: '',
    notes: ''
  });

  useEffect(() => {
    const storedName = localStorage.getItem("mibc_user");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

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

  const showPopup = (message, isError = false) => {
    setToastMessage({ text: message, isError });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const isLocal = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
    const API_BASE_URL = isLocal ? 'http://localhost:5001' : 'https://mibc-backend-4.onrender.com';

    try {
      const response = await fetch(`${API_BASE_URL}/api/phase_2`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      if (result.success) {
        showPopup('Your Phase 2 evidence has been submitted successfully! 🎉');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        showPopup('Submission failed: ' + (result.message || 'Unknown error'), true);
      }
    } catch (error) {
      console.error(error);
      showPopup('An error occurred while connecting to the server. Please try again.', true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#25211C] font-['Calibri','Segoe_UI',system-ui,sans-serif] p-5 md:p-10 flex flex-col items-center">
      
      {/* Header Logo */}
      <div className="w-full max-w-[760px] text-center mt-10 mb-5">
        <img src={logo} alt="MIBC Logo" className="w-full max-w-[200px] mx-auto" />
      </div>

      <div className="w-full max-w-[760px] pb-24">
        <form onSubmit={handleSubmit} id="qform">
          
          {/* Hero Section */}
          <div className="border-y border-[#D8CDB6] py-8 mt-6">
            <div className="text-[11px] tracking-[0.32em] text-[#8A6D3C] font-bold uppercase mb-4">
              Tequila Accelerator · Cohort 1 · Phase 2
            </div>
            <h1 className="font-['Bookman_Old_Style',Georgia,serif] text-3xl md:text-[33px] leading-[1.18] mb-4">
              The Compliance Evidence Questionnaire
            </h1>
            <p className="text-[15px] text-[#494338] max-w-[640px] leading-[1.6]">
              Phase 1 asked what you intend. Phase 2 asks for <strong className="text-[#25211C] font-bold">evidence</strong>: the documents, numbers and files that turn a plan into a shipment. We will not re-ask anything you have already told us. Where a question needs a file, you send it by one reply-email; this form takes about ten minutes.
            </p>
            <p className="text-[15px] text-[#494338] max-w-[640px] leading-[1.6] mt-3">
              This form is the <strong className="text-[#25211C] font-bold">evidence half</strong> of your Phase 2 submission. The document half, your folder of files, is set out in <strong className="text-[#25211C] font-bold">India File 11, the Phase 2 Submission Pack</strong>. Together they are one submission with two doors.
            </p>
          </div>

          {/* BEFORE WE BEGIN */}
          <div className="mt-10">
            <div className="border-l-[3px] border-[#8A6D3C] pl-4 mb-2">
              <div className="text-[11px] tracking-[0.24em] text-[#8A6D3C] font-bold uppercase">BEFORE WE BEGIN</div>
              <div className="font-['Bookman_Old_Style',Georgia,serif] text-[21px] leading-[1.25] mt-1">One field, so we know it is you</div>
            </div>
            <p className="text-[13.5px] text-[#898276] italic pl-[18px] mt-2 mb-5">We match your evidence to everything already on file. Use the same email as your earlier questionnaires.</p>
            
            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Your company / legal entity name<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">As it appears on your Exporter Questionnaire, so your evidence files to the right house.</div>
              <input type="text" name="company_name" required placeholder="Nombre de la empresa" value={formData.company_name} onChange={handleChange} className="w-full mt-3 p-[11px_13px] text-[15px] bg-white border border-[#D8CDB6] rounded-sm focus:outline-none focus:border-[#8A6D3C] transition-colors placeholder-[#b3ab97]" />
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Your email<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">The address you used for the Exporter and India Intent questionnaires.</div>
              <input type="email" name="email" required placeholder="nombre@sucasa.mx" value={formData.email} onChange={handleChange} className="w-full mt-3 p-[11px_13px] text-[15px] bg-white border border-[#D8CDB6] rounded-sm focus:outline-none focus:border-[#8A6D3C] transition-colors placeholder-[#b3ab97]" />
            </div>
          </div>

          {/* PART 1 */}
          <div className="mt-10">
            <div className="border-l-[3px] border-[#8A6D3C] pl-4 mb-2">
              <div className="text-[11px] tracking-[0.24em] text-[#8A6D3C] font-bold uppercase">PART 1 OF 5</div>
              <div className="font-['Bookman_Old_Style',Georgia,serif] text-[21px] leading-[1.25] mt-1">Your trademark, as evidence</div>
            </div>
            <p className="text-[13.5px] text-[#898276] italic pl-[18px] mt-2 mb-5">You told us your India filing status in Phase 1. Now the Mexican side, because it gates your export certificate.</p>
            
            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">IMPI registration number for your marca<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">Your Mexican trademark. The CAET export certificate cannot be issued without it, so this is the first thing we verify. Enter the registration number, or the application number if pending.</div>
              <input type="text" name="impi_number" required placeholder="e.g. Registro 1234567, or 'Solicitud 2345678, pending'" value={formData.impi_number} onChange={handleChange} className="w-full mt-3 p-[11px_13px] text-[15px] bg-white border border-[#D8CDB6] rounded-sm focus:outline-none focus:border-[#8A6D3C] transition-colors placeholder-[#b3ab97]" />
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">IMPI status<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="flex flex-col gap-0.5 mt-3">
                {[
                  {val: 'Registered, certificate in hand', label: 'Registered · I hold the certificate'},
                  {val: 'Filed, in examination', label: 'Filed · in examination'},
                  {val: 'Not yet filed', label: 'Not yet filed'},
                  {val: 'Held by another party', label: 'Held by another party (bottler, partner)'}
                ].map(opt => (
                  <label key={opt.val} className="flex items-start gap-3 p-[9px_11px] border border-transparent rounded-sm cursor-pointer transition-colors hover:bg-white">
                    <input type="radio" name="impi_status" value={opt.val} required onChange={handleChange} checked={formData.impi_status === opt.val} className="mt-[3px] w-4 h-4 shrink-0 accent-[#8A6D3C]" />
                    <span className="text-[14.5px] text-[#494338] leading-[1.45]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Convenio de Corresponsabilidad<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">If another distillery bottles your brand, a Convenio ties your marca to their NOM. It matters for who can legally export your bottle.</div>
              <div className="flex flex-col gap-0.5 mt-3">
                {[
                  {val: 'We bottle ourselves, not applicable', label: 'We bottle ourselves · not applicable'},
                  {val: 'Yes, a Convenio is in place', label: 'A third party bottles us · Convenio is in place'},
                  {val: 'Third party bottles us, no Convenio yet', label: 'A third party bottles us · no Convenio yet'},
                  {val: 'Unsure', label: 'Unsure · guide me'}
                ].map(opt => (
                  <label key={opt.val} className="flex items-start gap-3 p-[9px_11px] border border-transparent rounded-sm cursor-pointer transition-colors hover:bg-white">
                    <input type="radio" name="convenio" value={opt.val} required onChange={handleChange} checked={formData.convenio === opt.val} className="mt-[3px] w-4 h-4 shrink-0 accent-[#8A6D3C]" />
                    <span className="text-[14.5px] text-[#494338] leading-[1.45]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* PART 2 */}
          <div className="mt-10">
            <div className="border-l-[3px] border-[#8A6D3C] pl-4 mb-2">
              <div className="text-[11px] tracking-[0.24em] text-[#8A6D3C] font-bold uppercase">PART 2 OF 5</div>
              <div className="font-['Bookman_Old_Style',Georgia,serif] text-[21px] leading-[1.25] mt-1">Your export file</div>
            </div>
            <p className="text-[13.5px] text-[#898276] italic pl-[18px] mt-2 mb-5">The documents a shipment needs. We are checking you can produce each one, not just that it exists somewhere.</p>
            
            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">CAET, the per-shipment export certificate<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">Issued per shipment by category, class, strength and brand, with a four-size maximum. Its precondition is your IMPI mark above.</div>
              <div className="flex flex-col gap-0.5 mt-3">
                {[
                  {val: 'Have issued CAET before', label: 'We have issued a CAET before'},
                  {val: 'Eligible but never issued', label: 'Eligible, but never issued one'},
                  {val: 'Not yet eligible (no IMPI mark)', label: 'Not yet eligible · no IMPI mark'},
                  {val: 'Need guidance', label: 'Need guidance'}
                ].map(opt => (
                  <label key={opt.val} className="flex items-start gap-3 p-[9px_11px] border border-transparent rounded-sm cursor-pointer transition-colors hover:bg-white">
                    <input type="radio" name="caet" value={opt.val} required onChange={handleChange} checked={formData.caet === opt.val} className="mt-[3px] w-4 h-4 shrink-0 accent-[#8A6D3C]" />
                    <span className="text-[14.5px] text-[#494338] leading-[1.45]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Certificate of Analysis (CoA), per batch<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">India's importer needs a lab CoA for the consignment. Confirm you can supply one per batch on request.</div>
              <div className="flex flex-col gap-0.5 mt-3">
                {[
                  {val: 'Yes, routinely per batch', label: 'Yes · we produce one routinely per batch'},
                  {val: 'Yes, on request from our lab', label: 'Yes · on request from our lab'},
                  {val: 'Not currently, need guidance', label: 'Not currently · need guidance'}
                ].map(opt => (
                  <label key={opt.val} className="flex items-start gap-3 p-[9px_11px] border border-transparent rounded-sm cursor-pointer transition-colors hover:bg-white">
                    <input type="radio" name="coa" value={opt.val} required onChange={handleChange} checked={formData.coa === opt.val} className="mt-[3px] w-4 h-4 shrink-0 accent-[#8A6D3C]" />
                    <span className="text-[14.5px] text-[#494338] leading-[1.45]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">SAT Padrón Sectorial, confirmed with your broker<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">In Phase 1 you told us your enrolment status. Please confirm it with your customs broker now, because a broker check catches a lapsed or category-wrong registration before it stops a shipment.</div>
              <div className="flex flex-col gap-0.5 mt-3">
                {[
                  {val: 'Broker confirmed, active for alcoholic beverages', label: 'Broker confirmed · active for alcoholic beverages'},
                  {val: 'Enrolled, not yet re-confirmed with broker', label: 'Enrolled · not yet re-confirmed with broker'},
                  {val: 'Not enrolled or unsure', label: 'Not enrolled, or unsure · need guidance'}
                ].map(opt => (
                  <label key={opt.val} className="flex items-start gap-3 p-[9px_11px] border border-transparent rounded-sm cursor-pointer transition-colors hover:bg-white">
                    <input type="radio" name="padron" value={opt.val} required onChange={handleChange} checked={formData.padron === opt.val} className="mt-[3px] w-4 h-4 shrink-0 accent-[#8A6D3C]" />
                    <span className="text-[14.5px] text-[#494338] leading-[1.45]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* PART 3 */}
          <div className="mt-10">
            <div className="border-l-[3px] border-[#8A6D3C] pl-4 mb-2">
              <div className="text-[11px] tracking-[0.24em] text-[#8A6D3C] font-bold uppercase">PART 3 OF 5</div>
              <div className="font-['Bookman_Old_Style',Georgia,serif] text-[21px] leading-[1.25] mt-1">Your label, as it physically ships</div>
            </div>
            <p className="text-[13.5px] text-[#898276] italic pl-[18px] mt-2 mb-5">This builds your label adaptation review. India's additions go on a rear over-label; we need to see what your bottle carries today.</p>
            
            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Send your current label artwork by email<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#6D552F] font-bold mt-1.5 leading-[1.5]">Send front and back artwork for your lead SKU with your Phase 2 folder (see File 11), to ceo@mexicoindia.org or the drive link your office receives, files named Brand_Document. Print-ready if possible. Then confirm below.</div>
              <div className="flex flex-col gap-0.5 mt-3">
                {[
                  {val: 'Sent, print-ready (AI/PDF/INDD)', label: 'Sent · print-ready file (AI, PDF or INDD)'},
                  {val: 'Sent, image only (JPG/PNG)', label: 'Sent · image only (JPG or PNG)'},
                  {val: 'Will send within 48 hours', label: 'Will send within 48 hours'}
                ].map(opt => (
                  <label key={opt.val} className="flex items-start gap-3 p-[9px_11px] border border-transparent rounded-sm cursor-pointer transition-colors hover:bg-white">
                    <input type="radio" name="artwork_sent" value={opt.val} required onChange={handleChange} checked={formData.artwork_sent === opt.val} className="mt-[3px] w-4 h-4 shrink-0 accent-[#8A6D3C]" />
                    <span className="text-[14.5px] text-[#494338] leading-[1.45]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">What your label already states<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">Tick everything printed on your bottle today. This tells us what the India over-label must add versus what is already there.</div>
              <div className="flex flex-col gap-0.5 mt-3">
                {[
                  {val: 'NOM number', label: 'NOM number'},
                  {val: 'ABV / Alc. Vol.', label: 'Alcohol strength (ABV / Alc. Vol.)'},
                  {val: 'Volume in ml', label: 'Net content in ml'},
                  {val: 'Country of origin (Producto de México)', label: 'Country of origin (Producto de México)'},
                  {val: 'Allergen / sulfite statement', label: 'Allergen or sulfite statement'},
                  {val: 'Responsible-drinking mark', label: 'Any responsible-drinking mark'}
                ].map(opt => (
                  <label key={opt.val} className="flex items-start gap-3 p-[9px_11px] border border-transparent rounded-sm cursor-pointer transition-colors hover:bg-white">
                    <input type="checkbox" name="label_has" value={opt.val} onChange={handleChange} checked={formData.label_has.includes(opt.val)} className="mt-[3px] w-4 h-4 shrink-0 accent-[#8A6D3C]" />
                    <span className="text-[14.5px] text-[#494338] leading-[1.45]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Rear-label space for India's over-label<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">India adds a rear over-label: Standard Drink declaration, statutory warning, importer details and MRP. It needs clear space on a workable surface.</div>
              <div className="flex flex-col gap-0.5 mt-3">
                {[
                  {val: 'Yes, clear flat rear space on glass', label: 'Yes · clear flat rear space, standard glass'},
                  {val: 'Limited space, rear largely used', label: 'Limited · rear is largely used already'},
                  {val: 'Unusual surface (ceramic, embossed, irregular)', label: 'Unusual surface · ceramic, embossed or irregular'}
                ].map(opt => (
                  <label key={opt.val} className="flex items-start gap-3 p-[9px_11px] border border-transparent rounded-sm cursor-pointer transition-colors hover:bg-white">
                    <input type="radio" name="rear_space" value={opt.val} required onChange={handleChange} checked={formData.rear_space === opt.val} className="mt-[3px] w-4 h-4 shrink-0 accent-[#8A6D3C]" />
                    <span className="text-[14.5px] text-[#494338] leading-[1.45]">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* PART 4 */}
          <div className="mt-10">
            <div className="border-l-[3px] border-[#8A6D3C] pl-4 mb-2">
              <div className="text-[11px] tracking-[0.24em] text-[#8A6D3C] font-bold uppercase">PART 4 OF 5</div>
              <div className="font-['Bookman_Old_Style',Georgia,serif] text-[21px] leading-[1.25] mt-1">Proof you sell at home</div>
            </div>
            <p className="text-[13.5px] text-[#898276] italic pl-[18px] mt-2 mb-5">Indian importers check this first. One verifiable proof point is worth more than any description.</p>
            
            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">One home-market proof point<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#6D552F] font-bold mt-1.5 leading-[1.5]">A link an importer could open: a retailer listing, your distributor's page, an award, or press. Paste one URL. If you have none online, name your largest current account instead.</div>
              <input type="url" name="proof_link" required placeholder="https://... or the name of your largest account" value={formData.proof_link} onChange={handleChange} className="w-full mt-3 p-[11px_13px] text-[15px] bg-white border border-[#D8CDB6] rounded-sm focus:outline-none focus:border-[#8A6D3C] transition-colors placeholder-[#b3ab97]" />
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Home-market annual volume, last full year<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">Your own market or existing exports, whichever is larger. Cases of any size, approximate is fine. This is a proof of scale, not a commitment.</div>
              <input type="text" name="home_volume" required placeholder="e.g. 'about 2,400 cases in 2025, Mexico + USA'" value={formData.home_volume} onChange={handleChange} className="w-full mt-3 p-[11px_13px] text-[15px] bg-white border border-[#D8CDB6] rounded-sm focus:outline-none focus:border-[#8A6D3C] transition-colors placeholder-[#b3ab97]" />
            </div>
          </div>

          {/* PART 5 */}
          <div className="mt-10">
            <div className="border-l-[3px] border-[#8A6D3C] pl-4 mb-2">
              <div className="text-[11px] tracking-[0.24em] text-[#8A6D3C] font-bold uppercase">PART 5 OF 5</div>
              <div className="font-['Bookman_Old_Style',Georgia,serif] text-[21px] leading-[1.25] mt-1">Your price floor</div>
            </div>
            <p className="text-[13.5px] text-[#898276] italic pl-[18px] mt-2 mb-5">This is the bridge to Phase 3, where we build your landed-cost model. We take the anchor now; the full model comes later.</p>
            
            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Global Suggested Retail Price (GSRP) for your lead SKU<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">The shelf price you protect for this SKU in your strongest market today. Your currency. This anchors where India can realistically sit.</div>
              <input type="text" name="gsrp" required placeholder="e.g. 'USD 42 in the USA' or 'MXN 780 in Mexico'" value={formData.gsrp} onChange={handleChange} className="w-full mt-3 p-[11px_13px] text-[15px] bg-white border border-[#D8CDB6] rounded-sm focus:outline-none focus:border-[#8A6D3C] transition-colors placeholder-[#b3ab97]" />
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Any India price already quoted to anyone<span className="text-[#6D552F] ml-1">*</span></label>
              <div className="text-[13px] text-[#494338] mt-1.5 leading-[1.5]">If you have named a price to any Indian contact, tell us, so we do not build a model that contradicts an anchor already in the market. If none, say so.</div>
              <input type="text" name="india_quoted" required placeholder="e.g. 'None yet' or 'quoted ~₹6,000 to one importer in June'" value={formData.india_quoted} onChange={handleChange} className="w-full mt-3 p-[11px_13px] text-[15px] bg-white border border-[#D8CDB6] rounded-sm focus:outline-none focus:border-[#8A6D3C] transition-colors placeholder-[#b3ab97]" />
            </div>

            <div className="bg-[#FAF3E3] border border-[#D8CDB6] rounded-sm p-5 mb-4">
              <label className="text-[15.5px] font-bold leading-[1.4]">Anything else before your compliance review? (optional)</label>
              <textarea name="notes" placeholder="Optional. Anything about your documents, label or price we should know before 1:1 No. 2." value={formData.notes} onChange={handleChange} className="w-full mt-3 p-[11px_13px] text-[15px] bg-white border border-[#D8CDB6] rounded-sm focus:outline-none focus:border-[#8A6D3C] transition-colors placeholder-[#b3ab97] resize-y min-h-[74px]"></textarea>
            </div>

            <div className="bg-[#F3E8D2] border border-[#D8CDB6] rounded-sm p-4 mt-3.5 flex gap-[13px] items-start">
              <span className="font-['Bookman_Old_Style',serif] text-xl text-[#6D552F] leading-none shrink-0">§</span>
              <p className="text-[13px] text-[#494338] leading-[1.55] m-0">
                <strong className="text-[#25211C] font-bold">Your folder completes this.</strong> Send your label artwork, and the rest of your Phase 2 folder from File 11 (IMPI certificate, a sample CoA, your English brand deck, bottle photography), to <strong className="text-[#25211C] font-bold">ceo@mexicoindia.org</strong> or the drive link your office receives, from the same address you used here. Your evidence and your files are matched by that email, and together they build your Compliance File for consultation No. 2.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button type="submit" disabled={isSubmitting} className="font-['Calibri',sans-serif] text-[15px] font-bold tracking-[0.06em] text-[#FBF8F1] bg-[#25211C] border-none px-11 py-[15px] rounded-sm cursor-pointer transition-colors hover:bg-[#6D552F] disabled:opacity-55 disabled:cursor-not-allowed">
              {isSubmitting ? 'Submitting...' : 'Submit my evidence'}
            </button>
            <p className="text-[12.5px] text-[#898276] mt-3.5 leading-[1.5]">Confidential, between your house and MIBC. Please submit before your second consultation.</p>
          </div>

        </form>

        {/* FOOTER */}
        <div className="mt-14 pt-5 border-t border-[#D8CDB6] text-center text-[12px] text-[#898276] leading-[1.7]">
          Ravi K. Tiwari, CEO · <a href="mailto:ceo@mexicoindia.org" className="text-[#6D552F] no-underline">ceo@mexicoindia.org</a> · 
          <a href="https://www.mexicoindia.org" className="text-[#6D552F] no-underline ml-1">www.mexicoindia.org</a> · 
          <a href="https://linkedin.com/company/mibcorg" className="text-[#6D552F] no-underline ml-1">linkedin.com/company/mibcorg</a><br/>
          The Tequila Accelerator · Cohort 1 · Phase 2 · Compliance & Market Navigation
        </div>

      </div>

      {/* Tailwind Custom Toast Message */}
      <div 
        className={`fixed bottom-8 right-8 px-6 py-4 rounded-lg font-['Calibri',sans-serif] text-[15px] shadow-xl z-50 transition-all duration-300 transform ${
          toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0 pointer-events-none'
        } ${toastMessage?.isError ? 'bg-[#8a2f2f] text-white font-bold' : 'bg-[#25211C] text-[#FBF8F1]'}`}
      >
        {toastMessage?.text}
      </div>

    </div>
  );
};

export default Phase2Questionnaire;