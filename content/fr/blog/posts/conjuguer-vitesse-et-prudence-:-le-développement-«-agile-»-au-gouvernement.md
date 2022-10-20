---
layout: blog
title: 'Conjuguer vitesse et prudence : le développement « agile » au gouvernement'
description: >-
  Lorsqu’on travaille dans le domaine de la prestation de services numériques au gouvernement, il faut veiller tant à la rapidité qu’à la sécurité. Dans mon équipe agile au Service numérique canadien, le « succès » repose sur cet équilibre. C’est ce qui nous permet de lancer des produits qui répondent aux besoins des gens.
author: 'Paul Craig, développeur principal'
date: '2022-06-08T16:00:00.000Z'
image: https://de2an9clyit2x.cloudfront.net/banner_blog_fast_safe_agile_b003ff8c43.jpg
image-alt: Deux casques protecteurs. L’un pour la motocyclette représentant la vitesse, et l’autre à coque dure signifiant la prudence.
thumb: https://de2an9clyit2x.cloudfront.net/small_banner_blog_fast_safe_agile_b003ff8c43.jpg
translationKey: blog-fast-safe-agile
---
C’est le moment idéal de travailler dans le domaine de la prestation de services numériques. Les gens sont plus connectés que jamais et s’attendent à avoir accès à des services numériques modernes. Parallèlement, le développement agile — qui prévoit le développement et l’essai de prototypes en quelques semaines plutôt que de consacrer des années à la planification — s’est imposé. 

En tant que responsable technique au Service numérique canadien (SNC), je constate l’ensemble des défis que rencontrent les nouvelles équipes découlant du choc culturel entre les équipes agiles qui sont axées sur le code et les modèles d’approbation en cascade qui imposent un énorme fardeau administratif. Les ministères qui font l’essai d’équipes agiles veulent tout de même que celles-ci travaillent avec les structures d’approbation en place, ce qui exige que l’on adapte ces équipes aux cultures ministérielles existantes et que l’on fasse approuver leur travail comme toute autre équipe.

La capacité des équipes agiles à créer rapidement des prototypes et à communiquer avec les utilisateur·rice·s fait leur force. En revanche, leur faiblesse c’est la perception que ces pratiques comportent un risque excessif. Il est essentiel **de trouver un équilibre entre le lancement rapide d’un produit et la documentation requise par les processus de contrôle classiques**. Une bonne équipe agile doit donc conjuguer vitesse et prudence.

## La vitesse : l’avantage agile

Les équipes agiles sont un véritable atout. Certaines des plus grandes entreprises modernes doivent leur succès aux flux de travail agiles. Ceux-ci permettent une rentabilisation rapide des efforts, devançant ainsi les entreprises plus établies qui font appel à des modèles de prestation plus lents. 

En général, au sein d’une équipe agile, il convient de définir le produit minimum viable (MVP), puis de le tester auprès des utilisateur·rice·s le plus rapidement possible. La planification en cascade répond difficilement aux besoins des utilisateur·rice·s. La méthode agile, cependant, met l’accent sur la participation des utilisateur·rice·s dès les premières phases d’un projet. Non seulement les commentaires des utilisateur·rice·s permettent d’améliorer un produit, ils servent également de documentation interne qui renforce la crédibilité. 

Une fois qu’un produit fonctionne, il faut se consacrer aux éléments nécessaires pour son lancement. Mieux vaut lancer un service en version alpha que d’attendre un prototype interne impeccable. Bien sûr, la vitesse exige généralement un compromis en matière de sécurité. Par conséquent il faut trouver moyen d’équilibrer « vitesse » et « sécurité ». 

## L’agilité en toute sécurité

Il y a quatre principales raisons qui expliquent pourquoi le développement agile s’avère plus sécuritaire que le développement en cascade classique pour les équipes agiles.

1. **La méthode agile réduit les erreurs existentielles** dans la conception d’un service : la participation des utilisateur·rice·s dès les premières étapes d’un projet atténue le risque de lancer un service peu performant.

2. **La méthode agile réduit les coûts d’une erreur :** une amélioration fréquente implique des changements plus petits et plus fréquents. Les erreurs sont donc moins importantes et plus rapides à corriger.

3. **La méthode agile réduit la marge d’erreur** grâce à l’utilisation accrue de processus automatisés. Outre ces arguments orthodoxes en faveur de la méthode agile, il existe un dernier point plus philosophique à sous-peser.

4. **La méthode agile est, avant tout, une approche flexible qui permet une adaptation rapide.** Les équipes agiles ont une approche pragmatique pour la résolution de problèmes rencontrés par les utilisateur·rice·s.

