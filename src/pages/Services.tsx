import { PricingTerms } from '../components/PricingTerms';
import {
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  CommandLineIcon,
  CubeIcon,
  PrinterIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

type Service = {
  title: string;
  description: string;
  price: string;
  category: string;
  intent: 'repair' | 'improve' | 'install';
};

const services: Service[] = [
  {
    title: 'Réparation PC',
    description:
      'PC en panne ? Je recherche la cause et vous explique la réparation. Assistance à distance possible pour les problèmes logiciels.',
    price: 'À partir de 30 €',
    category: 'Reparation',
    intent: 'repair',
  },
  {
    title: 'Assemblage sur mesure',
    description:
      'Je monte votre PC selon vos besoins (jeux, bureautique, pro). Performance, silence et qualité au rendez-vous.',
    price: 'À partir de 90 €',
    category: 'Assemblage',
    intent: 'improve',
  },
  {
    title: 'Amélioration du PC',
    description:
      'PC lent ? Plus de mémoire, un stockage plus rapide (SSD) ou une carte graphique adaptée : je vous conseille les améliorations utiles à votre usage.',
    price: 'Sur devis',
    category: 'Upgrade',
    intent: 'improve',
  },
  {
    title: 'Nettoyage et maintenance',
    description:
      'Un PC qui chauffe ou ralentit ? Je retire la poussière et les virus, et remplace la pâte thermique pour améliorer le refroidissement si nécessaire.',
    price: 'À partir de 50 €',
    category: 'Maintenance',
    intent: 'repair',
  },
  {
    title: 'Réinstallation de Windows ou Linux',
    description:
      'Réinstallation de Windows ou Linux et configuration des logiciels essentiels pour retrouver un ordinateur prêt à utiliser.',
    price: 'À partir de 80 €',
    category: 'Installation',
    intent: 'install',
  },
  {
    title: 'Vente de composants',
    description:
      'Mémoire, stockage, processeur… Je vous aide à choisir des pièces compatibles avec votre PC et peux les installer si besoin.',
    price: 'Sur devis',
    category: 'Composants',
    intent: 'improve',
  },
  {
    title: 'Imprimantes et accessoires',
    description:
      'Installation, configuration et dépannage de vos imprimantes et périphériques : scanner, webcam, clavier, etc.',
    price: 'À partir de 20 €',
    category: 'Peripheriques',
    intent: 'install',
  },

  {
    title: 'Données et sauvegarde',
    description:
      'Sauvegarde et transfert de vos fichiers vers un autre ordinateur ou disque. La récupération de fichiers perdus dépend de l’état du support.',
    price: 'À partir de 40 €',
    category: 'Donnees',
    intent: 'install',
  },
  {
    title: 'Entretien des consoles',
    description:
      'Nettoyage et entretien de votre Nintendo Switch, PlayStation ou Xbox, avec remplacement de la pâte thermique qui aide à évacuer la chaleur.',
    price: 'À partir de 50 €',
    category: 'Consoles',
    intent: 'repair',
  },
  {
    title: 'Téléphones et tablettes',
    description:
      'Pour certaines pannes simples sur téléphone ou tablette. Je vérifie d’abord si l’intervention est adaptée et réparable dans de bonnes conditions.',
    price: 'Sur devis',
    category: 'Mobiles',
    intent: 'repair',
  },
  {
    title: 'Réparation électronique simple',
    description:
      'Diagnostic et réparation de petits problèmes électroniques selon l’appareil et la panne. La faisabilité est confirmée avant toute intervention.',
    price: 'Sur devis',
    category: 'Electronique',
    intent: 'repair',
  },
  {
    title: 'Installation de caméras',
    description:
      'Installation et configuration de caméras de surveillance connectées, notamment les modèles solaires Tapo, selon votre logement et vos besoins.',
    price: 'Sur devis',
    category: 'Cameras',
    intent: 'install',
  },
];

const serviceIcons = {
  Reparation: WrenchScrewdriverIcon,
  Assemblage: ComputerDesktopIcon,
  Upgrade: ArrowTrendingUpIcon,
  Maintenance: SparklesIcon,
  Installation: CommandLineIcon,
  Composants: CubeIcon,
  Peripheriques: PrinterIcon,
  Donnees: CircleStackIcon,
  Consoles: WrenchScrewdriverIcon,
  Mobiles: DevicePhoneMobileIcon,
  Electronique: BoltIcon,
  Cameras: VideoCameraIcon,
};

const serviceGroups: { id: Service['intent']; title: string }[] = [
  { id: 'repair', title: 'Réparer et entretenir' },
  { id: 'improve', title: 'Créer et améliorer son PC' },
  { id: 'install', title: 'Installer et sauvegarder' },
];

export const Services = () => (
  <section className="page-surface px-4 py-8 sm:py-10 md:py-12">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-dark sm:text-5xl">Mes services</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-subtle sm:text-lg">
          Réparation, entretien et montage sur mesure. Un tarif validé avant l’intervention.
        </p>
        <p className="mt-2 text-base leading-relaxed text-subtle">
          Diagnostic gratuit si vous faites réaliser la prestation ensuite.
        </p>
      </div>
      <div className="space-y-10 sm:space-y-12">
        {serviceGroups.map((group) => (
          <section key={group.id} aria-labelledby={`services-${group.id}`}>
            <h2 id={`services-${group.id}`} className="mb-5 text-2xl font-semibold text-dark">
              {group.title}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,22rem),1fr))] gap-5">
              {services
                .filter((service) => service.intent === group.id)
                .map((service) => {
                  const Icon = serviceIcons[service.category as keyof typeof serviceIcons];
                  return (
                    <article
                      key={service.category}
                      className="flex flex-col rounded-2xl bg-surface p-5 sm:p-6 shadow-[0_8px_24px_rgba(23,36,44,0.08)]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h3 className="text-xl font-semibold leading-snug text-dark">
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-4 flex-1 text-base leading-relaxed text-subtle">
                        {service.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-dark/8 pt-3">
                        <p className="text-lg font-semibold text-dark">{service.price}</p>
                        <Link
                          to={`/contact?category=${service.category}#devis`}
                          data-conversion="service_quote_click"
                          aria-label={`Demander un devis pour ${service.title}`}
                          className="inline-flex min-h-11 items-center justify-center rounded-md px-1 py-2 text-base font-semibold text-dark underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:bg-primary-soft"
                        >
                          Demander un devis
                        </Link>
                      </div>
                    </article>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
      <section className="mt-8 max-w-3xl" aria-labelledby="pricing-title">
        <h2 id="pricing-title" className="mb-3 text-xl font-semibold text-dark">
          Des tarifs annoncés à l’avance
        </h2>
        <PricingTerms />
        <p className="mt-2 text-base leading-relaxed text-subtle">
          Les prix affichés sont des tarifs de départ. Le montant total est confirmé sur devis avant
          l’intervention. Au-delà de 15 km, les éventuels frais de déplacement sont annoncés à
          l’avance.
        </p>
      </section>
      <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-dark p-7 text-white sm:p-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold">Vous ne savez pas quoi choisir ?</h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
            Décrivez-moi votre besoin. Je vous aide à choisir le service adapté.
          </p>
        </div>
        <Link
          to="/contact?category=Autre#devis"
          data-conversion="quote_click"
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-dark transition-colors hover:bg-primary-hover"
        >
          Parler de mon besoin
        </Link>
      </div>
    </div>
  </section>
);
