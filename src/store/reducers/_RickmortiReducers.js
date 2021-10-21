import types from '../types';

const initialState = {
	isLoading: false,
	items: [],
	paginInfo: {
		next: null,
		prev: null
	}
};

export const _RickmortiReducers = (state = initialState, action) => {
	switch (action.type) {
		case types.loadCharacters:
			return {
				...state,
				isLoading: action.payload.isLoading,
				items: action.payload.items,
				paginInfo: action.payload.info
			};
		default:
			return state;
	}
};
