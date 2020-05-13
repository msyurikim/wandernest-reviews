import React from 'react';
import styled from 'styled-components';

// STYLED COMPONENTS 
const SearchBar = styled.div`
  width: 810px;
  height: 40px;
  background: white;
  margin-top: 20px;
  margin-bottom: 20px
  text-align: left;
  align-content: left;

  &:hover {    
    border: 1px;
    border-style: solid;
    border-radius: 2px;
  }

`;

const Wrapper = styled.div`
  display: flex;
  text-align: center;  
`;

const Block = styled.div`  
  width: 269px;
  height: 102px;
  background: white;
  border: 1px;
  border-style: solid;  
`;

const Icon = styled.div`  
  margin-top: 15px;
`;


var FilterHead = (props) => (

  <div>
    <Wrapper>
      
      <Block onClick={(event) => { props.toggleDisplay('reviews'); }} style={{borderTop: props.showReviews ? '3px solid black' : '1px solid black'}}>
        <Icon>
          <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-reviews.png' width="28px" height="28px" />
          <p>Reviews</p>
        </Icon>
      </Block>

      <Block onClick={(event) => { props.toggleDisplay('qas'); }} style={{borderTop: props.showQA ? '3px solid black' : '1px solid black'}}>
        <Icon>
          <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-qa.png' width="28px" height="28px" />
          <p>Q+A</p>
        </Icon>
      </Block>     

      <Block onClick={(event) => { props.toggleDisplay('roomtips'); }} style={{borderTop: props.showRoomTips ? '3px solid black' : '1px solid black'}}>
        <Icon>
          <img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-tips.png' width="28px" height="28px" />
          <p>Room tips</p>
        </Icon>
      </Block>    
      
    </Wrapper>
    <div>
      <SearchBar><img src='https://wandernest-reviews.s3-us-west-1.amazonaws.com/icons/icon-search.png' width="32px" height="32px" /> Search</SearchBar>
    </div>
  </div>
  

);

export default FilterHead;