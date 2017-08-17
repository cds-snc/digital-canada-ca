## Canadian Digital Service website - [digital.canada.ca](http://digital.canada.ca/)

Both [digital.canada.ca](https://digital.canada.ca/) and [numerique.canada.ca](https://numerique.canada.ca) are
 published from this repository.

Powered by [Jekyll](https://jekyllrb.com/), the [Web Experience Toolkit](https://github.com/wet-boew/wet-boew/), and [Docker](https://www.docker.com/).

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

3. Pull in dependencies

    ```
    bundle install
    ```

4. Serve
    ```
    ./serve
    ```
    or
    ```
    ./serve-fr
    ```

5. Browse http://localhost:4000

### Alternative installation using Docker

Using docker can simplify dependency management, but can significantly slow down your build time.  Assuming you've already
got Docker installed, after you complete steps 1 & 2 above, you may alternatively run the following command to bring up
the docker instance:


```
docker-compose up
```

This will install any necessary dependencies on the first run. Afterwards, just run `docker-compose up` again to launch 
the local Jekyll server for development and testing.
