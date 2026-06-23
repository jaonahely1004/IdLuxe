import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logoOFF_BK.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(v => !v);

  // 🔥 Scroll effect (Apple style)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔒 lock scroll mobile menu (fix bug resize)
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  // ✅ MENU FIXE (PLUS DE BUG / PLUS DE SLUG AUTO)
  const menuItems = [
    { name: 'À propos', link: '/a-propos' },
    { name: 'Services', link: '/services' },
    { name: 'Engagements', link: '/engagements' },
    { name: 'Réalisations', link: '/realisations' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? 'h-14 bg-white/60 backdrop-blur-xl shadow-md'
            : 'h-16 bg-white/30 backdrop-blur-md'
        }`}
      >
        {/* gradient overlay subtil */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60 pointer-events-none" />

        <div className="relative flex items-center justify-between h-full pl-3 pr-4 sm:pl-4 sm:pr-6 md:pl-6 md:pr-10">

          {/* LOGO */}
          <Link to="/" onClick={closeMenu} className="z-50">
            <img
              src={logo}
              alt="logo"
              className={`w-auto transition-all duration-500 ${
                scrolled ? 'h-8 md:h-10' : 'h-10 md:h-14'
              }`}
            />
          </Link>

          {/* DESKTOP MENU CENTER */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-[11px] uppercase tracking-[0.2em] z-40">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="hover:text-black/60 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* HAMBURGER PRO */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 w-10 h-10 flex items-center justify-center"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-[2px] bg-black transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`} />
              <span className={`h-[2px] bg-black transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-0' : ''
              }`} />
              <span className={`h-[2px] bg-black transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`} />
            </div>
          </button>

        </div>
      </nav>

      {/* 🔥 MOBILE MENU PRO (FIX + STABLE) */}
      <div
        className={`fixed inset-0 z-[999] bg-white/90 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 text-center font-serif text-2xl">

          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              onClick={closeMenu}
              className={`transition-all duration-500 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              {item.name}
            </Link>
          ))}

        </div>
      </div>
    </>
  );
};

export default Navbar;