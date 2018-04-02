import React, { Component } from 'react';

import './testItem.css';

export default class TestItem extends Component {
    render() {
        return (
            <div className="test-item row">
                <div className="question">
                    <span className="text-question">Câu 1: As a teenager, George spent summers abroad ……… the business.</span>
                </div>
                <div className="box-answer">
                    <div className="col-md-6 box-answer-item">
                        <input type="radio" id="box-answer-item-1"/>
                        <label htmlFor="box-answer-item-1">A. to Learn</label>
                    </div>
                    <div className="col-md-6 box-answer-item">
                        <input type="radio" id="box-answer-item-2"/>
                        <label htmlFor="box-answer-item-1">B. Learn</label>
                    </div>
                    <div className="col-md-6 box-answer-item">
                        <input type="radio" id="box-answer-item-3"/>
                        <label htmlFor="box-answer-item-1">C. Learning</label>
                    </div>
                    <div className="col-md-6 box-answer-item">
                        <input type="radio" id="box-answer-item-4"/>
                        <label htmlFor="box-answer-item-1">D. Learnt</label>
                    </div>
                </div>
            </div>
        );
    }
}