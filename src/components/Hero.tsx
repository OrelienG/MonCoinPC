import { Link } from 'react-router-dom';
import { HeroBackground } from './HeroBackground';
import heroImage from '../assets/home.jpg';

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 px-4">
      <HeroBackground />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-dark">
            Dépannage & <br />
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
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
              className="inline-block bg-primary text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition duration-300"
              aria-label="Demander un devis"
            >
              Demander un devis
            </Link>

            <Link
              to="/services"
              className="inline-block bg-gray-800 text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-900 transition duration-300"
              aria-label="Voir les services"
            >
              Voir les services
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto">
          <img
            src={heroImage}
            alt="Montage PC personnalisé avec des composants de qualité"
            className="w-full h-auto object-cover rounded-2xl shadow-2xl ring-1 ring-black/10 transition-transform duration-300 hover:scale-105 will-change-transform"
          />
        </div>
      </div>
    </section>
  );
};
