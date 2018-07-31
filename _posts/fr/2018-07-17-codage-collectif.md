---
title: "Codage collectif : collaborer pour améliorer le travail des uns et des autres"
description: "Si vous cherchez un peu, vous pouvez trouver de la solidarité autour de vous. Le développement de logiciels ouverts n’y fait pas exception. De par sa nature, le développement ouvert trouve sa source dans la collectivité. Grâce au partage, les gens peuvent tirer parti du travail de chacun, ce qui facilite la tâche de tout le monde."
author: David Buckley, développeur
date: 2018-07-17 09:00:00 -0400
image: blog-david-https-header.jpg
image-alt: Une illustration de deux personnes qui peinturent une maquette géante de page web.
lang: fr
layout: cds/post
trans_url: "/2018/07/17/community-driven-coding"
---

Si vous cherchez un peu, vous pouvez trouver de la solidarité autour de vous. Le développement de logiciels ouverts n’y fait pas exception. De par sa nature, le développement ouvert trouve sa source dans la collectivité. Grâce au partage, les gens peuvent tirer parti du travail de chacun, ce qui facilite la tâche de tout le monde.

Lorsque nous adaptons un logiciel, notre relation avec ses créateurs peut être distante, une simple attribution à leur travail original dans une note de bas de page. On peut difficilement rester distant lorsque les développeurs font des pieds et des mains pour offrir leur aide. Eric, par exemple, s’est donné beaucoup de peine.

[Eric Mill](https://twitter.com/konklone) est un des développeurs originaux de [Pulse](https://pulse.cio.gov/), un projet de 18F visant à aider les propriétaires de domaines fédéraux à savoir s’ils satisfont aux nouvelles exigences de sécurité comme l’application du protocole HTTPS. Le gouvernement du Canada a le même besoin, alors nous avons utilisé le code libre créé par 18F pour Pulse, histoire de donner un coup d’élan à notre développement.

En prime, nous avons pu profiter de l’expérience d’Eric, qui nous a aidés à comprendre ce qui nous attendait pendant la phase de développement du projet HTTPS. Il nous a fait part :
* des questions les plus courantes des propriétaires de domaines
* des attentes de ces derniers quant à la mise à jour des résultats
* du type de volume de trafic observé sur Pulse
* de qui étaient les utilisateurs.

La coopération s’est établie dans les deux sens. De notre côté, nous avons offert quelques améliorations : éléments de convivialité de base, connexion plus formelle et éléments de raffinement. L’ajout le plus important a été la fonction de test automatisé. Pendant le développement, nous effectuons des tests pour vérifier que le système fonctionne bien; notre ajout signifie que chaque fois qu’un changement est apporté, un test est exécuté automatiquement pour s’assurer que ce changement n’a rien cassé. 

Et la coopération continue. La semaine passée, lors d’un test nous avons découvert un bogue. Les valeurs d’une des colonnes n’étaient pas correctement triées. Après avoir remonté la chaîne jusqu’au référentiel original de Pulse et vérifié que le bogue se trouvait également dans cette version, nous avons travaillé avec Eric pour tenter de comprendre ce qui se passait. Eric a remarqué que les valeurs étaient triées comme s’il s’agissait d’un texte (c.-à-d. 33 % 33 % 33 % 33 % 3 % 29 % 28 %…)

<div class="col-sm-6">
    <img width="100%" style="max-width:190px;" alt="Un tableau de valeurs avec sept barres, chacune affichant un pourcentage différent. Dans ce tableau, les pourcentages sont triés par ordre textuel (33 %, 33 %, 33 %, 33 %, 3 %, 29 % et 28 %)." src="/assets/img/cds/post-images/blog-david-https-fr_1.png">
</div>

<div class="col-sm-6">
    <img width="100%" style="max-width:200px;" alt="Un tableau de valeurs avec sept barres, chacune affichant un pourcentage différent. Dans ce tableau, les pourcentages sont triés par ordre numérique (33 %, 33 %, 33 %, 33 %, 29 %, 28 % et 26 %)." src="/assets/img/cds/post-images/blog-david-https-fr_2.png">
</div>

Une fois que nous avons compris, il a été assez simple d’appliquer un tri numérique sur la colonne, ce qui a réglé le problème.

La solution est maintenant appliquée dans nos deux projets, qui ne s’en portent que mieux. Et notre relation avec Eric est encore un petit peu plus solide. Merci Eric.