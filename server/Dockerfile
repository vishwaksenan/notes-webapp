FROM node:16.15.1-slim
WORKDIR /server
COPY . .
RUN npm ci --quiet
RUN npm run build
EXPOSE 8081
CMD [ "npm", "start" ]