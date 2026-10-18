# Vérification complète — 18 octobre 2026

## Verdict

L’identité reste cohérente : orange `#f56b2a`, sombre `#17242c`, cartes blanches et
vocabulaire d’un interlocuteur individuel. Le parcours des 12 prestations est
fonctionnel. Aucun blocage n’a été relevé dans les scénarios finaux testés.
Cette conclusion concerne la version locale de production, pas un déploiement.

### Ajustements visuels après comparaison avec le site publié

L’accueil reprend une largeur maximale de 1 280 px, une introduction courte et
moins d’espace vertical sur ordinateur. Les pages services et contact gardent
leur organisation, avec des fonds légèrement nuancés inspirés de la version en
ligne. Le bloc expertise retrouve le bleu-noir `#17242c`, des textes clairs et
des icônes orange.

Le haut de l’accueil peut afficher les étoiles, la note et le nombre d’avis
renvoyés par Google. Une seule réponse, chargée au niveau de la page, alimente
ce bandeau et la section d’avis. Aucune note n’est affichée si les données sont
absentes ou invalides ; le lien Google reste accessible. Les variantes de note,
de nombre, les données vides et invalides ont été contrôlées par rendu du composant.
L’API publique renvoyait 5/5 et 10 avis au moment du contrôle.

Cette dernière passe a été inspectée visuellement à 1 280 px, sans débordement ni
image cassée. L’émulation mobile de l’outil navigateur n’a pas appliqué la taille
demandée : les contrôles aux six largeurs décrits plus bas concernent la passe
précédente. Le dernier ajustement reste à confirmer sur un véritable téléphone.
Capture du bloc expertise : `.performance.local/expertise-final.jpg`, hors Git.
Le build final contient environ 98,92 ko de JavaScript gzip et 8,45 ko de CSS gzip.

| Dimension          | Appréciation /4 | Conclusion                                                                                        |
| ------------------ | --------------: | ------------------------------------------------------------------------------------------------- |
| Accessibilité      |               2 | Clavier, libellés et agrandissement vérifiés ; contraste du slogan orange encore insuffisant      |
| Performance        |               3 | JS initial 98,79 ko gzip, CSS 8,31 ko gzip ; images adaptées aux écrans, mesure locale ci-dessous |
| Responsive         |               4 | Six largeurs et texte agrandi contrôlés sans débordement final                                    |
| Couleurs et styles |               3 | Palette commune ; quelques valeurs de styles restent locales                                      |
| Intégrité          |               4 | Prestations, navigation, tarifs et vocabulaire cohérents                                          |
| **Total interne**  |       **16/20** | **Bonne base, sans nouvelle refonte nécessaire**                                                  |

Ce score est une appréciation interne, pas une certification WCAG ou un score
Lighthouse. Les recettes et captures ont été produites dans un navigateur de test
Brave isolé. Le détecteur Impeccable exécuté précédemment n’avait signalé aucun
résultat ; les contrôles fonctionnels détaillés ci-dessous sont distincts.

## Périmètre vérifié

- Accueil, services, contact, mentions légales et page introuvable.
- Largeurs 320, 360, 390, 768, 1024 et 1440 px : 30 combinaisons.
- Captures complètes en mobile, tablette et ordinateur.
- Aucun débordement horizontal, un H1 par page, images chargées et attributs alt présents.
- Texte agrandi à 200 % à 768 px : aucune des cinq pages ne déborde après correction.
- Palette de marque identique sur toutes les pages ; pas de nouvelle couleur d’identité.
- Les 12 liens de devis arrivent sur la catégorie attendue avec son exemple adapté.
- Changer de catégorie conserve le message saisi.
- Nom, message et moyen de contact : validation locale avec erreur explicite et focus sur l’e-mail si les coordonnées manquent.
- Formulaire : erreur serveur simulée, saisie conservée, nouvelle tentative, bouton désactivé pendant l’envoi et confirmation de réussite simulée.
- Lien d’évitement, navigation au clavier et fermeture du menu mobile avec Échap vérifiés lors de la recette précédente sur les mêmes composants.
- Un échec de l’API de statistiques n’interrompt pas le parcours vers le devis.
- Aucun nouveau message réel envoyé pendant cette passe.

