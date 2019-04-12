[La version française suit.](#---------------------------------------------------------------------)

# Canadian Digital Service website - [digital.canada.ca](https://digital.canada.ca)

Both [digital.canada.ca](https://digital.canada.ca) and [numerique.canada.ca](https://numerique.canada.ca) are published from this repository.

Powered by [Hugo](https://gohugo.io/), and the [Web Experience Toolkit](https://github.com/wet-boew/wet-boew/).

## To install locally

1. Clone the repository.

    ```
    git clone https://github.com/cds-snc/digital-canada-ca.git
    ```

2. If you do not have Hugo installed on your machine, install it:

    ```
    brew install hugo
    ```

3. Serve:

    ```
    hugo server -D 
    ```

The English and French versions will be hosted at [localhost:1313](http://localhost:1313) and [localhost:1314](http://localhost:1314), respectively.

## To get Netlify CMS up and running

1. Pull in dependencies
    ```
    npm install
    ```
2. Build Netlify CMS
    ```
    npm run dev
    ```

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

## Opérationnalisation du gestionnaire de contenu Netlify

1. Ajoutez les dépendances.
    ```
    npm install
    ```
2. Lancez la compilation du gestionnaire de contenu Netlify.
    ```
    npm run dev
    ```
