import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img
          src='https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/7822ae13199f/assets/img/home/hero_photos/9pnLHoZnwY067nbjHNPnfQ.jpg'
          alt='donuts'
        />
      </Wrap>
      <Wrap>
        <img
          src='https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_large_assets/52ed68f0e062/assets/img/home/hero_photos/BKlP1ebtV6kFbKnZU8Ppew.jpg'
          alt='beer'
        />
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  & > button {
    opacity: 1;
    width: 5vw;
    z-index: 2;
    color: #000;
  }

  .slick-prev {
    left: 1vw;
  }

  .slick-next {
    right: 1vw;
  }
`;

const Wrap = styled.div`
  height: 600px;
  width: 100%;
  display: flex;

  img {
    min-height: 100%;
    height: auto;
    width: 100%;
    z-index: -1;
  }
`;

export default ImgSlider;
