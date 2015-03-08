FROM node

ADD . /code
WORKDIR /code

RUN npm install -g grunt-cli
RUN npm install

