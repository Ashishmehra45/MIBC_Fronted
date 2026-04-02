import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2'; // 1. Swal Import kiya

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false });

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Contact Phone Number",
      details: ["+91 90391 39953", "+91 97551 78432"]
    },
    {
      icon: <Mail size={24} />,
      title: "Our Email Address",
      details: ["office.ceo@mexicoindia.org", "info@mexicoindia.org"]
    },
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: ["C06 At, Chhatrapati Shivaji Maharaj", "International Airport Mumbai,", "Maharashtra 400099"]
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true });

    const BASE_URL = window.location.hostname === "localhost" 
      ? "http://localhost:5001" 
      : "https://mibc-backend-4.onrender.com";

    try {
      const response = await axios.post(`${BASE_URL}/api/contact`, formData);

      if (response.data.success) {
        setStatus({ loading: false });
        
        // 2. Success SweetAlert
        Swal.fire({
          title: 'Success!',
          text: response.data.message || "Your inquiry has been submitted successfully.",
          icon: 'success',
          confirmButtonColor: '#A98842',
          background: document.documentElement.classList.contains('dark') ? '#111111' : '#ffffff',
          color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
        });

        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus({ loading: false });

      const errorMsg = error.response?.data?.error || "Connection failed. Please try again.";
      
      // 3. Error SweetAlert
      Swal.fire({
        title: 'Error!',
        text: errorMsg,
        icon: 'error',
        confirmButtonColor: '#d33',
        background: document.documentElement.classList.contains('dark') ? '#111111' : '#ffffff',
        color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#000000',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 font-sans pb-24 transition-colors duration-500">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <span className="text-[#A98842] font-bold text-[10px] tracking-[0.3em] uppercase mb-2 block">Contact Form</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Our Contact Address Here.
          </h1>
        </div>
      </section>

      {/* --- INFO CARDS SECTION --- */}
      <section className="container mx-auto px-4 max-w-7xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((card, idx) => (
            <div key={idx} className="bg-[#f8fbff] dark:bg-[#111111] p-10 rounded-[24px] border border-gray-50 dark:border-gray-800 flex flex-col items-start shadow-sm transition-all">
              <div className="text-[#A98842] mb-6">
                {card.icon}
              </div>
              <h3 className="text-lg font-black text-gray-900 dark:text-white mb-4">{card.title}</h3>
              <div className="space-y-1">
                {card.details.map((line, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400 font-bold text-sm tracking-tight leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FORM & MAP SECTION --- */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white dark:bg-[#111111] p-8 rounded-[24px] shadow-sm border dark:border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name" 
                className="w-full p-4 bg-[#faf9f6] dark:bg-slate-900 border border-gray-100 dark:border-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm transition-all"
              />
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number" 
                className="w-full p-4 bg-[#faf9f6] dark:bg-slate-900 border border-gray-100 dark:border-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm transition-all"
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email" 
                className="w-full p-4 bg-[#faf9f6] dark:bg-slate-900 border border-gray-100 dark:border-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm transition-all"
              />
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Your Subject" 
                className="w-full p-4 bg-[#faf9f6] dark:bg-slate-900 border border-gray-100 dark:border-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm transition-all"
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6" 
                placeholder="Your Message" 
                className="w-full p-4 bg-[#faf9f6] dark:bg-slate-900 border border-gray-100 dark:border-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm resize-none transition-all"
              ></textarea>
              
              <button 
                type="submit"
                disabled={status.loading}
                className="w-full md:w-auto bg-[#A98842] hover:bg-[#b38e44] text-white px-10 py-4 rounded-xl font-bold text-sm transition-all shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status.loading ? 'Sending...' : 'Submit Now'}
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="lg:w-1/2 rounded-[24px] overflow-hidden shadow-sm border-4 border-white dark:border-gray-800 min-h-[450px] transition-all">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0071378855667!2d72.8720816752061!3d19.096366582114757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c870295da0f1%3A0x6b77242131908906!2sChhatrapati%20Shivaji%20Maharaj%20International%20Airport!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MIBC Office Map"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;