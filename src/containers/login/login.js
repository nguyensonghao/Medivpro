import React, { Component } from 'react';

import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="login-page col-md-12">
                <div className="col-md-8">
                    <legend>Đăng nhập</legend>
                    <form className="form-login">
                        <div className="form-group">
                            <label>Tài khoản</label>
                            <input type="text" name="username"/>
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" name="password"/>
                        </div>
                        <div className="remember-login">
                            <input type="checkbox" id="remember-login-checkbox"/>
                            <label htmlFor="remember-login-checkbox">Tự động đăng nhập lần sau</label>
                        </div>
                        <button className="btn-login">Đăng nhập</button>
                        <div className="option-ctl">
                            <a href="https://www.luyenthi123.com/quen-mat-khau">Quên mật khẩu</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.luyenthi123.com/dang-ky">Đăng kí tài khoản mới</a>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        )
    }
}
