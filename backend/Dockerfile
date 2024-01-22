FROM node:21-alpine

WORKDIR /back

COPY . .

RUN  npm install

EXPOSE 3000

CMD [ "node", "server.js" ]