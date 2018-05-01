FROM fsilvapucci/git-angular-cli:0.0.1
MAINTAINER Fernando Pucci <fsilvapucci@gmail.com>
WORKDIR /home/nickolas/nick-web

COPY ./ .

RUN  cd /home/nickolas/nick-web; npm install; ng build --env=prod --output-hashing none

EXPOSE 5000

RUN  cd /home/nickolas/nick-web; 
#sudo docker run -d  --name nick-web -p 5000:5000 <image_id> node server.js

LABEL Description="Ubuntu / Node / NPM / Angular CLI"