import React, { Component } from 'react';
import GamePage from './components/GamePage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mastermind</h1>
        <GamePage />
      </div>
    );
  }
}

export default App;
