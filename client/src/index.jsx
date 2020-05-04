import React from 'react';
import ReactDOM from 'react-dom';

import FilterHead from './components/FilterHead.jsx';
import ReviewList from './components/ReviewList.jsx';
import QAList from './components/QAList.jsx';
import RoomTipsList from './components/RoomTipsList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: {},
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
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