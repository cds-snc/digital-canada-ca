---
title: Les choix technologiques du SNC
description: >-
  Il y a quelques semaines, nous avons lancé notre campagne de recrutement
  publique dans le but d’embaucher des concepteurs, des développeurs, des
  scientifiques de données, des gestionnaires de produit et des experts en
  mobilisation. S’informant au sujet du volet des développeurs, certains nous
  ont demandé avec quelles plateformes technologiques et quels langages de
  programmation nous travaillons. Excellente question! L’un des aspects
  excitants de vous joindre au Service numérique canadien (SNC) si tôt dans
  notre existence est que vous aurez la chance de modeler la façon dont nos
  choix technologiques évoluent. Dans cet esprit, c’est-à-dire qu’aucune de ces
  technologies n’est définitive, j’ai pensé faire le point sur le raisonnement
  de notre équipe de développement à ce jour ainsi que sur les deux objectifs
  (en opposition) qui influencent nos choix technologiques.
author: 'Sean Boots, développeur'
date: '2017-11-06 09:00:00 -0400'
image: /img/cds/blog-technology-choices-at-cds-2017.jpg
image-alt: Un écran d'ordinateur montrant les résultats d'une série de tests.
translationKey: technology-choices-at-cds
thumb: /img/cds/thumbnails/blog-technology-choices-at-cds-2017.jpg
processed: 1550672962165
---
Il y a quelques semaines, nous avons lancé notre [campagne de recrutement publique](/travaillez-avec-nous/) dans le but d’embaucher des concepteurs, des développeurs, des scientifiques de données, des gestionnaires de produits et des experts en mobilisation. S’informant au sujet du volet des développeurs, certains nous ont demandé avec quelles plateformes technologiques et quels langages de programmation nous travaillons. Excellente question! L’un des aspects excitants de vous joindre au Service numérique canadien (SNC) si tôt dans notre existence est que vous aurez la chance de modeler la façon dont nos choix technologiques évoluent. Dans cet esprit, c’est-à-dire qu’aucune de ces technologies n’est définitive, j’ai pensé faire le point sur le raisonnement de notre équipe de développement à ce jour ainsi que sur les deux objectifs (en opposition) qui influencent nos choix technologiques.

## Être pragmatique et bouger rapidement

Lorsqu’il est question de réalisation de projets, le SNC concentre ses efforts à élaborer des services numériques de haute qualité et conviviaux. En termes pratiques, cela signifie habituellement développer des applications Web. En développant pour le Web, d’une manière accessible et inclusive, nous sommes en mesure de joindre un plus large éventail de gens que si nous développions (par exemple) des applications mobiles natives ou des logiciels pour ordinateurs. Il y a définitivement des cas où il serait logique de procéder ainsi, mais on introduirait alors des problématiques liées à l’entretien et à la pérennité, puisque les plateformes mobiles comme iOS et Android changent rapidement et les applications doivent être continuellement mises à jour. Les applications Web sont plus universelles, puisque quiconque ayant un navigateur Web peut les utiliser; elles sont plus simples à tester et à déployer que les applications mobiles natives.

