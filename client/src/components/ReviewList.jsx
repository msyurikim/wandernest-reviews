import React from 'react';
import SingleReview from './SingleReview.jsx';

var ReviewList = (props) => (

  <div>
    {props.data.map((element, i) => (      
      <div key={i}><SingleReview data={element} /></div>
    ))}

  </div>

);

export default ReviewList;