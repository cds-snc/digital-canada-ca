---
layout: blog
title: 'Comment nous concevons Formulaires GC: nos quatre approches accessibles'
description: >-
  Entrevue avec l’équipe de Formulaires GC sur leurs quatre approches pour le développement d’un produit accessible : tests automatisés et manuels, recherche en conception et audits.
author: 'Léquipe de produit de Formulaires GC'
date: '2023-02-15T15:59:15'
image: https://articles.alpha.canada.ca/uploads/sites/25/2023/02/GC_Forms_BLOG-POST_1_FR.jpeg
image-alt: Les fonctionnaires peuvent utiliser Formulaires GC pour créer des formulaires en ligne accessibles pour les services du gouvernement du Canada, et ce, sans codage.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2023/02/GC_Forms_BLOG-POST_1_FR.jpeg
translationKey: blog-gcforms-accessible-approaches
---

<p>Lorsque des produits sont conçus pour le gouvernement, l’accessibilité n’est pas qu’une question de conformité : c’est aussi une bonne stratégie. Accorder une place importante à ce travail est essentiel, car il soutient le gouvernement dans la prestation de services améliorés et élimine les obstacles pour y accéder.</p>



<p>Formulaires GC est l’un des <a href="https://numerique.canada.ca/suite-de-produits/">outils que nous offrons aux fonctionnaires fédéraux</a> pour appuyer leur prestation de services numériques. Cet outil les aide à créer rapidement et facilement des formulaires en ligne bilingue, accessible et sécurisé qui se conforment à l’image de marque du gouvernement du Canada.</p>



<p>Afin d’en apprendre davantage sur la manière dont l’équipe priorise l’accessibilité dans chacune des caractéristiques et phases de Formulaires GC, nous avons interrogé ses membres, dont Bryan Robitaille (développeur principal), Stevie-Ray Talbot (gestionnaire principal de produit) et Sarah Hobson (conseillère principale en politique).</p>



<p>Ces dernier·ère·s ont partagé leurs réflexions et leurs conseils sur les quatre approches utilisées par leur équipe pour développer des produits accessibles dès le début du projet:</p>



<ol>
<li>Configurer des tests automatisés pour repérer la majorité des problèmes ;</li>



<li>Effectuer des tests manuels pour repérer les problèmes non détectés lors des tests automatisés ;</li>



<li>Mener des recherches en conception pour analyser si les tests manuels et automatisés créent une expérience utilisateur accessible ; et</li>



<li>Effectuer des audits pour trouver des manières d’améliorer le produit actuel et ses processus de développement pour que ses futures modifications soient aussi plus accessibles.</li>
</ol>



<h2 id="h-q1-comment-est-ce-que-les-tests-automatises-sur-l-accessibilite-appuient-le-developpement-du-produit"><strong>Q1 : Comment est-ce que les tests automatisés sur l’accessibilité appuient le développement du produit ?</strong></h2>



<p>R : Bryan Robitaille (développeur principal)</p>



<h3 id="h-les-tests-automatises-ne-sont-pas-encore-parfaits-mais-ils-representent-un-point-de-depart"><strong>Les tests automatisés ne sont pas encore parfaits, mais ils représentent un point de départ.</strong></h3>



<p>Soyons honnêtes : les tests automatisés sur l’accessibilité ne sont pas parfaits. Ils ne permettent pas de détecter les mauvais choix de conception ni de garantir le respect de tous les cas d’utilisation et critères de réussite de la norme <a href="https://www.w3.org/WAI/standards-guidelines/fr">Règles pour l’accessibilité des contenus Web (WCAG)</a>. Cependant, ces tests constituent une façon simple et rapide de repérer <a href="https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/">plus de 50 % des problèmes d’accessibilité</a> (texte en anglais)<strong> </strong>les applications Web.</p>



