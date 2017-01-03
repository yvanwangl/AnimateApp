import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
require('./index.css');

export default class DateProgress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    [1,1,1,1].map((num,index)=>
                        <Slider
                            disabled={true}
                            style={{display:'inline-block',width:60}}
                            key={index}
                        />
                    )
                }
                <span style={{display:'inline-block',width:10,height:10,backgroundColor:'red',height:90,verticalAlign:'top'}}></span>
            </div>
        );
    }
}