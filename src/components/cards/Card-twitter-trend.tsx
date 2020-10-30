import React, { FunctionComponent } from "react";

import "./Card.scss";

interface CardProps {
  url?: string;
  hashtag?: string;
  volume?: any;
}

const CardTwitterTrend: FunctionComponent<CardProps> = ({
  url,
  hashtag,
  volume,
}) => {

  return (
    <div>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {hashtag}
    </a>
    <p>{volume}</p>
  </div>
  );
};

export default CardTwitterTrend;
