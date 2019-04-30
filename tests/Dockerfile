FROM node:6.17.1-alpine
# RUN apk --no-cache --update add

COPY . .
RUN yarn install
RUN yarn build

FROM httpd:2.4
# prevent error message
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

COPY --from=0 /dist/* /usr/local/apache2/htdocs/

EXPOSE 80
