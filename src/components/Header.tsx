import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo128 from '../assets/optimized/logo-128.webp';
import logo192 from '../assets/optimized/logo-192.webp';

type NavItem = {
  path: string;
  label: string;
};

export const Header = () => {
  const { pathname } = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-dark px-4 py-2 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" aria-label="Mon Coin PC — accueil" className="flex items-center gap-3">
          <img
            src={logo192}
            srcSet={`${logo128} 128w, ${logo192} 192w`}
            sizes="(min-width: 768px) 64px, 56px"
            alt="Mon Coin PC"
            width="256"
            height="238"
            decoding="async"
            className="h-14 w-14 object-contain md:h-16 md:w-16"
          />
          <span className="text-xl md:text-2xl font-semibold tracking-tight">
            <span className="text-brand">Mon </span>
            <span className="text-white">Coin </span>
            <span className="text-brand">PC</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <div className="hidden items-center gap-3 border-r border-white/15 pr-5 lg:flex">
            <a
              href="tel:+33666397517"
              data-conversion="phone_click"
              className="flex items-center gap-1.5 text-sm text-white/80 transition hover:text-primary"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              06 66 39 75 17
            </a>
            <a
              href="mailto:contact@moncoinpc.fr"
              data-conversion="email_click"
              aria-label="Envoyer un e-mail"
              className="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-primary"
            >
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <nav className="flex gap-2" aria-label="Navigation principale">
            {navItems.map(({ path, label }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`
                  relative after:absolute after:-inset-y-1 after:inset-x-0 inline-flex items-center justify-center py-2 px-4
                  text-sm font-medium
                  transition-all duration-200
                  rounded-full
                  ${
                    isActive
                      ? 'bg-brand text-dark'
                      : 'bg-transparent text-white hover:bg-brand hover:text-dark'
                  }
                `}
                  aria-label={`Aller à la page ${label}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <button
          ref={menuButton}
          type="button"
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full transition active:bg-white/10 md:hidden"
          onClick={() => {
            setMenuOpen((current) => !current);
          }}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
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
        <nav
          className="mt-3 flex flex-col gap-2 border-t border-white/10 py-3 md:hidden"
          id="mobile-navigation"
          aria-label="Navigation mobile"
        >
          {navItems.map(({ path, label }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`
                  flex items-center py-3 px-4
                  text-sm font-medium
                  transition-all duration-200
                  rounded-full
                  ${
                    isActive
                      ? 'bg-brand text-dark'
                      : 'bg-transparent text-white hover:bg-brand hover:text-dark'
                  }
                `}
                aria-label={`Aller à la page ${label}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};
