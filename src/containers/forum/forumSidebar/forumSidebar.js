import React, { Component } from 'react';

export default class ForumSidebar extends Component {
    render() {
        return (
            <div className="col-md-3" id="forum-sidebar">
                <div className="forum-sidebar-content">
                    <div className="item">
                        Nội quy hỏi đáp
                    </div>
                    <div className="item">
                        Giải thưởng
                    </div>
                    <button className="btn btn-primary">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                        Gửi câu hỏi
                    </button>
                    <div className="rank">
                        <p>Bảng xếp hạng</p>
                    </div>
                </div>
            </div>
        );
    }
}