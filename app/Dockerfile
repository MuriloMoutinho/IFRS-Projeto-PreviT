FROM node:alpine
WORKDIR /app
COPY package.json /app/
RUN npm install 
COPY . /app
RUN npm run build

EXPOSE 5173
CMD [ "npm", "run", "dev" ]


