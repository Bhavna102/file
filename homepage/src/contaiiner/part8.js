import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './part8.css';


function Part8() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
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
        <div className="slider-container1">
            <div class="part8">
                <div class="project-head">OUR SERVICES  </div>
                <div class="project-info">We Provide Best Industrial Services</div>
            </div>
            <Slider {...settings}>
                <div class="erop-img">
                    <img src={require('./erop.png')}></img>
                </div>
                <div class="erop-img">
                    <img src={require('./manager.png')}></img>
                </div>
                <div class="erop-img">
                    <img src={require('./manager1.png')}></img>
                </div>
                <div class="erop-img">
                    <img src={require('./manager.png')}></img>
                </div>
                <div class="erop-img">
                    <img src={require('./manager1.png')}></img>
                </div>
                 <div class="erop-img">
                    <img src={require('./manager.png')}></img>
                </div>
            </Slider>
        </div>
    );
}

export default Part8;
