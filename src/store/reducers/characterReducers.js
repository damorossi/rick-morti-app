import types from '../types';

const initialState = {
	isLoading: false,
	items: [],
	favorites: [],
	paginInfo: {
		pages: null,
		next: null,
		prev: null
	}
};

export const characterReducers = (state = initialState, action) => {
	switch (action.type) {
		case types.loadCharacters:
			return {
				...state,
				isLoading: action.payload.isLoading,
				items: action.payload.items,
				paginInfo: action.payload.info
			};
		case types.setFavorite:
			return {
				...state,
				favorites: action.payload
			};
		case types.unsetFavorite:
			return {
				...state,
				favorites: action.payload.favorites
			};
		default:
			return state;
	}
};
