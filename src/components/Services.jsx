import React from 'react';
import { Compass, Layers, Globe, Sparkles, Film, UserCheck } from 'lucide-react';

const services = [
  { title: "Branding & Rebranding", icon: Layers, items: ["Création logo", "Charte graphique complète", "Refonte & Modernisation", "Identité visuelle globale", "Branding retail / packaging"] },
  { title: "Conseil & Stratégie", icon: Compass, items: ["Diagnostic de marque", "Benchmark concurrentiel", "Positionnement de niche", "Copy stratégie", "Plan d’action annuel"] },
  { title: "Communication Digitale", icon: Globe, items: ["Création de sites vitrines", "Community management premium", "Stratégie SEO / SEA / SMA", "Content marketing", "Campagnes d'inbound"] },
  { title: "Événementiel d'Élite", icon: Sparkles, items: ["Lancements de produits", "Cocktails professionnels", "Défilés & Vernissages", "Salons privés", "Cérémonies de prestige"] },
  { title: "Production Multimédia", icon: Film, items: ["Production audiovisuelle", "Spots publicitaires", "Reportages institutionnels", "Shootings photos pro", "Achat d’espaces médias"] },
  { title: "Personal Branding", icon: UserCheck, items: ["Gestion de l'e-réputation", "Conseil en communication", "Stratégie d'image publique", "Relations presse dédiées"] },
];

function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-20 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TITRE DE SECTION - NOIR CORBEAU PUR & OR */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] tracking-[0.4em] text-[#B8860B] font-bold uppercase block">Notre Offre</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
            <span className="text-[#0D0E12]">Solutions</span> <span className="font-serif italic text-[#B8860B] normal-case font-normal tracking-wide">sur-mesure</span>
          </h2>
        </div>

        {/* GRILLE DES CARTES SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-[#1e1f20] border border-[#B8860B]/35 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(184,134,11,0.12)] hover:border-[#D4AF37] group cursor-pointer"
              >
                {/* Lueur d'ambiance interne au survol */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div>
                  {/* ICON BLOCK */}
                  <div className="w-9 h-9 rounded-xl bg-zinc-900/40 flex items-center justify-center text-[#D4AF37] mb-5 border border-zinc-800/50 group-hover:border-[#D4AF37]/40 transition-all duration-500">
                    <Icon className="w-4 h-4 stroke-[1.5] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  </div>
                  
                  {/* TITRE SERVICE */}
                  <h3 className="text-sm font-bold text-white mb-4 tracking-wide uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* LISTE DES PRESTATIONS AVEC ANIMATION EN CASCADE (HOVER) */}
                  <ul className="space-y-3 border-t border-zinc-800/60 pt-4">
                    {service.items.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="text-xs text-zinc-300 font-light flex items-start gap-3 transition-all duration-300 group-hover:text-white transform group-hover:translate-x-1"
                        style={{ transitionDelay: `${idx * 40}ms` }} // Crée un effet de décalage fluide et très esthétique
                      >
                        {/* La puce change d'état et tourne sur elle-même au survol de la carte */}
                        <span className="text-[#D4AF37] text-[8px] mt-0.5 shrink-0 block transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 font-sans">
                          <span className="inline-block group-hover:hidden">◇</span>
                          <span className="hidden group-hover:inline-block">◆</span>
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;