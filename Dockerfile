FROM node:16.14.0-alpine3.15
# MAINTAINER YIN
# ADD lottery.tar.gz  /
WORKDIR /lottery
COPY . /lottery
RUN chown -R root /lottery && sed -i '/openBrowser/ d' ./server/server.js \
&& cd server && npm install
RUN cd ../product && ls -l && npm install \
&& npm run build
EXPOSE 8888
WORKDIR /lottery/product
CMD ["npm", "run", "serve"]
