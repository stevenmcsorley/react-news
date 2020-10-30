import React, { useEffect, useState, FunctionComponent } from "react";
import CardTwitter from '../../components/cards/Card-twitter-trend';
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
            {isError && <div>Twitter Trends will be back soon</div>}

            <div
            id="twitter_trends"
              className={`twitter_trends dev-u-padding-default dev-grid-wrapper__div--column--${Math.round(
                query.trends.length > 20 ?  query.trends.length / 5 : query.trends.length / 2
              )}`}
              
            >
              {query.trends
                .sort((a, b) => b.tweet_volume - a.tweet_volume)
                .map(
                  (item, index) =>
                    !isLoading && (
                      <CardTwitter 
                      key={index}
                      url={item.url}
                      hashtag={item.name}
                      volume={TwitterVol(item.tweet_volume)}
                      />
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
