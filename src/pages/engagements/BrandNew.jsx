import React from 'react';
import { motion } from 'framer-motion';
import { useState, useRef } from "react";
import logoBNM from '../../assets/logo-bnm.png';
import ARENO_LOGO from '../../assets/ARENO_LOGO.jpg';
import approcheImg from '../../assets/approche.png';
import odd1 from '../../assets/odd1.png';
import odd2 from '../../assets/odd2.png';
import odd3 from '../../assets/odd3.png';
import odd4 from '../../assets/odd4.png';
import odd5 from '../../assets/odd5.png';
import odd8 from '../../assets/odd8.png';
import ppnImg from '../../assets/ppn.jpg';
import alimentfortifieImg from '../../assets/alimentfortifie.jpg';
import fournitureImg from '../../assets/fourniture.jpg';
import habillementImg from '../../assets/habillement.jpg';
import jouetImg from '../../assets/jouet.jpg';
import FormationImg from '../../assets/formation.jpg';
import activitéImg from '../../assets/activité.jpg';
import donImg from '../../assets/don.jpg';
import action1 from '../../assets/1.jpeg';
import action2 from '../../assets/2.jpeg';
import action3 from '../../assets/3.jpeg';
import action4 from '../../assets/4.jpeg';
import action5 from '../../assets/5.jpeg';
import action6 from '../../assets/6.jpeg';
import action7 from '../../assets/7.jpeg';
import action8 from '../../assets/8.jpeg';
import action9 from '../../assets/9.jpeg';
import action10 from '../../assets/10.jpeg';
import action11 from '../../assets/11.jpeg';
import action12 from '../../assets/12.jpeg';
import action13 from '../../assets/13.jpeg';
import action14 from '../../assets/14.jpeg';
import action15 from '../../assets/15.jpeg';
import action16 from '../../assets/16.jpeg';
import action17 from '../../assets/17.jpeg';
import action18 from '../../assets/18.jpeg';
import action19 from '../../assets/19.jpeg';
import action20 from '../../assets/20.jpeg';
import action21 from '../../assets/21.jpeg';
import action22 from '../../assets/22.jpeg';
import action23 from '../../assets/23.jpeg';
import action24 from '../../assets/24.jpeg';
import action25 from '../../assets/25.jpeg';
import action26 from '../../assets/26.jpeg';

import { CheckCircle2 } from 'lucide-react';

