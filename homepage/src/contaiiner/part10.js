import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './part10.css';
<div class="part10">
    <div class="part10-head">PROJECTS</div>
    <div class="part10-info">See What We Have Completed Recentl</div>
</div>

function Part8() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div class="slick-slider1">
            <div className="slider-container2">
                <div class="part10">
                    <div class="part10-head">PROJECTS</div>
                    <div class="part10-info">See What We Have Completed Recentl</div>
                </div>
                <Slider {...settings}>
                    <div class="img-slick">
                        <img src={require('./item1.png')}></img>
                    </div>
                    <div class="img-slick">
                        <img src={require('./item2.png')}></img>
                    </div>
                    <div class="img-slick">
                        <img src={require('./item3.png')}></img>
                    </div>
                    <div class="img-slick">
                        <img src={require('./item4.png')}></img>
                    </div>
                    <div class="img-slick">
                        <img src={require('./item5.png')}></img>
                    </div>
                    <div class="img-slick">
                        <img src={require('./item1.png')}></img>
                    </div>
                    <div class="img-slick">
                        <img src={require('./item.png')}></img>
                    </div>
                    <div class="img-slick">
                        <img src={require('./item1.png')}></img>
                    </div>
                </Slider>
            </div>
            <div class="part10-text">See What We Have Completed Recentl</div>
        </div>
    );
}

export default Part8;
