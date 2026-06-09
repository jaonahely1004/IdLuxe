import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const steps = [
    { title: 'DÉCOUVRIR', desc: 'Immersion dans votre univers, votre marché et vos ambitions.', icon: 'fa-compass' },
    { title: 'ANALYSER', desc: 'Analyse stratégique des audiences, tendances et concurrents.', icon: 'fa-chart-pie' }, // Icône mise à jour
    { title: 'POSITIONNER', desc: 'Construction d’un positionnement clair, différenciant et mémorable.', icon: 'fa-bullseye' },
    { title: 'ACTIVER', desc: 'Déploiement créatif et communication omnicanale stratégique.', icon: 'fa-rocket' },
    { title: 'MESURER', desc: 'Analyse des performances et optimisation continue des KPIs.', icon: 'fa-chart-line' }
  ];

  return (
    <main className="bg-white pt-24">
      {/* 1. HERO SECTION - Avec Image ajoutée */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Photo de bannière en arrière-plan */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" 
              alt="Bureau luxe" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div> {/* Filtre de clarté */}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 font-sans text-idluxe-gold text-[10px] uppercase tracking-[0.8em] mb-12">
          IDLUXE Marketing
        </motion.p>
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10 font-serif text-6xl md:text-[120px] text-idluxe-black leading-[0.9] mb-16 select-none">
          STRATÉGIE.<br />
          <span className="italic text-idluxe-gold">CRÉATIVITÉ.</span><br />
          IMPACT.
        </motion.h1>
        
        <button className="group relative z-10 font-sans text-[11px] uppercase tracking-[0.3em] border border-idluxe-black px-14 py-6 text-idluxe-black overflow-hidden transition-all duration-500 hover:text-white">
          <span className="relative z-10">Découvrir notre expertise</span>
          <div className="absolute inset-0 bg-idluxe-black translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
        </button>
      </section>

      {/* 2. SECTION VISION */}
      <section className="py-40 px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="font-serif text-4xl md:text-5xl text-idluxe-black leading-tight italic">
              "À Madagascar, les marques ont besoin d'une image forte, cohérente et impactante."
            </h2>
            <p className="font-sans text-gray-600 font-light leading-relaxed text-xl max-w-lg">
              Parce qu'une marque a une responsabilité envers la société et l'environnement, 
              nous construisons des stratégies qui valorisent votre image tout en renforçant 
              votre <span className="text-idluxe-gold italic">contribution positive</span> à la société.
            </p>
          </div>
          <div className="relative">
            <div className="bg-idluxe-black p-16 text-white relative z-10">
              <h3 className="text-idluxe-gold font-serif text-3xl mb-8">Brand Impact</h3>
              <p className="text-base font-light leading-relaxed opacity-90 italic">
                Notre méthodologie combine intelligence marketing, émotion humaine et impact durable. 
                Nous transformons les entreprises en marques d'élite capables de rayonner localement et internationalement.
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-idluxe-gold -z-0"></div>
          </div>
        </div>
      </section>

      {/* 3. SECTION MÉTHODOLOGIE DAPAM */}
      <section className="py-40 bg-zinc-50 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <p className="text-idluxe-gold font-sans text-[10px] tracking-[0.5em] mb-4 uppercase font-bold">Le Processus IDLUXE</p>
              <h2 className="font-serif text-5xl md:text-6xl text-idluxe-black">Méthodologie <span className="italic">DAPAM</span></h2>
            </div>
            <p className="font-sans text-gray-400 text-sm tracking-widest uppercase">Intelligence • Émotion • Impact</p>
          </div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-5">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-12 border-r border-b border-gray-100 flex flex-col h-[450px] justify-between transition-all duration-700 hover:bg-idluxe-black overflow-hidden"
              >
                <span className="absolute -right-4 -top-4 font-serif text-[120px] text-gray-50 opacity-0 transition-all duration-700 group-hover:opacity-10 group-hover:text-idluxe-gold group-hover:translate-y-8">
                  {i+1}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-10 flex items-center justify-center border border-idluxe-gold/30 rounded-full group-hover:border-idluxe-gold transition-colors">
                    <i className={`fas ${step.icon} text-idluxe-gold text-lg`}></i>
                  </div>
                  <h3 className="font-serif text-2xl text-idluxe-black group-hover:text-idluxe-gold mb-6 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm font-light text-gray-500 group-hover:text-gray-300 leading-relaxed transition-colors">
                    {step.desc}
                  </p>
                </div>

                <div className="relative z-10">
                    <div className="h-px w-8 bg-idluxe-gold group-hover:w-full transition-all duration-700"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FOOTER CALL TO ACTION */}
      <section className="py-32 bg-white text-center px-6">
         <h2 className="font-serif text-4xl md:text-5xl text-idluxe-black mb-12 max-w-4xl mx-auto leading-tight">
            Prêt à donner à votre marque la <span className="italic text-idluxe-gold">stature</span> qu'elle mérite ?
         </h2>
         <button className="font-sans text-[11px] uppercase tracking-[0.5em] bg-idluxe-black text-white px-16 py-7 hover:bg-idluxe-gold transition-all duration-500">
            Contactez notre cabinet
         </button>
      </section>
    </main>
  );
};

export default Home;