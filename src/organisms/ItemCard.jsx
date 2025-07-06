import React, { useState } from "react";
import { Card } from "flowbite-react";
import { Rating } from "flowbite-react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import cardImg from "../assets/Card assets/card_img.jpg";

function ItemCard({ post }) {
  const [isFav, setFav] = useState(false);

  return (
    <Card
      className="w-full max-w-sm hover:scale-105 transition duration-500 bg-[#f6fff0]"
      imgAlt={post.title}
      // this image set for temparary. In production version Planned to save image into s3 bucket in AWS and set that image url into this.
       imgSrc={cardImg}
    >
      <h5 className="text-xl font-bold text-gray-900 dark:text-white">{post.title}</h5>
      <p className="text-gray-700 dark:text-gray-400">{post.description}</p>

      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
      </Rating>

      <div className="flex flex-row justify-between items-center mt-2">
        <span className="text-sm text-gray-600">{post.location}</span>
        <div className="flex flex-row gap-3">
          {isFav ? (
            <IoMdHeart color="#ff0000" size={25} onClick={() => setFav(!isFav)} />
          ) : (
            <CiHeart size={25} onClick={() => setFav(!isFav)} />
          )}
          <CiShare2 size={25} />
        </div>
      </div>
    </Card>
  );
}

export default ItemCard;
