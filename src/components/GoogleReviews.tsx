import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import type { Review, ReviewsResponse } from '../hooks/useGoogleReviews';

const googleBusinessUrl = 'https://share.google/ekxJGDWxQfVtYpFdM';

const developmentPreviewReviews: Review[] = [
  {
    rating: 5,
    relativePublishTimeDescription: 'il y a 3 mois',
    text: {
      text: 'Répond rapidement, intervient à distance et peut se déplacer. Une aide efficace et disponible.',
    },
    authorAttribution: { displayName: 'ablawuli' },
  },
  {
    rating: 5,
    relativePublishTimeDescription: 'il y a 7 mois',
    text: {
      text: 'Mon PC a eu droit à une seconde jeunesse : nettoyage et remontage impeccables, avec de très bons conseils.',
    },
    authorAttribution: { displayName: 'Nywade Edwyn' },
  },
  {
    rating: 5,
    relativePublishTimeDescription: 'il y a 7 mois',
    text: {
      text: 'Excellente expérience ! Un PC monté sur mesure en tenant compte de tous mes besoins, avec une vraie écoute.',
    },
    authorAttribution: { displayName: 'Quentin GAUGE' },
  },
];

const formatVisitDate = (visitDate?: Review['visitDate']) => {
  if (!visitDate?.year || !visitDate.month) {
    return null;
  }

  return new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(visitDate.year, visitDate.month - 1));
};

const StarRating = ({ rating, className = '' }: { rating: number; className?: string }) => (
  <span
    className={`inline-flex gap-0.5 text-amber-500 ${className}`}
    aria-label={`${rating} sur 5`}
  >
    {Array.from({ length: 5 }).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < Math.round(rating) ? 'text-amber-500' : 'text-dark/15'}`}
        aria-hidden="true"
      />
    ))}
  </span>
);

export const GoogleReviews = ({ reviewsData }: { reviewsData: ReviewsResponse | null }) => {
  const [activeReview, setActiveReview] = useState(0);

  const rating = reviewsData?.rating;
  const reviewCount = reviewsData?.reviewCount;
  const reviews = reviewsData?.reviews ?? (import.meta.env.DEV ? developmentPreviewReviews : []);
  const isDevelopmentPreview = import.meta.env.DEV && reviewsData === null;
  const reviewsUrl = reviewsData?.googleMapsUri ?? googleBusinessUrl;
  const currentReview = reviews[activeReview] ?? reviews[0];
  const currentAuthor = currentReview?.authorAttribution?.displayName ?? 'Client Google';
  const currentText = currentReview?.text?.text ?? currentReview?.originalText?.text ?? '';
  const currentVisitDate = formatVisitDate(currentReview?.visitDate);

  const showPreviousReview = () => {
    setActiveReview((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };

  const showNextReview = () => {
    setActiveReview((current) => (current + 1) % reviews.length);
  };

  return (
    <section className="bg-light px-4 py-14 md:py-20" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div>
            <h2
              id="reviews-title"
              className="text-3xl font-bold tracking-[-0.025em] text-dark md:text-4xl"
            >
              Ils m’ont confié leur matériel
            </h2>
            <p className="mt-3 text-subtle">
              Des retours publics, consultables directement sur Google.
            </p>
            {isDevelopmentPreview && (
              <span className="mt-3 inline-flex rounded-full bg-dark px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                Aperçu local
              </span>
            )}
          </div>
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl bg-surface px-5 py-4 shadow-[0_10px_28px_rgba(23,36,44,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(23,36,44,0.12)]"
          >
            <span className="shrink-0 text-3xl font-bold tabular-nums text-dark">
              {rating?.toLocaleString('fr-FR', { minimumFractionDigits: 1 })}
            </span>
            <span className="grid min-w-0 gap-1 text-left">
              {typeof rating === 'number' && <StarRating rating={rating} />}
              <span className="block text-sm leading-snug text-subtle">
                {typeof reviewCount === 'number'
                  ? `${reviewCount} avis sur Google`
                  : 'Consulter les avis Google'}
              </span>
            </span>
            <ArrowTopRightOnSquareIcon
              className="h-5 w-5 shrink-0 text-primary"
              aria-hidden="true"
            />
          </a>
        </div>

        {reviews.length > 0 ? (
          <div className="relative mx-auto mt-9 max-w-4xl overflow-hidden rounded-2xl bg-surface px-6 py-6 shadow-[0_18px_48px_rgba(23,36,44,0.09)] sm:px-8 sm:py-7">
            <article aria-live="polite" aria-atomic="true">
              <div className="flex items-start justify-between gap-5">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-soft text-lg font-bold text-dark ring-1 ring-primary/15">
                    {currentAuthor.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-lg font-bold text-dark">{currentAuthor}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <StarRating rating={currentReview?.rating ?? 5} />
                      <span className="text-sm text-subtle">
                        {currentVisitDate
                          ? `Visité en ${currentVisitDate}`
                          : currentReview?.relativePublishTimeDescription}
                      </span>
                    </div>
                  </div>
                </div>
                <span
                  className="hidden text-7xl font-bold leading-none text-primary/15 sm:block"
                  aria-hidden="true"
                >
                  “
                </span>
              </div>

              <blockquote className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-dark sm:text-xl">
                {currentText}
              </blockquote>

              <div className="mt-5 flex flex-col gap-5 border-t border-dark/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={currentReview?.googleMapsUri ?? reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-dark underline decoration-dark/25 hover:decoration-primary"
                >
                  Voir cet avis sur Google
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                </a>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPreviousReview}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-dark/15 text-dark transition hover:border-primary hover:text-primary"
                    aria-label="Afficher l’avis précédent"
                  >
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden />
                  </button>
                  <span className="min-w-10 text-center text-sm text-subtle">
                    {activeReview + 1} / {reviews.length}
                  </span>
                  <button
                    type="button"
                    onClick={showNextReview}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-dark/15 text-dark transition hover:border-primary hover:text-primary"
                    aria-label="Afficher l’avis suivant"
                  >
                    <ChevronRightIcon className="h-5 w-5" aria-hidden />
                  </button>
                </div>
              </div>
            </article>

            <div className="mt-4 flex justify-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={`${review.authorAttribution?.displayName ?? 'review'}-${index}`}
                  type="button"
                  onClick={() => setActiveReview(index)}
                  className="group flex h-11 w-11 items-center justify-center rounded-full transition"
                  aria-label={`Afficher l’avis ${index + 1}`}
                  aria-current={index === activeReview ? 'true' : undefined}
                >
                  <span
                    className={`block h-2 rounded-full transition-all ${
                      index === activeReview
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-dark/15 group-hover:bg-dark/30'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-dark/8 bg-light px-6 py-6 text-center md:flex-row md:px-8 md:text-left">
            <div>
              <p className="font-semibold text-dark">Des clients locaux satisfaits</p>
              <p className="mt-1 text-sm text-subtle">
                Consultez leurs expériences directement sur la fiche Google de Mon Coin PC.
              </p>
            </div>
            <a
              href={reviewsUrl}
              data-conversion="google_reviews_click"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-dark shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ff8247]"
            >
              Lire les avis Google
              <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        )}

        <p className="mt-4 text-center text-xs text-subtle">
          {isDevelopmentPreview
            ? 'Le contenu de démonstration sera remplacé par les avis renvoyés par Google après la mise en ligne.'
            : 'Avis affichés par pertinence selon Google. Les avis ne sont pas vérifiés par Google.'}
        </p>
      </div>
    </section>
  );
};
