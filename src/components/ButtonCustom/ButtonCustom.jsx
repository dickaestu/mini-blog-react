import React from "react";
import { Link } from "react-router-dom";

const ButtonCustom = ({
  bgColor = "bg-blue-700",
  bgHover = "hover:bg-blue-950",
  fontWeight = "font-semibold",
  textSize = "text-sm",
  textColor = "text-white",
  textHover = "hover:text-white",
  width = "w-full",
  children,
  path = "/",
  border = "border-none",
}) => {
  return (
    <div className="inline-block flex-none">
      <Link
        to={path}
        className={[
          bgColor,
          fontWeight,
          textSize,
          textColor,
          bgHover,
          width,
          textHover,
          border,
          `px-5 py-3 flex justify-center text-center items-center focus:outline-none rounded-md`,
        ].join(" ")}
      >
        {children}
      </Link>
    </div>
  );
};

export default ButtonCustom;
