import React, { Component } from 'react';

import './payment.css';

export default class Payment extends Component {
    render() {
        return (
            <div id="payment-page" className="col-md-10 col-md-offset-1">
                <p className="title">BẠN ĐANG CHỌN PHƯƠNG THỨC NẠP VIP BẰNG THẺ ĐIỆN THOẠI</p>
                <div className="list-type-card col-md-4">
                    <p className="title-type-card">Chọn loại thẻ</p>
                    <div className="type-card-item">
                        <img src="https://www.luyenthi123.com/static/image/napthe/ic-viettel.png"/>
                        <div className="check-type">
                            <input type="checkbox" id="viettel"/>
                            <label htmlFor="viettel">Thẻ Viettel</label>
                        </div>
                    </div>
                    <div className="type-card-item">
                        <img src="https://www.luyenthi123.com/static/image/napthe/ic-vina.png"/>
                        <div className="check-type">
                            <input type="checkbox" id="vina"/>
                            <label htmlFor="vina">Thẻ VinaPhone</label>
                        </div>
                    </div>
                    <div className="type-card-item">
                        <img src="https://www.luyenthi123.com/static/image/napthe/ic-mobi.png"/>
                        <div className="check-type">
                            <input type="checkbox" id="mobi"/>
                            <label htmlFor="mobi">Thẻ MobiPhone</label>
                        </div>
                    </div>
                </div>
                <div className="enter-card col-md-8">
                    <p className="title-type-card">Nhập thông tin thẻ</p>
                    <form>
                        <div className="form-group">
                            <label>Mã thẻ</label>
                            <input type="text" name="seri"/>
                        </div>
                        <div className="form-group">
                            <label>Số seri thẻ</label>
                            <input type="text" name="seri"/>
                        </div>
                        <button className="btn btn-success btn-large">Nạp thẻ</button>
                    </form>
                </div>
            </div>
        );
    }
}