---
layout: blog
title: 'GC notification, maintenant en version bêta'
description: >-
  Suite au développement de la première version du service et de son
  amélioration en fonction des besoins des utilisateurs, nous nous faisons un
  grand plaisir d’annoncer que GC Notification passe de la phase alpha à bêta.
  L’outil est maintenant plus stable, fiable et sécurisé que jamais. 
author: 'Bryan Willey et Clémentine Hahn, gestionnaires de produits'
date: 2021-02-01T14:19:40.262Z
image: /img/cds/notify-blog-beta-banner-fr.jpg
image-alt: >-
  Un ordinateur portatif et un téléphone intelligent qui affichent la page
  d’accueil de GC Notification en version bêta 
translationKey: blog-notify-beta
thumb: /img/cds/thumbnails/notify-blog-beta-banner-fr.jpg
processed: 1612203119517
---
Depuis le lancement de l’outil GC Notification en 2019, nous avons aidé des équipes gouvernementales à envoyer [plus de 8,8 millions de notifications](https://notification.canada.ca/activity). Suite au développement de la première version du service et de son amélioration en fonction des besoins des utilisateurs, nous nous faisons un grand plaisir d’annoncer que GC Notification passe de la phase alpha à bêta. L’outil est maintenant plus stable, fiable et sécurisé que jamais.

Nous tenons à remercier les équipes gouvernementales qui ont adopté et testé GC Notification afin de nous aider à améliorer le service et atteindre la version bêta. Grâce à elles, nous avons été en mesure d’appuyer des ministères comme [Santé Canada dans la diffusion aux Canadiens de mises à jour sur la COVID-19](https://numerique.canada.ca/2020/05/13/obtenir-les-nouvelles-sur-la-covid-19-service-de-notification-par-courriel/), et [Service Canada dans l’envoi de confirmations par courriel en vue d’améliorer l’expérience utilisateur sur Canada.ca](https://numerique.canada.ca/2020/03/05/comment-nous-avons-install%C3%A9-notification-sur-canada-ca/). Plus récemment, nous avons eu l’honneur de travailler avec le gouvernement de la Nouvelle-Écosse, qui cherchait à envoyer à ses citoyens des avis par messagerie texte concernant le statut de leur rendez-vous afin d’assurer la distanciation physique pendant la pandémie de COVID-19.

Nous espérons que les améliorations et les nouvelles fonctionnalités introduites dans la version bêta encourageront d’autres équipes fédérales et provinciales à se joindre à Santé Canada, à Service Canada et au gouvernement de la Nouvelle-Écosse en intégrant GC Notification à leurs services.

## Pour ceux et celles qui ne le savent pas, qu’est-ce que GC Notification? 

GC Notification est un outil gratuit du gouvernement développé par l’équipe des plateformes du Service numérique canadien (SNC). Basé sur l’infonuagique, il offre aux équipes gouvernementales un moyen simple et efficace d’intégrer à leurs services la capacité de diffuser des notifications simples par courriel ou messagerie texte.

À l’aide de code source libre fourni par nos homologues du [Service numérique du gouvernement (GDS)](https://gds.blog.gov.uk/) du Royaume-Uni, nous avons adapté l’outil [GOV.UK Notify](https://www.notifications.service.gov.uk/) au contexte canadien en veillant au respect des normes gouvernementales sur l’accessibilité, les langues officielles (anglais et français), la sécurité et la protection des renseignements personnels, entre autres.

Aujourd’hui, GC Notification permet à plus de 81 services d’envoyer des avis importants au public et aux fonctionnaires, notamment des rappels de rendez-vous, des mises à jour de statut automatisées, des confirmations de soumission et des demandes de renseignements supplémentaires.

Voici certaines des caractéristiques nouvelles et existantes de GC Notification : 

* **Image de marque du gouvernement du Canada par défaut** pour les courriels, conformément aux exigences du [Programme de coordination de l’image de marque](https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/programme-federal-image-marque/manuel.html)
* **Authentification à deux facteurs**, qui envoie un code à usage unique au téléphone ou à l’adresse courriel de l’utilisateur après l’ouverture d’une session dans GC Notification, dans le but d’assurer la sécurité du compte 
* Les courriels sont envoyés d’un **domaine Canada.ca approuvé**, et sont automatiquement conformes aux lignes directrices sur l’envoi de courriels, y compris le protocole DMARC (Domain-based Message Authentication, Reporting, and Conformance)
* **Un tableau de bord en temps réel** qui surveille le processus d’envoi d’un message, y compris le nombre de messages envoyés et leur état de livraison.

Qu’est-ce que la phase « bêta » signifie pour GC Notification?

Les origines de GC Notification remontent à l’identification du besoin de créer un service simple et flexible qui aiderait les ministères gouvernementaux à informer le public.

L’équipe des plateformes du SNC a d’abord travaillé à adapter et déployer le code source libre de GOV.UK Notify pour créer une version minimum viable de GC Notification. Une version alpha fonctionnelle a ensuite été lancée en novembre 2019. Au cours de la phase alpha, plus de 20 ministères du gouvernement ont intégré GC Notification à leurs services et fourni leurs commentaires à l’équipe. Ces commentaires ont été intégrés aux versions subséquentes en vue d’améliorer l’outil et de l’adapter aux besoins des utilisateurs.

Grâce à cette version bêta et aux améliorations continues que nous prévoyons apporter au service (en fonction des commentaires d’utilisateurs), les ministères peuvent profiter des fonctionnalités et des mesures de sécurité nouvelles et améliorées du GC, en plus des fonctionnalités existantes.

**Voici certaines des fonctionnalités nouvelles et améliorées comprises dans la version bêta de GC Notification :**

* **La sécurité et la fiabilité du service ont été améliorées**, grâce à la migration complète vers un centre de données Amazon Web Services (AWS) situé au Canada, protégée par l’infrastructure de Service partagés Canada (SPC).  
* GC Notification offre maintenant un **soutien technique 24/7** afin d’assurer la disponibilité du service en tout temps pour répondre aux besoins de votre ministère.
* Si votre ministère doit envoyer des messages de nature sensible aux utilisateurs de vos services, **vous pouvez maintenant utiliser GC Notification pour envoyer des messages protégés jusqu’au niveau « Protégé A »**.
* GC Notification a réussi un test d’intrusion qui n’a révélé aucune vulnérabilité dans le service. Vous pouvez donc être **assurés de la sûreté de vos renseignements contre les attaques de tierces parties**. 
* GC Notification peut maintenant envoyer des **messages texte de numéros canadiens**.  
* GC Notification a été intégré auprès des sociétés de télécommunications canadiennes afin de **surveiller l’état de livraison des messages texte**.

De plus, les ministères peuvent envoyer gratuitement jusqu’à 10 millions de courriels par année, et jusqu’à 250 000 messages textes, ce qui témoigne de la capacité du service à servir éventuellement de système de notification par courriel centralisé et sécurisé pour tout service gouvernemental.

Nous sommes là pour vous aider — pendant comme après la pandémie 

Si vous faites partie d’une équipe gouvernementale qui doit envoyer des messages importants au public, nous vous encourageons à essayer [GC Notification dès aujourd’hui](https://notification.canada.ca/).

Notre équipe est toujours disposée à répondre à vos questions sur le service. [Écrivez-nous directement](https://notification.canada.ca/contact) ou utilisez le mot-clic #GCNotification sur Twitter pour toute question ou demande de soutien. Nous nous ferons un plaisir de vous aider.
