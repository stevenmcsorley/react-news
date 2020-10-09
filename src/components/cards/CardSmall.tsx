import React, { FunctionComponent } from "react";
import "./Card.scss";

interface CardProps {
  loading: boolean;
  image: string;
  title: string;
  trailText: string;
  onClick: any | string;
}

interface Image {
  href: Links[];
}

interface Links {
  links: string;
}

const CardSmall: FunctionComponent<CardProps> = ({
  loading,
  image,
  title,
  trailText,
  children,
  onClick,
}) => {
  const placeholderImage =
    "https://c.pxhere.com/photos/aa/fa/newspaper_news_information_read_press_daily_newspaper_paper_magazines-811573.jpg!d";
  return (
    <article className="position-relative">
      <div className="card-small" onClick={onClick}>
        <div className="dev-grid-wrapper--offset--20-80">
          <div className="image-wrapper">
            <div className="image">
              <img src={image ? image : placeholderImage} alt="" />
            </div>
          </div>

          <div className="small-card--body">
            <h4 className="title">{title}</h4>
          </div>
        </div>
        <p className="trailText">{trailText}</p>
        {children && (
          <div className="card__body dev-u-padding-default">{children}</div>
        )}
      </div>
    </article>
  );
};

export default CardSmall;
