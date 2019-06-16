FROM node:8.16.0-alpine
WORKDIR /root

COPY . .
RUN yarn install --ignore-optional

CMD yarn test
