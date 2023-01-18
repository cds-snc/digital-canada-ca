---
layout: blog
title: 'Travailler ouvertement avec un sentiment d’humilité et de communauté'
description: >-
  Guillaume Charest, développeur principal de l’IFS, croit que travailler ouvertement avec un sentiment d’humilité et de communauté peut améliorer les expériences et les résultats liés au code source ouvert.
author: 'Guillaume Charest, développeur principal de l’équipe de l’IFS'
date: '2022-11-21T08:43:48'
image: https://articles.alpha.canada.ca/uploads/sites/25/2022/11/banner-blog-work-open-community.jpeg
image-alt: A global community of people working in the open. Together, they’re sharing ideas to improve the code’s quality. Une communauté mondiale de personnes qui travaillent ouvertement. Elles se partagent des idées pour améliorer la qualité du code.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2022/11/banner-blog-work-open-community.jpeg
translationKey: blog-work-open-community
---

<p>J’ai découvert le concept de logiciel libre alors que j’étudiais à l’Université Laval en informatique. J’avais un professeur qui n’arrêtait pas de parler d’un type de logiciel utilisant un code visible et modifiable par tous au profit du public.</p>



<p>Il faut dire qu’en tant qu’étudiant, j’ai travaillé fort pour m’acheter des jeux et des logiciels, alors même que j’apprenais comment maximiser les profits de grandes entreprises du secteur de la Tech grâce à la vente de ces fameux logiciels. Il me semblait donc paradoxal d’associer la notion de logiciel libre à la notion de rentabilité. Il semblait évident que les entreprises publiant leurs logiciels sous une licence libre risqueraient d’être écrasées par la concurrence qui n’aurait qu’à voler leur code pour le revendre!</p>



<p>Vingt ans plus tard, désormais développeur principal pour l’équipe de l’ingénierie de fiabilité des sites (IFS) du SNC, je réalise que tous les logiciels ne sont pas toujours des candidats idéals pour être publiés sous une licence de logiciel libre, mais qu’il est souvent pertinent de travailler ouvertement, surtout dans l’administration publique.</p>



<p><a href="https://notification.canada.ca/accueil">Notification GC</a> en est un bon exemple! Ce service a permis au gouvernement du Canada d’envoyer près de <a href="https://notification.canada.ca/activity">63 millions de notifications</a> aux Canadiens depuis novembre 2019. La technologie de base sur laquelle repose Notification GC fut développée à l’origine par le Government Digital Service du Royaume-Uni. <a href="https://numerique.canada.ca/2019/11/26/on-vous-pr%C3%A9sente-notification">Le SNC l’a par la suite adaptée pour répondre aux besoins de ses utilisateur·rice·s</a> notamment en rendant l’application bilingue!</p>



<p>Le fait de pouvoir travailler à partir de matériel déjà existant nous a permis de gagner un temps précieux lors de la mise en place du service. Nous avions comme point de départ un produit déjà mature que nous avons bonifié en travaillant ouvertement dans le but d’aider (potentiellement) d’autres équipes.</p>



<p>Ceci étant dit, on peut se demander pourquoi le travail ouvert n’est pas adopté plus largement au sein du gouvernement. Dans ce blogue, je présenterai d’abord les défis que j’ai pu rencontrer en adoptant cette façon de travailler, pour ensuite vous faire part des solutions que j’ai trouvées pour les surmonter.</p>



<h2 id="h-travailler-ouvertement-c-est-loin-d-etre-simple">Travailler ouvertement, c’est loin d’être simple</h2>



<p>Mon travail dans l’équipe de l’IFS m’a fait prendre conscience que la plupart des technologies utilisées aujourd’hui pour fournir des services modernes à nos utilisateur·rice·s finaux·ales sont des projets de logiciels libres en soit ou en dépendent fortement, et ce, peu importe que nous achetions la solution ou que nous la concevions nous-mêmes. En fait, ces projets sont tellement essentiels à l’ensemble de l’infrastructure technologique mondiale, que le Sénat des États-Unis est en train de présenter <a href="https://www.congress.gov/bill/117th-congress/senate-bill/4913">un projet de loi bipartisan visant à rendre plus sécuritaire l’approvisionnement en logiciels libres</a> (en anglais).</p>



