---
layout: blog
title: Mesurer l’impact d’Alerte COVID grâce aux mesures de performance
description: >-
  Pour savoir si le service Alerte COVID fonctionne bien, nous devons comprendre
  s’il fonctionne comme prévu et s’il a un impact sur la pandémie. Il nous faut
  des données pour y arriver. C’est pourquoi nous lançons la collecte de mesures
  de performance (tout en veillant à la protection de vos renseignements
  personnels).
author: >-
  Emily Kuret, directrice – Alerte COVID; Jean-François Gagné et Carole Piovesan
  – Conseil consultatif de l’application de notification d’exposition à la
  COVID-19
date: 2021-02-10T18:01:22.799Z
image: /img/cds/metrics-covid-alert-blog-banner.jpg
image-alt: >-
  Téléphones avec plusieurs regroupements de marques de pointage au-dessus
  d’eux.
translationKey: blog-metrics-app
thumb: /img/cds/thumbnails/metrics-covid-alert-blog-banner.jpg
processed: 1612981734871
---
Le changement est la seule constante, surtout en cas de pandémie. Comme la plupart des gens, j’ai dû m’habituer à un style de vie différent. Alors qu’autrefois je parcourais le Grand Toronto pour écouter des groupes méconnus dans des salles de spectacle insolites, je m’installe maintenant dans mon salon pour lire des romans de Margaret Atwood. Mes samedis sont très différents. 

En ce moment, on ne peut se fier qu’au changement et c’est ce qui oriente notre approche de développement de [l’application Alerte COVID] (https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid.html). Plus nous en apprenons sur le virus et sur la façon dont celui-ci change le quotidien des gens, nous continuons de redéfinir, redessiner et reconcevoir le devenir de l’application. 

Comme pour toute modification apportée au service, nous veillons à ce que l’application respecte toujours les [deux grands principes] (https://numerique.canada.ca/2020/10/02/d%C3%A9velopper-un-service-efficace-de-notification-dexposition-comme-alerte-covid/) qui nous ont guidés tous ces mois : 

1. Le service doit bien fonctionner. 
2. Plus il y a de personnes qui utilisent le service, plus son impact sera grand.

## Comprendre si le service fonctionne bien 

Le service est accessible aux Canadiennes et Canadiens depuis environ six mois. Nous avons atteint un point où, pour prendre des décisions plus importantes, nous devons approfondir ce premier principe. 

Pour comprendre si le service fonctionne bien, il faut déterminer si l’application fonctionne comme prévu au quotidien et si le service dans son ensemble a un impact sur la pandémie. Il nous faut des données pour y arriver. C’est pourquoi nous lançons la collecte de mesures de performance. 

Comme toujours, c’est une question d’équilibre. Pour faire en sorte que l’application soit utilisée par le plus grand nombre de gens possible, et ainsi répondre au deuxième principe, nous devons collecter les mesures de performance tout en veillant à la protection des renseignements personnels et au maintien de la confiance que nous avons déjà établie. 

Il s’avère qu’avec l’aide de collègues, y compris ceux du Commissariat à la protection de la vie privée du Canada et du Conseil consultatif de l’application de notification d’exposition à la COVID-19, nous pouvons y parvenir sans compromis. 

## La collecte de mesures de performance a-t-elle un impact sur la vie privée des gens? 

Nous communiquons régulièrement avec le Conseil consultatif de l’application de notification d’exposition à la COVID-19 pour obtenir des conseils sur la façon de favoriser une application sûre et efficace. Le Conseil est composé de [11 membres] (https://www.ic.gc.ca/eic/site/icgc.nsf/fra/h_07694.html) avec diverses compétences et perspectives, notamment dans les domaines de la santé, de la confidentialité, de la gouvernance des données, de la science et de l’innovation. On compte parmi eux Jean-François Gagné et Carole Piovesan, qui ont contribué au présent billet de blogue.

Ils nous ont aidés à aborder la collecte de mesures dans une optique de protection des renseignements personnels. C’est pourquoi la collecte de ces données se fera de façon agrégée. 

Qu’est-ce que cela signifie? Eh bien, pour collecter des mesures de performance de manière agrégée, nous utilisons la méthode du comptage. Chaque fois qu’une des tâches que nous mesurons est terminée, elle est enregistrée en tant qu’événement. (Par exemple, la sélection d’une province ou d’un territoire est un événement, tout comme la réception d’une notification d’exposition.) Chaque fois qu’un de ces « événements » se produit dans l’application, l’application en informe le serveur, et le serveur enregistre le compte. Une fois par jour, les événements sont additionnés et nous obtenons le total pour ce jour-là. Nous n’obtenons aucune autre information avec cette méthode. Les renseignements précis provenant de l’appareil ne sont ni collectés ni conservés par le serveur. Nous n’avons aucun moyen de savoir d’où viennent les données. En fait, nous ne savons rien d’autre que le nombre d’événements. 

## Quelles mesures de performance l’application collecte-t-elle au juste? 

Pour mieux comprendre **si l’application fonctionne correctement au quotidien**, nous collecterons des mesures qui indiquent combien d’appareils exécutent les tâches qu’une application fonctionnelle devrait réaliser. Ces mesures comprennent notamment le nombre d’appareils qui ont effectué une vérification en arrière-plan chaque jour ou le nombre d’appareils qui ont terminé le processus de configuration.

Ces renseignements nous permettront de mieux orienter le développement de l’application afin de répondre aux besoins des utilisateurs. Ils nous aideront également à repérer les irrégularités et à répondre plus efficacement aux rapports de bogues et aux problèmes.
  
À plus grande échelle, nous voulons aussi comprendre **l’impact d’Alerte COVID sur le ralentissement de la propagation de la COVID-19 au Canada**. Par exemple, nous collecterons dorénavant le nombre d’utilisateurs qui reçoivent une notification d’exposition et qui saisissent une clé à usage unique. Nous saurons ainsi que le service avertit bien les personnes dont le test de dépistage de la COVID-19 est positif et qu’il leur indique les mesures à prendre.

Cette information nous aidera à répondre à des questions plus larges sur l’amélioration du service dans son ensemble, y compris la manière dont les gens reçoivent des clés à usage unique. Nous aurons également une meilleure idée de l’impact de l’application sur la pandémie et des retombées possibles pour la réouverture de l’économie. 

**Pour connaître la liste complète des mesures précises collectées par l’application, consultez la [politique de confidentialité d’Alerte COVID] (https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid/politique-confidentialite.html).**

## Qu’est-ce que cela signifie pour les personnes qui utilisent l’application? 

Même si nous apportons des modifications dans le but d’améliorer l’application et le service dans son ensemble, les utilisateurs ne verront aucune différence dans son fonctionnement. 

## Développeurs et utilisateurs de l’application

Dans notre vie professionnelle, nous jouons le rôle de développeur, de concepteur, de spécialiste des politiques, d’expert en communication, de gestionnaire de produit et bien d’autres. Mais en quittant le bureau, nous devenons tout comme vous des utilisateurs de l’application qui veulent retrouver une vie plus normale, y compris les concerts de groupes méconnus dans des petites salles insolites. Pour y arriver, nous voulons donner à nos proches et à nos communautés les meilleurs outils possibles pour rester en sécurité, tout en protégeant leur vie privée. 

Le lancement des mesures de performance dans l’application n’y change rien. Nous continuerons à défendre les intérêts de tous nos utilisateurs et à protéger la confidentialité et la sécurité des personnes qui choisissent d’utiliser Alerte COVID comme une couche de protection additionnelle pendant la pandémie.

