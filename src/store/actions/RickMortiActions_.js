import * as services from '../../utils/clientApi.service';
import types from '../types';

import { uiStartLoading, uiFinishLoading } from './uiActions';

export const startFetchs = (pageNumber) => {
	console.log(pageNumber);
	return (dispatch) => {
		dispatch(uiStartLoading());
		services
			.fetchApiData(pageNumber)
			.then((data) => {
				dispatch(loadCharacters(data));
				dispatch(uiFinishLoading());
			})
			.catch((e) => {
				console.error(e);
				dispatch(uiFinishLoading());
			});
	};
};

export const loadCharacters = ({ results, info }) => {
	return {
		type: types.loadCharacters,
		payload: {
			isLoading: false,
			items: results,
			info: {
				next: info.next,
				prev: info.prev,
				pages: info.pages
			}
		}
	};
};