<p>Travailler ouvertement, ne serait-ce qu’à l’interne au début, peut aider les ministères et les organismes à tirer parti des travaux et des recherches déjà réalisés, sans devoir recourir à des processus d’approbation longs et bureaucratiques. C’est ce qui a fait de GCpédia et GCconnex, des plateformes de collaboration internes lancées il y a plus de dix ans, un tel succès : elles nous ont permis de trouver facilement des fonctionnaires et des équipes confrontés à des défis similaires aux nôtres et de nous entraider.</p>



<p><strong>Travailler ouvertement multiplie les chances que d’autres réutilisent notre travail, voire collaborent avec nous.</strong> Par exemple, si un fonctionnaire ou un membre du public découvrait un bogue dans Notification GC, cette personne pourrait se rendre sur le répertoire du projet et le signaler. L’équipe serait alors mise au courant et pourrait régler le problème rapidement. Rappelons aussi qu’il existe un formulaire Web à cette fin.</p>



<p>Cependant, en tant que fonctionnaires, nous sommes tous et toutes scrutés et exposés à la critique du public. Cette situation peut être décourageante pour beaucoup d’entre nous et peut influer sur le nombre de règles et d’autorisations que les équipes doivent respecter pour obtenir la permission de travailler ouvertement. Déterminer les autorisations nécessaires et les règles en vigueur représente parfois tout un travail en soi! Il s’agit d’un effort supplémentaire qui vous oblige probablement à passer beaucoup de temps à convaincre des groupes et des comités qu’il est possible de travailler ouvertement en toute sécurité.</p>



<p>Dans ce contexte, la crainte de commettre une erreur, ou d’être juger sur la pertinence de ses décisions est bien réelle ; je comprends donc l’hésitation de nombreux collègues à présenter leur travail sans qu’il ne soit peaufiné. Cette situation rend d’autant plus difficile une approche ouverte par défaut; ce qui n’est imputable à personne en particulier. Les choses sont ainsi depuis longtemps, malgré la prépondérance que les <a href="https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/plans-strategiques-operations-numeriques-gouvernement-canada/ambition-numerique-canada.html#toc3.2">normes relatives au numérique</a> et la <a href="https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=32603">politique sur les services et le numérique</a> accordent à cette notion.</p>



<p><strong>Au SNC, travailler ouvertement est un principe fondateur , ce qui facilite grandement l’adoption de cette méthode de travail par toutes nos équipes. Nous sommes toutefois bien conscient·e·s que cela peut être plus difficile et exiger plus de temps pour un autre ministère.</strong> Ceci étant dit, je pense que l’effort exigé pour travailler ouvertement en vaut la peine, et qu’il est également nécessaire de poursuivre l’amélioration de nos services au public, avec le public. La transition n’est pas facile, mais il est possible d’adopter ces pratiques petit à petit, en développant progressivement ses processus dans une optique d’amélioration continue. <a href="https://sara-sabr.github.io/ITStrategy/2021/07/09/travailler-ouvertement-partie-2.html">L’équipe chargée de la stratégie en matière de technologies de l’information d’EDSC en est un bon exemple</a>.</p>



<h2 id="h-une-dose-d-humilite">Une dose d’humilité</h2>



<p>Je suis conscient qu’au début, travailler ouvertement peut paraître angoissant. Il faut donc faire preuve d’humilité et reconnaître que personne n’est parfait. Travailler ensemble, et ouvertement, représente une formidable opportunité d’apprentissage et de développement.</p>



