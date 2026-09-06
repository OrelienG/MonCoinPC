import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[radial-gradient(circle_at_center,#fff_0%,#f3f5f6_70%)] px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Page introuvable
        </p>
        <h1 className="mb-4 text-7xl font-bold text-dark">404</h1>
        <p className="text-lg text-subtle mb-8">
          Oups ! La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600"
          >
            Retour à l&rsquo;accueil
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-dark/15 bg-white px-6 py-3 font-semibold text-dark shadow-sm transition hover:border-primary/30 hover:text-primary"
          >
            Contacter le support
          </Link>
        </div>
      </section>
    </>
  );
};
