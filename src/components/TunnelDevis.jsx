import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Sparkles, Wallet, X } from 'lucide-react';

const SECTEURS = [
  "Tourisme • Hôtellerie • Restauration",
  "Assurance • Banque • Finance",
  "Mode & Bien-être",
  "Artisanat de prestige",
  "Bijouterie & Joaillerie",
  "Parfumerie de niche",
  "ONG & Institutions"
];

const SERVICES = [
  "Branding & Rebranding",
  "Conseil & Stratégie",
  "Communication Digitale",
  "Événementiel d'Élite",
  "Production Multimédia",
  "Personal Branding"
];

const BUDGETS = [
  "Premium (Entrée de gamme)",
  "Prestige (Sur-mesure complet)",
  "Haute Couture (Accompagnement annuel)"
];

function TunnelDevis({ onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    secteur: '',
    service: '',
    budget: '',
    nom: '',
    entreprise: '',
    email: '',
    message: ''
  });

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données soumises :", formData);
    alert("Votre demande de devis prestige a bien été transmise.");
    onClose(); // Ferme le pop-up après soumission
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      
      {/* CADRE DU POP-UP - COULEUR NOIR DE SAISIE */}
      <div className="w-full max-w-2xl bg-[#1e1f20] border border-[#B8860B]/35 rounded-3xl p-6 md:p-10 shadow-2xl relative my-auto">
        
        {/* BOUTON FERMER LE POP-UP */}
        <button 
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 flex items-center justify-center cursor-pointer transition-all duration-300 z-50"
        >
          <X className="w-4 h-4" />
        </button>

        {/* LUEUR INTERNE DORÉE */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/[0.02] rounded-full blur-[80px] pointer-events-none" />

        {/* BARRE DE PROGRESSION */}
        <div className="w-full h-[2px] bg-zinc-800 rounded-full mb-8 relative">
          <div 
            className="h-full bg-[#D4AF37] transition-all duration-500 ease-out"
            style={{ width: `${(step / 4) * 100}%` }}
          />
          <span className="absolute right-0 -top-6 text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
            Étape {step} sur 4
          </span>
        </div>

        {/* CORPS DU FORMULAIRE */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* ÉTAPE 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#B8860B] font-bold block">01 . Qualification</span>
                <h3 className="text-xl font-serif text-white">Quel est votre secteur d'activité ?</h3>
              </div>
              <div className="grid grid-cols-1 gap-2 pt-2">
                {SECTEURS.map((sec, idx) => (
                  <button
                    key={idx} type="button" onClick={() => handleSelect('secteur', sec)}
                    className={`w-full p-3.5 text-left text-xs rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                      formData.secteur === sec ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold' : 'bg-zinc-900/40 border-zinc-800/60 text-zinc-300 hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <span>{sec}</span>
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${formData.secteur === sec ? 'border-black' : 'border-zinc-700'}`}>
                      {formData.secteur === sec && <Check className="w-2 h-2 text-black stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ÉTAPE 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#B8860B] font-bold block">02 . Besoins</span>
                <h3 className="text-xl font-serif text-white">Quelle expertise activer ?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SERVICES.map((ser, idx) => (
                  <button
                    key={idx} type="button" onClick={() => handleSelect('service', ser)}
                    className={`p-4 text-left text-xs rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-24 ${
                      formData.service === ser ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold' : 'bg-zinc-900/40 border-zinc-800/60 text-zinc-300 hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{ser}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ÉTAPE 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#B8860B] font-bold block">03 . Envergure</span>
                <h3 className="text-xl font-serif text-white">Quelle enveloppe allouez-vous au projet ?</h3>
              </div>
              <div className="grid grid-cols-1 gap-2.5 pt-2">
                {BUDGETS.map((bud, idx) => (
                  <button
                    key={idx} type="button" onClick={() => handleSelect('budget', bud)}
                    className={`w-full p-4 text-left text-xs rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                      formData.budget === bud ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold' : 'bg-zinc-900/40 border-zinc-800/60 text-zinc-300 hover:border-[#D4AF37]/50'
                    }`}
                  >
                    <Wallet className="w-4 h-4" />
                    <span>{bud}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ÉTAPE 4 */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#B8860B] font-bold block">04 . Contact</span>
                <h3 className="text-xl font-serif text-white">Vos coordonnées professionnelles</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <input 
                  type="text" name="nom" required placeholder="Nom complet" value={formData.nom} onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
                <input 
                  type="text" name="entreprise" required placeholder="Entreprise" value={formData.entreprise} onChange={handleChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <input 
                type="email" name="email" required placeholder="Adresse email pro" value={formData.email} onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              />
              <textarea 
                name="message" rows="2" placeholder="Détails additionnels (optionnel)..." value={formData.message} onChange={handleChange}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37] resize-none"
              />
            </div>
          )}

          {/* ACTIONS / NAVIGATION */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60">
            {step > 1 ? (
              <button
                type="button" onClick={prevStep}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-semibold hover:text-white cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Retour
              </button>
            ) : <div />}

            <button
              type={step === 4 ? "submit" : "button"}
              onClick={step < 4 ? nextStep : undefined}
              disabled={(step === 1 && !formData.secteur) || (step === 2 && !formData.service) || (step === 3 && !formData.budget)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#D4AF37] disabled:opacity-30 disabled:cursor-not-allowed text-black text-[10px] uppercase tracking-widest font-bold cursor-pointer hover:bg-white transition-all duration-300"
            >
              {step < 4 ? "Continuer" : "Soumettre"}
              {step < 4 ? <ChevronRight className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default TunnelDevis;