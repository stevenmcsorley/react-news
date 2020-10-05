import React, { FunctionComponent } from 'react';

import TopNews from '../components/news/NewsFactory'

  
const UsaNews: FunctionComponent = () => {

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
      q: "us-news",
      qInTitle: "",
      pageSize: 9,
      sortBy: "publishedAt",
      language: "en",
      key: `${process.env.REACT_APP_API_KEY}`,
    };
  
    const queryTwo = {
      api: `${process.env.REACT_APP_API_URL}`,
      country: "",
      endpoint: everything,
      q: "technology",
      qInTitle: "USA, US, Canada, America, United States",
      domains: 'abcnews.go.com, buzzfeed.com, bleacherreport.com, bloomberg.com, cbsnews.com, us.cnn.com, ccn.com, foxnews.com, msnbc.com, nbcnews.com, huffingtonpost.com',
      pageSize: 14,
      sortBy: "publishedAt",
      language: "en",
      key: `${process.env.REACT_APP_API_KEY}`,
    };
  
    const queryNews = (s: Query) => {
      return `https://content.guardianapis.com/search?order-by=newest&show-fields=all&q=${s.q}&page-size=18&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e`;
    };

    return (
        <div>
  <TopNews 
  newsUrl={queryNews(queryOne)}
  topSplit={3}
  bottomSplit={5}
  />
    <TopNews 
  newsUrl={queryNews(queryTwo)}
  topSplit={3}
  bottomSplit={5}
  />
  </div>
    )
}

export default UsaNews   