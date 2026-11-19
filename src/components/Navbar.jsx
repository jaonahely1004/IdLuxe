import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logoOFF_BK consulte.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileSubmenuOpen(false);
  }, [location.pathname]);

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

  const engagementsItem = menuItems.find((item) => item.subItems);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'h-14 bg-white/75 backdrop-blur-xl shadow-md'
          : 'h-16 bg-white/40 backdrop-blur-md'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60 pointer-events-none" />

      <div className="relative grid grid-cols-[auto_1fr_auto] md:flex items-center md:justify-between h-full px-2 sm:px-6 md:px-10 gap-1.5 sm:gap-2">
        {/* LOGO */}
        <Link to="/" className="z-50 shrink-0 flex items-center">
          <img
            src={logo}
            alt="logo"
            className={`w-auto transition-all duration-500 ${
              scrolled ? 'h-6 sm:h-8 md:h-10' : 'h-7 sm:h-10 md:h-14'
            }`}
          />
        </Link>

        {/* MOBILE BARRE CENTRÉE (visible < md) */}
        <div className="flex md:hidden items-center justify-center gap-2 sm:gap-4 min-w-0 overflow-x-auto no-scrollbar uppercase tracking-[0.06em] sm:tracking-[0.14em] text-[7.5px] sm:text-[9.5px] font-medium text-center">
          {menuItems.map((item, i) =>
            item.subItems ? (
              <button
                key={i}
                type="button"
                onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                aria-expanded={mobileSubmenuOpen}
                className="whitespace-nowrap shrink-0 hover:text-black/60 transition py-1"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={i}
                to={item.link}
                className="whitespace-nowrap shrink-0 hover:text-black/60 transition py-1"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CONTREPOIDS À DROITE SUR MOBILE POUR UN CENTRAGE OPTIQUE */}
        <div className="w-6 sm:w-8 md:hidden shrink-0" aria-hidden="true" />

        {/* DESKTOP MENU */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-[9.5px] uppercase tracking-[0.2em] z-40">
          {menuItems.map((item, i) => (
            <div key={i} className="relative group">
              {item.subItems ? (
                <>
                  <Link to={item.link} className="hover:text-black/60 transition">
                    {item.name}
                  </Link>
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-lg shadow-xl border border-black/5 p-4 w-64 flex flex-col gap-3 rounded-lg">
                      {item.subItems.map((sub, j) => (
                        <Link
                          key={j}
                          to={sub.link}
                          className="hover:text-[#D4AF37] transition text-[10px]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link to={item.link} className="hover:text-black/60 transition">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DROPDOWN MOBILE POUR "ENGAGEMENTS" */}
      {mobileSubmenuOpen && engagementsItem?.subItems && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-lg px-4 py-3 flex flex-col gap-2.5 z-40">
          <Link
            to={engagementsItem.link}
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-black pb-1 border-b border-black/5"
          >
            Tous les engagements
          </Link>
          {engagementsItem.subItems.map((sub, j) => (
            <Link
              key={j}
              to={sub.link}
              className="text-xs text-black/80 hover:text-[#D4AF37] transition py-0.5"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;