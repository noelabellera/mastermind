import React from 'react';
import ScoreButton from './ScoreButton';

const GamePage = (props) => {
    return(
        <div className="GamePage">
            "This is the GamePage"
            <br />
            <ScoreButton handleScoreClick={props.handleScoreClick} />
        </div>
    )
}

export default GamePage;