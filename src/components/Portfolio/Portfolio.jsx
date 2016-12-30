import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Icon from '../Icon/Icon';
require('./index.css');

const styles = {
    title: {
        cursor: 'pointer',
    },
    titleStyle:{
        textAlign: 'left',
        height: '130px',
        lineHeight: '130px',
        color: '#b7b5b5',
        fontSize: 18,
        backgroundColor: '#dfebf4'
    },
    iconStyle: {
        paddingLeft:8,
        fill:'#b7b5b5',
        transform:'rotate(90deg)',
        width:20,
        height:16
    }
};

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="portfolio">
                <AppBar
                    style={styles.titleStyle}
                    titleStyle={styles.titleStyle}
                    title={<span style={styles.title}>PORTFOLIO</span>}
                    iconElementLeft={<IconButton><Icon type='play' style={styles.iconStyle}/></IconButton>}
                />
            </div>
        );
    }
}