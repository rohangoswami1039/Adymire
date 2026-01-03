FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# We don't build for dev mode, just run
EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host"]
