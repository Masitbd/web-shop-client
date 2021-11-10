import React from "react";
import "./Header.css";
import reactDom from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Header = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={true}
      infiniteLoop={true}
    >
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0447/7167/2225/files/img2_37ba7379-0e0c-4a3f-84eb-6ce908b555a9_x650.png"
          alt="First slide"
          height="400px"
          weight="100%"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/01/96/82/11/240_F_196821190_4yPmu9YcrwXKz1miV0RFoiykh9I7kfle.jpg"
          alt="First slide"
          height="400px"
          weight="100%"
        />

        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/01/96/82/11/240_F_196821190_4yPmu9YcrwXKz1miV0RFoiykh9I7kfle.jpg"
          alt="First slide"
          height="400px"
          weight="100%"
        />

        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Header;
