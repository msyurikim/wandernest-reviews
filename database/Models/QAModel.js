var mongoose = require('mongoose');

let qaSchema = mongoose.Schema({

  QUsername: String,
  QUserPicture: String,
  QLocation: String,
  QDate: String,
  QDescription: String,
  QNumContributions: Number,
  QHelpfulVotes: Number,

  AUsername: String,
  AUserPicture: String,
  ADate: String,
  ADescription: String,
  AHelpfulVotes: Number,
  
});

let QA = mongoose.model('QA', qaSchema);

module.exports.QA = QA;