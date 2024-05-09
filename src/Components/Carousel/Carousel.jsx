import React, { useRef } from "react";
import Carousel from 'react-bootstrap/Carousel';


const data = [
  {
    image: require('../../img/1.png'),
  },
  {
    image: require('../../img/2.png'),
  },
  {
    image: require('../../img/3.png'),
  },
  {
    image: require('../../img/4.png'),
  },
  {
    image: require('../../img/5.png'),
  }
];

function HomeCarousel() {
  const carouselRef = useRef(null);

  const handleScroll = (event) => {
    const delta = Math.max(-1, Math.min(1, (event.nativeEvent.wheelDelta || -event.nativeEvent.detail)));
    if (delta > 0) {
      carouselRef.current.prev();
    } else if (delta < 0) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="carousel-container" onWheel={handleScroll}>
      <div className="dim rem2 p-t">What's Cooking?</div>
      <Carousel ref={carouselRef}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={slide.image}
                alt="slider image"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
