import React from 'react';
//import ima from './ima.jpg';

/*const Card = () => {
	return (
		<div className='br-light-green'>
			<img alt='foto' src={ima}  style={{ width: "200px", height: "200px" }} />
			<div>
				<h2>Feijao Dhoe</h2>
				<p>feijoa.dhoe@gmail.com</p>
			</div>
		</div>
	);
}*/

const Card = ({ name, email, id }) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-3'>
			<img alt='foto' src={`https://robohash.org/${id+2}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
