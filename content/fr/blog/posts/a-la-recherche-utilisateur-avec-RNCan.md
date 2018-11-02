---
title: "La recherche utilisateur avec RNCan: orienter la conception d’une API – Partie 1"
description: "Lorsque Ressources naturelles Canada (RNCan) est venu nous voir avec l’idée d’ouvrir l’accès aux données d’ÉnerGuide, la solution semblait assez évidente : concevoir une interface de programmation d’applications (API) qui permettrait aux utilisateurs d’interroger les données d’ÉnerGuide. Mais d’abord, il fallait valider la solution proposée. "
author: Eman El-Fayomi et Jennifer Fletcher
date: 2018-02-15 09:00:00 -0400
image: /img/cds/blog-conducting-user-research-with-NRCAN.jpg
image-alt: Eman et Jennifer regardent le canevas de proposition de valeur
translationKey: "conducting-user-research-with-NRCan"
---

Lorsque Ressources naturelles Canada (RNCan) est venu nous voir avec l’idée d’ouvrir l’accès aux données d’[ÉnerGuide](https://www.rncan.gc.ca/energie/efficacite/habitations/maisons-ameliorees/5006), la solution semblait assez évidente: concevoir une interface de programmation d’applications (API) qui permettrait aux utilisateurs d’interroger les données d’ÉnerGuide. Mais d’abord, il fallait valider la solution proposée.

## Définir les utilisateurs et leurs besoins 

Pour commencer, nous avons rencontré des représentants de RNCan pour savoir qui sont leurs utilisateurs: des employés fédéraux, provinciaux, territoriaux et municipaux qui gèrent des programmes et des politiques en matière de logement, des universitaires, des chercheurs et des propriétaires.

Une fois les groupes d’utilisateurs définis, il fallait comprendre leurs besoins pour valider la solution API proposée, les fonctionnalités de cette API et le type de données à extraire. Peu importe avec qui nous travaillons, nous devons faire preuve de souplesse quant à la méthode de recherche utilisateur.

Dans cette optique, RNCan nous a fourni une liste de représentants de tous les ordres de gouvernement (fédéral, provincial, territorial et municipal) qui utilisent les données pour élaborer et gérer des programmes et des politiques d’efficacité énergétique. Cette liste d’employés gouvernementaux comprenait ceux qui avaient indiqué à RNCan qu’ils souhaitaient vivement contribuer à la conception de la solution numérique du SNC.

Nous avons mené des entrevues individuelles exhaustives de 30 minutes avec les utilisateurs les plus actifs et une discussion en ligne avec les autres. Les babillards électroniques interactifs ont appuyé les entrevues et les groupes de discussion. Le déroulement des discussions et le modèle de babillard électronique sont tirés du canevas de proposition de valeur.

## Reconfiguration des outils pour répondre aux besoins de notre recherche

Le canevas de proposition de valeur est un outil visuel interactif dont les sections bien définies permettent aux chercheurs d’interagir avec les participants pour conceptualiser et échanger facilement leurs idées sur les priorités à retenir. Le canevas de départ est axé sur deux volets, la proposition de valeur et le segment d’utilisateurs, de manière à les décrire en détail. Utiliser le canevas aide à projeter, tester et élaborer la proposition de valeur du service pour les principaux utilisateurs de façon structurée et réfléchie afin de résoudre les problèmes, de surmonter les difficultés et de répondre aux besoins prioritaires.

<a class="large-link" href="https://www.dropbox.com/sh/aaho502dkfc713i/AACUZzgHUlpp88kj25ABMH8Ca?dl=0">Format téléchargeable et imprimable disponible sur Dropbox.</a>

<img alt="Le canevas de proposition de valeur a été utilisé pendant les entrevues." src="/img/cds/blog-valprop.svg">

Nous avons reconfiguré l’outil pour y inclure davantage de sections, ce qui a permis de poser des questions détaillées sur les utilisateurs et leurs besoins actuels et futurs en ce qui a trait aux données extraites du ÉnerGuide. Après chaque entrevue, et une fois le babillard électronique rempli, nous avons pris le temps de réfléchir aux moyens d’adapter notre démarche en conséquence. Afin de mobiliser un plus grand nombre d’utilisateurs, nous avons maintenu les babillards interactifs ouverts aux participants pendant une semaine après la fin de leur séance afin qu’ils puissent continuer à échanger des idées.

Le développeur principal a également participé à l’ensemble du processus de recherche, y compris à certaines séances interactives, afin de maintenir le cap et de continuer de faire la collecte d’information pertinente et utile à la conception de l’API.

## Ce que nous avons appris

La recherche utilisateur a révélé que les utilisateurs veulent interroger les données par région géographique, en fonction d’un élément ou de l’ensemble des éléments d’un logement, saisis dans [HOT2000](https://www.rncan.gc.ca/energie/efficacite/habitations/maisons-ameliorees/17726) (logiciel utilisé pour générer la cote ÉnerGuide et le rapport d’évaluation).

Les utilisateurs veulent de la marge de manœuvre et un contrôle sur les données pour confirmer ou réfuter les hypothèses, comparer, suivre et déterminer les tendances en matière d’efficacité énergétique au fil du temps. L’accès à l’ensemble complet de données d’ÉnerGuide combiné à un service d’interrogation flexible répondrait à ce besoin. Nous avions notre réponse: la conception d’une API pour rendre accessibles les données d’ÉnerGuide était le premier pas dans la bonne direction.

## Conception de l’API

Actuellement, l’approche privilégiée pour la conception de l’API dépasse la simple consultation directe de la base de données d’ÉnerGuide suivie de la communication des résultats à l’utilisateur de l’API. Nous voulons une API plus autonome, qui permettrait une plus grande souplesse dans le cas où la base de données ÉnerGuide devait être hors service lors d’une mise à jour, ou pour une migration future vers une autre base de données.

Nous avons proposé une solution infonuagique sécurisée qui permettrait d’extraire des données de la base de données ÉnerGuide, de transformer les données en un format compatible avec l’API et de les charger dans une autre base de données à partir de laquelle l’API pourrait en faire l’extraction.

L’équipe de développement travaille d’arrache-pied à la conception de cette API. Une partie de ce travail a consisté à travailler côte à côte avec l’équipe de RNCan. Lisez la [Partie 2: Travailler dans les locaux de RNCan pendant une semaine](/2018/02/15/b-travailler-dans-les-locaux-de-rncan/)pour en savoir davantage sur l’expérience de la co-location. Et gardez l’œil ouvert pour la Partie 3, qui portera sur l’aspect technique.
