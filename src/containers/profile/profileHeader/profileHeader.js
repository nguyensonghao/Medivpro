import React, { Component } from 'react';

import './profileHeader.css';

export default class ProfileHeader extends Component {
    render() {
        return (
            <div className="profile-header">
                <img className="avatar" src="https://www.luyenthi123.com/data/ava_member/noava2/Nam/14.png"/>
                <div className="detail">
                    <p className="name">NguyenSongHao</p>
                    <p className="full-name">Nguyễn Song Hào</p>
                </div>
            </div>
        );
    }
}