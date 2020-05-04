import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import FilterHead from './components/FilterHead.jsx';
import ReviewList from './components/ReviewList.jsx';
import QAList from './components/QAList.jsx';
import RoomTipsList from './components/RoomTipsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      qaData: [],
      roomTipData: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
    this.getReviewData();
    this.getQAData();
    this.getRoomTipData();
  }

  getReviewData (reviewID) {

    reviewID = 1;

    $.ajax({
      type: 'GET',
      url: `/reviews/?id=${reviewID}`,
      success: (data) => {
        //console.log(data);
        this.setState({reviewData: data});
        console.log('CURRENT STATE reviewData:');
        console.log(this.state.reviewData);

      }
    });

  }

  getQAData (qaID) {

    qaID = 1;

    $.ajax({
      type: 'GET',
      url: `/qas/?id=${qaID}`,
      success: (data) => {
        //console.log(data);
        this.setState({qaData: data});
        console.log('CURRENT STATE qaData:');
        console.log(this.state.qaData);

      }
    });

  }

  getRoomTipData (roomtipID) {

    roomtipID = 1;

    $.ajax({
      type: 'GET',
      url: `/roomtips/?id=${roomtipID}`,
      success: (data) => {
        //console.log(data);
        this.setState({roomTipData: data});
        console.log('CURRENT STATE roomTipData:');
        console.log(this.state.roomTipData);

      }
    });

  }

  render () {

    return (
      <div>
        <div>
          <p>App - index.jsx</p>
        </div>

        <div>
          <FilterHead />
          <ReviewList />
          <RoomTipsList />
          <QAList />
          
        </div>
      </div>
    );
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));