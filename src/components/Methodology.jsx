import React from 'react';
import { Users, Brain, ShieldCheck, Target, PenTool, BarChart3, MessageSquare, Megaphone } from 'lucide-react';

function Methodology() {
  const steps = [
    // TOP : Texte parfaitement centré AU-DESSUS de l'icône
    { title: "Analyse des audiences", desc: "Étude de votre cible, de ses besoins et comportements.", icon: Users, angle: -90, textAnchor: "bottom-full left-1/2 -translate-x-1/2 mb-4 w-[240px] text-center items-center" },
    
    // DROITE
    { title: "Analyse comportementale", desc: "Compréhension des motivations.", icon: Brain, angle: -45, textAnchor: "left-full top-1/2 -translate-y-1/2 ml-4 w-[240px] text-left items-start" },
    { title: "Analyse du marché", desc: "Observation des tendances du secteur.", icon: ShieldCheck, angle: 0, textAnchor: "left-full top-1/2 -translate-y-1/2 ml-4 w-[240px] text-left items-start" },
    { title: "Positionnement stratégique", desc: "Définition d’une identité claire.", icon: Target, angle: 45, textAnchor: "left-full top-1/2 -translate-y-1/2 ml-4 w-[240px] text-left items-start" },
    
    // BOTTOM : Texte parfaitement centré EN DESSOUS de l'icône
    { title: "Narration de marque", desc: "Création d’une histoire émotionnelle.", icon: PenTool, angle: 90, textAnchor: "top-full left-1/2 -translate-x-1/2 mt-4 w-[240px] text-center items-center" },
    
    // GAUCHE
    { title: "Analyse de performance", desc: "Mesure des résultats et optimisation.", icon: BarChart3, angle: 135, textAnchor: "right-full top-1/2 -translate-y-1/2 mr-4 w-[240px] text-right items-end" },
    { title: "Stratégie de communication", desc: "Déploiement sur les canaux adaptés.", icon: MessageSquare, angle: 180, textAnchor: "right-full top-1/2 -translate-y-1/2 mr-4 w-[240px] text-right items-end" },
    { title: "Activation marketing", desc: "Mise en œuvre de campagnes ciblées.", icon: Megaphone, angle: 225, textAnchor: "right-full top-1/2 -translate-y-1/2 mr-4 w-[240px] text-right items-end" }
  ];

  const radius = 260; // Rayon optimal pour éviter toute collision géométrique

  return (
    <section id="methodology" className="py-24 px-6 overflow-hidden relative flex flex-col items-center select-none w-full justify-start bg-white">
      
      {/* TITRE DE SECTION */}
      <div className="max-w-7xl mx-auto text-center mb-24 z-10">
        <p className="text-[#B8860B] uppercase tracking-[0.35em] text-[10px] font-bold mb-2">Ingénierie</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide uppercase">
          <span className="text-[#0D0E12]">Approche</span> <span className="font-serif italic font-normal text-[#B8860B] normal-case tracking-wide">circulaire</span>
        </h2>
      </div>

      {/* GRAPHIC CIRCLE DESKTOP */}
      <div className="relative hidden lg:flex items-center justify-center w-[900px] h-[900px] shrink-0">
        
        {/* Ligne d'orbite en pointillés or subtile */}
        <div className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-[#B8860B]/20 pointer-events-none" />
        
        {/* Ligne concentrique interne */}
        <div className="absolute w-[360px] h-[360px] rounded-full border border-[#B8860B]/10 flex items-center justify-center">
          
          {/* CŒUR CENTRAL - NOIR MAT DE LA BARRE DE SAISIE */}
          <div className="absolute w-40 h-40 rounded-full bg-[#1e1f20] border border-[#D4AF37]/30 shadow-[0_15px_35px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center p-4 z-20">
            <span className="font-serif italic text-base text-[#D4AF37] font-semibold tracking-wide">IDLUXE</span>
            <span className="text-[8px] tracking-[0.3em] text-zinc-400 font-mono mt-1 font-bold">Marketing</span>
          </div>

        </div>

        {/* CARTOGRAPHIE DES ÉTAPES SUR L'ORBITE */}
        {steps.map((step, index) => {
          const Icon = step.icon;
          const rad = (step.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <div 
              key={index} 
              style={{ transform: `translate(${x}px, ${y}px)` }} 
              className="absolute w-12 h-12 flex items-center justify-center group"
            >
              {/* LA PUCE DE L'ICÔNE SUR LE CERCLE */}
              <div className="w-10 h-10 rounded-full border border-[#B8860B]/35 bg-[#1e1f20] text-zinc-400 flex items-center justify-center shadow-md transition-all duration-500 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:scale-110 cursor-pointer relative z-30">
                <Icon className="w-4 h-4 stroke-[1.5] transition-transform duration-500 group-hover:rotate-12" />
              </div>

              {/* BLOC TEXTUEL FLOTTANT AMÉLIORÉ AVEC BORDURE ET HOVER DYNAMIQUE */}
              <div className={`absolute ${step.textAnchor} flex flex-col gap-1 p-3.5 bg-[#1e1f20] border border-[#B8860B]/20 rounded-xl shadow-lg transition-all duration-500 group-hover:border-[#D4AF37] group-hover:shadow-[0_10px_25px_rgba(184,134,11,0.08)] group-hover:-translate-y-0.5 z-20`}>
                
                {/* Lueur subtile interne au survol */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                
                <h4 className="text-[11px] font-bold tracking-wider text-zinc-200 uppercase transition-colors duration-300 group-hover:text-[#D4AF37] relative z-10">
                  {step.title}
                </h4>
                <p className="text-[10px] text-zinc-400 font-light leading-relaxed transition-colors duration-300 group-hover:text-white relative z-10">
                  {step.desc}
                </p>
              </div>

            </div>
          );
        })}
      </div>

      {/* MOBILE LIST */}
      <div className="flex flex-col gap-4 lg:hidden w-full max-w-md px-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={index} 
              className="flex gap-4 items-start bg-[#1e1f20] p-4 rounded-2xl border border-[#B8860B]/20 transition-all duration-500 hover:border-[#D4AF37] group cursor-pointer"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#B8860B]/30 bg-zinc-900/40 text-zinc-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all duration-500 shrink-0">
                <Icon className="w-4 h-4 stroke-[1.5]" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold tracking-wide text-white uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Methodology;