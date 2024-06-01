import React from "react";
import { Link } from "react-router-dom";

function CategoryDropdown({isCategoryMenuOpen}) {
  return (
    <>
    {isCategoryMenuOpen && <div
        className="z-50 items-end absolute top-16 translate-x-10 right-5 justify-end w-full p-2 ml-auto mr-5"
        id="navbar-user"
      >
        <ul className="flex flex-col font-medium p-4  mt-4 border border-[#15616D] rounded-lg bg-[#84A98C]  rtl:space-x-reverse  dark:bg-[#84a98c]  dark:border-gray-700">
          <li>
            <Link
              to={"/womenCategory"}
              className="block py-2 px-3 text-white rounded hover:bg-[#84A98C]   dark:text-white  dark:hover:bg-[#a8c9af] dark:hover:text-white  dark:border-gray-700"
              aria-current="page"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to={"/menCategory"}
              className="block py-2 px-3 text-white rounded hover:bg-[#0e4047] dark:text-white  dark:hover:bg-[#a8c9af] dark:hover:text-white  dark:border-gray-700"
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to={"/babyCategory"}
              className="block py-2 px-3 text-white rounded hover:bg-[#0e4047]  dark:text-white  dark:hover:bg-[#a8c9af] dark:hover:text-white  dark:border-gray-700"
            >
              Baby
            </Link>
          </li>
          <li>
            <Link
              to={"/kidsCategory"}
              className="block py-2 px-3 text-white rounded hover:bg-[#0e4047]  dark:text-white  dark:hover:bg-[#a8c9af] dark:hover:text-white  dark:border-gray-700"
            >
              Kids
            </Link>
          </li>
        </ul>
      </div>}
      
    </>
  );
}

export default CategoryDropdown;
