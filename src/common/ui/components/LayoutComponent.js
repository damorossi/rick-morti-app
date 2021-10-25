import React from 'react';
import ListComponent from '../../../components/ListComponent';

import './layout.scss';

const LayoutComponent = (props) => {
	return (
		<div className="main">
			<ListComponent user={props.user} />
		</div>
	);
};

export default LayoutComponent;
