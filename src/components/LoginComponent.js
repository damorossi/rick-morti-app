import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../store/actions/loginAction';

const LoginComponent = () => {
	const dispatch = useDispatch();

	const handleLogin = (e) => {
		dispatch(startLogin('user', 'password'));
	};

	return (
		<div>
			<a className="App-link" target="_blank" onClick={handleLogin} rel="noopener noreferrer">
				Will create here the form
			</a>
		</div>
	);
};

export default LoginComponent;
