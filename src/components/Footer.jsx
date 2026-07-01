import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, MapPin, ArrowUpRight } from 'lucide-react';
import logo from "../assets/logoOFF_Wht consulte.png";

import { FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const expertises = [
    "Brand Strategy", 
    "Digital Performance", 
    "Visual Identity", 
    "Social Media Premium"
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 mt-0 font-sans antialiased w-full relative">
      
      {/* EFFET LUMINEUX DISCRET EN ARRIÈRE-PLAN */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* CONTENEUR PRINCIPAL CONDENSÉ */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">

        {/* COL 1 - BRAND IDENTITY & DESCRIPTION */}
        <div className="flex flex-col justify-between h-full space-y-4">
          <div className="w-full">
            {/* LOGO SANS LIGNE : Le pt-[3px] maintient l'alignement horizontal parfait avec les h3 */}
            <div className="pt-[3px] mb-4">
              <div className="flex flex-col gap-0.5">
              <div className="flex flex-col gap-1 justify-start">
              <div className="flex flex-col gap-1 justify-start">
                <div className="flex items-end pt-[2px]">
                  <img 
                    src={logo} 
                    alt="IDLUXE Marketing Logo"
                    className="h-8 sm:h-9 md:h-20 w-auto object-contain select-none"
                  />
                </div>
              </div>
              </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm tracking-wide">
              Une agence marketing d'élite orientée stratégie de marque, performance numérique et création d'univers visuels forts.
            </p>
          </div>
        </div>

        {/* COL 2 - CONTACTS ERGONOMIQUES AVEC LINK FACEBOOK */}
        <div className="flex flex-col justify-start">
          <h3 className="text-white text-[10px] uppercase tracking-[0.3em] font-medium mb-4 border-b border-zinc-900/60 pb-2">
            Discutons de votre projet
          </h3>

          <div className="space-y-3.5 text-xs font-light tracking-wide">
            {/* SITE WEB */}
            <a 
              href="https://www.idluxe.mg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-white transition-colors group py-0.5 w-max"
            >
              <Globe className="w-3.5 h-3.5 text-amber-500/60 group-hover:text-amber-500 transition-colors stroke-[1.5]" />
              <span className="text-zinc-300 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/10 pb-0.5">www.idluxe.mg</span>
              <ArrowUpRight className="w-2.5 h-2.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-all" />
            </a>

            {/* EMAIL */}
            <a 
              href="mailto:brandnewmada@gmail.com"
              className="flex items-center gap-2.5 hover:text-white transition-colors group py-0.5 w-max"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500/60 group-hover:text-amber-500 transition-colors stroke-[1.5]" />
              <span className="text-zinc-300 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/10 pb-0.5">brandnewmada@gmail.com</span>
            </a>

            {/* NUMÉROS DE TÉLÉPHONE */}
            <div className="flex flex-col gap-2 pt-0.5">
              <a href="tel:+261 37 26 949 10" className="flex items-center gap-2.5 hover:text-white transition-colors group w-max">
                <Phone className="w-3.5 h-3.5 text-amber-500/60 group-hover:text-amber-500 transition-colors stroke-[1.5]" />
                <span className="text-zinc-300 group-hover:text-white transition-colors">+261 37 26 949 10
                </span>
              </a>
            </div>

            {/* FACEBOOK */}
            <a
              href="https://web.facebook.com/idluxe.marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-white transition-colors group py-0.5 pt-1 w-max"
            >
              <FaFacebook 
                className="w-3.5 h-3.5 text-amber-500/60 group-hover:text-amber-500 transition-colors" 
              />
              <span className="text-zinc-300 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/10 pb-0.5">
                idluxe.marketing
              </span>
              <ArrowUpRight 
                className="w-2.5 h-2.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-all" 
              />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/company/idluxe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-white transition-colors group py-0.5 pt-1 w-max"
            >
              <FaLinkedin 
                className="w-3.5 h-3.5 text-amber-500/60 group-hover:text-amber-500 transition-colors" 
              />
              <span className="text-zinc-300 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/10 pb-0.5">
                LinkedIn
              </span>
              <ArrowUpRight 
                className="w-2.5 h-2.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-all" 
              />
            </a>
          </div>
        </div>

        {/* COL 3 - EXPERTISES & LOCALISATION */}
        <div className="flex flex-col justify-between space-y-6 md:space-y-0 h-full">
          <div>
            <h3 className="text-white text-[10px] uppercase tracking-[0.3em] font-medium mb-4 border-b border-zinc-900/60 pb-2">
              Expertises
            </h3>
            
            <div className="flex flex-wrap gap-1.5">
              {expertises.map((item, idx) => (
                <span 
                  key={idx} 
                  className="text-[9px] font-light tracking-wide px-2.5 py-1 rounded-full bg-zinc-950/40 border border-zinc-900 text-zinc-400 select-none hover:border-amber-500/20 hover:text-zinc-200 transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs font-light pt-2">
            <MapPin className="w-3.5 h-3.5 text-amber-500/50 shrink-0 stroke-[1.5]" />
            <p className="text-zinc-300 font-normal">Antananarivo, Madagascar</p>
          </div>
        </div>

      </div>

      {/* BARRE DE COPYRIGHT */}
      <div className="border-t border-zinc-900 bg-zinc-950/50 py-5 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-zinc-500 tracking-wider">
          <p>© 2026 IDLUXE Marketing. Tous droits réservés.</p>
          <div className="flex gap-6 uppercase text-[9px] tracking-widest">
            <span className="hover:text-amber-500/80 transition-colors duration-300 cursor-pointer">Mentions Légales</span>
            <span className="hover:text-amber-500/80 transition-colors duration-300 cursor-pointer">Confidentialité</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;