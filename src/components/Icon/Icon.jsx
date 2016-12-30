import React, {Component} from 'react';
import Description from 'material-ui/svg-icons/action/description';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import Person from 'material-ui/svg-icons/social/person';
import Share from 'material-ui/svg-icons/social/share';
import Download from 'material-ui/svg-icons/file/file-download';
import CloudDownload from 'material-ui/svg-icons/file/cloud-download';
import Upload from 'material-ui/svg-icons/file/file-upload';
import CloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import Collections from 'material-ui/svg-icons/image/collections';
import Directory from 'material-ui/svg-icons/file/folder-open';
import Layers from 'material-ui/svg-icons/maps/layers';
import Play from 'material-ui/svg-icons/av/play-arrow';
import MoreH from 'material-ui/svg-icons/navigation/more-horiz';
import Like from 'material-ui/svg-icons/action/favorite-border';
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
        case 'cloudDownload':
            childComponent=<CloudDownload {...props}/>;
            break;
        case 'upload':
            childComponent=<Upload {...props}/>;
            break;
        case 'cloudUpload':
            childComponent=<CloudUpload {...props}/>;
            break;
        case 'collections':
            childComponent=<Collections {...props}/>;
            break;
        case 'directory':
            childComponent=<Directory {...props}/>;
            break;
        case 'layers':
            childComponent=<Layers {...props}/>;
            break;
        case 'play':
            childComponent=<Play {...props}/>;
            break;
        case 'moreH':
            childComponent=<MoreH {...props}/>;
            break;
        case 'like':
            childComponent=<Like {...props}/>;
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