import React from "react";
import { useEffect, useState } from "react";
import {useLocation } from "react-router";

interface Results {
  apiUrl: string;
  fields: Fields;
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  sectionId: string;
  sectionName: string;
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
}

interface Fields {
  body: string;
  bodyText: string;
  byline: string;
  bylineHtml: string;
  charCount: string;
  firstPublicationDate: string;
  headline: string;
  isInappropriateForSponsorship: string;
  isLive: string;
  isPremoderated: string;
  lang: string;
  lastModified: string;
  legallySensitive: string;
  liveBloggingNow: string;
  main: string;
  productionOffice: string;
  publication: string;
  shortUrl: string;
  shouldHideAdverts: string;
  shouldHideReaderRevenue: string;
  showAffiliateLinks: string;
  showInRelatedContent: string;
  standfirst: string;
  thumbnail: string;
  trailText: string;
  wordcount: string;
}

interface RouteParams {
  id: string;
}

interface Location {
  detail: Fields;
}



// const Article = ({ fields }:Results) => {
const Article = () => {

  const location = useLocation<Location>();

  const [pageContent, setPageContentl] = useState<Fields>();

  useEffect( () => {
     async function fetchData() {
        setPageContentl(location.state.detail);
      }
      fetchData();
  }, [location]);
  return (
    <div>
      <div>
        {/* {pageContent.map((item) => ( */}
          
        <section>
          
          <div className='dev-card-base dev-flex-column dev-u-padding-default'>
          <div className='dev-card-base__header dev-u-padding-default'>
          <h4>{pageContent?.headline}</h4>
              </div>
          <div className='dev-card-base__body dev-card-base__body--grow dev-u-padding-default dev-u-align-left '>
        <p>{pageContent?.bodyText}</p>
              </div>
        </div>
          </section>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Article;
