import React from "react";
import { Link } from "react-router-dom";

const CardArticle = () => {
  return (
    <div className="relative w-full group">
      <div className="w-full h-[250px] mb-6 relative">
        <div className="absolute w-full h-full inset-0 bg-black opacity-0 group-hover:opacity-20 rounded-lg"></div>
        <img
          src="/assets/images/contents/article-1.png"
          className="w-full h-full object-cover object-center rounded-lg"
          alt="leaf"
        />
      </div>
      <div className="flex gap-4 items-center mb-4">
        <p className="text-gray-300 text-xs">Jan 24, 2020</p>
        <p className="bg-gray-200 py-1 px-2 rounded-lg text-xs text-primary">
          Nature
        </p>
      </div>
      <div className=" mb-5">
        <p className="font-semibold group-hover:underline text-primary">
          5 Reasons Why Breakfast Is The Most Important Meal of The Day
        </p>
      </div>
      <div className="mb-6">
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe
          nihil mollitia
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="w-[46px] rounded-full">
          <img
            src="/assets/images/contents/user-1.png"
            className="w-full h-auto object-cover object-center"
            alt="author profile"
          />
        </div>
        <div className="">
          <p className="text-primary font-medium">Darrell Steward</p>
          <p className="text-gray-400 text-sm">Software Developer</p>
        </div>
      </div>
      <Link to="/" className="stretched-link "></Link>
    </div>
  );
};

export default CardArticle;
