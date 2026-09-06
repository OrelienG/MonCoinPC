export const LegalNotice = () => {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-20">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Informations
        </p>
        <h1 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">Mentions légales</h1>

        <div className="space-y-8 rounded-3xl border border-dark/8 bg-white p-6 text-sm leading-relaxed text-subtle shadow-[0_12px_40px_rgba(23,36,44,0.07)] sm:p-10">
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
            <h2 className="font-semibold text-dark mb-2">Données personnelles et formulaire</h2>
            <p>
              Le formulaire collecte votre nom, votre adresse électronique et, si vous le
              renseignez, votre numéro de téléphone afin de répondre à votre demande. Ce traitement
              repose sur l’intérêt légitime de Mon Coin PC à traiter les sollicitations reçues. Les
              informations sont transmises par le prestataire Formspree et ne sont pas utilisées à
              des fins de prospection sans votre accord. Elles sont conservées le temps nécessaire
              au traitement de la demande, puis supprimées au plus tard trois ans après le dernier
              échange. Vous pouvez demander l’accès, la rectification, l’effacement ou la limitation
              de vos données en écrivant à contact@moncoinpc.fr. Vous pouvez également adresser une
              réclamation à la CNIL.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-dark mb-2">Cookies</h2>
            <p>
              Mon Coin PC n’utilise aucun outil publicitaire ni outil de mesure d’audience. Le
              service tiers chargé du formulaire peut toutefois traiter les données techniques
              strictement nécessaires à son fonctionnement et à la prévention des abus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
