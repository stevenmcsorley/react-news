import React, { FunctionComponent } from "react";

import TopNews from "../components/news/NewsFactory";

const Home: FunctionComponent = () => {
  interface Query {
    api: string;
    endpoint: string;
    q?: string;
    pageSize?: number;
    orderBy?: string;
    showFields: string;
    key: string;
  }

  const queryOne = {
    api: `${process.env.REACT_APP_API_URL}`,
    endpoint: "search",
    q: "World news",
    pageSize: 49,
    orderBy: "newest",
    showFields: "all",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const queryTwo = {
    api: `${process.env.REACT_APP_API_URL}`,
    endpoint: "search",
    q: "Sport",
    pageSize: 49,
    orderBy: "newest",
    showFields: "all",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const queryNews = (s: Query) => {
    return `${s.api}/${s.endpoint}?order-by=${s.orderBy}&show-fields=${s.showFields}&q=${s.q}&page-size=${s.pageSize}&api-key=${s.key}`;
  };

  const pageConfig = {
    firstSplitStart: 1,
    firstSplitEnd: 5,
    firstGridStart: 1,
    firstGridEnd: 2,
    secondSplitStart: 5,
    secondSplitEnd: 50,
    secondGridStart: 4,
  };

  return (
    <div className="dev-grid-wrapper__div--column--0">
      <TopNews
        newsUrl={queryNews(queryOne)}
        pageLayout={pageConfig}
        bottomSplit={5}
      />

      <TopNews
        newsUrl={queryNews(queryTwo)}
        pageLayout={pageConfig}
        bottomSplit={5}
      />
    </div>
  );
};

export default Home;
