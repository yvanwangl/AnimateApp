import React, {Component} from 'react';
import MenuList from '../../components/MenuList/MenuList';
import MyCount from '../../components/MyCount/MyCount';
import TreeMenu from '../../components/MenuNest/MenuNest';
require('./index.css');

export default class LiftSideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="liftSideBar">
                <div className="photolytics">
                    PHOTOLYTICS
                </div>
                <MenuList />
                <MyCount />
                <TreeMenu />
            </div>
        );
    }
}