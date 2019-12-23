const TOKEN_KEY = 'jwt';
export function authHeader() {
    // return authorization header with basic auth credentials
    let data = JSON.parse(localStorage.getItem(TOKEN_KEY));

    if (data.token) {
        return { 
            'content-type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + data.token };
    } else {
        return {};
    }
}