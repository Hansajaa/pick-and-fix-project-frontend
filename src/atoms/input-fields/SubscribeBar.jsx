import React from "react";

function SubscribeBar() {
  return (
    <>
      <div className="flex flex-row justify-center mt-10 gap-3">
        <div className="flex-col">
          <input placeholder="Enter Your Email" type="email" className="rounded-full w-80" />
        </div>
        <div className="flex-col text-white">
          <button className="bg-[#84A98C] py-2 px-6 rounded-full hover:scale-105 duration-500">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}

export default SubscribeBar;
