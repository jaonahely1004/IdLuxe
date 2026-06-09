import React from 'react';
import { Heart, ShieldCheck } from 'lucide-react';

function Engagements() {
  return (
    <section id="engagements" className="py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* TITRE ENGAGEMENT - NOIR CORBEAU PUR & OR */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] tracking-[0.4em] text-[#B8860B] font-bold uppercase block">Responsabilité</span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">
            <span className="text-[#0D0E12]">Un marketing éthique</span> <span className="font-serif italic font-normal normal-case text-[#B8860B] block mt-1 tracking-wide">et responsable</span>
          </h2>
        </div>

        {/* GRILLE DES CARTES ENGAGEMENTS - BG NOIR DE SAISIE */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* CARTE 1 : BRAND NEW MADAGASCAR */}
          <div className="bg-[#1e1f20] border border-[#B8860B]/35 rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(184,134,11,0.12)] hover:border-[#D4AF37] group cursor-pointer">
            {/* Lueur d'ambiance interne au survol */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              {/* ICON BLOCK */}
              <div className="w-9 h-9 rounded-xl bg-zinc-900/40 flex items-center justify-center text-[#D4AF37] mb-5 border border-zinc-800/50 group-hover:border-[#D4AF37]/40 transition-all duration-500">
                <Heart className="w-4 h-4 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
              </div>

              <h3 className="text-sm font-bold text-[#D4AF37] mb-4 uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                Brand New Madagascar
              </h3>
              
              <p className="text-zinc-300 font-light leading-relaxed text-xs md:text-sm transition-colors duration-300 group-hover:text-white">
                Une fraction significative de nos bénéfices est directement allouée à des actions sociales, environnementales et humaines tangibles visant à soutenir durablement le développement des populations locales.
              </p>
            </div>
          </div>

          {/* CARTE 2 : VISION RESPONSABLE */}
          <div className="bg-[#1e1f20] border border-[#B8860B]/35 rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(184,134,11,0.12)] hover:border-[#D4AF37] group cursor-pointer">
            {/* Lueur d'ambiance interne au survol */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              {/* ICON BLOCK */}
              <div className="w-9 h-9 rounded-xl bg-zinc-900/40 flex items-center justify-center text-[#D4AF37] mb-5 border border-zinc-800/50 group-hover:border-[#D4AF37]/40 transition-all duration-500">
                <ShieldCheck className="w-4 h-4 stroke-[1.5] transition-transform duration-500 group-hover:scale-110" />
              </div>

              <h3 className="text-sm font-bold text-[#D4AF37] mb-4 uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                Vision Responsable
              </h3>
              
              <p className="text-zinc-300 font-light leading-relaxed text-xs md:text-sm transition-colors duration-300 group-hover:text-white">
                Nous privilégions l'excellence locale en collaborant étroitement avec les créatifs, artisans de l'image, startups et PME malgaches afin de catalyser un écosystème d'innovation circulaire.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Engagements;