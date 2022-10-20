---
layout: blog
title: Développer un service efficace de notification d’exposition comme Alerte COVID
description: >-
  Nous expliquons les principaux éléments pris en compte pendant le
  développement d’Alerte COVID, une application de notification d’exposition
  respectueuse de la vie privée. Dans le présent billet, nous parlons de ce
  qu’il faut à la base pour qu’un service de notification d’exposition
  fonctionne bien et soit mis à la disposition du plus grand nombre de personnes
  possible
author: >-
  Josh Ruihley, responsable de service, et Emily Kuret, chef de produit – Alerte
  COVID
date: 2020-10-02T15:07:00.987Z
image: https://de2an9clyit2x.cloudfront.net/covid_alert_vision_banner_5a8a8a87f1.jpg
image-alt: >-
  Illustration d’un plateau de balance sur lequel des personnes munies de
  l’application Alerte COVID se tiennent de façon à maintenir le plateau en
  équilibre.
translationKey: covid-alert-utility-scale
thumb: https://de2an9clyit2x.cloudfront.net/small_covid_alert_vision_banner_5a8a8a87f1.jpg
---
*Le 31 juillet 2020, nous avons lancé Alerte COVID, le service canadien de notification d’exposition à la COVID-19. L’application mobile a été développée ouvertement. Pour poursuivre dans la même veine, nous publierons une série de billets de blogue qui expliquent les choix que nous faisons à mesure que nous continuons de mettre à jour, de tester et d’itérer ce service.*

*Dans ce premier billet, nous parlons de ce qu’il faut à la base pour qu’un service de notification d’exposition fonctionne bien et soit utilisé par le plus grand nombre de personnes possible.*
## Trouver le juste milieu entre utilité et portée
Notre mission avec Alerte COVID est de réduire la propagation de la COVID-19 au pays grâce à un service de notification d’exposition qui respecte la vie privée et qui prévient autant que possible les obstacles à son adoption.

Quand nous parlons du « service » Alerte COVID, l’application mobile publique joue bien sûr un grand rôle. Mais le service comprend également des portails provinciaux qui permettent aux travailleurs de la santé de générer des clés à usage unique, ainsi qu’un soutien technique à la fois pour le public et les travailleurs de la santé. Ainsi, les obstacles à l’adoption du service peuvent s’appliquer aussi bien à l’une comme à l’autre de ces facettes.

Au moment de définir la direction que prendrait le service initial, nous avions plusieurs options. Ultimement, nous avons privilégié la considération de deux aspects en particulier :

1. Le service doit bien fonctionner.
2. Plus il y aura de gens qui utilisent le service, plus les retombées de celui-ci seront importantes.

Au fur et à mesure que nous continuons de développer et d’améliorer Alerte COVID, il est important que ces deux considérations **restent prioritaires** et équilibrées. Si nous améliorons la fonctionnalité de l’application, mais que cela compromet le nombre de personnes qui l’utilisent, nous nuisons à l’intégralité du service. De même, si nous faisons augmenter le nombre d’utilisateurs et d’utilisatrices aux dépens de la fonctionnalité principale de l’application, il s’agit aussi d’un pas en arrière.

## Un service qui fonctionne bien

Un service de notification d’exposition qui fonctionne bien pourra d’abord **détecter** le moment où une personne a de fortes chances d’être entrée en contact avec un individu qui a la COVID-19. Puis, il pourra **orienter** la personne vers les mesures appropriées, soient les consignes de santé publique.
### Détection
En principe, une détection se produit lorsque :

* Une personne munie de l’application a été près d’un individu, aussi muni de l’application, chez qui on a diagnostiqué la COVID-19.
* L’individu diagnostiqué décide d’entrer sa clé à usage unique dans l’application pour avertir les personnes qu’il a côtoyées.
* Le contact entre les deux personnes a été suffisamment étroit et long pour qu’une exposition ait possiblement lieu.
* L’individu diagnostiqué était contagieux quand le contact a eu lieu.

### Orientation
Quand les critères de détection sont satisfaits et qu’une exposition potentielle à la COVID-19 est déterminée avec certitude, Alerte COVID doit alors orienter l’utilisateur ou l’utilisatrice vers les prochaines étapes pour prévenir la transmission du virus. Cette orientation est établie par les autorités sanitaires de la province ou du territoire sélectionné dans l’application.

Ici, au Canada, chaque province ou territoire a des consignes différentes en fonction de sa situation. Nous collaborons étroitement avec ces partenaires de soins de santé partout au Canada pour nous assurer que, lorsqu’une personne reçoit une notification d’exposition, on lui fournit une orientation spécifique à sa situation et à sa région.

L’objectif d’orientation est rempli lorsque :

* La personne est avisée d’une exposition potentielle.
* La personne est informée des mesures à prendre selon les consignes de santé publique.
* La personne suit ces mesures.

## Accroître l’utilisation de l’application
Plus il y aura de gens qui utilisent Alerte COVID, plus ce service aura une incidence importante sur le ralentissement de la propagation de la COVID-19 au Canada. Et pour mettre l’application à la disposition du plus grand nombre de personnes possible, nous nous penchons sur 5 facteurs principaux qui peuvent influer sur son adoption :

* Disponibilité : Le service doit être offert au plus grand nombre de personnes possible.
* Accessibilité : Le service doit être utilisable par le plus grand nombre de personnes possible.
* Sensibilisation : Les gens ont besoin d’être au courant que le service existe et ils doivent savoir comment le service peut aider la collectivité.
* Compréhension : Les gens doivent comprendre comment utiliser le service et avoir accès à de l’aide s’ils ne le comprennent pas.
* Confiance : Les gens doivent avoir l’assurance que l’application est privée et sécurisée et que le service a leurs intérêts à coeur.

## Préserver l’équilibre

Au fur et à mesure que nous déployons Alerte COVID au Canada, nous continuerons de vous montrer des exemples de la façon dont Alerte COVID est développée, tout comme les décisions que nous prenons en appui aux considérations décrites ci-dessus, c’est-à-dire l’utilité et la portée. Restez à l’affût!

D’ici là, vous pouvez [suivre notre travail sur GitHub](https://github.com/cds-snc/covid-alert-app).

