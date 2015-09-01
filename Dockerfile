FROM ubuntu:14.04.3
MAINTAINER tobilg <fb.tools.github@gmail.com>

# packages
RUN apt-get update && apt-get install -yq --no-install-recommends --force-yes \
    curl
	
# Add Node.js repo
RUN curl -sL https://deb.nodesource.com/setup | bash -

RUN apt-get update && apt-get install -yq --no-install-recommends --force-yes \
	nodejs \
	npm 
	
RUN ln -s /usr/bin/nodejs /usr/bin/node
	
RUN mkdir /app
RUN mkdir /app/public

ADD package.json /app/package.json 
ADD mini-webserver.js /app/mini-webserver.js

RUN cd /app && npm install

VOLUME ["/app/public"]

EXPOSE 80

CMD ["node", "/app/mini-webserver.js"]