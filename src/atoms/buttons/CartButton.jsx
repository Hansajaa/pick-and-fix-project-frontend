import React from 'react';

function CartButton() {
    return (
        <>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-[#15616D] dark:focus:ring-gray-600"
              id=""
              aria-expanded="false"
              data-dropdown-toggle="cart"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Navigate Cart</span>
              <img
                className="h-11 w-11 rounded-full p-1"
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/shopping-cart--v1.png"
                alt="shopping-cart--v1"
              />
            </button>
        </>
    );
}

export default CartButton;