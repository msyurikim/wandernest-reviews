var faker = require('faker');
var mongoose = require('mongoose');

var ReviewModel = require('./Models/ReviewModel.js');
var QAModel = require('./Models/QAModel.js');
var RoomTipModel = require('./Models/RoomTipModel.js');

mongoose.connect('mongodb://localhost/wandernest');

// 10 UNIQUE PER PAGE * 100 PAGES
// https://wandernest-reviews.s3-us-west-1.amazonaws.com/avatars/00.jpg - 049.jpg

var compiledReviews = [];
var compiledQA = [];
var compiledRoomTips = [];

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

  for (var i = 0; i < 50; i++) {
    randomUsernames.push(faker.internet.userName()); 
    randomAvatars.push(imageURL + i + '.jpg');
    randomLocations.push(faker.address.city());
    randomReviewDates.push(faker.date.past().toLocaleString());
    randomReviewTitles.push(faker.lorem.sentence());
    randomReviewDescriptions.push(faker.lorem.paragraph());
    randomReviewDateOfStays.push(faker.date.past().toLocaleString());
  } 

  // console.log(randomUsernames); console.log(randomUsernames.length); 
  // console.log(randomAvatars); console.log(randomAvatars.length);
  // console.log(randomLocations); console.log(randomLocations.length);
  // console.log(randomReviewDates); console.log(randomReviewDates.length);
  // console.log(randomReviewTitles); console.log(randomReviewTitles.length);
  // console.log(randomReviewDescriptions); console.log(randomReviewDescriptions.length);
  // console.log(randomReviewDateOfStays); console.log(randomReviewDateOfStays.length);

};

generateRandomDataArrays();

// GENERATE DATA FOR REVIEWS
let generateDummyDataReviews = () => {

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

      ID: 0,

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
    baseObject.ID = currentID;    
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

    compiledReviews.push(baseObject);

  }

  // console.log(compiledReviews);
  // console.log(compiledReviews[0]);
  // console.log(compiledReviews.length);

};

generateDummyDataReviews();

// GENERATE DATA FOR Q & A
let generateDummyDataQA = () => {

  var currentID = 0;
  var currentUsername = 0;  
  var currentAvatar = 0;  
  var currentLocation = 0;  
  var currentReviewDate = 0;    
  var currentReviewDescription = 0;  

  var currentAUsername = 50;
  var currentAAvatar = 50;
  var currentADate = 50;
  var currentADescription = 50;  

    
  // MAKE 1000 ENTRIES
  for (var i = 0; i < 1000; i++) {

    //////////////////////////////////
    var baseObject = {

      ID: 0,

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

    };
    //////////////////////////////////
    
    ////////////////////////////////// SET REVIEW ID
    if (i % 10 === 0) { currentID++; }
    //console.log(currentID);       
    baseObject.ID = currentID;    
    //////////////////////////////////
    
    ////////////////////////////////// SET QUsername
    baseObject.QUsername = randomUsernames[currentUsername];
    currentUsername++;
    if (currentUsername === 50) { currentUsername = 0; } 
    //////////////////////////////////

    ////////////////////////////////// SET QUserPicture
    baseObject.QUserPicture = randomAvatars[currentAvatar];
    currentAvatar++;
    if (currentAvatar === 50) { currentAvatar = 0; } 
    //////////////////////////////////

    ////////////////////////////////// SET QUserPicture
    baseObject.QLocation = randomLocations[currentLocation];
    currentLocation++;
    if (currentLocation === 50) { currentLocation = 0; } 
    //////////////////////////////////

    ////////////////////////////////// SET QDate
    baseObject.QLocation = randomReviewDates[currentReviewDate];
    currentReviewDate++;
    if (currentReviewDate === 50) { currentReviewDate = 0; } 
    //////////////////////////////////

    ////////////////////////////////// SET QDescription
    baseObject.QDescription = randomReviewDescriptions[currentReviewDescription];
    currentReviewDescription++;
    if (currentReviewDescription === 50) { currentReviewDescription = 0; }  
    //////////////////////////////////

    ////////////////////////////////// SET QNumContributions
    baseObject.QNumContributions = Math.floor(Math.random() * 101);
    //////////////////////////////////

    ////////////////////////////////// SET QHelpfulVotes
    baseObject.QHelpfulVotes = Math.floor(Math.random() * 101);
    //////////////////////////////////


    ////////////////////////////////// SET AUsername
    baseObject.AUsername = randomUsernames[currentAUsername];
    currentAUsername--;
    if (currentAUsername === 0) { currentAUsername = 50; } 
    //////////////////////////////////

    ////////////////////////////////// SET AUserPicture
    baseObject.AUserPicture = randomAvatars[currentAAvatar];
    currentAAvatar--;
    if (currentAAvatar === 0) { currentAAvatar = 50; } 
    //////////////////////////////////
    
    ////////////////////////////////// SET ADate
    baseObject.ADate = randomReviewDates[currentADate];
    currentADate--;
    if (currentADate === 0) { currentADate = 50; } 
    //////////////////////////////////

    ////////////////////////////////// SET ADescription
    baseObject.ADescription = randomReviewDescriptions[currentADescription];
    currentADescription--;
    if (currentADescription === 0) { currentADescription = 50; }  
    //////////////////////////////////

    ////////////////////////////////// SET AHelpfulVotes
    baseObject.AHelpfulVotes = Math.floor(Math.random() * 101);
    //////////////////////////////////

    compiledQA.push(baseObject);

  }

  // console.log(compiledQA);
  // console.log(compiledQA[0]);
  console.log(compiledQA.length);
};

