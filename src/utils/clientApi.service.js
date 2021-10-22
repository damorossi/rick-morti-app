const baseUrl = 'https://reqres.in/api/';

const apiEndpoint = 'https://rickandmortyapi.com/api/character/';

// FIXME: This is mocked data to succeed on reqres api (mocked data, real response)
export async function login(user, password) {
	const data = {
		email: 'eve.holt@reqres.in',
		password: 'cityslicka'
	};
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	};

	return await fetch(`${baseUrl}login`, requestOptions)
		.then((response) => response.json())
		.then(data)
		.catch((e) => {
			console.error(e);
		});
}

export async function fetchApiData({ currentPage } = '1') {
	const page = `${apiEndpoint}?page=${currentPage}`;
	return await fetch(`${page}`)
		.then((response) => response.json())
		.catch((e) => {
			console.error(e);
		});
}

export const saveUserData = (user) => {
	window.localStorage.setItem('loggedUser', JSON.stringify(user));
};
