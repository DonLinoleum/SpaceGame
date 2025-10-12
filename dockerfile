FROM node:24-alpine

WORKDIR /usr/src/space_game

COPY dist server.js ./

EXPOSE 3001

ENTRYPOINT ["node","server.js"]