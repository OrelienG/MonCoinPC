# Mon Coin PC

Site vitrine de Mon Coin PC : services et tarifs, informations pratiques et demande de devis.
React 19, TypeScript, Vite et Tailwind CSS. Les pages publiques sont prérendues au build,
puis React active la navigation et le formulaire. Formspree gère les demandes ; les avis
Google et les compteurs agrégés utilisent des endpoints PHP.

## Développement

Prérequis : Node.js 22 ou plus, npm. Depuis le dossier du dépôt :

```sh
npm ci
npm run dev
```

Ouvrir l’adresse affichée par Vite, habituellement `http://localhost:5173`.
Le serveur Vite n’exécute pas PHP. Les avis de démonstration sont identifiés comme
aperçu local et ne sont pas utilisés dans le build de production.

## Vérification et build

```sh
npm run type-check
npm run lint
npm run build
node scripts/check-prerender.mjs
npm run preview
```

`npm run validate` regroupe les quatre premières vérifications sans reformater ni
corriger les sources. `npm run format` et `npm run lint:fix` modifient les fichiers.
Les tests structurels vérifient les titres, canoniques, contenu, 12 services,
formulaire et page 404 générés. Le bilan fonctionnel est dans [docs/VERIFICATION.md](docs/VERIFICATION.md).

Le build produit `dist/`, dont `services/index.html`, `contact/index.html`,
`legal-notice/index.html`, `404.html`, les assets, le sitemap, les fichiers PHP
et `.htaccess`. `.prerender/` est un intermédiaire généré et ignoré par Git.
L’aperçu local reproduit les URL publiques et les statuts 404, mais répond 503
sur `/api/` : les intégrations PHP nécessitent l’hébergement.

## Déploiement sur Apache/PHP

1. Construire avec `npm run build` et déployer **tout le contenu de `dist/`** à la
   racine du site, y compris le fichier caché `.htaccess` et les sous-dossiers.
2. Le serveur doit exécuter PHP avec cURL, autoriser `mod_rewrite`,
   `Options -MultiViews`, `DirectorySlash` et `ErrorDocument` dans `.htaccess`.
   Un hébergement purement statique ne suffit pas aux APIs livrées.
3. Conserver `moncoinpc-google.php` dans la racine publique déployée, à côté
   d’`index.html`. Ce fichier privé, ignoré par Git, ne fait pas partie de `dist/`.
   Ne pas l’écraser lors du déploiement. L’API l’utilise pour la configuration
   Google et écrit son cache au même niveau.
4. Vérifier HTTPS, les quatre pages publiques en HTTP 200, une URL inconnue en 404,
   les redirections des URL `index.html`, les métadonnées initiales, les avis et
   le formulaire sur le domaine réel. Le contrôle local ne valide pas Apache.

Le formulaire doit être autorisé pour le domaine de production dans Formspree.
Le dernier message technique a été accepté par Formspree et sa réception a été
confirmée par le propriétaire ; aucun envoi réel n’est nécessaire pour les
simulations de formulaire locales.

## Compteurs de conversion

`public/api/conversions.php` compte uniquement des événements agrégés : clics
téléphone, e-mail, devis, avis et formulaires acceptés. Aucun cookie ou identifiant
de visiteur n’est utilisé. Ces compteurs ne mesurent ni les visiteurs uniques,
ni les appels aboutis, ni les ventes.

Sur l’hébergement PHP :

1. Copier `moncoinpc-analytics.example.php` sous le nom `moncoinpc-analytics.php`
   dans la racine publique déployée.
2. Remplacer `readKey` par une longue clé aléatoire privée.
3. Consulter `/api/conversions.php?key=VOTRE_CLE`, en gardant cette URL privée.

Le fichier de statistiques est placé par défaut un niveau au-dessus de la racine
publique. Configurer `statsPath` avec un chemin privé inscriptible si nécessaire.
La configuration et les statistiques ne doivent pas être commitées.

Pour suivre les résultats réels, copier le [modèle de suivi des demandes](docs/templates/suivi-demandes.csv)
dans un dossier privé hors du projet et l’ouvrir dans un tableur. Une ligne par
demande, même si la personne utilise plusieurs canaux ; utiliser une référence
interne sans nom, téléphone ou e-mail. Canal : formulaire, appel ou e-mail.
Renseigner oui/non pour demande qualifiée, devis envoyé et prestation acceptée ;
laisser la décision vide tant qu’elle est en attente. Une demande qualifiée porte
sur un besoin réel auquel Mon Coin PC peut répondre. L’origine est renseignée
seulement si le client l’indique (Google, recommandation, etc.).

Chaque mois, comparer les demandes qualifiées aux prestations acceptées, sur les
dossiers ayant reçu une décision. Relever les motifs de refus (prix, délai,
hors périmètre…) pour décider quoi améliorer. Ce ratio mesure la transformation
des demandes traitées en prestations, pas celle des visiteurs du site.

## Contenu et identité

- Prestations et prix : `src/pages/Services.tsx`.
- Catégories et exemples du formulaire : `src/pages/Contact.tsx`.
- Couleurs et styles partagés : `src/index.css` ; orange de marque `#f56b2a`.
- Conditions tarifaires partagées entre services et contact : `src/components/PricingTerms.tsx`.
- Images livrées : variantes WebP dans `src/assets/optimized/`, sélectionnées selon
  la taille et la densité de l’écran ; favicon dédiée dans `public/favicon.png`.
  `src/assets/logo.png` et `src/assets/hero-workshop-v2.jpg` restent les originaux
  pour les futures déclinaisons ; ils ne sont plus téléchargés par les pages.
- Contexte métier et faits à préserver : [PRODUCT.md](PRODUCT.md).
- Licence du code : [MIT](LICENSE).
