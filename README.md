## Canadian Digital Service website - [digital.canada.ca](http://digital.canada.ca/)

Both [digital.canada.ca](https://digital.canada.ca/) and [numerique.canada.ca](https://numerique.canada.ca) are
 published from this repository.

Powered by [Jekyll](https://jekyllrb.com/), the [Web Experience Toolkit](https://github.com/wet-boew/wet-boew/), and [Docker](https://www.docker.com/).

### To install locally:

1. Clone the repository (green link above).

2. Bring in the GCWeb theme.

Switch to the newly created folder, and then run

```
git submodule update --init --recursive
```

to bring in the [GCWeb WET theme](http://wet-boew.github.io/themes-dist/GCWeb/docs/ref/GCWeb/GCWeb-en.html) files.

3. Run the Docker instance.

With Docker installed and running on your computer, run

```
docker-compose up
```

This will install any necessary dependencies on the first run. Afterwards, just run `docker-compose up` again to launch the local Jekyll server for development and testing.
