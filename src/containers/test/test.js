import React, { Component } from 'react';

import './test.css';
import TestItem from './testItem/testItem';
import TestListQuestion from './testListQuestion/testListQuestion';
import TestToolbar from './testToolbar/testToolbar';
import CountDown from './countDown/countDown';

export default class Test extends Component {
    render() {
        return (
            <div className="col-md-12" id="test-page">
                <div className="box-wrapper">
                    <div className="col-md-8 test-container">
                        <TestListQuestion/>
                        <CountDown/>
                        <TestItem/>
                        <TestToolbar/>
                    </div>
                    <div className="col-md-4 test-information">
                        <div className="chat-box-container">
                            <div className="chat-box-enter">
                                <input type="text" className="form-control" placeholder="Nhập tin nhắn!"/>
                            </div>
                            <div className="chat-box-message">
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                                <div className="message">
                                    <div className="message-avatar">
                                        <img src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg"/>
                                    </div>
                                    <span className="message-text">Chúng mày làm được câu 1 chưa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}