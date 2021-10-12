---
type: a11y
layout: default
title: Outils et ressources
translationKey: tools-and-resources
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
- Un contrôle détaillé de l&#39;accessibilité aura une norme de service de 30 jours ouvrables.

## Tests automatisés

Pour les tests automatisés, le SNC utilise un éventail d&#39;outils, dont les suivants :

- [Accessibility Insights](https://accessibilityinsights.io/) (site en anglais seulement) : extension de navigateur en source libre, de Microsoft.
- [Axe](https://www.deque.com/axe/) (site en anglais seulement) : outil en source libre de vérification de l’accessibilité, de Deque Systems.
- [Siteimprove](https://siteimprove.com/en-ca/core-platform/integrations/browser-extensions/) (site en anglais seulement) : outil commercial de vérification étendue de l’accessibilité des sites Web avec extensions de navigateur.
- [WAVE](https://wave.webaim.org/) (site en anglais seulement) : extension de navigateur gratuite et populaire, de WebAim.
- [ADT google](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) (site en anglais seulement)

**Pa11y / Puppeteer** est une [bibliothèque Node.js (JavaScript)](https://github.com/pa11y/pa11y) (site en anglais seulement) pour l&#39;automatisation des navigateurs Google Chrome et Chromium. La raison pour laquelle nous avons choisi cette bibliothèque au lieu d&#39;un autre outil comme Selenium est strictement liée à la facilité d&#39;utilisation.

Nous avons déterminé qu&#39;il était plus facile pour nos développeurs d&#39;utiliser Puppeteer que d&#39;autres solutions. Cela nous a également permis d&#39;automatiser certaines fonctions qui pourraient être difficiles à tester pour les applications à page unique et pour le contenu créé de façon dynamique.

**aXe-core** est de plus en plus le vérificateur d’accessibilité par défaut étant donné sa prise en charge des scores aux tests automatisés WCAG 2.1, de son engagement à réduire les faux positifs, et de son accès en source libre. Deque collabore avec Microsoft, qui contribue en retour à ce projet en source libre par l’intermédiaire de l’extension [Accessibility Insights](https://accessibilityinsights.io/). L’extension d’accessibilité de Microsoft permet des expérimentations plus détaillées dans le domaine des tests manuels. Puisqu’il est de source ouverte, aXe fait l’objet de partenariats avec le gouvernement, l’industrie et d’autres chefs de file du milieu intéressés à créer un outil robuste et automatisé de vérification de l’accessibilité. Google utilise également aXe dans son outil Lighthouse, qui est disponible comme navigateur et interface de ligne de commande pour les examens automatisés. Par ailleurs, aXe est très facile à intégrer avec Puppeteer, Jira et GitHub. 

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

## Ressources additionnelles

Il existe beaucoup de contenu sur l’accessibilité. Vous pouvez commencer certains tests simples au moyen de ce qui suit : 

[W3C Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/) (site en anglais seulement) — quelques éléments rapides pour vous aider à commencer à évaluer à quel point votre page est accessible.
[Commandes de base de lecteur d’écran pour les tests d’accessibilité](https://developer.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/) (site en anglais seulement), du Paciello Group.
[Générateur de rapports WCAG](https://www.w3.org/WAI/eval/report-tool/#/) (site en anglais seulement).

Vous pouvez également lire certains billets de blogue sur : 

[Les choses à faire et à ne pas faire au moment de la conception pour l’accessibilité](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/) (site en anglais seulement)
[La façon dont le Government Digital Service a fait les tests d’accessibilité sur GOV.UK](https://gds.blog.gov.uk/2012/01/20/user-testing-accessibility/) (site en anglais seulement)

Vous pourriez également trouver les guides suivants utiles :

[Rendre votre service accessible : une introduction](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction) (site en anglais seulement)
[Utiliser, adapter et créer des motifs](https://www.gov.uk/service-manual/design/using-adapting-and-creating-patterns) (site en anglais seulement)
[Utiliser l’amélioration progressive](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) (site en anglais seulement).

