import React, { Component } from 'react';

import './menu.css';

export default class Menu extends Component {
    constructor () {
        super();
    }

    render() {
        return (
            <div className="menu">
                <ul>
                    <li>Todo App</li>
                    <li>List Todo</li>
                </ul>
            </div>
        )
    }
}
