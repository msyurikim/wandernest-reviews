const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wandernest');
const dummy = require('./dummyData');

// SCHEMA
let reviewSchema = mongoose.Schema({

  Username: String,
  UserPicture: String,
  UserLocation: String,
  UserContribution: Number,
  UserHelpfulVotes: Number,

  ReviewDate: String,
  ReviewRating: Number,
  ReviewTitle: String,
  ReviewDescription: String,
  ReviewDateOfStay: String,

  //   ReviewRatingValue: Number,
  //   ReviewRatingLocation: Number,
  //   ReviewRatingService: Number,
  //   ReviewRatingRooms: Number,
  //   ReviewRatingCleanliness: Number,
  //   ReviewRatingSleepQuality: Number,

});

// MODEL
let Review = mongoose.model('Review', reviewSchema);

// CONNECTION
var db = mongoose.connection;

// CONNECTION TEST
db.once('open', function() { console.log('Connected'); });