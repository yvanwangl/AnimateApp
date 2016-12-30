import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Icon from '../Icon/Icon';
import {
    listText,
    listItemStyle,
    listItemActive,
    iconStyle,
    iconStyleActive,
    nestItemStyle
} from './Config';

export default class MenuNest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        };
        this.itemTap = this.itemTap.bind(this);
    }

    itemTap(index){
        this.setState({
            tabIndex:index
        });
    }

    render() {
        const tabIndex = this.state.tabIndex;
        return (
            <List>
                {
                    listText.map(([text, icon], index)=>
                        <ListItem
                            key={index}
                            style={listItemStyle}
                            primaryText={text}
                            leftIcon={<Icon type={icon} style={iconStyle}/>}
                            rightIcon={<Icon type='play' style={{...iconStyle, transform:'rotate(90deg)',width:15,height:16}}/>}
                            onTouchTap={()=>this.itemTap(index)}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={index}
                                    style={nestItemStyle}
                                    primaryText="Drafts"
                                    leftIcon={<Icon type={icon} style={iconStyle}/>}
                                />,
                            ]}
                        />
                    )
                }
            </List>
        );
    }
}