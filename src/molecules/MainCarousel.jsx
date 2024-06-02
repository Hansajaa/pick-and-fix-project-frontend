"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import bannerImg6 from "../assets/Main Carousel assets/image_6.jpg"
import bannerImg7 from "../assets/Main Carousel assets/image_7.jpg"

function MainCarousel() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel pauseOnHover>
          <img
            src={bannerImg6}
            alt="..."
          />
          <img
            src={bannerImg7}
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
}

export default MainCarousel;
