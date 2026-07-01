import React from 'react';
import logoBNM from '../../assets/logo-bnm.png';
import odd1 from '../../assets/odd1.png';
import odd2 from '../../assets/odd2.png';
import odd3 from '../../assets/odd3.png';
import odd4 from '../../assets/odd4.png';
import odd5 from '../../assets/odd5.png';
import odd8 from '../../assets/odd8.png';

const BrandNew = () => {
  const oddImages = [
    { id: 1, src: odd1, alt: 'Pas de pauvreté' },
    { id: 2, src: odd2, alt: 'Faim zéro' },
    { id: 3, src: odd3, alt: 'Bonne santé et bien-être' },
    { id: 4, src: odd4, alt: 'Éducation de qualité' },
    { id: 5, src: odd5, alt: 'Égalité entre les sexes' },
    { id: 8, src: odd8, alt: 'Travail décent et croissance économique' },
  ];

  return (
    <main className="min-h-screen bg-white pt-40 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        
        <header className="mb-20 text-center">
          <span className="font-sans text-[#4CAF50] text-xs uppercase tracking-[0.5em] mb-4 block font-bold">
            NOS ENGAGEMENTS
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#111111] mb-8">
            BRAND NEW <span className="italic text-[#4CAF50]">MADAGASCAR</span>
          </h1>
          <div className="h-[2px] w-24 bg-[#4CAF50] mx-auto"></div>
        </header>

        <section className="mb-24">
          <h2 className="text-[#4CAF50] text-2xl font-bold mb-8">Un marketing du luxe Ethique, responsable et solidaire</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>Travailler avec IDLuxe Consulting, c’est aussi contribuer à des actions à impact positif dans le pays.</p>
            <p>Une partie de nos bénéfices est reversée à Brand New Madagascar, une association engagée dans l’amélioration des conditions de vie des populations vulnérables.</p>
          </div>
        </section>

        {/* Section Logo ajustée */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-[#f9f9f9] p-10 rounded-3xl">
          <div className="flex justify-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <img src={logoBNM} alt="Logo Brand New Madagascar" className="max-w-[200px] h-auto" />
          </div>
          <div className="space-y-6">
            <h3 className="text-[#4CAF50] text-xl font-bold">Engagé pour soutenir la population vulnérable, aider sans rien attendre en retour, aider par amour</h3>
            <p className="text-gray-700 leading-relaxed">
              Brand New Madagascar est une association à but non lucratif créée en 2020 par la fondatrice du cabinet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Elle rassemble des jeunes bénévoles ayant pour mission de changer le mode de vie de la population défavorisée et de leur offrir un nouveau départ afin d'avoir un avenir meilleur et stable.
            </p>
          </div>
        </section>

        {/* Section ODD avec effets */}
        <section>
          <p className="text-gray-700 mb-10 text-lg">
            Avec l'appui d'IDLuxe et d'autres partenaires, le but de l'association est de contribuer à six objectifs du développement durable (ODD)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {oddImages.map((odd) => (
              <div key={odd.id} className="group cursor-pointer">
                <img 
                  src={odd.src} 
                  alt={odd.alt} 
                  className="w-full rounded-xl shadow-md transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl" 
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default BrandNew;