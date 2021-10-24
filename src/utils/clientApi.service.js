const baseUrl = 'http://localhost:4000/api/';

const apiEndpoint = 'http://localhost:4000/api/';
let token;
if (window.localStorage.getItem('loggedUser')) {
	token = JSON.parse(window.localStorage.getItem('loggedUser')).token;
}

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
	token = JSON.parse(window.localStorage.getItem('loggedUser')).token;
	if (!token || token === undefined) {
		return;
	}
	const requestOptions = {
		method: 'GET',
		Authorization: `Bearer ${token}`,
		headers: { 'Content-Type': 'application/json', Accept: '*/*' }
	};
	const page = `${apiEndpoint}chars/fetch/${pageNumber}`;
	return await fetch(`${page}`, requestOptions)
		.then((response) => {
			if (response.status.toString() === '403') {
				window.localStorage.removeItem('loggedUser');
				window.location.replace('/login');
			}
			return response.json();
		})
		.catch((e) => {
			console.error(e);
		});
}

export async function saveFavorite(item) {
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

export async function getFavorites(userId) {
	if (!token) {
		return;
	}
	const requestOptions = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json', Accept: '*/*' },
		Authorization: `Bearer ${token}`
	};
	const page = `${apiEndpoint}chars/favorites/${userId}`;
	return await fetch(`${page}`, requestOptions)
		.then((response) => response.json())
		.catch((e) => {
			console.error(e);
		});
}

export async function deleteFavorite(id) {
	const requestOptions = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json', Accept: '*/*' },
		Authorization: `Bearer ${token}`
	};

	const postPage = `${apiEndpoint}chars/delete/${id}`;
	const data = await fetch(`${postPage}`, requestOptions)
		.then((response) => {
			return response.json();
		})
		.catch((e) => {
			console.error(e);
		});
	return data;
}

export const saveUserData = (user) => {
	window.localStorage.setItem('loggedUser', JSON.stringify(user));
};
