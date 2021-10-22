import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route exact path="/auth/login" component={LoginComponent} />
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</div>
	);
};
