FROM node:24-alpine AS builder
WORKDIR /usr/src/space_game

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:24-alpine
WORKDIR /usr/src/space_game

RUN npm i express

COPY --from=builder /usr/src/space_game/dist ./
COPY --from=builder /usr/src/space_game/server.js ./

EXPOSE 3001

ENTRYPOINT ["node","server.js"]