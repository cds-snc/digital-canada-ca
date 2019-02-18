---
title: "Un service qui fonctionne mieux pour tout le monde\_: supporter plus d’utilisateurs au moyen de la dégradation progressive dans React"
description: "Utiliser les technologies modernes peut rendre le développement plus rapide, mais, ultimement, nous devons livrer des solutions fonctionnelles sans sacrifier la robustesse et l’accessibilité. Nous avons créé le service pour «\_reporter un examen de citoyenneté\_» de sorte à repousser les limites de la prestation de services sans toutefois laisser les utilisateurs au dépourvu."
author: 'Paul Craig, développeur'
date: '2018-08-08 09:00:00 -0400'
image: /img/cds/blog/blog-noJS.jpg
image-alt: >-
  Une personne en train de naviguer à travers une gamme d’appareils
  électroniques, y compris un téléphone à cadran, un téléphone à clapet, un
  ordinateur portable et une tour d’ordinateur de bureau.
translationKey: supporting-users-gracefully-degrading-react
thumb: /img/cds/blog/thumb/blog-noJS.jpg
processed: 1550507384694
---

Utiliser les technologies modernes peut rendre le développement plus rapide, mais, ultimement, nous devons livrer des solutions fonctionnelles sans sacrifier la robustesse et l’accessibilité. Nous avons créé le service pour « [reporter un examen de citoyenneté](https://vancouver.rescheduler-dev.cds-snc.ca/?language=fr) » de sorte à repousser les limites de la prestation de services sans toutefois laisser les utilisateurs au dépourvu.

## Un service robuste au bénéfice de tous les utilisateurs

Vu l’abondance d’appareils connectés à Internet, il est impossible de prédire l’ensemble complet de navigateurs qui seront utilisés pour consulter votre site Web. Dans beaucoup de cas, cette réalité entraîne la création d’interactions qui fonctionnent pour certaines personnes et qui ne fonctionnent pas pour d’autres – un résultat inadéquat pour un service gouvernemental.

L’amélioration progressive et la dégradation progressive sont des approches qui peuvent être utilisées afin de concevoir un service qui priorise l’inclusion. Il s’agit de différents chemins menant à la même destination : concevoir des services en ligne extrêmement robustes qui fonctionnent sur le plus grand nombre d’appareils possible. Dans les deux cas, le but est de créer un service que tout le monde peut utiliser : les appareils plus sophistiqués offrent une meilleure expérience, alors que les appareils moins sophistiqués présentent une interface plus élémentaire.

**L’amélioration progressive** consiste à commencer avec une expérience de base et de l’améliorer par la suite.

**La dégradation progressive** consiste à développer l’expérience améliorée dès le départ, après quoi le comportements erronés seront corrigés au besoin.

Lorsqu’il est question de concevoir un service gouvernemental, les fonctionnaires ont la responsabilité de s’assurer à ce que ce service soit accessible à ceux qui en ont le plus besoin. C’est pourquoi l’amélioration progressive est le principe généralement suivi par les agences de services numériques gouvernementales au [Royaume-Uni](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) et en [Nouvelle-Zélande](https://www.digital.govt.nz/standards-and-guidance/design-and-ux/browser-and-device-testing/) à titre d’exemples. Comme l’a [dit](https://www.youtube.com/watch?v=CUkMCQR4TpY&feature=youtu.be&t=523) la brillante Alice Bartlett dans sa conférence intitulée « Burn your select tags » : [Traduction] « Nous devons répondre aux besoins d’un pays dans son ensemble interagissant en ligne avec son gouvernement ». Elle inclut les personnes qui peuvent seulement accéder à Internet depuis une bibliothèque, les utilisateurs [qui ont peu confiance en leur maîtrise de la technologie](https://www.youtube.com/watch?v=CUkMCQR4TpY&feature=youtu.be&t=523) ainsi que les personnes qui dépendent d’un lecteur d’écran ou d’une autre technologie d’assistance. [Il ne s’agit pas ici de cas extrêmes](https://twitter.com/kyliehavelock/status/1023932609561341952) : nos services doivent fonctionner pour tout le monde, ce pour quoi nous avons créé un service pour prendre un nouveau rendez-vous d’examen de citoyenneté fondé sur une approche de dégradation progressive.

## Le compromis dans la conception de sites en utilisant des technologies modernes

Bien que l’utilisation des outils modernes et des nouvelles syntaxes puisse grandement améliorer l’expérience des développeurs Web, il en résulte souvent des sites moins robustes pour les utilisateurs, puisque ces sites ne fonctionnent pas correctement sur les appareils plus anciens.

Quand nous avons commencé à développer le service, nous avons décidé de nous servir de [React](https://reactjs.org/), une bibliothèque JavaScript moderne qui est [extrêmement populaire auprès des développeurs Web](https://insights.stackoverflow.com/survey/2018/#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-tools). React offre plusieurs avantages : elle garde les codes similaires ensemble, elle réduit le besoin d’apprendre de multiples langages informatiques et elle possède un vibrant écosystème de bibliothèques et de tutoriels de sources ouvertes. Cependant, utiliser React pour concevoir un service en procédant à une dégradation progressive ne fut pas chose simple. Néanmoins, nous étions déterminés à desservir le plus grand nombre d’appareils possibles, ce qui implique de supporter les utilisateurs qui n’ont pas JavaScript.

## Les avantages de concevoir pour des utilisateurs sans JavaScript

Utiliser JavaScript pour concevoir un service qui fonctionne sans JavaScript n’était pas le problème le plus facile à régler. C’est pourquoi nous ne l’avons pas abordé au départ.

Avant même que nous ayons de véritables utilisateurs, nous avons priorisé afin de développer le service rapidement, de le tester et de l’améliorer. Dans les premiers stades de développement, alors que le code base était encore assez volatile, il aurait été encore trop tôt pour essayer de tout régler. Comme aimait bien le rappeler [Jason White, l’ancien chef de la gestion des données](https://github.com/cds-snc/digital-canada-ca/commit/cd835e4c730bf247a5a85b323c63b9d5defb378d#diff-cae0f3940920ef2bda0b377bf60f9650L20-L27) : [Traduction] « l’optimisation prématurée est [source de tous les maux](http://wiki.c2.com/?PrematureOptimization) ». 

Nous avons commencé le développement dans [un environnement de développement basé sur React](https://github.com/jaredpalmer/after.js/blob/master/README.md) qui envoie le code HTML en premier puis exécute ensuite le code JavaScript sur l’appareil de l’utilisateur, lorsque possible. Il s’agit ici d’une amélioration assez directe : les utilisateurs accèdent au contenu du site même si le code JavaScript ne s’exécute pas.

Une fois que nous avons eu une image claire de ce dont le service aurait l’air, nous avons priorisé l’apport de corrections afin de pouvoir supporter les clients plus anciens, ce qui a également amélioré le service pour le reste des utilisateurs.

Prendre une approche de dégradation progressive signifie que notre service est compatible avec les appareils qui ne peuvent pas exécuter JavaScript, les appareils connectés se trouvant sur des réseaux instables ainsi que les appareils plus anciens qui ne peuvent pas lire les nouvelles syntaxes JavaScript. Les utilisateurs appartenant à ce dernier groupe (de loin le plus grand) sont en mesure de télécharger notre code, sans toutefois pouvoir l’exécuter. C’est un peu comme si on essayait de forcer un lecteur VHS à lire un DVD. Maintenant, tous ces utilisateurs sont en mesure d’utiliser l’ensemble du service, sans doute sans même se rendre compte qu’il y avait un problème.

Grâce à la dégradation progressive:
* les utilisateurs peuvent charger le site dans une ou l’autre des langues officielles;
* les utilisateurs ne perdent pas les renseignements enregistrés lorsqu’ils rechargent la page;
* la langue de préférence des utilisateurs ne se réinitialise pas s’ils quittent * le site et reviennent plus tard;
* les utilisateurs sans JavaScript peuvent toujours reporter leurs rendez-vous;
* les utilisateurs dont l’appareil n’arrive pas à exécuter le code peuvent aussi reporter leurs rendez-vous;
* le site se charge plus vite pour tout le monde.

Pour ceux qui s’intéressent aux détails techniques, nous rédigeons une publication supplémentaire qui explique comment ça fonctionne. Le point important à retenir pour l’instant est que l’approche de **dégradation progressive a rendu ce service meilleur**. Il fonctionne pour les utilisateurs avec des pare-feu restrictifs. Il est compatible avec la technologie d’assistance qui s’attend à trouver le contenu au moment où la page se charge. Il fonctionne même sur des appareils qui ne sont pas supportés explicitement : par exemple, [je peux parvenir à reporter un rendez-vous d’examen de citoyenneté par l’entremise de ma Nintendo 3DS](https://twitter.com/HillaryLorimer/status/1019322192440451073).

## Le meilleur des deux mondes

Beaucoup d’équipes de services gouvernementaux sentent qu’elles doivent choisir entre utiliser une pile Web moderne ou supporter les navigateurs plus anciens. Toutefois, il s’agit souvent d’une fausse dichotomie. [Nous avons choisi d’utiliser React sans abandonner les utilisateurs qui n’ont pas JavaScript](https://twitter.com/CDS_GC/status/1022142454634438661). La majorité des utilisateurs ont accès à une expérience raffinée et une minorité a toujours un service fonctionnel. Plutôt que de nous contenter d’un compromis, nous sommes parvenus à profiter des deux approches.

Certes, notre solution n’est pas une panacée : tous les produits ne sont pas ce produit. Il s’agit cependant d’un énoncé de principe, et nous sommes extrêmement fiers [du dur travail que nous avons accompli pour tout rendre simple](https://www.gov.uk/guidance/government-design-principles#do-the-hard-work-to-make-it-simple). Notre service résout un problème important pour nos utilisateurs. Il est simple à utiliser et il fonctionne sur votre Game Boy.



