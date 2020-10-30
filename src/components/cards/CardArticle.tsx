import React, { FunctionComponent } from "react";
import "./Card.scss";

interface CardProps {
  loading?: boolean;
  image?: string;
  title?: string;
  body: any;
  published?: string | Date | number;
}

const CardArticle: FunctionComponent<CardProps> = ({
  body,
  title,
}) => {
  return (
    <div>
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
  );
};

export default CardArticle;