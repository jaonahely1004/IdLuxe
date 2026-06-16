import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DevisModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9 }} animate={{ scale: 1 }}
          className="bg-white p-10 max-w-lg w-full rounded-lg shadow-2xl relative"
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture quand on clique dans le formulaire
        >
          <h2 className="font-serif text-3xl mb-6">Demander un devis</h2>
          {/* Insérez ici votre formulaire (le même que dans Contact.jsx) */}
          <form className="space-y-4">
             <input type="text" placeholder="Votre nom" className="w-full border-b py-2 outline-none" />
             <button type="submit" className="w-full py-3 bg-[#111111] text-white">Envoyer</button>
          </form>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400">Fermer</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DevisModal;