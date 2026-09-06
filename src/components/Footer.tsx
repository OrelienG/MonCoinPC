import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-dark py-8 text-sm text-gray-400 md:py-9">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 text-center md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-7 md:text-left">
        <div>
          <p className="text-base font-semibold tracking-tight">
            <span className="text-primary">Mon </span>
            <span className="text-white">Coin </span>
            <span className="text-primary">PC</span>
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Entreprise créée en avril 2025 · plus de 10 ans de pratique
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link to="/" className="inline-flex min-h-11 items-center transition hover:text-primary">
            Accueil
          </Link>
          <Link
            to="/services"
            className="inline-flex min-h-11 items-center transition hover:text-primary"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center transition hover:text-primary"
          >
            Contact
          </Link>
          <Link
            to="/legal-notice"
            className="inline-flex min-h-11 items-center transition hover:text-primary"
          >
            Mentions légales
          </Link>
        </nav>

        <div className="text-xs md:text-right">
          <a
            href="tel:+33666397517"
            className="inline-flex min-h-11 items-center text-gray-300 transition hover:text-primary"
          >
            06 66 39 75 17
          </a>
          <p className="mt-1">La Ville-aux-Bois-lès-Pontavert</p>
          <p className="mt-1 text-gray-400">© {new Date().getFullYear()} Mon Coin PC</p>
        </div>
      </div>
    </footer>
  );
};
