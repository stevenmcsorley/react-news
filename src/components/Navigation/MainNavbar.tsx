import React from "react";
import "./Navigation.scss";
import Search from "../Search";
import { CategoryConfig } from "../../configs/CategoryConfig";

import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  const categories = CategoryConfig();

  return (
    <div className={`dev-grid-wrapper__div--column--0 dev-u-padding-default`}>
      <div>
        <nav>
          <ul className="menu">
            <li className="item">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            {categories.map((link) => {
              return (
                <li>
                  <NavLink exact to={`/${link.sectionId}`}>
                    {link.sectionName}
                  </NavLink>
                </li>
              );
            })}
            <li className="margin-left-auto search">
              <Search />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainNavbar;
