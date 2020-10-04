import React, { useEffect, useState, FunctionComponent } from "react";
// import { useHistory } from 'react-router-dom'
import axios from "axios";
import moment from "moment";
import Card from "../cards/Card";

interface NewsProps {
  newsUrl: string;
  topSplit: number;
  bottomSplit: number;
}

interface Articles {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Source {
  id: boolean;
  name: string;
}

const TopNews: FunctionComponent<NewsProps> = ({
  newsUrl,
  topSplit,
  bottomSplit,
}) => {
  // const history = useHistory()

  const [query, setQuery] = useState<{ articles: Articles[] }>({
    articles: [],
  });
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      const url = newsUrl;
      try {
        const result = await axios.get(url);
        setQuery(result.data);
      } catch (error) {
        setErrorMsg(error.message);
        setIsError(true);
      }
    }
    fetchData();
  }, [newsUrl]);

  if (errorMsg === "Request failed with status code 429") {
    return <h4>Alernative Content</h4>;
  } else {
    return (
      <div>
        <div
          className={`dev-grid-wrapper__article--column--${topSplit} dev-u-padding-default`}
        >
          {isError && <div>Something went wrong</div>}
          {query.articles.slice(0, topSplit).map((item) => (
            <Card
              key={item.publishedAt}
              image={item.urlToImage}
              title={item.title}
              published={moment(`${item.publishedAt}`).fromNow(true)}
              onClick={() => {
                openInNewTab(`${item.url}`);
              }}
            />
          ))}
        </div>

        <div
          className={`dev-grid-wrapper__article--column--${bottomSplit} dev-u-padding-default`}
        >
          {query.articles.slice(topSplit, 100).map((item) => (
            <Card
              key={item.publishedAt}
              image={item.urlToImage}
              title={item.title}
              published={moment(`${item.publishedAt}`).fromNow(true)}
              onClick={() => {
                openInNewTab(`${item.url}`);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default TopNews;
