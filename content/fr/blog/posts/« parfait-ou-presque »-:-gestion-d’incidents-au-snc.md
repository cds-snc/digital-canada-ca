---
layout: blog
title: '« Parfait ou presque » : Gestion d’incidents au SNC'
description: >-
  Calvin Rodo, responsable d’équipe – ingénierie de fiabilité des sites et infonuagique, offre un aperçu du processus de gestion des incidents au SNC, axé sur les leçons apprises.
author: 'Calvin Rodo, chef de l’équipe d’ingénierie de la fiabilité des sites (IFS)'
date: '2022-10-13T08:34:36'
image: https://articles.alpha.canada.ca/uploads/sites/25/2022/10/banner-a-percentage-of-perfection-incident-management-at-cds.jpeg
image-alt: A laptop with an alarming red screen, surrounded by hazard signs, sand timer, settings icon, and life buoy. Un ordinateur portable avec un écran rouge entouré de panneaux de danger, d'un sablier, d'une icône de paramètres et d'une bouée de sauvetage.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2022/10/banner-a-percentage-of-perfection-incident-management-at-cds-1024x507.jpeg
translationKey: parfait-ou-presque-gestion-dincidents-au-snc
---

<blockquote class="wp-block-quote"><p><em><strong>« Accepter que les choses imparfaites puissent quand même fonctionner est essentiel pour éviter que les échecs ne deviennent des catastrophes. »</strong></em></p></blockquote>



<p>Cette citation de l’auteure <a href="https://twitter.com/wiredferret">Heidi Waterhouse</a> est l’une de mes préférées : après plus de 15 ans à travailler en tant que développeur de logiciels sur divers services gouvernementaux, je constate que <a href="https://increment.com/reliability/failure-is-okay/">Heidi Waterhouse avait raison (en anglais)</a>, tout est un peu brisé.</p>



<p>Créer des logiciels n’est pas chose facile. Créer des logiciels n’est pas chose facile. Exécuter des systèmes conçus par d’autres non plus. Nous sommes toutes et tous humain·e·s et nous faisons des erreurs. Il est donc parfaitement logique de bien se préparer aux défaillances, car elles finiront par se produire, tôt ou tard.</p>



<p>Dans ce billet de blogue, je reviens sur un incident qui a mobilisé toute notre équipe, sur l’approche novatrice qui nous a permis d’y remédier (et de nous assurer que cela ne se reproduise plus) et surtout, je partage avec vous les enseignements tirés de cette expérience, dans l’espoir qu’ils vous soient utiles.</p>



<h2 id="h-l-incident">L’incident</h2>



<p>Le 29 mars dernier, vers 10 h, l’un de nos ingénieurs de la fiabilité des sites (IFS) a remarqué qu’un logiciel que nous utilisons pour mettre à jour l’un des serveurs de <a href="https://notification.canada.ca/accueil">Notification GC</a> publiait des données sensibles dans son journal d’exécution. Il s’agissait de clés et de jetons d’autorisation. <strong>À ce stade, il est important de préciser qu’aucun renseignement personnel n’a été divulgué ni conservé.</strong></p>



<p>Et puisque Notification GC est un logiciel source ouvert et que nous travaillons ouvertement, ces clés et jetons d’autorisation étaient visibles par tout le monde. Heureusement, aucune information n’est tombée entre de mauvaises mains; nous avons été en mesure de corriger le problème très rapidement, en l’espace de quelques heures tout au plus.</p>



<p>Notre arme secrète? Un <a href="https://github.com/cds-snc/site-reliability-engineering-public/blob/main/docs/processus_de_gestion_dincidents_au_snc.md">processus de gestion des incidents</a> bien défini que l’on active lorsqu’un problème survient.</p>



<p>Mon équipe au SNC a créé un robot Slack nommé SRE-Bot qui s’active rapidement en cas d’incident. Il crée un espace de discussion, une réunion vidéo, un rapport d’incident et informe les équipes qu’un incident est en cours. (Un outil assez génial!)</p>



