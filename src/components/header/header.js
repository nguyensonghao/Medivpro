import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div id="header" className="col-md-12">
                <div className="header-left col-md-6 text-left">
                    <a href="https://www.luyenthi123.com" title="Luyện thi 123"></a>
                </div>
                <div className="header-right col-md-6 text-right">
                    <div className="header-top-link">
                        <a href="https://www.luyenthi123.com/dang-ky-mua-the.html" title="Đăng ký mua thẻ">Đăng kí mua thẻ </a> |
                        <a href="https://www.luyenthi123.com/tin-tuc/huong-dan/cau-hoi-thuong-gap-59.html" title="Câu hỏi thường gặp"> Câu hỏi thường gặp</a>
                    </div>
                    <div className="header-member-act">
                        <a className="f-act-login" href="https://www.luyenthi123.com/login" title="Đăng nhập hệ thống">Đăng nhập</a>
                        <a className="f-act-register" href="https://www.luyenthi123.com/dang-ky" title="Đăng ký">Đăng ký</a>
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
