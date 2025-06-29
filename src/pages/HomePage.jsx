import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import MainCarousel from "../molecules/MainCarousel";
import SearchBar from "../atoms/input-fields/SearchBar";
import ItemCard from "../organisms/ItemCard";
import FootersSection from "../organisms/FootersSection";
import SubscribeBar from "../atoms/input-fields/SubscribeBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
  const navigate = useNavigate();
  

  useEffect(()=>{
      axios.post('http://localhost:3001/api/userAuthorize')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
  },[])
  
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
        {/* Responsive grid for cards */}
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-20">
          <div>
            <ItemCard />
          </div>

          <div>
            <ItemCard />
          </div>

          <div>
            <ItemCard />
          </div>
        </div>
      </div>

      <SubscribeBar />

      {/* Footer section */}
      <div className="p-3 mt-10">
        <FootersSection />
      </div>
    </div>
  );
}

export default HomePage;
