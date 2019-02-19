ARG LANG
FROM nginx
COPY /public/en /usr/share/nginx/html
EXPOSE 8080