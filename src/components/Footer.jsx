import React from 'react';
import { Mail, Phone, Globe, MapPin, ArrowUpRight } from 'lucide-react';

function Footer() {
  const expertises = [
    "Brand Strategy", 
    "Digital Performance", 
    "Visual Identity", 
    "Social Media Premium"
  ];

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 mt-24 font-sans antialiased w-full relative">
      
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
                <div className="flex items-end gap-[2px] select-none leading-none">
                  <span className="text-white font-serif tracking-[0.25em] text-xl font-light">ID</span>
                  <span className="text-amber-500 font-serif tracking-[0.25em] text-xl font-normal">LUXE</span>
                </div>
                <p className="text-[9px] tracking-[0.5em] text-amber-500/60 uppercase font-semibold leading-none">
                  Marketing
                </p>
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
              href="mailto:idluxemg@idluxe.mg"
              className="flex items-center gap-2.5 hover:text-white transition-colors group py-0.5 w-max"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500/60 group-hover:text-amber-500 transition-colors stroke-[1.5]" />
              <span className="text-zinc-300 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/10 pb-0.5">idluxemg@idluxe.mg</span>
            </a>

            {/* NUMÉROS DE TÉLÉPHONE */}
            <div className="flex flex-col gap-2 pt-0.5">
              <a href="tel:+261341406585" className="flex items-center gap-2.5 hover:text-white transition-colors group w-max">
                <Phone className="w-3.5 h-3.5 text-amber-500/60 group-hover:text-amber-500 transition-colors stroke-[1.5]" />
                <span className="text-zinc-300 group-hover:text-white transition-colors">+261 34 14 065 85</span>
              </a>
              <a href="tel:+261378406584" className="flex items-center gap-2.5 hover:text-white transition-colors pl-6 group w-max">
                <span className="text-zinc-300 group-hover:text-white transition-colors">+261 37 84 065 84</span>
              </a>
            </div>

            {/* FACEBOOK INTEGRÉ */}
            <a 
              href="https://web.facebook.com/idluxe.marketing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-white transition-colors group py-0.5 pt-1 w-max"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-amber-500/60 group-hover:text-amber-500 transition-colors"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="text-zinc-300 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/10 pb-0.5">idluxe.marketing</span>
              <ArrowUpRight className="w-2.5 h-2.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-all" />
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