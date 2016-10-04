var express = require('express');
var serveIndex = require('serve-index')
var app = express();
var morgan = require('morgan');

var port = process.env.SERVER_PORT || 80;

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

if (process.env.SERVE_INDEX !== 'false') {
	app.use(serveIndex(__dirname + '/public'))
}

app.get('/status', function (req, res) {
  res.send('Hello from the Mini Webserver!');
});

app.use(function(req, res, next) {
  res.status(404).end();
});

var server = app.listen(port);
