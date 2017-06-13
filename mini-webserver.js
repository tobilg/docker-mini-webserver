var express = require('express');
var app = express();
var morgan = require('morgan');

var port = process.env.PORT0 || 3000;
var host = process.env.HOST || "0.0.0.0";

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.get('/status', function (req, res) {
  res.send('Hello from the Mini Webserver!');
});

app.use(function(req, res, next) {
  res.status(404).end();
});

var server = app.listen(port, host);
