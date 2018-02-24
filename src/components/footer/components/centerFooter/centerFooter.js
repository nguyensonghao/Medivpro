import React, {Component} from 'react';

export default class CenterFooter extends Component {
    render () {
        return (
        	<div id="center-footer">
		        <div className="foo-list-class">
		            <div className="foo-title-class">Tiểu học</div>
		            <div styles={{width: '35%', display: 'inline-block', "vertical-align": 'top'}}>
		                <li><a href="https://www.luyenthi123.com/lop-1">Lớp 1</a></li>
		                <li><a href="https://www.luyenthi123.com/lop-2">Lớp 2</a></li>
		                <li><a href="https://www.luyenthi123.com/lop-3">Lớp 3</a></li>
		            </div>
		            <div styles={{width: '45', display: 'inline-block'}}>
		                <li><a href="https://www.luyenthi123.com/lop-4">Lớp 4</a></li>
		                <li><a href="https://www.luyenthi123.com/lop-5">Lớp 5</a></li>
		            </div>
		        </div>
		        <div className="foo-list-class">
		            <div className="foo-title-class">Trung học cơ sở</div>
		            <div styles={{width: '45%', display: 'inline-block'}}>
		                <li><a href="https://www.luyenthi123.com/lop-6">Lớp 6</a></li>
		                <li><a href="https://www.luyenthi123.com/lop-7">Lớp 7</a></li>
		            </div>
		            <div styles={{width: '45%', display: 'inline-block'}}>
		                <li><a href="https://www.luyenthi123.com/lop-8">Lớp 8</a></li>
		                <li><a href="https://www.luyenthi123.com/lop-9">Lớp 9</a></li>
		            </div>
		        </div>
		        <div className="foo-list-class">
		            <div className="foo-title-class">Học mà chơi</div>
		        </div>
		        <div className="foo-list-class">
		            <div className="foo-title-class">Tin tức</div>
		        </div>
		    </div>
        )
    }
}