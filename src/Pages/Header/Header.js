import React from "react";
import "./Header.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
      >
        <div>
          <img
            src="https://image.freepik.com/free-vector/baby-cosmetics-bottles-kids_33099-1549.jpg"
            alt="First slide"
            height="400px"
            weight="100%"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://image.freepik.com/free-photo/bath-accessories-baby-table-background_392895-4785.jpg"
            alt="First slide"
            height="400px"
            weight="100%"
          />

          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://image.freepik.com/free-photo/bath-accessories-baby-table-bathroom-closeup_392895-4786.jpg"
            alt="First slide"
            height="400px"
            weight="100%"
          />

          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
