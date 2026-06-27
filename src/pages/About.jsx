import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [content, setContent] = useState({ values: [], advantages: [] });
  useEffect(() => {
    axios.get('http://localhost:5000/api/content/page/about')
      .then(res => {
        const rawData = res.data;

        const transformData = (sectionName) => {
          const items = rawData.filter(item => item.section_name === sectionName);         
          // Regroupement par group_id
          const grouped = items.reduce((acc, curr) => {
            if (!acc[curr.group_id]) acc[curr.group_id] = { id: curr.group_id };
            acc[curr.group_id][curr.item_key] = curr.content;
            return acc;
          }, {});         
          return Object.values(grouped);
        };
        setContent({
          values: transformData('values'),
          advantages: transformData('advantages')
        });
      })
      .catch(err => console.error("Erreur de chargement API:", err));
  }, []);  
  // Données par défaut pour éviter le rendu vide
  const defaultValues = [
    { title: "Excellence", desc: "Exigence, précision et sens du détail pour offrir des stratégies à forte valeur ajoutée.", icon: "fa-crown" },
    { title: "Impact", desc: "Une communication capable de transformer les comportements et générer un engagement durable.", icon: "fa-chart-line" },
    { title: "Créativité stratégique", desc: "Alliance d'intelligence marketing et storytelling pour créer des marques mémorables.", icon: "fa-lightbulb" },
    { title: "Authenticité", desc: "Des communications humaines, sincères et alignées avec l'identité profonde des marques.", icon: "fa-handshake" },
    { title: "Engagement durable", desc: "Stratégies responsables pensées pour générer un impact positif et humain.", icon: "fa-leaf" }
  ];
  const defaultAdvantages = [
    { title: "Expertise Locale", desc: "15 ans d'expériences sur le marché malgache avec une spécialisation en C4D et projets sociaux.", img: "https://images.unsplash.com/photo-1596752316480-49652514c049?auto=format&fit=crop&q=80" },
    { title: "Collaboration Experts", desc: "Système de partenariat interne collaboratif avec des prestataires professionnels et expérimentés.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" },
    { title: "Suivi & Performance", desc: "Étude post-campagne gratuite, analyse de vos KPIs et formations pratiques incluses.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" }
  ];
  // Logique de fusion : Si l'API renvoie des données, on les utilise, sinon le défaut
  const displayValues = content.values.length > 0 ? content.values : defaultValues;
  const displayAdvantages = content.advantages.length > 0 ? content.advantages : defaultAdvantages;
  useEffect(() => {
    console.log("Données reçues de l'API :", content);
  }, [content]);
  return (
    <main className="pt-32 bg-white min-h-screen">     
      {/* SECTION 1 : INTRODUCTION (Statique comme demandé) */}
      <section className="px-10 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="font-sans text-[#D4AF37] text-xs uppercase tracking-[0.5em]">À Propos d'IDLUXE</p>
            <h1 className="font-serif text-4xl md:text-6xl text-[#111111] leading-tight">
              Le premier cabinet responsable spécialisé en <span className="italic text-[#D4AF37]">marketing de luxe</span> à Madagascar.
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
      {/* SECTION 2 : NOS VALEURS (Dynamique liée à la BD) */}
      <section className="py-20 bg-zinc-50 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl text-center mb-20 text-[#111111]">Nos <span className="italic">Valeurs</span></h2>                  
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {displayValues.map((v, i) => (
              <div key={i} className="group bg-[#111111] p-8 rounded-2xl border border-[#D4AF37] cursor-pointer hover:-translate-y-2 transition-all duration-500 flex flex-col shadow-lg">
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-[#D4AF37]/30 rounded-full group-hover:border-[#D4AF37] transition-colors">
                  <i className={`fas ${v.icon} text-[#D4AF37] text-lg`}></i>
                </div>
                <h3 className="text-xl font-light text-white mb-3">{v.title}</h3>
                <div className="w-10 h-[2px] bg-[#D4AF37] mb-4" />
                <p className="text-sm text-gray-300 leading-relaxed flex-grow">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION 3 : POURQUOI NOUS ? (Dynamique liée à la BD) */}
      <section className="py-20 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl text-[#111111] mb-6">Pourquoi travailler avec <span className="italic">nous ?</span></h2>
          <div className="h-px w-24 bg-[#D4AF37] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {displayAdvantages.map((adv, i) => (
            <div key={i} className="group bg-white border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src={adv.img} alt={adv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-10 space-y-4">
                <h3 className="font-serif text-2xl text-[#111111]">{adv.title}</h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed italic">{adv.desc}</p>
                <div className="h-[2px] w-12 bg-[#D4AF37] group-hover:w-24 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;