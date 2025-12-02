import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';

export const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />

      <section className="text-center text-sm text-gray-700 mt-10">
        <p>
          <strong>Zone d’intervention :</strong> 30 km autour de La Ville-aux-Bois-lès-Pontavert.
          <br />
          Déplacement <strong>0,697 €/km</strong> au-delà de 15 km.
        </p>
        <p className="mt-1 italic">Estimation gratuite à distance ou par téléphone.</p>
      </section>
    </>
  );
};
