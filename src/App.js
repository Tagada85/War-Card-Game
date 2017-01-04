import React from 'react';
import './App.css';
import PlayerZone from './components/PlayerZone';
import Board from './components/Board';
import Scores from './components/Scores';

const CARDS = ['D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK', 'DA',
                'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK', 'CA',
                'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK', 'HA',
                'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK', 'SA']

const App= React.createClass({
    getInitialState: function(){
        return {
            playerOne: {
                'numberOfCards': 26,
                'wins': 0,
                'cards': []
            },
            playerTwo: {
                'numberOfCards': 26,
                'wins': 0,
                'cards' : []
            }
        }
    },
    distributeCardsAtBeginningOfGame: function(){
        let deck = this.shuffle(CARDS);
        console.log(deck);
        return true;
    },
    shuffle: function(cards){
        let currIdx = cards.length, temporaryValue, randomIdx;

        while(0 !== currIdx){
            randomIdx = Math.floor(Math.random() * currIdx);
            currIdx -= 1;

            temporaryValue = cards[currIdx];
            cards[currIdx] = cards[randomIdx];
            cards[randomIdx] = temporaryValue;
        }

        return cards;
    },
    playTurn: function(){
        this.state.playerOne.numberOfCards--;
        this.setState(this.state);
    },
  render: function(){
    return (
        <div className='App'>
            <button onClick={this.distributeCardsAtBeginningOfGame}>Start</button>
            <Scores 
                scorePlayerOne={this.state.playerOne.wins} 
                scorePlayerTwo={this.state.playerTwo.wins} />
            <PlayerZone id='one' name="Player One" numberOfCards={this.state.playerOne.numberOfCards} playTurn={this.playTurn}/>
            <Board />
            <PlayerZone id='two' name="Player Two" numberOfCards={this.state.playerTwo.numberOfCards} playTurn={this.playTurn}/>
      </div>
    );
    }
});

export default App;
