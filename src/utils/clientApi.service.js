// const baseUrl = 'https://reqres.in/api/';
const baseUrl = 'http://localhost:4000/api/';

// const apiEndpoint = 'https://rickandmortyapi.com/api/character/';
const apiEndpoint = 'http://localhost:4000/api/';

// FIXME: This is mocked data to succeed on reqres api (mocked data, real response)
export async function login(email, password) {
	const data = {
		email,
		password
	};

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	};

	return await fetch(`${baseUrl}auth/signup`, requestOptions)
		.then((response) => response.json())
		.then(data)
		.catch((e) => {
			console.error(e);
		});
}

export async function fetchApiData(pageNumber = '1') {
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json', Accept: '*/*' }
	};
	const page = `${apiEndpoint}chars/fetch/${pageNumber}`;
	return await fetch(`${page}`, requestOptions)
		.then((response) => response.json())
		.catch((e) => {
			console.error(e);
		});
}

export async function saveFavorite(item) {
	const { token } = JSON.parse(window.localStorage.getItem('loggedUser'));
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: '*/*' },
		Authorization: `Bearer ${token}`,
		body: JSON.stringify(item)
	};

	const postPage = `${apiEndpoint}chars/create/`;
	const data = await fetch(`${postPage}`, requestOptions)
		.then((response) => response.json())
		.catch((e) => {
			console.error(e);
		});
	return data;
}

export const saveUserData = (user) => {
	window.localStorage.setItem('loggedUser', JSON.stringify(user));
};
