FROM library/node:13.0.1-alpine
RUN apk update && apk upgrade
RUN apk add --no-cache --virtual .gyp python make g++
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
RUN npm install
COPY ./ /usr/src/app
ENV PORT 80
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80
RUN npm run nuxt-client-build
EXPOSE 80
EXPOSE 1337
CMD [ "npm", "run", "prod" ]
