import { CheckCircleIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import type { ReviewsResponse } from '../hooks/useGoogleReviews';
import hero480 from '../assets/optimized/hero-workshop-480.webp';
import hero960 from '../assets/optimized/hero-workshop-960.webp';
import hero1440 from '../assets/optimized/hero-workshop-1440.webp';

const services = ['Dépannage', 'Montage sur mesure', 'Optimisation'];

export const Hero = ({ reviewsData }: { reviewsData: ReviewsResponse | null }) => {
  const rating = reviewsData?.rating;
  const reviewCount = reviewsData?.reviewCount;
  const hasRating =
    typeof rating === 'number' &&
    Number.isFinite(rating) &&
    rating > 0 &&
    rating <= 5 &&
    typeof reviewCount === 'number' &&
    Number.isInteger(reviewCount) &&
    reviewCount > 0;
  return (
    <section className="hero-surface relative isolate overflow-hidden px-5 py-7 sm:py-12 lg:py-16">
      <div className="relative mx-auto grid max-w-7xl items-center gap-6 sm:gap-9 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:gap-12">
        <div className="mx-auto min-w-0 max-w-2xl text-center lg:mx-0 lg:text-left">
          <h1 className="max-w-full text-balance text-[clamp(2.15rem,10.5vw,2.65rem)] font-bold leading-[1.04] tracking-[-0.03em] text-dark sm:text-6xl lg:text-[3.25rem] xl:text-[3.75rem]">
            Votre PC, réparé.
            <span className="mt-1 block text-brand">Votre besoin, compris.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 text-subtle sm:mt-6 lg:mx-0 lg:text-xl">
            Dépannage, amélioration et montage sur mesure. Un diagnostic clair et un tarif annoncé
            avant toute intervention.
          </p>

          <ul className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-dark sm:mt-6 sm:gap-x-5 lg:justify-start">
            {services.map((service) => (
              <li key={service} className="inline-flex items-center gap-1.5">
                <CheckCircleIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                {service}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col items-center justify-center gap-1 sm:mt-8 sm:flex-row sm:gap-3 lg:justify-start">
            <Link
              to="/contact#devis"
              data-conversion="quote_click"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 py-3 font-semibold text-dark shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff8247] "
            >
              Demander un devis
            </Link>

            <Link
              to="/services"
              className="inline-flex min-h-11 items-center justify-center px-3 py-2 font-semibold text-dark underline decoration-dark/20 decoration-1 underline-offset-4 transition hover:decoration-primary sm:min-h-12 sm:rounded-full sm:border sm:border-dark/15 sm:bg-surface sm:px-7 sm:py-3 sm:no-underline sm:shadow-[0_5px_18px_rgba(23,36,44,0.07)] sm:hover:-translate-y-0.5 sm:hover:border-primary/40"
            >
              Découvrir les services
            </Link>
          </div>

          <div className="mt-4 flex flex-col items-center gap-2 text-sm sm:mt-7 sm:flex-row sm:justify-center sm:gap-5 lg:justify-start lg:items-center">
            <a
              href={reviewsData?.googleMapsUri ?? 'https://share.google/ekxJGDWxQfVtYpFdM'}
              data-conversion="google_reviews_click"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 flex-wrap items-center justify-center gap-2 rounded-md text-dark transition hover:decoration-primary lg:justify-start"
              aria-label={
                hasRating
                  ? `Consulter les ${reviewCount} avis Google, note de ${rating} sur 5`
                  : 'Consulter les avis clients sur Google'
              }
            >
              {hasRating ? (
                <>
                  <span className="inline-flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon
                        key={index}
                        className={`h-4 w-4 ${index < Math.round(rating) ? 'text-amber-500' : 'text-dark/20'}`}
                      />
                    ))}
                  </span>
                  <strong>{rating.toLocaleString('fr-FR', { minimumFractionDigits: 1 })}/5</strong>
                  <span className="underline decoration-dark/25 underline-offset-4">
                    {reviewCount} avis Google
                  </span>
                </>
              ) : (
                <span className="font-medium underline decoration-dark/25 underline-offset-4">
                  Lire les avis sur Google
                </span>
              )}
            </a>
            <span className="hidden h-4 w-px bg-dark/15 sm:block" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 text-subtle">
              <MapPinIcon className="h-4 w-4 text-primary" aria-hidden="true" />
              La Ville-aux-Bois-lès-Pontavert
            </span>
          </div>
        </div>

        <div className="relative mx-auto min-w-0 w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div className="relative overflow-hidden rounded-2xl bg-dark shadow-[0_16px_40px_rgba(23,36,44,0.12)]">
            <img
              src={hero960}
              srcSet={`${hero480} 480w, ${hero960} 960w, ${hero1440} 1440w`}
              sizes="(min-width: 640px) 448px, calc(100vw - 40px)"
              alt="Intervention sur un ordinateur en atelier"
              width="1536"
              height="1024"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-center sm:aspect-[3/2] lg:aspect-[4/3]"
            />
            <div className="hero-caption">
              <div>
                <strong>Un interlocuteur unique</strong>
                <p>Du diagnostic à la remise en service</p>
              </div>
              <span>+10 ans de pratique</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
