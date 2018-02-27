import { Switch, Route, Link } from "react-router-dom";
import React, { Component } from 'react';

import Home from './containers/home/home';
import Login from './containers/login/login';
import Register from './containers/register/register';
import Entertainment from './containers/entertainment/entertainment';
import Forum from './containers/forum/forum';
import Payment from './containers/payment/payment';
import Profile from './containers/profile/profile';
import ForgotPassword from './containers/forgotPassword/forgotPassword';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dang-nhap" component={Login} />
                <Route path="/dang-ky" component={Register} />
                <Route path="/giai-tri" component={Entertainment} />
                <Route path="/dien-dan" component={Forum} />
                <Route path="/thanh-toan" component={Payment} />
                <Route path="/thong-tin" component={Profile} />
                <Route path="/quen-mat-khau" component={ForgotPassword} />
            </Switch>
        );
    }
}