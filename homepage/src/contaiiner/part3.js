import './part3.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function Part3() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 8,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 3000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    // };
    return (
        <div class="slider">
            {/* <div className="slider-container">
                <Slider {...settings}> */}
                    <div>
                        <img src={require('./p1.png')}></img>
                    </div>
                    <div>
                        <img src={require('./p1.png')}></img>
                    </div>
                    <div>
                        <img src={require('./p1.png')}></img>
                    </div>
                    <div>
                        <img src={require('./p1.png')}></img>
                    </div>
                    <div>
                    <img src={require('./p1.png')}></img>
                    </div>
                    <div>
                    <img src={require('./p1.png')}></img>

                    </div>
                    <div>
                    <img src={require('./p1.png')}></img>
                    </div>
                    {/* <div>
                    <img src={require('./p1.png')}></img>
                    </div>
                    <div>
                    <img src={require('./p1.png')}></img>
                    </div>
                    <div>
                    <img src={require('./p1.png')}></img>
                    </div> */}
                {/* </Slider>
            </div> */}
        </div>
    );
}

export default Part3;

