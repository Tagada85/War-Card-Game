import React from 'react';

function Card(props){
	let id;
	if(props.player == 'one'){
		id = 'playerOneCard';
	}else{
		id = 'playerTwoCard';
	}
	return (
		<div className="card">
			<img id={id} src={props.cardName} />
		</div>
	)
}

export default Card;