import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div id="header" className="col-md-12">
                <div className="header-left col-md-6 text-left">
                    <Link to="/" href="https://www.luyenthi123.com" title="Luyện thi 123"></Link>
                </div>
                <div className="header-right col-md-6 text-right">
                    <div className="header-top-link">
                        <Link to="/thanh-toan" title="Đăng ký mua thẻ">Đăng kí mua thẻ </Link> |
                        <a href="https://www.luyenthi123.com/tin-tuc/huong-dan/cau-hoi-thuong-gap-59.html" title="Câu hỏi thường gặp"> Câu hỏi thường gặp</a>
                    </div>
                    <div className="header-member-act">
                        <Link to="/dang-nhap" className="f-act-login" title="Đăng nhập hệ thống">Đăng nhập</Link>
                        <Link to='/dang-ky' className="f-act-register" title="Đăng ký">Đăng ký</Link>
                    </div>
                </div>
                <img src="https://www.luyenthi123.com/static/image/home/top-cloud1.png" className="cloud-decoration-1"/>
                <img src="https://www.luyenthi123.com/static/image/home/top-cloud2.png" className="cloud-decoration-2"/>
                <img src="https://www.luyenthi123.com/static/image/home/top-cloud1.png" className="cloud-decoration-3"/>
                <img src="https://www.luyenthi123.com/static/image/home/top-cloud2.png" className="cloud-decoration-4"/>
            </div>
        )
    }
}
