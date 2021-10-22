import React from 'react';
import './navbar.scss';

const NavbarComponent = ({ user }) => {
	const logout = () => {
		console.log('shutting of');
	};
	const sections = [
		{
			sectionName: 'Characters',
			link: 'dashboard'
		},
		{
			sectionName: 'Favs',
			link: 'favorites'
		}
	];
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src="http://api.damianrossi.com/dist/img/logo.png" alt="Created by Damian Rossi" />
			</div>
			<ul className="navbar-navigation">
				{sections.map((section) => (
					<li className="navbar-linkContainer" key={section.sectionName}>
						<a className="navbar-link">{section.sectionName}</a>
					</li>
				))}
			</ul>
			<ul className="navbar-navigation">
				<li className="navbar-linkContainer">
					<span>Welcome, {user?.name}</span>
				</li>
				<li className="navbar-linkContainer">
					<button type="submit" className="navbar-logout" onClick={logout()}>
						<i className="logout fa fa-power-off" aria-hidden="true"></i>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarComponent;
