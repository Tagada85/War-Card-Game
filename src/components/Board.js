import React from 'react';
import Card from './Card';

function Board(props){
	return (
		<div className='board'>
			<Card player='one' cardName='./cards/10_of_clubs.png'/>
			<Card player='two' cardName='./cards/5_of_clubs.png'/>
		</div>
	)
}

export default Board;