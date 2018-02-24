import React, {Component} from 'react';

import BottomFooter from './components/bottomFooter/bottomFooter';
import CenterFooter from './components/centerFooter/centerFooter';
import TopFooter from './components/topFooter/topFooter';
import './footer.css';

export default class Footer extends Component {
    render () {
        return (
        	<div id="footer">
                <div className="container">
                    <TopFooter/>
                    <CenterFooter/>
                    <BottomFooter/>
                </div>
			</div>
        )
    }
}