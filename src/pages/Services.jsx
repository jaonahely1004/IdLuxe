const Services = () => {
    const categories = [
      {
        title: "Branding & Rebranding",
        items: ["Création logo", "Charte graphique", "Refonte identité", "Branding retail"]
      },
      {
        title: "Conseil & Stratégie",
        items: ["Diagnostic marketing", "Benchmark", "Positionnement", "Plan d'action"]
      },
      {
        title: "Communication Digitale",
        items: ["Création site web", "SEO/SEA", "Community Management", "E-mailing"]
      },
      {
        title: "Personal Branding",
        items: ["E-réputation", "Analyse personnalité", "Conseil en style", "Communication dirigeant"]
      }
    ];
  
    return (
      <div className="pt-32 pb-24 px-10 max-w-7xl mx-auto bg-white">
        {/* HEADER SECTION */}
        <div className="mb-20">
          <p className="font-sans text-idluxe-gold text-xs uppercase tracking-[0.5em] mb-4">Notre Expertise</p>
          <h1 className="font-serif text-5xl md:text-6xl text-idluxe-black">Nos Services</h1>
        </div>
  
        {/* GRID DE CARTES */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group bg-white border border-gray-100 p-10 
              transition-all duration-500 ease-out 
              hover:-translate-y-3 hover:shadow-2xl hover:border-idluxe-gold"
            >
              {/* Numérotation élégante */}
              <span className="text-idluxe-gold/30 font-serif text-4xl block mb-6 transition-colors duration-500 group-hover:text-idluxe-gold">
                0{i + 1}
              </span>
              
              <h2 className="font-serif text-3xl mb-8 text-idluxe-black group-hover:italic transition-all">
                {cat.title}
              </h2>
              
              <ul className="space-y-4">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-gray-500 font-light text-sm flex items-center group-hover:text-idluxe-black transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-idluxe-gold mr-4 rounded-full"></span> 
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Services;