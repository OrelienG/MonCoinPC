import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useForm } from '@formspree/react';
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

      <section className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-lg shadow-md mt-16">
        <h1 className="text-3xl font-semibold text-dark mb-6 text-center">Contactez-moi</h1>

        <form onSubmit={handleFormSubmit} className="space-y-6">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
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
              pattern="^(\+33|0)[1-9](\d{2}){4}$"
              placeholder="Ex: 0612345678"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
            >
              <option value="">Sélectionnez une catégorie</option>
              <option value="Reparation">Réparation PC</option>
              <option value="Assemblage">Assemblage sur mesure</option>
              <option value="Upgrade">Upgrade & Nettoyage</option>
              <option value="Maintenance">Maintenance & Nettoyage</option>
              <option value="Installation">Installation système</option>
              <option value="Composants">Vente de composants</option>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition"
            >
              {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <p className="text-sm text-subtle">
            Ou contactez-moi directement : <br />
            Email :{' '}
            <a href="mailto:contact@moncoinpc.fr" className="text-primary">
              contact@moncoinpc.fr
            </a>{' '}
            <br />
            Téléphone :{' '}
            <a href="tel:+33666397517" className="text-primary">
              06.66.39.75.17
            </a>{' '}
            <br />
            Adresse : 44 Route de Craonne, 02160 La Ville-aux-Bois-lès-Pontavert, France
          </p>
        </div>
      </section>
    </>
  );
};
