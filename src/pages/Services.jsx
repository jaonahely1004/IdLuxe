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
      items: ["Création logo", "Charte graphique", "Refonte logo", "Identité visuelle", "Branding retail"]
    },
    {
      title: "Conseil & Stratégie",
      description: "Accompagnement pour optimiser vos performances.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      items: ["Diagnostic marketing", "Benchmark", "Positionnement", "Copy stratégie", "Plan d'action"]
    },
    {
      title: "Communication Digitale",
      description: "Développement de votre présence en ligne.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      items: ["Création site web", "Audit digital", "Community management", "SEO, SEA, SMA", "Mailing"]
    },
    {
      title: "Événementiel & RP",
      description: "Organisation d'événements haut de gamme.",
      image: "https://images.unsplash.com/photo-1511578314322-37d9b574066f?auto=format&fit=crop&q=80&w=800",
      items: ["Conférences de presse", "Inaugurations", "Défilés de mode", "Cocktails pros", "Cérémonies"]
    },
    {
      title: "Multimédia",
      description: "Supports visuels uniques pour votre image.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      items: ["Production audiovisuelle", "Shooting photo pro", "Relation media"]
    },
    {
      title: "Personal Branding",
      description: "Valorisation de l'image des dirigeants.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      items: ["Analyse personnalité", "E-réputation", "Conseil style", "Communication"]
    },
    {
      title: "Tenues Pro",
      description: "Confection de tenues adaptées.",
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
      items: ["Uniformes", "Tenues corporate", "Tenues d'accueil"]
    },
    {
      title: "RH Événementielles",
      description: "Profils qualifiés pour vos événements.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
      items: ["Hôtesses", "Animateurs", "Ambassadeurs", "Figurants", "Enquêteurs"]
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
    <div className="pt-40 pb-32 px-6 max-w-7xl mx-auto bg-white">
      <div className="mb-20 text-center">
        <p className="font-sans text-[#D4AF37] text-xs uppercase tracking-[0.5em] mb-4">Notre Expertise</p>
        <h1 className="font-serif text-6xl text-[#111111] leading-tight">Nos Services</h1>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500 flex flex-col shadow-[0_5px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
          >
            <div className="h-56 overflow-hidden relative">
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500" />
              <div className="absolute top-4 left-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#D4AF37] font-semibold shadow-md">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>

            <div className="p-7 flex flex-col flex-grow">
              <h2 className="font-serif text-2xl text-[#111111] mb-3">{cat.title}</h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-4" />
              <p className="font-sans text-sm text-[#444444] leading-relaxed mb-6">{cat.description}</p>
              <ul className="space-y-3 mb-8">
                {cat.items.slice(0, 4).map((item, j) => (
                  <li key={j} className="font-sans text-sm text-[#222222] flex items-center">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Bloc d'actions en bas de carte */}
              <div className="mt-auto flex flex-col gap-3">
                <Link
                  to="/realisations"
                  className="font-sans text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-medium hover:tracking-[0.3em] transition-all"
                >               
                  Découvrir →
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="font-sans text-[#111111] uppercase tracking-[0.2em] text-xs font-bold hover:text-[#D4AF37] transition-all underline decoration-[#D4AF37] underline-offset-4 self-start"
                >
                  Demande de devis
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;