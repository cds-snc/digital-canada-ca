---
layout: blog
title: 'Données qualitatives : inconfortables, oui, mais elles valent le coup'
description: >-
  Reconnaissons la valeur des données qualitatives afin de concevoir un service
  facile à comprendre et utile permettant aux membres du public de signaler un
  cybercrime. 
author: 'Lucas Cherkewsi, Politiques'
date: 2019-07-11T16:43:12.022Z
image: /img/cds/rcmp-data-blog.jpg
image-alt: >-
  Photo de six membres de l’équipe collaborant avec la GRC rassemblés autour
  d’une table. Ils sourient et examinent un diagramme de service composé de
  papillons adhésifs de différentes couleurs.
translationKey: data-driven-service
thumb: ''
processed: ''
---
Je suis un grand lecteur. J’adore les livres. Mais j’ai parfois du mal à en choisir un. 

Mon premier réflexe est d’examiner les chiffres : les notes attribuées, le nombre de pages, etc. Mais si ces chiffres m’aident à faire des comparaisons, ils ne m’aident pas à comprendre *pourquoi* un livre a de « meilleurs » chiffres qu’un autre. Je lis donc les critiques. La combinaison des chiffres et des récits m’aide à prendre de meilleures décisions.

Il y a des similarités entre cette situation et la conception de services en ligne. **C’est une tâche ardue qui l’est encore plus lorsqu’on ne dispose pas de données.**

