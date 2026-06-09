import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Récupération de la prop onOpenDevis transmise par App.jsx
function Navbar({ onOpenDevis }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#" },
    { name: "Présentation", href: "#presentation" },
    { name: "Méthodologie", href: "#methodology" },
    { name: "Services", href: "#services" },
    { name: "Engagements", href: "#engagements" },
    { name: "Réalisations", href: "#realisations" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* GLASSMORPHISM PROFESSIONAL BACKGROUND */}
      <div className="backdrop-blur-md bg-white/70 border-b border-zinc-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* LOGO */}
          <div className="flex flex-col leading-none select-none">
            <div className="flex items-end gap-[2px]">
              <span className="text-zinc-900 font-serif tracking-[0.2em] text-xl md:text-2xl font-light">
                ID
              </span>
              <span className="text-[#B8860B] font-serif tracking-[0.2em] text-xl md:text-2xl font-medium">
                LUXE
              </span>
            </div>
            <span className="text-[7px] tracking-[0.6em] text-zinc-400 mt-1 uppercase font-bold">
              MARKETING
            </span>
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] tracking-[0.2em] uppercase font-medium">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative text-zinc-500 hover:text-black transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B8860B] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA RIGHT (DESKTOP) */}
          <div className="hidden lg:block">
            <button 
              onClick={onOpenDevis} // Déclenche l'ouverture du tunnel au clic !
              className="px-5 py-2.5 rounded-full border border-zinc-900 text-zinc-900 text-[10px] uppercase tracking-widest font-semibold hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black cursor-pointer transition-all duration-300 shadow-sm hover:shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
            >
              Demander un devis
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-zinc-900 cursor-pointer">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden h-screen px-6 pt-6 space-y-5 bg-white/95 backdrop-blur-lg border-t border-zinc-100">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block text-zinc-700 hover:text-[#B8860B] text-sm uppercase tracking-wider font-light transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {/* CTA (MOBILE) */}
          <button 
            onClick={() => {
              setOpen(false);      // Ferme le menu de navigation mobile
              onOpenDevis();       // Ouvre le tunnel de devis
            }}
            className="w-full mt-6 py-3 rounded-full bg-zinc-900 text-white text-xs uppercase tracking-widest font-semibold cursor-pointer hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
          >
            Demander un devis
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;