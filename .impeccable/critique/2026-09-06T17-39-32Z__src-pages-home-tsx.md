---
na_heuristics: 7,10
p1_count: 2
p0_count: 0
total_score: 22
max_score: 32
target: page accueil
target_identity: "file:C:\\Users\\oreli\\Documents\\Dev\\MonCoinPC\\src\\pages\\Home.tsx"
target_fingerprint: 'sha256:6c580885f47521777ade976636f81e054a7d5af8446aea138140b7744abcc143'
target_path: "C:\\Users\\oreli\\Documents\\Dev\\MonCoinPC\\src\\pages\\Home.tsx"
timestamp: 2026-09-06T17-39-32Z
slug: src-pages-home-tsx
---

# Critique de la page d’accueil

## Santé UX

| #         | Heuristique                      |     Score | Point clé                                                                         |
| --------- | -------------------------------- | --------: | --------------------------------------------------------------------------------- |
| 1         | Visibilité du statut             |       2/4 | Les avis peuvent basculer silencieusement vers un repli.                          |
| 2         | Correspondance au monde réel     |       3/4 | Discours simple, quelques termes encore techniques.                               |
| 3         | Contrôle et liberté              |       3/4 | Plusieurs chemins de contact clairs.                                              |
| 4         | Cohérence et standards           |       3/4 | Ensemble cohérent, libellés d’action un peu fragmentés.                           |
| 5         | Prévention des erreurs           |       3/4 | Le prix annoncé avant intervention rassure, mais zone et distance restent floues. |
| 6         | Reconnaissance plutôt que rappel |       3/4 | Les grands services sont visibles, les cas précis demandent une autre page.       |
| 7         | Flexibilité et efficacité        |       n/a | Landing page de persuasion.                                                       |
| 8         | Esthétique et minimalisme        |       3/4 | Propre et lisible, mais réassurance répétée et longue sur mobile.                 |
| 9         | Diagnostic et récupération       |       2/4 | Peu d’erreurs possibles, mais l’échec des avis reste silencieux.                  |
| 10        | Aide et documentation            |       n/a | Landing page de persuasion.                                                       |
| **Total** |                                  | **22/32** | **Acceptable, proche de Bon**                                                     |

## Verdict de spécificité

Le discours est spécifique à Mon Coin PC, mais la mise en scène reste assez interchangeable. La promesse « Votre PC, réparé. Votre besoin, compris. », la localisation et le prix annoncé avant intervention sont justes. En revanche, le bleu nuit/orange, la tour RGB, les halos et les cartes arrondies évoquent une landing tech générique. La proximité humaine n’est pas encore prouvée visuellement.

Le détecteur automatisé ne relève aucun défaut dans `src/pages/Home.tsx` (0 résultat). L’inspection réelle confirme l’absence de débordement horizontal en 1280×720 et 390×844, une structure de titres cohérente et un focus clavier visible. Elle relève toutefois des cibles tactiles sous 44 px dans les avis, la pagination et le footer. Aucun overlay utilisateur n’a pu être injecté, l’API navigateur disponible étant en lecture seule; les captures et mesures DOM ont servi de preuve de repli.

## Impression générale

La base est sérieuse, lisible et rassurante. La plus grande opportunité est de faire coïncider le visuel avec la vraie force de la marque: une personne locale, accessible et pédagogue, pas seulement un univers PC gaming.

## Ce qui fonctionne

- La promesse principale combine clairement résultat technique et écoute humaine.
- Le risque perçu est bien réduit: prix annoncé avant intervention, interlocuteur unique, processus en trois étapes et avis Google.
- Les fondations responsive et accessibles sont solides: vrais contrôles, focus visible, textes alternatifs, structure de titres et barre de contact mobile pertinente.

## Problèmes prioritaires

### [P1] La preuve visuelle raconte surtout « PC gaming »

**Pourquoi :** un visiteur peu technique peut croire que l’offre vise surtout les passionnés ou les tours fixes.  
**Correction :** montrer une scène authentique de diagnostic, d’échange ou de remise en service, idéalement avec l’intervenant et un contexte local.  
**Commande suggérée :** `$impeccable bolder`.

### [P1] Le concret arrive trop tard

**Pourquoi :** après le hero, les trois valeurs reformulent la promesse alors que le processus et les problèmes pris en charge répondent mieux à l’anxiété immédiate.  
**Correction :** placer les trois étapes juste après le hero, puis 3–4 pannes fréquentes avec prix de départ ou éligibilité à distance; garder valeurs et avis ensuite.  
**Commande suggérée :** `$impeccable layout`.

### [P2] Le hero mobile est trop long et trop concurrentiel

**Pourquoi :** titre, texte, trois catégories, deux CTA et preuves se disputent le premier écran; header et barre fixe réduisent encore la hauteur utile.  
**Correction :** conserver un CTA principal, passer le second en lien, condenser les catégories et réduire les espacements.  
**Commande suggérée :** `$impeccable adapt`.

### [P2] Les attentes opérationnelles restent floues

**Pourquoi :** « alentours » et « rapidement » ne précisent ni rayon réel, ni délai, ni informations à préparer.  
**Correction :** publier seulement des engagements vérifiables: zone ou communes, délai cible réel, et micro-liste « appareil, symptôme, disponibilité ».  
**Commande suggérée :** `$impeccable clarify`.

### [P2] Plusieurs cibles tactiles sont trop petites

**Pourquoi :** flèches 40×40, pastilles jusqu’à 8×8 et liens de 15–20 px de haut sont difficiles à toucher sur mobile.  
**Correction :** porter les zones interactives à au moins 44×44 px sans nécessairement agrandir leur apparence, et renforcer contraste/focus.  
**Commande suggérée :** `$impeccable audit`.

## Signaux d’alerte par persona

- **Jordan, première visite :** comprend la promesse, mais peut hésiter devant « optimisation/upgrade », les pannes couvertes et la suite après le devis.
- **Riley, utilisateur méthodique :** remarquera les formulations imprécises, le repli silencieux des avis et une possible tension entre compteur d’avis affiché et données dynamiques.
- **Casey, mobile et pressé :** profite de la barre de contact, mais subit un hero long et des contrôles d’avis trop petits.
- **Martine, cliente locale peu technique :** veut surtout savoir si quelqu’un peut venir, combien cela coûtera et si elle peut parler à une personne; le téléphone rassure, l’image gaming et l’absence de rayon précis peuvent l’exclure.

## Observations mineures

- « Depuis 2025 » près de « +10 ans d’expérience » est compatible mais peut sembler contradictoire; préférer « Mon Coin PC depuis 2025 · plus de 10 ans d’expérience ».
- Sans avis récupérés, les blocs génériques affaiblissent la preuve sociale.
- Le badge « +10 ans » est petit et dépend du recadrage mobile.
- Le rythme bleu nuit répété reste un peu institutionnel.

## Questions à considérer

- La priorité est-elle d’humaniser l’image, de raccourcir le parcours ou d’améliorer le mobile ?
- Le ton visuel doit-il rester très tech, devenir plus humain/local, ou trouver un équilibre entre les deux ?
- Faut-il traiter uniquement les deux P1, les cinq sujets, ou faire une refonte plus ambitieuse de la première moitié de page ?