<figure class="wp-block-image size-large is-resized"><img loading="lazy" src="https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-fr-1-965x1024.jpeg" alt="Capture d’écran du robot Slack utilisé au SNC pour répondre à un incident de sécurité. Le logiciel indique aux équipes qu’un espace de discussion a été créé sur Slack, qu’un rapport d’incident est en cours de préparation et qu’une rencontre virtuelle a été planifiée." class="wp-image-417" width="452" height="479" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-fr-1-965x1024.jpeg 965w, https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-fr-1-283x300.jpeg 283w, https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-fr-1-768x815.jpeg 768w, https://articles.alpha.canada.ca/uploads/sites/25/2022/10/sre-start-incident-fr-1.jpeg 1200w" sizes="(max-width: 452px) 100vw, 452px" /></figure>



<p></p>



<h2>Remédier à l’incident</h2>



<p>Étant donné la nature des renseignements divulgués, des acteurs malveillants auraient pu exécuter des actions non autorisées sur plusieurs produits du SNC ou sur les services dont nos produits dépendent. Tant que le problème n’était pas réglé, nous étions exposés et d’autres incidents auraient pu survenir.</p>



<p>Voici donc les différentes étapes de notre processus de gestion des incidents :</p>



<p><strong>1 — Rassembler les bonnes personnes pour régler le problème (notre groupe de travail du SNC)</strong></p>



<p>Dès que l’incident a été déclaré, nous avons communiqué avec l’équipe de Notification GC; l’équipe de l’infrastructure, de la sécurité et du soutien technique; ainsi que l’équipe d’ingénierie de la fiabilité des sites internes. Au départ, nous n’avions pas contacté l’équipe des communications, car il n’y avait aucun impact sur les utilisateurs externes et aucun besoin immédiat d’informer qui que ce soit en dehors du SNC.</p>



<p>SRE-Bot a également diffusé instantanément un message dans Slack indiquant qu’un incident s’était produit, en fournissant un lien vers notre salle de discussion afin que toute personne intéressée au SNC puisse se joindre et suivre la situation.</p>



<p>En fin de compte, nous avons dû faire appel à notre équipe des communications, car il fallait informer les utilisateurs d’une courte interruption de nos services.</p>



<p><strong>2 — Définir la cause de cet incident et son incidence sur les utilisateurs</strong></p>



<p>Nous avons constaté assez rapidement que l’incident avait été causé par une erreur dans la configuration d’un processus qui a engendré la publication de clés et de jetons d’autorisation dans les journaux d’activités. C’est un employé du SNC qui consultait les journaux qui a découvert le problème.</p>



<p>Nous avons cerné l’incidence et l’ampleur de l’incident en examinant les journaux actuels et historiques. Ceux-ci nous ont également permis de déterminer ce qui s’était passé précisément et depuis combien de temps cela se produisait.</p>



<p>C’est à ce moment-là que nous avons remarqué que le code que nous utilisions pour mettre à jour notre système avait été copié à plusieurs reprises à l’échelle du SNC. Nous avons donc élargi la portée de l’incident pour inclure les équipes de communication.</p>



<p><strong>3 — Communiquer avec toutes les équipes touchées</strong></p>



<p>Lors d’un incident, chacun·e est responsable de communiquer le travail qu’il ou elle effectue dans la salle de discussion Slack de l’incident.</p>



<p>Cette communication est utile pour plusieurs raisons; elle rend visible le travail en cours et permet au commandant ou à la commandante de l’incident (CI) de coordonner plus facilement et plus rapidement l’intervention.</p>



<p><strong>4 — Résoudre le problème et s’assurer qu’il ne se reproduise plus</strong></p>



<p>Nous avons ensuite commencé à trier les renseignements divulgués : nous avons commencé à permuter les clés API qui ont été divulguées et à supprimer tous les journaux contenant des données sensibles (clés et jetons d’autorisation). À ce stade, le problème immédiat avait été résolu.</p>



<p>Il a fallu environ une heure pour y parvenir.</p>



