import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../store/actions/RickMortiActions_';
import LoadingComponent from './LoadingComponent';

const ListComponent = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (!items || items.length === 0) {
			dispatch(actions.startFetchs());
		}
	}, []);

	const { items } = useSelector((state) => {
		return state.characters;
	});

	const { isLoading } = useSelector((state) => {
		return state.ui;
	});

	return (
		<>
			{isLoading ? (
				<LoadingComponent />
			) : (
				<ul>
					{items.map((character) => {
						return <li> {character.name} </li>;
					})}
				</ul>
			)}
		</>
	);
};

export default ListComponent;
