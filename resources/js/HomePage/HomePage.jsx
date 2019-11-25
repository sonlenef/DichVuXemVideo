import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../_services';
import { YouTubePlayer } from '../_services/YouTubePlayer';

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
            <div>
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm" id="mainNav">
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

                <div className="home-content">
                    <section className="banner" id="banner">
                        <div className="content">
                            <h1>Dịch Vụ Xem Video</h1>
                            <a href="#acoustic">Start</a>
                        </div>
                    </section>
                    <section className="blog-post" id="acoustic">
                        <div className="head-post">
                            <div className="post">
                                <img src="/images/acoustic.jpg"/>
                                <a href="#banner" className="btn prev">Prev</a>
                                <a href="#indie" className="btn next">Next</a>
                                <div className="post-title">Acoustic</div>
                                <div class="scroll-btn">
                                    <div class="scroll-bar">
                                        <a href="#body-acoustic"><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="main-content" id="body-acoustic">
                            <YouTubePlayer videoId="dLQe4qEfVJw"/>
                        </section>
                    </section>
                    <section className="blog-post" id="indie">
                        <div className="head-post">
                            <div className="post">
                                <img src="/images/indie.jpg"/>
                                <a href="#acoustic" className="btn prev">Prev</a>
                                <a href="#banner" className="btn next">End</a>
                                <div className="post-title">Indie</div>
                                <div class="scroll-btn">
                                    <div class="scroll-bar">
                                        <a href="#body-indie"><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="main-content" id="body-indie">
                            <YouTubePlayer videoId="EUEUZDV-in0"/>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

export { HomePage };