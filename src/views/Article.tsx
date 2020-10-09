import React from "react";
import { useEffect, useState } from "react";
import {useLocation } from "react-router";

import {NewsResults} from '../interfaces/INews'

interface RouteParams {
  id: string;
}

interface Location {
  detail: NewsResults;
}

const Article = () => {

  const location = useLocation<Location>();

  const [pageContent, setPageContentl] = useState<NewsResults[]>([]);

  console.log("location.state.detail", location.state.detail)

  useEffect(() => {
    setPageContentl([location.state.detail]);
  }, [location]);
  return (
    <div>
      <div className={`dev-grid-wrapper__div--column--3`}>
        <div></div>
        {pageContent.map((item, index) => (
          
        <div key={index}>
          
          <div className='dev-card-base dev-flex-column dev-u-padding-default'>
          <div className='dev-card-base__header dev-u-padding-default'>
          <h4>{item.fields.headline}</h4>
              </div>
          <div className='dev-card-base__body dev-card-base__body--grow dev-u-padding-default dev-u-align-left '>
              <p dangerouslySetInnerHTML={{__html: item.fields.body}}/>
              </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
