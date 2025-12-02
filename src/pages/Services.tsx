import { Link } from 'react-router-dom';

type Service = {
  title: string;
  icon: string;
  description: string;
  price: string;
};

const services: Service[] = [
  {
    title: 'Réparation PC',
    icon: '🛠️',
    description:
      'Panne matérielle ou logicielle ? Je répare votre PC rapidement, à domicile ou à distance. Diagnostic clair et sans jargon.',
    price: 'À partir de 20€',
  },
  {
    title: 'Assemblage sur mesure',
    icon: '🧰',
    description:
      'Je monte votre PC selon vos besoins (jeux, bureautique, pro). Performance, silence et qualité au rendez-vous.',
    price: 'À partir de 60€',
  },
  {
    title: 'Amélioration (Upgrade)',
    icon: '🚀',
    description:
      'PC lent ? Je booste ses performances : ajout de RAM, SSD, carte graphique, etc. Recommandations personnalisées.',
    price: 'Selon le composant',
  },
  {
    title: 'Nettoyage et Maintenance',
    icon: '🧽',
    description:
      'Dépoussiérage, changement de pâte thermique, suppression de virus… pour un PC plus sain et plus rapide.',
    price: 'A partir de 40€',
  },
  {
    title: '(Ré) Installation système',
    icon: '🖥️',
    description:
      'Windows ou Linux proprement installé, pilotes à jour, logiciels essentiels configurés. Clé USB ou disque fourni possible.',
    price: 'A partir de 40€',
  },
  {
    title: 'Vente de composants',
    icon: '📦',
    description:
      'Besoin de pièces fiables ? Je fournis RAM, SSD, processeurs, etc., au bon prix, et je peux les installer si besoin.',
    price: 'Selon le composant',
  },
];

export const Services = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-dark text-center mb-12">Mes services</h1>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-5xl text-center mb-4">{service.icon}</div>
              <h2 className="text-lg font-semibold text-dark mb-2 text-center">{service.title}</h2>
              <p className="text-sm text-subtle text-center">{service.description}</p>
              <div className="justify-center flex mt-4">
                <p className="text-lg font-bold text-primary">{service.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-16 gap-4">
          <Link
            to="/contact"
            className="bg-primary text-white font-medium px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
};
