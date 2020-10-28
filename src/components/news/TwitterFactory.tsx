import React, { useEffect, useState, FunctionComponent } from "react";
import {TwitterVol} from '../../common/shared'

interface TwitterFeed {
  as_of: string;
  created_at: string;
  locations: Locations[];
  trends: Trends[];
}

interface Locations {
  name: string;
  woeid: number;
}

interface Trends {
  name: string;
  promoted_content: null;
  query: string;
  tweet_volume: number;
  url: string;
}

interface NewsProps {
  data?: any;
}

const Twitter: FunctionComponent<NewsProps> = ({ data }) => {
  const [query, setQuery] = useState<{ trends: Trends[] }>({
    trends: [],
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
  }, [data, query]);

  if (errorMsg === "Request failed with status code 429") {
    return <h4>Alernative Content</h4>;
  } else {
    return (
      <div>
        <div
          className={`dev-grid-wrapper__div--column--0 dev-u-padding-default`}
        >
          <div>
            {isError && <div>Something went wrong</div>}

            <div
            id="twitter_trends"
              className={`twitter_trends dev-u-padding-default dev-grid-wrapper__div--column--${Math.round(
                query.trends.length > 25 ? query.trends.length / 5 : query.trends.length / 2
              )}`}
              
            >
              {query.trends
                .sort((a, b) => b.tweet_volume - a.tweet_volume)
                .map(
                  (item, index) =>
                    !isLoading && (
                      <div key={index}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.name}
                        </a>
                        <p>{TwitterVol(item.tweet_volume)}</p>
                      </div>
                    )
                )}
            </div>
          </div>

          <div></div>
        </div>
      </div>
    );
  }
};

export default Twitter;
