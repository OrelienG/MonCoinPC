import {
  ArrowTrendingUpIcon,
  CircleStackIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CubeIcon,
  PrinterIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { ComponentType } from 'react';
import { Link } from 'react-router-dom';

type Service = {
  title: string;
  icon: ComponentType<{ className?: string; 'aria-hidden': boolean }>;
  description: string;
  price: string;
};

const services: Service[] = [
  {
    title: 'Réparation PC',
    icon: WrenchScrewdriverIcon,
    description:
      'Panne matérielle ou logicielle ? Je répare votre PC rapidement, à domicile ou à distance. Diagnostic clair et sans jargon.',
    price: 'À partir de 30€',
  },
  {
    title: 'Assemblage sur mesure',
    icon: ComputerDesktopIcon,
    description:
      'Je monte votre PC selon vos besoins (jeux, bureautique, pro). Performance, silence et qualité au rendez-vous.',
    price: 'À partir de 90€',
  },
  {
    title: 'Amélioration (Upgrade)',
    icon: ArrowTrendingUpIcon,
    description:
      'PC lent ? Je booste ses performances : ajout de RAM, SSD, carte graphique, etc. Recommandations personnalisées.',
    price: 'Sur devis',
  },
  {
    title: 'Nettoyage et Maintenance',
    icon: SparklesIcon,
    description:
      'Dépoussiérage, changement de pâte thermique, suppression de virus… pour un PC plus sain et plus rapide.',
    price: 'À partir de 50€',
  },
  {
    title: 'Réinstallation système',
    icon: CommandLineIcon,
    description:
      'Windows ou Linux proprement installé, pilotes à jour, logiciels essentiels configurés. Clé USB ou disque fourni possible.',
    price: 'À partir de 80€',
  },
  {
    title: 'Vente de composants',
    icon: CubeIcon,
    description:
      'Besoin de pièces fiables ? Je fournis RAM, SSD, processeurs, etc., au bon prix, et je peux les installer si besoin.',
    price: 'Sur devis',
  },
  {
    title: 'Imprimantes & périphériques',
    icon: PrinterIcon,
    description:
      'Installation, configuration et dépannage de vos imprimantes et périphériques : scanner, webcam, clavier, etc.',
    price: 'À partir de 20€',
  },

  {
    title: 'Données & sauvegarde',
    icon: CircleStackIcon,
    description:
      'Transfert, sauvegarde et récupération de vos fichiers, ou migration de vos données vers un nouveau PC ou disque.',
    price: 'À partir de 40€',
  },
  {
    title: 'Entretien consoles',
    icon: WrenchScrewdriverIcon,
    description:
      'Nettoyage, entretien et remplacement de pâte thermique sur Nintendo Switch, PlayStation, Xbox, etc.',
    price: 'À partir de 50€',
  },
];

export const Services = () => {
  return (
    <>
      <section className="relative overflow-hidden border-y border-dark/8 bg-[#e4e9eb] px-4 py-12 md:py-16">
        <div className="pointer-events-none absolute -right-36 -top-36 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <div className="relative mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Dépannage, montage et entretien
            </p>
            <h1 className="mt-2 text-4xl font-bold text-dark sm:text-5xl">Mes services</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-subtle">
              Des solutions claires pour réparer, améliorer ou entretenir votre matériel, avec un
              tarif validé avant l’intervention.
            </p>
          </div>
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex flex-col rounded-2xl border border-dark/8 bg-white p-6 shadow-[0_6px_20px_rgba(23,36,44,0.05)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_12px_30px_rgba(23,36,44,0.09)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-primary ring-1 ring-primary/10 transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold leading-tight text-dark">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-subtle">
                    {service.description}
                  </p>
                  <p className="mt-5 border-t border-dark/8 pt-4 font-bold text-primary">
                    {service.price}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 rounded-[2rem] bg-dark p-7 text-white shadow-[0_18px_50px_rgba(23,36,44,0.18)] sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Vous ne savez pas quoi choisir ?
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Décrivez-moi simplement la panne
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
              Je vous aide à identifier la bonne intervention avant de vous engager.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="tel:+33666397517"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white transition hover:border-primary hover:text-primary"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden />
              Appeler
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 font-semibold text-white shadow-[0_10px_24px_rgba(245,107,42,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
