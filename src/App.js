import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import './assets/css/main.css';

import Header from './components/header/header';
import PrimaryMenu from './components/primaryMenu/primaryMenu';
import Home from './containers/home/home';
import Login from './containers/login/login';
import Register from './containers/register/register';
import Footer from './components/footer/footer';

class App extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">
                    <div className="container">
                        <Header />
                        <PrimaryMenu />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                        </Switch>
                        <Register />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
