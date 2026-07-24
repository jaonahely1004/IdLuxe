import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dbCategories, setDbCategories] = useState([]);
  
  const defaultCategories = [
    {
      title: "Branding & Rebranding",
      description: "Création ou refonte d'identité visuelle pour une marque forte.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
      items: ["Logo et charte graphique", "Identité de marque", "Créations graphiques", "Enseignes et branding retail"]
    },
    {
      title: "Conseil & Stratégie marketing",
      description: "Accompagnement pour un positionnement haut de gamme.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      items: ["Audit marketing", "Benchmark et analyse concurrentielle", "Copy stratégie", "Stratégie et plan d'action"]
    },
    {
      title: "Communication pour le développement",
      description: "Méthodologies et stratégies pour le changement de comportement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      items: ["Enquêtes", "Analyse des besoins et analyse anthropologique", "Gestion du changement et CCC", "Relation publique"]
    },
    {
      title: "Événementiel haut de gamme",
      description: "Organisation d'événements corporate, protocolaires et haut de gamme.",
      image: "https://images.unsplash.com/photo-1511578314322-37d9b574066f?auto=format&fit=crop&q=80&w=800",
      items: ["Conférences de presse", "Inaugurations et vernissage", "Cocktails professionnels", "Salon et ateliers", "Cérémonie protocolaire/institutionnelle"]
    },
    {
      title: "Communication 360",
      description: "Maximisez votre visibilité.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      items: ["Stratégie de communication", "Production audiovisuelle", "Relation media", "Travaux d'impression"]
    },
    {
      title: "Marketing digital",
      description: "Optimisez votre présence en ligne",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      items: ["Stratégie digitale", "Community management", "Content marketing", "SEA, SMA"]
    },
    {
      title: "Externalisation marketing",
      description: "Confiez votre service marketing à une equipe d'expert.",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
      items: ["Analyse des besoins", "Mise a disposition d'une équipe complète en remote"]
    },
    {
      title: "Externalisation RSE",
      description: "Transformez votre RSE en actions qui changent des vies.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
      items: ["Analyse des besoins et étude anthropologique", "Accompagnement en théorie du changement(TOC)", "Plan de Travail et Budget annuel(PTBA)", "Mise à disposition volontaires", "Suivi et évaluation"]
    }
  ];

  useEffect(() => {
    axios.get('http://localhost:5000/api/content/page/services')
      .then(res => {
        const rawData = res.data;
        const grouped = rawData.reduce((acc, curr) => {
          if (!acc[curr.group_id]) acc[curr.group_id] = { id: curr.group_id };
          if (curr.item_key === 'items') acc[curr.group_id][curr.item_key] = curr.content.split(', ');
          else acc[curr.group_id][curr.item_key] = curr.content;
          return acc;
        }, {});
        setDbCategories(Object.values(grouped));
      })
      .catch(err => console.error("Erreur API:", err));
  }, []);

  const categories = dbCategories.length > 0 ? dbCategories : defaultCategories;

  return (
    <div className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white font-creato antialiased">
      {/* En-tête */}
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <span className="text-[11px] font-creato uppercase tracking-[0.4em] font-bold mb-4 inline-block text-[#D4AF37]">
          Notre Expertise
        </span>
        <h1 className="font-creato text-4xl sm:text-5xl md:text-6xl font-normal text-zinc-900 tracking-tight leading-[1.15]">
          Nos Services
        </h1>
        <div className="w-12 h-[2px] mx-auto mt-6 rounded-full bg-[#D4AF37]" />
      </div>

      {/* Grille de services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl overflow-hidden border border-zinc-200/80 hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500 flex flex-col shadow-[0_5px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          >
            <div className="h-56 overflow-hidden relative bg-zinc-100">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              <div className="absolute top-4 left-4">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#D4AF37] text-xs font-bold shadow-md">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-7 flex flex-col flex-grow">
              <h2 className="font-creato text-xl font-normal text-zinc-900 mb-2 leading-snug">{cat.title}</h2>
              <div className="w-10 h-[2px] bg-[#D4AF37] mb-4 rounded-full" />
              <p className="font-creato text-xs text-zinc-600 leading-relaxed mb-6">{cat.description}</p>
              
              <ul className="space-y-2.5 mb-8">
                {cat.items.slice(0, 4).map((item, j) => (
                  <li key={j} className="font-creato text-xs text-zinc-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bloc d'actions en bas de carte */}
              <div className="mt-auto pt-4 border-t border-zinc-100 flex flex-col gap-3">
                <Link
                  to="/realisations"
                  className="font-creato text-[#D4AF37] uppercase tracking-[0.2em] text-[10px] font-bold hover:tracking-[0.25em] transition-all flex items-center gap-1.5"
                >
                  Découvrir <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section CTA finale */}
      <div className="mt-24 pt-16 border-t border-zinc-200/60 flex flex-col items-center justify-center space-y-6 text-center max-w-2xl mx-auto">
        <p className="font-creato text-xl md:text-2xl text-zinc-900 font-normal italic leading-relaxed px-4">
          Besoin d'accompagnement pour trouver la solution adaptée à votre marché ?
        </p>
        
        <Link
          to="/contact"
          className="font-creato bg-[#111111] text-white px-8 py-4 rounded-xl uppercase tracking-[0.2em] text-xs font-bold hover:bg-[#D4AF37] transition-all duration-300 shadow-md shadow-zinc-950/10 hover:shadow-xl hover:shadow-zinc-950/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          Contactez-nous pour un diagnostic
        </Link>
      </div>
    </div>
  );
};

export default Services;