import React from "react";
import NewsFeed from "../news/NewsFeed";
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
        <span className="ticker-header">Breaking News: </span>
        <NewsFeed />
      </div>
    </div>
  );
};
export default Header;
