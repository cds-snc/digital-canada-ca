---
layout: blog
title: >-
  À l’écoute des utilisateurs : amélioration de l’outil de recherche de
  prestations liées à la COVID-19
description: >-
  Article de blogue au sujet de l’ajout d’une zone de commentaires à l’outil «
  Trouver de l’aide financière pendant la COVID-19 » à l’aide du modèle de
  Canada.ca. On y parle du type de commentaires reçus et du traitement des
  renseignements personnels qui peuvent s’y faufiler.
author: 'Adrianne Lee, chercheuse'
date: 2020-07-06T20:39:16.171Z
image: https://de2an9clyit2x.cloudfront.net/adrianne_blog_fr_bf220fb4f8.jpg
image-alt: >-
  Illustration d’un service en ligne qui reçoit des commentaires écrits sur son
  utilisabilité de la part de 8 personnes différentes.
translationKey: blog-ffhc19-feedback
thumb: https://de2an9clyit2x.cloudfront.net/small_adrianne_blog_fr_bf220fb4f8.jpg
---
Le 7 mai, nous avons lancé discrètement l’outil en ligne « [Trouver de l’aide financière pendant la COVID-19](https://covid-prestations.alpha.canada.ca/fr/debut) », en partenariat avec Service Canada. Le but de cet outil codéveloppé est de réduire le stress financier que subissent les Canadiens et les Canadiennes pendant la pandémie. En demandant aux gens de répondre à quelques questions simples de façon anonyme, l’outil leur fournit une liste de prestations adaptée à leur situation. La zone de commentaires que nous y avons incluse a eu une incidence considérable sur notre capacité à améliorer l’outil, grâce aux gens qui l’ont utilisée chaque jour.

Tout au long du développement du produit, nous avons mené des recherches sur la conception en facilitant de multiples rondes de tests d’utilisabilité assez brefs, et en réalisant un sondage pour nous assurer que nous construisions le meilleur outil pour les gens, et ce, le plus rapidement possible. Dès que nous avons lancé l’outil, nous avons commencé à recueillir des données en temps réel afin de pouvoir régler rapidement les problèmes et répondre aux besoins des utilisateurs.

## Zone de commentaires

Nous avons notamment recueilli des données en temps réel au moyen d’un formulaire de rétroaction muni d’une zone de commentaires. Les spécifications de Canada.ca exigent qu’il y ait sur chaque page un formulaire intitulé « Signaler un problème ou une erreur sur cette page ». Une fonction de zone de commentaires est aussi possible pour les pages Web dans le cadre du système de conception de Canada.ca. Nous avons modifié les options pour mieux les adapter au contenu de notre produit. Nous avons ajouté une zone de commentaires parce que nous avons décidé, en tant qu’équipe, qu’il nous fallait bien comprendre ce que les gens veulent dire précisément au sujet de l’outil quand ils signalent que des renseignements sont « incorrects » ou « portent à confusion ». Le texte libre a fourni des données informatives sur diverses façons dont nous pouvions améliorer notre outil. Même si cela n’était pas notre but, nous avons beaucoup appris sur la façon d’améliorer les services gouvernementaux en général.

![Capture d’écran de la zone de commentaires dans l’outil « Trouver de l’aide financière pendant la COVID-19 »](https://de2an9clyit2x.cloudfront.net/adrianne_blog_screenshot_fr_8e838e0f18.jpg)

Les commentaires que nous avons reçus en temps réel nous ont aidés à cerner les domaines où l’outil ne répondait pas aux besoins des personnes qui l’utilisaient. Ces commentaires ont aussi éclairé l’équipe sur les questions de recherche qui devraient être abordées à l’avenir.

## Remédier aux problèmes

Le fait d’avoir une boîte de texte sur un site Web gouvernemental nous a amenés à aborder trois principaux problèmes. Le premier concernait le fait que les utilisateurs pouvaient soumettre des renseignements identificatoires (p. ex. nom, numéro d’assurance sociale, adresse, lieu de travail, etc.) dans la zone de commentaires, et ces renseignements allaient ensuite être transférés dans un système non conçu pour eux. Il s’agit là d’une préoccupation très valable pour la protection des renseignements de nature délicate.

Pour y remédier, nous avons ajouté une phrase au-dessus de la boîte de texte : « N’écrivez pas de renseignements personnels ou financiers. Nous utilisons ces renseignements pour améliorer ce service, mais nous ne vous répondrons pas. » Malgré cela, certaines personnes inscrivent des renseignements identificatoires dans la zone de commentaires, de sorte qu’une équipe de surveillance des commentaires a dû faire des quarts de travail pour les supprimer. De cette façon, si quelqu’un laissait son numéro de téléphone dans son commentaire, ce numéro était retiré dans l’heure qui suivait, ou dans la première heure du jour ouvrable suivant si le numéro de téléphone était laissé pendant une fin de semaine.

Au cours du premier mois, nous avons reçu plus de 1 400 commentaires, et seulement 86 avaient des renseignements à supprimer.

Le deuxième problème dont il a fallu tenir compte lorsqu’on utilise une boîte de texte sur un site Web du gouvernement du Canada est le risque qu’une personne puisse soumettre du contenu nuisible (soit des menaces à la vie, du harcèlement ou du contenu qui n’est tout simplement pas sécuritaire) dans la zone de commentaires. Cela se produit très rarement et peut prendre d’autres formes, par exemple des appels téléphoniques abusifs, des problèmes GitHub non sollicités ou des courriels. C’est plus courant lorsqu’on travaille ouvertement, et c’est notre cas. Même si cela se produit très rarement, les équipes de produits doivent tout de même envisager cette possibilité et mettre en place des protocoles avec leurs responsables de la sécurité, soit le Centre de la sécurité des télécommunications ou la Gendarmerie royale du Canada. En raison de ce problème de sécurité, un membre de l’équipe a dû surveiller régulièrement les commentaires pour y déceler toute menace.

Le troisième problème de l’équipe concernait la charge de travail potentiellement trop élevée sur le plan de la surveillance et du traitement des commentaires. Cela représente certainement beaucoup de travail et, comme pour toute activité de recherche, les équipes devraient tenir compte de la valeur que cette activité peut apporter au développement du produit.

En ce qui concerne notre équipe, nous avons décidé que la valeur des renseignements que nous pouvions recueillir à partir d’une zone de commentaires dans notre formulaire de rétroaction valait l’effort déployé. Compte tenu du court délai dont nous disposions pour mener la recherche avant le lancement, cette option pouvait aider à faire ressortir les besoins en constante évolution des utilisateurs.

## Évaluer les commentaires

Pour chaque commentaire, nous examinons d’abord le champ d’application de notre produit et nous évaluons si un commentaire s’y rapporte.

Dans le développement de produits, [on utilise parfois un gâteau étagé pour décrire la méthodologie agile](https://twitter.com/nkkl/status/1066571295784022016). Cette analogie est utile pour expliquer comment nous déterminons la pertinence d’un commentaire.

![Commentaire utile (représenté par des fraises et un morceau de gâteau aux fraises) ou commentaire non utile (représenté par un poisson et une soupe de poisson)](https://de2an9clyit2x.cloudfront.net/adrianne_blog_infrographic_fr_25c0c76b18.jpg)

Si on compare la création de l’outil « Trouver de l’aide financière » à la préparation d’un gâteau, les prestations et les programmes affichés dans l’outil sont un peu comme les ingrédients du gâteau. Ils jouent un rôle important dans le goût et la sensation du gâteau et, en fin de compte, dans son utilité pour la personne qui le mange.

Ce type de commentaires est donc pertinent pour le champ d’application de notre produit, car il a une incidence directe sur le problème que nous essayons de résoudre, c’est-à-dire aider les Canadiens à trouver de l’aide financière et réduire le stress financier causé par la pandémie.

Les commentaires sur les autres outils gouvernementaux, les processus de demande, les centres d’appels ou les politiques sans incidence sur les prestations ou les programmes visant à réduire le stress financier sont moins liés à notre produit. Dans notre analogie, ce type de commentaires constitue un aliment tout à fait différent (comme les ingrédients d’une soupe de poisson et une soupe de poisson). Voici quelques exemples de commentaires pertinents que nous avons relevés et que nous avons pu régler grâce au formulaire de rétroaction muni d’une boîte de texte :

* Les personnes qui touchent des prestations d’invalidité n’ont pas été en mesure de choisir une réponse aux premières questions de notre outil. Comme solution provisoire, nous avons donc ajouté l’option « Aucune de ces options » pour permettre aux gens de passer à la page de résultats de l’outil.
* Les étudiants n’ont pas été en mesure de choisir une réponse aux premières questions de notre outil. Nous avons ajouté des options qui incluent des situations touchant les étudiants.
* Des gens nous ont dit que la première page les rendait perplexes à cause du texte : « Êtes-vous un Canadien coincé à l’étranger? » Nous avons enlevé ce texte.
* Après avoir constaté que de nombreuses personnes laissaient des commentaires à la première page, nous avons modifié le contenu de cette première page pour établir des attentes plus claires sur la nature de l’outil. Selon notre analyse Web, ce changement a contribué à une augmentation de 9 % du nombre de personnes qui ont cliqué sur le bouton « Commencer » à la première page.

Toute méthode de recherche a ses limites. Comme le formulaire est en quelque sorte un sondage, nous ne pouvions pas poser des questions de suivi aux personnes qui ont eu des problèmes. Certains problèmes mentionnés dans les commentaires nous incitent à explorer d’autres questions de recherche.

* Y a-t-il d’autres problèmes qui amènent les gens à laisser plus de commentaires sur la première page par rapport aux autres pages de l’outil?
* Si les aînés laissent plus de commentaires sur les premières pages de l’outil, cela signifie-t-il que l’outil n’est pas aussi utile pour eux?
* Comme nous avons reçu proportionnellement plus de commentaires des utilisateurs francophones par rapport au nombre de visiteurs uniques, cela veut-il dire que l’outil est moins utile pour les francophones que pour les anglophones?

À la fin juin, Service Canada a pris le relais pour la gestion de l’outil, les futures recherches et les itérations. Au cours du lancement initial et de la phase d’essai de l’outil, nous avons constaté que la zone de commentaires dans l’outil « Trouvez de l’aide financière pendant la COVID-19 » n’allait peut-être pas répondre à toutes nos questions de recherche. Toutefois, cela n’enlève rien au fait qu’elle soit incroyablement utile. Même si les commentaires que nous avons reçus nous amènent à nous poser beaucoup plus de questions, ils nous en disent beaucoup sur les personnes qui utilisent l’outil, les éléments qui peuvent générer un problème et les changements que nous pouvons apporter pour que cette expérience soit meilleure et plus utile.

Avez-vous déjà essayé d’entrer du texte dans une boîte de commentaires d’un outil ou service en ligne du gouvernement du Canada? Nous serions ravis de connaître vos impressions. N’hésitez pas à communiquer avec notre [communauté de chercheurs](mailto:rc-gc-dr@cds-snc.ca).
