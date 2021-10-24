import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import NavbarComponent from '../common/ui/components/NavbarComponent';

export const PrivateRoute = ({ user, isAuthenticated, component: Component, ...rest }) => {
	return (
		<div className="main">
			<NavbarComponent user={user} />
			<Route
				{...rest}
				component={(props) => (isAuthenticated ? <Component {...props} user={user} /> : <Redirect to="/auth/login" />)}
			/>
		</div>
	);
};

PrivateRoute.propTypes = {
	user: PropTypes.shape({
		uid: PropTypes.string,
		name: PropTypes.string
	}),
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired
};
