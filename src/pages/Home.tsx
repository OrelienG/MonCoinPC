import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Accueil - Mon Coin PC</title>
        <meta
          name="description"
          content="Mon Coin PC vous propose des services de dépannage, réparation, assemblage et maintenance de PC fixes et portables, pour particuliers et professionnels."
        />
      </Helmet>

      <Hero />
      <TrustSection />
    </>
  );
};
