import React, { FunctionComponent } from "react";
// import { useHistory } from "react-router-dom";
import "./Card.scss";

//  TODO: Needs refactor to uncouple API call inside here
// and extract interfaces

interface CardProps {
  loading?: boolean;
  image?: string;
  title?: string;
  body?: any;
  published?: string | Date | number;
}

const CardRelated: FunctionComponent<CardProps> = ({
  loading,
  image,
  title,
}) => {
  // const history = useHistory();

  const placeholderImage =
    "https://c.pxhere.com/photos/aa/fa/newspaper_news_information_read_press_daily_newspaper_paper_magazines-811573.jpg!d";
  return (
    <div>
      <div className="dev-card-base dev-flex-column dev-u-padding-default dev-u-margin-bottom">
        <div className="dev-card-base__header dev-u-padding-default">
          <h4 className="dev-u-padding-horizontal card-title">{title}</h4>
        </div>
        <div className="dev-card-base__body dev-card-base__body--grow dev-u-padding-default">
          <div
            className="dev-card-base__image"
            // onClick={() =>
            //   history.push({
            //     pathname: `/article/${item.id}`,
            //     state: { detail: item },
            //   })
            // }
          >
            <img src={image ? image : placeholderImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRelated;
