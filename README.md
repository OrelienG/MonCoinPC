# Mon Coin PC

Bienvenue sur le projet **Mon Coin PC**. Ce site est conçu pour permettre à un passionné de la réparation, assemblage et optimisation de PC de mettre en avant ses services en ligne.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/) (version 16.x ou supérieure)
- [npm](https://www.npmjs.com/) (installé automatiquement avec Node.js)

## Installation

1. Clonez ce dépôt dans votre répertoire local :

```bash
git clone https://github.com/votre-utilisateur/mon-coin-pc.git
```

2. Allez dans le répertoire du projet :

```bash
cd mon-coin-pc
```

3. Installez les dépendances nécessaires :

```bash
npm install
```

## Démarrer le projet en mode développement

Lancez le serveur de développement avec :

```bash
npm run dev
```

Vous pourrez accéder au site via `http://localhost:5173`.

## Technologies utilisées

- **React** pour la gestion du front-end.
- **Vite** comme outil de build et de développement rapide.
- **React Helmet** pour la gestion des métadonnées du site.
- **Tailwind CSS** pour la gestion des styles.
- **Formspree** pour la gestion des formulaires de contact.

## Déploiement

1. Pour générer la version de production, utilisez la commande suivante :

```bash
npm run build
```

2. Une fois le build généré, vous pouvez déployer le dossier `dist/` sur votre serveur ou votre service d'hébergement préféré (comme [OVH](https://www.ovh.com/), [Netlify](https://www.netlify.com/), ou [Vercel](https://vercel.com/)).

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des idées d'améliorations ou si vous avez trouvé un bug, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

1. Fork ce projet.
2. Créez une nouvelle branche (`git checkout -b feature/nom-de-la-branche`).
3. Commitez vos modifications (`git commit -am 'Ajouter une nouvelle fonctionnalité'`).
4. Poussez sur la branche (`git push origin feature/nom-de-la-branche`).
5. Créez une pull request.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](./LICENSE) pour plus de détails.