<p>Malheureusement, dans notre empressement, nous avons accidentellement changé le sel (<a href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#salting">données aléatoires ajoutées à un secret pour le rendre plus long et plus difficile à déchiffrer (en anglais)</a>) que nous utilisons pour hacher de façon cryptographique nos mots de passe, ce qui a verrouillé les comptes clients pendant un peu plus de 30 minutes.</p>



<p><strong>5 — Documenter ce qui s’est passé</strong></p>



<p>Non seulement il est essentiel de documenter ce qui s’est passé pour communiquer l’incident à l’interne, mais cette documentation sert également à tirer des leçons de l’incident.</p>



<p>Nous utilisons un <a href="https://github.com/cds-snc/site-reliability-engineering-public/blob/main/docs/modele_de_rapport_dincident_de_produit.md">modèle de rapport d’incident</a> qui sous-tend l’ensemble du processus. Il est assez simple pour le ou la commandant·e de l’incident de copier et coller la discussion qui a eu lieu dans la salle de discussion Slack dans le rapport et d’avoir une chronologie relativement détaillée de notre intervention.</p>



<p>Notre rapport d’incident est indispensable pour suivre ce qui a déclenché l’incident, en découvrir les causes et fournir une chronologie détaillée de notre intervention : éléments qui faciliteront l’analyse rétrospective sans reproches.</p>



<h2>Analyse rétrospective sans reproches</h2>



<p>Après avoir traité les enjeux immédiats, nous avons prévu un examen de l’incident sous la forme d’analyse rétrospective sans reproches.</p>



<p>Cette analyse se fait « sans reproches », car il est important pour nous de reconnaître que lorsque les choses vont mal, c’est le résultat de problèmes systémiques ou organisationnels et non le résultat d’actes répréhensibles de la part d’un employé. Lorsqu’on attribue la faute à quelqu’un, cette personne est moins portée à s’exprimer lorsqu’il y a un problème.</p>



<p>C’est l’occasion pour nous d’examiner ce qui s’est passé pendant l’incident, de nous assurer que notre rapport d’incident est complet et de déterminer les mesures à prendre pour réduire le risque que le problème se reproduise.</p>



<p>Dans le cas de notre incident, nous avons procédé à la permutation des clés API, la suppression des journaux d’intégration continue après 48 heures, l’analyse des journaux d’exécution afin d’y repérer des secrets divulgués et la mise à jour de notre processus de gestion des incidents.</p>



<h2>Points à retenir</h2>



<p>Nous apprenons toujours beaucoup lors d’un incident et quelques semaines plus tard, un incident similaire s’est produit dans une autre équipe du SNC. Les leçons tirées du premier incident nous ont permis de résoudre le deuxième en une fraction du temps.</p>



<p>Ainsi, je vous fournis ma liste de points à retenir :</p>



<ul><li><strong>Développez pour la récupération</strong>. Les défaillances sont inévitables. Concentrez-vous donc sur la capacité à publier rapidement et en toute sécurité vos modifications dans l’environnement de production.</li><li><strong>Mettez en place un processus de gestion des incidents bien défini.</strong> Un plan d’intervention bien défini aide à réduire le stress dans l’éventualité d’une défaillance.</li><li><strong>N’attribuez pas la faute à un employé, la faute en revient à l’organisation</strong>. Une culture sans reproches aide à améliorer la sécurité psychologique.</li><li><strong>Tirez des leçons de chaque incident</strong>. Considérez les incidents comme des boucles de rétroaction qui peuvent être utilisées pour améliorer les systèmes et les processus, y compris le processus de gestion des incidents lui-même.</li></ul>



<h2>Conclusion</h2>



<p>Bien que personne n’aime être impliqué dans un incident, ils sont inévitables et tout service doit y faire face.</p>



<p>La perfection n’existe pas, mais vous pouvez toujours perfectionner votre gestion des incidents.</p>



<p>Nous développons nos services de manière à pouvoir réagir rapidement et facilement en cas de problème, par exemple à l’aide de tests automatisés, en utilisant l’infrastructure comme code pour reproduire nos environnements et en automatisant les déploiements afin d’apporter des modifications rapides à nos systèmes.</p>



<p>Les incidents sont pour nous des occasions d’apprentissage idéales pour améliorer la fiabilité de nos services et notre processus de gestion des incidents est une importante boucle de rétroaction qui dresse un portrait d’ensemble du problème, de la façon dont nous l’avons corrigé et des façons d’en tirer des leçons.</p>



<p>La création d’une culture sans reproches quant aux incidents assure la sécurité psychologique nécessaire pour réagir rapidement et sans crainte lorsque les choses vont mal.</p>



<p>Si vous cherchez à améliorer la façon dont vous réagissez aux incidents qui se produisent avec vos services, n’hésitez pas à <a href="https://numerique.canada.ca/encadrement-et-conseil/">nous joindre</a>. La seule chose que j’aime plus que notre processus de gestion des incidents, c’est d’en parler.</p>

