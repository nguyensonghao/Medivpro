import React, { Component } from 'react';

import './testToolbar.css';

export default class TestToolbar extends Component {
    render() {
        return (
            <div className="test-toolbar">
                <div class="btn-group">
                    <button type="button" class="btn btn-default"><i class="icon-arrow-left"></i> Lùi lại</button>
                    <button type="button" class="btn btn-primary"><i class="icon-arrow-down"></i> Nộp bài</button>
                    <button type="button" class="btn btn-default">Tiếp theo <i class="icon-arrow-right"></i></button>
                </div>
                
            </div>
        );
    }
}