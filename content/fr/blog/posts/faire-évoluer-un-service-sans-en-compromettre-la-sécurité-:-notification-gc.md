---
layout: blog
title: 'Faire évoluer un service sans en compromettre la sécurité : Notification GC'
description: >-
  Saviez-vous que Notification GC, notre plus ancien produit de plateforme, est maintenant utilisé par plus de 350 services gouvernementaux?Yael Berger, gestionnaire de produit, nous parle de la croissance et des choses à venir.
author: 'Yael Berger'
date: '2023-06-08T09:53:58'
image: https://articles.alpha.canada.ca/uploads/sites/25/2023/06/InterviewYael_1200X628_FIP_Blog_Post_FR.png
image-alt: Un portrait de Yael Berger, gestionnaire de produit, Notification GC
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2023/06/InterviewYael_1200X628_FIP_Blog_Post_FR.png
translationKey: blog-growing-service
---

<p><em>Cet article a été publié sur la page <a href="https://www.linkedin.com/company/cds-snc/">LinkedIn du SNC</a> en mai 2023. Consultez le <a href="https://www.linkedin.com/pulse/faire-%2525C3%2525A9voluer-un-service-sans-en-compromettre-la-s%2525C3%2525A9curit%2525C3%2525A9-notification%3FtrackingId=H%252FlWspI7JZxyPNkSkkD4yQ%253D%253D/?trackingId=H%2FlWspI7JZxyPNkSkkD4yQ%3D%3D">billet original.</a></em></p>



<p>Au SNC, nous travaillons avec des équipes du gouvernement afin d’améliorer les services offerts aux gens du Canada. L’une de façons d’y parvenir consiste à mettre en place les&nbsp;<a href="https://numerique.canada.ca/suite-de-produits/">outils de plateforme</a>&nbsp;: petits services interconnectés que les équipes peuvent intégrer à leurs systèmes actuels pour améliorer les temps de traitement, réduire les coûts d’approvisionnement et offrir une expérience utilisateur de qualité.</p>



<p><a href="https://notification.canada.ca/accueil?utm_source=FR_May2023_NotifyLinkedIn&amp;utm_medium=LinkedIn+&amp;utm_campaign=FR_May2023_NotifyLinkedIn&amp;utm_id=CDS_Interviews">Notification GC</a><strong>&nbsp;est notre produit le plus ancien.</strong>&nbsp;Il s’agit d’un outil d’infonuagique gratuit offrant aux ministères un moyen simple et efficace d’intégrer à leurs services des notifications par courriel et par messagerie.&nbsp;<a href="https://numerique.canada.ca/2019/11/26/on-vous-pr%C3%A9sente-notification/">Lancé en 2019</a>&nbsp;avec une série de services gouvernementaux, Notification GC a connu un immense succès. Quatre ans plus tard, l’outil est utilisé par 351&nbsp;services gouvernementaux, avec plus de&nbsp;<a href="https://notification.canada.ca/activity">87&nbsp;millions de messages envoyés</a>&nbsp;et l’équipe de Notification GC n’est pas près de ralentir.&nbsp;</p>



<p>Nous avons rencontré&nbsp;<a href="https://www.linkedin.com/in/yael-berger-5791a455?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAuYpC0B7UuaLNuQ_wDIgFLmzcpvwsJokwk">Yael Berger</a>, cheffe de produit, pour en savoir davantage sur le travail que son équipe fait pour développer ce service sans compromettre l’accessibilité, la sécurité et la convivialité.&nbsp;</p>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<p><strong>Questions et réponses:</strong></p>



<p><strong>1. Pouvez-vous nous parler un peu de votre rôle en tant que cheffe de produit de Notification GC? À quoi ressemble une journée typique pour vous?</strong></p>



<p>Yael: « En tant que cheffe de produit de Notification GC, chaque journée est un peu différente, mais c’est ce qui rend ce travail si intéressant. Mon rôle principal est de fournir l’orientation et les priorités à l’équipe pluridisciplinaire de concepteur·rice·s, développeur·se·s, chercheur·se·s et conseiller·ère·s politiques avec laquelle je travaille. Pour ce faire, j’aide l’équipe à déterminer ce qu’il faut développer, et quand il faut le faire; le but étant d’offrir le plus de valeur possible à notre clientèle, le plus rapidement possible.<strong>&nbsp;Je considère qu’un·e bon·ne gestionnaire de produits doit, d’une part, agir comme un entonnoir et un filtre pour aider l’équipe à cerner les problèmes et à saisir les occasions les plus importantes pour notre clientèle, d’autre part, organiser notre travail autour de la recherche de solutions.</strong>&nbsp;</p>



<p>Une journée typique peut donc comprendre l’examen des données et des indicateurs de la veille, un appel de soutien avec un·e client·e de Notification GC qui présente un cas d’utilisation particulier, l’animation d’une réunion de compte rendu pour parler de notre travail en cours avec les parties prenantes, la rédaction de récits utilisateur pour des fonctionnalités à développer, ainsi que l’organisation du backlog de l’équipe de produit pour que nous sachions chaque jour où nous en sommes et à quoi nous attaquer pour atteindre nos objectifs. »</p>



