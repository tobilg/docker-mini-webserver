var express = require('express');
var app = express();
var port = process.env.SERVER_PORT || 80;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello from the Mini Webserver!');
});

app.use(function(req, res, next) {
  res.status(404).end();
});

var server = app.listen(port);