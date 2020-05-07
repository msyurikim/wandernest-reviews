import React from 'react';
import styled from 'styled-components';

var SingleReview = (props) => (

  <div>
    <p>{props.data.Username} wrote a review {props.data.ReviewDate}</p>
  </div>

);

export default SingleReview;