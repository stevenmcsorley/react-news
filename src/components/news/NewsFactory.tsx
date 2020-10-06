import React, { useEffect, useState, FunctionComponent } from "react";

import { useHistory } from "react-router";
import axios from "axios";
import moment from "moment";
import Card from "../cards/Card";

import { Response } from "../../interfaces/INews";

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

const TopNews: FunctionComponent<NewsProps> = ({
  newsUrl,
  pageLayout,
  bottomSplit,
}) => {
  const history = useHistory();

  const [query, setQuery] = useState<{ response: Response }>({
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
            <div className={`dev-grid-wrapper__article--column--${pageLayout.firstGridStart}`}>
              {isError && <div>Something went wrong</div>}

              {query.response.results.slice(0, pageLayout.firstSplitStart).map((item) => (
                <Card
                  key={item.id}
                  loading={isLoading}
                  image={item.fields.thumbnail}
                  title={item.fields.headline}
                  published={moment(`${item.webPublicationDate}`).fromNow(true)}
                  onClick={() =>
                    history.push({
                      pathname: `/article/${item.id}`,
                      state: { detail: item.fields },
                    })
                  }
                />
              ))}
            </div>
          </div>

          {/* firstSplitStart: 1,
  firstSplitEnd: 13,
  firstGridStart: 1,
  firstGridEnd: 2 */}

          <div>
            <div className={`dev-grid-wrapper__article--column--${pageLayout.firstGridEnd}`}>
              {isError && <div>Something went wrong</div>}

              {query.response.results.slice(pageLayout.firstSplitStart, pageLayout.firstSplitEnd).map((item) => (
                <Card
                  key={item.id}
                  loading={isLoading}
                  image={item.fields.thumbnail}
                  title={item.fields.headline}
                  published={moment(`${item.webPublicationDate}`).fromNow(true)}
                  onClick={() =>
                    history.push({
                      pathname: `/article/${item.id}`,
                      state: { detail: item.fields },
                    })
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`dev-grid-wrapper__article--column--${pageLayout.secondGridStart} dev-u-padding-default`}
        >
          {query.response.results.slice(pageLayout.secondSplitStart, pageLayout.secondSplitEnd).map((item) => (
            <Card
              loading={isLoading}
              key={item.id}
              image={item.fields.thumbnail}
              title={item.fields.headline}
              published={moment(`${item.webPublicationDate}`).fromNow(true)}
              onClick={() =>
                history.push({
                  pathname: `/article/${item.id}`,
                  state: { detail: item.fields },
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
