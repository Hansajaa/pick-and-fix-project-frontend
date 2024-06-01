import React from "react";
import { Link } from "react-router-dom";

function UserProfileDropdown({ isUserMenuOpen }) {
  return (
    <>
      {isUserMenuOpen && (
        <div
          className="z-50 absolute top-16 right-4  my-4 text-base list-none bg-[#84A98C] divide-y divide-gray-100 rounded-lg shadow dark:bg-[#84A98C] dark:divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-white dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-sm  text-white truncate dark:text-white">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-white hover:bg-[#0e4047] dark:hover:bg-[#a8c9af] dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-white hover:bg-[#0e4047] dark:hover:bg-[#a8c9af] dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-white hover:bg-[#0e4047] dark:hover:bg-[#a8c9af] dark:text-gray-200 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <Link
                to={"/login"}
                className="block px-4 py-2 text-sm text-white hover:bg-[#0e4047] dark:hover:bg-[#a8c9af] dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default UserProfileDropdown;
