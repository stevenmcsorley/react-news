import React, { FunctionComponent } from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import SkeletonCard from "../../skeleton/Skeleton";
import "./Card.scss";

interface CardProps {
  data: any;
  loading?: boolean;
  title?: string;
  published?: string | Date | number;
}

interface Image {
  href: Links[];
}

interface Links {
  links: string;
}

interface Single {
  response: Response;
}

interface Response {
  content: Content;
  relatedContent: RelatedContent[];
  status: string;
  total: number;
  userTier: string;
}

interface Content {
  apiUrl?: string;
  fields: SingleFields;
  id?: string;
  isHosted?: boolean;
  pillarId?: string;
  pillarName?: string;
  sectionId?: string;
  sectionName?: string;
  type?: string;
  webPublicationDate?: string;
  webTitle?: string;
  webUrl?: string;
}

interface SingleFields {
  body: string;
  bodyText?: string;
  byline?: string;
  bylineHtml?: string;
  charCount?: string;
  firstPublicationDate?: string;
  headline?: string;
  isInappropriateForSponsorship?: string;
  isLive?: string;
  isPremoderated?: string;
  lang?: string;
  lastModified?: string;
  legallySensitive?: string;
  liveBloggingNow?: string;
  main?: string;
  productionOffice?: string;
  publication?: string;
  shortUrl?: string;
  shouldHideAdverts?: string;
  shouldHideReaderRevenue?: string;
  showAffiliateLinks?: string;
  showInRelatedContent?: string;
  standfirst?: string;
  thumbnail?: string;
  trailText?: string;
  wordcount?: string;
}

interface RelatedContent {
  apiUrl: string;
  fields: SingleFields;
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  references: [];
  sectionId: string;
  sectionName: string;
  tags: [];
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
}

const CardArticle: FunctionComponent<CardProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  //   const handleOnClick = () => history.push('/sample');

  const [query, setQuery] = useState<{ response: Response }>({
    response: {
      content: {
        fields: {
          body: "",
        },
      },
      relatedContent: [],
      status: "",
      total: 0,
      userTier: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await data;
        setQuery(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [data, query]);
  const placeholderImage =
    "https://c.pxhere.com/photos/aa/fa/newspaper_news_information_read_press_daily_newspaper_paper_magazines-811573.jpg!d";
  return (
    <div>
      {isLoading && <SkeletonCard count={10} grid={2} />}
      <div className={`dev-grid-wrapper__div--column--2 dev-u-padding-default`}>
        <div className="position-relative ">
          <div className="dev-card-base dev-flex-column dev-u-padding-default">
            <div className="dev-card-base__header dev-u-padding-default">
              <h4 className="dev-u-padding-horizontal card-title">{query.response.content.webTitle}</h4>
            </div>
            <div className="dev-card-base__body dev-card-base__body--grow dev-u-padding-default dev-u-align-left ">
              <p
                dangerouslySetInnerHTML={{
                  __html: query.response.content.fields.body,
                }}
              />
            </div>
          </div>
        </div>

        <div className="position-relative">
          <h4 className="dev-u-padding-default title">Related</h4>
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
      </div>
    </div>
  );
};

export default CardArticle;