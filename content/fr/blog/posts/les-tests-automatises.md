---
title: >-
  Votre équipe n’a pas le temps de <strong>ne pas</strong> utiliser les tests
  automatisés
description: >-
  Dans le cadre de l’interface de programmation d’applications (API) développée
  avec Ressources naturelles Canada (RNCan), nous suivons un processus commun
  d’intégration continue (IC), qui comprend l’utilisation intensive de tests
  automatisés. À notre avis, les tests d’IC et les tests automatisés constituent
  une condition fondamentale à la production et au maintien de produits
  logiciels de haute qualité.
author: 'Jason White, chef, sciences des données'
date: '2018-03-26 09:00:00 -0400'
image: /img/cds/blog-automated-testing.jpg
image-alt: >-
  Trois personnes sont assises autour d’une table tout en travaillant sur des
  ordinateurs portables. Une personne montre du doigt l’écran de la personne en
  face d’elle qui montre un signe d’accord.
translationKey: automated-testing-blog
thumb: /img/cds/thumbnails/blog-automated-testing.jpg
processed: 1550672962167
---

Dans le cadre de l’interface de programmation d’applications (API) développée avec Ressources naturelles Canada (RNCan), nous suivons un processus commun d’intégration continue (IC), qui comprend l’utilisation intensive de tests automatisés. À notre avis, les tests d’IC et les tests automatisés constituent une condition fondamentale à la production et au maintien de produits logiciels de haute qualité.

Ce processus d’IC est l’un des outils que nous utilisons pour **réduire les risques et gagner du temps** dans nos pratiques de développement de logiciels.

## À quoi ressemble l’intégration continue?

Nos développeurs suivent un processus simple pour apporter des changements à notre base de codage&nbsp;:

* Créer une branche à partir de la branche maîtresse.
* Pousser les petits changements proposés sur cette nouvelle branche.
* Exécuter automatiquement la suite de tests automatisés pour vérifier que la totalité des tests sont réussis.
* Créer une demande de tirage (*pull request*) et demander à ses coéquipiers d’examiner le code.
* Fusionner les changements proposés à la branche maîtresse.
* Exécuter automatiquement de nouveau la suite de tests sur la branche maîtresse.

Cette séquence est une forme d’IC. Elle permet aux développeurs d’effectuer simultanément de multiples changements indépendants au sein d’une équipe, avec une itération rapide.

Elle diffère du modèle plus courant de « branche distincte », où les développeurs travaillent en vases clos dans leur propre branche pendant des semaines ou des mois. Cette tendance entraîne habituellement des fusions difficiles et problématiques à mesure que les échéances approchent.

Nous avons choisi CircleCI pour automatiser nos tests. Il exécute toute notre suite de tests sur chaque poussée (*push*) vers Github. L’exécution de la suite de tests prend environ 2 minutes après la poussée, de sorte que les développeurs obtiennent une rétroaction très rapide et automatisée sur les changements proposés. Il n’est pas permis de fusionner les branches lorsque l’IC a échoué.

<img width="80%" alt="Journaux de sortie qui montrent des tests réussis sur CircleCI" src="/img/cds/nrcan3-img1.png">

Réussite de l’exécution de l’IC

<img width="80%" alt="Journaux de sortie qui montrent trois tests réussis et un test échoué sur CircleCI" src="/img/cds/nrcan3-img2.png">
<img width="80%" alt="Journaux de sortie qui montrent un test échoué" src="/img/cds/nrcan3-img3.png">

Échec de l’exécution de l’IC

La branche maîtresse ne peut jamais demeurer en état de défaillance. Cet état, connu sous le nom de « branche maîtresse cassée » ou de « branche maîtresse rouge », est traité comme une situation urgente qui doit être corrigée immédiatement, d’ordinaire simplement en revenant sur le changement qui l’a compromise.

## C’est bien, mais qu’en est-il du temps et des coûts?

Il a fallu environ 45 minutes pour configurer CircleCI afin d’exécuter une suite de tests existante. La suite de tests prend environ 2 minutes à chaque fois. Le recours à CircleCI dans ce projet nous coûte environ 50 $ par mois (50 $ par mois, et non 50 $ par mois par utilisateur).

Lorsque nous discutons de ces efforts avec d’autres équipes, elles affirment souvent qu’elles aimeraient suivre cette approche, mais qu’elles n’ont pas assez de temps. Nous ne sommes pas d’accord&nbsp;: votre équipe n’a pas le temps de **ne pas** utiliser les tests automatisés. À court terme, c’est peut-être correct (discutable), mais ce n’est certainement pas logique à moyen et à long terme.

Une suite de tests fiable et complète offre de nombreux avantages à long terme&nbsp;:

* Les nouveaux membres de l’équipe ou les membres moins expérimentés peuvent être intégrés rapidement et en toute sécurité.
* Les développeurs sont en mesure de fournir le code rapidement et avec confiance.
* Les étapes de test distinctes sont inutiles, ce qui améliore la vitesse d’itération.

## Attendez, vous n’avez pas de testeurs de logiciels distincts?

C’est exact. L’idée selon laquelle les développeurs ne devraient pas tester leur propre code est franchement dépassée. Des modèles comme le [développement piloté par les tests](https://fr.wikipedia.org/wiki/Test_driven_development) sont des pratiques modernes qui donnent lieu à un code de qualité supérieure et qui sont courantes dans l’industrie aujourd’hui.

Avec cette approche, une fonction de test distincte est contre-productive, car elle externalise la responsabilité de la qualité des codes en dehors de l’équipe de développement. Le repérage des bogues devient le problème de quelqu’un d’autre, et celanne favorise pas le développement de logiciels de bonne qualité. Par conséquent, nous n’avons pas besoin de spécialistes en assurance de la qualité.

## Résultats

La [base de codage de l’API](https://github.com/cds-snc/nrcan_api)est de très grande qualité, et chaque membre de l’équipe peut en être fier. Cette façon de faire nous a permis d’intégrer à l’équipe de nouveaux membres de divers niveaux de compétence, facilement et de façon sécuritaire, et de faire en sorte qu’ils puissent pousser leurs premiers changements un jour ou deux après leur arrivée. Nous pouvons compter sur notre infrastructure de test pour nous assurer que les gens peuvent apporter des changements de façon indépendante et sécuritaire.

Nos coéquipiers sont habilités à essayer de nouvelles approches pour résoudre des problèmes ou réduire la dette technique. Ils ont l’assurance que la suite de tests est là pour rattraper leurs erreurs. S’ils ne comprennent pas une partie de la base de codage, la suite de tests est un excellent point de départ pour voir des exemples de la façon dont le code est conçu pour être utilisé.

Le meilleur résultat est peut-être le plus simple&nbsp;: après l’application de ces pratiques pendant six semaines, aucun membre de l’équipe n’envisagerait de revenir en arrière.

Nous parlerons davantage des aspects techniques de l’API que nous élaborons avec RNCan. Entre-temps, vous pouvez lire nos billets précédents sur ce partenariat&nbsp;:

* [Partie 1 – Effectuer la recherche utilisateur de RNCan: orienter la conception d’une API](https://numerique.canada.ca/2018/02/15/a-la-recherche-utilisateur-avec-rncan/)
* [Partie 2 – Travailler dans les locaux de RNCan pendant une semaine](https://numerique.canada.ca/2018/02/15/b-travailler-dans-les-locaux-de-rncan/)

