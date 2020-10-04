import React, { FunctionComponent } from 'react';

import TopNews from '../components/news/NewsFactory'

  
const UKNews: FunctionComponent = () => {
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
    country: "gb",
    endpoint: topNews,
    q: "",
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
    q: "Uk",
    qInTitle: "Scotland, England, Wales, Ireland",
    domains: 'bbc.co.uk,uk.businessinsider.com,fourfourtwo.com,news.google.com,independent.co.uk,theladbible.com',
    pageSize: 13,
    sortBy: "publishedAt",
    language: "en",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const queryNews = (s: Query) => {
    return `${s.api}${s.endpoint}?q=${s.q}&qInTitle=${s.qInTitle}&pageSize=${s.pageSize}&sortBy=${s.sortBy}&domains=${s.domains}&language=${s.language}&country=${s.country}&apiKey=${s.key}`;
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

export default UKNews   