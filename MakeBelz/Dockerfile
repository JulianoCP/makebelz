FROM node:12.10.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install -g cordova
RUN npm install -g ionic