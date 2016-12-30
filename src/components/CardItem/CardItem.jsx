import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import picture from './images/picture.png';
import Icon from '../Icon/Icon';
require('./index.css');

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
        display: 'inline-block',
        width:'auto'
    },
    cardStyle:{
        display: 'inline-block',
        width: '208px',
        height: '208px',
        margin: '22px',
        padding:'8px',
    },
    cardText: {
        textAlign:'left',
        padding:'10px 0 8px 0',
        color:'#9b9b9b'
    },
    likeStyle: {
        fill: 'red'
    },
    unlikeStyle: {
        fill: '#000'
    }
};

export default class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like:false
        };
        this.itemTap = this.itemTap.bind(this);
    }

    itemTap(){
        this.setState({
            like: !this.state.like
        });
    }

    render() {
        return (
            <div className="cardItem">
                <Card style={styles.cardStyle}>
                    <CardMedia style={{height:120}}>
                        <img src={picture} style={{height:120}}/>
                    </CardMedia>
                    <CardText style={styles.cardText}>
                        Lorem ipsum dolor
                    </CardText>
                    <CardActions style={{padding:0}}>
                        <FlatButton style={{float:'left',minWidth:'36px'}} icon={<Icon type='like' style={this.state.like?styles.likeStyle:styles.unlikeStyle}/>} onTouchTap={this.itemTap} />
                        <FlatButton style={{float:'right',minWidth:'36px'}} icon={<Icon type='moreH'/>} />
                        {/*<Checkbox
                            checkedIcon={<ActionFavorite />}
                            uncheckedIcon={<ActionFavoriteBorder />}
                            style={styles.checkbox}
                        />
                        <Icon type='moreH' style={{display:'inline-block'}}/>*/}
                    </CardActions>
                </Card>
            </div>
        );
    }
}