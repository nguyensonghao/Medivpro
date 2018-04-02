import React, { Component } from 'react';

import './testListQuestion.css';

export default class TestListQuestion extends Component {
    render() {
        return (
            <div className="test-list-question">
                <ul>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul>
            </div>
        );
    }
}
