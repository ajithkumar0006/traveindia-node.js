FROM node:18-alpine

WORKDIR /usr/src/app

# deps for native modules if ever needed
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]

