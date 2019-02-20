---
title: 'Sortir les prototypes&nbsp;:&nbsp;l’application de breffage électronique'
description: >-
  Obtenir la rétroaction directe des utilisateurs est la meilleure façon
  d’améliorer un produit numérique. Pour nous faire la main, avant notre
  lancement officiel, nous voulions entreprendre un projet qui illustrerait «
  l’art du possible » avec des outils numériques modernes.
author: Dave Samojlenko et Sean Boots
date: '2018-01-29 09:00:00 -0400'
image: /img/cds/blog-ebriefing-2018.jpg
image-alt: >-
  La première équipe de prestation du SNC en train de finaliser et de tester la
  première version de l'application de breffage électronique.
translationKey: getting-prototypes-out-the-door
thumb: /img/cds/thumbnails/blog-ebriefing-2018.jpg
processed: 1550672962220
---

Obtenir la rétroaction directe des utilisateurs est la meilleure façon d’améliorer un produit numérique. Toutes les activités comme les réunions stratégiques, la planification et la définition des exigences qui constituent les étapes typiques du développement d’un logiciel au gouvernement ne font pas le poids comparativement au véritable [test du produit par ses utilisateurs](https://medium.com/code-for-america/what-healthcare-gov-has-to-do-with-the-hawaii-false-alarm-and-what-to-do-about-it-445cb2b7af82).

Quelques mois avant le [lancement officiel](https://numerique.canada.ca/2017/07/18/lancement-du-service-numerique-canadien/) du Service numérique canadien (SNC), nous avons mis sur pied notre première équipe de prestation – un groupe de concepteurs d’expérience utilisateur, de développeurs et de chercheurs qui pouvait encore occuper une petite salle de réunion. Pour nous faire la main, nous voulions entreprendre un projet qui illustrerait «&nbsp;l’art du possible&nbsp;» avec des outils numériques modernes. À ce moment-là, nous n’étions pas encore en mesure de travailler en partenariat avec des ministères (l’objet principal de notre travail actuel), c’est pourquoi nous avons développé un produit répondant à un besoin interne&nbsp;:&nbsp;la production des cahiers de breffage qu’utilisent les délégations gouvernementales à l’étranger.

## Améliorer le cahier de breffage 

La préparation des cahiers de breffage est un art en soi au gouvernement, et un candidat idéal à une approche numérique. Dans les semaines précédant des voyages à l’étranger, l’équipe de coordination de la Direction générale des politiques stratégiques de notre ministère prépare les ordres du jour des réunions, les biographies des homologues étrangers et d’autres documents d’appui. Ils sont imprimés, perforés et assemblés manuellement dans de gros cartables à l’intérieur de délais serrés. Les changements d’horaire de dernière minute exigent une réorganisation des documents papier à un rythme effréné. 

Une délégation de notre ministère devait [se rendre au R.-U.](https://gds.blog.gov.uk/2017/12/14/gds-academy-sharing-with-other-governments/) ce qui nous donnait une occasion en or de tester ce que nous pourrions accomplir. [Yeremia](https://www.linkedin.com/in/yeremia-djaja-325b30a4/), notre principal développeur spécialiste du *front-end*, a appris à développer des applications iPad (à l’aide de HTML/CSS et Cordova) en un seul après-midi. Quatre jours plus tard, nous avions un prototype fonctionnel dans lequel les documents d’information nécessaires au voyage au R.-U. avaient été préchargés. 

## Développer, apprendre, itérer

L’équipe de la délégation était impatiente de tester [l’application de breffage électronique](https://github.com/cds-snc/e-briefing-app) et, après avoir constaté à quel point l’application fonctionnait bien, notre sous-ministre a décidé de laisser son traditionnel cartable papier à son bureau.

À leur retour, les membres de la délégation nous ont donné beaucoup de rétroaction sur ce que pourraient inclure les prochaines versions de l’application. En tête des priorités figurait la capacité de mettre le contenu à jour à distance, comme les horaires des réunions et les ordres du jour modifiés – notre première version se contentait de coder en dur le contenu dans l’application elle-même. L’autre demande principale concernait la possibilité d’ajouter des outils d’annotation permettant de prendre des notes à même les documents d’information.

Pendant l’été, en marge d’autres projets, notre équipe a développé la «&nbsp;version&nbsp;2&nbsp;» de l’application de breffage électronique, qui est devenue une simple interface de gestion de contenu en ligne (développée [à l’aide de Laravel](https://numerique.canada.ca/2017/11/06/les-choix-technologiques-du-snc/)), et une application mise à jour (développée à l’aide d’Ionic) qui permet d’apporter des changements de contenu à distance. Ainsi, l’équipe de coordination internationale (et d’autres équipes ministérielles partenaires) à faire des mises à jour pendant les déplacements de la délégation et à synchroniser automatiquement le contenu.

Depuis, l’application et l’interface de mise à jour du contenu ont été utilisées par plusieurs délégations internationales ici au Secrétariat du Conseil du Trésor, y compris pour les voyages à l’Assemblée générale des Nations Unies à New York, au Sommet des Amériques du Partenariat pour un gouvernement ouvert en Argentine et à plusieurs autres conférences internationales. Nos collègues de Transports Canada et du Bureau du Conseil privé ont aussi utilisé l’application, et nous en avons fait la démonstration au Comité des sous-ministres sur l'innovation en matière de politiques comme solution pour remplacer les processus papier dans leurs ministères. Les processus liés aux cahiers de breffage papier sont un problème épineux pour un grand nombre de fonctionnaires, et nous sommes très enthousiastes à l’idée du nombre d’arbres qui pourraient être épargnés à mesure que l’application de breffage électronique gagne en popularité!

## Étapes suivantes?

Conformément à l’engagement du SNC à utiliser du code libre, [l’application de breffage électronique pour iOS](https://github.com/cds-snc/e-briefing-app) et le [logiciel de gestion de contenu](https://github.com/cds-snc/e-briefing-service) sont disponibles dans notre référentiel Github. Comme notre [travail d’exécution de projets](https://numerique.canada.ca/2017/08/24/choisir-nos-projets/) a pris de l’ampleur, il nous est devenu impossible de poursuivre le développement à l’interne. Nous avons voulu partager notre solution avec la collectivité et inviter d’autres utilisateurs à en faire l’essai.

Quelques mises en garde importantes&nbsp;:&nbsp;l’application iOS ainsi que le logiciel de gestion sont des produits minimums viables (PMV). Ils ne répondent pas à nos normes internes pour les services que nous produisons avec les ministères et il reste encore beaucoup de travail à faire pour les amener jusqu’à ce niveau. Dans l’immédiat, les prochaines étapes seraient le soutien multilingue, d’autres améliorations relatives à l’accessibilité et l’amélioration de certaines fonctions comme la prise de notes. Le déploiement d’un système en mesure de gérer des données protégées ajouterait une couche additionnelle de complexité. Il peut être particulièrement difficile de configurer et de déployer des application iOS étant donné qu’elles exigent un ordinateur Mac exécutant Xcode et une licence de développeur Apple. Les prochaines versions déployées par l’entremise de la boutique d’applications iOS seront plus faciles à tenir et à mettre à jour.

Grâce au développement de l’application de breffage électronique, nous avons pu tester nos capacités, soit celles de travailler ensemble et de développer des applications, dès le départ. Le développement d’une solution imparfaite, mais fonctionnelle, et sa livraison à nos utilisateurs – les délégations ministérielles et l’équipe de coordination des voyages – nous ont donné une formidable occasion de découvrir comment améliorer notre capacité de développement. Le fait de mettre le fruit de notre travail à la disposition du public fait partie de cet engagement. Pour reprendre les mots de notre collègue [Jason](https://twitter.com/Actinolite)&nbsp;:&nbsp;«&nbsp;si vous avez attendu de ne plus avoir de réserves avant de lancer quelque chose, vous avez attendu trop longtemps&nbsp;». Nous serions ravis de connaître vos réactions, et si vous téléchargez et utilisez l’application de breffage électronique, nous aimerions [recevoir vos commentaires](mailto:cds-snc@tbs-sct.gc.ca).  

