import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Play from 'material-ui/svg-icons/av/play-arrow';
import DateProgress from '../DateProgress/DateProgress';
import FlatButton from 'material-ui/FlatButton';
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
    iconStyleLeft: {
        paddingRight:20,
        width:20,
        height:16,
        margin:'4px 0 0 0',
        color:'red'
    },
    iconStyleRight: {
        paddingRight:20,
        width:400,
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
                    className="appBar"
                    style={styles.titleStyle}
                    titleStyle={styles.titleStyle}
                    title={<span style={styles.title}>PORTFOLIO</span>}
                    iconStyleLeft={styles.iconStyleLeft}
                    iconElementLeft={<IconButton><Icon type="play"/></IconButton>}
                    iconStyleRight={styles.iconStyleRight}
                    //iconElementRight={<div style={{width:400,marginTop:24}}><DateProgress/></div>}
                />
            </div>
        );
    }
}