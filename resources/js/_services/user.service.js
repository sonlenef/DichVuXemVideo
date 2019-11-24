import { authHeader } from '../_helpers';
const TOKEN_KEY = 'jwt';

export const userService = {
    login,
    logout,
    getUser
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`/api/login`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // login successful if there's a user in the response
            if (data.token) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                localStorage.setItem(TOKEN_KEY, JSON.stringify(data));
            }

            return data;
        });
}

function logout() {
    // remove user from local storage to log user out
    // let data = JSON.parse(localStorage.getItem(TOKEN_KEY)).token;
    localStorage.removeItem(TOKEN_KEY);
    // if(data){
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: authHeader(),
    //         body: JSON.stringify({ token })
    //     };
    //     return fetch(`/api/logout`, requestOptions).then(handleResponse);
    // }
}

function getUser() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/api/auth`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}