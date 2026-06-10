import React from 'react';

const Services = () => {
  const categories = [
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

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto bg-gray-50">
      <div className="mb-20 text-center">
        <p className="font-sans text-idluxe-gold text-xs uppercase tracking-[0.5em] mb-4">Notre Expertise</p>
        <h1 className="font-serif text-5xl text-idluxe-black">Nos Services</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            {/* Image de la carte */}
            <div className="h-40 overflow-hidden">
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            
            {/* Contenu */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="font-serif text-xl mb-2 text-idluxe-black">{cat.title}</h2>
              <p className="text-gray-500 text-xs mb-4 italic">{cat.description}</p>
              
              <ul className="space-y-2 mt-auto">
                {cat.items.slice(0, 4).map((item, j) => (
                  <li key={j} className="text-gray-600 text-xs flex items-center">
                    <span className="w-1 h-1 bg-idluxe-gold mr-2 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;