import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useForm } from '@formspree/react';
import { CheckCircleIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Link, useSearchParams } from 'react-router-dom';
import { trackConversion } from '../lib/conversions';
import { PricingTerms } from '../components/PricingTerms';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  category: string;
};

const categories = [
  { value: 'Autre', label: 'Je ne sais pas — conseillez-moi' },
  { value: 'Reparation', label: 'Réparation PC' },
  { value: 'Assemblage', label: 'Assemblage sur mesure' },
  { value: 'Upgrade', label: 'Amélioration du PC' },
  { value: 'Maintenance', label: 'Maintenance et nettoyage' },
  { value: 'Installation', label: 'Réinstallation de Windows ou Linux' },
  { value: 'Composants', label: 'Vente et installation de composants' },
  { value: 'Peripheriques', label: 'Imprimantes et accessoires' },
  { value: 'Donnees', label: 'Données et sauvegarde' },
  { value: 'Consoles', label: 'Entretien de console' },
  { value: 'Mobiles', label: 'Téléphone ou tablette' },
  { value: 'Electronique', label: 'Réparation électronique simple' },
  { value: 'Cameras', label: 'Installation de caméras' },
];

const messageExamples: Record<string, string> = {
  Autre: 'Ex. : indiquez votre appareil et ce que vous souhaitez réparer, installer ou améliorer.',
  Reparation: 'Ex. : mon PC s’allume mais l’écran reste noir depuis ce matin.',
  Assemblage: 'Ex. : je souhaite un PC pour jouer et travailler. Mon budget est de…',
  Upgrade: 'Ex. : mon PC est lent au démarrage. Je voudrais le rendre plus rapide.',
  Maintenance: 'Ex. : mon ordinateur chauffe et le ventilateur est devenu bruyant.',
  Installation: 'Ex. : je souhaite réinstaller Windows sur mon PC. J’ai des fichiers à conserver.',
  Composants: 'Ex. : je cherche un disque plus rapide, compatible avec mon ordinateur.',
  Peripheriques: 'Ex. : je voudrais connecter mon imprimante au Wi-Fi et à mon ordinateur.',
  Donnees: 'Ex. : je souhaite transférer mes photos et documents vers mon nouveau PC.',
  Consoles: 'Ex. : ma console chauffe et fait beaucoup de bruit. Son modèle est…',
  Mobiles: 'Ex. : indiquez le modèle du téléphone ou de la tablette et le problème rencontré.',
  Electronique: 'Ex. : indiquez le type d’appareil, son modèle et la panne constatée.',
  Cameras: 'Ex. : je souhaite installer des caméras à l’extérieur de mon logement.',
};

