import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import styled from 'styled-components';

import FilterHead from './components/FilterHead.jsx';
import ReviewList from './components/ReviewList.jsx';
import QAList from './components/QAList.jsx';
import RoomTipsList from './components/RoomTipsList.jsx';

// STYLED COMPONENTS 
const Wrapper = styled.div`
  display: flex;
  text-align: center;
`;

const Block = styled.div`
  width: 270px;
  height: 102px;
  background: white;
`;

const Background = styled.div`
  width: 810px;
  background: #f2f2f2;
`;

const PageNavigator = styled.div`
  width: 810px;
  height: 40px;
  background: white;
  margin-top: 20px;
  margin-bottom: 20px
  text-align: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentID: 0,
      reviewData: [],
      qaData: [],
      roomTipData: [],
      showReviews: true,
      showQA: false,
      showRoomTips: false,
    };
  }
  
  // FUNCTIONALITY
  toggleDisplay(name) {
    console.log('toggleDisplay()');
    
    switch (name) {
    case 'reviews':
      this.setState({ showReviews: true, showQA: false, showRoomTips: false, });
      break;

    case 'qas':
      this.setState({ showReviews: false, showQA: true, showRoomTips: false, });
      break;

    case 'roomtips':
      this.setState({ showReviews: false, showQA: false, showRoomTips: true, });
      break;

    default:
      null;
    }
  }

  componentDidMount() {
    console.log('componentDidMount()');
    this.getCurrentURL();
  }

  getCurrentURL() {
    console.log('getCurrentURL()');
    var url = new URL(window.location.href);
    var getID = url.searchParams.get('id');

    this.setState({currentID: getID}, () => {
      //console.log(this.state.currentID);
      this.getReviewData();
      this.getQAData();
      this.getRoomTipData();
    });
    
  }

  getReviewData (reviewID) {

    reviewID = this.state.currentID;

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

    qaID = this.state.currentID;

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

    roomtipID = this.state.currentID;

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

    const { showReviews, showQA, showRoomTips } = this.state;

    let current;

    if (showReviews) { current = <ReviewList data={this.state.reviewData} />; }
    if (showQA) { current = <QAList data={this.state.qaData} />; }
    if (showRoomTips) { current = <RoomTipsList data={this.state.roomTipData} />; }

    return (
      <Background>
        <Wrapper>      

          <div>
            <FilterHead toggleDisplay={this.toggleDisplay.bind(this)} />
            {current}
          </div>

        </Wrapper>
        <PageNavigator>1 | 2 | 3</PageNavigator>
      </Background>
    );
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));