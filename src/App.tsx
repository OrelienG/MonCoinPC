import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { LegalNotice } from './pages/LegalNotice';
import { MobileContactBar } from './components/MobileContactBar';
import { PageMeta } from './components/PageMeta';
import { ScrollToTop } from './components/ScrollToTop';

export const App = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Mon Coin PC',
    url: 'https://www.moncoinpc.fr',
    telephone: '+33666397517',
    email: 'contact@moncoinpc.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '44 Route de Craonne',
      addressLocality: 'La Ville-aux-Bois-lès-Pontavert',
      postalCode: '02160',
      addressCountry: 'FR',
    },
    areaServed: 'La Ville-aux-Bois-lès-Pontavert et alentours',
    priceRange: '€€',
    sameAs: ['https://share.google/ekxJGDWxQfVtYpFdM'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33666397517',
      contactType: 'customer service',
      availableLanguage: 'French',
    },
  };

  return (
    <div className="min-h-screen bg-light text-text font-sans flex flex-col">
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageMeta
                  title="Dépannage informatique dans l’Aisne | Mon Coin PC"
                  description="Dépannage informatique, réparation et montage de PC dans l’Aisne. Intervention locale et assistance à distance avec Mon Coin PC."
                  canonical="https://www.moncoinpc.fr/"
                />
                <Home />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <PageMeta
                  title="Réparation et montage PC dans l’Aisne | Mon Coin PC"
                  description="Réparation, assemblage, amélioration et entretien de PC dans l’Aisne. Diagnostic clair et tarif annoncé avant intervention."
                  canonical="https://www.moncoinpc.fr/services"
                />
                <Services />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <PageMeta
                  title="Devis dépannage informatique | Mon Coin PC"
                  description="Contactez Mon Coin PC pour un dépannage, une réparation ou un montage de PC dans l’Aisne. Réponse claire et sans engagement."
                  canonical="https://www.moncoinpc.fr/contact"
                />
                <Contact />
              </>
            }
          />
          <Route
            path="/legal-notice"
            element={
              <>
                <PageMeta
                  title="Mentions Légales - Mon Coin PC"
                  description="Consultez les mentions légales et les informations légales de Mon Coin PC."
                  canonical="https://www.moncoinpc.fr/legal-notice"
                />
                <LegalNotice />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <PageMeta
                  title="Page introuvable - Mon Coin PC"
                  description="La page que vous recherchez est introuvable. Explorez nos services ou contactez-nous."
                  noIndex
                />
                <NotFound />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
};
