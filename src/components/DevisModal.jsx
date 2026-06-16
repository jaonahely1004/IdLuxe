import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DevisModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          // Ajout de flex flex-col pour mieux gérer la structure interne
          className="bg-white p-6 md:p-8 max-w-md w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[#E5E5E5] max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* BOUTON FERMER FIXE EN HAUT */}
          <div className="flex justify-between items-center mb-4 shrink-0">
            <p className="text-[#D4AF37] text-[9px] uppercase tracking-[0.3em]">IDLUXE</p>
            <button 
              onClick={onClose} 
              className="text-[#111111] hover:text-[#D4AF37] transition-all duration-300 font-sans text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              Fermer ✕
            </button>
          </div>
          <div className="mb-6 shrink-0">
            <h2 className="font-serif text-2xl text-[#111111]">Demander un devis</h2>
          </div>
          {/* ZONE SCROLLABLE POUR LE FORMULAIRE */}
          <form className="space-y-6 overflow-y-auto pr-2 custom-scrollbar" onSubmit={(e) => e.preventDefault()}>           
            <div className="group relative">
              <input type="text" required className="peer w-full bg-transparent border-b border-[#E5E5E5] py-2 text-sm text-[#111111] placeholder-transparent focus:border-[#D4AF37] outline-none transition-all" placeholder="Nom" />
              <label className="absolute left-0 -top-3.5 text-[#888] text-[9px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-[9px] peer-focus:text-[#D4AF37]">Nom Complet</label>
            </div>          
            <div className="group relative">
              <input type="email" required className="peer w-full bg-transparent border-b border-[#E5E5E5] py-2 text-sm text-[#111111] placeholder-transparent focus:border-[#D4AF37] outline-none transition-all" placeholder="Email" />
              <label className="absolute left-0 -top-3.5 text-[#888] text-[9px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-[9px] peer-focus:text-[#D4AF37]">Adresse Email</label>
            </div>
            <div className="group relative">
              <select required className="w-full bg-transparent border-b border-[#E5E5E5] py-2 text-sm text-[#111111] focus:border-[#D4AF37] outline-none transition-all appearance-none cursor-pointer">
                <option value="" disabled selected></option>
                <option value="branding">Branding</option>
                <option value="digital">Digital</option>
                <option value="event">Événementiel</option>
              </select>
              <label className="absolute left-0 -top-3.5 text-[#888] text-[9px] uppercase tracking-[0.2em]">Service</label>
            </div>
            <div className="group relative">
              <textarea rows="2" required className="peer w-full bg-transparent border-b border-[#E5E5E5] py-2 text-sm text-[#111111] placeholder-transparent focus:border-[#D4AF37] outline-none transition-all resize-none" placeholder="Projet"></textarea>
              <label className="absolute left-0 -top-3.5 text-[#888] text-[9px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-[9px] peer-focus:text-[#D4AF37]">Message</label>
            </div>
            <button type="submit" className="w-full py-3 border border-[#111111] bg-[#111111] text-white text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-white hover:text-[#111111] transition-all">
              Envoyer
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DevisModal;