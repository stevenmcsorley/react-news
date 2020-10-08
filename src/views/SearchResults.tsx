import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import NewsSearch from "../components/news/NewsSearchFactory";

const SearchResults = () => {
  interface LocationState {
    term: string;
  }

  const location = useLocation<LocationState>();
  const { term } = location.state;
  const [page, setPage] = useState<number>(1);

  interface Query {
    api: string;
    endpoint: string;
    q?: string;
    page: number;
    pageSize?: number;
    orderBy?: string;
    showBlocks: string;
    key: string;
  }

  const queryParams = {
    api: `${process.env.REACT_APP_API_URL}`,
    endpoint: "search",
    q: term,
    page: page,
    pageSize: 50,
    orderBy: "relevance",
    showBlocks: "all",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const queryNews = (s: Query) => {
    return `${s.api}/${s.endpoint}?q=${s.q}&page=${s.page}&page-size=${s.pageSize}&order-by=${s.orderBy}&show-blocks=${s.showBlocks}&api-key=${s.key}`;
  };

  const pageConfig = {
    firstSplitStart: 3,
    firstSplitEnd: 13,
    firstGridStart: 1,
    firstGridEnd: 2,
    secondSplitStart: 6,
    secondSplitEnd: 20,
    secondGridStart: 6,
  };
  // Move this out in to configs

  return (
    <div>
      <NewsSearch
        newsUrl={queryNews(queryParams)}
        pageLayout={pageConfig}
        bottomSplit={5}
        next={(currentPage: number) => setPage(currentPage)}
        prev={(currentPage: number) => setPage(currentPage)}
      />
    </div>
  );
};

export default SearchResults;
