import React from "react";
import NewsFeed from "../news/NewsFeed";
import QuakeFeed from "../news/QuakeFeed";
import VolcanoFeed from "../news/VolcanoFeed"
import WeatherWarningsFeed from "../news/WeatherWarningUKFeed"
import WhosFeed from "../news/WhoFeed"
import "./Header.scss";
const Header = () => {
  return (
    <div className="dev-u-padding-horizontal">
      <div className={`dev-grid-wrapper__div--column--0`}>
        <div>
          <a href="/" className="logo">
            <h1>React News</h1>
          </a>
        </div>
      </div>
      <div className="breakingNewsTicker">
        <span className="ticker-header">LIVE: </span>
        <ul>
          <NewsFeed />
          <WhosFeed />
          <WeatherWarningsFeed />
          <QuakeFeed />
          <VolcanoFeed />
          
        </ul>
        
        
      </div>
    </div>
  );
};
export default Header;
