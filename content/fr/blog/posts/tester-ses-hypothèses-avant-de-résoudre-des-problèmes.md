---
layout: blog
title: 'Tester ses hypothèses avant de résoudre des problèmes'
description: >-
  Dans ce billet, nous parlons de la façon dont nous avons testé nos hypothèses avant de passer à la résolution des supposés problèmes touchant le processus pour l’obtention d’une autorisation d'exploiter. Nous présentons également quelques-unes des leçons inattendues tirées en cours de route.
author: 'Caitlin Tuba, SNC et Po Tea-Duncan, cybersécurité du SCT, bureau du DPI'
date: '2021-03-25T15:00:00.000Z'
image: https://de2an9clyit2x.cloudfront.net/blog_banner_testing_security_assumptions_946d799a9a.jpeg
image-alt: Une personne réfléchit à des questions et les approfondit, avant d'essayer d’y trouver des réponses.
thumb: https://de2an9clyit2x.cloudfront.net/small_blog_banner_testing_security_assumptions_946d799a9a.jpeg
translationKey: blog-testing-security-assumptions
---
Résoudre un problème qui n'existe pas réellement, est-ce vraiment résoudre un problème? C’est peut-être ce qui se produit lorsque notre travail repose sur des hypothèses et qu’elles ne sont pas mises à l’épreuve. 

Les hypothèses permettent à nos cerveaux de traiter plus facilement l'information en repérant des tendances fondées sur nos expériences ou nos lectures. C'est un moyen utile pour nos cerveaux d'économiser de l'énergie, mais qui ne produit pas toujours des résultats utiles lorsque vient le temps de résoudre des problèmes. Les hypothèses ne sont pas infaillibles et ne tiennent souvent pas compte des nuances et du contexte, soit des éléments essentiels à la résolution efficace des problèmes. 

Il est nécessaire de vérifier ses hypothèses pour venir à bout de ses propres préjugés et priorités. Nous avons parfois tendance à prendre des positions largement axées sur nos suppositions et l’incidence qu’auront les enjeux sur nous. En mettant nos hypothèses à l’épreuve, nous pouvons élargir cette perspective.

C’est ce que nous avons découvert en travaillant avec l'équipe de la cybersécurité du Secrétariat du Conseil du Trésor du Canada (SCT) pour examiner les défis liés au processus d'obtention d'une autorisation d’exploiter. Ce partenariat a révélé des choses que nous n'aurions pas sues autrement.

## Reconnaître les défis liés à l'obtention d'une autorisation d’exploiter

