import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './part7.css';

function Part7() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
    <div className="slider-container">
      <div class="part7">
        <div class="build">
          <div class="build-head">PROJECTS</div>
          <div class="build-info">See What We Have Completed Recentl</div>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <img src={require('./prop.png')}></img>
        </div>
        <div>
          <img src={require('./prop1.png')}></img>
        </div>
        <div>
          <img src={require('./prop2.png')}></img>
        </div>
        <div>
          <img src={require('./prop3.png')}></img>
        </div>
        <div>
          <img src={require('./prop.png')}></img>
        </div>
        <div>
          <img src={require('./prop1.png')}></img>
        </div>
        <div>
          <img src={require('./prop2.png')}></img>
        </div>
        <div>
          <img src={require('./prop3.png')}></img>
        </div>
      </Slider>
    </div>
  );
}

export default Part7;
