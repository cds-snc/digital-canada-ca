---
layout: blog
title: >-
  Les réponses à vos questions sur notre nouvelle plateforme d’envoi de
  courriels et de textos gouvernementaux
description: >-
  Depuis le lancement de notre plateforme Notification, nous avons reçu
  plusieurs questions de personnes qui souhaitent savoir comment elle
  fonctionne, qui peut l’utiliser et, surtout, si elle est gratuite. En raison
  de cet immense intérêt, nous avons décidé de prendre le temps de répondre à
  ces questions et d’encourager d’autres organisations à utiliser Notification
  pour leurs services.
author: 'Max Neuvians et Tim Arney, développeurs'
date: 2020-02-18T17:27:31.267Z
image: https://de2an9clyit2x.cloudfront.net/blog_notify2_89a385e31d.jpg
image-alt: >-
  Trois personnes discutent ensemble; la personne de gauche tient un ordinateur
  portable et parle du code de l’API Notification, et l’une des personnes de
  droite tient un ordinateur portable et parle des courriels et des messages
  texte envoyés grâce au service Notification.
translationKey: notify-blog2
thumb: https://de2an9clyit2x.cloudfront.net/small_blog_notify2_89a385e31d.jpg
---
*Mise à jour : Comme tout produit numérique, Notification GC fait l’objet d’améliorations constantes pour répondre aux besoins d’équipes issues de l’ensemble du gouvernement.* *Pour obtenir les derniers renseignements en date, veuillez vous référer à la page consacrée aux (fonctionnalités de Notification GC)[https://notification.canada.ca/fonctionnalites].*

Depuis le lancement de notre [plateforme Notification](https://numerique.canada.ca/2019/11/26/on-vous-pr%C3%A9sente-notification/), nous avons reçu plusieurs questions de personnes qui souhaitent savoir comment elle fonctionne, qui peut l’utiliser et, surtout, si elle est gratuite. En raison de cet immense intérêt, nous avons décidé de prendre le temps de répondre à ces questions et d’encourager d’autres organisations à utiliser Notification pour leurs services.

En tant que développeurs, nous voulons également préciser les raisons pour lesquelles les services gouvernementaux, nouveaux et existants, devraient intégrer la plateforme Notification.

Mais d’abord, répondons à la question la plus courante :

## Y a-t-il un coût associé à l’envoi des avis par courriel au moyen de Notification?

**Non**. L’utilisation de Notification est **gratuite** et le restera tant que le produit sera sous le contrôle du Service numérique canadien (SNC).

Beaucoup de personnes se demandent pourquoi et comment utiliser Notification. Nous pensons pouvoir répondre à cette question en donnant un exemple convaincant de notre propre expérience de mise en oeuvre de produit.

L’un des premiers projets sur lesquels nous avons travaillé ici au SNC était un service portant sur le [report des rendez-vous d’examen de citoyenneté](https://numerique.canada.ca/2018/04/13/reporter-un-rendez-vous-dexamen/). Nous avons appris qu’une fois que les demandeurs avaient envoyé leur demande de report, ils ne savaient pas toujours à quoi s’attendre. Le besoin de recevoir un courriel confirmant que le service avait bien reçu leurs renseignements était donc présent.

Il s’est avéré que l’envoi d’un courriel à partir d’un service infonuagique était plus facile à dire qu’à faire. Plusieurs étapes étaient nécessaires, dont l’acquisition de services, la vérification de la propriété du domaine et l’établissement de mesures de protection appropriées contre la mystification des courriels. La mise en place de ces mesures pouvait prendre des mois, selon les processus organisationnels.

En tant que développeurs, nous voulions simplement envoyer des courriels de façon rapide.

Revenons maintenant à aujourd’hui : nous avons développé Notification, une plateforme qui vous permet d’emblée d’envoyer des notifications de façon rapide et fiable (parce que nous avons fait une bonne partie du travail supplémentaire pour vous)!

## Pourquoi utiliser Notification?

Notification vous permet, comme le client de messagerie sur votre ordinateur de bureau, d’envoyer des courriels et des messages texte par l’entremise d’un site Web (soit à un groupe en téléchargeant une liste de contacts, soit à un seul destinataire).

En utilisant le code source libre du service GOV.UK Notify (créé par le service numérique du gouvernement du Royaume-Uni), nous avons développé l’interface de programmation d’applications (API) nommée Notification. Nous l’avons adaptée au contexte canadien, ce qui a facilité son intégration dans votre propre système.

Même si l’envoi manuel de messages peut être sage dans certaines situations, il faut généralement beaucoup de temps et de ressources pour le faire. En utilisant l’API, vous pouvez automatiser les caractéristiques de votre messagerie. Pour les développeurs, cela signifie qu’après avoir intégré l’API Notification dans votre service, vous pouvez adopter une approche plus passive lorsque vous envoyez des mises à jour de statut, des confirmations et des rappels.

## Avantages de l’utilisation de l’API Notification

Voici quelques avantages d’envoyer vos messages au moyen de l’API Notification :

* La validité des enregistrements Sender Policy Framework (SPF) et DomainKeys Identified Mail (DKIM);
* La conformité automatique aux prochaines directives en matière d’envoi de courriels, plus particulièrement au protocole Domain-based Message Authentication, Reporting, and Conformance (DMARC);
* L’image de marque du gouvernement du Canada en place par défaut (vous pouvez également télécharger votre propre image de marque pour l’associer à votre service);
* La fiabilité du domaine Canada.ca par lequel vous envoyez les courriels, ce qui réduit au minimum le risque qu’ils soient perçus comme des pourriels. L’envoi à partir de votre propre domaine est également possible, mais n’est pas recommandé;
* La présence d’un tableau de bord qui indique le nombre de courriels transmis avec succès au fil du temps.

Tout cela pour dire que si nous avions eu Notification au moment de la conception du service de report des rendez-vous d’examen de citoyenneté, nous aurions économisé beaucoup de temps et d’énergie.

## Maintenant que nous vous avons vendu l’idée, comment pouvez-vous commencer?

Ouvrez un compte Notification et consultez la [documentation](https://notification.alpha.canada.ca/documentation) sur l’API. Vous verrez qu’il y a des clients pour de nombreux langages de programmation courants, par exemple Java, Python et JavaScript. Ces clients et cette documentation sont maintenus par le service numérique du gouvernement du Royaume-Uni.

![Une capture d’écran de la page d’intégration de l’API Notification, comprenant une section dans laquelle on demande à un utilisateur de créer une clé API en inscrivant le nom de la clé. Il peut choisir parmi trois types de clés : Live, Équipe et liste de confiance, et Test.](https://de2an9clyit2x.cloudfront.net/notify_api_fr_18a3a9b554.jpg)

Notez que nous utilisons ces clients (vive le code source libre!) avec un paramètre URL de base non consigné. Par conséquent, vous devrez le configurer afin qu’il corresponde à notre version de l’API. Pour plus de détails, consultez le document intitulé [Comment changer votre point de terminaison d’API](https://github.com/cds-snc/notification-api/wiki/Comment-changer-votre-point-de-terminaison-d'API%3F).

## Mais ce n’est pas tout!

Parfois, l’utilisation d’une API n’est tout simplement pas une option. Peut-être que vous utilisez un produit commercial qui vous oblige à envoyer des courriels au moyen du protocole de transfert de courrier simple (SMTP). Nous sommes heureux d’annoncer que, parallèlement à l’API, nous testons une nouvelle option SMTP.

Les messages envoyés par le SMTP offrent en grande partie les mêmes fonctions que ceux envoyés au moyen de l’API. Communiquez avec nous si vous souhaitez obtenir plus de détails ou si vous souhaitez essayer cette nouvelle option.

## Communiquez avec vos utilisateurs et avec nous

Nous avons développé Notification pour vous permettre de communiquer avec les gens qui utiliseront votre service. Depuis l’annonce de notre plateforme Notification, plus d’une centaine de nouveaux comptes d’essai ont été créés pour tester le produit et, par conséquent, le nombre de services actifs sur notre plateforme a triplé.

Nous espérons que vous trouverez cette plateforme aussi facile et agréable à utiliser que nous.

Si vous avez des questions ou si vous souhaitez participer aux recherches en cours sur Notification, [communiquez directement avec nous](https://notification.canada.ca/contact). Vous pouvez aussi utiliser le mot-clic **\#NotificationGC** sur Twitter pour obtenir plus de détails et de l’aide.


