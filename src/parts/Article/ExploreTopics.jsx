import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import CardTopic from "./CardTopic";

const topics = [
  {
    id: 1,
    title: "Politics",
    image: "/assets/images/contents/topic-1.png",
    total: 56,
  },
  {
    id: 2,
    title: "Technology",
    image: "/assets/images/contents/topic-2.png",
    total: 43,
  },
  {
    id: 3,
    title: "Business",
    image: "/assets/images/contents/topic-3.png",
    total: 89,
  },
  {
    id: 4,
    title: "Nature",
    image: "/assets/images/contents/topic-4.png",
    total: 23,
  },
  {
    id: 5,
    title: "Sports",
    image: "/assets/images/contents/topic-5.png",
    total: 126,
  },
];

const ExploreTopics = () => {
  return (
    <div className="mb-24">
      <div className="flex justify-between mb-6">
        <h5 className="text-2xl font-semibold">Explore by Topics</h5>
        <Link
          className="text-primary font-semibold text-sm focus:outline-none flex items-center gap-2"
          to="/"
        >
          See All{" "}
          <span>
            <img src={ArrowRight} alt="see more" />
          </span>
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto md:grid md:grid-cols-5 md:gap-3">
        {topics.map((item) => {
          return (
            <CardTopic
              title={item.title}
              key={item.id}
              total={item.total}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreTopics;
