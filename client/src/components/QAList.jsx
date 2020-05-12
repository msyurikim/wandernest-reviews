import React from 'react';
import SingleQA from './SingleQA.jsx';

var QAList = (props) => (

  <div>
    {props.data.map((element, i) => (      
      <div key={i}><SingleQA data={element} /></div>
    ))}

  </div>

);

export default QAList;