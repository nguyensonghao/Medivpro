import React, { Component } from 'react';

import './entertainment.css';
import EntertainmentBox from './entertainmentBox/entertainmentBox';

export default class Entertainment extends Component {
    render() {
        let listBox = [];
        for (let i = 0; i < 12; i++) {
            listBox.push(<EntertainmentBox key={i}/>);
        }

        return (
            <div id="entertainment-page" className="col-md-12">
                {listBox}
            </div>
        );
    }
}