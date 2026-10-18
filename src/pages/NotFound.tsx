import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-light px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-dark">
          Page introuvable
        </p>
        <h1 className="mb-4 text-7xl font-bold text-dark">404</h1>
        <p className="text-lg text-subtle mb-8">
          Oups ! La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-brand px-6 py-3 font-semibold text-dark shadow-md transition hover:bg-[#ff8247]"
          >
            Retour à l&rsquo;accueil
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-dark/15 bg-surface px-6 py-3 font-semibold text-dark shadow-sm transition hover:border-primary/30 hover:text-dark"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
};
