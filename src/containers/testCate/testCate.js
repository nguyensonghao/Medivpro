import React, { Component } from 'react';

import './testCate.css';
import TestItem from './testItem/testItem';

export default class TestCate extends Component {
    render() {
        let listBox = [];
        for (let i = 0; i < 12; i++) {
            listBox.push(<TestItem key={i}/>);
        }

        return (
            <div className="col-md-12" id="test-cate-page">
                {listBox}
            </div>
        );
    }
}