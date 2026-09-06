import { CheckCircleIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { HeroBackground } from './HeroBackground';
import heroImage from '../assets/hero-workshop-v2.jpg';

const services = ['Dépannage', 'Montage sur mesure', 'Optimisation'];

export const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f8f8] px-4 py-8 sm:py-12 lg:py-16">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-9 md:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] md:gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:gap-12">
        <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left">
          <h1 className="text-balance text-[2.65rem] font-bold leading-[1.02] tracking-[-0.035em] text-dark sm:text-6xl md:text-[3.25rem] lg:text-[4rem]">
            Votre PC, réparé.
            <span className="mt-1 block text-primary">Votre besoin, compris.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-subtle sm:mt-6 md:mx-0 lg:text-xl">
            Dépannage, amélioration et montage sur mesure, avec un diagnostic clair et un tarif
            annoncé avant toute intervention.
          </p>

          <ul className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-dark sm:mt-6 sm:gap-x-5 md:justify-start">
            {services.map((service) => (
              <li key={service} className="inline-flex items-center gap-1.5">
                <CheckCircleIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                {service}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col items-center justify-center gap-2 sm:mt-8 sm:flex-row sm:gap-3 md:justify-start">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-[0_12px_28px_rgba(245,107,42,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-[0_16px_34px_rgba(245,107,42,0.32)]"
            >
              Demander un devis
            </Link>

            <Link
              to="/services"
              className="inline-flex min-h-11 items-center justify-center px-3 py-2 font-semibold text-dark underline decoration-dark/20 decoration-1 underline-offset-4 transition hover:text-primary sm:min-h-12 sm:rounded-full sm:border sm:border-dark/15 sm:bg-white sm:px-7 sm:py-3 sm:no-underline sm:shadow-[0_5px_18px_rgba(23,36,44,0.07)] sm:hover:-translate-y-0.5 sm:hover:border-primary/40"
            >
              Découvrir les services
            </Link>
          </div>

          <div className="mt-7 flex flex-col items-center gap-3 text-sm sm:flex-row sm:justify-center sm:gap-5 md:items-start md:justify-start lg:items-center">
            <a
              href="https://share.google/ekxJGDWxQfVtYpFdM"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md text-dark transition hover:text-primary"
              aria-label="Voir les 9 avis Google, note de 5 sur 5"
            >
              <span className="flex text-amber-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4" />
                ))}
              </span>
              <span className="font-semibold">5,0</span>
              <span className="text-subtle group-hover:text-primary">sur Google · 9 avis</span>
            </a>
            <span className="hidden h-4 w-px bg-dark/15 sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 text-subtle">
              <MapPinIcon className="h-4 w-4 text-primary" aria-hidden="true" />
              La Ville-aux-Bois-lès-Pontavert
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:mx-0 md:justify-self-end">
          <div className="relative overflow-hidden rounded-2xl bg-dark shadow-[0_30px_70px_rgba(23,36,44,0.24)]">
            <img
              src={heroImage}
              alt="Intervention sur un ordinateur dans l’atelier Mon Coin PC"
              width="1536"
              height="1024"
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/9] w-full object-cover object-center sm:aspect-[3/2] lg:aspect-[4/3]"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-dark/90 via-dark/45 to-transparent px-5 pb-5 pt-16 text-left text-white sm:px-6 sm:pb-6">
              <div>
                <p className="text-sm font-semibold">Un interlocuteur unique</p>
                <p className="mt-0.5 text-xs text-white/75">Du diagnostic à la remise en service</p>
              </div>
              <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold shadow-[0_6px_16px_rgba(245,107,42,0.28)]">
                +10 ans d’expérience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
