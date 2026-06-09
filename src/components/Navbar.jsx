import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-md border-b border-white/20 transition-all duration-300">
      <div className="flex justify-between items-center px-8 md:px-12 py-6 md:py-8">
        
        <Link to="/" className="font-serif text-2xl tracking-tighter text-idluxe-black z-[110] hover:text-idluxe-gold transition-colors duration-300" onClick={closeMenu}>
          IDLUXE
        </Link>

        {/* Menu Desktop - Visible uniquement sur md et plus */}
        <div className="hidden md:flex space-x-10 font-sans text-[10px] uppercase tracking-[0.2em] text-idluxe-black">
          <Link to="/a-propos" className="hover:text-idluxe-gold transition-colors">À propos</Link>
          <Link to="/services" className="hover:text-idluxe-gold transition-colors">Nos services</Link>
          <Link to="/engagements" className="hover:text-idluxe-gold transition-colors">Nos engagements</Link>
          <Link to="/realisations" className="hover:text-idluxe-gold transition-colors">Réalisations</Link>
          <Link to="/contact" className="hover:text-idluxe-gold transition-colors">Nous contacter</Link>
        </div>

        {/* Bouton Hamburger - Caché sur desktop (md:hidden) */}
        <button 
          className="md:hidden z-[110] flex flex-col justify-between h-4 w-6 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`h-[1px] w-full bg-idluxe-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px] bg-idluxe-gold' : ''}`}></span>
          <span className={`h-[1px] w-full bg-idluxe-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-[1px] w-full bg-idluxe-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px] bg-idluxe-gold' : ''}`}></span>
        </button>
      </div>

      {/* Menu Mobile - Uniquement pour mobile */}
      <div className={`md:hidden fixed inset-0 h-screen w-full bg-white z-[105] flex flex-col justify-center items-center transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-8 text-center font-serif text-2xl text-idluxe-black">
          <Link to="/a-propos" onClick={closeMenu}>À propos</Link>
          <Link to="/services" onClick={closeMenu}>Nos services</Link>
          <Link to="/engagements" onClick={closeMenu}>Nos engagements</Link>
          <Link to="/realisations" onClick={closeMenu}>Réalisations</Link>
          <Link to="/contact" onClick={closeMenu}>Nous contacter</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;