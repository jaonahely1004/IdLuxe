import React from 'react';
import { 
  Palmtree, 
  Briefcase, 
  Sparkles, 
  Hammer, 
  Gem, 
  Droplet, 
  Building2, 
  HeartHandshake,
  ArrowUpRight
} from 'lucide-react';

const secteurs = [
  { name: "Tourisme • Hôtellerie • Restauration", icon: Palmtree },
  { name: "Assurance • Banque • Finance", icon: Briefcase },
  { name: "Mode & Bien-être", icon: Sparkles },
  { name: "Artisanat de prestige", icon: Hammer },
  { name: "Bijouterie & Joaillerie", icon: Gem },
  { name: "Parfumerie de niche", icon: Droplet },
  { name: "ONG & Institutions", icon: Building2 },
  { name: "Communication pour le Développement (C4D)", icon: HeartHandshake },
];

function Realisations() {
  return (
    <section id="realisations" className="py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TITRE DE SECTION - NOIR CORBEAU PUR & OR */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] tracking-[0.4em] text-[#B8860B] font-bold uppercase block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide uppercase">
            <span className="text-[#0D0E12]">Secteurs & Expériences</span>
          </h2>
        </div>

        {/* GRILLE DES CARTES REALISATIONS - BG NOIR DE SAISIE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secteurs.map((secteur, index) => {
            const Icon = secteur.icon;
            
            return (
              <div
                key={index}
                className="bg-[#1e1f20] border border-[#B8860B]/35 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[160px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(184,134,11,0.12)] hover:border-[#D4AF37] group cursor-pointer"
                style={{ transitionDelay: `${index * 30}ms` }} // Cascade d'animation fluide
              >
                {/* Lueur d'ambiance interne dorée au survol */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* BLOC ICON DE LUXE REMPLAÇANT LE NUMÉRO */}
                <div className="flex items-center justify-between relative z-10 w-full">
                  <div className="p-2 rounded-xl bg-zinc-900/40 border border-zinc-800/50 group-hover:border-[#D4AF37]/40 transition-all duration-500">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#D4AF37] stroke-[1.5] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  </div>
                  
                  {/* Flèche d'action haut de gamme apparaissant au survol */}
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out" />
                </div>

                {/* TEXTE DU SECTEUR ANIMÉ */}
                <div className="relative z-10 my-auto pt-6">
                  <p className="text-zinc-300 text-xs font-medium tracking-wide leading-relaxed transition-all duration-500 group-hover:text-white group-hover:tracking-wider group-hover:font-light">
                    {secteur.name}
                  </p>
                </div>

                {/* PIED DE CARTE DYNAMIQUE : LA LIGNE DÉCORATIVE S'ALLONGE */}
                <div className="relative z-10 flex items-center mt-4">
                  <div className="w-4 h-[1px] bg-zinc-800 group-hover:bg-[#D4AF37] group-hover:w-12 transition-all duration-500 ease-out" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Realisations;