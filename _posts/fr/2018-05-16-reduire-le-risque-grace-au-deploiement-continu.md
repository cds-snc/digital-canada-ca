---
title: "Réduire le risque grâce au déploiement continu"
description: "Non seulement c’est possible; c’est une pratique standard dans l’industrie. Les outils sont accessibles à tous aujourd’hui, à peu de frais."
author: Jason White, Chef, science des données
date: 2018-05-16 09:00:00 -0400
image: blog-continuous-deployment.jpg
image-alt: Un homme travaille à un bureau sur le code.
lang: fr
layout: cds/post
trans_url: "/2018/05/16/reducing-risk-through-continuous-deployment"
---
La plupart des ministères avec qui nous travaillons déploient de nouvelles versions de leur code tous les 4, 6 ou 12 mois. Cette façon de faire cadre bien avec le processus de [développement de logiciel en cascade](https://cyclededeveloppementdunlogiciel.wordpress.com/le-modele-en-cascade/), souvent accompagné de sérieux risques. 

## Les déploiements de type big bang sont risqués

Qu’entend-on par [« déploiement de type *big bang* »](https://www.akuiteo.com/blog/les-strategies-de-deploiement-dun-logiciel-erp)? Il s’agit de la plus simple sorte de transfert de système ou de déploiement de versions. Un système est éteint lorsqu’un autre est mis en fonction. 

Nous en avons tous vu. Ils peuvent se manifester de plusieurs façons :
* « Le système est arrêté pendant la fin de semaine pour une maintenance planifiée. »
* « La version numéro 16 est sortie! »
* « Le système est hors ligne jusqu’à mercredi ».

Les déploiements de type *big bang* reposent sur une simple hypothèse : la nouvelle version sera installée et fonctionnera comme prévu. L’expérience nous enseigne que plus la nouvelle version est différente, plus il est probable qu’il y aura des problèmes, et plus il sera difficile de déterminer la cause de la panne.

## Les corrections de bogue prennent trop de temps

Un ministère nous a récemment raconté une anecdote. Il y avait un bogue dans leur code de production, qui touche les utilisateurs. Le bogue a été réglé il y a plusieurs semaines, mais la correction ne sera pas déployée avant juillet. Il existe donc une solution, mais les utilisateurs ne pourront en bénéficier avant des mois.

Il s’agit d’une histoire courante, et d’un effet secondaire du cycle de lancement par trimestre (ou plus long). Nous sommes tous passés par là. C’est frustrant pour toutes les personnes concernées.

## Les correctifs d’urgence ne sont pas testés

Nous ne sommes pas avisés longtemps d’avance des vulnérabilités de sécurité critiques comme la faille [Heartbleed](https://fr.wikipedia.org/wiki/Heartbleed/). Nous ne pouvons pas non plus attendre pour les corriger, puisqu’elles risquent de compromettre gravement notre infrastructure.

Nous devons donc recourir à des correctifs d’urgence non testés et non standard, et ce, hors cycle. Il y a beaucoup de façons dont cela peut mal tourner.

## Il existe une autre manière : déployer un changement à la fois, tous les jours

Non seulement c’est possible; c’est une pratique standard dans l’industrie. Les outils sont accessibles à tous aujourd’hui, à peu de frais. Il y a quatre ans, [Amazon effectuait déjà un déploiement vers la production toutes les 11,6 secondes](http://joshuaseiden.com/blog/2013/12/amazon-deploys-to-production-every-11-6-seconds/).

Si vous avez lu nos billets de blogue précédents sur [l’intédopegration continue](https://numerique.canada.ca/2018/03/26/les-tests-automatises/) et la [qualité du code](https://numerique.canada.ca/2018/04/24/coder-une-activite-dequipe/), vous savez que nous suivons une méthode de très petits changements dont chacun est examiné par les collègues et subit un ensemble de tests automatisés. La combinaison de l’intégration continue et de l’examen par les pairs débloque cette capacité à aussi déployer chacun de ces changements individuellement dans la production.

Déployer un changement à la fois, tous les jours, a de nombreux avantages :
* Le mécanisme de déploiement est complètement automatisé et fiable.
* Chaque changement est très petit et *réduit* donc *au minimum le risque*.
* Les problèmes critiques peuvent habituellement être résolus en quelques minutes, simplement en annulant le changement fautif.
* Répondre à de nouvelles menaces de sécurité est beaucoup plus simple et plus rapide.
* Les développeurs peuvent vraiment considérer des fonctionnalités comme « lancées », ce qui soulage leur esprit.

## Déploiement != Lancement

Cette approche peut sembler très étrange pour ceux qui ont utilisé le modèle de développement de logiciel en cascade. On peut trouver cela irresponsable de lancer une nouvelle fonctionnalité de cette façon, avec raison. Toutefois, ce n’est pas ce qu’on propose.

Le **déploiement** est le mécanisme que nous utilisons pour que le code à jour soit exécuté dans la production.  
Le **lancement** représente le marketing – mettre en service une fonctionnalité à utilisation générale et encourager les gens à l’utiliser.

Les deux sont importants, mais ils peuvent être assez différents.

Une approche très courante est celle des [*feature flags*](https://blog.octo.com/feature-flipping/). Vous déployez la nouvelle fonctionnalité dans la production, mais vous ne l’activez que pour certains utilisateurs, comme votre équipe de développement ou les chercheurs en expérience utilisateur. Au fur et à mesure que le déploiement avance, vous l’élargissez graduellement à 1 %, 2 % et peut-être à 5 % de vos utilisateurs, en itérant au fur et à mesure. Lorsque vous avez pleinement confiance, vous lancez la fonctionnalité, c’est-à-dire que vous l’activez pour tout le monde.

Le [test A/B](https://fr.wikipedia.org/wiki/Test_A/B/) peut être utilisé en combinaison des *feature flags*, mais les deux reposent sur la simple idée que tout le monde doit voir la même interface.

## Favoriser les conditions pour un déploiement continu

La capacité à déployer continuellement un nouveau code vers la production dépend de quelques principes :
* Chaque petit changement est digne de confiance – un bon examen de code et de tests automatisés est en place.
* Les processus de développement et de déploiement est complètement automatisé.
* Nous créons des applications Web.
* Nous utilisons un nuage public (AWS/Azure/Google Cloud).

Ces principes ne s’appliqueront probablement pas aux applications patrimoniales, mais ils sont habituellement vrais pour les nouveaux systèmes qui sont en voie de planification aujourd’hui. Nous avons utilisé trois de ces pratiques (intégration continue, examens de code, déploiement continu) dans le cadre de notre récent [projet d’API avec Ressources naturelles Canada](https://github.com/cds-snc/nrcan-energuide-api-poc/).
