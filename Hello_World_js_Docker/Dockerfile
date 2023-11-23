FROM node:20.9.0-alpine3.17
WORKDIR /app
# COPY package.json ./
# RUN npm install
COPY ./src /app
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3000


