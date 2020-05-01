const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wandernest');

var ReviewModel = require('./Models/ReviewModel.js');
var QAModel = require('./Models/QAModel.js');
var RoomTipModel = require('./Models/RoomTipModel.js');

let retrieveReviewID = (id, callback) => {

  console.log('retrieveReviewID ' + id);

  var myTempID = id;

  ReviewModel.Review.aggregate([
    // aggregation
    { $match: {ID: parseInt(myTempID) } },
    { $limit: 10 },
    { $sort: {ID: -1} }
    
  ])
    .exec((error, results) => {
      console.log('RESULTS =====');
      console.log(results);
      console.log('RESULTS =====');
      callback(results);

    });

};

module.exports.retrieveReviewID = retrieveReviewID;