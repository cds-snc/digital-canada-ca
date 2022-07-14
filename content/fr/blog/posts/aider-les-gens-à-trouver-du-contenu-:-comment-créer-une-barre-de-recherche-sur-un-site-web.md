---
layout: blog
title: 'Aider les gens à trouver du contenu : comment créer une barre de recherche sur un site Web'
description: >-
  Développeurs Web : Apprenez à mettre en œuvre une fonction de recherche Web à l'échelle d’un site en utilisant la fonction de recherche de radical de Lunr. Cela rend le contenu du site plus facile à trouver / plus accessible ! 
author: 'Omar Tehsin, développement'
date: '2022-07-14T13:00:00.000Z'
image: https://de2an9clyit2x.cloudfront.net/fr_blog_website_searchbar_c25a896c5b.jpg
image-alt: Icône de la barre de recherche du site Web comportant le texte « Que recherchez-vous »
thumb: https://de2an9clyit2x.cloudfront.net/small_fr_blog_website_searchbar_c25a896c5b.jpg
translationKey: blog-website-searchbar
---
*Avis à nos lecteurs : ceci n’est PAS un billet de blogue ordinaire. Cet article pose un regard technique sur l’ajout d’une fonctionnalité de recherche à un site Web. Spécialistes du développement Web, ce billet vous est destiné!*

---

Vous vous rendez sur un nouveau site Web. Vous voulez trouver rapidement des renseignements précis. Vous cherchez l’icône « loupe ». Où est la **barre de recherche**? Il n’y en a pas… Que faites-vous? 

Un bon site Web est un site Web qui conjugue navigation aisée et contenu clair, et qui vous permet d’accéder en quelques clics aux renseignements que vous recherchez. Mais que faire si ce contenu n’est pas facile à trouver? 

On ne peut pas s’attendre à ce que vous cliquiez sur chaque page, lien ou bouton d’un site Web pour trouver ce que vous recherchez, car cela va à l’encontre de l’une de nos valeurs clés : l’accessibilité.

