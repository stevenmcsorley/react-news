import React, {useState} from "react";
import { useLocation } from "react-router-dom";

import NewsSearch from "../components/news/NewsSearchFactory";
import Paginate from "../components/pagination/Paginate"

interface SearchQuery{
  searchQuery: string
}

const SearchResults = () => {
  const topNews = "top-headlines";

  interface Paginate{
    page:number
  }

  const [page, setPage] = useState(1);

  interface LocationState {
   
      term: string;
    
  }
  
 
    const location = useLocation<LocationState>();
  
    const { term } = location.state;
  
  const pagechangeForward =(e:number) =>{
    setPage(e)
  }

  const pagechangeRewind =(e:number) =>{
    setPage(e)
  }



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
    category: term,
    pageSize: 13,
    sortBy: "publishedAt",
    language: "en",
    key: `${process.env.REACT_APP_API_KEY}`,
  };

  const pagination = {
    page: page,
    offset: 50,
    total: 0
  }



  const queryNews = (s: Query) => {
    return `https://content.guardianapis.com/search?q=${s.category}&page=${pagination.page}&page-size=50&order-by=relevance&show-blocks=all&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e`;
  };

  const pageConfig ={
    firstSplitStart: 3,
    firstSplitEnd: 13,
    firstGridStart: 1,
    firstGridEnd: 2,
    secondSplitStart: 6,
    secondSplitEnd: 20,
    secondGridStart:6
  }
  // Move this out in to configs

  return (
    <div>
      <div>
        <h4>{queryOne.q}</h4>
      </div>
      <Paginate paginateForward={pagechangeForward} paginateRewind={pagechangeRewind}/>
      <NewsSearch newsUrl={queryNews(queryOne)} pageLayout={pageConfig} bottomSplit={5} />
    </div>
  );
};

export default SearchResults;
