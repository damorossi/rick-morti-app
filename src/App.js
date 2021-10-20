import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login, startLogin } from './store/actions/loginAction';

function App() {
  const dispatch = useDispatch();
  
  let user = null;
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      user = JSON.parse(loggedUserJSON);
      dispatch(login(user));
    }
  }, []);

  user = useSelector(state => {
    return state.auth;
  })
  
  const { isLoading } = useSelector( state => 
  {
      return state.ui;
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin('user', 'password'));
 }
 
  return (
    <div className="App">
      <header className="App-header">
        {
          isLoading &&
          (<h3> loading </h3>)
        }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          user.uid === '' && (
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              onClick={ handleLogin }
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          )
        }
      </header>
    </div>
  );
}

export default App;
