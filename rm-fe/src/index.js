import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.scss';

import reportWebVitals from './reportWebVitals';
import { AppRouter } from './routes/AppRouting';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={configureStore()}>
			<AppRouter />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
