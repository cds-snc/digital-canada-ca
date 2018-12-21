FROM debian:stretch

ENV HUGO_VERSION 0.52
ENV HUGO_BINARY hugo_extended_${HUGO_VERSION}_Linux-64bit.deb
ENV NODE_SERIES 10.x
ENV SITE_DIR /usr/share/site


# Install Hugo (and deps) and NodeJS/NPM
RUN apt-get update \
    && apt-get -y install curl gnupg \
	&& curl -sL https://deb.nodesource.com/setup_${NODE_SERIES} | bash - \
    && apt-get -y install nodejs \
    && rm -rf /var/lib/apt/lists/*

# Download and install hugo
RUN curl -sL -o /tmp/hugo.deb \
    https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} && \
    dpkg -i /tmp/hugo.deb && \
    rm /tmp/hugo.deb && \
    mkdir ${SITE_DIR}

# Expose ports (English, Français)
EXPOSE 1313
EXPOSE 1314

# Automatically build site
WORKDIR ${SITE_DIR}
ADD . ${SITE_DIR}

# Serve the site
CMD hugo server -D --bind=0.0.0.0
