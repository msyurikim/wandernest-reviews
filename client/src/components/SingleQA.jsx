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

var SingleQA = (props) => (

  <Wrapper>
    <div>
      <img src={props.data.QUserPicture} width="48px" height="48px" /> {props.data.QUsername} asked a question {props.data.QDate}
    </div>
    <div>    
      Location: {props.data.QLocation} | {props.data.QNumContributions} contributions
    </div>
    <div>
      <p>"{props.data.QDescription}"</p>
    </div>
    <div>
      <img src={props.data.AUserPicture} width="48px" height="48px" /> {props.data.AUsername} provided an answer:
    </div>
    <div>
      <p>"{props.data.QDescription}"</p>
    </div>
  </Wrapper>

);

export default SingleQA;