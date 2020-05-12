import React from 'react';
import SingleRoomTip from './SingleRoomTip.jsx';

var RoomTipsList = (props) => (
  
  <div>
    {props.data.map((element, i) => (      
      <div key={i}><SingleRoomTip data={element} /></div>
    ))}

  </div>

);

export default RoomTipsList;