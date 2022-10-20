---
layout: blog
title: >-
  Répondre aux besoins des autorités sanitaires pour déployer Alerte COVID
  partout au Canada
description: >-
  Ce billet de blogue explique comment la conception de services est appliquée à
  Alerte COVID de sorte que l’application fonctionne pour différentes autorités
  sanitaires provinciales et territoriales tout en répondant à leurs besoins et
  à ceux de leurs patients.
author: ' Brian Hendrick, Conception des services'
date: 2020-09-03T13:39:00.473Z
image: https://de2an9clyit2x.cloudfront.net/app_portal_blog_banner_dddd52ec15.jpg
image-alt: >-
  Illustration d’une carte du Canada avec des patients et des travailleurs de la
  santé dans diverses provinces et territoires.
translationKey: healthcare-portal-service-design
thumb: https://de2an9clyit2x.cloudfront.net/small_app_portal_blog_banner_dddd52ec15.jpg
---
[Alerte COVID](https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid.html), l’application gratuite de notification d’exposition à la COVID-19 du gouvernement du Canada, a été téléchargée par plus de 2 millions de personnes. Bien que l’application elle-même soit le point de contact avec le public, il se passe des choses en coulisses sans quoi elle ne fonctionnerait pas.

L’une de ces choses est la génération d’un code alphanumérique chiffré appelé « clé à usage unique ». Les travailleurs de la santé distribuent ces clés à usage unique aux personnes déclarées positives à la COVID-19, et les clés peuvent être saisies dans l’application pour aviser les autres d’une exposition potentielle. [(Vous pouvez en savoir plus sur le fonctionnement de l’application publique dans ce billet de blogue.)](https://numerique.canada.ca/2020/07/31/amélioration-continue-dalerte-covid/)

Ces clés sont nouvelles pour les systèmes de soins de santé canadiens. Notre défi consistait donc à trouver un moyen de les générer afin qu’elles puissent fonctionner auprès des différentes autorités sanitaires provinciales et territoriales, et auprès des personnes qui les recevraient puis les saisiraient dans l’application. Étant donné que chaque système de soins de santé au Canada fonctionne légèrement différemment, nous voulions trouver des options souples qui permettraient aux travailleurs de la santé provinciaux et territoriaux de choisir une solution qui répond à leurs propres besoins.

## API ou portail?

Il y a deux façons de générer la clé à usage unique tout en tenant compte des limites du cadriciel de notification d’exposition élaboré pour les téléphones Apple et Google : soit en extrayant les clés directement du serveur par l’intermédiaire d’une interface de programmation d’applications (API), soit à l’aide d’un portail Web qui génère les clés et qui est conçu et construit par le Service numérique canadien (SNC).

Les options de l’API ou du portail existent de façon à s’intégrer à des flux de travail existants. Les provinces et les territoires ont la possibilité de choisir celle qui convient le mieux à leurs besoins.

Par exemple, certaines régions permettent aux patients de vérifier par eux-mêmes, en ligne, leur résultat au test pour la COVID-19. Dans ces cas, l’API fonctionnerait, car elle permet de générer une clé directement à partir des systèmes en ligne existants.

![Capture d’écran de la clé à usage unique alphanumérique à 10 caractères « XXA 228 AYYF » suivie des instructions sur la façon de la lire : « Pour lire la clé de façon phonétique : X comme xylophone. X comme xylophone. A comme animal. Deux. Deux. Huit. A comme animal. Y comme yoga. Y comme yoga. F comme famille. »](https://de2an9clyit2x.cloudfront.net/app_portal_blog_1_fr_53fc40f944.jpg)

D’autres régions dépendent du fait que les travailleurs de la santé appellent les patients par téléphone pour communiquer les résultats des tests. Ainsi, l’idéal serait de leur permettre de générer une clé au nom du patient et de la lire par téléphone. Ce serait possible en intégrant l’API directement à leur système existant ou en intégrant le portail à leur flux de travail existant.

Mais les solutions de l’API et du portail ne constituent pas un choix binaire. Elles visent à **permettre aux travailleurs de la santé des provinces et des territoires d’utiliser l’option qui répondra le mieux à leurs besoins et à ceux des patients qu’ils servent**.

L’Ontario, par exemple, a un modèle libre-service qui fait appel à l’API mais aussi au portail, de sorte qu’il est possible de fournir des clés à usage unique aux personnes qui n’ont peut-être pas accès au système libre-service ou confiance en ce dernier.

Les approches diffèrent d’un bout à l’autre du Canada. Terre-Neuve-et-Labrador utilise le portail pour le déploiement initial de l’application, pendant qu’elle met en place l’API pour l’utiliser plus tard. Mais une autre province pourrait décider d’intégrer l’API directement dans ses systèmes ou d’utiliser le portail uniquement.

## Réduire le fardeau pour les travailleurs de la santé

Nous avons conçu le portail en ayant la simplicité à l’esprit, afin que ce nouvel outil représente un fardeau minimal pour les travailleurs de la santé et puisse s’intégrer à leurs flux de travail existants. Pour ce faire, nous nous sommes tournés vers les pratiques exemplaires, la recherche utilisateur et les analyses comportementales.

### Pratiques exemplaires

Pendant que nous préparions le lancement initial du portail, nous avons déterminé que nous aurions besoin des éléments de base suivants :

* création d’un compte
* données de connexion avec authentification à deux facteurs
* génération de clés à usage unique
* accès administrateur pour inviter, gérer et supprimer des utilisateurs

Nous n’avons pas eu à concevoir ces éléments à partir de zéro puisqu’il existait déjà des modèles de conception avec des pratiques exemplaires en matière de sécurité et de facilité d’utilisation. C’est donc ce que nous avons utilisé pour commencer.

### Recherche utilisateur

Nous nous estimons heureux d’avoir pu mener des recherches auprès de certains travailleurs de la santé, en dépit de leurs horaires déjà chargés, pour recueillir des informations et améliorer le portail. Nos recherches ont donné lieu à :

* des instructions plus claires dans les courriels d’invitation envoyés aux travailleurs de la santé sur la façon d’accéder au portail
* des captures d’écran les aidant à guider les patients lorsque ceux-ci saisissent leur clé à usage unique dans l’application
* un [guide rapide](https://portail-alerte-covid.alpha.canada.ca/fr/quick-guide/) fournissant plus d’informations, au besoin

En fin de compte, la recherche a permis de fournir des renseignements plus clairs aux travailleurs de la santé sur la façon dont le portail s’insère dans la notification d’exposition de COVID-19, ainsi que des conseils supplémentaires relatifs aux patients pour pouvoir mieux les aider.

### Introspection comportementale

Afin de réduire davantage la charge cognitive des travailleurs de la santé et d’atténuer l’anxiété des patients qui ont obtenu un test positif, nous avons également utilisé des connaissances d’introspection comportementale.

Par exemple, nous avons créé un alphabet radio qui pourrait être fourni en même temps que la clé. Cela permet au travailleur de la santé de lire plus facilement la clé à usage unique au téléphone, et au patient de saisir plus facilement la bonne clé dans l’application.

## Aidez-nous à apporter des améliorations constantes

Notre équipe travaille fort pour fournir une solution qui répond aux besoins des travailleurs de la santé et des patients partout au Canada, le but étant de rendre la génération et la saisie des clés dans l’application aussi simples que possible. Nous nous efforçons d’améliorer continuellement le processus à mesure que nous le déployons partout au Canada.

La meilleure façon pour nous d’améliorer ce service est d’obtenir des commentaires des gens qui l’utilisent ou qui l’utiliseront.

Si vous ou l’une de vos connaissances êtes une personne du milieu de la santé responsable de contacter les patients obtenant un résultat positif, [inscrivez-vous pour participer à nos activités de recherche](https://numerique.canada.ca/inscription-recherche-alerte-covid/). L’inscription prend moins de 5 minutes, et vos commentaires nous aideront à améliorer l’application Alerte COVID tandis que nous essayons de réduire la propagation de la COVID-19 au Canada.
