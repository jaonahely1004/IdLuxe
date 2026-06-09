import React, { useState } from 'react';
import { Award, Sparkles, ShieldCheck, HeartHandshake, Leaf, Briefcase, Users, GraduationCap } from 'lucide-react';

const VALEURS = [
  { title: 'Excellence', desc: 'Nous concevons chaque projet avec exigence, précision et sens du détail.', icon: Award },
  { title: 'Impact', desc: 'Nous croyons en une communication capable de transformer les comportements.', icon: Sparkles },
  { title: 'Créativité', desc: 'Nous fusionnons intelligence marketing et direction artistique sur-mesure.', icon: ShieldCheck },
  { title: 'Authenticité', desc: 'Nous révélons la véritable valeur de votre entreprise avec élégance.', icon: HeartHandshake },
  { title: 'Engagement', desc: 'Nous construisons des stratégies responsables pensées pour durer.', icon: Leaf },
];

const CAROUSEL_DATA = [
  { tag: 'Expertise Locale', title: "Quinze ans d'ancrage et d'expérience", desc: "Une parfaite maîtrise des spécificités du marché malgache combinée aux standards internationaux les plus exigeants.", points: ['Expertise multisectorielle fine en marketing de positionnement', 'Vision stratégique orientée expérience client haute fidélité', 'Spécialisation dans les projets à fort impact'], icon: Briefcase },
  { tag: "Réseau d'Experts", title: 'Une synergie de talents qualifiés', desc: 'Nous orchestrons un écosystème d’experts et d’artisans de l’image pour donner vie à vos ambitions.', points: ['Sélection rigoureuse de prestataires premium', 'Partenariats stratégiques basés sur l’excellence', 'Direction de création globale sur-mesure'], icon: Users },
  { tag: 'Accompagnement', title: 'Un suivi haute couture et durable', desc: 'Notre engagement s’inscrit dans le temps pour pérenniser l’élégance et la performance de votre marque.', points: ['Ateliers stratégiques personnalisés', 'Bilans et études d’impact post-campagne', 'Analyse continue des indicateurs de performance'], icon: GraduationCap }
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* TOP BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] tracking-[0.4em] text-[#B8860B] font-bold uppercase block">Qui sommes-nous</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
              <span className="text-[#0D0E12]">Le premier cabinet</span> <br />
              <span className="font-serif italic font-normal text-[#B8860B] normal-case tracking-wide">
                en marketing de luxe à Madagascar
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-[#0D0E12] border-l-2 border-[#B8860B] pl-6 text-sm font-normal leading-relaxed">
              Nous accompagnons les marques, PME et institutions de prestige dans leur montée en gamme et leur rayonnement sur le marché national et international.
            </p>
          </div>
        </div>

        {/* VALUE TILES - BG NOIR DE SAISIE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {VALEURS.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#1e1f20] border border-[#B8860B]/35 p-5 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(184,134,11,0.1)] hover:border-[#D4AF37] group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="p-1.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 w-fit mb-4 group-hover:border-[#D4AF37]/30 transition-colors duration-500">
                    <Icon className="w-4 h-4 text-[#D4AF37] stroke-[1.5] transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                  <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                    {val.title}
                  </h4>
                  <p className="text-[11px] text-zinc-300 font-light leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE COMPONENT - BG NOIR DE SAISIE */}
        <div className="border border-[#B8860B]/35 rounded-3xl p-6 lg:p-10 bg-[#1e1f20] relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(184,134,11,0.08)] hover:border-[#D4AF37]/80 group">
          
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#D4AF37]/[0.02] rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100" />

          <div className="flex flex-wrap gap-2.5 border-b border-zinc-800/60 pb-6 mb-8 relative z-10">
            {CAROUSEL_DATA.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`px-5 py-2.5 text-[10px] uppercase tracking-widest rounded-full transition-all duration-300 font-bold border ${
                  currentIndex === idx 
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-md scale-105' 
                    : 'bg-zinc-900/40 text-zinc-400 border-zinc-800/60 hover:text-white hover:border-zinc-700'
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xl md:text-2xl font-serif text-white leading-tight group-hover:text-[#D4AF37] transition-colors duration-500">
                {CAROUSEL_DATA[currentIndex].title}
              </h4>
              <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed">
                {CAROUSEL_DATA[currentIndex].desc}
              </p>
            </div>
            
            <div className="lg:col-span-6 space-y-3.5 lg:border-l lg:border-zinc-800/60 lg:pl-8 w-full">
              {CAROUSEL_DATA[currentIndex].points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3.5 text-xs text-zinc-300 font-light group/item transition-colors duration-300 hover:text-white">
                  <span className="text-[#D4AF37] text-[8px] mt-1 shrink-0 transition-transform duration-300 group-item:rotate-45 group-item:scale-125">
                    ◆
                  </span>
                  <span className="leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;