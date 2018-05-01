FROM fsilvapucci/node-ubuntu-git:0.0.1
MAINTAINER Fernando Pucci <fsilvapucci@gmail.com>
WORKDIR /home/nickolas/nick-api

COPY ./ .

RUN  cd /home/nickolas/nick-api; npm install

EXPOSE 1337

RUN  cd /home/nickolas/nick-api; 
#sudo docker run -d --name nick-api -p 1337:1337 <image_id> sails lift


LABEL Description="Ubuntu / Node / NPM / SAILS Machine"
