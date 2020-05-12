import React from 'react';
import styled from 'styled-components';

// STYLED COMPONENTS 
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

const SearchBar = styled.div`
  width: 810px;
  height: 40px;
  background: white;
  margin-top: 20px;
  margin-bottom: 20px
  text-align: left;
`;

var FilterHead = (props) => (

  <div>
    <Wrapper>
      <Block onClick={(event) => { props.toggleDisplay('reviews'); }}>
        <p>REVIEWS</p>
      </Block>
      <Block onClick={(event) => { props.toggleDisplay('qas'); }}>
        <p>Q & A</p>
      </Block>
      <Block onClick={(event) => { props.toggleDisplay('roomtips'); }}>
        <p>Room Tips</p>
      </Block>    
    </Wrapper>
    <div>
      <SearchBar><p>Search</p></SearchBar>
    </div>
  </div>
  

);

export default FilterHead;