Quand j’ai rejoint l’équipe du site Web du SNC en tant que développeur, un même problème se présentait fréquemment : le besoin de trouver du contenu spécifique qui soit pertinent à la fois pour l’équipe et pour les utilisateur·rice·s du site. Au départ, le but était de créer une barre de recherche pour la section [« blogue »](https://numerique.canada.ca/blogue/). Puis, nous nous sommes rendu compte qu’une barre de recherche commune à tout le site Web permettrait aux utilisateur·rice·s d’utiliser les mots clés de leur choix pour rechercher n’importe quel contenu, comme des offres d’emploi ou des rapports, pour n’en nommer que quelques-uns.

Nous avons donc commencé à coder la première version de la barre de recherche pour le site Web du SNC.

## **Recherche de solutions**

Notre site Web est construit à l’aide d’un cadre statique appelé [Hugo](https://gohugo.io/commands/hugo_server/). De ce fait, le contenu se trouve au sein du site Web lui-même, ce qui rendait les solutions côté serveur inapplicables. 

Nous voulions également nous doter d’une bibliothèque de recherche légère et facile à mettre en œuvre. Après avoir fait quelques recherches et abordé le sujet avec d’autres développeur·euse·s, nous avons restreint nos choix à [Fuse.js](https://fusejs.io/) et [Lunr.js](https://lunrjs.com/). Nous avons finalement opté pour la seconde possibilité en raison d’une fonctionnalité utile appelée l’« indexation par radicaux », sur laquelle je reviendrai un peu plus tard.

## **Mise en place de la fonctionnalité de recherche : notre méthode… qui pourrait être la vôtre**

Voici les étapes que vous pouvez suivre pour mettre en place votre fonctionnalité de recherche : 
<br>
<br>
1. La première chose à faire est de mettre à jour votre fichier de configuration (dans le cas présent, le fichier « config.toml » ou « config.yaml ») à la racine de votre référentiel et d’ajouter JSON à vos formats de sortie.

![Capture d’écran du fichier de configuration dans le répertoire racine du SNC. JSON est ajouté comme format de sortie.](https://de2an9clyit2x.cloudfront.net/img1_blog_website_searchbar_5850c10f92.jpg)
<br>
2. L’étape suivante consiste à créer un fichier index.json à la racine de votre dossier Layouts, ce qui générera le fichier de données [JSON](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON) de la page. Si nous voulons rendre la recherche possible sur l’ensemble du site Web, nous devons veiller à ce qu’elle soit possible pour la totalité du dossier de contenu.

![Capture d’écran du code compris dans le fichier index.json.](https://de2an9clyit2x.cloudfront.net/img2_blog_website_searchbar_d303e02f95.jpg)
<br>
3. Pour l’étape suivante, qui consiste à créer l’index de recherche Lunr, les champs inclus dans la [fonction asynchrone](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function) sont ceux parmi lesquels nous voulons pouvoir faire des recherches et que nous utiliserons pour construire notre index. La variable « pagesIndex » contiendra les données de la page JSON d’index.json et la variable « searchIndex » contiendra l’index de recherche dans Lunr.

![Lignes de code comportant la variable de l’index de recherche Lunr.](https://de2an9clyit2x.cloudfront.net/img3_blog_website_searchbar_574e13f106.jpg)

La [convenience method (méthode de commodité) Lunr](https://lunrjs.com/docs/lunr.html) permet de configurer et de créer un nouvel index Lunr. 

Quelques remarques :

* L’index est « immuable », ce qui signifie que tous les documents devant faire l’objet de recherches doivent être fournis à ce stade. Il n’est pas possible d’ajouter ou de retirer des documents une fois l’index de recherche créé.

* Tous les champs devant pouvoir faire l’objet de recherches sont définis dans l’index, ce qui signifie que des champs comme « titre », « description » et « contenu » peuvent faire l’objet de requêtes dans la barre de recherche. Ces champs sont également les éléments JSON stockés dans « pagesIndex.field ». Tout le contenu de « this.field » peut faire l’objet d’une recherche. Ainsi, si deux documents distincts comprennent le mot « politique », l’un dans le titre et l’autre dans la description, ces deux documents apparaîtront dans les résultats d’une recherche portant sur le terme « politique ».  

* Un autre élément à prendre en compte est le fait que le champ « this.ref » soit utilisé comme identificateur, c’est-à-dire comme URL de chaque page. Il peut ensuite être utilisé pour retrouver le contenu, créer les résultats de la recherche et afficher le tout en version HTML.

* Pour finir, chacun des éléments de la page est ajouté à l’index de recherche Lunr.

# **Notre barre de recherche : du concept à la réalité**

Après avoir établi les bases nécessaires à une fonction de recherche, il est important de déterminer la façon dont la fonctionnalité va s’afficher sur le site Web et la façon dont l’utilisateur·rice va pouvoir interagir avec elle. Dans ce cas-ci, j’ai créé une fenêtre modale affichant les résultats de recherche, qui se déclenche lorsque l’utilisateur·rice clique sur l’icône « loupe » au niveau du menu principal du site Web. 

La fenêtre modale contient un champ de texte où les résultats de la recherche apparaissent en temps réel lorsque l’utilisateur·rice saisit sa requête. Notre objectif était d’aider à guider les utilisateur·rice·s dans la saisie et la modification de leurs mots clés tout en leur permettant de gagner du temps dans leur recherche (contrairement à une page qui se chargerait à nouveau pour afficher de nouveaux résultats). 

![Une capture d’écran de la barre de recherche du site Web du SNC affichant « Tous les résultats » parmi les filtres disponibles comme « Rapport », « Blogue », « Accessibilité » et « Autre ».](https://de2an9clyit2x.cloudfront.net/fr_img4_blog_website_searchbar_c2bb27cf8e.jpg)

Un facteur important à prendre en compte est la façon dont Lunr attribue un « score » (ou une pertinence) à chaque document. Les documents sont notés à l’aide de l’algorithme [BM25](https://fr.wikipedia.org/wiki/Okapi_BM25) et de facteurs comme la surévaluation, laquelle peut être paramétrée. 

Pour résumer, plus une requête de recherche apparaît dans un document, plus son score est élevé; et plus elle apparaît dans le contenu global, plus son score est faible. Les documents sont également notés en fonction de l’importance d’une requête. Prenons l’exemple du mot clé « Canada » : comme il est susceptible d’apparaître fréquemment dans notre contenu, il ne se verra pas attribuer la même importance. En revanche, si le mot clé « donnée » n’apparaît pas aussi fréquemment, un document contenant plusieurs fois ce terme obtiendra un score plus élevé.

L’un des avantages qu’offre Lunr est la possibilité de réduire un mot à son « radical » ou sa racine. Le mot « recherche » est un exemple de radical : il sert de dénominateur commun aux variantes comme « rechercher » ou encore « recherches ». Ce processus a l’avantage de limiter le nombre de jetons dans l’index de recherche et de réduire considérablement le volume de ce dernier. Les performances s’en trouvent accrues et les rappels plus rapides lors d’une recherche.

Lunr permet aussi d’utiliser des « caractères de remplacement » en employant un astérisque (*) dans la requête, ce qui constitue une [technique de recherche avancée](https://apus.libanswers.com/faq/2235#:~:text=The%20wildcard%20is%20an%20advanced,specify%20any%20number%20of%20characters) pouvant permettre de maximiser les résultats au sein des bases de données de la bibliothèque. Ainsi, lorsque l’on saisit « poli », Lunr ajoute automatiquement un caractère de remplacement à la fin de la requête de recherche et peut trouver des termes comme « politique », « police » ou encore « politiques ». 

De la même manière, j’ai ajouté l’utilisation de « correspondances approximatives » à notre fonctionnalité de recherche. Cela permet d’inclure parmi les résultats des termes ne correspondant pas exactement aux mots clés saisis par l’utilisateur·rice. Cette solution est utile lorsque l’orthographe d’un terme de la requête n’est pas claire ou lorsque l’on souhaite fournir plus de résultats que l’on en obtiendrait normalement. Le mot « vue » pourrait ainsi avoir pour correspondances approximatives les termes « lue », « rue » ou encore « eue ». Dans ce cas-ci, je règle la variable editDistance sur 1, ce qui permet de considérer les termes comme des correspondances à un caractère près.

## **Parlons-en** 

J’espère que ce billet de blogue sera utile aux personnes souhaitant mettre en place une fonctionnalité de recherche sur leur site Web!

Lunr peut être une excellente solution pour un site utilisant un cadre statique, comme Hugo ou Gatsby, ou pour un site comprenant un nombre limité de documents. L’avantage de cet outil de recherche côté client est qu’il ne requiert pas de fonctions sans serveurs comme AWS Lambda ou Azure Functions. Au lieu de cela, tout se passe au niveau du navigateur de la personne cliente.

Si vous souhaitez intégrer un cadre à votre site Web pour bénéficier d’une fonctionnalité de recherche similaire, nous vous invitons à consulter [notre code et notre documentation sur Github](https://github.com/cds-snc/digital-canada-ca). Si vous avez des questions, des réflexions ou des commentaires, [je serais ravi de les connaître](mailto:omar.tehsin@tbs-sct.gc.ca).
