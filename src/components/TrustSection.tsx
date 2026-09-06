import { ShieldCheckIcon, UserGroupIcon, WrenchIcon } from '@heroicons/react/24/outline';
import { ComponentType } from 'react';

type Feature = {
  icon: ComponentType<{ className?: string; 'aria-hidden': boolean }>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheckIcon,
    title: 'Expertise locale',
    description:
      'Plus de 10 ans d’expérience dans le montage, la réparation et l’optimisation de PC fixes et portables.',
  },
  {
    icon: UserGroupIcon,
    title: 'Service humain',
    description:
      'Écoute, pédagogie, conseils adaptés. Un accompagnement transparent et personnalisé.',
  },
  {
    icon: WrenchIcon,
    title: 'Solutions sur mesure',
    description: 'Chaque besoin est unique. Assemblage, upgrade ou dépannage : rien de générique.',
  },
];

export const TrustSection = () => {
  return (
    <section className="relative overflow-hidden bg-dark px-4 py-12 text-center text-white md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,107,42,0.11),transparent_48%)]" />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Un service qui reste humain
        </p>
        <h2 className="mb-9 text-3xl font-bold text-white">Pourquoi me faire confiance ?</h2>

        <div className="grid md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="border-b border-white/10 px-5 py-7 last:border-b-0 md:border-b-0 md:border-l md:px-8 md:py-3 md:first:border-l-0"
              aria-label={title}
            >
              <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-[0_8px_22px_rgba(245,107,42,0.2)]">
                <Icon className="h-6 w-6 text-white" aria-hidden />
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
