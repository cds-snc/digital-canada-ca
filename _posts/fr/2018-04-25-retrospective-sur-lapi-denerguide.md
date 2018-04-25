---
title: "Rétrospective sur l’API d’ÉnerGuide : beaucoup de « premières » et de leçons "
description: "Alors que notre partenariat avec Ressources naturelles Canada (RNCan) pour l’API (interface de programmation d’applications) d’ÉnerGuide tire à sa fin, l’équipe de produit du Service numérique canadien (SNC) a tenu une rétrospective pour réfléchir à son expérience, à ses réalisations et aux leçons à retenir."
author: Jennifer Fletcher, Partenariats
date: 2018-04-25 09:00:00 -0400
image: blog-energuide-retro.jpg
image-alt: Sept membres de l’équipe sont assis autour d’une table. Ils regardent deux personnes debouts devant eux qui regroupent des papiers autocollants (« post-it ») sur le tableau blanc.
lang: fr
layout: cds/post
trans_url: "/2018/04/25/retrospective-on-EnerGuide-api"
---

Alors que notre partenariat avec Ressources naturelles Canada (RNCan) pour l’API (interface de programmation d’applications) d’ÉnerGuide tire à sa fin, l’équipe de produit du Service numérique canadien (SNC) a tenu une rétrospective pour réfléchir à son expérience, à ses réalisations et aux leçons à retenir.

## Qu’est-ce qu’une rétrospective?

Une rétrospective ou «&nbsp;rétro&nbsp;» est une technique souvent utilisée dans le monde du développement agile à la fin d’un sprint. Un sprint vise à accomplir quelque chose dans un laps de temps donné (au SNC, nous effectuons des sprints de deux semaines). Chaque sprint contient les éléments suivants&nbsp;:

* un objectif de ce qui doit être élaboré;
* une conception;
* un plan souple qui guide l’élaboration;
* l’élaboration;
* le résultat de l’élaboration (au minimum une certaine augmentation de la fonctionnalité utilisable).

Au SNC, nous faisons une rétrospective à la fin de chaque sprint afin d’étudier ce qui a fonctionné, ce qui n’a pas fonctionné et ce que nous aurions pu faire différemment. Chaque équipe fait les choses un peu différemment, mais dans le cas qui nous occupe, les membres de l’équipe ont eu quelques minutes pour répondre indépendamment aux questions suivantes&nbsp;:

* Qu’est-ce qui s’est bien passé pendant ce sprint?
* Qu’est-ce qui ne s’est pas bien passé pendant ce sprint?
* Commentaires généraux ou questions

Les membres de l’équipe doivent écrire leurs réponses sur des papiers autocollants (« post-it »); ceux qui sont à distance les transmettent de façon électronique. Lorsque tout le monde a terminé, chacun prend une minute pour expliquer ses réponses au groupe.

À mesure que les membres font part de leurs réponses à ces trois questions, des thèmes commencent à émerger. L’animateur de la rétrospective regroupe les réponses par thème. Les membres de l’équipe devront ensuite voter sur ces thèmes.

Une fois que tout le monde a expliqué ses réponses, chaque membre peut voter pour un maximum de trois thèmes qui feront l’objet de la discussion en équipe. Les thèmes ayant récolté le plus grand nombre de votes font l’objet de discussions plus approfondies, ce qui génère des leçons tirées pour l’équipe de produit.

Voici ce que nous avons tiré de notre rétrospective finale concernant l’API d’ÉnerGuide.

## Leçons retenues

* **La communication au sein de l’équipe doit aller au-delà des réunions informelles quotidiennes**. Les «&nbsp;réunions debout&nbsp;» quotidiennes sont une excellente façon de garder tout le monde sur la même longueur d’onde, de soulever les problèmes et de mettre rapidement à jour les nouveaux membres de l’équipe. Toutefois, pour s’assurer que tout le monde travaille en équipe et éviter qu’il se forme des équipes au sein de l’équipe (c’est-à-dire la recherche, la conception, le développement, etc.), les membres doivent communiquer entre eux tout au long de la journée.

* **Il faut intégrer des réunions hebdomadaires informelles des partenaires dès la phase de découverte**. Notre partenariat avec RNCan comprenait des réunions hebdomadaires informelles avec nos partenaires, ce qui a contribué à ce que notre partenaire soit sur la même longueur d’onde que nous en ce qui concerne le travail accompli, le travail à accomplir et tout obstacle à éliminer. Le fait de commencer cette pratique à la phase de découverte (plutôt qu’à la phase d’élaboration) aurait été une excellente occasion d’apprentissage pour notre partenaire et aurait pu aider à mieux comprendre les besoins des utilisateurs.

* **Il faut effectuer la recherche utilisateur auprès des utilisateurs finaux**. Il est devenu évident dans les débuts de notre recherche utilisateur que certains utilisateurs à qui nous parlions étaient des intermédiaires par rapport aux utilisateurs à qui nous devions parler. En effectuant des recherches pour savoir qui était l’utilisateur final, nous avons obtenu les renseignements précis dont nous avions besoin.

* **Aucune décision liée à la conception n’est trop petite pour les tests d’utilisation**. Pour démontrer la capacité de l’API aux utilisateurs non techniques, nous avons mis sur pied une page Web de faisabilité. Des tests d’utilisation ont été effectués pour déterminer si un outil de recherche prédictif fonctionnerait pour les utilisateurs. Même s’il s’agissait d’une très petite tâche pour les utilisateurs, les renseignements recueillis se sont avérés inestimables pour déterminer l’orientation de la conception.

* **Un chef de produit attitré ayant une vision unique pour le produit est essentiel pour remettre en question les hypothèses et assurer l’harmonisation au sein de l’équipe de produit**. Comme il s’agissait de l’un de nos premiers partenariats, nous avons dû effectuer le travail sans chef de produit attitré. Bien que quelques membres de l’équipe aient fait un bon travail en se partageant les responsabilités liées à une telle fonction, un chef de produit attitré nous aurait permis de gagner du temps et d’éviter des problèmes en cours de route.

* **Il faut travailler dans les mêmes locaux lorsque c’est possible**. Le fait de nous installer dans les locaux de RNCan nous a aidés à adapter notre renforcement des capacités pour répondre aux besoins des développeurs de RNCan avec qui nous travaillions. De plus, l’installation des développeurs de RNCan dans les locaux du SNC a permis à ces derniers d’avoir une idée de notre façon de travailler.

Alors que nous terminions le sprint final de l’API d’ÉnerGuide de RNCan, un des thèmes ressortis était qu’il s’agissait de « premières » pour l’Office de l’efficacité énergétique. Avec des [tests automatisés](https://numerique.canada.ca/2018/03/26/les-tests-automatises/) et en utilisant [GraphQL](https://graphql.org/learn/) pour développer l’API, nous avons innové. Plus important encore, nous avons pu aider RNCan à prendre conscience de l’importance de mettre les utilisateurs au centre de la conception du produit et à se mouiller en adoptant des pratiques de développement modernes.
