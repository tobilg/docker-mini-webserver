# mini-webserver
Provides a server (via Express.js) to expose static files from the Docker host via HTTP

## Usage
You can expose a local directory which you want to have served via the `mini-webserver` by starting it with

`docker run --name mini-web -p 8080:80 -v /path/to/local/folder:/app/public:ro -d tobilg/mini-webserver`

In this example, the port on the docker host where the `mini-webserver` is reachable is `8080`.