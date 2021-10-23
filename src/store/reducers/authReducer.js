import types from '../types';

const initialState = {
	_id: '',
	name: 'unidentified',
	email: 'unidentifed'
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.login:
			return {
				_id: action.payload._id,
				name: action.payload.displayName,
				email: action.payload.email,
				token: action.payload.token
			};
		case types.logout:
			return {};
		default:
			return state;
	}
};
