import React, {Component} from 'react';
import CardItem from '../../components/CardItem/CardItem';
require('./index.css');

export default class PortfolioContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="portfolioContent">
                {
                    [1,2,3,4,5,6,7,8,8,8,1,2,3,4,5].map((num)=><CardItem/>)
                }
            </div>
        );
    }
}