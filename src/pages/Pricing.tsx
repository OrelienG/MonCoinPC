import { Helmet } from 'react-helmet-async';

type Service = {
  title: string;
  price: string;
};

export const Pricing = () => {
  const services: Service[] = [
    {
      title: 'Réparation PC',
      price: 'À partir de 50€ / heure',
    },
    {
      title: 'Assemblage sur mesure',
      price: 'À partir de 80€',
    },
    {
      title: 'Upgrade composants',
      price: 'Selon le composant',
    },
    {
      title: 'Nettoyage & Maintenance (Logiciel et Matériel)',
      price: 'À partir de 60€',
    },
    {
      title: 'Installation système',
      price: 'À partir de 80€',
    },
    {
      title: 'Vente de composants',
      price: 'Selon le composant',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tarifs - Mon Coin PC</title>
        <meta
          name="description"
          content="Découvrez les tarifs de mes services de dépannage, réparation, assemblage et maintenance de PC sur mesure pour particuliers et professionnels."
        />
      </Helmet>

      <section className="py-20 bg-light text-center px-4">
        <h2 className="text-3xl font-bold text-dark mb-6">Tarifs</h2>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-dark mb-4">{service.title}</h3>
              <p className="text-lg font-bold text-primary">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-dark mb-4">
            Vous avez des questions sur mes services ou tarifs ?
          </p>
          <p className="text-sm text-subtle mb-6">
            Les prix peuvent varier en fonction de la complexité de la tâche. Des forfaits sont
            également disponible. Pour un devis précis, contactez-moi !
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-orange-600 transition"
          >
            Demander un devis
          </a>
        </div>
      </section>
    </>
  );
};
