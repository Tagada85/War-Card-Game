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
                'wins': 0,
                'cards': []
            },
            playerTwo: {
                'wins': 0,
                'cards' : []
            }
        }
    },
    distributeCardsAtBeginningOfGame: function(){
        let deck = this.shuffle(CARDS);
        for (let i  = 0; i < deck.length; i++) {
            if (i % 2 == 0) {
                this.state.playerOne.cards.push(deck[i]);
            }else{
                this.state.playerTwo.cards.push(deck[i]);
            }
        }

        this.setState(this.state);
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
    componentWillMount() {
      this.distributeCardsAtBeginningOfGame();
    },
  render: function(){
    return (
        <div className='App' >
            <Scores 
                scorePlayerOne={this.state.playerOne.wins} 
                scorePlayerTwo={this.state.playerTwo.wins} />
            <PlayerZone id='one' name="Player One" numberOfCards={this.state.playerOne.cards.length} cards={this.state.playerOne.cards} />
            <Board />
            <PlayerZone id='two' name="Player Two" numberOfCards={this.state.playerTwo.cards.length} cards={this.state.playerTwo.cards} />
      </div>
    );
    }
});

export default App;
