import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/RickMortiActions_';
import LoadingComponent from './LoadingComponent';
import CharacterItemComponent from './CharacterItemComponent';
import './list.scss';

const FavoriteListComponent = ({ user }) => {
	const dispatch = useDispatch();
	const items = useSelector((state) => {
		return state.characters.favorites;
	});

	useEffect(() => {
		if (!items || items.length === 0) {
			dispatch(actions.retrieveFavorites(user._id));
		}
	}, [dispatch, items]);

	const { isLoading } = useSelector((state) => {
		return state.ui;
	});

	return (
		<>
			<section className="characters-container">
				<div className="characters-items">
					{isLoading ? (
						<LoadingComponent />
					) : (
						items.map((character) => {
							return (
								<CharacterItemComponent
									isSelected={true}
									character={character}
									key={`${character.name}-${character.id}`}
								/>
							);
						})
					)}
				</div>
			</section>
		</>
	);
};

export default FavoriteListComponent;
