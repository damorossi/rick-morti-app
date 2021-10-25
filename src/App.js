/*import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login } from './store/actions/loginAction';
import ListComponent from './components/ListComponent';
import LoginComponent from './components/LoginComponent';
import LoadingComponent from './components/LoadingComponent';
import NavbarComponent from './common/ui/components/NavbarComponent';

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
	}, []);

	const { isLoading } = useSelector((state) => {
		return state.ui;
	});

	return (
		<div className="App">
			{isLoading && <LoadingComponent />}
			{user ? (
				<>
					<NavbarComponent user={user} />
					<ListComponent />
				</>
			) : (
				<LoginComponent />
			)}
		</div>
	);
}

export default App;
*/
