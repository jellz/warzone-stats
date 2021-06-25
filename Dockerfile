FROM node:15.9-alpine3.10

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn

COPY . .

CMD ["yarn", "dev"]