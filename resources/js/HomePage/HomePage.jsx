import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../_services';
import { YouTubePlayer } from '../_services/YouTubePlayer';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            show_youtube_1: {},
            show_youtube_2: {}
        };
    }

    see_youtube(){
        this.setState({show_youtube_2: false});
        this.state.show_youtube_1 ? this.setState({show_youtube_1: false}) : this.setState({show_youtube_1: true});
    }

    see_youtube_2(){
        this.setState({show_youtube_1: false});
        this.state.show_youtube_2 ? this.setState({show_youtube_2: false}) : this.setState({show_youtube_2: true});
    }

    componentDidMount() {
        this.setState({ 
            user: { loading: true }
        });
        userService.getUser().then(user => this.setState({ user }));
        this.setState({show_youtube_1: false});
        this.setState({show_youtube_2: false});
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
                                        <a href="#" className="nav-link js-scroll-trigger">{user.name}</a>
                                    </li>
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
                            <div className="content-display">
                                <div className="list-item">
                                    <ul className="navbar-nav ml-auto">
                                        <li><button onClick={() => this.see_youtube()}>1 Phút</button></li>
                                        <li><button onClick={() => this.see_youtube()}>Nước Mắt Em Lau Bằng Tình Yêu Mới</button></li>
                                        <li><button onClick={() => this.see_youtube()}>1 Phút</button></li>
                                        <li><button onClick={() => this.see_youtube()}>Nước Mắt Em Lau Bằng Tình Yêu Mới</button></li>
                                        <li><button onClick={() => this.see_youtube()}>1 Phút</button></li>
                                        <li><button onClick={() => this.see_youtube()}>Nước Mắt Em Lau Bằng Tình Yêu Mới</button></li>
                                        <li><button onClick={() => this.see_youtube()}>1 Phút</button></li>
                                        <li><button onClick={() => this.see_youtube()}>Nước Mắt Em Lau Bằng Tình Yêu Mới</button></li>
                                        <li><button onClick={() => this.see_youtube()}>1 Phút</button></li>
                                        <li><button onClick={() => this.see_youtube()}>Nước Mắt Em Lau Bằng Tình Yêu Mới</button></li>
                                    </ul>
                                </div>
                                {this.state.show_youtube_1 ?
                                    <div className="img-content"><YouTubePlayer videoId="GQ4F9k4USfA"/></div>
                                    :<img className="img-content" src="/images/acoustic.jpg"/>
                                }
                            </div>
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
                            <div className="content-display">
                                <div className="list-item">
                                    <ul className="navbar-nav ml-auto">
                                        <li><button onClick={() => this.see_youtube_2()}>1 Phút</button></li>
                                        <li><button onClick={() => this.see_youtube_2()}>Nước Mắt Em Lau Bằng Tình Yêu Mới</button></li>
                                    </ul>
                                </div>
                                {this.state.show_youtube_2 ?
                                    <div className="img-content"><YouTubePlayer videoId="EUEUZDV-in0"/></div>
                                    :<img className="img-content" src="/images/indie.jpg"/>
                                }
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}

export { HomePage };