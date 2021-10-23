import * as services from '../../utils/clientApi.service';
import types from '../types';
import { uiStartLoading, uiFinishLoading } from './uiActions';

// FIXME: Fix user data, Must define the data that will be stored and provided.
// this is just a start login mocked with a req.res api
export const startLogin = (email, password) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(uiStartLoading());
			services
				.login(email, password)
				.then(({ user, token }) => {
					const userData = { _id: user._id, displayName: user.username, email: user.email, token };
					dispatch(login(userData));
					services.saveUserData(userData);
					dispatch(uiFinishLoading());
				})
				.catch((e) => {
					// TODO define if im going to use a swetalert or a toast
					// so far the sweet alert is easier and faster.
					console.error('->', e);
					dispatch(uiFinishLoading());
				});
		}, 1);
	};
};

export const login = ({ _id, displayName, email, token }) => {
	return {
		type: types.login,
		payload: {
			_id,
			displayName: displayName,
			email,
			token
		}
	};
};
