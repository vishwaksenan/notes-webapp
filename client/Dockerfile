FROM node:16.15.1-slim
WORKDIR /client
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]