import React, { Component } from 'react';

import './forumItem.css';

export default class ForumItem extends Component {
    render() {
        return (
            <div className="forum-item">
                <div className="header-forum">
                    <div className="avatar">
                        <img className="main-avatar" src="https://www.luyenthi123.com/data/ava_member/noava2/Nam/7.png"/>
                        <img className="vip-avatar" src="https://www.luyenthi123.com/static/image/canhan/ic_VIP_small.png"/>
                    </div>
                    <div className="detail">
                        <p className="name">hoangnanit</p>
                        <p className="date">Gửi lúc: 16:54 25/02/2017</p>
                    </div>
                </div>
                <div className="content-forum">
                    <p>hãy kể những tính cách của từng cung trong 12 cung hoàng đạo?</p>
                </div>
                <div className="footer-forum">
                    <div class="footer-forum-item">
                        32 bình luận
                    </div>
                    <div class="footer-forum-item">
                        10 chia sẻ
                    </div>
                </div>
            </div>
        );
    }
}