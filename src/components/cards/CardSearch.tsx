import React, { FunctionComponent } from "react";

import "./Card.scss";

interface CardProps {
  image?: string;
  loading: boolean;
  title: string;
  published: string | Date | number;
  onClick: any | string;
  pillarName: string;
  sectionName: string;
  summary: string;
}

interface Image {
  href: Links[];
}

interface Links {
  links: string;
}

const Card: FunctionComponent<CardProps> = ({
  loading,
  title,
  published,
  children,
  onClick,
  pillarName,
  sectionName,
  summary,
}) => {
  return (
    <article className="position-relative">
      <div className="dev-card-base dev-flex-column">
        <div className="dev-card-base__body dev-card-base__body--grow dev-u-padding-default">
          <div className="dev-grid-wrapper__div--column--0">
            <div>
              <h4 className="dev-u-padding-horizontal search-result" onClick={onClick}><span className="title">{title}</span> <span className="time">{published} ago</span> </h4>
              <p className="dev-u-padding-horizontal">{summary}</p>
              <p className="dev-u-padding-horizontal">
                {pillarName}, {sectionName}
              </p>
              
            </div>
   
          </div>
        </div>
        {children && (
          <div className="card__body dev-u-padding-default">{children}</div>
        )}
      </div>
    </article>
  );
};

export default Card;
