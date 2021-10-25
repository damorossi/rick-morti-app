import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../store/actions/RickMortiActions_';
import LoadingComponent from './LoadingComponent';
import CharacterItemComponent from './CharacterItemComponent';
import PaginatorComponent from '../common/ui/components/PaginatorComponent';
import './list.scss';

const ListComponent = ({ user }) => {
	const dispatch = useDispatch();
	const { items, favorites } = useSelector((state) => {
		return state.characters;
	});

	useEffect(() => {
		if (!items || items.length === 0) {
			dispatch(actions.startFetchs());
			dispatch(actions.retrieveFavorites(user._id));
		}
	}, [dispatch, items, user]);

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
									isSelected={favorites.some((x) => x.id === character.id)}
									character={character}
									key={`${character.name}-${character.id}`}
								/>
							);
						})
					)}
				</div>
			</section>
			<PaginatorComponent />
		</>
	);
};

export default ListComponent;
