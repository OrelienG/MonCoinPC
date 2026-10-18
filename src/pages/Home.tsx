import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { Link } from 'react-router-dom';
import { GoogleReviews } from '../components/GoogleReviews';
import { useGoogleReviews } from '../hooks/useGoogleReviews';

const steps = [
  {
    number: '1',
    title: 'Vous décrivez le problème',
    description: 'Quelques détails sur la panne, la machine et vos disponibilités suffisent.',
  },
  {
    number: '2',
    title: 'Je pose un diagnostic clair',
    description: 'Vous connaissez la solution proposée et son coût avant toute intervention.',
  },
  {
    number: '3',
    title: 'Votre matériel repart prêt',
    description: 'Je vérifie son fonctionnement et vous explique simplement ce qui a été fait.',
  },
];

export const Home = () => {
  const reviewsData = useGoogleReviews();
  return (
    <>
      <Hero reviewsData={reviewsData} />
      <section
        className="relative overflow-hidden bg-dark px-4 py-14 text-white md:py-20"
        aria-labelledby="process-title"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="process-title"
            className="mx-auto mb-12 max-w-3xl text-center text-2xl font-bold tracking-[-0.025em] text-white sm:text-3xl md:text-4xl"
          >
            Comment se passe une intervention ?
          </h2>
          <div className="relative grid gap-0 md:grid-cols-3 md:gap-8">
            <div
              className="absolute left-[16.66%] right-[16.66%] top-6 hidden h-px bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:block"
              aria-hidden="true"
            />
            {steps.map(({ number, title, description }) => (
              <article
                key={number}
                className="relative grid grid-cols-[3rem_1fr] gap-4 border-b border-white/10 py-6 last:border-b-0 md:block md:border-0 md:px-5 md:py-0 md:text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-dark bg-brand font-bold text-dark shadow-[0_0_0_1px_rgba(245,107,42,0.35),0_8px_20px_rgba(245,107,42,0.2)] md:mx-auto md:mb-6">
                  {number}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/75">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <GoogleReviews reviewsData={reviewsData} />
      <TrustSection />

      <section
        className="border-y border-dark/8 bg-light px-4 py-12 md:py-16"
        aria-labelledby="area-title"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(min(100%,25rem),1fr))] items-center gap-10 md:gap-16">
          <div>
            <h2
              id="area-title"
              className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.025em] text-dark md:text-4xl"
            >
              Dépannage informatique près de chez vous et à distance
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-subtle">
              Basé à La Ville-aux-Bois-lès-Pontavert, je me déplace à domicile dans les alentours.
              Le dépôt et le retrait de matériel sont également possibles sur rendez-vous. Pour les
              déplacements au-delà de 15 km, les éventuels frais sont annoncés à l’avance. Pour les
              problèmes logiciels, une prise en main à distance est possible partout en France.
            </p>
          </div>
          <div className="rounded-2xl bg-surface p-7 text-dark shadow-[0_8px_24px_rgba(23,36,44,0.06)] sm:p-8">
            <p className="text-xl font-semibold">Un doute sur votre panne ou votre secteur ?</p>
            <p className="mt-3 text-sm leading-relaxed text-subtle">
              Expliquez-moi votre besoin : la première réponse est sans engagement.
            </p>
            <Link
              to="/contact"
              data-conversion="quote_click"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-dark shadow-[0_10px_24px_rgba(245,107,42,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ff8247]"
            >
              Parler de mon besoin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
