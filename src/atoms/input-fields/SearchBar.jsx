import React from "react";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <>
      <div className="relative w-4/5 sm:w-3/5 md:w-2/5">
        <input
          placeholder="Search..."
          type="text"
          className="bg-[#2F3E46] border-[#84A98C] hover:border-[#84A98C] rounded-full text-[#84A98C] focus:border-[#84A98C] focus:outline-none focus:ring-0 focus:shadow-sm  w-full pl-4 pr-10"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <IoSearch size={30} color="#84A98C" />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
