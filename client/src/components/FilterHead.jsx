import React from 'react';
import styled from 'styled-components';

// STYLED COMPONENTS 
const Wrapper = styled.div`
  display: flex;
  text-align: center;
`;

const Block = styled.div`
width: 270px;
height: 102px;
background: gray;
`;

var FilterHead = (props) => (

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
  

);

export default FilterHead;