import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import img1 from "../assets/images/Event_gallery/1st_img.jpeg"; 
import img2 from "../assets/images/Event_gallery/2nd.jpeg";
import img3 from "../assets/images/Event_gallery/3rd.jpeg";
import img4 from "../assets/images/Event_gallery/4th.jpeg";
import img5 from "../assets/images/Event_gallery/5th.jpeg";
import img6 from "../assets/images/Event_gallery/6th.jpeg";
import img7 from "../assets/images/Event_gallery/7th.jpeg";
import img8 from "../assets/images/Event_gallery/8th.jpeg";


const EventsGallery = () => {
  // State for Lightbox
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Sample Images Array using dummy image URLs
  const galleryImages = [
    { id: 1, src: img1, alt: "MIBC Event Meeting 1" },
    { id: 2, src: img2, alt: "MIBC Event Presentation" },
    { id: 3, src: img3, alt: "MIBC Event Discussion" },
    { id: 4, src: img4, alt: "MIBC Event Roundtable" },
    { id: 5, src: img5, alt: "MIBC Event Networking" },
    { id: 6, src: img6, alt: "MIBC Event Boardroom" },
    { id: 7, src: img7, alt: "MIBC Event Team" },
    { id: 8, src: img8, alt: "MIBC Event Conclusion" },
  ];

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImageIndex]);

  // Handlers for Modal
  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  
  const goToPrevious = (e) => {
    e.stopPropagation(); // Click ko piche modal pe jane se rokne ke liye
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 font-sans min-h-screen relative transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-[#A98842] mb-4 tracking-tight transition-colors">
            Events Gallery
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-[14px] leading-relaxed mb-8 transition-colors">
            A visual journey through MIBC's dynamic events, showcasing moments of collaboration, innovation, and bilateral engagement between México and India.
          </p>
          
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-slate-900 text-[#A98842] px-6 py-1.5 rounded-lg text-[12px] font-bold tracking-widest uppercase mb-4 inline-block border border-gray-100 dark:border-slate-800 transition-colors"
          >
            Events Gallery
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black text-gray-950 dark:text-white tracking-tight transition-colors"
          >
            Explore Our Event Highlights
          </motion.h2>
        </div>

        {/* --- IMAGE GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => openModal(index)}
              className="relative group rounded-[16px] overflow-hidden cursor-pointer aspect-[4/3] bg-gray-100 dark:bg-slate-800 shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-black/50 transition-all duration-300"
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay with Magnifying Glass */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-[#A98842] rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  <Search size={20} strokeWidth={3} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* --- LIGHTBOX / MODAL --- */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal} // Click outside to close
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors p-2 z-50"
            >
              <X size={36} strokeWidth={1.5} />
            </button>

            {/* Main Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center outline-none"
            >
              <img 
                src={galleryImages[selectedImageIndex].src} 
                alt={galleryImages[selectedImageIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
              />
            </motion.div>

            {/* Previous Button */}
            <button 
              onClick={goToPrevious}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hover:scale-110 p-2 z-50"
            >
              <ChevronLeft size={48} strokeWidth={1.5} />
            </button>

            {/* Next Button */}
            <button 
              onClick={goToNext}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hover:scale-110 p-2 z-50"
            >
              <ChevronRight size={48} strokeWidth={1.5} />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default EventsGallery;