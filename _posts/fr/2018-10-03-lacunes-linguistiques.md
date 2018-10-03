---
title: "Combler les lacunes linguistiques relatives aux sources libres en français"
description: "Les technologies modernes sont formidables, mais le monde de la technologie est manifestement unilingue anglais. De nombreux outils de source libre n’offrent pas la fonction multilingue dont nous avons besoin, comme la capacité de changer une version du contenu en contexte. Comment comblons-nous donc ce fossé afin d’offrir des services modernes aux Canadiens?"
author: Eva Demers-Brett, développeuse
date: 2018-10-03 09:00:00 -0400
image: blog-language-gap.png
image-alt: 
lang: fr
layout: cds/post
trans_url: "/2018/10/03/language-gap"
---

Lorsque nous optons pour des outils de source libre (*open source*), l’un des plus grands obstacles que nous rencontrons est la langue, ou plutôt l’absence de la langue française. L’adaptation d’une application à la langue locale s’appelle l’internationalisation, ou [i18n](https://fr.wikipedia.org/wiki/Internationalisation_(informatique)) en forme abrégée. Au Canada, nous avons le défi d’offrir une expérience soutenue et accessible autant en français qu'en anglais, nos deux langues officielles. Les technologies modernes sont formidables, mais le monde de la technologie est manifestement unilingue anglais. De nombreux outils de source libre n’offrent pas la fonction multilingue dont nous avons besoin, comme la capacité de changer une version du contenu en contexte. Comment comblons-nous donc ce fossé afin d’offrir des services modernes aux Canadiens?

## Parfois, c’est un jeu d’enfant...

L’un de nos projets récents, [Suivre la conformité en matière de sécurité Web](https://cds-snc.github.io/track-web-security-compliance/accueil/), est adapté du fantastique projet [Pulse](https://pulse.cio.gov/) de 18F. En commençant par une base de codes préexistante, nous avons accéléré le processus de développement, mais cela comportait une bonne part de difficultés. L’une de ces difficultés était la création de fonctionnalités en français.

Heureusement, la tâche n’était pas trop difficile. Les pages Web pour l’application *Track Web* sont générées grâce à [Jinja](http://jinja.pocoo.org/docs/2.10/), un langage de modélisation pour les applications Flask. Afin d’assurer une transition harmonieuse entre les langues, nous avons attribué à chaque page un identificateur unique qui relie les versions française et anglaise. Ensuite, nous avons créé un bouton de langue qui, au moyen d’un clic, génère la page dans la langue sélectionnée, accompagnée de son URL traduite.

*Track Web* utilise également un plugiciel jQuery appelé [DataTables](https://datatables.net/) pour afficher des renseignements dynamiques sur la conformité. Par défaut, DataTables affiche toutes les commandes de tableau en anglais. Mais il fournit également un [plugiciel i18n](https://datatables.net/plug-ins/i18n/) ainsi qu’une [traduction française pour toutes ses composantes](https://datatables.net/plug-ins/i18n/French). Il est donc facile de créer une version française d’un tableau DataTables.

## Mais parfois, c’est un casse-tête!

Malheureusement, fournir du soutien en matière d’i18n semble être l’exception et non la règle dans l’univers des sources libres. Récemment, nous avons exploré les façons d’améliorer notre propre expérience utilisateur quant à la gestion du [site Web du Service numérique canadien (SNC)](https://numerique.canada.ca/). Nous nous sommes assurés que le site Web, conçu grâce au langage de modélisation [Jekyll](https://jekyllrb.com/), répondait à toutes les normes de diffusion de contenu dans les deux langues officielles. Notre flux de production exige cependant que le nouveau contenu se trouve dans deux dossiers linguistiques distincts, chacun accompagné d’un identificateur que le créateur doit mémoriser. De plus, il nous est impossible de vérifier le changement de langue avant de publier les pages, ce qui peut compliquer les choses!

Nous avons fait des recherches sur les systèmes de gestion du contenu (SGC) que nous pouvons joindre à notre ensemble de technologies existantes afin de simplifier le processus de publication. Les exigences en matière d’i18n que nous avons cernées comprenaient la capacité de basculer entre l’anglais et le français lors de la révision, et la capacité de publier du contenu dans les deux langues simultanément. Nous n’avons pas été en mesure de trouver une solution miracle pour répondre à ces deux besoins, et encore moins aux autres exigences de notre liste. Les besoins fondamentaux de ceux parmi nous qui évoluent dans l’univers Web du gouvernement du Canada semblent être une considération secondaire partout ailleurs.

## Alors, que faire?

Une chose est certaine : nous avons beaucoup à faire dans le monde des sources libres concernant l’i18n, surtout dans le cadre de la modernisation actuelle des services offerts aux Canadiens. Dans certains cas, il s’agit simplement de trouver le bon outil. Dans d’autres, nous avons l’occasion de construire et d’utiliser nos propres outils i18n.

Avez-vous des difficultés semblables? Avez-vous trouvé d’excellents outils i18n de source libre? [Veuillez nous les communiquer](https://numerique.canada.ca/contactez-nous/)!

Nous tenons aussi à nous excuser auprès du développeur qui a eu la tâche ardue de publier le présent article. Nous vous assurons que nous mettons bien la main à la pâte.