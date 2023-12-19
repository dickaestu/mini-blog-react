import React from "react";
import { Link } from "react-router-dom";

const CardTopic = ({ image, title, total }) => {
  return (
    <div className="relative h-[4.9rem] w-full group md:h-[7.3rem]">
      <div className="w-[154px] md:w-full h-full">
        <img
          className="w-full h-full rounded-lg object-cover object-center"
          src={image}
          alt={title}
        />
      </div>
      <div className="absolute px-4 py-2 bottom-0 group-hover:underline group-hover:text-white">
        <p className="text-white font-medium text-sm md:font-semibold md:text-xl">
          {title}
        </p>
        <p className="text-[#F9FAFB] text-xs font-normal md:text-base md:font-normal">
          {total} articles
        </p>
      </div>
      <Link to="/" className="stretched-link"></Link>
    </div>
  );
};

export default CardTopic;
