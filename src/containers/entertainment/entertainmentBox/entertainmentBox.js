import React, { Component } from 'react';

import './entertainmentBox.css';
import xemTenLogo from '../../../assets/images/giaitri/xemten.jpg';

export default class EntertainmentBox extends Component {
    render() {
        return (
            <div className="entertainment-box col-md-4">
                <div className="content">
                    <p className="title">Bạn sẽ làm chuyên khoa gì</p>
                    <img className="image" src={xemTenLogo}/>
                    <button className="btn btn-primary btn-view-now">Bắt đầu</button>
                </div>
            </div>
        );
    }
}