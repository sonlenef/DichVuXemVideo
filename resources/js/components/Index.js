import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';
import RouterPath from './RoutePath';

export default class Index extends Component {
    render() {
        return (
            <HashRouter>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm" id="mainNav">
                            <div className="container">
                                <a className="navbar-brand js-scroll-trigger" href="#">Dịch Vụ Xem Video</a>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/login'}>Login</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div style={{ margin: '100px' }}><RouterPath/></div>
                </div>
            </HashRouter >
        )
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(
        <Index/>,
        document.getElementById('index'));
}