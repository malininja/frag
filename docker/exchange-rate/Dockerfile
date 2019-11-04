# base Docker image with Node.js 10
FROM node:10 

# create app directory
WORKDIR /usr/src/app

# install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# copy application source
COPY . .

# expose application port
EXPOSE 3000

CMD [ "npm", "start"]
