import React, { Component } from 'react';

import './testListItem.css';

export default class TestListItem extends Component {
    render() {
        return (
            <div className="test-list-item">
                <img src="https://www.luyenthi123.com/static/image/banner/img_kt_thang_1.png"/>
                <div className="detail">
                    <p className="name">Đề thi thử toán sơ cấp học kì 1 năm học 2017-2018</p>
                    <div className="meta">

                    </div>
                </div>
            </div>
        );
    }
}