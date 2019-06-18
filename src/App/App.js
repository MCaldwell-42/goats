import React from 'react';
import goats from './goats';
import './App.scss';

class App extends React.Component {
  // data stuff, axios calls, etc - anything that modifies state
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({ goats });
  }

  render() {
    // javascripty things

    return (
      <div className="App">
          <div>Goat Yoga</div>
          {/* <GoatCorral goats={goats}/> */}
      </div>
    );
  }
}

export default App;
