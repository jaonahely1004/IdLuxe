import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, HeartHandshake, Megaphone, Play, Clock } from 'lucide-react';

import partenerlogo_1 from '../assets/logo_Blossome.png';
import partenerlogo_2 from '../assets/logo_Helen keller.png';
import partenerlogo_3 from '../assets/logo_Primature ONN.png';

const GOLD = '#D4AF37';
const INK = '#111111';
const CREAM = '#FAF8F3';

const Realisation = () => {
  const prefersReducedMotion = useReducedMotion();
  const fadeUp = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  // ─── DONNÉES DES SECTEURS ─────────────────────────────────────────────
  const sectors = [
    {
      icon: Sparkles,
      category: 'Grandes marques & Secteur du luxe',
      items: [
        'Multinational / conglomérat',
        'Tourisme, hôtellerie, restauration',
        'Assurance, banque et finance',
        'Automobile',
        'Lunetterie',
        'Mode et bien-être',
        'Artisanat',
        'Bijouterie, joaillerie',
        'Parfumerie',
      ],
    },
    {
      icon: HeartHandshake,
      category: 'Institutions publiques, projets & ONG',
      subheader: 'Communication pour le Développement (C4D) dans le :',
      subitems: ['Social', 'Santé', 'Environnement et protection de la biodiversité'],
      extra: 'Campagne IEC : Information – Éducation – Communication',
    },
    {
      icon: Megaphone,
      category: 'Agence de communication & événementiel',
      items: [
        'Prestation de consultance en marketing, communication, événementiel',
        'Étude de marché',
        'Mise à disposition de mannequins, modèles photo, hôtesses, figurants publicitaires, ambassadeurs de marque',
      ],
    },
  ];

  // ─── DONNÉES DES PARTENAIRES ──────────────────────────────────────────
  const partners = [
    { name: 'Blossome Luxury Nails & Beauty', logo: partenerlogo_1 },
    { name: 'Helen Keller Intl', logo: partenerlogo_2 },
    { name: 'Primature ONN', logo: partenerlogo_3 },
  ];

  // ─── DONNÉES DES PROJETS ─────────────────────────────────────────────
  const projects = [
    {
      category: 'Branding',
      title: 'Branding & Rebranding',
      tag: 'Identité de marque',
      status: 'coming',
    },
    {
      category: 'Conseil',
      title: 'Conseil & Stratégie Marketing',
      tag: 'Stratégie',
      status: 'coming',
    },
    {
      category: 'C4D',
      title: 'Communication pour le développement',
      tag: 'Campagne Notovonantsoa',
      status: 'image',
      media: '/images/notovonantsoa.jpg',
    },
    {
      category: 'Événementiel',
      title: 'Organisation d’événements',
      tag: 'Événementiel',
      status: 'coming',
    },
    {
      category: 'C360',
      title: 'Communication 360',
      tag: 'Office National de Nutrition',
      status: 'video',
      media: 'https://drive.google.com/file/d/1HBReuukteD96zLCAM6_VTIIS1XHf12ST/preview',
    },
    {
      category: 'Digital',
      title: 'Marketing Digital',
      tag: 'Blossome Luxury Nails & Beauty',
      status: 'video',
      media: 'https://drive.google.com/file/d/15zbatxzeGuj9sueB5ae3YqN9AF2ZYEjb/preview',
    },
  ];

  return (
    <main className="pt-28 md:pt-36 pb-24 min-h-screen antialiased transition-colors duration-300 font-creato" style={{ backgroundColor: CREAM }}>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-20 md:mb-24">
        <span className="text-[11px] font-creato uppercase tracking-[0.4em] font-bold mb-4 inline-block" style={{ color: GOLD }}>
          Nos Réalisations
        </span>
        <h1 className="font-creato text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-zinc-900 max-w-4xl mx-auto leading-[1.15] mb-6">
          Rejoignez un univers d'impact
        </h1>
        <div className="w-12 h-[2px] mx-auto mt-6 rounded-full" style={{ backgroundColor: GOLD }}></div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl font-creato text-base md:text-lg leading-relaxed text-zinc-600"
        >
          Rejoignez un univers où <em className="text-zinc-900 not-italic font-medium">stratégie</em>,{' '}
          <em className="text-zinc-900 not-italic font-medium">créativité</em> et{' '}
          <em className="text-zinc-900 not-italic font-medium">impact</em> se rencontrent pour donner vie à votre vision.
        </motion.p>
        <p className="mx-auto mt-4 max-w-2xl font-creato text-sm text-zinc-500 leading-relaxed">
          Nos services s'adressent aux marques, entreprises, institutions et projets ambitieux souhaitant créer une histoire mémorable.
        </p>
      </section>

      {/* ─── SECTEURS ─────────────────────────────────────────────────── */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28"
        aria-labelledby="sectors-title"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.article
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/80 backdrop-blur-md border border-zinc-200/80 hover:border-amber-400/60 shadow-sm hover:shadow-xl transition-all duration-500 p-8 rounded-2xl flex flex-col font-creato"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${GOLD}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: GOLD }} aria-hidden="true" />
                  </div>
                  <span className="font-creato text-xs font-bold tracking-widest text-zinc-300">0{i + 1}</span>
                </div>

                <h3
                  className="font-creato text-xl font-normal leading-snug mb-4 min-h-[3.5rem] text-zinc-900"
                >
                  {sector.category}
                </h3>

                <div className="w-10 h-[2px] mb-6 rounded-full" style={{ backgroundColor: GOLD }} />

                {sector.items && (
                  <ul className="space-y-3 font-creato text-zinc-600 text-sm leading-relaxed">
                    {sector.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: GOLD }}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sector.subheader && (
                  <div className="font-creato text-zinc-600 text-sm space-y-4">
                    <p className="font-semibold text-zinc-900">
                      {sector.subheader}
                    </p>
                    <ul className="space-y-2.5 pl-1">
                      {sector.subitems?.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span
                            className="w-4 h-[1px]"
                            style={{ backgroundColor: GOLD }}
                            aria-hidden="true"
                          />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                    {sector.extra && (
                      <p
                        className="pt-4 mt-4 border-t border-zinc-100 font-medium text-zinc-900"
                      >
                        {sector.extra}
                      </p>
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ─── PARTENAIRES ──────────────────────────────────────────────── */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 border-t border-zinc-200/60 font-creato"
        aria-labelledby="partners-title"
      >
        <div className="text-center mb-12">
          <span
            className="text-[11px] font-creato uppercase tracking-[0.4em] font-bold mb-4 inline-block"
            style={{ color: GOLD }}
          >
            Références
          </span>
          <h2
            id="partners-title"
            className="font-creato text-3xl md:text-4xl font-normal text-zinc-900 tracking-tight"
          >
            Ils nous font confiance
          </h2>
          <div className="w-12 h-[2px] mx-auto mt-4 rounded-full" style={{ backgroundColor: GOLD }} />
        </div>

        {/* logo des partenaires */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              className="group relative flex items-center justify-center p-6 bg-white/60 border border-zinc-200/60 rounded-2xl w-full h-32 shadow-sm transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                loading="lazy"
                className="max-h-16 md:max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <span className="sr-only">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── PORTFOLIO ────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/60 font-creato"
        style={{ backgroundColor: '#FDFBF7' }}
        aria-labelledby="portfolio-title"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <span
              className="text-[11px] font-creato uppercase tracking-[0.4em] font-bold mb-4 inline-block"
              style={{ color: GOLD }}
            >
              Notre univers
            </span>
            <h2
              id="portfolio-title"
              className="font-creato text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 leading-[1.2]"
            >
              Accédez à notre univers,
              <br />
              et bientôt au vôtre.
            </h2>
            <div className="w-12 h-[2px] mx-auto mt-6 rounded-full" style={{ backgroundColor: GOLD }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <motion.article
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col font-creato"
              >
                {/* Media */}
                <div className="relative aspect-video bg-zinc-100 overflow-hidden">
                  {p.status === 'image' && (
                    <img
                      src={p.media}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  {p.status === 'video' && (
                    <>
                      <iframe
                        src={p.media}
                        title={p.title}
                        loading="lazy"
                        className="w-full h-full border-0"
                        allow="autoplay"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full pointer-events-none font-bold">
                        <Play className="w-3 h-3" aria-hidden="true" />
                        Vidéo
                      </div>
                    </>
                  )}
                  {p.status === 'coming' && (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: CREAM }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent animate-pulse" />
                      <Clock className="w-7 h-7 mb-3 relative" style={{ color: GOLD }} aria-hidden="true" />
                      <span className="text-zinc-500 uppercase tracking-[0.25em] text-[11px] font-bold relative">
                        Bientôt disponible
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="uppercase tracking-[0.2em] text-[10px] font-bold px-2.5 py-1 rounded-md"
                        style={{ color: GOLD, backgroundColor: `${GOLD}15` }}
                      >
                        {p.tag}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                        {p.category}
                      </span>
                    </div>
                    <h3
                      className="font-creato text-xl font-normal leading-snug text-zinc-900 mt-2"
                    >
                      {p.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 text-center border-t border-zinc-200/60 font-creato">
        <span className="text-[11px] font-creato uppercase tracking-[0.4em] font-bold mb-4 inline-block" style={{ color: GOLD }}>
          Construisons ensemble
        </span>
        <h2 className="font-creato text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 mb-8">
          Donnons vie à votre vision
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-[#111111] text-white px-8 py-4 rounded-xl uppercase tracking-[0.2em] text-xs font-bold hover:bg-amber-600 transition-all duration-300 shadow-md shadow-zinc-950/10 hover:shadow-xl hover:shadow-zinc-950/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          Contactez-nous
        </Link>
      </section>
    </main>
  );
};

export default Realisation;