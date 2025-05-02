import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { LegalNotice } from './pages/LegalNotice';
import { Pricing } from './pages/Pricing';

export const App = () => {
  return (
    <div className="min-h-screen bg-light text-text font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Mon Coin PC - Accueil</title>
                  <meta
                    name="description"
                    content="Dépannage, réparation et assemblage de PC fixes et portables. Services pour particuliers et professionnels."
                  />
                  <link rel="canonical" href="https://www.moncoinpc.fr/" />
                </Helmet>
                <Home />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Helmet>
                  <title>Mes Services - Mon Coin PC</title>
                  <meta
                    name="description"
                    content="Réparation, assemblage, upgrade et nettoyage de PC. Découvrez l'ensemble de mes services sur mesure."
                  />
                  <link rel="canonical" href="https://www.moncoinpc.fr/services" />
                </Helmet>
                <Services />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Helmet>
                  <title>Contactez-moi - Mon Coin PC</title>
                  <meta
                    name="description"
                    content="Besoin d'aide avec votre PC ? Contactez-moi pour une réparation ou un montage personnalisé."
                  />
                  <link rel="canonical" href="https://www.moncoinpc.fr/contact" />
                </Helmet>
                <Contact />
              </>
            }
          />
          <Route
            path="/legal-notice"
            element={
              <>
                <Helmet>
                  <title>Mentions Légales - Mon Coin PC</title>
                  <meta
                    name="description"
                    content="Consultez les mentions légales et les informations légales de Mon Coin PC."
                  />
                  <link rel="canonical" href="https://www.moncoinpc.fr/legal-notice" />
                </Helmet>
                <LegalNotice />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Helmet>
                  <title>Tarifs - Mon Coin PC</title>
                  <meta
                    name="description"
                    content="Consultez les prix des services proposés : dépannage, montage, entretien et installation système."
                  />
                  <link rel="canonical" href="https://www.moncoinpc.fr/pricing" />
                </Helmet>
                <Pricing />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Helmet>
                  <title>Page introuvable - Mon Coin PC</title>
                  <meta
                    name="description"
                    content="La page que vous recherchez est introuvable. Explorez nos services ou contactez-nous."
                  />
                  <meta name="robots" content="noindex" />
                </Helmet>
                <NotFound />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
