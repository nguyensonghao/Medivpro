import React, { Component } from 'react';

import './assets/css/main.css';
import Router from './router';

import Header from './components/header/header';
import PrimaryMenu from './components/primaryMenu/primaryMenu';
import Footer from './components/footer/footer';

class App extends Component {
    render() {
        return (
            <div>
                <div id="wrapper">
                    <div className="container">
                        <Header />
                        <PrimaryMenu />
                        <Router/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
