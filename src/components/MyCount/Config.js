/**
 * Created by wyf on 2016/12/29.
 */
import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const progressStyle = {
    position: 'relative'
};
const spanStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 14,
    color: '#fff'
};

const myCount = {
    height: '58px',
    lineHeight: '58px',
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    margin: 0,
    backgroundColor: 'rgba(67, 120, 168, 0.15)'
};

const progressItems = [
    ['#f5881e', 75, '4K', 'KARMA'],
    ['#69c801', 75, '59', 'PHOTOS']
];

const Progress = ({color, value, innerText})=>(
    <div style={progressStyle}>
        <span style={spanStyle}>{innerText}</span>
        <CircularProgress
            mode="determinate"
            size={60}
            thickness={5}
            color={color}
            value={value}
            style={{
                margin:'0 18px',
            }}
        />
    </div>
);

export {
    progressItems,
    Progress,
    myCount
};