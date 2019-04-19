---
layout: blog
title: Faire confiance aux humains... et aux robots
description: >-
  En utilisant des boucles de rétroaction automatisées, nous créons un
  environnement de confiance qui améliore la qualité des produits que nous
  bâtissons.
author: 'Max Neuvians, développeur'
date: 2019-03-14T13:00:00.000Z
image: /img/cds/grass-lawn-robot.jpg
image-alt: 'Un petit robot en bois se tient debout dans une pelouse verdoyante. '
translationKey: trust-humans-and-robots
thumb: /img/cds/thumbnails/grass-lawn-robot.jpg
processed: 1552576946528
---
Le développement de produits et la prestation de services efficaces ne sont rien sans la confiance. En tant qu’équipe de prestation au SNC, nous parlons souvent à nos partenaires de nous accorder la confiance pour les aider à quitter leurs zones de confort et à essayer de nouvelles approches. 

Mais cela signifie que nous devons mettre en pratique ce que nous prêchons. Si nous demandons la confiance de l’extérieur, il est important de voir sa valeur au sein de notre propre équipe. 

Par conséquent, nous avons établi des processus qui nous aident à établir une confiance à l’égard des uns et des autres ainsi que des [choix](https://numerique.canada.ca/2017/11/06/les-choix-technologiques-du-snc/) que nous faisons pour l’organisation. Ces outils comprennent des outils de rétroaction automatisés qui donnent aux développeurs les renseignements dont ils ont besoin pour prendre des décisions critiques. Tout aussi important, nous examinons le travail de chacun dans un environnement sans reproche. 

## Automatiser les boucles de rétroaction

Nous faisons confiance aux membres de notre équipe pour faire de bons choix en matière d’accessibilité, de sécurité et de convivialité, qui sont fondés sur nos expériences et les données de l’industrie. 

Toutefois, la collecte de suffisamment de renseignements et de contexte sur une décision donnée peut être onéreuse, alors nous croyons qu’une bonne partie de cette collecte peut être automatisée à l’aide de notre processus de développement quotidien.

Voici certains de nos outils de rétroaction automatisés:

* [Notation automatique des dépendances au fur et à mesure qu’elles sont ajoutées aux projets, et alerte les développeurs pour qu’ils vérifient à nouveau tous les progiciels qui pourraient ne pas être de bons choix](https://github.com/cds-snc/dependency-checker/)
* [Calcul continu de la taille des lots dans les applications Web, ce qui aide les développeurs à éviter d’altérer le rendement des applications](https://github.com/cds-snc/bundle-size-tracker/) 
* [Vérifier continuellement si les applications assurent l’anonymisation des adresses IP lorsqu’elles utilisent l’analyse de l’information sur le Web](https://github.com/cds-snc/pii-checker) 
* [Vérification automatique de la conformité en matière de sécurité et d’accessibilité](https://github.com/cds-snc/symmorfosi) 
* [Applications d’examen automatique des branches](https://github.com/cds-snc/elenchos)

Nous utilisons également des outils de l’industrie pour nous aider avec ce qui suit:

* [Intégration continue et déploiement continu](https://numerique.canada.ca/2018/03/26/les-tests-automatises/) 
* [Examen du code](https://numerique.canada.ca/2018/04/24/coder-une-activite-dequipe/) 
* Analyse de la sécurité et tests de pénétration

Notre équipe conçoit des outils internes qui sont **descriptifs plutôt que normatifs** – nous ne disons pas aux développeurs ce qu’ils doivent faire, mais nous leur donnons l’information nécessaire pour naviguer à la croisée des chemins. Cela permet à l’expert de prendre la décision, plutôt que de se fier à une politique générique comme mesure de protection générale. Nous communiquons également ces renseignements au public afin que ces décisions soient transparentes. 

Bien que l’utilisation d’outils automatisés nous aide à maintenir la transparence, le deuxième ingrédient essentiel pour créer un environnement de confiance est de ne pas punir les erreurs.

## Accepter que les humains font des erreurs

Il est rare de trouver un développeur qui n’a jamais mis un site Web hors ligne pendant quelques heures ou introduit un bogue dans le code de production. Mais humilier les développeurs – et plus largement, les gens – pour leurs erreurs conduit à une atmosphère de peur et de dissimulation, qui peut entraver l’engagement de toute équipe en faveur d’une véritable collaboration et d’un travail ouvert.

Ayant travaillé comme développeur unique et principal pendant de nombreuses années dans le secteur privé, j’aurais souvent aimé avoir une deuxième paire d’yeux pour examiner les problèmes qui se posaient. Ce qui m’a incité à me joindre à l’équipe de développement du SNC, c’est son environnement favorable et son approche constructive de la gestion des problèmes.
	
Une grande partie de l’amorce de ce voyage avec une nouvelle équipe consistait à adopter les [« autopsies exemptes de blâme »](https://landing.google.com/sre/sre-book/chapters/postmortem-culture/), une approche qui vise à déterminer les circonstances qui ont contribué à une erreur, sans pointer du doigt un membre de l’équipe.  

En acceptant que des erreurs ont été commises dans le passé et qu’elles continueront de se produire à l’avenir, nous croyons pouvoir en tirer des leçons et nous protéger contre ces futures erreurs. 

Nous croyons également qu’il vaut mieux agir sur un problème connu plutôt que de réagir par embarras à un problème découvert ultérieurement – cela nous permet de rester honnêtes envers nous-mêmes, nos partenaires et les gens que nous servons. 

Cette approche n’écarte pas les pratiques de sécurité solides ni ne dégage les gens de leur responsabilité – elle répartit plutôt cette responsabilité entre de nombreuses épaules et élimine les points de défaillance uniques.

Depuis que nous utilisons ces outils dans le cadre de nos projets, nous avons découvert de nombreux problèmes d’accessibilité et de vulnérabilité, et nous avons pu les régler avant d’expédier nos produits. Le processus n’est pas parfait, mais nous itérons et apprenons toujours avec chaque nouvel outil que nous créons.

Nous ne rêvons peut-être pas de moutons électriques, mais je dors mieux la nuit en sachant que l’information que nous utilisons pour prendre des décisions est publique et à la disposition des développeurs au moment où ils en ont le plus besoin. 

Si vous ou votre équipe souhaitez en savoir davantage sur les outils ou les processus dont il a été question ci-dessus, veuillez communiquer directement avec l’un des auteurs des outils sur [Github](https://github.com/cds-snc) ou [communiquez avec le SNC](https://numerique.canada.ca/notre-equipe/) par l’entremise de votre média préféré.

