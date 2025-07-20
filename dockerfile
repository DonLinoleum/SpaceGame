FROM node:24-alpine

WORKDIR /usr/src/space_game

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm","run","dev"]