import React from 'react';

var SingleRoomTip = (props) => (

  <div>
    <p>{props.data.Username} wrote a tip {props.data.TipDate}</p>
    <p>{props.data.TipDescription}</p>
  </div>

);

export default SingleRoomTip;
