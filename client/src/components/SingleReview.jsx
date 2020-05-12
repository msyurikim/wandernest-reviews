import React from 'react';
import styled from 'styled-components';

// STYLED COMPONENTS 
const Wrapper = styled.div`
  width: 809px;
  display: block;
  text-align: left;
  border: 1px;
  border-style: solid;
  margin-bottom: 25px;
  margin-top: 25px;
  background: #ffffff;
`;

const ReviewTitle = styled.div`
  margin-top: 25px;
  margin-bottom: 0px;
`;

const Block = styled.div`
  width: 270px;
  height: 102px;
  background: gray;
`;

var SingleReview = (props) => (

  <Wrapper>
    <div>
      <img src={props.data.UserPicture} width="48px" height="48px" /> {props.data.Username} wrote a review {props.data.ReviewDate}
    </div>
    <div>    
      Location: {props.data.UserLocation} | {props.data.UserContribution} contributions | {props.data.UserHelpfulVotes} helpful votes
    </div>
    <div>
      Rating: {props.data.ReviewRating} / 5
    </div>
    <ReviewTitle>
      <b>{props.data.ReviewTitle}</b>
    </ReviewTitle>
    <div>
      <p>"{props.data.ReviewDescription}"</p>
    </div>
    <div>
      <p><small><i>Date of Stay: {props.data.ReviewDateOfStay} </i></small></p>
    </div>
  </Wrapper>

);

export default SingleReview;