import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useForm } from '@formspree/react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  category: string;
};

export const Contact = () => {
  const [state, handleSubmit] = useForm('mjkylbaq');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    category: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message envoyé avec succès !');
      setFormData({ name: '', email: '', phone: '', message: '', category: '' });
    }

    if (state.errors && Object.keys(state.errors).length > 0) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    }
  }, [state.succeeded, state.errors]);

  return (
    <>
      <Toaster position="top-center" />

      <section className="relative overflow-hidden px-4 py-10 sm:px-6 md:py-16">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/6 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Une question, une panne, un projet ?
            </p>
            <h1 className="text-4xl font-bold leading-tight text-dark sm:text-5xl">
              Parlons de votre besoin
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-subtle">
              Un appel ou un e-mail suffit souvent pour commencer. Sinon, décrivez votre demande
              avec le formulaire.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href="tel:+33666397517"
                className="group flex min-h-24 items-center gap-4 rounded-3xl border border-orange-100 bg-white p-5 text-dark shadow-[0_8px_28px_rgba(23,36,44,0.07)] transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_14px_34px_rgba(23,36,44,0.11)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-primary">
                  <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-subtle">Appelez-moi directement</span>
                  <span className="mt-1 block text-lg font-semibold group-hover:text-primary">
                    06 66 39 75 17
                  </span>
                </span>
              </a>
              <a
                href="mailto:contact@moncoinpc.fr"
                className="group flex min-h-24 items-center gap-4 rounded-3xl border border-dark/8 bg-white p-5 text-dark shadow-[0_8px_28px_rgba(23,36,44,0.07)] transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_14px_34px_rgba(23,36,44,0.11)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-primary">
                  <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-subtle">Écrivez-moi directement</span>
                  <span className="mt-1 block break-all font-semibold group-hover:text-primary">
                    contact@moncoinpc.fr
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div
            id="devis"
            className="rounded-[2rem] border border-dark/8 bg-white p-5 shadow-[0_16px_48px_rgba(23,36,44,0.09)] sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Formulaire
            </p>
            <h2 className="mb-6 mt-2 text-2xl font-semibold text-dark">Demander un devis</h2>

            <form onSubmit={handleFormSubmit} className="space-y-5">
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
                  className="mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  inputMode="email"
                  className="mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark">
                  Téléphone (optionnel)
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
                  className="mt-2 min-h-12 w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-dark">
                  Catégorie
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="mt-2 min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="Reparation">Réparation PC</option>
                  <option value="Assemblage">Assemblage sur mesure</option>
                  <option value="Upgrade">Amélioration du PC</option>
                  <option value="Maintenance">Maintenance & Nettoyage</option>
                  <option value="Installation">Installation et configuration système</option>
                  <option value="Composants">Vente de composants</option>
                  <option value="Peripheriques">Imprimantes & périphériques</option>
                  <option value="Donnees">Données & sauvegarde</option>
                  <option value="Consoles">Entretien consoles</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                ></textarea>
              </div>

              <p className="text-xs leading-relaxed text-subtle">
                Les informations envoyées servent uniquement à répondre à votre demande. Elles sont
                transmises via Formspree. Consultez les{' '}
                <Link to="/legal-notice" className="text-primary underline underline-offset-2">
                  informations sur vos données
                </Link>
                .
              </p>

              <div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="min-h-12 w-full rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
