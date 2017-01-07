import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Icon from '../Icon/Icon';
import {
    listText,
    listItemStyle,
    listItemActive,
    iconStyle,
    iconStyleActive,
} from './Config';

export default class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        };
        this.itemTap = this.itemTap.bind(this);
    }

    itemTap(index) {
        this.setState({
            tabIndex: index
        });
    }

    render() {
        const tabIndex = this.state.tabIndex;
        return (
            <List style={{padding: 0}}>
                {
                    listText.map(([text, icon], index)=>
                        <ListItem
                            key={index}
                            style={tabIndex == index ? listItemActive : listItemStyle}
                            primaryText={text}
                            leftIcon={<Icon type={icon} style={tabIndex == index ? iconStyleActive : iconStyle}/>}
                            onTouchTap={()=>this.itemTap(index)}
                        />
                    )
                }
            </List>
        );
    }
}