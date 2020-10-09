import React, { FunctionComponent } from "react";

import TopNews from "../components/news/NewsFactory";

const Home: FunctionComponent = () => {
  interface Query {
    api: string;
    endpoint: string;
    q: string;
    section: string;
    pageSize?: number;
    orderBy?: string;
    showFields: string;
    key: string;
  }

  const queryOne = {
    api: `${process.env.REACT_APP_API_URL}`,
    endpoint: "search",
    q: "World news",
    section: "world",
    pageSize: 49,
    orderBy: "newest",
    showFields: "all",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const queryTwo = {
    api: `${process.env.REACT_APP_API_URL}`,
    endpoint: "search",
    q: "Sport",
    section: "sport",
    pageSize: 49,
    orderBy: "newest",
    showFields: "all",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const queryThree = {
    api: `${process.env.REACT_APP_API_URL}`,
    endpoint: "search",
    q: "Society",
    section: "society",
    pageSize: 49,
    orderBy: "newest",
    showFields: "all",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const queryNews = (s: Query) => {
    return `${s.api}/${s.endpoint}?order-by=${s.orderBy}&show-fields=${s.showFields}&section=${s.section}&q=${s.q}&page-size=${s.pageSize}&&api-key=${s.key}`;
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
      <h4 className="dev-u-padding-default section-title">{queryOne.q}</h4>
      <TopNews
        newsUrl={queryNews(queryOne)}
        pageLayout={pageConfig}
        bottomSplit={5}
      />
      <h4 className="dev-u-padding-default section-title">{queryTwo.q}</h4>
      <TopNews
        newsUrl={queryNews(queryTwo)}
        pageLayout={pageConfig}
        bottomSplit={5}
      />

      <h4 className="dev-u-padding-default section-title">{queryThree.q}</h4>
      <TopNews
        newsUrl={queryNews(queryThree)}
        pageLayout={pageConfig}
        bottomSplit={5}
      />
    </div>
  );
};

export default Home;
