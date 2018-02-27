import React, { Component } from 'react';

export default class ForumSidebar extends Component {
    render() {
        return (
            <div className="col-md-3" id="forum-sidebar">
                <div className="forum-sidebar-content">
                    <div className="item">
                        <i className="icon-list-alt"></i> Nội quy hỏi đáp
                    </div>
                    <div className="item">
                        <i className="icon-trophy"></i> Giải thưởng
                    </div>
                    <button className="btn btn-primary">
                        <i className="icon-plus"></i> Gửi câu hỏi
                    </button>
                    <button className="btn btn-success">
                        <i className="icon-user"></i> Câu hỏi của bạn
                    </button>
                </div>
            </div>
        );
    }
}