import React, { FunctionComponent } from "react";
// import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
import SkeletonCard from "../../skeleton/Skeleton";
import "./Card.scss";

// import {SingleResponse} from '../../interfaces/ISingleArticle'

//  TODO: Needs refactor to uncouple API call inside here
// and extract interfaces

interface CardProps {
  loading?: boolean;
  image?: string;
  title?: string;
  body:any;
  published?: string | Date | number;
}





const CardRelated: FunctionComponent<CardProps> = ({
  loading,
  image,
  body,
  title,
 }) => {
  // const [isLoading, setIsLoading] = useState(false);

  // const history = useHistory();


  // const [query, setQuery] = useState<{ response: SingleResponse }>({
  //   response: {
  //     content: {
  //       fields: {
  //         body: "",
  //       },
  //     },
  //     relatedContent: [],
  //     status: "",
  //     total: 0,
  //     userTier: "",
  //   },
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const result = await data;
  //       setQuery(result.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [data, query]);
  const placeholderImage =
    "https://c.pxhere.com/photos/aa/fa/newspaper_news_information_read_press_daily_newspaper_paper_magazines-811573.jpg!d";
  return (
    <div>
      {loading && <SkeletonCard count={1} grid={2} />}
      <div className={`dev-grid-wrapper__div--column--2 dev-u-padding-default`}>
        <div className="position-relative ">
          <div className="dev-card-base dev-flex-column dev-u-padding-default">
            <div className="dev-card-base__header dev-u-padding-default">
              <h4 className="dev-u-padding-horizontal card-title">{title}</h4>
            </div>
            <div className="dev-card-base__body dev-card-base__body--grow dev-u-padding-default dev-u-align-left ">
              <p
                dangerouslySetInnerHTML={{
                  __html: body,
                }}
              />
            </div>
          </div>
        </div>

        {/* <div className="position-relative">
          <div>
          
          {query.response.relatedContent.map((item, index) => (
            <div key={index}>
              <div className="dev-card-base dev-flex-column dev-u-padding-default dev-u-margin-bottom">
                <div className="dev-card-base__header dev-u-padding-default">
                  <h4 className="dev-u-padding-horizontal card-title">{item.webTitle}</h4>
                  
                </div>
                <div className="dev-card-base__body dev-card-base__body--grow dev-u-padding-default">
                  <div
                    className="dev-card-base__image"
                    onClick={() =>
                      history.push({
                        pathname: `/article/${item.id}`,
                        state: { detail: item },
                      })
                    }
                  >
                    {!isLoading && <Skeleton height={300} />}

                    <img
                      src={
                        item.fields.thumbnail
                          ? item.fields.thumbnail
                          : placeholderImage
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> 
        </div>*/}
      </div>
    </div>
  );
};

export default CardRelated;