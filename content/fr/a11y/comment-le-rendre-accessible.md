---
type: section
layout: page
title: Comment le rendre accessible
aliases: [/how-to-make-it-accessibl/]
---

Pour vous assurer que votre service est accessible et inclusif, il faut considérer l&#39;accessibilité à toutes les étapes. Vous devrez donc faire participer divers utilisateurs, y compris des personnes handicapées, à chaque phase de votre cycle de conception et de développement.

Prévoyez de faire participer les services d&#39;accessibilité lors de chaque phase. Vous pouvez aussi demander du soutien sur un plus long terme afin de suivre vos progrès et créer un modèle d&#39;accessibilité durable.

Testez régulièrement votre code afin de relever tout problème lié au développement, à la conception et au contenu. Au SNC, nous avons inclus les tests automatisés dans notre processus d&#39;intégration continue. Il est important de faire à la fois des tests automatisés et manuels : vous raterez beaucoup de problèmes si vous faites seulement les tests automatisés. Ces derniers ne couvrent actuellement que 40 % des problèmes liés à l&#39;accessibilité.

Les sections suivantes fournissent des détails qui vous permettront d&#39;orienter vos travaux d&#39;accessibilité à chaque phase du développement :

- Découverte
- Alpha
- Bêta
- Mise en ligne

## En phase découverte

Au commencement du projet, demandez-vous : « Comment fonctionnerait ce produit si je ne pouvais pas le voir? Et si je ne pouvais pas le toucher ou le déplacer? Qu&#39;en est-il si je ne peux pas l&#39;entendre, le goûter ou le sentir? » Ces questions vous aideront à réfléchir aux difficultés de certaines personnes et aux différents contextes d&#39;utilisation possibles. Elles vous guideront dans la conception de votre service.

Les discussions avec des personnes handicapées permettent d&#39;obtenir des rétroactions inattendues. Mener des recherches en conception auprès de ces personnes vous aide donc à mieux définir les problèmes et à comprendre les besoins des utilisateurs. En parlant avec des gens qui ont divers besoins, vous améliorez l&#39;expérience humaine des services numériques.

Faites participer les services d&#39;accessibilité dans la phase découverte pour pouvoir impliquer des personnes ayant des besoins utilisateurs divers. Dans votre recherche, incluez des utilisateurs qui ont différentes capacités. Tenez compte des handicaps visuels, auditifs, moteurs et cognitifs. Ce faisant, vous aidez également les personnes qui ont des incapacités situationnelles ou temporaires, comme avoir un membre blessé, être en public sans écouteurs ou tenir un bébé.

Intégrez les questions d&#39;accessibilité dans vos artefacts de recherche (par exemple dans vos personas ou vos récits d&#39;utilisateurs).

1. Reconnaissez les biais
2. Menez une recherche sur la conception
3. Adoptez des pratiques éthiques
4. Écoutez de façon active
5. Menez des tests auprès des utilisateurs
6. Tenez compte de besoins divers
7. Créez des personas inclusives
8. Faites réaliser des tâches cognitives
9. Offrez différents moyens de participer

## En phase alpha

Dans la phase alpha, assurez-vous que votre service satisfait aux normes de notre liste de contrôle de priorité 1.

### Contrôle de priorité 1 — Critique (WCAG 2.1 A, AA)

Vérifiez que votre service tient compte de tous les éléments suivants :

