import React, {Component} from 'react';

import fooLogo from '../../../../assets/images/foo-logo.png';

export default class BottomFooter extends Component {
    render () {
        return (
        	<div id="bottom-footer">
		        <img src={fooLogo} className="footer-logo"/>
		        <div className="info_foo">
		            <p className="foo_text_info">LuyenThi123.Com - a product of BeOnline Co., Ltd.<br/>Giấy phép ĐKKD số: 0102852740 cấp bởi Sở Kế hoạch và Đầu tư Hà Nội ngày 7/8/2008<br/>Giấy phép cung cấp dịch vụ mạng xã hội học tập trực tuyến số: 524/GP-BTTTT cấp ngày 24/11/2016<br/></p>
		            <div className="space5"></div>
		            <p className="foo_add">Tel: 02473080123  -  02436628077 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Email: hotro@luyenthi123.com<br/>Địa chỉ: số nhà 15-23, ngõ 259/9 phố Vọng, Đồng Tâm, Hai Bà Trưng, Hà Nội.</p>
		        </div>
		    </div>
        )
    }
}