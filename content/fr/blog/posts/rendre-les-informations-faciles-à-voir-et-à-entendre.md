---
layout: blog
title: Rendre les informations faciles à voir et à entendre
description: >-
  Prendre en considération les différentes façons dont un service sera utilisé
  peut nous aider à l’améliorer pour tous les utilisateurs, ce qui est plutôt
  génial. Sur le portail Alerte COVID, nous avons récemment lancé la
  fonctionnalité des « codes de récupération » pour les travailleurs du réseau
  de la santé, ce qui a mis en lumière des choses intéressantes sur les lecteurs
  d’écran et l’accessibilité. Lisez la suite pour un exemple pratique de design
  accessible. 
author: 'Paul Craig, Développement '
date: 2021-02-04T14:33:56.437Z
image: /img/cds/screenreader-blog-banner.jpg
image-alt: >-
  Une personne utilisant un lecteur d’écran pour entendre de l’information
  importante de son ordinateur.
translationKey: blog-screenreader-stuff
thumb: /img/cds/thumbnails/screenreader-blog-banner.jpg
processed: 1612450944111
---
## Alerte COVID et codes de sauvegarde

En collaboration avec Santé Canada, notre équipe du Service numérique canadien (SNC) crée et gère le service d’Alerte COVID, qui comprend bien sûr l’application, mais aussi le [portail Alerte COVID](https://numerique.canada.ca/2020/09/03/r%C3%A9pondre-aux-besoins-des-autorit%C3%A9s-sanitaires-pour-d%C3%A9ployer-alerte-covid-partout-au-canada/). 

Jusqu’à tout récemment, pour accéder au portail, les travailleurs du réseau de la santé avaient besoin de leur adresse courriel et de leur mot de passe pour se connecter, mais aussi d’un téléphone cellulaire pour recevoir un code d’authentification à deux facteurs (A2F). Une fois connectés, les travailleurs de la santé peuvent donner des clés à usage unique aux personnes dont le test à la COVID-19 est positif. En entrant leur clé dans l’application, les utilisateurs peuvent alerter d’autres personnes d’une exposition potentielle.

Plus les clés à usage unique sont saisies rapidement, plus les applications de notification d’exposition comme Alerte COVID sont efficaces. Par conséquent, si un travailleur du réseau de la santé ne peut pas recevoir de code par messagerie texte en raison d’un signal cellulaire faible, ou si un travailleur n’a pas de téléphone cellulaire, nous manquons une occasion d’aviser les Canadiens et Canadiennes qui ont été exposés. 

Pour résoudre ce problème, nous avons lancé les codes de récupération comme méthode de vérification de rechange aux codes d’A2F par messagerie texte. Les travailleurs du réseau de la santé sont désormais en mesure de générer une série de codes de récupération à usage unique (pensez à des « gratteux ») pour se connecter si d’autres méthodes échouent. 

## L’importance de l’accessibilité

Au SNC, nous [accordons la priorité au développement accessible](https://numerique.canada.ca/2020/10/02/d%C3%A9velopper-un-service-efficace-de-notification-dexposition-comme-alerte-covid/) pour construire des systèmes résilients, intuitifs et suffisamment flexibles pour répondre aux besoins de tous les utilisateurs. Pour ce faire, il faut prendre en compte différentes préférences. 

Tout le monde a sa manière d’accéder à Internet : certaines personnes utilisent un ordinateur portable, alors que d’autres utilisent leur montre Apple Watch ou encore le navigateur intégré sur leur XBOX. D’autre part, l’accès à Internet n’est pas toujours visuel. Pensons notamment aux personnes qui utilisent Alexa, la fonction de synthèse vocale dans Edge ou les lecteurs d’écran. En effet, ça ne sert à rien de créer des trucs sympas que les gens ne peuvent pas utiliser. C’est pourquoi nous faisons de notre mieux pour rencontrer les gens là où ils sont.

Dans le cas des codes de récupération, il est très important qu’ils soient bien compris la première fois. Si quelqu’un comprend mal ou saisit mal un code, on risque de manquer une occasion d’alerter les Canadiens et Canadiennes d’une exposition à la COVID-19. Non seulement les gens doivent pouvoir les lire, les lecteurs d’écran doivent également pouvoir les communiquer d’une manière facile à comprendre. Une question intéressante se pose donc : **comment entend-on les codes de récupération?**

## Volez comme un artiste (ne réinventez pas la roue)

Pour commencer, j’ai examiné la fonctionnalité des codes de récupération proposée par Google et GitHub. Les deux entreprises sont similaires au gouvernement à bien des égards : ce sont de grandes organisations, elles ont des exigences de sécurité strictes, elles servent de nombreux utilisateurs et elles commencent toutes les deux par la lettre « G ». Une analyse de leur approche m’aiderait sans doute dans ma démarche.

Vous me pardonnerez une tangente un peu technique : la majorité du contenu sur Internet est constitué de texte dans un document, un peu comme Microsoft Word. Dans Word, on voit généralement les titres dans une grande taille de police au haut de la page. Dans une page HTML, le contenu est « balisé » pour indiquer comment il doit être traité. On inscrit des balises « h1 » pour indiquer le titre d’une page, « p » pour indiquer un paragraphe, et ainsi de suite pour les listes, les tableaux, etc. Les lecteurs d’écran se servent de cette information pour fournir du contexte à quelqu’un qui ne regarde pas l’écran. Ainsi, les lecteurs d’écran annoncent le contenu balisé « h1 » comme titre de la page. Lorsque les éléments sont dans une liste, les lecteurs annoncent la longueur de la liste. S’ils trouvent un bouton, ils diront que c’est un bouton. Le formatage aide les lecteurs d’écran et, par le fait même, les personnes qui en dépendent, à donner un sens au contenu. 

J’étais curieux de savoir comment les lecteurs d’écran interprétaient les codes de récupération de Google et de Github. 

### Visuellement

<table>
  <tbody>
      <tr>
          <td>
          <h4 class="bolded">Google</h4>
           </td>
          <td>
          <h4 class="bolded">Github</h4>
          </td>
      </tr>
      <tr>
          <td>
          <ul>
             <li>Une liste de cases à cocher</li>
             <li>Caractères composés de chiffres uniquement</li>
          </ul>
          <img src="/img/cds/screenreader-blog-google.jpg" alt="Une liste de codes de récupération fournis par Google composés de 8 chiffres aléatoires.">
           </td>
         <td>
          <ul>
             <li>Une liste à puces</li>
             <li>Caractères hexadécimaux (combinaison de chiffres et des six premières lettres de l’alphabet a, b, c, d, e, f)</li>
          </ul>
          <img src="/img/cds/screenreader-blog-github.jpg" alt="Une liste de codes de récupération fournis par Github composés d’une combinaison de 10 lettres et chiffres aléatoires.">
           </td>
      </tr>
  </tbody>
  </table>

Dans les deux cas, on observe de fortes similarités :

* Utilisation de mises en page structurées : les tableaux et les listes sont annoncés par les lecteurs d’écran.
* Utilisation de jeux de caractères restreints : toutes les lettres ne sont pas utilisées; aucun caractère spécial n’est utilisé. Cela signifie qu’il n’y aura aucun problème de distinction entre « 1 » et « L » ou « 0 » et « O », par exemple.
* Utilisation de polices à espacement constant : les caractères ont tous la même largeur, de sorte que les codes occupent tous le même espace.

### Par voie auditive

Ainsi, bien que les codes s’affichaient plutôt bien, j’ai observé quelques bogues notables lors de l’utilisation de VoiceOver, le lecteur d’écran fourni par Apple sur macOS :

#### Codes lus de façon indésirable
Un problème propre à Google est que VoiceOver lit les codes sous forme de deux nombres entiers. Par exemple, VoiceOver lit le code « 1234 5678 » comme étant « mille deux cent trente-quatre, cinq mille six cent soixante-dix-huit ». Ce n’est pas le pire des problèmes, mais cette lecture réduit en effet la compréhension. Par exemple, lorsque vous donnez votre numéro de téléphone à quelqu’un, vous ne dites généralement pas « quatre milliards cent trente-cinq millions, etc. ». Ce serait techniquement correct, mais difficile à retenir pour l’autre personne.
#### Codes versus mots
Les codes de récupération pour le portail Alerte COVID sont composés de 8 caractères aléatoires et peuvent comprendre n’importe quels chiffres et lettres. En écoutant plusieurs codes générés aléatoirement, j’ai pu constater qu’ils sonnaient généralement bien, mais j’ai fini par remarquer quelque chose d’étrange : la plupart des codes se lisaient caractère par caractère (le résultat voulu), mais pas tous. Parfois, VoiceOver lisait un code comme un mot, ce qui le rendait pratiquement indéchiffrable. 

Après quelques essais supplémentaires, j’ai constaté quelque chose d’intéressant sur VoiceOver. Les codes sont lus comme des mots lorsque les deux conditions suivantes surviennent en même temps :

* le code ne contient aucun chiffre
* le code contient une voyelle

Si VoiceOver voit la suite de caractères « C4T5 », il les lit un par un (p. ex., « C », « 4 », « T », « 5 »). S’il voit la suite de caractères « CTTS », il fera de même (p. ex., « C », « T », « T », « S »). 

Cependant, s’il voit la série de caractères « RATS », il lit « rats », comme l’animal. Mais, au lieu d’un mot français (ou anglais), il lit généralement des mots absurdes comme « FETV », « BAFR » ou « YEGT ». 

## Pour bien lire

Maintenant que nous en savons plus sur ce comportement, que pouvons-nous faire? Puisque les codes sont générés de façon aléatoire, nous ne pouvons pas prédire ce qui va apparaître. Nous devons essentiellement gérer les mêmes informations de différentes manières : d’une manière claire visuellement, et d’une manière différente lorsqu’elles sont lues à voix haute.

Lorsque nous consultons les codes, il est préférable de regrouper les caractères en petits groupes pour en faciliter la lecture, tout en s’assurant que les lecteurs d’écran les annoncent toujours un caractère à la fois. Pour y parvenir, nous affichons le code de deux manières différentes : 
1. À l’écran, nous affichons « FETV BAFR », en le masquant aux lecteurs d’écran.
2. Pour les lecteurs d’écran, nous affichons « F E T V B A F R », en le masquant visuellement.

Et voilà la version simplifiée. [Écrivez-moi](https://twitter.com/pcraig3) si vous voulez en savoir plus.

## Hourra! Nous avons résolu les problèmes d’accessibilité!

Bien sûr que non... L’expérience varie beaucoup en fonction du logiciel de lecture d’écran, des navigateurs et des systèmes d’exploitation que les gens utilisent. Par exemple, l’expérience de VoiceOver avec Chrome sur macOS est différente de celle avec Safari sur l’iPhone. Et l’utilisation de Jaws avec Internet Explorer sur Windows serait toute autre chose.

Il n’est pas possible de tester chaque combinaison de lecteur d’écran et de plateforme/navigateur existante. Cependant, tester au fur et à mesure avec les outils à votre disposition donnera de meilleurs résultats que de négliger complètement cette étape. 

Tenir compte de l’accessibilité au fur et à mesure du développement, plutôt que de l’éviter par peur de se tromper, procurera également de meilleurs résultats pour tout le monde. Il y aura toujours des cas extrêmes, mais le but est de penser à l’accessibilité et de tester au fur et à mesure pour voir si votre site se lit aussi bien qu’il en a l’air. Comme nous l’avons vu, même Google ou Github ne sont pas parfaits. 

Développer des services, c’est merveilleux. Mais s’assurer que ces services sont accessibles et disponibles? C’est notre raison d’être.
