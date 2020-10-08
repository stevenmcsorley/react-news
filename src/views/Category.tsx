import React from "react";

import TopNews from "../components/news/NewsFactory";

interface Category{
  category: string
}

const Category = ({ category }:Category) => {

  interface Query {
    api: string;
    endpoint: string;
    q?: string;
    pageSize?: number;
    orderBy?: string;
    key: string;
  }

  const queryOne = {
    api: `${process.env.REACT_APP_API_URL}`,
    endpoint: 'top-headlines',
    q: category,
    pageSize: 49,
    orderBy: "newest",
    key: `${process.env.REACT_APP_API_KEY}`,
  };



  const queryNews = (s: Query) => {
    return `${s.api}/search?order-by=${s.orderBy}&show-fields=all&section=${s.q}&page-size=${s.pageSize}&api-key=${s.key}`;
  };

  const pageConfig ={
    firstSplitStart: 3,
    firstSplitEnd: 13,
    firstGridStart: 1,
    firstGridEnd: 2,
    secondSplitStart: 13,
    secondSplitEnd: 50,
    secondGridStart:6
  }
  // Move this out in to configs

  return (
    <div>
      <div>
        <h4>{queryOne.q}</h4>
      </div>
      <TopNews newsUrl={queryNews(queryOne)} pageLayout={pageConfig} bottomSplit={5} />
    </div>
  );
};

export default Category;
