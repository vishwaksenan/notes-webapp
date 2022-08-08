FROM node:16.15.1-slim as builder
WORKDIR /client
COPY . .
RUN npm ci --quiet
RUN npm run build


FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /client/build /usr/share/nginx/html