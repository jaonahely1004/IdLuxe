import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Loader2, 
  ArrowUpRight, 
  Send,
  MessageSquare,
  Building2,
  AlertCircle
} from 'lucide-react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const GOLD = '#D4AF37';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value,
      position: e.target.position.value,
      sector: e.target.sector.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      setStatus('error');
    }
  };
  return (
    <main className="pt-28 md:pt-36 pb-24 min-h-screen bg-[#FAF8F3] antialiased transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">       
        {/* ─── EN-TÊTE DE SECTION (HERO) ─── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-[11px] font-sans uppercase tracking-[0.4em] font-bold mb-4 inline-block" style={{ color: GOLD }}>
            Contact & Collaboration
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-zinc-900 max-w-4xl leading-[1.15] mb-6">
            Donnons vie à votre vision
          </h1>
          <div className="w-12 h-[2px] mt-8 rounded-full" style={{ backgroundColor: GOLD }}></div>
        </div>
        {/* ─── CONTENU PRINCIPAL ─── */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">         
          {/* PANNEAU LATÉRAL : INFORMATIONS */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/60 backdrop-blur-md border border-zinc-200/60 p-8 rounded-2xl shadow-sm space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-900 mb-6">
                  Coordonnées
                </h3>
                <div className="space-y-4 font-sans text-sm">
                  <a 
                    href="mailto:idluxemg@idluxe.mg" 
                    className="flex items-center gap-4 text-zinc-600 hover:text-zinc-950 transition-colors group py-1.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                      <Mail className="w-4 h-4 transition-colors" style={{ color: GOLD }} />
                    </div>
                    <span className="font-medium">idluxemg@idluxe.mg</span>
                  </a>
                  <a 
                    href="tel:+261372694910" 
                    className="flex items-center gap-4 text-zinc-600 hover:text-zinc-950 transition-colors group py-1.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center group-hover:bg-amber-50 transition-colors">
                      <Phone className="w-4 h-4 transition-colors" style={{ color: GOLD }} />
                    </div>
                    <span className="font-medium">+261 37 26 949 10</span>
                  </a>
                  <div className="flex items-center gap-4 text-zinc-600 py-1.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
                      <MapPin className="w-4 h-4" style={{ color: GOLD }} />
                    </div>
                    <span className="font-medium">Antananarivo, Madagascar</span>
                  </div>
                </div>
              </div>
              {/* RÉSEAUX SOCIAUX HARMONISÉS */}
              <div className="pt-6 border-t border-zinc-200/80">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-900 mb-4">
                  Suivez notre écosystème
                </h3>
                <div className="space-y-3 font-sans text-sm">
                  <a
                    href="https://web.facebook.com/idluxe.marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-zinc-600 hover:text-zinc-950 transition-colors group py-1 w-max"
                  >
                    <FaFacebook className="w-4 h-4 text-zinc-400 group-hover:text-amber-600 transition-colors" />
                    <span className="border-b border-transparent group-hover:border-zinc-950/20 pb-0.5">
                      idluxe.marketing
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-0.5 -translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/idluxe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-zinc-600 hover:text-zinc-950 transition-colors group py-1 w-max"
                  >
                    <FaLinkedin className="w-4 h-4 text-zinc-400 group-hover:text-amber-600 transition-colors" />
                    <span className="border-b border-transparent group-hover:border-zinc-950/20 pb-0.5">
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-0.5 -translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* BLOC FORMULAIRE / ÉCRAN DE SUCCÈS CONTEXTUEL */}
          <div className="lg:col-span-8 bg-white border border-zinc-200/80 p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm transition-all duration-500">
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center text-center space-y-6 max-w-md mx-auto animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shadow-inner">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-zinc-900">Message bien reçu !</h2>
                <p className="text-zinc-500 text-sm leading-relaxed font-sans">
                  Merci pour votre confiance. Nous avons bien enregistré votre demande et notre équipe étudie déjà votre univers de marque.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 text-xs font-sans font-bold uppercase tracking-widest text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-sans">
                
                {/* Section 1 : Identité */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-zinc-100">
                    <MessageSquare className="w-4 h-4 text-zinc-400" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Votre Profil</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">Nom complet *</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all focus:shadow-sm"
                        placeholder="Nom & Prénom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">Adresse Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all focus:shadow-sm"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>
                </div>
                {/* Section 2 : Entreprise */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">Société</label>
                      <input
                        name="company"
                        type="text"
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all focus:shadow-sm"
                        placeholder="Ex: ID Luxe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">Fonction</label>
                      <input
                        name="position"
                        type="text"
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all focus:shadow-sm"
                        placeholder="Ex: Directeur Marketing"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">Secteur d'activité</label>
                      <div className="relative">
                        <select
                          name="sector"
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all cursor-pointer appearance-none"
                        >
                          <option value="">Sélectionnez un secteur</option>
                          <option>Tourisme, hôtellerie, Restauration (THR)</option>
                          <option>Assurance, banque, finance</option>
                          <option>Concessionnaire automobile</option>
                          <option>Mode et bien-être</option>
                          <option>Immobilier</option>
                          <option>Autre</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section 3 : Projet */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">Numéro WhatsApp</label>
                      <input
                        name="phone"
                        type="tel"
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all focus:shadow-sm"
                        placeholder="+261 34 00 000 00"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">Sujet du projet</label>
                      <div className="relative">
                        <select
                          name="subject"
                          className="w-full bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all cursor-pointer appearance-none"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option>Branding & Rebranding</option>
                          <option>Stratégie & Conseil</option>
                          <option>Communication Digitale</option>
                          <option>Autres</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">Votre Message *</label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        className="w-full bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:bg-white rounded-xl px-4 py-3 text-sm outline-none transition-all focus:shadow-sm resize-none"
                        placeholder="Décrivez l'ambition de votre marque et vos objectifs de croissance..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                {/* BOUTON D'ACTION PRINCIPAL */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#111111] sm:w-auto px-10 py-4 text-white text-xs uppercase tracking-[0.2em] font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shadow-md shadow-zinc-950/10 hover:shadow-xl hover:shadow-zinc-950/20 hover:scale-[1.02] hover:-translate-y-[1px] active:scale-[0.97]"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Transmission...</span>
                      </>
                    ) : (
                      <>
                        <span>Envoyer la demande</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
                {/* MESSAGE D'ERREUR FLUIDE */}
                {status === 'error' && (
                  <div className="flex items-center gap-2.5 text-rose-600 bg-rose-50 border border-rose-100 p-4 rounded-xl animate-fadeIn">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <p className="text-xs font-medium">Une erreur est survenue lors de l'envoi. Veuillez vérifier vos informations ou réessayer ultérieurement.</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;