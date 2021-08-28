FROM node:9-alpine

# App must run on port 8000
# Add your instructions to dockerize the application

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# run server
EXPOSE 8000
CMD [ "npm", "start" ]