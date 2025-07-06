import React, { useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import SearchBar from "../atoms/input-fields/SearchBar";
import ItemCard from "../organisms/ItemCard";
import SubscribeBar from "../atoms/input-fields/SubscribeBar";
import FootersSection from "../organisms/FootersSection";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    description: "",
    location: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/advertisement")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setPosts(data?.data || []);
      })
      .catch((err) => console.error("Error fetching posts", err));
  }, []);

  // Get unique values for dropdowns
  const uniqueTitles = [...new Set(posts.map((post) => post.title))];
  const uniqueDescriptions = [
    ...new Set(posts.map((post) => post.description)),
  ];
  const uniqueLocations = [...new Set(posts.map((post) => post.location))];

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesTitle =
      !filters.title || post.title === filters.title;
    const matchesDescription =
      !filters.description || post.description === filters.description;
    const matchesLocation =
      !filters.location || post.location === filters.location;
    return matchesTitle && matchesDescription && matchesLocation;
  });

  return (
    <>
      <Navbar />

      {/* Search Bar */}
      <div className="mt-10 flex justify-end px-4 md:px-10">
        <SearchBar />
      </div>

      {/* Layout with Filters + Cards */}
      <div className="flex flex-col lg:flex-row mt-10 px-4 md:px-10 gap-10">
        {/* Filter Sidebar */}
        <div className="lg:w-1/4 w-full bg-gray-100 p-5 rounded-md shadow-sm h-fit">
          <h3 className="text-xl font-semibold mb-4">Filters</h3>

          {/* Title Filter */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium">
              Filter by Title:
            </label>
            <select
              id="title"
              name="title"
              value={filters.title}
              onChange={handleFilterChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            >
              <option value="">All</option>
              {uniqueTitles.map((title, index) => (
                <option key={index} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>

          {/* Description Filter */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">
              Filter by Description:
            </label>
            <select
              id="description"
              name="description"
              value={filters.description}
              onChange={handleFilterChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            >
              <option value="">All</option>
              {uniqueDescriptions.map((desc, index) => (
                <option key={index} value={desc}>
                  {desc.length > 30 ? desc.slice(0, 30) + "..." : desc}
                </option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium">
              Filter by Location:
            </label>
            <select
              id="location"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            >
              <option value="">All</option>
              {uniqueLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {filteredPosts.map((post) => (
            <ItemCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <SubscribeBar />
      <div className="p-3 mt-10">
        <FootersSection />
      </div>
    </>
  );
}

export default PostsPage;
