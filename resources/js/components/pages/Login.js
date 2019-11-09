import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <form className="boxLogin">
                <h1>Login</h1>
                <input type="text" name="" placeholder="Username" required/>
                <input type="password" name="" placeholder="Password" required/>
                <input type="submit" name="" placeholder="Login"/>
            </form>
        )
    }
}

export default Login