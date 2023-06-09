FROM node:18-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install

RUN npm install @vue/cli@5.0.8 -g

COPY . /app

CMD npm run serve

