var faker = require('faker');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wandernest');

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

});

// MODEL
let Review = mongoose.model('Review', reviewSchema);

// CONNECTION
var db = mongoose.connection;

// CONNECTION TEST
db.once('open', function() { console.log('Connected'); });

// 10 UNIQUE PER PAGE * 100 PAGES
// https://wandernest-reviews.s3-us-west-1.amazonaws.com/avatars/00.jpg - 049.jpg

var compiled = [];

// RANDOM PLACEHOLDER DATA
var randomUsernames = [];
var randomAvatars = [];
var randomLocations = [];
var randomReviewDates = [];
var randomReviewTitles = [];
var randomReviewDescriptions = [];
var randomReviewDateOfStays = [];
var imageURL = 'https://wandernest-reviews.s3-us-west-1.amazonaws.com/avatars/';

let generateRandomDataArrays = () => {

  for (var i = 0; i < 50; i++) { randomUsernames.push(faker.internet.userName()); } 
  //console.log(randomUsernames); console.log(randomUsernames.length); 

  for (var i = 0; i < 50; i++) { randomAvatars.push(imageURL + i + '.jpg'); }
  //console.log(randomAvatars); console.log(randomAvatars.length);

  for (var i = 0; i < 50; i++) { randomLocations.push(faker.address.city()); } 
  // console.log(randomLocations); console.log(randomLocations.length);
  
  for (var i = 0; i < 50; i++) { randomReviewDates.push(faker.date.past().toLocaleString()); } 
  // console.log(randomReviewDates); console.log(randomReviewDates.length);

  for (var i = 0; i < 50; i++) { randomReviewTitles.push(faker.lorem.sentence()); } 
  //console.log(randomReviewTitles); console.log(randomReviewTitles.length);

  for (var i = 0; i < 50; i++) { randomReviewDescriptions.push(faker.lorem.paragraph()); } 
  // console.log(randomReviewDescriptions); console.log(randomReviewDescriptions.length);

  for (var i = 0; i < 50; i++) { randomReviewDateOfStays.push(faker.date.past().toLocaleString()); } 
  // console.log(randomReviewDateOfStays); console.log(randomReviewDateOfStays.length);

};

generateRandomDataArrays();

let generateDummyData = () => {

  var currentID = 0;
  var currentUsername = 0;
  var currentAvatar = 0;
  var currentLocation = 0;  
  var currentReviewDate = 0;  
  var currentReviewTitle = 0;
  var currentReviewDescription = 0;
  var currentReviewDateOfStay = 0;
    
  // MAKE 1000 ENTRIES
  for (var i = 0; i < 1000; i++) {

    //////////////////////////////////
    var baseObject = {

      ReviewID: 0,

      Username: '',
      UserPicture: '',
      UserLocation: '',
      UserContribution: 0,
      UserHelpfulVotes: 0,

      ReviewDate: '',
      ReviewRating: 0,
      ReviewTitle: '',
      ReviewDescription: '',
      ReviewDateOfStay: '',

    };
    //////////////////////////////////
    
    ////////////////////////////////// SET REVIEW ID
    if (i % 10 === 0) { currentID++; }
    //console.log(currentID);       
    baseObject.ReviewID = currentID;    
    //////////////////////////////////
    
    ////////////////////////////////// SET USERNAMES
    baseObject.Username = randomUsernames[currentUsername];
    currentUsername++;
    if (currentUsername === 50) { currentUsername = 0; } 
    //////////////////////////////////

    ////////////////////////////////// SET USERPICTURES
    baseObject.UserPicture = randomAvatars[currentAvatar];
    currentAvatar++;
    if (currentAvatar === 50) { currentAvatar = 0; }  
    //////////////////////////////////

    ////////////////////////////////// SET USERLOCATIONS
    baseObject.UserLocation = randomLocations[currentLocation];
    currentLocation++;
    if (currentLocation === 50) { currentLocation = 0; }  
    //////////////////////////////////

    ////////////////////////////////// SET UserContribution
    baseObject.UserContribution = Math.floor(Math.random() * 101);
    //////////////////////////////////

    ////////////////////////////////// SET UserHelpfulVotes
    baseObject.UserHelpfulVotes = Math.floor(Math.random() * 101);
    //////////////////////////////////

    ////////////////////////////////// SET ReviewDate
    baseObject.ReviewDate = randomReviewDates[currentReviewDate];
    currentReviewDate++;
    if (currentReviewDate === 50) { currentReviewDate = 0; }  
    //////////////////////////////////

    ////////////////////////////////// SET ReviewRating
    baseObject.ReviewRating = Math.floor(Math.random() * 6);
    //////////////////////////////////

    ////////////////////////////////// SET ReviewTitle
    baseObject.ReviewTitle = randomReviewTitles[currentReviewTitle];
    currentReviewTitle++;
    if (currentReviewTitle === 50) { currentReviewTitle = 0; }  
    //////////////////////////////////

    ////////////////////////////////// SET ReviewDescription
    baseObject.ReviewDescription = randomReviewDescriptions[currentReviewDescription];
    currentReviewDescription++;
    if (currentReviewDescription === 50) { currentReviewDescription = 0; }  
    //////////////////////////////////

    ////////////////////////////////// SET ReviewDateOfStay
    baseObject.ReviewDateOfStay = randomReviewDateOfStays[currentReviewDateOfStay];
    currentReviewDateOfStay++;
    if (currentReviewDateOfStay === 50) { currentReviewDateOfStay = 0; }  
    //////////////////////////////////

    compiled.push(baseObject);

  }

  // console.log(compiled);
  // console.log(compiled[0]);
  // console.log(compiled.length);

  ////////////////////////////////// TO MONGO

  compiled.forEach((element) => {

    Review.collection.bulkWrite(
      [ 
        { insertOne: { 'document': element } }
      ],
      {
        ordered: true,
      }
    ).then((result) => {
      console.log('BULK UPDATE SUCCESS');
    }).catch((err) => {
      console.log('BULK UPDATE ERROR');
    });
  });

  console.log('done');

  //////////////////////////////////

};

generateDummyData();