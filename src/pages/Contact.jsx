import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <main className="pt-32 pb-20 bg-[#FFFFFF] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* EN-TÊTE */}
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="font-serif text-5xl md:text-7xl text-[#111111] mb-8">
            Donnons vie à votre vision
          </h1>
          <div className="w-16 h-[1px] bg-[#D4AF37]"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* INFORMATIONS GAUCHE */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-[#111111]">Informations</h3>
              <div className="space-y-6 text-[#444444] text-sm">
                <a href="mailto:idluxemg@idluxe.mg" className="flex items-center gap-4 hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  idluxemg@idluxe.mg
                </a>
                <a href="tel:+261341406585" className="flex items-center gap-4 hover:text-[#D4AF37] transition-colors">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  +261 34 14 065 85
                </a>
                <div className="flex items-center gap-4">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Antananarivo, Madagascar
                </div>
              </div>
            </div>

            {/* RÉSEAUX SOCIAUX */}
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-[#111111]">Suivez-nous</h3>
              <div className="flex flex-col gap-4">
                <a href="https://web.facebook.com/idluxe.marketing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="text-sm text-[#444444] group-hover:text-[#D4AF37]">Facebook</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors group">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#D4AF37]">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="text-sm text-[#444444] group-hover:text-[#D4AF37]">LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

          {/* FORMULAIRE DROITE */}
          <div className="lg:col-span-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Nom complet</label>
                <input type="text" className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-300" placeholder="Nom & Prénom" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Adresse Email</label>
                <input type="email" className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-300" placeholder="jean@exemple.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Sujet du projet</label>
                <select className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:border-[#D4AF37] outline-none appearance-none cursor-pointer">
                  <option>Branding & Rebranding</option>
                  <option>Stratégie & Conseil</option>
                  <option>Communication Digitale</option>
                  <option>Autre</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#888]">Votre Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-[#E5E5E5] py-3 focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-300" placeholder="Dites-nous en plus sur vos ambitions..."></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button type="submit" className="w-full md:w-auto px-12 py-4 bg-[#111111] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4AF37] transition-all duration-500">
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;