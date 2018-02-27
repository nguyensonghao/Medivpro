import React, { Component } from 'react';

import './profile.css';
import ProfileHeader from './profileHeader/profileHeader';
import ProfileContent from './profileContent/profileContent';

export default class Profile extends Component {
    render() {
        return (
            <div className="col-md-12" id="profile-page">
                <ProfileHeader/>
                <ProfileContent/>
            </div>
        );
    }
}