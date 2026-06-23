import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Baby, User, Heart } from 'lucide-react';
import axios from 'axios';

import talentsLocaux from '../assets/locaux.jpeg';
import pme from '../assets/accompagnementPME.jpeg';
import luxeResponsable from '../assets/marketingLuxe.jpeg';

const Engagements = () => {
  // Données statiques par défaut (pour le design original)
  const defaultSections = [
    {
      title: 'Collaboration avec des talents locaux',
      description: "Photographes, vidéastes, créatifs, artisans et professionnels reconnus. Nous valorisons les savoir-faire locaux et faisons circuler la richesse au sein de l’écosystème malgache.",
      image: talentsLocaux,
      side: 'left'
    },
    {
      title: 'Contribution au développement des PME',
      description: "Des prestations sur-mesure, des packs accessibles et des accompagnements évolutifs pour aider les startups, PME et producteurs locaux à se structurer et se professionnaliser.",
      image: pme,
      side: 'right'
    },
    {
      title: 'Un marketing du luxe éthique et responsable',
      description: "IDLUXE Marketing défend une vision du luxe responsable, ancrée dans son territoire. Un modèle flexible, inclusif et adapté aux réalités locales.",
      image: luxeResponsable,
      side: 'left'
    }
  ];

  const defaultActions = [
    { icon: Users, title: 'Social', description: "Améliorer le niveau de vie des familles en créant des sources de revenu stables." },
    { icon: Baby, title: 'Enfant', description: "Soutenir les parents dans l’éducation et la santé des enfants." },
    { icon: User, title: 'Femme', description: "Participer à l’autonomisation des femmes à travers des projets durables." },
    { icon: Heart, title: 'Personnes âgées', description: "Assurer une vie sereine grâce à des actions de santé et de nutrition." }
  ];

  const [content, setContent] = useState({ sections: [], impacts: [] });

  useEffect(() => {
    axios.get('http://localhost:5000/api/content/page/engagements')
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
          sections: transformData('sections'),
          impacts: transformData('actions')
        });
      })
      .catch(err => console.error("Erreur de chargement API:", err));
  }, []);

  // On fusionne les données API pour le texte, mais on force les images locales
  const displaySections = content.sections.length > 0 
    ? content.sections.map((item, index) => ({
        ...item,
        image: defaultSections[index]?.image || talentsLocaux,
        side: defaultSections[index]?.side || 'left'
      })) 
    : defaultSections;

  const displayActions = content.impacts.length > 0 ? content.impacts : defaultActions;

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-idluxe-gold uppercase tracking-[0.5em] text-xs mb-4">
            Notre Vision
          </p>
          <h2 className="font-serif text-5xl mb-6 text-idluxe-black">
            Nos Engagements
          </h2>
          <p className="font-sans text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un cabinet à impact positif avec une dimension responsable et collaborative,
            ancré dans le développement local à Madagascar.
          </p>
        </motion.div>

        {/* Engagements */}
        <div className="space-y-20">
          {displaySections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                item.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2">
                <h3 className="font-serif text-3xl mb-6 text-idluxe-black">{item.title}</h3>
                <div className="w-16 h-[2px] bg-idluxe-gold mb-6"></div>
                <p className="font-sans text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="md:w-1/2">
                <div className="group relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700"></div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Impact Social */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <p className="font-sans text-idluxe-gold uppercase tracking-[0.4em] text-xs mb-6 text-center">
              Impact Positif
            </p>
            <h3 className="font-serif text-4xl text-center mb-10 text-idluxe-black">
              Un engagement concret pour Madagascar
            </h3>
            <p className="font-sans text-gray-600 max-w-4xl mx-auto text-center leading-relaxed mb-14">
              Travailler avec IDLUXE Marketing, c’est aussi contribuer à des actions à impact positif à Madagascar.
              Une partie de nos bénéfices est réservée à <span className="text-idluxe-gold font-medium">Brand New Madagascar</span>, 
              une association engagée dans l’amélioration durable des conditions de vie des populations vulnérables.
            </p>

            {/* Cartes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayActions.map((item, index) => {
                const Icon = item.icon || Users;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-idluxe-gold/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="w-8 h-8 rounded-full bg-idluxe-gold/10 flex items-center justify-center mb-6 group-hover:bg-idluxe-gold/20 group-hover:scale-110 transition-all duration-500">
                      <Icon size={20} className="text-idluxe-gold" />
                    </div>
                    <h4 className="font-serif text-xl text-idluxe-black mb-3 group-hover:text-idluxe-gold transition-colors duration-500">
                      {item.title}
                    </h4>
                    <div className="w-10 h-px bg-idluxe-gold mb-4 transition-all duration-500 group-hover:w-16"></div>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Engagements;