import React from "react";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import CardArticle from "./CardArticle";

const TrendingTopics = () => {
  return (
    <div className="mb-24">
      <h5 className="text-2xl font-semibold mb-6">Trending</h5>
      <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-7 mb-10">
        {Array(6)
          .fill()
          .map((_, index) => {
            return <CardArticle key={index} />;
          })}
      </div>
      <div className="text-center">
        <ButtonCustom
          bgColor="bg-none"
          textColor="text-[#111827]"
          bgHover="hover:bg-[#D2D5DA]"
          textHover="hover:text-[#111827]"
          border="border border-[#D2D5DA]"
        >
          See All
        </ButtonCustom>
      </div>
    </div>
  );
};

export default TrendingTopics;
