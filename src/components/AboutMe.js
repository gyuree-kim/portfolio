import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hanguler from "../resources/hanguler-web.PNG";

class AboutMe extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}  className="about-me">
          <div>
            <h2>표현하는 즐거움</h2>
            <p></p>
          </div>
          <div>
            <img src={hanguler}/>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
    );
  }
}

export default AboutMe;