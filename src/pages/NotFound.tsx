import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page introuvable - Mon Coin PC</title>
        <meta
          name="description"
          content="La page que vous recherchez est introuvable. Découvrez nos services ou contactez-nous."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-light">
        <h1 className="text-5xl font-bold text-dark mb-4">404</h1>
        <p className="text-lg text-subtle mb-8">
          Oups ! La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
        </p>
        <div className="flex gap-4">
          <Link
            to="/"
            className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
          >
            Retour à l&rsquo;accueil
          </Link>
          <Link
            to="/contact"
            className="bg-gray-800 text-white px-6 py-3 rounded-full shadow hover:bg-gray-900 transition"
          >
            Contacter le support
          </Link>
        </div>
      </section>
    </>
  );
};
