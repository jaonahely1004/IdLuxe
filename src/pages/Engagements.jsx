import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Briefcase, Megaphone } from 'lucide-react';

const Engagements = () => {
  const navCards = [
    {
      title: 'Brand New Madagascar',
      description: "Découvrez notre engagement associatif pour le développement durable et l'aide aux populations vulnérables.",
      icon: Target,
      link: '/engagements/brand-new-madagascar'
    },
    {
      title: 'Plateforme des Pro',
      description: "Des solutions sur-mesure pour structurer, professionnaliser et développer votre activité.",
      icon: Briefcase,
      link: '/engagements/plateforme-des-pro'
    },
    {
      title: 'Communication Responsable',
      description: "Une vision du marketing éthique, inclusive et profondément ancrée dans le territoire malgache.",
      icon: Megaphone,
      link: '/engagements/Communication-responsable'
    }
  ];

  return (
    <section className="py-32 px-6 bg-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-20">
          <p className="font-sans text-idluxe-gold uppercase tracking-[0.5em] text-xs mb-4">
            Notre Vision
          </p>
          <h2 className="font-serif text-5xl text-idluxe-black">Nos Engagements</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {navCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-idluxe-gold/10 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="text-idluxe-gold" size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4 text-idluxe-black">{card.title}</h3>
              <p className="font-sans text-gray-600 mb-8 flex-grow leading-relaxed">
                {card.description}
              </p>
              <Link 
                to={card.link}
                className="inline-flex items-center text-idluxe-gold font-medium hover:gap-2 transition-all duration-300"
              >
                En savoir plus <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;