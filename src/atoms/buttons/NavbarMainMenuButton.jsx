import React from 'react';

function NavbarMainMenuButton({handleMainMenu}) {
    return (
        <>
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-[#133035] focus:outline-none focus:ring-2 focus:ring-[#15616D] dark:text-gray-400 dark:bg-[#2F3E46] dark:hover:bg-gray-500 dark:focus:ring-gray-500"
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={handleMainMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
        </>
    );
}

export default NavbarMainMenuButton;