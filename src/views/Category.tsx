import React from "react";

import TopNews from "../components/news/NewsFactory";

interface Category{
  category: string
}

const Category = ({ category }:Category) => {
  const topNews = "top-headlines";

  interface Query {
    api: string;
    endpoint: string;
    country?: string;
    q?: string;
    qInTitle?: string;
    category?: string;
    pageSize?: number;
    sortBy?: string;
    language: string;
    key: string;
  }

  const queryOne = {
    api: `${process.env.REACT_APP_API_URL}`,
    country: "gb",
    endpoint: topNews,
    q: "",
    qInTitle: "",
    category: category,
    pageSize: 13,
    sortBy: "publishedAt",
    language: "en",
    key: `${process.env.REACT_APP_API_KEY}`,
  };



  const queryNews = (s: Query) => {
    return `https://content.guardianapis.com/search?order-by=newest&show-fields=all&section=${s.category}&page-size=18&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e`;
  };

  return (
    <div>
      <div>
        <h4>{queryOne.q}</h4>
      </div>
      <TopNews newsUrl={queryNews(queryOne)} topSplit={3} bottomSplit={5} />
    </div>
  );
};

export default Category;
