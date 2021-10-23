import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/RickMortiActions_';
import './paginator.scss';

const PaginatorComponent = () => {
	const dispatch = useDispatch();
	const pageNumber = useSelector((state) => {
		let page = state.characters.paginInfo;
		if (page.next || page.prev) {
			if (page.next) {
				return +page.next.split('=')[1] - 1;
			} else {
				return +page.prev.split('=')[1] + 1;
			}
		} else {
			return 0;
		}
	});
	const totalPages = useSelector((state) => {
		return state.characters.paginInfo.pages;
	});
	const go = () => {
		dispatch(actions.startFetchs(pageNumber + 1));
	};

	const goback = () => {
		dispatch(actions.startFetchs(pageNumber - 1));
	};

	return (
		<div className="paginator-container">
			{pageNumber > 1 && (
				<button className="paginator-button" onClick={goback}>
					Prev
				</button>
			)}
			<span className="paginator-indicator">{pageNumber}</span>
			{pageNumber < totalPages && (
				<button className="paginator-button" onClick={go}>
					Next
				</button>
			)}
		</div>
	);
};

export default PaginatorComponent;
