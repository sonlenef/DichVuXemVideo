import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Topic from "./pages/Topic.js";
import Product from "./pages/Product";

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/product' component={Product}/>
                    <Route exact path='/topic' component={Topic}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath
