import React, {Component} from 'react';
import TotalViewList from '../../components/TotalViewList/TotalViewList';
import MyCount from '../../components/MyCount/MyCount';
import TreeMenu from '../../components/MenuNest/MenuNest';
require('./index.css');

const myCount = {
    height: '73px',
    lineHeight: '73px',
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    margin: 0,
    backgroundColor: 'rgba(40, 104, 158, 0.8)',
};
export default class RightSideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rightSideBar">
                <div style={{backgroundColor: '#fff', height: 58}}></div>
                <TotalViewList />
                <p style={myCount}>View More</p>
            </div>
        );
    }
}