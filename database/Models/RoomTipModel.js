var mongoose = require('mongoose');

let roomtipSchema = mongoose.Schema({

  Username: String,
  UserPicture: String,
  UserLocation: String,
  UserContributions: Number,
  TipDescription: String,
  TipDate: String,
  TipRating: Number,
  TipHelpfulVotes: Number,    
  
});

let RoomTip = mongoose.model('RoomTip', roomtipSchema, 'wandernest');

module.exports.RoomTip = RoomTip;