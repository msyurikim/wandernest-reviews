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

const Block = styled.div`
  width: 270px;
  height: 102px;
  background: gray;
`;

var SingleRoomTip = (props) => (

  <Wrapper>
    <div>
      <img src={props.data.UserPicture} width="48px" height="48px" /> {props.data.Username} wrote a tip {props.data.TipDate}
    </div>
    <div>    
      Location: {props.data.UserLocation} | {props.data.UserContributions} contributions | {props.data.UserHelpfulVotes} helpful votes
    </div>
    <div>
      Tip Rating: {props.data.TipRating} / 5
    </div>
    <div>
      <p>"{props.data.TipDescription}"</p>
    </div>
  </Wrapper>

);

export default SingleRoomTip;
