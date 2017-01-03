import React, {Component} from 'react';
import Icon from '../Icon/Icon';
import {
    listText,
    listItemStyle,
    listItemActive,
    iconStyle,
    iconStyleActive,
    nestItemStyle
} from './Config';
require ('./index.css');

export default class TotalViewList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {viewTitle, viewPic, order} = this.props;
        return (
            <div>
                {
                    listText.map(([text, icon], index)=>
                        <div className={index%2==0?"evenItem item":"oddItem item"}>
                            <span className="viewText">TOTAL VIEWS</span>
                            <span className="viewPic">424,762</span>
                            <Icon className="iconStyle" type="play"/>
                        </div>
                    )
                }
            </div>
        );
    }
}