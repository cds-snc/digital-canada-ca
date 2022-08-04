---
layout: blog
title: 'Aider les gens à trouver du contenu : comment créer une barre de recherche sur un site Web'
description: >-
  Vous vous rendez sur un nouveau site Web. Vous voulez trouver rapidement des renseignements précis. Vous cherchez l’icône « loupe ». Où est la barre de recherche? Il n’y en a pas… Que faites-vous? Un bon site Web est un site Web qui conjugue navigation aisée et contenu clair, et qui vous permet d’accéder en quelques… [Read more<span class="wb-sl"> of Aider les gens à trouver du contenu : comment créer une barre de recherche sur un site Web</span>](https://articles.alpha.canada.ca/cds-snc/fr/2022/08/04/search-bar-blog/)
author: 'Omar Tehsin, Development'
date: '2022-08-04T10:41:59'
image: https://articles.alpha.canada.ca/uploads/sites/25/2022/08/Canadian_Flag.png
image-alt: FR Flag of Canada
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2022/08/Canadian_Flag-150x150.png
translationKey: search-bar-blog
---
Vous vous rendez sur un nouveau site Web. Vous voulez trouver rapidement des renseignements précis. Vous cherchez l’icône « loupe ». Où est la **barre de recherche**? Il n’y en a pas… Que faites-vous?

Un bon site Web est un site Web qui conjugue navigation aisée et contenu clair, et qui vous permet d’accéder en quelques clics aux renseignements que vous recherchez. Mais que faire si ce contenu n’est pas facile à trouver?

On ne peut pas s’attendre à ce que vous cliquiez sur chaque page, lien ou bouton d’un site Web pour trouver ce que vous recherchez, car cela va à l’encontre de l’une de nos valeurs clés : l’accessibilité.

Quand j’ai rejoint l’équipe du site Web du SNC en tant que développeur, un même problème se présentait fréquemment : le besoin de trouver du contenu spécifique qui soit pertinent à la fois pour l’équipe et pour les utilisateur·rice·s du site. Au départ, le but était de créer une barre de recherche pour la section [« blogue »](https://numerique.canada.ca/blogue/). Puis, nous nous sommes rendu compte qu’une barre de recherche commune à tout le site Web permettrait aux utilisateur·rice·s d’utiliser les mots clés de leur choix pour rechercher n’importe quel contenu, comme des offres d’emploi ou des rapports, pour n’en nommer que quelques-uns.

Nous avons donc commencé à coder la première version de la barre de recherche pour le site Web du SNC.

## **Recherche de solutions**

Notre site Web est construit à l’aide d’un cadre statique appelé [Hugo](https://gohugo.io/commands/hugo_server/). De ce fait, le contenu se trouve au sein du site Web lui-même, ce qui rendait les solutions côté serveur inapplicables.

Nous voulions également nous doter d’une bibliothèque de recherche légère et facile à mettre en œuvre. Après avoir fait quelques recherches et abordé le sujet avec d’autres développeur·euse·s, nous avons restreint nos choix à [Fuse.js](https://fusejs.io/) et [Lunr.js](https://lunrjs.com/). Nous avons finalement opté pour la seconde possibilité en raison d’une fonctionnalité utile appelée l’« indexation par radicaux », sur laquelle je reviendrai un peu plus tard.

## **Mise en place de la fonctionnalité de recherche : notre méthode… qui pourrait être la vôtre**

Voici les étapes que vous pouvez suivre pour mettre en place votre fonctionnalité de recherche :