const BrandNew = () => {

  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profil: '',
    phone: '',
    message: '',
    expedition: '',
    paiement: '',
    contributions: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (id) => {
    setFormData(prev => ({
      ...prev,
      contributions: prev.contributions.includes(id)
        ? prev.contributions.filter(c => c !== id)
        : [...prev.contributions, id]
    }));
  };

  const handleDonationSubmit = async () => {
    if (!formData.name || !formData.email) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const oddImages = [
    { id: 1, src: odd1, alt: 'Pas de pauvreté' },
    { id: 2, src: odd2, alt: 'Faim zéro' },
    { id: 3, src: odd3, alt: 'Bonne santé et bien-être' },
    { id: 4, src: odd4, alt: 'Éducation de qualité' },
    { id: 5, src: odd5, alt: 'Égalité entre les sexes' },
    { id: 8, src: odd8, alt: 'Travail décent et croissance économique' },
  ];

  const contributionItems = [
    { id: 'PPN', src: ppnImg, label: 'PPN' },
    { id: 'Aliments fortifiés', src: alimentfortifieImg, label: 'Aliments fortifiés' },
    { id: 'Fournitures scolaires', src: fournitureImg, label: 'Fournitures scolaires' },
    { id: 'Habillements pour enfant', src: habillementImg, label: 'Habillements pour enfant' },
    { id: 'Jouets', src: jouetImg, label: 'Jouets' },
    { id: 'Formation pour adulte', src: FormationImg, label: 'Formation' },
    { id: 'Activité pour enfant', src: activitéImg, label: 'Activité' },
    { id: 'Don en numéraire', src: donImg, label: 'Don' },
  ];

  const actionData = [
    { src: action1, title : "Juin 2026 - Ouverture officielle centre ARENO" }, 
    { src: action2, title : "Ouverture officielle centre ARENO" }, 
    { src: action3, title : "Ouverture officielle centre ARENO" }, 
    { src: action4, title : "Rentrée scolaire 2025 - financement scolarisation et donation de fournitures scolaires" }, 
    { src: action5, title : "Financement scolarisation et donation de fournitures scolaires" }, 
    { src: action6, title : "Financement scolarisation et donation de fournitures scolaires" }, 
    { src: action7, title : "Financement scolarisation et donation de fournitures scolaires" }, 
    { src: action8, title: "Decembre 2025 - Formation en communication non verbale" }, 
    { src: action9, title: "Formation en communication non verbale" }, 
    { src: action10, title: "Formation en communication non verbale" }, 
    { src: action11, title: "Rentrée scolaire 2024 - financement scolarisation et donation de fournitures" }, 
    { src: action12, title: "Financement scolarisation et donation de fournitures" },
    { src: action13, title: "Financement scolarisation et donation de fournitures" },
    { src: action14, title: "Financement scolarisation et donation de fournitures" },
    { src: action15, title: "Financement scolarisation et donation de fournitures" },
    { src: action16, title: "Octobre rose 2024 - campagne de dépistage"},
    { src: action17, title: "Campagne de dépistage"},
    { src: action18, title: "2021 - journée d’assistance aux personnes âgées, Ambatomaro"},
    { src: action19, title: "Journée d’assistance aux personnes âgées, Ambatomaro"},
    { src: action20, title: "Journée d’assistance aux personnes âgées, Ambatomaro"},
    { src: action21, title: "2021 - Donation PPN à domicile à Ankadievo"},
    { src: action22, title: "Donation PPN à domicile à Ankadievo"},
    { src: action23, title: "2020 - Déjeuner collectif des sans abris et sensibilisation à la propreté"},
    { src: action24, title: "Déjeuner collectif des sans abris et sensibilisation à la propreté"},
    { src: action25, title: "2020 - Donation de sandales et goûter aux enfants à Ivandry"},
    { src: action26, title: "Donation de sandales et goûter aux enfants à Ivandry"}
  ];

  const carouselRef = useRef(null);
  
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = 482; 
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-white pt-40 pb-32 px-6 font-creato antialiased">
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <header className="mb-20 text-center">
          <h1 className="font-[CelsiusFlower] text-5xl md:text-6xl text-[#111111] mb-8 font-normal tracking-tight">
            BRAND NEW <span className="italic text-[#4CAF50]">MADAGASCAR</span>
          </h1>
          <div className="h-[2px] w-24 bg-[#4CAF50] mx-auto"></div>
        </header>

        {/* Section Marketing */}
        <section className="mb-24">
          <h2 className="text-[#4CAF50] text-2xl font-[CelsiusFlower] mb-8 tracking-wide">Un marketing du luxe Éthique, responsable et solidaire</h2>
          <div className="space-y-6 text-zinc-700 leading-relaxed text-lg text-justify font-creato">
            <p>Travailler avec IDLuxe Consulting, c’est aussi contribuer à des actions à impact positif dans le pays.</p>
            <p>Une partie de nos bénéfices est reversée à Brand New Madagascar, une association engagée dans l’amélioration des conditions de vie des populations vulnérables.</p>
          </div>
        </section>

        {/* Section Logo et Mission */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-zinc-50/50 p-10 rounded-3xl border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex justify-center p-8 bg-white rounded-2xl shadow-sm border border-zinc-100">
            <img src={logoBNM} alt="Logo Brand New Madagascar" className="max-w-[200px] h-auto object-contain" />
          </div>
          <div className="space-y-6 text-justify">
            <h3 className="text-[#4CAF50] text-xl font-[CelsiusFlower] text-left tracking-wide">Engagé pour soutenir la population vulnérable, aider sans rien attendre en retour, aider par amour</h3>
            <p className="text-zinc-700 leading-relaxed font-creato">
              Brand New Madagascar est une association à but non lucratif créée en 2020 par la fondatrice du cabinet.
            </p>
            <p className="text-zinc-700 leading-relaxed font-creato">
              Elle rassemble des jeunes bénévoles ayant pour mission de changer le mode de vie de la population défavorisée et de leur offrir un nouveau départ afin d'avoir un avenir meilleur et stable.
            </p>
          </div>
        </section>

        {/* Section ODD */}
        <section className="mb-24">
          <p className="text-zinc-700 mb-10 text-lg text-justify font-creato">
            Avec l'appui d'IDLuxe et d'autres partenaires, le but de l'association est de contribuer à six objectifs du développement durable (ODD)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {oddImages.map((odd) => (
              <div key={odd.id} className="group cursor-pointer">
                <img 
                  src={odd.src} 
                  alt={odd.alt} 
                  className="w-full rounded-2xl shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-md border border-zinc-100" 
                />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION TIMELINE */}
        <section className="mt-32 pt-16 border-t border-zinc-100">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Colonne Gauche : Logo et Intro */}
            <div className="md:col-span-4 md:sticky md:top-32 mb-12 md:mb-0">
              <div className="bg-zinc-50/50 p-6 rounded-2xl border border-zinc-100 shadow-sm mb-6 inline-block">
                <img src={ARENO_LOGO} alt="Logo ARENO" className="w-40 object-contain" />
              </div>
              <p className="text-zinc-700 leading-relaxed text-justify font-creato">
                À travers le programme d'Appui pour le RENOuveau de Madagascar (ARENO), Brand new Madagascar agit sur 4 commissions principales :
              </p>
            </div>

            {/* Timeline Verticale */}
            <div className="md:col-span-8 space-y-16">
              <div className="relative pl-10 border-l-2 border-[#4CAF50]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4CAF50] ring-4 ring-white"></div>
                <h4 className="font-[CelsiusFlower] text-2xl text-[#111111] mb-3 tracking-wide">ASAKO : pour les pères de famille en difficulté</h4>
                <p className="text-zinc-600 leading-relaxed text-justify font-creato">Créer une source de revenu stable et améliorer le niveau de vie des foyers grâce aux formations et créations d'activités génératrices de revenus.</p>
              </div>
              <div className="relative pl-10 border-l-2 border-[#4CAF50]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4CAF50] ring-4 ring-white"></div>
                <h4 className="font-[CelsiusFlower] text-2xl text-[#111111] mb-3 tracking-wide">LOVATSARA : pour les enfants</h4>
                <p className="text-zinc-600 leading-relaxed text-justify font-creato">Soutenir les parents dans l'éducation des enfants grâce à la prise en charge des frais de scolarité et des fournitures scolaires. Diverses activités extrascolaires contribuant à la réussite des enfants sont également organisées.</p>
              </div>
              <div className="relative pl-10 border-l-2 border-[#4CAF50]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4CAF50] ring-4 ring-white"></div>
                <h4 className="font-[CelsiusFlower] text-2xl text-[#111111] mb-3 tracking-wide">TOMBOHERY : pour les femmes</h4>
                <p className="text-zinc-600 leading-relaxed text-justify font-creato">Formation et création d'activités génératrices de revenus visant à l'autonomisation des femmes. Ce projet est surtout destiné aux jeunes filles en situation de précarité, aux mères célibataires, aux mères de famille victime de violence conjugale.</p>
              </div>
              <div className="relative pl-10 border-l-2 border-[#4CAF50]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4CAF50] ring-4 ring-white"></div>
                <h4 className="font-[CelsiusFlower] text-2xl text-[#111111] mb-3 tracking-wide">SALAMA : pour les personnes âgées</h4>
                <p className="text-zinc-600 leading-relaxed text-justify font-creato">Assurer une vie sereine grâce à des prises en charge alimentaire et médicale. Ce projet se fait à travers la distribution de produits de première nécessité et des médicaments aux bénéficiaires.</p>
              </div>
            </div>    

          </div>
        </section>

        {/* SECTION APPROCHE */}
        <section className="mt-32 pt-16 border-t border-zinc-100">
          <header className="mb-16">
            <h2 className="text-[#4CAF50] text-3xl font-[CelsiusFlower] mb-4 tracking-wide">Une approche précise et approfondie</h2>
          </header>
          
          <motion.div 
            className="flex justify-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img 
              src={approcheImg} 
              alt="Approche précise et approfondie de Brand New Madagascar" 
              className="max-w-full h-auto cursor-pointer rounded-2xl shadow-sm border border-zinc-100" 
            />
          </motion.div>

          {/* SECTION CARROUSEL */}
          <section className="mt-12 relative">
            <div className="text-center mb-10">
              <h3 className="text-[#4CAF50] text-2xl font-[CelsiusFlower] mb-4 tracking-wide">Nos actions en image</h3>
            </div>
            
            {/* Conteneur des images */}
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto gap-8 px-6 py-4 scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {actionData.map((item, index) => (
                <div key={index} className="min-w-[450px] flex-col flex gap-3 shrink-0">
                  <div className="h-[300px] w-full bg-zinc-100 rounded-3xl overflow-hidden shadow-sm border border-zinc-200/60">
                    <img 
                      src={item.src} 
                      alt={`Action ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {item.title && (
                    <p className="text-center font-bold text-zinc-800 px-4 text-sm font-sans">
                      {item.title}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Bouton Gauche */}
            <button 
              onClick={() => scrollCarousel('left')}
              className="absolute left-4 top-[42%] -translate-y-1/2 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg hover:bg-white transition-all z-10 text-zinc-800 border border-zinc-200/50"
            >
              ◀
            </button>
            
            {/* Bouton Droit */}
            <button 
              onClick={() => scrollCarousel('right')}
              className="absolute right-4 top-[42%] -translate-y-1/2 bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg hover:bg-white transition-all z-10 text-zinc-800 border border-zinc-200/50"
            >
              ▶
            </button>
          </section>
        </section>

        {/* SECTION DON */}
        <section className="mt-32 pt-16 border-t border-zinc-100">
          <h2 className="text-[#4CAF50] text-3xl font-[CelsiusFlower] mb-8 tracking-wide">Soutenez nos actions</h2>

          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-20 bg-zinc-50/50 rounded-3xl border border-zinc-200/80">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 border border-green-100">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-2xl font-[CelsiusFlower] text-[#111111] mb-3 tracking-wide">
                Merci pour votre don !
              </h3>

              <p className="text-zinc-600 max-w-md mb-8 font-creato">
                Votre contribution a bien été enregistrée. L’équipe Brand New Madagascar vous remercie pour votre engagement.
              </p>

              <button
                onClick={() => setStatus('idle')}
                className="bg-[#111111] text-white px-8 py-3 rounded-xl uppercase tracking-[0.15em] text-[10px] font-creato hover:bg-[#4CAF50] transition-all shadow-md"
              >
                Faire un autre don
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-8">

                {/* Colonne Gauche : Sélection avec Fond Vert */}
                <div className="bg-[#8BC34A]/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-[#8BC34A]">
                  <h4 className="font-[CelsiusFlower] text-xl text-white mb-6 border-b border-white/20 pb-3 tracking-wide">Sélectionnez votre contribution</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {contributionItems.map((item) => {
                      const isSelected = formData.contributions.includes(item.id);
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleCheckboxChange(item.id)}
                          className={`relative p-2 rounded-2xl transition-all duration-300 border-2 ${
                            isSelected ? 'border-white bg-white/25 shadow-sm' : 'border-transparent hover:border-white/40'
                          }`}
                        >
                          <div className="h-24 w-full rounded-xl overflow-hidden bg-white">
                            <img 
                              src={item.src} 
                              alt={item.label} 
                              className="w-full h-full object-cover" 
                            />  
                          </div>
                          <p className="text-white text-xs font-bold mt-2 text-center tracking-wide">{item.label}</p>
                          {isSelected && (
                            <div className="absolute top-3 right-3 bg-white text-[#8BC34A] rounded-full p-1 shadow-sm">
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Colonne Droite : Formulaire épuré */}
                <div className="bg-zinc-50/50 p-8 rounded-3xl border border-zinc-200/80 shadow-sm">
                  <h4 className="font-[CelsiusFlower] text-xl text-[#111111] mb-6 tracking-wide">Vos informations</h4>
                  <div className="space-y-4">
                    <input 
                      name="name" 
                      onChange={handleChange} 
                      value={formData.name} 
                      type="text" 
                      placeholder="Nom et prénom" 
                      className="w-full p-4 rounded-xl border border-zinc-200/80 bg-white text-sm outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all font-creato" 
                    /> 
                    <input 
                      name="email" 
                      onChange={handleChange} 
                      value={formData.email} 
                      type="email" 
                      placeholder="Adresse e-mail" 
                      className="w-full p-4 rounded-xl border border-zinc-200/80 bg-white text-sm outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all font-creato" 
                    /> 
                    <select 
                      name="profil" 
                      onChange={handleChange} 
                      value={formData.profil} 
                      className="w-full p-4 rounded-xl border border-zinc-200/80 bg-white text-sm outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all font-creato cursor-pointer"
                    >
                      <option value="">Profil : Particulier / Professionnel</option>
                      <option value="Particulier">Particulier</option>
                      <option value="Professionnel">Professionnel</option>
                    </select> 
                    <input 
                      name="phone" 
                      onChange={handleChange} 
                      value={formData.phone} 
                      type="tel" 
                      placeholder="Téléphone" 
                      className="w-full p-4 rounded-xl border border-zinc-200/80 bg-white text-sm outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all font-creato" 
                    />  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <select 
                        name="expedition" 
                        onChange={handleChange} 
                        value={formData.expedition} 
                        className="w-full p-4 rounded-xl border border-zinc-200/80 bg-white text-sm outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all font-creato cursor-pointer"
                      >
                        <option value="">Mode d'expédition</option>
                        <option value="Siege">Dépôt au siège Ivato</option>
                        <option value="Recuperation">À récupérer par l'association</option>
                      </select>    
                      <select 
                        name="paiement" 
                        onChange={handleChange} 
                        value={formData.paiement} 
                        className="w-full p-4 rounded-xl border border-zinc-200/80 bg-white text-sm outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all font-creato cursor-pointer"
                      >
                        <option value="">Mode de paiement</option>
                        <option value="Siege">Dépôt au siège Ivato</option>
                        <option value="Orange">Orange Money</option>
                        <option value="RDV">RDV avec le Président</option>
                      </select>
                    </div>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange}
                      className="w-full p-4 border border-zinc-200/80 rounded-xl h-32 bg-white text-sm outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] transition-all font-creato resize-none"
                      placeholder="Message" 
                    />
                  </div>
                </div>

              </div>

              {/* Bouton */}
              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleDonationSubmit}
                  disabled={status === 'sending'}
                  className="bg-[#111111] text-white px-12 py-5 rounded-xl uppercase tracking-[0.2em] text-xs font-creato hover:bg-[#4CAF50] transition-all duration-300 disabled:opacity-50 shadow-md active:scale-[0.98]"
                >
                  {status === 'sending' ? 'Envoi...' : 'FAIRE UN DON'}
                </button>
              </div>

              {/* ERREUR */}
              {status === 'error' && (
                <p className="text-red-500 text-center mt-6 text-sm font-creato">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default BrandNew;