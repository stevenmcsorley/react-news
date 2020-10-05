import React, { useEffect, useState, FunctionComponent } from "react";
import { useHistory } from 'react-router'
import axios from "axios";
import moment from "moment";
import Card from "../cards/Card";

interface NewsProps {
  newsUrl: string;
  topSplit: number;
  bottomSplit: number;
}

interface Response {
  currentPage: number
  orderBy: string
  pageSize: number
  pages: number
  results: Results[]
  startIndex: number
  status: string
  total: number
  userTier: string
}

interface Results {
  apiUrl: string
  fields: Fields
  id: string
  isHosted: boolean
  pillarId: string
  pillarName: string
  sectionId: string
  sectionName: string
  type: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
}

interface Fields{
body: string
bodyText: string
byline: string
bylineHtml: string
charCount: string
firstPublicationDate: string
headline: string
isInappropriateForSponsorship: string
isLive: string
isPremoderated: string
lang: string
lastModified: string
legallySensitive: string
liveBloggingNow: string
main: string
productionOffice: string
publication: string
shortUrl: string
shouldHideAdverts: string
shouldHideReaderRevenue: string
showAffiliateLinks: string
showInRelatedContent: string
standfirst: string
thumbnail: string
trailText: string
wordcount: string
}

const TopNews: FunctionComponent<NewsProps> = ({
  newsUrl,
  topSplit,
  bottomSplit,
}) => {
  const history = useHistory()

  const [query, setQuery] = useState<{ response: Response }>({
    response: {  
      currentPage: 0,
      orderBy: '',
      pageSize: 0,
      pages: 0,
      results: [],
      startIndex: 0,
      status: '',
      total: 0,
      userTier: ''},
  });
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  // const openInNewTab = (url: string) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };

  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/"
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
          {query.response.results.slice(0, topSplit).map((item) => (
            <Card
              key={item.id}
              image={item.fields.thumbnail}
              title={item.fields.headline}
              published={moment(`${item.webPublicationDate}`).fromNow(true)}
              // onClick={() => {
              //   openInNewTab(`${item.webUrl}`);
              // }}
              onClick={() => history.push({
               pathname: `/article/${item.id}`,
               state: { detail: item.fields }
              })}
            />
          ))}
        </div>

        <div
          className={`dev-grid-wrapper__article--column--${bottomSplit} dev-u-padding-default`}
        >
          {query.response.results.slice(topSplit, 100).map((item) => (
            <Card
         
            key={item.id}
            image={item.fields.thumbnail}
            title={item.fields.headline}
            published={moment(`${item.webPublicationDate}`).fromNow(true)}
            // onClick={() => {
            //   openInNewTab(`${item.webUrl}`);
            //   }}
            onClick={() => history.push({
              pathname: `/article/${item.id}`,
              state: [item.fields] 
             })}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default TopNews;
