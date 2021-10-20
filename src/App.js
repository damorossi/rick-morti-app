import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login } from './store/actions/loginAction';
import LoginComponent from './components/LoginComponent';

function App() {
	const dispatch = useDispatch();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedUser');
		if (loggedUserJSON) {
			const logedUser = JSON.parse(loggedUserJSON);
			setUser(logedUser);
			dispatch(login(logedUser));
		}
	});

	const { isLoading } = useSelector((state) => {
		return state.ui;
	});

	return (
		<div className="App">
			<header className="App-header">
				{isLoading && <h3> loading </h3>}
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				{!user && <LoginComponent />}
			</header>
		</div>
	);
}

export default App;
