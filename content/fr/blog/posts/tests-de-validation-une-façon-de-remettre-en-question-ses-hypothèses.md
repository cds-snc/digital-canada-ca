---
layout: blog
title: 'Tests de validation: une façon de remettre en question ses hypothèses'
description: >-
  Le recours aux tests de validation pour déceler les problèmes fondamentaux
  liés au concept de service de base permet à notre équipe de savoir si nous
  allons dans la bonne direction dès le début, ce qui, en définitive, limite les
  risques, tout en faisant gagner du temps et en économiser de l’argent à long
  terme.
author: 'Hillary Lorimer, chercheuse en conception'
date: 2019-07-31T20:09:21.155Z
image: /img/cds/colourful-cactuses.jpg
image-alt: >-
  Cinq cactus de couleur différente (orange, rouge, vert, rose et jaune) placés
  côte à côte dans des pots blancs et devant un fond blanc.
translationKey: validation-testing-cra
thumb: /img/cds/thumbnails/colourful-cactuses.jpg
processed: 1564689903502
---
Placer les gens au centre de notre travail, c’est aussi avoir confiance qu’ils sont les experts de leur contexte et de leurs besoins. 

Lorsque nous cernons un problème que nous voulons régler, nous trouvons une solution. Cependant, aux premières étapes de l’élaboration d’un service gouvernemental, nous devons garder à l’esprit que **nos hypothèses sont sans doute erronées.** En effet, nous ne sommes pas les utilisateurs du service. Si nous ne pouvons pas nous fier uniquement à nos perspectives étroites pour comprendre pleinement l’expérience du service, nous devons nous tourner vers les experts : **les gens qui utiliseront le service en question.** 

L’an dernier, nous avons établi un partenariat avec l’Agence du revenu du Canada dans le cadre d’un projet qui vise à lever les barrières qu’ont à franchir les personnes à faible revenu dont la situation fiscale est simple lorsqu’elles font leurs impôts et accèdent à leurs prestations. Nous avons terminé la phase découverte, qui consistait à comprendre, grâce à la recherche, les obstacles auxquels les gens font face lorsqu’ils produisent une déclaration de revenus et [ce dont ils ont besoin pour les surmonter](https://twitter.com/SNC_GC/status/1131205986264469505). Pour passer à la phase alpha, nous nous sommes concentrés sur la mise à l’essai et l’amélioration de solutions possibles à ces problèmes afin de déterminer la meilleure façon de répondre aux besoins des déclarants. 

Nous en sommes arrivés à un point où nous avons une idée claire de la solution, mais il nous faut encore quelques semaines pour transformer ce concept en un prototype fonctionnel. Les prototypes de conception non fonctionnelle sont légers et ne prennent pas trop de temps à être créés. Ainsi, plutôt que d’attendre d’avoir « la vraie chose », nous avons décidé de mettre à l’essai ce que nous avions, soit le concept de base. Pour ce faire, nous avons procédé à des **tests de validation,** une approche qui nous a permis de remettre en question nos hypothèses concernant les besoins et les attentes des gens lorsqu’ils produisent une déclaration de revenus.

## Mais une minute... c’est quoi, les tests de validation?

Les tests de validation sont l’une des premières façons de tester une conception ou un prototype. L’objectif est de s’assurer qu’un concept de base, _soit la façon dont nous décidons de résoudre un problème,_ correspond à la façon dont les gens pensent au problème, et qu’il résout ce dernier en considérant le contexte de leur vie.

Des développeurs comme Paul utilisent ces renseignements pour améliorer et itérer la mise en œuvre technique du service : 

> « En tant que responsable technique de l’équipe, je suis chargé d’informer la direction des prototypes fonctionnels et, au final, d’élaborer le service en ligne. Dans le développement de tout service, c’est la mise au point d’une solution fonctionnelle à fidélité élevée qui demande le plus d’énergie et de temps. Les tests de validation, qui consistent à présenter le concept aux personnes qu’on veut aider et à obtenir leur réaction, est la première étape pour valider que le service mérite vraiment d’être créé.
>
> Du point de vue d’un développeur, le plus tôt est le mieux. Une fois que nous avons une idée approximative de la façon de résoudre le problème, nous devons la tester le plus tôt possible pour nous assurer que nous sommes sur la bonne voie. L’une des raisons de faire partie d’une équipe multidisciplinaire est l’idée de travailler tout au long du cycle de vie d’un problème, c’est-à-dire de comprendre les diverses sources d’irritation, puis de proposer une solution qui répond aux besoins des gens. » 
> —Paul Craig, développeur

Les tests de validation ne remplacent pas les tests d’utilisabilité. Ceux-ci constituent un outil de recherche indispensable pour déceler les problèmes liés à une interface numérique et déterminer les autres facteurs à prendre à considération qui ont une incidence sur l’utilisabilité. Les tests de validation sont utiles lorsqu’il n’y a pas d’interface fonctionnelle, car ils permettent à l’équipe de se concentrer sur le **concept de base,** c’est-à-dire ce que nous demandons à quelqu’un de faire et si cela est cohérent ou non dans le contexte de sa vie. 

## Comment les tests de validation nous ont aidés jusqu’à présent...

Notre opinion personnelle du monde est limitée, de sorte qu’une partie de la conception des services pour d’autres consiste à les tester à plusieurs reprises auprès des gens qui seront appelés à les utiliser. Pour ce faire, nous demandons aux gens de nous guider à travers le service selon leur perspective et de nous dire ce dont ils ont besoin pour atteindre leurs objectifs.

Vous n’avez pas besoin d’un site Web entièrement fonctionnel pour effectuer des tests de validation — vous avez seulement besoin d’un outil qui communique le concept assez bien pour que les participants se voient l’utiliser. Au début du mois dernier, nous avons mis au point un prototype cliquable qui communiquait grosso modo notre concept de service. Nous l’avons testé auprès de participants de banques alimentaires communautaires afin de cerner les problèmes que posaient nos hypothèses initiales et de valider si le service répondait ou non à leurs besoins. Ce fut une leçon d’humilité et une expérience utile permettant de rectifier certaines de nos hypothèses. 

L’une de nos hypothèses de départ était que les déclarants font eux-mêmes leurs impôts. Grâce aux tests de validation, nous avons appris que de nombreuses personnes délèguent la production de leur déclaration de revenus à un autre membre de leur famille. Cette constatation a réfuté notre hypothèse voulant que la personne qui recevrait la lettre d’invitation à utiliser le service en ligne serait également celle qui utiliserait le service.

Permettre à notre équipe de remettre en question des hypothèses fondamentales sur le concept de base d’un service nous aide à savoir si nous allons dans la bonne direction dès le début, au moment où il est facile de rectifier le tir. Au bout du compte, cela limite les risques et nous fait économiser du temps et de l’argent à long terme. 

## Et ensuite?

Même après avoir trouvé une solution basée sur la recherche avec les gens qui utiliseraient notre service, nous reconnaissons que **notre solution n’est qu’une hypothèse**. 

À mesure que nous avançons en phase bêta avec notre projet, nous nous attendons à tester cette hypothèse à maintes reprises. Nous prévoyons effectuer d’autres itérations en menant des recherches supplémentaires et en utilisant des méthodes comme les tests d’utilisabilité. 

Vous voulez en savoir plus sur les tests de validation et la façon de les intégrer à votre travail? Communiquez avec nous par [courriel](mailto:cds-snc@tbs-sct.gc.ca) ou sur [Twitter](https://twitter.com/SNC_GC). Nous serons ravis d’échanger avec vous.

