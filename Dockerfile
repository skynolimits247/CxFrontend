# Stage 0, based on Node.js, to build and compile Angular
FROM node:12.5.0 as node

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY ./ /app/

ARG env=prod

RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine

COPY --from=node /app/dist/angular-app /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

COPY dist/ .
