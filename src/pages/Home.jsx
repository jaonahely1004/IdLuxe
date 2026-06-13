import React from 'react';
import { motion } from 'framer-motion';
import home from '../assets/home.jpg';

const Home = () => {
  const steps = [
    { title: 'DÉCOUVRIR', desc: 'Immersion dans votre univers, votre marché et vos ambitions.', icon: 'fa-compass' },
    { title: 'ANALYSER', desc: 'Analyse stratégique des audiences, tendances et concurrents.', icon: 'fa-chart-pie' },
    { title: 'POSITIONNER', desc: 'Construction d’un positionnement clair, différenciant et mémorable.', icon: 'fa-bullseye' },
    { title: 'ACTIVER', desc: 'Déploiement créatif et communication omnicanale stratégique.', icon: 'fa-rocket' },
    { title: 'MESURER', desc: 'Analyse des performances et optimisation continue des KPIs.', icon: 'fa-chart-line' }
  ];

  return (
    <main className="bg-white pt-18">
       {/* 1. HERO SECTION */}
       <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={home} alt="Parfum" className="w-full h-full object-cover scale-107 -translate-x-11.5" style={{ objectPosition: "center 8%" }} />
          <div className="absolute inset-0 bg-black/14 backdrop-blur-[1.5px]"></div>
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 font-sans text-idluxe-gold text-[10px] uppercase tracking-[0.8em] mb-12">
          IDLUXE Marketing
        </motion.p>
        <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10 font-serif text-5xl md:text-8xl text-white leading-[1.1] mb-16 select-none">
          LET'S GLOW OUT<br />
          <span className="italic text-idluxe-gold">YOUR BUSINESS</span>
        </motion.h1>
        <button className="group relative z-10 font-sans text-[11px] uppercase tracking-[0.3em] border border-white px-14 py-6 text-white overflow-hidden transition-all duration-500 hover:border-idluxe-gold hover:text-black">
          <span className="relative z-10">Découvrir notre expertise</span>
          <div className="absolute inset-0 bg-idluxe-gold translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
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
              Parce qu'une marque a une responsabilité envers la société, nous construisons des stratégies qui valorisent votre image tout en renforçant votre <span className="text-idluxe-gold italic">contribution positive</span>.
            </p>
          </div>
          <div className="relative">
            <div className="bg-idluxe-black p-16 text-white relative z-10">
              <h3 className="text-idluxe-gold font-serif text-3xl mb-8">Brand Impact</h3>
              <p className="text-base font-light leading-relaxed opacity-90 italic">
                Notre méthodologie combine intelligence marketing, émotion humaine et impact durable. Nous transformons les entreprises en marques d'élite.
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-idluxe-gold -z-0"></div>
          </div>
        </div>
      </section>

      {/* 3. SECTION DAPAM (Cards) */}
      <section className="py-2 bg-zinc-50 px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-idluxe-black mb-24 text-center">
            Méthodologie <span className="italic">DAPAM</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} 
                className="group bg-[#111111] p-8 rounded-2xl border border-[#C6A66C] cursor-pointer hover:-translate-y-2 transition-all duration-500 flex flex-col shadow-[0_5px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(198,166,108,0.15)]"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-[#C6A66C]/30 rounded-full group-hover:border-[#C6A66C] transition-colors">
                  <i className={`fas ${step.icon} text-[#C6A66C] text-lg`}></i>
                </div>
                <h3 className="text-xl font-light text-white mb-3">{step.title}</h3>
                <div className="w-10 h-[2px] bg-[#C6A66C] mb-4" />
                <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION MÉTHODOLOGIE CIRCULAIRE */}
      <section className="py-20 bg-white px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="font-serif text-5xl text-idluxe-black">Notre Écosystème <span className="italic text-idluxe-gold">d'Impact</span></h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="absolute w-40 h-40 rounded-full bg-white border border-idluxe-gold/30 shadow-2xl flex flex-col justify-center items-center z-20">
              <h3 className="font-serif text-2xl text-idluxe-gold tracking-widest">IDLUXE</h3>
              <span className="uppercase tracking-[0.3em] text-gray-400 text-[8px] mt-2">Marketing</span>
            </motion.div>
            {[
              { title: "Analyse", icon: "fa-users" },
              { title: "Psychologie consommateur", icon: "fa-brain" },
              { title: "Veille", icon: "fa-shield-alt" },
              { title: "Positionnement", icon: "fa-bullseye" },
              { title: "Storytelling", icon: "fa-pen-fancy" },
              { title: "KPIs", icon: "fa-chart-line" },
              { title: "Communication", icon: "fa-comments" },
              { title: "Activation", icon: "fa-bullhorn" },
              { title: "Engagement", icon: "fa-heart" }
            ].map((item, i) => {
              const angle = (i * 360) / 9;
              const radius = 230;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="absolute z-10" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
                  <div className="flex flex-col items-center -translate-x-1/2 -translate-y-1/2 w-32">
                    <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:border-idluxe-gold transition-all duration-300">
                      <i className={`fas ${item.icon} text-gray-400 text-lg hover:text-idluxe-gold`} />
                    </div>
                    <h4 className="text-center mt-3 font-serif text-idluxe-black text-[10px] uppercase tracking-[0.2em]">{item.title}</h4>
                  </div>
                </motion.div>
              );
            })}
            <div className="absolute w-[460px] h-[460px] border border-idluxe-gold/10 rounded-full z-0"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;