Il existe un large éventail de langages et de cadres pour développer des applications Web. Si vous lisez ceci, vous avez probablement votre cadre préféré! Bon nombre de nos partenaires étrangers ([18F](https://18f.gsa.gov/) et [GDS](https://gds.blog.gov.uk/), par exemple) développent une part importante de leurs services et de leurs outils avec Ruby ou Python. Différentes plateformes (comme Rails ou Django) procurent de précieux avantages dans différents scénarios technologiques, et l’un de nos objectifs est de choisir la meilleure technologie pour un problème donné (plutôt que de commencer avec une technologie particulière en tête).

Dans le travail que nous avons fait jusqu’à maintenant, deux cadres et approches ont été davantage utilisés. En fait, il s’agit des cadres avec lesquels les développeurs principaux de notre petite équipe ont le plus d’expérience. [Dave](https://twitter.com/dsamojlenko) (qui a lancé la première instance [GitLab](https://about.gitlab.com/) du gouvernement fédéral) est un développeur PHP/Laravel et [Mike](https://twitter.com/dexterchief) (qui codirige la [rencontre Ottawa Graph](https://www.meetup.com/Ottawa-Graph/)) développe en React et JavaScript par pile complète (*full stack*). Les deux cadres sont radicalement différents de l’un et l’autre, mais je crois qu’il est sain de développer des projets avec les deux. Les deux cadres sont optimisés dans des objectifs différents.

## Objectif&nbsp;1&nbsp;: Optimiser pour la réutilisabilité

Le mandat du SNC consiste à [bâtir des prototypes et des solutions numériques](/ce-que-nous-faisons/) pour les ministères qui sont nos partenaires; ce sont eux qui déploieront et maintiendront ces services à long terme. Il est donc crucial que les équipes de TI de ces ministères soient en mesure de facilement prendre le relais. Au gouvernement fédéral, bon nombre de ces équipes sont spécialisées en .NET ou Java : des langages et des cadres qui sont normalisés depuis des années, mais qui ne sont pas particulièrement bien optimisés pour développer des applications Web rapidement.

[Laravel](https://laravel.com/) est un cadre PHP extrêmement flexible, qui jouit d’une communauté dynamique de développeurs, et qui propose un large éventail de progiciels libres, allant de rôles et permissions d’utilisateur complexes à l’intégration avec d’autres systèmes. Pour les développeurs habitués à .NET et Java, il est alors facile de comprendre les projets Laravel, d’en tirer des leçons et de s’y appuyer. Par conséquent, Laravel est un cadre utile pour les projets que nous codévelopperons avec d’autres équipes de TI du gouvernement.

Nous développons également l’un de nos premiers grands projets avec [DrupalWXT](https://github.com/drupalwxt/wxt), une version spécialisée de Drupal qui comprend l’ensemble des fonctionnalités d’accessibilité de la [Boîte à outils de l’expérience Web](http://wet-boew.github.io/wet-boew/index-fr.html). DrupalWXT offre une excellente fondation pour ce projet en particulier, puisque ce dernier pourrait comporter beaucoup de travail de personnalisation une fois la participation du SNC terminée. La région d’Ottawa compte une talentueuse communauté Drupal qui pourrait offrir un soutien, à l’intérieur comme à l’extérieur du gouvernement fédéral.

## Objectif&nbsp;2&nbsp;: Optimiser pour l’exploration technologique

En contrepartie, [React](https://reactjs.org/) (et plus généralement JavaScript par pile complète) a pris d’assaut la communauté du développement Web depuis la création de Node.js il y a quelques années. React (et les cadres JavaScript rivaux) est entouré de communautés de source libre enthousiastes, et des technologies telles que GraphQL introduisent des façons complètement nouvelles de bâtir des API et d’effectuer l’intégration avec d’autres services. Le modèle général est de bâtir des systèmes plus grands en créant de petites parties ou des microservices, composables, qui cadrent les uns avec les autres. React facilite cette tâche et les nouveaux services infonuagiques (particulièrement les systèmes sans serveur ou lambda) fonctionnent très bien avec cette approche.

Comme le dirait Mike, les compétences utilisées pour bâtir des projets React sont presque totalement différentes de celles utilisées pour bâtir des cadres MVC plus traditionnels. Il est fascinant de l’observer développer des composantes et des projets dans React : les produits finaux sont éblouissants, mais la courbe d’apprentissage est considérable.

## La voie de l’avenir

Puisque notre organisation a le mandat d’expérimenter et de démontrer ce qui est possible avec l’élaboration de services numériques, je crois qu’il est important de bâtir des choses avec les mêmes technologies de pointe que nos pairs du secteur privé. Il est toutefois tout aussi important de bâtir des choses que nos collègues du gouvernement peuvent facilement déployer, adapter et mettre en œuvre. Avoir une combinaison de projets PHP et JavaScript par pile complète nous permet de faire les deux et d’optimiser soit pour la réutilisabilité, soit pour l’expérimentation, selon le projet.

Un autre aspect important de notre travail est d’aider nos collègues du gouvernement à expérimenter. Si vous êtes un développeur travaillant dans une « unité .NET » et souhaitez développer quelque chose dans un nouveau cadre ou langage de programmation, il nous ferait plaisir d’en jaser avec vous. Nous vous ferons part de nos constats, lorsque les choses fonctionnent et lorsqu’elles ne fonctionnent pas, et si nous pouvons vous aider à utiliser des outils de pointe, nous le ferons.

Qu'en pensez-vous? Passons-nous à côté du meilleur et du plus récent cadre moderne? Nous aimerions vous entendre. Tout notre code est sur GitHub et nous ne faisons que commencer avec les nouveaux projets. Faites-nous signe sur [Twitter](https://twitter.com/SNC_GC) lorsque vous avez des questions. Si vous êtes intéressé à vous joindre à l’équipe, [postulez maintenant](/travaillez-avec-nous/)! Nous serons heureux de vous avoir à nos côtés pour cette aventure.

