var express = require('express')
var http = require('http')
var app = express();
 
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

app.get('/', (req, res) => {
  res.status(200).send("Welcome to API REST")
});

app.get('/get/:name', function(req, res) {
  res.status(200).send('{"texto" : "'+req.params.name+'"}');
});
 
http.createServer(app).listen(8080, () => {
  console.log('Server started at http://localhost:8080');
});

module.exports = app;