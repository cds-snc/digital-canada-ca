---
layout: blog
title: 'La sécurité, c’est sérieux : nous avons tous des clés de sécurité au SNC'
description: >-
  Nous avons acheté, pour chaque employé, des clés de sécurité prenant en charge
  les spécifications FIDO2. Cela nous a aidés à éliminer la menace de prise de
  contrôle des comptes par hameçonnage ou vol de justificatifs d’identité.
author: 'Damien Trudel, Sécurité'
date: 2019-08-15T13:00:00.000Z
image: /img/cds/yubikey-3.jpg
image-alt: Une main qui appuie sur sa clé yubikey.
translationKey: yubikey-post
thumb: /img/cds/yubikey-3.jpg
---
J’ai peur, très peur! J’ai peur de me réveiller le matin et de constater que les ressources infonuagiques du Service numérique canadien (SNC) ont été vandalisées ou détruites parce qu’une personne mal intentionnée a mis la main sur les justificatifs d’identité de quelqu’un et a décidé de tout bousiller. Cette peur est réelle, et même les plus consciencieux d’entre nous sont vulnérables.

Mais comment une personne peut-elle perdre le contrôle de ses justificatifs d’identité? Eh bien, peut-être quelqu’un a-t-il obtenu vos justificatifs en vous regardant les saisir, ou peut-être utilisez-vous le même mot de passe partout (c’est vous que je regarde!) et celui-ci a été révélé lors d’une atteinte à la protection des données, ou peut-être vous a-t-on simplement hameçonné à l’ancienne. Peu importe comment, tous savent que de telles choses arrivent et que dans un tel cas, votre productivité en souffrira. Ce genre d’atteinte à la sécurité peut entraîner la perte de données, le vol de propriété intellectuelle, ou même une manipulation silencieuse de toutes vos communications entrantes et sortantes par quelqu’un, sans que vous ne le remarquiez. Peut-être, peut-être, peut-être.

![Un homme à la chemise rouge porte un cordon au cou, auquel sont attachées une carte d’identité et une clé de sécurité.](/img/cds/yubikey-1.jpg)

Selon le [rapport d’enquête sur l’atteinte aux données de 2019 par Verizon](https://enterprise.verizon.com/resources/reports/2019-data-breach-investigations-report.pdf) (en anglais), 29 % de tous les incidents de sécurité signalés avaient trait à l’utilisation de justificatifs d’identité volés. _La grande question est donc : est-ce possible d’éliminer cette menace de façon pratique? Oui, nous le pouvons_.

## Ce que nous avons fait

C’est là que j’interviens. Tout d’abord, notre équipe de sécurité a fait des recherches et s’est vite rendu compte que l’option la meilleure et la plus facile était d’acheter des clés de sécurité matérielles, comme celles figurant dans la photo ci-dessous. _Ces clés prennent en charge toutes les [spécifications FIDO2](https://fidoalliance.org/fido2/)_. Le processus d’authentification avec ces clés est aussi simple que de toucher un bouton doré sur la clé lorsque vous y êtes invité. Qu’est-ce que cela veut dire? Lorsque vous ouvrez une session dans votre compte courriel, par exemple, vous saisissez votre mot de passe et cliquez sur **connexion**. Le processus ne s’arrête pas là; vous avez besoin d’un autre facteur d’authentification pour prouver que vous êtes la bonne personne pour ouvrir une session dans votre compte. C’est là que les clés de sécurité matérielles entrent en jeu. Vous insérez la clé dans votre appareil et appuyez sur le bouton doré. Vous êtes la seule personne à avoir cette clé, et seule cette clé vous permettra de vous connecter.

Donc, en termes plus techniques, lorsque vous appuyez sur le bouton doré, un exercice de questions-réponses est lancé au moyen de la cryptographie à clé publique entre la clé de sécurité et le fournisseur de services. Ce mécanisme a aussi pour effet caché d’éliminer efficacement la menace de prise de contrôle des comptes par hameçonnage et fuites de justificatifs.

![Quatre différentes clés de sécurité côte à côte, l’une d’entre elles étant attachée à un porte-clés.](/img/cds/yubikey-4.jpg)

Nous avons ensuite remis deux clés de sécurité à chaque membre, ce qui permet aux employés de choisir le type de clé qui leur convient le mieux. Nous avons de plus pris le temps d’aider tout le monde à intégrer les clés de sécurité à leur travail et à leur vie personnelle. Ces rencontres individuelles ont aussi servi à avoir des conversations sérieuses sur la [sécurité des mots de passe](https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/orientation-sur-mots-passe.html), les [mises à jour logicielles](https://cyber.gc.ca/fr/correctifs-aux-applications-et-aux-se) et d’autres sujets liés à la [cyberhygiène](https://www.pensezcybersecurite.gc.ca/). 

Je suis heureux de vous annoncer qu’aucune prise de contrôle de comptes n’a été signalée au SNC, et l’utilisation des clés de sécurité y est pour quelque chose. Restez à l’affût des autres moyens que nous pourrions adopter pour tirer parti de nos clés de sécurité et éliminer de façon pratique certains types de menaces.

## Vous pouvez le faire aussi

Si vous redoutez l’idée de tout nettoyer après un incident de prise de contrôle de compte, je vous recommande d’examiner de plus près comment les clés de sécurité matérielles conformes aux spécifications FIDO2 peuvent vous aider à revenir aux habitudes de sommeil précédant l’ère infonuagique.

Bien que nous utilisions des clés de sécurité matérielles, ce n’est peut-être pas ce qui vous convient le mieux. Avant toute décision, nous vous recommandons de consulter cette récente [recherche de Google](https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html) (en anglais) concernant l’efficacité des options d’authentification à deux facteurs. Cette étude fascinante indique que toutes les tentatives de prise de contrôle d’un compte ont échoué lorsque la personne utilisait exclusivement des clés de sécurité matérielles. À lire!
