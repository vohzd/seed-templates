FROM mhart/alpine-node

WORKDIR /src

COPY package.json .

RUN apk add --no-cache --virtual .gyp python make g++
RUN npm i

COPY . .

EXPOSE 1337

CMD ["npm", "start"]
