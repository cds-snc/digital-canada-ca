---
layout: blog
title: Amélioration continue d’Alerte COVID
description: "**Le mois dernier, le premier ministre a annoncé le développement
  d’une application nationale de notification d’exposition pour aider les
  Canadiens et Canadiennes à rester en sécurité et à réduire la propagation de
  la COVID-19. Depuis, nos équipes de produits au SNC ont travaillé rapidement à
  la création d’une application accessible, fiable, sécurisée et conviviale pour
  les gens à travers le pays.**"
author: "Josh Ruihley, Emily Kuret, Stephen Yates, Courtney Claessens et Sean
  Boots, Service numérique canadien (SNC) "
date: 2020-07-31T13:56:55.670Z
image: /img/cds/improving-covid-alert-banner.jpg
image-alt: Trois personnes qui travaillent à l’amélioration de l’application Alerte COVID.
translationKey: covid-alert-blog
thumb: ""
processed: ""
---
Le mois dernier, le premier ministre a annoncé le [développement d’une application nationale de notification d’exposition](https://pm.gc.ca/fr/nouvelles/communiques/2020/06/18/premier-ministre-annonce-la-creation-dune-application-mobile-aider) pour aider les Canadiens et Canadiennes à rester en sécurité et à réduire la propagation de la COVID-19. Depuis, nos équipes de produits au SNC ont travaillé rapidement à la création d’une application accessible, fiable, sécurisée et conviviale pour les gens à travers le pays. **Aujourd’hui, l’application Alerte COVID est officiellement lancée. Vous pouvez télécharger l’[application iOS](https://apps.apple.com/ca/app/id1520284227?l=fr) ou l’[application Android](https://play.google.com/store/apps/details?id=ca.gc.hcsc.canada.stopcovid&hl=fr)**.

Comme point de départ, nous avons utilisé le [code source libre développé par des bénévoles de Shopify](https://www.covidshield.app/fr/) et basé sur la [technologie Bluetooth de notification d’exposition d’Apple et de Google](https://www.apple.com/covid19/contacttracing). Nous avons travaillé en étroite collaboration avec nos collègues de [Santé Canada](https://www.canada.ca/fr/sante-canada.html) et des [Services numériques de l’Ontario](https://www.ontario.ca/fr/page/services-numeriques-ontario), ainsi qu’avec un certain nombre d’autres équipes et experts au sein du gouvernement et à l’extérieur de celui-ci. 

Un large éventail de changements a été apporté à ce code source libre pour améliorer l’accessibilité et la fiabilité de l’application, et pour assurer le bon fonctionnement de celle-ci avec les systèmes sous-jacents d’Apple et de Google. Nous avons également effectué des tests d’utilisabilité, des [tests bêta](https://twitter.com/SNC_GC/status/1286114285345820672) à petite et grande échelle et d’autres activités de recherche en conception pour nous assurer que la conception et le contenu de l’application sont faciles à utiliser et à comprendre. 

Nous développons Alerte COVID de manière ouverte, et vous pouvez suivre notre travail en temps réel dans nos dépôts GitHub : celui de l’[application mobile](https://github.com/cds-snc/covid-shield-mobile), celui du [logiciel serveur](https://github.com/cds-snc/covid-shield-server) qui prend en charge l’application, et celui du [portail de soins de santé](https://github.com/cds-snc/covid-healthcare-portal) optionnel que les provinces et les territoires peuvent utiliser pour générer des clés à usage unique pour les patients ayant reçu un diagnostic de COVID-19. Les provinces et les territoires peuvent également connecter leurs systèmes informatiques de soins de santé directement au logiciel serveur au moyen d’une API, afin de générer automatiquement des clés à usage unique.

Pour toutes les personnes qui sont curieuses, voici quelques-uns des changements qui ont récemment été apportés à l’application.

## Améliorations de l’accessibilité

L’un de nos principaux objectifs au gouvernement du Canada est de nous assurer que les services fonctionnent pour tous. Notre [guide sur l’accessibilité](https://numerique.canada.ca/a11y/) décrit la façon dont nous réalisons cet objectif, bien que la grande partie de notre travail soit normalement axée sur les services en ligne. Pour Alerte COVID, travailler sur l’accessibilité des applications mobiles a été une bonne pratique pour notre équipe. Nous avons utilisé d’excellentes ressources en cours de route :

* [La *check-list* pour l’accessibilité mobile](https://developer.mozilla.org/fr/docs/Accessibilit%C3%A9/Checklist_accessibilite_mobile) de Mozilla
* [L’accessibilité des téléphones intelligents : un guide complet](https://www.uswitch.com/mobiles/guides/smartphone-accessibility/), par Uswitch (en anglais)
* [La conception axée sur l’accessibilité pendant la pandémie de la COVID-19](https://blog.canada.ca/2020/06/05/designing-for-accessibility.html), par le Bureau de la transformation numérique 

Parmi les améliorations issues des tests d’accessibilité que nous avons apportées à Alerte COVID, il y a : les fonctionnalités des lecteurs d’écran VoiceOver et TalkBack, des options de commande vocale, une prise en charge améliorée pour l’agrandissement de la taille du texte et de l’écran, des ajustements à la cible de saisie pour la navigation, une prise en charge de l’inversion du contraste, des options de lecture immersive et des corrections aux contrastes de couleur. Vous pouvez consulter les problèmes d’accessibilité existants et résolus dans [la page de suivi des problèmes GitHub de l’application](https://github.com/cds-snc/covid-shield-mobile/issues?q=label%3Aa11y+). 

Le fait de nous assurer qu’Alerte COVID est accessible à tous ceux et celles munis d’un téléphone intelligent Android ou Apple est la priorité absolue. Nous sommes très reconnaissants envers l’équipe d’accessibilité de Santé Canada et les développeurs de Shopify qui ont travaillé aux côtés de notre équipe de produits. Vous pouvez lire la [Déclaration d’accessibilité](https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19/alerte-covid/declaration-accessibilite.html) de l’application et consulter le [Rapport sur l’accessibilité](https://github.com/cds-snc/covid-alert-documentation/blob/main/RapportAccessibilite.md), activement mis à jour, pour plus de détails. 

## Clés à usage unique robustes

Les clés à usage unique utilisées pour confirmer un diagnostic de COVID-19 dans l’application sont l’une des parties « clés » du système de notification d’exposition. Elles sont fournies par les autorités sanitaires provinciales et territoriales à des personnes ayant obtenu un résultat positif pour la COVID-19. Ces personnes peuvent ensuite saisir leur clé à usage unique dans Alerte COVID. Les clés existent pour nous assurer que seuls les résultats positifs valides sont utilisés pour envoyer des notifications d’exposition.

Après que quelqu’un a entré une clé à usage unique, il peut consentir à téléverser les codes Bluetooth aléatoires de son téléphone vers le serveur de clés. Ces codes sont ensuite récupérés par les téléphones d’autres personnes ayant installé l’application, pour les avertir d’avoir été en contact avec quelqu’un qui a reçu un résultat positif pour la COVID-19.

À l’origine, ces clés à usage unique étaient un ensemble de 8 chiffres, avec une valeur d’expiration de 10 minutes. Nous nous sommes rendu compte dès le début qu’un compte à rebours de 10 minutes pouvait être intense pour les personnes, puisqu’elles seraient en train de faire face à un diagnostic de COVID-19. Nous avons donc décidé de prolonger ce délai d’expiration à 24 heures pour leur donner le temps de traiter l’information et de prendre une décision éclairée, lorsqu’elles étaient prêtes. 

En raison de cela, nous avions besoin de plus [d’entropie](https://en.wikipedia.org/wiki/Entropy_(computing)) pour nous assurer que ces clés étaient sécurisées. Nous sommes passés à un nouveau [modèle alphanumérique à 10 chiffres](https://github.com/cds-snc/covid-shield-server/pull/197) et avons structuré les codes en blocs de lettres ou de chiffres pour en faciliter la lecture. 

Les lettres et les chiffres que nous utilisons pour le nouveau modèle sont « AEFHJKLQRSUWXYZ – 2456789 ». Pourquoi ceux-ci? Ils permettent d’éviter des chiffres et des lettres pouvant créer de la confusion lorsqu’ils sont lus à l’écran ou communiqués par téléphone (par exemple, la lettre O par rapport au chiffre 0) avant que les gens ne les saisissent dans Alerte COVID.

## Langage précis au sujet de la confidentialité

L’application Alerte COVID et la technologie Bluetooth sous-jacente d’Apple et de Google ont été soigneusement conçues pour maximiser la confidentialité des données. L’application n’a aucun moyen de connaître votre emplacement, votre nom ou votre adresse, les contacts de votre téléphone, vos informations de santé ou celles de quiconque se trouvant à proximité. Lorsque vous recevez une alerte indiquant que vous avez été exposé à quelqu’un ayant contracté la COVID-19, ni vous ni l’application ne pouvez identifier cette personne. Cette [approche décentralisée et respectueuse de la vie privée](https://github.com/DP-3T/documents#dp3t---decentralized-privacy-preserving-proximity-tracing) a été adoptée par un certain nombre de pays partout dans le monde, dont l’[Irlande](https://github.com/HSEIreland/covid-tracker-app), l’[Allemagne](https://github.com/corona-warn-app), l’[Italie](https://github.com/immuni-app) et d’autres.

Tout au long du développement d’Alerte COVID, nous avons étroitement collaboré avec nos collègues de la [Division de l’accès à l’information et de la protection des renseignements personnels de Santé Canada](https://www.canada.ca/fr/sante-canada/organisation/a-propos-sante-canada/activites-responsabilites/acces-information-protection-renseignements-personnels/protection-renseignements-personnels.html), qui, à son tour, a eu des échanges importants et transparents avec le [Commissariat à la protection de la vie privée du Canada](https://www.priv.gc.ca/fr/) (CPVP). 

Une partie des commentaires du CPVP sur les premières versions de l’application concernait l’utilisation du mot « anonyme » pour décrire le fonctionnement de l’application et les informations qu’elle collecte. « Anonyme » sous-entend qu’il n’y a absolument aucun risque qu’une personne puisse être identifiée. Cependant, bien que nous soyons tous d’accord que le risque est extrêmement faible qu’une personne puisse être réidentifiée au moyen de l’application, il n’est pas forcément nul. Une personne vivant dans une région éloignée et n’interagissant qu’avec une ou deux personnes pourrait théoriquement être identifiée par ses voisins, si ces derniers recevaient des alertes de notification d’exposition, par exemple. 

![Capture de l’écran d’introduction d’Alerte COVID, disant : Votre vie privée est protégée. Alerte COVID n’utilise pas le GPS et ne suit pas votre emplacement. L’application n’a aucun moyen de connaître : votre emplacement, votre nom ou votre adresse, les contacts de votre téléphone, vos informations de santé, et les informations de santé des personnes à proximité.](/img/cds/improving-covid-alert1-fr.jpg)

En nous basant sur les commentaires du CPVP, nous avons supprimé le mot « anonyme » de l’application et l’avons remplacé par un texte précis expliquant comment la vie privée des gens est protégée.

Depuis le début des travaux sur Alerte COVID, nous avons, dans nos dépôts GitHub, effectué plus de 2300 validations, relevé 370 problèmes techniques, dont 310 ont été résolus (70 problèmes résolus étaient liés à l’accessibilité). Ç’a été une période chargée! Chacune de ces validations est un correctif ou une amélioration à l’application ou aux logiciels sous-jacents qui assurent son fonctionnement.

Tout au long du développement de l’application, des pages Web et des autres matériels à l’appui de l’application, nous avons révisé le contenu pour qu’il soit clair, accessible et inclusif pour les personnes d’un bout à l’autre du Canada. Nous allons également continuer à recueillir les commentaires permettant d’améliorer le contenu.

Nous sommes heureux de partager l’application avec tout le monde au Canada aujourd’hui. Vous pouvez la télécharger [ici pour iOS](https://apps.apple.com/ca/app/id1520284227?l=fr), ou [ici pour Android](https://play.google.com/store/apps/details?id=ca.gc.hcsc.canada.stopcovid&hl=fr). Il ne s’agit pas de la fin de notre mandat : nous attendons avec impatience la rétroaction qui sera fournie par les utilisateurs de l’application afin de continuer à l’améliorer après le lancement, tandis que nous nous joignons tous à la lutte contre la propagation du virus.

