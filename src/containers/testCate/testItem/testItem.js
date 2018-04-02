import React, { Component } from 'react';

export default class TestItem  extends Component {
    render() {
        return (
            <div class="entertainment-box col-md-4">
                <div class="content">
                    <p class="title">Bạn sẽ làm chuyên khoa gì</p>
                    <img class="image" src="/static/media/xemten.2ede0727.jpg"/>
                    <button class="btn btn-primary btn-view-now">Bắt đầu</button>
                </div>
            </div>
        );
    }
}