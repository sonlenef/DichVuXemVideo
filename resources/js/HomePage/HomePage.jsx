import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../_services';
import { YouTubePlayer } from '../_services/YouTubePlayer';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            post: {},
            posts: [],
            postss: [],
            show_youtube_1: {},
            show_youtube_2: {},
            video_id: ''
        };
    }

    componentDidMount() {
        this.setState({ 
            user: { loading: true },
            posts: { loading: true },
            postss: { loading: true }
        });
        userService.getUser().then(user => this.setState({ user }));
        // userService.getPosts().then(posts => this.setState({ posts }));
        this.getPosts();
        this.setState({show_youtube_1: false});
        this.setState({show_youtube_2: false});
    }

    getPosts() {      
        userService.getCategoryPosts(1)
        .then((res) => {
            this.setState({ posts: Object.values(JSON.parse(JSON.stringify(res.data)))});
  
         })   
        .catch((err) => { console.log(err); });
        //
        userService.getCategoryPosts(2)
        .then((res) => {
            this.setState({ postss: Object.values(JSON.parse(JSON.stringify(res.data)))});
  
         })   
        .catch((err) => { console.log(err); });
    }

    see_youtube(video_id){
        this.setState({show_youtube_2: false});
        if (!this.state.show_youtube_1) {
            this.setState({show_youtube_1: true});
        }
        this.setState({video_id: video_id});
    }

    see_youtube_2(video_id){
        this.setState({show_youtube_1: false});
        if (!this.state.show_youtube_2) {
            this.setState({show_youtube_2: true});
        }
        this.setState({video_id: video_id});
    }

    render() {
        const { user, posts, postss } = this.state;
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
                                <div className="scroll-btn">
                                    <div className="scroll-bar">
                                        <a href="#body-acoustic"><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="main-content" id="body-acoustic">
                            <div className="content-display">
                                <div className="list-item">
                                    {posts.length &&
                                    <ul className="navbar-nav ml-auto">
                                        {posts.map((post, index) =>
                                            <li key={post.id}>
                                                <button onClick={() => this.see_youtube(post.video_id)}>{post.name}</button>
                                            </li>
                                        )}
                                    </ul>
                                    }
                                </div>
                                {this.state.show_youtube_1 ?
                                    <div className="img-content"><YouTubePlayer videoId={this.state.video_id}/></div>
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
                                <div className="scroll-btn">
                                    <div className="scroll-bar">
                                        <a href="#body-indie"><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="main-content" id="body-indie">
                            <div className="content-display">
                                <div className="list-item">
                                    {postss.length &&
                                    <ul className="navbar-nav ml-auto">
                                        {postss.map((post, index) =>
                                            <li key={post.id}>
                                                <button onClick={() => this.see_youtube_2(post.video_id)}>{post.name}</button>
                                            </li>
                                        )}
                                    </ul>
                                    }
                                </div>
                                {this.state.show_youtube_2 ?
                                    <div className="img-content"><YouTubePlayer videoId={this.state.video_id}/></div>
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