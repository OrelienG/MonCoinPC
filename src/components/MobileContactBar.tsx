import { DocumentTextIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const MobileContactBar = () => {
  return (
    <nav
      aria-label="Contact rapide"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 bg-dark px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 text-white md:hidden"
    >
      <a
        href="tel:+33666397517"
        data-conversion="phone_click"
        className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-xs font-medium transition active:bg-white/10"
      >
        <PhoneIcon className="h-5 w-5 text-brand" aria-hidden="true" />
        Appeler
      </a>
      <a
        href="mailto:contact@moncoinpc.fr"
        data-conversion="email_click"
        className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-xs font-medium transition active:bg-white/10"
      >
        <EnvelopeIcon className="h-5 w-5 text-brand" aria-hidden="true" />
        E-mail
      </a>
      <Link
        to="/contact#devis"
        data-conversion="quote_click"
        className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-xs font-semibold transition active:bg-white/10"
      >
        <DocumentTextIcon className="h-5 w-5 text-brand" aria-hidden="true" />
        Devis
      </Link>
    </nav>
  );
};
