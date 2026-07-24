import React from 'react';

const PlateformePro = () => {
  return (
    <main className="min-h-screen bg-white pt-40 pb-32 px-6 font-creato antialiased">
      <div className="max-w-6xl mx-auto">
        
        {/* Entête minimaliste sans ligne */}
        <header className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12">
            <h1 className="font-normal text-6xl md:text-7xl text-[#111111] tracking-tight">
              Plateforme <br /><span className="italic text-[#D4AF37]">des Professionnels</span>
            </h1>
          </div>
        </header>

        {/* Corps principal : Mise en page asymétrique */}
        <section className="grid md:grid-cols-12 gap-16 items-stretch">
          
          {/* Colonne gauche : Le manifeste */}
          <div className="md:col-span-7 space-y-10 flex flex-col justify-center">
            <h2 className="text-3xl text-[#111111] leading-tight font-normal tracking-tight">
              Un cabinet à impact positif avec une dimension responsable et collaborative
            </h2>         
           
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-sans">
              <p>
                IDLuxe Consulting réinvente le luxe à Madagascar en réunissant les meilleurs talents locaux au sein d'une plateforme collaborative exclusive.
              </p>
              <p>
                Alliance d'expertise, d'éthique et d'excellence, notre écosystème offre aux TPE, consultants et prestataires l'opportunité unique de travailler pour de grandes marques : notre engagement pour valoriser le savoir-faire local et soutenir l'économie du pays.
              </p>
            </div>
          </div>

          {/* Colonne droite : Mise en exergue */}
          <div className="md:col-span-5">
            <div className="bg-[#111111] p-12 h-full rounded-3xl flex flex-col justify-center shadow-lg border border-zinc-900">
              <p className="text-white text-xl leading-relaxed italic font-light font-sans">
                "Rejoignez un réseau inédit à Madagascar où votre compétence sert à la fois l'exigence des marques et le développement des communautés."
              </p>
              <div className="mt-12 w-16 h-[2px] bg-[#D4AF37]"></div>
            </div>
          </div>

        </section>

        {/* Section Action */}
        <section className="mt-32 p-16 text-center bg-zinc-50/50 rounded-3xl border border-zinc-200/80 shadow-sm">
          <h3 className="text-3xl md:text-4xl text-[#111111] mb-6 font-normal tracking-tight">Rejoignez notre réseau d'exception</h3>
          <p className="text-zinc-500 mb-10 max-w-lg mx-auto text-base italic font-sans">
            Remplissez le formulaire pour candidater et recevoir nos offres de missions ou de collaboration.
          </p>         
         
          <a 
            href="https://forms.gle/wr5DT8XNCjbBPXqGA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 rounded-xl border border-[#D4AF37] bg-[#111111] text-white uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 overflow-hidden shadow-md"
          >
            <span className="relative z-10 group-hover:text-[#111111] transition-colors duration-500">
              Accéder au formulaire
            </span>
            {/* Fond doré se déployant au survol */}
            <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </section>

      </div>
    </main>
  );
};

export default PlateformePro;