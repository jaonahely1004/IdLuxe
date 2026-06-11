import React from 'react';
import talentsLocaux from '../assets/locaux.jpg';
import pme from '../assets/accompagnementPME.jpeg';
import luxeResponsable from '../assets/marketingLuxe.jpeg';

const Engagements = () => {
  const sections = [
    {
      title: 'Collaboration avec des talents locaux',
      description:
        "Photographes, vidéastes, créatifs, artisans et professionnels reconnus. Nous valorisons les savoir-faire locaux et faisons circuler la richesse au sein de l’écosystème malgache.",
      image: talentsLocaux,
      side: 'left'
    },
    {
      title: 'Contribution au développement des PME',
      description:
        "Des prestations sur-mesure, des packs accessibles et des accompagnements évolutifs pour aider les startups, PME et producteurs locaux à se structurer et se professionnaliser.",
      image: pme,
      side: 'right'
    },
    {
      title: 'Un marketing du luxe éthique et responsable',
      description:
        "IDLUXE Marketing défend une vision du luxe responsable, ancrée dans son territoire. Un modèle flexible, inclusif et adapté aux réalités locales.",
      image: luxeResponsable,
      side: 'left'
    }
  ];

  const actions = [
    {
      title: 'Social',
      description:
        "Améliorer le niveau de vie des familles en créant des sources de revenu stables."
    },
    {
      title: 'Enfant',
      description:
        "Soutenir les parents dans l’éducation et la santé des enfants."
    },
    {
      title: 'Femme',
      description:
        "Participer à l’autonomisation des femmes à travers des projets durables."
    },
    {
      title: 'Personnes âgées',
      description:
        "Assurer une vie sereine grâce à des actions de santé et de nutrition."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-28">
          <p className="text-idluxe-gold uppercase tracking-[0.5em] text-xs mb-4">
            Notre Vision
          </p>

          <h2 className="font-serif text-5xl mb-6 text-idluxe-black">
            Nos Engagements
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un cabinet à impact positif avec une dimension responsable et collaborative,
            ancré dans le développement local à Madagascar.
          </p>
        </div>

        {/* Alternance blocs avec images */}
        <div className="space-y-16">

          {sections.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                item.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Texte */}
              <div className="md:w-1/2">
                <h3 className="font-serif text-3xl mb-6 text-idluxe-black">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* IMAGE (remplace le point décoratif) */}
              <div className="md:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Brand New Madagascar */}
          <div className="mt-32">

            <p className="text-idluxe-gold uppercase tracking-[0.4em] text-xs mb-6 text-center">
              Impact Positif
            </p>

            <h3 className="font-serif text-4xl text-center mb-10 text-idluxe-black">
              Un engagement concret pour Madagascar
            </h3>

            <p className="text-gray-600 max-w-4xl mx-auto text-center leading-relaxed mb-20">
              Travailler avec IDLUXE Marketing, c’est aussi contribuer à des actions à impact positif à Madagascar.
              Une partie de nos bénéfices est réservée à
              <span className="text-idluxe-gold font-medium">
                {' '}Brand New Madagascar
              </span>,
              une association engagée dans l’amélioration durable des conditions de vie des populations vulnérables.
            </p>

            <div className="grid md:grid-cols-4 gap-12 text-center">

              {actions.map((item, index) => (
                <div key={index}>
                  <h4 className="font-serif text-2xl text-idluxe-gold mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Engagements;