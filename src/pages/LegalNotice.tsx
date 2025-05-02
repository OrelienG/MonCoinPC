export const LegalNotice = () => {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-dark mb-6">Mentions légales</h1>

        <div className="space-y-8 text-sm text-subtle leading-relaxed">
          <div>
            <h2 className="font-semibold text-dark mb-2">Éditeur du site</h2>
            <p>
              Le présent site est édité par <strong>Mon Coin PC</strong>, entreprise individuelle.
              <br />
              SIRET : 94273233000017
              <br />
              Responsable de publication : GODART Orélien
              <br />
              Adresse : 44 Route de Craonne – 02160 La Ville-aux-Bois-lès-Pontavert – France
              <br />
              Email : contact@moncoinpc.fr
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-dark mb-2">Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>OVH SAS</strong>
              <br />
              2 rue Kellermann – 59100 Roubaix – France
              <br />
              Téléphone : +33 9 72 10 10 07
              <br />
              Site :{' '}
              <a
                href="https://www.ovhcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.ovhcloud.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-dark mb-2">Propriété intellectuelle</h2>
            <p>
              Le contenu de ce site (textes, images, logos, etc.) est protégé par les droits de
              propriété intellectuelle. Toute reproduction ou représentation, même partielle, est
              interdite sans l&apos;autorisation écrite préalable de l’éditeur.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-dark mb-2">Responsabilité</h2>
            <p>
              Mon Coin PC s’efforce d’assurer au mieux l’exactitude des informations diffusées sur
              ce site, mais ne peut en garantir l’exhaustivité ou l’actualité. L’utilisateur
              reconnaît utiliser ces informations sous sa responsabilité exclusive.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-dark mb-2">Données personnelles</h2>
            <p>
              Ce site ne collecte pas de données personnelles sans votre consentement. Si un
              formulaire est proposé, vous serez informé de l’usage de vos données conformément au
              RGPD.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-dark mb-2">Cookies</h2>
            <p>
              Ce site utilise des cookies uniquement à des fins de navigation ou de mesure
              d’audience anonymisée. Aucun cookie publicitaire n’est utilisé.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
