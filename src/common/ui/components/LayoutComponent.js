import React from 'react';
import ListComponent from '../../../components/ListComponent';
import NavbarComponent from './NavbarComponent';
import PaginatorComponent from './PaginatorComponent';
import './layout.scss';

const LayoutComponent = (props) => {
	return (
		<div className="main">
			<ListComponent user={props.user} />
		</div>
	);
};

export default LayoutComponent;
