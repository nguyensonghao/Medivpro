import React, { Component } from 'react';

import './countDown.css';
import ClockImage from '../../../assets/images/alarm-clock.png';

export default class CountDown extends Component {
    render() {
        return (
            <div className="count-down-container">
                <div className="count-down">
                    <img src={ClockImage}/>
                    <span>20</span>
                </div>
            </div>
        );
    }
}