import React from 'react';

import { userService } from '../_services';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            name: '',
            email: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { name, email, password } = this.state;

        // stop here if form is invalid
        if (!(name && email && password)) {
            return;
        }

        this.setState({ loading: true });
        userService.signup(name, email, password).then(
            user => {
                const { from } = this.props.location.state || { from: { pathname: "/" } };
                this.props.history.push(from);
            },
            error => this.setState({ error, loading: false })
            );
    }

    render() {
        const { name, email, password, submitted, loading, error } = this.state;
        return (
            <div className="login-page">
                <div className="boxLogin">
                    <h2>SIGN UP</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group-login' + (submitted && !name ? ' has-error' : '')}>
                            <input type="text" className="form-control" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
                            <div className="box-error">
                                {submitted && !name &&
                                    <div className="help-block">Name is required</div>
                                }
                            </div>
                        </div>
                        <div className={'form-group-login' + (submitted && !email ? ' has-error' : '')}>
                            <input type="text" className="form-control" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
                            <div className="box-error">
                                {submitted && !email &&
                                    <div className="help-block">Email is required</div>
                                }
                            </div>
                        </div>
                        <div className={'form-group-login' + (submitted && !password ? ' has-error' : '')}>
                            <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                            <div className="box-error">
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                        </div>
                        <div className="form-group-login">
                            <button className="btn btn-primary" disabled={loading}>Sign Up</button>
                            <div className="login-loading">
                                {loading &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                            </div>
                        </div>
                        <div className="box-error-login">
                            {error &&
                                <div className={'alert-login alert-danger'}>{error}</div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export { SignUpPage }; 