import { Link } from 'react-router-dom';

type Service = {
  title: string;
  icon: string;
  description: string;
};

const services: Service[] = [
  {
    title: 'Réparation PC',
    icon: '🛠️',
    description:
      'Diagnostic rapide et réparation des pannes matérielles ou logicielles sur ordinateurs fixes et portables.',
  },
  {
    title: 'Assemblage sur mesure',
    icon: '🧰',
    description:
      'Montage complet de votre configuration personnalisée, en fonction de vos besoins et de votre budget.',
  },
  {
    title: 'Upgrade composants',
    icon: '🚀',
    description:
      'Amélioration des performances : ajout de RAM, changement de disque dur, carte graphique, etc.',
  },
  {
    title: 'Nettoyage & Maintenance (Logiciel et Matériel)',
    icon: '🧽',
    description:
      'Nettoyage interne, changement de pâte thermique, dépoussiérage et désinfection antivirus pour optimiser les performances.',
  },
  {
    title: 'Installation et configuration système',
    icon: '🖥️',
    description:
      'Installation propre de Windows ou Linux, configuration des pilotes, antivirus, logiciels utiles.',
  },
  {
    title: 'Vente de composants',
    icon: '📦',
    description:
      'Fourniture de pièces neuves : disques, mémoires, cartes mères, processeurs, etc. à des tarifs compétitifs.',
  },
];

export const Services = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-dark text-center mb-12">Mes services</h1>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-6xl text-center mb-4">{service.icon}</div>
              <h2 className="text-lg font-semibold text-dark mb-2 text-center">{service.title}</h2>
              <p className="text-sm text-subtle text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-16">
          <Link
            to="/contact"
            className="bg-primary text-white font-medium px-6 py-3 rounded-full shadow hover:bg-orange-600 transition mr-4"
          >
            Besoin d’un service ? Contactez-moi
          </Link>
          <Link
            to="/pricing"
            className="bg-gray-800 border-2 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-gray-900 transition"
          >
            Voir les tarifs
          </Link>
        </div>
      </section>
    </>
  );
};