## Corrections issues de cette vérification

1. **Grilles à texte agrandi.** Les cartes Services et le dernier bloc de l’accueil
   débordaient lorsque le texte était doublé. Le nombre de colonnes s’adapte
   maintenant à la place nécessaire au contenu.
2. **URL alternatives.** Les URL `index.html` et les pages inconnues avec extension
   pouvaient provoquer une erreur React dans l’aperçu de production. Les premières
   redirigent en 301 vers les URL publiques ; les secondes renvoient une vraie 404.
   Les paramètres de requête sont conservés. Les règles Apache correspondantes
   ont également été ajoutées ; elles restent à valider sur l’hébergement.
3. **Statistiques non bloquantes.** Si `sendBeacon` refuse l’envoi, un repli est
   tenté. Les échecs de réseau sont absorbés sans erreur non gérée dans le parcours.
4. **Erreurs du formulaire.** Une erreur de transport ne marque plus les coordonnées
   comme invalides : erreurs de saisie et erreurs d’envoi sont séparées.
5. **Navigation accessible.** Le lien du logo a désormais un nom explicite indiquant
   le retour à l’accueil.
6. **Envoi natif du formulaire.** La méthode POST et l’action Formspree sont
   déclarées dans le HTML : en l’absence de JavaScript, les données ne partent pas
   par défaut dans les paramètres d’une URL GET. Cette propriété est vérifiée par
   le contrôle du prérendu et un envoi intercepté avec et sans JavaScript, tous deux en POST.

## SEO et réponses HTTP

Les cinq pages ont été ouvertes sans JavaScript : contenu et titre disponibles
immédiatement. Les quatre pages publiques possèdent leur canonique et répondent 200. La page inconnue répond 404, possède noindex et n’a pas de canonique.

Contrôles supplémentaires réussis :

- `/index.html` → 301 vers `/` ;
- `/services/index.html?x=1` → 301 vers `/services?x=1` ;
- `/contact/` → 301 vers `/contact` ;
- page inconnue avec extension et asset absent → 404 ;
- aucune erreur JavaScript détectée dans la série finale, y compris les URL atypiques ;
- titres, descriptions, canoniques, sitemap et contenu prérendu présents ;
- en aperçu local, `/api/` répond 503 plutôt que servir du code PHP non exécuté.

## Vérifications techniques et nettoyage

- `npm run validate` a réussi : TypeScript, ESLint, build et contrôle du prérendu.
- La configuration Vite passe également son contrôle TypeScript dédié.
- `npm audit` : 0 vulnérabilité connue après six mises à jour compatibles de
  dépendances indirectes. Deux alertes élevées avaient été signalées avant correction.
- Retrait de `react-helmet-async` et `react-hot-toast`, plus importés par l’application,
  et de l’ancien override React Helmet.
- Suppression du composant `HeroBackground`, sans référence, et des trois anciennes
  captures à la racine.
- Les trois rapports historiques et l’ancienne critique ont été remplacés par ce
  bilan unique. Les faits métier utiles restent dans `PRODUCT.md`.
- README réécrit : Node 22 minimum, commandes actuelles, prérendu, contraintes
  Apache/PHP, configuration privée Google et compteurs.
- Les fichiers privés, le build, les intermédiaires et les captures temporaires
  restent ignorés par Git. Aucun secret n’a été ajouté à la documentation.

Les captures et résultats détaillés de cette recette restent temporairement dans
`.visual-check.local/final-2026-10-18/`, hors Git.

## Intégrations et conversion

L’API publique des avis Google a répondu HTTP 200 le 18 octobre : note 5, 10 avis au
total et 3 avis renvoyés. Ces valeurs restent dynamiques dans le site.

