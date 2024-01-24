FROM node:21.6-bookworm-slim

ADD . /code
WORKDIR /code

RUN npm install -g grunt-cli
RUN npm install

