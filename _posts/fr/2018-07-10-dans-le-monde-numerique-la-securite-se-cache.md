---
title: "Dans le monde numérique, la sécurité se cache"
description: "J’en arrive à la conclusion qu’écrire sur la sécurité est en fait plus difficile que de la faire appliquer. Cela est probablement attribuable au fait que j’ai évité de parler de mes activités au travail ou d’écrire à ce sujet pendant la majeure partie des dix dernières années. Permettez-moi de vous en dire plus, ça pourrait devenir intéressant."
author: John O'Brien, responsable de la sécurité
date: 2018-07-11 09:00:00 -0400
image: the-security-in-digital-is-silent.png
image-alt: Un cadenas ouvert
lang: fr
layout: cds/post
trans_url: "2018-07-10/the-security-in-digital-is-silent"
---

J’en arrive à la conclusion qu’écrire sur la sécurité est en fait plus difficile que de la faire appliquer. Cela est probablement attribuable au fait que j’ai évité de parler de mes activités au travail ou d’écrire à ce sujet pendant la majeure partie des dix dernières années. Permettez-moi de vous en dire plus, ça pourrait devenir intéressant.

J’ai passé la plus grande partie de ma carrière au Centre de la sécurité des télécommunications (CST) à titre d’[« espion super secret »](https://www.cbc.ca/news/technology/cse-canada-cyber-spy-malware-assemblyline-open-source-1.4361728), faisant de mon mieux pour détecter les cyberattaques contre les systèmes du gouvernement du Canada et y réagir. Le CST fait vraiment des trucs sympas. Je vous encourage à y [poser votre candidature](https://www.cse-cst.gc.ca/fr/careers-carrieres), après avoir d’abord passé un peu de temps [SNC](https://numerique.canada.ca/travaillez-avec-nous/), évidemment.

Lorsque j’ai décidé d’aller travailler au SNC, je n’ai pas pris cette décision à la légère. De façon générale, les professionnels de la sécurité, moi y compris, forment un clan un peu particulier; pessimistes de nature, analytiques et peu enclins à festoyer. Pour l’essentiel, ce qui m’a amené à prendre cette décision était la possibilité d’appliquer mes connaissances et les leçons apprises de mon temps passé à défendre les systèmes du gouvernement afin d’établir une culture et une pratique de bonne gestion de la sécurité et d’ingénierie de la fiabilité au sein du SNC. Comme le dit un de mes amis : [« À gauche, comme un pro »](https://medium.com/@shehackspurple/pushing-left-like-a-boss-part-1-80f1f007da95).

La sécurité est l’un de ces sujets que l’on oublie facilement. L’industrie de la sécurité a permis l’émergence d’un écosystème dans lequel les vulnérabilités affublées de logos chics et de noms à la mode, les violations de données à grande échelle et un piratage parrainé par l’État qui semble invincible attirent à eux presque toute l’attention. Les réseaux neuronaux en chaînes de blocs d’intelligence artificielle autonomes et bien à la mode l’emportent sur des tâches ordinaires comme la réduction de la dette technique parce que, soyons francs, très peu de gens se voient accorder un prix pour avoir réduit la longueur d’un code.

J’aimerais essayer une approche de la sécurité légèrement différente, un peu plus prosaïque et pragmatique. Nous prévoyons publier une série d’articles sur nos propres pratiques exemplaires, au rythme de nos collaborations avec de nouveaux partenaires et de la création de nouveaux produits. Ces pratiques revêtent une importance cruciale pour la voie à suivre en vue d’assurer une prestation de services sécuritaires et fiables aux Canadiens. 

## HTTPS partout

Avant de joindre les rangs du SNC, j’ai parcouru le document intitulé [Plan stratégique pour la gestion de l’information et la technologie de l’information](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/plan-strategique-2017-2021.html). Imaginez ma surprise lorsque j’ai lu « HTTPS everywhere ». 

Le protocole HTTPS et son cousin instable HTTP sont les protocoles permettant à votre navigateur Web de communiquer avec nos serveurs Web pour charger cette page. Le protocole HTTPS fait en sorte que personne ne peut voir les données que vous envoyez et recevez, pas plus qu’elles ne peuvent être modifiées en cours de route. 

L’initiative « HTTPS everywhere » m’a donné l’occasion de tirer profit de mes relations avec les membres du SNC, d’aider quelques collègues au sein de la Direction du dirigeant principal de l’information et de réutiliser un projet existant ([Pulse](https://pulse.cio.gov/)), gentiment mis à la disposition de la collectivité par les gens incroyables de [18F](https://18f.gsa.gov/what-we-deliver/).

SNC collabore actuellement avec le SCT pour faire connaître ce produit et le déployer en vue de contribuer à la [mise en œuvre de connexions Web sécurisées](https://www.canada.ca/fr/secretariat-conseil-tresor/services/technologie-information/avis-mise-oeuvre-politique/mise-oeuvre-https-connexions-web-securisees-ampti.html) à l’échelle du gouvernement. Nous nous donnons pour tâche d’offrir une connexion sécurisée à tout service ou site Web que nous créons. Regardez dans le coin supérieur gauche de votre navigateur Web. Voyez-vous un petit cadenas vert ou une petite barre verte ou un petit cadenas vert sur lequel on peut lire « Sécurisé »? Excellent! Dans le cas contraire, communiquez avec nous, car cela veut dire que quelque chose s’est vraiment mal passé. 

L’avantage de ce produit? Lorsque vous créez le nouveau « truc », vous êtes alors le premier à le tester. Ainsi, nous avons testé nos propres noms de domaines, et nous étions consternés de nous rendre compte que, dans notre enthousiasme à mettre en service notre site Web l’an dernier, nous avions choisi un réglage dans notre configuration Cloudfront d’AWS qui privilégiait la rétrocompatibilité au détriment de l’utilisation de chiffres et de protocoles sécurisés.

<img width="100%" style="float:left;" alt="Initial testing of the Pulse platform seeded with canada.ca domains." src="/assets/img/cds/post-images/https-fr.png">

Il va sans dire que nous avons échoué à nos propres vérifications de conformité, mais nous avons pu réparer un des problèmes en moins de temps que j’ai pris pour écrire ce dernier paragraphe. Nous nous pencherons bientôt sur la mise en œuvre du protocole HTTP Strict Transport Security, mais ce projet sera probablement le sujet d’un prochain billet.

## D’abord l’essentiel, ensuite le raffinement

Mettre en œuvre des connexions sécurisées peut sembler un problème facile à régler, comme un de nos premiers projets de « sécurité ». C’est simple, sans danger, mais c’est également un domaine où des améliorations importantes sont encore possibles, ce qui fait que c’est avec plaisir que nous aidons les gens. Nous discuterons davantage de nos travaux sur ce projet au cours des prochaines semaines, alors, ne manquez pas la suite!

Je prévois me concentrer sur les principes fondamentaux pour ensuite travailler sur les choses plus raffinées. J’espère vous y retrouver.
