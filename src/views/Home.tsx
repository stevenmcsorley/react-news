import React, { FunctionComponent } from "react";

import TopNews from "../components/news/NewsFactory";
import TwitterFeed from "../components/news/TwitterFactory"

import RepositoryFactory from "../api/respositoryFactory";
const NewsApi:any = RepositoryFactory.get("newsApi");
const twitterApi:any = RepositoryFactory.get("twitterApi");

const Home: FunctionComponent = () => {
  const queryOne = {
    endpoint: "search",
    q: "World news",
    section: "world",
    pageSize: 49,
    orderBy: "newest",
    showFields: "all",
  };

  const queryTwo = {
    endpoint: "search",
    q: "Sport",
    section: "sport",
    pageSize: 49,
    orderBy: "newest",
    showFields: "all",
  };

  const queryThree = {
    endpoint: "search",
    q: "Society",
    section: "society",
    pageSize: 49,
    orderBy: "newest",
    showFields: "all",
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
 <h4 className="dev-u-padding-default section-title">Latest Trends on Twitter</h4>
<TwitterFeed
      data={twitterApi.getTrends()}
      />
      <h4 className="dev-u-padding-default section-title">{queryOne.q}</h4>

      <TopNews
        data={NewsApi.getNews(queryOne)}
        pageLayout={pageConfig}
        bottomSplit={5}
      />
      <h4 className="dev-u-padding-default section-title">{queryTwo.q}</h4>
      <TopNews
        data={NewsApi.getNews(queryTwo)}
        pageLayout={pageConfig}
        bottomSplit={5}
      />

      <h4 className="dev-u-padding-default section-title">{queryThree.q}</h4>
      <TopNews
        data={NewsApi.getNews(queryThree)}
        pageLayout={pageConfig}
        bottomSplit={5}
      />
    </div>
  );
};

export default Home;
