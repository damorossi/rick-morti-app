import React from 'react';
import './character.scss';

const CharacterItemComponent = ({ name, status, species, image }) => {
	return (
		<div className="character-itemContainer">
			<div className="character-itemHeader">
				<figure className="character-imageContainer">
					<img src={image} title={name} alt={name} />
				</figure>
				<h3 className="character-name">{name} </h3>
			</div>
			<div className="character-itemContent">
				<p>
					Status: <strong> {status} </strong>
				</p>
				<p>
					Species: <strong> {species} </strong>
				</p>
			</div>
		</div>
	);
};

export default CharacterItemComponent;
