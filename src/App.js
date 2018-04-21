import React, { Component } from 'react';
import GamePage from './components/GamePage';

let colorTable = [
  {name: 'Easy', colors: ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD']},
  {name: 'Moderate', colors: ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD', '#B7D968']},
  {name: 'Difficult', colors: ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD', '#B7D968', '#555E7B']}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      {difficultyLevel: 0, colors: colorTable[0].colors},
      this.getInitialState()
    );
  }

  /*----- Helper Methods ------*/

  getInitialState() {
    let colorIdx = (this.state && this.state.difficultyLevel) || 0;
    return {
      code: this.genCode(colorTable[colorIdx].colors.length),
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      elapsedTime: 0,
      finalTime: 0
    };
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode(size) {
    return new Array(4).fill().map(dummy => Math.floor(Math.random() * size));
  }

  setDifficulty = (level) => {
    this.setState({
      difficultyLevel: level,
      colors: colorTable[level].colors
    });
  }

  handleScoreClick = () => {
    console.log('This is the score button');
  }


  render() {
    return (
      <div className="App">
        <h1>Mastermind</h1>
        <GamePage 
          handleScoreClick={this.handleScoreClick}/>
      </div>
    );
  }
}

export default App;
