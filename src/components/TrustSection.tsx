import { ShieldCheckIcon, UserGroupIcon, WrenchIcon } from '@heroicons/react/24/outline';
import { ComponentType } from 'react';

interface Feature {
  icon: ComponentType<{ className?: string; 'aria-hidden': boolean }>;
  title: string;
  description: string;
}

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

export default function TrustSection() {
  return (
    <section className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl font-bold text-dark mb-12">Pourquoi me faire confiance ?</h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-light p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            aria-label={title}
          >
            <Icon className="h-10 w-10 mx-auto text-primary mb-4" aria-hidden />
            <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
            <p className="text-sm text-subtle leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
