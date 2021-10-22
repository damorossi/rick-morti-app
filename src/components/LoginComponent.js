import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../store/actions/loginAction';
import { useForm } from '../utils/hooks/useForm';
import './login.scss';

const LoginComponent = () => {
	const dispatch = useDispatch();
	const [formValues, handleInputChange] = useForm({
		email: 'eve.holt@reqres.in',
		password: 'cityslicka'
	});

	const { isLoading } = useSelector((state) => {
		return state.ui;
	});
	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLogin(email, password));
	};
	return (
		<>
			<div className="login_container">
				<div className="loginComponent">
					<div className="loginComponent-img">
						<img
							src="https://rickandmortyapi.com/api/character/avatar/370.jpeg"
							alt="login in rick and morti"
							width="180"
						/>
						<h3 className="">Login</h3>
					</div>

					<form onSubmit={handleLogin} className="loginComponent-form">
						<label className="loginComponent-label">
							<input
								type="text"
								placeholder="Email"
								name="email"
								className="loginComponent-inputText"
								autoComplete="off"
								value={email}
								onChange={handleInputChange}
							/>
						</label>
						<label className="loginComponent-label">
							<input
								type="password"
								placeholder="Password"
								name="password"
								className="loginComponent-inputText"
								value={password}
								onChange={handleInputChange}
							/>
						</label>
						<button disabled={isLoading} type="submit" className="loginComponent-submit">
							Login
						</button>
						{/* TODO:; Create register */}
						<Link to="/auth/register" className="link">
							Create new account
						</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginComponent;
