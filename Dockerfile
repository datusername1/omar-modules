FROM node:10
WORKDIR /app
COPY package.json ./app
RUN npm install
COPY . /app
CMD npm run seed
CMD npm run webpack 
CMD npm start
EXPOSE 5585