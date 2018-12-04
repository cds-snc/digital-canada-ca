---
layout: blog
title: Déplacer le contenu du code vers le nuage
description: >-
  Pourquoi avons-nous choisi de déplacer notre contenu du code vers le nuage, et
  comment cette décision a-t-elle facilité pour tous l’apport de changements
  simples sans l’intervention d’un développeur?
author: 'Steve Astels et Stephen McMurtry, développeurs'
date: 2018-12-04T14:30:00.000Z
image: /img/cds/magnificent-cloud.jpg
image-alt: Un nuage magnifique s’élève au-dessus des arbres.
translationKey: from-code-to-cloud
---
Au Service numérique canadien (SNC), nous travaillons actuellement sur une [application Web] (https://github.com/cds-snc/vac-benefits-directory) avec Anciens Combattants Canada (ACC). L’application aidera les vétérans et leurs familles à trouver des avantages et des programmes qui leur conviennent. Cela signifie que cette application doit surveiller beaucoup de contenu, soit le texte d’interface, les titres et les descriptions en une ligne des avantages, les questions à choix multiples, les étiquettes associées aux prestations, l’adresse des bureaux d’ACC et d’autres informations, dont aucune ne contenait des données ou des renseignements personnels. Bien sûr, tout ce texte est en anglais et en français.

Au début, nous avons stocké ce texte directement dans notre code source, ce qui signifie que tout changement de contenu exigeait qu’un développeur parle à l’équipe de conception, apporte le changement et crée une demande de tirage (pull request). Au fur et à mesure que nous effectuions des tests avec des utilisateurs, des changements de contenu se présentaient sans cesse. Nous nous retrouvions à passer plus de temps à seulement changer de mots dans l’application, au lieu de s’amuser à construire de nouvelles fonctionnalités. Nous devions agir.

## Vers le nuage!
Nous avons décidé de transférer tout ce contenu vers une base de données dans le nuage. Cela signifie que lorsque les propriétaires de contenu ajoutent de nouveaux avantages ou peaufinent le libellé, ils peuvent le faire sans avoir à faire de demande de tirage. Nous avons choisi [Airtable] (https://airtable.com/) à cette fin.

Airtable est semblable à Google Sheets, mais avec une [interface de programmation d’application (API)](https://fr.wikipedia.org/wiki/Interface_de_programmation) plus facile à utiliser  et une documentation et des exemples vraiment intéressants. Comme notre application avait déjà un [serveur] (https://github.com/cds-snc/vac-benefits-directory/blob/master/server.js), nous lui avons ajouté un code pour obtenir les données de Airtable toutes les heures, les garder en antémémoire et les mettre à la disposition de tous.

Cela a très bien fonctionné. Nos concepteurs peaufinaient le contenu à leur rythme, aussi rapidement qu’ils pouvaient le rédiger, sans que les développeurs aient à lever le petit doigt.

Nous avions quand même un problème. Le contenu d’application statique (comme nos en-têtes et nos boutons) se trouvait toujours dans le code source. Dans le cadre des tests avec des utilisateurs, nous avons commencé à mettre davantage l’accent sur l’amélioration de ce contenu afin d’améliorer l’expérience des utilisateurs. Nous faisions de nouveau des demandes de tirage à l’égard du contenu.

Nous avons donc déplacé le reste du contenu de l’application vers le nuage! Nous avons ajouté une feuille de « traductions » générale à notre base Airtable. Chaque ligne contient une clé qui est référencée dans notre code source, ainsi que le texte affiché en français et en anglais. Nous avons également ajouté un bouton caché pour « rafraîchir la mémoire cache » qui permet aux éditeurs de contenu de voir les changements instantanément dans l’application.

Non seulement les développeurs sont heureux, mais les concepteurs et les propriétaires de contenu, tant au SNC qu’à ACC, sont maintenant en mesure de modifier rapidement et facilement le contenu, au besoin.
