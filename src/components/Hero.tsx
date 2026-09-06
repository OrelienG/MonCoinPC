import { Link } from 'react-router-dom';
import { HeroBackground } from './HeroBackground';
import heroImage from '../assets/home.jpg';

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff_0%,#f4f6f7_58%,#edf1f2_100%)] px-4 py-12 md:py-16">
      <HeroBackground />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Diagnostic clair · Tarif annoncé
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-dark">
            Dépannage & <br />
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              montage de PC sur mesure
            </span>
          </h1>

          <p className="text-base md:text-lg text-subtle mt-4 leading-relaxed max-w-md mx-auto md:mx-0">
            Réparation, amélioration, installation de composants… <br />
            Pour particuliers et pros : confiez votre machine à un passionné.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-4 items-center md:items-start">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-[0_10px_24px_rgba(245,107,42,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
              aria-label="Demander un devis"
            >
              Demander un devis
            </Link>

            <Link
              to="/services"
              className="inline-block rounded-full border border-dark/15 bg-white px-6 py-3 font-semibold text-dark shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md"
              aria-label="Voir les services"
            >
              Voir les services
            </Link>
          </div>

          <a
            href="https://share.google/ekxJGDWxQfVtYpFdM"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-subtle transition hover:text-primary"
          >
            <span className="tracking-wider text-amber-500" aria-hidden="true">
              ★★★★★
            </span>
            <span>5,0/5 sur Google · 9 avis</span>
          </a>
        </div>

        <div className="w-full max-w-md mx-auto">
          <img
            src={heroImage}
            alt="Montage PC personnalisé avec des composants de qualité"
            width="960"
            height="640"
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full rounded-3xl object-cover shadow-[0_24px_60px_rgba(23,36,44,0.2)] ring-1 ring-dark/10 transition-transform duration-500 hover:scale-[1.015]"
          />
        </div>
      </div>
    </section>
  );
};
