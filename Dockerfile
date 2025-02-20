FROM node:16.14.0-alpine3.15
# MAINTAINER YIN
# ADD lottery.tar.gz  /
WORKDIR /lottery
COPY . /lottery
RUN chown -R root /lottery && sed -i '/openBrowser/ d' ./server/server.js \
&& cd server && npm install \
&& cd ../product && npm install \
&& ls -l
&& npm run build
EXPOSE 8888
# WORKDIR /lottery/product
# CMD ["npm", "run", "serve"]
