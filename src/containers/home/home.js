import React, { Component } from 'react';

import ListCourse from '../../components/listCourse/listCourse';
import IntroBox from '../../components/introBox/introBox';
import ListRank from '../../components/listRank/listRank';

export default class Home extends Component {
    render() {
        return (
            <div>
                <ListCourse/>
                <IntroBox />
                <ListRank />
            </div>
        )
    }
}
