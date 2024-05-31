import React from "react";
import Paragraph from "../atoms/texts/Paragraph";

function Devider() {
  return (
    <>
      <div className="grid grid-cols-3 text-gray-400 mt-8 w-5/6 ml-7">
        <hr className="border-gray-400 mt-2" />
        <Paragraph classes="text-center text-sm" content="OR" />
        <hr className="border-gray-400 mt-2" />
      </div>
    </>
  );
}

export default Devider;
