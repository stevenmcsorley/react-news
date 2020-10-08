import React, { FunctionComponent } from "react";

import TopNews from "../components/news/NewsFactory";

const Home: FunctionComponent = () => {
  const topNews = "top-headlines";
  const everything = "everything";

  interface Query {
    api: string;
    endpoint: string;
    country?: string;
    q?: string;
    qInTitle?: string;
    domains?: string,
    pageSize?: number;
    sortBy?: string;
    language: string;
    key: string;
  }

  const queryOne = {
    api: `${process.env.REACT_APP_API_URL}`,
    country: "us",
    endpoint: topNews,
    q: "World news",
    qInTitle: "",
    pageSize: 8,
    sortBy: "publishedAt",
    language: "en",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const queryTwo = {
    api: `${process.env.REACT_APP_API_URL}`,
    country: "",
    endpoint: everything,
    q: "Sport",
    qInTitle: "virus",
    domains: 'bbc.co.uk,uk.businessinsider.com,fourfourtwo.com,news.google.com,independent.co.uk,theladbible.com',
    pageSize: 13,
    sortBy: "publishedAt",
    language: "en",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const queryNews = (s: Query) => {
    // return `${s.api}${s.endpoint}?q=${s.q}&qInTitle=${s.qInTitle}&pageSize=${s.pageSize}&sortBy=${s.sortBy}&domains=${s.domains}&language=${s.language}&country=${s.country}&apiKey=${s.key}`;
  return `https://content.guardianapis.com/search?order-by=newest&show-fields=all&q=${s.q}&page-size=49&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e`
  };

const pageConfig ={
  firstSplitStart: 1,
  firstSplitEnd: 5,
  firstGridStart: 1,
  firstGridEnd: 2,
  secondSplitStart: 5,
  secondSplitEnd: 50,
  secondGridStart:4
}

  return (
    <div className="dev-grid-wrapper__div--column--0">
    
      <TopNews newsUrl={queryNews(queryOne)} pageLayout={pageConfig} bottomSplit={5} />

      <TopNews newsUrl={queryNews(queryTwo)} pageLayout={pageConfig} bottomSplit={5} />
      
    </div>
  );
};

export default Home;
