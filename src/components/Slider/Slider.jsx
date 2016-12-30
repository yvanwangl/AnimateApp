import React, {Component} from 'react';
import ReactSwiper from 'react-swipe';
import Swiper from 'swiper';
require('./swiper.css');
require('./index.css');

export default class Slider extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay:2000,
            speed:800,

            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    }

    render() {
        const {image} = this.props;
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        [1,2,3,4,5].map(num=>
                            <div className="swiper-slide">{image}</div>
                        )
                    }
                </div>
                {/*<!-- 如果需要分页器 -->*/}
                <div className="swiper-pagination"></div>
            </div>
        );
    }
}