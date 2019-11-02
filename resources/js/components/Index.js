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
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                            <div className="container">
                                <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/'}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/about'}>About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/product'}>Product</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/topic'}>Topic</Link>
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