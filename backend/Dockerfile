FROM node:21-alpine AS server

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/src/main.js" ]
