FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

# Install app dependencies
COPY package.json /usr/src/api/
RUN npm install
# Bundle app source
COPY . /usr/src/api
RUN npm install -g multi-file-swagger


EXPOSE 10010

CMD [ "npm", "start"]
