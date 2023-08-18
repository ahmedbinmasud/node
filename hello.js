#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello mein ahmed houn and this is my node app\n');
}).listen(3000, 'localhost');
console.log('Server running at http://localhost:3000/');

