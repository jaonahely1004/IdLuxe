import React from 'react';

const About = () => {
  const values = [
    { title: "Excellence", desc: "Exigence, précision et sens du détail pour offrir des stratégies à forte valeur ajoutée.", icon: "fa-crown" },
    { title: "Impact", desc: "Une communication capable de transformer les comportements et générer un engagement durable.", icon: "fa-chart-line" },
    { title: "Créativité stratégique", desc: "Alliance d'intelligence marketing et storytelling pour créer des marques mémorables.", icon: "fa-lightbulb" },
    { title: "Authenticité", desc: "Des communications humaines, sincères et alignées avec l'identité profonde des marques.", icon: "fa-handshake" },
    { title: "Engagement durable", desc: "Stratégies responsables pensées pour générer un impact positif et humain.", icon: "fa-leaf" }
  ];

  const advantages = [
    { title: "Expertise Locale", desc: "15 ans d'expériences sur le marché malgache avec une spécialisation en C4D et projets sociaux.", img: "https://images.unsplash.com/photo-1596752316480-49652514c049?auto=format&fit=crop&q=80" },
    { title: "Collaboration Experts", desc: "Système de partenariat interne collaboratif avec des prestataires professionnels et expérimentés.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" },
    { title: "Suivi & Performance", desc: "Étude post-campagne gratuite, analyse de vos KPIs et formations pratiques incluses.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" }
  ];

  return (
    <main className="pt-32 bg-white min-h-screen">
      
      {/* SECTION 1 : INTRODUCTION */}
      <section className="px-10 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="font-sans text-[#C6A66C] text-xs uppercase tracking-[0.5em]">À Propos d'IDLUXE</p>
            <h1 className="font-serif text-4xl md:text-6xl text-[#111111] leading-tight">
              Le premier cabinet responsable spécialisé en <span className="italic text-[#C6A66C]">marketing de luxe</span> à Madagascar.
            </h1>
            <p className="font-sans text-gray-600 font-light text-lg leading-relaxed">
              Nous accompagnons les marques émergentes, les PME et les institutions dans leur montée en gamme, le développement de leur image, leur visibilité et leur positionnement. Notre approche allie stratégie, créativité et impact positif.
            </p>
          </div>
          <div className="relative aspect-square bg-gray-100 overflow-hidden border border-gray-100 group">
            <img src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80" alt="Luxury Marketing Strategy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* SECTION 2 : NOS VALEURS (Fond Noir + Bordure Dorée) */}
      <section className="py-10 bg-zinc-50 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl text-center mb-20 text-[#111111]">Nos <span className="italic">Valeurs</span></h2>                  
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group bg-[#111111] p-8 rounded-2xl border border-[#C6A66C] cursor-pointer hover:-translate-y-2 transition-all duration-500 flex flex-col shadow-lg">
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-[#C6A66C]/30 rounded-full group-hover:border-[#C6A66C] transition-colors">
                  <i className={`fas ${v.icon} text-[#C6A66C] text-lg`}></i>
                </div>
                <h3 className="text-xl font-light text-white mb-3">{v.title}</h3>
                <div className="w-10 h-[2px] bg-[#C6A66C] mb-4" />
                <p className="text-sm text-gray-300 leading-relaxed flex-grow">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : POURQUOI NOUS ? Fond Blanc */}
      <section className="py-20 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl text-[#111111] mb-6">Pourquoi travailler avec <span className="italic">nous ?</span></h2>
          <div className="h-px w-24 bg-[#C6A66C] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div key={i} className="group bg-white border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src={adv.img} alt={adv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {/* Overlay doré au survol */}
                <div className="absolute inset-0 bg-[#C6A66C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-10 space-y-4">
                <h3 className="font-serif text-2xl text-[#111111]">{adv.title}</h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed italic">{adv.desc}</p>
                <div className="h-[2px] w-12 bg-[#C6A66C] group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 : ENGAGEMENT */}
      <section className="py-2 bg-white px-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-3xl text-[#111111] italic">"Nous créons des stratégies où l’intelligence marketing rencontre l’émotion humaine."</h2>
          <button className="mt-8 font-sans text-[11px] uppercase tracking-widest border border-[#111111] px-12 py-5 text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-500">
            Démarrer un projet
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;