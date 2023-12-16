import React from "react";
import { Link } from "react-router-dom";

const CardCategories = () => {
  return (
    <div className="relative w-full group">
      <div className="flex flex-row gap-3 w-full">
        <div className="w-[100px] h-[100px] relative">
          <div className="absolute w-full h-full inset-0 bg-black opacity-0 group-hover:opacity-20 rounded-lg"></div>
          <img
            src="/assets/images/contents/article-1.png"
            className="w-full h-full object-cover object-center rounded-lg"
            alt="leaf"
          />
        </div>
        <div className="relative">
          <div className="mb-2">
            <p className="group-hover:underline line-clamp-1 text-primary">
              Pathways Squads put in strong impres all
            </p>
          </div>
          <div className="mb-2">
            <p className="text-gray-300 text-xs">Jan 24, 2020</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-[38px] rounded-full">
              <img
                src="/assets/images/contents/user-1.png"
                className="w-full h-auto object-cover object-center"
                alt="author profile"
              />
            </div>
            <div className="">
              <p className="text-primary font-medium text-sm">
                Darrell Steward
              </p>
              <p className="text-gray-400 text-xs">Software Developer</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="stretched-link"></Link>
    </div>
  );
};

export default CardCategories;
