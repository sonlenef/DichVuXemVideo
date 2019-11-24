import React from 'react';
import { Link } from 'react-router-dom';

import { userService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        this.setState({ 
            user: { loading: true }
        });
        userService.getUser().then(user => this.setState({ user }));
    }

    render() {
        const { user } = this.state;
        return (
            <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm" id="mainNav">
                            <div className="container">
                                <a className="navbar-brand js-scroll-trigger" href="#">Dịch Vụ Xem Video</a>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/login'}>Logout</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                <div className="col-md-6 col-md-offset-3 home-content">
                    <h1>Hi {user.name}!</h1>
                    <p>You're logged in with React & Basic HTTP Authentication!!</p>
                    <h3>User from secure api end point:</h3>
                    {user.loading && <em>Loading user...</em>}
                        <ul>
                            <li key={user.id}>
                                {user.email}
                            </li>
                        </ul>
                </div>
            </div>
        );
    }
}

export { HomePage };