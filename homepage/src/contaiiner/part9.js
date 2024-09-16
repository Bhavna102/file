import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './part9.css';

function Part9() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
            <div class="part8">
                    <div class="project-head">TESTIMONIAL  </div>
                    <div class="project-info">What Our Clients Say!</div>
                </div>
            <Slider {...settings}>
                <div>
                    <img src={require('./people.png')}></img>
                </div>
                <div>
                <img src={require('./people.png')}></img>
                </div>
                <div>
                <img src={require('./people.png')}></img>
                </div>
                {/* <div>
                <img src={require('./people.png')}></img>
                </div> */}
               
            </Slider>
        </div>
    );
}

export default Part9;