<p><strong>2. Notification GC a connu une forte croissance au cours des trois dernières années et demie, tant sur le plan des services pris en charge que le volume de notifications envoyées chaque mois. Comment votre équipe a-t-elle réussi à trouver un équilibre pour offrir ce service à un plus grand nombre de personnes au Canada sans compromettre la sécurité, la fiabilité et l’accessibilité du service?</strong></p>



<p>Yael: « À bien des égards, Notification GC connaît une croissance de 100&nbsp;% d’une année à l’autre. C’est pourquoi l’équipe a misé sur la croissance et la maturation de ce produit, tout en maintenant un niveau de service très élevé durant les 18&nbsp;derniers mois.&nbsp;</p>



<p>En effet, pour améliorer la&nbsp;<strong>fiabilité</strong>&nbsp;et l’envergure de notre API frontale, nous avons opté pour Amazon Web Services Lambda&nbsp;: une solution qui permet de répondre à la demande de débit que nous recevons au quotidien. Grâce à ce travail, nous avons pu rendre publics les&nbsp;<a href="https://notification.canada.ca/objectifs-niveau-de-service">objectifs de niveau de service</a>&nbsp;de façon à établir des attentes concernant la vitesse et la fiabilité auxquelles notre clientèle peut s’attendre de la part de Notification GC.&nbsp;</p>



<p>Sur le plan de la&nbsp;<strong>sécurité</strong>, nous avons obtenu l’autorisation d’exploitation et nous nous sommes soumis à une évaluation approfondie de la sécurité afin d’obtenir le profil de contrôle de sécurité Protégé B / Intégrité moyenne / Disponibilité moyenne pour notre système Notification GC, et ce, même si nous n’autorisons que des données Protégé A. Nous avons également sécurisé notre produit en introduisant des règles de limitation de débit, de balayage de fichiers et de pare-feu que nous avons déployées et testées minutieusement afin de nous assurer qu’elles ne bloqueraient que les activités malveillantes, et non le trafic légitime. Nous avons par ailleurs conclu un partenariat avec le Centre canadien pour la cybersécurité afin d’auditer nos journaux. Et&nbsp;<strong>nous pratiquons une approche de sécurité continue avec chaque fonctionnalité et chaque changement que nous ajoutons à notre produit.&nbsp;</strong></p>



<p>De la même façon,<strong>&nbsp;nous intégrons l’accessibilité dans notre travail au quotidien.&nbsp;</strong>Par exemple, nous avons effectué un audit externe complet de l’accessibilité du site Notification GC en 2022. Depuis, nous travaillons à corriger les problèmes afin de satisfaire à la norme WCAG&nbsp;2.1, niveau AA. Nous testons également les nouvelles fonctionnalités et les changements apportés à l’interface utilisateur à l’aide de tests d’accessibilité automatisés et de tests manuels, et nous effectuons des tests d’utilisabilité auprès de personnes utilisant des dispositifs d’assistance pour nous assurer de ne pas introduire d’obstacles susceptibles de les empêcher d’utiliser Notification GC. L’ensemble des concepteur·rice·s qui travaillent avec Notification GC ont suivi une formation sur l’accessibilité afin d’acquérir de nouvelles compétences pour mieux servir notre clientèle. »</p>



<p><strong>3. Qu’envisagez-vous pour l’avenir de ce service?</strong></p>



<p>Yael: « J’espère que Notification GC pourra continuer à se développer pour répondre aux besoins des fonctionnaires qui cherchent à offrir des mises à jour rapides et fiables à leur public. J’anticipe de nombreuses histoires sur la façon dont nous avons pu aider les équipes du gouvernement du Canada à envoyer des notifications de manière simple et facile.</p>



<p>Les bases solides de ce service ayant été posées, nous sommes désormais en mesure de développer de nouvelles fonctionnalités et d’accroître l’échelle de nos activités.<strong>&nbsp;Nous comptons poursuivre l’amélioration du caractère libre-service de Notification GC pour nous préparer en cas de forte demande du service et pour accroître notre clientèle de manière durable.&nbsp;</strong>Ce travail continu d’écoute auprès de notre clientèle pour répondre à leurs besoins et ajouter de la valeur à ce qui est déjà un produit de qualité me fait voir l’avenir avec beaucoup d’enthousiasme. »</p>



<p><strong>4. Que faites-vous pour vous amuser lorsque vous ne gérez pas Notification GC?</strong></p>



<p>Yael: « Récemment, j’ai commencé à jouer à Donjons et Dragons pendant les week-ends (merci Stranger Things!), même si je n’y ai jamais joué pendant mon enfance. Il n’est jamais trop tard pour stimuler son imagination et faire preuve de créativité. »</p>



<hr class="wp-block-separator has-alpha-channel-opacity" />



<p><strong>Un grand merci à Yael! Si vous travaillez dans la fonction publique fédérale et souhaitez utiliser Notification GC,&nbsp;</strong><a href="https://notification.canada.ca/accueil?utm_source=FR_May2023_NotifyLinkedIn&amp;utm_medium=LinkedIn+&amp;utm_campaign=FR_May2023_NotifyLinkedIn&amp;utm_id=CDS_Interviews">c’est le moment de l’essayer!</a></p>

