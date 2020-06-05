FROM node:14-alpine

WORKDIR /app

COPY package.json /app
RUN yarn install
COPY . /app

CMD ["yarn", "start"]
