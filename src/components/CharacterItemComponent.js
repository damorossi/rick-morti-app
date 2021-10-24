import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '../store/actions/RickMortiActions_';
import './character.scss';

const CharacterItemComponent = ({ character }, { isSelected }) => {
	const { name, status, species, image } = character;
	const dispatch = useDispatch();
	const user_id = useSelector((state) => {
		return state.auth._id;
	});

	const onHandleSwitch = () => {
		isSelected = !isSelected;
		dispatch(setFavorite(character, user_id));
	};

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
			<span className={`switch-container ${isSelected && 'active'}`} onClick={onHandleSwitch}>
				<span className="switch-slider"></span>
			</span>
		</div>
	);
};

export default CharacterItemComponent;