<p>Lorsque vous combinez des tests automatisés à d’autres tests portant sur l’accessibilité, cela peut permettre à votre équipe d’abréger le temps consacré aux tests manuels et aux correctifs. Ces tests peuvent donc être d’une grande aide pour votre équipe, lui permettant d’augmenter la capacité de l’équipe en ce qui concerne l’amélioration et l’expansion du produit.</p>



<p><strong>Voulez-vous apprendre comment notre équipe configure et effectue les tests automatisés sur l’accessibilité sur Formulaires GC ? Lisez les conseils techniques dans la section ci-dessous !</strong></p>



<details class="wp-block-cds-snc-accordion"><summary>Conseils techniques : configuration des tests automatisés</summary>
<p><strong>1. Configurez des tests automatisés pour détecter tout problème d’accessibilité afin de diminuer la charge de travail manuel et d’augmenter la capacité de l’équipe à se développer sur le plan professionnel et à appuyer la croissance de son produit.</strong></p>



<p>Pour nos tests automatisés, nous dépendons fortement du <a href="https://www.deque.com/axe/">moteur de test d’accessibilité Axe</a> (texte en anglais) source libre. Axe s’intègre parfaitement à <a href="https://github.com/cds-snc/platform-forms-client/tree/develop/cypress">notre suite de test Cypress</a>, ce qui nous permet d’effectuer des tests sur des pages Web de la même façon qu’un·e utilisateur·rice interagirait avec ces pages. Si nous n’avions pas de configuration automatique capable de détecter ces problèmes, nos développeur·euse·s auraient une charge de travail manuel supplémentaire et se verraient limité·e·s dans leur capacité à développer le produit.</p>



<p><strong>2. Utilisez un linter d’accessibilité pour identifier les problèmes lorsque vous écrivez le code. C’est un peu comme un vérificateur d’orthographe. Le linter vous permettra d’économiser du temps de révision du code.</strong></p>



<p>Nous ne comptons pas seulement sur le moteur d’Axe pour effectuer nos tests automatisés. Nous misons aussi sur des outils qui tentent de repérer les problèmes pendant que nous écrivons le code de notre application, ce qui nous permet d’économiser du temps de réécriture après le test (parce que nous aurons déjà détecté les problèmes à l’avance).</p>



<p>Par exemple, nous utilisons le <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">plug-in jsx-a11y ESLint</a> pour nous aider à repérer les problèmes pendant la conception de notre application Web. Certain·e·s de nos développeur·euse·s vont même plus loin en utilisant le <a href="https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter">linter d’accessibilité d’Axe</a> (texte en anglais), qui agit comme un vérificateur d’orthographe, mais pour repérer les problèmes d’accessibilité, comme une extension dans VS Code, ce qui permet d’effectuer une analyse statique d’accessibilité pour le texte HTML, Angular, React, Markdown et Vue.</p>



<p><strong>3. Préparez votre fichier pour le test d’accessibilité et ajoutez quelques lignes de code (vous trouverez ci-dessous les instructions détaillées correspondantes).</strong></p>



<p>Pour configurer le fichier utilisé afin de réaliser des tests automatisés, vous devez ajouter les logiciels à vos dépendances de développement existantes (les autres logiciels utilisés pour les tâches de développement, pas seulement ceux utilisés pour les tests). Ajoutez-les à l’aide d’un gestionnaire de paquets : cet outil assure le suivi de tous les logiciels présents sur votre ordinateur, vous permettant d’utiliser les nouveaux paquets logiciels destinés aux tests dans le cadre de votre automatisation.</p>



<p>Voici comment (pas à pas) :</p>



<p>1. À l’aide des gestionnaires de paquets <a href="https://yarnpkg.com/">yarn</a> ou <a href="https://www.npmjs.com/">npm</a> recherchez et ajoutez les paquets logiciels suivants à vos dépendances de développement : cypress, axe-core et cypress-axe.</p>



<p> 2. Ajoutez une ligne de configuration simple dans Cypress : importez « cypress-axe »;</p>


<img decoding="async" loading="lazy" width="260" height="59" src="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-1.png" alt="" class="wp-image-860" style="max-width: 100%;height: auto;">


