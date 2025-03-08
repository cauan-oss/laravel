FROM node:16

WORKDIR /app

COPY vite-project/package.json /app/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

