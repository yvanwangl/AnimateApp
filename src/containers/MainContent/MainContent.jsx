import React, {Component} from 'react';
import Slider from '../../components/Slider/Slider';
import Portfolio from '../../components/Portfolio/Portfolio';
import PortfolioContent from '../PortfolioContent/PortfolioContent';
import picture from './images/picture.png';
require('./index.css');

export default class MainContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainContent">
                <Slider image={<img src={picture} alt="logo"/>}/>
                <Portfolio />
                <PortfolioContent />
            </div>
        );
    }
}