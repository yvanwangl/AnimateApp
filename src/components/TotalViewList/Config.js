/**
 * Created by wyf on 2016/12/29.
 */
const listText = [
    ['Upload Photo', 'upload'],
    ['Collections', 'collections'],
    ['Directory', 'directory'],
    ['Catalog', 'layers'],
];

const listItemStyle = {
    color: '#b2c8de',
    textAlign:'left',
    fontSize:14,
    height:100,
    borderLeft:'4px solid transparent',
    backgroundColor: '#2C3144',
};

const listItemActive = {
    ...listItemStyle,
    color: '#fff',
    backgroundColor: 'rgba(68, 76, 104, 0.8)',
    borderLeft:'4px solid #f5881e'
};

const nestItemStyle = {
    ...listItemStyle,
    margin: '-8px 0',
    backgroundColor:'#2F3B52',
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
    nestItemStyle,
};