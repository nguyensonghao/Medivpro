import React, { Component } from 'react';

import './forgotPassword.css';

export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="col-md-10 col-md-offset-1" id="forgot-password-page">
                <legend>Quên mật khẩu</legend>
                <form className="form-forgot-password">
                    <div className="form-group">
                        <label>Nhập email của bạn</label>
                        <input type="email" name="email"/>
                    </div>
                    <button className="btn-login">Lấy lại mật khẩu</button>
                </form>
            </div>
        );
    }
}