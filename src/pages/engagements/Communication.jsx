import React from 'react';

const Communication = () => {
  return (
    <main className="min-h-screen bg-white pt-40 pb-32 px-6 font-creato antialiased">
      <div className="max-w-6xl mx-auto">
        
        {/* Entête */}
        <header className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12">
            <h1 className="font-normal text-6xl md:text-7xl text-[#111111] tracking-tight">
              Communication <br /><span className="italic text-[#D4AF37]">Responsable</span>
            </h1>
          </div>
        </header>

        {/* Corps principal */}
        <section className="grid md:grid-cols-12 gap-16 items-stretch">
          <div className="md:col-span-7 space-y-10 flex flex-col justify-center">
            <h2 className="text-3xl text-[#111111] leading-tight font-normal tracking-tight">
              Sensibiliser pour mieux impacter
            </h2>
            
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-sans">
              <p>
                La responsabilité se fait aussi à travers l'éducation et la sensibilisation.
              </p>
              <p>
                À travers des campagnes de vidéo, IDLUXE participe à l'éducation de la population sur la protection de l'environnement, le civisme, et la culture marketing afin de construire une génération d'élite.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 space-y-8 flex flex-col justify-center">
            <div className="bg-zinc-50/80 p-8 rounded-2xl border-l-2 border-[#D4AF37] border-y border-r border-zinc-200/80 shadow-sm">
              <h3 className="text-xl mb-3 font-normal text-[#111111]">Education : environnemental, civisme, connaissance générale</h3>
              <a href="http://www.youtube.com/@IDLuxe-b4o" target="_blank" rel="noreferrer" className="text-[#D4AF37] italic text-sm hover:underline font-sans">Extraits video EC</a>
            </div>
            
            <div className="bg-zinc-50/80 p-8 rounded-2xl border-l-2 border-[#D4AF37] border-y border-r border-zinc-200/80 shadow-sm">
              <h3 className="text-xl mb-3 font-normal text-[#111111]">J'apprends le marcom : Culture marketing et culture du luxe</h3>
              <a href="http://www.youtube.com/@IDLuxe-b4o" target="_blank" rel="noreferrer" className="text-[#D4AF37] italic text-sm hover:underline font-sans">Extraits video J'apprends le marcom</a>
            </div>
          </div>
        </section>

        {/* Bouton Voir Plus */}
        <section className="mt-32 text-center">
          <a 
            href="http://www.youtube.com/@IDLuxe-b4o" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 rounded-xl border border-[#D4AF37] bg-[#111111] text-white uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 overflow-hidden shadow-md"
          >
            <span className="relative z-10 group-hover:text-[#111111] transition-colors duration-500">
              Voir Plus
            </span>
            <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </section>

      </div>
    </main>
  );
};

export default Communication;