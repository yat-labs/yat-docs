FROM node:latest
WORKDIR /opt/docs
RUN mkdir yat-docs \
    && mkdir yatdocs-plugin \
    && apt-get update \
    && apt-get -y install default-jre-headless


COPY yat-docs/package.json yat-docs/package.json
COPY yat-docs/yarn.lock yat-docs/yarn.lock
COPY yatdocs-plugin/package.json yatdocs-plugin/package.json
COPY yatdocs-plugin/yarn.lock yatdocs-plugin/yarn.lock
RUN cd yat-docs && yarn install \
    && cd ../yatdocs-plugin && yarn install
COPY yat-docs yat-docs/
COPY yatdocs-plugin yatdocs-plugin/
COPY Makefile deploy.sh ./
