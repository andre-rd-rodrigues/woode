FROM node:16.14-alpine

WORKDIR ./src/App

COPY package.json ./
COPY package-lock.json ./

RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    libtool \
    autoconf \
    automake
    
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

CMD npm start