import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { login } from '../store/actions/loginAction';
import ListComponent from '../components/ListComponent';
import LoadingComponent from '../components/LoadingComponent';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [isLogedIn, setIsLogedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		const loggedUserJSON = window.localStorage.getItem('loggedUser');
		if (loggedUserJSON) {
			const logedUser = JSON.parse(loggedUserJSON);
			if (logedUser?.uid) {
				dispatch(login(logedUser));
				setIsLogedIn(true);
			}
		} else {
			setIsLogedIn(false);
		}
		setIsLoading(false);
	}, [dispatch, setIsLoading, setIsLogedIn]);

	const logedUser = useSelector((state) => {
		return state.auth;
	});

	return (
		<Router>
			<div>
				{isLoading && <LoadingComponent />}
				<Switch>
					<PublicRoute path="/auth" isAuthenticated={logedUser?.uid !== '' || isLogedIn} component={AuthRouter} />

					<PrivateRoute exact path="/" isAuthenticated={logedUser?.uid !== '' || isLogedIn} component={ListComponent} />

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
