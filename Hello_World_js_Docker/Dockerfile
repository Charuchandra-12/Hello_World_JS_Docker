# Dockerfile
FROM node:20.9.0-alpine3.17

WORKDIR /app

RUN npm install nodemon -g

COPY ./src /app

EXPOSE 3000

CMD ["nodemon", "app.js"]
