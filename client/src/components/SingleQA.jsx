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

const QAuthorAvatar = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

const QAuthorInfo = styled.div`
  display: block;
  margin-top: 5px;
  margin-left: 25px;  
  font-size: 14px;
`;

const QAuthorHeader = styled.div` 
  margin-bottom: 5px;
  display: flex;
`;

const QAuthorName = styled.div` 
  display: flex;
  margin-right: 5px;

  &:hover {    
    text-decoration: underline;  
  }  
`;

const QuestionHeader = styled.div`
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 25px;  
  display: flex;
`;

const QBody = styled.div`
  padding-top: 2px;
`;

const QBodyText = styled.div`
  margin-left: 35px;  
  font-size: 18px;
`;

const AnswerWrapper = styled.div`
  border-top: 1px;
  border-bottom: 1px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;
  border-radius: 2px;
  border-color: gray;
`;

const AnswerHeader = styled.div`
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 25px;  
  display: flex;
`;

const AAuthorAvatar = styled.div`
  overflow: hidden;
  border-radius: 50%;
`;

const AAuthorHeader = styled.div` 
  margin-bottom: 5px;
  display: flex;
`;

const ABelowHeader = styled.div` 
  margin-left: 25px;
`;

const AAuthorInfo = styled.div`
  display: block;
  margin-top: 5px;
  margin-left: 25px;  
  font-size: 14px;
`;

const AAuthorName = styled.div` 
  display: flex;
  margin-left: 5px;

  &:hover {    
    text-decoration: underline;  
  }  
`;

const ABodyText = styled.div`
  margin-left: 55px;  
  margin-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
`;

const ResponseArea = styled.div`
  margin-left: 35px;  
  margin-right: 15px;
  margin-top: 15px;
  padding-bottom: 15px;
`;

var SingleQA = (props) => (

  <Wrapper>
    <QuestionHeader>
      <QAuthorAvatar>
        <img src={props.data.QUserPicture} width="48px" height="48px" />
      </QAuthorAvatar>
      <QAuthorInfo>
        <QAuthorHeader>
          <QAuthorName><strong>{props.data.QUsername}</strong></QAuthorName> asked a question {props.data.QDate}
        </QAuthorHeader>
        
        <div>    
          <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-location.png' width="10px" height="14px" /> {props.data.QLocation} &bull; {props.data.QNumContributions} contributions
        </div>
      </QAuthorInfo>
    </QuestionHeader>
    <QBody>
      <QBodyText>
        <p>{props.data.QDescription}</p>
      </QBodyText>
    </QBody>
    <AnswerWrapper>
      <AnswerHeader>
        <AAuthorAvatar>
          <img src={props.data.AUserPicture} width="24px" height="24px" />
        </AAuthorAvatar>
        <AAuthorInfo>
          <AAuthorHeader>
          Answer from <AAuthorName><strong> {props.data.AUsername} </strong></AAuthorName> 
          </AAuthorHeader>
        </AAuthorInfo>
      </AnswerHeader>
      <ABodyText>
        {props.data.ADescription}
      </ABodyText>
    </AnswerWrapper>
    <ResponseArea>
      <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-profile.png' width="25px" height="25px"/>
      <input type="text" name="responsebox" placeholder="Answer question" style={{ width: '715px', height: '48px', borderRadius: '1px', borderWidth: '1px' }} />
    </ResponseArea>
  </Wrapper>

);

export default SingleQA;