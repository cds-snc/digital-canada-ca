---
title: "Coder\_: Une activité d’équipe"
description: >-
  D’après notre expérience, le développement de logiciels doit être un effort
  d’équipe. Cela ne veut pas dire que plusieurs développeurs contribuent
  individuellement à une seule base de code; au contraire, toute l’équipe est
  responsable de chaque ligne de code.
author: 'Jason White, chef, sciences des données'
date: '2018-04-24 09:00:00 -0400'
image: /img/cds/blog-team-coding.jpg
image-alt: Un écran d'ordinateur affiche 200 lignes de code JavaScript dans Sublime Text.
translationKey: coding-is-a-team-activity
thumb: /img/cds/thumbnails/blog-team-coding.jpg
processed: 1550672961815
---

D’après notre expérience, le développement de logiciels doit être un effort d’équipe. Cela ne veut pas dire que plusieurs développeurs contribuent individuellement à une seule base de code; au contraire, toute l’équipe est responsable de chaque ligne de code. Pour tout système de production, on s’attend à ce que tous les codes soient approuvés par au moins un autre développeur, avant qu’il ne soit accepté.

Si vous avez lu notre billet de blogue précédent sur l’[intégration continue](https://numerique.canada.ca/2018/03/26/les-tests-automatises/), vous connaissez notre cycle de codage de base&nbsp;:

* Créer une branche à partir de la branche maîtresse
* Élaborer une fonctionnalité et corriger le bogue
* Créer une demande de tirage (*pull request*)
* Effectuer des tests automatisés et un examen par les pairs
* Fusionner à la branche maîtresse et déployer

L’étape d’examen du code par les pairs offre plusieurs avantages :

* Code plus compréhensible
* Aider dans l’intégration des développeurs débutants
* Accroître la responsabilisation personnelle
* Responsabilité partagée de l’équipe

## Code plus compréhensible

Ce n’est pas suffisant que notre code fonctionne. Ce n’est même pas suffisant qu’il fonctionne parfaitement. Il doit être facile à tenir à jour, ce qui signifie qu’il doit être lisible par les humains. Le fait est que, dans une base de code bien entretenue, le code sera lu par les humains beaucoup plus souvent qu’il est écrit. Il doit être logique et compréhensible par les humains et, presque de manière secondaire, compréhensible par les ordinateurs.

Comme l’illustre la fameuse paraphrase de Brian Kernighan :

> [Traduction] Le débogage est deux fois plus difficile que la rédaction du code en lui-même. Par conséquent, si vous rédigez le code aussi habilement que possible, vous n’êtes, par définition, pas assez intelligent pour le déboguer.

Le processus d’examen par les pairs empêche la fusion des codes « habiles » ou autres codes incompréhensibles. On encourage tout le monde au sein de l’équipe à poser des questions ou à soulever des objections, peu importe leur « rang » ou niveau d’expérience. Si la demande de tirage ne comprend pas assez de tests, ou ne répond pas aux autres exigences, comme l’accessibilité, la sécurité ou la confidentialité, il s’agit d’une ligne de défense.

Plus important encore, il s’agit d’un processus d’examen par les pairs. Les gestionnaires ne peuvent pas être le frein ici.

## Aider dans l’intégration des développeurs débutants

J’aime beaucoup [identiqueter](http://gdt.oqlf.gouv.qc.ca/ficheOqlf.aspx?Id_Fiche=26543576) les nouveaux membres de l’équipe sur chaque demande de tirage. Ils ne sont pas obligés de répondre, mais plus ils lisent et voient comment le processus fonctionne, plus vite leur confiance grandit. Je suis souvent surpris par la rapidité avec laquelle leurs questions révèlent des aspects de mon propre code que l’on pourrait améliorer.

## Accroître la responsabilisation personnelle

Souvent, les développeurs n’aiment pas admettre lorsqu’ils sont bloqués. Nous voyons souvent cela comme un échec personnel, un symptôme du [syndrome de l’imposteur](https://fr.wikipedia.org/wiki/Syndrome_de_l%27imposteur) très courant. Parfois, on tourne en rond trop longtemps sur un problème difficile, et il devient de plus en plus frustrant de ne pas comprendre les choses plus rapidement.

Pour sortir de ce cycle, il est parfois tentant de copier-coller une solution bricolée pour sortir de l’impasse. Cela augmente la [dette technique](https://fr.wikipedia.org/wiki/Dette_technique) pour le reste de l’équipe.

Le travail d’équipe s’avère la solution à ces deux problématiques. Si un membre de l’équipe arrête de contribuer pendant quelques jours, il est très évident pour le reste de l’équipe que quelque chose ne va pas. Si le membre de l’équipe essaie de glisser un mauvais code dans la base de code, le reste de l’équipe a l’occasion de proposer des solutions de rechange.

De manière proactive, lorsque je suis bloqué, j’aime bien mettre tout ce que j’ai compris dans GitHub, et créer une demande de tirage de travail en cours, portant la mention « [WIP] » (*Work in Progress*) pour qu’il soit clair que ce n’est pas terminé. Je vais ensuite identiqueter des gens qui, selon moi, pourraient avoir une opinion et solliciter leurs commentaires. Je pourrais me sentir mal à l’aise d’admettre que je ne sais pas comment faire quelque chose, mais c’est plus facile avec le temps.

## Responsabilité partagée de l’équipe

Nous ne pouvons pas tenir le système à jour s’il est rédigé de manière individuelle. Nous devons agir comme une équipe, collectivement responsable du système. Par conséquent, nous devons collectivement approuver tous codes, en équipe.

Quiconque approuve une demande de tirage est tout aussi responsable du code que l’auteur. Cela donne aux futurs développeurs un genre de trace à suivre s’ils ont des questions. Cela nous permet également de prendre un peu plus de risques au moment de rédiger le code, sachant que nos pairs auront l’occasion de s’opposer ou de suggérer des solutions de rechange.

## Attentes

Il est important d’établir des normes d’équipe en ce qui concerne les demandes de tirage, plus particulièrement la taille et les délais d’exécution.

> 10 lignes de code = 10 problèmes  
> 500 lignes de code = « ça a l’air bien beau »  
> Examens de code

> Traduction de [@iamdevloper](https://twitter.com/iamdevloper/status/397664295875805184)

J’aime limiter les demandes de tirage à 200 lignes de code ou moins. Encore mieux si c’est moins. Idéalement, elles devraient également corriger une seule chose. Je préfère les demandes de tirage d’une ligne. Points bonus pour les demandes de tirage d’une ligne qui corrigent réellement quelque chose. Cela permet aux examinateurs de code de se concentrer sur un changement atomique.

Si nous fixons la taille des demandes de tirage à une taille raisonnable, nous pouvons également établir des attentes par rapport aux délais d’exécution. Pour moi, la limite raisonnable est d’un jour ouvrable, tout au plus, avec la possibilité de demander à quelqu’un de voir s’il est possible de procéder plus rapidement si la demande de tirage freine d’autre travail.

Les examens de la qualité des codes par les pairs sont généralement assez faciles à entreprendre. Nous vous encourageons à leur donner une chance dès maintenant!

