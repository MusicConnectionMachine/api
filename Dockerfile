FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

# Install app dependencies
COPY . /usr/src/api

RUN npm install
RUN npm install -g multi-file-swagger


EXPOSE 10010

CMD [ "npm", "start"]
