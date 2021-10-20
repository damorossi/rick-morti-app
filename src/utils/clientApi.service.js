const baseUrl = 'https://reqres.in/api/';

// FIXME: This is mocked data to succeed on reqres api (mocked data, real response)
export async function login(user, password) {
    const data = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return await fetch(`${baseUrl}login`, requestOptions)
    .then(response => response.json())
    .then(data)
    .catch(e => {
        console.error(e);
    });
}


export const saveUserData = (user) => {
    window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
    );
}
