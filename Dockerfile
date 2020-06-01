FROM node

WORKDIR /code

RUN npm install -g grunt-cli
CMD npm install; grunt
