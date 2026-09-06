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
      'Plus de 10 ans de pratique du montage, de la réparation et de l’optimisation de PC, avant la création de Mon Coin PC en avril 2025.',
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
    description:
      'Chaque besoin est unique. Assemblage, amélioration ou dépannage : rien de générique.',
  },
];

export const TrustSection = () => {
  return (
    <section className="relative overflow-hidden bg-dark px-4 py-14 text-white md:py-20">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-[-0.025em] text-white md:text-4xl">
            L’expertise technique, avec une relation simple.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/70">
            Vous gardez un interlocuteur disponible, qui explique clairement le problème et adapte
            chaque intervention à votre usage.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:items-center sm:gap-5"
              aria-label={title}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="col-start-2 text-sm leading-relaxed text-white/65 sm:col-start-auto">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
