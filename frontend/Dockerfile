FROM node:22-alpine AS frontend
WORKDIR /react_app

COPY *.json .
RUN npm install

COPY ./public/ ./public/
COPY ./src/ ./src/
RUN npm run build



FROM nginx:1.27-alpine
EXPOSE 80
EXPOSE 443

COPY --from=frontend /react_app/build /usr/share/nginx/html
COPY ./nginx.conf ./etc/nginx/nginx.conf