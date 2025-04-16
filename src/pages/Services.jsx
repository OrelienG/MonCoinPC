import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
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
    title: 'Installation système',
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

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services - Mon Coin PC</title>
        <meta
          name="description"
          content="Découvrez mes services de dépannage, réparation, assemblage et maintenance de PC sur mesure pour particuliers et professionnels."
        />
      </Helmet>

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

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-lg shadow hover:brightness-110 transition mr-4"
          >
            Besoin d’un service ? Contactez-moi
          </Link>
          <Link
            to="/pricing"
            className="inline-block bg-transparent border-2 border-primary text-primary font-medium px-6 py-3 rounded-lg shadow hover:bg-primary hover:text-white transition"
          >
            Voir les tarifs
          </Link>
        </div>
      </section>
    </>
  );
}
