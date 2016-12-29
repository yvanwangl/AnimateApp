import React, {Component} from 'react';
import {progressItems, Progress, myCount} from './Config';

export default class MyCount extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    progressItems.map(([color, value, innerText, bottomText], index)=>
                        <div style={{display:'inline-block', padding:'56px 0'}}>
                            <Progress color={color} value={value} innerText={innerText}/>
                            <p style={{color:'#fff', fontSize:10}}>{bottomText}</p>
                        </div>
                    )
                }
                <p style={myCount}>MY COUNT</p>
            </div>
        );
    }
}