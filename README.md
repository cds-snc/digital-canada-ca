# Canadian Digital Service website - [digital.canada.ca](digital.canada.ca)

Both [digital.canada.ca](digital.canada.ca) and [numerique.canada.ca](numerique.canada.ca) are published from this repository.

Powered by [Hugo](https://gohugo.io/), and the [Web Experience Toolkit](https://github.com/wet-boew/wet-boew/).
### To install locally:

1. Clone the repository.

    ```
    git clone https://github.com/cds-snc/digital-canada-ca.git
    ```

2. Load submodules
    
    ```
    cd digital-canada-ca
    git submodule update --init --recursive
    ```
3. If you do not have Hugo installed on your machine, install it:

    ```
    brew install hugo
    ```

4. Serve:

    ```
    hugo server -D 
    ```

Both languages will be hosted at localhost:1313 and localhost:1314 respectively.

To get Netlify CMS up and running:
1. Pull in dependencies
    ```
    npm install
    ```
2. Build Netlify CMS
    ```
    npm run dev
    ```



