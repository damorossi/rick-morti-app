import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { login } from '../store/actions/loginAction';
import LoadingComponent from '../components/LoadingComponent';
import LayoutComponent from '../common/ui/components/LayoutComponent';
import FavoriteListComponent from '../components/FavoriteListComponent';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [isLogedIn, setIsLogedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		const loggedUserJSON = window.localStorage.getItem('loggedUser');
		if (loggedUserJSON) {
			const logedUser = JSON.parse(loggedUserJSON);
			if (logedUser?._id) {
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
					<PublicRoute path="/auth" isAuthenticated={logedUser?._id !== '' || isLogedIn} component={AuthRouter} />
					<PrivateRoute
						exact
						path="/"
						isAuthenticated={logedUser?._id !== '' || isLogedIn}
						user={logedUser}
						component={LayoutComponent}
					></PrivateRoute>
					<PrivateRoute
						exact
						path="/characters"
						isAuthenticated={logedUser?._id !== '' || isLogedIn}
						user={logedUser}
						component={LayoutComponent}
					></PrivateRoute>
					<PrivateRoute
						exact
						path="/favorites"
						isAuthenticated={logedUser?._id !== '' || isLogedIn}
						user={logedUser}
						component={FavoriteListComponent}
					></PrivateRoute>
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
