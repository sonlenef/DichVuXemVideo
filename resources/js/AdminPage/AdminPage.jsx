import React from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../_services';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            title: '',
            description: '',
            video_id: '',
            category_id: '',
            submitted: false,
            loading: false,
            error: '',
            category: {},
            categories: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    componentDidMount() {
        this.setState({ 
            user: { loading: true },
            category: { loading: true }
        });
        userService.getUser().then(user => this.setState({ user }));
        userService.getAllCategory().then((res) => {
            this.setState({ categories: Object.values(JSON.parse(JSON.stringify(res.data)))});
  
         })   
        .catch((err) => { console.log(err); });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { title, description, video_id, category_id } = this.state;

        // stop here if form is invalid
        if (!(title && video_id && category_id)) {
            return;
        }

        this.setState({ loading: true });
        userService.addPost(title, description, video_id, category_id)
            .then(
                category => {
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(from);
                    },
                error => this.setState({ error, loading: false })
            );
    }

    render() {
        const { user, title, description, video_id, category_id, submitted, loading, error, category, categories } = this.state;
        return (
            <div>
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm" id="mainNav">
                        <div className="container">
                            <a className="navbar-brand js-scroll-trigger" href="/">Dịch Vụ Xem Video</a>
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
                            <div className="form-addvideo">
                                <h2>Thêm Video</h2>
                                <form name="form" onSubmit={this.handleSubmit}>
                                    <div className={'form-group-add' + (submitted && !title ? ' has-error' : '')}>
                                        <input type="text" className="form-control" name="title" placeholder="Title" value={title} onChange={this.handleChange} />
                                        <div className="box-error">
                                            {submitted && !title &&
                                                <div className="help-block">Title is required</div>
                                            }
                                        </div>
                                    </div>
                                    <div className={'form-group-add' + (submitted && !description ? ' has-error' : '')}>
                                        <input type="text" className="form-control" name="description" placeholder="Description" value={description} onChange={this.handleChange} />
                                        <div className="box-error">
                                            {submitted && !description &&
                                                <div className="help-block">Description is required</div>
                                            }
                                        </div>
                                    </div>
                                    <div className={'form-group-add' + (submitted && !video_id ? ' has-error' : '')}>
                                        <input type="text" className="form-control" name="video_id" placeholder="VideoId" value={video_id} onChange={this.handleChange} />
                                        <div className="box-error">
                                            {submitted && !video_id &&
                                                <div className="help-block">Video's id is required</div>
                                            }
                                        </div>
                                    </div>
                                    <div className='form-group-add'>
                                        {categories.length &&
                                            <select className={'form-group-add' + (submitted && !category_id ? ' has-error' : '')} name="category_id" value={category_id} onChange={this.handleChange}>
                                                { categories.map((category) =>
                                                    <option key={category.id} value={category.id}>{category.name}</option>
                                                )}
                                            </select>
                                        }
                                        <div className="box-error">
                                            {submitted && !video_id &&
                                                <div className="help-block">Category's id is required</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="form-group-add">
                                        <button className="btn btn-primary" disabled={loading}>Thêm</button>
                                        <div className="login-loading">
                                            {loading &&
                                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                            }
                                        </div>
                                        <div className="box-error-add">
                                            {error &&
                                                <div className={'alert-login alert-danger'}>Lỗi</div>
                                            }
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export { AdminPage };