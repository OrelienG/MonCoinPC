import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Tarifs' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 bg-dark text-white px-6
          transition-all duration-300
          ${scrolled ? 'py-1 shadow-lg' : 'py-2 shadow-md'}
        `}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Mon Coin PC"
              className={`object-contain transition-all duration-300 ${
                scrolled ? 'w-12 h-12 md:w-14 md:h-14' : 'w-14 h-14 md:w-16 md:h-16'
              }`}
            />
            <span className="text-xl md:text-2xl font-semibold tracking-tight">
              <span className="text-primary">Mon </span>
              <span className="text-white">Coin </span>
              <span className="text-primary">PC</span>
            </span>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map(({ path, label }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`inline-block py-2 px-4 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-transparent text-white hover:bg-primary hover:text-white'
                  }`}
                  aria-label={`Aller à la page ${label}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 px-6">
            {navItems.map(({ path, label }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`inline-block py-2 px-4 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-transparent text-white hover:bg-primary hover:text-white'
                  }`}
                  aria-label={`Aller à la page ${label}`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
}
