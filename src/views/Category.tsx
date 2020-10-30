import React from "react";

import TopNews from "../components/news/NewsFactory";

import RepositoryFactory from "../api/respositoryFactory";
const NewsApi:any = RepositoryFactory.get("newsApi");

interface Category {
  category: string;
}

const Category = ({ category }: Category) => {
  const queryOne = {
    endpoint: "search",
    q: category,
    pageSize: 49,
    orderBy: "newest",
    showFields: "all",
  };

  const pageConfig = {
    firstSplitStart: 3,
    firstSplitEnd: 13,
    firstGridStart: 1,
    firstGridEnd: 2,
    secondSplitStart: 13,
    secondSplitEnd: 50,
    secondGridStart: 3,
  };
  // Move this out in to configs

  return (
    <div>
      <TopNews
        data={NewsApi.getNewsCategory(queryOne)}
        pageLayout={pageConfig}
        bottomSplit={5}
      />
    </div>
  );
};

export default Category;
