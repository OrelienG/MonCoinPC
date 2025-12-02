import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-dark text-gray-400 py-4 mt-12 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold text-base tracking-tight">
            <span className="text-primary">Mon </span>
            <span className="text-white">Coin </span>
            <span className="text-primary">PC</span>
          </p>
          <p className="text-xs text-subtle italic mt-1">Dépannage & montage de PC depuis 2025</p>
        </div>

        <nav className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-primary transition">
            Accueil
          </Link>
          <Link to="/services" className="hover:text-primary transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Link to="/legal-notice" className="hover:text-primary transition">
            Mentions légales
          </Link>
        </nav>

        <p className="text-xs text-subtle text-center md:text-right mt-2 md:mt-0">
          © {new Date().getFullYear()} Mon Coin PC. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
