FROM node:15.9-alpine3.10

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN apk add --no-cache --virtual .build-deps alpine-sdk python
RUN yarn install --production --silent
RUN apk del .build-deps

COPY . .

CMD ["yarn", "dev"]