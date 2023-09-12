[La version française suit.](#---------------------------------------------------------------------)

# Canadian Digital Service website - [digital.canada.ca](https://digital.canada.ca)

Both [digital.canada.ca](https://digital.canada.ca) and [numerique.canada.ca](https://numerique.canada.ca) are published from this repository.

Powered by [Hugo](https://gohugo.io/), and the [Web Experience Toolkit](https://github.com/wet-boew/wet-boew/).

## To install locally

1. Clone the repository.

   ```
   git clone https://github.com/cds-snc/digital-canada-ca.git
   ```

2. If you do not have Hugo installed on your machine, you will need to install it. We are running on an older version of Hugo ([v0.55.6](https://github.com/gohugoio/hugo/releases/tag/v0.55.6)). You can grab the appropriate [tar file here](https://github.com/gohugoio/hugo/releases/tag/v0.55.6), making sure to select the extended version. Then, [follow these instructions for installing it](https://bwaycer.github.io/hugo_tutorial.hugo/tutorials/installing-on-mac/#from-tarball). If you run into permissions issues, [here is a handy article to help fix the permissions](https://codewithhugo.com/catalina-permission-command-line-fix/).

We'd love to upgrade to the newer version, however it results in some breaking changes (including hot builds not working reliably). [Would you like to help us?](https://github.com/cds-snc/digital-canada-ca/issues/2052)

3. Serve:

   ```
   hugo server -D
   ```

The English and French versions will be hosted at [localhost:1313](http://localhost:1313) and [localhost:1314](http://localhost:1314), respectively.

## Content Management System

Powered by [Strapi](https://strapi.io/). The Strapi instance for this website can be found at [https://github.com/cds-snc/cds-website-cms](https://github.com/cds-snc/cds-website-cms).

Please visit our [contribution guidelines](CONTRIBUTING.md) to learn how to best make updates to CMS managed content.

## ---------------------------------------------------------------------

# Site Web du Service numérique canadien : [numerique.canada.ca](https://numerique.canada.ca)

Les sites [numerique.canada.ca](https://numerique.canada.ca) et [digital.canada.ca](https://digital.canada.ca) sont mis en ligne à partir du présent référentiel et sont réalisés avec l’aide de l’infrastructure [Hugo](https://gohugo.io/) (en anglais seulement) et de la [Boîte à outils de l’expérience Web](https://github.com/wet-boew/wet-boew/).

## Installation locale

1. Clonez le référentiel.

   ```
   git clone https://github.com/cds-snc/digital-canada-ca.git
   ```

2. Installez Hugo sur votre ordinateur, si ce n’est pas déjà fait.

   ```
   brew install hugo
   ```

3. Exécutez le serveur local.

   ```
   hugo server -D
   ```

Les versions française et anglaise seront hébergées à [localhost:1314](http://localhost:1314) et à [localhost:1313](http://localhost:1313), respectivement.

## Système de gestion de contenu

Développé par [Strapi](https://strapi.io/). Le code d’instance Strapi utilisé par ce site Web peut être consulté à [https://github.com/cds-snc/cds-website-cms](https://github.com/cds-snc/cds-website-cms).

Veuillez consulter nos [directives sur les contributions au référentiel Github](CONTRIBUTING.md) pour apprendre comment apporter des modifications au contenu géré par le SGC.

2023
