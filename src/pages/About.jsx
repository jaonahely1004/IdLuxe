import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const About = () => {
  const [content, setContent] = useState({ values: [], advantages: [] });

  useEffect(() => {
    axios.get('http://localhost:5000/api/content/page/about')
      .then(res => {
        const rawData = res.data;
        const transformData = (sectionName) => {
          const items = rawData.filter(item => item.section_name === sectionName);
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

  const defaultValues = [
    { title: "Excellence", desc: "Nous concevons chaque projet avec exigence, précision et sens du détail afin d'offrir des stratégies et des créations à forte valeur ajoutée.", icon: "fa-crown" },
    { title: "Performance", desc: "Les solutions proposées sont personnalisées et orientées client pour assurer des résultats mesurables.", icon: "fa-chart-line" },
    { title: "Impact", desc: "Nous concevons des stratégies de communication responsables et pérennes, pensées pour générer un impact positif, humain et durable.", icon: "fa-leaf" }
  ];

  const defaultAdvantages = [
    { title: "10 ans d'expériences sur le marché local", desc: "Expertise en marketing et communication multisecteur, stratégie orientée client et impact, spécialisation en C4D et gestion de projet social.", img: "https://images.unsplash.com/photo-1596752316480-49652514c049?auto=format&fit=crop&q=80" },
    { title: "Collaboration avec des experts", desc: "Prestataires de services experts pour garantir la qualité. Opportunité d'affaire grâce à notre plateforme collaborative.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" },
    { title: "Accompagnement et suivi", desc: "Formations pratiques, étude post-campagne et rapport gratuits, mesure de performance avec appui sur l'analyse de vos KPIs.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" }
  ];

  const displayValues = content.values.length > 0 ? content.values : defaultValues;
  const displayAdvantages = content.advantages.length > 0 ? content.advantages : defaultAdvantages;

  return (
    <main className="pt-32 bg-white min-h-screen">
      {/* SECTION 1 : INTRODUCTION */}
      <section className="px-10 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="font-sans text-[#D4AF37] text-xs uppercase tracking-[0.5em]">À PROPOS</p>
            <h1 className="font-serif text-4xl md:text-6xl text-[#111111] leading-tight">
              Le premier cabinet de consulting responsable spécialisé en <span className="italic text-[#D4AF37]">marketing de luxe</span> à Madagascar
            </h1>
            <p className="font-sans text-gray-600 font-light text-lg leading-relaxed text-justify">
              IDLuxe est un cabinet de consultance social et solidaire spécialisé dans cinq domaines :
            </p>
            
            {/* LISTE DES 5 DOMAINES AVEC HOVER ET CURSEUR */}
            <div className="space-y-4 mt-6">
              {[
                { title: "Le marketing du luxe", icon: "fa-gem" },
                { title: "La communication pour le développement (C4D)", icon: "fa-bullhorn" },
                { title: "L'outsourcing RSE", icon: "fa-recycle" },
                { title: "L'événementiel haut de gamme", icon: "fa-glass-cheers" },
                { title: "La communication 360", icon: "fa-share-nodes" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center space-x-4 border-l-2 border-[#D4AF37] pl-4 py-2 cursor-pointer hover:bg-gray-50 hover:pl-6 transition-all duration-300"
                >
                  <i className={`fas ${item.icon} text-[#D4AF37] w-6 text-center`}></i>
                  <span className="font-sans text-gray-700 text-md font-light group-hover:text-[#111111]">{item.title}</span>
                </div>
              ))}
            </div>

            <p className="font-sans text-gray-600 font-light text-lg leading-relaxed text-justify mt-8">
              Notre raison d'être est d'accompagner les marques premium, le secteur touristique, les institutions et projets, tout en contribuant à l'amélioration du niveau de vie de la population vulnérable et à la protection de la biodiversité de Madagascar.
            </p>
            <p className="font-sans text-gray-600 font-light text-lg leading-relaxed text-justify mt-8">
              Notre particularité réside dans notre capacité à intégrer les standards du luxe et du premium à chaque projet, afin de transformer une marque en une expérience unique et mémorable.
            </p>
          </div>
          
          <div className="relative h-full w-full bg-gray-100 overflow-hidden border border-gray-100 group">
            <img 
              src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80" 
              alt="Stratégie Marketing de Luxe" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 : NOS VALEURS */}
      <section className="py-24 bg-zinc-50 px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl text-center mb-20 text-[#111111]">Nos <span className="italic">Valeurs</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayValues.map((v, i) => (
              <div 
                key={i} 
                className="group relative bg-[#111111]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:-translate-y-3 transition-all duration-500 flex flex-col shadow-xl hover:shadow-2xl"
              >
                <div className="w-16 h-16 mb-8 flex items-center justify-center border border-[#D4AF37]/30 rounded-full group-hover:bg-[#D4AF37]/10 transition-colors duration-500">
                  <i className={`fas ${v.icon} text-[#D4AF37] text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">{v.title}</h3>
                <div className="w-16 h-[2px] bg-[#D4AF37] mb-6 group-hover:w-24 transition-all duration-500" />
                <p className="text-sm text-gray-300 leading-relaxed font-light flex-grow">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : POURQUOI NOUS ? */}
<section className="py-24 bg-white px-10">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="font-serif text-5xl text-[#111111] mb-6">Pourquoi travailler avec <span className="italic">nous ?</span></h2>
      <p className="text-md text-gray-600 font-medium mb-4">
        IDLuxe s'engage à <span className="text-[#D4AF37] font-bold">110%</span> sur votre projet :
      </p>
      <p className="text-sm text-gray-500 italic mb-2"> 100% des solutions adaptées parfaitement à vos besoins</p>
      <p className="text-sm text-gray-500 italic"> 10% des solutions agiles pour plus d'impact : pré-test, accompagnement, relai de communication, ajustement</p>
      <div className="h-px w-24 bg-[#D4AF37] mx-auto mt-8"></div>
    </div>

    {/* Grille des cartes */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {/* Carte 1 */}
      <div className="group relative bg-[#111111]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 hover:-translate-y-3 transition-all duration-500 flex flex-col shadow-xl hover:shadow-2xl">
        <h3 className="text-2xl font-light text-white mb-4 tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
          10 ans d'expériences sur le marché local
        </h3>
        <div className="w-16 h-[2px] bg-[#D4AF37] mb-6 group-hover:w-24 transition-all duration-500" />
        <p className="text-sm text-gray-300 leading-relaxed font-light flex-grow">
          Expertise en marketing et communication multisecteur. Stratégie orientée client et impact. 
          Spécialisation en C4D et gestion de projet social et environnemental.
        </p>
      </div>

      {/* Carte 2 */}
      <div className="group relative bg-[#111111]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 hover:-translate-y-3 transition-all duration-500 flex flex-col shadow-xl hover:shadow-2xl">
        <h3 className="text-2xl font-light text-white mb-4 tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
          Collaboration avec des experts du secteur
        </h3>
        <div className="w-16 h-[2px] bg-[#D4AF37] mb-6 group-hover:w-24 transition-all duration-500" />
        <p className="text-sm text-gray-300 leading-relaxed font-light flex-grow">
          Prestataires de services experts pour garantir la qualité. 
          Opportunité d'affaire grâce à notre système de <em>plateforme collaborative et annuaires des partenaires</em>.
        </p>
      </div>

      {/* Carte 3 */}
      <div className="group relative bg-[#111111]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 hover:-translate-y-3 transition-all duration-500 flex flex-col shadow-xl hover:shadow-2xl">
        <h3 className="text-2xl font-light text-white mb-4 tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
          Accompagnement et suivi
        </h3>
        <div className="w-16 h-[2px] bg-[#D4AF37] mb-6 group-hover:w-24 transition-all duration-500" />
        <p className="text-sm text-gray-300 leading-relaxed font-light flex-grow">
          Des formations pratiques ou ateliers de travail pour offrir un service client irréprochable. 
          Etude post-campagne, rapports gratuits et mesure de performance avec analyse de vos KPIs.
        </p>
      </div>
    </div>

    {/* Bouton avec bordure arrondie */}
    <div className="text-center">
      <Link
        to="/services"
        className="font-sans bg-[#111111] text-white px-8 py-4 rounded-lg uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#D4AF37] transition-all"
      >
        Découvrir nos solutions
      </Link>
    </div>
  </div>
</section>
    </main>
  );
};

export default About;