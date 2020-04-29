// GENERATE DUMMY DATA
let generateDummyDate = () => {

  var dummyObject = {

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
    
  };
    
  for (var i = 0; i < 101; i++) {

    var conditions = {};
    var update = {};
    var options = { upsert: true };

    // Model.update(conditions, update, options, callback);
    Repo.update(conditions, update, options, function callback (err, numAffected) {
      console.log(err, numAffected);  
    });
  }

};