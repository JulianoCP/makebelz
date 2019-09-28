FROM node:10.16.3-stretch

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package* /app/
RUN npm i
COPY . .

RUN npm i -g @angular/cli
RUN npm install -g typescript
RUN ng update
RUN npm i -g cordova
RUN npm i -g ionic