<p style="font-size:11px">Texte de remplacement&nbsp;: Capture d’écran de la configuration de ligne dans Cypress. Ajout de “import “cypress-axe”;” sous “// Import Axe-Core library”.</p>



<p>3. Configurez vos options Axe dans le fichier de test (lisez la <a href="https://www.deque.com/axe/core-documentation/api-documentation/#options-parameter">documentation API d’Axe</a> pour obtenir des instructions).</p>



<p></p>


<img decoding="async" loading="lazy" width="512" height="120" src="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-2.png" alt="" class="wp-image-862" style="max-width: 100%;height: auto;" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-2.png 512w, https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-2-300x70.png 300w" sizes="(max-width: 512px) 100vw, 512px" />


<p style="font-size:11px">Texte de remplacement&nbsp;: Capture d’écran de la façon dont l’équipe Formulaires GC a configuré ses options Axe en testant pour&nbsp;: “wcag21aa”, “wcag2aa”, “best-practice” et “section508”.</p>



<p>Comme vous pouvez le voir dans notre <a href="https://github.com/cds-snc/platform-forms-client/blob/develop/cypress/e2e/accessibility.cy.js">fichier de test Cypress sur GitHub</a>, la configuration d’Axe avec Cypress en vue de tests d’accessibilité automatisés se fait en ajoutant à peine trois lignes de code :</p>



<ol>
<li>cy.visit(path);</li>



<li>cy.injectAxe();</li>



<li>cy.checkA11y(null, A11Y_OPTIONS);</li>
</ol>


<img decoding="async" loading="lazy" width="512" height="303" src="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-3.png" alt="" class="wp-image-864" style="max-width: 100%;height: auto;" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-3.png 512w, https://articles.alpha.canada.ca/uploads/sites/25/2023/02/Tip-image-3-300x178.png 300w" sizes="(max-width: 512px) 100vw, 512px" />


<p style="font-size:11px">Texte de remplacement&nbsp;: Capture d’écran des trois&nbsp;lignes de code dans le fichier de test Cypress de Formulaires&nbsp;: “cy.visit(path); cy.injectAxe(); cy.checkA11y(null, A11Y_OPTIONS);”.</p>
</details>



<h2><strong>Q2 : L’équipe réalise aussi des tests d’accessibilité manuels. Pourquoi cette double vérification ?</strong></h2>



<p>R : Bryan Robitaille (développeur principal)</p>



<h3><strong>Les tests manuels aident à déceler des problèmes que les automatisations ont manqués</strong></h3>



<p>Nous croyons fermement que les équipes de développement d’application devraient intégrer à leur processus de développement une certaine forme de test manuel en matière d’accessibilité. <strong>Les tests automatiques ne suffisent pas à déceler tous les problèmes d’accessibilité.</strong></p>



<p>Au fil du processus, nous avons essayé de mettre en œuvre une grande variété de tests manuels. Certains ont bien fonctionné, d’autres non. Chaque équipe est différente ! Toutefois, après bien des tâtonnements, nous avons découvert que l’approche qui nous correspondait le mieux était de tester notre code au fur et à mesure que nous l’écrivions.</p>



<p><strong>Vous voulez connaître l’approche de notre équipe concernant les tests manuels sur l’accessibilité sur Formulaires GC ? Lisez les conseils techniques dans la section ci-dessous !</strong></p>



<details class="wp-block-cds-snc-accordion"><summary>Conseils techniques : notre approche des tests manuels consistant à tester notre code au fur et à mesure.</summary>
<p><strong>1. Former les développeur·euse·s sur au moins une technologie d’assistance pour combler les lacunes existantes entre l’apparence et la fonctionnalité d’une application Web.</strong></p>



