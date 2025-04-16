import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
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
                    content="Découvrez les services de dépannage, réparation, assemblage, upgrade et maintenance pour PC fixes et portables."
                  />
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
                    content="Contactez Mon Coin PC pour des services de réparation, assemblage ou maintenance PC. Je suis là pour vous aider."
                  />
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
                    content="Découvrez les mentions légales et les informations juridiques de Mon Coin PC."
                  />
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
                    content="Consultez les tarifs de mes services de dépannage, réparation, et assemblage de PC."
                  />
                </Helmet>
                <Pricing />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
