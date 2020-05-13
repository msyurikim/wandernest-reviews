import React from 'react';

var DotRating = (props) => {

  if (props.numDots === 0) {
      
    return (
      <div>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px"/>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px"/>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px"/>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px"/>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px"/>
      </div>
    );      
  }

  if (props.numDots === 1) {
    return (      
      <div>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
      </div>
    );      
  }

  if (props.numDots === 2) {
    return (      
      <div>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
      </div>
    );       
  }

  if (props.numDots === 3) {
    return (      
      <div>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
      </div>
    );      
  }

  if (props.numDots === 4) {
    return (      
      <div>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-empty.png' width="20px" height="22px" />
      </div>
    );       
  }

  if (props.numDots === 5) {
    return (      
      <div>
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
        <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/rating-dot-filled.png' width="20px" height="22px" />
      </div>
    );       
  }

  return null;

};

export default DotRating;