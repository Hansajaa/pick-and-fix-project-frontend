import React from "react";
import Navbar from "../organisms/Navbar";
import SearchBar from "../atoms/input-fields/SearchBar";
import ItemCard from "../organisms/ItemCard";
import SubscribeBar from "../atoms/input-fields/SubscribeBar";
import FootersSection from "../organisms/FootersSection";

function PostsPage() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Search Bar */}
      <div className="mt-10 flex justify-end mr-5">
        <SearchBar />
      </div>

      {/* Card Section */}
      <div>
        {/* first row */}
        <div className="flex flex-row gap-20 justify-center mt-10">
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

        {/* second row */}
        <div className="flex flex-row gap-20 justify-center mt-10">
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

      {/* Subscribe Bar */}
      <SubscribeBar />

      {/* Footer */}
      <div className="p-3 mt-10">
        <FootersSection />
      </div>
    </>
  );
}

export default PostsPage;