Il existe [une définition officielle de l’autorisation d’exploiter](https://cyber.gc.ca/fr/orientation/gestion-des-risques-lies-la-securite-des-ti-au-sein-du-gouvernement-du-canada-itse10033), mais en brefc’est l’approbation d’exécuter un service que donne un haut fonctionnaire à une équipe après qu’elle ait montré comment les risques de sécurité informatique seront gérés. Pour obtenir cette autorisation convoitée, une équipe doit suivre le processus d’évaluation et d’autorisation de sécurité.

L'équipe de la cybersécurité savait que quelque chose ne fonctionnait pas avec ce processus. Les équipes cherchant à obtenir une autorisation d’exploiter achevaient l’évaluation très tard dans le processus de développement de leur service — presque comme une arrière-pensée. 

L'équipe de la cybersécurité savait que la communauté était frustrée par l’évaluation et l’autorisation de sécurité et cherchait à comprendre comment la rendre plus conviviale. L'objectif était d'encourager les équipes à y travailler plus tôt dans leur processus de développement afin qu'elles puissent lancer leurs produits au moment prévu, en prenant en compte tous les enjeux de sécurité, plutôt que de voir ça comme un élément d’une liste de contrôle en fin de projet. Tout le monde y gagne! 

## Comprendre le problème
Dès le début du partenariat, nous avions quelques intuitions quant à l'origine des frustrations. Mais avant de passer directement à la résolution des problèmes supposés, nous voulions valider nos hypothèses pour nous assurer que nos décisions et nos efforts de résolution de problème étaient fondés sur des faits.

### 1. Réfléchir et classer les hypothèses par ordre de priorité
Nous avons d’abord mené un remue-méninges d’équipe sur les sources possibles du problème. Ensuite, les hypothèses ont été classées selon l’incidence qu’elles auraient si elles étaient erronées. Ainsi, nous avons pu concentrer nos efforts sur la validation des hypothèses les plus percutantes.

Les voici :

* Les processus de sécurité du gouvernement ralentissent les cycles de développement itératifs.
* La réalisation d’une évaluation de sécurité prend de 60 à 90 jours.
* Les équipes de sécurité et d'application se renvoient constamment la balle plutôt que de travailler en collaboration, ce qui ralentit les échéances. 
* Les équipes se concentrent sur les éléments à cocher sans vraiment tenir compte du profil de risque et de la sécurité d'un système. 
* Il devrait y avoir un moyen plus itératif d'effectuer les activités d'évaluation de la sécurité.
* Les chefs d’activités évaluent leur risque de sécurité en fonction du rapport issu du processus d’évaluation de la sécurité.
* Il est possible d'être à la fois itératif et sécurisé.

### 2. Approfondir chaque hypothèse
Avec notre liste d'hypothèses hiérarchisées en main, nous avons choisi une méthode de recherche qui nous aiderait à mieux comprendre chacune d'elles. 

* Premièrement, nous avons ratissé large en lisant la documentation sur la façon dont les évaluations de sécurité des applications sont effectuées par d'autres organisations. 
* Ensuite, nous avons interviewé les personnes impliquées dans les évaluations de sécurité, à l'intérieur et à l'extérieur du gouvernement, en leur posant des questions ouvertes plutôt qu’orientées. 
* Enfin, nous nous sommes concentrés sur le contexte particulier du gouvernement du Canada. Nous avons interviewé neuf ministères de tailles différentes, avec divers appétits pour le risque, y compris des équipes de développement, des évaluateurs de sécurité et des responsables de l’approbation.

### 3. Recueillir et partager des perspectives 

À la fin de nos recherches, nous avions beaucoup de renseignements utiles sur les défis et les solutions potentielles.

Le plus important, c’est que nous avions acquis une meilleure compréhension des **défis particuliers auxquels les employés du gouvernement du Canada font face** lorsqu'ils essayent d'obtenir une autorisation d’exploiter en suivant le processus actuel (décrit dans le Cadre de gestion des risques liés à la sécurité des TI [ITSG-33] du Centre canadien pour la cybersécurité). Par exemple, on nous a expliqué que le processus actuel pouvait involontairement augmenter les risques en raison des cloisons qui existent entre les équipes de prestation et de sécurité; faisant de l’évaluation de la sécurité une vérification de la conformité plutôt qu’un effort continu de coopération fondé sur le risque. 

On nous a également communiqué que **d'autres organisations avaient mis en œuvre une approche de sécurité continue** pour répondre à certains des enjeux que nous avions validés. C’est-à-dire qu’on avait intégré l’expertise en matière de sécurité dans toutes les équipes et tous les rôles.
## Valider les hypothèses

Tout au long de ce processus, bon nombre de nos hypothèses ont été validées. Mais nous avons également capté quelques nuances que nous n'aurions peut-être pas repérées si nous n'avions pas fait de recherches supplémentaires. 

Par exemple, nous avions supposé que les équipes mettaient en œuvre l’ensemble des contrôles de sécurité compris dans l’ITSG-33, et plus particulièrement les contrôles du [profil 1 - Protégé B/Intégrité moyenne/Disponibilité moyenne](https://cyber.gc.ca/sites/default/files/publications/itsg33-ann4a-1-fra.pdf) du CCCS, parce qu’ils sont obligatoires. 
Grâce à nos recherches, nous avons appris que les équipes utilisaient le profil tel quel, sans l’adapter à leurs besoins opérationnels. Pour aider à résoudre la situation, l'équipe de cybersécurité a publié le [Guide de sécurité pour les solutions de systèmes d'information](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/services-informatique-nuage/guide-securite-solutions-systeme-information-nuage.html) afin de préciser les contrôles de base requis pour un système conformément à la [Politique sur la sécurité du gouvernement](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=16578). 
C'est un exemple parmi plusieurs que nous ne pouvons malheureusement pas inclure dans un seul billet de blogue. Mais si vous avez des questions sur l'approche de sécurité continue et les autres travaux qu’effectue le bureau du DPI pour aider à améliorer le processus d’évaluation de la sécurité, [écrivez-leur](mailto:zztbscybers@tbs-sct.gc.ca)!

## Nouveaux contextes, nouvelles hypothèses à valider

L'exercice de validation des hypothèses a été un rappel utile que nos expériences et nos hypothèses ne révèlent qu'une petite partie de l'histoire. Pour résoudre des problèmes de façon efficace, et dans notre cas, rendre les processus plus conviviaux, il fallait comprendre toutes les pièces du casse-tête afin de résoudre les problèmes selon la réalité des gens et non seulement nos hypothèses.

 Il est également important de comprendre que les contextes changent constamment (prenons l’exemple très pertinent de la pandémie de COVID-19), de sorte que les enjeux doivent être revus et les hypothèses revalidées. L'application d'une approche de sécurité continue axée sur le risque peut nous aider à y arriver, notamment dans le contexte d’un monde de plus en plus virtuel!
