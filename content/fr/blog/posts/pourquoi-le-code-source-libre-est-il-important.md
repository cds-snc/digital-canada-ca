---
layout: blog
title: Pourquoi le code source libre est-il important?
description: >-
  Travailler ouvertement et publier du code logiciel libre sont des
  caractéristiques clés de notre travail au SNC. Découvrez pourquoi le code
  source libre est utile, notre façon de l’intégrer au SNC, et les réponses aux
  questions que nous posent parfois nos amis du gouvernement.
author: 'Sean Boots, conseiller en politiques et Josh Ruihley, conseiller technique'
date: 2020-02-24T15:12:35.353Z
image: https://de2an9clyit2x.cloudfront.net/blog_open_source_b720f5ece8.jpg
image-alt: >-
  Groupe de personnes qui assemblent un casse-tête alors que d’autres bâtissent
  une maison au moyen de différents blocs.
translationKey: why-open-source-matters
thumb: https://de2an9clyit2x.cloudfront.net/small_blog_open_source_b720f5ece8.jpg
---
Il y a quelques semaines, nous avons publié un [fil Twitter](https://twitter.com/SNC_GC/status/1227970738017251335) sur ce qu’est le code source libre et sur la façon dont il améliore les services en ligne. Nous avons reçu beaucoup de questions à ce sujet de partout au gouvernement. Utiliser du code source libre — et publier le code logiciel que nous écrivons — constitue l’un des principes les plus importants au Service numérique canadien. Si vous êtes curieux de savoir pourquoi, poursuivez votre lecture!

## Les avantages du code source libre

L’expression « code source libre » désigne du code logiciel que tout le monde peut consulter, copier ou modifier pour leurs propres fins. Il s’agit de code publié en vertu d’une [licence libre](https://opensource.org/licenses) (la [licence MIT](https://github.com/wet-boew/wet-boew/blob/master/Licence-fr.txt), par exemple), généralement sur des plateformes de collaboration pour logiciels comme GitHub.

Les logiciels libres sont utilisés à travers le monde par les petites et les grandes entreprises, les organisations et les gouvernements. Le gouvernement du Canada lui-même s’en sert depuis plus de vingt ans. Le navigateur que vous utilisez pour lire ce document et les systèmes utilisés pour transmettre cette information à travers le Web sont presque tous conçus au moyen de logiciels à code source libre.

Lorsque vous travaillez au sein d’une équipe gouvernementale chargée de concevoir ou d’acheter de nouveaux logiciels (pour un nouveau service en ligne, par exemple), la publication de votre nouveau code sous une licence libre peut vous procurer de nombreux avantages importants. Anna Shipman (l’ancienne dirigeante du code source libre du gouvernement du R.-U.) fait [une bonne liste des avantages du code source libre](https://gds.blog.gov.uk/2017/09/04/the-benefits-of-coding-in-the-open/) :

*  Il favorise le recours aux pratiques exemplaires.
*  Il facilite la collaboration.
*  Il permet aux utilisateurs externes de l’améliorer.
*  Il permet aux autres d’apprendre de votre exemple.
*  Il facilite le partage de normes.
*  Il augmente la transparence du travail réalisé par le gouvernement.
*  Il lève toute ambiguïté sur le droit de propriété.
*  Il permet d’uniformiser les technologies du gouvernement.

La conception de logiciels dans un environnement ouvert fait ressortir le meilleur du travail de chacun. Elle nous aide à apprendre l’un de l’autre et permet aux travailleurs de continuer de contribuer à un logiciel utile facilement, même lorsqu’ils sont mutés à un nouvel organe gouvernemental. Le code source libre permet d’économiser du temps et de l’argent, en rendant les logiciels plus faciles à réutiliser et à adapter. En raison de ces avantages, les gouvernements du monde entier sont devenus plus enthousiastes dans l’adoption de code source libre au cours des dernières années.

## L’approche du SNC

Nous avons été inspirés par d’autres pays (particulièrement le R.-U., la France et les États-Unis) ayant adopté le code source libre. Nous savions que le travail ouvert et la publication de code source libre joueraient un rôle clé dans l’approche du Service numérique canada, [avant même que celui-ci ne soit lancé](https://numerique.canada.ca/2017/07/28/voir-grand-commencer-modestement/).

L’ensemble du code logiciel que nous avons développé a été publié à titre de code source libre [sur notre plateforme GitHub](https://github.com/cds-snc). Notre code a été publié en vertu de la licence MIT, afin d’en maximiser la réutilisabilité, emboîtant ainsi le pas à d’autres projets à code source libre du gouvernement du Canada, tels que [la boîte à outils de l’expérience Web](https://github.com/wet-boew/wet-boew). Le fait de publier notre code à titre de logiciel libre [fait partie de toutes les ententes de partenariats](https://numerique.canada.ca/partenariats/) conclues avec les ministères travaillant avec nous.

Il est important que ce code source reste libre, car il permet à nos partenaires de l’adopter et de l’utiliser plus facilement. Il devient aussi plus facile pour les autres ministères de l’adapter et d’en tirer des leçons. Travailler dans un environnement ouvert (sur une plateforme mature comme GitHub) nous permet aussi d’utiliser une grande variété d’outils modernes de développement logiciel (comme [des systèmes d’intégration continue](https://numerique.canada.ca/2018/03/26/les-tests-automatises/)).

Il est d’autant plus important de travailler ouvertement lorsque nous développons du code logiciel puisqu’il s’agit d’une bonne façon de collaborer avec les personnes que nous servons. Comme le montre [un de nos derniers fils Twitter](https://twitter.com/SNC_GC/status/1227970738017251335), les membres du public ont fait des suggestions pour notre code qui ont permis d’améliorer le contenu, l’accessibilité et la fonctionnalité de ce que nous concevons.

## Questions fréquentes

Bien que le code source libre est utilisé par le gouvernement depuis longtemps, il reste nouveau pour de nombreuses équipes. Dans le cadre de notre travail, nous faisons souvent découvrir le code source libre à nos collègues fonctionnaires pour la première fois. Voici certaines des questions qu’on nous pose à l’occasion!

### Est-ce que n’importe qui a la liberté de modifier votre code?

Non. Les gens peuvent faire des suggestions (en [créant une demande de tirage](https://numerique.canada.ca/2018/04/24/coder-une-activite-dequipe/) sur GitHub) que nos développeurs examineront attentivement avant de décider de l’intégrer ou non. [Les tests automatisés](https://numerique.canada.ca/2018/03/26/les-tests-automatises/) permettent aussi de veiller à ce que les nouvelles suggestions n’introduisent pas accidentellement (ou intentionnellement) des anomalies ou des vulnérabilités dans nos systèmes.

### Est-ce que je peux aller de l’avant et publier le code de mon équipe sur GitHub?

Vous devriez tout d’abord vous assurer qu’un cadre de votre équipe vous donne son autorisation (par exemple, une personne ayant un pouvoir de signature en matière financière). Idéalement, cette dernière vous donnerait l’autorisation complète de créer et de publier du code source libre à tout moment dans l’avenir. Les gestionnaires et les hauts dirigeants [sont fortement encouragés](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/logiciels-libres.html) à vous soutenir dans la publication de code source libre. Ce processus varie quelque peu selon les ministères, mais si on vous dit « non », faites-le-nous savoir! Nous croyons sincèrement que toutes les équipes logiciel du gouvernement devraient travailler dans un environnement ouvert et nous serions heureux de vous aider.

### Est-ce que les politiques du SCT appuient les logiciels libres?

Oui! « Travailler ouvertement par défaut » est l’une des [normes numériques du gouvernement du Canada](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/normes-numeriques-gouvernement-canada.html). On énonce également à [l’annexe A de la nouvelle Directive sur les services et le numérique](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32602) ce qui suit : « si possible, utiliser des normes et des logiciels ouverts en priorité » (article A.2.3.8.1), et « par défaut, tout code source écrit par le gouvernement doit être diffusé dans un format ouvert » (article A.2.3.8.3). Nos collègues du [Bureau du dirigeant principal de l’information (BDPI)](https://www.canada.ca/fr/secretariat-conseil-tresor/organisation/organisation.html#org5) ont publié [des directives détaillées sur le code source libre](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/logiciels-libres.html). Récemment, ils ont aussi [lancé un nouveau site Web](https://canada-ca.github.io/ore-ero/fr/index.html) qui permet aux ministères de publier les logiciels libres sur lesquels ils travaillent. Si le logiciel sur lequel vous travaillez _n’est pas_ libre, vous pourriez faire face à une surveillance accrue de la part des groupes de surveillance et d’examen.

### Qu’arrive-t-il lorsque le code logiciel contient des renseignements protégés?

Si vous employez les pratiques exemplaires du développement logiciel moderne, votre code logiciel ne devrait pas renfermer de renseignements de nature délicate. Les éléments comme les justificatifs administratifs, l’adresse des serveurs, les clés API, ou toute autre information devant rester secrète doivent être stockés dans des variables d’environnement ou d’autres équivalents, plutôt qu’être inscrits dans le code lui-même. Nos collègues du BDPI qui travaillent à la cybersécurité ont déclaré que, dans presque toutes les circonstances, [le code logiciel n’entre pas dans les catégories désignées de renseignements protégés du gouvernement](https://github.com/canada-ca/Open_First_Whitepaper/issues/83#issuecomment-361065123).

### Qu’en est-il du vieux code logiciel qui nous ne mettons pas à jour de façon régulière?

Le vieux code logiciel (par exemple, le code des anciens systèmes) qu’on ne met plus à jour de façon régulière a plus de chances de contenir des renseignements de nature délicate ou des vulnérabilités. Le nettoyage de ce code aux fins de publication est souvent bien difficile. Ce n’est pas impossible, mais il est souvent plus facile pour les équipes de commencer par publier leurs nouveaux projets. Anna Shipman du R.-U. donne des directives pratiques sur [la façon d’adapter un code « fermé » en vue d’une publication ouverte](https://technology.blog.gov.uk/2018/02/19/how-to-open-up-closed-code/). En ce qui concerne le code qui n’est plus utilisé, le publier sur une plateforme ouverte pourrait quand même s’avérer utile pour les étudiants et les chercheurs. La publication libre du [code logiciel utilisé par la NASA dans la mission Apollo 11](https://github.com/chrislgarry/Apollo-11) en est un excellent exemple.

### Comment faire pour respecter les exigences en matière de langues officielles lorsque je publie du code source libre?

Travailler au sein du gouvernement du Canada implique de prendre des engagements importants par rapport à la communication et à la prestation de services en anglais et en français, conformément à la [Loi sur les langues officielles](https://laws-lois.justice.gc.ca/fra/lois/o-3.01/), à la [Directive sur les langues officielles pour les communications et services](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26164) et à la [Directive sur les langues officielles pour la gestion des personnes](https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=26168), entre autres. Notre approche consiste à nous assurer que les fichiers Lisez-moi et la documentation connexe du produit (par exemple, [le fonctionnement d’un produit](https://cds-snc.github.io/track-web-security-compliance/accueil/)) soient disponibles dans les deux langues officielles, avec la même qualité, avant la fin de la [phase alpha](https://numerique.canada.ca/2018/11/29/de-la-conception-dabord-aux-utilisateurs-dabord/) ou avant que nous rédigions un blogue ou un gazouillis à son sujet, selon la première de ces éventualités. Le code logiciel lui-même (y compris les commentaires qui y sont insérés) peut être [rédigé dans la langue officielle](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/logiciels-libres/guide-pour-la-publication-du-code-source-libre.html#toc08-4) privilégiée par le fonctionnaire ou le membre du public apportant sa contribution.

### Lorsque nous procédons à l’acquisition d’un logiciel auprès d’un vendeur, est-ce que nous pouvons exiger que leur code source soit libre?

Oui, vous le pouvez! Il s’agissait d’une des principales caractéristiques [des projets pilotes d’approvisionnement agile](https://buyandsell.gc.ca/cds/public/2017/11/23/4655ae54b996067f73cb00dd7923e862/li_no_24062-180181_f.pdf) récemment entrepris par le BDPI. Tant que les exigences relatives à la licence sont énoncées clairement dans les documents d’approvisionnement (par exemple, que l’ensemble du code logiciel produit dans le cadre de ce contrat soit la propriété intellectuelle du gouvernement du Canada, sous la licence MIT), tout est conforme! Vous pouvez aussi demander dans vos critères d’évaluation à ce qu’on vous remette des exemples d’autres travaux sources libres.

### Y a-t-il des types de code source qui ne devraient pas être libres?

Le vieux code source qui n’a pas été examiné en vue d’en retirer les renseignements sensibles (ou tout vieux code dont vous vous servez encore pour des raisons de fiabilité ou de sécurité) ne doit pas être publié sur une plateforme ouverte. Il en va de même pour les logiciels utilisés dans la détection de fraudes ou dans la sécurité nationale. Les gens sont souvent nerveux à l’idée de publier ouvertement les critères d’admissibilité, les règles administratives et les algorithmes. Leur publication apporte toutefois de nombreux avantages sur le plan de la [transparence et de la vérifiabilité](https://www.themandarin.com.au/116681-when-machines-are-coding-the-rules-on-which-our-society-runs-we-get-better-results-new-opportunities-for-the-public-and-regulators-and-companies-looking-to-make-compliance-easier/). En général, notre doctrine va comme suit : plus il y a de logiciels libres, mieux c’est.

### Qui se sert du code source libre au sein du gouvernement du Canada?

La [boîte à outils de l’expérience Web](https://github.com/wet-boew) et [les outilsGC](https://github.com/gctools-outilsgc) ont été les premiers champions du code source libre et du travail ouvert. On compte d’autres exemples, notamment le Centre de la sécurité des télécommunications, qui a publié la [Chaîne de montage](https://cyber.gc.ca/fr/chaine-de-montage-assemblyline) en 2017, un outil ouvert de détection des logiciels malveillants. Plus récemment, le [projet InfoBase du GC](https://github.com/TBS-EACPD/infobase) et les [accélérateurs du GC](https://medium.com/core-technologies/gc-accelerators-6d3787269ebd#b170) ont aussi été publiés au moyen de logiciels ouverts. D’autres exemples se trouvent dans l’outil d’[échange de ressources ouvert](https://canada-ca.github.io/ore-ero/fr/index.html), qui recouvre l’ensemble des administrations canadiennes.

### Où puis-je en apprendre plus?

Les [normes numériques du gouvernement du Canada](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/normes-numeriques-gouvernement-canada.html) sont un bon point de départ. Il s’agit des normes que nous devons tous essayer de respecter lorsqu’on conçoit et que l’on développe de meilleurs services pour les Canadiens. Nos collègues du BDPI ont récemment publié le [Livre blanc « Ouvert en premier »](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/logiciels-libres/livre-blanc-ouvert-premier.html) ainsi que le [Guide de contribution aux logiciels libres](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/logiciels-libres/guide-de-contribution-aux-logiciels-libres.html).

Nous sommes redevables aux fonctionnaires et aux citoyens qui [soutiennent l’utilisation du code source libre](https://ouvert.canada.ca/fr/blogue/logiciels-libres-normes-ouvertes-au-gouvernement-du-canada) au sein du gouvernement du Canada depuis plus d’une décennie. Que la transition vers un gouvernement ouvert se poursuive! Pour toute question concernant l’utilisation ou la publication de logiciels libres au sein du gouvernement, [n’hésitez pas à communiquer avec nous](mailto:cds-snc@tbs-sct.gc.ca).


