import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';

export const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <p className="sr-only">
        Interventions informatiques à distance partout en France et sur site autour de La
        Ville-aux-Bois-lès-Pontavert.
      </p>
    </>
  );
};
