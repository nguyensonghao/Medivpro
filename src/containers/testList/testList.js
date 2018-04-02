import React, { Component } from 'react';

import './testList.css';
import TestListItem from './testListItem/testListItem';

export default class TestList extends Component {
    render() {
        var listTest = [];
        for (let i = 0; i < 15; i++) {
            listTest.push(<TestListItem key={i}/>)
        }

        return (
            <div className="col-md-12" id="list-test-page">
                <div className="box-wrapper">
                    <div className="col-md-8">
                        {listTest}
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        );
    }
}