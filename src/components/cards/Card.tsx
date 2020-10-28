import React, { FunctionComponent } from "react";
import Skeleton from "react-loading-skeleton";
import "./Card.scss";

interface CardProps {
  loading: boolean;
  image: string;
  title: string;
  published: string | Date | number;
  onClick: any | string;
}

interface Image {
  href: Links[];
}

interface Links {
  links: string;
}

const Card: FunctionComponent<CardProps> = ({
  loading,
  image,
  title,
  published,
  children,
  onClick,
}) => {
    const placeholderImage = "https://c.pxhere.com/photos/aa/fa/newspaper_news_information_read_press_daily_newspaper_paper_magazines-811573.jpg!d"
  return (
    <article className="position-relative">
      <div className="dev-card-base dev-flex-column">
        <div className="dev-card-base__body dev-card-base__body--grow">
        <span className="card-badge">{published}</span>
          <div className="dev-card-base__image" onClick={onClick}>
            {!loading && <Skeleton height={300} />}
            <img
              src={
                image
                  ? image
                  : placeholderImage
              }
              alt=""
            />
          </div>
        </div>
        <div className="dev-card-base__footer">
          <h4 className="dev-u-padding-horizontal card-title" title={title}>{title}</h4>
          
        </div>
        {children && (
          <div className="card__body dev-u-padding-default">{children}</div>
        )}
      </div>
    </article>
  );
};

export default Card;
