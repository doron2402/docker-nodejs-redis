FROM node:5.3.0-wheezy

RUN npm i -g nodemon

WORKDIR /var/www
ADD app/ /var/www

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