const getInitialCategory = (category: string | null) =>
  categories.some((item) => item.value === category) ? (category ?? 'Autre') : 'Autre';

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const [state, handleSubmit] = useForm('mjkylbaq');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    category: 'Autre',
  });

  useEffect(() => {
    setFormData((current) => ({
      ...current,
      category: getInitialCategory(searchParams.get('category')),
    }));
  }, [searchParams]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (validationError && (e.target.name === 'email' || e.target.name === 'phone')) {
      setValidationError(null);
    }
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!formData.email.trim() && !formData.phone.trim()) {
      setValidationError('Indiquez un téléphone ou un e-mail pour que je puisse vous répondre.');
      document.getElementById('email')?.focus();
      return;
    }

    setValidationError(null);
    try {
      await handleSubmit(e);
    } catch {
      setSubmissionError(
        'La demande n’a pas pu être envoyée. Réessayez ou appelez le 06 66 39 75 17.',
      );
    }
  };

  const selectedCategory = categories.find((item) => item.value === formData.category)?.label;
  const submissionFailed = state.errors && Object.keys(state.errors).length > 0;

  useEffect(() => {
    if (state.succeeded) {
      trackConversion('form_success');
    }
  }, [state.succeeded]);

  return (
    <>
      <section className="page-surface relative overflow-hidden px-4 py-10 sm:px-6 md:py-16">
        <div className="relative mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:grid-rows-[auto_1fr] lg:gap-x-12">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-dark sm:text-5xl">
              Parlons de <span className="text-dark">votre besoin</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-subtle">
              Un appel ou un e-mail suffit souvent pour commencer. Sinon, décrivez votre demande
              avec le formulaire.
            </p>

            <div className="mt-5 grid gap-3">
              <a
                href="tel:+33666397517"
                data-conversion="phone_click"
                className="group flex min-h-20 items-center gap-4 rounded-2xl border border-primary/15 bg-surface p-5 text-dark shadow-[0_8px_28px_rgba(23,36,44,0.07)] transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_14px_34px_rgba(23,36,44,0.11)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-subtle">Appelez-moi directement</span>
                  <span className="mt-1 block text-lg font-semibold group-hover:underline">
                    06 66 39 75 17
                  </span>
                </span>
              </a>
              <a
                href="mailto:contact@moncoinpc.fr"
                data-conversion="email_click"
                className="group flex min-h-20 items-center gap-4 rounded-2xl border border-dark/8 bg-surface p-5 text-dark shadow-[0_8px_28px_rgba(23,36,44,0.07)] transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_14px_34px_rgba(23,36,44,0.11)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-subtle">Écrivez-moi directement</span>
                  <span className="mt-1 block break-all font-semibold group-hover:underline">
                    contact@moncoinpc.fr
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div
            id="devis"
            tabIndex={-1}
            className="rounded-2xl border border-dark/8 bg-surface p-5 shadow-[0_16px_48px_rgba(23,36,44,0.09)] sm:p-8 lg:col-start-2 lg:row-start-1 lg:row-span-2"
          >
            {state.succeeded ? (
              <div
                className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                role="status"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <CheckCircleIcon className="h-9 w-9" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-3xl font-bold text-dark">
                  Votre demande est bien envoyée
                </h2>
                <p className="mt-3 max-w-lg text-lg leading-relaxed text-subtle">
                  Je reviens vers vous dès que possible pour comprendre le besoin, confirmer la
                  solution adaptée et vous annoncer le tarif avant toute intervention.
                </p>
                <a
                  href="tel:+33666397517"
                  data-conversion="phone_click"
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 font-semibold text-dark transition hover:bg-[#ff8247]"
                >
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  Appeler si besoin
                </a>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-dark">Décrivez votre besoin</h2>
                <p className="mt-2 text-sm leading-relaxed text-subtle">
                  Votre nom et la description de votre besoin sont obligatoires.
                </p>
                {selectedCategory && formData.category !== 'Autre' && (
                  <p className="mt-5 rounded-xl bg-primary-soft px-4 py-3 text-sm text-dark">
                    Votre choix : <strong>{selectedCategory}</strong>. Vous pouvez le modifier
                    ci-dessous.
                  </p>
                )}

                <form
                  action="https://formspree.io/f/mjkylbaq"
                  method="post"
                  onSubmit={handleFormSubmit}
                  className="mt-6 space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="mt-2 min-h-12 w-full rounded-xl border border-subtle px-4 py-3 transition focus:border-dark focus:outline-2 focus:outline-offset-2 focus:outline-dark"
                    />
                  </div>

                  <fieldset className="min-w-0 space-y-4">
                    <legend className="text-base font-semibold text-dark">
                      Comment vous répondre ?
                    </legend>
                    <p id="contact-method-hint" className="text-sm leading-relaxed text-subtle">
                      Renseignez votre e-mail ou votre téléphone. Un seul suffit.
                    </p>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        inputMode="email"
                        aria-invalid={validationError ? 'true' : undefined}
                        aria-describedby={
                          validationError
                            ? 'contact-method-hint contact-method-error'
                            : 'contact-method-hint'
                        }
                        className="mt-2 min-h-12 w-full rounded-xl border border-subtle px-4 py-3 transition focus:border-dark focus:outline-2 focus:outline-offset-2 focus:outline-dark"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ex: 0612345678"
                        autoComplete="tel"
                        inputMode="tel"
                        aria-invalid={validationError ? 'true' : undefined}
                        aria-describedby={
                          validationError
                            ? 'contact-method-hint contact-method-error'
                            : 'contact-method-hint'
                        }
                        className="mt-2 min-h-12 w-full rounded-xl border border-subtle px-4 py-3 transition focus:border-dark focus:outline-2 focus:outline-offset-2 focus:outline-dark"
                      />
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-dark">
                      Votre besoin
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="mt-2 min-h-12 w-full rounded-xl border border-subtle bg-surface px-4 py-3 transition focus:border-dark focus:outline-2 focus:outline-offset-2 focus:outline-dark"
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark">
                      Votre demande
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 w-full rounded-xl border border-subtle px-4 py-3 transition focus:border-dark focus:outline-2 focus:outline-offset-2 focus:outline-dark"
                      placeholder={messageExamples[formData.category] ?? messageExamples.Autre}
                      maxLength={2000}
                    ></textarea>
                  </div>

                  {validationError && (
                    <p
                      id="contact-method-error"
                      className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
                      role="alert"
                    >
                      {validationError}
                    </p>
                  )}

                  {(submissionFailed || submissionError) && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
                      {submissionError ??
                        'La demande n’a pas pu être envoyée. Vérifiez votre connexion puis réessayez, ou appelez-moi au 06 66 39 75 17.'}
                    </p>
                  )}

                  <p className="text-xs leading-relaxed text-subtle">
                    Les informations envoyées servent uniquement à répondre à votre demande. Elles
                    sont transmises via Formspree. Consultez les{' '}
                    <Link to="/legal-notice" className="text-dark underline underline-offset-2">
                      informations sur vos données
                    </Link>
                    .
                  </p>

                  <div>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="min-h-12 w-full rounded-xl bg-brand px-6 py-3 font-semibold text-dark shadow-md transition hover:bg-[#ff8247] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {state.submitting ? 'Envoi de votre demande…' : 'Envoyer ma demande'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
          <div className="max-w-lg rounded-2xl bg-primary-soft px-5 py-4 text-base leading-relaxed text-dark lg:col-start-1 lg:row-start-2">
            <strong className="font-semibold text-dark">Accueil sur rendez-vous uniquement.</strong>{' '}
            Dépôt à La Ville-aux-Bois-lès-Pontavert ou intervention à domicile selon le besoin.
            Au-delà de 15 km, les éventuels frais de déplacement sont annoncés à l’avance.
            <div className="mt-4 border-t border-dark/10 pt-4">
              <h2 className="mb-2 text-lg font-semibold text-dark">Tarifs et diagnostic</h2>
              <PricingTerms />
            </div>
            <p className="mt-3 border-t border-dark/10 pt-3 text-sm font-medium text-subtle">
              Disponibilités : lundi–samedi 10h–20h · dimanche 10h–18h
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
