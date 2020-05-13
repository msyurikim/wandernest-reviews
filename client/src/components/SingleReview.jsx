import React from 'react';
import styled from 'styled-components';
import NumDots from './DotRating.jsx';

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
  border-radius: 2px;
  border-color: gray;
`;

const ReviewTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000a12;
  margin-top: 25px;
  margin-bottom: 0px;
  margin-left: 25px;
`;

const ReviewBody = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  margin-top: 15px;
  margin-bottom: 5px;  
  background: #f2f2f2;
`;

const ReviewBodyText = styled.div`
  margin-left: 25px;  
  font-size: 18px;
`;

const ReviewRating = styled.div`
  margin-left: 25px;  
`;

const ReviewAuthorInfo = styled.div`
  display: block;
  margin-top: 5px;
  margin-left: 25px;  
  font-size: 14px;
`;

const ReviewAuthorHeader = styled.div` 
  margin-bottom: 5px;
  display: flex;
`;

const ReviewAuthorName = styled.div` 
  display: flex;
  margin-right: 5px;

  &:hover {    
    text-decoration: underline;  
  }  
`;


const ReviewAuthorAvatar = styled.div` 
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

const ReviewDateOfStay = styled.div` 
  margin-left: 30px;
  margin-bottom: 25px;
`;

const ReviewFooter = styled.div` 
  margin-left: 30px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 25px;  
  display: flex;
`;

var SingleReview = (props) => (

  <Wrapper>
    <Header>
      <ReviewAuthorAvatar>
        <img src={props.data.UserPicture} width="48px" height="48px" />
      </ReviewAuthorAvatar>
      <ReviewAuthorInfo>
        <ReviewAuthorHeader>
          <ReviewAuthorName><strong>{props.data.Username} </strong></ReviewAuthorName> wrote a review {props.data.ReviewDate}
        </ReviewAuthorHeader>
        <div>
          <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-location.png' width="10px" height="14px" /> {props.data.UserLocation} &bull; {props.data.UserContribution} contributions &bull; {props.data.UserHelpfulVotes} helpful votes
        </div>
      </ReviewAuthorInfo>
    </Header>

    <ReviewBody>
      <ReviewRating>
        <NumDots numDots={props.data.ReviewRating} />
      </ReviewRating>
      <ReviewTitle>
        <b>{props.data.ReviewTitle}</b>
      </ReviewTitle>
      <ReviewBodyText>
        <p>"{props.data.ReviewDescription}"</p>
      </ReviewBodyText>
      <ReviewDateOfStay>
        <p><small>Date of Stay: {props.data.ReviewDateOfStay} </small></p>
      </ReviewDateOfStay>
    </ReviewBody>
    <ReviewFooter>
      <img src ='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-thumbs.png' width="24px" height="24px"/> <small>Helpful</small>  <img src ='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-share.png' width="24px" height="24px"/> <small>Share</small>
    </ReviewFooter>
  </Wrapper>

);

export default SingleReview;