FROM node:14.17.3-alpine3.14

WORKDIR /app
COPY . .
RUN npm i --production

CMD ["node", "/app/index.js"]