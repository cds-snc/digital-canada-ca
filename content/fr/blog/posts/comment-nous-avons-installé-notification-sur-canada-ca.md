---
layout: blog
title: Comment nous avons installé Notification sur Canada.ca
description: ' L’équipe de Service Canada explique comment elle a implanté Notification sur Canada.ca pour envoyer des réponses automatiques aux utilisateurs de son formulaire de questions et commentaires.'
author: 'Kelly Galbraith et Pierre Dubois, Service Canada'
date: 2020-03-05T15:49:02.842Z
image: https://de2an9clyit2x.cloudfront.net/blog_service_canada_notify_227a13a007.jpg
image-alt: ' Montgolfière aux couleurs arc-en-ciel dans le ciel.'
translationKey: blog-service-canada-notify
thumb: https://de2an9clyit2x.cloudfront.net/small_blog_service_canada_notify_227a13a007.jpg
---
[Canada.ca](https://www.canada.ca/fr.html), le site Web centralisé du gouvernement du Canada, utilise maintenant Notification pour envoyer des courriels de réponse automatique aux personnes ayant utilisé son [formulaire de questions et commentaires](https://www.canada.ca/fr/contact/questions.html). Ces notifications leur confirment que leur formulaire a été soumis avec succès à un domaine Canada.ca de confiance.

Nous rallier au mouvement de Notification est une étape importante pour nous en raison du volume élevé de visiteurs que Canada.ca observe chaque jour. L’adoption de Notification aide non seulement la population canadienne, mais elle facilite aussi la tâche de nos développeurs et développeuses ici, chez l’Éditeur principal de Service Canada, l’équipe responsable de la gestion des Services Web gérés (SWG) de Canada.ca. Ces services comprennent le gestionnaire de contenu utilisé pour publier, ainsi que l’infrastructure qui fournit Canada.ca et en assure la protection.

Nous avons discuté avec notre équipe de développement pour connaître leurs premières impressions sur Notification et sur la façon dont s’est déroulée sa mise en œuvre.

## Avantages d’utiliser Notification pour les développeurs et développeuses

L’équipe a énuméré de nombreux avantages du service, notamment :

* Ne pas avoir à développer et à maintenir un gabarit de courriel. C’est déjà fait.
* Une version logicielle n’est pas requise pour modifier le contenu (par exemple, pour corriger une faute de frappe ou ajouter une note). L’opérateur ou l’opératrice de Notification peut rapidement apporter les modifications nécessaires.
* L’implémentation du service est similaire à celle de toute autre bibliothèque SMTP (Simple Mail Transfer Protocol). Bref, c’est assez simple.
* Le développeur ou la développeuse décide quel gabarit est utilisé et à qui la notification est envoyée. Par exemple, les données d’un formulaire en ligne peuvent être envoyées à un service interne pour que des mesures conséquentes soient prises, puis être utilisées pour envoyer un courriel de confirmation à l’utilisateur. Ce processus nécessiterait une configuration si nous utilisions notre propre bibliothèque SMTP.

## Avantages d’utiliser Notification pour le gouvernement du Canada

L’utilisation de Notification présente d’autres avantages plus généraux. Comme l’un de nos développeurs l’a fait remarquer, Notification a « un grand potentiel de devenir le système de gestion centralisé de tous les supports de communication (courriel, textos, etc.) envoyés aux clients par un service, un programme, un ministère, etc. ».

Notification répond au besoin commun des ministères fédéraux d’envoyer des notifications électroniques en temps voulu et à moindre coût. En répondant à ce besoin, ce système peut également servir d’outil commun pour tout le gouvernement du Canada (GC). Il permettrait d’une part d’économiser l’argent des contribuables et de l’autre, de créer plus de cohérence dans la façon dont nous communiquons avec les Canadiens et les Canadiennes, qui sauront désormais que leurs commentaires ont été reçus et seront traités.

## Intégration de Notification

L’intégration de l’interface de programmation d’application (API) Notification a été simple. Comme pour toute installation, nous avons effectué quelques ajustements mineurs pour nous assurer que tout fonctionnait comme prévu. Nous avons fait en sorte qu’il existe deux requêtes de l’API Notification, afin que nous puissions envoyer des messages à la fois à un destinataire interne (ministère du GC) et à un client externe à l’aide des données d’un formulaire en ligne. L’équipe de Notification s’est montrée très utile pour répondre à nos besoins spécifiques pendant l’implémentation.

## Collaborer avec le SNC

C’était fantastique de travailler avec l’équipe du SNC. Elle a été réceptive, a pris le temps d’écouter nos besoins et a répondu à toutes nos questions. De plus, elle accueille favorablement toute idée d’amélioration afin d’offrir le meilleur service possible. En ce moment, nous utilisons Notification principalement pour envoyer les données des formulaires Web au groupe interne concerné et pour envoyer des courriels de confirmation aux utilisateurs.

Pour l’instant, nous nous concentrons sur quelques formulaires Web importants. Cela nous donne le temps de développer un nouveau composant SWG qui pourra aider les auteurs Web des ministères à intégrer Notification lors de la création de leurs formulaires Web.

Nous pouvons concevoir un avenir proche dans lequel tous les secteurs d’activité utilisent Notification pour gérer de façon centralisée les documents de communication envoyés à la population canadienne.

