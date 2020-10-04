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
    return `${s.api}${s.endpoint}?q=${s.q}&qInTitle=${s.qInTitle}&category=${s.category}&pageSize=${s.pageSize}&sortBy=${s.sortBy}&language=${s.language}&country=${s.country}&apiKey=${s.key}`;
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