<p>Les développeur·euse·s mettent souvent l’accent sur l’aspect visuel d’une application Web ou sur la version de cette application destinée aux personnes voyantes. Il se peut que davantage d’efforts soient déployés pour soigner l’apparence d’un composant HTML et d’une interaction que pour veiller à ce que le composant en question respecte les meilleures pratiques en matière de présentation HTML et de balisage.</p>



<p>Nous encourageons vivement nos développeur·euse·s à se familiariser suffisamment bien avec au moins une technologie d’assistance (NVDA, JAWS, VoiceOver, etc.) pour utiliser une application Web et interagir avec cette dernière. Lorsque nous avons demandé à nos développeur·euse·s d’utiliser Formulaires GC à l’aide d’une technologie d’assistance, il s’est produit quelque chose d’intéressant : la frustration les a envahi·e·s. Cet exercice a changé leur état d’esprit et les a amené·e·s à mettre l’accent sur l’expérience utilisateur au lieu de donner la priorité à un critère de réussite spécifique relatif aux normes WCAG. Il a permis de déterminer les points à améliorer, comme le contexte qu’il fallait étoffer.</p>



<p><strong>2. Mettre à jour les processus de développement de l’équipe pour attribuer des responsabilités liées aux vérifications d’utilisabilité.</strong></p>



<p>Nous avons incorporé une nouvelle règle à notre processus de développement : désormais, chaque développeur·euse est responsable de l’utilisabilité des composants qu’il ou elle crée ou modifie. Il lui faut veiller à ce que les composants soient accessibles à la fois pour les personnes voyantes et pour celles utilisant des technologies d’assistance.</p>



<p>Cette mise à jour de nos processus a rapidement mené à un changement dans l’ordre des priorités. Au lieu de veiller à réaliser des ombres parfaites au niveau visuel, par exemple, les développeur·se·s réfléchissent aux manières d’améliorer les interactions possibles avec les composants créés. Tout cela a beaucoup amélioré l’utilisabilité des interactions complexes de nos applications Web, comme le téléversement d’un fichier dans un formulaire Web ou encore la soumission d’un formulaire Web après une période déterminée (prévention des pourriels).</p>
</details>



<h2><strong>Q3 : Comment la recherche en conception améliore-t-elle l’accessibilité d’un produit ?</strong></h2>



<p>R : Sarah Hobson (conseillère principale en politiques)</p>



<h3><strong>La recherche en conception met à l’épreuve nos hypothèses</strong></h3>



<p>Les tests et audits d’accessibilité se font selon des paramètres fixes, tandis que les attitudes et expériences humaines sont diverses et évolutives. Il n’est pas possible de résumer les gens de cette façon. Bien que les paramètres de test nous aident à déceler les problèmes de conception courants, rien ne remplace la collaboration directe avec des gens utilisant des technologies d’assistance pour naviguer sur Internet.</p>



<p>La recherche en conception nous permet de mettre à l’épreuve nos hypothèses et de mieux comprendre l’incidence que les précédentes décisions en matière de conception et de développement ont eue sur les véritables utilisateur·rice·s. Cette rétroaction nous conforte dans notre conviction que des tests et audits réussis sont le signe d’une expérience utilisateur accessible.</p>



<p><strong>Vous êtes fonctionnaire et souhaitez mener une recherche en conception pour votre produit ou service? Pour obtenir des conseils, consultez la section ci-dessous consacrée aux ressources de recherche.</strong></p>



<details class="wp-block-cds-snc-accordion"><summary>Ressources en matière de recherche : Concevoir des expériences accessibles relatives au produit</summary>
<h5><strong>Conseils concernant la recherche en conception au sein du GC</strong></h5>



<p>Nous avons créé des ressources pour vous aider à planifier vos <a href="https://numerique.canada.ca/guides/guide-tests-d-utilisabilite/">méthodes de test</a> et à mener <a href="https://numerique.canada.ca/guides/guide-entrevue/">des entrevues de recherche</a>. Nous offrons également un service pour vous aider à <a href="https://privacy-statements.cds.alpha.canada.ca/fr/">générer des formulaires de confidentialité et de consentement pour les séances de recherche.</a></p>