<p>La pratique habituelle dans l’administration publique consiste à suivre <strong>des principes et des processus de gestion de projets rigoureux, que l’on appelle aussi la « planification en cascade ».</strong> Si cette approche a sa valeur, on en tire généralement les leçons une fois le projet terminé. Le succès des projets informatiques devrait donc, en théorie, s’accroître, ce qui ne semble pas être le cas dans la <a href="https://sara-sabr.github.io/ITStrategy/2021/07/09/travailler-ouvertement-partie-2.html">réalité</a>.</p>



<p>Le plus important à mon avis reste d’être à l’écoute du public et d’encourager le plus grand nombre à se joindre à nous dès le début d’un projet numérique, pour aider à repérer ce qui devrait être amélioré, proposer des solutions aux défis potentiels, et apprendre les uns des autres. C’est donc dire qu’il faut faire preuve d’ouverture à l’égard des suggestions et des idées qui pourraient ne pas provenir directement d’un membre de notre équipe ni de la phase initiale où l’on analyse les besoins de l’entreprise.</p>



<p>En résumé, on ne peut pas tout prévoir et tout le monde devrait être invité à contribuer. Ce faisant, nous démontrons de façon très concrète notre volonté de travailler ensemble avec le public &#8211; pour le public &#8211; en tant que communauté.</p>



<h2 id="h-un-sentiment-de-communaute">Un sentiment de communauté</h2>



<p>Soulignons que, dans le monde du développement de logiciels, les projets de logiciels libres les plus réussis sont ceux qui bénéficient fortement à la communauté, aux personnes qui utilisent le projet et y contribuent. Cependant, s’il est possible de compter sur une équipe de développeur·se·s dévoué·e·s qui assurent la maintenance et l’ajout de nouvelles fonctionnalités à votre logiciel, la taille et la capacité de cette équipe ne saurait se comparer à la contribution d’une communauté dynamique.</p>



<p>Le succès d’une telle communauté dépend du soutien et de l’adhésion dont elle jouit, ce qui demande, à son tour, d’expliciter les formes de contribution externe acceptables. Cette clarté initiale permettra que les gens se sentent plus à l’aise pour participer activement au projet.</p>



<p>En fait, c’est la raison pour laquelle les meilleures équipes de projets de logiciel libre comptent souvent des gestionnaires de communauté au sein de leurs équipes. Habitués à travailler ouvertement, ces spécialistes de l’animation des communautés d’internautes misent sur le travail ouvert pour accroître et renforcer les capacités de leur propre équipe!</p>



<p>Ajoutons que même le SNC a la possibilité d’améliorer ses méthodes de travail. En effet, je nous vois étendre notre capacité de gestion des communautés autour de nos projets publiés sous licence libre en favorisant un environnement de travail qui facilite la participation externe.</p>



<p>Par exemple, nous pourrions envisager de créer un poste de gestionnaire de communauté ou d’aider les équipes de développement actuelles à configurer leur espace de travail de manière à faciliter les contributions externes.</p>



<h2 id="h-joignez-vous-au-mouvement">Joignez-vous au mouvement!</h2>



<p>Au SNC, nous essayons autant que possible de travailler ouvertement, car nous pensons que cela apporte une valeur ajoutée aux Canadiens, tout en nous permettant de porter un regard critique et constructif sur notre travail.</p>



<p>Nous vous encourageons donc à vous joindre à nous, en tant qu’équipes gouvernementales, en mettant votre propre travail à la disposition du public; en consultant nos projets et en nous aidant à les améliorer continuellement.</p>



<p>Cette démarche ne sera pas sans défis ni embûches, mais une bonne dose d’humilité et de courage vous permettront de créer votre communauté ou de vous joindre à la nôtre. Si vous avez besoin d’un peu d’aide pour donner le coup d’envoi, n’hésitez pas à nous contacter (<a href="mailto:cds-snc@tbs-sct.gc.ca">par courriel</a>)!</p>



<p>Nous sommes tous et toutes dans le même bateau!</p>

