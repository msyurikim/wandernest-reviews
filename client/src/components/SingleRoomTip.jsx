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
  padding-bottom: 5px;
`;

const Header = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 25px;  
  display: flex;
`;

const TipAuthorAvatar = styled.div` 
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

const TipAuthorInfo = styled.div`
  display: block;
  margin-top: 5px;
  margin-left: 25px;  
  font-size: 14px;
`;

const TipAuthorHeader = styled.div` 
  margin-bottom: 5px;
  display: flex;
`;

const TipAuthorName = styled.div` 
  display: flex;
  margin-right: 5px;

  &:hover {    
    text-decoration: underline;  
  }  
`;

const TipBody = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 5px; 
  margin-left: 30px;
`;

var SingleRoomTip = (props) => (

  <Wrapper>
    <Header>
      <TipAuthorAvatar>
        <img src={props.data.UserPicture} width="48px" height="48px" />
      </TipAuthorAvatar>
      <TipAuthorInfo>
        <TipAuthorHeader>
          <TipAuthorName><strong>{props.data.Username}</strong></TipAuthorName> wrote a tip {props.data.TipDate}
        </TipAuthorHeader>
        <div>    
          <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-location.png' width="10px" height="14px" /> {props.data.UserLocation} &bull; {props.data.UserContributions} contributions &bull; {props.data.TipHelpfulVotes} helpful votes
        </div>        
      </TipAuthorInfo>
    </Header>
    <TipBody>
      <div>
      <NumDots numDots={props.data.TipRating} />
      </div>
      <div>
        <p>"{props.data.TipDescription}"</p>
      </div>
      <div>
        <strong>Read full review</strong>
      </div>
    </TipBody>
  </Wrapper>

);

export default SingleRoomTip;
