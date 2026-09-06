import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { Link } from 'react-router-dom';
import { GoogleReviews } from '../components/GoogleReviews';

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
  return (
    <>
      <Hero />
      <TrustSection />
      <GoogleReviews />
      <section
        className="relative overflow-hidden bg-dark px-4 py-12 text-white md:py-16"
        aria-labelledby="process-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,107,42,0.12),transparent_45%)]" />
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Simple et transparent
          </p>
          <h2 id="process-title" className="mb-9 text-center text-3xl font-bold text-white">
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
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-dark bg-primary font-bold text-white shadow-[0_0_0_1px_rgba(245,107,42,0.35),0_8px_20px_rgba(245,107,42,0.2)] md:mx-auto md:mb-6">
                  {number}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:py-16" aria-labelledby="area-title">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Proche de chez vous
            </p>
            <h2 id="area-title" className="text-3xl font-bold text-dark">
              Dépannage informatique près de chez vous et à distance
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-subtle">
              Basé à La Ville-aux-Bois-lès-Pontavert, j’interviens sur site dans les alentours. Pour
              les problèmes logiciels, une prise en main à distance est possible partout en France.
            </p>
          </div>
          <div className="rounded-3xl border border-dark/8 bg-light p-7 shadow-[0_10px_30px_rgba(23,36,44,0.06)]">
            <p className="font-semibold text-dark">Un doute sur votre panne ou votre secteur ?</p>
            <p className="mt-2 text-sm text-subtle">
              Expliquez-moi votre besoin : la première réponse est sans engagement.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-block rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Parler de mon besoin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
