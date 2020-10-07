import React, { useState } from "react";
import "./Navigation.scss";
import Search from "../Search";
import { CategoryConfig } from "../../configs/CategoryConfig";

import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  const categories = CategoryConfig();
  const [open, setOpen] = useState(false);

  const isExpanded = open ? true : false;

  return (
    <div className={`dev-grid-wrapper__div--column--0 dev-u-padding-default`}>
      <div>
        <nav>
          <ul className="menu">
            <ul aria-expanded={isExpanded} onClick={() => setOpen(!open)}>
              <li>
                <p className="burger">Navigation</p>
              </li>
              <li className="item">
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              {categories.map((link) => {
                return (
                  <li className="item">
                    <NavLink exact to={`/${link.sectionId}`}>
                      {link.sectionName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
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
