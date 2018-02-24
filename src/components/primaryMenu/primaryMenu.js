import React, { Component } from 'react';

import './primaryMenu.css';

export default class PrimaryMenu extends Component {
    render() {
        return (
            <div id="primary-menu" className="col-md-12">
                <ul>
                    <li>
                        <a>Học thử</a>
                    </li>
                    <li>
                        <a>Phòng luyện tốc độ</a>
                    </li>
                    <li>
                        <a>Y học cơ sở</a>
                    </li>
                    <li>
                        <a>Lâm sàng</a>
                    </li>
                    <li>
                        <a>Chuyên khoa lẻ</a>
                    </li>
                    <li>
                        <a>Đấu trường</a>
                    </li>
                </ul>
            </div>
        )
    }
}