- [Le site est accessible par clavier](https://accessibility.18f.gov/keyboard/) (page en anglais seulement) : toutes les interactions peuvent être faites par clavier.
- [Le site est exempt de pièges pour clavier](https://accessibility.18f.gov/keyboard/#keyboard-trap) (page en anglais seulement) : le focus du clavier n&#39;est jamais piégé dans une boucle.
- [Toutes les entrées de formulaire sont clairement identifiées](https://accessibility.18f.gov/forms/) (page en anglais seulement).
- [Toutes les images pertinentes utilisent une étiquette img](https://accessibility.18f.gov/images/) (page en anglais seulement).
- [Toutes les images ont des attributs de remplacement](https://accessibility.18f.gov/images/) (page en anglais seulement).
- [Le contenu multimédia est étiqueté](https://accessibility.18f.gov/multimedia/) (page en anglais seulement) : tous les éléments multimédias ont une légende appropriée et une description audio.
- [Le contraste de couleur du texte est suffisant](https://accessibility.18f.gov/color/) (page en anglais seulement) : tout le texte a un rapport de contraste de 4,5:1 avec l&#39;arrière-plan.
- [Le site ne perd jamais le focus](https://accessibility.18f.gov/keyboard/) (page en anglais seulement) : l&#39;indicateur de focus est toujours visible lorsqu&#39;il se déplace dans la page avec le clavier.
- [L&#39;ordre des onglets est logique](https://accessibility.18f.gov/keyboard/) (page en anglais seulement).
- [Les instructions du formulaire sont associées aux entrées](https://accessibility.18f.gov/forms/) (page en anglais seulement).
- [Le site n&#39;arrête pas de façon imprévue après un certain temps](https://accessibility.18f.gov/timeouts/) (page en anglais seulement) : déterminer quels sont les éléments assujettis à un « temps d&#39;expiration » et vérifier que l&#39;utilisateur peut demander plus de temps.
- [Les tableaux sont bien codés](https://accessibility.18f.gov/tables/) (page en anglais seulement) : les tableaux ont les bons attributs de titre et de colonnes.
- [Les titres sont bien imbriqués](https://accessibility.18f.gov/headings/) (page en anglais seulement) : les éléments de titre sont imbriqués de façon logique.
- [La langue de la page est réglée](https://accessibility.18f.gov/language/) (page en anglais seulement), et pour les sections de la page qui diffèrent de la langue du site, la langue est réglée.
- Le contenu audio et vidéo a des sous-titres appropriés, des transcriptions ou une vidéodescription au besoin.
- Le contenu est identifié uniquement par sa forme ou son emplacement ou à l&#39;aide de symboles graphiques uniques pour transmettre des informations.
- Utilisation des couleurs : ne pas utiliser seulement les couleurs pour transmettre des informations significatives.
- Les liens « saut de navigation » sont disponibles pour contourner des blocs de contenu répétés sur plusieurs [pages Web](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) (page en anglais seulement).

### Favoriser les technologies d&#39;adaptation

Dans la phase alpha, vous devrez aussi vous assurer que votre service fonctionne avec les technologies d&#39;adaptation les plus communes.

- Faites des tests par vous-même avec les technologies d&#39;adaptation (vous pouvez demander au responsable de la communauté de pratique sur l&#39;accessibilité ou communiquer avec le Programme d&#39;accessibilité, d&#39;adaptation et de technologie informatique adaptée [AATIA] à Services partagés Canada pour en apprendre plus sur les technologies d&#39;adaptation).
- Communiquez avec le responsable de la communauté de recherche en conception afin de trouver des participants qui utilisent des technologies d&#39;adaptation pour vos recherches auprès des utilisateurs.
- Demander que des tests de technologie d&#39;adaptation soient inclus dans votre audit de l&#39;accessibilité.

Voici des exemples d&#39;outils que vous pouvez utiliser :

- VoiceOver
- NVDA
- ZoomText
- Contraste élevé (système d&#39;exploitation ou mode sombre)

## En phase bêta

Vous devez effectuer un contrôle de l&#39;accessibilité — et corriger tout problème — avant que votre service passe à la phase bêta publique.

Par ailleurs, assurez-vous que votre service bêta répond aux normes de notre liste de contrôle de priorité 2.

### Contrôle de priorité 2 — Moins critique, mais essentiel (WCAG 2.1, A, AA)

- [Les cadres sont nommés](https://accessibility.18f.gov/iframes/) (page en anglais seulement) et ont un élément de nom.
- [Les éléments clignotants sont conformes](https://accessibility.18f.gov/flashing/) (page en anglais seulement) : les éléments qui clignotent à l&#39;écran le font à un rythme inférieur à 3 Hz.
- [Le CSS n&#39;est pas requis pour utiliser la page](https://accessibility.18f.gov/css/) (page en anglais seulement) : la page est logique avec ou sans CSS.
- [Les liens sont uniques et contextuels](https://accessibility.18f.gov/links/) (page en anglais seulement) : tous les liens peuvent être compris individuellement.
- [Les titres de pages sont descriptifs](https://accessibility.18f.gov/page-titles/) (page en anglais seulement).
- [Les plugiciels requis sont liés dans la page](https://accessibility.18f.gov/plugins/) (page en anglais seulement).
- [L&#39;orientation du contenu Web n&#39;est pas restreinte ou verrouillée](https://www.w3.org/TR/WCAG21/#orientation) (page en anglais seulement).
  - Utilisez le CSS pour établir l&#39;orientation afin de permettre à la fois le format paysage et portrait.
  - Utilisez des commandes Afficher/Masquer afin de permettre l&#39;accès au contenu dans différentes orientations.
- [Les champs de saisie servent à un but défini qui établit la signification attendue des données de saisie dans un formulaire](https://www.w3.org/TR/WCAG21/#identify-input-purpose) (page en anglais seulement).
- [Le contenu peut être présenté sans perte d&#39;information ou de fonctions, et sans avoir à faire défiler la page](https://www.w3.org/TR/WCAG21/#reflow) (page en anglais seulement).
  - Le contenu de défilement vertical a une largeur équivalente à 320 [pixels CSS](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) (page en anglais seulement).
  - Le contenu de défilement vertical a une hauteur équivalente à 256 [pixels CSS](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) (page en anglais seulement).
- Les composants actifs (c&#39;est-à-dire les commandes) de l&#39;interface utilisateur et les graphiques significatifs peuvent être distingués par les personnes à vision modérément faible à l&#39;aide d&#39;un [contraste non textuel](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) (page en anglais seulement).
  - [Voici des moyens pour tester le contraste non textuel](https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Testing_Non-Text_Contrast) (page en anglais seulement).
- Les personnes peuvent modifier l&#39;espacement du texte pour améliorer leur expérience de lecture en utilisant l&#39;[espacement de texte](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html) (page en anglais seulement).
  - Détails supplémentaires sur les [tests d&#39;espacement de texte](https://knowbility.org/blog/2018/WCAG21-1412TextSpacing/) (page en anglais seulement).
- [Le contenu révélé par un survol du pointeur ou par un indicateur de focus](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) (page en anglais seulement) ne devrait pas masquer d&#39;autre contenu et devrait pouvoir être rejeté si souhaité.
  - Détails supplémentaires sur les [événements liés au survol ou au focus](https://www.boia.org/wcag2/cp/1.4.13) (page en anglais seulement).
- Si un raccourci clavier est mis en œuvre pour les contenus utilisant uniquement des lettres, veuillez consulter les [touches de raccourci de caractères](https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html#intent) (page en anglais seulement).
  - Détails supplémentaires sur les [touches de raccourci de caractères](https://knowbility.org/blog/2018/WCAG21-214CharacterKeyShortcuts/) (page en anglais seulement).
- Le contenu peut être exploité à l&#39;aide d&#39;entrées simples sur un large éventail de dispositifs pointeurs à l&#39;aide de [techniques gestuelles de pointage](https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html) (page en anglais seulement).
  - Détails supplémentaires sur les [gestes de pointage](https://knowbility.org/blog/2018/WCAG21-251PointerGestures/) (page en anglais seulement).
- Les fonctions qui imitent la pression sur une touche de clavier ou de pavé numérique sont considérées comme essentielles et utilisent les [techniques d&#39;annulation du pointeur](https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html) (page en anglais seulement).
  - Détails supplémentaires sur l&#39;[annulation du pointeur](https://knowbility.org/blog/2018/WCAG21-252PointerCancellation/) (page en anglais seulement).
- Les mots qui étiquettent visuellement un composant sont aussi les mots associés au composant par programmation à l&#39;aide des [techniques d&#39;étiquetage dans le nom](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html) (page en anglais seulement).
  - Détails supplémentaires sur l&#39;[étiquetage dans le nom](https://knowbility.org/blog/2018/WCAG21-253LabelInName/) (page en anglais seulement).
- Les fonctions qui sont activées par le mouvement d&#39;un appareil ou par un geste dirigé vers l&#39;appareil peuvent aussi être commandées par des composants d&#39;interface utilisateur plus conventionnels, à moins que le mouvement ne soit essentiel pour la fonction ou que l&#39;absence de mouvement ou de geste invalide l&#39;activité, à l&#39;aide des [techniques d&#39;activation de mouvement](https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html) (page en anglais seulement).
  - Détails supplémentaires sur l&#39;[activation de mouvement](https://knowbility.org/blog/2018/WCAG21-254MotionActuation/) (page en anglais seulement).
- Les utilisateurs sont informés, d&#39;une façon qui n&#39;interrompt pas leur travail, de modifications importantes apportées à du contenu qui n&#39;est pas ciblé par le focus à l&#39;aide de [techniques de message sur le statut](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html) (page en anglais seulement).
  - Détails supplémentaires sur les [messages de statut](https://knowbility.org/blog/2018/WCAG21-413StatusMessages/) (page en anglais seulement).

## Mise en ligne — Maintenir l&#39;accessibilité de votre travail

Tandis que vous vous préparez à mettre votre service en ligne, et après son lancement, assurez-vous que votre service respecte les normes de notre liste de contrôle de priorité 3.

### Contrôle de priorité 3 — Idéal (WCAG 2.1 AAA)

- [Dans le contenu mis en œuvre au moyen de langage de balisage, le but de l&#39;interface utilisateur, des icônes et des régions peut être déterminé par programmation](https://www.w3.org/TR/WCAG21/#identify-purpose) (site en anglais seulement).
- Temps d&#39;expiration
- Animations d&#39;interactions
- Modalités de saisie concurrentes
- Langue des signes