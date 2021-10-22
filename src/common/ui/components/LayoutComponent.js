import React from 'react';
import ListComponent from '../../../components/ListComponent';
import NavbarComponent from './NavbarComponent';

const LayoutComponent = (props) => {
	return (
		<div>
			<NavbarComponent user={props.user} />
			<ListComponent />
		</div>
	);
};

export default LayoutComponent;
