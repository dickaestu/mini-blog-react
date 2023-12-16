import React from "react";
import { useState } from "react";
import CardCategories from "./CardCategories";

const categories = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 1,
    title: "Politics",
  },
  {
    id: 2,
    title: "Technology",
  },
  {
    id: 3,
    title: "Business",
  },
  {
    id: 4,
    title: "Nature",
  },
  {
    id: 5,
    title: "Sports",
  },
];

const CategoriesArticle = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="mb-24">
      <ul className="flex flex-row gap-2 mb-6">
        {categories.map((item) => {
          return (
            <li key={item.id}>
              <button
                onClick={() => setActive(item.id)}
                className={`btn-categories ${
                  item.id === active && "btn-categories-active"
                }`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {Array(6)
          .fill()
          .map((_, index) => {
            return <CardCategories key={index} />;
          })}
      </div>
    </div>
  );
};

export default CategoriesArticle;
