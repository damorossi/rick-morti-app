import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store';

function render(ui, { initialState, ...renderOptions } = {}) {
	function Wrapper({ children }) {
		return (
			<Provider store={configureStore(initialState)}>
				<Router>{children}</Router>
			</Provider>
		);
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