<h5><strong>Comment la recherche en conception a amélioré l’expérience offerte par Formulaires GC</strong></h5>



<p>Lors du développement de Formulaires GC, nous avons mené une recherche en conception pour mettre à l’épreuve nos hypothèses en matière d’accessibilité. Nous avons notamment réalisé deux activités de recherche auprès de 12 personnes employant des technologies d’assistance pour leur utilisation des services gouvernementaux. 10 personnes ont rempli un formulaire factice et ont fourni une rétroaction écrite sur cette expérience. Nous avons également demandé à 2 personnes de décrire leur expérience alors même qu’elles parcouraient l’outil et remplissaient le formulaire, ce qui nous a fourni des renseignements plus détaillés sur leur parcours.</p>



<p>Chaque personne participante a utilisé la technologie d’assistance et le navigateur de son choix :</p>



<ul>
<li>Dragon NaturallySpeaking avec Chrome ;</li>



<li>JAWS avec Edge ;</li>



<li>le lecteur d’écran intégré de Mac avec Safari ;</li>



<li>NVDA avec Chrome ;</li>



<li>NVDA avec Internet Explorer 11 ;</li>



<li>Grossissement à l’écran avec Firefox ;</li>



<li>Clavier à l’écran avec Chrome ;</li>



<li>Clavier à l’écran avec Internet Explorer 11 ;</li>



<li>Contrôle vocal avec Firefox ;</li>



<li>VoiceOver avec Safari ; et</li>



<li>ZoomText avec Edge.</li>
</ul>



<p>L’une des conclusions de ces activités est que les gens ne connaissent pas la signification du terme « Alpha ». La présence de ce terme dans notre bannière portait donc à confusion: «&nbsp;Alpha: Ce site changera au fur et à mesure que nous testerons des idées. »</p>



<blockquote class="wp-block-quote">
<p> «&nbsp;Je trouve que le terme alpha n’a pas vraiment sa place ici, car je ne vois pas à quoi il pourrait se rapporter ni à quel endroit du formulaire il serait pertinent » — une personne participant à la recherche en conception</p>
</blockquote>



<p>Il était évident que si les termes « Découverte », « Alpha », « Bêta » et « Production » avaient du sens pour nous (il s’agit d’<a href="https://ressources.alpha.canada.ca/ressource/phases-livraison/">étapes de développement agile pour le lancement de produits</a>), ils n’étaient pas nécessairement aussi clairs pour les personnes utilisant Formulaires GC. Nous avons donc supprimé ces termes pour éliminer toute distraction inutile et pour réduire la confusion parmi les utilisateur·rice·s.</p>
</details>



<h2><strong>Q4 : En quoi les vérifications d’accessibilité améliorent-elles les expériences offertes par le produit ?</strong></h2>



<p>R : Stevie-Ray Talbot (gestionnaire principal de produit)</p>



<h3><strong>Nous réalisons des audits pour déceler les lacunes en matière d’accessibilité</strong></h3>



<p>C’est peut-être un cliché, mais en tant que gestionnaire de produits, j’ai un faible pour les listes de contrôle. Et c’est précisément ce que sont les <a href="https://www.w3.org/WAI/standards-guidelines/fr">Règles pour l’accessibilité des contenus Web (WCAG)</a> : une énorme liste de contrôle. Il s’agit de vérifier que l’outil fonctionne pour les personnes qui utilisent des lecteurs d’écran, pour les personnes qui sont facilement distraites ou ont besoin de davantage d’instructions, pour les personnes daltoniennes, la liste est très longue en matière d’expérience utilisateur. Il y a beaucoup d’aspects à vérifier pour s’assurer de l’accessibilité d’un produit.</p>



