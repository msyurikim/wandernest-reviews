const express = require('express');
let app = express();

const mongodb = require('../database/index.js');

//app.use(express.static(__dirname + '/../client/'));

let port = 3000;

app.listen(port, function() {
  console.log(`Express listening on port [ ${port} ]`);
});

app.post('/', function (req, res) {
  console.log('post() /');
});

app.get('/', function (req, res) {
  console.log('get() /');
});