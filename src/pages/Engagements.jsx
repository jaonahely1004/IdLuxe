import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Briefcase, Megaphone, ArrowUpRight } from 'lucide-react';
import BrandNew from '../assets/brandnewpdc.jpeg';
import image2 from '../assets/accompagnementPME.jpeg';
import image3 from '../assets/accompagnementPME.jpeg';

const GOLD = '#D4AF37';

const Engagements = () => {
  const navCards = [
    {
      title: 'Brand New Madagascar',
      description:
        "Découvrez notre engagement associatif pour le développement durable et l'aide aux populations vulnérables.",
      icon: Target,
      link: '/engagements/brand-new-madagascar',
      image: BrandNew,
    },
    {
      title: 'Plateforme des Pro',
      description:
        "Des solutions sur-mesure pour structurer, professionnaliser et développer votre activité.",
      icon: Briefcase,
      link: '/engagements/plateforme-des-pro',
      image: image2,
    },
    {
      title: 'Communication Responsable',
      description:
        "Une vision du marketing éthique, inclusive et profondément ancrée dans le territoire malgache.",
      icon: Megaphone,
      link: '/engagements/Communication-responsable',
      image: image3,
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-[#faf8f3] to-white min-h-screen flex items-center overflow-hidden font-creato">
      {/* Décor de fond subtil */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #D4AF37 0, transparent 40%), radial-gradient(circle at 80% 80%, #D4AF37 0, transparent 40%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto w-full">
        {/* En-tête */}
        <div className="text-center mb-20">
          <p className="text-[11px] font-creato uppercase tracking-[0.4em] font-bold mb-4 inline-block" style={{ color: GOLD }}>
            Notre Vision
          </p>
          <h2 className="font-creato text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-zinc-900">
            Nos Engagements
          </h2>
          <div className="w-12 h-[2px] mx-auto mt-6 rounded-full" style={{ backgroundColor: GOLD }}></div>
        </div>
        {/* Grille de Cartes */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {navCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <Link to={card.link} className="block">
                <div
                  className="
                    group relative h-[440px] overflow-hidden rounded-[24px]
                    shadow-[0_15px_45px_-15px_rgba(0,0,0,0.25)]
                    hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]
                    transition-shadow duration-500 cursor-pointer
                    ring-1 ring-black/5
                  "
                >
                  {/* Image */}
                  <img
                    src={card.image}
                    alt=""
                    className="
                      absolute inset-0 h-full w-full object-cover
                      transition-transform duration-[1200ms] ease-out
                      group-hover:scale-105
                    "
                  />
                  {/* Voile de couleur */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />

                  {/* Halo doré au hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 100%, rgba(212,175,55,0.3), transparent 60%)',
                    }}
                  />
                  {/* Flèche réduite en haut à droite */}
                  <div
                    className="
                      absolute top-5 right-5 w-9 h-9 rounded-full
                      bg-white/10 backdrop-blur-md border border-white/20
                      flex items-center justify-center
                      transition-all duration-500
                      group-hover:rotate-45
                    "
                    style={{ '--hover-bg': GOLD }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = GOLD;
                      e.currentTarget.style.borderColor = GOLD;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.borderColor = '';
                    }}
                  >
                    <ArrowUpRight className="text-white" size={15} />
                  </div>
                  {/* Contenu bas réajusté */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Boîtier d'icône plus compact */}
                    <div
                      className="
                        w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md
                        flex items-center justify-center mb-4
                        border border-white/20
                        transition-all duration-500
                        group-hover:-translate-y-1
                      "
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = GOLD;
                        e.currentTarget.style.borderColor = GOLD;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.borderColor = '';
                      }}
                    >
                      <card.icon className="text-white" size={22} />
                    </div>
                    {/* Ligne dorée animée */}
                    <div className="h-px w-8 mb-3 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: GOLD }} />
                    <h3 className="font-creato text-2xl text-white mb-2 leading-tight font-normal">
                      {card.title}
                    </h3>

                    <p className="font-creato text-xs text-white/80 leading-relaxed mb-0 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mb-3 transition-all duration-500 overflow-hidden">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;