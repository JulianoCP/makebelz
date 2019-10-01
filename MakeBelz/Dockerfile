FROM node:10.16.3-stretch

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package* /app/
RUN npm i
COPY . .

RUN npm install -g @angular/cli
RUN npm install -g typescript
RUN ng update
RUN npm install -g cordova
RUN npm install -g ionic