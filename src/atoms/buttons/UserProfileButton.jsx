import React from 'react';
import user_icon from "../../assets/navbar assets/user_img.png"

function UserProfileButton({handleUserMenu}) {
    return (
        <>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-[#15616D] dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={handleUserMenu}
            >
              <span className="sr-only">Open user menu</span>
              <img width="48" height="48" src={user_icon} alt="" />
            </button>
        </>
    );
}

export default UserProfileButton;