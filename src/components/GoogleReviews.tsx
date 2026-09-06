import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const googleBusinessUrl = 'https://share.google/ekxJGDWxQfVtYpFdM';

type Review = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  googleMapsUri?: string;
  visitDate?: { month?: number; year?: number };
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
};

type ReviewsResponse = {
  rating?: number;
  reviewCount?: number;
  googleMapsUri?: string;
  reviews?: Review[];
};

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

export const GoogleReviews = () => {
  const [reviewsData, setReviewsData] = useState<ReviewsResponse | null>(null);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/google-reviews.php', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Reviews unavailable');
        }

        return response.json() as Promise<ReviewsResponse>;
      })
      .then(setReviewsData)
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  const rating = reviewsData?.rating ?? 5;
  const reviewCount = reviewsData?.reviewCount ?? 9;
  const reviews = reviewsData?.reviews ?? (import.meta.env.DEV ? developmentPreviewReviews : []);
  const isDevelopmentPreview = import.meta.env.DEV && reviewsData === null;
  const reviewsUrl = reviewsData?.googleMapsUri ?? googleBusinessUrl;
  const roundedRating = Math.max(0, Math.min(5, Math.round(rating)));
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
    <section
      className="border-y border-dark/5 bg-light px-4 py-10 md:py-12"
      aria-labelledby="reviews-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Avis Google
              </p>
              {isDevelopmentPreview && (
                <span className="rounded-full bg-dark px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white">
                  Aperçu local
                </span>
              )}
            </div>
            <h2 id="reviews-title" className="text-3xl font-bold text-dark">
              Ils m’ont confié leur matériel
            </h2>
          </div>
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-dark/8 bg-white px-5 py-4 shadow-sm transition hover:border-primary/25 hover:shadow-md"
          >
            <span className="text-3xl font-bold text-dark">{rating.toFixed(1)}</span>
            <span>
              <span className="block tracking-wider text-amber-500" aria-label={`${rating} sur 5`}>
                {'★'.repeat(roundedRating)}
                {'☆'.repeat(5 - roundedRating)}
              </span>
              <span className="text-sm text-subtle">{reviewCount} avis sur Google</span>
            </span>
            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-primary" aria-hidden="true" />
          </a>
        </div>

        {reviews.length > 0 ? (
          <div className="relative mx-auto mt-7 max-w-4xl overflow-hidden rounded-[2rem] border border-dark/8 border-l-4 border-l-primary bg-white px-6 py-6 shadow-[0_16px_48px_rgba(23,36,44,0.08)] sm:px-8 sm:py-7">
            <article>
              <div className="flex items-start justify-between gap-5">
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-lg font-bold text-primary ring-1 ring-primary/15">
                    {currentAuthor.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-lg font-bold text-dark">{currentAuthor}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        className="tracking-widest text-amber-500"
                        aria-label={`${currentReview?.rating ?? 5} sur 5`}
                      >
                        {'★'.repeat(
                          Math.max(0, Math.min(5, Math.round(currentReview?.rating ?? 5))),
                        )}
                      </span>
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
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Voir cet avis sur Google
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                </a>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPreviousReview}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-dark transition hover:border-primary hover:text-primary"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-dark transition hover:border-primary hover:text-primary"
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
                  className={`h-2 rounded-full transition-all ${
                    index === activeReview ? 'w-8 bg-primary' : 'w-2 bg-dark/15 hover:bg-dark/30'
                  }`}
                  aria-label={`Afficher l’avis ${index + 1}`}
                  aria-current={index === activeReview ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-dark/8 bg-light px-6 py-6 text-center shadow-[0_8px_28px_rgba(23,36,44,0.05)] md:flex-row md:px-8 md:text-left">
            <div>
              <p className="font-semibold text-dark">Des clients locaux satisfaits</p>
              <p className="mt-1 text-sm text-subtle">
                Consultez leurs expériences directement sur la fiche Google de Mon Coin PC.
              </p>
            </div>
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-600"
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