Le message réel « TEST TECHNIQUE Mon Coin PC » envoyé lors de la recette du
16 octobre avait été accepté par Formspree et sa réception a été confirmée par le
propriétaire. Cette passe utilise des réponses simulées pour tester les états de
l’interface sans multiplier les messages.

Le site facilite le choix du service, l’appel, l’e-mail et la demande de devis.
Les compteurs agrégés ne permettent pas de calculer un taux de conversion par
visiteur ni de connaître les ventes. L’effet des changements doit être évalué
avec les demandes qualifiées et les prestations effectivement acceptées.

## Complément : images et conditions tarifaires

Les images WebP remplacent les téléchargements des originaux. La photo possède
trois largeurs (480, 960 et 1440 px), le logo deux (128 et 192 px). Le navigateur
choisit avec `srcset` et `sizes`. Le logo est encodé sans perte et une favicon de
48 px évite de télécharger à nouveau le logo original pour l’onglet. Les originaux
restent les sources de travail, sans être inclus dans les pages construites.

Mesure du 18 octobre sur la version de production locale : Brave isolé, écran
390 × 844, densité 2, cache froid, débit descendant 200 000 octets/s, latence
150 ms, processeur ralenti ×4 ; trois chargements avant et trois après.

| Mesure                        |          Avant |                   Après |
| ----------------------------- | -------------: | ----------------------: |
| Images et favicon transférées | 354 316 octets | 73 546 octets (−79,2 %) |
| LCP médian                    |       2 496 ms |                1 080 ms |
| CLS                           |         0,0017 |                  0,0017 |

Les API sont simulées et le serveur est local : ces valeurs comparent le poids
des images dans un même scénario. Ce ne sont ni un score Lighthouse, ni des
Core Web Vitals terrain, ni une promesse de conversion. Captures et mesures brutes :
`.performance.local/`, hors Git.

Conditions confirmées par le propriétaire le 18 octobre : prix des prestations
hors pièces et licences éventuelles, ajoutées au devis. Diagnostic offert si la
prestation est réalisée ; sinon 30 € pour la première heure. Recherches
supplémentaires à 45 €/h seulement après information et accord du client.
Ces textes sont partagés entre services et contact pour éviter les divergences.

Après ces ajouts, accueil, services et contact ont été revérifiés à 320, 768 et
1440 px (densité 2) : neuf combinaisons, aucun débordement, aucune image cassée,
aucune erreur JavaScript. Les variantes WebP attendues sont effectivement chargées
et les conditions tarifaires sont présentes sur les deux pages concernées.
Les captures des tarifs et de l’accueil sont dans `.performance.local/`.
`npm run validate` et `git diff --check` passent.

Le modèle `docs/templates/suivi-demandes.csv` sert à suivre les demandes qualifiées,
les devis et les prestations acceptées. Sa copie remplie reste privée hors du
projet ; le README précise le calcul et ses limites.

## Limites et points conservés

- **[P1 connu, accessibilité]** La deuxième ligne orange du slogan sur fond clair
  reste autour de 2,74:1, sous le seuil des grands textes. Le titre entièrement sombre
  a été essayé le 18 octobre puis retiré à la suite du retour du propriétaire.
  L’orange d’origine est conservé, sans contour. Une conformité WCAG complète ne
  peut pas être annoncée.
- **[P3, performance]** L’amélioration des images a été mesurée localement ; aucune
  mesure Core Web Vitals terrain n’a été établie.
- Les tailles et l’agrandissement sont simulés ; pas de certification sur appareils
  physiques, clavier virtuel, Safari iOS ou lecteur d’écran complet.
- PHP et Apache ne sont pas disponibles dans l’aperçu Vite. Leur exécution, les
  permissions d’écriture des compteurs, le cache et les redirections doivent être
  contrôlés après publication. Le GET de l’API Google publique ne valide pas le
  nouveau code PHP des compteurs.
- Aucun commit, push ou déploiement réalisé par cette passe.

Les prochaines vérifications utiles concernent le déploiement FTP réel, les essais
sur appareils physiques et les retours sur les demandes reçues. Une nouvelle refonte
n’est pas recommandée.
