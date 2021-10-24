import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../store/actions/RickMortiActions_';
import LoadingComponent from './LoadingComponent';
import CharacterItemComponent from './CharacterItemComponent';
import './list.scss';

const ListComponent = () => {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => {
		return state.characters;
	});

	useEffect(() => {
		if (!items || items.length === 0) {
			dispatch(actions.startFetchs());
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
							return <CharacterItemComponent character={character} key={`${character.name}-${character.id}`} />;
						})
					)}
				</div>
			</section>
		</>
	);
};

export default ListComponent;
