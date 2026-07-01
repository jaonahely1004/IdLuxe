import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, HeartHandshake, Megaphone, ArrowRight, Play, Clock } from 'lucide-react';

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
    <main className="pt-24 md:pt-32 min-h-screen" style={{ backgroundColor: CREAM }}>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-24">
        <p className="font-sans uppercase tracking-[0.5em] text-[#D4AF37] text-xs font-semibold mb-6">
          Nos Réalisations
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-3xl font-sans text-lg leading-relaxed text-ink/75"
        >
          Rejoignez un univers où <em className="text-ink">stratégie</em>,{' '}
          <em className="text-ink">créativité</em> et{' '}
          <em className="text-ink">impact</em> se rencontrent pour donner vie à votre vision.
        </motion.p>
        <p className="mx-auto mt-4 max-w-2xl font-sans leading-relaxed text-ink/55 text-gray-500">
          Nos services s'adressent aux marques, entreprises, institutions et projets ambitieux souhaitant créer une histoire mémorable.
        </p>
      </section>

      {/* ─── SECTEURS ─────────────────────────────────────────────────── */}
      <section
        className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28"
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
                className="group relative bg-white border border-gray-200 hover:border-[color:var(--gold)] shadow-sm hover:shadow-2xl transition-all duration-500 p-7 md:p-8 rounded-xl flex flex-col"
                style={{ '--gold': GOLD }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${GOLD}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: GOLD }} aria-hidden="true" />
                  </div>
                  <span className="font-serif text-sm text-gray-300">0{i + 1}</span>
                </div>

                <h3
                  className="font-serif text-lg md:text-xl font-bold leading-snug mb-5 min-h-[3.5rem]"
                  style={{ color: INK }}
                >
                  {sector.category}
                </h3>

                <div className="w-10 h-[2px] mb-5" style={{ backgroundColor: GOLD }} />

                {sector.items && (
                  <ul className="space-y-2.5 font-sans text-gray-600 text-sm leading-relaxed">
                    {sector.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: GOLD }}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sector.subheader && (
                  <div className="font-sans text-gray-600 text-sm space-y-4">
                    <p className="font-semibold" style={{ color: INK }}>
                      {sector.subheader}
                    </p>
                    <ul className="space-y-2 pl-1">
                      {sector.subitems?.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <span
                            className="w-4 h-[1px]"
                            style={{ backgroundColor: GOLD }}
                            aria-hidden="true"
                          />
                          {s}
                        </li>
                      ))}
                    </ul>
                    {sector.extra && (
                      <p
                        className="pt-4 mt-4 border-t border-gray-100 font-medium"
                        style={{ color: INK }}
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
      className="max-w-6xl mx-auto px-6 py-16 md:py-20 border-t border-gray-200/60"
      aria-labelledby="partners-title"
    >
      <div className="text-center mb-12">
        <p
          className="font-sans uppercase tracking-[0.4em] text-xs mb-4"
          style={{ color: GOLD }}
        >
          References
        </p>
        <h2
          id="partners-title"
          className="font-serif text-2xl md:text-3xl tracking-wide"
          style={{ color: INK }}
        >
          Ils nous font confiance
        </h2>
        <div className="w-12 h-[2px] mx-auto mt-3" style={{ backgroundColor: GOLD }} />
      </div>

      {/* logo des partenaires */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            className="group relative flex items-center justify-center transition-all duration-300"
          >
            <img
              src={partner.logo}
              alt={`Logo ${partner.name}`}
              loading="lazy"
              className="max-h-20 md:max-h-20 object-contain transition-transform duration-500"
            />
            <span className="sr-only">{partner.name}</span>
          </motion.div>
        ))}
      </div>
    </section>

      {/* ─── PORTFOLIO ────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 px-6 border-t border-gray-200/60"
        style={{ backgroundColor: '#FDFBF7' }}
        aria-labelledby="portfolio-title"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <p
              className="uppercase tracking-[0.4em] text-xs mb-4"
              style={{ color: GOLD }}
            >
              Notre univers
            </p>
            <h2
              id="portfolio-title"
              className="font-serif text-3xl md:text-5xl leading-tight"
              style={{ color: INK }}
            >
              Accédez à notre univers,
              <br />
              et bientôt au vôtre.
            </h2>
          </div>

          {/* Grid modifiée pour boucler directement sur `projects` */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <motion.article
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Media */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
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
                        className="w-full h-full"
                        allow="autoplay"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full pointer-events-none">
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
                      <Clock className="w-8 h-8 mb-3 relative" style={{ color: GOLD }} aria-hidden="true" />
                      <p className="text-gray-500 uppercase tracking-[0.25em] text-xs relative">
                        Bientôt disponible
                      </p>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="uppercase tracking-[0.2em] text-[10px] font-semibold px-2 py-1 rounded"
                      style={{ color: GOLD, backgroundColor: `${GOLD}12` }}
                    >
                      {p.tag}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">
                      {p.category}
                    </span>
                  </div>
                  <h3
                    className="font-serif text-xl md:text-2xl leading-snug"
                    style={{ color: INK }}
                  >
                    {p.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6 text-center border-t border-gray-100">
        <p className="font-sans uppercase tracking-[0.4em] text-[#D4AF37] text-xs mb-6">
          Construisons ensemble
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-[#111111] mb-8">
          Donnons vie à votre vision
        </h2>
        <Link
          to="/contact"
          className="font-sans inline-block bg-[#111111] text-white px-8 py-4 rounded-md uppercase tracking-[0.2em] text-xs font-medium hover:bg-[#D4AF37] transition-all duration-300 shadow-md"
        >
          Contactez-nous
        </Link>
      </section>
    </main>
  );
};

export default Realisation;