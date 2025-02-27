# base image
FROM node:18.2.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# start app
CMD ["npm", "start"]