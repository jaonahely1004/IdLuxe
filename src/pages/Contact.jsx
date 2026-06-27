import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value, // Ajout du champ téléphone
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

  if (status === 'success') {
    return (
      <main className="min-h-screen flex items-center justify-center text-center p-6 bg-[#FFFFFF]">
        <div className="space-y-6">
          <CheckCircle className="w-20 h-20 text-[#D4AF37] mx-auto" />
          <h2 className="text-4xl font-serif text-[#111111]">Message bien reçu !</h2>
          <p className="text-[#888]">Merci pour votre confiance. Nous avons bien enregistré votre demande.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-[#FFFFFF] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl text-[#111111] mb-8">Donnons vie à votre vision</h1>
          <p className="text-[#888] max-w-xl mb-8 leading-relaxed">
            Chaque grand projet commence par une conversation. Remplissez ce formulaire et nous vous recontacterons sous 24 heures.
          </p>
          <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-[#111111]">Informations</h3>
              <div className="space-y-6 text-[#444444] text-sm">
                <a href="mailto:idluxemg@idluxe.mg" className="flex items-center gap-4 hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-4 h-4 text-[#D4AF37]" /> idluxemg@idluxe.mg
                </a>
                <a href="tel:+261341406585" className="flex items-center gap-4 hover:text-[#D4AF37] transition-colors">
                  <Phone className="w-4 h-4 text-[#D4AF37]" /> +261 34 14 065 85
                </a>
                <div className="flex items-center gap-4">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" /> Antananarivo, Madagascar
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#FAFAFA] p-8 md:p-12 rounded-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Nom complet</label>
                <input name="name" type="text" required className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:border-[#D4AF37] outline-none transition-colors" placeholder="Nom & Prénom" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Adresse Email</label>
                <input name="email" type="email" required className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:border-[#D4AF37] outline-none transition-colors" placeholder="jean@exemple.com" />
              </div>
              {/* Nouveau champ téléphone ajouté ici */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Numéro WhatsApp</label>
                <input name="phone" type="tel" className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:border-[#D4AF37] outline-none transition-colors" placeholder="+261 34 00 000 00" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Sujet du projet</label>
                <select name="subject" className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:border-[#D4AF37] outline-none cursor-pointer">
                  <option>Branding & Rebranding</option>
                  <option>Stratégie & Conseil</option>
                  <option>Communication Digitale</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Votre Message</label>
                <textarea name="message" required rows="4" className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:border-[#D4AF37] outline-none transition-colors" placeholder="Décrivez votre ambition..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'} 
                className="md:col-span-2 px-12 py-4 bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2"
              >
                {status === 'sending' ? <><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...</> : 'Envoyer la demande'}
              </button>
              {status === 'error' && (
                <p className="md:col-span-2 text-red-500 text-xs text-center">Une erreur est survenue. Veuillez réessayer.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;