Nous avons déjà abordé le premier point dans d’autres articles (voir les articles de blogue [Apprendre des gens qui veulent utiliser notre service de signalement](https://numerique.canada.ca/2019/08/29/apprendre-des-gens-qui-veulent-utiliser-notre-service-de-signalement-mais-qui-ne-lutiliseraient-peut-%C3%AAtre-pas-maintenant/) et [Tests de validation : une façon de remettre en question ses hypothèses](https://numerique.canada.ca/2019/07/31/tests-de-validation-une-fa%C3%A7on-de-remettre-en-question-ses-hypoth%C3%A8ses/)), examinons maintenant les autres points.

### La méthode agile réduit le coût des erreurs

Lorsque l’on essaie de prévenir les problèmes par la mise en place de comités successifs, l’on tombe dans un cercle vicieux. Toutes ces instances de gouvernance sont créées pour éviter des erreurs coûteuses, mais les coûts engendrés sont souvent élevés justement en raison d’un excès de gouvernance. En revanche, le développement de produits agiles *réduit le coût* des *erreurs*.  Les équipes qui publient de nouvelles versions quotidiennement peuvent corriger les bogues en quelques heures, alors que dans des situations de développement plus traditionnelles, il faut prévoir de 3 à 12 mois. 

### La méthode agile réduit le risque que des erreurs se produisent

La gouvernance classique en cascade s’appuie sur des humains pour vérifier les produits avant leur publication. Ce système s’avère coûteux à exploiter et difficile à adapter [^1]. Si l’on veut aller deux fois plus vite, l’on doit embaucher deux fois plus de personnel. En revanche, le développement de logiciels agile cherche à remplacer ce goulot d’étranglement par des tests automatisés qu’un ordinateur peut généralement effectuer en quelques secondes. Il est d’ailleurs très fréquent que la documentation relative à la sécurité soit obsolète (elle décrit le fonctionnement du système à un *point fixe* dans le passé), alors que les tests automatisés (créés par des audits réalisés par des personnes) ne nécessitent pas de documentation et sont à jour par leur nature même. 

### La méthode agile est flexible

Le deuxième principe du [Manifeste pour le développement agile de logiciels](https://agilemanifesto.org/) consiste à créer «  des logiciels opérationnels plutôt qu’une documentation exhaustive », ce qui s’avère être une bonne approche : miser sur la création du produit plutôt que sur la rédaction de longs documents Word ou de présentations PowerPoint. Le *premier* principe accorde toutefois la priorité «  aux individus et aux interactions plutôt qu’aux processus et aux outils ». Malheureusement, la gouvernance actuelle stipule que ces équipes doivent disposer d’une documentation complète. Les équipes de surveillance classiques exigent aux équipes de produits de produire une documentation écrite détaillée sur le fonctionnement et l’administration de leur système. Faute de cette documentation, il y a peu de chances que le projet soit approuvé. En tant qu’équipe agile du gouvernement, l’on doit fonctionner sous le principe « un logiciel fonctionnel » **et** une documentation complète ». 

## Plus rapide ou plus sécuritaire?

Pour récapituler, il y a deux éléments importants à considérer par les équipes agiles au sein de grandes organisations :

1. **Fournir de la valeur rapidement,** ce qui se traduit par offrir rapidement un produit aux utilisateur·rice·s, et ce, sans passer des années à faire de la planification.
2. **Gérer le risque (perçu),** c’est-à-dire se prémunir contre les erreurs et remplir la documentation correspondante.

Les équipes qui **agissent rapidement** optimisent la rapidité d’exécution et favorisent la conception rapide. En revanche, celles qui **misent sur la sécurité** consacrent plus de temps aux pipelines de test et à la rédaction de documents volumineux.

Ces deux points semblent être en contradiction l’un avec l’autre : d’un côté, si l’on veut une vitesse maximale, il ne faut pas écrire de tests, il faut plutôt se concentrer sur écrire du code, l’expédier et le tester en production en se fiant à de vrai·e·s utilisateur·rice·s pour trouver des bogues. D’autre part, l’on peut s’assurer d’un maximum de sécurité en ne publiant tout simplement rien. Un logiciel qui n’est jamais publié ne peut pas être piraté.

Où doit-on se situer dans ce continuum entre « vitesse » et « sécurité »? Pour répondre à cette question, l’on doit déterminer ce à quoi l’on est confronté·e. Par exemple, si les délais habituels de développement d’un produit sont de 2 à 3 ans, envisagez de lancer un service alpha en 6 à 9 mois. 

## Conclusion

En tant que praticien·ne·s agiles, nous sommes confronté·e·s à un enjeu clair au sein du gouvernement : les projets informatiques traditionnels du gouvernement ne parviennent souvent pas à fournir des produits qui mettent les utilisateur·rice·s au premier plan ou qui répondent à leurs attentes. Compte tenu de ces problèmes systémiques, il semble évident que nous devons adopter un modèle de réalisation de projets qui mise sur une rétroaction et une rentabilisation immédiates; un modèle qui connaît d’ailleurs un grand succès. Les équipes agiles en font ainsi plus avec moins de frais généraux et ont davantage confiance dans ce qu’elles construisent du fait que les produits sont testés auprès des utilisateur·rice·s.

Cependant, les équipes agiles au sein du gouvernement canadien fonctionnent dans des conditions assez difficiles, devant généralement s’adapter à une culture existante qui cherche à éviter tout risque possible. La principale force des équipes agiles consiste à livrer dans de brefs délais et à améliorer progressivement le produit. Cependant, pour ce faire, il faut bien livrer quelque chose! Dans ce contexte, il est extrêmement important de trouver un équilibre entre l’engagement envers la sécurité et le désir de lancer rapidement une version.

La combinaison de deux approches opposées présentera toujours des défis, mais il est important de rester concentré sur la prestation d’une valeur réelle aux citoyen·ne·s. Bref, l’on doit prouver que l’approche choisie fonctionne en la mettant en œuvre. Choisissez un produit, contrôlez rigoureusement sa portée, rendez-le accessible aux utilisateur·rice·s et racontez votre histoire en cours de route. La rapidité montre ce qui est possible, tandis que la sécurité garantit la viabilité.

-----
[^1]: [Dans le domaine de l’ingénierie de la fiabilité des systèmes, on définit ce travail répétitif et de faible valeur comme un «  labeur »](https://www.dotcom-monitor.com/blog/fr/2021/11/16/principes-sre-les-7-regles-fondamentales/)

