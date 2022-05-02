FROM debian:stretch-slim as build 

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install wget \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ARG HUGO_VERSION="0.55.6"
RUN wget "https://github.com/gohugoio/hugo/releases/download/v0.55.6/hugo_extended_${HUGO_VERSION}_Linux-64bit.tar.gz" \
    && tar -xvf hugo_extended_0.55.6_Linux-64bit.tar.gz hugo \
    && mv  hugo /usr/bin \
    && rm hugo_extended_0.55.6_Linux-64bit.tar.gz

ADD https://github.com/cds-snc/static-content-lambda/raw/main/release/latest/lambda-static-server /lambda-static-server
RUN chmod 755 /lambda-static-server

COPY ./ /site
WORKDIR /site
RUN hugo


FROM scratch

COPY --from=build /site/public /var/www/html
COPY --from=build /lambda-static-server /lambda-static-server

ENTRYPOINT [ "/lambda-static-server" ]