import React from 'react'

import {
    Link
  } from "react-router-dom";

const MainNavbar = () =>{

return(
    <div
    className={`dev-grid-wrapper__div--column--0 dev-u-padding-default`}
  >
    <div>
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/usa-news">USA</Link>
      </li>
      <li>
        <Link to="/uk-news">UK</Link>
      </li>
      <li>
        <Link to="/uk-entertainment">Entertainment</Link>
      </li>
      <li>
        <Link to="/uk-health">Health</Link>
      </li>
      <li>
        <Link to="/uk-science">Science</Link>
      </li>
      <li>
        <Link to="/uk-business">Business</Link>
      </li>
      <li>
        <Link to="/uk-sports">Sports</Link>
      </li>
      <li>
        <Link to="/uk-technology">Technology</Link>
      </li>
    </ul>
    </div>
    </div>
)
}


export default MainNavbar