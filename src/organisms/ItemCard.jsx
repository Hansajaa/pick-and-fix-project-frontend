import React, { useState } from "react";
import { Card } from "flowbite-react";
import cardImg from "../assets/Card assets/card_img.jpg";
import { Rating } from "flowbite-react";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

function ItemCard() {

  const [isFav, setFav] = useState(false);

  return (
    <>
      <Card
        className="max-w-sm hover:scale-105 hover:duration-700 bg-[#f6fff0]"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={cardImg}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Emergency Service
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
        </Rating>

        <div className="flex flex-row place-self-end">
          <p>Colombo</p>
        </div>

        <div className="flex flex-row  place-self-end gap-3">
          {isFav ? <IoMdHeart color="#ff0000" size={25} onClick={() => setFav(!isFav)}/> : <CiHeart size={25} onClick={() => setFav(!isFav)}/>}
          <CiShare2 size={25} />
        </div>
      </Card>
    </>
  );
}

export default ItemCard;