generateDummyDataQA();

// GENERATE DATA FOR ROOM TIPS
let generateDummyDataRoomTips = () => {

  var currentID = 0;
  var currentUsername = 0;  
  var currentAvatar = 0;  
  var currentLocation = 0;  
  var currentReviewDate = 0;    
  var currentReviewDescription = 0;  

    
  // MAKE 1000 ENTRIES
  for (var i = 0; i < 1000; i++) {

    //////////////////////////////////
    var baseObject = {

      ID: 0,

      Username: String,
      UserPicture: String,
      UserLocation: String,
      UserContributions: Number,
      TipDescription: String,
      TipDate: String,
      TipRating: Number,
      TipHelpfulVotes: Number,    

    };
    //////////////////////////////////
    
    ////////////////////////////////// SET REVIEW ID
    if (i % 10 === 0) { currentID++; }
    //console.log(currentID);       
    baseObject.ID = currentID;    
    //////////////////////////////////
    
    ////////////////////////////////// SET Username
    baseObject.Username = randomUsernames[currentUsername];
    currentUsername++;
    if (currentUsername === 50) { currentUsername = 0; } 
    //////////////////////////////////

    ////////////////////////////////// SET UserPicture
    baseObject.UserPicture = randomAvatars[currentAvatar];
    currentAvatar++;
    if (currentAvatar === 50) { currentAvatar = 0; } 
    //////////////////////////////////

    ////////////////////////////////// SET UserLocation
    baseObject.UserLocation = randomLocations[currentLocation];
    currentLocation++;
    if (currentLocation === 50) { currentLocation = 0; } 
    //////////////////////////////////

    ////////////////////////////////// SET UserContributions
    baseObject.UserContributions = Math.floor(Math.random() * 101);
    //////////////////////////////////

    ////////////////////////////////// SET TipDescription
    baseObject.TipDescription = randomReviewDescriptions[currentReviewDescription];
    currentReviewDescription++;
    if (currentReviewDescription === 50) { currentReviewDescription = 0; }  
    //////////////////////////////////

    ////////////////////////////////// SET TipDate
    baseObject.TipDate = randomReviewDates[currentReviewDate];
    currentReviewDate++;
    if (currentReviewDate === 50) { currentReviewDate = 0; } 
    //////////////////////////////////

    ////////////////////////////////// SET TipRating
    baseObject.TipRating = Math.floor(Math.random() * 6);
    //////////////////////////////////

    ////////////////////////////////// SET AHelpfulVotes
    baseObject.TipHelpfulVotes = Math.floor(Math.random() * 101);
    //////////////////////////////////

    compiledRoomTips.push(baseObject);

  }

  // console.log(compiledRoomTips);
  // console.log(compiledRoomTips[0]);
  console.log(compiledRoomTips.length);
};

generateDummyDataRoomTips();

// INSERT INTO MONGO
let insertToMongo = () => {

  compiledReviews.forEach((element) => {

    ReviewModel.Review.collection.bulkWrite(
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
  
  compiledQA.forEach((element) => {

    QAModel.QA.collection.bulkWrite(
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

  compiledRoomTips.forEach((element) => {

    RoomTipModel.RoomTip.collection.bulkWrite(
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

};

insertToMongo();
console.log('done');