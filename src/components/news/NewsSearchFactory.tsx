import React, { useEffect, useState } from "react";

import { useHistory } from "react-router";
import SkeletonCard from "../../skeleton/Skeleton";

import axios from "axios";
import moment from "moment";
import CardSearch from "../cards/CardSearch";
import Paginate from "../pagination/Paginate";

import { Search } from "../../interfaces/INews";

interface NewsProps {
  newsUrl: string;
  pageLayout: pageLayout;
  bottomSplit: number;
  next: Function;
  prev: Function;
}

interface pageLayout {
  firstSplitStart: number;
  firstSplitEnd: number;
  firstGridStart: number;
  firstGridEnd: number;
  secondSplitStart: number;
  secondSplitEnd: number;
  secondGridStart: number;
}

const NewsSearch = (NewsProps: NewsProps) => {
  const history = useHistory();

  const [query, setQuery] = useState<{ response: Search }>({
    response: {
      currentPage: 1,
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

  const pagechangeRewind = (current_page: number) => {
    if (current_page > 1) {
      current_page--;
      return NewsProps.next(current_page);
    }
  };

  const pagechangeForward = (current_page: number) => {
    if (current_page < query.response.pages) {
      current_page++;

      return NewsProps.prev(current_page);
    }
  };

  const [isError, setIsError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    const fetchData = async () => {
      const result = await axios(NewsProps.newsUrl);
      setQuery(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [NewsProps.newsUrl]);

  if (isError) {
    return <h4>Alernative Content</h4>;
  } else {
    return (
      <div>
        <div className={`dev-grid-wrapper__div--column--1`}>
          <div>
            <Paginate
              paginateForward={pagechangeForward}
              paginateRewind={pagechangeRewind}
              paginationLive={query.response}
            />
          </div>
        </div>
        <div className={`dev-grid-wrapper__div--column--1`}>
          <div>
            {isLoading && <SkeletonCard count={50} grid={0} />}
            <div className={`dev-grid-wrapper__article--column--${0}`}>
              {isError && <div>Something went wrong</div>}

              {query.response.results.slice(0, 50).map(
                (item, index) =>
                  !isLoading && (
                    <CardSearch
                      key={index}
                      loading={isLoading}
                      pillarName={item.pillarName}
                      sectionName={item.sectionName}
                      summary={item.blocks.body[0].bodyTextSummary.split(" ").splice(0,50).join(" ") + '...'}
                      title={item.webTitle}
                      published={moment(`${item.webPublicationDate}`).fromNow(
                        true
                      )}
                      onClick={() =>
                        history.push({
                          pathname: `/search-article/${item.id}`,
                          state: { detail: item },
                        })
                      }
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NewsSearch;
