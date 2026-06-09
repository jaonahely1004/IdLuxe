import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 md:px-20 overflow-hidden pt-28 bg-white">
      {/* EFFET LUMINEUX DISCRET EN ARRIÈRE-PLAN */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl relative z-10 flex flex-col items-center">
        
        {/* TOP BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0D0E12] border border-[#B8860B]/30 mb-8 select-none shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] stroke-[1.5]" />
          <p className="text-zinc-300 uppercase tracking-[0.35em] text-[9px] font-semibold pt-[1px]">
            Marketing • Branding • Communication
          </p>
        </div>

        {/* COMPOSITION DU TITRE PRINCIPAL EN NOIR AILE DE CORBEAU */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.1] uppercase font-bold">
  <span className="text-[#0D0E12]">Faites rayonner</span>
  <br />
  <span className="font-serif italic font-normal tracking-wide bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent normal-case block mt-3">
    votre prestige d'exception
  </span>
</h1>

        {/* PARAGRAPHE DESCRIPTIF TRÈS LISIBLE SUR FOND BLANC */}
        <p className="mt-8 text-[#0D0E12] text-sm md:text-base font-normal leading-relaxed max-w-2xl tracking-wide">
          IDLUXE Marketing accompagne les marques, entreprises et institutions dans l'édification de stratégies mémorables conçues pour marquer durablement les esprits.
        </p>

        {/* BOUTONS D'ACTION */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 w-full sm:w-auto">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0D0E12] text-white text-[11px] uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full hover:bg-[#B8860B] transition-all duration-300 shadow-md group">
            <span>Découvrir</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a 
            href="#services" 
            className="w-full sm:w-auto text-center bg-[#0D0E12] border border-[#B8860B]/40 text-white text-[11px] uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-full hover:bg-zinc-800 transition-all duration-300"
          >
            Nos Services
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;