import React from "react";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 "
            src="
            
            https://i.ibb.co/sPtZqjk/New-Project.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 "
            src="https://i.ibb.co/6ssQjnW/New-Project-1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            
            src="https://i.ibb.co/q1TwhG2/New-Project-2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
