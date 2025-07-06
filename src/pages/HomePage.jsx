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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/advertisement") // update with your actual API endpoint
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // check this
        setPosts(data?.data); // adjust based on actual structure
      })
      .catch((err) => console.error("Error fetching posts", err));
  }, []);

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

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10 px-4 md:px-10">
        {posts.slice(0, 6).map((post) => (
          <ItemCard key={post.id} post={post} />
        ))}
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
