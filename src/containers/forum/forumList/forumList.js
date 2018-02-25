import React, { Component } from 'react';

import ForumItem from '../forumItem/forumItem';

export default class ForumList extends Component {
    render() {
        let list = [];
        for (let i = 0; i < 10; i++) {
            list.push(<ForumItem key={i}/>);
        }

        return (
            <div className="col-md-9" id="list-question">
                {list}
            </div>
        );
    }
}