import React from 'react';
import Card from './Card'; 

const CardList = ({robos, gatos}) => {
	const robosCardComponent = robos.map((user, i) => {
		return (
			<Card 
				key={i} 
				id={robos[i].id} 
				name={robos[i].name} 
				email={robos[i].email} />
			);
	})
	const gatosCardComponent = gatos.map((user, ga) => {
		return (
			<Card 
				key={ga} 
				id={gatos[ga].id} 
				name={gatos[ga].name} 
				email={gatos[ga].email} />
			);
	})
	return (
	    <div>
	    	{robosCardComponent}, 
	    	{gatosCardComponent}
	    </div>
	);
}

export default CardList;
