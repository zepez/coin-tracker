# basic setup
FROM node:12
WORKDIR /app

# copy and run dependencies 
# (install prod only) 
COPY package*.json ./
RUN npm ci --only=production

# copy source code into image
COPY . .

# create build of app
RUN npm run build

# allow access via port 
EXPOSE 3000

# start the server 
CMD [ "npm", "run", "start" ]