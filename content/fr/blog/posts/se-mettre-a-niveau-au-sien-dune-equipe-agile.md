---
title: 'De 0 à 100 km/h : se mettre à niveau au sein d’une équipe agile'
description: >-
  Pour autant que la configuration soit bonne, l’arrivée dans un nouvel
  environnement peut se faire en douceur, sans grande perte de productivité et
  sans causer trop de frictions ni de ralentissements au sein de l’équipe.
author: 'Tim Arney, développeur'
date: '2018-10-16 09:00:00 -0400'
image: /img/cds/blog-up-to-speed.jpg
image-alt: Le tableau de bord d’une voiture avec l’indicateur de vitesse.
translationKey: getting-up-to-speed
thumb: /img/cds/thumbnails/blog-up-to-speed.jpg
processed: 1550672962210
---

Conduire le véhicule de quelqu’un d’autre peut parfois être un peu étrange. Il faut ajuster les rétroviseurs et repositionner les sièges et le volant pour assurer son confort. Ce n’est pas votre voiture, mais vous avez quand même une idée générale de l’endroit où les choses devraient être et de la façon dont elles devraient fonctionner. Il devrait en aller de même lorsqu’on se joint à une nouvelle équipe. Dès le départ, vous devriez être en mesure de comprendre assez rapidement le fonctionnement des choses. Se joindre à une nouvelle équipe ne devrait pas vous faire sentir comme si vous montiez dans un hélicoptère et qu’on vous demandait de le faire voler sans avoir reçu aucune formation. 

Que se passe-t-il si la voiture est déjà en mouvement? C’est un peu ce que l’on ressent lorsqu’on intègre une équipe de produit en cours de route. En tant que nouveau développeur, vous ne pouvez pas vraiment ralentir le véhicule sans voir de nouvelles caractéristiques s’accumuler derrière vous. Il est difficile de se joindre à une équipe pour une vaste gamme de raisons allant de la méconnaissance des rôles des autres à l’ignorance du contexte entourant tel ou tel produit ou les décisions prises jusqu’à présent. À cela s’ajoute la nécessité de se mettre à niveau en général : avec les mots de passe, les appareils, les réunions, la paperasse et toujours plus de paperasse. Ça peut vraiment faire beaucoup. 

Je me souviens d’avoir visité le bureau et d’avoir essayé de retenir tous les noms. [La page de l’équipe](https://numerique.canada.ca/notre-equipe/) s’est révélée pratique, car je pouvais voir avec qui je travaillerais et mettre un visage sur chaque nom. Le SNC étant divisé en équipes de prestation de produits, il y a moins de noms à retenir d’un seul coup, ce qui a également aidé. Les équipes de produits travaillent ensemble; les concepteurs, les chercheurs, les gestionnaires de produit et les développeurs partagent tous un même espace.

Au SNC, nous travaillons de manière ouverte en utilisant des outils modernes comme Trello ou encore Slack pour communiquer. Découvrir que l’équipe travaillait de manière agile et que tout le code source du projet était sur Github était un plus. J’avais déjà travaillé sur et avec du code source libre, de sorte que la validation du code et la fusion des demandes de tirage (ou pull request) se sont faites naturellement. Dans l’ensemble, cette façon de travailler signifiait que je pouvais franchir le seuil et apporter une contribution significative. L’utilisation d’outils, de logiciels et de matériel qui m’étaient familiers m’a sans aucun doute permis de trouver mes marques dans un nouvel environnement. Cela a par ailleurs permis de réduire la période de transition entre mes débuts et le moment de la validation du code.

En tant que développeur, il fallait aussi se familiariser avec la base de codage du projet. J’ai déjà travaillé avec beaucoup de codes personnalisés, parfois rédigés par un développeur qui ne travaillait déjà plus pour l’entreprise. Hériter d’un tel code requiert souvent beaucoup de temps pour comprendre ce qui se passe. Ici, le regroupement de technologies dans lequel j’entrais était [Node.js](https://nodejs.org) et [Express](http://expressjs.com/). [React](https://reactjs.org) et [Razzle JS](https://github.com/jaredpalmer/razzle) avaient été choisis avec des bibliothèques comme [Final Form](https://github.com/final-form/react-final-form) et [React Day picker](http://react-day-picker.js.org). Ce sont toutes des choses que j’avais déjà utilisées ou dont j’avais entendu parler en dehors du SNC. Privilégier les bibliothèques libres comporte de nombreux avantages. Elles sont généralement transférables et peuvent être réutilisées d’un projet à l’autre. Les bibliothèques libres les plus utilisées sont généralement bien documentées, ce qui facilite les choses au début.

Quand j’ai commencé, je savais que je ne comprendrais pas d’entrée de jeu tout le fonctionnement interne du projet, mais je pouvais au moins me mettre au travail. Je voulais m’y mettre dès que possible. Le fait d’entreprendre des tâches aide à accélérer la courbe d’apprentissage plutôt que d’essayer de tout absorber d’un seul coup. La plupart du temps, tant qu’on ne fait rien de concret avec des parties d’un code, il est difficile de vraiment comprendre comment fonctionne la base de codage dans son ensemble. React s’y prête bien en construisant des applications à l’aide de composants. C’est un peu comme assembler des pièces de Lego. Vous pouvez commencer à coder sur une petite partie du système sans avoir à vous soucier du reste de la configuration dans l’immédiat.

Les équipes du SNC travaillent avec agilité et les tâches sont divisées en sprints. Le projet sur lequel je travaillais consistait à mettre les tâches sur un tableau Trello. Comme je suis nouveau, cela m’a été utile, car je pouvais consulter le tableau et voir qui travaillait sur quoi. C’était bien, car je pouvais ainsi avoir une idée approximative de ce qui devait être fait.

À ce moment-là, les choses se sont mises en place assez rapidement. Le produit sur lequel je travaillais était en Alpha à l’époque, mais il évoluait rapidement en fonction des tests effectués auprès d’utilisateurs. Le temps était venu d’agir. 

Ma première tâche consistait à rendre dynamique et entièrement fonctionnel le courriel de confirmation de l’application. Travailler sur cette partie du code était bien, car elle avait une fonctionnalité assez isolée. Il s’agissait d’une tâche structurée dont l’objectif clair était de recevoir les données de l’application, de les formater dans un modèle de courriel et d’envoyer les données. J’ai essentiellement travaillé avec toutes les données produites par l’application sans toucher au code existant à l’exception d’un seul point terminal de l’API. Avec une tâche à exécuter, une idée générale de la façon dont les choses fonctionnaient, et une marche à suivre claire, j’ai été en mesure de faire de solides progrès assez rapidement et j’ai fini par obtenir une fusion de [demande de tirage (pull request)](https://github.com/cds-snc/ircc-rescheduler/pull/171) au bout de quelques jours.

Je pense que cela en dit long sur l’intérêt de travailler avec des processus ouverts et agiles. Pour autant que la configuration soit bonne, l’arrivée dans un nouvel environnement peut se faire en douceur, sans grande perte de productivité et sans causer trop de frictions ni de ralentissements au sein de l’équipe. 

Engagez-vous sur la bretelle d’accès, prenez de la vitesse, et c’est parti! On peut apprendre à piloter l’hélicoptère une fois qu’on comprend mieux à quoi servent toutes les commandes.

