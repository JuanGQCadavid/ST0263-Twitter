#Stage 1 -> Build node
FROM node:10.16.0-alpine as node

MAINTAINER Juan Gonzalo Quiroz Cadavid

copy . /app
WORKDIR /app

RUN npm install

RUN npm run build -- --prod

#Stage 2-> put it on nginx

FROM nginx:alpine

COPY --from=node /app/dist/maybe /usr/share/nginx/html


