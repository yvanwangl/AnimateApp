/**
 * Created by wyf on 2016/12/29.
 */
const listText = [
    ['Custom Reports', 'description'],
    ['Dashboard', 'trendingUp'],
    ['User Activity', 'person'],
    ['Content Send', 'share'],
    ['Downloads', 'download'],
];

const listItemStyle = {
    color: '#b2c8de',
    textAlign:'left',
    fontSize:14,
    height:50,
    borderLeft:'4px solid transparent',
    backgroundColor: 'rgba(35, 40, 57, 0.8)',
};

const listItemActive = {
    ...listItemStyle,
    color: '#fff',
    backgroundColor: 'rgba(68, 76, 104, 0.8)',
    borderLeft:'4px solid #f5881e'
};

const iconStyle={
    paddingLeft:8,
    fill:'#aec4da'
};

const iconStyleActive={
    ...iconStyle,
    fill:'#fff'
};

export {
    listText,
    listItemStyle,
    listItemActive,
    iconStyle,
    iconStyleActive,
};