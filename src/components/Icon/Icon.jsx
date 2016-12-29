import React, {Component} from 'react';
import Description from 'material-ui/svg-icons/action/description';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import Person from 'material-ui/svg-icons/social/person';
import Share from 'material-ui/svg-icons/social/share';
import Download from 'material-ui/svg-icons/editor/vertical-align-bottom';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
require('./index.css');

function getComponent(type, props){
    let childComponent;
    switch (type) {
        case 'description':
            childComponent=<Description {...props}/>;
            break;
        case 'trendingUp':
            childComponent=<TrendingUp {...props}/>;
            break;
        case 'person':
            childComponent=<Person {...props}/>;
            break;
        case 'share':
            childComponent=<Share {...props}/>;
            break;
        case 'download':
            childComponent=<Download {...props}/>;
            break;
    }
    return childComponent;
}

export default class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {type} = this.props;
        let childComponent = getComponent(type, this.props);
        return (
            <i>
                {childComponent}
            </i>
        );
    }
}