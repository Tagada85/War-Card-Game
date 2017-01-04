import React from 'react';

function PlayerZone(props){
    return (
        <div className={props.name == 'Player One' ? 'one' : 'two'}>
            <h1>Player Zone of {props.name}</h1>
            <p>Cards Left: {props.numberOfCards}</p>
            <button onClick={props.playTurn}>Go</button>
            </div>
    );
};

export default PlayerZone;
