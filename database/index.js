const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wandernest');

var ReviewModel = require('./Models/ReviewModel.js');
var QAModel = require('./Models/QAModel.js');
var RoomTipModel = require('./Models/RoomTipModel.js');

let retrieveReviewsByID = (id, callback) => {

  console.log('retrieveReviewID ' + id);

  var myTempID = id;

  ReviewModel.Review.aggregate([
    // aggregation
    { $match: {ID: parseInt(myTempID) } },
    { $limit: 10 },
    { $sort: {ID: -1} }
    
  ])
    .exec((error, results) => {

      callback(results);

    });

};

let retrieveQAByID = (id, callback) => {

  console.log('retrieveReviewID ' + id);

  var myTempID = id;

  QAModel.QA.aggregate([
    // aggregation
    { $match: {ID: parseInt(myTempID) } },
    { $limit: 10 },
    { $sort: {ID: -1} }
    
  ])
    .exec((error, results) => {

      callback(results);

    });

};

let retrieveRoomTipByID = (id, callback) => {

  console.log('retrieveReviewID ' + id);

  var myTempID = id;

  RoomTipModel.RoomTip.aggregate([
    // aggregation
    { $match: {ID: parseInt(myTempID) } },
    { $limit: 10 },
    { $sort: {ID: -1} }
    
  ])
    .exec((error, results) => {

      callback(results);

    });

};

module.exports.retrieveReviewsByID = retrieveReviewsByID;
module.exports.retrieveQAByID = retrieveQAByID;
module.exports.retrieveRoomTipByID = retrieveRoomTipByID;