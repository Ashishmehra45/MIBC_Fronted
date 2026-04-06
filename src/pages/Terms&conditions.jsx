import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
  const lastUpdated = "April 2026"; // Current date ke hisaab se update kar lena

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 font-sans pb-24 transition-colors duration-500">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-24 pb-12 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#A98842]/10 dark:bg-[#A98842]/20 text-[#A98842] rounded-2xl flex items-center justify-center shadow-sm transition-colors">
              <FileText size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
            Terms and <span className="text-[#A98842]">Conditions</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 font-bold text-sm tracking-widest uppercase transition-colors">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white dark:bg-slate-900 rounded-[32px] md:rounded-[40px] p-8 md:p-14 shadow-sm border border-gray-100 dark:border-slate-800 transition-colors duration-500">
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 transition-colors">
            
            
            {/* SECTION 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors">
                1. Acceptance of Terms
              </h2>
              <p className="leading-relaxed">
                By using this website, applying for membership, or participating in MIBC events, trade missions, and accelerator programs, you represent that you have read, understood, and agree to these Terms. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </div>

            {/* SECTION 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors">
                2. Membership and Services
              </h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-[#A98842]">
                <li className="leading-relaxed">
                  <strong className="text-gray-800 dark:text-gray-200">Application:</strong> Membership applications are subject to review and approval by the MIBC committee. We reserve the right to accept or decline any application at our sole discretion.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-800 dark:text-gray-200">Benefits:</strong> Membership benefits (such as market intelligence, B2B matchmaking, and event access) are provided as described in your respective membership tier (Founding, Corporate, or Associate).
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-800 dark:text-gray-200">Accuracy of Information:</strong> You agree to provide accurate and complete information during the membership application process and keep it updated.
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors">
                3. Intellectual Property
              </h2>
              <p className="leading-relaxed">
                All content on this website, including but not limited to market intelligence reports, text, graphics, logos, images, and videos, is the exclusive property of MIBC or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from our content without explicit written permission from MIBC.
              </p>
            </div>

            {/* SECTION 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors">
                4. Confidentiality
              </h2>
              <p className="leading-relaxed">
                As a member or participant in our programs, you may receive access to confidential business intelligence, trade opportunities, or proprietary data. You agree to maintain the confidentiality of such information and use it solely for the purpose of evaluating bilateral trade and investment opportunities.
              </p>
            </div>

           

            {/* SECTION 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors">
                5. Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                MIBC acts as a facilitator for bilateral trade and investment. While we strive to provide accurate intelligence and valuable introductions, we do not guarantee specific business outcomes, financial returns, or regulatory approvals. MIBC, its directors, and employees shall not be liable for any direct, indirect, incidental, or consequential damages arising from your business decisions based on our services or introductions.
              </p>
            </div>

            {/* SECTION 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors">
                6. Governing Law and Dispute Resolution
              </h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms or MIBC services shall be subject to the exclusive jurisdiction of the courts located in Mumbai/New Delhi, India.
              </p>
            </div>

            {/* SECTION 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4 transition-colors">
                7. Changes to Terms
              </h2>
              <p className="leading-relaxed">
                MIBC reserves the right to update or modify these Terms at any time. Changes will be effective immediately upon posting to the website. Continued use of the website or services constitutes your acceptance of the revised Terms.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h3>
              <p className="leading-relaxed mb-2">
                If you have any questions or concerns regarding these Terms, please contact us at:
              </p>
              <p className="font-bold text-[#A98842]">
                Email: <a href="mailto:info@mexicoindia.org" className="hover:underline">info@mexicoindia.org</a>
              </p>
            </div>

          </div>
        </div>
        
        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#A98842] dark:hover:text-[#A98842] font-bold text-sm tracking-widest uppercase transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

      </section>
    </div>
  );
};

export default TermsAndConditions;