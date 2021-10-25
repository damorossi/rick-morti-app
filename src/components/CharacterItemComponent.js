import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/RickMortiActions_';
import './character.scss';
import CharacterDetailComponent from './CharacterDetailComponent';

const CharacterItemComponent = ({ character, isSelected }) => {
	const { name, status, species, image } = character;
	const dispatch = useDispatch();
	const [displayDetail, setDisplayDetail] = useState(false);
	const user_id = useSelector((state) => {
		return state.auth._id;
	});

	const itemDbId = useSelector((state) => {
		if (isSelected) {
			return state.characters.favorites.find((x) => x.id === character.id)._id;
		}
		return null;
	});

	const handleDisplayDetail = () => {
		setDisplayDetail(!displayDetail);
	};

	const onHandleSwitch = () => {
		isSelected = !isSelected;
		if (!isSelected) {
			dispatch(actions.unsetFavorite(itemDbId));
		} else {
			dispatch(actions.setFavorite(character, user_id));
		}
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
			<span
				data-testid="switcher"
				className={`switch-container ${isSelected && 'active'}`}
				onClick={onHandleSwitch}
				title="toggle-favourite"
			>
				<span className="switch-slider"></span>
			</span>
			<button className="character-seeDetails" onClick={handleDisplayDetail}>
				See more
			</button>
			{displayDetail && <CharacterDetailComponent character={character} handleClose={handleDisplayDetail} />}
		</div>
	);
};

export default CharacterItemComponent;
