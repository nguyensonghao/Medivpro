import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div className="login-page col-md-10 col-md-offset-1">
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
                        <Link to="quen-mat-khau">Quên mật khẩu</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="/dang-ky">Đăng kí tài khoản mới</Link>
                    </div>
                </form>
            </div>
        )
    }
}
