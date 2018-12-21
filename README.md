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

3. Build the Docker image (this requires [Docker](https://www.docker.com/products/docker-desktop) to be installed and running)

    ```
    # Linux/Mac
    sh docker_build.sh

    # Windows
    docker_build.bat
    ```

4. Serve. This requires [Docker](https://www.docker.com/products/docker-desktop) to be installed and running. This step only needs to be re-run when `./Dockerfile` changes:

    ```
    # Linux/Mac
    sh run_hugo.sh

    # Windows
    run_hugo.bat
    ```

Both languages will be hosted at localhost:1313 and localhost:1314 respectively.

To get Netlfy CMS up and running:

    ```
    # Linux/Mac
    sh run_netlify.sh

    # Windows
    run_netlify.bat
    ```



