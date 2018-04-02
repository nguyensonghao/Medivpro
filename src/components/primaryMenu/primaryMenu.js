import React, { Component } from 'react';

import './primaryMenu.css';
import { Link } from "react-router-dom";

export default class PrimaryMenu extends Component {
    render() {
        return (
            <div id="primary-menu" className="col-md-12">
                <ul>
                    <li>
                        <a>Học thử</a>
                    </li>
                    <li>
                        <Link to="/lam-bai">Làm bài</Link>
                    </li>
                    <li>
                        <Link to="/kiem-tra">Phòng luyện tốc độ</Link>
                    </li>
                    <li>
                        <Link to="/dien-dan">Diễn đàn</Link>
                    </li>
                    <li>
                        <Link to="/giai-tri">Giải trí</Link>
                    </li>
                    <li>
                        <a>Đấu trường</a>
                    </li>
                </ul>
            </div>
        )
    }
}
