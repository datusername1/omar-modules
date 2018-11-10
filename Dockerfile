FROM node:10
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5555
RUN npm run webpack
CMD ["npm", "start"]
