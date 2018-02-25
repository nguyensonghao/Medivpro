import React, { Component } from 'react';

import './forum.css';
import ForumSidebar from './forumSidebar/forumSidebar';
import ForumList from './forumList/forumList';

export default class Forum extends Component {
    componentDidMount() {
        document.title = 'Diễn đàn Medivpro';
    }
    
    render() {
        return (
            <div id="forum-page" className="col-md-12">
                <ForumList/>
                <ForumSidebar/>
            </div>
        );
    }
}