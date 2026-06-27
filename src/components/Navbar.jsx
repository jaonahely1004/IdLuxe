import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logoOFF_BK.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(v => !v);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'À propos', link: '/a-propos' },
    { name: 'Services', link: '/services' },
    { 
      name: 'Engagements', 
      link: '/engagements',
      subItems: [
        { name: 'Brand New Madagascar', link: '/engagements/brand-new-madagascar' },
        { name: 'Plateforme des Pro', link: '/engagements/plateforme-des-pro' },
        { name: 'Communication responsable', link: '/engagements/Communication-responsable' }
      ] 
    },
    { name: 'Réalisations', link: '/realisations' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'h-14 bg-white/60 backdrop-blur-xl shadow-md' : 'h-16 bg-white/30 backdrop-blur-md'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60 pointer-events-none" />
        <div className="relative flex items-center justify-between h-full pl-3 pr-4 sm:pl-4 sm:pr-6 md:pl-6 md:pr-10">
          <Link to="/" onClick={closeMenu} className="z-50">
            <img src={logo} alt="logo" className={`w-auto transition-all duration-500 ${scrolled ? 'h-8 md:h-10' : 'h-10 md:h-14'}`} />
          </Link>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-[11px] uppercase tracking-[0.2em] z-40">
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                {item.subItems ? (
                  <>
                    <Link to={item.link} className="hover:text-black/60 transition">{item.name}</Link>
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white/90 backdrop-blur-lg shadow-xl border border-black/5 p-4 w-64 flex flex-col gap-3 rounded-lg">
                        {item.subItems.map((sub, j) => (
                          <Link key={j} to={sub.link} className="hover:text-[#D4AF37] transition text-[10px]">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={item.link} className="hover:text-black/60 transition">{item.name}</Link>
                )}
              </div>
            ))}
          </div>
          <button onClick={toggleMenu} className="md:hidden z-50 w-10 h-10 flex items-center justify-center">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-[2px] bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`h-[2px] bg-black transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`h-[2px] bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>
      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[999] bg-white/90 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col space-y-6 text-center font-serif text-xl">
          {menuItems.map((item, i) => (
            <div key={i}>
              {item.subItems ? (
                <div className="space-y-4">
                  <Link to={item.link} onClick={closeMenu} className="font-bold">{item.name}</Link>
                  <div className="flex flex-col gap-3 text-sm text-[#888]">
                    {item.subItems.map((sub, j) => (
                      <Link key={j} to={sub.link} onClick={closeMenu}>{sub.name}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={item.link} onClick={closeMenu}>{item.name}</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;