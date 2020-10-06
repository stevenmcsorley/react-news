import React, { useEffect, useState, FunctionComponent } from "react";

import { useHistory } from "react-router";
// import Skeleton from "react-loading-skeleton";
import SkeletonCard from '../../skeleton/Skeleton'


import axios from "axios";
import moment from "moment";
import CardSearch from "../cards/CardSearch";



import { Search } from "../../interfaces/INews";

interface NewsProps {
  newsUrl: string;
  pageLayout: pageLayout;
  bottomSplit: number;
}

interface pageLayout{
  firstSplitStart: number,
  firstSplitEnd: number,
  firstGridStart: number,
  firstGridEnd: number,
  secondSplitStart: number,
  secondSplitEnd: number,
  secondGridStart: number
}

const NewsSearch: FunctionComponent<NewsProps> = ({
  newsUrl,
  pageLayout,
}) => {
  const history = useHistory();

  const [query, setQuery] = useState<{ response: Search }>({
    response: {
      currentPage: 0,
      orderBy: "",
      pageSize: 0,
      pages: 0,
      results: [],
      startIndex: 0,
      status: "",
      total: 0,
      userTier: "",
    },
  });
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get(newsUrl);
        
        setQuery(result.data);
        setIsLoading(false);
      } catch (error) {
        setErrorMsg(error.message);
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [newsUrl]);

  if (errorMsg === "Request failed with status code 429") {
    return <h4>Alernative Content</h4>;
  } else {
    return (
      <div>
        <div className={`dev-grid-wrapper__div--column--2`}>
          <div>
          {isLoading && <SkeletonCard count={11} grid={pageLayout.firstGridStart}/>}
            <div className={`dev-grid-wrapper__article--column--${pageLayout.firstGridStart}`}>
              {isError && <div>Something went wrong</div>}
              
              {query.response.results.slice(0, pageLayout.firstSplitStart).map((item, index) => (
                
                <CardSearch
                  key={index}
                  loading={isLoading}
        
                  title={item.webTitle}
                  published={moment(`${item.webPublicationDate}`).fromNow(true)}
                  onClick={() =>
                    history.push({
                      pathname: `/article/${item.id}`,
                      state: { detail: item.blocks.main },
                    })
                  }
                />
              ))}
            </div>
          </div>

          <div>
          {isLoading && <SkeletonCard count={11} grid={pageLayout.firstGridEnd}/>}
            <div className={`dev-grid-wrapper__article--column--${pageLayout.firstGridEnd}`}>
              {isError && <div>Something went wrong</div>}
    
              {query.response.results.slice(pageLayout.firstSplitStart, pageLayout.firstSplitEnd).map((item, index) => (
                <CardSearch
                key={index}
                loading={isLoading}
                title={item.webTitle}
                published={moment(`${item.webPublicationDate}`).fromNow(true)}
                onClick={() =>
                  history.push({
                    pathname: `/article/${item.id}`,
                    state: { detail: item.blocks.main },
                  })
                }
                />
              ))}
            </div>
          </div>
        </div>
        {isLoading && <SkeletonCard count={11} grid={pageLayout.secondGridStart}/>}
        <div
          className={`dev-grid-wrapper__article--column--${pageLayout.secondGridStart} dev-u-padding-default`}
        >
        
          {query.response.results.slice(pageLayout.secondSplitStart, pageLayout.secondSplitEnd).map((item, index) => (
            <CardSearch
            key={index}
            loading={isLoading}
            title={item.webTitle}
            published={moment(`${item.webPublicationDate}`).fromNow(true)}
            onClick={() =>
              history.push({
                pathname: `/article/${item.id}`,
                state: { detail: item.blocks.main },
              })
            }
            />
          ))}
        </div>
      </div>
    );
  }
};

export default NewsSearch;