import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [state, handleSubmit] = useForm('mjkylbaq');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message envoyé avec succès !');
      setFormData({ name: '', email: '', message: '', category: '' });
    }

    if (state.errors && state.errors.length > 0) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    }
  }, [state.succeeded, state.errors]);

  return (
    <>
      <Helmet>
        <title>Contact - Mon Coin PC</title>
        <meta
          name="description"
          content="Contactez Mon Coin PC pour des services de dépannage, réparation, et assemblage de PC. Nous vous répondrons dans les plus brefs délais."
        />
      </Helmet>

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
              rows="6"
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
            Email:{' '}
            <a href="mailto:contact@moncoinpc.fr" className="text-primary">
              contact@moncoinpc.fr
            </a>{' '}
            <br />
            Téléphone:{' '}
            <a href="tel:+336" className="text-primary">
              Bientot disponible
            </a>{' '}
            <br />
            Adresse: 44 Route de Craonne, 02160 La Ville-aux-Bois-lès-Pontavert, France
          </p>
        </div>
      </section>
    </>
  );
}
