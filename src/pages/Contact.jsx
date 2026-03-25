import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {

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

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans pb-24">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <span className="text-[#A98842] font-bold text-[10px] tracking-[0.3em] uppercase mb-2 block">Contact Form</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Our Contact Address Here.
          </h1>
        </div>
      </section>

      {/* --- INFO CARDS SECTION --- */}
      <section className="container mx-auto px-4 max-w-7xl mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((card, idx) => (
            <div key={idx} className="bg-[#f8fbff] p-10 rounded-[24px] border border-gray-50 flex flex-col items-start shadow-sm">
              <div className="text-[#A98842] mb-6">
                {card.icon}
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-4">{card.title}</h3>
              <div className="space-y-1">
                {card.details.map((line, i) => (
                  <p key={i} className="text-gray-600 font-bold text-sm tracking-tight leading-relaxed">
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
          <div className="lg:w-1/2 bg-white p-2 rounded-[24px] shadow-sm">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-4 bg-[#faf9f6] border border-gray-100 rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm"
              />
              <input 
                type="text" 
                placeholder="Phone Number" 
                className="w-full p-4 bg-[#faf9f6] border border-gray-100 rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-4 bg-[#faf9f6] border border-gray-100 rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm"
              />
              <input 
                type="text" 
                placeholder="Your Subject" 
                className="w-full p-4 bg-[#faf9f6] border border-gray-100 rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm"
              />
              <textarea 
                rows="6" 
                placeholder="Your Message" 
                className="w-full p-4 bg-[#faf9f6] border border-gray-100 rounded-xl focus:outline-none focus:border-[#A98842]/50 font-medium text-sm resize-none"
              ></textarea>
              <button className="bg-[#A98842] hover:bg-[#b38e44] text-white px-10 py-4 rounded-xl font-bold text-sm transition-all shadow-lg active:scale-95">
                Submit Now
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="lg:w-1/2 rounded-[24px] overflow-hidden shadow-sm border-4 border-white min-h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0035418146743!2d72.87192777596645!3d19.09653555193019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8702951710b%3A0x6b0429f600f7e44!2sChhatrapati%20Shivaji%20Maharaj%20International%20Airport%20Mumbai!5e0!3m2!1sen!2sin!4v1711364582931!5m2!1sen!2sin" 
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