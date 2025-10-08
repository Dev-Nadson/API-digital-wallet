FROM node:22

WORKDIR /opt/walletApp

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3333

CMD ["npm", "start"]