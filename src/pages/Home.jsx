import React, { useState, useEffect } from 'react'; // Import ajouté
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import home from '../assets/home.jpg';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';;
import logo from "../assets/logoOFF_Wht id.png";

const Home = () => {
  const steps = [
    { title: 'DÉCOUVRIR', desc: 'Immersion dans votre univers, votre marché et votre vision', icon: 'fa-compass' },
    { title: 'ANALYSER', desc: 'Analyse des audiences, analyse des concurrents', icon: 'fa-chart-pie' },
    { title: 'POSITIONNER', desc: 'Construction d’un positionnement clair et différenciant', icon: 'fa-bullseye' },
    { title: 'ACTIVER', desc: 'Déploiement et communication omnicanale', icon: 'fa-rocket' },
    { title: 'MESURER', desc: 'Analyse de performance, suivi et optimisation', icon: 'fa-chart-line' }
  ];
  const ecosystemItems = [
    { title: "Analyse d'audience et psychologie", icon: "fa-project-diagram", side: "right" },
    { title: "Veille et benchmarking", icon: "fa-search-plus", side: "right" },
    { title: "Positionnement de marque", icon: "fa-bullseye", side: "right" },
    { title: "KPI et mesures d'impact", icon: "fa-chart-line", side: "right" },
    { title: "Activation marketing", icon: "fa-lightbulb", side: "left" },
    { title: "Communication multicanale", icon: "fa-network-wired", side: "left" },
    { title: "Engagement communautaire", icon: "fa-users", side: "left" },
    { title: "Manifesto et storytelling", icon: "fa-book-open", side: "left" },
  ];
  const slides = [
    {
      image: home,
      title: (
        <>
          Transformez votre
          <br />
          <span className="italic text-idluxe-gold">valeur en impact</span>
        </>
      ),
    },
    {
      image: home1,
      title: (
        <>
          Donnons vie à
          <br />
          <span className="italic text-idluxe-gold">votre vision</span>
        </>
      ),
    },
    {
      image: home2,
      title: (
        <>
          <span className="text-idluxe-gold">
            EXCELLENCE – PERFORMANCE – IMPACT
          </span>
        </>
      ),
    },
  ];
  const images = slides.map((slide) => slide.image);
  const [index, setIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  // Préchargement des images
  useEffect(() => {
    const loadImage = (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    const preloadAllImages = async () => {
      try {
       await Promise.all(images.map(loadImage));
      } catch (error) {
        console.error("Erreur lors du préchargement :", error);
      } finally {
        setImagesLoaded(true);
      }
    };
    preloadAllImages();
  }, []);
  // Slider automatique
  useEffect(() => {
    if (!imagesLoaded) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    },  4000);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <main className="bg-white pt-18">
      <section className="relative h-[70vh] overflow-hidden">
        {/* Images */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.img
              key={index}
              src={slides[index].image}
              alt={`Hero ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 8%" }}
              initial={{
                x: "100%",
                opacity: 1,
                scale: 1.05,
              }}
              animate={{
                x: "0%",
                opacity: 1,
                scale: 1.08,
              }}
              exit={{
                x: "-100%",
                opacity: 1,
                scale: 1.08,
              }}
              transition={{
                duration: 1.2,
                ease: [0.65, 0, 0.35, 1],
              }}
            />
          </AnimatePresence>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
          </div>
          {/* Contenu */}
          <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
            <motion.p
              className="mb-8 font-sans text-[11px] uppercase tracking-[0.9em] text-idluxe-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
          >
              IDLUXE Consulting
            </motion.p>
            <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{
                x: "-80px",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: "80px",
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              <h1 className="mb-12 select-none font-serif text-5xl leading-[1.1] text-white md:text-7xl">
                {slides[index].title}
              </h1>
            </motion.div>
          </AnimatePresence>
          <Link
            to="/services"
            className="group relative inline-flex overflow-hidden border border-white px-12 py-5 font-sans text-[11px] uppercase tracking-[0.3em] text-white transition-all duration-500 hover:border-idluxe-gold hover:text-black"
          >
            <span className="relative z-20">
              Découvrir notre expertise
            </span>

            <span className="absolute inset-0 z-10 translate-y-full bg-idluxe-gold transition-transform duration-500 group-hover:translate-y-0"></span>
          </Link>
        </div>
      </section>        
      {/* 2. SECTION VISION - Grille uniforme */}
      <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">          
          {/* Colonne Texte (6/12) */}
          <div className="md:col-span-6 space-y-8">
            <p className="font-sans text-gray-700 leading-relaxed text-lg text-justify">
              Aujourd'hui à Madagascar, les entreprises ont besoin de plus qu'une simple visibilité : elles ont besoin d'une marque forte et impactante.
            </p>
            <p className="font-sans text-gray-700 leading-relaxed text-lg text-justify">
              <span className="font-bold text-idluxe-black">IDLuxe Consulting</span> est le premier cabinet marketing responsable spécialisé dans le Luxe et le Développement durable à Madagascar qui aide les acteurs du haut de gamme à devenir et rester une référence incontournable.
            </p>
            <p className="font-sans text-gray-700 leading-relaxed text-lg text-justify">
              Parce qu'une marque forte doit aussi avoir une responsabilité envers la société et l'environnement, nous défendons une vision du luxe plus éthique, plus humaine et plus solidaire.
            </p>
            <p className="font-sans text-gray-700 leading-relaxed text-lg text-justify">
              Nous construisons avec vous une stratégie qui valorise votre image tout en renforçant votre contribution positive à la société.
            </p>
          </div>
          {/* Colonne Bloc Impact (6/12) */}
          <div className="md:col-span-6 relative">
            <div className="bg-idluxe-black p-10 md:p-16 text-white relative z-10">
              <h3 className="text-idluxe-gold font-serif text-3xl mb-8 leading-tight">
                Brand impact grâce à notre approche immersive
              </h3>
              <p className="text-base font-light leading-relaxed opacity-90 italic">
                Notre méthodologie combine études anthropologiques, analyses stratégiques approfondies, et activation ciblée.
              </p>
            </div>
            {/* Élément décoratif aligné */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-idluxe-gold -z-0 hidden md:block"></div>
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
      <section className="py-20 md:py-24 bg-[#1A1A1A] px-4 md:px-6 overflow-hidden select-none">
        {/* Titre Principal */}
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide">
            Notre Écosystème <span className="italic text-idluxe-gold font-light">d'Impact</span>
          </h2>
        </div>
        {/* ROUE CIRCULAIRE — RESPONSIVE (scale)   */}
        <div
          className="flex justify-center items-center my-10 [--eco-scale:0.34] sm:[--eco-scale:0.52] md:[--eco-scale:0.72] lg:[--eco-scale:1]"
          style={{
            height: "calc(450px * var(--eco-scale))",
            width: "100%",
          }}
        >
          <div
            className="relative w-[1000px] h-[450px] flex items-center justify-center shrink-0"
            style={{
              transform: "scale(var(--eco-scale))",
              transformOrigin: "center center",
            }}
          >
            {/* Centre : Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute w-48 h-48 flex flex-col justify-center items-center z-20 bg-[#1A1A1A] rounded-full"
            >
              <img src={logo} alt="id LUXE logo" className="w-44 h-auto object-contain" />
            </motion.div>
            {/* Cercle doré de base */}
            <div className="absolute w-[400px] h-[400px] border border-idluxe-gold/50 rounded-full z-0"></div>
            {/* Nœuds circulaires */}
            {ecosystemItems.map((item, i) => {
              const total = ecosystemItems.length;
              const angleStep = (2 * Math.PI) / total;
              const startAngle = -Math.PI / 2 + Math.PI / total;
              const angle = startAngle + i * angleStep;
              const radius = 200;
              const isRight = item.side === "right";
              const xOffset = isRight ? 0 : -25;
              const x = Math.cos(angle) * radius + xOffset;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="absolute z-10 flex items-center justify-center"
                  style={{
                    left: `calc(48.5% + ${x}px)`,
                    top: `calc(45.5% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative flex items-center justify-center w-16 h-16 group cursor-pointer">

                    {/* BULLE ICON */}
                    <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-idluxe-gold group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] z-20">
                      <i className={`fas ${item.icon} text-neutral-400 text-xl transition-colors duration-300 group-hover:text-idluxe-gold`} />
                    </div>

                    {/* LIGNE + TEXTE */}
                    <div
                      className={`absolute flex items-center z-10 h-0 top-1/2 -translate-y-1/2 ${
                        isRight ? "left-full flex-row" : "right-full flex-row-reverse"
                      }`}
                    >
                      <div className="w-8 h-[1px] bg-idluxe-gold/30 flex-shrink-0 transition-all duration-300 group-hover:bg-idluxe-gold" />
                      <div className="w-1.5 h-1.5 rounded-full bg-idluxe-gold flex-shrink-0 transition-all duration-300 group-hover:scale-125" />
                      <div
                        className={`absolute flex items-center h-0 top-1/2 -translate-y-1/2 ${
                          isRight ? "left-12 justify-start" : "right-12 justify-end"
                        }`}
                      >
                        <h4 className={`font-serif text-neutral-200 text-[13px] leading-tight font-medium max-w-[190px] transition-colors duration-300 group-hover:text-idluxe-gold ${
                          isRight ? "text-left" : "text-right"
                        }`}>
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;