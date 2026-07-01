import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
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


const BrandNew = () => {
  //pour BD et mail
  const handleDonationSubmit = async () => {
    // Vérification basique
    if (!formData.name || !formData.email) {
      alert("Veuillez remplir votre nom et votre email.");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Merci ! Votre don a été enregistré et un email vous a été envoyé.");
      } else {
        alert("Erreur : " + result.error);
      }
    } catch (error) {
      alert("Impossible de contacter le serveur.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const oddImages = [
    { id: 1, src: odd1, alt: 'Pas de pauvreté' },
    { id: 2, src: odd2, alt: 'Faim zéro' },
    { id: 3, src: odd3, alt: 'Bonne santé et bien-être' },
    { id: 4, src: odd4, alt: 'Éducation de qualité' },
    { id: 5, src: odd5, alt: 'Égalité entre les sexes' },
    { id: 8, src: odd8, alt: 'Travail décent et croissance économique' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profil: '',      // Correspond à name="profil"
    phone: '',
    message: '',
    expedition: '',  // Correspond à name="expedition"
    paiement: '',    // Correspond à name="paiement"
    contributions: []
  });
  
  const handleCheckboxChange = (id) => {
    setFormData(prev => ({
      ...prev,
      contributions: prev.contributions.includes(id)
        ? prev.contributions.filter(c => c !== id)
        : [...prev.contributions, id]
    }));
  };

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

  return (
    <main className="min-h-screen bg-white pt-40 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <header className="mb-20 text-center">
          <span className="font-sans text-[#4CAF50] text-xs uppercase tracking-[0.5em] mb-4 block font-bold">
            NOS ENGAGEMENTS
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#111111] mb-8">
            BRAND NEW <span className="italic text-[#4CAF50]">MADAGASCAR</span>
          </h1>
          <div className="h-[2px] w-24 bg-[#4CAF50] mx-auto"></div>
        </header>
        {/* Section Marketing */}
        <section className="mb-24">
          <h2 className="text-[#4CAF50] text-2xl font-bold mb-8">Un marketing du luxe Ethique, responsable et solidaire</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
            <p>Travailler avec IDLuxe Consulting, c’est aussi contribuer à des actions à impact positif dans le pays.</p>
            <p>Une partie de nos bénéfices est reversée à Brand New Madagascar, une association engagée dans l’amélioration des conditions de vie des populations vulnérables.</p>
          </div>
        </section>
        {/* Section Logo et Mission */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-white p-10 rounded-3xl">
          <div className="flex justify-center p-8">
            <img src={logoBNM} alt="Logo Brand New Madagascar" className="max-w-[200px] h-auto" />
          </div>
          <div className="space-y-6 text-justify">
            <h3 className="text-[#4CAF50] text-xl font-bold text-left">Engagé pour soutenir la population vulnérable, aider sans rien attendre en retour, aider par amour</h3>
            <p className="text-gray-700 leading-relaxed">
              Brand New Madagascar est une association à but non lucratif créée en 2020 par la fondatrice du cabinet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Elle rassemble des jeunes bénévoles ayant pour mission de changer le mode de vie de la population défavorisée et de leur offrir un nouveau départ afin d'avoir un avenir meilleur et stable.
            </p>
          </div>
        </section>
        {/* Section ODD */}
        <section>
          <p className="text-gray-700 mb-10 text-lg text-justify">
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
        {/* SECTION TIMELINE */}
        <section className="mt-32 pt-16">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Colonne Gauche : Logo et Intro */}
            <div className="md:col-span-4 md:sticky md:top-32 mb-12 md:mb-0">
              <img src={ARENO_LOGO} alt="Logo ARENO" className="w-48 mb-8" />
              <p className="text-gray-700 leading-relaxed text-justify">
                A travers le programme d'Appui pour le RENOuveau de Madagascar (ARENO), Brand new Madagascar agit sur 4 commissions principales :
              </p>
            </div>
            {/* Timeline Verticale */}
            <div className="md:col-span-8 space-y-16">
              <div className="relative pl-10 border-l-2 border-[#4CAF50]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4CAF50]"></div>
                <h4 className="font-bold text-2xl text-[#111111] mb-3">ASAKO : pour les pères de famille en difficulté</h4>
                <p className="text-gray-600 leading-relaxed text-justify">Créer une source de revenu stable et améliorer le niveau de vie des foyers grâce aux formations et créations d'activités génératrices de revenus.</p>
              </div>
              <div className="relative pl-10 border-l-2 border-[#4CAF50]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4CAF50]"></div>
                <h4 className="font-bold text-2xl text-[#111111] mb-3">LOVATSARA : pour les enfants</h4>
                <p className="text-gray-600 leading-relaxed text-justify">Soutenir les parents dans l'éducation des enfants grâce à la prise en charge des frais de scolarité et des fournitures scolaires. Diverses activités extrascolaires contribuant à la réussite des enfants sont également organisées.</p>
              </div>
              <div className="relative pl-10 border-l-2 border-[#4CAF50]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4CAF50]"></div>
                <h4 className="font-bold text-2xl text-[#111111] mb-3">TOMBOHERY : pour les femmes</h4>
                <p className="text-gray-600 leading-relaxed text-justify">Formation et création d'activités génératrices de revenus visant à l'autonomisation des femmes. Ce projet est surtout destiné aux jeunes filles en situation de précarité, aux mères célibataires, aux mères de famille victime de violence conjugale.</p>
              </div>
              <div className="relative pl-10 border-l-2 border-[#4CAF50]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4CAF50]"></div>
                <h4 className="font-bold text-2xl text-[#111111] mb-3">SALAMA : pour les personnes âgées</h4>
                <p className="text-gray-600 leading-relaxed text-justify">Assurer une vie sereine grâce à des prises en charge alimentaire et médicale. Ce projet se fait à travers la distribution de produits de première nécessité et des médicaments aux bénéficiaires.</p>
              </div>
            </div>    
          </div>
        </section>
        {/* SECTION APPROCHE */}
        <section className="mt-10 pt-16">
          <header className="mb-16">
            <h2 className="text-[#4CAF50] text-3xl font-bold mb-4">Une approche précise et approfondie</h2>
          </header>
          {/* L'image est maintenant contrôlée par un script d'animation */}
          <motion.div 
            className="flex justify-center mb-20"
            initial={{ opacity: 0, y: 50 }} // État initial : invisible et décalé vers le bas
            whileInView={{ opacity: 1, y: 0 }} // État final : visible et à sa place
            transition={{ duration: 0.8, ease: "easeOut" }} // Le "script" du mouvement
            viewport={{ once: true }} // L'animation ne se joue qu'une seule fois
          >
            <img 
              src={approcheImg} 
              alt="Approche précise et approfondie de Brand New Madagascar" 
              className="max-w-full h-auto cursor-pointer" 
            />
          </motion.div>
          <div className="text-center">
            <h3 className="text-[#4CAF50] text-2xl font-bold mb-4">Nos actions en image</h3>
            <p className="text-gray-600 italic">
              (Photos des activités de l'association)
            </p>
          </div>
        </section>
        <section className="mt-32 pt-16 border-t border-gray-100">
          <h2 className="text-[#4CAF50] text-3xl font-bold mb-8">Soutenez nos actions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Colonne Gauche : Sélection avec Fond Vert */}
            <div className="bg-[#8BC34A]/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <h4 className="font-bold text-xl text-white mb-6 border-b border-white/30 pb-2">Sélectionnez votre contribution</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {contributionItems.map((item) => {
                  const isSelected = formData.contributions.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleCheckboxChange(item.id)}
                      className={`relative p-2 rounded-xl transition-all duration-300 border-4 ${
                        isSelected ? 'border-white bg-white/20' : 'border-transparent hover:border-white/50'
                      }`}
                    >
                      <img 
                      src={item.src} 
                        alt={item.label} 
                        className="w-full h-24 object-cover rounded-lg" 
                      />  
                        <p className="text-white text-xs font-bold mt-2 text-center">{item.label}</p>
                        {/* Indicateur visuel de sélection */}
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-white text-[#8BC34A] rounded-full p-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                          </div>
                        )}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Colonne Droite : Formulaire épuré incluant les modes de paiement/expédition */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-xl text-[#111111] mb-6">Vos informations</h4>
              <div className="space-y-4">
                {/* Nom */}
                <input name="name" onChange={handleChange} value={formData.name} type="text" placeholder="Nom et prénom" className="w-full p-4 rounded-xl border border-gray-200" /> 
                {/* Email */}
                <input name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Adresse e-mail" className="w-full p-4 rounded-xl border border-gray-200" /> 
                {/* Profil */}
                <select name="profil" onChange={handleChange} value={formData.profil} className="w-full p-4 rounded-xl border border-gray-200 bg-white">
                  <option value="">Profil : Particulier / Professionnel</option>
                  <option value="Particulier">Particulier</option>
                  <option value="Professionnel">Professionnel</option>
                </select> 
                {/* Téléphone */}
                <input name="phone" onChange={handleChange} value={formData.phone} type="tel" placeholder="Téléphone" className="w-full p-4 rounded-xl border border-gray-200" />  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Expédition */}
                  <select name="expedition" onChange={handleChange} value={formData.expedition} className="w-full p-4 rounded-xl border border-gray-200 bg-white text-sm">
                    <option value="">Mode d'expédition</option>
                    <option value="Siege">Dépôt au siège Ivato</option>
                    <option value="Recuperation">À récupérer par l'association</option>
                  </select>    
                  {/* Paiement */}
                  <select name="paiement" onChange={handleChange} value={formData.paiement} className="w-full p-4 rounded-xl border border-gray-200 bg-white text-sm">
                    <option value="">Mode de paiement</option>
                    <option value="Siege">Dépôt au siège Ivato</option>
                    <option value="Orange">Orange Money</option>
                    <option value="RDV">RDV avec le Président</option>
                  </select>
                </div>
                {/* Message */}
                <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Votre message" className="w-full p-4 rounded-xl border border-gray-200 h-32"></textarea>
              </div>
            </div>
          </div>
          {/* Bouton d'envoi */}
          <div className="mt-12 flex justify-center">
            <button 
              onClick={handleDonationSubmit}
              className="bg-[#111111] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#4CAF50] transition-all"
            >
              FAIRE UN DON
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BrandNew;