En collaboration avec nos partenaires de la Gendarmerie royale du Canada (GRC), nous sommes en train de concevoir et de mettre à l’essai différents outils [afin d’aider les personnes touchées par la cybercriminalité] (https://numerique.canada.ca/2019/05/06/comprendre-les-besoins-humains-des-personnes-touch%C3%A9es-par-la-cybercriminalit%C3%A9/) à signaler leur expérience auprès de la GRC. Il s’agit de prototypes, soit des « services factices » ayant l’apparence d’un éventuel service de signalement destiné aux victimes.

À la fin de cette phase alpha, nous examinerons les données avec nos partenaires afin de déterminer les aspects qui fonctionnent. Ces données pourraient nous indiquer qu’aucune fonctionnalité ne convient réellement. Si tel est le cas, nous retournerons à la planche à dessin. Il n’y a pas de mal à ça! ([Prise de décisions éclairées par les données] (https://numerique.canada.ca/2019/06/13/%C3%A9laborer-un-cadre-d%C3%A9valuation-pour-la-prestation-des-produits-et-services/), youpi!)

## Ce que nous mesurons

Pour nous aider à déterminer si les fonctionnalités conviennent ou non, nous mesurons deux choses :

1. *Clarté* : Les gens comprennent-ils ce qu’ils peuvent faire avec ce service?
2. *Utilité* : Si l’objectif du service est clair, les gens le trouvent-ils utile? Est-ce qu’il répond à leurs besoins?

Puisque la « clarté » et l’« utilité » sont des concepts difficiles à quantifier, nous avons dû adapter nos méthodes de tests à chaque prototype. Dans les premiers temps, nous nous sommes concentrés sur la collecte de données qualitatives riches. À l’avenir, nous recueillerons également des données quantitatives.

## Pour l’instant : récits qualitatifs

Au début de la phase alpha, nous avons mené des séances d’essai **qualitatives** à petite échelle.

Au cours de ces séances, nous avons rencontré individuellement des victimes existantes et potentielles de cybercriminalité. Pendant qu’elles utilisaient le prototype, nous leur avons posé des questions sur leur expérience.

Notre premier essai a permis aux victimes de signaler un cas présumé de fraude avec peu d’efforts. Ils devaient d’abord saisir un « identificateur » lié à une fraude (une adresse courriel, un numéro de téléphone ou un site Web) dans le prototype. Ils apprenaient alors combien d’autres personnes avaient signalé la même fraude qu’eux.

### Clarté

Pour évaluer qualitativement la « clarté », nous avons mesuré le niveau d’aisance des sujets au fil d’une séquence telle que celle ci-dessus. Les gens arrivaient-ils à expliquer avec exactitude ce que l’outil leur demandait de faire? Nos attentes correspondaient-elles à leur réalité? (C’est une leçon d’humilité lorsque la réponse est non.)

Nous avons donc posé des questions comme :

* (Sur chaque page d’une séquence) *« Pouvez-vous décrire ce que vous voyez? À quoi vous attendez-vous ensuite? »*
* (Après être passé à la page suivante d’une séquence) *« Cela correspond-il à ce que vous vous attendiez à voir? »*
* (Après avoir fini d’utiliser le prototype) *« Pouvez-vous me dire à quoi servait ce site Web? Y avait-il quelque chose sur ce site que vous ne trouviez pas clair ou qui était mélangeant? »*

### Utilité

Une fois qu’un prototype était clair pour les participants, nous avons cherché à savoir si celui-ci était pertinent pour eux. Pour ce faire, nous avons discuté de leurs expériences personnelles liées à la cybercriminalité. Ensuite, nous leur avons demandé si une certaine fonctionnalité les aiderait à combler leurs besoins.

Par exemple, nous avons demandé : *« Avez-vous trouvé cela utile? Pourquoi ou pourquoi pas? »*

## Ce que nous avons découvert jusqu’à présent

Voici un lien vers chacun des prototypes que nous avons utilisés, et ce que nous avons constaté après les avoir testés à quelques reprises :

|Date|Prototype|Clarté|Utilité|
|--- |--- |--- |--- |
|9 avril 2019|Pas de démo ([code](https://github.com/cds-snc/report-a-cybercrime/releases/tag/v0.2.1-alpha))|Faible|s.o (impossible à déterminer en raison du peu de clarté)|
|11 avril 2019|[Démo 1](https://rac-concept-1.herokuapp.com/) ([code](https://github.com/cds-snc/report-a-cybercrime/releases/tag/v0.2.2-alpha))|Moyenne (supérieure à la première version)|Opinion partagée (il y avait quelques réserves là où c’était pertinent)|
|9 mai 2019|[Démo 2](https://rac-concept-2.herokuapp.com/) ([code](https://github.com/cds-snc/report-a-cybercrime/releases/tag/V0.3.1-alpha))|Moyenne (compréhension différente de ce qui est très urgent et peu urgent)|Moyenne à élevée|

Parfois, ce que nous avons présenté aux participants n’était pas clair pour eux. Notamment, **la première fonctionnalité ayant fait l’objet d’un prototype n’était pas claire pour cinq des six personnes ayant participé à nos essais de validation individuels**. Mais ça ne veut pas dire que nous avons échoué. Ça signifie plutôt que nous avons eu l’occasion d’en apprendre beaucoup. Ça signifie également que nous avons eu l’occasion d’améliorer les services dans un environnement dépourvu de risque avant de les dévoiler au public.

Lorsque nous avons mis à l’essai le nouveau prototype, la clarté était plus élevée, ce qui nous a permis d’évaluer l’utilité. Les résultats étaient partagés : si certaines victimes aimaient un processus de signalement qui demande peu d’efforts, d’autres s’attendaient à fournir plus de détails. Tout le monde a aimé le dernier écran, où nous remercions les participants pour leur signalement.

### Inconfortables, oui, mais elles valent le coup

En tant qu’amateur de données structurées, j’ai d’abord eu du mal à m’habituer aux données qualitatives. Mon esprit arrive facilement à saisir le caractère noir sur blanc des chiffres; mais les récits, eux, sont un peu plus nuancés. 

En participant à ces séances approfondies, j’ai constaté les avantages d’inclure une approche qualitative à nos démarches. Même si nos évaluations de la clarté et de l’utilité étaient moins comparables du point de vue quantitatif, nous avons pu expliquer avec assurance le *pourquoi* sous-tendant l’expérience de chacun des participants.

*(Un gros merci à [Mel](https://twitter.com/melbanyard), la chercheuse de notre équipe, qui a mis au point nos activités de recherche, animé les séances et veillé à ce que toute l’équipe participe pour que nous puissions voir par nous-mêmes le fruit de nos efforts.)*

## Prochaine étape : données quantitatives

Bien que notre approche qualitative nous permette de comprendre le pourquoi, elle complique un peu la comparaison directe des prototypes. Et les chiffres compléteraient bien les récits... Il est donc désormais temps de quantifier! *(musique ringarde)*

Au cours des semaines à venir, nous resterons fidèles à notre méthode : commencer petit, clarifier le prototype et effectuer d’autres recherches. Cette fois-ci, nous passerons de tests **qualitatifs à petite échelle** (5 à 10 personnes) à des tests **quantitatifs à grande échelle** (50 à 100 personnes). Cela nous fournira les données nécessaires pour comparer de manière plus certaine l’utilisabilité des différentes fonctionnalités.

Il peut être difficile de concevoir un service qui répond aux besoins des gens. C’est d’autant plus vrai si ceux-ci se trouvent dans une position de vulnérabilité comme celle causée par les contrecoups de la cybercriminalité. Nous pouvons toutefois accroître notre niveau de confiance en combinant des données qualitatives et quantitatives.

Aussi inconfortable qu’elle puisse être au début, cette combinaison en vaut la peine.
