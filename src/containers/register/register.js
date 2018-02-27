import React, { Component } from 'react';

import './register.css';

export default class Register extends Component {
    render() {
        return (
            <div className="register-page col-md-12">
                <div className="col-md-12">
                    <legend>Đăng ký tài khoản mới</legend>
                    <form className="form-register">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email"/>
                        </div>
                        <div className="form-group">
                            <label>Tài khoản</label>
                            <input type="text" name="username"/>
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input type="password" name="password"/>
                        </div>
                        <div className="form-group">
                            <label>Nhập lại mật khẩu</label>
                            <input type="password" name="password-confirm"/>
                        </div>
                        <div className="form-group">
                            <label>Ngày tháng năm sinh</label>
                            <input type="text" name="username"/>
                        </div>
                        <div className="form-group">
                            <label>Trường đại học</label>
                            <input type="text" name="username"/>
                        </div>
                        <div className="form-group">
                            <label>Niên khóa</label>
                            <input type="text" name="username"/>
                        </div>
                        <div className="form-group">
                            <label>Lớp</label>
                            <input type="text" name="username"/>
                        </div>
                        <button className="btn-register">Đăng ký</button>
                    </form>
                </div>
                <div className="col-md-4">
                </div>
            </div>
        )
    }
}
