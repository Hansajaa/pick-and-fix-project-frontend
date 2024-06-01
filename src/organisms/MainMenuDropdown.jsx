import React from "react";
import { Link } from "react-router-dom";

function MainMenuDropdown({ isMainMenuOpen, handleCategoryMenu }) {
  return (
    <>
      {isMainMenuOpen && (
        <div
          className="z-50 items-end absolute top-14 translate-x-10 right-5 justify-end w-full p-2 md:hidden md:order-1 ml-auto mr-5"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#84A98C] rounded-lg bg-[#84A98C] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#84A98C] dark:bg-[#84A98C] md:dark:bg-[#84A98C] dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 text-white rounded hover:bg-[#0e4047] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-[#a8c9af] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={handleCategoryMenu}
                className="block py-2 px-3 text-white rounded hover:bg-[#0e4047] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-[#a8c9af] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Posts
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded hover:bg-[#0e4047] md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-300 dark:hover:bg-[#a8c9af] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MainMenuDropdown;
