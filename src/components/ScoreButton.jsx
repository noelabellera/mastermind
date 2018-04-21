import React from 'react';

const ScoreButton = (props) => {
    return (
        <button onClick={() => props.handleScoreClick() }>Score BTN</button>
    )
}

export default ScoreButton;