import React from 'react';
import ReactDOM from 'react-dom';

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
        <p>App - index.jsx</p>
      </div>
    );
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));