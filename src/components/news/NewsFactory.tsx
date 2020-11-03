import React, { useEffect, useState, FunctionComponent } from "react";

import { useHistory } from "react-router";

import SkeletonCard from "../../skeleton/Skeleton";

import moment from "moment";
import Card from "../cards/Card";
import CardSmall from "../cards/CardSmall";

import {TruncateWords} from '../../common/shared';

import { News } from "../../interfaces/INews";

interface NewsProps {
  data?: any
  pageLayout: pageLayout;
  bottomSplit: number;
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

const TopNews: FunctionComponent<NewsProps> = ({ data, pageLayout }) => {
  const history = useHistory();

  const [query, setQuery] = useState<{ response: News }>({
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
        const result = await data;
        setQuery(result.data);
        setIsLoading(false);
      } catch (error) {
        setErrorMsg(error.message);
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [data]);

  if (errorMsg === "Request failed with status code 429") {
    return <h4>Alernative Content</h4>;
  } else {
    return (
      <div>
        <div className={`dev-grid-wrapper__div--column--2`}>
          <div>
            {isLoading && (
              <SkeletonCard
                count={pageLayout.firstSplitStart}
                grid={pageLayout.firstGridStart}
              />
            )}
            <div
              className={`dev-grid-wrapper__article--column--${pageLayout.firstGridStart}`}
            >
              {isError && <div>Something went wrong</div>}
              {query.response.results.slice(0, pageLayout.firstSplitStart).map(
                (item, index) =>
                  !isLoading && (
                    <Card
                      key={index}
                      loading={isLoading}
                      image={item.fields.thumbnail}
                      type={item.type}
                      title={item.fields.headline}
                      published={moment(`${item.webPublicationDate}`).fromNow(
                        true
                      )}
                      onClick={() =>
                        history.push({
                          pathname: `/article/${item.id}`,
                          state: { detail: item },
                        })
                      }
                    />
                  )
              )}
            </div>
          </div>

          <div>
            {isLoading && (
              <SkeletonCard count={4} grid={pageLayout.firstGridEnd} />
            )}
            <div
              className={`dev-grid-wrapper__article--column--${pageLayout.firstGridEnd}`}
            >
              {isError && <div>Something went wrong</div>}

              {query.response.results
                .slice(pageLayout.firstSplitStart, pageLayout.firstSplitEnd)
                .map((item, index) => (
                  <Card
                    key={index}
                    loading={isLoading}
                    image={item.fields.thumbnail}
                    title={item.fields.headline}
                    published={moment(`${item.webPublicationDate}`).fromNow(
                      true
                    )}
                    onClick={() =>
                      history.push({
                        pathname: `/article/${item.id}`,
                        state: { detail: item },
                      })
                    }
                  />
                ))}
            </div>
          </div>
        </div>
        {isLoading && (
          <SkeletonCard count={11} grid={pageLayout.secondGridStart} />
        )}
        <div
          className={`dev-grid-wrapper__article--column--${pageLayout.secondGridStart} dev-u-padding-default`}
        >
          {query.response.results
            .slice(pageLayout.secondSplitStart, pageLayout.secondSplitEnd)
            .map((item, index) => (
              <CardSmall
                loading={isLoading}
                key={index}
                image={item.fields.thumbnail}
                title={item.fields.headline}
                trailText={TruncateWords(item.fields.trailText, 14, '...')}
                onClick={() =>
                  history.push({
                    pathname: `/article/${item.id}`,
                    state: { detail: item },
                  })
                }
              />
            ))}
        </div>
      </div>
    );
  }
};

export default TopNews;