<p>Les tests d’accessibilité automatiques et manuels réduisent le nombre de problèmes que présente un produit, mais des lacunes peuvent subsister. Il est impossible de réaliser des tests de chaque fonctionnalité avec chaque technologie d’assistance à chaque sprint (deux semaines). C’est pourquoi nous misons sur l’aide de tiers. Les audits nous rassurent: ils permettent de déceler les lacunes, révèlent les possibilités de formation et d’apprentissage et poussent à la réflexion sur la manière d’améliorer nos processus.</p>



<p><strong>Souhaitez-vous en savoir plus sur la manière d’intégrer les normes WCAG aux processus liés à vos produits ? Jetez un œil à notre section ci-dessous, consacrée aux conseils techniques.</strong></p>



<details class="wp-block-cds-snc-accordion"><summary>Conseil technique : intégrer les normes WCAG aux processus de développement et de tests.</summary>
<p><strong>Conseil basé sur notre expérience :</strong> la liste de contrôle liée aux normes WCAG est trop volumineuse pour l’avoir en tête à tout moment. Essayez de diviser les exigences en tâches plus restreintes et d’intégrer ces dernières à différentes parties des processus liés à vos produits.</p>



<p>Pour pousser les gens à réfléchir aux expériences accessibles, nous avons <a href="https://github.com/cds-snc/platform-forms-client/pull/433/files">des espaces réservés dans chaque récit utilisateur</a>, que nous adaptons à chaque tâche.</p>



<p>Prenons un exemple : lorsque nous développons un nouveau composant (comme un bouton permettant de téléverser des fichiers), nous veillons à ce qu’il soit possible de réaliser la navigation à l’air du clavier et à ce qu’un lecteur d’écran puisse fournir les renseignements nécessaires pour le téléversement du document. Nous avons intégré la vérification de navigation à la définition de produit fini et aux critères d’acceptation.</p>
</details>



<p><strong>Faites-nous part de vos expériences !</strong></p>



<p>Nous espérons que la communication autour des quatre approches accessibles de Formulaires GC en matière de développement de produit (tests automatisés et manuels, recherche en conception et audits) inspirera d’autres personnes à commencer à petite échelle puis à faire évoluer leur produit par le biais d’expériences. Comme l’a dit Bryan, chaque équipe est différente, il faut donc que chaque équipe trouve ce qui fonctionne dans le contexte qui est le sien.</p>



<p>Nous aimerions également remercier les personnes qui ont rendu tout cela possible. Elles nous ont apporté leur aide tout au long du processus d’approvisionnement, de l’audit, de la recherche en conception et de la formation. Merci à Mario Garneau (chef de Système de design GC et de la livraison, plateforme), Adrianne Lee (chercheuse en conception, Notification GC) et Jesse Burcsik (responsable du bien-être et du développement de l&#8217;équipe, plateforme) pour leur soutien.</p>



<p>Pour nous, la mise en place d’automatisations et de processus de mise à jour permet de réduire le nombre de problèmes à régler en matière d’accessibilité. Nous avons ainsi davantage de temps à consacrer au développement de Formulaires GC, et nous le mettons à profit. Nous concevons et améliorons un outil en libre-service qui aide les fonctionnaires à <a href="https://articles.alpha.canada.ca/forms-formulaires/fr/">concevoir rapidement et facilement des formulaires</a>. Il s’agit d’une façon simple et accessible de recueillir de la rétroaction, de demander des renseignements, de s’inscrire à un évènement et plus encore (collecte de données : jusqu’au niveau Protégé A).</p>



<p>Nous continuons à améliorer notre outil de création de formulaires et nous aimerions beaucoup pouvoir compter sur votre contribution. Lorsque d’autres nous parlent de leurs expériences avec les approches accessibles et nous font part de leurs commentaires sur notre produit, ces éléments nous permettent d’améliorer l’utilité de notre outil. </p>



<p><a href="https://forms-formulaires.alpha.canada.ca/fr/id/cle4hg480270358ayedaqq1ish">Contactez-nous</a> pour nous permettre d’apprendre de votre travail (d’ailleurs, ce formulaire de rétroaction a été créé à l’aide de Formulaires GC) !</p>

