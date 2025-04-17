import { Link } from 'react-router-dom';
import { HeroBackground } from './HeroBackground';
import heroImage from '../assets/home.jpg';

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden py-24">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-16">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-dark">
            Dépannage & <br />
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              montage de PC sur mesure
            </span>
          </h1>

          <p className="text-lg text-subtle mt-4 leading-relaxed max-w-xl">
            Réparation, amélioration, installation de composants… <br />
            Pour particuliers et pros : confiez votre machine à un passionné.
          </p>

          <div className="mt-8 flex justify-center gap-6">
            <Link
              to="/contact"
              className="inline-block bg-primary text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
              aria-label="Demander un devis"
            >
              Demander un devis
            </Link>

            <Link
              to="/pricing"
              className="inline-block bg-primary text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
              aria-label="Voir les tarifs"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Montage PC personnalisé avec des composants de qualité"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl ring-1 ring-black/10 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
