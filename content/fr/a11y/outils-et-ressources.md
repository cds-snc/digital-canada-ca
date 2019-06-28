---
type: section
layout: page
title: Outils et ressources
aliases: [/tools-and-resources/]
---


Au SNC, vous pouvez bénéficier de nos services d&#39;accessibilité. Les services fournis peuvent comprendre :

- Un rapport de haut niveau qui comporte un niveau de référence de conformité et un statut de contrôle de priorité;
- Un audit détaillé de l&#39;accessibilité avec un rapport complet sur les problèmes trouvés, leur lien avec l&#39;accessibilité et les prochaines étapes pour les résoudre;
- Un atelier sur l&#39;accessibilité fait sur mesure pour votre produit ou un sujet particulier, ou un atelier général sur l&#39;accessibilité et la conception inclusive;
- Une démonstration d&#39;un examen manuel pour des tests d&#39;accessibilité liés à la navigation au clavier, aux comportements, à l&#39;utilisation de la couleur, à bonne la mise en œuvre d&#39;ARIA, etc.;
- Un examen de l&#39;accessibilité en binôme.

## Prévoir du temps pour l&#39;analyse

L&#39;accessibilité demande du temps. Lorsque vous contactez les services d&#39;accessibilité, vous pouvez vous attendre aux délais suivants :

- Un rapport de haut niveau aura une norme de service de 3 jours ouvrables.
- Un contrôle détaillé de l&#39;accessibilité aura une norme de service de 7 à 10 jours ouvrables.

## Tests automatisés

Pour les tests automatisés, le SNC utilise un éventail d&#39;outils, dont les suivants :

- [insights.io](https://accessibilityinsights.io/) (site en anglais seulement)
- [Axe](https://www.deque.com/axe/) (site en anglais seulement)
- [Siteimprove](https://siteimprove.com/en-ca/core-platform/integrations/browser-extensions/) (site en anglais seulement)
- [WAVE](https://wave.webaim.org/) (site en anglais seulement)
- [ADT google](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) (site en anglais seulement)

**Pa11y / Puppeteer** est une [bibliothèque Node.js (JavaScript)](https://github.com/pa11y/pa11y) (site en anglais seulement) pour l&#39;automatisation des navigateurs Google Chrome et Chromium. La raison pour laquelle nous avons choisi cette bibliothèque au lieu d&#39;un autre outil comme Selenium est strictement liée à la facilité d&#39;utilisation.

Nous avons déterminé qu&#39;il était plus facile pour nos développeurs d&#39;utiliser Puppeteer que d&#39;autres solutions. Cela nous a également permis d&#39;automatiser certaines fonctions qui pourraient être difficiles à tester pour les applications à page unique et pour le contenu créé de façon dynamique.

**aXe-core** a été sélectionné en raison des mises à jour vers l&#39;évaluation par tests automatisés WCAG 2.1 et en raison de son partenariat avec l&#39;outil accessibility.insights.io de Microsoft, qui permet des revues de projet plus détaillées sur le plan des tests manuels. aXe s&#39;est également engagé à produire peu ou pas de faux positifs et a fait équipe avec le gouvernement, l&#39;industrie et d&#39;autres chefs de l&#39;accessibilité en tant que moteur pour les outils d&#39;automatisation. Il a également été utilisé par Google pour leur outil d&#39;automatisation dans le navigateur et l&#39;interface de ligne de commande d&#39;accessibilité Lighthouse. Il était également très facile de faire l&#39;intégration avec Puppeteer, Jira et GitHub.

## Tests manuels

Utilisez la [liste de contrôle de l&#39;accessibilité](https://accessibility.18f.gov/checklist/) (site en anglais seulement) créée par 18F (l&#39;agence numérique du gouvernement des États-Unis) afin de vous aider à réaliser des tests pour les problèmes d&#39;accessibilité communs, comme :

- le manque d&#39;accessibilité par clavier (important parce que les personnes qui utilisent des lecteurs d&#39;écrans ou une reconnaissance vocale, ou qui ont des handicaps situationnels, temporaires ou permanents liés à la mobilité peuvent dépendre de l&#39;utilisation d&#39;un clavier pour naviguer dans les sites Web);
- l&#39;absence d&#39;une rédaction de contenu en langage clair et simple;
- la présence de texte non descriptif pour les hyperliens (par exemple, « cliquez ici » ou « lire davantage »);
- l&#39;absence de contraste de couleur pour le texte et les graphiques importants ou l&#39;absence des commandes appropriées;
- les images non décoratives qui n&#39;ont pas de texte de remplacement éloquent;
- les [formulaires en ligne](https://design-system.service.gov.uk/components/)(site en anglais seulement) qui ne sont pas marqués correctement, de telle sorte que la bonne commande n&#39;est pas associée à la bonne étiquette.

Certains navigateurs ont des outils qui facilitent la recherche de problèmes d&#39;accessibilité dans le modèle d&#39;objets de document (DOM). L&#39;[inspecteur de l&#39;accessibilité pour Mozilla Firefox](https://developer.mozilla.org/fr/docs/Outils/Inspecteur_accessibilite) et les [fonctions d&#39;accessibilité dans Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference) (page en anglais seulement) en sont des exemples. Vous pouvez également consulter le [modèle d&#39;objet d&#39;accessibilité (AOM)](https://wicg.github.io/aom/) (page en anglais seulement).

## Tests multinavigateurs

Pour les tests multinavigateurs, assurez-vous que votre service peut fonctionner sur les navigateurs suivants :

- [Chrome](https://www.google.com/chrome)
- [Firefox](https://www.mozilla.org/firefox/new/)
- Windows seulement : [Internet Explorer 11](https://www.microsoft.com/fr-ca/download/internet-explorer.aspx), [Microsoft Edge](https://www.microsoft.com/fr-ca/windows/microsoft-edge)
- Mac/iOS seulement : [Safari](https://www.apple.com/safari/) (page en anglais seulement)
