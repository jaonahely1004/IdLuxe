import React, { useState } from 'react';
import { Eye, BarChart3, Target, Radio, LineChart, ArrowRight } from 'lucide-react';

function Presentation() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const dapam = [
    { num: '01', letter: 'D', title: 'Découvrir', desc: "Immersion complète dans votre univers et compréhension profonde de votre marché.", scenario: "Nous révélons l’essence unique de votre marque afin de construire une identité forte.", badge: 'Immersion', icon: Eye },
    { num: '02', letter: 'A', title: 'Analyser', desc: "Étude approfondie des audiences et des opportunités de croissance.", scenario: "Nos analyses stratégiques identifient les leviers premium de croissance.", badge: 'Intelligence', icon: BarChart3 },
    { num: '03', letter: 'P', title: 'Positionner', desc: "Création d’un positionnement unique, fort, mémorable et haut de gamme.", scenario: "Nous construisons une présence de marque inspirant confiance et prestige.", badge: 'Stratégie', icon: Target },
    { num: '04', letter: 'A', title: 'Activer', desc: "Déploiement créatif de campagnes d'envergure sur les canaux clés.", scenario: "Des activations ciblées et mémorables pour captiver vos audiences.", badge: 'Activation', icon: Radio },
    { num: '05', letter: 'M', title: 'Mesurer', desc: "Analyse continue des performances et optimisation fine du R.O.I.", scenario: "Un suivi rigoureux des indicateurs pour pérenniser votre impact.", badge: 'Performance', icon: LineChart },
  ];

  return (
    <section id="presentation" className="py-24 px-6 md:px-12 lg:px-20 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TITRE DE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] tracking-[0.4em] text-[#B8860B] font-bold uppercase block">Philosophie</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
              <span className="text-[#0D0E12]">L'art de propulser</span> <br />
              <span className="font-serif italic font-normal text-[#B8860B] normal-case tracking-wide">votre image de marque</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#0D0E12] text-sm font-normal leading-relaxed border-l-2 border-[#B8860B] pl-6">
              Nous façonnons des identités d'exception. En combinant ingénierie de marque et récits captivants, nous transformons votre communication en levier de prestige.
            </p>
          </div>
        </div>

        {/* CARTES AVEC LE NOIR DE LA BARRE DE SAISIE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {dapam.map((step, idx) => {
            const Icon = step.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-[#1e1f20] border border-[#B8860B]/40 rounded-2xl p-6 relative overflow-hidden min-h-[280px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(184,134,11,0.12)] hover:border-[#D4AF37] group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#D4AF37] font-bold tracking-wider">{step.num}</span>
                    <div className="p-1.5 rounded-lg bg-zinc-900/40 border border-zinc-800/50 group-hover:border-[#D4AF37]/40 transition-colors duration-500">
                      <Icon className="w-4 h-4 text-[#D4AF37] stroke-[1.5] transition-all duration-500 group-hover:rotate-12" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2 tracking-wide uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {step.desc}
                    </p>
                  </div>

                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isHovered ? 'max-h-20 opacity-100 pt-2 border-t border-zinc-800/60' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <p className="text-[11px] text-zinc-400 italic font-light flex items-center gap-1.5">
                      <ArrowRight className="w-3 h-3 text-[#D4AF37] shrink-0" />
                      "{step.scenario}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 relative z-10">
                  <span className="text-[9px] tracking-widest uppercase text-[#D4AF37] font-mono font-bold bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full">
                    {step.badge}
                  </span>
                </div>

                <span className="absolute -bottom-10 -right-2 text-[10rem] font-serif font-bold text-zinc-800/10 select-none pointer-events-none transform transition-all duration-700 ease-out group-hover:text-[#D4AF37]/5 group-hover:-translate-y-4 group-hover:scale-105">
                  {step.letter}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Presentation;