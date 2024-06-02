import React, { useState } from "react";
import Navbar from "../organisms/Navbar";
import MainCarousel from "../molecules/MainCarousel";
import SearchBar from "../atoms/input-fields/SearchBar";
import ItemCard from "../organisms/ItemCard";
import FootersSection from "../organisms/FootersSection";
import SubscribeBar from "../atoms/input-fields/SubscribeBar";

function HomePage(props) {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Navbar />

      {/* Carousel */}
      <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 mt-10 m-3">
        <MainCarousel />
      </div>

      {/* Posts Search Bar */}
      <div className="flex justify-end mr-3">
        <SearchBar />
      </div>

      {/* Card Section */}
      <div className="mt-10">
        {/* first row */}
        <div className="flex flex-row gap-20 justify-center">
          <div className="flex flex-col">
            <ItemCard />
          </div>

          <div className="flex flex-col">
            <ItemCard />
          </div>

          <div className="flex flex-col">
            <ItemCard />
          </div>
        </div>
      </div>

      <SubscribeBar/>

      {/* Footer section */}
      <div className="p-3 mt-10">
      <FootersSection/>
      </div>
      
    </div>
  );
}

export default HomePage;
