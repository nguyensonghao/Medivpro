import React, { Component } from 'react';

import './listRank.css';
import ic_1st from '../../assets/images/ic_1st.png';
import ic_2nd from '../../assets/images/ic_2nd.png';
import ic_3rd from '../../assets/images/ic_3rd.png';

export default class ListRank extends Component {
    render() {
        return (
            <div id="list-rank" className="col-md-12">
                <p className="main-title">KẾT QUẢ THI ĐẤU - Tuần 7 (12/02 - 18/02)</p>
                <div className="col-md-12">
                    <div className="col-md-4">
                        <div className="avatar">
                            <img className="avatar-image" src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg" />
                            <img className="metal" src={ic_1st}/>
						</div>
                            <div className="info_slide">
                                <p className="name_info">khavile</p>
                                <p className="className_info">Hải Phòng</p>
                                <p className="score_info">Điểm danh hiệu: <strong>1925</strong></p>
                            </div>
                        </div>
                    <div className="col-md-4">
                        <div className="avatar">
                            <img className="avatar-image" src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg" />
                            <img className="metal" src={ic_2nd}/>
                        </div>
                        <div className="info_slide">
                            <p className="name_info">khavile</p>
                            <p className="className_info">Hải Phòng</p>
                            <p className="score_info">Điểm danh hiệu: <strong>1925</strong></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="avatar">
                            <img className="avatar-image" src="https://www.luyenthi123.com/data/ava_member/avatar_fantasy/28.jpg" />
                            <img className="metal" src={ic_3rd}/>
                        </div>
                        <div className="info_slide">
                            <p className="name_info">khavile</p>
                            <p className="className_info">Hải Phòng</p>
                            <p className="score_info">Điểm danh hiệu: <strong>1925</strong></p>
                        </div>
                    </div>
                        </div>
                        <div className="col-md-6 intro">
                            <h3>Giới thiệu về Luyện Thi 123</h3>
                            <p>Chương trình Luyenthi123.com giúp các bạn ôn và luyện tập lại các kiến thức được học trên lớp một cách hệ thống và đầy đủ, qua những bài tập với các cấp độ từ Dễ đến Khó để các bạn có thể từ từ nâng cao và nắm vững kiến thức đã được học...</p>
                            <div className="h-btt-datthe">Đặt mua thẻ VIP Luyện Thi 123</div>
                        </div>
                        <div className="col-md-6">
                            <div className="fb-page" data-href="https://www.facebook.com/hiephoiluatinhquocte/" data-tabs="timeline" data-width="500" data-height="225" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/hiephoiluatinhquocte/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/hiephoiluatinhquocte/">Hiệp Hội Lừa Tình Quốc Tế</a></blockquote></div>
                        </div>
                    </div>
        )
    }
}
