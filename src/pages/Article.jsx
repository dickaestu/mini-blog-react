import React from "react";
import TrendingTopics from "../parts/Article/TrendingTopics";
import CategoriesArticle from "../parts/Article/CategoriesArticle";
import ExploreTopics from "../parts/Article/ExploreTopics";

const Article = () => {
  return (
    <section className="container mx-auto px-4 md:px-0">
      <TrendingTopics />
      <CategoriesArticle />
      <ExploreTopics />
    </section>
  );
};

export default Article;
