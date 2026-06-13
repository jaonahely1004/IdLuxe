import React from 'react';
import { motion } from 'framer-motion';

const Realisation = () => {
  const projects = [
    {
      category: "Grandes marques & Secteur du luxe",
      title: "Sublimation de marques",
      desc: "Tourisme, Hôtellerie & Restauration (THR), Assurance, Banque & Finance, Automobile, Lunetterie, Mode & Bien-être, Artisanat, Bijouterie, Joaillerie et Parfumerie.",
      stats: "Excellence & Prestige",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    },
    {
      category: "Institutions publiques, projets & ONG",
      title: "Communication au service du développement",
      desc: "Communication pour le développement dans les domaines du social, de la santé et de l'environnement. Conception de campagnes IEC : Information, Éducation et Communication.",
      stats: "Impact Social & Développement",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80",
    },
    {
      category: "Communication & Événementiel",
      title: "Stratégie d'image sur le terrain",
      desc: "Consultance en marketing, communication et événementiel. Études de marché, mise à disposition de mannequins, hôtesses, modèles photo et figurants publicitaires.",
      stats: "Visibilité & Expertise",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <main className="pt-32 bg-[#FAF8F3] min-h-screen">
      {/* HERO */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-32">
        <p className="uppercase tracking-[0.5em] text-[#D4AF37] text-xs font-semibold mb-6">
          Nos Réalisations
        </p>
        <h1 className="font-serif text-6xl md:text-8xl text-[#111111] leading-none mb-8">
          Les preuves par
          <span className="block italic text-[#D4AF37]">
            l'action
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Chaque projet est pensé comme une signature. Une alliance entre
          stratégie, créativité et excellence pour construire des marques,
          des institutions et des événements à forte valeur ajoutée.
        </p>
      </section>

      {/* PROJETS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 space-y-36 pb-32">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative group">
              <div className="absolute -top-10 -left-2 z-10">
                <span className="font-serif text-[120px] leading-none text-[#D4AF37]/15 font-bold">
                  0{i + 1}
                </span>
              </div>
              <div className="overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-[520px] object-cover transition-all duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* TEXTE */}
            <div className="space-y-8">
              <span className="inline-flex items-center border border-[#D4AF37] px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                {proj.category}
              </span>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#111111] leading-tight">
                {proj.title}
              </h2>
              <div className="w-24 h-[2px] bg-[#D4AF37]" />
              <p className="text-gray-600 text-lg leading-relaxed">
                {proj.desc}
              </p>
              <div className="bg-white border-l-4 border-[#D4AF37] shadow-md p-6">
                <span className="font-serif text-xl text-[#111111] font-semibold">
                  {proj.stats}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="bg-white py-28 px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-xs mb-6">
          Construisons ensemble
        </p>
        <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">
          Donnons vie à votre vision
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 mb-12 leading-relaxed">
          Nous accompagnons les marques, institutions et organisations
          ambitieuses dans la création d'expériences mémorables et d'une
          image forte.
        </p>
        <button className="bg-[#111111] text-white px-12 py-5 uppercase tracking-[0.25em] text-sm font-semibold transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#111111]">
          Démarrer un projet
        </button>
      </section>
    </main>
  );
};

export default Realisation;