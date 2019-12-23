import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { SignUpPage } from '../SignUpPage';
import { AdminPage } from '../AdminPage';

class App extends React.Component {
    render() {
        return (
                <div>
                        <Router>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/signup" component={SignUpPage} />
                                <PrivateRoute path="/admin" component={AdminPage} />
                            </div>
                        </Router>
                </div>
        );
    }
}

export { App }; 