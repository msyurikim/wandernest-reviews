const express = require('express');
let app = express();

const mongodb = require('../database/index.js');
const generateData = require('../database/dummyData.js');

app.use(express.static(__dirname + '/../client/dist'));

let port = 3004;

app.listen(port, function() {
  console.log(`Express listening on port [ ${port} ]`);
});

app.post('/', function (req, res) {
  console.log('post() /');
});

// get reviews
app.get('/reviews', function (req, res) {
  console.log('GET /reviews/');

  var handleResponse = (error, data) => { 
    console.log('handleResponse() in app.get(/repos)');
    //console.log(data);
    if (error) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }

  };  

  mongodb.retrieveReviewsByID(req.query.id, handleResponse);

});

// get QA
app.get('/qas', function (req, res) {
  console.log('GET /reviews/');

  var handleResponse = (error, data) => { 
    console.log('handleResponse() in app.get(/qa)');
    //console.log(data);

    if (error) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }

  };  

  mongodb.retrieveQAByID(req.query.id, handleResponse);

});

// get RoomTips
app.get('/roomtips', function (req, res) {
  console.log('GET /reviews/');

  var handleResponse = (error, data) => { 
    console.log('handleResponse() in app.get(/roomtips)');
    //console.log(data);

    if (error) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }
    
  };  

  mongodb.retrieveRoomTipByID(req.query.id, handleResponse);

});

// ENDPOINT GENERATE DUMMY DATA
app.post('/generate', function (req, res) {
  console.log('POST /generate');
  generateData.generateAllDataAndInsert();
});

module.exports = app;