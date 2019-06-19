---
layout: blog
title: 'La sécurité, c’est difficile. Mais c’est aussi nécessaire et gérable.'
description: Explication de la sécurité numérique grâce à la sécurité dans les aéroports.
author: 'Tim Arney, développeur'
date: 2019-06-20T13:00:11.700Z
image: /img/cds/airplane.jpg
image-alt: >-
  L’application utilise un fichier ESLint pour faire une analyse statique de
  programmes.
translationKey: security-hard
thumb: ''
processed: ''
---
La sécurité numérique, c’est difficile. Même les meilleures équipes d’ingénieurs et de spécialistes des TI sont susceptibles de faire des erreurs à un moment donné. Mais tout comme la sécurité dans les aéroports, les étapes et les processus en place sont là pour votre sûreté.

## Hypothèses de base

En ce qui concerne la sécurité de votre code, nous pouvons émettre certaines hypothèses :
* *Votre posture de sécurité se détériore avec le temps.* Des itérations du processus seront toujours nécessaires tandis que les technologies se modernisent.
* *L’autosurveillance est inefficace.* Les aéroports ne laissent pas simplement les passagers « s’autosurveiller » lorsqu’ils passent aux détecteurs de métal.
* *Nous devons assurer une surveillance constante.* Quelqu’un doit être attentif en tout temps, pas seulement au début.

## Le changement est constant

Que vous adoptiez une méthode agile ou en cascade, à un certain moment, vous allez devoir apporter des changements à votre code. Lorsque vous introduisez de nouvelles fonctionnalités ou faites des mises à jour, la surface d’exposition de ce que vous construisez change. Certaines parties de votre code peuvent être justes à un moment donné, mais pas nécessairement plus tard. C’est ce que nous appelons la « détérioration ». La détérioration peut se produire de bien des façons. Manifestement, il y a une vulnérabilité à cet égard. 

Par exemple, le contenu de vos bagages va changer avec le temps. Au début de votre voyage, vos bagages sont à peu près vides; au retour, vous rapportez beaucoup de souvenirs. Mais les agents de sécurité de l’aéroport ne croiront pas que le nouveau contenu est sûr simplement parce qu’ils ont déjà vu votre valise.

## Vérification d’identité

Dans un aéroport, vous passez par une série de points de contrôle pour confirmer que vous êtes bien qui vous dites être. Votre passeport et votre carte d’embarquement sont vérifiés à plusieurs endroits, depuis votre arrivée à l’aéroport jusqu’à votre embarquement.

Pour ce qui est du code, nous suivons le même type de démarche. Nous pouvons soumettre notre code à une série de vérifications et de tests pour prouver qu’il fonctionne comme prévu. Veiller ainsi à ce que tous nos codes fonctionnent prévient le déploiement de codes douteux.

Et si nous pouvions automatiser ces vérifications de sécurité? 

## Rapports automatiques

Compte tenu de l’infrastructure et des outils de développement actuels, il devrait être possible de vérifier automatiquement un grand nombre des contrôles de sécurité énumérés dans l’[ITSG-33](https://www.cse-cst.gc.ca/fr/system/files/pdf_documents/itsg33-overview-apercu-fra_1.pdf). L’ITSG-33 est un document d’orientation en matière de sécurité que le gouvernement du Canada a mis en place pour tous les ministères.

À l’heure actuelle, en matière de sécurité, nous savons que les contrôles d’assurance de la qualité doivent être mis en œuvre et vérifiés dans le cadre d’un processus manuel. En général, cela signifie qu’il faut assembler et imprimer manuellement un document ou une série de documents. C’est comme si le système de sécurité de l’aéroport imprimait tous vos renseignements et les transmettait à la prochaine personne qui devait scanner votre passeport. Ça ne peut pas continuer comme ça, n’est-ce pas?

## Ce que nous avons fait 

Notre mission était simple : construire un prototype et en faire l’essai lors de recherches menées auprès d’utilisateurs potentiels. C’est précisément ce que nous avons fait. Voici comment.

Pour assurer la sécurité de nos déploiements et éviter de créer manuellement ces documents volumineux, notre but était de développer une série de vérifications qui s’effectuent à chaque déploiement de nos applications. Nous voulions aussi que les résultats de ces vérifications automatiques soient disponibles par l’intermédiaire d’une API. Grâce à ces mesures, nous pouvons :
* nous assurer que nos contrôles ne se détériorent pas avec le temps;
* réexécuter nos vérifications automatiquement et créer des rapports à jour dès qu’il y a des changements;
* exécuter des vérifications lorsque nous libérons un nouveau code ou lorsque nous redémarrons nos conteneurs.

## Objectifs

* Incorporer les examens de sécurité dans un pipeline d’intégration continue. À mesure que le code est déployé, les vérifications de sécurité se font automatiquement et sont déclenchées à chaque version.
* Tirer parti des fonctions existantes et utiliser des API communes pour effectuer des vérifications. Pourquoi réinventer la roue s’il existe déjà quelque chose qui fonctionne très bien? 
* Dissocier les vérifications de l’outil de production de rapports. Cela veut dire que peu importe le langage que vous choisissez pour écrire votre code, l’outil de rapports peut quand même faire des vérifications. 
* Publier les rapports au moyen de plusieurs canaux en temps réel (GraphQL, PDF, Web). Si nous devons encore imprimer des documents pour prouver que notre travail est sécuritaire, au moins, nous n’avons plus à le faire manuellement.

### Notre solution

Nous avons créé une série de vérifications visant à confirmer que notre infrastructure et notre code fonctionnent comme prévu. Lorsqu’un contrôle se termine, un rapport est produit dans un répertoire partagé sous la forme d’un fichier contenant les résultats.

### Comment nous avons procédé, étape par étape
1. Lorsque l’application est déployée, elle déclenche une liste de tâches (vérifications) à exécuter.
2. Les tâches sont des conteneurs rédigés dans différents langages de programmation (Go, Rust, JavaScript, Crystal).
3. Chaque conteneur écrit un fichier JSON, étiqueté avec le numéro d’identité, dans un répertoire partagé.
4. Nous avons une application JavaScript qui surveille un répertoire partagé et ingère les fichiers JSON.
5. Les résultats sont sauvegardés dans MongoDB et regroupés par version et contrôle.
6. Cette application fournit les données à l’aide d’une API GraphQL.
7. Nous avons une application JavaScript destinée au public qui transforme les données dans un format convivial.

Montrez-moi le code d’[Objectifs de sécurité](https://github.com/cds-snc/security-goals).

## Prochaines étapes

Nous venons tout juste de commencer à prouver nos hypothèses. Nous sommes à en faire l’essai dans le cadre de certains services auxquels nous travaillons au SNC. Au fur et à mesure, nous rédigerons des « conteneurs de vérification » réutilisables et nous travaillerons avec les équipes de sécurité de nos partenaires pour déterminer exactement dans quelle mesure il est possible d’automatiser ces vérifications.
