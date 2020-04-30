var mongoose = require('mongoose');

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
  
});

let Review = mongoose.model('Review', reviewSchema);

module.exports.Review = Review;