import React from 'react';

const About = () => {
  // Données des Valeurs (Slide 1)
  const values = [
    {
      title: "Excellence",
      desc: "Exigence, précision et sens du détail pour offrir des stratégies à forte valeur ajoutée.",
      icon: "fa-crown"
    },
    {
      title: "Impact",
      desc: "Une communication capable de transformer les comportements et générer un engagement durable.",
      icon: "fa-chart-line"
    },
    {
      title: "Créativité stratégique",
      desc: "Alliance d'intelligence marketing et storytelling pour créer des marques mémorables.",
      icon: "fa-lightbulb"
    },
    {
      title: "Authenticité",
      desc: "Des communications humaines, sincères et alignées avec l'identité profonde des marques.",
      icon: "fa-handshake"
    },
    {
      title: "Engagement durable",
      desc: "Stratégies responsables pensées pour générer un impact positif et humain.",
      icon: "fa-leaf"
    }
  ];

  // Données "Pourquoi nous" (Slide 2)
  const advantages = [
    {
      title: "Expertise Locale",
      desc: "15 ans d'expériences sur le marché malgache avec une spécialisation en C4D et projets sociaux.",
      img: "https://images.unsplash.com/photo-1596752316480-49652514c049?auto=format&fit=crop&q=80" 
    },
    {
      title: "Collaboration Experts",
      desc: "Système de partenariat interne collaboratif avec des prestataires professionnels et expérimentés.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
    },
    {
      title: "Suivi & Performance",
      desc: "Étude post-campagne gratuite, analyse de vos KPIs et formations pratiques incluses.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <main className="pt-32 bg-white min-h-screen">
      
      {/* SECTION 1 : INTRODUCTION (Slide 1) */}
      <section className="px-10 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="font-sans text-idluxe-gold text-xs uppercase tracking-[0.5em]">À Propos d'IDLUXE</p>
            <h1 className="font-serif text-4xl md:text-6xl text-idluxe-black leading-tight">
              Le premier cabinet responsable spécialisé en <span className="italic text-idluxe-gold">marketing de luxe</span> à Madagascar.
            </h1>
            <p className="font-sans text-gray-600 font-light text-lg leading-relaxed">
              Nous accompagnons les marques émergentes, les PME et les institutions dans leur montée en gamme, le développement de leur image, leur visibilité et leur positionnement. Notre approche allie stratégie, créativité et impact positif.
            </p>
          </div>
          <div className="relative aspect-square bg-gray-100 overflow-hidden border border-gray-100 group">
            <img 
              src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80" 
              alt="Luxury Marketing Strategy" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-idluxe-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 : NOS VALEURS (Slide 1 - Cards horizontales) */}
        <section className="py-24 bg-white px-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif text-4xl text-center mb-16 text-idluxe-black italic">
                Nos Valeurs
                </h2>                   
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {values.map((v, i) => (
                        <div 
                            key={i} 
                            className="group bg-white border border-gray-100 p-8 flex flex-col justify-between 
                            transition-all duration-500 ease-out 
                            hover:-translate-y-2 hover:shadow-2xl hover:border-transparent cursor-default"
                        >
                            <div className="mb-6">
                                {/* L'icône change de couleur au survol pour un effet élégant */}
                                <i className={`fas ${v.icon} text-2xl text-idluxe-gold mb-6 block transition-colors duration-300 group-hover:text-idluxe-black`}></i>
                                <h3 className="font-serif text-lg mb-4 text-idluxe-black">
                                    {v.title}
                                </h3>                           
                                <p className="text-[11px] font-light leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-idluxe-black">
                                    {v.desc}
                                </p>
                            </div>                        
                            {/* La ligne dorée s'agrandit légèrement au survol */}
                            <div className="h-px w-10 bg-idluxe-gold transition-all duration-500 group-hover:w-20"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      {/* SECTION 3 : POURQUOI NOUS ? (Slide 2 - Scénarios Cards) */}
      <section className="py-32 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl text-idluxe-black mb-4">Pourquoi travailler avec nous ?</h2>
          <div className="h-px w-24 bg-idluxe-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {advantages.map((adv, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src={adv.img} 
                  alt={adv.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10 space-y-4">
                <span className="text-idluxe-gold font-serif text-xl">0{i+1}</span>
                <h3 className="font-serif text-2xl text-idluxe-black">{adv.title}</h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed italic">
                  {adv.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 : ENGAGEMENT (Bas de Slide 2) */}
      <section className="py-24 bg-[#F9F9F9] px-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl text-idluxe-black italic">"Nous créons des stratégies où l’intelligence marketing rencontre l’émotion humaine."</h2>
          <p className="font-sans text-idluxe-gold uppercase tracking-[0.4em] text-xs">IDLUXE Marketing Madagascar</p>
          <button className="mt-8 font-sans text-[11px] uppercase tracking-widest border border-idluxe-black px-12 py-5 text-idluxe-black hover:bg-idluxe-black hover:text-white transition-all duration-500">
            Démarrer un projet
          </button>
        </div>
      </section>

    </main>
  );
};

export default About;